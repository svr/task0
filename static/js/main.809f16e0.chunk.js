(this.webpackJsonptask0=this.webpackJsonptask0||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(4),a=n.n(i),l=(n(10),n(2));var u=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function o(e){var t=e.user,n=e.isSelected,r=e.toggleSelection;return Object(c.jsx)("li",{children:Object(c.jsxs)("label",{children:[t.lastName,"\xa0",t.firstName,Object(c.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return r(t)}})]})})}function j(e){var t=e.letter,n=e.users,r=e.toggleSelection,s=n.map((function(e){return Object(c.jsx)(o,{user:e,isSelected:!1,toggleSelection:r},e.id)}));return Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{children:t}),n.length?Object(c.jsx)("ul",{children:s}):Object(c.jsx)("div",{children:"----"})]})}function d(){}function h(e){var t=e.users,n=u.map((function(e){return{letter:e,users:t.filter((function(t){return t.lastName.startsWith(e)}))}})).map((function(e){var t=e.letter,n=e.users;return Object(c.jsx)(j,{letter:t,users:n,toggleSelection:d},t)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Employees"}),Object(c.jsx)("div",{className:"flex-row user-selection-list",children:n})]})}function b(e){var t=e.user;return Object(c.jsxs)("li",{children:[t.lastName,"\xa0",t.firstName,"\xa0",t.dob]})}function O(e){var t=e.users,n=t.reduce((function(e,t){var n=new Date(t.dob).getMonth();return e[n]=e[n]||[],e[n].push(t),e}),new Array(11)).filter(Boolean).map((function(e,t){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("ul",{children:e.map((function(e){return Object(c.jsx)(b,{user:e},e.id)}))})]},t)}));return Object(c.jsxs)("aside",{children:[Object(c.jsx)("h2",{children:"Employees birthday"}),t.length?Object(c.jsx)("div",{className:"flex-row user-birthday-list",children:n}):Object(c.jsx)("p",{children:"No selected employees"})]})}var f=function(){var e=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(null),a=Object(l.a)(i,2),u=a[0],o=a[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),h=d[0],b=d[1];return[{data:u,error:h,isLoading:c},Object(r.useCallback)((function(){s(!0),b(""),fetch(e).then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(){b("Error occurred while loading the data")})).finally((function(){return s(!1)}))}),[])]}("https://yalantis-react-school-api.yalantis.com/api/task0/users"),t=Object(l.a)(e,2),n=t[0],s=n.data,i=n.isLoading,a=n.error,u=t[1];return Object(r.useEffect)((function(){u()}),[u]),Object(c.jsxs)("main",{children:[i&&Object(c.jsx)("p",{children:"Loading..."}),a&&Object(c.jsx)("p",{children:a}),!a&&s&&Object(c.jsxs)("div",{className:"flex-row app-container",children:[Object(c.jsx)(h,{users:s}),Object(c.jsx)(O,{users:s})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),x()}},[[11,1,2]]]);
//# sourceMappingURL=main.809f16e0.chunk.js.map