(this.webpackJsonpPRIC=this.webpackJsonpPRIC||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),s=n.n(c),i=n(71),o=n(10),l=n(159),j=n(165),d=n(2);var b=function(){return Object(d.jsx)(j.a,{align:"center",sx:{paddingTop:"20%"},children:Object(d.jsx)(l.a,{color:"success"})})},u=n(162),x=n(164),O=n(163),h=n(161),p=n(158),g=n(11),f=n(76),m=n(155),v=n(160),S=n(80),k=n.n(S),w=n(149),E=n(79),y=n.n(E),I=n(156),L=n(167),C=n(153),R=n(78),J=n.n(R),N=n(154),T=n(150),M=n(77),P=r.forwardRef((function(e,t){return Object(d.jsx)(w.a,Object(f.a)({direction:"up",ref:t},e))})),_=function(e){var t=r.useState(!1),n=Object(g.a)(t,2),a=n[0],c=n[1],s=e.data,i=s.header.IsSuccess?"success":s.header.Error?"error":"warning",o=function(){c(!1)},l=function(){var e=JSON.stringify(s);navigator.clipboard.writeText(e)};return Object(d.jsxs)(I.a,{severity:i,action:Object(d.jsx)(T.a,{onClickAway:o,children:Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{PopperProps:{disablePortal:!0},onClose:o,open:a,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"The Log data has been copied to your clipboard.",children:Object(d.jsx)(p.a,{color:"inherit",onClick:function(){l(),c(!0)},size:"small",children:Object(d.jsx)(J.a,{})})})})}),children:[Object(d.jsx)(L.a,{children:s.header.EventID}),s.date]})},A=function(e){return Object(d.jsx)(r.Fragment,{children:e.data.map((function(e){return Object(d.jsx)(_,{status:"error",data:e})}))})};function D(){var e=r.useState(!1),t=Object(g.a)(e,2),n=t[0],a=t[1],c=Object(M.getLogs)();console.log(c);var s=function(){a(!1)};return Object(d.jsxs)("div",{children:[Object(d.jsx)(v.a,{color:"primary",onClick:function(){a(!0)},"aria-label":"upload picture",component:"span",children:Object(d.jsx)(y.a,{sx:{color:"white"}})}),Object(d.jsxs)(m.a,{fullScreen:!0,open:n,onClose:s,TransitionComponent:P,children:[Object(d.jsx)(u.a,{sx:{position:"relative"},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(v.a,{edge:"start",color:"inherit",onClick:s,"aria-label":"close",children:Object(d.jsx)(k.a,{})}),Object(d.jsx)(h.a,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Log Reports"})]})}),Object(d.jsx)(j.a,{sx:{paddingTop:2},children:Object(d.jsx)(C.a,{sx:{width:"100%"},spacing:2,children:Object(d.jsx)(A,{data:c})})})]})]})}function H(e){var t="Home";switch(window.location.pathname){case"/":default:t="Home";break;case"/rabbitMq":t="Rabbit MQ Listeners";break;case"/work-order-maintanance":t="Work Order Maintanance";break;case"/UserWorkZone":t="User WorkZone"}return Object(d.jsxs)(x.a,{sx:{flexGrow:1},children:[Object(d.jsx)(u.a,{position:"sticky",children:Object(d.jsxs)(O.a,{align:"center",children:[Object(d.jsx)(h.a,{variant:"h6",component:"div",sx:{flexGrow:1,marginLeft:{sm:32}},children:t}),Object(d.jsx)(h.a,{variant:"subtitle2",component:"div",children:"Logged in as knaresh"}),Object(d.jsx)(x.a,{sx:{m:1}}),Object(d.jsx)(p.a,{color:"inherit",variant:"outlined",children:"Logout"}),Object(d.jsx)(D,{})]})}),Object(d.jsx)(x.a,{sx:{m:1}})]})}var Q=a.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,230))}));var U=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(H,{}),Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)(b,{}),children:Object(d.jsx)(i.a,{children:Object(d.jsx)(o.c,{children:Object(d.jsx)(o.a,{path:"/rabbitMq",element:Object(d.jsx)(Q,{})})})})})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root"))},77:function(e,t){var n=window.localStorage;e.exports={setLog:function(e){var t=[];if(n.getItem("log"))try{JSON.parse(n.getItem("log")).map((function(e){return t.push(e)})),t.push(e),t.length<100||e.splice(0,1),localStorage.setItem("log",JSON.stringify(t))}catch(r){"QuotaExceededError"!==r.name&&"QUOTA_EXCEEDED_ERR"!==r.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==r.name||(e.splice(0,1),localStorage.setItem("log",JSON.stringify(t)))}else t.push(e),n.setItem("log",JSON.stringify(t))},getLogs:function(){var e,t,n=[];""!==(null===(e=localStorage)||void 0===e?void 0:e.getItem("log"))&&(null===(t=JSON.parse(localStorage.getItem("log")))||void 0===t||t.map((function(e){return n.push(e)})));return n}}}},[[105,1,2]]]);
//# sourceMappingURL=main.70c0b4ba.chunk.js.map