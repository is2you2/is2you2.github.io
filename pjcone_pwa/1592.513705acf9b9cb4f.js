"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1592],{8828:(w,P,h)=>{h.d(P,{_8:()=>k,on:()=>g,wd:()=>b});var k=function(_){return _.Prompt="PROMPT",_.Camera="CAMERA",_.Photos="PHOTOS",_}(k||{}),b=function(_){return _.Rear="REAR",_.Front="FRONT",_}(b||{}),g=function(_){return _.Uri="uri",_.Base64="base64",_.DataUrl="dataUrl",_}(g||{})},4120:(w,P,h)=>{h.d(P,{Ut:()=>g,_8:()=>b._8,on:()=>b.on});var k=h(6400),b=h(8828);const g=(0,k.C_)("Camera",{web:()=>h.e(9028).then(h.bind(h,9028)).then(_=>new _.CameraWeb)})},1592:(w,P,h)=>{h.r(P),h.d(P,{AddPostPageModule:()=>ae});var k=h(1368),b=h(4716),g=h(5624),_=h(3332),I=h(1528),E=h(5020),M=h(340),T=h(4120),F=h(1052),O=h(4712),G=h(2272),D=h(8744),U=h(9352),t=h(4496),B=h(4500),N=h(9240),L=h(7136),j=h(3824),Y=h(4668),K=h(4476),V=h(7756);function W(c,f){if(1&c&&(t.I0R(0,"ion-title"),t.OEk(1),t.C$Y()),2&c){const l=t.GaO();t.yG2(),t.cNF(l.lang.text.AddPost.EditTitle)}}function H(c,f){if(1&c&&(t.I0R(0,"ion-title"),t.OEk(1),t.C$Y()),2&c){const l=t.GaO();t.yG2(),t.cNF(l.lang.text.AddPost.Title)}}function J(c,f){if(1&c){const l=t.KQA();t.I0R(0,"ion-item",7),t.qCj("click",function(){const a=t.usT(l).index,s=t.GaO(2);return t.CGJ(s.select_server(a,!0))}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y()()}if(2&c){const l=f.$implicit;t.yG2(2),t.cNF(l.name)}}function z(c,f){if(1&c){const l=t.KQA();t.I0R(0,"ion-accordion-group",21,22),t.qCj("click",function(){t.usT(l);const i=t.GaO();return t.CGJ(i.isExpanded=!0)}),t.I0R(2,"ion-accordion",23)(3,"ion-item",24)(4,"ion-label"),t.OEk(5),t.C$Y(),t.I0R(6,"ion-label",25),t.OEk(7),t.C$Y(),t.wR5(8,"ion-icon",26),t.C$Y(),t.I0R(9,"div",27),t.yuY(10,J,3,1,"ion-item",28),t.C$Y()()()}if(2&c){const l=t.GaO();t.E7m("disabled",l.isSaveClicked)("value",l.isExpanded),t.yG2(5),t.cNF(l.lang.text.AddGroup.SelectServer),t.yG2(2),t.cNF(l.servers[l.index].name),t.yG2(3),t.E7m("ngForOf",l.servers)}}function Q(c,f){if(1&c){const l=t.KQA();t.I0R(0,"div",29)(1,"ion-item",11)(2,"ion-toggle",30),t.iHE("ngModelChange",function(i){t.usT(l);const a=t.GaO();return t.kNx(a.userInput.isNSFW,i)||(a.userInput.isNSFW=i),t.CGJ(i)}),t.OEk(3),t.C$Y()(),t.I0R(4,"div",31),t.wR5(5,"img",32),t.C$Y()()}if(2&c){const l=t.GaO();t.yG2(2),t.OKB("ngModel",l.userInput.isNSFW),t.yG2(),t.cNF(l.lang.text.AddPost.NSFW),t.yG2(2),t.m_g(l.userInput.isNSFW?"filter: blur(16px);":""),t.E7m("src",l.MainPostImage,t.K6U)}}function X(c,f){if(1&c&&t.wR5(0,"ion-icon",37),2&c){const l=t.GaO().$implicit;t.E7m("name",l.icon||"close-circle")}}function Z(c,f){if(1&c&&t.wR5(0,"img",38),2&c){const l=t.GaO().$implicit;t.E7m("src","assets/icon/"+l.icon_img,t.K6U)("alt",l.title)}}function q(c,f){if(1&c){const l=t.KQA();t.I0R(0,"div",33)(1,"div",34),t.qCj("click",function(){const a=t.usT(l).$implicit;return t.CGJ(a.act())}),t.yuY(2,X,1,1,"ion-icon",35)(3,Z,1,2,"img",36),t.I0R(4,"div"),t.OEk(5),t.C$Y()()()}if(2&c){const l=f.$implicit;t.yG2(),t.m_g("cursor: "+(l.cursor||"pointer")+";"),t.E7m("hidden",l.isHide),t.yG2(),t.E7m("ngIf",l.icon),t.yG2(),t.E7m("ngIf",l.icon_img),t.yG2(2),t.cNF(l.name)}}function ee(c,f){if(1&c){const l=t.KQA();t.I0R(0,"ion-item",39),t.qCj("click",function(){const i=t.usT(l),a=i.$implicit,s=i.index,n=t.GaO();return t.CGJ(n.open_viewer(a,s))}),t.I0R(1,"ion-label"),t.OEk(2),t.C$Y(),t.I0R(3,"div",40),t.wR5(4,"img",41),t.C$Y()()}if(2&c){const l=f.$implicit,e=f.index,i=t.GaO();t.E7m("id","PostAttach_"+e)("disabled",i.isSaveClicked),t.yG2(2),t.cNF("["+e+"] "+l.filename),t.yG2(2),t.E7m("src",l.thumbnail,t.K6U)}}const te=[{path:"",component:(()=>{var c;class f{constructor(e,i,a,s,n,o,m,p,r,u,x,A){var C,d=this;this.global=e,this.lang=i,this.navCtrl=a,this.nakama=s,this.modalCtrl=n,this.p5toast=o,this.indexed=m,this.loadingCtrl=p,this.sanitizer=r,this.mClipboard=u,this.route=x,this.router=A,this.servers=[],this.userInput={id:void 0,title:void 0,content:void 0,creator_id:void 0,creator_name:void 0,UserColor:void 0,create_time:void 0,modify_time:void 0,server:void 0,mainImage:void 0,attachments:[],isNSFW:!1},this.index=0,this.isModify=!1,this.isExpanded=!1,this.isSaveClicked=!1,this.isServerChanged=!1,this.useVoiceRecording=!1,this.MainPostImage=void 0,this.extended_buttons=[{icon:"image-outline",name:this.lang.text.AddPost.MainPostImage,act:()=>{this.isSaveClicked||(this.MainPostImage?(this.MainPostImage=void 0,this.userInput.mainImage=void 0,document.getElementById("PostMainImage_sel").value=""):document.getElementById("PostMainImage_sel").click())}},{icon:"document-attach-outline",name:this.lang.text.ChatRoom.attachments,act:(C=(0,I.c)(function*(){if(!d.isSaveClicked)try{return void(yield d.new_attach({detail:{value:"link"}}))}catch(v){"done"!=v&&d.new_attach({detail:{value:"load"}})}}),function(){return C.apply(this,arguments)})},{icon_img:"voidDraw.png",name:this.lang.text.ChatRoom.voidDraw,act:function(){var C=(0,I.c)(function*(){d.isSaveClicked||d.modalCtrl.create({component:F.S,componentProps:{},cssClass:"fullscreen"}).then(y=>{y.onWillDismiss().then(function(){var $=(0,I.c)(function*(R){R.data&&(d.AddAttachTextForm(),yield d.voidDraw_fileAct_callback(R,void 0))});return function(R){return $.apply(this,arguments)}}()),y.onDidDismiss().then(()=>{d.AddShortcut()}),delete d.global.p5key.KeyShortCut.Escape,y.present()})});return function(){return C.apply(this,arguments)}}()},{icon:"camera-outline",name:this.lang.text.ChatRoom.Camera,act:function(){var C=(0,I.c)(function*(){if(!d.isSaveClicked)try{const v=yield T.Ut.getPhoto({quality:90,resultType:T.on.Base64,source:T._8.Camera});let S=yield d.loadingCtrl.create({message:d.lang.text.TodoDetail.WIP});S.present();let y={};y.filename=`Camera_${(new Date).toLocaleString().replace(/:/g,"_")}.${v.format}`,y.file_ext=v.format,y.thumbnail=d.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+v.base64String),y.type=`image/${v.format}`,y.typeheader="image",y.content_related_creator=[{user_id:"local"==d.servers[d.index].isOfficial?"local":d.nakama.servers[d.isOfficial][d.target].session.user_id,timestamp:(new Date).getTime(),display_name:d.nakama.users.self.display_name,various:"camera"}],y.content_creator={user_id:"local"==d.servers[d.index].isOfficial?"local":d.nakama.servers[d.isOfficial][d.target].session.user_id,timestamp:(new Date).getTime(),display_name:d.nakama.users.self.display_name,various:"camera"},y.viewer="image",y.path=`tmp_files/post/${y.filename}`,yield d.indexed.saveBase64ToUserPath("data:image/jpeg;base64,"+v.base64String,y.path,R=>{y.blob=new Blob([R],{type:y.type})}),d.AddAttachTextForm(),d.userInput.attachments.push(y),d.MakeAttachHaveContextMenu(),S.dismiss()}catch{}});return function(){return C.apply(this,arguments)}}()},{icon:"mic-circle-outline",name:this.lang.text.ChatRoom.Voice,act:function(){var C=(0,I.c)(function*(){d.isSaveClicked||(d.useVoiceRecording=!d.useVoiceRecording,d.useVoiceRecording?(yield O.G.hasAudioRecordingPermission()).value?(d.extended_buttons[4].icon="stop-circle-outline",d.p5toast.show({text:d.lang.text.ChatRoom.StartVRecord}),d.p5canvas.StartVoiceTimer(),d.extended_buttons[5].isHide=!1,yield O.G.startRecording()):(d.useVoiceRecording=!1,d.extended_buttons[4].icon="mic-circle-outline",yield O.G.requestAudioRecordingPermission()):yield d.StopAndSaveVoiceRecording())});return function(){return C.apply(this,arguments)}}()},{name:this.lang.text.AddPost.RecordVoiceTime,isHide:!0,icon:"timer-outline",act:()=>{this.userInput.content?this.userInput.content+=`\n{"i":"n","t":"${this.extended_buttons[4].name}"}\n`:this.userInput.content=`{"i":"n","t":"${this.extended_buttons[4].name}"}\n`,this.ContentTextArea.focus()}},{icon:"cloud-done-outline",name:this.lang.text.ChatRoom.Detour,act:()=>{this.toggle_custom_attach()}}],this.lock_modal_open=!1,this.useFirstCustomCDN=0,this.isApplyPostData=!1}ngOnDestroy(){this.p5canvas&&this.p5canvas.remove(),delete this.nakama.StatusBarChangedCallback}ngOnInit(){var e=this;this.useFirstCustomCDN=Number(localStorage.getItem("useFFSCDN"))||0,this.toggle_custom_attach(this.useFirstCustomCDN),this.route.queryParams.subscribe(function(){var i=(0,I.c)(function*(a){const s=e.router.getCurrentNavigation().extras.state;let n=!1;if(s&&(n=!!s.act,s.data&&(e.userInput=s.data)),e.MakeAttachHaveContextMenu(),n){if(e.LoadListServer(),e.servers.length>1&&(e.index=1),s&&s.data){let o=`${e.userInput.server.isOfficial}/${e.userInput.server.target}`;for(let m=0,p=e.servers.length;m<p;m++)if(`${e.servers[m].isOfficial}/${e.servers[m].target}`==o){e.index=m;break}if(e.userInput.mainImage){let m=e.userInput.mainImage.url;m||(m=URL.createObjectURL(e.userInput.mainImage.blob),setTimeout(()=>{URL.revokeObjectURL(m)},100)),e.MainPostImage=m}}e.select_server(e.index),s&&s.data&&(e.OriginalInfo=JSON.parse(JSON.stringify(e.userInput)))}});return function(a){return i.apply(this,arguments)}}()),this.CreateDrop(),this.nakama.StatusBarChangedCallback=()=>{this.LoadListServer(),this.index=0}}LoadListServer(){this.servers=this.nakama.get_all_server_info(!0,!0),this.servers.unshift({name:this.lang.text.AddGroup.UseLocalStorage,isOfficial:"local",target:"target",local:!0})}CreateDrop(){var e=this;let i=document.getElementById("p5Drop_addPost");this.p5canvas||(this.p5canvas=new U(a=>{let s=0;a.setup=()=>{let o=a.createCanvas(i.clientWidth,i.clientHeight);o.parent(i),a.pixelDensity(.1),o.drop(function(){var m=(0,I.c)(function*(p){yield e.selected_blobFile_callback_act(p.file)});return function(p){return m.apply(this,arguments)}}()),a.noLoop(),a.StartVoiceTimer=()=>{a.loop(),s=a.millis()},a.StopVoiceTimer=()=>{a.noLoop()}},a.draw=()=>{this.useVoiceRecording&&(this.extended_buttons[4].name=n(a.millis()-s))};let n=o=>{let m=o/1e3,p=a.floor(m)%60,r=m/60,u=a.floor(r)%60,x=a.floor(r/60);return x?`${x}:${u}:${a.nf(p,2)}`:`${u}:${a.nf(p,2)}`};a.mouseMoved=o=>{o.dataTransfer?(i.style.pointerEvents="all",i.style.backgroundColor="#0008"):(i.style.pointerEvents="none",i.style.backgroundColor="transparent")},a.keyPressed=o=>{"Enter"===o.code&&"exact_post_title_id"==document.activeElement.id&&this.postData()}}))}catchBottomTabShortCut(){this.BottomTabShortcut=this.global.p5key.KeyShortCut.BottomTab,delete this.global.p5key.KeyShortCut.BottomTab}ionViewWillEnter(){this.AddShortcut(),this.catchBottomTabShortCut(),this.TitleInput=document.getElementById("add_post_title").childNodes[1].childNodes[1].childNodes[1],this.TitleInput.id="exact_post_title_id",this.TitleInput.onpaste=e=>{let i=[];for(const a of e.clipboardData.files)a.type.startsWith("image/png")&&i.push({file:a});if(i.length)return 1==i.length&&this.ChangeMainPostImage({target:{files:[i[0].file]}}),!1},this.ContentTextArea=document.getElementById("add_post_content"),setTimeout(()=>{this.userInput.title?this.ContentTextArea.focus():this.TitleInput.focus()},200),this.ContentTextArea.onpaste=e=>{let i=[];for(const a of e.clipboardData.files)a.type.startsWith("image/")&&i.push({file:a});if(i.length){if(1==i.length)this.selected_blobFile_callback_act(i[0].file);else for(let a=0,s=i.length;a<s;a++)this.selected_blobFile_callback_act(i[a].file);return!1}},this.isModify=!!this.userInput.id}go_to_profile(){this.modalCtrl.create({component:M.w,componentProps:{isOfficial:this.isOfficial,target:this.target}}).then(e=>e.present())}select_server(e,i=!1){this.index=e,this.userInput.server=this.servers[e],this.isExpanded=!1,this.isOfficial=this.servers[e].isOfficial,this.target=this.servers[e].target,i?this.isServerChanged=this.OriginalServerInfo!=`${this.isOfficial}/${this.target}`:this.OriginalServerInfo=`${this.isOfficial}/${this.target}`,this.userInput.creator_name=this.nakama.users.self.display_name;try{this.userInput.creator_id=this.nakama.servers[this.isOfficial][this.target].session.user_id,this.userInput.UserColor=(this.userInput.creator_id.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6)}catch{this.userInput.creator_id="me",this.userInput.UserColor="888888"}}AddShortcut(){this.global.p5key&&this.global.p5key.KeyShortCut&&(this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.navigateBack("portal/community")})}StopAndSaveVoiceRecording(){var e=this;return(0,I.c)(function*(){let i=yield e.loadingCtrl.create({message:e.lang.text.AddPost.SavingRecord});i.present();try{let a=yield O.G.stopRecording(),s=e.global.Base64ToBlob(`${a.value.mimeType},${a.value.recordDataBase64}`);s.name=`${e.lang.text.ChatRoom.VoiceRecord}.${a.value.mimeType.split("/").pop().split(";")[0]}`,s.type_override=a.value.mimeType,yield e.selected_blobFile_callback_act(s),i.dismiss()}catch(a){e.p5toast.show({text:`${e.lang.text.AddPost.FailedToSaveVoice}:${a}`}),i.dismiss()}e.extended_buttons[4].icon="mic-circle-outline",e.extended_buttons[4].name=e.lang.text.ChatRoom.Voice,e.checkVoiceLinker()})()}checkVoiceLinker(){this.extended_buttons[5].isHide=!0,this.p5canvas.StopVoiceTimer();let e=this.userInput.content.split("\n");for(let i=0,a=e.length;i<a;i++)try{let s=JSON.parse(e[i]);"n"==s.i&&(s.i=this.userInput.attachments.length-1),e[i]=JSON.stringify(s)}catch{}this.userInput.content=e.join("\n")}ChangeMainPostImage(e){let i=e.target.files[0],a={};a.filename=i.name,a.file_ext=i.name.split(".").pop()||i.type||this.lang.text.ChatRoom.unknown_ext,a.size=i.size,a.type=i.type||i.type_override,a.blob=i,a.path=`tmp_files/post/MainImage.${a.file_ext}`,this.userInput.mainImage=a;let s=URL.createObjectURL(i);this.indexed.saveBlobToUserPath(i,a.path),this.MainPostImage=s,setTimeout(()=>{URL.revokeObjectURL(s)},100)}selected_blobFile_callback_act(e,i=[],a="loaded",s){var n=this;return(0,I.c)(function*(){let o={};o.filename=e.name,o.file_ext=e.name.split(".").pop()||e.type||n.lang.text.ChatRoom.unknown_ext,o.size=e.size,o.type=e.type||e.type_override,s&&(o.path=s),o.content_related_creator=[...i,{user_id:"local"==n.servers[n.index].isOfficial?"local":n.nakama.servers[n.isOfficial][n.target].session.user_id,timestamp:(new Date).getTime(),display_name:n.nakama.users.self.display_name,various:a}],o.content_creator={user_id:"local"==n.servers[n.index].isOfficial?"local":n.nakama.servers[n.isOfficial][n.target].session.user_id,timestamp:(new Date).getTime(),display_name:n.nakama.users.self.display_name,various:a},o.blob=e,o.path=`tmp_files/post/${o.filename}_${n.userInput.attachments.length}.${o.file_ext}`,n.create_selected_thumbnail(o),n.AddAttachTextForm(),n.userInput.attachments.push(o),n.MakeAttachHaveContextMenu(),n.indexed.saveBlobToUserPath(o.blob,o.path)})()}AddAttachTextForm(){this.userInput.content?this.userInput.content+=`\n[${this.userInput.attachments.length}]\n`:this.userInput.content=`[${this.userInput.attachments.length}]\n`}create_selected_thumbnail(e){var i=this;return(0,I.c)(function*(){if(i.global.set_viewer_category_from_ext(e),e.url){try{(yield fetch(e.url)).ok&&(e.thumbnail=e.url)}catch{}return void(e.typeheader=e.viewer)}try{e.thumbnail=yield i.indexed.loadBlobFromUserPath(e.path,e.type)}catch{}let a=URL.createObjectURL(e.blob);"image"===(e.typeheader=e.blob.type.split("/")[0]||e.viewer,setTimeout(()=>{URL.revokeObjectURL(a)},0),e.thumbnail=void 0,e.typeheader)&&(e.thumbnail=i.sanitizer.bypassSecurityTrustUrl(a))})()}voidDraw_fileAct_callback(e,i,a){var s=this;return(0,I.c)(function*(){let n={};void 0!==a?s.userInput.attachments[a]=n:s.userInput.attachments.push(n);try{n.filename=e.data.name,n.file_ext="png",n.thumbnail=s.sanitizer.bypassSecurityTrustUrl(e.data.img),n.type="image/png",n.typeheader="image",i?(n.content_related_creator=i,n.content_creator={user_id:"local"==s.servers[s.index].isOfficial?"local":s.nakama.servers[s.isOfficial][s.target].session.user_id,timestamp:(new Date).getTime(),display_name:s.nakama.users.self.display_name,various:"voidDraw"}):(n.content_related_creator=[{user_id:"local"==s.servers[s.index].isOfficial?"local":s.nakama.servers[s.isOfficial][s.target].session.user_id,timestamp:(new Date).getTime(),display_name:s.nakama.users.self.display_name,various:"voidDraw"}],n.content_creator={user_id:"local"==s.servers[s.index].isOfficial?"local":s.nakama.servers[s.isOfficial][s.target].session.user_id,timestamp:(new Date).getTime(),display_name:s.nakama.users.self.display_name,various:"voidDraw"}),n.path=`tmp_files/post/${n.filename}`,n.viewer="image",yield s.indexed.saveBase64ToUserPath(e.data.img,n.path,o=>{n.blob=new Blob([o],{type:n.type})}),s.MakeAttachHaveContextMenu()}catch(o){console.error("godot-\uc774\ubbf8\uc9c0 \ud3b8\uc9d1 \uc0ac\uc6a9 \ubd88\uac00: ",o)}e.data.loadingCtrl.dismiss()})()}new_attach(e,i=void 0){var a=this;return(0,I.c)(function*(){let s;switch(void 0===i&&(i={}),e.detail.value){case"load":document.getElementById("add_post_input").click();break;case"link":try{let n=i.url;if(void 0===n)try{n=yield a.mClipboard.paste()}catch{try{n=yield G.c.read()}catch(r){throw r}}try{let p=a.global.Base64ToBlob(n),r=n.split(";")[0].split(":")[1];throw s=new File([p],`${a.lang.text.ChatRoom.FileLink}.${r.split("/").pop()}`,{type:r}),yield a.selected_blobFile_callback_act(s),"done"}catch(p){if("done"===p)throw p}try{if(s&&void 0===i.filename)throw"\uc774\ubbf8 \ud30c\uc77c\uc774 \ucca8\ubd80\ub428, \ud1a0\uae00\ub9cc \uc2dc\ub3c4";if(!(yield fetch(n)).ok)throw"URL \uad6c\uc870\uac00 \uc815\uc0c1\uc774 \uc544\ub2d8"}catch(p){throw p}let o={};o.url=n,o.content_related_creator=[],i&&i.content_related_creator&&(o.content_related_creator=[...i.content_related_creator]),o.content_related_creator.push({user_id:"local"==a.servers[a.index].isOfficial?"local":a.nakama.servers[a.isOfficial][a.target].session.user_id,timestamp:(new Date).getTime(),display_name:a.nakama.users.self.display_name,various:i.url?"shared":"link"}),o.content_creator={user_id:"local"==a.servers[a.index].isOfficial?"local":a.nakama.servers[a.isOfficial][a.target].session.user_id,timestamp:(new Date).getTime(),display_name:a.nakama.users.self.display_name,various:i.url?"shared":"link"};let m=o.url.split(".");o.file_ext=i.file_ext||m.pop().split("?").shift(),o.filename=i.filename||decodeURIComponent(`${m.pop().split("/").pop()||a.lang.text.ChatRoom.ExternalLinkFile}.${o.file_ext}`),a.global.set_viewer_category_from_ext(o),o.type=i.type||"",o.typeheader=i.typeheader||o.viewer,a.global.modulate_thumbnail(o,o.url),a.userInput.attachments.push(o),a.MakeAttachHaveContextMenu()}catch(n){throw"done"==n?n:`\uc778\uc2dd \ubd88\uac00\ub2a5\ud55c URL \uc815\ubcf4: ${n}`}}})()}MakeAttachHaveContextMenu(){setTimeout(()=>{for(let e=this.userInput.attachments.length-1;e>=0;e--)document.getElementById(`PostAttach_${e}`).oncontextmenu=()=>(this.p5toast.show({text:`${this.lang.text.AddPost.RemoveAttach}: ${this.userInput.attachments[e].filename}`}),this.userInput.attachments.splice(e,1),this.MakeAttachHaveContextMenu(),!1)},0)}inputFileSelected(e){var i=this;return(0,I.c)(function*(){if(e.target.files.length)if(1!=e.target.files.length){let s=yield i.loadingCtrl.create({message:i.lang.text.ChatRoom.MultipleSend});s.present();for(let n=0,o=e.target.files.length;n<o;n++)s.message=`${o-n}: ${e.target.files[n].name}`,yield i.selected_blobFile_callback_act(e.target.files[n]);s.dismiss(),setTimeout(()=>{document.getElementById("add_post_input").value=""},300)}else{let s=yield i.loadingCtrl.create({message:i.lang.text.TodoDetail.WIP});s.present(),yield i.selected_blobFile_callback_act(e.target.files[0]),s.dismiss(),document.getElementById("add_post_input").value=""}})()}open_viewer(e,i){var a=this;let s=[];for(let n=0,o=this.userInput.attachments.length;n<o;n++)s.push({content:this.userInput.attachments[n]});this.lock_modal_open||(this.lock_modal_open=!0,delete this.global.p5key.KeyShortCut.Escape,this.modalCtrl.create({component:D.K,componentProps:{info:{content:e},path:e.path,alt_path:e.path,isOfficial:this.isOfficial,target:this.target,relevance:s,local:"local"==this.servers[this.index].isOfficial},cssClass:"fullscreen"}).then(n=>{n.onDidDismiss().then(o=>{if(this.AddShortcut(),o.data)switch(o.data.type){case"image":let m=[];if(o.data.msg.content.content_related_creator&&(m=[...o.data.msg.content.content_related_creator]),o.data.msg.content.content_creator){let p=!1;for(let r=0,u=m.length;r<u;r++)if(m[r].user_id==o.data.msg.content.content_creator.user_id){p=!0;break}p||m.push(o.data.msg.content.content_creator)}return void this.modalCtrl.create({component:F.S,componentProps:{path:o.data.path||e.path,width:o.data.width,height:o.data.height,isDarkMode:o.data.isDarkMode},cssClass:"fullscreen"}).then(p=>{p.onDidDismiss().then(()=>{this.AddShortcut()}),p.onWillDismiss().then(function(){var r=(0,I.c)(function*(u){u.data&&(yield a.voidDraw_fileAct_callback(u,m,i))});return function(u){return r.apply(this,arguments)}}()),delete this.global.p5key.KeyShortCut.Escape,p.present()});case"text":this.selected_blobFile_callback_act(o.data.blob,o.data.contentRelated,"textedit")}}),delete this.global.p5key.KeyShortCut.Escape,n.present(),this.lock_modal_open=!1}))}toggle_custom_attach(e){var i=this;return(0,I.c)(function*(){switch(i.useFirstCustomCDN=null!=e?e:(i.useFirstCustomCDN+1)%3,i.useFirstCustomCDN){case 0:i.extended_buttons[6].icon="cloud-offline-outline";break;case 1:i.extended_buttons[6].icon="cloud-done-outline";break;case 2:i.extended_buttons[6].icon="server-outline"}localStorage.setItem("useFFSCDN",`${i.useFirstCustomCDN}`)})()}postData(){var e=this;return(0,I.c)(function*(){if(!e.userInput.title)return e.p5toast.show({text:e.lang.text.AddPost.NeedPostTitle}),void e.TitleInput.focus();e.useVoiceRecording&&(yield e.StopAndSaveVoiceRecording());let i=!!e.userInput.server.local;e.isApplyPostData=!0;let a=yield e.loadingCtrl.create({message:e.lang.text.AddPost.WIP});a.present(),e.isSaveClicked=!0;let s=e.userInput.server.isOfficial,n=e.userInput.server.target;if(!e.isModify||e.isServerChanged)if(e.isServerChanged&&e.OriginalInfo&&(yield e.nakama.RemovePost(e.OriginalInfo)),i){let r=Number(yield e.indexed.loadTextFromUserPath("servers/local/target/posts/me/counter.txt"))||0;e.userInput.id=`LocalPost_${r}`;try{yield e.indexed.saveTextFileToUserPath(`${r+1}`,"servers/local/target/posts/me/counter.txt")}catch(u){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${u}`}),console.log(u)}}else try{let r=yield e.nakama.servers[s][n].client.readStorageObjects(e.nakama.servers[s][n].session,{object_ids:[{collection:"server_post",key:"Counter",user_id:e.nakama.servers[s][n].session.user_id}]}),u=0;r.objects.length&&(u=r.objects[0].value.counter),e.userInput.id=`ServerPost_${u}`,yield e.nakama.servers[s][n].client.writeStorageObjects(e.nakama.servers[s][n].session,[{collection:"server_post",key:"Counter",permission_write:1,permission_read:2,value:{counter:u+1}}])}catch(r){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${r}`}),console.log(r)}else yield e.nakama.RemovePost(e.userInput);e.isModify?e.userInput.modify_time=(new Date).getTime():(e.userInput.create_time=(new Date).getTime(),e.userInput.modify_time=e.userInput.create_time);for(let r=0,u=e.userInput.attachments.length;r<u;r++)delete e.userInput.attachments[r].thumbnail;if(e.userInput.mainImage){a.message=e.lang.text.AddPost.SyncMainImage;try{e.userInput.mainImage.path=`servers/${s}/${n}/posts/${e.userInput.creator_id}/${e.userInput.id}/mainImage.png`,yield e.indexed.saveBlobToUserPath(e.userInput.mainImage.blob,e.userInput.mainImage.path)}catch(x){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${x}`}),console.log(x)}let r=e.userInput.mainImage.blob;i||(yield e.nakama.sync_save_file(e.userInput.mainImage,s,n,"server_post",`${e.userInput.id}_mainImage`)),e.userInput.mainImage.blob=r;let u=URL.createObjectURL(r);e.userInput.mainImage.thumbnail=u,setTimeout(()=>{URL.revokeObjectURL(r)},100)}let o=e.userInput.attachments.length;if(o){a.message=e.lang.text.AddPost.SyncAttaches;for(let r=o-1;r>=0;r--){try{let u;if(a.message=`${e.lang.text.AddPost.SyncAttaches}: [${r}]${e.userInput.attachments[r].filename}`,e.useFirstCustomCDN&&(u=yield e.global.try_upload_to_user_custom_fs(e.userInput.attachments[r],e.nakama.users.self.display_name)),!u)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";delete e.userInput.attachments[r].path,delete e.userInput.attachments[r].partsize,e.userInput.attachments[r].url=u}catch{e.userInput.attachments[r].path=`servers/${s}/${n}/posts/${e.userInput.creator_id}/${e.userInput.id}/[${r}]${e.userInput.attachments[r].filename}`,yield e.indexed.saveBlobToUserPath(e.userInput.attachments[r].blob,e.userInput.attachments[r].path)}if(!i)try{let u=e.nakama.servers[e.isOfficial][e.target].info.address,x=e.nakama.servers[e.isOfficial][e.target].info.useSSL?"https:":"http:",A=yield e.global.upload_file_to_storage(e.userInput.attachments[r],e.nakama.servers[e.isOfficial][e.target].session.user_id,x,u,1==e.useFirstCustomCDN);if(!A)throw"\ub9c1\ud06c \ub9cc\ub4e4\uae30 \uc2e4\ud328";delete e.userInput.attachments[r].partsize,e.userInput.attachments[r].url=A}catch{yield e.nakama.sync_save_file(e.userInput.attachments[r],s,n,"server_post",`${e.userInput.id}_attach_${r}`)}}}let m=JSON.parse(JSON.stringify(e.userInput));m.mainImage&&delete m.mainImage.blob;for(let r=m.attachments.length-1;r>=0;r--)delete m.attachments[r].blob;delete m.server;try{e.nakama.posts_orig[s][n]||(e.nakama.posts_orig[s][n]={}),e.nakama.posts_orig[s][n][e.userInput.creator_id]||(e.nakama.posts_orig[s][n][e.userInput.creator_id]={}),e.nakama.posts_orig[s][n][e.userInput.creator_id][e.userInput.id]=e.userInput}catch(r){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${r}`}),console.log(r)}let p=JSON.stringify(m);if(yield e.indexed.saveTextFileToUserPath(p,`servers/${s}/${n}/posts/${e.userInput.creator_id}/${e.userInput.id}/info.json`),!i){let r=new Blob([p],{type:"application/json"}),u={filename:"info.json"};u.blob=r,u.size=r.size,u.type="application/json",u.file_ext="txt",u.typeheader="text",u.path=`servers/${s}/${n}/posts/${e.userInput.creator_id}/${e.userInput.id}/info.json`,yield e.nakama.sync_save_file(u,s,n,"server_post",e.userInput.id)}e.nakama.rearrange_posts(),a.dismiss(),e.navCtrl.navigateBack("portal/community")})()}ionViewWillLeave(){if(delete this.global.p5key.KeyShortCut.Escape,this.global.p5key.KeyShortCut.BottomTab=this.BottomTabShortcut,this.indexed.GetFileListFromDB("tmp_files/post").then(e=>e.forEach(i=>this.indexed.removeFileFromUserPath(i))),!this.isApplyPostData)try{this.nakama.posts_orig[this.isOfficial][this.target][this.userInput.creator_id][this.userInput.id]&&delete this.nakama.posts_orig[this.isOfficial][this.target][this.userInput.creator_id][this.userInput.id],this.nakama.load_local_post_with_id(this.userInput.id,this.userInput.server.isOfficial,this.userInput.server.target,this.userInput.creator_id),this.nakama.rearrange_posts()}catch{}}}return(c=f).\u0275fac=function(e){return new(e||c)(t.GI1(E.A1),t.GI1(B.o),t.GI1(N.wX),t.GI1(L.h),t.GI1(g.qS),t.GI1(j.O),t.GI1(Y.k),t.GI1(g.Kg),t.GI1(K.mI),t.GI1(V._),t.GI1(_.gV),t.GI1(_.E5))},c.\u0275cmp=t.In1({type:c,selectors:[["app-add-post"]],decls:30,vars:20,consts:[[1,"ion-no-border"],[4,"ngIf"],["slot","start"],["defaultHref","portal/community"],[3,"fullscreen"],["id","p5Drop_addPost",2,"position","absolute","width","100%","height","100%","display","flex","pointer-events","none"],["value","colors","expand","inset",3,"disabled","value","click",4,"ngIf"],["button","",3,"click"],[1,"additional_form","new_bg_form"],[1,"ion-text-end"],["style","width: 100%; text-align: center; text-align: -webkit-center; padding: 8px;",4,"ngIf"],["button",""],["id","add_post_title",3,"disabled","placeholder","ngModel","ngModelChange"],["id","add_post_content",1,"infobox",2,"height","50%",3,"disabled","placeholder","ngModel","ngModelChange"],["hidden","","type","file","id","add_post_input","accept","*","multiple","",3,"change"],["hidden","","type","file","id","PostMainImage_sel","accept","image/*",3,"change"],[2,"width","100%","text-align","center","padding-bottom","16px"],["style","display: inline-block;",4,"ngFor","ngForOf"],["button","",3,"id","disabled","click",4,"ngFor","ngForOf"],["button","",3,"disabled","click"],[1,"ion-text-center"],["value","colors","expand","inset",3,"disabled","value","click"],["accordionGroup",""],["value","colors"],["slot","header"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["slot","content"],["button","",3,"click",4,"ngFor","ngForOf"],[2,"width","100%","text-align","center","text-align","-webkit-center","padding","8px"],[2,"pointer-events","none",3,"ngModel","ngModelChange"],[2,"width","400px","padding-top","8px"],["alt","MainPostImage",1,"thumbnail_image",3,"src"],[2,"display","inline-block"],[1,"ext_button","ext_button_override",3,"hidden","click"],["slot","icon-only","style","width: 36px; height: 36px;",3,"name",4,"ngIf"],["class","ext_icon_img",3,"src","alt",4,"ngIf"],["slot","icon-only",2,"width","36px","height","36px",3,"name"],[1,"ext_icon_img",3,"src","alt"],["button","",3,"id","disabled","click"],[1,"additional_form","bg_img_form"],[1,"profile_img",3,"src"]],template:function(e,i){1&e&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar"),t.yuY(2,W,2,1,"ion-title",1)(3,H,2,1,"ion-title",1),t.I0R(4,"ion-buttons",2),t.wR5(5,"ion-back-button",3),t.C$Y()()(),t.I0R(6,"ion-content",4),t.wR5(7,"div",5),t.yuY(8,z,11,5,"ion-accordion-group",6),t.I0R(9,"ion-item",7),t.qCj("click",function(){return i.go_to_profile()}),t.wR5(10,"div",8),t.I0R(11,"ion-label"),t.OEk(12),t.C$Y(),t.I0R(13,"ion-label",9),t.OEk(14),t.C$Y()(),t.I0R(15,"ion-item-divider")(16,"ion-label"),t.OEk(17),t.C$Y()(),t.yuY(18,Q,6,5,"div",10),t.I0R(19,"ion-item",11)(20,"ion-input",12),t.iHE("ngModelChange",function(s){return t.kNx(i.userInput.title,s)||(i.userInput.title=s),s}),t.C$Y()(),t.I0R(21,"textarea",13),t.iHE("ngModelChange",function(s){return t.kNx(i.userInput.content,s)||(i.userInput.content=s),s}),t.C$Y(),t.I0R(22,"input",14),t.qCj("change",function(s){return i.inputFileSelected(s)}),t.C$Y(),t.I0R(23,"input",15),t.qCj("change",function(s){return i.ChangeMainPostImage(s)}),t.C$Y(),t.I0R(24,"div",16),t.yuY(25,q,6,6,"div",17),t.C$Y(),t.yuY(26,ee,5,4,"ion-item",18),t.I0R(27,"ion-item",19),t.qCj("click",function(){return i.postData()}),t.I0R(28,"ion-label",20),t.OEk(29),t.C$Y()()()),2&e&&(t.yG2(2),t.E7m("ngIf",i.isModify),t.yG2(),t.E7m("ngIf",!i.isModify),t.yG2(3),t.E7m("fullscreen",!0),t.yG2(2),t.E7m("ngIf",i.servers.length),t.yG2(2),t.m_g("background-image: linear-gradient(to right, #0000, #"+i.userInput.UserColor+"44)"),t.yG2(2),t.cNF(i.lang.text.AddPost.Creator),t.yG2(2),t.cNF(i.userInput.creator_name||i.lang.text.Profile.noname_user),t.yG2(3),t.cNF(i.lang.text.AddPost.AddNewPost),t.yG2(),t.E7m("ngIf",i.MainPostImage),t.yG2(2),t.E7m("disabled",i.isSaveClicked)("placeholder",i.lang.text.AddPost.TitlePlaceholder),t.OKB("ngModel",i.userInput.title),t.yG2(),t.E7m("disabled",i.isSaveClicked)("placeholder",i.lang.text.AddPost.ContentPlaceHolder),t.OKB("ngModel",i.userInput.content),t.yG2(4),t.E7m("ngForOf",i.extended_buttons),t.yG2(),t.E7m("ngForOf",i.userInput.attachments),t.yG2(),t.E7m("disabled",i.isSaveClicked),t.yG2(2),t.cNF(i.lang.text.AddPost.Post))},dependencies:[k.ay,k.u_,b.ot,b.ue,b._G,g.cm,g.qU,g.GS,g._i,g.wB,g.Ko,g.A5,g.Yb,g.S8,g.QR,g.tM,g.E$,g.Md,g.UJ,g.qG,g.Im],styles:[".ext_button_override[_ngcontent-%COMP%]{margin:12px;cursor:pointer}.thumbnail_image[_ngcontent-%COMP%]{width:100%;max-height:240px;object-fit:cover;border-radius:16px}"]}),f})()}];let ie=(()=>{var c;class f{}return(c=f).\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.a4G({type:c}),c.\u0275inj=t.s3X({imports:[_.qQ.forChild(te),_.qQ]}),f})(),ae=(()=>{var c;class f{}return(c=f).\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.a4G({type:c}),c.\u0275inj=t.s3X({imports:[k.MD,b.y,g.wZ,ie]}),f})()}}]);