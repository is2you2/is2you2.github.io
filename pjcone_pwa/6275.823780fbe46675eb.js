"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6275],{6275:(I,c,o)=>{o.r(c),o.d(c,{PortalPageModule:()=>T});var d=o(9808),b=o(4182),s=o(3996),r=o(9705),h=o(4464),u=o(6505),t=o(9863),g=o(9912),m=o(1282),P=o(3496);function f(n,i){1&n&&t._UZ(0,"ion-badge",7)}const p=[{path:"",component:(()=>{class n{constructor(e,a,l,M){this.nav=e,this.nakama=a,this.global=l,this.indexed=M,this.SubscribesIcon="chatbubbles-outline",this.TodoIcon="checkbox"}ngOnInit(){this.nakama.act_callback_link.portal_tab_subscribes=()=>{this.ionTabs.select("subscribes"),this.subscribe_button()}}ionViewWillEnter(){this.create_p5sensor()}create_p5sensor(){!this.p5sensor&&"checkbox"==this.TodoIcon&&(this.p5sensor=new u(e=>{e.setup=()=>{e.noCanvas()},e.draw=()=>{this.global.godot_window.acc_input&&this.global.godot_window.acc_input(e.accelerationX,e.accelerationY)}}))}remove_p5sensor(){this.p5sensor&&(this.p5sensor.remove(),this.p5sensor=null)}subscribe_button(){this.nakama.has_new_channel_msg=!1,this.SubscribesIcon="chatbubbles",this.TodoIcon="checkbox-outline",this.remove_p5sensor()}setting_button(){this.nakama.removeBanner(),this.nav.navigateForward("settings",{animation:h.Nn})}bottom_tab_selected(){this.SubscribesIcon="chatbubbles-outline",this.TodoIcon="checkbox",this.create_p5sensor()}ionViewDidLeave(){this.remove_p5sensor()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.SH),t.Y36(g.a),t.Y36(m.AN),t.Y36(P.H))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-portal"]],viewQuery:function(e,a){if(1&e&&t.Gf(s.UN,5),2&e){let l;t.iGM(l=t.CRH())&&(a.ionTabs=l.first)}},decls:10,vars:6,consts:[["slot","bottom"],["tab","subscribes",3,"disabled","click"],[3,"name"],["color","danger","mode","md",4,"ngIf"],["tab","main",3,"disabled","click"],[3,"disabled","click"],["name","settings-outline"],["color","danger","mode","md"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-content")(1,"ion-tabs")(2,"ion-tab-bar",0)(3,"ion-tab-button",1),t.NdJ("click",function(){return a.subscribe_button()}),t._UZ(4,"ion-icon",2),t.YNc(5,f,1,0,"ion-badge",3),t.qZA(),t.TgZ(6,"ion-tab-button",4),t.NdJ("click",function(){return a.bottom_tab_selected()}),t._UZ(7,"ion-icon",2),t.qZA(),t.TgZ(8,"ion-tab-button",5),t.NdJ("click",function(){return a.setting_button()}),t._UZ(9,"ion-icon",6),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("disabled",!a.indexed.db),t.xp6(1),t.Q6J("name",a.SubscribesIcon),t.xp6(1),t.Q6J("ngIf",a.nakama.has_new_channel_msg),t.xp6(1),t.Q6J("disabled",!a.indexed.db),t.xp6(1),t.Q6J("name",a.TodoIcon),t.xp6(1),t.Q6J("disabled",!a.indexed.db))},directives:[s.W2,s.UN,s.yq,s.ZU,s.gu,d.O5,s.yp],styles:[""]}),n})(),children:[{path:"",redirectTo:"main",pathMatch:"full"},{path:"subscribes",loadChildren:()=>Promise.all([o.e(8592),o.e(3627)]).then(o.bind(o,3627)).then(n=>n.SubscribesPageModule)},{path:"main",loadChildren:()=>o.e(600).then(o.bind(o,600)).then(n=>n.MainPageModule)}]},{path:"settings",loadChildren:()=>o.e(1484).then(o.bind(o,1484)).then(n=>n.SettingsPageModule)}];let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,b.u5,s.Pc,v]]}),n})()}}]);