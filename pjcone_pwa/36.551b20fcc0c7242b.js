"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[36],{36:(te,T,c)=>{c.r(T),c.d(T,{GroupServerPageModule:()=>q});var C=c(177),E=c(4341),p=c(5374),R=c(9858),S=c(467),I=c(4237),D=c(92),M=c(8326),e=c(3953),F=c(9900),L=c(8065),B=c(755),A=c(4234),V=c(482),X=c(3656);const U=["RegisterNewServer"],J=()=>[.4,.6];function Y(l,h){if(1&l){const n=e.RV6();e.j41(0,"ion-item",14),e.bIt("click",function(){e.eBV(n);const i=e.XpG(2);return e.Njj(i.add_dev_test_server())}),e.j41(1,"ion-label",17),e.EFF(2),e.k0s()()}if(2&l){const n=e.XpG(2);e.R7$(2),e.JRh(n.lang.text.GroupServer.UseDevTestServer)}}function z(l,h){if(1&l&&(e.j41(0,"p"),e.EFF(1),e.k0s()),2&l){const n=e.XpG().$implicit,t=e.XpG(2);e.R7$(),e.JRh(n.useSSL?t.lang.text.GroupServer.useSSL:t.lang.text.GroupServer.NotuseSSL)}}function W(l,h){if(1&l){const n=e.RV6();e.j41(0,"ion-item",14),e.bIt("click",function(){const i=e.eBV(n).$implicit,a=e.XpG(2);return e.Njj(a.link_group(i.isOfficial,i.target))}),e.nrm(1,"div",18),e.j41(2,"ion-label",19)(3,"h2"),e.EFF(4),e.k0s(),e.DNE(5,z,2,1,"p",20),e.k0s(),e.j41(6,"ion-button",21),e.bIt("click",function(){const i=e.eBV(n).$implicit,a=e.XpG(2);return e.Njj(a.remove_server(i.isOfficial,i.target))}),e.EFF(7),e.k0s()()}if(2&l){const n=h.$implicit,t=e.XpG(2);e.R7$(),e.Aen("background-color: "+t.statusBar.colors[t.statusBar.groupServer[n.isOfficial][n.target]||"offline"]),e.R7$(3),e.JRh(n.name),e.R7$(),e.Y8G("ngIf","official"!=n.isOfficial),e.R7$(2),e.SpI(" ","online"==t.statusBar.groupServer[n.isOfficial][n.target]?t.lang.text.GroupServer.RemoveAccount:t.lang.text.GroupServer.RemoveUnofficial," ")}}function Z(l,h){if(1&l){const n=e.RV6();e.j41(0,"div",8)(1,"ion-accordion-group")(2,"ion-accordion",9)(3,"ion-item",10)(4,"ion-label"),e.EFF(5),e.k0s()(),e.j41(6,"div",11),e.DNE(7,Y,3,1,"ion-item",12)(8,W,8,5,"ion-item",13),e.j41(9,"ion-item",14),e.bIt("click",function(){e.eBV(n);const i=e.XpG();return e.Njj(i.OpenNewServerForm())}),e.j41(10,"ion-label",15),e.EFF(11),e.k0s()()()()(),e.j41(12,"ion-item",14),e.bIt("click",function(){e.eBV(n);const i=e.XpG();return e.Njj(i.toggle_online())}),e.j41(13,"ion-label",16),e.EFF(14),e.k0s()()()}if(2&l){const n=e.XpG();e.R7$(5),e.JRh(n.lang.text.GroupServer.JoinedServerList),e.R7$(2),e.Y8G("ngIf",n.CanAddTestServer),e.R7$(),e.Y8G("ngForOf",n.servers),e.R7$(3),e.JRh(n.lang.text.GroupServer.RegisterServer),e.R7$(3),e.JRh(n.lang.text.Profile.LogOut)}}function H(l,h){if(1&l){const n=e.RV6();e.j41(0,"ion-content")(1,"ion-item")(2,"ion-label",15),e.EFF(3),e.k0s()(),e.j41(4,"ion-item",22)(5,"ion-input",23),e.mxI("ngModelChange",function(i){e.eBV(n);const a=e.XpG();return e.DH7(a.dedicated_info.name,i)||(a.dedicated_info.name=i),e.Njj(i)}),e.k0s()(),e.j41(6,"ion-item",22)(7,"ion-input",24),e.mxI("ngModelChange",function(i){e.eBV(n);const a=e.XpG();return e.DH7(a.dedicated_info.address,i)||(a.dedicated_info.address=i),e.Njj(i)}),e.k0s(),e.j41(8,"ion-icon",25),e.bIt("click",function(){e.eBV(n);const i=e.XpG();return e.Njj(i.global.open_custom_site(i.dedicated_info.address))}),e.k0s()(),e.j41(9,"ion-item",22)(10,"ion-input",26),e.mxI("ngModelChange",function(i){e.eBV(n);const a=e.XpG();return e.DH7(a.dedicated_info.key,i)||(a.dedicated_info.key=i),e.Njj(i)}),e.k0s()(),e.j41(11,"ion-item",27),e.bIt("click",function(){e.eBV(n);const i=e.XpG();return e.Njj(i.add_custom_dedicated())}),e.j41(12,"ion-label",15),e.EFF(13),e.k0s()()()}if(2&l){const n=e.XpG();e.R7$(3),e.JRh(n.lang.text.GroupServer.RegisterServer),e.R7$(),e.Y8G("disabled",n.add_custom_tog),e.R7$(),e.Y8G("label",n.lang.text.GroupServer.DisplayName),e.R50("ngModel",n.dedicated_info.name),e.Y8G("placeholder",n.lang.text.GroupServer.DisplayName_placeholder),e.R7$(),e.Y8G("disabled",n.add_custom_tog),e.R7$(),e.Y8G("label",n.lang.text.GroupServer.Address),e.R50("ngModel",n.dedicated_info.address),e.R7$(2),e.Y8G("disabled",n.add_custom_tog),e.R7$(),e.Y8G("label",n.lang.text.GroupServer.Key),e.R50("ngModel",n.dedicated_info.key),e.R7$(),e.Y8G("disabled",n.add_custom_tog),e.R7$(2),e.JRh(n.lang.text.GroupServer.submit)}}const K=[{path:"",component:(()=>{var l;class h{constructor(t,i,a,r,s,u,o,b,G,P){this.nakama=t,this.p5toast=i,this.statusBar=a,this.indexed=r,this.lang=s,this.global=u,this.navCtrl=o,this.alertCtrl=b,this.route=G,this.router=P,this.session_uid="",this.isMobilePWA=!1,this.CanAddTestServer=!1,this.OnlineToggle=!1,this.ShowServerList=!1,this.isClickDisplayNameEdit=!1,this.dedicated_info={name:void 0,address:void 0,target:void 0,port:void 0,useSSL:void 0,isOfficial:void 0,key:void 0},this.add_custom_tog=!1,this.isOverrideButtonPressed=!1,this.announce_update_profile=!1,this.original_profile={},this.file_sel_id="",this.can_auto_modified=!1}ngOnInit(){this.servers=this.nakama.get_all_server_info(!0),this.file_sel_id=`self_profile_${(new Date).getTime()}`,this.original_profile=JSON.parse(JSON.stringify(this.nakama.users.self)),this.nakama.users.self.img||this.indexed.loadTextFromUserPath("servers/self/profile.img",(t,i)=>{t&&i&&(this.nakama.users.self.img=i.replace(/"|\\|=/g,""))}),this.nakama.socket_reactive.profile=t=>{this.p5canvas&&this.p5ChangeImageSmooth(t)},this.route.queryParams.subscribe(t=>{const i=this.router.getCurrentNavigation().extras.state;if(i){let a=i.isOfficial,r=i.target;try{this.session_uid=this.nakama.servers[a][r].session.user_id}catch{}}this.initialize()})}initialize(){this.gsCanvasDiv=document.getElementById("GroupServerCanvasDiv"),this.OnlineToggle=this.nakama.users.self.online,this.p5canvas=new M(t=>{let a,r,s,u,o,G,g,m,_,b=1,P="0, 0, 0",O=0,j=!!this.session_uid,w=!1,f=t.createDiv();t.setup=()=>{if(j){let d=t.color(`#${(this.session_uid.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6)}`);P=`${t.red(d)}, ${t.green(d)}, ${t.blue(d)}`,G=t.createDiv(),G.style("width","100%"),G.style("height","100%"),G.style("background-image",`linear-gradient(to top, rgba(${P}, 0), rgba(${P}, 0))`),G.parent(this.gsCanvasDiv)}t.noCanvas(),t.pixelDensity(1),g=t.createDiv(),g.style("width","156px"),g.style("height","156px"),g.style("position","absolute"),g.style("top","120px"),g.style("left","50%"),g.style("transform","translateX(-50%)"),g.style("border-radius","156px"),g.style("background-image","url(assets/data/avatar.svg)"),g.style("background-position","center"),g.style("background-repeat","no-repeat"),g.style("background-size","cover"),g.style("cursor","pointer"),g.parent(this.gsCanvasDiv),g.elt.onclick=()=>{this.change_img_from_file()},m=t.createDiv();const $="36px";m.style("background-color",this.OnlineToggle?this.statusBar.colors.online:this.statusBar.colors.offline),m.style("width",$),m.style("height",$),m.style("position","absolute"),m.style("top","8px"),m.style("left","118px"),m.style("border-radius",$),m.style("cursor","pointer"),m.style("z-index","1"),m.parent(g),m.elt.onclick=()=>{this.toggle_online()},u=t.createImg(this.nakama.users.self.img,"profile_img"),u.style("width","156px"),u.style("height","156px"),u.style("border-radius","156px"),u.style("position","absolute"),u.style("object-fit","cover"),this.nakama.users.self.img||u.hide(),u.parent(g),o=t.createImg(void 0,"before_img"),o.style("width","156px"),o.style("height","156px"),o.style("border-radius","156px"),o.style("position","absolute"),o.style("object-fit","cover"),o.hide(),o.parent(g),this.p5ChangeImageSmooth=d=>{g.style("background-image","url(assets/data/avatar.svg)"),d?(o.elt.src=void 0,o.hide()):(o.elt.src=u.elt.src,o.show()),u.elt.src=d,b=1,t.loop(),this.nakama.users.self.img=d,this.sync_to_all_server(),document.getElementById(this.file_sel_id).value="",d?u.show():u.hide()};let x=t.createDiv();x.style("width","100%"),x.style("position","absolute"),x.style("top","330px"),x.style("display","flex"),x.style("flex-direction","column"),x.parent(this.gsCanvasDiv);const N="36px";if(a=t.createDiv(),a.style("font-size",N),a.style("font-weight","bold"),a.style("align-self","center"),a.style("width","80%"),a.style("text-align","center"),a.parent(x),r=t.createSpan(this.nakama.users.self.display_name||this.lang.text.Profile.noname_user),r.parent(a),t.createSpan('<ion-icon name="pencil-outline" style="width: 24px; height: 24px; margin-left: 8px"></ion-icon>').parent(a),a.elt.onclick=()=>{w=!0,s.value(this.nakama.users.self.display_name?r.html():""),s.show(),a.hide(),s.elt.focus(),this.isClickDisplayNameEdit=!0},s=t.createInput(),s.style("font-size",N),s.style("font-weight","bold"),s.style("align-self","center"),s.style("width","80%"),s.style("text-align","center"),s.attribute("placeholder",this.lang.text.Profile.name_placeholder),a.style("text-align","center"),s.parent(x),s.hide(),s.elt.addEventListener("input",()=>{this.nakama.users.self.display_name=s.value()}),s.elt.addEventListener("focusout",()=>{w=!1,this.nakama.users.self.display_name=s.value(),r.html(`${s.value()||this.lang.text.Profile.noname_user}`),s.hide(),a.show()}),this.session_uid){let d=t.createDiv(this.session_uid);d.style("margin-top","36px"),d.style("color","var(--ion-color-medium)"),d.style("width","80%"),d.style("text-align","center"),d.style("align-self","center"),d.style("cursor","copy"),d.parent(x),d.elt.onclick=()=>{this.copy_id()}}f.style("margin-top","60px"),f.style("width","80%"),f.style("align-self","center"),f.style("max-width","384px"),f.style("height","180px"),f.style("background-color","#8888"),f.style("text-align","center"),f.style("border-radius","24px"),f.style("display","flex"),f.style("flex-direction","column"),f.parent(x),this.OnlineToggle&&f.hide();let k=t.createInput(this.nakama.users.self.email);k.style("align-self","center"),k.style("margin-top","24px"),k.style("width","50%"),k.style("text-align","center"),k.attribute("placeholder","test@example.com"),k.parent(f),k.elt.onchange=()=>{this.nakama.users.self.email=k.value(),this.email_modified()},k.elt.onkeypress=d=>{"Enter"==d.key&&v.elt.focus()},setTimeout(()=>{this.nakama.users.self.email||k.elt.focus()},500),setTimeout(()=>{this.nakama.users.self.email||k.elt.focus()},150);let v=t.createInput();v.style("margin-top","10px"),v.style("align-self","center"),v.style("width","50%"),v.style("text-align","center"),v.attribute("type","password"),v.attribute("placeholder",this.lang.text.Profile.at_least),v.parent(f),v.elt.onchange=()=>{this.nakama.users.self.password=v.value()},v.elt.onkeypress=d=>{"Enter"==d.key&&(this.nakama.users.self.password=v.value(),_.elt.disabled=!0,this.toggle_online())},this.p5PasswordInput=v,_=t.createButton(this.OnlineToggle?this.lang.text.Profile.LogOut:this.lang.text.Profile.login_toggle),_.style("margin-top","17px"),_.style("align-self","center"),_.style("text-align","center"),_.style("font-size","24px"),_.style("border-radius","16px"),_.style("padding","12px 30px"),_.parent(f),_.elt.onclick=()=>{_.elt.disabled=!0,this.toggle_online()}},t.draw=()=>{b>0&&(b-=.025,o.style("opacity",`${b}`),u.style("opacity",""+(1-b))),this.nakama.users.self.online?this.lerpVal<1?this.lerpVal+=.025:this.lerpVal=1:this.lerpVal>0?this.lerpVal-=.025:this.lerpVal=0,j&&O<1&&(O+=.025),u.style("filter",`grayscale(${t.lerp(.9,0,this.lerpVal)}) contrast(${t.lerp(1.4,1,this.lerpVal)})`),o.style("filter",`grayscale(${t.lerp(.9,0,this.lerpVal)}) contrast(${t.lerp(1.4,1,this.lerpVal)})`),j&&G.style("background-image",`linear-gradient(to top, rgba(${P}, ${t.min(1,O)/2}), rgba(${P}, 0))`),b<=0&&(this.lerpVal>=1||this.lerpVal<=0)&&(!j||O>=1)&&(this.nakama.users.self.img&&g.style("background-image",""),this.OnlineToggle=this.lerpVal>=1,this.OnlineToggle?(f.hide(),_.html(this.lang.text.Profile.LogOut),m.style("background-color",this.statusBar.colors.online)):(f.show(),f.style("display","flex"),_.html(this.lang.text.Profile.login_toggle),m.style("background-color",this.statusBar.colors.offline)),this.nakama.users.self.display_name&&(r.html(this.nakama.users.self.display_name),s.value(this.nakama.users.self.display_name)),this.ShowServerList=this.OnlineToggle,this.p5PasswordInput.value(""),_.elt.disabled=!1,t.noLoop())},t.keyPressed=y=>{"Enter"==y.code&&w&&s.elt.blur()}}),this.ShowServerList=this.OnlineToggle,this.CanAddTestServer=0==Object.keys(this.nakama.servers.official).length,this.isMobilePWA="MobilePWA"==D.aH}add_dev_test_server(){var t=this;return(0,S.A)(function*(){t.CanAddTestServer=!(yield t.nakama.WatchAdsAndGetDevServerInfo()),t.servers=t.nakama.get_all_server_info(!0)})()}link_group(t,i){var a=this;return(0,S.A)(function*(){if(a.isOverrideButtonPressed)a.isOverrideButtonPressed=!1;else if("offline"==a.statusBar.groupServer[t][i])yield a.nakama.link_group(t,i),a.original_profile=JSON.parse(JSON.stringify(a.nakama.users.self));else try{a.nakama.servers[t][i].socket.disconnect(!0)}catch{a.nakama.OnSocketDisconnect(t,i)}})()}add_custom_dedicated(){if(this.add_custom_tog)return;if(!this.dedicated_info.name)return void this.p5toast.show({text:this.lang.text.GroupServer.NeedSetDIsplayName});this.add_custom_tog=!0;let t=(this.dedicated_info.address||"192.168.0.1").split("://"),i=t.pop().split(":"),a=t.pop();a?a+=":":a=this.global.checkProtocolFromAddress(i[0])?"https:":"http:",this.dedicated_info.address=i[0],this.dedicated_info.port=Number(i[1])||7350,this.dedicated_info.useSSL="https:"==window.location.protocol&&!D.Yl,this.dedicated_info.useSSL=this.dedicated_info.useSSL||"https:"==a,this.dedicated_info.key=this.dedicated_info.key||"defaultkey",this.nakama.add_group_server(this.dedicated_info,()=>{this.servers=this.nakama.get_all_server_info(!0),this.link_group(this.dedicated_info.isOfficial,this.dedicated_info.target),this.dedicated_info.name=void 0,this.dedicated_info.address=void 0,this.dedicated_info.target=void 0,this.dedicated_info.port=void 0,this.dedicated_info.key=void 0,this.dedicated_info.useSSL=void 0,this.dedicated_info.isOfficial=void 0}),this.RegisterNewServer.dismiss(),setTimeout(()=>{this.add_custom_tog=!1},1e3)}remove_server(t,i){var a=this;return(0,S.A)(function*(){var r;a.isOverrideButtonPressed=!0,a.alertCtrl.create({header:a.lang.text.GroupServer.RemoveAccountReally,message:a.lang.text.ChatRoom.CannotUndone,buttons:[{text:a.lang.text.UserFsDir.OK,cssClass:"redfont",handler:(r=(0,S.A)(function*(){try{yield a.nakama.remove_server(t,i)}catch(s){console.log("\uc11c\ubc84 \uc0ad\uc81c \uc624\ub958: ",s)}a.servers=a.nakama.get_all_server_info(!0)}),function(){return r.apply(this,arguments)})}]}).then(r=>r.present())})()}ionViewWillLeave(){var t=this;return(0,S.A)(function*(){delete t.global.p5KeyShortCut.Escape,t.nakama.on_socket_disconnected.group_unlink_by_user&&delete t.nakama.on_socket_disconnected.group_unlink_by_user,delete t.nakama.socket_reactive.profile;let i=Object.keys(t.nakama.users.self),a=!1;for(let r=0,s=i.length;r<s;r++)if("img"!=i[r]&&t.nakama.users.self[i[r]]!=t.original_profile[i[r]]){a=!0;break}if(t.nakama.users.self.img=t.tmp_img||t.nakama.users.self.img,a){let r=t.nakama.get_all_online_server();for(let s=0,u=r.length;s<u;s++){if(t.nakama.users.self.display_name!=t.original_profile.display_name)try{yield r[s].client.updateAccount(r[s].session,{display_name:t.nakama.users.self.display_name});try{yield r[s].socket.sendMatchState(t.nakama.self_match[r[s].info.isOfficial][r[s].info.target].match_id,I.I.EDIT_PROFILE,encodeURIComponent("info"))}catch{}}catch{}if(t.isClickDisplayNameEdit&&t.nakama.channels_orig[r[s].info.isOfficial][r[s].info.target]){let o=Object.keys(t.nakama.channels_orig[r[s].info.isOfficial][r[s].info.target]);o&&o.forEach(b=>{r[s].socket.writeChatMessage(b,{user_update:"modify_data",noti_form:t.original_profile.display_name==t.nakama.users.self.display_name?`: ${t.original_profile.display_name}`:`: ${t.original_profile.display_name} -> ${t.nakama.users.self.display_name}`})})}}t.nakama.save_self_profile()}})()}ngOnDestroy(){this.route.queryParams.unsubscribe(),this.p5canvas.remove()}sync_to_all_server(){var t=this;return(0,S.A)(function*(){let i=t.nakama.get_all_online_server();t.nakama.save_self_profile(),t.indexed.saveTextFileToUserPath(JSON.stringify(t.nakama.users.self.img),"servers/self/profile.img"),t.tmp_img="";for(let a=0,r=i.length;a<r;a++){if(t.nakama.users.self.img)try{yield i[a].client.writeStorageObjects(i[a].session,[{collection:"user_public",key:"profile_image",value:{img:t.nakama.users.self.img},permission_read:2,permission_write:1}]),yield i[a].socket.sendMatchState(t.nakama.self_match[i[a].info.isOfficial][i[a].info.target].match_id,I.I.EDIT_PROFILE,encodeURIComponent("image"))}catch(s){console.log("inputImageSelected_err: ",s)}else try{yield i[a].client.deleteStorageObjects(i[a].session,{object_ids:[{collection:"user_public",key:"profile_image"}]}),yield i[a].socket.sendMatchState(t.nakama.self_match[i[a].info.isOfficial][i[a].info.target].match_id,I.I.EDIT_PROFILE,encodeURIComponent("image"))}catch(s){console.error("inputImageSelected_err: ",s)}try{yield i[a].client.rpc(i[a].session,"send_noti_all_fn",{user_id:i[a].session.user_id,noti_id:I.I.USER_PROFILE_IMAGE_CHANGED,persistent:!1})}catch(s){console.log("\uc11c\ubc84\uc5d0 \uc54c\ub9ac\uae30 \uc2e4\ud328: ",s)}t.announce_update_profile=!1}})()}change_img_from_file(){var t=this;return(0,S.A)(function*(){if(t.announce_update_profile=!0,t.nakama.users.self.img)t.p5ChangeImageSmooth();else try{let i=yield t.global.GetValueFromClipboard();switch(i.type){case"text/plain":yield t.check_if_clipboard_available(i.value);break;case"image/png":return void t.inputImageSelected({target:{files:[i.value]}})}}catch{document.getElementById(t.file_sel_id).click()}})()}inputImageSelected(t){var i=this;return(0,S.A)(function*(){let a=setInterval(()=>{},110);setTimeout(()=>{clearInterval(a)},1500);let r=yield i.global.GetBase64ThroughFileReader(t.target.files[0]);i.nakama.limit_image_size(r,u=>{i.p5ChangeImageSmooth(u.canvas.toDataURL())}),document.getElementById(i.file_sel_id).value=""})()}ionViewDidEnter(){this.can_auto_modified=!0,this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.pop()}}email_modified(){this.can_auto_modified&&(this.nakama.users.self.online&&this.toggle_online(),this.nakama.users.self.online=!1,delete this.nakama.users.self.password,this.p5PasswordInput.value(""))}toggle_online(){var t=this;return(0,S.A)(function*(){if(t.OnlineToggle=!t.OnlineToggle,t.nakama.users.self.online=t.OnlineToggle,t.OnlineToggle){t.announce_update_profile=!1;try{if(!t.nakama.users.self.email)throw t.p5toast.show({text:t.lang.text.Profile.need_email}),"\uc774\uba54\uc77c \uacf5\ubc31";if(!t.nakama.users.self.password)throw t.p5toast.show({text:t.lang.text.Profile.need_password}),"\ube44\ubc00\ubc88\ud638 \uacf5\ubc31";t.nakama.save_self_profile(),!(yield t.nakama.init_all_sessions())&&t.nakama.AfterLoginAct.length&&(yield t.nakama.WatchAdsAndGetDevServerInfo()),t.original_profile=JSON.parse(JSON.stringify(t.nakama.users.self))}catch{t.nakama.users.self.online=!1,t.OnlineToggle=!1}}else t.nakama.logout_all_server(),delete t.nakama.users.self.password,t.nakama.groups.official={},t.nakama.groups.unofficial={},t.nakama.save_groups_with_less_info(),t.nakama.channels_orig.official={},t.nakama.channels_orig.unofficial={},t.nakama.rearrange_channels();t.p5canvas.loop()})()}check_if_clipboard_available(t){var i=this;return(0,S.A)(function*(){try{if(0!=t.indexOf("http"))throw"URL \uc8fc\uc18c\uac00 \uc544\ub2d8";yield new Promise((a,r)=>{let s=document.createElement("img");s.src=t,s.onload=()=>{i.p5ChangeImageSmooth(t),s.onload=null,s.onerror=null,s.remove(),a(void 0)},s.onerror=()=>{s.onload=null,s.onerror=null,s.remove(),r()}})}catch{try{if(0!=t.indexOf("data:image"))throw"DataURL \uc8fc\uc18c\uac00 \uc544\ub2d8";i.nakama.limit_image_size(t,r=>i.p5ChangeImageSmooth(r.canvas.toDataURL()))}catch{throw"\uc0ac\uc6a9\ubd88\uac00 \uc774\ubbf8\uc9c0"}}})()}OpenNewServerForm(){this.RegisterNewServer.present()}copy_id(){this.global.WriteValueToClipboard("text/plain",this.session_uid)}}return(l=h).\u0275fac=function(t){return new(t||l)(e.rXU(I.X),e.rXU(F.G),e.rXU(L.j),e.rXU(B.n),e.rXU(A.y),e.rXU(V.z3),e.rXU(X.q9),e.rXU(p.hG),e.rXU(R.nX),e.rXU(R.Ix))},l.\u0275cmp=e.VBU({type:l,selectors:[["app-group-server"]],viewQuery:function(t,i){if(1&t&&e.GBs(U,5),2&t){let a;e.mGM(a=e.lsd())&&(i.RegisterNewServer=a.first)}},decls:13,vars:6,consts:[["RegisterNewServer",""],[1,"ion-no-border"],["slot","start"],["defaultHref",""],["id","GroupServerCanvasDiv",2,"position","absolute","width","100%","height","100%","display","flex"],["style","position: absolute; bottom: 0; width: 100%;",4,"ngIf"],["hidden","","type","file","accept","image/*",3,"change","id"],[3,"initialBreakpoint","breakpoints"],[2,"position","absolute","bottom","0","width","100%"],["value","open"],["button","","slot","header"],["slot","content"],["button","",3,"click",4,"ngIf"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[1,"ion-text-center"],["color","tertiary",1,"ion-text-center"],["color","secondary"],[1,"additional_form","status_bar_single"],[1,"form_margin"],[4,"ngIf"],[3,"click"],["button","",3,"disabled"],[1,"ion-text-right",3,"ngModelChange","label","ngModel","placeholder"],["placeholder","(https://)192.168.0.1",1,"ion-text-right",3,"ngModelChange","label","ngModel"],["slot","end","name","open-outline",3,"click"],["placeholder","defaultkey",1,"ion-text-right",3,"ngModelChange","label","ngModel"],["button","",3,"click","disabled"]],template:function(t,i){if(1&t){const a=e.RV6();e.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-buttons",2),e.nrm(5,"ion-back-button",3),e.k0s()()(),e.j41(6,"ion-content"),e.nrm(7,"div",4),e.DNE(8,Z,15,5,"div",5),e.j41(9,"input",6),e.bIt("change",function(s){return e.eBV(a),e.Njj(i.inputImageSelected(s))}),e.k0s(),e.j41(10,"ion-modal",7,0),e.DNE(12,H,14,13,"ng-template"),e.k0s()()}2&t&&(e.R7$(3),e.JRh(i.lang.text.Settings.groupServer),e.R7$(5),e.Y8G("ngIf",i.ShowServerList),e.R7$(),e.Y8G("id",i.file_sel_id),e.R7$(),e.Y8G("initialBreakpoint",i.isMobilePWA?.6:.4)("breakpoints",e.lJ4(5,J)))},dependencies:[C.Sq,C.bT,E.BC,E.vS,p.xk,p.YH,p.Jm,p.QW,p.W9,p.eU,p.iq,p.$w,p.uz,p.he,p.BC,p.ai,p.Sb,p.Gw,p.el],styles:[".fore-gradient[_ngcontent-%COMP%]{position:relative;background-image:linear-gradient(to top,#000,#0000);width:100%;height:100%}.content_size[_ngcontent-%COMP%]{height:360px}"]}),h})()},{path:"server-detail",loadChildren:()=>c.e(3456).then(c.bind(c,3456)).then(l=>l.ServerDetailPageModule)}];let Q=(()=>{var l;class h{}return(l=h).\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[R.iI.forChild(K),R.iI]}),h})(),q=(()=>{var l;class h{}return(l=h).\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[C.MD,E.YN,p.bv,Q]}),h})()}}]);