"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7680],{4580:(L,C,i)=>{i.d(C,{m:()=>T});var k=i(5193),e=i(4496),g=i(4500),I=i(5020),R=i(7136),m=i(5624),S=i(9240),P=i(4668),y=i(1368);function G(u,_){if(1&u&&(e.I0R(0,"ion-select-option",7),e.OEk(1),e.C$Y()),2&u){const d=_.$implicit;e.E7m("value",d),e.yG2(),e.oRS("",d.name," ")}}function t(u,_){if(1&u&&(e.I0R(0,"ion-select-option",7),e.OEk(1),e.C$Y()),2&u){const d=_.$implicit;e.E7m("value",d),e.yG2(),e.cNF(d.name+" ("+d.server.name+")")}}function E(u,_){if(1&u&&(e.I0R(0,"ion-select-option",7),e.OEk(1),e.C$Y()),2&u){const d=_.$implicit;e.E7m("value",d),e.yG2(),e.oRS(" ",d.urls[0],"")}}function B(u,_){if(1&u){const d=e.KQA();e.I0R(0,"ion-item",8),e.qCj("click",function(){e.usT(d);const l=e.GaO();return e.CGJ(l.scanQRCode())}),e.I0R(1,"ion-label",9),e.OEk(2),e.C$Y()()}if(2&u){const d=e.GaO();e.E7m("disabled",!d.ActKeyLength),e.yG2(2),e.cNF(d.lang.text.QuickQRShare.SendData)}}function O(u,_){if(1&u&&e.wR5(0,"img",10),2&u){const d=e.GaO();e.E7m("src",d.QRCodeSRC,e.K6U)}}let T=(()=>{var u;class _{constructor(o,l,r,p,M,D){this.lang=o,this.global=l,this.nakama=r,this.modalCtrl=p,this.navParams=M,this.indexed=D,this.ActKeyLength=!1,this.userInput={servers:[],groups:[],rtcserver:[]},this.servers=[],this.groups=[],this.rtcServer=[],this.NoReturn=!1,this.BackButtonPressed=!1}InitBrowserBackButtonOverride(){window.history.replaceState(null,null,window.location.href),window.onpopstate=()=>{this.BackButtonPressed||(this.BackButtonPressed=!0,this.modalCtrl.dismiss())}}ngOnInit(){this.InitBrowserBackButtonOverride(),this.NoReturn=this.navParams.get("NoReturn"),this.servers=this.nakama.get_all_server_info(),this.groups=this.nakama.rearrange_group_list(),this.indexed.loadTextFromUserPath("servers/webrtc_server.json",(o,l)=>{o&&l&&(this.rtcServer=JSON.parse(l))});for(let o=this.groups.length-1;o>=0;o--)"missing"==this.groups[o].status&&this.groups.splice(o,1)}SelectGroupServer(o){this.userInput.servers=o.detail.value||[],this.information_changed()}SelectGroupChannel(o){this.userInput.groups=o.detail.value||[],this.information_changed()}SelectRTCServer(o){this.userInput.rtcserver=o.detail.value||[],this.information_changed()}information_changed(){this.result_address=`${k.uM}pjcone_pwa/`;let o="",l=0;for(let r=0,p=this.userInput.servers.length;r<p;r++)o+=l?"&":"?",o+="server=",o+=`${this.userInput.servers[r].name||""},${this.userInput.servers[r].address||""},${this.userInput.servers[r].useSSL||""},${this.userInput.servers[r].port||7350},${this.userInput.servers[r].key||""}`,l++;for(let r=0,p=this.userInput.groups.length;r<p;r++)o+=l?"&":"?",o+="group=",o+=`${this.userInput.groups[r].name},${this.userInput.groups[r].id}`,l++;if(this.userInput.rtcserver.length)for(let r=0,p=this.userInput.rtcserver.length;r<p;r++)o+=l?"&":"?",o+="rtcserver=",o+=`[${this.userInput.rtcserver[r].urls}],${this.userInput.rtcserver[r].username},${this.userInput.rtcserver[r].credential}`,l++;o?(this.result_address+=o,this.QRCodeSRC=this.global.readasQRCodeFromString(this.result_address),this.ActKeyLength=!0):(this.QRCodeSRC="",this.ActKeyLength=!1)}scanQRCode(){this.modalCtrl.dismiss(this.result_address)}}return(u=_).\u0275fac=function(o){return new(o||u)(e.GI1(g.o),e.GI1(I.A1),e.GI1(R.h),e.GI1(m.qS),e.GI1(S.a6),e.GI1(P.k))},u.\u0275cmp=e.In1({type:u,selectors:[["app-qr-share"]],decls:24,vars:14,consts:[[1,"ion-no-border"],["slot","start",3,"click"],["defaultHref",""],["multiple","true",3,"label","placeholder","ionChange"],[3,"value",4,"ngFor","ngForOf"],["button","",3,"disabled","click",4,"ngIf"],["style","width: 100%; height: auto; cursor: copy;","alt","QRCodeSRC",3,"src",4,"ngIf"],[3,"value"],["button","",3,"disabled","click"],[1,"ion-text-center"],["alt","QRCodeSRC",2,"width","100%","height","auto","cursor","copy",3,"src"]],template:function(o,l){1&o&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.OEk(3),e.C$Y(),e.I0R(4,"ion-buttons",1),e.qCj("click",function(){return l.modalCtrl.dismiss()}),e.wR5(5,"ion-back-button",2),e.C$Y()()(),e.I0R(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),e.OEk(9),e.C$Y()(),e.I0R(10,"ion-item")(11,"ion-select",3),e.qCj("ionChange",function(p){return l.SelectGroupServer(p)}),e.yuY(12,G,2,2,"ion-select-option",4),e.C$Y()(),e.I0R(13,"ion-item")(14,"ion-select",3),e.qCj("ionChange",function(p){return l.SelectGroupChannel(p)}),e.yuY(15,t,2,2,"ion-select-option",4),e.C$Y()(),e.I0R(16,"ion-item")(17,"ion-select",3),e.qCj("ionChange",function(p){return l.SelectRTCServer(p)}),e.yuY(18,E,2,2,"ion-select-option",4),e.C$Y()(),e.yuY(19,B,3,2,"ion-item",5),e.I0R(20,"ion-item-divider")(21,"ion-label"),e.OEk(22),e.C$Y()(),e.yuY(23,O,1,1,"img",6),e.C$Y()),2&o&&(e.yG2(3),e.cNF(l.lang.text.Settings.quickQRshare),e.yG2(6),e.cNF(l.lang.text.QuickQRShare.SelectData),e.yG2(2),e.E7m("label",l.lang.text.QuickQRShare.GroupServer)("placeholder",l.lang.text.QuickQRShare.EmptyData),e.yG2(),e.E7m("ngForOf",l.servers),e.yG2(2),e.E7m("label",l.lang.text.QuickQRShare.Group)("placeholder",l.lang.text.QuickQRShare.EmptyData),e.yG2(),e.E7m("ngForOf",l.groups),e.yG2(2),e.E7m("label",l.lang.text.WebRTCDevManager.Title)("placeholder",l.lang.text.QuickQRShare.EmptyData),e.yG2(),e.E7m("ngForOf",l.rtcServer),e.yG2(),e.E7m("ngIf",!l.NoReturn),e.yG2(3),e.cNF(l.lang.text.QuickQRShare.ReceiveData),e.yG2(),e.E7m("ngIf",l.QRCodeSRC))},dependencies:[y.ay,y.u_,m.GS,m._i,m.wB,m.Yb,m.S8,m.QR,m.Cy,m.gd,m.tM,m.Md,m.IT,m.Im]}),_})()},7680:(L,C,i)=>{i.r(C),i.d(C,{SettingsPageModule:()=>Q});var k=i(1368),e=i(4716),g=i(5624),I=i(3332),R=i(1528),m=i(4708),S=i(5193),P=i(6124),y=i(9596),G=i(4580),t=i(4496),E=i(9240),B=i(4180),O=i(7136),T=i(4500),u=i(6819),_=i(5020),d=i(6884);const o=["Devkit"],l=["LangSel"];function r(s,f){if(1&s){const h=t.KQA();t.I0R(0,"ion-item",18),t.wR5(1,"ion-icon",19),t.I0R(2,"ion-input",20),t.iHE("ngModelChange",function(n){t.usT(h);const c=t.GaO();return t.kNx(c.FallbackServerAddress,n)||(c.FallbackServerAddress=n),t.CGJ(n)}),t.qCj("ionInput",function(){t.usT(h);const n=t.GaO();return t.CGJ(n.fallback_fs_input())}),t.C$Y()()}if(2&s){const h=t.GaO();t.yG2(2),t.E7m("label",h.lang.text.Settings.FallbackFS),t.OKB("ngModel",h.FallbackServerAddress)}}function p(s,f){if(1&s){const h=t.KQA();t.I0R(0,"ion-item",3),t.qCj("click",function(){t.usT(h);const n=t.GaO();return t.CGJ(n.start_minimalserver())}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y()()}if(2&s){const h=t.GaO();t.yG2(2),t.cNF(h.lang.text.Settings.joinDediChat)}}function M(s,f){if(1&s){const h=t.KQA();t.I0R(0,"div")(1,"ion-item-divider")(2,"ion-label"),t.OEk(3),t.C$Y()(),t.I0R(4,"ion-item",3),t.qCj("click",function(){t.usT(h);const n=t.GaO();return t.CGJ(n.go_to_page("admin-tools"))}),t.I0R(5,"ion-label"),t.OEk(6),t.C$Y()()()}if(2&s){const h=t.GaO();t.yG2(3),t.cNF(h.lang.text.Settings.admin_tools),t.yG2(3),t.cNF(h.lang.text.Settings.ServerAdmin)}}function D(s,f){if(1&s){const h=t.KQA();t.I0R(0,"ion-item",3),t.qCj("click",function(){t.usT(h);const n=t.GaO();return t.CGJ(n.go_to_page("translator"))}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y()()}if(2&s){const h=t.GaO();t.yG2(2),t.cNF(h.lang.text.Settings.AppTranslator)}}const b=[{path:"",component:(()=>{var s;class f{constructor(a,n,c,v,$,Y,A,N){this.modalCtrl=a,this.navCtrl=n,this.statusBar=c,this.nakama=v,this.lang=$,this.noti=Y,this.global=A,this.server=N,this.cant_dedicated=!1,this.can_use_http=!1,this.is_nativefier=S.O$,this.BackButtonPressed=!1,this.as_admin=[],this.FallbackServerAddress="",this.self={},this.LinkButton=[],this.will_enter=!1,this.lock_modal_open=!1,this.WillLeave=!1}InitBrowserBackButtonOverride(){window.history.pushState(null,null,window.location.href),window.onpopstate=()=>{this.BackButtonPressed||(this.BackButtonPressed=!0,this.navCtrl.back())}}ngOnInit(){("DesktopPWA"==S.s1||"MobilePWA"==S.s1)&&(this.cant_dedicated=!0),this.check_if_admin(),this.nakama.on_socket_disconnected.settings_admin_check=()=>{this.check_if_admin()},this.can_use_http="http:"==window.location.protocol||S.O$}toggle_ShowServer(){this.nakama.showServer?localStorage.setItem("showServer","1"):localStorage.removeItem("showServer")}check_if_admin(){this.as_admin=this.nakama.get_all_server_info(!0,!0);for(let a=this.as_admin.length-1;a>=0;a--)this.as_admin[a].is_admin||this.as_admin.splice(a,1)}start_minimalserver(){"offline"==this.statusBar.dedicated.official.groupchat?(this.statusBar.settings.dedicatedServer="pending",this.statusBar.dedicated.official.groupchat="pending",this.server.funcs.onStart=()=>{this.statusBar.settings.dedicatedServer="online",this.statusBar.dedicated.official.groupchat="online",this.start_minimalchat("ws://127.0.0.1")},this.server.funcs.onFailed=()=>{this.statusBar.settings.dedicatedServer="missing",this.statusBar.dedicated.official.groupchat="missing",setTimeout(()=>{this.statusBar.settings.dedicatedServer="offline",this.statusBar.dedicated.official.groupchat="offline"},1500)},this.server.initialize()):this.start_minimalchat("ws://127.0.0.1")}ionViewWillEnter(){this.InitBrowserBackButtonOverride(),this.profile_filter="online"==this.statusBar.settings.groupServer?"filter: grayscale(0) contrast(1);":"filter: grayscale(.9) contrast(1.4);",this.check_if_admin(),this.FallbackServerAddress=localStorage.getItem("fallback_fs"),this.Fallback_FS_input_element=document.getElementById("fallback_fs_input").childNodes[1].childNodes[1].childNodes[1].childNodes[1],this.Fallback_FS_input_element.onfocus=()=>{delete this.global.p5key.KeyShortCut.Digit},this.WillLeave=!1,this.Fallback_FS_input_element.addEventListener("focusout",()=>{this.WillLeave||this.ionViewDidEnter()})}focus_to_fallback_fs_input(){this.Devkit.value="Devkit",setTimeout(()=>{this.Fallback_FS_input_element.focus()},50)}fallback_fs_input(){this.FallbackServerAddress?localStorage.setItem("fallback_fs",this.FallbackServerAddress):localStorage.removeItem("fallback_fs")}ToggleAccordion(){this.Devkit.value?(this.LinkButton.splice(5,!this.cant_dedicated&&this.can_use_http?5:4),this.Devkit.value=void 0):(this.Devkit.value="Devkit",this.LinkButton.splice(5,0,()=>this.go_to_page("weblink-gen"),()=>this.focus_to_fallback_fs_input(),()=>this.go_to_webrtc_manager()),!this.cant_dedicated&&this.can_use_http?this.LinkButton.splice(7,0,()=>this.start_minimalserver(),()=>this.download_serverfile()):this.LinkButton.splice(7,0,()=>this.download_serverfile()))}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()},this.LinkButton.length=0,this.LinkButton.push(()=>this.go_to_page("noti-alert")),this.LinkButton.push(()=>{this.nakama.showServer=!this.nakama.showServer,this.toggle_ShowServer()}),this.LinkButton.push(()=>this.go_to_qr_share()),this.LinkButton.push(()=>this.open_inapp_explorer()),this.LinkButton.push(()=>this.ToggleAccordion()),this.Devkit.value&&(this.LinkButton.push(()=>this.go_to_page("weblink-gen")),this.LinkButton.push(()=>this.focus_to_fallback_fs_input()),this.LinkButton.push(()=>this.go_to_webrtc_manager()),!this.cant_dedicated&&this.can_use_http&&this.LinkButton.push(()=>this.start_minimalserver()),this.LinkButton.push(()=>this.download_serverfile())),this.as_admin.length&&this.LinkButton.push(()=>this.go_to_page("admin-tools")),this.LinkButton.push(()=>this.go_to_page("creator")),"ko"!=this.lang.lang&&this.LinkButton.push(()=>this.go_to_page("translator")),this.LinkButton.push(()=>this.LangClicked()),this.LinkButton.push(()=>this.go_to_page("licenses")),this.cant_dedicated&&this.LinkButton.push(()=>this.open_playstore()),this.global.p5key.KeyShortCut.Digit=a=>{this.LinkButton[a]&&this.LinkButton[a]()}}start_minimalchat(a){var n=this;if(!this.lock_modal_open){if(this.lock_modal_open=!0,this.will_enter)return;"online"!=this.statusBar.settings.dedicated_groupchat&&"certified"!=this.statusBar.settings.dedicated_groupchat&&(this.statusBar.settings.dedicated_groupchat="pending"),this.will_enter=!0,setTimeout(()=>{this.will_enter=!1},500),this.modalCtrl.create({component:P._,componentProps:{address:a,name:this.nakama.users.self.display_name}}).then(function(){var c=(0,R.c)(function*(v){yield v.present(),n.lock_modal_open=!1});return function(v){return c.apply(this,arguments)}}())}}open_inapp_explorer(){this.navCtrl.navigateForward("user-fs-dir",{animation:m.uw})}LangClicked(){this.LangSel.open()}LanguageChanged(a){this.lang.lang=a.detail.value,this.lang.load_selected_lang()}go_to_page(a){this.navCtrl.navigateForward(`portal/settings/${a}`,{animation:m.uw})}download_serverfile(){var a=this;return(0,R.c)(function*(){"ko"==a.lang.lang?window.open("https://is2you2.github.io/posts/how-to-use-pjcone-server/","_system"):window.open("https://is2you2.github.io/posts/how-to-use-pjcone-server-en/","_system")})()}go_to_qr_share(){this.modalCtrl.create({component:G.m,componentProps:{NoReturn:!0}}).then(a=>{this.RemoveKeyShortCut(),a.onDidDismiss().then(()=>{this.ionViewDidEnter()}),a.present()})}go_to_webrtc_manager(){this.modalCtrl.create({component:y.I}).then(a=>{this.RemoveKeyShortCut(),a.onDidDismiss().then(()=>{this.ionViewDidEnter()}),a.present()})}open_playstore(){window.open("https://play.google.com/store/apps/details?id=org.pjcone.portal","_system")}RemoveKeyShortCut(){delete this.global.p5key.KeyShortCut.Escape,delete this.global.p5key.KeyShortCut.Digit}ionViewWillLeave(){this.WillLeave=!0,this.RemoveKeyShortCut()}ngOnDestroy(){delete this.nakama.on_socket_disconnected.settings_admin_check}}return(s=f).\u0275fac=function(a){return new(a||s)(t.GI1(g.qS),t.GI1(E.wX),t.GI1(B.Y),t.GI1(O.h),t.GI1(T.o),t.GI1(u.s),t.GI1(_.A1),t.GI1(d.a))},s.\u0275cmp=t.In1({type:s,selectors:[["app-settings"]],viewQuery:function(a,n){if(1&a&&(t.CC$(o,5),t.CC$(l,5)),2&a){let c;t.wto(c=t.Gqi())&&(n.Devkit=c.first),t.wto(c=t.Gqi())&&(n.LangSel=c.first)}},decls:59,vars:21,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/main"],["button","",3,"click"],["button","",3,"ionChange"],[2,"pointer-events","none",3,"ngModel","ngModelChange"],["Devkit",""],["value","Devkit"],["slot","header"],["slot","content"],["button","","id","fallback_fs_input",4,"ngIf"],["button","",3,"click",4,"ngIf"],[4,"ngIf"],["name","language",1,"icon_margin"],[2,"pointer-events","none",3,"label","value","placeholder","ionChange"],["LangSel",""],["value","en"],["value","ko"],["button","","id","fallback_fs_input"],["name","cloud-done-outline",1,"icon_margin"],["placeholder","0.0.0.0:0",1,"ion-text-right",3,"label","ngModel","ngModelChange","ionInput"]],template:function(a,n){1&a&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.OEk(3),t.C$Y(),t.I0R(4,"ion-buttons",1),t.wR5(5,"ion-back-button",2),t.C$Y()()(),t.I0R(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),t.OEk(9),t.C$Y()(),t.I0R(10,"ion-item",3),t.qCj("click",function(){return n.go_to_page("noti-alert")}),t.I0R(11,"ion-label"),t.OEk(12),t.C$Y()(),t.I0R(13,"ion-item",4),t.qCj("ionChange",function(){return n.toggle_ShowServer()}),t.I0R(14,"ion-toggle",5),t.iHE("ngModelChange",function(v){return t.kNx(n.nakama.showServer,v)||(n.nakama.showServer=v),v}),t.OEk(15),t.C$Y()(),t.I0R(16,"ion-item",3),t.qCj("click",function(){return n.go_to_qr_share()}),t.I0R(17,"ion-label"),t.OEk(18),t.C$Y()(),t.I0R(19,"ion-item",3),t.qCj("click",function(){return n.open_inapp_explorer()}),t.I0R(20,"ion-label"),t.OEk(21),t.C$Y()(),t.I0R(22,"ion-accordion-group",null,6)(24,"ion-accordion",7)(25,"ion-item",8)(26,"ion-label"),t.OEk(27),t.C$Y()(),t.I0R(28,"div",9)(29,"ion-item",3),t.qCj("click",function(){return n.go_to_page("weblink-gen")}),t.I0R(30,"ion-label"),t.OEk(31),t.C$Y()(),t.yuY(32,r,3,2,"ion-item",10),t.I0R(33,"ion-item",3),t.qCj("click",function(){return n.go_to_webrtc_manager()}),t.I0R(34,"ion-label"),t.OEk(35),t.C$Y()(),t.yuY(36,p,3,1,"ion-item",11),t.I0R(37,"ion-item",3),t.qCj("click",function(){return n.download_serverfile()}),t.I0R(38,"ion-label"),t.OEk(39),t.C$Y()()()()(),t.yuY(40,M,7,2,"div",12),t.I0R(41,"ion-item-divider")(42,"ion-label"),t.OEk(43),t.C$Y()(),t.I0R(44,"ion-item",3),t.qCj("click",function(){return n.go_to_page("creator")}),t.I0R(45,"ion-label"),t.OEk(46),t.C$Y()(),t.yuY(47,D,3,1,"ion-item",11),t.I0R(48,"ion-item",3),t.qCj("click",function(){return n.LangClicked()}),t.wR5(49,"ion-icon",13),t.I0R(50,"ion-select",14,15),t.qCj("ionChange",function(v){return n.LanguageChanged(v)}),t.I0R(52,"ion-select-option",16),t.OEk(53,"English"),t.C$Y(),t.I0R(54,"ion-select-option",17),t.OEk(55,"\ud55c\uad6d\uc5b4"),t.C$Y()()(),t.I0R(56,"ion-item",3),t.qCj("click",function(){return n.go_to_page("licenses")}),t.I0R(57,"ion-label"),t.OEk(58),t.C$Y()()()),2&a&&(t.yG2(3),t.cNF(n.lang.text.Settings.Title),t.yG2(6),t.cNF(n.lang.text.Settings.env_info),t.yG2(3),t.cNF(n.lang.text.Settings.NotificationSetting),t.yG2(2),t.OKB("ngModel",n.nakama.showServer),t.yG2(),t.cNF(n.lang.text.Settings.ShowChnServer),t.yG2(3),t.cNF(n.lang.text.Settings.quickQRshare),t.yG2(3),t.cNF(n.lang.text.Settings.InAppExplorer),t.yG2(6),t.cNF(n.lang.text.Settings.DevKit),t.yG2(4),t.cNF(n.lang.text.Settings.WebLinkGen),t.yG2(),t.E7m("ngIf",n.cant_dedicated),t.yG2(3),t.cNF(n.lang.text.WebRTCDevManager.Title),t.yG2(),t.E7m("ngIf",!n.cant_dedicated&&n.can_use_http),t.yG2(3),t.cNF(n.lang.text.Settings.ServerFiles),t.yG2(),t.E7m("ngIf",n.as_admin.length),t.yG2(3),t.cNF(n.lang.text.Settings.AppInfo),t.yG2(3),t.cNF(n.lang.text.Settings.AppCreator),t.yG2(),t.E7m("ngIf","ko"!=n.lang.lang),t.yG2(3),t.E7m("label",n.lang.text.Settings.AppLanguage)("value",n.lang.lang)("placeholder",n.lang.lang),t.yG2(8),t.cNF(n.lang.text.Settings.LicenseNotice))},dependencies:[k.u_,e.ue,e._G,g.cm,g.qU,g.GS,g._i,g.wB,g.Ko,g.A5,g.Yb,g.S8,g.QR,g.Cy,g.gd,g.tM,g.E$,g.Md,g.UJ,g.IT,g.qG,g.Im],styles:[".img_icon_size[_ngcontent-%COMP%]{width:21px;height:21px;margin-right:16px}.icon_margin[_ngcontent-%COMP%]{margin-right:16px}"]}),f})()},{path:"licenses",loadChildren:()=>i.e(6768).then(i.bind(i,6768)).then(s=>s.LicensesPageModule)},{path:"group-server",loadChildren:()=>i.e(8928).then(i.bind(i,8928)).then(s=>s.GroupServerPageModule)},{path:"add-group",loadChildren:()=>Promise.all([i.e(9492),i.e(148)]).then(i.bind(i,7768)).then(s=>s.AddGroupPageModule)},{path:"group-detail",loadChildren:()=>i.e(1588).then(i.bind(i,9208)).then(s=>s.GroupDetailPageModule)},{path:"translator",loadChildren:()=>i.e(9236).then(i.bind(i,9236)).then(s=>s.TranslatorPageModule)},{path:"creator",loadChildren:()=>i.e(4984).then(i.bind(i,4984)).then(s=>s.CreatorPageModule)},{path:"qr-share",loadChildren:()=>i.e(5056).then(i.bind(i,5056)).then(s=>s.QrSharePageModule)},{path:"noti-alert",loadChildren:()=>i.e(7816).then(i.bind(i,7816)).then(s=>s.NotiAlertPageModule)},{path:"admin-tools",loadChildren:()=>i.e(6710).then(i.bind(i,6710)).then(s=>s.AdminToolsPageModule)},{path:"weblink-gen",loadChildren:()=>i.e(3544).then(i.bind(i,3544)).then(s=>s.WeblinkGenPageModule)}];let F=(()=>{var s;class f{}return(s=f).\u0275fac=function(a){return new(a||s)},s.\u0275mod=t.a4G({type:s}),s.\u0275inj=t.s3X({imports:[I.qQ.forChild(b),I.qQ]}),f})(),Q=(()=>{var s;class f{}return(s=f).\u0275fac=function(a){return new(a||s)},s.\u0275mod=t.a4G({type:s}),s.\u0275inj=t.s3X({imports:[k.MD,e.y,g.wZ,F]}),f})()}}]);