"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5229],{5229:(H,h,c)=>{c.r(h),c.d(h,{AdminToolsPageModule:()=>z});var m=c(6814),p=c(95),u=c(1325),f=c(5877),x=c(5861),T=c(9761),e=c(9468),A=c(3857),Z=c(9080),v=c(9376),P=c(7488),b=c(4663),k=c(797),G=c(6052);const q=["UserSel"],O=["GroupSel"];function U(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"ion-item",23),e.NdJ("click",function(){const o=e.CHM(s).index,r=e.oxw(2);return e.KtG(r.select_server(o))}),e.TgZ(1,"ion-label"),e._uU(2),e.qZA()()}if(2&n){const s=l.$implicit;e.xp6(2),e.Oqu(s.name)}}function C(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"ion-accordion-group",15,16),e.NdJ("click",function(){e.CHM(s);const i=e.oxw();return e.KtG(i.isExpanded=!0)}),e.TgZ(2,"ion-accordion",17)(3,"ion-item",18)(4,"ion-label"),e._uU(5),e.qZA(),e.TgZ(6,"ion-label",19),e._uU(7),e.qZA(),e._UZ(8,"ion-icon",20),e.qZA(),e.TgZ(9,"div",21),e.YNc(10,U,3,1,"ion-item",22),e.qZA()()()}if(2&n){const s=e.oxw();e.Q6J("value",s.isExpanded),e.xp6(5),e.Oqu(s.lang.text.AddGroup.SelectServer),e.xp6(2),e.Oqu(s.servers[s.index].name),e.xp6(3),e.Q6J("ngForOf",s.servers)}}function S(n,l){if(1&n&&e._UZ(0,"img",35),2&n){const s=e.oxw().$implicit,t=e.oxw();e.Q6J("src",t.all_users[s].img,e.LSH)}}function y(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"ion-item")(1,"ion-checkbox",38),e.NdJ("ngModelChange",function(i){const r=e.CHM(s).$implicit,a=e.oxw(2).$implicit,_=e.oxw();return e.KtG(_.PromotableGroup[_.all_users[a].id||_.all_users[a].user_id][r].promoted=i)}),e._uU(2),e.qZA()()}if(2&n){const s=l.$implicit,t=e.oxw(2).$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngModel",i.PromotableGroup[i.all_users[t].id||i.all_users[t].user_id][s].promoted),e.xp6(1),e.Oqu(i.PromotableGroup[i.all_users[t].id||i.all_users[t].user_id][s].name||"["+i.lang.text.AdminTools.RemovedGroup+"]")}}const E=function(){return{}};function M(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"ion-accordion-group",null,36)(2,"ion-accordion",24)(3,"ion-item",25)(4,"ion-label"),e._uU(5),e.qZA()(),e.TgZ(6,"div",21)(7,"ion-item",23),e.NdJ("click",function(){e.CHM(s);const i=e.oxw().$implicit,o=e.oxw();return e.KtG(o.promote_toggle_all_group(o.all_users[i]))}),e.TgZ(8,"ion-label"),e._uU(9),e.qZA()(),e.YNc(10,y,3,2,"ion-item",13),e.TgZ(11,"ion-item",23),e.NdJ("click",function(){e.CHM(s);const i=e.oxw().$implicit,o=e.oxw();return e.KtG(o.promote_as_manager(o.all_users[i]))}),e.TgZ(12,"ion-label",37),e._uU(13),e.qZA()()()()()}if(2&n){const s=e.oxw().$implicit,t=e.oxw();e.xp6(2),e.Q6J("value",t.all_users[s].id||t.all_users[s].user_id),e.xp6(3),e.Oqu(t.lang.text.AdminTools.promote_as_manager),e.xp6(4),e.Oqu(t.lang.text.AdminTools.ToggleAllPromote),e.xp6(1),e.Q6J("ngForOf",(t.PromotableGroup[t.all_users[s].id||t.all_users[s].user_id]||e.DdM(5,E)).keys),e.xp6(3),e.Oqu(t.lang.text.AdminTools.Apply)}}function I(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"div")(1,"ion-accordion",24)(2,"ion-item",25)(3,"div",26),e.YNc(4,S,1,1,"img",27),e.qZA(),e._UZ(5,"div",28),e.TgZ(6,"ion-label",29),e._uU(7),e.qZA(),e._UZ(8,"ion-icon",20),e.qZA(),e.TgZ(9,"div",21)(10,"ion-item",9),e.NdJ("click",function(){const o=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.copy_id(r.all_users[o].id||r.all_users[o].user_id))}),e.TgZ(11,"ion-label",30),e._uU(12),e.qZA()(),e.TgZ(13,"ion-item",31)(14,"ion-label"),e._uU(15),e.qZA(),e.TgZ(16,"ion-label",32),e._uU(17),e.qZA()(),e.TgZ(18,"ion-item",31)(19,"ion-label"),e._uU(20),e.qZA(),e.TgZ(21,"ion-label",32),e._uU(22),e.qZA()(),e.YNc(23,M,14,6,"ion-accordion-group",33),e.TgZ(24,"ion-item",23),e.NdJ("click",function(){const o=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.start_private_chat(r.all_users[o]))}),e.TgZ(25,"ion-label"),e._uU(26),e.qZA()(),e.TgZ(27,"ion-item",23),e.NdJ("click",function(){const o=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.remove_user(r.all_users[o]))}),e.TgZ(28,"ion-label",34),e._uU(29),e.qZA()()()()()}if(2&n){const s=l.$implicit,t=e.oxw();e.xp6(1),e.Q6J("value",t.all_users[s].id||t.all_users[s].user_id),e.xp6(3),e.Q6J("ngIf",t.all_users[s].img),e.xp6(1),e.Akn("background-color: "+t.statusBar.colors[void 0===t.all_users[s].online?"pending":t.all_users[s].online?"online":"offline"]),e.xp6(2),e.Oqu(t.all_users[s].display_name||t.lang.text.Profile.noname_user),e.xp6(5),e.Oqu(t.all_users[s].id||t.all_users[s].user_id),e.xp6(3),e.Oqu(t.lang.text.AdminTools.UserCreate),e.xp6(2),e.Oqu(t.all_users[s].display_created),e.xp6(3),e.Oqu(t.lang.text.AddGroup.LanguageTag),e.xp6(2),e.Oqu(t.all_users[s].lang_tag),e.xp6(1),e.Q6J("ngIf",t.PromotableGroup[t.all_users[s].id||t.all_users[s].user_id]),e.xp6(3),e.Oqu(t.lang.text.OtherProfile.privacy_chat),e.xp6(3),e.Oqu(t.lang.text.AdminTools.ForceLeave)}}function w(n,l){if(1&n&&e._UZ(0,"img",35),2&n){const s=e.oxw().$implicit,t=e.oxw();e.Q6J("src",t.all_groups[s].img,e.LSH)}}function J(n,l){if(1&n&&e._UZ(0,"img",35),2&n){const s=e.oxw().$implicit,t=e.oxw(2);e.Q6J("src",s.is_me?t.nakama.users.self.img:t.nakama.users[t.isOfficial][t.target][s.user.id].img,e.LSH)}}function N(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"div")(1,"ion-item",23),e.NdJ("click",function(){const o=e.CHM(s).$implicit,r=e.oxw(2);return r.copy_id(o.user.id),e.KtG(r.find_current_user_id(o.user.id))}),e.TgZ(2,"div",26),e.YNc(3,J,1,1,"img",27),e.qZA(),e.TgZ(4,"ion-label"),e._uU(5),e.qZA()()()}if(2&n){const s=l.$implicit,t=e.oxw(2);e.xp6(3),e.Q6J("ngIf",s.is_me?t.nakama.users.self.img:t.nakama.users[t.isOfficial][t.target][s.user.id].img),e.xp6(2),e.Oqu((s.is_me?t.nakama.users.self.display_name:s.user.display_name)||t.lang.text.Profile.noname_user)}}function $(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"div")(1,"ion-accordion",24)(2,"ion-item",25)(3,"div",26),e.YNc(4,w,1,1,"img",27),e.qZA(),e._UZ(5,"div",28),e.TgZ(6,"ion-label",29),e._uU(7),e.qZA(),e._UZ(8,"ion-icon",20),e.qZA(),e.TgZ(9,"div",21)(10,"ion-item",9),e.NdJ("click",function(){const o=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.copy_id(r.all_groups[o].id))}),e.TgZ(11,"ion-label",30),e._uU(12),e.qZA()(),e.TgZ(13,"ion-item",31)(14,"ion-label"),e._uU(15),e.qZA(),e.TgZ(16,"ion-label",32),e._uU(17),e.qZA()(),e.TgZ(18,"ion-item",9),e.NdJ("click",function(){const o=e.CHM(s).$implicit,r=e.oxw();return r.copy_id(r.all_groups[o].creator_id),e.KtG(r.find_current_user_id(r.all_groups[o].creator_id))}),e.TgZ(19,"ion-label",39),e._uU(20),e.qZA(),e.TgZ(21,"ion-label",40),e._uU(22),e.qZA()(),e.TgZ(23,"ion-accordion-group",null,41)(25,"ion-accordion",24)(26,"ion-item",25)(27,"ion-label"),e._uU(28),e.qZA(),e.TgZ(29,"ion-label",32),e._uU(30),e.qZA()(),e.TgZ(31,"div",21),e.YNc(32,N,6,2,"div",13),e.qZA()()(),e.TgZ(33,"ion-item-divider")(34,"ion-label"),e._uU(35),e.qZA()(),e.TgZ(36,"textarea",42),e.NdJ("ngModelChange",function(i){const r=e.CHM(s).$implicit,a=e.oxw();return e.KtG(a.all_groups[r].description=i)}),e.qZA(),e.TgZ(37,"ion-item",23),e.NdJ("click",function(){const o=e.CHM(s).$implicit,r=e.oxw();return e.KtG(r.force_breakup_group(r.all_groups[o]))}),e.TgZ(38,"ion-label",34),e._uU(39),e.qZA()()()()()}if(2&n){const s=l.$implicit,t=e.oxw();e.xp6(1),e.Q6J("value",t.all_groups[s].name),e.xp6(3),e.Q6J("ngIf",t.all_groups[s].img),e.xp6(1),e.Akn("background-color: "+t.statusBar.colors[t.all_groups[s].open?"online":"pending"]),e.xp6(2),e.Oqu(t.all_groups[s].name),e.xp6(5),e.Oqu(t.all_groups[s].id),e.xp6(3),e.Oqu(t.lang.text.AddGroup.LanguageTag),e.xp6(2),e.Oqu(t.all_groups[s].lang_tag),e.xp6(3),e.Oqu(t.lang.text.AdminTools.GroupCreator),e.xp6(2),e.hij(" ",(t.nakama.users[t.isOfficial][t.target][t.all_groups[s].creator_id]?t.nakama.users[t.isOfficial][t.target][t.all_groups[s].creator_id].display_name:t.nakama.users.self.display_name)||t.lang.text.Profile.noname_user," "),e.xp6(3),e.Q6J("value",t.all_groups[s].name+"_user"),e.xp6(3),e.Oqu(t.lang.text.AdminTools.GroupUserCounter),e.xp6(2),e.Oqu(t.all_groups[s].edge_count+" / "+t.all_groups[s].max_count),e.xp6(2),e.Q6J("ngForOf",t.all_groups[s].users),e.xp6(3),e.Oqu(t.lang.text.AddGroup.GroupDetail_placeholder),e.xp6(1),e.Q6J("ngModel",t.all_groups[s].description),e.xp6(3),e.Oqu(t.lang.text.AdminTools.ForceBreakUp)}}const F=[{path:"",component:(()=>{var n;class l{constructor(t,i,o,r,a,_,g,d,Q){this.lang=t,this.nakama=i,this.p5toast=o,this.alertCtrl=r,this.statusBar=a,this.mClipboard=_,this.indexed=g,this.global=d,this.navCtrl=Q,this.servers=[],this.index=0,this.isExpanded=!0,this.notification={uri:"",msg:""},this.is_sending=!1,this.all_users=[],this.current_user_page=1,this.all_user_page=1,this.current_user_size=[],this.all_groups=[],this.current_group_page=1,this.all_group_page=1,this.current_group_size=[],this.LIST_PAGE_SIZE=5,this.PromotableGroup={}}select_server(t){this.index=t,this.isOfficial=this.servers[t].isOfficial,this.target=this.servers[t].target,this.isExpanded=!1,this.refresh_all_user(),this.refresh_all_groups()}ngOnInit(){this.servers=this.nakama.get_all_server_info(!0,!0);for(let t=this.servers.length-1;t>=0;t--)this.servers[t].is_admin||this.servers.splice(t,1);this.select_server(0)}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}send_noti_to_server(){this.notification.msg||this.notification.uri?(this.is_sending=!0,this.notification.msg=encodeURIComponent(this.notification.msg),this.notification.uri=encodeURIComponent(this.notification.uri),this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"send_noti_all_fn",this.notification).then(t=>{this.notification.msg="",this.notification.uri="",this.is_sending=!1}).catch(t=>{console.log("send_noti_to_server: ",t),this.is_sending=!1})):this.p5toast.show({text:this.lang.text.AdminTools.NoNotiMsg})}refresh_all_user(){this.all_users.length=0,this.current_user_size.length=0,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"query_all_users",{}).then(t=>{this.all_users=t.payload;for(let i=0,o=this.all_users.length;i<o;i++){this.nakama.save_other_user(this.all_users[i],this.isOfficial,this.target);let r=this.all_users[i].id||this.all_users[i].user_id;if(this.all_users[i]={...this.all_users[i],...this.nakama.load_other_user(r,this.isOfficial,this.target)},"object"==typeof this.all_users[i].metadata&&void 0!==this.all_users[i].metadata.is_manager)for(let _=0,g=this.all_users[i].metadata.is_manager.length;_<g&&void 0!==this.all_users[i].metadata.is_manager;i++)this.PromotableGroup[r]||(this.PromotableGroup[r]={}),this.PromotableGroup[r][this.all_users[i].metadata.is_manager[_]]?this.PromotableGroup[r][this.all_users[i].metadata.is_manager[_]].promoted=!0:this.PromotableGroup[r][this.all_users[i].metadata.is_manager[_]]={promoted:!0};let a=new Date(this.all_users[i].create_time).getTime()-60*(new Date).getTimezoneOffset()*1e3;this.all_users[i].display_created=new Date(a).toISOString().split(".")[0]}this.all_user_page=Math.ceil(this.all_users.length/this.LIST_PAGE_SIZE),this.current_user_page=0,this.change_user_list_page(1)}).catch(t=>{console.error("\uc0ac\uc6a9\uc790 \ub9ac\uc2a4\ud2b8 \ub3cc\ub824\ubc1b\uae30 \uc624\ub958: ",t)})}promote_as_manager(t){if("object"==typeof t.metadata){let i=t.metadata,o=[],r=t.id||t.user_id,a=Object.keys(this.PromotableGroup[r]);for(let _=0,g=a.length;_<g;_++)this.PromotableGroup[r][a[_]].promoted&&o.push(a[_]);o.length?i.is_manager=o:delete i.is_manager,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"update_user_metadata_fn",{user_id:r,metadata:i}).then(_=>{this.p5toast.show({text:this.lang.text.AdminTools.PromoteAsWell})}).catch(_=>{this.p5toast.show({text:this.lang.text.AdminTools.PromoteError})})}else this.p5toast.show({text:this.lang.text.AdminTools.AlreadyAdmin})}promote_toggle_all_group(t){let i=t.id||t.user_id;this.PromotableGroup[i].toggle_log=!this.PromotableGroup[i].toggle_log,this.PromotableGroup[i].keys.forEach(o=>{this.PromotableGroup[i][o].promoted=this.PromotableGroup[i].toggle_log})}refresh_all_groups(){this.all_groups.length=0,this.current_group_size.length=0,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"query_all_groups",{}).then(t=>{this.all_groups=t.payload;for(let o=0,r=this.all_groups.length;o<r;o++){for(let a=0,_=this.all_groups[o].users.length;a<_;a++){let g=this.all_groups[o].users[a].user.id||this.all_groups[o].users[a].user.user_id,d=this.all_groups[o].id||this.all_groups[o].group_id;this.PromotableGroup[g]||(this.PromotableGroup[g]={}),this.PromotableGroup[g][d]||(this.PromotableGroup[g][d]={promoted:!1}),this.PromotableGroup[g][d].name=this.all_groups[o].name,this.all_groups[o].users[a].user.user_id==this.nakama.servers[this.isOfficial][this.target].session.user_id?(this.all_groups[o].users[a].is_me=!0,this.all_groups[o].users[a].user=this.nakama.users.self):this.all_groups[o].users[a].user=this.nakama.load_other_user(this.all_groups[o].users[a].user.user_id,this.isOfficial,this.target)}this.indexed.loadTextFromUserPath(`servers/${this.isOfficial}/${this.target}/groups/${this.all_groups[o].id}.img`,(a,_)=>{a&&_&&(this.all_groups[o].img=_)})}Object.keys(this.PromotableGroup).forEach(o=>{let r=Object.keys(this.PromotableGroup[o]);this.PromotableGroup[o].keys=r}),this.all_group_page=Math.ceil(this.all_groups.length/this.LIST_PAGE_SIZE),this.current_group_page=0,this.change_group_list_page(1)}).catch(t=>{console.error("\uadf8\ub8f9 \ub9ac\uc2a4\ud2b8 \ub3cc\ub824\ubc1b\uae30 \uc624\ub958: ",t)})}find_current_user_id(t){for(let i=0,o=this.all_users.length;i<o;i++)if(this.all_users[i].id==t){this.current_user_page=Math.floor(i/5),this.change_user_list_page(1);break}this.UserSel.value=t}force_breakup_group(t){this.alertCtrl.create({header:t.name,message:this.lang.text.AdminTools.ForceBreakUp,buttons:[{text:this.lang.text.GroupDetail.BreakupGroup,cssClass:"danger",handler:()=>{this.ForceBreakupGroupAct(t)}}]}).then(i=>i.present())}ForceBreakupGroupAct(t){this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"force_remove_group",{group_id:t.id}).then(i=>{this.p5toast.show({text:`${this.lang.text.AdminTools.ForceBreaked}: ${t.name}`}),this.refresh_all_user(),this.refresh_all_groups()}).catch(i=>{console.log("force_breakup_group: ",i),this.p5toast.show({text:`${this.lang.text.AdminTools.ForceBreakedFailed}: ${i.statusText}`})})}change_user_list_page(t){switch(t){case 1:if(this.current_user_page<this.all_user_page){this.current_user_page+=1,this.current_user_size=Array(this.current_user_page==this.all_user_page?this.all_users.length%this.LIST_PAGE_SIZE==0?this.LIST_PAGE_SIZE:this.all_users.length%this.LIST_PAGE_SIZE:this.LIST_PAGE_SIZE);for(let i=0,o=this.current_user_size.length;i<o;i++)this.current_user_size[i]=(this.current_user_page-1)*this.LIST_PAGE_SIZE+i}break;case-1:if(this.current_user_page-1>0){this.current_user_page-=1,this.current_user_size=Array(this.LIST_PAGE_SIZE);for(let i=0,o=this.current_user_size.length;i<o;i++)this.current_user_size[i]=(this.current_user_page-1)*this.LIST_PAGE_SIZE+i}}this.UserSel.value=void 0}change_group_list_page(t){switch(t){case 1:if(this.current_group_page<this.all_group_page){this.current_group_page+=1,this.current_group_size=Array(this.current_group_page==this.all_group_page?this.all_groups.length%this.LIST_PAGE_SIZE==0?this.LIST_PAGE_SIZE:this.all_groups.length%this.LIST_PAGE_SIZE:this.LIST_PAGE_SIZE);for(let i=0,o=this.current_group_size.length;i<o;i++)this.current_group_size[i]=(this.current_group_page-1)*this.LIST_PAGE_SIZE+i}break;case-1:if(this.current_group_page-1>0){this.current_group_page-=1,this.current_group_size=Array(this.LIST_PAGE_SIZE);for(let i=0,o=this.current_group_size.length;i<o;i++)this.current_group_size[i]=(this.current_group_page-1)*this.LIST_PAGE_SIZE+i}}this.GroupSel.value=void 0}start_private_chat(t){this.nakama.join_chat_with_modulation(t.user_id||t.id,2,this.isOfficial,this.target,i=>{i&&this.nakama.go_to_chatroom_without_admob_act(i)},!0)}copy_id(t){this.mClipboard.copy(t).catch(i=>T.Z.write(t))}remove_user(t){this.alertCtrl.create({header:t.display_name||this.lang.text.Profile.noname_user,message:this.lang.text.AdminTools.ForceLeave,buttons:[{text:this.lang.text.AdminTools.ApplyLeave,cssClass:"danger",handler:()=>{this.RemoveUser(t)}}]}).then(i=>i.present())}RemoveUser(t){var i=this;return(0,x.Z)(function*(){try{yield i.nakama.servers[i.isOfficial][i.target].client.rpc(i.nakama.servers[i.isOfficial][i.target].session,"remove_account_fn",{user_id:t.user_id||t.id}),i.p5toast.show({text:`${i.lang.text.AdminTools.UserLeaved}: ${t.display_name||i.lang.text.Profile.noname_user}`}),i.refresh_all_user(),i.refresh_all_groups()}catch(o){console.log("remove_user: ",o),i.p5toast.show({text:`${i.lang.text.AdminTools.UserLeavedFailed}: ${o.statusText}`})}})()}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(A.b),e.Y36(Z.a),e.Y36(v.F),e.Y36(u.Br),e.Y36(P.g),e.Y36(b.T),e.Y36(k.H),e.Y36(G.AN),e.Y36(u.SH))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-tools"]],viewQuery:function(t,i){if(1&t&&(e.Gf(q,5),e.Gf(O,5)),2&t){let o;e.iGM(o=e.CRH())&&(i.UserSel=o.first),e.iGM(o=e.CRH())&&(i.GroupSel=o.first)}},decls:53,vars:18,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],["value","colors","expand","inset",3,"value","click",4,"ngIf"],[1,"ion-text-end",3,"label","ngModel","placeholder","ngModelChange"],[1,"infobox","content_size",3,"ngModel","placeholder","ngModelChange"],["button","",3,"disabled"],[1,"ion-text-center",3,"click"],["slot","end",2,"margin-right","8px"],[3,"click"],["slot","start","name","arrow-back-circle-outline",1,"icon_style"],["slot","start","name","arrow-forward-circle-outline",1,"icon_style"],["UserSel",""],[4,"ngFor","ngForOf"],["GroupSel",""],["value","colors","expand","inset",3,"value","click"],["accordionGroup",""],["value","colors"],["slot","header"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["slot","content"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[3,"value"],["button","","slot","header"],[1,"additional_form","bg_img_form"],["class","profile_img",3,"src",4,"ngIf"],[1,"additional_form","status_bar_single"],[1,"form_margin"],["color","medium","text-wrap","",1,"ion-text-center"],["disabled",""],[1,"ion-text-end"],[4,"ngIf"],["color","danger",1,"ion-text-center"],[1,"profile_img",3,"src"],["PromoteSel",""],[1,"ion-text-center"],[3,"ngModel","ngModelChange"],["color","medium"],["color","medium",1,"ion-text-end"],["GroupUserSel",""],["disabled","",1,"infobox",3,"ngModel","ngModelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-buttons",1),e._UZ(5,"ion-back-button",2),e.qZA()()(),e.TgZ(6,"ion-content"),e.YNc(7,C,11,4,"ion-accordion-group",3),e.TgZ(8,"ion-item-divider")(9,"ion-label"),e._uU(10),e.qZA()(),e.TgZ(11,"ion-item")(12,"ion-input",4),e.NdJ("ngModelChange",function(r){return i.notification.uri=r}),e.qZA()(),e.TgZ(13,"textarea",5),e.NdJ("ngModelChange",function(r){return i.notification.msg=r}),e.qZA(),e.TgZ(14,"ion-item",6)(15,"ion-label",7),e.NdJ("click",function(){return i.send_noti_to_server()}),e._uU(16),e.qZA()(),e.TgZ(17,"ion-item-divider")(18,"ion-label"),e._uU(19),e.qZA(),e.TgZ(20,"table",8)(21,"tr")(22,"td",9),e.NdJ("click",function(){return i.change_user_list_page(-1)}),e._UZ(23,"ion-icon",10),e.qZA(),e.TgZ(24,"td"),e._uU(25),e.qZA(),e.TgZ(26,"td"),e._uU(27,"/"),e.qZA(),e.TgZ(28,"td"),e._uU(29),e.qZA(),e.TgZ(30,"td",9),e.NdJ("click",function(){return i.change_user_list_page(1)}),e._UZ(31,"ion-icon",11),e.qZA()()()(),e.TgZ(32,"ion-accordion-group",null,12),e.YNc(34,I,30,13,"div",13),e.qZA(),e.TgZ(35,"ion-item-divider")(36,"ion-label"),e._uU(37),e.qZA(),e.TgZ(38,"table",8)(39,"tr")(40,"td",9),e.NdJ("click",function(){return i.change_group_list_page(-1)}),e._UZ(41,"ion-icon",10),e.qZA(),e.TgZ(42,"td"),e._uU(43),e.qZA(),e.TgZ(44,"td"),e._uU(45,"/"),e.qZA(),e.TgZ(46,"td"),e._uU(47),e.qZA(),e.TgZ(48,"td",9),e.NdJ("click",function(){return i.change_group_list_page(1)}),e._UZ(49,"ion-icon",11),e.qZA()()()(),e.TgZ(50,"ion-accordion-group",null,14),e.YNc(52,$,40,17,"div",13),e.qZA()()),2&t&&(e.xp6(3),e.Oqu(i.lang.text.Settings.ServerAdmin),e.xp6(4),e.Q6J("ngIf",i.servers.length),e.xp6(3),e.Oqu(i.lang.text.AdminTools.GlobalNoti),e.xp6(2),e.Q6J("label",i.lang.text.AdminTools.ImageURL)("ngModel",i.notification.uri)("placeholder",i.lang.text.AdminTools.EnterURI),e.xp6(1),e.Q6J("ngModel",i.notification.msg)("placeholder",i.lang.text.AdminTools.NoNotiMsg),e.xp6(1),e.Q6J("disabled",i.is_sending||!i.notification.msg&&!i.notification.uri),e.xp6(2),e.Oqu(i.lang.text.AdminTools.Send),e.xp6(3),e.Oqu(i.lang.text.AdminTools.UserList),e.xp6(6),e.Oqu(i.current_user_page),e.xp6(4),e.Oqu(i.all_user_page),e.xp6(5),e.Q6J("ngForOf",i.current_user_size),e.xp6(3),e.Oqu(i.lang.text.AdminTools.GroupList),e.xp6(6),e.Oqu(i.current_group_page),e.xp6(4),e.Oqu(i.all_group_page),e.xp6(5),e.Q6J("ngForOf",i.current_group_size))},dependencies:[m.sg,m.O5,p.Fj,p.JJ,p.On,u.We,u.eh,u.oU,u.Sm,u.nz,u.W2,u.Gu,u.gu,u.pK,u.Ie,u.rH,u.Q$,u.wd,u.sr,u.w,u.j9,u.cs],styles:[".icon_style[_ngcontent-%COMP%]{width:22px;height:22px;transform:translateY(2px);margin-left:4px;margin-right:4px}"]}),l})()}];let L=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(F),f.Bz]}),l})(),z=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,p.u5,u.Pc,L]}),l})()}}]);