"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7816],{7816:(M,d,s)=>{s.r(d),s.d(d,{NotiAlertPageModule:()=>C});var h=s(1368),c=s(4716),l=s(5624),u=s(3332),t=s(4496),m=s(6819),_=s(4500),p=s(5020),N=s(9240);const y=[{path:"",component:(()=>{var i;class a{constructor(o,e,g,n){this.noti=o,this.lang=e,this.global=g,this.navCtrl=n,this.BackButtonPressed=!1}InitBrowserBackButtonOverride(){window.history.pushState(null,null,window.location.href),window.onpopstate=()=>{this.BackButtonPressed||(this.BackButtonPressed=!0,this.navCtrl.back())}}ngOnInit(){this.InitBrowserBackButtonOverride()}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()};let o=["icon_mono","diychat","todo","simplechat"];this.global.p5key.KeyShortCut.Digit=e=>{this.toggle_silent_set(o[e])}}toggle_silent_set(o){this.noti.change_silent_settings(o)}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape,delete this.global.p5key.KeyShortCut.Digit}}return(i=a).\u0275fac=function(o){return new(o||i)(t.GI1(m.s),t.GI1(_.o),t.GI1(p.A1),t.GI1(N.wX))},i.\u0275cmp=t.In1({type:i,selectors:[["app-noti-alert"]],decls:26,vars:10,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],["button","",3,"click"],["src","assets/icon/favicon.png","alt","",1,"img_icon_size"],[1,"ignore_toggles",3,"ngModel","ngModelChange"],["src","assets/icon/diychat.png","alt","",1,"img_icon_size"],["src","assets/icon/todo.png","alt","",1,"img_icon_size"],["src","assets/icon/simplechat.png","alt","",1,"img_icon_size"]],template:function(o,e){1&o&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.OEk(3),t.C$Y(),t.I0R(4,"ion-buttons",1),t.wR5(5,"ion-back-button",2),t.C$Y()()(),t.I0R(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),t.OEk(9),t.C$Y()(),t.I0R(10,"ion-item",3),t.qCj("click",function(){return e.toggle_silent_set("icon_mono")}),t.wR5(11,"img",4),t.I0R(12,"ion-toggle",5),t.iHE("ngModelChange",function(n){return t.kNx(e.noti.settings.silent.icon_mono,n)||(e.noti.settings.silent.icon_mono=n),n}),t.OEk(13),t.C$Y()(),t.I0R(14,"ion-item",3),t.qCj("click",function(){return e.toggle_silent_set("diychat")}),t.wR5(15,"img",6),t.I0R(16,"ion-toggle",5),t.iHE("ngModelChange",function(n){return t.kNx(e.noti.settings.silent.diychat,n)||(e.noti.settings.silent.diychat=n),n}),t.OEk(17),t.C$Y()(),t.I0R(18,"ion-item",3),t.qCj("click",function(){return e.toggle_silent_set("todo")}),t.wR5(19,"img",7),t.I0R(20,"ion-toggle",5),t.iHE("ngModelChange",function(n){return t.kNx(e.noti.settings.silent.todo,n)||(e.noti.settings.silent.todo=n),n}),t.OEk(21),t.C$Y()(),t.I0R(22,"ion-item",3),t.qCj("click",function(){return e.toggle_silent_set("simplechat")}),t.wR5(23,"img",8),t.I0R(24,"ion-toggle",5),t.iHE("ngModelChange",function(n){return t.kNx(e.noti.settings.silent.simplechat,n)||(e.noti.settings.silent.simplechat=n),n}),t.OEk(25),t.C$Y()()()),2&o&&(t.yG2(3),t.cNF(e.lang.text.Settings.NotificationSetting),t.yG2(6),t.cNF(e.lang.text.NotificationSettings.set_alert),t.yG2(3),t.OKB("ngModel",e.noti.settings.silent.icon_mono),t.yG2(),t.oRS(" ",e.lang.text.NotificationSettings.icon_mono," "),t.yG2(3),t.OKB("ngModel",e.noti.settings.silent.diychat),t.yG2(),t.cNF(e.lang.text.NotificationSettings.diychat),t.yG2(3),t.OKB("ngModel",e.noti.settings.silent.todo),t.yG2(),t.cNF(e.lang.text.Main.Title),t.yG2(3),t.OKB("ngModel",e.noti.settings.silent.simplechat),t.yG2(),t.cNF(e.lang.text.NotificationSettings.simplechat))},dependencies:[c.ue,c._G,l.GS,l._i,l.wB,l.Yb,l.S8,l.QR,l.tM,l.E$,l.Md,l.UJ,l.Im],styles:[".img_icon_size[_ngcontent-%COMP%]{width:21px;height:21px;margin-right:16px}.ignore_toggles[_ngcontent-%COMP%]{pointer-events:none}"]}),a})()}];let f=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[u.qQ.forChild(y),u.qQ]}),a})(),C=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[h.MD,c.y,l.wZ,f]}),a})()}}]);