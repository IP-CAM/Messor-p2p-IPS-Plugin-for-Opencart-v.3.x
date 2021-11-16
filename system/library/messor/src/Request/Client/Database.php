<?php

namespace src\Request\Client;

use src\Request\toServer;
use src\Request\toPeer;
use src\Utils\File;
use src\Config\Path;
use src\Utils\Parser;

class Database
{
    private $trustServer;
    private $servers;
    private $peerToPeer;
    private $peer;
    private $log;

    public function __construct($trustServer, $servers, toPeer $peerToPeer, toServer $peer, $log)
    {
        $this->trustServer = $trustServer;
        $this->servers = $servers;
        $this->peerToPeer = $peerToPeer;
        $this->peer = $peer;
        $this->log = $log;
    }

    /**
     * Проверяет версию базы данных и при наличие новой обновляет
     *
     * @return void
     */
    public function updateDatabase($start)
    {
        $validVersion = $this->trustServer['database_version'];
        $serverUrl = $this->trustServer['server_url'];
        $version = File::read(Path::VERSION_BD);
        if ($version != $validVersion || !file_exists(Path::PATH_DATABASE . $version)) {
            $this->log .= "You have old version database.\n";
            $this->log .= "Your database version:   " . $version . "\n";
            $this->log .= "Actual database version: " . $validVersion . "\n";
            $this->log .= "Starting update database....\n";
            $downloadLinks = $this->getPeerIsDatabase($validVersion, $serverUrl);
            $peerList = Parser::toArray(File::read(Path::PEERS));
            $this->log .= "\n";
            $this->log .= " Getting " . count($downloadLinks) . " download url.\n";
            $this->log .= " Download database ....\n";
            $newDatabase = $this->getPeerForSend($peerList, $validVersion);
            $this->log .= " Download: " . strlen($newDatabase['database']) . " bytes.\n";
            $filePathDatabase = Path::PATH_DATABASE . $validVersion;
            if (File::write($filePathDatabase, $newDatabase['database'])) {
                $this->log .= " Save database at: $filePathDatabase\n";
            } else {
                $this->log .= "Fatal error - update aborted!\n";
                $this->log .= "Error: save database at: $filePathDatabase\n";
                $this->log .= "Check permission on folder " . Path::PATH_DATABASE . "\n";
                return;
            }
            if ($this->checkSumHash($validVersion, $filePathDatabase)) {
                $this->unpackOtherFormat();
                $this->deleteOldDatabase($version);
                $this->peer->status();
            } else {
                $this->log .= " Attention hash sum mis match!\n";
                $this->log .= " Update database aborted.\n";
                $this->log .= " Remove broken database $filePathDatabase\n";
                unlink($filePathDatabase);
            }
        } else {
            $this->log .= "You have last version of database: $version\n";
        }
        $end = microtime(true);
        $result = $end - $start;
        $this->log .=  "[*] End work, worked time " . round($result, 2) . " second\n\n\n";
        File::clear(Path::SYNC_LAST);
        File::write(Path::SYNC_LAST, time());
        return $this->log;
    }

    /**
     * Получает пиры у которых есть нужная версия базы
     *
     * @param [string] $validVersion
     * @return array
     */
    private function getPeerIsDatabase($validVersion, $serverUrl)
    {
        $downloadLinks = array();
        $this->log .= " Get peer list from: {$serverUrl}\t";
        $response = $this->peer->getPeerList($validVersion);
        if ($response) {
            if ($response->getStatus() == 'ok') {
                $dataResponse = $response->getResponseData();
                if (!empty($dataResponse['peer_list'])) {
                    $this->log .= " ok. " . strlen($dataResponse['peer_list']) . " bytes\n";
                    $downloadLinks = array_merge($downloadLinks, explode("\n", $dataResponse['peer_list']));
                } else {
                    $this->log .= "Server response status {$response->getStatus()} - {$response->getResponseData()}\n";
                }
            } else {
                $this->log .= "Server response status {$response->getStatus()} - {$response->getResponseData()}\n";
            }
        } else {
            $this->log .= "Error $serverUrl - offline. Check your network settings or use other server\n";
        }
        $downloadLinks = array_unique($downloadLinks);
        shuffle($downloadLinks);

        $savedPeerList = Parser::toArray(File::read(Path::PEERS));
        foreach ($downloadLinks as $item) {
            $peer = substr($item, 0, strpos($item, '/', 8));
            $newDownloadLinks[$peer] = $item;
        }
        foreach ($savedPeerList as $item) {
            $peer = substr($item, 0, strpos($item, '/', 8));
            $newSavePeerList[$peer] = $item;
        }
        $mergeList = $newDownloadLinks + $newSavePeerList;
        $savedPeerList = [];
        foreach ($mergeList as $value) {
            $savedPeerList[] = $value;
        }
        $savedPeerList = array_slice($savedPeerList, 0, 300);
        File::clear(Path::PEERS);
        if (File::write(Path::PEERS, (implode("\n", $savedPeerList)))) {
            $this->log .= "Peer list updated success.\n";
        } else {
            $this->log .= "Error update peer list check permission on file " . Path::PEERS . "\n";
        }

        foreach ($downloadLinks as $k => $peerUrl) {
            $this->log .= " [ $k ] $peerUrl\n";
        }
        return $downloadLinks;
    }

