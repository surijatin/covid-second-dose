(this["webpackJsonpcovid-project"]=this["webpackJsonpcovid-project"]||[]).push([[0],{19:function(e,a,c){},20:function(e,a,c){},37:function(e,a,c){},38:function(e,a,c){},39:function(e,a,c){},40:function(e,a,c){},42:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c.n(t),i=c(9),r=c.n(i),s=(c(19),c(20),c(3));var l=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"header-container",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("h1",{children:"COVID SECOND DOSE CALCULATOR"}),Object(s.jsx)("p",{children:"Made by Jatin Suri"})]})})})},d=c(8),j=c(14),o=c.n(j);c(37);var b=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"radio",name:e.name,id:e.id,onChange:e.onChange,checked:e.checked}),Object(s.jsx)("label",{htmlFor:e.id,className:"label",children:e.labelName})]})};c(38);var h=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{id:e.id,className:"primary-btn",onClick:e.onBtnClick,children:e.btnLabel})})};var O=function(e){var a="".concat(new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(e.date),", ").concat(e.date.toString().slice(4,15));return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("p",{children:['Your next jab is due on "',a,'"']})})};c(39);var u=function(){var e=Object(t.useState)(new Date),a=Object(d.a)(e,2),c=a[0],n=a[1],i=Object(t.useState)("covishield"),r=Object(d.a)(i,2),l=r[0],j=r[1],u=Object(t.useState)(!1),x=Object(d.a)(u,2),m=x[0],v=x[1],p=Object(t.useState)(""),g=Object(d.a)(p,2),f=g[0],C=g[1],N=function(e){var a=e.target.id;j(a),v(!1)};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"main-container",children:Object(s.jsxs)("div",{className:"main-wrapper",children:[Object(s.jsx)("h1",{children:"Get your COVID second jab due date."}),Object(s.jsxs)("div",{className:"cont-box",children:[Object(s.jsx)(b,{name:"vaccine",id:"covishield",labelName:"COVISHIELD",onChange:N,checked:"covishield"===l}),Object(s.jsx)(b,{name:"vaccine",id:"covaxin",labelName:"COVAXIN",onChange:N,checked:"covaxin"===l})]}),Object(s.jsxs)("div",{className:"date-picker",children:[Object(s.jsx)("p",{children:"Enter first dose date"}),Object(s.jsx)(o.a,{calendarAriaLabel:"Toggle calendar",clearAriaLabel:"Clear value",dayAriaLabel:"Day",monthAriaLabel:"Month",nativeInputAriaLabel:"Date",onChange:n,value:c,yearAriaLabel:"Year",showLeadingZeros:!0,clearIcon:null,className:"date-picker-class"})]}),Object(s.jsx)("div",{children:Object(s.jsx)(h,{id:"calculate",btnLabel:"Calculate",onBtnClick:function(){var e,a=new Date(c.getTime());switch(l){case"covishield":e=84;break;case"covaxin":e=28;break;default:e=0}a.setDate(a.getDate()+e),C(a),v(!0)}})}),m&&Object(s.jsx)(O,{date:f})]})})})};c(40);var x=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)(u,{})]})};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.49905eb1.chunk.js.map