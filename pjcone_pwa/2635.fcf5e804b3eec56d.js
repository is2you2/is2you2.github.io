"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2635],{2635:(C,m,s)=>{s.r(m),s.d(m,{NotiAlertPageModule:()=>P});var d=s(177),c=s(4341),l=s(5374),h=s(9858),t=s(3953),u=s(5547),_=s(4234),p=s(482),f=s(3656);const N=[{path:"",component:(()=>{var i;class a{constructor(o,e,g,n){this.noti=o,this.lang=e,this.global=g,this.navCtrl=n}ngOnInit(){}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()};let o=["icon_mono","diychat","todo","simplechat"];this.global.p5key.KeyShortCut.Digit=e=>{this.toggle_silent_set(o[e])}}toggle_silent_set(o){this.noti.change_silent_settings(o)}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape,delete this.global.p5key.KeyShortCut.Digit}}return(i=a).\u0275fac=function(o){return new(o||i)(t.rXU(u.r),t.rXU(_.y),t.rXU(p.z3),t.rXU(f.q9))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-noti-alert"]],decls:26,vars:10,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],["button","",3,"click"],["src","assets/icon/favicon.png","alt","",1,"img_icon_size"],[1,"ignore_toggles",3,"ngModelChange","ngModel"],["src","assets/icon/diychat.png","alt","",1,"img_icon_size"],["src","assets/icon/todo.png","alt","",1,"img_icon_size"],["src","assets/icon/simplechat.png","alt","",1,"img_icon_size"]],template:function(o,e){1&o&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.k0s(),t.j41(4,"ion-buttons",1),t.nrm(5,"ion-back-button",2),t.k0s()()(),t.j41(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),t.EFF(9),t.k0s()(),t.j41(10,"ion-item",3),t.bIt("click",function(){return e.toggle_silent_set("icon_mono")}),t.nrm(11,"img",4),t.j41(12,"ion-toggle",5),t.mxI("ngModelChange",function(n){return t.DH7(e.noti.settings.silent.icon_mono,n)||(e.noti.settings.silent.icon_mono=n),n}),t.EFF(13),t.k0s()(),t.j41(14,"ion-item",3),t.bIt("click",function(){return e.toggle_silent_set("diychat")}),t.nrm(15,"img",6),t.j41(16,"ion-toggle",5),t.mxI("ngModelChange",function(n){return t.DH7(e.noti.settings.silent.diychat,n)||(e.noti.settings.silent.diychat=n),n}),t.EFF(17),t.k0s()(),t.j41(18,"ion-item",3),t.bIt("click",function(){return e.toggle_silent_set("todo")}),t.nrm(19,"img",7),t.j41(20,"ion-toggle",5),t.mxI("ngModelChange",function(n){return t.DH7(e.noti.settings.silent.todo,n)||(e.noti.settings.silent.todo=n),n}),t.EFF(21),t.k0s()(),t.j41(22,"ion-item",3),t.bIt("click",function(){return e.toggle_silent_set("simplechat")}),t.nrm(23,"img",8),t.j41(24,"ion-toggle",5),t.mxI("ngModelChange",function(n){return t.DH7(e.noti.settings.silent.simplechat,n)||(e.noti.settings.silent.simplechat=n),n}),t.EFF(25),t.k0s()()()),2&o&&(t.R7$(3),t.JRh(e.lang.text.Settings.NotificationSetting),t.R7$(6),t.JRh(e.lang.text.NotificationSettings.set_alert),t.R7$(3),t.R50("ngModel",e.noti.settings.silent.icon_mono),t.R7$(),t.SpI(" ",e.lang.text.NotificationSettings.icon_mono," "),t.R7$(3),t.R50("ngModel",e.noti.settings.silent.diychat),t.R7$(),t.JRh(e.lang.text.NotificationSettings.diychat),t.R7$(3),t.R50("ngModel",e.noti.settings.silent.todo),t.R7$(),t.JRh(e.lang.text.Main.Title),t.R7$(3),t.R50("ngModel",e.noti.settings.silent.simplechat),t.R7$(),t.JRh(e.lang.text.NotificationSettings.simplechat))},dependencies:[c.BC,c.vS,l.QW,l.W9,l.eU,l.uz,l.Dg,l.he,l.BC,l.BY,l.ai,l.hB,l.el],styles:[".img_icon_size[_ngcontent-%COMP%]{width:21px;height:21px;margin-right:16px}.ignore_toggles[_ngcontent-%COMP%]{pointer-events:none}"]}),a})()}];let M=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[h.iI.forChild(N),h.iI]}),a})(),P=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[d.MD,c.YN,l.bv,M]}),a})()}}]);