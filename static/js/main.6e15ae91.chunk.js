(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),c=a.n(r),o=(a(28),a(3)),m=a(6),i=a(0),s=a(4),u=function(e){var t=e.addPost,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],m=r[1];return l.a.createElement("div",{className:"addForm"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c),m(""),e.target.reset()}},l.a.createElement("input",{onChange:function(e){m(e.target.value)},autoFocus:!0,className:"addText form-control mb-1",type:"text",placeholder:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},d=(a(30),function(e){var t=e.data,a=e.setData;document.title="\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447";var n=function(e,n){var l=t.findIndex(function(e){return e.id===n});a([].concat(Object(s.a)(t.slice(0,l)),Object(s.a)(t.slice(l+1))))},r=function(e,n){e.target.classList.toggle("lineThrough");var l=t.findIndex(function(e){return e.id===n}),r={text:t[l].text,id:t[l].id,flag:!t[l].flag},c=[].concat(Object(s.a)(t.slice(0,l)),[r],Object(s.a)(t.slice(l+1))),o=c.filter(function(e){return!0===e.flag}),m=c.filter(function(e){return!1===e.flag});a([].concat(Object(s.a)(m),Object(s.a)(o)))};localStorage.setItem("data",JSON.stringify(t));var c=Object(s.a)(t).filter(function(e){return!0===e.flag}),o=Object(s.a)(t).filter(function(e){return!1===e.flag});function i(e){return e.map(function(t){var a=!0===t.flag?"postText lineThrough":"postText",c="".concat(t.text);return l.a.createElement("div",{key:t.id,mykey:t.id,className:"posts"},l.a.createElement("div",{className:"post"},l.a.createElement("h1",{className:a,id:t.id,onClick:function(e){return r(e,t.id)}},e.indexOf(t)+1,". ",c)),l.a.createElement("div",{className:"postIcons"},l.a.createElement("button",{onClick:function(e){return n(e,t.id)},className:"btnn"},l.a.createElement("i",{className:"fas fa-trash-alt icon"}))))})}return l.a.createElement("div",{className:"container"},l.a.createElement(m.b,{to:"/login"},l.a.createElement("button",{className:"btn btn-outline-dark mb-3"},"\u0412\u044b\u0445\u043e\u0434")),l.a.createElement("div",{className:"postBlock"},l.a.createElement("div",{className:"postList"},i(o)),l.a.createElement(u,{addPost:function(e){var n=t.filter(function(e){return!0===e.flag}),l=t.filter(function(e){return!1===e.flag});a([].concat(Object(s.a)(l),[{text:e,id:0===t.length?0:t.reduce(function(e,t){return e.id>t.id?e:t}).id+1,flag:!1}],Object(s.a)(n)))}}),l.a.createElement("h1",null,"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u0443\u043d\u043a\u0442\u044b"),l.a.createElement("div",{className:"postList"},i(c))))});a(5),a(17);var f=function(e){e.setLogin,e.setUserId;document.title="\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f";var t=Object(i.m)();return l.a.createElement("div",{className:"loginSection"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"loginForm login"},l.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),l.a.createElement("form",{onSubmit:function(){return t("/")}},l.a.createElement("div",{className:"form-floating mb-1"},l.a.createElement("input",{className:"logInput form-control",id:"floatingInput",placeholder:"\u041b\u043e\u0433\u0438\u043d",name:"login"}),l.a.createElement("label",{htmlFor:"floatingInput"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d:")),l.a.createElement("div",{className:"form-floating mb-1"},l.a.createElement("input",{className:"passInput form-control",id:"floatingPassword",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onInput:function(e){var t=document.querySelector(".logInput"),a=document.querySelector(".passInput");""===t.value.trim()||""===a.value.trim()?document.querySelector(".loginBtn").disabled=!0:document.querySelector(".loginBtn").disabled=!1}}),l.a.createElement("label",{htmlFor:"floatingPassword"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:")),l.a.createElement("div",{className:"logBtns"},l.a.createElement("button",{type:"submit",name:"submit",className:"loginBtn btn btn-primary"},"\u0412\u043e\u0439\u0442\u0438"),l.a.createElement("div",null,"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? ",l.a.createElement(m.b,{to:"/register"},l.a.createElement("span",{className:"up"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),l.a.createElement("p",{className:"errorMessage"},"\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445")))))};var p=function(){document.title="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f";var e=Object(i.m)(),t=function(e){var t=document.querySelector(".logInput"),a=document.querySelector(".passInput"),n=document.querySelector(".pass2Input");""===t.value.trim()||""===a.value.trim()||""===n.value.trim()?document.querySelector(".loginBtn").disabled=!0:document.querySelector(".loginBtn").disabled=!1};return l.a.createElement("div",{className:"loginSection"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"loginForm registr"},l.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("form",{id:"regForm",onSubmit:function(){return e("/login")}},l.a.createElement("div",{className:"form-floating mb-1"},l.a.createElement("input",{className:"logInput form-control",id:"floatingInput",placeholder:"\u041b\u043e\u0433\u0438\u043d",name:"login",onInput:t}),l.a.createElement("label",{htmlFor:"floatingInput"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d:")),l.a.createElement("div",{className:"form-floating mb-1"},l.a.createElement("input",{className:"passInput form-control",id:"floatingPassword",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onInput:t}),l.a.createElement("label",{htmlFor:"floatingPassword"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:")),l.a.createElement("div",{className:"form-floating mb-1"},l.a.createElement("input",{className:"pass2Input form-control",id:"floatingPassword2",type:"password",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"password2",onInput:t}),l.a.createElement("label",{htmlFor:"floatingPassword2"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:")),l.a.createElement("div",{className:"logBtns"},l.a.createElement("button",{disabled:!0,className:"loginBtn btn btn-primary",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),l.a.createElement("div",null,"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? ",l.a.createElement(m.b,{to:"/login"},l.a.createElement("span",{className:"in"},"\u0412\u043e\u0439\u0442\u0438"))))),l.a.createElement("p",{className:"errorMessage"},"\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445"))))},g=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u0430"))},E=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("data"))||[]),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"*",element:l.a.createElement(g,null)}),l.a.createElement(i.a,{path:"/",element:l.a.createElement(d,{data:a,setData:r})}),l.a.createElement(i.a,{path:"/login",element:l.a.createElement(f,null)}),l.a.createElement(i.a,{path:"/register",element:l.a.createElement(p,null)}))))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,34)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null))),b()}},[[19,3,2]]]);