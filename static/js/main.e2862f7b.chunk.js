(window.webpackJsonptoheroky=window.webpackJsonptoheroky||[]).push([[0],{135:function(e,a,n){e.exports=n(280)},140:function(e,a,n){},280:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(18),l=n.n(o),c=(n(140),n(46)),i=(n(75),n(132)),s=n(14),u=n(68),m=n(40),p=n.n(m),d=n(50),h=n(22);function w(){var e=Object(u.a)(["\nquery {\n  read_name {\n    _id\n    username\n    password\n  }\n}\n"]);return w=function(){return e},e}var y=p()(w()),g=function(){var e=Object(d.b)(y,{fetchPolicy:"network-only"}),a=e.loading,n=e.error,t=e.data;return a?r.a.createElement(h.a,{type:"loading",style:{margin:"100px auto"}}):n?"<p>".concat(n.message,"</p>"):r.a.createElement(r.a.Fragment,null,t.read_name.map((function(e,a){return r.a.createElement("h3",{style:{width:300,margin:"10px auto",border:"1px solid #000",padding:10},key:a},r.a.createElement("span",null,"name:",e.username,";"),r.a.createElement("span",null,"password:",e.password))})))},E=n(281),f=n(282),b=n(74);function v(){var e=Object(u.a)(["\n mutation($username: String, $password: String) {\n  add_name(username: $username, password: $password) {\n    username\n    password\n  }\n}\n"]);return v=function(){return e},e}var k=p()(v()),x=function(){var e=r.a.useState(""),a=Object(c.a)(e,2),n=a[0],t=a[1],o=r.a.useState(""),l=Object(c.a)(o,2),i=l[0],s=l[1],u=Object(d.a)(k,{variables:{username:n,password:i}}),m=Object(c.a)(u,1)[0];return r.a.createElement(E.a,{style:{display:"inline-block",padding:10,margin:"100px auto 20px",border:"1px solid #ccc"}},r.a.createElement(f.a,{value:n,allowClear:!0,type:"text",style:{width:150},placeholder:"My name",onChange:function(e){return t(e.target.value)}}),r.a.createElement(f.a,{value:i,allowClear:!0,type:"password",style:{width:150,margin:"0 10px"},placeholder:"My password",onChange:function(e){return s(e.target.value)}}),r.a.createElement(b.a,{onClick:function(){return m()},type:"primary",style:{width:150}},"add"))},j=n(131),O=new i.a({uri:"https://graphql1909.herokuapp.com/",fetchOptions:{mode:"cors"}}),C=function(){var e=r.a.useState(!1),a=Object(c.a)(e,2),n=a[0],t=a[1];return r.a.createElement(s.a,{client:O},r.a.createElement(j.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"My site"),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement("div",{style:{textAlign:"center",height:800,background:"url(https://graphql19.herokuapp.com/image/one.jpg) center/100% no-repeat"}},n?r.a.createElement(g,null):r.a.createElement(x,null),r.a.createElement("br",null),r.a.createElement(b.a,{onClick:function(){return t(!n)},type:"primary",style:{width:300}},n?"Add member":"View members")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[135,1,2]]]);
//# sourceMappingURL=main.e2862f7b.chunk.js.map