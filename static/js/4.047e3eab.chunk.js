(this.webpackJsonpPRIC=this.webpackJsonpPRIC||[]).push([[4],{230:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n(5),s=n(233),o=n(236),d=n(228),j=n(232),l=n(234),b=n(235),h=n(165),u=n(166),m=n(205),O=n(202),g=n(172),f=n.n(g),x=n(21),p=n(238),v=n(229),w=n(173),S=n(2),R=Object(v.a)({root:{width:120}});function L(e){var t=R(),n=Object(r.useState)(!1),a=Object(c.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)(e.state),d=Object(c.a)(o,2),j=d[0],l=d[1],b=e.data,h=e.idx,u=Object(r.useState)(e.name),m=Object(c.a)(u,2),O=m[0],g=m[1],v=Object(w.useErrorHandler)();return Object(S.jsx)(p.a,{className:t.root,onClick:function(){s(!0),console.log("Working fine"),console.log(b[h].ActionURL),f.a.post(b[h].ActionURL).then((function(t){var n=t.data.Body.Listeners[0];b[h]=n,l(!j),e.action(Object(x.a)(b)),g(function(e){return"Activate"===e?"Deactivate":"Activate"}(O)),s(!1)})).catch((function(e){console.log(e),v(e)}))},loading:i,loadingIndicator:"Loading...",variant:"outlined",children:O})}var C=Object(O.a)(d.a)((function(e){var t;e.theme;return t={},Object(i.a)(t,"&.".concat(m.a.head),{backgroundColor:"black",color:"white",fontSize:16}),Object(i.a)(t,"&.".concat(m.a.body),{fontSize:44}),t})),B=function(){var e=Object(r.useState)(window.innerWidth),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(w.useErrorHandler)(),m=-1,O=Object(r.useState)([]),g=Object(c.a)(O,2),x=g[0],p=g[1],v=function(e){return!0===e?"Deactivate":"Activate"};return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){return a(window.innerWidth)})),f.a.get("https://staging-prutils.systempr.com/api/RabbitMQConnectionAPI/GetAllListeners").then((function(e){var t=e.data.Body.Listeners;p(t)})).catch((function(e){i(e)}))}),[i]),Object(S.jsx)(h.a,{children:Object(S.jsx)(u.a,{sx:{width:"100%",overflow:"hidden"},children:Object(S.jsx)(j.a,{sx:{maxHeight:500},children:Object(S.jsxs)(s.a,{stickyHeader:!0,"aria-label":"table",children:[Object(S.jsx)(l.a,{children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(C,{align:"center",children:"Listner"}),Object(S.jsx)(C,{align:"center",children:"Queue"}),Object(S.jsx)(C,{align:"center",children:"Application"}),n>620&&Object(S.jsx)(C,{align:"center",children:"Connection Type"}),Object(S.jsx)(C,{align:"center",children:"Connection Status"})]})}),Object(S.jsx)(o.a,{children:x.map((function(e){return Object(S.jsxs)(b.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(S.jsx)(d.a,{align:"center",component:"th",scope:"row",children:e.ListenerName}),Object(S.jsx)(d.a,{align:"center",children:e.QueueName}),Object(S.jsx)(d.a,{align:"center",children:e.Application}),n>620&&Object(S.jsx)(d.a,{align:"center",children:(r=e.IsPrimaryConnection,!0===r?"Primary":"Secondary")}),Object(S.jsx)(d.a,{align:"center",children:(t=e.IsActive,!0===t?"Active":"Inactive")}),Object(S.jsx)(d.a,{align:"center",children:Object(S.jsx)(L,{state:e.IsActive,name:v(e.IsActive),data:x,idx:++m,action:p})})]},e.ListenerName);var t,r}))})]})})})})},P=n(231),U=n(237),y=n(158),A=n(209),I=n.n(A),k=n(208),E=n.n(k),H=n(10);function N(e){var t=Object(H.f)(),n=Object(H.e)().search,a=new URLSearchParams(n).get("pid")?new URLSearchParams(n).get("id"):0,i=new URLSearchParams(n).get("pid")?new URLSearchParams(n).get("pid"):0,s=(new URLSearchParams(n).get("fname")&&new URLSearchParams(n).get("fname"),!!new URLSearchParams(n).get("isReffered")&&new URLSearchParams(n).get("isReffered")),o=new URLSearchParams(n).get("referrer")?new URLSearchParams(n).get("referrer"):"none",d={BreadCrumbs:[],HomeURL:"/",BackButtonURL:""},j={BreadCrumbName:e.cur_screen,BreadCrumbURL:"#"};d.BreadCrumbs.push(j);var l=Object(r.useState)(d),b=Object(c.a)(l,2),h=b[0],u=b[1];return Object(r.useEffect)((function(){f.a.get("https://staging-prutils.systempr.com/api/BreadCrumbsAPI/GetBreadCrumbs?id="+a.toString()+"&pid="+i.toString()+"&referrer="+o.toString()+"&IsReffered="+s.toString()+"&domain="+".com".toString()).then((function(e){if(e.data.Header.IsSuccess){var t=e.data.Body;u(t)}})).catch((function(e){console.log("Breadcrumbs ERROR")}))}),[]),Object(S.jsx)("div",{style:{padding:8,paddingTop:0},children:Object(S.jsxs)(P.a,{"aria-label":"breadcrumb",separator:"\u203a\u203a",sx:{width:"100%",overflow:"hidden"},children:[Object(S.jsx)(y.a,{variant:"contained",onClick:function(){return t(-1)},startIcon:Object(S.jsx)(E.a,{}),size:"small",children:"back"},"back"),Object(S.jsxs)(U.a,{underline:"hover",sx:{display:"flex",alignItems:"center"},color:"#588EE7",href:h.HomeURL,children:[Object(S.jsx)(I.a,{sx:{mr:.5},fontSize:"inherit"}),"Home"]},"home"),h.BreadCrumbs.map((function(e,t){return t!==h.BreadCrumbs.length-1?Object(S.jsx)(U.a,{underline:"hover",color:"#588EE7",href:e.BreadCrumbURL,children:e.BreadCrumbName},e.BreadCrumbName):Object(S.jsx)(U.a,{color:"inherit",sx:{textDecoration:"none"},children:e.BreadCrumbName},"cur_screen")}))]})})}var z=n.p+"static/media/error.a9f72bb4.jpeg";var Q=function(){return Object(S.jsxs)(h.a,{sx:{},align:"center",children:[Object(S.jsx)("img",{src:z,height:"60%",width:"60%",alt:"some thing went wrong"}),Object(S.jsx)("h3",{children:"OOPS! something went wrong"})]})},D=function(e,t){console.log(e,t)};t.default=function(){return Object(S.jsxs)(a.a.Fragment,{children:[Object(S.jsx)(N,{cur_screen:"RabbitMQ Listeners"}),Object(S.jsx)(w.ErrorBoundary,{FallbackComponent:Q,onError:D,children:Object(S.jsx)(B,{})})]})}}}]);
//# sourceMappingURL=4.047e3eab.chunk.js.map