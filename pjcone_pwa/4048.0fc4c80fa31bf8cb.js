"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4048],{4048:(H,G,_)=>{_.r(G),_.d(G,{CommunityPageModule:()=>d});var E=_(1368),S=_(4716),I=_(5624),D=_(3332),w=_(1528),U=_(340),o=_(416),b=_(4428),e=_(4496),A=_(4180),$=_(7136),j=_(4500),L=_(5020),K=_(9240),V=_(4668);function B(a,f){if(1&a&&e.wR5(0,"img",18),2&a){const g=e.GaO().$implicit;e.m_g(g.isNSFW?"filter: blur(16px);":""),e.E7m("src",g.mainImage.thumbnail,e.K6U)}}function F(a,f){if(1&a&&(e.I0R(0,"span",19),e.OEk(1),e.C$Y()),2&a){const g=e.GaO().$implicit,n=e.GaO(2);e.yG2(),e.oRS(" ","("+(g.server?g.server.name||g.server.target:n.lang.text.AddGroup.UseLocalStorage)+")"," ")}}function Y(a,f){if(1&a){const g=e.KQA();e.I0R(0,"ion-card",11),e.qCj("click",function(){const i=e.usT(g),l=i.$implicit,s=i.index,y=e.GaO(2);return e.CGJ(y.open_post(l,s))}),e.yuY(1,B,1,3,"img",12),e.I0R(2,"ion-card-header")(3,"ion-card-subtitle",13)(4,"span",14),e.qCj("click",function(){const l=e.usT(g).$implicit,s=e.GaO(2);return e.CGJ(s.open_profile(l))}),e.OEk(5),e.C$Y(),e.yuY(6,F,2,1,"span",15),e.C$Y(),e.I0R(7,"ion-card-title",16),e.OEk(8),e.C$Y()(),e.I0R(9,"ion-card-content",17),e.OEk(10),e.C$Y()()}if(2&a){const g=f.$implicit,n=e.GaO(2);e.E7m("id",g.id),e.yG2(),e.E7m("ngIf",g.mainImage),e.yG2(3),e.m_g("color: #"+g.UserColor),e.yG2(),e.oRS(" ",g.creator_name," "),e.yG2(),e.E7m("ngIf",n.nakama.showServer),e.yG2(2),e.cNF(g.title),e.yG2(2),e.oRS(" ",g.content," ")}}function N(a,f){1&a&&e.wR5(0,"div",20)}function W(a,f){if(1&a&&(e.I0R(0,"div",8),e.yuY(1,Y,11,8,"ion-card",9)(2,N,1,0,"div",10),e.C$Y()),2&a){const g=e.GaO();e.yG2(),e.E7m("ngForOf",g.nakama.posts),e.yG2(),e.E7m("ngIf",g.is_auto_load_end&&g.is_loadable)}}function C(a,f){if(1&a){const g=e.KQA();e.I0R(0,"div")(1,"div",21),e.qCj("click",function(){e.usT(g);const i=e.GaO();return e.CGJ(i.add_post())}),e.wR5(2,"ion-icon",22),e.I0R(3,"div")(4,"ion-label",23),e.OEk(5),e.C$Y()()()()}if(2&a){const g=e.GaO();e.yG2(5),e.cNF(g.lang.text.Community.NoPosts)}}const v=[{path:"",component:(()=>{var a;class f{constructor(n,i,l,s,y,h,P){this.statusBar=n,this.nakama=i,this.lang=l,this.global=s,this.navCtrl=y,this.indexed=h,this.modalCtrl=P,this.is_loadable=!0,this.is_auto_load_end=!1,this.isOpenProfile=!1}ngOnInit(){this.nakama.is_post_lock=!0,this.nakama.CommunityGoToEditPost=this.add_post}add_post(n){this.navCtrl.navigateForward("portal/community/add-post",{state:{data:n,act:!0}})}ionViewDidEnter(){var n=this;return(0,w.c)(function*(){n.is_loadable=!0,yield n.nakama.load_posts_counter(),n.nakama.has_new_post=!1,yield n.load_post_cycles(),n.is_auto_load_end=!0,n.try_add_shortcut(),n.ContentDiv&&n.ContentScroll&&n.ContentDiv.clientHeight-(n.ContentScroll.scrollTop+n.ContentScroll.clientHeight)<1&&n.load_post_cycles()})()}load_post_cycles(){var n=this;return(0,w.c)(function*(){n.is_loadable&&(yield n.load_posts()),setTimeout(()=>{n.ContentDiv||(n.ContentDiv=document.getElementById("CommunityMainContent")),n.ContentScroll||(n.ContentScroll=document.getElementById("CommunityScrollDiv"),n.ContentScroll.onscroll=i=>{n.ContentDiv.clientHeight-(n.ContentScroll.scrollTop+n.ContentScroll.clientHeight)<1&&n.load_post_cycles()}),n.is_loadable&&n.ContentDiv.clientHeight-(n.ContentScroll.scrollTop+n.ContentScroll.clientHeight)<1&&n.load_post_cycles()},100)})()}try_add_shortcut(){this.global.p5key&&this.global.p5key.KeyShortCut?this.AddShortcut():setTimeout(()=>{this.try_add_shortcut()},100)}load_posts(){var n=this;return(0,w.c)(function*(){let i=!1,l=Object.keys(n.nakama.post_counter);for(let s=0,y=l.length;s<y;s++){let h=Object.keys(n.nakama.post_counter[l[s]]);for(let P=0,T=h.length;P<T;P++){let k=Object.keys(n.nakama.post_counter[l[s]][h[P]]);for(let r=0,c=k.length;r<c;r++){let m="me"==k[r];try{"me"!=k[r]&&(m=k[r]==n.nakama.servers[l[s]][h[P]].session.user_id)}catch{}let p=n.nakama.post_counter[l[s]][h[P]][k[r]];yield n.load_post_step_by_step(p,l[s],h[P],k[r],m),!i&&n.nakama.post_counter[l[s]][h[P]][k[r]]>=0&&(i=!0)}}}n.is_loadable=i,n.nakama.rearrange_posts()})()}load_post_step_by_step(n,i,l,s,y){var h=this;return(0,w.c)(function*(){if(n<0)return;let P=yield h.nakama.load_local_post_with_id(`LocalPost_${n}`,i,l,s);if(!P&&"me"!=s)try{P=yield h.load_server_post_with_id(`ServerPost_${n}`,i,l,s,y)}catch{}h.nakama.post_counter[i][l][s]--,P||(yield h.load_post_step_by_step(h.nakama.post_counter[i][l][s],i,l,s,y))})()}load_server_post_with_id(n,i,l,s,y){var h=this;return(0,w.c)(function*(){try{let P={path:`servers/${i}/${l}/posts/${s}/${n}/info.json`,type:"application/json"},T=yield h.nakama.sync_load_file(P,i,l,"server_post",s,n,!1),k=yield T.value.text(),r=JSON.parse(k);y&&(r.is_me=!0);let c=new Blob([JSON.stringify(r)],{type:"application/json"});h.indexed.saveBlobToUserPath(c,P.path),r.server={isOfficial:i,target:l};try{r.server.name=h.nakama.servers[i][l].info.name}catch{r.server.name=h.lang.text.Nakama.DeletedServer}if(r.mainImage)if(r.mainImage.url)r.mainImage.thumbnail=r.mainImage.url;else{let m={path:`servers/${i}/${l}/posts/${s}/${n}/mainImage.png`,type:"image/png"},p=(yield h.nakama.sync_load_file(m,i,l,"server_post",s,`${n}_mainImage`,!1)).value;r.mainImage.blob=p;let u=URL.createObjectURL(p);r.mainImage.thumbnail=u,setTimeout(()=>{URL.revokeObjectURL(u)},100)}if(h.nakama.posts_orig[i][l]||(h.nakama.posts_orig[i][l]={}),h.nakama.posts_orig[i][l][s]||(h.nakama.posts_orig[i][l][s]={}),h.nakama.posts_orig[i][l][s][n]=r,"local"==T.from)try{if(!(yield h.nakama.servers[i][l].client.readStorageObjects(h.nakama.servers[i][l].session,{object_ids:[{collection:"server_post",key:n,user_id:s}]})).objects.length)throw"Not RemoteExist"}catch(m){if("Not RemoteExist"==m)throw"RemoveSelf"}return!0}catch(P){return"RemoveSelf"==P&&h.nakama.RemovePost(h.nakama.posts_orig[i][l][s][n],!0),!1}})()}open_profile(n){if(this.isOpenProfile=!0,"me"==n.creator_id)this.modalCtrl.create({component:U.w}).then(i=>i.present());else{let i=n.server.isOfficial,l=n.server.target,s=n.creator_id;n.is_me?this.modalCtrl.create({component:U.w,componentProps:{isOfficial:i,target:l}}).then(y=>y.present()):this.modalCtrl.create({component:b.y,componentProps:{info:{user:this.nakama.load_other_user(s,i,l)},group:{server:{isOfficial:i,target:l}}}}).then(y=>y.present())}setTimeout(()=>{this.isOpenProfile=!1},0)}open_post(n,i){this.isOpenProfile||(this.isOpenProfile=!0,this.modalCtrl.create({component:o.S,componentProps:{data:n,index:i+1}}).then(l=>{delete this.global.p5key.KeyShortCut.Digit,delete this.global.p5key.KeyShortCut.AddAct,l.onDidDismiss().then(s=>{s.data||this.AddShortcut()}),l.present()}),setTimeout(()=>{this.isOpenProfile=!1},0))}AddShortcut(){this.global.p5key&&this.global.p5key.KeyShortCut&&(this.global.p5key.KeyShortCut.Digit=n=>{this.nakama.posts.length>n?this.open_post(this.nakama.posts[n],n):this.add_post()}),this.global.p5key&&this.global.p5key.KeyShortCut&&!this.global.p5key.KeyShortCut.AddAct&&(this.global.p5key.KeyShortCut.AddAct=()=>{this.add_post()})}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Digit,delete this.global.p5key.KeyShortCut.AddAct,this.nakama.is_post_lock=!1}}return(a=f).\u0275fac=function(n){return new(n||a)(e.GI1(A.Y),e.GI1($.h),e.GI1(j.o),e.GI1(L.A1),e.GI1(K.wX),e.GI1(V.k),e.GI1(I.qS))},a.\u0275cmp=e.In1({type:a,selectors:[["app-community"]],decls:12,vars:5,consts:[[1,"ion-no-border"],[1,"add_post",3,"click"],["button","","name","add-circle-outline",2,"width","24px","height","24px"],[1,"header_online_circle",3,"click"],["id","CommunityScrollDiv",2,"height","100%","overflow-y","auto"],["id","CommunityMainContent"],["style","display: ruby-text","class","CardContainerDiv",4,"ngIf"],[4,"ngIf"],[1,"CardContainerDiv",2,"display","ruby-text"],["button","","class","card_style",3,"id","click",4,"ngFor","ngForOf"],["style","width:100%; height: 72px;",4,"ngIf"],["button","",1,"card_style",3,"id","click"],["class","thumbnail_image","alt","",3,"src","style",4,"ngIf"],[1,"cardCreator"],[3,"click"],["style","color: #888; font-weight: normal;",4,"ngIf"],[1,"cardTitle"],[1,"cardContent"],["alt","",1,"thumbnail_image",3,"src"],[2,"color","#888","font-weight","normal"],[2,"width","100%","height","72px"],[1,"disconnect_info",3,"click"],["color","medium","name","document-text-outline",2,"width","60px","height","60px"],["color","medium"]],template:function(n,i){1&n&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.OEk(3),e.C$Y(),e.I0R(4,"div",1),e.qCj("click",function(){return i.add_post()}),e.wR5(5,"ion-icon",2),e.C$Y(),e.I0R(6,"div",3),e.qCj("click",function(){return i.nakama.toggle_all_session(!0)}),e.C$Y()()(),e.I0R(7,"ion-content")(8,"div",4)(9,"div",5),e.yuY(10,W,3,2,"div",6)(11,C,6,1,"div",7),e.C$Y()()()),2&n&&(e.yG2(3),e.cNF(i.lang.text.Community.Title),e.yG2(3),e.m_g("background-color: "+i.statusBar.colors[i.statusBar.settings.groupServer]+"; cursor: pointer;"),e.yG2(4),e.E7m("ngIf",i.nakama.posts.length),e.yG2(),e.E7m("ngIf",!i.nakama.posts.length))},dependencies:[E.ay,E.u_,I.KC,I.Gg,I.YY,I.MN,I.I7,I._i,I.wB,I.Ko,I.QR,I.tM,I.Md],styles:[".md[_ngcontent-%COMP%]   .add_post[_ngcontent-%COMP%]{position:absolute;right:68px;top:16px;cursor:pointer}.ios[_ngcontent-%COMP%]   .add_post[_ngcontent-%COMP%]{position:absolute;right:68px;top:10px;cursor:pointer}.md[_ngcontent-%COMP%]   .CardContainerDiv[_ngcontent-%COMP%]{padding-top:14px}.ios[_ngcontent-%COMP%]   .CardContainerDiv[_ngcontent-%COMP%]{padding-top:20px}.card_style[_ngcontent-%COMP%]{width:90%;max-width:400px;margin-top:0}.md[_ngcontent-%COMP%]   .cardCreator[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;font-weight:700;max-height:20px;overflow-y:hidden}.md[_ngcontent-%COMP%]   .cardTitle[_ngcontent-%COMP%]{max-height:24px;overflow-y:hidden}.md[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%]{max-height:40px;overflow-y:hidden;padding-bottom:0;margin-bottom:13px}.ios[_ngcontent-%COMP%]   .cardCreator[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;font-weight:700;max-height:20px;overflow-y:hidden}.ios[_ngcontent-%COMP%]   .cardTitle[_ngcontent-%COMP%]{max-height:34px;overflow-y:hidden}.ios[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%]{max-height:40px;overflow-y:hidden;padding-bottom:0;margin-bottom:13px}.thumbnail_image[_ngcontent-%COMP%]{width:100%;max-height:240px;object-fit:cover}"]}),f})()},{path:"add-post",loadChildren:()=>Promise.all([_.e(1052),_.e(1592)]).then(_.bind(_,1592)).then(a=>a.AddPostPageModule)},{path:"post-viewer",loadChildren:()=>_.e(9368).then(_.bind(_,9368)).then(a=>a.PostViewerPageModule)}];let t=(()=>{var a;class f{}return(a=f).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[D.qQ.forChild(v),D.qQ]}),f})(),d=(()=>{var a;class f{}return(a=f).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[E.MD,S.y,I.wZ,t]}),f})()},416:(H,G,_)=>{_.d(G,{S:()=>W});var E=_(1528),S=_(9352),D=_(8744),w=_(340),U=_(4428),o=_(4496),b=_(5624),e=_(9240),A=_(4500),$=_(4668),j=_(7136),L=_(5020),K=_(1368);function V(C,R){if(1&C){const v=o.KQA();o.I0R(0,"ion-icon",10),o.qCj("click",function(){o.usT(v);const d=o.GaO();return o.CGJ(d.ChangeToAnother(-1))}),o.C$Y()}}function B(C,R){if(1&C&&(o.I0R(0,"ion-label",11),o.OEk(1),o.C$Y()),2&C){const v=o.GaO();o.yG2(),o.cNF(v.CurrentIndex+" / "+v.nakama.posts.length)}}function F(C,R){if(1&C){const v=o.KQA();o.I0R(0,"ion-icon",12),o.qCj("click",function(){o.usT(v);const d=o.GaO();return o.CGJ(d.ChangeToAnother(1))}),o.C$Y()}}function Y(C,R){if(1&C&&o.wR5(0,"img",13),2&C){const v=o.GaO();o.E7m("src",v.PostInfo.mainImage.MainThumbnail,o.K6U)}}function N(C,R){if(1&C){const v=o.KQA();o.I0R(0,"ion-footer")(1,"table",14)(2,"tr")(3,"td")(4,"ion-button",15),o.qCj("click",function(){o.usT(v);const d=o.GaO();return o.CGJ(d.EditPost())}),o.OEk(5),o.C$Y()(),o.I0R(6,"td")(7,"ion-button",16),o.qCj("click",function(){o.usT(v);const d=o.GaO();return o.CGJ(d.RemovePost())}),o.OEk(8),o.C$Y()()()()()}if(2&C){const v=o.GaO();o.yG2(5),o.oRS(" ",v.lang.text.AddPost.EditTitle," "),o.yG2(3),o.oRS(" ",v.lang.text.PostViewer.RemovePost," ")}}let W=(()=>{var C;class R{constructor(t,d,a,f,g,n,i){this.modalCtrl=t,this.navParam=d,this.lang=a,this.indexed=f,this.nakama=g,this.alertCtrl=n,this.global=i,this.isOwner=!1,this.HavePosts=!1,this.CurrentIndex=1,this.blenderViewers=[],this.FileURLs=[],this.PlayableElements=[],this.ContentChanging=!1}ngOnInit(){this.PostInfo=this.navParam.get("data"),this.CurrentIndex=this.navParam.get("index"),this.initialize()}ChangeContentWithKeyInput(){if(this.p5canvas){this.p5canvas.keyPressed=f=>{switch(f.code){case"KeyA":case"ArrowLeft":this.ChangeToAnother(-1);break;case"KeyD":case"ArrowRight":this.ChangeToAnother(1)}};let t=this.p5canvas.createVector(),d={};this.p5canvas.touchStarted=f=>{if("changedTouches"in f){for(let n=0,i=f.changedTouches.length;n<i;n++)d[f.changedTouches[n].identifier]=this.p5canvas.createVector(f.changedTouches[n].clientX,f.changedTouches[n].clientY);1===Object.keys(d).length&&(t=d[f.changedTouches[0].identifier].copy())}};const a=50;this.p5canvas.touchEnded=f=>{if("changedTouches"in f){let g;for(let i=0,l=f.changedTouches.length;i<l;i++)g=this.p5canvas.createVector(f.changedTouches[i].clientX,f.changedTouches[i].clientY),delete d[f.changedTouches[i].identifier];0===Object.keys(d).length&&(g.sub(t),g.x>a?this.ChangeToAnother(-1):g.x<-a&&this.ChangeToAnother(1))}}}}initialize(){if(this.PostInfo.mainImage){let t=this.PostInfo.mainImage.url;t||(t=URL.createObjectURL(this.PostInfo.mainImage.blob),setTimeout(()=>{URL.revokeObjectURL(t)},100)),this.PostInfo.mainImage.MainThumbnail=t}this.create_content();try{this.isOwner="me"==this.PostInfo.creator_id||this.PostInfo.creator_id==this.nakama.servers[this.PostInfo.server.isOfficial][this.PostInfo.server.target].session.user_id}catch{this.isOwner=!1}this.HavePosts=this.nakama.posts.length>1,this.ChangeContentWithKeyInput()}ChangeToAnother(t){if(this.ContentChanging)return;this.ContentChanging=!0;let d=this.CurrentIndex+t;d<=0||d>this.nakama.posts.length||(this.p5canvas&&this.p5canvas.remove(),this.CurrentIndex=d,this.PostInfo=this.nakama.posts[this.CurrentIndex-1],this.initialize()),this.ContentChanging=!1}create_content(){var t=this;let d=document.getElementById("PostContent");this.p5canvas=new S(a=>{a.setup=(0,E.c)(function*(){a.noCanvas();let f=a.createDiv(t.PostInfo.title);f.style("font-size","32px"),f.style("font-weight","bold"),f.parent(d);let g=a.createDiv();g.style("color","#888"),g.parent(d),a.createDiv(`${t.lang.text.PostViewer.CreateTime}: ${new Date(t.PostInfo.create_time).toLocaleString()}`).parent(g),t.PostInfo.create_time!=t.PostInfo.modify_time&&a.createDiv(`${t.lang.text.PostViewer.ModifyTime}: ${new Date(t.PostInfo.modify_time).toLocaleString()}`).parent(g);let i=a.createDiv();i.style("padding-bottom","8px"),i.parent(d);let l=a.createSpan(t.PostInfo.creator_name);if(l.style("color",`#${t.PostInfo.UserColor}`),l.style("font-weight","bold"),l.style("font-size","17px"),l.style("cursor","pointer"),l.elt.onclick=()=>{if("me"==t.PostInfo.creator_id)t.modalCtrl.create({component:w.w}).then(s=>s.present());else{let s=t.PostInfo.server.isOfficial,y=t.PostInfo.server.target,h=t.PostInfo.creator_id;h==t.nakama.servers[s][y].session.user_id?t.modalCtrl.create({component:w.w,componentProps:{isOfficial:s,target:y}}).then(P=>P.present()):t.modalCtrl.create({component:U.y,componentProps:{info:{user:t.nakama.load_other_user(h,s,y)},group:{server:{isOfficial:s,target:y}}}}).then(P=>P.present())}},l.parent(i),t.PostInfo.server.local)for(let s=0,y=t.PostInfo.attachments.length;s<y;s++){let h=yield t.indexed.loadBlobFromUserPath(t.PostInfo.attachments[s].path,t.PostInfo.attachments[s].type);t.PostInfo.attachments[s].blob=h}else for(let s=0,y=t.PostInfo.attachments.length;s<y;s++)try{let h=yield t.nakama.sync_load_file(t.PostInfo.attachments[s],t.PostInfo.server.isOfficial,t.PostInfo.server.target,"server_post",t.PostInfo.creator_id,`${t.PostInfo.id}_attach_${s}`,!1);t.PostInfo.attachments[s].blob=h.value}catch{}if(t.PostInfo.content){let s=t.PostInfo.content.split("\n"),y=[];for(let h=0,P=s.length;h<P;h++){let T=!1,k=s[h].length-1,r=0;try{r=Number(s[h].substring(1,k)),T="["==s[h].charAt(0)&&"]"==s[h].charAt(k)&&!isNaN(r)}catch{}if(T)switch(t.PostInfo.attachments[r].viewer){case"image":{let c=t.PostInfo.attachments[r].url;if(!c)try{c=URL.createObjectURL(t.PostInfo.attachments[r].blob),setTimeout(()=>{URL.revokeObjectURL(c)},100)}catch(p){console.log("\uac8c\uc2dc\ubb3c image \ucca8\ubd80\ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \uc624\ub958: ",p)}let m=a.createImg(c,`${r}`);m.style("cursor","pointer"),m.elt.onclick=()=>{let p=[];for(let u=0,x=t.PostInfo.attachments.length;u<x;u++)p.push({content:t.PostInfo.attachments[u]});t.modalCtrl.create({component:D.K,componentProps:{info:{content:t.PostInfo.attachments[r]},path:t.PostInfo.attachments[r].path,relevance:p,noEdit:!0},cssClass:"fullscreen"}).then(u=>{u.onDidDismiss().then(x=>{x.data&&x.data.share&&t.modalCtrl.dismiss()}),u.present()})},m.parent(d)}break;case"audio":{let c=t.PostInfo.attachments[r].url;if(!c)try{c=URL.createObjectURL(t.PostInfo.attachments[r].blob),t.FileURLs.push(c)}catch(p){console.log("\uac8c\uc2dc\ubb3c audio \ucca8\ubd80\ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \uc624\ub958: ",p)}let m=a.createAudio([c]);m.showControls(),m.elt.onplay=()=>{for(let p=0,u=t.PlayableElements.length;p<u;p++)try{p!=r&&t.PlayableElements[p].pause()}catch{}},m.parent(d),t.PlayableElements[r]=m.elt}break;case"video":{let c=t.PostInfo.attachments[r].url;if(!c)try{c=URL.createObjectURL(t.PostInfo.attachments[r].blob),t.FileURLs.push(c)}catch(p){console.log("\uac8c\uc2dc\ubb3c video \ucca8\ubd80\ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \uc624\ub958: ",p)}let m=a.createVideo([c]);m.style("width","100%"),m.style("height","auto"),m.showControls(),m.parent(d),t.PlayableElements[r]=m.elt}break;case"godot":{let c=`PostViewer_godot_pck_${r}`,m=a.createDiv();m.id(c),m.style("width","100%"),m.style("height","432px"),m.parent(d),setTimeout((0,E.c)(function*(){let p=!1;if(t.indexed.godotDB)try{yield t.indexed.GetGodotIndexedDB(),yield t.indexed.saveBlobToUserPath(t.PostInfo.attachments[r].blob,`tmp_files/duplicate/${t.PostInfo.attachments[r].filename}`,void 0,t.indexed.godotDB),p=!0}catch(u){console.log("\ub0b4\ubd80 \ud30c\uc77c \uc5c6\uc74c: ",u)}if(yield t.global.CreateGodotIFrame(c,{path:`tmp_files/duplicate/${t.PostInfo.attachments[r].filename}`,url:t.PostInfo.attachments[r].url},"start_load_pck",!0),!p){try{let u=yield t.indexed.loadBlobFromUserPath(t.PostInfo.attachments[r].path,"",void 0,t.indexed.ionicDB);yield t.indexed.GetGodotIndexedDB(),yield t.indexed.saveBlobToUserPath(u,`tmp_files/duplicate/${t.PostInfo.attachments[r].filename}`,void 0,t.indexed.godotDB)}catch{}yield t.global.CreateGodotIFrame(c,{path:`tmp_files/duplicate/${t.PostInfo.attachments[r].filename}`,url:t.PostInfo.attachments[r].url},"start_load_pck",!0)}t.PostInfo.attachments[r].url?t.global.godot_window.download_url():t.global.godot_window.start_load_pck()}),100)}break;case"blender":{let c=a.createDiv();c.style("position","relative"),c.style("width","100%"),c.style("height","432px"),c.elt.onwheel=()=>!1,c.elt.oncontextmenu=()=>!1,c.parent(d);let m=t.global.load_blender_file(c.elt,t.PostInfo.attachments[r],void 0,()=>{},()=>{});t.blenderViewers.push(m)}break;default:{let c=a.createDiv();c.style("width","160px"),c.style("height","112px"),c.style("overflow","hidden"),c.style("background-color","grey"),c.style("margin-top","4px"),c.style("border-radius","8px"),c.style("cursor","pointer"),c.parent(d);let m=a.createP(t.PostInfo.attachments[r].filename);m.style("margin","0px 4px"),m.style("text-align","start"),m.parent(c);let p=a.createDiv();p.style("background-color","white"),p.style("margin-top","2px"),p.style("position","relative"),p.style("width","100%"),p.style("height","2px"),p.parent(c);let u=a.createSpan(t.lang.text.PostViewer.OpenFromViewer);u.style("margin","2px 4px 0px 4px"),u.style("text-align","start"),u.style("display","grid"),u.parent(c),c.elt.onclick=()=>{let x=[];for(let O=0,M=t.PostInfo.attachments.length;O<M;O++)x.push({content:t.PostInfo.attachments[O]});t.modalCtrl.create({component:D.K,componentProps:{info:{content:t.PostInfo.attachments[r]},path:t.PostInfo.attachments[r].path,relevance:x,noEdit:!0},cssClass:"fullscreen"}).then(O=>O.present())}}}else try{let c=JSON.parse(s[h]),m=a.createDiv(`[${c.i}] ${t.PostInfo.attachments[c.i].filename} (${c.t})`);m.style("background-color","#8888"),m.style("width","fit-content"),m.style("height","fit-content"),m.style("border-radius","16px"),m.style("padding","8px 16px"),m.style("cursor","pointer"),m.parent(d),y.push(()=>{let p=t.PlayableElements[c.i],u=c.t.split(":"),x=0,O=1;for(let M=u.length-1;M>=0;M--){let z=Number(u.pop());x+=z*O,O*=60}m.elt.onclick=()=>{try{p.currentTime=x,p.play()}catch{}}})}catch{let m=a.createDiv();m.parent(d);let p=s[h].split(" ");for(let u=0,x=p.length;u<x;u++)if(0==p[u].indexOf("http:")||0==p[u].indexOf("https:")){let O=a.createA(p[u],p[u]);O.attribute("target","_system"),O.parent(m),a.createSpan("&nbsp").parent(m)}else a.createSpan(p[u]+"&nbsp").parent(m)}}for(let h=0,P=y.length;h<P;h++)y[h]()}})})}EditPost(){this.modalCtrl.dismiss({edit:!0}),this.nakama.EditPost(this.PostInfo)}RemovePost(){var d,t=this;this.alertCtrl.create({header:this.lang.text.PostViewer.RemovePost,message:this.lang.text.ChatRoom.CannotUndone,buttons:[{text:this.lang.text.TodoDetail.remove,cssClass:"redfont",handler:(d=(0,E.c)(function*(){yield t.nakama.RemovePost(t.PostInfo),t.modalCtrl.dismiss()}),function(){return d.apply(this,arguments)})}]}).then(d=>d.present())}ngOnDestroy(){for(let t=0,d=this.FileURLs.length;t<d;t++)URL.revokeObjectURL(this.FileURLs[t]);for(let t=0,d=this.blenderViewers.length;t<d;t++)this.blenderViewers[t].remove();this.p5canvas&&this.p5canvas.remove()}}return(C=R).\u0275fac=function(t){return new(t||C)(o.GI1(b.qS),o.GI1(e.a6),o.GI1(A.o),o.GI1($.k),o.GI1(j.h),o.GI1(b.iW),o.GI1(L.A1))},C.\u0275cmp=o.In1({type:C,selectors:[["app-post-viewer"]],decls:13,vars:7,consts:[[1,"ion-no-border"],["slot","start",3,"click"],["defaultHref",""],["class","relevance_change","style","padding-right: 4px;","slot","end","name","arrow-back-circle-outline",3,"click",4,"ngIf"],["slot","end",4,"ngIf"],["class","relevance_change","style","padding-right: 16px; padding-left: 4px;","slot","end","name","arrow-forward-circle-outline",3,"click",4,"ngIf"],[3,"fullscreen"],["style","width: 100%; height: auto;","alt","MainImage",3,"src",4,"ngIf"],["id","PostContent",2,"padding","16px"],[4,"ngIf"],["slot","end","name","arrow-back-circle-outline",1,"relevance_change",2,"padding-right","4px",3,"click"],["slot","end"],["slot","end","name","arrow-forward-circle-outline",1,"relevance_change",2,"padding-right","16px","padding-left","4px",3,"click"],["alt","MainImage",2,"width","100%","height","auto",3,"src"],[2,"width","100%","background-color","black"],["expand","block",3,"click"],["color","danger","expand","block",3,"click"]],template:function(t,d){1&t&&(o.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o.OEk(3),o.C$Y(),o.I0R(4,"ion-buttons",1),o.qCj("click",function(){return d.modalCtrl.dismiss()}),o.wR5(5,"ion-back-button",2),o.C$Y(),o.yuY(6,V,1,0,"ion-icon",3)(7,B,2,1,"ion-label",4)(8,F,1,0,"ion-icon",5),o.C$Y()(),o.I0R(9,"ion-content",6),o.yuY(10,Y,1,1,"img",7),o.wR5(11,"div",8),o.C$Y(),o.yuY(12,N,9,2,"ion-footer",9)),2&t&&(o.yG2(3),o.cNF(d.lang.text.PostViewer.Title),o.yG2(3),o.E7m("ngIf",d.HavePosts),o.yG2(),o.E7m("ngIf",d.HavePosts),o.yG2(),o.E7m("ngIf",d.HavePosts),o.yG2(),o.E7m("fullscreen",!0),o.yG2(),o.E7m("ngIf",d.PostInfo.mainImage&&d.PostInfo.mainImage.MainThumbnail),o.yG2(2),o.E7m("ngIf",d.isOwner))},dependencies:[K.u_,b.sn,b.GS,b._i,b.eV,b.wB,b.Ko,b.QR,b.tM,b.Md,b.Im],styles:[".relevance_change[_ngcontent-%COMP%]{width:25px;height:25px}"]}),R})()}}]);