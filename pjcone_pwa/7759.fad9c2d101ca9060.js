"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7759],{7759:(H,A,h)=>{h.r(A),h.d(A,{AddPostPageModule:()=>W});var P=h(177),y=h(4341),b=h(5374),x=h(9858),_=h(467),C=h(4237),k=h(5402),S=h(8326),R=h(92),e=h(3953),$=h(482),F=h(4234),O=h(3656),T=h(9900),w=h(755),j=h(345);function M(l,I){if(1&l&&(e.j41(0,"ion-title"),e.EFF(1),e.k0s()),2&l){const u=e.XpG();e.R7$(),e.JRh(u.lang.text.AddPost.EditTitle)}}function D(l,I){if(1&l&&(e.j41(0,"ion-title"),e.EFF(1),e.k0s()),2&l){const u=e.XpG();e.R7$(),e.JRh(u.lang.text.AddPost.Title)}}function L(l,I){if(1&l){const u=e.RV6();e.j41(0,"ion-item",8),e.bIt("click",function(){const i=e.eBV(u).index,n=e.XpG(2);return e.Njj(n.select_server(i,!0))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s()()}if(2&l){const u=I.$implicit;e.R7$(2),e.JRh(u.name)}}function N(l,I){if(1&l){const u=e.RV6();e.j41(0,"ion-accordion-group",22,0),e.bIt("click",function(){e.eBV(u);const i=e.XpG();return e.Njj(i.isExpanded=!0)}),e.j41(2,"ion-accordion",23)(3,"ion-item",24)(4,"ion-label"),e.EFF(5),e.k0s(),e.j41(6,"ion-label",25),e.EFF(7),e.k0s(),e.nrm(8,"ion-icon",26),e.k0s(),e.j41(9,"div",27),e.DNE(10,L,3,1,"ion-item",28),e.k0s()()()}if(2&l){const u=e.XpG();e.Y8G("disabled",u.isSaveClicked)("value",u.isExpanded),e.R7$(5),e.JRh(u.lang.text.AddGroup.SelectServer),e.R7$(2),e.JRh(u.servers[u.index].name),e.R7$(3),e.Y8G("ngForOf",u.servers)}}function U(l,I){if(1&l){const u=e.RV6();e.j41(0,"div",29)(1,"ion-item",12)(2,"ion-toggle",30),e.mxI("ngModelChange",function(i){e.eBV(u);const n=e.XpG();return e.DH7(n.userInput.isNSFW,i)||(n.userInput.isNSFW=i),e.Njj(i)}),e.EFF(3),e.k0s()(),e.j41(4,"div",31),e.nrm(5,"img",32),e.k0s()()}if(2&l){const u=e.XpG();e.R7$(2),e.R50("ngModel",u.userInput.isNSFW),e.R7$(),e.JRh(u.lang.text.AddPost.NSFW),e.R7$(2),e.Aen(u.userInput.isNSFW?"filter: blur(16px);":""),e.Y8G("src",u.MainPostImage,e.B4B)}}function B(l,I){if(1&l&&e.nrm(0,"ion-icon",37),2&l){const u=e.XpG().$implicit;e.Y8G("name",u.icon||"close-circle")}}function V(l,I){if(1&l&&e.nrm(0,"img",38),2&l){const u=e.XpG().$implicit;e.Y8G("src","assets/icon/"+u.icon_img,e.B4B)("alt",u.title)}}function E(l,I){if(1&l){const u=e.RV6();e.j41(0,"div",33)(1,"div",34),e.bIt("click",function(){const i=e.eBV(u).$implicit;return e.Njj(i.act())}),e.DNE(2,B,1,1,"ion-icon",35)(3,V,1,2,"img",36),e.j41(4,"div"),e.EFF(5),e.k0s()()()}if(2&l){const u=I.$implicit;e.R7$(),e.Aen("cursor: "+(u.cursor||"pointer")+";"),e.Y8G("hidden",u.isHide),e.R7$(),e.Y8G("ngIf",u.icon),e.R7$(),e.Y8G("ngIf",u.icon_img),e.R7$(2),e.JRh(u.name)}}function G(l,I){if(1&l){const u=e.RV6();e.j41(0,"ion-item",39),e.bIt("click",function(){const i=e.eBV(u),n=i.$implicit,s=i.index,r=e.XpG();return e.Njj(r.open_viewer(n,s))})("contextmenu",function(){const i=e.eBV(u).index,n=e.XpG();return e.Njj(n.PostAttachContextMenu(i))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s(),e.j41(3,"div",40),e.nrm(4,"img",41),e.k0s()()}if(2&l){const u=I.$implicit,t=I.index,i=e.XpG();e.Y8G("disabled",i.isSaveClicked),e.R7$(2),e.JRh("["+t+"] "+u.filename),e.R7$(2),e.Y8G("src",u.thumbnail,e.B4B)}}const X=[{path:"",component:(()=>{var l;class I{constructor(t,i,n,s,r,o,c,p,a,m){var f,d=this;this.global=t,this.lang=i,this.navCtrl=n,this.nakama=s,this.p5toast=r,this.indexed=o,this.loadingCtrl=c,this.sanitizer=p,this.route=a,this.router=m,this.servers=[],this.userInput={id:void 0,title:void 0,content:void 0,creator_id:void 0,creator_name:void 0,UserColor:void 0,create_time:void 0,modify_time:void 0,server:void 0,mainImage:void 0,attachments:[],OutSource:void 0,isNSFW:!1},this.index=0,this.isModify=!1,this.isExpanded=!1,this.isSaveClicked=!1,this.isServerChanged=!1,this.useVoiceRecording=!1,this.MainPostImage=null,this.extended_buttons=[{icon:"image-outline",name:this.lang.text.AddPost.MainPostImage,act:()=>{this.isSaveClicked||(this.MainPostImage?(URL.revokeObjectURL(this.MainPostImage),this.MainPostImage=null,this.userInput.mainImage=void 0,document.getElementById("PostMainImage_sel").value=""):document.getElementById("PostMainImage_sel").click())}},{icon:"document-attach-outline",name:this.lang.text.ChatRoom.attachments,act:(f=(0,_.A)(function*(){d.isSaveClicked||d.new_attach({detail:{value:"load"}})}),function(){return f.apply(this,arguments)})},{icon_img:"voidDraw.png",name:this.lang.text.ChatRoom.voidDraw,act:function(){var f=(0,_.A)(function*(){d.isSaveClicked||(d.global.PageDismissAct["add-post-new-image"]=function(){var g=(0,_.A)(function*(v){v.data&&(d.AddAttachTextForm(),yield d.voidDraw_fileAct_callback(v)),delete d.global.PageDismissAct["add-post-new-image"]});return function(v){return g.apply(this,arguments)}}(),d.global.ActLikeModal("portal/community/add-post/void-draw",{dismiss:"add-post-new-image"}))});return function(){return f.apply(this,arguments)}}()},{icon:"reader-outline",name:this.lang.text.ChatRoom.newText,act:function(){var f=(0,_.A)(function*(){let g={info:{content:{is_new:void 0,type:"text/plain",viewer:"text",filename:void 0,path:void 0}},no_edit:void 0,dismiss:"add-post-viewer"};g.info.content.is_new="text",g.info.content.filename=d.global.TextEditorNewFileName(),g.no_edit=!0,d.global.PageDismissAct["add-post-viewer"]=v=>{if(v.data){let J=d.global.TextEditorAfterAct(v.data,{display_name:d.nakama.users.self.display_name});d.AddAttachTextForm(),d.userInput.attachments.push(J)}delete d.global.PageDismissAct["add-post-viewer"]},d.global.ActLikeModal("portal/community/add-post/ionic-viewer",g)});return function(){return f.apply(this,arguments)}}()},{icon:"camera-outline",name:this.lang.text.ChatRoom.Camera,act:function(){var f=(0,_.A)(function*(){if(!d.isSaveClicked)try{let g=yield d.global.from_camera("tmp_files/post/",{user_id:"local"==d.isOfficial?void 0:d.nakama.servers[d.isOfficial][d.target].session.user_id,display_name:d.nakama.users.self.display_name});d.AddAttachTextForm(),d.userInput.attachments.push(g)}catch(g){console.log("\ucd2c\uc601 \uc2e4\ud328: ",g),d.p5toast.show({text:`${d.lang.text.GlobalAct.ErrorFromCamera}: ${g}`})}});return function(){return f.apply(this,arguments)}}()},{icon:"mic-circle-outline",name:this.lang.text.ChatRoom.Voice,act:function(){var f=(0,_.A)(function*(){d.isSaveClicked||(d.useVoiceRecording=!d.useVoiceRecording,d.useVoiceRecording?(yield k.R.hasAudioRecordingPermission()).value?(d.extended_buttons[5].icon="stop-circle-outline",d.p5toast.show({text:d.lang.text.ChatRoom.StartVRecord}),d.p5StartVoiceTimer(),yield k.R.startRecording(),d.CreateFloatingVoiceTimeHistoryAddButton()):(d.useVoiceRecording=!1,d.extended_buttons[5].icon="mic-circle-outline",yield k.R.requestAudioRecordingPermission()):yield d.StopAndSaveVoiceRecording())});return function(){return f.apply(this,arguments)}}()},{icon:"cloud-done-outline",name:this.lang.text.ChatRoom.Detour,act:()=>{this.toggle_custom_attach()}},{icon:"people-circle-outline",name:this.lang.text.AddPost.NoOutLink,act:()=>{this.toggle_open_link()}}],this.lock_modal_open=!1,this.useFirstCustomCDN=0,this.UseOutLink=!1,this.isApplyPostData=!1,this.WillLeavePage=!1}ngOnDestroy(){this.route.queryParams.unsubscribe(),this.TitleInput.onpaste=null,this.ContentTextArea.onpaste=null,this.p5StartVoiceTimer=null,this.p5StopVoiceTimer=null,this.p5canvas&&this.p5canvas.remove(),delete this.nakama.StatusBarChangedCallback,this.useVoiceRecording&&this.StopAndSaveVoiceRecording();try{this.MainPostImage&&setTimeout(()=>{URL.revokeObjectURL(this.MainPostImage)},1e3)}catch{}}ngOnInit(){var t=this;this.cont=new AbortController,this.useFirstCustomCDN=Number(localStorage.getItem("useFFSCDN"))||0,this.toggle_custom_attach(this.useFirstCustomCDN),this.route.queryParams.subscribe(function(){var i=(0,_.A)(function*(n){const s=t.router.getCurrentNavigation().extras.state;let r=!1;if(s&&(r=!!s.act,s.data&&(t.userInput=s.data)),t.lock_modal_open=!1,r){if(t.LoadListServer(),t.servers.length>1&&(t.index=1),s&&s.data){let o=`${t.userInput.server.isOfficial}/${t.userInput.server.target}`;for(let c=0,p=t.servers.length;c<p;c++)if(`${t.servers[c].isOfficial}/${t.servers[c].target}`==o){t.index=c;break}if(t.userInput.mainImage){let c=t.userInput.mainImage.url;c||(c=URL.createObjectURL(t.userInput.mainImage.blob)),t.MainPostImage=c}for(let c=0,p=t.userInput.attachments.length;c<p;c++)if("image"==t.userInput.attachments[c].viewer)if(t.userInput.attachments[c].url)t.userInput.attachments[c].thumbnail=t.userInput.attachments[c].url;else{let a=yield t.indexed.loadBlobFromUserPath(t.userInput.attachments[c].path,t.userInput.attachments[c].file_ext),m=URL.createObjectURL(a);t.userInput.attachments[c].thumbnail=m,setTimeout(()=>{URL.revokeObjectURL(m)},1e3)}t.UseOutLink=!!t.userInput.OutSource,t.toggle_open_link(t.UseOutLink)}t.select_server(t.index),s&&s.data&&(t.OriginalInfo=JSON.parse(JSON.stringify(t.userInput)))}});return function(n){return i.apply(this,arguments)}}()),setTimeout(()=>{this.WillLeavePage||this.CreateDrop()},100),this.nakama.StatusBarChangedCallback=()=>{this.LoadListServer(),this.index=0}}LoadListServer(){this.servers=this.nakama.get_all_server_info(!0,!0),this.servers.unshift({name:this.lang.text.AddGroup.UseLocalStorage,isOfficial:"local",target:"target",local:!0})}WaitingCurrent(){var t=this;return(0,_.A)(function*(){for(;t.WillLeavePage;)yield new Promise(i=>setTimeout(i,0))})()}CreateDrop(){var t=this;let i=document.getElementById("p5Drop_addPost");this.p5canvas||(this.p5canvas=new S(n=>{let s=0;n.setup=()=>{let o=n.createCanvas(i.clientWidth,i.clientHeight);o.parent(i),n.pixelDensity(.1),o.drop(function(){var c=(0,_.A)(function*(p){yield t.selected_blobFile_callback_act(p.file)});return function(p){return c.apply(this,arguments)}}()),n.noLoop(),this.p5StartVoiceTimer=()=>{n.loop(),s=n.millis()},this.p5StopVoiceTimer=()=>{n.noLoop()}},n.draw=()=>{this.useVoiceRecording&&(this.extended_buttons[5].name=r(n.millis()-s))};let r=o=>{let c=o/1e3,p=n.floor(c)%60,a=c/60,m=n.floor(a)%60,d=n.floor(a/60);return d?`${d}:${n.nf(m,2)}:${n.nf(p,2)}`:`${m}:${n.nf(p,2)}`};n.mouseMoved=o=>{o.dataTransfer?(i.style.pointerEvents="all",i.style.backgroundColor="#0008"):(i.style.pointerEvents="none",i.style.backgroundColor="transparent")},n.keyPressed=function(){var o=(0,_.A)(function*(c){t.WillLeavePage||"Enter"!==c.key||("exact_post_title_id"==document.activeElement.id&&setTimeout(()=>{t.ContentTextArea.focus()},0),c.ctrlKey&&t.postData())});return function(c){return o.apply(this,arguments)}}()}))}ionViewWillEnter(){this.WillLeavePage=!1,this.TitleInput=document.getElementById("add_post_title").childNodes[1].childNodes[1].childNodes[1],this.TitleInput.id="exact_post_title_id",this.TitleInput.onpaste=t=>{let i=[];for(const n of t.clipboardData.files)i.push({file:n});if(i.length)return 1==i.length&&this.ChangeMainPostImage({target:{files:[i[0].file]}}),!1},this.ContentTextArea=document.getElementById("add_post_content"),setTimeout(()=>{this.userInput.title?this.ContentTextArea.focus():this.TitleInput.focus()},200),this.ContentTextArea.onpaste=t=>{let i=[];for(const n of t.clipboardData.files)i.push({file:n});if(i.length){if(1==i.length)this.selected_blobFile_callback_act(i[0].file);else for(let n=0,s=i.length;n<s;n++)this.selected_blobFile_callback_act(i[n].file);return!1}},this.isModify=!!this.userInput.id}ionViewDidEnter(){this.global.StoreShortCutAct("AddPostPage"),this.AddShortcut()}go_to_profile(){this.nakama.open_profile_page({isOfficial:this.isOfficial,target:this.target})}select_server(t,i=!1){this.index=t,this.userInput.server=this.servers[t],this.isExpanded=!1,this.isOfficial=this.servers[t].isOfficial,this.target=this.servers[t].target,i?this.isServerChanged=this.OriginalServerInfo!=`${this.isOfficial}/${this.target}`:this.OriginalServerInfo=`${this.isOfficial}/${this.target}`,this.userInput.creator_name=this.nakama.users.self.display_name;try{this.userInput.creator_id=this.nakama.servers[this.isOfficial][this.target].session.user_id,this.userInput.UserColor=(this.userInput.creator_id.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6),this.extended_buttons[7].isHide=2==this.useFirstCustomCDN}catch{this.userInput.creator_id="me",this.userInput.UserColor="888888",this.extended_buttons[7].isHide=1!=this.useFirstCustomCDN}this.TitleInput&&this.TitleInput.focus()}AddShortcut(){this.global.p5key&&this.global.p5KeyShortCut&&(this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.navigateBack("portal/community")})}AddVoiceTimeHistory(){this.userInput.content?this.userInput.content+=`\n{"i":"n","t":"${this.extended_buttons[5].name}"}\n`:this.userInput.content=`{"i":"n","t":"${this.extended_buttons[5].name}"}\n`,this.ContentTextArea.focus()}CreateFloatingVoiceTimeHistoryAddButton(){this.p5floatingButton&&this.p5floatingButton.remove(),this.p5floatingButton=new S(t=>{t.setup=()=>{t.noCanvas();let i=t.createDiv('<ion-icon style="width: 36px; height: 36px" name="timer-outline"></ion-icon>');i.style("position: absolute; right: 0; bottom: 56px; z-index: 1"),i.style("width: 64px; height: 64px"),i.style("text-align: center; align-content: center"),i.style("cursor: pointer"),i.style("margin: 16px"),i.style("padding-top: 6px"),i.style("background-color: #8888"),i.style("border-radius: 24px"),i.elt.onclick=()=>{this.AddVoiceTimeHistory(),this.p5toast.show({text:`${this.lang.text.AddPost.RecordVoiceTime}: ${this.extended_buttons[5].name}`})}}})}StopAndSaveVoiceRecording(){var t=this;return(0,_.A)(function*(){t.p5floatingButton&&t.p5floatingButton.remove();let i=yield t.loadingCtrl.create({message:t.lang.text.AddPost.SavingRecord});i.present();try{let n=yield t.global.StopAndSaveVoiceRecording();yield t.selected_blobFile_callback_act(n)}catch{}i.dismiss(),t.extended_buttons[5].icon="mic-circle-outline",t.extended_buttons[5].name=t.lang.text.ChatRoom.Voice,t.checkVoiceLinker()})()}checkVoiceLinker(){this.p5StopVoiceTimer&&this.p5StopVoiceTimer();let t=this.userInput.content.split("\n");for(let i=0,n=t.length;i<n;i++)try{let s=JSON.parse(t[i]);"n"==s.i&&(s.i=this.userInput.attachments.length-1),t[i]=JSON.stringify(s)}catch{}this.userInput.content=t.join("\n")}ChangeMainPostImage(t){let i=t.target.files[0],n={};n.filename=i.name,n.file_ext=i.name.split(".").pop()||i.type||this.lang.text.ChatRoom.unknown_ext,n.size=i.size,n.type=i.type||i.type_override,n.blob=i,n.path=`tmp_files/post/MainImage.${n.file_ext}`,this.userInput.mainImage=n;let s=URL.createObjectURL(i);this.indexed.saveBlobToUserPath(i,n.path),this.MainPostImage=s}selected_blobFile_callback_act(t,i=[],n="loaded",s){var r=this;return(0,_.A)(function*(){let o=r.global.selected_blobFile_callback_act(t,"tmp_files/post/",{user_id:"local"==r.isOfficial?"local":r.nakama.servers[r.isOfficial][r.target].session.user_id,display_name:r.nakama.users.self.display_name},n,i);r.create_selected_thumbnail(o),void 0===s?(r.AddAttachTextForm(),r.userInput.attachments.push(o)):r.userInput.attachments[s]=o,r.indexed.saveBlobToUserPath(o.blob,o.path)})()}AddAttachTextForm(){this.userInput.content?this.userInput.content+=`\n[${this.userInput.attachments.length}]\n`:this.userInput.content=`[${this.userInput.attachments.length}]\n`,this.ContentTextArea.focus()}create_selected_thumbnail(t){var i=this;return(0,_.A)(function*(){if(i.global.set_viewer_category_from_ext(t),t.url){try{(yield fetch(t.url,{signal:i.cont.signal})).ok&&(t.thumbnail=t.url)}catch{}return void(t.typeheader=t.viewer)}try{t.thumbnail=yield i.indexed.loadBlobFromUserPath(t.path,t.type)}catch{}let n=URL.createObjectURL(t.blob);"image"===(t.typeheader=t.blob.type.split("/")[0]||t.viewer,setTimeout(()=>{URL.revokeObjectURL(n)},0),t.thumbnail=void 0,t.typeheader)&&(t.thumbnail=i.sanitizer.bypassSecurityTrustUrl(n))})()}voidDraw_fileAct_callback(t,i,n){var s=this;return(0,_.A)(function*(){let r=yield s.global.voidDraw_fileAct_callback(t,"tmp_files/post/",{user_id:"local"==s.isOfficial?"local":s.nakama.servers[s.isOfficial][s.target].session.user_id,display_name:s.nakama.users.self.display_name},i);r.thumbnail=s.sanitizer.bypassSecurityTrustUrl(t.data.img),void 0!==n?s.userInput.attachments[n]=r:s.userInput.attachments.push(r),t.data.loadingCtrl.dismiss()})()}new_attach(t){return(0,_.A)(function*(){"load"===t.detail.value&&document.getElementById("add_post_input").click()})()}PostAttachContextMenu(t){this.p5toast.show({text:`${this.lang.text.AddPost.RemoveAttach}: ${this.userInput.attachments[t].filename}`}),this.userInput.attachments.splice(t,1);let i=this.userInput.content.split("\n");for(let n=i.length-1;n>=0;n--){let s=!1,r=i[n].length-1,o=0;try{o=Number(i[n].substring(1,r)),s="["==i[n].charAt(0)&&"]"==i[n].charAt(r)&&!isNaN(o)}catch{}if(s)if(t==o){if(""==i[n+1])try{i.splice(n+1,1)}catch{}i.splice(n,1)}else t<o&&(i[n]=`[${o-1}]`)}return this.userInput.content=i.join("\n"),!1}inputFileSelected(t){var i=this;return(0,_.A)(function*(){if(t.target.files.length)if(1!=t.target.files.length){let s=yield i.loadingCtrl.create({message:i.lang.text.ChatRoom.MultipleSend});s.present();for(let r=0,o=t.target.files.length;r<o;r++)s.message=`${o-r}: ${t.target.files[r].name}`,yield i.selected_blobFile_callback_act(t.target.files[r]);s.dismiss(),setTimeout(()=>{document.getElementById("add_post_input").value=""},300)}else{let s=yield i.loadingCtrl.create({message:i.lang.text.TodoDetail.WIP});s.present(),yield i.selected_blobFile_callback_act(t.target.files[0]),s.dismiss(),document.getElementById("add_post_input").value=""}})()}open_viewer(t,i){var n=this;let s=[];for(let r=0,o=this.userInput.attachments.length;r<o;r++)s.push({content:this.userInput.attachments[r]});this.lock_modal_open||(this.lock_modal_open=!0,this.global.PageDismissAct["add-post-open-viewer"]=function(){var r=(0,_.A)(function*(o){if(o.data)switch(o.data.type){case"image":let c=[];if(o.data.msg.content.content_related_creator&&(c=[...o.data.msg.content.content_related_creator]),o.data.msg.content.content_creator){let p=!1;for(let a=0,m=c.length;a<m;a++)if(c[a].user_id==o.data.msg.content.content_creator.user_id){p=!0;break}p||c.push(o.data.msg.content.content_creator)}return n.global.PageDismissAct["add-post-modify-image"]=function(){var p=(0,_.A)(function*(a){a.data&&(yield n.voidDraw_fileAct_callback(a,c,i)),delete n.global.PageDismissAct["add-post-modify-image"]});return function(a){return p.apply(this,arguments)}}(),yield n.WaitingCurrent(),void n.global.ActLikeModal("portal/community/add-post/void-draw",{path:o.data.path||t.path,width:o.data.width,height:o.data.height,isDarkMode:o.data.isDarkMode,scrollHeight:o.data.scrollHeight,dismiss:"add-post-modify-image"});case"text":n.selected_blobFile_callback_act(o.data.blob,o.data.contentRelated,"textedit",i)}delete n.global.PageDismissAct["add-post-open-viewer"]});return function(o){return r.apply(this,arguments)}}(),this.global.ActLikeModal("portal/community/add-post/ionic-viewer",{info:{content:t},path:t.path,alt_path:t.path,isOfficial:this.isOfficial,target:this.target,relevance:s,dismiss:"add-post-open-viewer"}))}toggle_custom_attach(t){var i=this;return(0,_.A)(function*(){switch(i.useFirstCustomCDN=(null!=t?t:i.useFirstCustomCDN+1)%("me"==i.userInput.creator_id?2:3),"Android"==R.aH&&(i.useFirstCustomCDN=2,i.extended_buttons[6].isHide=!0),i.extended_buttons[7].isHide=!("me"!=i.userInput.creator_id&&2!=i.useFirstCustomCDN||1==i.useFirstCustomCDN||i.userInput.OutSource),i.useFirstCustomCDN){case 0:i.extended_buttons[6].icon="cloud-offline-outline",i.extended_buttons[6].name=i.lang.text.ChatRoom.Detour;break;case 1:i.extended_buttons[6].icon="cloud-done-outline",i.extended_buttons[6].name=i.lang.text.ChatRoom.useFSS;break;case 2:i.extended_buttons[6].icon="server-outline",i.extended_buttons[6].name=i.lang.text.ChatRoom.forceSQL}localStorage.setItem("useFFSCDN",`${i.useFirstCustomCDN}`)})()}toggle_open_link(t){var i=this;return(0,_.A)(function*(){i.UseOutLink=null!=t?t:!i.UseOutLink,i.UseOutLink?(i.extended_buttons[7].icon="link-outline",i.extended_buttons[7].name=i.lang.text.AddPost.UseOutLink):(i.extended_buttons[7].icon="people-circle-outline",i.extended_buttons[7].name=i.lang.text.AddPost.NoOutLink)})()}showPreview(){this.global.RemoveAllModals(()=>{this.navCtrl.navigateForward("portal/community/add-post/post-viewer",{state:{data:this.userInput,index:-1}})})}postData(){var t=this;return(0,_.A)(function*(){if(!t.userInput.title)return t.p5toast.show({text:t.lang.text.AddPost.NeedPostTitle}),void t.TitleInput.focus();t.useVoiceRecording&&(yield t.StopAndSaveVoiceRecording());let i=!!t.userInput.server.local;t.isApplyPostData=!0;let n=yield t.loadingCtrl.create({message:t.lang.text.AddPost.WIP});n.present(),t.isSaveClicked=!0;let s=t.userInput.server.isOfficial,r=t.userInput.server.target;if(t.isModify||t.isServerChanged){if(t.userInput.mainImage&&t.userInput.mainImage.url&&!t.userInput.mainImage.blob){try{let o=yield fetch(t.userInput.mainImage.url,{signal:t.cont.signal});o.ok&&(t.userInput.mainImage.blob=yield o.blob())}catch{}t.userInput.mainImage.blob=yield(yield fetch(t.userInput.mainImage.url,{signal:t.cont.signal})).blob()}for(let o=0,c=t.userInput.attachments.length;o<c;o++)if(t.userInput.attachments[o].url&&!t.userInput.attachments[o].blob)try{let p=yield fetch(t.userInput.attachments[o].url,{signal:t.cont.signal});p.ok&&(t.userInput.attachments[o].blob=yield p.blob())}catch{}yield t.nakama.RemovePost(t.userInput,!0)}try{if(!t.isModify||t.isServerChanged)if(t.isServerChanged&&t.OriginalInfo&&(yield t.nakama.RemovePost(t.OriginalInfo)),i){let a=Number(yield t.indexed.loadTextFromUserPath("servers/local/target/posts/me/counter.txt"))||0;t.userInput.id=`LocalPost_${a}`;try{yield t.indexed.saveTextFileToUserPath(`${a+1}`,"servers/local/target/posts/me/counter.txt")}catch(m){t.p5toast.show({text:`${t.lang.text.AddPost.SyncErr}: ${m}`}),console.log(m)}}else try{let a=yield t.nakama.servers[s][r].client.readStorageObjects(t.nakama.servers[s][r].session,{object_ids:[{collection:"server_post",key:"Counter",user_id:t.nakama.servers[s][r].session.user_id}]}),m=0;a.objects.length&&(m=a.objects[0].value.counter),t.userInput.id=`ServerPost_${m}`,yield t.nakama.servers[s][r].client.writeStorageObjects(t.nakama.servers[s][r].session,[{collection:"server_post",key:"Counter",permission_write:1,permission_read:2,value:{counter:m+1}}])}catch(a){t.p5toast.show({text:`${t.lang.text.AddPost.SyncErr}: ${a}`}),console.log(a)}t.isModify?t.userInput.modify_time=(new Date).getTime():(t.userInput.create_time=(new Date).getTime(),t.userInput.modify_time=t.userInput.create_time);for(let a=0,m=t.userInput.attachments.length;a<m;a++)delete t.userInput.attachments[a].thumbnail;if(t.userInput.mainImage)if(n.message=t.lang.text.AddPost.SyncMainImage,t.userInput.mainImage.path=`servers/${s}/${r}/posts/${t.userInput.creator_id}/${t.userInput.id}/MainImage.${t.userInput.mainImage.file_ext}`,t.userInput.mainImage.thumbnail=t.MainPostImage,i)try{if(1!=t.useFirstCustomCDN)throw"FFS \uc0ac\uc6a9 \uc21c\uc704\uc5d0 \uc5c6\uc74c";let a;if(n.message=`${t.lang.text.AddPost.SyncMainImage}: ${t.userInput.mainImage.filename}`,a=yield t.global.try_upload_to_user_custom_fs(t.userInput.mainImage,t.nakama.users.self.display_name,n),!a)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";delete t.userInput.mainImage.path,delete t.userInput.mainImage.partsize,t.userInput.mainImage.url=a}catch{yield t.indexed.saveBlobToUserPath(t.userInput.mainImage.blob,t.userInput.mainImage.path)}else try{if(2==t.useFirstCustomCDN)throw"SQL \uac15\uc81c";let a=t.nakama.servers[t.isOfficial][t.target].info.address,m=t.nakama.servers[t.isOfficial][t.target].info.useSSL?"https:":"http:",d=yield t.global.upload_file_to_storage(t.userInput.mainImage,t.nakama.servers[t.isOfficial][t.target].session.user_id,m,a,1==t.useFirstCustomCDN,n);if(!d)throw"\ub9c1\ud06c \ub9cc\ub4e4\uae30 \uc2e4\ud328";delete t.userInput.mainImage.partsize,t.userInput.mainImage.url=d}catch{yield t.nakama.sync_save_file(t.userInput.mainImage,s,r,"server_post",`${t.userInput.id}_mainImage`)}let o=t.userInput.attachments.length;if(o){n.message=t.lang.text.AddPost.SyncAttaches;for(let a=o-1;a>=0;a--)if(!t.userInput.attachments[a].url)if(i)try{if(1!=t.useFirstCustomCDN)throw"FFS \uc0ac\uc6a9 \uc21c\uc704\uc5d0 \uc5c6\uc74c";let m;if(n.message=`${t.lang.text.AddPost.SyncAttaches}: [${a}]${t.userInput.attachments[a].filename}`,m=yield t.global.try_upload_to_user_custom_fs(t.userInput.attachments[a],t.nakama.users.self.display_name,n),!m)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";delete t.userInput.attachments[a].path,delete t.userInput.attachments[a].partsize,t.userInput.attachments[a].url=m}catch{t.userInput.attachments[a].path=`servers/${s}/${r}/posts/${t.userInput.creator_id}/${t.userInput.id}/[${a}]${t.userInput.attachments[a].filename}`,yield t.indexed.saveBlobToUserPath(t.userInput.attachments[a].blob,t.userInput.attachments[a].path)}else try{if(2==t.useFirstCustomCDN)throw"SQL \uac15\uc81c";let m=t.nakama.servers[t.isOfficial][t.target].info.address,d=t.nakama.servers[t.isOfficial][t.target].info.useSSL?"https:":"http:",f=yield t.global.upload_file_to_storage(t.userInput.attachments[a],t.nakama.servers[t.isOfficial][t.target].session.user_id,d,m,1==t.useFirstCustomCDN,n);if(!f)throw"\ub9c1\ud06c \ub9cc\ub4e4\uae30 \uc2e4\ud328";delete t.userInput.attachments[a].partsize,t.userInput.attachments[a].url=f}catch(m){"SQL \uac15\uc81c"==m&&t.userInput.attachments[a].url&&!t.userInput.attachments[a].blob&&(t.userInput.attachments[a].blob=yield(yield fetch(t.userInput.attachments[a].url,{signal:t.cont.signal})).blob()),yield t.nakama.sync_save_file(t.userInput.attachments[a],s,r,"server_post",`${t.userInput.id}_attach_${a}`)}}if(t.userInput.OutSource&&(t.global.remove_file_from_storage(t.userInput.OutSource),t.userInput.OutSource=void 0),t.UseOutLink){let a=new Blob([JSON.stringify(t.userInput)],{type:"text/plain"}),m={blob:a,filename:`${t.userInput.id}.json`,file_ext:"json",size:a.size};try{let d=t.nakama.servers[t.isOfficial][t.target].info.address,f=t.nakama.servers[t.isOfficial][t.target].session.user_id,g=t.nakama.servers[t.isOfficial][t.target].info.useSSL?"https:":"http:";n.message=`${t.lang.text.AddPost.SyncPostInfo}`;let v=yield t.global.upload_file_to_storage(m,f,g,d,1==t.useFirstCustomCDN);if(!v)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";t.userInput.OutSource=v}catch{try{let f=t.nakama.users.self.display_name;n.message=`${t.lang.text.AddPost.SyncPostInfo}`;let g=yield t.global.try_upload_to_user_custom_fs(m,f);if(!g)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";t.userInput.OutSource=g}catch(f){t.userInput.OutSource=void 0,t.UseOutLink=!1,t.p5toast.show({text:`${t.lang.text.AddPost.OutLinkFailed}: ${f}`})}}}let c=JSON.parse(JSON.stringify(t.userInput));c.mainImage&&delete c.mainImage.blob;for(let a=c.attachments.length-1;a>=0;a--)delete c.attachments[a].blob;delete c.server;try{t.nakama.posts_orig[s][r]||(t.nakama.posts_orig[s][r]={}),t.nakama.posts_orig[s][r][t.userInput.creator_id]||(t.nakama.posts_orig[s][r][t.userInput.creator_id]={}),t.nakama.posts_orig[s][r][t.userInput.creator_id][t.userInput.id]=t.userInput}catch(a){t.p5toast.show({text:`${t.lang.text.AddPost.SyncErr}: ${a}`}),console.log(a)}let p=JSON.stringify(c);if(yield t.indexed.saveTextFileToUserPath(p,`servers/${s}/${r}/posts/${t.userInput.creator_id}/${t.userInput.id}/info.json`),!i){let a=new Blob([p],{type:"application/json"}),m={filename:"info.json"};m.blob=a,m.size=a.size,m.type="application/json",m.file_ext="txt",m.typeheader="text",m.path=`servers/${s}/${r}/posts/${t.userInput.creator_id}/${t.userInput.id}/info.json`,yield t.nakama.sync_save_file(m,s,r,"server_post",t.userInput.id)}t.nakama.rearrange_posts()}catch(o){t.p5toast.show({text:`${t.lang.text.AddPost.SyncErr}: ${o}`}),console.warn("\uac8c\uc2dc\ubb3c \uc800\uc7a5 \ucc98\ub9ac \uc624\ub958: ",o)}try{yield t.nakama.servers[t.isOfficial][t.target].client.rpc(t.nakama.servers[t.isOfficial][t.target].session,"send_noti_all_fn",{noti_id:C.I.MANAGE_POST,type:"add",user_id:t.userInput.creator_id,post_id:t.userInput.id,persistent:!1})}catch{}n.dismiss(),t.navCtrl.navigateBack("portal/community")})()}ionViewWillLeave(){if(this.WillLeavePage=!0,this.cont.abort(),this.global.RestoreShortCutAct("AddPostPage"),delete this.global.p5KeyShortCut.Escape,!this.isApplyPostData)try{this.nakama.posts_orig[this.isOfficial][this.target][this.userInput.creator_id][this.userInput.id]&&delete this.nakama.posts_orig[this.isOfficial][this.target][this.userInput.creator_id][this.userInput.id],this.nakama.load_local_post_with_id(this.userInput.id,this.userInput.server.isOfficial,this.userInput.server.target,this.userInput.creator_id),this.nakama.rearrange_posts()}catch{}}}return(l=I).\u0275fac=function(t){return new(t||l)(e.rXU($.z3),e.rXU(F.y),e.rXU(O.q9),e.rXU(C.X),e.rXU(T.G),e.rXU(w.n),e.rXU(b.Xi),e.rXU(j.up),e.rXU(x.nX),e.rXU(x.Ix))},l.\u0275cmp=e.VBU({type:l,selectors:[["app-add-post"]],decls:31,vars:19,consts:[["accordionGroup",""],[1,"ion-no-border"],[4,"ngIf"],["slot","start"],["defaultHref","portal/community"],["slot","end","name","play-circle-outline",1,"top_icon",3,"click"],["id","p5Drop_addPost",2,"position","absolute","width","100%","height","100%","display","flex","pointer-events","none"],["value","colors","expand","inset",3,"disabled","value","click",4,"ngIf"],["button","",3,"click"],[1,"additional_form","new_bg_form"],[1,"ion-text-end"],["style","width: 100%; text-align: center; text-align: -webkit-center; padding: 8px;",4,"ngIf"],["button",""],["id","add_post_title",3,"ngModelChange","disabled","placeholder","ngModel"],["id","add_post_content",1,"infobox",2,"height","50%",3,"ngModelChange","disabled","placeholder","ngModel"],["hidden","","type","file","id","add_post_input","accept","*","multiple","",3,"change"],["hidden","","type","file","id","PostMainImage_sel","accept","image/*",3,"change"],[2,"width","100%","text-align","center","padding-bottom","16px"],["style","display: inline-block;",4,"ngFor","ngForOf"],["button","",3,"disabled","click","contextmenu",4,"ngFor","ngForOf"],["button","",3,"click","disabled"],[1,"ion-text-center"],["value","colors","expand","inset",3,"click","disabled","value"],["value","colors"],["slot","header"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["slot","content"],["button","",3,"click",4,"ngFor","ngForOf"],[2,"width","100%","text-align","center","text-align","-webkit-center","padding","8px"],[2,"pointer-events","none",3,"ngModelChange","ngModel"],[1,"thumbnail_image",2,"width","400px","padding-top","8px"],["alt","MainPostImage",3,"src"],[2,"display","inline-block"],[1,"ext_button","ext_button_override",3,"click","hidden"],["slot","icon-only","style","width: 36px; height: 36px;",3,"name",4,"ngIf"],["class","ext_icon_img",3,"src","alt",4,"ngIf"],["slot","icon-only",2,"width","36px","height","36px",3,"name"],[1,"ext_icon_img",3,"src","alt"],["button","",3,"click","contextmenu","disabled"],[1,"additional_form","bg_img_form"],[1,"profile_img",3,"src"]],template:function(t,i){1&t&&(e.j41(0,"ion-header",1)(1,"ion-toolbar"),e.DNE(2,M,2,1,"ion-title",2)(3,D,2,1,"ion-title",2),e.j41(4,"ion-buttons",3),e.nrm(5,"ion-back-button",4),e.k0s(),e.j41(6,"ion-icon",5),e.bIt("click",function(){return i.showPreview()}),e.k0s()()(),e.j41(7,"ion-content"),e.nrm(8,"div",6),e.DNE(9,N,11,5,"ion-accordion-group",7),e.j41(10,"ion-item",8),e.bIt("click",function(){return i.go_to_profile()}),e.nrm(11,"div",9),e.j41(12,"ion-label"),e.EFF(13),e.k0s(),e.j41(14,"ion-label",10),e.EFF(15),e.k0s()(),e.j41(16,"ion-item-divider")(17,"ion-label"),e.EFF(18),e.k0s()(),e.DNE(19,U,6,5,"div",11),e.j41(20,"ion-item",12)(21,"ion-input",13),e.mxI("ngModelChange",function(s){return e.DH7(i.userInput.title,s)||(i.userInput.title=s),s}),e.k0s()(),e.j41(22,"textarea",14),e.mxI("ngModelChange",function(s){return e.DH7(i.userInput.content,s)||(i.userInput.content=s),s}),e.k0s(),e.j41(23,"input",15),e.bIt("change",function(s){return i.inputFileSelected(s)}),e.k0s(),e.j41(24,"input",16),e.bIt("change",function(s){return i.ChangeMainPostImage(s)}),e.k0s(),e.j41(25,"div",17),e.DNE(26,E,6,6,"div",18),e.k0s(),e.DNE(27,G,5,3,"ion-item",19),e.j41(28,"ion-item",20),e.bIt("click",function(){return i.postData()}),e.j41(29,"ion-label",21),e.EFF(30),e.k0s()()()),2&t&&(e.R7$(2),e.Y8G("ngIf",i.isModify),e.R7$(),e.Y8G("ngIf",!i.isModify),e.R7$(6),e.Y8G("ngIf",i.servers.length),e.R7$(2),e.Aen("background-image: linear-gradient(to right, #0000, #"+i.userInput.UserColor+"44)"),e.R7$(2),e.JRh(i.lang.text.AddPost.Creator),e.R7$(2),e.JRh(i.userInput.creator_name||i.lang.text.Profile.noname_user),e.R7$(3),e.JRh(i.lang.text.AddPost.AddNewPost),e.R7$(),e.Y8G("ngIf",i.MainPostImage),e.R7$(2),e.Y8G("disabled",i.isSaveClicked)("placeholder",i.lang.text.AddPost.TitlePlaceholder),e.R50("ngModel",i.userInput.title),e.R7$(),e.Y8G("disabled",i.isSaveClicked)("placeholder",i.lang.text.AddPost.ContentPlaceHolder),e.R50("ngModel",i.userInput.content),e.R7$(4),e.Y8G("ngForOf",i.extended_buttons),e.R7$(),e.Y8G("ngForOf",i.userInput.attachments),e.R7$(),e.Y8G("disabled",i.isSaveClicked),e.R7$(2),e.JRh(i.lang.text.AddPost.Post))},dependencies:[P.Sq,P.bT,y.me,y.BC,y.vS,b.xk,b.YH,b.QW,b.W9,b.eU,b.iq,b.$w,b.uz,b.Dg,b.he,b.BC,b.BY,b.ai,b.hB,b.Gw,b.el],styles:[".ext_button_override[_ngcontent-%COMP%]{margin:12px;cursor:pointer}.thumbnail_image[_ngcontent-%COMP%]{width:100%;max-height:240px;object-fit:cover;border-radius:16px;overflow:hidden}"]}),I})()},{path:"void-draw",loadChildren:()=>h.e(2655).then(h.bind(h,2655)).then(l=>l.VoidDrawPageModule)},{path:"ionic-viewer",loadChildren:()=>h.e(5390).then(h.bind(h,5390)).then(l=>l.IonicViewerPageModule)},{path:"post-viewer",loadChildren:()=>h.e(526).then(h.bind(h,526)).then(l=>l.PostViewerPageModule)}];let Y=(()=>{var l;class I{}return(l=I).\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[x.iI.forChild(X),x.iI]}),I})(),W=(()=>{var l;class I{}return(l=I).\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[P.MD,y.YN,b.bv,Y]}),I})()}}]);