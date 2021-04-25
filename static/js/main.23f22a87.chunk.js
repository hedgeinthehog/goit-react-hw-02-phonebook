(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"App_title__IhljD"}},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1poGM",formField:"ContactForm_formField__LJSQ4",input:"ContactForm_input__oTYN9",btn:"ContactForm_btn__1Aqf4"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),o=n(11),s=n(3),l=n(4),u=n(6),m=n(5),d=n(13),b=n(23),j=n(2),f=n.n(j),h=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a={name:n.name,number:n.number,id:Object(b.a)()};e.preventDefault(),t.props.onSubmit(a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:f.a.contactForm,onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{className:f.a.formField,children:Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{className:f.a.input,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:f.a.formField,children:Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]})}),Object(h.jsx)("button",{type:"submit",className:f.a.btn,children:"add contact"})]})}}]),n}(c.a.Component),O=n(8),C=n.n(O),v=function(t){var e=t.filter,n=t.onChange;return Object(h.jsx)("div",{className:C.a.filter,children:Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",className:C.a.filterInput,name:"filter",value:e,onChange:n})]})})},x=n(9),_=n.n(x),g=function(t){var e=t.contacts,n=t.onClick,a=function(t){var e=t.target.name;n(e)};return Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(h.jsxs)("li",{className:_.a.listItem,children:[n," ",c,Object(h.jsx)("button",{type:"button",className:_.a.btn,name:e,onClick:a,children:"Delete"})]},e)}))})},F=n(10),N=n.n(F),y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Minion da Bob",number:"459-12-56"},{id:"id-6",name:"Bobo",number:"443-89-12"}],filter:""},t.updateFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.addNewContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.deleteContact=function(e){var n=t.state.contacts.findIndex((function(t){return t.id===e}));t.setState((function(t){var e=Object(o.a)(t.contacts);return e.splice(n,1),{contacts:e}}))},t.filterContacts=function(){var e=t.state.contacts,n=t.state.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:N.a.title,children:"phonebook"}),Object(h.jsx)(p,{onSubmit:this.addNewContact}),Object(h.jsx)("h2",{className:N.a.title,children:"contacts"}),Object(h.jsx)(v,{filter:t,onChange:this.updateFilter}),Object(h.jsx)(g,{contacts:e,onClick:this.deleteContact})]})}}]),n}(c.a.Component);n(19),n(20);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={filter:"Filter_filter__f7Psd",filterInput:"Filter_filterInput__2SlT2"}},9:function(t,e,n){t.exports={listItem:"ContactList_listItem__3PQMD",btn:"ContactList_btn__korE9"}}},[[21,1,2]]]);
//# sourceMappingURL=main.23f22a87.chunk.js.map