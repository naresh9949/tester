(this["webpackJsonpFrontend-Template"]=this["webpackJsonpFrontend-Template"]||[]).push([[3],{244:function(e,n,t){"use strict";t.r(n);var a=t(34),c=t(8),r=t(23),o=t.n(r),s=t(0),i=t(228),u=t(236),j=t(229),l=t(233),d=t(237),p=t(2);var b=function(){return Object(p.jsx)(d.a,{align:"center",sx:{marginTop:"5%"},children:Object(p.jsx)(l.a,{color:"primary"})})},O=t(79),m=t(14),g=function(e,n,t){for(var a=0;a<n.length;a++)if(n[a].ResourceKey===e)return n[a][t];return e};n.default=function(){var e=Object(s.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],l=Object(s.useState)([]),d=Object(c.a)(l,2),f=d[0],h=d[1],x=Object(s.useState)(!0),C=Object(c.a)(x,2),v=C[0],F=C[1],M="en-US"===localStorage.getItem("language")?"English":"Spanish",R=Object(m.g)().id;R||(R=0);var y=window.location.origin;return y=encodeURIComponent(y),Object(s.useEffect)(Object(a.a)(o.a.mark((function e(){var n,t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/api/BreadCrumbsAPI/GetMenuFunctions?originalCaller=".concat(y,"&domain=").concat(".systempr.com"),e.next=3,Object(O.a)(n,"prutils");case 3:return(t=e.sent)&&t.data&&t.data.Body.MenuFunctions&&r(t.data.Body.MenuFunctions),"PRCC","PRCC_HOME_",a="/common/getLanguageResources?app=".concat("PRCC","&&key=").concat("PRCC_HOME_","&&language=").concat(M),e.next=10,Object(O.a)(a,"prssvl");case 10:(t=e.sent)&&200===t.status&&h(t.data),F(!1);case 13:case"end":return e.stop()}}),e)}))),[]),v?Object(p.jsx)(b,{}):Object(p.jsx)(u.a,{sx:{m:1,marginTop:4},children:Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{container:!0,spacing:.5,children:t.map((function(e){return Object(p.jsx)(j.a,{item:!0,xs:12,sm:2,children:Object(p.jsx)(i.a,{fullWidth:!0,href:e.MenuFunctionURL,color:"secondary",variant:"contained",children:g(e.MenuFunctionName,f,M)})},e.MenuFunctionName)}))})})})}}}]);
//# sourceMappingURL=3.8fe1addc.chunk.js.map