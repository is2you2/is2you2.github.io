"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[600],{600:(A,l,n)=>{n.r(l),n.d(l,{MainPageModule:()=>T});var g=n(9808),c=n(4182),i=n(3996),m=n(501),p=n(655),h=n(8982),s=n(1716),u=n(5016),a=n(2096),M=n(1282),v=n(5742),f=n(9912);const P=[{path:"",component:(()=>{class t{constructor(o,e,r,B){this.app=o,this.lang=e,this.modalCtrl=r,this.nakama=B}ngOnInit(){this.add_admob_banner()}add_admob_banner(){return(0,p.mG)(this,void 0,void 0,function*(){s.TQ.addListener(s.Wp.SizeChanged,e=>{this.nakama.appMargin=e.height;const r=document.querySelector("ion-router-outlet");0===this.nakama.appMargin?r.style.marginBottom="":this.nakama.appMargin>0&&(r.style.marginBottom=this.nakama.appMargin+"px")});const o={adId:"ca-app-pub-6577630868247944/4829889344",adSize:s.ci.ADAPTIVE_BANNER,position:s.N4.BOTTOM_CENTER};try{if(!(yield fetch(`${u.Oy}pjcone_ads/admob.txt`)).ok)throw new Error("\uc5c6\ub294\uac70\ub098 \ub2e4\ub984\uc5c6\uc9c0")}catch(e){s.TQ.showBanner(o).then(()=>{this.nakama.isBannerShowing=!0})}})}ionViewWillEnter(){this.app.CreateGodotIFrame("godot-todo",{act:"godot-todo",title:"Todo",add_todo_menu:o=>{this.modalCtrl.create({component:h.s,componentProps:{godot:this.app.godot.contentWindow||this.app.godot.contentDocument,data:o}}).then(e=>e.present())}})}ionViewDidEnter(){this.nakama.resumeBanner()}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(M.A),a.Y36(v.b),a.Y36(i.IN),a.Y36(f.a))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-main"]],decls:6,vars:1,consts:[["id","godot-todo",1,"full_screen"]],template:function(o,e){1&o&&(a.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),a._uU(3),a.qZA()()(),a.TgZ(4,"ion-content"),a._UZ(5,"div",0),a.qZA()),2&o&&(a.xp6(3),a.Oqu(e.lang.text.Main.Title))},directives:[i.Gu,i.sr,i.wd,i.W2],styles:[""]}),t})()},{path:"add-todo-menu",loadChildren:()=>n.e(9817).then(n.bind(n,9817)).then(t=>t.AddTodoMenuPageModule)}];let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[m.Bz.forChild(P)],m.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[g.ez,c.u5,i.Pc,y]]}),t})()}}]);