"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8180],{8180:(G,r,o)=>{o.r(r),o.d(r,{PortalPageModule:()=>k});var b=o(177),h=o(4341),l=o(5374),d=o(9858),u=o(617),t=o(3953),m=o(3656),g=o(4237),P=o(482),y=o(755),I=o(4020),f=o(8065);function p(e,i){1&e&&t.nrm(0,"ion-badge",9)}function C(e,i){1&e&&t.nrm(0,"ion-badge",9)}const v=[{path:"",component:(()=>{var e;class i{constructor(a,n,s,S,M,R){this.navCtrl=a,this.nakama=n,this.global=s,this.indexed=S,this._webrtc=M,this.statusBar=R,this.OnInit=!0,this.TodoIcon="checkbox",this.SubscribesIcon="chatbubble-outline",this.ArcadeIcon="game-controller-outline",this.CommunityIcon="newspaper-outline"}ngOnInit(){}ionViewDidEnter(){if(this.CacheKeyShortCut&&(this.global.p5key.KeyShortCut=this.CacheKeyShortCut),this.try_add_shortcut(),this.global.p5todo&&this.global.p5todo.PlayCanvas&&"checkbox"==this.TodoIcon&&this.global.p5todo.PlayCanvas(),this.nakama.AfterLoginAct.length&&this.global.RemoveAllModals(()=>{this.nakama.open_profile_page()}),this.OnInit){switch(localStorage.getItem("StartPage")||0){case"0":this.bottom_tab_selected(),this.ionTabs.select("main");break;case"1":this.subscribe_button(),this.ionTabs.select("subscribes");break;case"2":this.arcade_tab_selected(),this.ionTabs.select("arcade");break;case"3":this.community_tab_selected(),this.ionTabs.select("community")}this.OnInit=!1}}try_add_shortcut(){this.global.p5key&&this.global.p5key.KeyShortCut?this.global.p5key.KeyShortCut.BottomTab=a=>{switch(a){case"Q":this.bottom_tab_selected(),this.ionTabs.select("main");break;case"W":this.subscribe_button(),this.ionTabs.select("subscribes");break;case"E":this.arcade_tab_selected(),this.ionTabs.select("arcade");break;case"R":this.community_tab_selected(),this.ionTabs.select("community");break;case"T":this.setting_button()}}:setTimeout(()=>{this.try_add_shortcut()},100)}subscribe_button(){this.nakama.has_new_channel_msg=!1,this.SubscribesIcon="chatbubble",this.TodoIcon="checkbox-outline",this.CommunityIcon="newspaper-outline",this.ArcadeIcon="game-controller-outline"}setting_button(){this.global.RemoveAllModals(()=>{this.navCtrl.navigateForward("portal/settings",{animation:u.NC})})}bottom_tab_selected(){this.SubscribesIcon="chatbubble-outline",this.TodoIcon="checkbox",this.CommunityIcon="newspaper-outline",this.ArcadeIcon="game-controller-outline"}arcade_tab_selected(){this.SubscribesIcon="chatbubble-outline",this.TodoIcon="checkbox-outline",this.ArcadeIcon="game-controller",this.CommunityIcon="newspaper-outline"}community_tab_selected(){this.SubscribesIcon="chatbubble-outline",this.TodoIcon="checkbox-outline",this.CommunityIcon="newspaper",this.ArcadeIcon="game-controller-outline"}ionViewWillLeave(){this.CacheKeyShortCut=this.global.p5key.KeyShortCut,this.global.p5key.KeyShortCut={},this.global.p5todo&&this.global.p5todo.StopCanvas&&this.global.p5todo.StopCanvas()}}return(e=i).\u0275fac=function(a){return new(a||e)(t.rXU(m.q9),t.rXU(g.X),t.rXU(P.z3),t.rXU(y.n),t.rXU(I.j),t.rXU(f.j))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-portal"]],viewQuery:function(a,n){if(1&a&&t.GBs(l.p4,5),2&a){let s;t.mGM(s=t.lsd())&&(n.ionTabs=s.first)}},decls:15,vars:11,consts:[["slot","bottom"],["tab","main",3,"click","disabled"],[3,"name"],["tab","subscribes",3,"click","disabled"],["color","danger","mode","md",4,"ngIf"],["tab","arcade",3,"click","disabled"],["tab","community",3,"click","disabled"],[3,"click","disabled"],["name","settings-outline"],["color","danger","mode","md"]],template:function(a,n){1&a&&(t.j41(0,"ion-content")(1,"ion-tabs")(2,"ion-tab-bar",0)(3,"ion-tab-button",1),t.bIt("click",function(){return n.bottom_tab_selected()}),t.nrm(4,"ion-icon",2),t.k0s(),t.j41(5,"ion-tab-button",3),t.bIt("click",function(){return n.subscribe_button()}),t.nrm(6,"ion-icon",2),t.DNE(7,p,1,0,"ion-badge",4),t.k0s(),t.j41(8,"ion-tab-button",5),t.bIt("click",function(){return n.arcade_tab_selected()}),t.nrm(9,"ion-icon",2),t.k0s(),t.j41(10,"ion-tab-button",6),t.bIt("click",function(){return n.community_tab_selected()}),t.nrm(11,"ion-icon",2),t.DNE(12,C,1,0,"ion-badge",4),t.k0s(),t.j41(13,"ion-tab-button",7),t.bIt("click",function(){return n.setting_button()}),t.nrm(14,"ion-icon",8),t.k0s()()()()),2&a&&(t.R7$(3),t.Y8G("disabled",!n.indexed.ionicDB),t.R7$(),t.Y8G("name",n.TodoIcon),t.R7$(),t.Y8G("disabled",!n.indexed.ionicDB),t.R7$(),t.Y8G("name",n.SubscribesIcon),t.R7$(),t.Y8G("ngIf",n.nakama.has_new_channel_msg),t.R7$(),t.Y8G("disabled",!n.indexed.ionicDB),t.R7$(),t.Y8G("name",n.ArcadeIcon),t.R7$(),t.Y8G("disabled",!n.indexed.ionicDB),t.R7$(),t.Y8G("name",n.CommunityIcon),t.R7$(),t.Y8G("ngIf",n.nakama.has_new_post),t.R7$(),t.Y8G("disabled",!n.indexed.ionicDB))},dependencies:[b.bT,l.In,l.W9,l.iq,l.Jq,l.qW,l.p4]}),i})(),children:[{path:"",redirectTo:"main",pathMatch:"full"},{path:"subscribes",loadChildren:()=>o.e(9128).then(o.bind(o,9128)).then(e=>e.SubscribesPageModule)},{path:"main",loadChildren:()=>o.e(887).then(o.bind(o,887)).then(e=>e.MainPageModule)},{path:"community",loadChildren:()=>o.e(2655).then(o.bind(o,2655)).then(e=>e.CommunityPageModule)},{path:"arcade",loadChildren:()=>o.e(6767).then(o.bind(o,6767)).then(e=>e.ArcadePageModule)}]},{path:"settings",loadChildren:()=>o.e(767).then(o.bind(o,767)).then(e=>e.SettingsPageModule)}];let T=(()=>{var e;class i{}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[d.iI.forChild(v),d.iI]}),i})(),k=(()=>{var e;class i{}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[b.MD,h.YN,l.bv,T]}),i})()}}]);