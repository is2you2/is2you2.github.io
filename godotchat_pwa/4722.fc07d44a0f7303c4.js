"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4722],{4722:(W,x,l)=>{l.r(x),l.d(x,{OthersProfilePageModule:()=>L});var C=l(177),$=l(4341),u=l(5374),k=l(9858),I=l(467),w=l(8326),e=l(3953),E=l(4237),B=l(8065),D=l(9900),R=l(4234),V=l(1357),j=l(482),G=l(3656);function S(i,h){if(1&i){const s=e.RV6();e.j41(0,"td")(1,"ion-button",9),e.bIt("click",function(){e.eBV(s);const a=e.XpG(2);return e.Njj(a.notification_react(-5))}),e.EFF(2),e.k0s()()}if(2&i){const s=e.XpG(2);e.R7$(2),e.SpI(" ",s.lang.text.OtherProfile.add_to_group," ")}}function X(i,h){if(1&i){const s=e.RV6();e.j41(0,"td")(1,"ion-button",9),e.bIt("click",function(){e.eBV(s);const a=e.XpG(2);return e.Njj(a.notification_react(-2))}),e.EFF(2),e.k0s()()}if(2&i){const s=e.XpG(2);e.R7$(2),e.SpI(" ",s.lang.text.OtherProfile.add_friend," ")}}function U(i,h){if(1&i){const s=e.RV6();e.j41(0,"td")(1,"ion-button",10),e.bIt("click",function(){e.eBV(s);const a=e.XpG(2);return e.Njj(a.kick_user_from_group())}),e.EFF(2),e.k0s()()}if(2&i){const s=e.XpG(2);e.R7$(2),e.SpI(" ",s.lang.text.OtherProfile.kick_from_group," ")}}function M(i,h){if(1&i){const s=e.RV6();e.j41(0,"div",5)(1,"table",6)(2,"tr"),e.DNE(3,S,3,1,"td",7)(4,X,3,1,"td",7),e.j41(5,"td")(6,"ion-button",8),e.bIt("click",function(){e.eBV(s);const a=e.XpG();return e.Njj(a.create_chat())}),e.EFF(7),e.k0s()(),e.DNE(8,U,3,1,"td",7),e.k0s()()()}if(2&i){const s=e.XpG();e.R7$(3),e.Y8G("ngIf",s.has_admin&&s.additional_buttons[-5]),e.R7$(),e.Y8G("ngIf",s.additional_buttons[-2]),e.R7$(2),e.Y8G("disabled",s.lock_create_chat),e.R7$(),e.SpI(" ",s.lang.text.OtherProfile.privacy_chat," "),e.R7$(),e.Y8G("ngIf",s.has_admin)}}const T=[{path:"",component:(()=>{var i;class h{constructor(t,a,o,r,c,g,p,v,y){this.nakama=t,this.statusBar=a,this.p5toast=o,this.lang=r,this.mClipboard=c,this.global=g,this.route=p,this.router=v,this.navCtrl=y,this.info={},this.group_info={},this.additional_buttons={},this.has_admin=!1,this.BackButtonPressed=!1,this.lock_create_chat=!1}InitBrowserBackButtonOverride(){try{window.history.replaceState(null,null,window.location.href),window.onpopstate=()=>{this.BackButtonPressed||(this.BackButtonPressed=!0,this.navCtrl.pop())}}catch(t){console.log("\ud0d0\uc0c9 \uae30\ub85d \ubcc0\uacbd\uc2dc \uc624\ub958 \ubc1c\uc0dd: ",t)}}ngOnInit(){var t=this;return(0,I.A)(function*(){t.route.queryParams.subscribe(a=>{try{const o=t.router.getCurrentNavigation().extras.state;t.InitBrowserBackButtonOverride(),t.info=o.info,t.has_admin=o.has_admin,t.group_info=o.group,t.isOfficial=t.group_info.server.isOfficial,t.target=t.group_info.server.target,t.nakama.load_other_user(t.info.user.id,t.isOfficial,t.target),t.nakama.socket_reactive["others-profile"]=r=>{t.p5canvas.ChangeImageSmooth(r)},t.nakama.socket_reactive["others-online"]=()=>{t.p5canvas.loop()},t.catch_user_noties()}catch(o){console.log("\ub2e4\ub978 \uc0ac\ub78c\uc758 \ud504\ub85c\ud544 \uc5f4\uae30 \uc2e4\ud328: ",o)}})})()}ionViewWillEnter(){this.OtherCanvasDiv=document.getElementById("OtherUserCanvasDiv"),this.p5canvas=new w(t=>{let o,r,c,p,n,g=1,v="0, 0, 0",y=0;t.setup=()=>{let O=t.color(`#${(this.info.user.id.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6)}`);v=`${t.red(O)}, ${t.green(O)}, ${t.blue(O)}`,p=t.createDiv(),p.style("width","100%"),p.style("height","100%"),p.style("background-image",`linear-gradient(to top, rgba(${v}, 0), rgba(${v}, 0))`),p.parent(this.OtherCanvasDiv),t.noCanvas(),t.pixelDensity(1),n=t.createDiv();const d="156px";n.style("width",d),n.style("height",d),n.style("position","absolute"),n.style("top","120px"),n.style("left","50%"),n.style("transform","translateX(-50%)"),n.style("border-radius",d),n.style("background-image","url(assets/data/avatar.svg)"),n.style("background-position","center"),n.style("background-repeat","no-repeat"),n.style("background-size","cover"),n.parent(this.OtherCanvasDiv);let f=t.createDiv();const P="36px";f.style("background-color",this.info.user.online?this.statusBar.colors.online:this.statusBar.colors.offline),f.style("width",P),f.style("height",P),f.style("position","absolute"),f.style("top","128px"),f.style("left",this.OtherCanvasDiv.clientWidth/2+38+"px"),setTimeout(()=>{f.style("left",this.OtherCanvasDiv.clientWidth/2+38+"px")},0),f.style("border-radius",P),f.parent(this.OtherCanvasDiv),t.OnlineLamp=f,r=t.createImg(this.info.user.img,"profile_img"),r.style("width",d),r.style("height",d),r.style("border-radius",d),r.style("position","absolute"),r.style("object-fit","cover"),this.info.user.img||r.hide(),r.parent(n),c=t.createImg(void 0,"before_img"),c.style("width",d),c.style("height",d),c.style("border-radius",d),c.style("position","absolute"),c.style("object-fit","cover"),c.hide(),c.parent(n),t.ChangeImageSmooth=b=>{n.style("background-image","url(assets/data/avatar.svg)"),b?(c.elt.src=void 0,c.hide()):(c.elt.src=r.elt.src,c.show()),r.elt.src=b,g=1,t.loop(),this.info.user.img=b,b?r.show():r.hide()};let _=t.createDiv();_.style("width","100%"),_.style("position","absolute"),_.style("top","330px"),_.style("display","flex"),_.style("flex-direction","column"),_.parent(this.OtherCanvasDiv),o=t.createDiv(this.info.user.display_name||this.lang.text.Profile.noname_user),o.style("font-size","36px"),o.style("font-weight","bold"),o.style("align-self","center"),o.style("width","80%"),o.style("text-align","center"),o.parent(_);let m=t.createDiv(this.info.user.id);m.style("color","var(--ion-color-medium)"),m.style("align-self","center"),m.style("margin-top","36px"),m.style("width","80%"),m.style("text-align","center"),m.style("cursor","copy"),m.parent(_),m.elt.onclick=()=>{this.copy_id()}},t.draw=()=>{g>0&&(g-=.025,c.style("opacity",`${g}`),r.style("opacity",""+(1-g))),this.info.user.online?this.lerpVal<1?this.lerpVal+=.025:this.lerpVal=1:this.lerpVal>0?this.lerpVal-=.025:this.lerpVal=0,y<1&&(y+=.025),r.style("filter",`grayscale(${t.lerp(.9,0,this.lerpVal)}) contrast(${t.lerp(1.4,1,this.lerpVal)})`),c.style("filter",`grayscale(${t.lerp(.9,0,this.lerpVal)}) contrast(${t.lerp(1.4,1,this.lerpVal)})`),p.style("background-image",`linear-gradient(to top, rgba(${v}, ${t.min(1,y)/2}), rgba(${v}, 0))`),g<=0&&(this.lerpVal>=1||this.lerpVal<=0)&&y>=1&&(this.info.user.img&&n.style("background-image",""),this.p5canvas.OnlineLamp.style("background-color",this.info.user.online?this.statusBar.colors.online:this.statusBar.colors.offline),t.noLoop())},t.windowResized=()=>{t.OnlineLamp.style("left",this.OtherCanvasDiv.clientWidth/2+38+"px")}})}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}catch_user_noties(){this.nakama.noti_origin[this.isOfficial]&&this.nakama.noti_origin[this.isOfficial][this.target]&&Object.keys(this.nakama.noti_origin[this.isOfficial][this.target]).forEach(o=>{this.nakama.noti_origin[this.isOfficial][this.target][o].sender_id==this.info.user.id&&(this.additional_buttons[this.nakama.noti_origin[this.isOfficial][this.target][o].code.toString()]=o)})}notification_react(t){switch(t){case 0:case-1:case-2:break;case-5:this.nakama.servers[this.isOfficial][this.target].client.addGroupUsers(this.nakama.servers[this.isOfficial][this.target].session,this.group_info.group_id||this.group_info.id,[this.info.user.id]).then(a=>{a||console.warn("\ubc34 \uc720\uc800\uc5d0 \ub300\ud55c\uac83 \uac19\uc74c, \ud655\uc778 \ud544\uc694"),this.p5toast.show({text:`${this.lang.text.OtherProfile.added_to_group}: ${this.info.user.display_name||this.lang.text.Profile.noname_user}`}),this.nakama.servers[this.isOfficial][this.target].client.deleteNotifications(this.nakama.servers[this.isOfficial][this.target].session,[this.additional_buttons[t.toString()]]).then(o=>{o||console.warn("\uc54c\ub9bc \ubd80\uc815 \uac80\ud1a0 \ud544\uc694"),delete this.additional_buttons[t.toString()],this.nakama.update_notifications(this.isOfficial,this.target),this.info.status="online",this.p5canvas.loop()})});break;default:console.warn("\uc608\uc0c1\ud558\uc9c0 \ubabb\ud55c \uc54c\ub9bc \ubc18\uc751: ",t)}}create_chat(){var t=this;return(0,I.A)(function*(){if(!t.lock_create_chat){t.lock_create_chat=!0;try{let a=yield t.nakama.join_chat_with_modulation(t.info.user.id,2,t.isOfficial,t.target,!0);t.nakama.go_to_chatroom_without_admob_act(a),t.lock_create_chat=!1,t.navCtrl.pop()}catch(a){t.lock_create_chat=!1,console.error(a)}}})()}kick_user_from_group(){switch(this.info.state){case 0:case 1:case 2:this.after_announce_kick();break;case 3:this.nakama.servers[this.isOfficial][this.target].client.deleteNotifications(this.nakama.servers[this.isOfficial][this.target].session,[this.additional_buttons[-5]]).then(t=>{t||console.warn("\uc54c\ub9bc \ubd80\uc815 \uac80\ud1a0 \ud544\uc694"),this.after_announce_kick(),delete this.additional_buttons[-5],this.nakama.update_notifications(this.isOfficial,this.target),this.info.status="missing",this.p5canvas.loop()});break;default:console.warn("\uc608\uc0c1\ud558\uc9c0 \ubabb\ud55c \uadf8\ub8f9 \uc0ac\uc6a9\uc790 \uc0c1\ud0dc: ",this.info)}}after_announce_kick(){this.nakama.servers[this.isOfficial][this.target].client.kickGroupUsers(this.nakama.servers[this.isOfficial][this.target].session,this.group_info.group_id||this.group_info.id,[this.info.user.id]).then(t=>{this.p5toast.show({text:`${this.lang.text.OtherProfile.kicked_from_group}: ${this.info.user.display_name||this.lang.text.Profile.noname_user}`}),this.navCtrl.pop()})}copy_id(){this.mClipboard.copy(this.info.user.id).catch(t=>{this.global.WriteValueToClipboard("text/plain",this.info.user.id)})}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape}ngOnDestroy(){delete this.nakama.socket_reactive["others-profile"],delete this.nakama.socket_reactive["others-online"],this.p5canvas.remove()}}return(i=h).\u0275fac=function(t){return new(t||i)(e.rXU(E.X),e.rXU(B.j),e.rXU(D.G),e.rXU(R.y),e.rXU(V.B),e.rXU(j.z3),e.rXU(k.nX),e.rXU(k.Ix),e.rXU(G.q9))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-others-profile"]],decls:9,vars:2,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref",""],["id","OtherUserCanvasDiv",2,"position","absolute","width","100%","height","100%","display","flex"],["style","width: 100%; position: absolute; bottom: 0;",4,"ngIf"],[2,"width","100%","position","absolute","bottom","0"],["id","input_table",2,"width","100%","background-color","black"],[4,"ngIf"],["expand","block",3,"click","disabled"],["expand","block",3,"click"],["color","danger","expand","block",3,"click"]],template:function(t,a){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-buttons",1),e.nrm(5,"ion-back-button",2),e.k0s()()(),e.j41(6,"ion-content"),e.nrm(7,"div",3),e.DNE(8,M,9,5,"div",4),e.k0s()),2&t&&(e.R7$(3),e.JRh(a.lang.text.OtherProfile.Title),e.R7$(5),e.Y8G("ngIf","online"==a.statusBar.groupServer[a.isOfficial][a.target]))},dependencies:[C.bT,u.Jm,u.QW,u.W9,u.eU,u.BC,u.ai,u.el],styles:[".fore-gradient[_ngcontent-%COMP%]{position:relative;background-image:linear-gradient(to top,#000,#0000);width:100%;height:100%}.content_size[_ngcontent-%COMP%]{height:360px}"]}),h})()}];let F=(()=>{var i;class h{}return(i=h).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[k.iI.forChild(T),k.iI]}),h})(),L=(()=>{var i;class h{}return(i=h).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[C.MD,$.YN,u.bv,F]}),h})()}}]);