"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3267],{3267:(E,v,u)=>{u.r(v),u.d(v,{GroupDetailPageModule:()=>B});var h=u(177),d=u(4341),g=u(5374),m=u(9858),p=u(467),k=u(9349),e=u(3953),G=u(4237),b=u(8065),R=u(755),y=u(4234),O=u(482),$=u(9900),D=u(3656);function F(s,l){if(1&s){const n=e.RV6();e.j41(0,"img",21),e.bIt("click",function(){e.eBV(n);const t=e.XpG(2);return e.Njj(t.copy_startup_address())}),e.k0s()}if(2&s){const n=e.XpG(2);e.Y8G("src",n.QRCodeSRC,e.B4B)}}function j(s,l){if(1&s&&(e.j41(0,"div"),e.DNE(1,F,1,1,"img",20),e.k0s()),2&s){const n=e.XpG();e.R7$(),e.Y8G("ngIf",n.QRCodeSRC)}}function P(s,l){if(1&s&&(e.j41(0,"ion-item",22)(1,"ion-label",23),e.EFF(2),e.k0s()()),2&s){const n=e.XpG();e.R7$(2),e.JRh(n.lang.text.GroupDetail.NotAcceptYet)}}function C(s,l){if(1&s&&(e.j41(0,"ion-item",22)(1,"ion-label",23),e.EFF(2),e.k0s()()),2&s){const n=e.XpG();e.R7$(2),e.JRh(n.lang.text.GroupDetail.MissedGroup)}}function I(s,l){if(1&s&&(e.j41(0,"ion-item-divider")(1,"ion-label"),e.EFF(2),e.k0s()()),2&s){const n=e.XpG();e.R7$(2),e.SpI("",n.lang.text.GroupDetail.Members+" ("+n.info.users.length+"/"+n.info.max_count+")"," ")}}function T(s,l){if(1&s){const n=e.RV6();e.j41(0,"ion-item",7),e.bIt("click",function(){const t=e.eBV(n).$implicit,o=e.XpG();return e.Njj(o.open_user_profile(t))}),e.nrm(1,"div",8),e.j41(2,"div",9),e.nrm(3,"img",10),e.k0s(),e.j41(4,"ion-label",11),e.EFF(5),e.k0s()()}if(2&s){const n=l.$implicit,i=e.XpG();e.R7$(),e.Aen("background-color: "+i.statusBar.colors[n.user.online?"online":"offline"]),e.R7$(2),e.Aen("filter: "+(n.user.online?"grayscale(0) contrast(1);":"grayscale(.9) contrast(1.4);")),e.Y8G("src",n.user.img,e.B4B),e.R7$(2),e.JRh(i.nakama.usernameOverride[i.isOfficial][i.target][n.user.id]||n.user.display_name||i.lang.text.Profile.noname_user)}}function S(s,l){if(1&s){const n=e.RV6();e.j41(0,"ion-item",7),e.bIt("click",function(){e.eBV(n);const t=e.XpG();return e.Njj(t.remove_group())}),e.j41(1,"ion-label",24),e.EFF(2),e.k0s()()}if(2&s){const n=e.XpG();e.R7$(2),e.JRh(n.lang.text.GroupDetail.BreakupGroup)}}function M(s,l){if(1&s){const n=e.RV6();e.j41(0,"ion-item",7),e.bIt("click",function(){e.eBV(n);const t=e.XpG();return e.Njj(t.leave_group())}),e.j41(1,"ion-label",24),e.EFF(2),e.k0s()()}if(2&s){const n=e.XpG();e.R7$(2),e.JRh(n.lang.text.GroupDetail.LeaveGroup)}}const U=[{path:"",component:(()=>{var s;class l{constructor(i,t,o,a,r,f,c,_,X){this.nakama=i,this.statusBar=t,this.indexed=o,this.lang=a,this.global=r,this.p5toast=f,this.route=c,this.router=_,this.navCtrl=X,this.has_admin=!1,this.file_sel_id="",this.need_edit=!1,this.lock_modal_open=!1}ngOnDestroy(){this.route.queryParams.unsubscribe()}ngOnInit(){var i=this;return(0,p.A)(function*(){i.route.queryParams.subscribe(t=>{try{const o=i.router.getCurrentNavigation().extras.state;i.info=o.info,i.file_sel_id=`group_detail_${i.info.id}_${(new Date).getTime()}}`,i.info_orig=JSON.parse(JSON.stringify(o.info)),i.nakama.socket_reactive.group_detail=i,i.QRCodeSRC=i.global.readasQRCodeFromString(`${k.d2}pjcone_pwa/?group=${i.info.name},${i.info.id}`),i.info.server||(i.info.server=o.server),i.isOfficial=i.info.server.isOfficial,i.target=i.info.server.target;try{i.has_admin=i.info.creator_id==i.nakama.servers[i.isOfficial][i.target].session.user_id}catch(a){console.log("check is admin failed: ",a),i.has_admin=!1}if(i.info.users&&i.info.users.length)for(let a=0,r=i.info.users.length;a<r;a++)i.info.users[a].is_me?(i.info.users[a].user=i.nakama.users.self,i.indexed.loadTextFromUserPath("servers/self/profile.img",(f,c)=>{f&&c&&(i.nakama.users.self.img=c.replace(/"|\\|=/g,""))})):i.info.users[a].user.id?i.info.users[a].user=i.nakama.load_other_user(i.info.users[a].user.id,i.isOfficial,i.target):i.info.users.splice(a,1);try{i.nakama.servers[i.isOfficial][i.target].client.readStorageObjects(i.nakama.servers[i.isOfficial][i.target].session,{object_ids:[{collection:"group_public",key:`group_${i.info.id}`,user_id:i.info.creator_id}]}).then(a=>{a.objects.length?(i.nakama.groups[i.isOfficial][i.target][i.info.id].img=a.objects[0].value.img.replace(/"|=|\\/g,""),i.indexed.saveTextFileToUserPath(a.objects[0].value.img,`servers/${i.isOfficial}/${i.target}/groups/${i.info.id}.img`)):i.info.status&&(delete i.nakama.groups[i.isOfficial][i.target][i.info.id].img,i.indexed.removeFileFromUserPath(`servers/${i.isOfficial}/${i.target}/groups/${i.info.id}.img`))})}catch(a){console.log(a)}}catch(o){console.log("\uadf8\ub8f9 \uc0c1\uc138 \ud398\uc774\uc9c0 \uc9c4\uc785 \uc624\ub958: ",o)}})})()}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}update_from_notification(i){switch(i.code){case-4:case-5:this.update_GroupUsersList(i.server.isOfficial,i.server.target);break;default:console.warn("\uc608\uc0c1\ud558\uc9c0 \ubabb\ud55c \uadf8\ub8f9 \ud589\ub3d9: ",i)}}update_GroupUsersList(i,t){this.nakama.servers[i][t].client.listGroupUsers(this.nakama.servers[i][t].session,this.info.id).then(o=>{let a=[];for(let r=0,f=o.group_users.length;r<f;r++)if(o.group_users[r].user.id==this.nakama.servers[i][t].session.user_id)a.push({state:o.group_users[r].state,user:this.nakama.users.self});else{let c=this.nakama.load_other_user(o.group_users[r].user.id,i,t);this.nakama.save_other_user(o.group_users[r].user,i,t),a.push({state:o.group_users[r].state,user:c})}this.info.users=a})}buttonClickInputFile(){var i=this;return(0,p.A)(function*(){if(i.has_admin)if(i.info.img)i.info.img=void 0,i.nakama.servers[i.isOfficial][i.target].client.deleteStorageObjects(i.nakama.servers[i.isOfficial][i.target].session,{object_ids:[{collection:"group_public",key:`group_${i.info.id}`}]}).then(t=>{i.indexed.removeFileFromUserPath(`servers/${i.isOfficial}/${i.target}/groups/${i.info.id}.img`)});else try{let t=yield i.global.GetValueFromClipboard();switch(t.type){case"text/plain":yield i.check_if_clipboard_available(t.value);break;case"image/png":return void i.inputImageSelected({target:{files:[t.value]}})}}catch{document.getElementById(i.file_sel_id).click()}})()}inputImageSelected(i){var t=this;return(0,p.A)(function*(){let o=yield t.global.GetBase64ThroughFileReader(i.target.files[0]);t.nakama.limit_image_size(o,r=>{t.info.img=r.canvas.toDataURL(),t.announce_update_group_image(t.info.img)}),document.getElementById(t.file_sel_id).value=""})()}announce_update_group_image(i){this.nakama.servers[this.isOfficial][this.target].client.writeStorageObjects(this.nakama.servers[this.isOfficial][this.target].session,[{collection:"group_public",key:`group_${this.info.id}`,value:{img:i},permission_read:2,permission_write:1}]).then(t=>{this.indexed.saveTextFileToUserPath(JSON.stringify(i),`servers/${this.isOfficial}/${this.target}/groups/${this.info.id}.img`)})}check_if_clipboard_available(i){var t=this;return(0,p.A)(function*(){try{if(0!=i.indexOf("http"))throw"URL \uc8fc\uc18c\uac00 \uc544\ub2d8";yield new Promise((o,a)=>{let r=document.createElement("img");r.src=i,r.onload=()=>{t.info.img=i,t.announce_update_group_image(i),r.onload=null,r.onerror=null,r.remove(),o(void 0)},r.onerror=()=>{r.onload=null,r.onerror=null,r.remove(),a()}})}catch{try{if(0!=i.indexOf("data:image"))throw"DataURL \uc8fc\uc18c\uac00 \uc544\ub2d8";t.nakama.limit_image_size(i,a=>{t.info.img=a.canvas.toDataURL(),t.announce_update_group_image(t.info.img)})}catch{throw"\uc0ac\uc6a9\ubd88\uac00 \uc774\ubbf8\uc9c0"}}})()}remove_group(){var i=this;this.need_edit=!1;try{if(this.nakama.servers[this.isOfficial][this.target]){if(this.info.creator_id!=this.nakama.servers[this.isOfficial][this.target].session.user_id)throw this.lang.text.GroupDetail.YouAreNotCreator;"online"==this.info.status?this.nakama.servers[this.isOfficial][this.target].socket.writeChatMessage(this.info.channel_id,{gupdate:"remove"}).then(function(){var t=(0,p.A)(function*(o){let a=yield i.nakama.servers[i.isOfficial][i.target].client.getAccount(i.nakama.servers[i.isOfficial][i.target].session),r=JSON.parse(a.user.metadata);for(let f=0,c=r.is_manager.length;f<c;f++)if(r.is_manager[f]==i.info.id){r.is_manager.splice(f,1);break}r.is_manager.length||delete r.is_manager;try{yield i.nakama.servers[i.isOfficial][i.target].client.rpc(i.nakama.servers[i.isOfficial][i.target].session,"update_user_metadata_fn",{user_id:i.nakama.servers[i.isOfficial][i.target].session.user_id,metadata:r})}catch(f){console.log("\uadf8\ub8f9 \uc0ad\uc81c\uc2dc \uc0dd\uc131\uc790\uc758 \ub9e4\ub2c8\uc800 \uad8c\ud55c \ubc15\ud0c8 \ub3d9\uae30\ud654 \uc624\ub958: ",f)}i.nakama.remove_group_list(i.info,i.isOfficial,i.target),i.after_remove_group()});return function(o){return t.apply(this,arguments)}}()):this.after_remove_group()}else this.navCtrl.pop()}catch(t){console.log("remove_group: ",t),this.p5toast.show({text:t})}}after_remove_group(){var i=this;return(0,p.A)(function*(){i.RemoveGroupFilesFromServer(`${i.info.id}`),i.leave_channel(),i.navCtrl.pop()})()}edit_group(){"online"==this.statusBar.groupServer[this.isOfficial][this.target]&&"missing"!=this.info.status&&this.has_admin&&this.nakama.servers[this.isOfficial][this.target].client.updateGroup(this.nakama.servers[this.isOfficial][this.target].session,this.info.id,{name:this.info.name,lang_tag:this.info.lang_tag,description:this.info.description,open:this.info.open}),this.nakama.groups[this.isOfficial][this.target][this.info.id]=this.info,this.nakama.save_groups_with_less_info()}open_user_profile(i){this.lock_modal_open||(this.lock_modal_open=!0,i.is_me?(this.nakama.open_profile_page({isOfficial:this.isOfficial,target:this.target}),this.lock_modal_open=!1):(this.nakama.open_others_profile({info:i,group:this.info,has_admin:this.has_admin}),this.lock_modal_open=!1))}leave_group(){this.need_edit=!1,"online"==this.info.status?this.after_leave_group(()=>{this.leave_channel(),this.nakama.groups[this.isOfficial][this.target][this.info.id].status="missing",this.nakama.save_groups_with_less_info(()=>this.navCtrl.pop())}):"pending"==this.info.status&&this.after_leave_group(()=>{this.nakama.groups[this.isOfficial][this.target][this.info.id].status="missing",this.nakama.save_groups_with_less_info(()=>this.navCtrl.pop())})}after_leave_group(i=(()=>{})){var t=this;return(0,p.A)(function*(){try{yield t.nakama.servers[t.isOfficial][t.target].client.leaveGroup(t.nakama.servers[t.isOfficial][t.target].session,t.info.id)}catch{}i(),t.RemoveGroupFilesFromServer(`${t.info.id}_${t.nakama.servers[t.isOfficial][t.target].session.user_id}`)})()}RemoveGroupFilesFromServer(i){this.nakama.remove_channel_files(this.isOfficial,this.target,this.info.channel_id);let t=this.nakama.servers[this.isOfficial][this.target].info;try{let o=localStorage.getItem("fallback_fs");if(!o)throw"\uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc11c\ubc84 \uc5c6\uc74c";let a=o.split("://"),r=a.pop().split(":"),f=a.pop();f?f+=":":f=this.global.checkProtocolFromAddress(r[0])?"https:":"http:",this.global.remove_files_from_storage_with_key(`${f}//${r[0]}:${r[1]||9002}/`,i)}catch{}try{this.global.remove_files_from_storage_with_key(`${t.useSSL?"https":"http"}://${t.address}`,i)}catch{}}leave_channel(){try{"missing"!=this.nakama.channels_orig[this.isOfficial][this.target][this.info.channel_id].status&&(this.nakama.channels_orig[this.isOfficial][this.target][this.info.channel_id].status="missing")}catch{}}copy_id(){this.global.WriteValueToClipboard("text/plain",this.info.id)}copy_startup_address(){let i=encodeURI(`https://is2you2.github.io/pjcone_pwa/?group=${this.info.name},${this.info.id}`);this.global.WriteValueToClipboard("text/plain",i)}ionViewWillLeave(){delete this.nakama.socket_reactive.group_detail,this.need_edit=this.info.description!=this.info_orig.description,this.need_edit&&this.edit_group(),delete this.global.p5key.KeyShortCut.Escape}}return(s=l).\u0275fac=function(i){return new(i||s)(e.rXU(G.X),e.rXU(b.j),e.rXU(R.n),e.rXU(y.y),e.rXU(O.z3),e.rXU($.G),e.rXU(m.nX),e.rXU(m.Ix),e.rXU(D.q9))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-group-detail"]],decls:39,vars:24,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref",""],[4,"ngIf"],["color","warning",4,"ngIf"],[2,"cursor","copy",3,"click"],["text-wrap","","color","medium",1,"ion-text-center"],["button","",3,"click"],[1,"additional_form","status_bar_single"],[1,"additional_form","bg_img_form"],[1,"profile_img",3,"src"],[1,"form_margin"],[1,"server_target"],[1,"form_margin","content"],["hidden","","type","file","accept","image/*",3,"change","id"],[1,"infobox",3,"ngModelChange","disabled","ngModel","placeholder"],[2,"pointer-events","none"],[2,"pointer-events","none",3,"ngModelChange","ngModel"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click",4,"ngIf"],["style","width: 100%; height: auto; cursor: copy;","alt","Loading",3,"src","click",4,"ngIf"],["alt","Loading",2,"width","100%","height","auto","cursor","copy",3,"click","src"],["color","warning"],[1,"ion-text-center"],["color","danger",1,"ion-text-center"]],template:function(i,t){1&i&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-buttons",1),e.nrm(5,"ion-back-button",2),e.k0s()()(),e.j41(6,"ion-content"),e.DNE(7,j,2,1,"div",3)(8,P,3,1,"ion-item",4)(9,C,3,1,"ion-item",4),e.j41(10,"ion-item",5),e.bIt("click",function(){return t.copy_id()}),e.j41(11,"ion-label",6),e.EFF(12),e.k0s()(),e.j41(13,"ion-item",7),e.bIt("click",function(){return t.buttonClickInputFile()}),e.nrm(14,"div",8),e.j41(15,"div",9),e.nrm(16,"img",10),e.k0s(),e.j41(17,"ion-label",11)(18,"div")(19,"table")(20,"tr")(21,"td"),e.EFF(22),e.k0s(),e.j41(23,"td",12),e.EFF(24),e.k0s()()()(),e.j41(25,"div",13),e.EFF(26),e.k0s()()(),e.j41(27,"input",14),e.bIt("change",function(a){return t.inputImageSelected(a)}),e.k0s(),e.j41(28,"ion-item-divider")(29,"ion-label"),e.EFF(30),e.k0s()(),e.j41(31,"textarea",15),e.mxI("ngModelChange",function(a){return e.DH7(t.info.description,a)||(t.info.description=a),a}),e.k0s(),e.j41(32,"ion-item",16)(33,"ion-toggle",17),e.mxI("ngModelChange",function(a){return e.DH7(t.info.open,a)||(t.info.open=a),a}),e.EFF(34),e.k0s()(),e.DNE(35,I,3,1,"ion-item-divider",3)(36,T,6,6,"ion-item",18)(37,S,3,1,"ion-item",19)(38,M,3,1,"ion-item",19),e.k0s()),2&i&&(e.R7$(3),e.JRh(t.lang.text.GroupDetail.Title),e.R7$(4),e.Y8G("ngIf","missing"!=t.info.status),e.R7$(),e.Y8G("ngIf","pending"==t.info.status),e.R7$(),e.Y8G("ngIf","missing"==t.info.status),e.R7$(3),e.JRh(t.info.id),e.R7$(2),e.Aen("background-color: "+t.statusBar.colors[t.info.status||"offline"]),e.R7$(2),e.Aen("filter: "+("online"==t.info.status?"grayscale(0) contrast(1);":"grayscale(.9) contrast(1.4);")),e.Y8G("src",t.info.img,e.B4B),e.R7$(6),e.SpI(" ",t.info.name||t.info.title||t.info.display_name," "),e.R7$(2),e.SpI(" ","("+(t.info.server.name||t.info.server.target)+")"," "),e.R7$(2),e.SpI(" ",t.lang.text.AddGroup.ClicktoChangeGroupImg," "),e.R7$(),e.Y8G("id",t.file_sel_id),e.R7$(3),e.JRh(t.lang.text.AddGroup.GroupDetail_placeholder),e.R7$(),e.Y8G("disabled",!t.has_admin),e.R50("ngModel",t.info.description),e.Y8G("placeholder",t.lang.text.GroupDetail.NoDetailGroup),e.R7$(2),e.R50("ngModel",t.info.open),e.R7$(),e.JRh(t.lang.text.GroupDetail.IsOpen),e.R7$(),e.Y8G("ngIf",t.info.users&&t.info.users.length),e.R7$(),e.Y8G("ngForOf",t.info.users),e.R7$(),e.Y8G("ngIf",("online"==t.info.status||"pending"==t.info.status)&&t.has_admin),e.R7$(),e.Y8G("ngIf",("online"==t.info.status||"pending"==t.info.status)&&!t.has_admin))},dependencies:[h.Sq,h.bT,d.me,d.BC,d.vS,g.QW,g.W9,g.eU,g.uz,g.Dg,g.he,g.BC,g.BY,g.ai,g.hB,g.el],styles:[".content[_ngcontent-%COMP%]{color:#888;height:24px;display:table-cell;vertical-align:middle}"]}),l})()}];let x=(()=>{var s;class l{}return(s=l).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[m.iI.forChild(U),m.iI]}),l})(),B=(()=>{var s;class l{}return(s=l).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[h.MD,d.YN,g.bv,x]}),l})()}}]);