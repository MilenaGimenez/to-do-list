(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),s=o.n(c),n=o(7),a=o.n(n),i=(o(13),o(3)),l=(o(14),o(8)),d=o(0),r=function(t){var e=t.setTodos,o=t.todos,c=t.inputText,s=t.setInputText,n=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{onChange:function(t){s(t.target.value)},type:"text",value:c,className:"todo-input"}),Object(d.jsx)("button",{disabled:0===c.trim().length,onClick:function(t){t.preventDefault(),e([].concat(Object(l.a)(o),[{text:c,completed:!1,id:1e4*Math.random()}])),s("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(t){n(t.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"Todas"}),Object(d.jsx)("option",{value:"completed",children:"Completas"}),Object(d.jsx)("option",{value:"uncomplete",children:"Incompletas"})]})})]})},j=o(6),u=function(t){var e=t.todo,o=t.setTodos,c=t.todos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(e.completed&&"completed"),children:e.text}),Object(d.jsx)("button",{onClick:function(t){o(c.map((function(t){return e.id===t.id?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn ".concat(e.completed&&"boton-rojo"),children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{onClick:function(){o(c.filter((function(t){return t.id!==e.id})))},className:"trash-btn",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)(u,{todos:e,todo:t,setTodos:o},t.id)}))})})})};var f=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),o=e[0],s=e[1],n=Object(c.useState)([]),a=Object(i.a)(n,2),l=a[0],j=a[1],u=Object(c.useState)("all"),f=Object(i.a)(u,2),m=f[0],O=f[1],p=Object(c.useState)([]),x=Object(i.a)(p,2),h=x[0],v=x[1];return Object(c.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify(l));else{var t=JSON.parse(localStorage.getItem("todos"));j(t)}}()}),[]),Object(c.useEffect)((function(){!function(){switch(m){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncomplete":v(l.filter((function(t){return!1===t.completed})));break;default:v(l)}}(),localStorage.setItem("todos",JSON.stringify(l))}),[l,m]),Object(d.jsxs)("div",{children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Todo List"})}),Object(d.jsx)(r,{todos:l,setTodos:j,inputText:o,setInputText:s,setStatus:O}),Object(d.jsx)(b,{todos:l,setTodos:j,filteredTodos:h})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.16d19496.chunk.js.map