    /**
     * Получение пира или сервера для отправки
     *
     * @param [array] $downloadLinks
     * @param [string] $validVersion
     * @return void
     */
    private function getPeerForSend($downloadLinks, $validVersion)
    {
        $check_server_list = array();
        $serverList = $this->servers->getServerList();
        foreach ($serverList as $server) $check_server_list[] = $server[0];
        foreach ($downloadLinks as $peerUrl) {
            if (!in_array($peerUrl, $check_server_list)) {
                $this->log .= " Download from peer $peerUrl\n";
                $this->peerToPeer->request->setServer($peerUrl);
                $response = $this->peerToPeer->getDatabase($validVersion);
                $newDatabase = $response->getResponseData();
            } else {
                $this->log .= " Download from server $peerUrl\n";
                $this->peer->request->setServer($peerUrl);
                $response = $this->peer->getDatabase($validVersion);
                $newDatabase = $response->getResponseData();
            }

            if (!isset($newDatabase['database']) or empty($newDatabase['database'])) {
                $this->log .= " Error download: database empty.\n";
                continue;
            } else {
                return $newDatabase;
            }
        }
    }

    /**
     * Проверка чек суммы пришедшей базы и версии хранящейся у пира или сервера
     *
     * @param [string] $validVersion
     * @param [string] $filePathDatabase
     * @return bool
     */
    private function checkSumHash($validVersion, $filePathDatabase)
    {
        $checksum = hash_file('sha256', $filePathDatabase);
        $validVersionArray = Parser::versionDatabase($validVersion);
        $this->log .= " Hash  sum: $checksum\n";
        $this->log .= " Valid sum: {$validVersionArray['hash']}\n";
        if ($checksum == $validVersionArray['hash']) {
            $this->log .= " Download success hash sum valid.\n";
            $this->log .= " Update database version to: $validVersion success!\n";
            File::clear(Path::VERSION_BD);
            File::write(Path::VERSION_BD, $validVersion);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Распаковка базы в другие форматы
     *
     * @return void
     */
    public function unpackOtherFormat()
    {
        $database   = Parser::toArrayDatabase(Path::PATH_DATABASE . File::read(Path::VERSION_BD));
        $this->log .= "Read database\t" . count($database['ip']) . " ip\n";
        $this->log .= "Generate files iptables/htaccess/iplist\n";
        File::clear(Path::DB_IPTABLES);
        File::clear(Path::DB_HTACCESS);
        File::clear(Path::DB_IPLIST);
        foreach ($database['ip'] as $ip) {
            File::write(Path::DB_IPTABLES,  "iptables -I INPUT -s " . trim($ip) . " -j DROP\n");
            File::write(Path::DB_HTACCESS, "Deny from " .  trim($ip) . "\n");
            File::write(Path::DB_IPLIST, trim($ip) . "\n");
        }
    }

    /**
     * Удаление старой базы
     *
     * @param [string] $version
     * @return void
     */
    private function deleteOldDatabase($version)
    {
        $oldDatabase = Path::PATH_DATABASE . $version;
        $newVersion = File::read(Path::VERSION_BD);
        if ($version != $newVersion) {
            $this->log .= " Remove old database $oldDatabase\t";
            if ($version != false) {
                if (unlink($oldDatabase)) {
                    $this->log .= "[ok]\n";
                } else {
                    $this->log .= "[error]\nCheck permission or remove old database manual $oldDatabase\n";
                }
            }
        }
    }
}
