"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1592],{1592:(R,g,a)=>{a.r(g),a.d(g,{AddPostPageModule:()=>A});var c=a(1368),u=a(4716),s=a(5624),m=a(3332),h=a(5020),p=a(340),t=a(4496),_=a(4500),f=a(9240),P=a(7136),v=a(3824);function C(e,d){if(1&e){const o=t.KQA();t.I0R(0,"ion-item",5),t.qCj("click",function(){const r=t.usT(o).index,l=t.GaO(2);return t.CGJ(l.select_server(r))}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y()()}if(2&e){const o=d.$implicit;t.yG2(2),t.cNF(o.name)}}function y(e,d){if(1&e){const o=t.KQA();t.I0R(0,"ion-accordion-group",15,16),t.qCj("click",function(){t.usT(o);const i=t.GaO();return t.CGJ(i.isExpanded=!0)}),t.I0R(2,"ion-accordion",17)(3,"ion-item",18)(4,"ion-label"),t.OEk(5),t.C$Y(),t.I0R(6,"ion-label",19),t.OEk(7),t.C$Y(),t.wR5(8,"ion-icon",20),t.C$Y(),t.I0R(9,"div",21),t.yuY(10,C,3,1,"ion-item",22),t.C$Y()()()}if(2&e){const o=t.GaO();t.E7m("disabled",o.isSaveClicked)("value",o.isExpanded),t.yG2(5),t.cNF(o.lang.text.AddGroup.SelectServer),t.yG2(2),t.cNF(o.servers[o.index].name),t.yG2(3),t.E7m("ngForOf",o.servers)}}function I(e,d){if(1&e&&(t.I0R(0,"ion-item",8)(1,"ion-label"),t.OEk(2),t.C$Y()()),2&e){const o=d.index;t.yG2(2),t.cNF("["+o+"] Click me")}}const k=[{path:"",component:(()=>{var e;class d{constructor(n,i,r,l,G,E){this.global=n,this.lang=i,this.navCtrl=r,this.nakama=l,this.modalCtrl=G,this.p5toast=E,this.servers=[],this.userInput={title:void 0,titleImage:void 0,content:void 0,creator_id:void 0,creator_name:void 0,UserColor:void 0,create_time:void 0,modify_time:void 0,server:void 0,attachments:[]},this.index=0,this.isExpanded=!1,this.isSaveClicked=!1}ngOnInit(){this.servers=this.nakama.get_all_server_info(!0,!0),this.select_server(0),this.userInput.creator_name=this.nakama.users.self.display_name}catchBottomTabShortCut(){this.BottomTabShortcut=this.global.p5key.KeyShortCut.BottomTab,delete this.global.p5key.KeyShortCut.BottomTab}ionViewWillEnter(){this.AddShortcut(),this.catchBottomTabShortCut();let n=document.getElementById("add_post_title").childNodes[1].childNodes[1].childNodes[1];this.userInput.title?document.getElementById("add_post_content").focus():n.focus()}go_to_profile(){this.modalCtrl.create({component:p.w,componentProps:{isOfficial:this.isOfficial,target:this.target}}).then(n=>n.present())}select_server(n){this.index=n,this.userInput.server=this.servers[n],this.isExpanded=!1,this.isOfficial=this.servers[n].isOfficial,this.target=this.servers[n].target,this.userInput.creator_id=this.nakama.servers[this.isOfficial][this.target].session.user_id,this.userInput.UserColor=(this.userInput.creator_id.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6)}AddShortcut(){this.global.p5key&&this.global.p5key.KeyShortCut&&(this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.navigateBack("portal/community")})}add_attachment(){this.isSaveClicked||(console.log("\ucca8\ubd80\ud30c\uc77c \ucd94\uac00\ud558\uae30 \ud14c\uc2a4\ud2b8"),this.userInput.attachments.push({filename:"test.psd",datatype:"url"}))}postData(){this.p5toast.show({text:"\uac8c\uc2dc\ubb3c \uc791\uc131 \uae30\ub2a5 \uc900\ube44\uc911"}),this.isSaveClicked=!0,this.userInput.create_time?this.userInput.modify_time=(new Date).getTime():this.userInput.create_time=(new Date).getTime()}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape,this.global.p5key.KeyShortCut.BottomTab=this.BottomTabShortcut}}return(e=d).\u0275fac=function(n){return new(n||e)(t.GI1(h.A1),t.GI1(_.o),t.GI1(f.wX),t.GI1(P.h),t.GI1(s.qS),t.GI1(v.O))},e.\u0275cmp=t.In1({type:e,selectors:[["app-add-post"]],decls:27,vars:17,consts:[[3,"translucent"],["slot","start"],["defaultHref","portal/community"],[3,"fullscreen"],["value","colors","expand","inset",3,"disabled","value","click",4,"ngIf"],["button","",3,"click"],[1,"additional_form","new_bg_form"],[1,"ion-text-end"],["button",""],["id","add_post_title",3,"disabled","placeholder","ngModel","ngModelChange"],["id","add_post_content",1,"infobox",2,"height","50%",3,"disabled","placeholder"],[3,"click"],["button","",4,"ngFor","ngForOf"],["button","",3,"disabled","click"],[1,"ion-text-center"],["value","colors","expand","inset",3,"disabled","value","click"],["accordionGroup",""],["value","colors"],["slot","header"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["slot","content"],["button","",3,"click",4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.OEk(3),t.C$Y(),t.I0R(4,"ion-buttons",1),t.wR5(5,"ion-back-button",2),t.C$Y()()(),t.I0R(6,"ion-content",3),t.yuY(7,y,11,5,"ion-accordion-group",4),t.I0R(8,"ion-item",5),t.qCj("click",function(){return i.go_to_profile()}),t.wR5(9,"div",6),t.I0R(10,"ion-label"),t.OEk(11),t.C$Y(),t.I0R(12,"ion-label",7),t.OEk(13),t.C$Y()(),t.I0R(14,"ion-item-divider")(15,"ion-label"),t.OEk(16),t.C$Y()(),t.I0R(17,"ion-item",8)(18,"ion-input",9),t.iHE("ngModelChange",function(l){return t.kNx(i.userInput.title,l)||(i.userInput.title=l),l}),t.C$Y()(),t.wR5(19,"textarea",10),t.I0R(20,"ion-item-divider",11),t.qCj("click",function(){return i.add_attachment()}),t.I0R(21,"ion-label"),t.OEk(22),t.C$Y()(),t.yuY(23,I,3,1,"ion-item",12),t.I0R(24,"ion-item",13),t.qCj("click",function(){return i.postData()}),t.I0R(25,"ion-label",14),t.OEk(26),t.C$Y()()()),2&n&&(t.E7m("translucent",!0),t.yG2(3),t.cNF(i.lang.text.AddPost.Title),t.yG2(3),t.E7m("fullscreen",!0),t.yG2(),t.E7m("ngIf",i.servers.length),t.yG2(2),t.m_g("background-image: linear-gradient(to right, #0000, #"+i.userInput.UserColor+"44)"),t.yG2(2),t.cNF(i.lang.text.AddPost.Creator),t.yG2(2),t.cNF(i.userInput.creator_name||i.lang.text.Profile.noname_user),t.yG2(3),t.cNF(i.lang.text.AddPost.AddNewPost),t.yG2(2),t.E7m("disabled",i.isSaveClicked)("placeholder",i.lang.text.AddPost.TitlePlaceholder),t.OKB("ngModel",i.userInput.title),t.yG2(),t.E7m("disabled",i.isSaveClicked),t.yG2(3),t.cNF(i.lang.text.AddPost.AddAttaches),t.yG2(),t.E7m("ngForOf",i.userInput.attachments),t.yG2(),t.E7m("disabled",i.isSaveClicked),t.yG2(2),t.cNF(i.lang.text.AddPost.Post))},dependencies:[c.ay,c.u_,u.ue,u._G,s.cm,s.qU,s.GS,s._i,s.wB,s.Ko,s.A5,s.Yb,s.S8,s.QR,s.tM,s.Md,s.qG,s.Im]}),d})()}];let b=(()=>{var e;class d{}return(e=d).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[m.qQ.forChild(k),m.qQ]}),d})(),A=(()=>{var e;class d{}return(e=d).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[c.MD,u.y,s.wZ,b]}),d})()}}]);