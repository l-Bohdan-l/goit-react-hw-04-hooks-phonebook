(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"ContactForm_form__2skzM",inputWrapper:"ContactForm_inputWrapper__3-Zkq",input:"ContactForm_input__2L1LV",button:"ContactForm_button__2BWFR"}},,,,function(e,t,n){e.exports={list:"ContactList_list__RkXnd",item:"ContactList_item__3xOIA"}},function(e,t,n){e.exports={findLabel:"Filter_findLabel__1l1fA",findInput:"Filter_findInput__9r8bU"}},,,function(e,t,n){e.exports={button:"ContactListItem_button__1FOQY"}},function(e,t,n){e.exports={section:"Container_section__oMR50"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=(n(19),n(13)),i=n(2),u=(n(20),n(3)),l=n.n(u),b=n(0);function d(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),d=u[0],m=u[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":m(a);break;default:return}},p=function(e){s(""),m("")};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:function(e){e.preventDefault(),t(r,d),p()},children:[Object(b.jsxs)("label",{className:l.a.inputWrapper,children:["Name",Object(b.jsx)("input",{className:l.a.input,value:r,onChange:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(b.jsxs)("label",{className:l.a.inputWrapper,children:["Number",Object(b.jsx)("input",{className:l.a.input,value:d,onChange:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(b.jsx)("button",{className:l.a.button,type:"submit",children:"Add contact"})]})}var m=n(9),j=n(11),p=n.n(j),f=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{children:[t," : ",n]}),Object(b.jsx)("button",{className:p.a.button,type:"button",onClick:function(){return c(a)},children:"x"})]})},h=n(7),O=n.n(h),x=function(e){var t=e.contacts,n=e.onDelete;return Object(b.jsx)("ul",{className:O.a.list,children:t.map((function(e){return Object(b.jsx)("li",{className:O.a.item,children:Object(b.jsx)(f,Object(m.a)(Object(m.a)({},e),{},{onDelete:n}))},e.id)}))})};x.defaultProps={contacts:[]};var _=n(12),v=n.n(_),C=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:v.a.section,children:[Object(b.jsx)("h2",{children:t}),n]})};C.defaultProps={title:"",children:[]};var g=n(14),N=n(8),F=n.n(N),S=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("label",{className:F.a.findLabel,children:["Find contacts by Name",Object(b.jsx)("input",{className:F.a.findInput,type:"text",value:t,onChange:n})]})};S.defaultProps={value:""};var L=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=(s[0],s[1],Object(a.useState)("")),l=Object(i.a)(u,2),m=l[0],j=l[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var p=function(){var e=m.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(C,{title:"Phonebook",children:Object(b.jsx)(d,{onSubmit:function(e,t){var a={id:Object(g.a)(),name:e,number:t};n.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts")):c([a].concat(Object(o.a)(n)))}})}),Object(b.jsxs)(C,{title:"Contacts",children:[Object(b.jsx)(S,{value:m,onChange:function(e){var t=e.currentTarget.value;j(t)}}),Object(b.jsx)(x,{contacts:p,onDelete:function(e){c(n.filter((function(t){return t.id!==e})))}})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),k()}],[[22,1,2]]]);
//# sourceMappingURL=main.2ccec081.chunk.js.map