"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8989],{8989:(z,k,u)=>{u.r(k),u.d(k,{AdminToolsPageModule:()=>D});var p=u(177),h=u(4341),c=u(5374),v=u(9858),m=u(467),b=u(8258),T=u(9349),e=u(3953),G=u(4234),j=u(4237),A=u(9900),R=u(3656),P=u(8065),F=u(1076),$=u(755),x=u(3295);const E=["UserSel"],y=["GroupSel"],I=()=>({});function S(l,_){if(1&l){const o=e.RV6();e.j41(0,"ion-item",26),e.bIt("click",function(){const t=e.eBV(o).index,s=e.XpG(2);return e.Njj(s.select_server(t))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s()()}if(2&l){const o=_.$implicit;e.R7$(2),e.JRh(o.name)}}function B(l,_){if(1&l){const o=e.RV6();e.j41(0,"ion-accordion-group",19,2),e.bIt("click",function(){e.eBV(o);const t=e.XpG();return e.Njj(t.isExpanded=!0)}),e.j41(2,"ion-accordion",20)(3,"ion-item",21)(4,"ion-label"),e.EFF(5),e.k0s(),e.j41(6,"ion-label",22),e.EFF(7),e.k0s(),e.nrm(8,"ion-icon",23),e.k0s(),e.j41(9,"div",24),e.DNE(10,S,3,1,"ion-item",25),e.k0s()()()}if(2&l){const o=e.XpG();e.Y8G("value",o.isExpanded),e.R7$(5),e.JRh(o.lang.text.AddGroup.SelectServer),e.R7$(2),e.JRh(o.servers[o.index].name),e.R7$(3),e.Y8G("ngForOf",o.servers)}}function C(l,_){if(1&l&&e.nrm(0,"img",39),2&l){const o=e.XpG().$implicit,i=e.XpG();e.Y8G("src",i.all_users[o].img,e.B4B)}}function O(l,_){if(1&l){const o=e.RV6();e.j41(0,"ion-item")(1,"ion-checkbox",10),e.mxI("ngModelChange",function(t){const s=e.eBV(o).$implicit,r=e.XpG(2).$implicit,a=e.XpG();return e.DH7(a.PromotableGroup[a.all_users[r].id||a.all_users[r].user_id][s].promoted,t)||(a.PromotableGroup[a.all_users[r].id||a.all_users[r].user_id][s].promoted=t),e.Njj(t)}),e.EFF(2),e.k0s()()}if(2&l){const o=_.$implicit,i=e.XpG(2).$implicit,t=e.XpG();e.R7$(),e.R50("ngModel",t.PromotableGroup[t.all_users[i].id||t.all_users[i].user_id][o].promoted),e.R7$(),e.JRh(t.PromotableGroup[t.all_users[i].id||t.all_users[i].user_id][o].name||"["+t.lang.text.AdminTools.RemovedGroup+"]")}}function X(l,_){if(1&l){const o=e.RV6();e.j41(0,"ion-accordion-group",null,3)(2,"ion-accordion",27)(3,"ion-item",28)(4,"ion-label"),e.EFF(5),e.k0s()(),e.j41(6,"div",24)(7,"ion-item",26),e.bIt("click",function(){e.eBV(o);const t=e.XpG().$implicit,s=e.XpG();return e.Njj(s.promote_toggle_all_group(s.all_users[t]))}),e.j41(8,"ion-label"),e.EFF(9),e.k0s()(),e.DNE(10,O,3,2,"ion-item",18),e.j41(11,"ion-item",26),e.bIt("click",function(){e.eBV(o);const t=e.XpG().$implicit,s=e.XpG();return e.Njj(s.promote_as_manager(s.all_users[t]))}),e.j41(12,"ion-label",40),e.EFF(13),e.k0s()()()()()}if(2&l){const o=e.XpG().$implicit,i=e.XpG();e.R7$(2),e.Y8G("value",i.all_users[o].id||i.all_users[o].user_id),e.R7$(3),e.JRh(i.lang.text.AdminTools.promote_as_manager),e.R7$(4),e.JRh(i.lang.text.AdminTools.ToggleAllPromote),e.R7$(),e.Y8G("ngForOf",(i.PromotableGroup[i.all_users[o].id||i.all_users[o].user_id]||e.lJ4(5,I)).keys),e.R7$(3),e.JRh(i.lang.text.AdminTools.Apply)}}function M(l,_){if(1&l){const o=e.RV6();e.j41(0,"div")(1,"ion-accordion",27)(2,"ion-item",28)(3,"div",29),e.DNE(4,C,1,1,"img",30),e.k0s(),e.nrm(5,"div",31),e.j41(6,"ion-label",32),e.EFF(7),e.k0s(),e.nrm(8,"ion-icon",23),e.k0s(),e.j41(9,"div",24)(10,"ion-item",33),e.bIt("click",function(){const t=e.eBV(o).$implicit,s=e.XpG();return e.Njj(s.copy_id(s.all_users[t].id||s.all_users[t].user_id))}),e.j41(11,"ion-label",34),e.EFF(12),e.k0s()(),e.j41(13,"ion-item",35)(14,"ion-label"),e.EFF(15),e.k0s(),e.j41(16,"ion-label",36),e.EFF(17),e.k0s()(),e.j41(18,"ion-item",35)(19,"ion-label"),e.EFF(20),e.k0s(),e.j41(21,"ion-label",36),e.EFF(22),e.k0s()(),e.DNE(23,X,14,6,"ion-accordion-group",37),e.j41(24,"ion-item",26),e.bIt("click",function(){const t=e.eBV(o).$implicit,s=e.XpG();return e.Njj(s.start_private_chat(s.all_users[t]))}),e.j41(25,"ion-label"),e.EFF(26),e.k0s()(),e.j41(27,"ion-item",26),e.bIt("click",function(){const t=e.eBV(o).$implicit,s=e.XpG();return e.Njj(s.remove_user(s.all_users[t]))}),e.j41(28,"ion-label",38),e.EFF(29),e.k0s()()()()()}if(2&l){const o=_.$implicit,i=e.XpG();e.R7$(),e.Y8G("value",i.all_users[o].id||i.all_users[o].user_id),e.R7$(3),e.Y8G("ngIf",i.all_users[o].img),e.R7$(),e.Aen("background-color: "+i.statusBar.colors[void 0===i.all_users[o].online?"pending":i.all_users[o].online?"online":"offline"]),e.R7$(2),e.JRh(i.all_users[o].display_name||i.lang.text.Profile.noname_user),e.R7$(5),e.JRh(i.all_users[o].id||i.all_users[o].user_id),e.R7$(3),e.JRh(i.lang.text.AdminTools.UserCreate),e.R7$(2),e.JRh(i.all_users[o].display_created),e.R7$(3),e.JRh(i.lang.text.AddGroup.LanguageTag),e.R7$(2),e.JRh(i.all_users[o].lang_tag),e.R7$(),e.Y8G("ngIf",i.PromotableGroup[i.all_users[o].id||i.all_users[o].user_id]),e.R7$(3),e.JRh(i.lang.text.OtherProfile.privacy_chat),e.R7$(3),e.JRh(i.lang.text.AdminTools.ForceLeave)}}function N(l,_){if(1&l&&e.nrm(0,"img",39),2&l){const o=e.XpG().$implicit,i=e.XpG();e.Y8G("src",i.all_groups[o].img,e.B4B)}}function J(l,_){if(1&l&&e.nrm(0,"img",39),2&l){const o=e.XpG().$implicit,i=e.XpG(2);e.Y8G("src",o.is_me?i.nakama.users.self.img:i.nakama.users[i.isOfficial][i.target][o.user.id].img,e.B4B)}}function U(l,_){if(1&l){const o=e.RV6();e.j41(0,"div")(1,"ion-item",44),e.bIt("click",function(){const t=e.eBV(o).$implicit,s=e.XpG(2);return s.copy_id(t.user.id),e.Njj(s.find_current_user_id(t.user.id))}),e.j41(2,"div",29),e.DNE(3,J,1,1,"img",30),e.k0s(),e.j41(4,"ion-label"),e.EFF(5),e.k0s()()()}if(2&l){const o=_.$implicit,i=e.XpG(2);e.R7$(3),e.Y8G("ngIf",o.is_me?i.nakama.users.self.img:i.nakama.users[i.isOfficial][i.target][o.user.id].img),e.R7$(2),e.JRh((o.is_me?i.nakama.users.self.display_name:o.user.display_name)||i.lang.text.Profile.noname_user)}}function V(l,_){if(1&l){const o=e.RV6();e.j41(0,"div")(1,"ion-accordion",27)(2,"ion-item",28)(3,"div",29),e.DNE(4,N,1,1,"img",30),e.k0s(),e.nrm(5,"div",31),e.j41(6,"ion-label",32),e.EFF(7),e.k0s(),e.nrm(8,"ion-icon",23),e.k0s(),e.j41(9,"div",24)(10,"ion-item",33),e.bIt("click",function(){const t=e.eBV(o).$implicit,s=e.XpG();return e.Njj(s.copy_id(s.all_groups[t].id))}),e.j41(11,"ion-label",34),e.EFF(12),e.k0s()(),e.j41(13,"ion-item",35)(14,"ion-label"),e.EFF(15),e.k0s(),e.j41(16,"ion-label",36),e.EFF(17),e.k0s()(),e.j41(18,"ion-item",33),e.bIt("click",function(){const t=e.eBV(o).$implicit,s=e.XpG();return s.copy_id(s.all_groups[t].creator_id),e.Njj(s.find_current_user_id(s.all_groups[t].creator_id))}),e.j41(19,"ion-label",41),e.EFF(20),e.k0s(),e.j41(21,"ion-label",42),e.EFF(22),e.k0s()(),e.j41(23,"ion-accordion-group",null,4)(25,"ion-accordion",27)(26,"ion-item",28)(27,"ion-label"),e.EFF(28),e.k0s(),e.j41(29,"ion-label",36),e.EFF(30),e.k0s()(),e.j41(31,"div",24),e.DNE(32,U,6,2,"div",18),e.k0s()()(),e.j41(33,"ion-item-divider")(34,"ion-label"),e.EFF(35),e.k0s()(),e.j41(36,"textarea",43),e.mxI("ngModelChange",function(t){const s=e.eBV(o).$implicit,r=e.XpG();return e.DH7(r.all_groups[s].description,t)||(r.all_groups[s].description=t),e.Njj(t)}),e.k0s(),e.j41(37,"ion-item",26),e.bIt("click",function(){const t=e.eBV(o).$implicit,s=e.XpG();return e.Njj(s.force_breakup_group(s.all_groups[t]))}),e.j41(38,"ion-label",38),e.EFF(39),e.k0s()()()()()}if(2&l){const o=_.$implicit,i=e.XpG();e.R7$(),e.Y8G("value",i.all_groups[o].name),e.R7$(3),e.Y8G("ngIf",i.all_groups[o].img),e.R7$(),e.Aen("background-color: "+i.statusBar.colors[i.all_groups[o].open?"online":"pending"]),e.R7$(2),e.JRh(i.all_groups[o].name),e.R7$(5),e.JRh(i.all_groups[o].id),e.R7$(3),e.JRh(i.lang.text.AddGroup.LanguageTag),e.R7$(2),e.JRh(i.all_groups[o].lang_tag),e.R7$(3),e.JRh(i.lang.text.AdminTools.GroupCreator),e.R7$(2),e.SpI(" ",(i.nakama.users[i.isOfficial][i.target][i.all_groups[o].creator_id]?i.nakama.users[i.isOfficial][i.target][i.all_groups[o].creator_id].display_name:i.nakama.users.self.display_name)||i.lang.text.Profile.noname_user," "),e.R7$(3),e.Y8G("value",i.all_groups[o].name+"_user"),e.R7$(3),e.JRh(i.lang.text.AdminTools.GroupUserCounter),e.R7$(2),e.JRh(i.all_groups[o].edge_count+" / "+i.all_groups[o].max_count),e.R7$(2),e.Y8G("ngForOf",i.all_groups[o].users),e.R7$(3),e.JRh(i.lang.text.AddGroup.GroupDetail_placeholder),e.R7$(),e.R50("ngModel",i.all_groups[o].description),e.R7$(3),e.JRh(i.lang.text.AdminTools.ForceBreakUp)}}const w=[{path:"",component:(()=>{var l;class _{constructor(i,t,s,r,a,n,g,d,f,Y){this.lang=i,this.nakama=t,this.p5toast=s,this.alertCtrl=r,this.statusBar=a,this.mClipboard=n,this.indexed=g,this.global=d,this.navCtrl=f,this.loadingCtrl=Y,this.servers=[],this.index=0,this.isExpanded=!0,this.notification={uri:"",msg:"",noti_id:1,persistent:!0},this.BackButtonPressed=!1,this.is_sending=!1,this.all_users=[],this.current_user_page=1,this.all_user_page=1,this.current_user_size=[],this.all_groups=[],this.current_group_page=1,this.all_group_page=1,this.current_group_size=[],this.LIST_PAGE_SIZE=5,this.PromotableGroup={}}select_server(i){this.index=i,this.isOfficial=this.servers[i].isOfficial,this.target=this.servers[i].target,this.isExpanded=!1,this.refresh_all_user(),this.refresh_all_groups()}InitBrowserBackButtonOverride(){window.history.pushState(null,null,window.location.href),window.onpopstate=()=>{this.BackButtonPressed||(this.BackButtonPressed=!0,this.navCtrl.back())}}ngOnInit(){this.InitBrowserBackButtonOverride(),this.servers=this.nakama.get_all_server_info(!0,!0);for(let i=this.servers.length-1;i>=0;i--)this.servers[i].is_admin||this.servers.splice(i,1);this.select_server(0)}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}send_noti_to_server(){this.notification.msg||this.notification.uri?(this.is_sending=!0,this.notification.msg=encodeURIComponent(this.notification.msg),this.notification.uri=encodeURIComponent(this.notification.uri),this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"send_noti_all_fn",this.notification).then(i=>{this.notification.msg="",this.notification.uri="",this.is_sending=!1}).catch(i=>{console.log("send_noti_to_server: ",i),this.p5toast.show({text:`${this.lang.text.AdminTools.SendFailed}: ${i}`}),this.is_sending=!1})):this.p5toast.show({text:this.lang.text.AdminTools.NoNotiMsg})}refresh_all_user(){this.all_users.length=0,this.current_user_size.length=0,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"query_all_users",{}).then(i=>{this.all_users=i.payload;for(let t=0,s=this.all_users.length;t<s;t++){this.nakama.save_other_user(this.all_users[t],this.isOfficial,this.target);let r=this.all_users[t].id||this.all_users[t].user_id;if(this.all_users[t]={...this.all_users[t],...this.nakama.load_other_user(r,this.isOfficial,this.target)},"object"==typeof this.all_users[t].metadata&&void 0!==this.all_users[t].metadata.is_manager)for(let n=0,g=this.all_users[t].metadata.is_manager.length;n<g&&void 0!==this.all_users[t].metadata.is_manager;n++)this.PromotableGroup[r]||(this.PromotableGroup[r]={}),this.PromotableGroup[r][this.all_users[t].metadata.is_manager[n]]?this.PromotableGroup[r][this.all_users[t].metadata.is_manager[n]].promoted=!0:this.PromotableGroup[r][this.all_users[t].metadata.is_manager[n]]={promoted:!0};let a=new Date(this.all_users[t].create_time).getTime()-60*(new Date).getTimezoneOffset()*1e3;this.all_users[t].display_created=new Date(a).toISOString().split(".")[0]}this.all_user_page=Math.ceil(this.all_users.length/this.LIST_PAGE_SIZE),this.current_user_page=0,this.change_user_list_page(1)}).catch(i=>{console.error("\uc0ac\uc6a9\uc790 \ub9ac\uc2a4\ud2b8 \ub3cc\ub824\ubc1b\uae30 \uc624\ub958: ",i)})}promote_as_manager(i){if("object"==typeof i.metadata){let t=i.metadata,s=[],r=i.id||i.user_id,a=Object.keys(this.PromotableGroup[r]);for(let n=0,g=a.length;n<g;n++)this.PromotableGroup[r][a[n]].promoted&&s.push(a[n]);s.length?t.is_manager=s:delete t.is_manager,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"update_user_metadata_fn",{user_id:r,metadata:t}).then(n=>{this.p5toast.show({text:this.lang.text.AdminTools.PromoteAsWell})}).catch(n=>{this.p5toast.show({text:this.lang.text.AdminTools.PromoteError})})}else this.p5toast.show({text:this.lang.text.AdminTools.AlreadyAdmin})}promote_toggle_all_group(i){let t=i.id||i.user_id;this.PromotableGroup[t].toggle_log=!this.PromotableGroup[t].toggle_log,this.PromotableGroup[t].keys.forEach(s=>{this.PromotableGroup[t][s].promoted=this.PromotableGroup[t].toggle_log})}refresh_all_groups(){this.all_groups.length=0,this.current_group_size.length=0,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"query_all_groups",{}).then(i=>{this.all_groups=i.payload;for(let s=0,r=this.all_groups.length;s<r;s++){for(let a=0,n=this.all_groups[s].users.length;a<n;a++){let g=this.all_groups[s].users[a].user.id||this.all_groups[s].users[a].user.user_id,d=this.all_groups[s].id||this.all_groups[s].group_id;this.PromotableGroup[g]||(this.PromotableGroup[g]={}),this.PromotableGroup[g][d]||(this.PromotableGroup[g][d]={promoted:!1}),this.PromotableGroup[g][d].name=this.all_groups[s].name,this.all_groups[s].users[a].user.user_id==this.nakama.servers[this.isOfficial][this.target].session.user_id?(this.all_groups[s].users[a].is_me=!0,this.all_groups[s].users[a].user=this.nakama.users.self):this.all_groups[s].users[a].user=this.nakama.load_other_user(this.all_groups[s].users[a].user.user_id,this.isOfficial,this.target)}this.indexed.loadTextFromUserPath(`servers/${this.isOfficial}/${this.target}/groups/${this.all_groups[s].id}.img`,(a,n)=>{a&&n&&(this.all_groups[s].img=n)})}Object.keys(this.PromotableGroup).forEach(s=>{let r=Object.keys(this.PromotableGroup[s]);this.PromotableGroup[s].keys=r}),this.all_group_page=Math.ceil(this.all_groups.length/this.LIST_PAGE_SIZE),this.current_group_page=0,this.change_group_list_page(1)}).catch(i=>{console.error("\uadf8\ub8f9 \ub9ac\uc2a4\ud2b8 \ub3cc\ub824\ubc1b\uae30 \uc624\ub958: ",i)})}find_current_user_id(i){for(let t=0,s=this.all_users.length;t<s;t++)if(this.all_users[t].id==i){this.current_user_page=Math.floor(t/5),this.change_user_list_page(1);break}this.UserSel.value=i}force_breakup_group(i){this.alertCtrl.create({header:i.name,message:this.lang.text.AdminTools.ForceBreakUp,buttons:[{text:this.lang.text.GroupDetail.BreakupGroup,cssClass:"redfont",handler:()=>{this.ForceBreakupGroupAct(i)}}]}).then(t=>{this.global.p5key.KeyShortCut.Escape=()=>{t.dismiss()},t.onDidDismiss().then(()=>{this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}),t.present()})}ForceBreakupGroupAct(i){var t=this;return(0,m.A)(function*(){t.nakama.servers[t.isOfficial][t.target].client.rpc(t.nakama.servers[t.isOfficial][t.target].session,"force_remove_group",{group_id:i.id}).then(r=>{t.p5toast.show({text:`${t.lang.text.AdminTools.ForceBreaked}: ${i.name}`}),t.refresh_all_user(),t.refresh_all_groups()}).catch(r=>{console.log("force_breakup_group: ",r),t.p5toast.show({text:`${t.lang.text.AdminTools.ForceBreakedFailed}: ${r.statusText}`})}),t.nakama.remove_channel_files(t.isOfficial,t.target,t.nakama.groups[t.isOfficial][t.target][i.id].channel_id);let s=t.nakama.servers[t.isOfficial][t.target].info;try{let r=localStorage.getItem("fallback_fs");if(!r)throw"\uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc11c\ubc84 \uc5c6\uc74c";let a=r.split(":"),d=`${a[0].replace(/(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/g,"")?"https:":"http:"}//${a[0]}:${a[1]||9002}/`;yield t.global.remove_files_from_storage_with_key(d,i.id)}catch{}try{let r=`${s.useSSL?"https":"http"}://${s.address}`;yield t.global.remove_files_from_storage_with_key(r,i.id)}catch(r){console.log("\ud30c\uc77c \uc77c\uad04 \uc0ad\uc81c \uc694\uccad \uc2e4\ud328: ",r)}})()}change_user_list_page(i){switch(i){case 1:if(this.current_user_page<this.all_user_page){this.current_user_page+=1,this.current_user_size=Array(this.current_user_page==this.all_user_page?this.all_users.length%this.LIST_PAGE_SIZE==0?this.LIST_PAGE_SIZE:this.all_users.length%this.LIST_PAGE_SIZE:this.LIST_PAGE_SIZE);for(let t=0,s=this.current_user_size.length;t<s;t++)this.current_user_size[t]=(this.current_user_page-1)*this.LIST_PAGE_SIZE+t}break;case-1:if(this.current_user_page-1>0){this.current_user_page-=1,this.current_user_size=Array(this.LIST_PAGE_SIZE);for(let t=0,s=this.current_user_size.length;t<s;t++)this.current_user_size[t]=(this.current_user_page-1)*this.LIST_PAGE_SIZE+t}}this.UserSel.value=void 0}change_group_list_page(i){switch(i){case 1:if(this.current_group_page<this.all_group_page){this.current_group_page+=1,this.current_group_size=Array(this.current_group_page==this.all_group_page?this.all_groups.length%this.LIST_PAGE_SIZE==0?this.LIST_PAGE_SIZE:this.all_groups.length%this.LIST_PAGE_SIZE:this.LIST_PAGE_SIZE);for(let t=0,s=this.current_group_size.length;t<s;t++)this.current_group_size[t]=(this.current_group_page-1)*this.LIST_PAGE_SIZE+t}break;case-1:if(this.current_group_page-1>0){this.current_group_page-=1,this.current_group_size=Array(this.LIST_PAGE_SIZE);for(let t=0,s=this.current_group_size.length;t<s;t++)this.current_group_size[t]=(this.current_group_page-1)*this.LIST_PAGE_SIZE+t}}this.GroupSel.value=void 0}start_private_chat(i){var t=this;return(0,m.A)(function*(){let s=yield t.nakama.join_chat_with_modulation(i.user_id||i.id,2,t.isOfficial,t.target,!0);t.nakama.go_to_chatroom_without_admob_act(s)})()}copy_id(i){this.mClipboard.copy(i).catch(t=>{b.A.write(i).then(()=>{"DesktopPWA"==T.aH&&this.p5toast.show({text:`${this.lang.text.GlobalAct.PCClipboard}: ${i}`})}).catch(s=>{})})}remove_user(i){var s,t=this;this.alertCtrl.create({header:i.display_name||this.lang.text.Profile.noname_user,message:this.lang.text.AdminTools.ForceLeave,buttons:[{text:this.lang.text.AdminTools.ApplyLeave,cssClass:"redfont",handler:(s=(0,m.A)(function*(){let r=yield t.loadingCtrl.create({message:t.lang.text.TodoDetail.WIP});r.present(),yield t.RemoveUser(i),r.dismiss()}),function(){return s.apply(this,arguments)})}]}).then(s=>{this.global.p5key.KeyShortCut.Escape=()=>{s.dismiss()},s.onDidDismiss().then(()=>{this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}),s.present()})}RemoveUser(i){var t=this;return(0,m.A)(function*(){try{let s=t.nakama.servers[t.isOfficial][t.target].info,r=`${s.useSSL?"https":"http"}://${s.address}`;t.nakama.servers[t.isOfficial][t.target].client.rpc(t.nakama.servers[t.isOfficial][t.target].session,"remove_account_fn",{user_id:i.user_id||i.id}).catch(a=>{});try{let a=localStorage.getItem("fallback_fs");if(!a)throw"\uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc11c\ubc84 \uc5c6\uc74c";let n=a.split(":"),f=`${n[0].replace(/(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/g,"")?"https:":"http:"}//${n[0]}:${n[1]||9002}/`;yield t.global.remove_files_from_storage_with_key(f,i.user_id)}catch{}try{yield t.global.remove_files_from_storage_with_key(r,i.user_id)}catch(a){console.log("\ud30c\uc77c \uc77c\uad04 \uc0ad\uc81c \uc694\uccad \uc2e4\ud328: ",a)}t.p5toast.show({text:`${t.lang.text.AdminTools.UserLeaved}: ${i.display_name||t.lang.text.Profile.noname_user}`}),t.refresh_all_user(),t.refresh_all_groups()}catch(s){console.log("remove_user: ",s),t.p5toast.show({text:`${t.lang.text.AdminTools.UserLeavedFailed}: ${s.statusText}`})}})()}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape}}return(l=_).\u0275fac=function(i){return new(i||l)(e.rXU(G.y),e.rXU(j.X),e.rXU(A.G),e.rXU(c.hG),e.rXU(P.j),e.rXU(F.B),e.rXU($.n),e.rXU(x.z3),e.rXU(R.q9),e.rXU(c.Xi))},l.\u0275cmp=e.VBU({type:l,selectors:[["app-admin-tools"]],viewQuery:function(i,t){if(1&i&&(e.GBs(E,5),e.GBs(y,5)),2&i){let s;e.mGM(s=e.lsd())&&(t.UserSel=s.first),e.mGM(s=e.lsd())&&(t.GroupSel=s.first)}},decls:56,vars:20,consts:[["UserSel",""],["GroupSel",""],["accordionGroup",""],["PromoteSel",""],["GroupUserSel",""],[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],["value","colors","expand","inset",3,"value","click",4,"ngIf"],[1,"ion-text-end",3,"ngModelChange","label","ngModel","placeholder"],[3,"ngModelChange","ngModel"],[1,"infobox","content_size",3,"ngModelChange","ngModel","placeholder"],["button","",3,"disabled"],[1,"ion-text-center",3,"click"],["slot","end",2,"margin-right","8px"],[3,"click"],["slot","start","name","arrow-back-circle-outline",1,"icon_style"],["slot","start","name","arrow-forward-circle-outline",1,"icon_style"],[4,"ngFor","ngForOf"],["value","colors","expand","inset",3,"click","value"],["value","colors"],["slot","header"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["slot","content"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[3,"value"],["button","","slot","header"],[1,"additional_form","bg_img_form"],["class","profile_img",3,"src",4,"ngIf"],[1,"additional_form","status_bar_single"],[1,"form_margin"],[2,"cursor","copy",3,"click"],["color","medium","text-wrap","",1,"ion-text-center"],["disabled",""],[1,"ion-text-end"],[4,"ngIf"],["color","danger",1,"ion-text-center"],[1,"profile_img",3,"src"],[1,"ion-text-center"],["color","medium"],["color","medium",1,"ion-text-end"],["disabled","",1,"infobox",3,"ngModelChange","ngModel"],["button","",2,"cursor","copy",3,"click"]],template:function(i,t){if(1&i){const s=e.RV6();e.j41(0,"ion-header",5)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-buttons",6),e.nrm(5,"ion-back-button",7),e.k0s()()(),e.j41(6,"ion-content"),e.DNE(7,B,11,4,"ion-accordion-group",8),e.j41(8,"ion-item-divider")(9,"ion-label"),e.EFF(10),e.k0s()(),e.j41(11,"ion-item")(12,"ion-input",9),e.mxI("ngModelChange",function(a){return e.eBV(s),e.DH7(t.notification.uri,a)||(t.notification.uri=a),e.Njj(a)}),e.k0s()(),e.j41(13,"ion-item")(14,"ion-checkbox",10),e.mxI("ngModelChange",function(a){return e.eBV(s),e.DH7(t.notification.persistent,a)||(t.notification.persistent=a),e.Njj(a)}),e.EFF(15),e.k0s()(),e.j41(16,"textarea",11),e.mxI("ngModelChange",function(a){return e.eBV(s),e.DH7(t.notification.msg,a)||(t.notification.msg=a),e.Njj(a)}),e.k0s(),e.j41(17,"ion-item",12)(18,"ion-label",13),e.bIt("click",function(){return e.eBV(s),e.Njj(t.send_noti_to_server())}),e.EFF(19),e.k0s()(),e.j41(20,"ion-item-divider")(21,"ion-label"),e.EFF(22),e.k0s(),e.j41(23,"table",14)(24,"tr")(25,"td",15),e.bIt("click",function(){return e.eBV(s),e.Njj(t.change_user_list_page(-1))}),e.nrm(26,"ion-icon",16),e.k0s(),e.j41(27,"td"),e.EFF(28),e.k0s(),e.j41(29,"td"),e.EFF(30,"/"),e.k0s(),e.j41(31,"td"),e.EFF(32),e.k0s(),e.j41(33,"td",15),e.bIt("click",function(){return e.eBV(s),e.Njj(t.change_user_list_page(1))}),e.nrm(34,"ion-icon",17),e.k0s()()()(),e.j41(35,"ion-accordion-group",null,0),e.DNE(37,M,30,13,"div",18),e.k0s(),e.j41(38,"ion-item-divider")(39,"ion-label"),e.EFF(40),e.k0s(),e.j41(41,"table",14)(42,"tr")(43,"td",15),e.bIt("click",function(){return e.eBV(s),e.Njj(t.change_group_list_page(-1))}),e.nrm(44,"ion-icon",16),e.k0s(),e.j41(45,"td"),e.EFF(46),e.k0s(),e.j41(47,"td"),e.EFF(48,"/"),e.k0s(),e.j41(49,"td"),e.EFF(50),e.k0s(),e.j41(51,"td",15),e.bIt("click",function(){return e.eBV(s),e.Njj(t.change_group_list_page(1))}),e.nrm(52,"ion-icon",17),e.k0s()()()(),e.j41(53,"ion-accordion-group",null,1),e.DNE(55,V,40,17,"div",18),e.k0s()()}2&i&&(e.R7$(3),e.JRh(t.lang.text.Settings.ServerAdmin),e.R7$(4),e.Y8G("ngIf",t.servers.length),e.R7$(3),e.JRh(t.lang.text.AdminTools.GlobalNoti),e.R7$(2),e.Y8G("label",t.lang.text.AdminTools.ImageURL),e.R50("ngModel",t.notification.uri),e.Y8G("placeholder",t.lang.text.AdminTools.EnterURI),e.R7$(2),e.R50("ngModel",t.notification.persistent),e.R7$(),e.JRh(t.lang.text.AdminTools.isPersistent),e.R7$(),e.R50("ngModel",t.notification.msg),e.Y8G("placeholder",t.lang.text.AdminTools.NoNotiMsg),e.R7$(),e.Y8G("disabled",t.is_sending||!t.notification.msg&&!t.notification.uri),e.R7$(2),e.JRh(t.lang.text.AdminTools.Send),e.R7$(3),e.JRh(t.lang.text.AdminTools.UserList),e.R7$(6),e.JRh(t.current_user_page),e.R7$(4),e.JRh(t.all_user_page),e.R7$(5),e.Y8G("ngForOf",t.current_user_size),e.R7$(3),e.JRh(t.lang.text.AdminTools.GroupList),e.R7$(6),e.JRh(t.current_group_page),e.R7$(4),e.JRh(t.all_group_page),e.R7$(5),e.Y8G("ngForOf",t.current_group_size))},dependencies:[p.Sq,p.bT,h.me,h.BC,h.vS,c.xk,c.YH,c.QW,c.eY,c.W9,c.eU,c.iq,c.$w,c.uz,c.Dg,c.he,c.BC,c.ai,c.hB,c.Gw,c.el],styles:[".icon_style[_ngcontent-%COMP%]{width:22px;height:22px;transform:translateY(2px);margin-left:4px;margin-right:4px}"]}),_})()}];let L=(()=>{var l;class _{}return(l=_).\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[v.iI.forChild(w),v.iI]}),_})(),D=(()=>{var l;class _{}return(l=_).\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[p.MD,h.YN,c.bv,L]}),_})()}}]);