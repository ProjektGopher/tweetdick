import{o as s,b as o,d as t,e as b,n as p,j as l,t as v,k as x,l as F,m as P,p as J,q as h,s as T,v as M,f as a,w as r,T as E,L as C,r as c,i as g,H,u as d,F as j,x as S}from"./vendor.099de951.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const O={},V={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I=t("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),q=t("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),R=[I,q];function U(e,n){return s(),o("svg",V,R)}var G=_(O,[["render",U]]);const K=b({data(){return{show:!0}},computed:{style(){var e;return((e=this.$page.props.jetstream.flash)==null?void 0:e.bannerStyle)||"success"},message(){var e;return((e=this.$page.props.jetstream.flash)==null?void 0:e.banner)||""}}}),Q={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},W={class:"flex items-center justify-between flex-wrap"},X={class:"w-0 flex-1 flex items-center min-w-0"},Y={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Z=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ee=[Z],te={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},se=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),oe=[se],ne={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ae=t("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ie=[ae];function le(e,n,m,y,k,$){return s(),o("div",null,[e.show&&e.message?(s(),o("div",{key:0,class:p({"bg-indigo-500":e.style=="success","bg-red-700":e.style=="danger"})},[t("div",Q,[t("div",W,[t("div",X,[t("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":e.style=="success","bg-red-600":e.style=="danger"}])},[e.style=="success"?(s(),o("svg",Y,ee)):l("",!0),e.style=="danger"?(s(),o("svg",te,oe)):l("",!0)],2),t("p",ne,v(e.message),1)]),t("div",re,[t("button",{type:"button",class:p(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":e.style=="success","hover:bg-red-600 focus:bg-red-600":e.style=="danger"}]),"aria-label":"Dismiss",onClick:n[0]||(n[0]=x(u=>e.show=!1,["prevent"]))},ie,2)])])])],2)):l("",!0)])}var de=_(K,[["render",le]]);const ue=b({props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(){let e=F(!1);const n=m=>{e.value&&m.key==="Escape"&&(e.value=!1)};return P(()=>document.addEventListener("keydown",n)),J(()=>document.removeEventListener("keydown",n)),{open:e}},computed:{widthClass(){return{"48":"w-48"}[this.width.toString()]},alignmentClasses(){return this.align==="left"?"origin-top-left left-0":this.align==="right"?"origin-top-right right-0":"origin-top"}}}),ce={class:"relative"};function pe(e,n,m,y,k,$){return s(),o("div",ce,[t("div",{onClick:n[0]||(n[0]=u=>e.open=!e.open)},[h(e.$slots,"trigger")]),T(t("div",{class:"fixed inset-0 z-40",onClick:n[1]||(n[1]=u=>e.open=!1)},null,512),[[M,e.open]]),a(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[T(t("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[e.widthClass,e.alignmentClasses]]),style:{display:"none"},onClick:n[2]||(n[2]=u=>e.open=!1)},[t("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",e.contentClasses])},[h(e.$slots,"content")],2)],2),[[M,e.open]])]),_:3})])}var he=_(ue,[["render",pe]]);const ge=b({components:{Link:C},props:["href","as"]}),me={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},fe=["href"];function ve(e,n,m,y,k,$){const u=c("Link");return s(),o("div",null,[e.as=="button"?(s(),o("button",me,[h(e.$slots,"default")])):e.as=="a"?(s(),o("a",{key:1,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[h(e.$slots,"default")],8,fe)):(s(),g(u,{key:2,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:r(()=>[h(e.$slots,"default")]),_:3},8,["href"]))])}var _e=_(ge,[["render",ve]]);const we=b({components:{Link:C},props:["href","active"],computed:{classes(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition"}}});function be(e,n,m,y,k,$){const u=c("Link");return s(),g(u,{href:e.href,class:p(e.classes)},{default:r(()=>[h(e.$slots,"default")]),_:3},8,["href","class"])}var ye=_(we,[["render",be]]);const ke=b({components:{Link:C},props:["active","href","as"],computed:{classes(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition"}}});function $e(e,n,m,y,k,$){const u=c("Link");return s(),o("div",null,[e.as=="button"?(s(),o("button",{key:0,class:p([e.classes,"w-full text-left"])},[h(e.$slots,"default")],2)):(s(),g(u,{key:1,href:e.href,class:p(e.classes)},{default:r(()=>[h(e.$slots,"default")]),_:3},8,["href","class"]))])}var xe=_(ke,[["render",$e]]);const je=b({props:{title:String},components:{Head:H,JetApplicationMark:G,JetBanner:de,JetDropdown:he,JetDropdownLink:_e,JetNavLink:ye,JetResponsiveNavLink:xe,Link:C},data(){return{showingNavigationDropdown:!1}},methods:{switchToTeam(e){this.$inertia.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},logout(){this.$inertia.post(route("logout"))}}}),Ce={class:"min-h-screen bg-gray-100"},Le={class:"bg-white border-b border-gray-100"},Te={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Me={class:"flex justify-between h-16"},Se={class:"flex"},Ne={class:"shrink-0 flex items-center"},De={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Be=d(" Dashboard "),ze={class:"hidden sm:flex sm:items-center sm:ml-6"},Ae={class:"ml-3 relative"},Fe={class:"inline-flex rounded-md"},Pe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},Je=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ee={class:"w-60"},He=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Oe=d(" Team Settings "),Ve=d(" Create New Team "),Ie=t("div",{class:"border-t border-gray-100"},null,-1),qe=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Re=["onSubmit"],Ue={class:"flex items-center"},Ge={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Ke=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Qe=[Ke],We={class:"ml-3 relative"},Xe={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ye=["src","alt"],Ze={key:1,class:"inline-flex rounded-md"},et={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},tt=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),st=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),ot=d(" Profile "),nt=d(" API Tokens "),rt=t("div",{class:"border-t border-gray-100"},null,-1),at=d(" Log Out "),it={class:"-mr-2 flex items-center sm:hidden"},lt={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},dt={class:"pt-2 pb-3 space-y-1"},ut=d(" Dashboard "),ct={class:"pt-4 pb-1 border-t border-gray-200"},pt={class:"flex items-center px-4"},ht={key:0,class:"shrink-0 mr-3"},gt=["src","alt"],mt={class:"font-medium text-base text-gray-800"},ft={class:"font-medium text-sm text-gray-500"},vt={class:"mt-3 space-y-1"},_t=d(" Profile "),wt=d(" API Tokens "),bt=d(" Log Out "),yt=t("div",{class:"border-t border-gray-200"},null,-1),kt=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),$t=d(" Team Settings "),xt=d(" Create New Team "),jt=t("div",{class:"border-t border-gray-200"},null,-1),Ct=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Lt=["onSubmit"],Tt={class:"flex items-center"},Mt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},St=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Nt=[St],Dt={key:0,class:"bg-white shadow"},Bt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"};function zt(e,n,m,y,k,$){const u=c("Head"),N=c("jet-banner"),D=c("jet-application-mark"),B=c("Link"),z=c("jet-nav-link"),w=c("jet-dropdown-link"),L=c("jet-dropdown"),f=c("jet-responsive-nav-link");return s(),o("div",null,[a(u,{title:e.title},null,8,["title"]),a(N),t("div",Ce,[t("nav",Le,[t("div",Te,[t("div",Me,[t("div",Se,[t("div",Ne,[a(B,{href:e.route("dashboard")},{default:r(()=>[a(D,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",De,[a(z,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[Be]),_:1},8,["href","active"])])]),t("div",ze,[t("div",Ae,[e.$page.props.jetstream.hasTeamFeatures?(s(),g(L,{key:0,align:"right",width:"60"},{trigger:r(()=>[t("span",Fe,[t("button",Pe,[d(v(e.$page.props.user.current_team.name)+" ",1),Je])])]),content:r(()=>[t("div",Ee,[e.$page.props.jetstream.hasTeamFeatures?(s(),o(j,{key:0},[He,a(w,{href:e.route("teams.show",e.$page.props.user.current_team)},{default:r(()=>[Oe]),_:1},8,["href"]),e.$page.props.jetstream.canCreateTeams?(s(),g(w,{key:0,href:e.route("teams.create")},{default:r(()=>[Ve]),_:1},8,["href"])):l("",!0),Ie,qe,(s(!0),o(j,null,S(e.$page.props.user.all_teams,i=>(s(),o("form",{key:i.id,onSubmit:x(A=>e.switchToTeam(i),["prevent"])},[a(w,{as:"button"},{default:r(()=>[t("div",Ue,[i.id==e.$page.props.user.current_team_id?(s(),o("svg",Ge,Qe)):l("",!0),t("div",null,v(i.name),1)])]),_:2},1024)],40,Re))),128))],64)):l("",!0)])]),_:1})):l("",!0)]),t("div",We,[a(L,{align:"right",width:"48"},{trigger:r(()=>[e.$page.props.jetstream.managesProfilePhotos?(s(),o("button",Xe,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Ye)])):(s(),o("span",Ze,[t("button",et,[d(v(e.$page.props.user.name)+" ",1),tt])]))]),content:r(()=>[st,a(w,{href:e.route("profile.show")},{default:r(()=>[ot]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(s(),g(w,{key:0,href:e.route("api-tokens.index")},{default:r(()=>[nt]),_:1},8,["href"])):l("",!0),rt,t("form",{onSubmit:n[0]||(n[0]=x((...i)=>e.logout&&e.logout(...i),["prevent"]))},[a(w,{as:"button"},{default:r(()=>[at]),_:1})],32)]),_:1})])]),t("div",it,[t("button",{onClick:n[1]||(n[1]=i=>e.showingNavigationDropdown=!e.showingNavigationDropdown),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"},[(s(),o("svg",lt,[t("path",{class:p({hidden:e.showingNavigationDropdown,"inline-flex":!e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:p({hidden:!e.showingNavigationDropdown,"inline-flex":e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:p([{block:e.showingNavigationDropdown,hidden:!e.showingNavigationDropdown},"sm:hidden"])},[t("div",dt,[a(f,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[ut]),_:1},8,["href","active"])]),t("div",ct,[t("div",pt,[e.$page.props.jetstream.managesProfilePhotos?(s(),o("div",ht,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,gt)])):l("",!0),t("div",null,[t("div",mt,v(e.$page.props.user.name),1),t("div",ft,v(e.$page.props.user.email),1)])]),t("div",vt,[a(f,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:r(()=>[_t]),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?(s(),g(f,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:r(()=>[wt]),_:1},8,["href","active"])):l("",!0),t("form",{method:"POST",onSubmit:n[2]||(n[2]=x((...i)=>e.logout&&e.logout(...i),["prevent"]))},[a(f,{as:"button"},{default:r(()=>[bt]),_:1})],32),e.$page.props.jetstream.hasTeamFeatures?(s(),o(j,{key:1},[yt,kt,a(f,{href:e.route("teams.show",e.$page.props.user.current_team),active:e.route().current("teams.show")},{default:r(()=>[$t]),_:1},8,["href","active"]),e.$page.props.jetstream.canCreateTeams?(s(),g(f,{key:0,href:e.route("teams.create"),active:e.route().current("teams.create")},{default:r(()=>[xt]),_:1},8,["href","active"])):l("",!0),jt,Ct,(s(!0),o(j,null,S(e.$page.props.user.all_teams,i=>(s(),o("form",{key:i.id,onSubmit:x(A=>e.switchToTeam(i),["prevent"])},[a(f,{as:"button"},{default:r(()=>[t("div",Tt,[i.id==e.$page.props.user.current_team_id?(s(),o("svg",Mt,Nt)):l("",!0),t("div",null,v(i.name),1)])]),_:2},1024)],40,Lt))),128))],64)):l("",!0)])])],2)]),e.$slots.header?(s(),o("header",Dt,[t("div",Bt,[h(e.$slots,"header")])])):l("",!0),t("main",null,[h(e.$slots,"default")])])])}var Pt=_(je,[["render",zt]]);export{Pt as A};
