"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4189],{4189:(T,c,a)=>{a.r(c),a.d(c,{LicensesPageModule:()=>Z});var u=a(9808),d=a(4182),o=a(3996),r=a(9705),m=a(6505),e=a(9863),p=a(5742);const h=[{path:"",component:(()=>{class n{constructor(s){this.lang=s,this.licenses={godot:{engine:"",enet:"",freetype:"",mbedtls:""}}}ngOnInit(){this.loadTexts()}loadTexts(){this.p5canvas=new m(t=>{t.setup=()=>{t.loadStrings("assets/data/docs/godot.txt",i=>{this.licenses.godot.engine=i.join("\n")}),t.loadStrings("assets/data/docs/FreeType.txt",i=>{this.licenses.godot.freetype=i.join("\n")}),t.loadStrings("assets/data/docs/enet.txt",i=>{this.licenses.godot.enet=i.join("\n")}),t.loadStrings("assets/data/docs/mbedtls.txt",i=>{this.licenses.godot.mbedtls=i.join("\n")})}})}ionViewWillLeave(){this.p5canvas.remove()}open_link(s){window.open(s,"_system")}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(p.b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-licenses"]],decls:28,vars:6,consts:[["slot","start"],["defaultHref","settings"],[3,"click"],["disabled","",1,"infobox",3,"ngModel","ngModelChange"]],template:function(s,t){1&s&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-list-header")(8,"ion-label"),e._uU(9,"Godot engine"),e.qZA(),e.TgZ(10,"ion-button",2),e.NdJ("click",function(){return t.open_link("https://godotengine.org/")}),e._uU(11),e.qZA()(),e.TgZ(12,"ion-item-divider")(13,"ion-label"),e._uU(14,"Godot engine"),e.qZA()(),e.TgZ(15,"textarea",3),e.NdJ("ngModelChange",function(l){return t.licenses.godot.engine=l}),e.qZA(),e.TgZ(16,"ion-item-divider")(17,"ion-label"),e._uU(18,"FreeType"),e.qZA()(),e.TgZ(19,"textarea",3),e.NdJ("ngModelChange",function(l){return t.licenses.godot.freetype=l}),e.qZA(),e.TgZ(20,"ion-item-divider")(21,"ion-label"),e._uU(22,"E Net"),e.qZA()(),e.TgZ(23,"textarea",3),e.NdJ("ngModelChange",function(l){return t.licenses.godot.enet=l}),e.qZA(),e.TgZ(24,"ion-item-divider")(25,"ion-label"),e._uU(26,"mbed TLS"),e.qZA()(),e.TgZ(27,"textarea",3),e.NdJ("ngModelChange",function(l){return t.licenses.godot.mbedtls=l}),e.qZA()()),2&s&&(e.xp6(5),e.Oqu(t.lang.text.Settings.LicenseNotice),e.xp6(6),e.Oqu(t.lang.text.Licenses.open_link),e.xp6(4),e.Q6J("ngModel",t.licenses.godot.engine),e.xp6(4),e.Q6J("ngModel",t.licenses.godot.freetype),e.xp6(4),e.Q6J("ngModel",t.licenses.godot.enet),e.xp6(4),e.Q6J("ngModel",t.licenses.godot.mbedtls))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,o.yh,o.Q$,o.YG,o.rH,d.Fj,d.JJ,d.On],styles:[""]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.Bz.forChild(h)],r.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,d.u5,o.Pc,f]]}),n})()}}]);