"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7680],{4580:($,R,s)=>{s.d(R,{m:()=>F});var P=s(5193),e=s(4496),g=s(4500),E=s(5020),y=s(7136),p=s(5624),k=s(9240),b=s(4668),G=s(1368);function T(c,v){if(1&c&&(e.I0R(0,"ion-select-option",7),e.OEk(1),e.C$Y()),2&c){const m=v.$implicit;e.E7m("value",m),e.yG2(),e.oRS("",m.name," ")}}function t(c,v){if(1&c&&(e.I0R(0,"ion-select-option",7),e.OEk(1),e.C$Y()),2&c){const m=v.$implicit;e.E7m("value",m),e.yG2(),e.cNF(m.name+" ("+m.server.name+")")}}function A(c,v){if(1&c&&(e.I0R(0,"ion-select-option",7),e.OEk(1),e.C$Y()),2&c){const m=v.$implicit;e.E7m("value",m),e.yG2(),e.oRS(" ",m.urls[0],"")}}function O(c,v){if(1&c){const m=e.KQA();e.I0R(0,"ion-item",8),e.qCj("click",function(){e.usT(m);const r=e.GaO();return e.CGJ(r.scanQRCode())}),e.I0R(1,"ion-label",9),e.OEk(2),e.C$Y()()}if(2&c){const m=e.GaO();e.E7m("disabled",!m.ActKeyLength),e.yG2(2),e.cNF(m.lang.text.QuickQRShare.SendData)}}function D(c,v){if(1&c&&e.wR5(0,"img",10),2&c){const m=e.GaO();e.E7m("src",m.QRCodeSRC,e.K6U)}}let F=(()=>{var c;class v{constructor(l,r,h,f,M,L){this.lang=l,this.global=r,this.nakama=h,this.modalCtrl=f,this.navParams=M,this.indexed=L,this.ActKeyLength=!1,this.userInput={servers:[],groups:[],rtcserver:[]},this.servers=[],this.groups=[],this.rtcServer=[],this.NoReturn=!1}ngOnInit(){this.NoReturn=this.navParams.get("NoReturn"),this.servers=this.nakama.get_all_server_info(),this.groups=this.nakama.rearrange_group_list(),this.indexed.loadTextFromUserPath("servers/webrtc_server.json",(l,r)=>{l&&r&&(this.rtcServer=JSON.parse(r))});for(let l=this.groups.length-1;l>=0;l--)"missing"==this.groups[l].status&&this.groups.splice(l,1)}SelectGroupServer(l){this.userInput.servers=l.detail.value||[],this.information_changed()}SelectGroupChannel(l){this.userInput.groups=l.detail.value||[],this.information_changed()}SelectRTCServer(l){this.userInput.rtcserver=l.detail.value||[],this.information_changed()}information_changed(){this.result_address=`${P.uM}pjcone_pwa/`;let l="",r=0;for(let h=0,f=this.userInput.servers.length;h<f;h++)l+=r?"&":"?",l+="server=",l+=`${this.userInput.servers[h].name||""},${this.userInput.servers[h].address||""},${this.userInput.servers[h].useSSL||""},${this.userInput.servers[h].port||7350},${this.userInput.servers[h].key||""}`,r++;for(let h=0,f=this.userInput.groups.length;h<f;h++)l+=r?"&":"?",l+="group=",l+=`${this.userInput.groups[h].name},${this.userInput.groups[h].id}`,r++;if(this.userInput.rtcserver.length)for(let h=0,f=this.userInput.rtcserver.length;h<f;h++)l+=r?"&":"?",l+="rtcserver=",l+=`[${this.userInput.rtcserver[h].urls}],${this.userInput.rtcserver[h].username},${this.userInput.rtcserver[h].credential}`,r++;l?(this.result_address+=l,this.QRCodeSRC=this.global.readasQRCodeFromString(this.result_address),this.ActKeyLength=!0):(this.QRCodeSRC="",this.ActKeyLength=!1)}scanQRCode(){this.modalCtrl.dismiss(this.result_address)}}return(c=v).\u0275fac=function(l){return new(l||c)(e.GI1(g.o),e.GI1(E.A1),e.GI1(y.h),e.GI1(p.qS),e.GI1(k.a6),e.GI1(b.k))},c.\u0275cmp=e.In1({type:c,selectors:[["app-qr-share"]],decls:24,vars:14,consts:[[1,"ion-no-border"],["slot","start",3,"click"],["defaultHref",""],["multiple","true",3,"label","placeholder","ionChange"],[3,"value",4,"ngFor","ngForOf"],["button","",3,"disabled","click",4,"ngIf"],["style","width: 100%; height: auto;","alt","QRCodeSRC",3,"src",4,"ngIf"],[3,"value"],["button","",3,"disabled","click"],[1,"ion-text-center"],["alt","QRCodeSRC",2,"width","100%","height","auto",3,"src"]],template:function(l,r){1&l&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.OEk(3),e.C$Y(),e.I0R(4,"ion-buttons",1),e.qCj("click",function(){return r.modalCtrl.dismiss()}),e.wR5(5,"ion-back-button",2),e.C$Y()()(),e.I0R(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),e.OEk(9),e.C$Y()(),e.I0R(10,"ion-item")(11,"ion-select",3),e.qCj("ionChange",function(f){return r.SelectGroupServer(f)}),e.yuY(12,T,2,2,"ion-select-option",4),e.C$Y()(),e.I0R(13,"ion-item")(14,"ion-select",3),e.qCj("ionChange",function(f){return r.SelectGroupChannel(f)}),e.yuY(15,t,2,2,"ion-select-option",4),e.C$Y()(),e.I0R(16,"ion-item")(17,"ion-select",3),e.qCj("ionChange",function(f){return r.SelectRTCServer(f)}),e.yuY(18,A,2,2,"ion-select-option",4),e.C$Y()(),e.yuY(19,O,3,2,"ion-item",5),e.I0R(20,"ion-item-divider")(21,"ion-label"),e.OEk(22),e.C$Y()(),e.yuY(23,D,1,1,"img",6),e.C$Y()),2&l&&(e.yG2(3),e.cNF(r.lang.text.Settings.quickQRshare),e.yG2(6),e.cNF(r.lang.text.QuickQRShare.SelectData),e.yG2(2),e.E7m("label",r.lang.text.QuickQRShare.GroupServer)("placeholder",r.lang.text.QuickQRShare.EmptyData),e.yG2(),e.E7m("ngForOf",r.servers),e.yG2(2),e.E7m("label",r.lang.text.QuickQRShare.Group)("placeholder",r.lang.text.QuickQRShare.EmptyData),e.yG2(),e.E7m("ngForOf",r.groups),e.yG2(2),e.E7m("label",r.lang.text.WebRTCDevManager.Title)("placeholder",r.lang.text.QuickQRShare.EmptyData),e.yG2(),e.E7m("ngForOf",r.rtcServer),e.yG2(),e.E7m("ngIf",!r.NoReturn),e.yG2(3),e.cNF(r.lang.text.QuickQRShare.ReceiveData),e.yG2(),e.E7m("ngIf",r.QRCodeSRC))},dependencies:[G.ay,G.u_,p.GS,p._i,p.wB,p.Yb,p.S8,p.QR,p.Cy,p.gd,p.tM,p.Md,p.IT,p.Im]}),v})()},7680:($,R,s)=>{s.r(R),s.d(R,{SettingsPageModule:()=>j});var P=s(1368),e=s(4716),g=s(5624),E=s(3332),y=s(1528),p=s(4708),k=s(5193),b=s(6124),G=s(9596),T=s(4580),t=s(4496),A=s(9240),O=s(4180),D=s(7136),F=s(4668),c=s(4500),v=s(6819),m=s(5020),l=s(544),r=s(3824),h=s(6884);const f=["Devkit"],M=["LangSel"];function L(a,C){if(1&a){const d=t.KQA();t.I0R(0,"ion-item",6),t.qCj("click",function(){t.usT(d);const i=t.GaO();return t.CGJ(i.start_minimalserver())}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y()()}if(2&a){const d=t.GaO();t.yG2(2),t.cNF(d.lang.text.Settings.joinDediChat)}}function Q(a,C){if(1&a){const d=t.KQA();t.I0R(0,"div")(1,"ion-item-divider")(2,"ion-label"),t.OEk(3),t.C$Y()(),t.I0R(4,"ion-item",6),t.qCj("click",function(){t.usT(d);const i=t.GaO();return t.CGJ(i.go_to_page("admin-tools"))}),t.I0R(5,"ion-label"),t.OEk(6),t.C$Y()()()}if(2&a){const d=t.GaO();t.yG2(3),t.cNF(d.lang.text.Settings.admin_tools),t.yG2(3),t.cNF(d.lang.text.Settings.ServerAdmin)}}function B(a,C){if(1&a){const d=t.KQA();t.I0R(0,"ion-item",6),t.qCj("click",function(){t.usT(d);const i=t.GaO();return t.CGJ(i.go_to_page("translator"))}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y()()}if(2&a){const d=t.GaO();t.yG2(2),t.cNF(d.lang.text.Settings.AppTranslator)}}function Y(a,C){if(1&a){const d=t.KQA();t.I0R(0,"ion-item",6),t.qCj("click",function(){t.usT(d);const i=t.GaO();return t.CGJ(i.open_playstore())}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y()()}if(2&a){const d=t.GaO();t.yG2(2),t.cNF(d.lang.text.Settings.OpenPlayStore)}}const N=[{path:"",component:(()=>{var a;class C{constructor(n,i,o,u,_,I,S,K,W,w,U,V){this.modalCtrl=n,this.nav=i,this.statusBar=o,this.nakama=u,this.indexed=_,this.lang=I,this.noti=S,this.global=K,this.file=W,this.p5toast=w,this.loadingCtrl=U,this.server=V,this.cant_dedicated=!1,this.can_use_http=!1,this.is_nativefier=k.O$,this.as_admin=[],this.availables=[],this.isAdHiding=!0,this.FallbackServerAddress="",this.self={},this.LinkButton=[],this.will_enter=!1,this.lock_modal_open=!1,this.WillLeave=!1}ngOnInit(){("DesktopPWA"==k.s1||"MobilePWA"==k.s1)&&(this.cant_dedicated=!0),this.AD_Div=document.getElementById("advertise"),this.checkAdsInfo(),this.check_if_admin(),this.nakama.on_socket_disconnected.settings_admin_check=()=>{this.check_if_admin()},this.can_use_http="http:"==window.location.protocol||k.O$}check_if_admin(){this.as_admin=this.nakama.get_all_server_info(!0,!0);for(let n=this.as_admin.length-1;n>=0;n--)this.as_admin[n].is_admin||this.as_admin.splice(n,1)}start_minimalserver(){"offline"==this.statusBar.dedicated.official.groupchat?(this.statusBar.settings.dedicatedServer="pending",this.statusBar.dedicated.official.groupchat="pending",this.server.funcs.onStart=()=>{this.statusBar.settings.dedicatedServer="online",this.statusBar.dedicated.official.groupchat="online",this.start_minimalchat("ws://127.0.0.1")},this.server.funcs.onFailed=()=>{this.statusBar.settings.dedicatedServer="missing",this.statusBar.dedicated.official.groupchat="missing",setTimeout(()=>{this.statusBar.settings.dedicatedServer="offline",this.statusBar.dedicated.official.groupchat="offline"},1500)},this.server.initialize()):this.start_minimalchat("ws://127.0.0.1")}checkAdsInfo(){var n=this;return(0,y.c)(function*(){try{let i=yield fetch(`${k.uM}pjcone_ads/${n.lang.lang}.txt`);if(i.ok){let o=yield(yield i.blob()).text();n.indexed.saveTextFileToUserPath(o,"ads_list.txt");let u=o.split("\n");n.listAvailableAds(u)}}catch{n.indexed.loadTextFromUserPath("ads_list.txt",(o,u)=>{o&&u&&n.listAvailableAds(u.split("\n"))})}})()}listAvailableAds(n){let o,i=(new Date).getTime();this.availables.length=0;for(let _=0,I=n.length;_<I;_++){let S=n[_].split(",");Number(S[0])<i?i<Number(S[1])&&this.availables.push([Number(S[0]),Number(S[1]),S[2]]):o?Number(S[0])<o&&(o=Number(S[0])):o=Number(S[0])}let u=this.AD_Div.childNodes;this.isAdHiding=!0,u.forEach(_=>{_.remove()}),this.availables.length?this.displayRandomAds():o&&(this.refreshAds=setTimeout(()=>{this.indexed.loadTextFromUserPath("ads_list.txt",(_,I)=>{_&&I&&this.listAvailableAds(I.split("\n"))})},o-(new Date).getTime()))}displayRandomAds(){let n=Math.floor(Math.random()*this.availables.length),i=this.availables[n];this.refreshAds=setTimeout(()=>{this.indexed.loadTextFromUserPath("ads_list.txt",(u,_)=>{u&&_&&this.listAvailableAds(_.split("\n"))})},i[1]-(new Date).getTime());let o=document.createElement("iframe");o.id="AdFrame",o.setAttribute("src",i[2]),o.setAttribute("frameborder","0"),o.setAttribute("class","full_screen"),this.isAdHiding=!1,this.AD_Div.appendChild(o)}open_link(n){window.open(n,"_system")}ionViewWillEnter(){this.profile_filter="online"==this.statusBar.settings.groupServer?"filter: grayscale(0) contrast(1);":"filter: grayscale(.9) contrast(1.4);",this.check_if_admin(),this.FallbackServerAddress=localStorage.getItem("fallback_fs"),this.Fallback_FS_input_element=document.getElementById("fallback_fs_input").childNodes[1].childNodes[1].childNodes[1].childNodes[1],this.Fallback_FS_input_element.onfocus=()=>{delete this.global.p5key.KeyShortCut.Digit},this.WillLeave=!1,this.Fallback_FS_input_element.addEventListener("focusout",()=>{this.WillLeave||this.ionViewDidEnter()})}focus_to_fallback_fs_input(){this.Devkit.value="Devkit",setTimeout(()=>{this.Fallback_FS_input_element.focus()},50)}fallback_fs_input(){this.FallbackServerAddress?localStorage.setItem("fallback_fs",this.FallbackServerAddress):localStorage.removeItem("fallback_fs")}ToggleAccordion(){this.Devkit.value?(this.LinkButton.splice(4,!this.cant_dedicated&&this.can_use_http?5:4),this.Devkit.value=void 0):(this.Devkit.value="Devkit",this.LinkButton.splice(4,0,()=>this.go_to_page("weblink-gen"),()=>this.focus_to_fallback_fs_input(),()=>this.go_to_webrtc_manager()),!this.cant_dedicated&&this.can_use_http?this.LinkButton.splice(7,0,()=>this.start_minimalserver(),()=>this.download_serverfile()):this.LinkButton.splice(7,0,()=>this.download_serverfile()))}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.nav.pop()},this.LinkButton.length=0,this.LinkButton.push(()=>this.go_to_page("noti-alert")),this.LinkButton.push(()=>this.go_to_qr_share()),this.LinkButton.push(()=>this.open_inapp_explorer()),this.LinkButton.push(()=>this.ToggleAccordion()),this.Devkit.value&&(this.LinkButton.push(()=>this.go_to_page("weblink-gen")),this.LinkButton.push(()=>this.focus_to_fallback_fs_input()),this.LinkButton.push(()=>this.go_to_webrtc_manager()),!this.cant_dedicated&&this.can_use_http&&this.LinkButton.push(()=>this.start_minimalserver()),this.LinkButton.push(()=>this.download_serverfile())),this.as_admin.length&&this.LinkButton.push(()=>this.go_to_page("admin-tools")),this.LinkButton.push(()=>this.go_to_page("creator")),"ko"!=this.lang.lang&&this.LinkButton.push(()=>this.go_to_page("translator")),this.LinkButton.push(()=>this.LangClicked()),this.LinkButton.push(()=>this.go_to_page("licenses")),this.cant_dedicated&&this.LinkButton.push(()=>this.open_playstore()),this.global.p5key.KeyShortCut.Digit=n=>{this.LinkButton[n]&&this.LinkButton[n]()}}start_minimalchat(n){var i=this;if(!this.lock_modal_open){if(this.lock_modal_open=!0,this.will_enter)return;"online"!=this.statusBar.settings[n?"dedicated_groupchat":"community_ranchat"]&&"certified"!=this.statusBar.settings[n?"dedicated_groupchat":"community_ranchat"]&&(this.statusBar.settings[n?"dedicated_groupchat":"community_ranchat"]="pending"),this.will_enter=!0,setTimeout(()=>{this.will_enter=!1},500),this.modalCtrl.create({component:b._,componentProps:{address:n,name:this.nakama.users.self.display_name}}).then(function(){var o=(0,y.c)(function*(u){yield u.present(),i.lock_modal_open=!1});return function(u){return o.apply(this,arguments)}}())}}open_inapp_explorer(){this.nav.navigateForward("user-fs-dir",{animation:p.uw})}LangClicked(){this.LangSel.open()}LanguageChanged(n){this.lang.lang=n.detail.value,this.lang.load_selected_lang()}go_to_page(n){this.nav.navigateForward(`portal/settings/${n}`,{animation:p.uw})}download_serverfile(){var n=this;return(0,y.c)(function*(){if("Android"==k.s1||"iOS"==k.s1){let i=yield n.loadingCtrl.create({message:n.lang.text.TodoDetail.WIP});i.present();let o="nakama.zip",u=yield fetch("assets/data/nakama.zip").then(_=>_.blob());try{yield n.file.writeFile(n.file.externalDataDirectory,o,u),i.dismiss(),n.p5toast.show({text:n.lang.text.ContentViewer.fileSaved})}catch(_){console.log("download_serverfile: ",_);try{yield n.file.writeExistingFile(n.file.externalDataDirectory,o,u),i.dismiss(),n.p5toast.show({text:n.lang.text.ContentViewer.fileSaved})}catch(I){console.log("download_serverfile_rewrite: ",I),i.dismiss(),n.p5toast.show({text:n.lang.text.ContentViewer.fileSaveFailed})}}}else{let i=document.createElement("a");i.download="nakama.zip",i.href="assets/data/nakama.zip",document.body.appendChild(i),i.click(),document.body.removeChild(i),i.remove(),n.p5toast.show({text:n.lang.text.ContentViewer.fileSaved})}})()}go_to_qr_share(){this.modalCtrl.create({component:T.m,componentProps:{NoReturn:!0}}).then(n=>{this.RemoveKeyShortCut(),n.onDidDismiss().then(()=>{this.ionViewDidEnter()}),n.present()})}go_to_webrtc_manager(){this.modalCtrl.create({component:G.I}).then(n=>{this.RemoveKeyShortCut(),n.onDidDismiss().then(()=>{this.ionViewDidEnter()}),n.present()})}open_playstore(){window.open("https://play.google.com/store/apps/details?id=org.pjcone.portal","_system")}RemoveKeyShortCut(){delete this.global.p5key.KeyShortCut.Escape,delete this.global.p5key.KeyShortCut.Digit}ionViewWillLeave(){this.WillLeave=!0,this.RemoveKeyShortCut()}ngOnDestroy(){delete this.nakama.on_socket_disconnected.settings_admin_check,clearTimeout(this.refreshAds)}}return(a=C).\u0275fac=function(n){return new(n||a)(t.GI1(g.qS),t.GI1(A.wX),t.GI1(O.Y),t.GI1(D.h),t.GI1(F.k),t.GI1(c.o),t.GI1(v.s),t.GI1(m.A1),t.GI1(l.S),t.GI1(r.O),t.GI1(g.Kg),t.GI1(h.a))},a.\u0275cmp=t.In1({type:a,selectors:[["app-settings"]],viewQuery:function(n,i){if(1&n&&(t.CC$(f,5),t.CC$(M,5)),2&n){let o;t.wto(o=t.Gqi())&&(i.Devkit=o.first),t.wto(o=t.Gqi())&&(i.LangSel=o.first)}},decls:66,vars:24,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/main"],[3,"hidden"],["slot","end","fill","clear","shape","round",3,"click"],["id","advertise",1,"advertise_banner"],["button","",3,"click"],["Devkit",""],["value","Devkit"],["slot","header"],["slot","content"],["button","","id","fallback_fs_input"],["name","cloud-done-outline",1,"icon_margin"],["placeholder","0.0.0.0:0",1,"ion-text-right",3,"label","ngModel","ngModelChange","ionInput"],["button","",3,"click",4,"ngIf"],[4,"ngIf"],["name","language",1,"icon_margin"],[2,"pointer-events","none",3,"label","value","placeholder","ionChange"],["LangSel",""],["value","en"],["value","ko"]],template:function(n,i){1&n&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.OEk(3),t.C$Y(),t.I0R(4,"ion-buttons",1),t.wR5(5,"ion-back-button",2),t.C$Y()()(),t.I0R(6,"ion-content")(7,"div",3)(8,"ion-item-divider")(9,"ion-label"),t.OEk(10),t.C$Y(),t.I0R(11,"ion-button",4),t.qCj("click",function(){return i.open_link("https://is2you2.github.io/")}),t.OEk(12),t.C$Y()(),t.wR5(13,"div",5),t.C$Y(),t.I0R(14,"ion-item-divider")(15,"ion-label"),t.OEk(16),t.C$Y()(),t.I0R(17,"ion-item",6),t.qCj("click",function(){return i.go_to_page("noti-alert")}),t.I0R(18,"ion-label"),t.OEk(19),t.C$Y()(),t.I0R(20,"ion-item",6),t.qCj("click",function(){return i.go_to_qr_share()}),t.I0R(21,"ion-label"),t.OEk(22),t.C$Y()(),t.I0R(23,"ion-item",6),t.qCj("click",function(){return i.open_inapp_explorer()}),t.I0R(24,"ion-label"),t.OEk(25),t.C$Y()(),t.I0R(26,"ion-accordion-group",null,7)(28,"ion-accordion",8)(29,"ion-item",9)(30,"ion-label"),t.OEk(31),t.C$Y()(),t.I0R(32,"div",10)(33,"ion-item",6),t.qCj("click",function(){return i.go_to_page("weblink-gen")}),t.I0R(34,"ion-label"),t.OEk(35),t.C$Y()(),t.I0R(36,"ion-item",11),t.wR5(37,"ion-icon",12),t.I0R(38,"ion-input",13),t.iHE("ngModelChange",function(u){return t.kNx(i.FallbackServerAddress,u)||(i.FallbackServerAddress=u),u}),t.qCj("ionInput",function(){return i.fallback_fs_input()}),t.C$Y()(),t.I0R(39,"ion-item",6),t.qCj("click",function(){return i.go_to_webrtc_manager()}),t.I0R(40,"ion-label"),t.OEk(41),t.C$Y()(),t.yuY(42,L,3,1,"ion-item",14),t.I0R(43,"ion-item",6),t.qCj("click",function(){return i.download_serverfile()}),t.I0R(44,"ion-label"),t.OEk(45),t.C$Y()()()()(),t.yuY(46,Q,7,2,"div",15),t.I0R(47,"ion-item-divider")(48,"ion-label"),t.OEk(49),t.C$Y()(),t.I0R(50,"ion-item",6),t.qCj("click",function(){return i.go_to_page("creator")}),t.I0R(51,"ion-label"),t.OEk(52),t.C$Y()(),t.yuY(53,B,3,1,"ion-item",14),t.I0R(54,"ion-item",6),t.qCj("click",function(){return i.LangClicked()}),t.wR5(55,"ion-icon",16),t.I0R(56,"ion-select",17,18),t.qCj("ionChange",function(u){return i.LanguageChanged(u)}),t.I0R(58,"ion-select-option",19),t.OEk(59,"English"),t.C$Y(),t.I0R(60,"ion-select-option",20),t.OEk(61,"\ud55c\uad6d\uc5b4"),t.C$Y()()(),t.I0R(62,"ion-item",6),t.qCj("click",function(){return i.go_to_page("licenses")}),t.I0R(63,"ion-label"),t.OEk(64),t.C$Y()(),t.yuY(65,Y,3,1,"ion-item",14),t.C$Y()),2&n&&(t.yG2(3),t.cNF(i.lang.text.Settings.Title),t.yG2(4),t.E7m("hidden",i.isAdHiding),t.yG2(3),t.cNF(i.lang.text.Settings.CommunityAds),t.yG2(2),t.oRS(" ",i.lang.text.Settings.AdsContact," "),t.yG2(4),t.cNF(i.lang.text.Settings.env_info),t.yG2(3),t.cNF(i.lang.text.Settings.NotificationSetting),t.yG2(3),t.cNF(i.lang.text.Settings.quickQRshare),t.yG2(3),t.cNF(i.lang.text.Settings.InAppExplorer),t.yG2(6),t.cNF(i.lang.text.Settings.DevKit),t.yG2(4),t.cNF(i.lang.text.Settings.WebLinkGen),t.yG2(3),t.E7m("label",i.lang.text.Settings.FallbackFS),t.OKB("ngModel",i.FallbackServerAddress),t.yG2(3),t.cNF(i.lang.text.WebRTCDevManager.Title),t.yG2(),t.E7m("ngIf",!i.cant_dedicated&&i.can_use_http),t.yG2(3),t.cNF(i.lang.text.Settings.ServerFiles),t.yG2(),t.E7m("ngIf",i.as_admin.length),t.yG2(3),t.cNF(i.lang.text.Settings.AppInfo),t.yG2(3),t.cNF(i.lang.text.Settings.AppCreator),t.yG2(),t.E7m("ngIf","ko"!=i.lang.lang),t.yG2(3),t.E7m("label",i.lang.text.Settings.AppLanguage)("value",i.lang.lang)("placeholder",i.lang.lang),t.yG2(8),t.cNF(i.lang.text.Settings.LicenseNotice),t.yG2(),t.E7m("ngIf",i.cant_dedicated))},dependencies:[P.u_,e.ue,e._G,g.cm,g.qU,g.sn,g.GS,g._i,g.wB,g.Ko,g.A5,g.Yb,g.S8,g.QR,g.Cy,g.gd,g.tM,g.Md,g.IT,g.qG,g.Im],styles:[".advertise_banner[_ngcontent-%COMP%]{width:100%;max-height:150px}.img_icon_size[_ngcontent-%COMP%]{width:21px;height:21px;margin-right:16px}.icon_margin[_ngcontent-%COMP%]{margin-right:16px}"]}),C})()},{path:"licenses",loadChildren:()=>s.e(6768).then(s.bind(s,6768)).then(a=>a.LicensesPageModule)},{path:"group-server",loadChildren:()=>s.e(8928).then(s.bind(s,8928)).then(a=>a.GroupServerPageModule)},{path:"add-group",loadChildren:()=>Promise.all([s.e(9492),s.e(148)]).then(s.bind(s,7768)).then(a=>a.AddGroupPageModule)},{path:"group-detail",loadChildren:()=>s.e(1588).then(s.bind(s,9208)).then(a=>a.GroupDetailPageModule)},{path:"translator",loadChildren:()=>s.e(9236).then(s.bind(s,9236)).then(a=>a.TranslatorPageModule)},{path:"creator",loadChildren:()=>s.e(4984).then(s.bind(s,4984)).then(a=>a.CreatorPageModule)},{path:"qr-share",loadChildren:()=>s.e(5056).then(s.bind(s,5056)).then(a=>a.QrSharePageModule)},{path:"noti-alert",loadChildren:()=>s.e(7816).then(s.bind(s,7816)).then(a=>a.NotiAlertPageModule)},{path:"admin-tools",loadChildren:()=>s.e(6710).then(s.bind(s,6710)).then(a=>a.AdminToolsPageModule)},{path:"weblink-gen",loadChildren:()=>s.e(3544).then(s.bind(s,3544)).then(a=>a.WeblinkGenPageModule)}];let x=(()=>{var a;class C{}return(a=C).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[E.qQ.forChild(N),E.qQ]}),C})(),j=(()=>{var a;class C{}return(a=C).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[P.MD,e.y,g.wZ,x]}),C})()}}]);