(this.webpackJsonpkeepapp=this.webpackJsonpkeepapp||[]).push([[0],{41:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(11),a=n.n(s),o=n(33),r=n(24),i=n.p+"static/media/keep.e3b4317f.png",j=n(2),l=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:i,alt:"logo",className:"imglogo"}),Object(j.jsx)("h1",{className:"hone",children:"Keep Notes"})]})})},u=(n(41),function(){var e=(new Date).getFullYear();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("footer",{children:[" Copyright \xa9 ",e]})})}),b=n(22),O=n(26),d=n(64),m=n(31),x=n.n(m),h=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(r.a)(t,2),s=n[0],a=n[1],o=function(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},n,c))})),console.log(s)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main_note",children:Object(j.jsxs)("form",{className:"form",children:[Object(j.jsx)("input",{type:"text",placeholder:"Title",autoComplete:"off",name:"title",value:s.title,onChange:o}),Object(j.jsx)("textarea",{rows:"",column:"",placeholder:"Write Your Note Here",name:"content",value:s.content,onChange:o}),Object(j.jsx)(d.a,{onClick:function(){e.passNote(s),a({title:"",content:""})},children:Object(j.jsx)(x.a,{className:"plus_sign"})})]})})})},p=n(32),f=n.n(p),g=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:e.content}),Object(j.jsx)("button",{onClick:function(){e.deleteItem(e.id)},children:Object(j.jsx)(f.a,{className:"deleteIcon"})})]})})},N=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=function(e){s((function(t){t.filter((function(t,n){return n!==e}))}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(h,{passNote:function(e){s((function(t){return[].concat(Object(o.a)(t),[e])})),console.log(e)}}),n.map((function(e,t){return Object(j.jsx)(g,{id:t,title:e.title,content:e.content,deleteItem:a},t)})),Object(j.jsx)(u,{})]})};a.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f4d9ba5c.chunk.js.map