"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8413],{794:(z,p,o)=>{o.r(p),o.d(p,{InstantCallPageModule:()=>B});var I=o(177),_=o(4341),c=o(5374),g=o(9858),f=o(467),v=o(5402),S=o(8326),R=o(9349),t=o(3953),b=o(482),P=o(4234),x=o(4020),W=o(345),T=o(4237),G=o(9900),k=o(3656);const w=["InstantCallServer"];function y(s,l){1&s&&t.nrm(0,"div",8)}function A(s,l){if(1&s&&(t.j41(0,"ion-select-option",15),t.EFF(1),t.k0s()),2&s){const n=l.$implicit;t.Y8G("value",n),t.R7$(),t.JRh(n.info.name)}}function j(s,l){if(1&s){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-select",12,0),t.bIt("ionChange",function(e){t.eBV(n);const a=t.XpG(2);return t.Njj(a.SelectAddressTarget(e))}),t.j41(3,"ion-select-option",13),t.EFF(4),t.k0s(),t.DNE(5,A,2,2,"ion-select-option",14),t.k0s()()}if(2&s){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.AddGroup.SelectServer),t.R7$(3),t.JRh(n.lang.text.voidDraw.InternalConn),t.R7$(),t.Y8G("ngForOf",n.ServerList)}}function E(s,l){if(1&s){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",16),t.mxI("ngModelChange",function(e){t.eBV(n);const a=t.XpG(2);return t.DH7(a.UserInputCustomAddress,e)||(a.UserInputCustomAddress=e),t.Njj(e)}),t.k0s(),t.j41(2,"ion-icon",17),t.bIt("click",function(){t.eBV(n);const e=t.XpG(2);return t.Njj(e.global.open_custom_site(e.UserInputCustomAddress))}),t.k0s()()}if(2&s){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.voidDraw.InputAddress),t.R50("ngModel",n.UserInputCustomAddress)}}function N(s,l){if(1&s){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",18),t.mxI("ngModelChange",function(e){t.eBV(n);const a=t.XpG(2);return t.DH7(a.Port,e)||(a.Port=e),t.Njj(e)}),t.k0s()()}if(2&s){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.GroupServer.Port),t.R50("ngModel",n.Port),t.Y8G("placeholder",n.lang.text.Settings.joinDedi_placeholder+" (3478)")}}function $(s,l){if(1&s){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",18),t.mxI("ngModelChange",function(e){t.eBV(n);const a=t.XpG(2);return t.DH7(a.Username,e)||(a.Username=e),t.Njj(e)}),t.k0s()()}if(2&s){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.WebRTCDevManager.Username),t.R50("ngModel",n.Username),t.Y8G("placeholder",n.lang.text.Settings.joinDedi_placeholder+" (username)")}}function U(s,l){if(1&s){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",18),t.mxI("ngModelChange",function(e){t.eBV(n);const a=t.XpG(2);return t.DH7(a.Password,e)||(a.Password=e),t.Njj(e)}),t.k0s()()}if(2&s){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.WebRTCDevManager.Credential),t.R50("ngModel",n.Password),t.Y8G("placeholder",n.lang.text.Settings.joinDedi_placeholder+" (password)")}}function M(s,l){if(1&s){const n=t.RV6();t.j41(0,"div",9),t.DNE(1,j,6,3,"ion-item",7)(2,E,3,2,"ion-item",7)(3,N,2,3,"ion-item",7)(4,$,2,3,"ion-item",7)(5,U,2,3,"ion-item",7),t.j41(6,"ion-item",10),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.LinkToServer())}),t.j41(7,"ion-label",11),t.EFF(8),t.k0s()()()}if(2&s){const n=t.XpG();t.R7$(),t.Y8G("ngIf",n.ServerList.length),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(3),t.JRh(n.lang.text.voidDraw.ConnectToAddress)}}function X(s,l){if(1&s){const n=t.RV6();t.j41(0,"ion-item",10),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.copy_qr_address())}),t.j41(1,"ion-label",11),t.EFF(2),t.k0s()()}if(2&s){const n=t.XpG();t.R7$(2),t.JRh(n.QRCodeAsString)}}function D(s,l){if(1&s&&(t.j41(0,"ion-label",22),t.EFF(1),t.k0s()),2&s){const n=t.XpG(2);t.R7$(),t.JRh(n.lang.text.InstantCall.Connecting)}}function F(s,l){if(1&s&&(t.j41(0,"ion-label",22),t.EFF(1),t.k0s()),2&s){const n=t.XpG(2);t.R7$(),t.JRh(n.lang.text.InstantCall.Connected)}}function Y(s,l){if(1&s&&(t.j41(0,"div")(1,"div",19),t.nrm(2,"ion-icon",20),t.j41(3,"div"),t.DNE(4,D,2,1,"ion-label",21)(5,F,2,1,"ion-label",21),t.k0s()()()),2&s){const n=t.XpG();t.R7$(4),t.Y8G("ngIf",!n.InitEnd),t.R7$(),t.Y8G("ngIf",n.InitEnd)}}const O=[{path:"",component:(()=>{var s;class l{constructor(i,e,a,u,h,C,d,r,m){this.global=i,this.lang=e,this.webrtc=a,this.title=u,this.nakama=h,this.router=C,this.route=d,this.p5toast=r,this.navCtrl=m,this.UserInputCustomAddress="",this.NeedInputCustomAddress=!1,this.WaitingConnect=!1,this.isCustomServer=!1,this.InitEnd=!1,this.PageOut=!1,this.CallClosed=!1}ngOnInit(){this.ServerList=this.nakama.get_all_online_server(),setTimeout(()=>{this.InstantCallServer?(this.InstantCallServer.value=this.ServerList[0]||"local",this.SelectAddressTarget({detail:{value:this.InstantCallServer.value}})):this.NeedInputCustomAddress=!0},0),this.route.queryParams.subscribe(i=>{const e=this.router.getCurrentNavigation().extras.state;e&&(this.UserInputCustomAddress=e.address,this.ChannelId=e.channel,this.Port=e.port,this.Username=e.username,this.Password=e.password,this.LinkToServer(!0))}),this.global.FocusOnPortalEnterAct=()=>{!this.PageOut&&this.CallClosed&&this.navCtrl.pop()}}SelectAddressTarget(i){"local"===(this.title.setTitle(this.lang.text.InstantCall.Title),i.detail.value)?(this.UserInputCustomAddress="",this.NeedInputCustomAddress=!0):(this.UserInputCustomAddress=i.detail.value.info.address,this.NeedInputCustomAddress=!1)}LinkToServer(i=!1){var e=this;if(v.R.requestAudioRecordingPermission(),i&&!this.ChannelId)return this.p5toast.show({text:this.lang.text.InstantCall.MissingInfo}),void this.navCtrl.pop();let a=this.UserInputCustomAddress.split("://"),u=a.pop();this.isCustomServer=i||!this.InstantCallServer||"local"==this.InstantCallServer.value,this.isCustomServer&&this.nakama.SaveWebRTCServer({urls:[`stun:${u}:${this.Port||3478}`,`turn:${u}:${this.Port||3478}`],username:this.Username||"username",credential:this.Password||"password"});let C,h=a.pop();h||(h=this.global.checkProtocolFromAddress(u)?"wss":"ws"),this.InstantCallWSClient=new WebSocket(`${h}://${u}:12013`),this.InstantCallWSClient.onopen=(0,f.A)(function*(){e.WaitingConnect=!0,e.p5toast.show({text:e.lang.text.InstantCall.Waiting}),e.ChannelId?(e.InstantCallWSClient.send(JSON.stringify({type:"join",channel:e.ChannelId})),yield new Promise(d=>setTimeout(d,40)),e.webrtc.initialize("audio").then(()=>{e.webrtc.HangUpCallBack=()=>{e.InstantCallWSClient.close()},e.ShowWaiting(),e.webrtc.CreateOffer(),e.InstantCallWSClient.send(JSON.stringify({type:"init_req"}))})):e.InstantCallWSClient.send(JSON.stringify({type:"init"}))}),this.InstantCallWSClient.onmessage=d=>{let r=JSON.parse(d.data);if(void 0===C)C=r.uid;else if(C==r.uid)return;switch(r.type){case"leave":this.InstantCallWSClient.close();break;case"init_id":this.InstantCallWSClient.send(JSON.stringify({type:"join",channel:r.id})),this.ChannelId=r.id,this.QRCodeAsString=`${R.d2}godotchat_pwa/?instc=${this.UserInputCustomAddress},${this.ChannelId},${this.Port||""},${this.Username||""},${this.Password||""}`;break;case"init_req":this.webrtc.initialize("audio").then((0,f.A)(function*(){e.webrtc.HangUpCallBack=()=>{e.InstantCallWSClient&&e.InstantCallWSClient.close()},e.ShowWaiting(),e.webrtc.CreateOffer(),yield new Promise(m=>setTimeout(m,40)),e.InstantCallWSClient.send(JSON.stringify({type:"socket_react",channel:e.ChannelId,act:"WEBRTC_INIT_REQ_SIGNAL"}))}));break;case"socket_react":switch(r.act){case"WEBRTC_REPLY_INIT_SIGNAL":this.nakama.socket_reactive[r.act](r.data_str),"EOL"==r.data_str&&this.webrtc.CreateAnswer({client:this.InstantCallWSClient,channel:this.ChannelId});break;case"WEBRTC_ICE_CANDIDATES":this.nakama.socket_reactive[r.act](r.data_str,{client:this.InstantCallWSClient,channel:this.ChannelId}),this.InstantCallWSClient.send(JSON.stringify({type:"init_end",channel:this.ChannelId})),this.InitEnd=!0;break;case"WEBRTC_INIT_REQ_SIGNAL":this.nakama.socket_reactive[r.act]({client:this.InstantCallWSClient,channel:this.ChannelId});break;case"WEBRTC_RECEIVE_ANSWER":this.nakama.socket_reactive[r.act](r.data_str,{client:this.InstantCallWSClient,channel:this.ChannelId})}break;case"init_end":this.InitEnd=!0}},this.InstantCallWSClient.onerror=d=>{console.error("\uc989\uc11d \ud1b5\ud654 \uc6f9\uc18c\ucf13 \uc624\ub958: ",d),this.InstantCallWSClient.close()},this.InstantCallWSClient.onclose=()=>{this.p5toast.show({text:this.lang.text.InstantCall.CallEnd}),this.WaitingConnect=!1,this.InstantCallWSClient.onopen=null,this.InstantCallWSClient.onclose=null,this.InstantCallWSClient.onmessage=null,this.InstantCallWSClient.onerror=null,this.InstantCallWSClient=void 0,this.webrtc.close_webrtc(!1),this.CallClosed=!0,!this.PageOut&&this.global.FocusOnPortal&&this.navCtrl.pop()}}copy_qr_address(i=this.QRCodeAsString){this.global.WriteValueToClipboard("text/plain",i)}ShowWaiting(){this.QRCodeAsString=void 0,!this.p5canvas&&(this.p5canvas=new S(i=>{let e=document.getElementById("InstantCallCanvasDiv"),a=1;i.setup=()=>{i.pixelDensity(1),i.createCanvas(e.clientWidth,e.clientHeight).parent(e),i.noStroke()};class u{constructor(){this.color={r:0,g:0,b:0},this.size=1,this.targetSize=100,this.opacity=200,this.pos=i.createVector(0,0),this.dir=i.createVector(i.random(-1.4,1.4),i.random(-2,-4)),this.color.r=i.random(0,255),this.color.g=i.random(0,255),this.color.b=i.random(0,255),this.targetSize=i.random(80,150)}display(){this.size<this.targetSize&&(this.size+=6),this.size>this.targetSize&&(this.size=this.targetSize),i.push(),i.fill(this.color.r,this.color.g,this.color.b,this.opacity),i.circle(this.pos.x,this.pos.y,this.size*a),i.pop(),this.pos.add(this.dir),this.dir.y+=.04,this.opacity-=1}}let h=[],C=!0;i.draw=()=>{C&&(h.push(new u),C=!1,setTimeout(()=>{C=!0},500)),i.clear(),i.push(),i.translate(i.width/2,i.height/2);for(let d=h.length-1;d>=0;d--)h[d].display(),h[d].opacity<=0&&h.splice(d,1);i.pop(),this.InitEnd&&(a-=.02),a<=0&&i.remove()},i.windowResized=()=>{i.resizeCanvas(e.clientWidth,e.clientHeight)}}))}ionViewWillEnter(){this.PageOut=!1,this.p5canvas&&this.p5canvas.windowResized(),this.global.StoreShortCutAct("instant-call"),this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()},this.CallClosed&&this.navCtrl.pop()}ionViewWillLeave(){this.PageOut=!0,delete this.global.p5key.KeyShortCut.Escape,this.global.RestoreShortCutAct("instant-call")}ngOnDestroy(){this.p5canvas&&this.p5canvas.remove(),this.InstantCallWSClient&&this.InstantCallWSClient.close(),this.isCustomServer&&this.nakama.RemoveWebRTCServer(this.UserInputCustomAddress.split("://").pop()),this.route.queryParams.unsubscribe(),this.global.FocusOnPortalEnterAct=void 0}}return(s=l).\u0275fac=function(i){return new(i||s)(t.rXU(b.z3),t.rXU(P.y),t.rXU(x.j),t.rXU(W.hE),t.rXU(T.X),t.rXU(g.Ix),t.rXU(g.nX),t.rXU(G.G),t.rXU(k.q9))},s.\u0275cmp=t.VBU({type:s,selectors:[["app-instant-call"]],viewQuery:function(i,e){if(1&i&&t.GBs(w,5),2&i){let a;t.mGM(a=t.lsd())&&(e.InstantCallServer=a.first)}},decls:11,vars:5,consts:[["InstantCallServer",""],[1,"ion-no-border"],["slot","start"],["defaultHref","portal/subscribes"],["id","InstantCallCanvasDiv","style","position: absolute; width: 100%; height: 100%; overflow: hidden; pointer-events: none;",4,"ngIf"],["style","flex: 0 1 auto;",4,"ngIf"],["button","",3,"click",4,"ngIf"],[4,"ngIf"],["id","InstantCallCanvasDiv",2,"position","absolute","width","100%","height","100%","overflow","hidden","pointer-events","none"],[2,"flex","0 1 auto"],["button","",3,"click"],[1,"ion-text-center"],["value","local",2,"pointer-events","none",3,"ionChange","label"],["value","local"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["placeholder","(wss://)0.0.0.0",1,"ion-text-right",3,"ngModelChange","label","ngModel"],["slot","end","name","open-outline",3,"click"],[1,"ion-text-right",3,"ngModelChange","label","ngModel","placeholder"],[1,"disconnect_info"],["color","medium","name","call-outline",2,"width","60px","height","60px"],["color","medium",4,"ngIf"],["color","medium"]],template:function(i,e){1&i&&(t.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.k0s(),t.j41(4,"ion-buttons",2),t.nrm(5,"ion-back-button",3),t.k0s()()(),t.j41(6,"ion-content"),t.DNE(7,y,1,0,"div",4)(8,M,9,6,"div",5)(9,X,3,1,"ion-item",6)(10,Y,6,2,"div",7),t.k0s()),2&i&&(t.R7$(3),t.JRh(e.lang.text.InstantCall.Title),t.R7$(4),t.Y8G("ngIf",e.WaitingConnect),t.R7$(),t.Y8G("ngIf",!e.WaitingConnect),t.R7$(),t.Y8G("ngIf",e.QRCodeAsString&&e.WaitingConnect),t.R7$(),t.Y8G("ngIf",e.WaitingConnect||e.InitEnd))},dependencies:[I.Sq,I.bT,_.BC,_.vS,c.QW,c.W9,c.eU,c.iq,c.$w,c.uz,c.he,c.Nm,c.Ip,c.BC,c.ai,c.Je,c.Gw,c.el]}),l})()}];let V=(()=>{var s;class l{}return(s=l).\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.$C({type:s}),s.\u0275inj=t.G2t({imports:[g.iI.forChild(O),g.iI]}),l})(),B=(()=>{var s;class l{}return(s=l).\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.$C({type:s}),s.\u0275inj=t.G2t({imports:[I.MD,_.YN,c.bv,V]}),l})()}}]);