(function(){"use strict";var t={590:function(t,a,e){var l=e(9963),n=e(655),i=e(6252),o=e(2262),s=e(3577),r={class:"ms-form__col"},u=["onClick"],c={class:"current"},d={class:"list"},_=["onClick"],m=(0,i.aZ)({__name:"CustomSelect",props:{required:{type:Boolean,default:!1},elements:{type:Object,required:!0},modelValue:{type:Object}},emits:["update:modelValue"],setup:function(t,a){var e=a.emit,n=(0,o.iH)(void 0),m=function(t){e("update:modelValue",t)},p=function(){var t;null===(t=n.value)||void 0===t||t.classList.remove("open")},f=function(){var t,a;(null===(t=n.value)||void 0===t?void 0:t.classList.contains("open"))?p():(null===(a=n.value)||void 0===a||a.classList.add("open"),window.addEventListener("click",p,{once:!0}))};return function(a,e){var o;return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("span",{class:(0,s.C_)([{required:t.required},"ms-form-control__label"])},[(0,i.WI)(a.$slots,"default")],2),(0,i._)("div",{ref_key:"rootElement",ref:n,style:(0,s.j5)({borderColor:a.$attrs.style.borderColor?"".concat(a.$attrs.style.borderColor," !important"):""}),class:"nice-select ms-form-control ms-form-control-md",tabindex:"0",onClick:(0,l.iM)(f,["stop"])},[(0,i._)("span",c,(0,s.zw)((null===(o=t.modelValue)||void 0===o?void 0:o.title)||""),1),(0,i._)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.elements,(function(a){var e;return(0,i.wg)(),(0,i.iD)("li",{key:a.value,class:(0,s.C_)([{selected:(null===(e=t.modelValue)||void 0===e?void 0:e.value)===a.value},"option"])},[(0,i._)("button",{onClick:function(t){return m(a)}},(0,s.zw)(a.title),9,_)],2)})),128))])],12,u)])}}}),p=e(3744);const f=(0,p.Z)(m,[["__scopeId","data-v-3f124b24"]]);var v=f,g=e(7061),h=e(6086),w=e(8127),U=document.createElement("input");U.type="email";var b="?route=".concat("extension/module/messor/","requestToPeer"),y="".concat("extension/module/messor/","Api"),D=[{value:"en",title:"English"},{value:"ru",title:"Russian"}];function k(t){return Object.entries(t).map((function(t){var a=t[0],e=t[1];return{value:a,title:e}}))}function S(t){return t.map((function(t){var a=t[0],e=t[1],l=t[2];return{value:a,title:"".concat(e," - [").concat(a,"] (").concat(l,")")}}))}var x=(0,h.Q_)("registration",{state:function(){return{loading:!1,incorrectInstallationData:!1,userEmailInvalid:!1,emailInvalid:!1,installationErrorText:"",initialData:{algorithm_encrypt:{},protocol:"https://",writeable:!0,host:"",on_cloudflare:!1,off_cloudflare:!1,version_plugin:"",admin_login:"",admin_password:"",network_password:"",country:{},servers:[],user_token:"",name:"",email:"",op_version:"",success:"",registered:!1,peerUrl:"",successRedirectUrl:""},installationData:{user_email:"",user_password:"",admin_login:"",admin_password:"",reg_network_password:"",url:"",name:"",company:"",email:"",phone:"",about:"",cms:"no cms",cms_version:"1",random_data:"",plugin_version:"",country:null,language:null,encryptionAlgorithm:null,server:null,i_agree:!1},installationConfig:{Network_id:"",Network_password:"",Encryption_alg:"",Encryption_key:"",Mess_salt:"",Admin_login:"",Admin_password:"",Useragent:""}}},getters:{offCloudflare:function(t){return t.initialData.off_cloudflare},onCloudflare:function(t){return t.initialData.on_cloudflare},writeable:function(t){return t.initialData.writeable},countries:function(t){return k(t.initialData.country)},languages:function(){return D},servers:function(t){return S(t.initialData.servers)},encryptionAlgorithms:function(t){return k(t.initialData.algorithm_encrypt)},peerUrl:function(t){return t.initialData.peerUrl},successRedirectUrl:function(t){return t.initialData.successRedirectUrl},pluginVersion:function(t){return t.initialData.version_plugin}},actions:{fetchInitialState:function(){return(0,n.mG)(this,void 0,Promise,(function(){var t,a,e,l;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.loading=!0,[4,(0,w.Nv)(y,"register_data_page")];case 1:return t=n.sent(),a=t.data,e=t.status,"ok"!==e.toLocaleLowerCase()?(this.loading=!1,[2]):(this.initialData.algorithm_encrypt=a.algorithm_encrypt,this.initialData.protocol=a.protocol,this.initialData.writeable=a.writeable,this.initialData.host=a.host,this.initialData.on_cloudflare=a.on_cloudflare,this.initialData.off_cloudflare=a.off_cloudflare,this.initialData.version_plugin=a.version_plugin,this.initialData.admin_login=a.admin_login,this.initialData.admin_password=a.admin_password,this.initialData.network_password=a.network_password,this.initialData.country=a.country,this.initialData.servers=a.servers,this.initialData.user_token=a.user_token,this.initialData.name=a.name,this.initialData.email=a.email,this.initialData.op_version=a.op_version,this.initialData.success=a.success,this.initialData.successRedirectUrl=a.success,this.initialData.peerUrl="".concat((0,w.kG)()).concat(b),l=this.servers[0],this.installationData.server=l,this.installationData.encryptionAlgorithm=this.encryptionAlgorithms.find((function(t){return"aes128"===t.value}))||this.encryptionAlgorithms.find((function(t){return"rc4"===t.value}))||this.encryptionAlgorithms[0],this.installationData.reg_network_password=a.network_password,this.installationData.name=a.name,this.installationData.email=a.email,this.installationData.url=this.initialData.peerUrl,this.installationData.admin_login=a.admin_login,this.installationData.admin_password=a.admin_password,this.installationData.cms_version=a.op_version,this.loading=!1,[2])}}))}))},validateInstallationData:function(){var t,a,e,l;U.value=this.installationData.user_email,this.userEmailInvalid=!U.checkValidity(),U.value=this.installationData.email,this.emailInvalid=!U.checkValidity(),this.incorrectInstallationData=!this.installationData.i_agree||!this.installationData.user_email||!this.installationData.user_password||!this.installationData.name||!/^[a-zA-Z0-9 ]{3,25}$/.test(this.installationData.name)||this.installationData.phone&&!/^[0-9\-+ ]{5,15}$/.test(this.installationData.phone)||!this.installationData.email||!(null===(t=this.installationData.country)||void 0===t?void 0:t.value)||!(null===(a=this.installationData.language)||void 0===a?void 0:a.value)||!(null===(e=this.installationData.server)||void 0===e?void 0:e.value)||!(null===(l=this.installationData.encryptionAlgorithm)||void 0===l?void 0:l.value)||!this.installationData.reg_network_password||this.userEmailInvalid||this.emailInvalid||!this.initialData.writeable},register:function(){var t,a,e,l,i;return(0,n.mG)(this,void 0,Promise,(function(){var o,s,r;return(0,n.Jh)(this,(function(u){switch(u.label){case 0:return this.validateInstallationData(),this.incorrectInstallationData?[2]:(this.loading=!0,[4,(0,w.Nv)(y,"register",(0,n.pi)((0,n.pi)({},this.installationData),{country:null===(t=this.installationData.country)||void 0===t?void 0:t.value,encryption_alg:null===(a=this.installationData.encryptionAlgorithm)||void 0===a?void 0:a.value,server_install_url:null===(e=this.installationData.server)||void 0===e?void 0:e.value,encryptionAlgorithm:void 0,language:null===(l=this.installationData.language)||void 0===l?void 0:l.value,lang:null===(i=this.installationData.language)||void 0===i?void 0:i.value}))]);case 1:return o=u.sent(),s=o.status,r=o.data,this.initialData.registered="ok"===s.toLocaleLowerCase(),this.initialData.registered?this.installationConfig=(0,n.pi)((0,n.pi)({},r.config),{Admin_password:this.initialData.admin_password}):this.installationErrorText=r.text,this.loading=!1,[2]}}))}))},turnOffCloudflare:function(){return(0,n.mG)(this,void 0,Promise,(function(){var t;return(0,n.Jh)(this,(function(a){switch(a.label){case 0:return this.initialData.off_cloudflare?(this.loading=!0,[4,(0,w.Nv)(y,"off_cloudflare")]):[2];case 1:return t=a.sent().status,this.initialData.off_cloudflare=!("ok"===t.toLocaleLowerCase()),this.loading=!1,[2]}}))}))}}}),I={class:"fancybox-container fancybox-is-open",role:"dialog",style:{"transition-duration":"366ms"},tabindex:"-1"},V=(0,i._)("div",{class:"fancybox-bg"},null,-1),C={class:"fancybox-inner"},z={class:"fancybox-stage"},q={class:"fancybox-slide fancybox-slide--html fancybox-slide--current fancybox-slide--complete"},j={class:"ms-modal--double fancybox-content",style:{display:"inline-block"}},A={class:"ms-modal ms-modal-alert"},O={class:"ms-modal__content ms-modal__content-centered"},W={class:"ms-modal-alert__icon"},E=["src"],B={class:"ms-modal-alert__title"},L={class:"ms-modal__controls ms-modal__controls--centered"},P=["href"],R={class:"ms-modal"},Z={class:"ms-modal__title"},$={class:"ms-modal__title-item"},H={key:0,class:"ms-modal__content ms-modal__content-hidden",style:{display:"block"}},T={class:"ms-modal__table"},N={class:"js-circle"},F=(0,i._)("button",{class:"fancybox-button fancybox-close-small",title:"Close",type:"button"},[(0,i._)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"})])],-1),M=(0,i._)("div",{class:"fancybox-caption fancybox-caption--separate"},[(0,i._)("div",{class:"fancybox-caption__body"})],-1),G=(0,i.aZ)({__name:"InstallationCompletedModal",setup:function(t){var a=x(),l=(0,o.iH)(!1);return function(t,n){return(0,i.wg)(),(0,i.iD)("div",I,[V,(0,i._)("div",C,[(0,i._)("div",z,[(0,i._)("div",q,[(0,i._)("div",j,[(0,i._)("div",A,[(0,i._)("div",O,[(0,i._)("span",W,[(0,i._)("img",{src:e(6343),alt:""},null,8,E)]),(0,i._)("span",B,(0,s.zw)((0,o.SU)(g.I)("install_completed")),1),(0,i._)("p",null,(0,s.zw)((0,o.SU)(g.I)("install_congratulations")),1),(0,i._)("div",L,[(0,i._)("a",{href:(0,o.SU)(a).initialData.successRedirectUrl,class:"ms-btn ms-btn-primary"},(0,s.zw)((0,o.SU)(g.I)("btn_close")),9,P)])])]),(0,i._)("div",R,[(0,i._)("div",Z,[(0,i._)("span",$,(0,s.zw)((0,o.SU)(g.I)("install_user_data")),1),(0,i._)("button",{class:(0,s.C_)([{active:l.value},"ms-modal__content-hidden-pull"]),onClick:n[0]||(n[0]=function(t){return l.value=!l.value})},null,2)]),l.value?((0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("table",T,[(0,i._)("tbody",N,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.entries((0,o.SU)(a).installationConfig),(function(t){var a=t[0],e=t[1];return(0,i.wg)(),(0,i.iD)("tr",{key:a},[(0,i._)("td",null,(0,s.zw)(a),1),(0,i._)("td",null,(0,s.zw)(e),1)])})),128))])])])):(0,i.kq)("",!0)]),F])])]),M])])}}});const J=G;var Y=J,K={class:"ms-form__col"},Q=["for"],X=["id","autocomplete","placeholder","readonly","type","value"],tt=(0,i.aZ)({__name:"FormInputFiled",props:{modelValue:{type:String},required:{type:Boolean,default:!1},fieldId:{type:String,required:!0},hasError:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},autocomplete:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},trimOnBlur:{type:Boolean,default:!0}},emits:["update:modelValue"],setup:function(t,a){var e=a.expose,l=a.emit,n=(0,o.iH)(void 0),r=function(){var t;return Boolean(null===(t=n.value)||void 0===t?void 0:t.checkValidity())},u=function(t){var a=t.target;l("update:modelValue",a.value.trim())};return e({checkValidity:r}),function(a,e){return(0,i.wg)(),(0,i.iD)("div",K,[a.$slots.default?((0,i.wg)(),(0,i.iD)("span",{key:0,class:(0,s.C_)([{required:t.required},"ms-form-control__label"])},[(0,i.WI)(a.$slots,"default")],2)):(0,i.kq)("",!0),(0,i._)("div",{class:(0,s.C_)([{"ms-form-control__field-with-icon":Boolean(a.$slots.icon)},"ms-form-control__field"])},[(0,i.WI)(a.$slots,"icon"),(0,i._)("label",{for:t.fieldId},[(0,i._)("input",{id:t.fieldId,ref_key:"field",ref:n,autocomplete:t.autocomplete,placeholder:t.placeholder,readonly:t.readonly,style:(0,s.j5)({borderColor:t.hasError?"red !important":""}),type:t.type,value:t.modelValue,class:"ms-form-control ms-form-control-md",onBlur:u,onInput:e[0]||(e[0]=function(t){return a.$emit("update:modelValue",t.target.value)})},null,44,X)],8,Q)],2)])}}});const at=(0,p.Z)(tt,[["__scopeId","data-v-0c0a60a4"]]);var et=at,lt=e(434),nt=e(4312),it=e(2718),ot=e(2180),st={class:"ms-wrapper"},rt={class:"ms-container"},ut={key:0},ct={class:"ms-alert ms-alert-primary"},dt={key:1},_t={class:"ms-alert ms-alert-danger",style:{display:"flex","flex-direction":"column"}},mt={key:2},pt={class:"ms-alert ms-alert-danger"},ft={key:3},vt={class:"ms-alert ms-alert-danger"},gt={key:4},ht={class:"ms-alert ms-alert-danger"},wt={class:"ms-page"},Ut={class:"ms-page-row ms-page-row-fluid"},bt={class:"ms-page-col ms-page-col-fluid"},yt={class:"ms-page-box ms-page-box--padding"},Dt={class:"ms-page-box__item"},kt={class:"ms-page-box__title ms-page-box__title-lg"},St={class:"ms-page-box__title-block"},xt={class:"ms-page-box__title-block__icon"},It=["src"],Vt={class:"ms-page-box__title-block__txt"},Ct=(0,i._)("span",{class:"h3"},"Messor Network Account",-1),zt=(0,i._)("a",{href:"https://messor.network/Signup/"},"messor.network/signup",-1),qt={class:"ms-btn-icon ms-btn-icon-lg ms-btn-icon-with-txt",href:"https://messor.network/Support/?cms=opencart"},jt=(0,i._)("svg",null,[(0,i._)("use",{"xlink:href":"#icon-support"})],-1),At={class:"ms-btn-icon-with-txt__title"},Ot={class:"ms-page-box__content ms-page-box__content-padding"},Wt={class:"ms-form"},Et=(0,i._)("span",{class:"ms-form-control__icon"},[(0,i._)("svg",null,[(0,i._)("use",{"xlink:href":"#icon-account"})])],-1),Bt=(0,i._)("span",{class:"ms-form-control__icon"},[(0,i._)("svg",null,[(0,i._)("use",{"xlink:href":"#icon-password"})])],-1),Lt={class:"ms-form__col ms-form__col-fluid"},Pt={class:"ms-checkbox ms-checkbox-xs",for:"license-agreement"},Rt=(0,i._)("span",null,null,-1),Zt=[Rt],$t={class:"ms-checkbox__txt"},Ht={href:"https://messor.network/Licens/"},Tt=(0,i.Uk)(" & "),Nt={href:"https://messor.network/UserAgreement/"},Ft={class:"ms-page-col ms-page-col-wide"},Mt={class:"ms-page-box ms-page-box--padding"},Gt={class:"ms-page-box__item"},Jt={class:"ms-page-box__title ms-page-box__title-lg"},Yt={class:"ms-page-box__title-block"},Kt=["src"],Qt={class:"ms-page-box__title-block__txt"},Xt={class:"h3"},ta={href:"https://messor.network/PrivacyPolicy/"},aa={class:"ms-page-box__content ms-page-box__content-padding"},ea={class:"ms-form"},la=(0,i.Uk)(" Email "),na={class:"ms-page-col ms-page-col-narrow"},ia={class:"ms-page-box ms-page-box--padding"},oa={class:"ms-page-box__item"},sa={class:"ms-page-box__title ms-page-box__title-lg"},ra={class:"ms-page-box__title-block"},ua=["src"],ca={class:"ms-page-box__title-block__txt"},da={class:"h3"},_a={class:"ms-page-box__content ms-page-box__content-padding"},ma={class:"ms-form"},pa=(0,i.Uk)(" Url "),fa={class:"ms-page-col ms-page-col-fluid"},va={class:"ms-page-box"},ga=(0,i._)("svg",null,[(0,i._)("use",{"xlink:href":"#icon-rocket"})],-1),ha=(0,i.aZ)({__name:"MessorRegistration",setup:function(t){var a=this,r=(0,it.s)(),u=(0,i.Fl)((function(){return r.errorText})),c=x(),d=(0,o.iH)(!0),_=(0,o.iH)(!1);return(0,i.YP)((function(){return c.installationData}),(function(){c.incorrectInstallationData=!1}),{deep:!0}),(0,i.bv)((function(){return(0,n.mG)(a,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return(0,g.g)(),[4,c.fetchInitialState()];case 1:return t.sent(),[2]}}))}))})),function(t,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",st,[(0,i._)("div",rt,[(0,o.SU)(c).onCloudflare&&!(0,o.SU)(c).offCloudflare?((0,i.wg)(),(0,i.iD)("div",ut,[(0,i._)("div",ct,[(0,i._)("p",null,(0,s.zw)((0,o.SU)(g.I)("system_settings_cloudflare_on")),1)])])):(0,i.kq)("",!0),(0,o.SU)(c).offCloudflare?((0,i.wg)(),(0,i.iD)("div",dt,[(0,i._)("div",_t,[(0,i._)("p",null,(0,s.zw)((0,o.SU)(g.I)("system_settings_cloudflare_off")),1),(0,i._)("button",{class:"ms-btn ms-btn-primary",style:{"align-self":"flex-end"},onClick:a[0]||(a[0]=function(){for(var t,a=[],e=0;e<arguments.length;e++)a[e]=arguments[e];return(0,o.SU)(c).turnOffCloudflare&&(t=(0,o.SU)(c)).turnOffCloudflare.apply(t,a)})}," Off ")])])):(0,i.kq)("",!0),(0,o.SU)(c).installationErrorText?((0,i.wg)(),(0,i.iD)("div",mt,[(0,i._)("div",pt,[(0,i._)("p",null,(0,s.zw)((0,o.SU)(c).installationErrorText),1)])])):(0,i.kq)("",!0),(0,o.SU)(c).writeable?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",ft,[(0,i._)("div",vt,[(0,i._)("p",null,(0,s.zw)((0,o.SU)(g.I)("directory_is_not_writable")),1)])])),(0,o.SU)(c).incorrectInstallationData?((0,i.wg)(),(0,i.iD)("div",gt,[(0,i._)("div",ht,[(0,i._)("p",null,(0,s.zw)((0,o.SU)(g.I)("notice_not_all_fields_filled")),1)])])):(0,i.kq)("",!0),(0,i._)("div",wt,[(0,i._)("div",Ut,[(0,i._)("div",bt,[(0,i._)("div",yt,[(0,i._)("div",Dt,[(0,i._)("div",kt,[(0,i._)("div",St,[(0,i._)("span",xt,[(0,i._)("img",{src:e(6343),alt:""},null,8,It)]),(0,i._)("span",Vt,[Ct,(0,i._)("span",null,[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_register"))+" ",1),zt])])]),(0,i._)("a",qt,[jt,(0,i._)("span",At,(0,s.zw)((0,o.SU)(g.I)("install_support")),1)])]),(0,i._)("div",Ot,[(0,i._)("div",Wt,[(0,i.Wm)(et,{ref:"userEmailRef","field-id":"data__user_email",modelValue:(0,o.SU)(c).installationData.user_email,"onUpdate:modelValue":a[1]||(a[1]=function(t){return(0,o.SU)(c).installationData.user_email=t}),"has-error":(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.user_email||(0,o.SU)(c).userEmailInvalid,autocomplete:"email",required:"",type:"email"},{icon:(0,i.w5)((function(){return[Et]})),default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_user_email"))+" ",1)]})),_:1},8,["modelValue","has-error"]),(0,i.Wm)(et,{"field-id":"data__user_password",modelValue:(0,o.SU)(c).installationData.user_password,"onUpdate:modelValue":a[2]||(a[2]=function(t){return(0,o.SU)(c).installationData.user_password=t}),"has-error":(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.user_password,autocomplete:"current-password",required:"",type:"password"},{icon:(0,i.w5)((function(){return[Bt]})),default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_user_password"))+" ",1)]})),_:1},8,["modelValue","has-error"]),(0,i._)("div",Lt,[(0,i._)("label",Pt,[(0,i.wy)((0,i._)("input",{id:"license-agreement","onUpdate:modelValue":a[3]||(a[3]=function(t){return(0,o.SU)(c).installationData.i_agree=t}),type:"checkbox"},null,512),[[l.e8,(0,o.SU)(c).installationData.i_agree]]),(0,i._)("span",{style:(0,s.j5)({borderColor:(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.i_agree?"red":""}),class:"ms-checkbox__icon"},Zt,4),(0,i._)("span",$t,[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_agree"))+" ",1),(0,i._)("a",Ht,(0,s.zw)((0,o.SU)(g.I)("install_agree_license")),1),Tt,(0,i._)("a",Nt,(0,s.zw)((0,o.SU)(g.I)("install_agree_user")),1)])])])])])])])]),(0,i._)("div",Ft,[(0,i._)("div",Mt,[(0,i._)("div",Gt,[(0,i._)("div",Jt,[(0,i._)("div",Yt,[(0,i._)("button",{class:"ms-page-box__title-block__icon ms-page-box__title-block__icon-btn",onClick:a[4]||(a[4]=function(t){return d.value=!d.value})},[(0,i._)("img",{src:e(967),alt:""},null,8,Kt)]),(0,i._)("span",Qt,[(0,i._)("span",Xt,(0,s.zw)((0,o.SU)(g.I)("install_about")),1),(0,i._)("span",null,[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_about_desc"))+" ",1),(0,i._)("a",ta,(0,s.zw)((0,o.SU)(g.I)("install_politics")),1)])])]),(0,i._)("button",{class:(0,s.C_)([{active:d.value},"ms-page-box__content-hidden-pull"]),onClick:a[5]||(a[5]=function(t){return d.value=!d.value})},null,2)]),(0,i.wy)((0,i._)("div",aa,[(0,i._)("div",ea,[(0,i.Wm)(et,{"field-id":"data__name",modelValue:(0,o.SU)(c).installationData.name,"onUpdate:modelValue":a[6]||(a[6]=function(t){return(0,o.SU)(c).installationData.name=t}),"has-error":(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.name,placeholder:"Darlene Robertson",required:""},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_name")),1)]})),_:1},8,["modelValue","has-error"]),(0,i.Wm)(et,{"field-id":"data__phone",modelValue:(0,o.SU)(c).installationData.phone,"onUpdate:modelValue":a[7]||(a[7]=function(t){return(0,o.SU)(c).installationData.phone=t}),placeholder:"+1 252 555-0126"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_phone")),1)]})),_:1},8,["modelValue"]),(0,i.Wm)(et,{"field-id":"data__email",ref:"emailRef",modelValue:(0,o.SU)(c).installationData.email,"onUpdate:modelValue":a[8]||(a[8]=function(t){return(0,o.SU)(c).installationData.email=t}),"has-error":(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.email||(0,o.SU)(c).emailInvalid,placeholder:"mrvladchumak@gmail.com",required:"",type:"email"},{default:(0,i.w5)((function(){return[la]})),_:1},8,["modelValue","has-error"]),(0,i.Wm)(et,{"field-id":"data__company",modelValue:(0,o.SU)(c).installationData.company,"onUpdate:modelValue":a[9]||(a[9]=function(t){return(0,o.SU)(c).installationData.company=t}),placeholder:"Solar City"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_company")),1)]})),_:1},8,["modelValue"]),(0,i.Wm)(v,{modelValue:(0,o.SU)(c).installationData.country,"onUpdate:modelValue":a[10]||(a[10]=function(t){return(0,o.SU)(c).installationData.country=t}),elements:(0,o.SU)(c).countries,style:(0,s.j5)({borderColor:(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.country?"red":""}),class:"ms-form__col-fluid",required:""},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_country")),1)]})),_:1},8,["modelValue","elements","style"]),(0,i.Wm)(v,{modelValue:(0,o.SU)(c).installationData.language,"onUpdate:modelValue":a[11]||(a[11]=function(t){return(0,o.SU)(c).installationData.language=t}),elements:(0,o.SU)(c).languages,style:(0,s.j5)({borderColor:(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.language?"red":""}),class:"ms-form__col-fluid",required:""},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_lang")),1)]})),_:1},8,["modelValue","elements","style"]),(0,i.Wm)(et,{"field-id":"data__about",modelValue:(0,o.SU)(c).installationData.about,"onUpdate:modelValue":a[12]||(a[12]=function(t){return(0,o.SU)(c).installationData.about=t}),class:"ms-form__col-fluid"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_about_company")),1)]})),_:1},8,["modelValue"])])],512),[[l.F8,d.value]])])])]),(0,i._)("div",na,[(0,i._)("div",ia,[(0,i._)("div",oa,[(0,i._)("div",sa,[(0,i._)("div",ra,[(0,i._)("button",{class:"ms-page-box__title-block__icon ms-page-box__title-block__icon-btn",onClick:a[13]||(a[13]=function(t){return _.value=!_.value})},[(0,i._)("img",{src:e(7163),alt:""},null,8,ua)]),(0,i._)("span",ca,[(0,i._)("span",da,(0,s.zw)((0,o.SU)(g.I)("install_setting")),1),(0,i.Uk)(" "+(0,s.zw)((0,o.SU)(g.I)("install_setting_desc"))+". ",1)])]),(0,i._)("button",{class:(0,s.C_)([{active:_.value},"ms-page-box__content-hidden-pull"]),onClick:a[14]||(a[14]=function(t){return _.value=!_.value})},null,2)]),(0,i.wy)((0,i._)("div",_a,[(0,i._)("div",ma,[(0,i.Wm)(v,{modelValue:(0,o.SU)(c).installationData.server,"onUpdate:modelValue":a[15]||(a[15]=function(t){return(0,o.SU)(c).installationData.server=t}),elements:(0,o.SU)(c).servers,style:(0,s.j5)({borderColor:(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.server?"red":""}),class:"ms-form__col-fluid",required:""},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_server")),1)]})),_:1},8,["modelValue","elements","style"]),(0,i.Wm)(et,{"field-id":"data__peer-url",modelValue:(0,o.SU)(c).initialData.peerUrl,"onUpdate:modelValue":a[16]||(a[16]=function(t){return(0,o.SU)(c).initialData.peerUrl=t}),"has-error":(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).initialData.peerUrl,class:"ms-form__col-fluid",placeholder:"http://185.255.132.184:500/Peer.php",readonly:"",required:""},{default:(0,i.w5)((function(){return[pa]})),_:1},8,["modelValue","has-error"]),(0,i.Wm)(v,{modelValue:(0,o.SU)(c).installationData.encryptionAlgorithm,"onUpdate:modelValue":a[17]||(a[17]=function(t){return(0,o.SU)(c).installationData.encryptionAlgorithm=t}),elements:(0,o.SU)(c).encryptionAlgorithms,style:(0,s.j5)({borderColor:(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.encryptionAlgorithm?"red":""}),class:"ms-form__col-fluid",required:""},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_encr_alg")),1)]})),_:1},8,["modelValue","elements","style"]),(0,i.Wm)(et,{"field-id":"data__reg_network_password",modelValue:(0,o.SU)(c).installationData.reg_network_password,"onUpdate:modelValue":a[18]||(a[18]=function(t){return(0,o.SU)(c).installationData.reg_network_password=t}),"has-error":(0,o.SU)(c).incorrectInstallationData&&!(0,o.SU)(c).installationData.reg_network_password,class:"ms-form__col-fluid",placeholder:"@?VC6kPut",required:""},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_net_pass")),1)]})),_:1},8,["modelValue","has-error"]),(0,i.Wm)(et,{"field-id":"data__random_data",modelValue:(0,o.SU)(c).installationData.random_data,"onUpdate:modelValue":a[19]||(a[19]=function(t){return(0,o.SU)(c).installationData.random_data=t}),class:"ms-form__col-fluid"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("install_rand_data")),1)]})),_:1},8,["modelValue"])])],512),[[l.F8,_.value]])])])]),(0,i._)("div",fa,[(0,i._)("div",va,[(0,i._)("button",{class:(0,s.C_)([{"ms-btn-primary":!(0,o.SU)(c).initialData.registered},"ms-btn ms-btn-fluid ms-btn-rocket"]),onClick:a[20]||(a[20]=function(){return(0,o.SU)(c).register()})},[ga,(0,i.Uk)(" "+(0,s.zw)((0,o.SU)(g.I)("install_start")),1)],2)])])])])])]),(0,o.SU)(c).loading?((0,i.wg)(),(0,i.j4)(nt.Z,{key:0},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)((0,o.SU)(g.I)("preloader_text")),1)]})),_:1})):(0,i.kq)("",!0),(0,o.SU)(c).installationConfig.Network_id?((0,i.wg)(),(0,i.j4)(i.lR,{key:1,to:"body"},[(0,i.Wm)(Y)])):(0,i.kq)("",!0),(0,i.Wm)(lt.Z),(0,o.SU)(u)?((0,i.wg)(),(0,i.j4)(ot.Z,{key:2})):(0,i.kq)("",!0)],64)}}});const wa=ha;var Ua=wa;(0,l.ri)(Ua).use((0,h.WB)()).mount("#app")},967:function(t,a,e){t.exports=e.p+"image/messor/icon-avatar.b95f3cc6.svg"}},a={};function e(l){var n=a[l];if(void 0!==n)return n.exports;var i=a[l]={exports:{}};return t[l](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(a,l,n,i){if(!l){var o=1/0;for(c=0;c<t.length;c++){l=t[c][0],n=t[c][1],i=t[c][2];for(var s=!0,r=0;r<l.length;r++)(!1&i||o>=i)&&Object.keys(e.O).every((function(t){return e.O[t](l[r])}))?l.splice(r--,1):(s=!1,i<o&&(o=i));if(s){t.splice(c--,1);var u=n();void 0!==u&&(a=u)}}return a}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[l,n,i]}}(),function(){e.d=function(t,a){for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.p="view/"}(),function(){var t={685:0};e.O.j=function(a){return 0===t[a]};var a=function(a,l){var n,i,o=l[0],s=l[1],r=l[2],u=0;if(o.some((function(a){return 0!==t[a]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(r)var c=r(e)}for(a&&a(l);u<o.length;u++)i=o[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},l=self["webpackChunkfull_with_router_v0_2"]=self["webpackChunkfull_with_router_v0_2"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=e.O(void 0,[998,64],(function(){return e(590)}));l=e.O(l)})();