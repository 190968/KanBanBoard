(window.webpackJsonptoheroky=window.webpackJsonptoheroky||[]).push([[0],{135:function(e,a,t){e.exports=t(280)},140:function(e,a,t){},280:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),l=t.n(o),c=(t(140),t(46)),i=(t(75),t(132)),s=t(14),u=t(68),m=t(40),d=t.n(m),p=t(50),w=t(22);function h(){var e=Object(u.a)(["\nquery {\n  read_name {\n    _id\n    username\n    password\n  }\n}\n"]);return h=function(){return e},e}var y=d()(h()),g=function(){var e=Object(p.b)(y,{fetchPolicy:"network-only"}),a=e.loading,t=e.error,n=e.data;return a?r.a.createElement(w.a,{type:"loading",style:{margin:"100px auto"}}):t?"<p>".concat(t.message,"</p>"):r.a.createElement(r.a.Fragment,null,n.read_name.map((function(e,a){return r.a.createElement("h3",{style:{width:300,margin:"10px auto",border:"1px solid #000",padding:10},key:a},r.a.createElement("span",null,"name:",e.username,";"),r.a.createElement("span",null,"password:",e.password))})))},E=t(281),f=t(282),b=t(74);function v(){var e=Object(u.a)(["\n mutation($username: String, $password: String) {\n  add_name(username: $username, password: $password) {\n    username\n    password\n  }\n}\n"]);return v=function(){return e},e}var k=d()(v()),x=function(){var e=r.a.useState(""),a=Object(c.a)(e,2),t=a[0],n=a[1],o=r.a.useState(""),l=Object(c.a)(o,2),i=l[0],s=l[1],u=Object(p.a)(k,{variables:{username:t,password:i}}),m=Object(c.a)(u,1)[0];return r.a.createElement(E.a,{style:{display:"inline-block",padding:10,margin:"100px auto 20px",border:"1px solid #ccc"}},r.a.createElement(f.a,{value:t,allowClear:!0,type:"text",style:{width:150},placeholder:"My name",onChange:function(e){return n(e.target.value)}}),r.a.createElement(f.a,{value:i,allowClear:!0,type:"password",style:{width:150,margin:"0 10px"},placeholder:"My password",onChange:function(e){return s(e.target.value)}}),r.a.createElement(b.a,{onClick:function(){return m()},type:"primary",style:{width:150}},"add"))},j=t(131),O=new i.a({uri:"https://graphql1909.herokuapp.com/",fetchOptions:{mode:"cors"}}),C=function(){var e=r.a.useState(!1),a=Object(c.a)(e,2),t=a[0],n=a[1];return r.a.createElement(s.a,{client:O},r.a.createElement(j.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"My site"),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement("div",{style:{textAlign:"center",height:800,background:"url(http://localhost:3003/image/one.jpg) center/100% no-repeat"}},t?r.a.createElement(g,null):r.a.createElement(x,null),r.a.createElement("br",null),r.a.createElement(b.a,{onClick:function(){return n(!t)},type:"primary",style:{width:300}},t?"Add member":"View members")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[135,1,2]]]);
//# sourceMappingURL=main.96bbbe68.chunk.js.map