"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6898],{4688:(U,Z,a)=>{a.d(Z,{b:()=>k});var P=a(6845),t=a(9468),h=a(3857),y=a(6052),x=a(9080),p=a(1325),A=a(797),Q=a(6814);function b(c,v){if(1&c&&(t.TgZ(0,"ion-select-option",7),t._uU(1),t.qZA()),2&c){const u=v.$implicit;t.Q6J("value",u),t.xp6(1),t.hij("",u.name," ")}}function D(c,v){if(1&c&&(t.TgZ(0,"ion-select-option",7),t._uU(1),t.qZA()),2&c){const u=v.$implicit;t.Q6J("value",u),t.xp6(1),t.Oqu(u.name+" ("+u.server.name+")")}}function e(c,v){if(1&c&&(t.TgZ(0,"ion-select-option",7),t._uU(1),t.qZA()),2&c){const u=v.$implicit;t.Q6J("value",u),t.xp6(1),t.hij(" ",u.urls[0],"")}}function O(c,v){if(1&c){const u=t.EpF();t.TgZ(0,"ion-item",8),t.NdJ("click",function(){t.CHM(u);const r=t.oxw();return t.KtG(r.scanQRCode())}),t.TgZ(1,"ion-label",9),t._uU(2),t.qZA()()}if(2&c){const u=t.oxw();t.Q6J("disabled",!u.ActKeyLength),t.xp6(2),t.Oqu(u.lang.text.QuickQRShare.SendData)}}function N(c,v){if(1&c&&t._UZ(0,"img",10),2&c){const u=t.oxw();t.Q6J("src",u.QRCodeSRC,t.LSH)}}let k=(()=>{var c;class v{constructor(l,r,g,f,I,R){this.lang=l,this.global=r,this.nakama=g,this.modalCtrl=f,this.navParams=I,this.indexed=R,this.ActKeyLength=!1,this.userInput={servers:[],groups:[],rtcserver:[]},this.servers=[],this.groups=[],this.rtcServer=[],this.NoReturn=!1}ngOnInit(){this.NoReturn=this.navParams.get("NoReturn"),this.servers=this.nakama.get_all_server_info(),this.groups=this.nakama.rearrange_group_list(),this.indexed.loadTextFromUserPath("servers/webrtc_server.json",(l,r)=>{l&&r&&(this.rtcServer=JSON.parse(r))});for(let l=this.groups.length-1;l>=0;l--)"missing"==this.groups[l].status&&this.groups.splice(l,1)}SelectGroupServer(l){this.userInput.servers=l.detail.value||[],this.information_changed()}SelectGroupChannel(l){this.userInput.groups=l.detail.value||[],this.information_changed()}SelectRTCServer(l){this.userInput.rtcserver=l.detail.value||[],this.information_changed()}information_changed(){this.result_address=`${P.Oy}pjcone_pwa/`;let l="",r=0;for(let g=0,f=this.userInput.servers.length;g<f;g++)l+=r?"&":"?",l+="server=",l+=`${this.userInput.servers[g].name||""},${this.userInput.servers[g].address||""},${this.userInput.servers[g].useSSL||""},${this.userInput.servers[g].port||7350},${this.userInput.servers[g].key||""}`,r++;for(let g=0,f=this.userInput.groups.length;g<f;g++)l+=r?"&":"?",l+="group=",l+=`${this.userInput.groups[g].name},${this.userInput.groups[g].id}`,r++;if(this.userInput.rtcserver.length)for(let g=0,f=this.userInput.rtcserver.length;g<f;g++)l+=r?"&":"?",l+="rtcserver=",l+=`[${this.userInput.rtcserver[g].urls}],${this.userInput.rtcserver[g].username},${this.userInput.rtcserver[g].credential}`,r++;l?(this.result_address+=l,this.QRCodeSRC=this.global.readasQRCodeFromString(this.result_address),this.ActKeyLength=!0):(this.QRCodeSRC="",this.ActKeyLength=!1)}scanQRCode(){this.modalCtrl.dismiss(this.result_address)}}return(c=v).\u0275fac=function(l){return new(l||c)(t.Y36(h.b),t.Y36(y.AN),t.Y36(x.a),t.Y36(p.IN),t.Y36(p.X1),t.Y36(A.H))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-qr-share"]],decls:24,vars:14,consts:[[1,"ion-no-border"],["slot","start",3,"click"],["defaultHref",""],["multiple","true",3,"label","placeholder","ionChange"],[3,"value",4,"ngFor","ngForOf"],["button","",3,"disabled","click",4,"ngIf"],["style","width: 100%; height: auto;","alt","QRCodeSRC",3,"src",4,"ngIf"],[3,"value"],["button","",3,"disabled","click"],[1,"ion-text-center"],["alt","QRCodeSRC",2,"width","100%","height","auto",3,"src"]],template:function(l,r){1&l&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-buttons",1),t.NdJ("click",function(){return r.modalCtrl.dismiss()}),t._UZ(5,"ion-back-button",2),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),t._uU(9),t.qZA()(),t.TgZ(10,"ion-item")(11,"ion-select",3),t.NdJ("ionChange",function(f){return r.SelectGroupServer(f)}),t.YNc(12,b,2,2,"ion-select-option",4),t.qZA()(),t.TgZ(13,"ion-item")(14,"ion-select",3),t.NdJ("ionChange",function(f){return r.SelectGroupChannel(f)}),t.YNc(15,D,2,2,"ion-select-option",4),t.qZA()(),t.TgZ(16,"ion-item")(17,"ion-select",3),t.NdJ("ionChange",function(f){return r.SelectRTCServer(f)}),t.YNc(18,e,2,2,"ion-select-option",4),t.qZA()(),t.YNc(19,O,3,2,"ion-item",5),t.TgZ(20,"ion-item-divider")(21,"ion-label"),t._uU(22),t.qZA()(),t.YNc(23,N,1,1,"img",6),t.qZA()),2&l&&(t.xp6(3),t.Oqu(r.lang.text.Settings.quickQRshare),t.xp6(6),t.Oqu(r.lang.text.QuickQRShare.SelectData),t.xp6(2),t.Q6J("label",r.lang.text.QuickQRShare.GroupServer)("placeholder",r.lang.text.QuickQRShare.EmptyData),t.xp6(1),t.Q6J("ngForOf",r.servers),t.xp6(2),t.Q6J("label",r.lang.text.QuickQRShare.Group)("placeholder",r.lang.text.QuickQRShare.EmptyData),t.xp6(1),t.Q6J("ngForOf",r.groups),t.xp6(2),t.Q6J("label",r.lang.text.WebRTCDevManager.Title)("placeholder",r.lang.text.QuickQRShare.EmptyData),t.xp6(1),t.Q6J("ngForOf",r.rtcServer),t.xp6(1),t.Q6J("ngIf",!r.NoReturn),t.xp6(3),t.Oqu(r.lang.text.QuickQRShare.ReceiveData),t.xp6(1),t.Q6J("ngIf",r.QRCodeSRC))},dependencies:[Q.sg,Q.O5,p.oU,p.Sm,p.W2,p.Gu,p.Ie,p.rH,p.Q$,p.t9,p.n0,p.wd,p.sr,p.QI,p.cs]}),v})()},6898:(U,Z,a)=>{a.r(Z),a.d(Z,{SettingsPageModule:()=>B});var P=a(6814),t=a(95),h=a(1325),y=a(5877),x=a(5861),p=a(1450),A=a(6845),Q=a(4978),b=a(4156),D=a(4688),e=a(9468),O=a(7488),N=a(9080),k=a(797),c=a(3857),v=a(4093),u=a(6052),l=a(2372),r=a(9376),g=a(1768);const f=["LangSel"];function I(s,S){if(1&s){const d=e.EpF();e.TgZ(0,"ion-item",6),e.NdJ("click",function(){e.CHM(d);const n=e.oxw(2);return e.KtG(n.start_minimalserver())}),e.TgZ(1,"ion-label"),e._uU(2),e.qZA()()}if(2&s){const d=e.oxw(2);e.xp6(2),e.Oqu(d.lang.text.Settings.joinDediChat)}}function R(s,S){if(1&s){const d=e.EpF();e.TgZ(0,"div")(1,"ion-item-divider")(2,"ion-label"),e._uU(3),e.qZA()(),e.TgZ(4,"ion-item",6),e.NdJ("click",function(){e.CHM(d);const n=e.oxw();return e.KtG(n.go_to_page("admin-tools"))}),e.TgZ(5,"ion-label"),e._uU(6),e.qZA()(),e.YNc(7,I,3,1,"ion-item",11),e.qZA()}if(2&s){const d=e.oxw();e.xp6(3),e.Oqu(d.lang.text.Settings.admin_tools),e.xp6(3),e.Oqu(d.lang.text.Settings.ServerAdmin),e.xp6(1),e.Q6J("ngIf",!d.cant_dedicated&&d.can_use_http)}}function E(s,S){if(1&s){const d=e.EpF();e.TgZ(0,"ion-item",6),e.NdJ("click",function(){e.CHM(d);const n=e.oxw();return e.KtG(n.go_to_page("translator"))}),e.TgZ(1,"ion-label"),e._uU(2),e.qZA()()}if(2&s){const d=e.oxw();e.xp6(2),e.Oqu(d.lang.text.Settings.AppTranslator)}}function M(s,S){if(1&s){const d=e.EpF();e.TgZ(0,"ion-item",6),e.NdJ("click",function(){e.CHM(d);const n=e.oxw();return e.KtG(n.open_playstore())}),e.TgZ(1,"ion-label"),e._uU(2),e.qZA()()}if(2&s){const d=e.oxw();e.xp6(2),e.Oqu(d.lang.text.Settings.OpenPlayStore)}}const J=[{path:"",component:(()=>{var s;class S{constructor(i,n,o,m,_,C,T,L,Y,K,$,G){this.modalCtrl=i,this.nav=n,this.statusBar=o,this.nakama=m,this.indexed=_,this.lang=C,this.noti=T,this.global=L,this.file=Y,this.p5toast=K,this.loadingCtrl=$,this.server=G,this.cant_dedicated=!1,this.can_use_http=!1,this.is_nativefier=A.bS,this.as_admin=[],this.availables=[],this.isAdHiding=!0,this.self={},this.will_enter=!1,this.lock_modal_open=!1}ngOnInit(){("DesktopPWA"==A.n$||"MobilePWA"==A.n$)&&(this.cant_dedicated=!0),this.AD_Div=document.getElementById("advertise"),this.checkAdsInfo(),this.check_if_admin(),this.nakama.on_socket_disconnected.settings_admin_check=()=>{this.check_if_admin()},this.can_use_http="http:"==window.location.protocol||A.bS}check_if_admin(){this.as_admin=this.nakama.get_all_server_info(!0,!0);for(let i=this.as_admin.length-1;i>=0;i--)this.as_admin[i].is_admin||this.as_admin.splice(i,1)}start_minimalserver(){"offline"==this.statusBar.dedicated.official.groupchat?(this.statusBar.settings.dedicatedServer="pending",this.statusBar.dedicated.official.groupchat="pending",this.server.funcs.onStart=()=>{this.statusBar.settings.dedicatedServer="online",this.statusBar.dedicated.official.groupchat="online",this.start_minimalchat("ws://127.0.0.1")},this.server.funcs.onFailed=()=>{this.statusBar.settings.dedicatedServer="missing",this.statusBar.dedicated.official.groupchat="missing",setTimeout(()=>{this.statusBar.settings.dedicatedServer="offline",this.statusBar.dedicated.official.groupchat="offline"},1500)},this.server.initialize()):this.start_minimalchat("ws://127.0.0.1")}checkAdsInfo(){var i=this;return(0,x.Z)(function*(){try{let n=yield fetch(`${A.Oy}pjcone_ads/${i.lang.lang}.txt`);if(n.ok){let o=yield(yield n.blob()).text();i.indexed.saveTextFileToUserPath(o,"ads_list.txt");let m=o.split("\n");i.listAvailableAds(m)}}catch{i.indexed.loadTextFromUserPath("ads_list.txt",(o,m)=>{o&&m&&i.listAvailableAds(m.split("\n"))})}})()}listAvailableAds(i){let o,n=(new Date).getTime();this.availables.length=0;for(let _=0,C=i.length;_<C;_++){let T=i[_].split(",");Number(T[0])<n?n<Number(T[1])&&this.availables.push([Number(T[0]),Number(T[1]),T[2]]):o?Number(T[0])<o&&(o=Number(T[0])):o=Number(T[0])}let m=this.AD_Div.childNodes;this.isAdHiding=!0,m.forEach(_=>{_.remove()}),this.availables.length?this.displayRandomAds():o&&(this.refreshAds=setTimeout(()=>{this.indexed.loadTextFromUserPath("ads_list.txt",(_,C)=>{_&&C&&this.listAvailableAds(C.split("\n"))})},o-(new Date).getTime()))}displayRandomAds(){let i=Math.floor(Math.random()*this.availables.length),n=this.availables[i];this.refreshAds=setTimeout(()=>{this.indexed.loadTextFromUserPath("ads_list.txt",(m,_)=>{m&&_&&this.listAvailableAds(_.split("\n"))})},n[1]-(new Date).getTime());let o=document.createElement("iframe");o.id="AdFrame",o.setAttribute("src",n[2]),o.setAttribute("frameborder","0"),o.setAttribute("class","full_screen"),this.isAdHiding=!1,this.AD_Div.appendChild(o)}open_link(i){window.open(i,"_system")}ionViewWillEnter(){this.profile_filter="online"==this.statusBar.settings.groupServer?"filter: grayscale(0) contrast(1);":"filter: grayscale(.9) contrast(1.4);",this.check_if_admin()}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.nav.pop()};let i=[];i.push(()=>this.go_to_page("noti-alert")),i.push(()=>this.go_to_qr_share()),i.push(()=>this.open_inapp_explorer()),i.push(()=>this.go_to_page("weblink-gen")),i.push(()=>this.go_to_webrtc_manager()),i.push(()=>this.download_serverfile()),this.as_admin.length&&(!this.cant_dedicated&&this.can_use_http&&i.push(()=>this.start_minimalserver()),i.push(()=>this.go_to_page("admin-tools"))),i.push(()=>this.go_to_page("creator")),"ko"!=this.lang.lang&&i.push(()=>this.go_to_page("translator")),i.push(()=>this.LangClicked()),i.push(()=>this.go_to_page("licenses")),this.cant_dedicated&&i.push(()=>this.open_playstore()),this.global.p5key.KeyShortCut.Digit=n=>{i[n]&&i[n]()}}start_minimalchat(i){var n=this;if(!this.lock_modal_open){if(this.lock_modal_open=!0,this.will_enter)return;"online"!=this.statusBar.settings[i?"dedicated_groupchat":"community_ranchat"]&&"certified"!=this.statusBar.settings[i?"dedicated_groupchat":"community_ranchat"]&&(this.statusBar.settings[i?"dedicated_groupchat":"community_ranchat"]="pending"),this.will_enter=!0,setTimeout(()=>{this.will_enter=!1},500),this.modalCtrl.create({component:Q.X,componentProps:{address:i,name:this.nakama.users.self.display_name}}).then(function(){var o=(0,x.Z)(function*(m){yield m.present(),n.lock_modal_open=!1});return function(m){return o.apply(this,arguments)}}())}}open_inapp_explorer(){this.nav.navigateForward("user-fs-dir",{animation:p.Nn})}LangClicked(){this.LangSel.open()}LanguageChanged(i){this.lang.lang=i.detail.value,this.lang.load_selected_lang()}go_to_page(i){this.nav.navigateForward(`portal/settings/${i}`,{animation:p.Nn})}download_serverfile(){var i=this;return(0,x.Z)(function*(){if("Android"==A.n$||"iOS"==A.n$){let n=yield i.loadingCtrl.create({message:i.lang.text.TodoDetail.WIP});n.present();let o="nakama.zip",m=yield fetch("assets/data/nakama.zip").then(_=>_.blob());try{yield i.file.writeFile(i.file.externalDataDirectory,o,m),n.dismiss(),i.p5toast.show({text:i.lang.text.ContentViewer.fileSaved})}catch(_){console.log("download_serverfile: ",_);try{yield i.file.writeExistingFile(i.file.externalDataDirectory,o,m),n.dismiss(),i.p5toast.show({text:i.lang.text.ContentViewer.fileSaved})}catch(C){console.log("download_serverfile_rewrite: ",C),n.dismiss(),i.p5toast.show({text:i.lang.text.ContentViewer.fileSaveFailed})}}}else{let n=document.createElement("a");n.download="nakama.zip",n.href="assets/data/nakama.zip",document.body.appendChild(n),n.click(),document.body.removeChild(n),n.remove(),i.p5toast.show({text:i.lang.text.ContentViewer.fileSaved})}})()}go_to_qr_share(){this.modalCtrl.create({component:D.b,componentProps:{NoReturn:!0}}).then(i=>{delete this.global.p5key.KeyShortCut.Escape,delete this.global.p5key.KeyShortCut.Digit,i.onDidDismiss().then(()=>{this.ionViewDidEnter()}),i.present()})}go_to_webrtc_manager(){this.modalCtrl.create({component:b.$}).then(i=>{delete this.global.p5key.KeyShortCut.Escape,delete this.global.p5key.KeyShortCut.Digit,i.onDidDismiss().then(()=>{this.ionViewDidEnter()}),i.present()})}open_playstore(){window.open("https://play.google.com/store/apps/details?id=org.pjcone.portal","_system")}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape,delete this.global.p5key.KeyShortCut.Digit}ngOnDestroy(){delete this.nakama.on_socket_disconnected.settings_admin_check,clearTimeout(this.refreshAds)}}return(s=S).\u0275fac=function(i){return new(i||s)(e.Y36(h.IN),e.Y36(h.SH),e.Y36(O.g),e.Y36(N.a),e.Y36(k.H),e.Y36(c.b),e.Y36(v.J),e.Y36(u.AN),e.Y36(l.$),e.Y36(r.F),e.Y36(h.HT),e.Y36(g.A))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-settings"]],viewQuery:function(i,n){if(1&i&&e.Gf(f,5),2&i){let o;e.iGM(o=e.CRH())&&(n.LangSel=o.first)}},decls:61,vars:21,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/main"],[3,"hidden"],["slot","end","fill","clear","shape","round",3,"click"],["id","advertise",1,"advertise_banner"],["button","",3,"click"],["value","Devkit"],["slot","header"],["slot","content"],[4,"ngIf"],["button","",3,"click",4,"ngIf"],["name","language",1,"icon_margin"],[2,"pointer-events","none",3,"label","value","placeholder","ionChange"],["LangSel",""],["value","en"],["value","ko"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-buttons",1),e._UZ(5,"ion-back-button",2),e.qZA()()(),e.TgZ(6,"ion-content")(7,"div",3)(8,"ion-item-divider")(9,"ion-label"),e._uU(10),e.qZA(),e.TgZ(11,"ion-button",4),e.NdJ("click",function(){return n.open_link("https://is2you2.github.io/")}),e._uU(12),e.qZA()(),e._UZ(13,"div",5),e.qZA(),e.TgZ(14,"ion-item-divider")(15,"ion-label"),e._uU(16),e.qZA()(),e.TgZ(17,"ion-item",6),e.NdJ("click",function(){return n.go_to_page("noti-alert")}),e.TgZ(18,"ion-label"),e._uU(19),e.qZA()(),e.TgZ(20,"ion-item",6),e.NdJ("click",function(){return n.go_to_qr_share()}),e.TgZ(21,"ion-label"),e._uU(22),e.qZA()(),e.TgZ(23,"ion-item",6),e.NdJ("click",function(){return n.open_inapp_explorer()}),e.TgZ(24,"ion-label"),e._uU(25),e.qZA()(),e.TgZ(26,"ion-accordion-group")(27,"ion-accordion",7)(28,"ion-item",8)(29,"ion-label"),e._uU(30),e.qZA()(),e.TgZ(31,"div",9)(32,"ion-item",6),e.NdJ("click",function(){return n.go_to_page("weblink-gen")}),e.TgZ(33,"ion-label"),e._uU(34),e.qZA()(),e.TgZ(35,"ion-item",6),e.NdJ("click",function(){return n.go_to_webrtc_manager()}),e.TgZ(36,"ion-label"),e._uU(37),e.qZA()(),e.TgZ(38,"ion-item",6),e.NdJ("click",function(){return n.download_serverfile()}),e.TgZ(39,"ion-label"),e._uU(40),e.qZA()()()()(),e.YNc(41,R,8,3,"div",10),e.TgZ(42,"ion-item-divider")(43,"ion-label"),e._uU(44),e.qZA()(),e.TgZ(45,"ion-item",6),e.NdJ("click",function(){return n.go_to_page("creator")}),e.TgZ(46,"ion-label"),e._uU(47),e.qZA()(),e.YNc(48,E,3,1,"ion-item",11),e.TgZ(49,"ion-item",6),e.NdJ("click",function(){return n.LangClicked()}),e._UZ(50,"ion-icon",12),e.TgZ(51,"ion-select",13,14),e.NdJ("ionChange",function(m){return n.LanguageChanged(m)}),e.TgZ(53,"ion-select-option",15),e._uU(54,"English"),e.qZA(),e.TgZ(55,"ion-select-option",16),e._uU(56,"\ud55c\uad6d\uc5b4"),e.qZA()()(),e.TgZ(57,"ion-item",6),e.NdJ("click",function(){return n.go_to_page("licenses")}),e.TgZ(58,"ion-label"),e._uU(59),e.qZA()(),e.YNc(60,M,3,1,"ion-item",11),e.qZA()),2&i&&(e.xp6(3),e.Oqu(n.lang.text.Settings.Title),e.xp6(4),e.Q6J("hidden",n.isAdHiding),e.xp6(3),e.Oqu(n.lang.text.Settings.CommunityAds),e.xp6(2),e.hij(" ",n.lang.text.Settings.AdsContact," "),e.xp6(4),e.Oqu(n.lang.text.Settings.env_info),e.xp6(3),e.Oqu(n.lang.text.Settings.NotificationSetting),e.xp6(3),e.Oqu(n.lang.text.Settings.quickQRshare),e.xp6(3),e.Oqu(n.lang.text.Settings.InAppExplorer),e.xp6(5),e.Oqu(n.lang.text.Settings.DevKit),e.xp6(4),e.Oqu(n.lang.text.Settings.WebLinkGen),e.xp6(3),e.Oqu(n.lang.text.WebRTCDevManager.Title),e.xp6(3),e.Oqu(n.lang.text.Settings.ServerFiles),e.xp6(1),e.Q6J("ngIf",n.as_admin.length),e.xp6(3),e.Oqu(n.lang.text.Settings.AppInfo),e.xp6(3),e.Oqu(n.lang.text.Settings.AppCreator),e.xp6(1),e.Q6J("ngIf","ko"!=n.lang.lang),e.xp6(3),e.Q6J("label",n.lang.text.Settings.AppLanguage)("value",n.lang.lang)("placeholder",n.lang.lang),e.xp6(8),e.Oqu(n.lang.text.Settings.LicenseNotice),e.xp6(1),e.Q6J("ngIf",n.cant_dedicated))},dependencies:[P.O5,h.We,h.eh,h.oU,h.YG,h.Sm,h.W2,h.Gu,h.gu,h.Ie,h.rH,h.Q$,h.t9,h.n0,h.wd,h.sr,h.QI,h.cs],styles:[".advertise_banner[_ngcontent-%COMP%]{width:100%;max-height:150px}.img_icon_size[_ngcontent-%COMP%]{width:21px;height:21px;margin-right:16px}.icon_margin[_ngcontent-%COMP%]{margin-right:16px}"]}),S})()},{path:"licenses",loadChildren:()=>a.e(8944).then(a.bind(a,8944)).then(s=>s.LicensesPageModule)},{path:"group-server",loadChildren:()=>a.e(2503).then(a.bind(a,2503)).then(s=>s.GroupServerPageModule)},{path:"add-group",loadChildren:()=>Promise.all([a.e(6146),a.e(2098)]).then(a.bind(a,2098)).then(s=>s.AddGroupPageModule)},{path:"group-detail",loadChildren:()=>a.e(4970).then(a.bind(a,4970)).then(s=>s.GroupDetailPageModule)},{path:"translator",loadChildren:()=>a.e(7661).then(a.bind(a,7661)).then(s=>s.TranslatorPageModule)},{path:"creator",loadChildren:()=>a.e(7178).then(a.bind(a,7178)).then(s=>s.CreatorPageModule)},{path:"qr-share",loadChildren:()=>a.e(8732).then(a.bind(a,8732)).then(s=>s.QrSharePageModule)},{path:"noti-alert",loadChildren:()=>a.e(4622).then(a.bind(a,4622)).then(s=>s.NotiAlertPageModule)},{path:"admin-tools",loadChildren:()=>a.e(5229).then(a.bind(a,5229)).then(s=>s.AdminToolsPageModule)},{path:"weblink-gen",loadChildren:()=>a.e(8821).then(a.bind(a,8821)).then(s=>s.WeblinkGenPageModule)}];let F=(()=>{var s;class S{}return(s=S).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[y.Bz.forChild(J),y.Bz]}),S})(),B=(()=>{var s;class S{}return(s=S).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[P.ez,t.u5,h.Pc,F]}),S})()}}]);