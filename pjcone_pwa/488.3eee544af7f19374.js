"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[488],{6069:(k,x,o)=>{o.d(x,{R:()=>T});var n=o(2096),u=o(3996),d=o(5742),P=o(9912),g=o(4182);let T=(()=>{class f{constructor(p,h,v,b){this.navParams=p,this.modalCtrl=h,this.lang=v,this.nakama=b,this.info="QR\ucf54\ub4dc \ub610\ub294 \ubc14\ucf54\ub4dc\ub97c \uc778\uc2dd\ud558\uc600\uc73c\ub098 \uc774 \uc571\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uad6c\uc131\uc774 \uc544\ub2d9\ub2c8\ub2e4.",this.result={}}ngOnInit(){this.result=this.navParams.get("result"),this.nakama.removeBanner()}}return f.\u0275fac=function(p){return new(p||f)(n.Y36(u.X1),n.Y36(u.IN),n.Y36(d.b),n.Y36(P.a))},f.\u0275cmp=n.Xpm({type:f,selectors:[["app-qrelse"]],decls:22,vars:6,consts:[["slot","start",3,"click"],["defaultHref","subscribes"],["disabled","",1,"infobox",3,"ngModel","ngModelChange"]],template:function(p,h){1&p&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"\ub0b4\uc6a9 \uc77d\uae30"),n.qZA(),n.TgZ(4,"ion-buttons",0),n.NdJ("click",function(){return h.modalCtrl.dismiss()}),n._UZ(5,"ion-back-button",1),n.qZA()()(),n.TgZ(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),n._uU(9),n.qZA()(),n.TgZ(10,"textarea",2),n.NdJ("ngModelChange",function(b){return h.lang.text.QRElse.info=b}),n.qZA(),n._UZ(11,"ion-item-divider"),n.TgZ(12,"ion-item")(13,"ion-label")(14,"p"),n._uU(15),n.qZA(),n.TgZ(16,"h2"),n._uU(17),n.qZA()()(),n.TgZ(18,"ion-item-divider")(19,"ion-label"),n._uU(20),n.qZA()(),n.TgZ(21,"textarea",2),n.NdJ("ngModelChange",function(b){return h.result.text=b}),n.qZA()()),2&p&&(n.xp6(9),n.Oqu(h.lang.text.QRElse.Title),n.xp6(1),n.Q6J("ngModel",h.lang.text.QRElse.info),n.xp6(5),n.Oqu(h.lang.text.QRElse.format),n.xp6(2),n.Oqu(h.result.format),n.xp6(3),n.Oqu(h.lang.text.QRElse.contents),n.xp6(1),n.Q6J("ngModel",h.result.text))},directives:[u.Gu,u.sr,u.wd,u.Sm,u.oU,u.cs,u.W2,u.rH,u.Q$,g.Fj,g.JJ,g.On,u.Ie],styles:[""]}),f})()},488:(k,x,o)=>{o.r(x),o.d(x,{SubscribesPageModule:()=>N});var n=o(9808),u=o(4182),d=o(3996),P=o(501),g=o(5016),T=o(3041),f=o(6069),e=o(2096),p=o(9645),h=o(3336),v=o(4606);let b=(()=>{class i{constructor(t){this.statusBar=t,this.list={}}initialize(t,s,a,l){if(!this.statusBar.tools[t])throw new Error(`\uadf8\ub7f0 \ud234\uc740 \uc5c6\uc2b5\ub2c8\ub2e4: ${t}`);if(this.statusBar.tools[t]="pending","DesktopPWA"!=g.n$&&"MobilePWA"!=g.n$){if(null!=this.list[t])return void console.warn("\ub3d9\uc77c\ud55c \uc11c\ubc84 \uad6c\uc131\uc774 \uc774\ubbf8 \uc874\uc7ac\ud568: ",this.list);this.list[t]={},this.list[t].server||(this.list[t].server=cordova.plugins.wsserver),this.list[t].server.start(s,{onFailure:(c,_,m)=>{this.onServerClose(t)},onOpen:c=>{this.list[t].target==c.remoteAddr?this.list[t].users=c.uuid:(console.log("\ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790: ",this.list[t].target,"/=",c.remoteAddr),this.list[t].server.close({uuid:c.uuid},4001,"\ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790")),this.onClientConnected(t)},onMessage:(c,_)=>{try{let m=JSON.parse(_);l(m)}catch(m){console.error(`Tool-server_json \ubcc0\ud658 \uc624\ub958_${_}: ${m}`)}},onClose:(c,_,m,S)=>{this.stop(t)},origins:[],protocols:[],tcpNoDelay:!0},(c,_)=>{this.onServerOpen(t),a()},c=>{this.onServerClose(t)})}else this.onServerClose(t)}stop(t){"DesktopPWA"!=g.n$&&"MobilePWA"!=g.n$&&this.list[t].server.stop((s,a)=>{this.onServerClose(t),delete this.list[t]})}onServerOpen(t){console.log("test onServerOpen: ",t),this.statusBar.tools[t]="online"}onClientConnected(t){this.statusBar.tools[t]="certified"}onServerClose(t){this.statusBar.tools[t]="missing",setTimeout(()=>{this.statusBar.tools[t]="offline"},500)}check_addresses(t,s){"DesktopPWA"!=g.n$&&"MobilePWA"!=g.n$&&(this.list[t].server||(this.list[t].server=cordova.plugins.wsserver),this.list[t].server.getInterfaces(a=>{s(a)}))}send_to(t,s){let a=Object.keys(this.list[t].users)[0];this.list[t].server.send({uuid:a},s)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(v.g))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var Z=o(2855);let C=(()=>{class i{constructor(t){this.wsc=t}initialize(t){this.client=new WebSocket(`${this.wsc.socket_header}://${this.wsc.address_override||g.GA}:12020`),this.client.onopen=a=>{this.client.send(JSON.stringify(t))},setTimeout(()=>{this.client.close()},5e3)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Z.Z))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var A=o(9912),O=o(5742);function M(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item",10),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit;return e.oxw(2).check_notifications(a)}),e.TgZ(1,"ion-label"),e._uU(2),e.qZA()()}if(2&i){const t=e.oxw().$implicit,s=e.oxw(2);e.xp6(2),e.Oqu(s.nakama.notifications_rearrange[t].request)}}function w(i,r){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,M,3,1,"ion-item",9),e.qZA()),2&i){const t=r.$implicit,s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",s.nakama.notifications_rearrange.length>t)}}const y=function(){return[0,1,2]};function Q(i,r){if(1&i&&(e.TgZ(0,"ion-accordion-group",3,4)(2,"ion-accordion",5)(3,"ion-item",6)(4,"ion-label"),e._uU(5),e.qZA()(),e.TgZ(6,"ion-list",7),e.YNc(7,w,2,1,"div",8),e.qZA()()()),2&i){const t=e.oxw();e.Q6J("value",!1),e.xp6(5),e.Oqu(t.lang.text.Subscribes.has_noties),e.xp6(2),e.Q6J("ngForOf",e.DdM(3,y))}}function R(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"ion-item-divider")(2,"ion-label"),e._uU(3),e.qZA()(),e.TgZ(4,"ion-item",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().scanQRCode()}),e.TgZ(5,"ion-label",11),e._uU(6),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Oqu(t.lang.text.Subscribes.almighty_link),e.xp6(3),e.Oqu(t.lang.text.Subscribes.almighty_button)}}function E(i,r){if(1&i&&(e.TgZ(0,"ion-item",12)(1,"ion-label"),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.lang.text.Subscribes.noChatList)}}function I(i,r){1&i&&e._UZ(0,"div",21)}function J(i,r){if(1&i&&e._UZ(0,"img",22),2&i){const t=e.oxw().$implicit;e.Akn("online"==t.status?"filter: grayscale(0) contrast(1)":"filter: grayscale(.9) contrast(1.4)"),e.Q6J("src",t.info.img,e.LSH)}}function U(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item",10),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw(2).go_to_chatroom(l)}),e.TgZ(1,"div",14),e.YNc(2,I,1,0,"div",15),e.qZA(),e.TgZ(3,"div",16),e.YNc(4,J,1,3,"img",17),e.qZA(),e.TgZ(5,"ion-label")(6,"div",18)(7,"table")(8,"tr")(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",19),e._uU(12),e.qZA()()()(),e.TgZ(13,"div",20),e._uU(14),e.qZA()()()}if(2&i){const t=r.$implicit,s=e.oxw(2);e.xp6(1),e.Akn("background-color: "+s.statusBar.colors[t.status||"offline"]),e.xp6(1),e.Q6J("ngIf",t.is_new),e.xp6(2),e.Q6J("ngIf",t.info),e.xp6(6),e.hij(" ",t.info?t.info.name||t.info.display_name||s.lang.text.Subscribes.noTitiedChat:t.title||s.lang.text.Subscribes.noTitiedChat," "),e.xp6(2),e.hij(" ","("+t.server.target+")"," "),e.xp6(2),e.hij(" ",t.last_comment||t.noti||s.lang.text.Subscribes.noMessageHistory," ")}}function $(i,r){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,U,15,7,"ion-item",13),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.nakama.channels)}}const Y=[{path:"",component:(()=>{class i{constructor(t,s,a,l,c,_,m,S,W){this.modalCtrl=t,this.codescan=s,this.p5toast=a,this.tools=l,this.weblink=c,this.nakama=_,this.statusBar=m,this.wsc=S,this.lang=W,this.cant_scan=!1,this.lock_chatroom=!1}ngOnInit(){("DesktopPWA"==g.n$||"MobilePWA"==g.n$)&&(this.cant_scan=!0)}ionViewDidEnter(){this.nakama.subscribe_lock=!0,this.nakama.resumeBanner()}scanQRCode(){this.codescan.scan({disableSuccessBeep:!0,disableAnimations:!0,resultDisplayDuration:0}).then(t=>{if(!t.cancelled)try{let s=JSON.parse(t.text.trim());if(this.wsc.client.readyState!=this.wsc.client.OPEN)return void this.p5toast.show({text:this.lang.text.Subscribes.needLinkWithCommServ});for(let a=0,l=s.length;a<l;a++)switch(s[a].type){case"link":this.weblink.initialize({pid:s[a].value,uuid:this.nakama.uuid});break;case"tools":this.create_tool_server(s[a].value);break;case"server":this.nakama.add_group_server(s[a].value);break;case"group":this.nakama.try_add_group(s[a]);break;default:throw new Error("\uc9c0\uc815\ub41c \ud2c0 \uc544\ub2d8")}}catch(s){console.error("scanQRCode_failed: ",s),this.modalCtrl.create({component:f.R,componentProps:{result:t}}).then(a=>a.present())}}).catch(t=>{console.error(t),this.p5toast.show({text:this.lang.text.Subscribes.CameraPermissionDenied,lateable:!0})})}create_tool_server(t){let s,a=l=>console.warn(`${t.name}_create_tool_server_onMessage: ${l}`);if("engineppt"!==t.name)throw new Error(`\uc9c0\uc815\ub41c \ud234 \uc815\ubcf4\uac00 \uc544\ub2d8: ${t}`);s=12021,a=l=>{console.log("engineppt init test: ",l)},this.tools.initialize(t.name,12021,()=>{this.tools.check_addresses(t.name,l=>{let c=Object.keys(l),_=[];for(let m=0,S=c.length;m<S;m++)_=[..._,...l[c[m]].ipv4Addresses];this.weblink.initialize({from:"mobile",pid:t.client,addresses:_})})},a)}go_to_chatroom(t){this.lock_chatroom||(this.lock_chatroom=!0,this.modalCtrl.create({component:T.P,componentProps:{info:t}}).then(s=>{this.nakama.go_to_chatroom_without_admob_act(s),this.lock_chatroom=!1}))}check_notifications(t){let s=this.nakama.notifications_rearrange[t].server;this.nakama.check_notifications(this.nakama.notifications_rearrange[t],s.isOfficial,s.target)}ionViewWillLeave(){this.nakama.subscribe_lock=!1}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.IN),e.Y36(p.m),e.Y36(h.F),e.Y36(b),e.Y36(C),e.Y36(A.a),e.Y36(v.g),e.Y36(Z.Z),e.Y36(O.b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-subscribes"]],decls:12,vars:6,consts:[["value","colors","expand","inset",3,"value",4,"ngIf"],[4,"ngIf"],["button","","disabled","",4,"ngIf"],["value","colors","expand","inset",3,"value"],["accordionGroup",""],["value","colors"],["slot","header"],["slot","content"],[4,"ngFor","ngForOf"],["button","",3,"click",4,"ngIf"],["button","",3,"click"],[1,"ion-text-center"],["button","","disabled",""],["button","",3,"click",4,"ngFor","ngForOf"],[1,"additional_form","status_bar_double"],["class","new_circle",4,"ngIf"],[1,"additional_form","bg_img_form"],["class","profile_img",3,"style","src",4,"ngIf"],[1,"form_margin","header"],[1,"server_target"],[1,"form_margin","content"],[1,"new_circle"],[1,"profile_img",3,"src"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.qZA()()(),e.TgZ(4,"ion-content"),e.YNc(5,Q,8,4,"ion-accordion-group",0),e.YNc(6,R,7,2,"div",1),e.TgZ(7,"ion-item-divider")(8,"ion-label"),e._uU(9),e.qZA()(),e.YNc(10,E,3,1,"ion-item",2),e.YNc(11,$,2,1,"div",1),e.qZA()),2&t&&(e.xp6(3),e.Oqu(s.lang.text.Subscribes.Title),e.xp6(2),e.Q6J("ngIf",s.nakama.notifications_rearrange.length),e.xp6(1),e.Q6J("ngIf",!s.cant_scan),e.xp6(3),e.Oqu(s.lang.text.Subscribes.Chat),e.xp6(1),e.Q6J("ngIf",!s.nakama.channels.length),e.xp6(1),e.Q6J("ngIf",s.nakama.channels.length))},directives:[d.Gu,d.sr,d.wd,d.W2,n.O5,d.eh,d.We,d.Ie,d.Q$,d.q_,n.sg,d.rH],styles:[".header[_ngcontent-%COMP%]{padding-bottom:4px}.content[_ngcontent-%COMP%]{color:#888;height:24px;display:table-cell;vertical-align:middle;padding:0 16px}.status_bar[_ngcontent-%COMP%]{width:5px;height:76%}.server_target[_ngcontent-%COMP%]{color:#888;padding-left:4px}.new_circle[_ngcontent-%COMP%]{position:relative;top:-5px;left:9px;width:8px;height:8px;border-radius:4px;background:#ff4961}"]}),i})()},{path:"chat-room",loadChildren:()=>o.e(9340).then(o.bind(o,9340)).then(i=>i.ChatRoomPageModule)},{path:"qrelse",loadChildren:()=>o.e(1388).then(o.bind(o,1388)).then(i=>i.QRelsePageModule)}];let B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[P.Bz.forChild(Y)],P.Bz]}),i})(),N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[n.ez,u.u5,d.Pc,B]]}),i})()}}]);