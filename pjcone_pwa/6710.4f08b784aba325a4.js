"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6710],{6710:(J,f,u)=>{u.r(f),u.d(f,{AdminToolsPageModule:()=>K});var h=u(1368),m=u(4716),c=u(5624),G=u(3332),p=u(1528),T=u(2272),e=u(4496),C=u(4500),v=u(7136),k=u(3824),y=u(9240),I=u(4180),A=u(7756),x=u(4668),O=u(5020);const E=["UserSel"],P=["GroupSel"];function b(a,_){if(1&a){const o=e.KQA();e.I0R(0,"ion-item",23),e.qCj("click",function(){const s=e.usT(o).index,r=e.GaO(2);return e.CGJ(r.select_server(s))}),e.I0R(1,"ion-label"),e.OEk(2),e.C$Y()()}if(2&a){const o=_.$implicit;e.yG2(2),e.cNF(o.name)}}function R(a,_){if(1&a){const o=e.KQA();e.I0R(0,"ion-accordion-group",15,16),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.isExpanded=!0)}),e.I0R(2,"ion-accordion",17)(3,"ion-item",18)(4,"ion-label"),e.OEk(5),e.C$Y(),e.I0R(6,"ion-label",19),e.OEk(7),e.C$Y(),e.wR5(8,"ion-icon",20),e.C$Y(),e.I0R(9,"div",21),e.yuY(10,b,3,1,"ion-item",22),e.C$Y()()()}if(2&a){const o=e.GaO();e.E7m("value",o.isExpanded),e.yG2(5),e.cNF(o.lang.text.AddGroup.SelectServer),e.yG2(2),e.cNF(o.servers[o.index].name),e.yG2(3),e.E7m("ngForOf",o.servers)}}function $(a,_){if(1&a&&e.wR5(0,"img",35),2&a){const o=e.GaO().$implicit,i=e.GaO();e.E7m("src",i.all_users[o].img,e.K6U)}}function Y(a,_){if(1&a){const o=e.KQA();e.I0R(0,"ion-item")(1,"ion-checkbox",38),e.iHE("ngModelChange",function(t){const r=e.usT(o).$implicit,n=e.GaO(2).$implicit,l=e.GaO();return e.kNx(l.PromotableGroup[l.all_users[n].id||l.all_users[n].user_id][r].promoted,t)||(l.PromotableGroup[l.all_users[n].id||l.all_users[n].user_id][r].promoted=t),e.CGJ(t)}),e.OEk(2),e.C$Y()()}if(2&a){const o=_.$implicit,i=e.GaO(2).$implicit,t=e.GaO();e.yG2(),e.OKB("ngModel",t.PromotableGroup[t.all_users[i].id||t.all_users[i].user_id][o].promoted),e.yG2(),e.cNF(t.PromotableGroup[t.all_users[i].id||t.all_users[i].user_id][o].name||"["+t.lang.text.AdminTools.RemovedGroup+"]")}}const F=()=>({});function S(a,_){if(1&a){const o=e.KQA();e.I0R(0,"ion-accordion-group",null,36)(2,"ion-accordion",24)(3,"ion-item",25)(4,"ion-label"),e.OEk(5),e.C$Y()(),e.I0R(6,"div",21)(7,"ion-item",23),e.qCj("click",function(){e.usT(o);const t=e.GaO().$implicit,s=e.GaO();return e.CGJ(s.promote_toggle_all_group(s.all_users[t]))}),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y()(),e.yuY(10,Y,3,2,"ion-item",13),e.I0R(11,"ion-item",23),e.qCj("click",function(){e.usT(o);const t=e.GaO().$implicit,s=e.GaO();return e.CGJ(s.promote_as_manager(s.all_users[t]))}),e.I0R(12,"ion-label",37),e.OEk(13),e.C$Y()()()()()}if(2&a){const o=e.GaO().$implicit,i=e.GaO();e.yG2(2),e.E7m("value",i.all_users[o].id||i.all_users[o].user_id),e.yG2(3),e.cNF(i.lang.text.AdminTools.promote_as_manager),e.yG2(4),e.cNF(i.lang.text.AdminTools.ToggleAllPromote),e.yG2(),e.E7m("ngForOf",(i.PromotableGroup[i.all_users[o].id||i.all_users[o].user_id]||e.q4q(5,F)).keys),e.yG2(3),e.cNF(i.lang.text.AdminTools.Apply)}}function N(a,_){if(1&a){const o=e.KQA();e.I0R(0,"div")(1,"ion-accordion",24)(2,"ion-item",25)(3,"div",26),e.yuY(4,$,1,1,"img",27),e.C$Y(),e.wR5(5,"div",28),e.I0R(6,"ion-label",29),e.OEk(7),e.C$Y(),e.wR5(8,"ion-icon",20),e.C$Y(),e.I0R(9,"div",21)(10,"ion-item",9),e.qCj("click",function(){const s=e.usT(o).$implicit,r=e.GaO();return e.CGJ(r.copy_id(r.all_users[s].id||r.all_users[s].user_id))}),e.I0R(11,"ion-label",30),e.OEk(12),e.C$Y()(),e.I0R(13,"ion-item",31)(14,"ion-label"),e.OEk(15),e.C$Y(),e.I0R(16,"ion-label",32),e.OEk(17),e.C$Y()(),e.I0R(18,"ion-item",31)(19,"ion-label"),e.OEk(20),e.C$Y(),e.I0R(21,"ion-label",32),e.OEk(22),e.C$Y()(),e.yuY(23,S,14,6,"ion-accordion-group",33),e.I0R(24,"ion-item",23),e.qCj("click",function(){const s=e.usT(o).$implicit,r=e.GaO();return e.CGJ(r.start_private_chat(r.all_users[s]))}),e.I0R(25,"ion-label"),e.OEk(26),e.C$Y()(),e.I0R(27,"ion-item",23),e.qCj("click",function(){const s=e.usT(o).$implicit,r=e.GaO();return e.CGJ(r.remove_user(r.all_users[s]))}),e.I0R(28,"ion-label",34),e.OEk(29),e.C$Y()()()()()}if(2&a){const o=_.$implicit,i=e.GaO();e.yG2(),e.E7m("value",i.all_users[o].id||i.all_users[o].user_id),e.yG2(3),e.E7m("ngIf",i.all_users[o].img),e.yG2(),e.m_g("background-color: "+i.statusBar.colors[void 0===i.all_users[o].online?"pending":i.all_users[o].online?"online":"offline"]),e.yG2(2),e.cNF(i.all_users[o].display_name||i.lang.text.Profile.noname_user),e.yG2(5),e.cNF(i.all_users[o].id||i.all_users[o].user_id),e.yG2(3),e.cNF(i.lang.text.AdminTools.UserCreate),e.yG2(2),e.cNF(i.all_users[o].display_created),e.yG2(3),e.cNF(i.lang.text.AddGroup.LanguageTag),e.yG2(2),e.cNF(i.all_users[o].lang_tag),e.yG2(),e.E7m("ngIf",i.PromotableGroup[i.all_users[o].id||i.all_users[o].user_id]),e.yG2(3),e.cNF(i.lang.text.OtherProfile.privacy_chat),e.yG2(3),e.cNF(i.lang.text.AdminTools.ForceLeave)}}function M(a,_){if(1&a&&e.wR5(0,"img",35),2&a){const o=e.GaO().$implicit,i=e.GaO();e.E7m("src",i.all_groups[o].img,e.K6U)}}function w(a,_){if(1&a&&e.wR5(0,"img",35),2&a){const o=e.GaO().$implicit,i=e.GaO(2);e.E7m("src",o.is_me?i.nakama.users.self.img:i.nakama.users[i.isOfficial][i.target][o.user.id].img,e.K6U)}}function j(a,_){if(1&a){const o=e.KQA();e.I0R(0,"div")(1,"ion-item",23),e.qCj("click",function(){const s=e.usT(o).$implicit,r=e.GaO(2);return r.copy_id(s.user.id),e.CGJ(r.find_current_user_id(s.user.id))}),e.I0R(2,"div",26),e.yuY(3,w,1,1,"img",27),e.C$Y(),e.I0R(4,"ion-label"),e.OEk(5),e.C$Y()()()}if(2&a){const o=_.$implicit,i=e.GaO(2);e.yG2(3),e.E7m("ngIf",o.is_me?i.nakama.users.self.img:i.nakama.users[i.isOfficial][i.target][o.user.id].img),e.yG2(2),e.cNF((o.is_me?i.nakama.users.self.display_name:o.user.display_name)||i.lang.text.Profile.noname_user)}}function L(a,_){if(1&a){const o=e.KQA();e.I0R(0,"div")(1,"ion-accordion",24)(2,"ion-item",25)(3,"div",26),e.yuY(4,M,1,1,"img",27),e.C$Y(),e.wR5(5,"div",28),e.I0R(6,"ion-label",29),e.OEk(7),e.C$Y(),e.wR5(8,"ion-icon",20),e.C$Y(),e.I0R(9,"div",21)(10,"ion-item",9),e.qCj("click",function(){const s=e.usT(o).$implicit,r=e.GaO();return e.CGJ(r.copy_id(r.all_groups[s].id))}),e.I0R(11,"ion-label",30),e.OEk(12),e.C$Y()(),e.I0R(13,"ion-item",31)(14,"ion-label"),e.OEk(15),e.C$Y(),e.I0R(16,"ion-label",32),e.OEk(17),e.C$Y()(),e.I0R(18,"ion-item",9),e.qCj("click",function(){const s=e.usT(o).$implicit,r=e.GaO();return r.copy_id(r.all_groups[s].creator_id),e.CGJ(r.find_current_user_id(r.all_groups[s].creator_id))}),e.I0R(19,"ion-label",39),e.OEk(20),e.C$Y(),e.I0R(21,"ion-label",40),e.OEk(22),e.C$Y()(),e.I0R(23,"ion-accordion-group",null,41)(25,"ion-accordion",24)(26,"ion-item",25)(27,"ion-label"),e.OEk(28),e.C$Y(),e.I0R(29,"ion-label",32),e.OEk(30),e.C$Y()(),e.I0R(31,"div",21),e.yuY(32,j,6,2,"div",13),e.C$Y()()(),e.I0R(33,"ion-item-divider")(34,"ion-label"),e.OEk(35),e.C$Y()(),e.I0R(36,"textarea",42),e.iHE("ngModelChange",function(t){const r=e.usT(o).$implicit,n=e.GaO();return e.kNx(n.all_groups[r].description,t)||(n.all_groups[r].description=t),e.CGJ(t)}),e.C$Y(),e.I0R(37,"ion-item",23),e.qCj("click",function(){const s=e.usT(o).$implicit,r=e.GaO();return e.CGJ(r.force_breakup_group(r.all_groups[s]))}),e.I0R(38,"ion-label",34),e.OEk(39),e.C$Y()()()()()}if(2&a){const o=_.$implicit,i=e.GaO();e.yG2(),e.E7m("value",i.all_groups[o].name),e.yG2(3),e.E7m("ngIf",i.all_groups[o].img),e.yG2(),e.m_g("background-color: "+i.statusBar.colors[i.all_groups[o].open?"online":"pending"]),e.yG2(2),e.cNF(i.all_groups[o].name),e.yG2(5),e.cNF(i.all_groups[o].id),e.yG2(3),e.cNF(i.lang.text.AddGroup.LanguageTag),e.yG2(2),e.cNF(i.all_groups[o].lang_tag),e.yG2(3),e.cNF(i.lang.text.AdminTools.GroupCreator),e.yG2(2),e.oRS(" ",(i.nakama.users[i.isOfficial][i.target][i.all_groups[o].creator_id]?i.nakama.users[i.isOfficial][i.target][i.all_groups[o].creator_id].display_name:i.nakama.users.self.display_name)||i.lang.text.Profile.noname_user," "),e.yG2(3),e.E7m("value",i.all_groups[o].name+"_user"),e.yG2(3),e.cNF(i.lang.text.AdminTools.GroupUserCounter),e.yG2(2),e.cNF(i.all_groups[o].edge_count+" / "+i.all_groups[o].max_count),e.yG2(2),e.E7m("ngForOf",i.all_groups[o].users),e.yG2(3),e.cNF(i.lang.text.AddGroup.GroupDetail_placeholder),e.yG2(),e.OKB("ngModel",i.all_groups[o].description),e.yG2(3),e.cNF(i.lang.text.AdminTools.ForceBreakUp)}}const U=[{path:"",component:(()=>{var a;class _{constructor(i,t,s,r,n,l,g,d,Z,B){this.lang=i,this.nakama=t,this.p5toast=s,this.alertCtrl=r,this.statusBar=n,this.mClipboard=l,this.indexed=g,this.global=d,this.navCtrl=Z,this.loadingCtrl=B,this.servers=[],this.index=0,this.isExpanded=!0,this.notification={uri:"",msg:""},this.is_sending=!1,this.all_users=[],this.current_user_page=1,this.all_user_page=1,this.current_user_size=[],this.all_groups=[],this.current_group_page=1,this.all_group_page=1,this.current_group_size=[],this.LIST_PAGE_SIZE=5,this.PromotableGroup={}}select_server(i){this.index=i,this.isOfficial=this.servers[i].isOfficial,this.target=this.servers[i].target,this.isExpanded=!1,this.refresh_all_user(),this.refresh_all_groups()}ngOnInit(){this.servers=this.nakama.get_all_server_info(!0,!0);for(let i=this.servers.length-1;i>=0;i--)this.servers[i].is_admin||this.servers.splice(i,1);this.select_server(0)}ionViewDidEnter(){this.global.p5key.KeyShortCut.Escape=()=>{this.navCtrl.pop()}}send_noti_to_server(){this.notification.msg||this.notification.uri?(this.is_sending=!0,this.notification.msg=encodeURIComponent(this.notification.msg),this.notification.uri=encodeURIComponent(this.notification.uri),this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"send_noti_all_fn",this.notification).then(i=>{this.notification.msg="",this.notification.uri="",this.is_sending=!1}).catch(i=>{console.log("send_noti_to_server: ",i),this.is_sending=!1})):this.p5toast.show({text:this.lang.text.AdminTools.NoNotiMsg})}refresh_all_user(){this.all_users.length=0,this.current_user_size.length=0,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"query_all_users",{}).then(i=>{this.all_users=i.payload;for(let t=0,s=this.all_users.length;t<s;t++){this.nakama.save_other_user(this.all_users[t],this.isOfficial,this.target);let r=this.all_users[t].id||this.all_users[t].user_id;if(this.all_users[t]={...this.all_users[t],...this.nakama.load_other_user(r,this.isOfficial,this.target)},"object"==typeof this.all_users[t].metadata&&void 0!==this.all_users[t].metadata.is_manager)for(let l=0,g=this.all_users[t].metadata.is_manager.length;l<g&&void 0!==this.all_users[t].metadata.is_manager;t++)this.PromotableGroup[r]||(this.PromotableGroup[r]={}),this.PromotableGroup[r][this.all_users[t].metadata.is_manager[l]]?this.PromotableGroup[r][this.all_users[t].metadata.is_manager[l]].promoted=!0:this.PromotableGroup[r][this.all_users[t].metadata.is_manager[l]]={promoted:!0};let n=new Date(this.all_users[t].create_time).getTime()-60*(new Date).getTimezoneOffset()*1e3;this.all_users[t].display_created=new Date(n).toISOString().split(".")[0]}this.all_user_page=Math.ceil(this.all_users.length/this.LIST_PAGE_SIZE),this.current_user_page=0,this.change_user_list_page(1)}).catch(i=>{console.error("\uc0ac\uc6a9\uc790 \ub9ac\uc2a4\ud2b8 \ub3cc\ub824\ubc1b\uae30 \uc624\ub958: ",i)})}promote_as_manager(i){if("object"==typeof i.metadata){let t=i.metadata,s=[],r=i.id||i.user_id,n=Object.keys(this.PromotableGroup[r]);for(let l=0,g=n.length;l<g;l++)this.PromotableGroup[r][n[l]].promoted&&s.push(n[l]);s.length?t.is_manager=s:delete t.is_manager,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"update_user_metadata_fn",{user_id:r,metadata:t}).then(l=>{this.p5toast.show({text:this.lang.text.AdminTools.PromoteAsWell})}).catch(l=>{this.p5toast.show({text:this.lang.text.AdminTools.PromoteError})})}else this.p5toast.show({text:this.lang.text.AdminTools.AlreadyAdmin})}promote_toggle_all_group(i){let t=i.id||i.user_id;this.PromotableGroup[t].toggle_log=!this.PromotableGroup[t].toggle_log,this.PromotableGroup[t].keys.forEach(s=>{this.PromotableGroup[t][s].promoted=this.PromotableGroup[t].toggle_log})}refresh_all_groups(){this.all_groups.length=0,this.current_group_size.length=0,this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"query_all_groups",{}).then(i=>{this.all_groups=i.payload;for(let s=0,r=this.all_groups.length;s<r;s++){for(let n=0,l=this.all_groups[s].users.length;n<l;n++){let g=this.all_groups[s].users[n].user.id||this.all_groups[s].users[n].user.user_id,d=this.all_groups[s].id||this.all_groups[s].group_id;this.PromotableGroup[g]||(this.PromotableGroup[g]={}),this.PromotableGroup[g][d]||(this.PromotableGroup[g][d]={promoted:!1}),this.PromotableGroup[g][d].name=this.all_groups[s].name,this.all_groups[s].users[n].user.user_id==this.nakama.servers[this.isOfficial][this.target].session.user_id?(this.all_groups[s].users[n].is_me=!0,this.all_groups[s].users[n].user=this.nakama.users.self):this.all_groups[s].users[n].user=this.nakama.load_other_user(this.all_groups[s].users[n].user.user_id,this.isOfficial,this.target)}this.indexed.loadTextFromUserPath(`servers/${this.isOfficial}/${this.target}/groups/${this.all_groups[s].id}.img`,(n,l)=>{n&&l&&(this.all_groups[s].img=l)})}Object.keys(this.PromotableGroup).forEach(s=>{let r=Object.keys(this.PromotableGroup[s]);this.PromotableGroup[s].keys=r}),this.all_group_page=Math.ceil(this.all_groups.length/this.LIST_PAGE_SIZE),this.current_group_page=0,this.change_group_list_page(1)}).catch(i=>{console.error("\uadf8\ub8f9 \ub9ac\uc2a4\ud2b8 \ub3cc\ub824\ubc1b\uae30 \uc624\ub958: ",i)})}find_current_user_id(i){for(let t=0,s=this.all_users.length;t<s;t++)if(this.all_users[t].id==i){this.current_user_page=Math.floor(t/5),this.change_user_list_page(1);break}this.UserSel.value=i}force_breakup_group(i){this.alertCtrl.create({header:i.name,message:this.lang.text.AdminTools.ForceBreakUp,buttons:[{text:this.lang.text.GroupDetail.BreakupGroup,cssClass:"red_font",handler:()=>{this.ForceBreakupGroupAct(i)}}]}).then(t=>t.present())}ForceBreakupGroupAct(i){this.nakama.servers[this.isOfficial][this.target].client.rpc(this.nakama.servers[this.isOfficial][this.target].session,"force_remove_group",{group_id:i.id}).then(t=>{this.p5toast.show({text:`${this.lang.text.AdminTools.ForceBreaked}: ${i.name}`}),this.refresh_all_user(),this.refresh_all_groups()}).catch(t=>{console.log("force_breakup_group: ",t),this.p5toast.show({text:`${this.lang.text.AdminTools.ForceBreakedFailed}: ${t.statusText}`})})}change_user_list_page(i){switch(i){case 1:if(this.current_user_page<this.all_user_page){this.current_user_page+=1,this.current_user_size=Array(this.current_user_page==this.all_user_page?this.all_users.length%this.LIST_PAGE_SIZE==0?this.LIST_PAGE_SIZE:this.all_users.length%this.LIST_PAGE_SIZE:this.LIST_PAGE_SIZE);for(let t=0,s=this.current_user_size.length;t<s;t++)this.current_user_size[t]=(this.current_user_page-1)*this.LIST_PAGE_SIZE+t}break;case-1:if(this.current_user_page-1>0){this.current_user_page-=1,this.current_user_size=Array(this.LIST_PAGE_SIZE);for(let t=0,s=this.current_user_size.length;t<s;t++)this.current_user_size[t]=(this.current_user_page-1)*this.LIST_PAGE_SIZE+t}}this.UserSel.value=void 0}change_group_list_page(i){switch(i){case 1:if(this.current_group_page<this.all_group_page){this.current_group_page+=1,this.current_group_size=Array(this.current_group_page==this.all_group_page?this.all_groups.length%this.LIST_PAGE_SIZE==0?this.LIST_PAGE_SIZE:this.all_groups.length%this.LIST_PAGE_SIZE:this.LIST_PAGE_SIZE);for(let t=0,s=this.current_group_size.length;t<s;t++)this.current_group_size[t]=(this.current_group_page-1)*this.LIST_PAGE_SIZE+t}break;case-1:if(this.current_group_page-1>0){this.current_group_page-=1,this.current_group_size=Array(this.LIST_PAGE_SIZE);for(let t=0,s=this.current_group_size.length;t<s;t++)this.current_group_size[t]=(this.current_group_page-1)*this.LIST_PAGE_SIZE+t}}this.GroupSel.value=void 0}start_private_chat(i){var t=this;return(0,p.c)(function*(){let s=yield t.nakama.join_chat_with_modulation(i.user_id||i.id,2,t.isOfficial,t.target,!0);t.nakama.go_to_chatroom_without_admob_act(s)})()}copy_id(i){this.mClipboard.copy(i).catch(t=>T.c.write(i))}remove_user(i){var s,t=this;this.alertCtrl.create({header:i.display_name||this.lang.text.Profile.noname_user,message:this.lang.text.AdminTools.ForceLeave,buttons:[{text:this.lang.text.AdminTools.ApplyLeave,cssClass:"red_font",handler:(s=(0,p.c)(function*(){let r=yield t.loadingCtrl.create({message:t.lang.text.TodoDetail.WIP});r.present(),yield t.RemoveUser(i),r.dismiss()}),function(){return s.apply(this,arguments)})}]}).then(s=>s.present())}RemoveUser(i){var t=this;return(0,p.c)(function*(){try{yield t.nakama.servers[t.isOfficial][t.target].client.rpc(t.nakama.servers[t.isOfficial][t.target].session,"remove_account_fn",{user_id:i.user_id||i.id}),t.p5toast.show({text:`${t.lang.text.AdminTools.UserLeaved}: ${i.display_name||t.lang.text.Profile.noname_user}`}),t.refresh_all_user(),t.refresh_all_groups()}catch(s){console.log("remove_user: ",s),t.p5toast.show({text:`${t.lang.text.AdminTools.UserLeavedFailed}: ${s.statusText}`})}})()}ionViewWillLeave(){delete this.global.p5key.KeyShortCut.Escape}}return(a=_).\u0275fac=function(i){return new(i||a)(e.GI1(C.o),e.GI1(v.h),e.GI1(k.O),e.GI1(c.iW),e.GI1(I.Y),e.GI1(A._),e.GI1(x.k),e.GI1(O.A1),e.GI1(y.wX),e.GI1(c.Kg))},a.\u0275cmp=e.In1({type:a,selectors:[["app-admin-tools"]],viewQuery:function(i,t){if(1&i&&(e.CC$(E,5),e.CC$(P,5)),2&i){let s;e.wto(s=e.Gqi())&&(t.UserSel=s.first),e.wto(s=e.Gqi())&&(t.GroupSel=s.first)}},decls:53,vars:18,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],["value","colors","expand","inset",3,"value","click",4,"ngIf"],[1,"ion-text-end",3,"label","ngModel","placeholder","ngModelChange"],[1,"infobox","content_size",3,"ngModel","placeholder","ngModelChange"],["button","",3,"disabled"],[1,"ion-text-center",3,"click"],["slot","end",2,"margin-right","8px"],[3,"click"],["slot","start","name","arrow-back-circle-outline",1,"icon_style"],["slot","start","name","arrow-forward-circle-outline",1,"icon_style"],["UserSel",""],[4,"ngFor","ngForOf"],["GroupSel",""],["value","colors","expand","inset",3,"value","click"],["accordionGroup",""],["value","colors"],["slot","header"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["slot","content"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[3,"value"],["button","","slot","header"],[1,"additional_form","bg_img_form"],["class","profile_img",3,"src",4,"ngIf"],[1,"additional_form","status_bar_single"],[1,"form_margin"],["color","medium","text-wrap","",1,"ion-text-center"],["disabled",""],[1,"ion-text-end"],[4,"ngIf"],["color","danger",1,"ion-text-center"],[1,"profile_img",3,"src"],["PromoteSel",""],[1,"ion-text-center"],[3,"ngModel","ngModelChange"],["color","medium"],["color","medium",1,"ion-text-end"],["GroupUserSel",""],["disabled","",1,"infobox",3,"ngModel","ngModelChange"]],template:function(i,t){1&i&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.OEk(3),e.C$Y(),e.I0R(4,"ion-buttons",1),e.wR5(5,"ion-back-button",2),e.C$Y()()(),e.I0R(6,"ion-content"),e.yuY(7,R,11,4,"ion-accordion-group",3),e.I0R(8,"ion-item-divider")(9,"ion-label"),e.OEk(10),e.C$Y()(),e.I0R(11,"ion-item")(12,"ion-input",4),e.iHE("ngModelChange",function(r){return e.kNx(t.notification.uri,r)||(t.notification.uri=r),r}),e.C$Y()(),e.I0R(13,"textarea",5),e.iHE("ngModelChange",function(r){return e.kNx(t.notification.msg,r)||(t.notification.msg=r),r}),e.C$Y(),e.I0R(14,"ion-item",6)(15,"ion-label",7),e.qCj("click",function(){return t.send_noti_to_server()}),e.OEk(16),e.C$Y()(),e.I0R(17,"ion-item-divider")(18,"ion-label"),e.OEk(19),e.C$Y(),e.I0R(20,"table",8)(21,"tr")(22,"td",9),e.qCj("click",function(){return t.change_user_list_page(-1)}),e.wR5(23,"ion-icon",10),e.C$Y(),e.I0R(24,"td"),e.OEk(25),e.C$Y(),e.I0R(26,"td"),e.OEk(27,"/"),e.C$Y(),e.I0R(28,"td"),e.OEk(29),e.C$Y(),e.I0R(30,"td",9),e.qCj("click",function(){return t.change_user_list_page(1)}),e.wR5(31,"ion-icon",11),e.C$Y()()()(),e.I0R(32,"ion-accordion-group",null,12),e.yuY(34,N,30,13,"div",13),e.C$Y(),e.I0R(35,"ion-item-divider")(36,"ion-label"),e.OEk(37),e.C$Y(),e.I0R(38,"table",8)(39,"tr")(40,"td",9),e.qCj("click",function(){return t.change_group_list_page(-1)}),e.wR5(41,"ion-icon",10),e.C$Y(),e.I0R(42,"td"),e.OEk(43),e.C$Y(),e.I0R(44,"td"),e.OEk(45,"/"),e.C$Y(),e.I0R(46,"td"),e.OEk(47),e.C$Y(),e.I0R(48,"td",9),e.qCj("click",function(){return t.change_group_list_page(1)}),e.wR5(49,"ion-icon",11),e.C$Y()()()(),e.I0R(50,"ion-accordion-group",null,14),e.yuY(52,L,40,17,"div",13),e.C$Y()()),2&i&&(e.yG2(3),e.cNF(t.lang.text.Settings.ServerAdmin),e.yG2(4),e.E7m("ngIf",t.servers.length),e.yG2(3),e.cNF(t.lang.text.AdminTools.GlobalNoti),e.yG2(2),e.E7m("label",t.lang.text.AdminTools.ImageURL),e.OKB("ngModel",t.notification.uri),e.E7m("placeholder",t.lang.text.AdminTools.EnterURI),e.yG2(),e.OKB("ngModel",t.notification.msg),e.E7m("placeholder",t.lang.text.AdminTools.NoNotiMsg),e.yG2(),e.E7m("disabled",t.is_sending||!t.notification.msg&&!t.notification.uri),e.yG2(2),e.cNF(t.lang.text.AdminTools.Send),e.yG2(3),e.cNF(t.lang.text.AdminTools.UserList),e.yG2(6),e.cNF(t.current_user_page),e.yG2(4),e.cNF(t.all_user_page),e.yG2(5),e.E7m("ngForOf",t.current_user_size),e.yG2(3),e.cNF(t.lang.text.AdminTools.GroupList),e.yG2(6),e.cNF(t.current_group_page),e.yG2(4),e.cNF(t.all_group_page),e.yG2(5),e.E7m("ngForOf",t.current_group_size))},dependencies:[h.ay,h.u_,m.ot,m.ue,m._G,c.cm,c.qU,c.GS,c.ew,c._i,c.wB,c.Ko,c.A5,c.Yb,c.S8,c.QR,c.tM,c.Md,c.UJ,c.qG,c.Im],styles:[".icon_style[_ngcontent-%COMP%]{width:22px;height:22px;transform:translateY(2px);margin-left:4px;margin-right:4px}"]}),_})()}];let z=(()=>{var a;class _{}return(a=_).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[G.qQ.forChild(U),G.qQ]}),_})(),K=(()=>{var a;class _{}return(a=_).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[h.MD,m.y,c.wZ,z]}),_})()}}]);