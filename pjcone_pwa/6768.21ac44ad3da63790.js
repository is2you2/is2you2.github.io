"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6768],{6768:(L,c,a)=>{a.r(c),a.d(c,{LicensesPageModule:()=>M});var h=a(1368),g=a(4716),l=a(5624),u=a(3332),p=a(9352),e=a(4496),m=a(4500),C=a(5020),f=a(9240);const b=[{path:"",component:(()=>{var t;class d{constructor(i,n,o){this.lang=i,this.global=n,this.navCtrl=o,this.BackButtonPressed=!1,this.licenses={godot:{engine:"",enet:"",freetype:"",mbedtls:""},jsblend:""}}InitBrowserBackButtonOverride(){window.history.pushState(null,null,window.location.href),window.onpopstate=()=>{this.BackButtonPressed||(this.BackButtonPressed=!0,this.navCtrl.back())}}ngOnInit(){this.InitBrowserBackButtonOverride(),this.loadTexts()}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}loadTexts(){this.p5canvas=new p(n=>{n.setup=()=>{n.noCanvas(),n.loadStrings("assets/data/docs/godot.txt",o=>{this.licenses.godot.engine=o.join("\n")}),n.loadStrings("assets/data/docs/FreeType.txt",o=>{this.licenses.godot.freetype=o.join("\n")}),n.loadStrings("assets/data/docs/enet.txt",o=>{this.licenses.godot.enet=o.join("\n")}),n.loadStrings("assets/data/docs/mbedtls.txt",o=>{this.licenses.godot.mbedtls=o.join("\n")}),n.loadStrings("assets/data/docs/js.blend.txt",o=>{this.licenses.jsblend=o.join("\n")})}})}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape,this.p5canvas.remove()}open_link(i){window.open(i,"_system")}}return(t=d).\u0275fac=function(i){return new(i||t)(e.GI1(m.o),e.GI1(C.A1),e.GI1(f.wX))},t.\u0275cmp=e.In1({type:t,selectors:[["app-licenses"]],decls:34,vars:8,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],[3,"click"],["disabled","",1,"infobox",3,"ngModel","ngModelChange"]],template:function(i,n){1&i&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.wR5(3,"ion-back-button",2),e.C$Y(),e.I0R(4,"ion-title"),e.OEk(5),e.C$Y()()(),e.I0R(6,"ion-content")(7,"ion-list-header")(8,"ion-label"),e.OEk(9,"Godot engine"),e.C$Y(),e.I0R(10,"ion-button",3),e.qCj("click",function(){return n.open_link("https://godotengine.org/")}),e.OEk(11),e.C$Y()(),e.I0R(12,"ion-item-divider")(13,"ion-label"),e.OEk(14,"Godot engine"),e.C$Y()(),e.I0R(15,"textarea",4),e.iHE("ngModelChange",function(s){return e.kNx(n.licenses.godot.engine,s)||(n.licenses.godot.engine=s),s}),e.C$Y(),e.I0R(16,"ion-item-divider")(17,"ion-label"),e.OEk(18,"FreeType"),e.C$Y()(),e.I0R(19,"textarea",4),e.iHE("ngModelChange",function(s){return e.kNx(n.licenses.godot.freetype,s)||(n.licenses.godot.freetype=s),s}),e.C$Y(),e.I0R(20,"ion-item-divider")(21,"ion-label"),e.OEk(22,"E Net"),e.C$Y()(),e.I0R(23,"textarea",4),e.iHE("ngModelChange",function(s){return e.kNx(n.licenses.godot.enet,s)||(n.licenses.godot.enet=s),s}),e.C$Y(),e.I0R(24,"ion-item-divider")(25,"ion-label"),e.OEk(26,"mbed TLS"),e.C$Y()(),e.I0R(27,"textarea",4),e.iHE("ngModelChange",function(s){return e.kNx(n.licenses.godot.mbedtls,s)||(n.licenses.godot.mbedtls=s),s}),e.C$Y(),e.I0R(28,"ion-list-header")(29,"ion-label"),e.OEk(30,"JS.BLEND"),e.C$Y(),e.I0R(31,"ion-button",3),e.qCj("click",function(){return n.open_link("https://github.com/acweathersby/js.blend")}),e.OEk(32),e.C$Y()(),e.I0R(33,"textarea",4),e.iHE("ngModelChange",function(s){return e.kNx(n.licenses.jsblend,s)||(n.licenses.jsblend=s),s}),e.C$Y()()),2&i&&(e.yG2(5),e.cNF(n.lang.text.Settings.LicenseNotice),e.yG2(6),e.cNF(n.lang.text.Licenses.open_link),e.yG2(4),e.OKB("ngModel",n.licenses.godot.engine),e.yG2(4),e.OKB("ngModel",n.licenses.godot.freetype),e.yG2(4),e.OKB("ngModel",n.licenses.godot.enet),e.yG2(4),e.OKB("ngModel",n.licenses.godot.mbedtls),e.yG2(5),e.cNF(n.lang.text.Licenses.open_link),e.yG2(),e.OKB("ngModel",n.licenses.jsblend))},dependencies:[g.ot,g.ue,g._G,l.sn,l.GS,l._i,l.wB,l.S8,l.QR,l.zz,l.tM,l.Md,l.Im]}),d})()}];let y=(()=>{var t;class d{}return(t=d).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[u.qQ.forChild(b),u.qQ]}),d})(),M=(()=>{var t;class d{}return(t=d).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[h.MD,g.y,l.wZ,y]}),d})()}}]);