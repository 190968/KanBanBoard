(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=(a(36),a(9)),l=a(66),u=a(71),d=a(70),m=a(69),s=a(72),p=(a(37),Object(l.a)({title:{fontSize:15,color:"#404B5A",margin:0},action:{padding:"0 5px",marginTop:"10px",height:50},input_text:{padding:10,display:"block",width:"95%",fontSize:"15px",lineHeight:"18px",backgroundColor:"#fff",margin:"10px 0",border:"none"},input_rewrite:{padding:10,display:"block",width:"95%",color:"#000",fontSize:"medium",backgroundColor:"#fff",margin:"10px 0",border:"none"},text:{padding:10,wordBreak:"break-all",fontSize:"medium",backgroundColor:"#fff",margin:"10px 0 0",boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.25)"}})),f=function(e){var t=e.name,a=e.prev,n=e.text,o=e.add_text,i=r.a.useState(!1),l=Object(c.a)(i,2),f=l[0],g=l[1],b=r.a.useState(),v=Object(c.a)(b,2),x=v[0],h=v[1],w=r.a.useState(),E=Object(c.a)(w,2),k=E[0],y=E[1],C=r.a.useState(a),S=Object(c.a)(C,2),N=S[0],O=S[1],_=r.a.useState(!0),j=Object(c.a)(_,2),z=j[0],T=j[1],B=r.a.useState(),D=Object(c.a)(B,2),W=D[0],Y=D[1],J=r.a.useState(),X=Object(c.a)(J,2),A=X[0],F=X[1],H=function(){g(!1)},I=p(),R=function(e,t,a){var r=[{one:t.one,two:t.two}];return o(n.concat(r)),setTimeout((function(){return function(e){var t=N.filter((function(t,a){return a===e?"":t}));return O(t)}(a)}),1e3)};return r.a.createElement("div",{className:"root",onDrop:function(e){return O(N.concat(n)),o([])},onDragOver:function(e){return function(e){e.preventDefault()}(e)}},r.a.createElement("p",{className:I.title},t),N.map((function(e,t){return r.a.createElement("p",{onDragStart:function(a){return R(0,e,t)},title:"edit,  movie or delete",draggable:"true",className:I.text,onClick:function(){return a=e.one,n=e.two,r=t,g(!0),h(a),F(n),y(r);var a,n,r}},e.one)})),z?r.a.createElement(u.a,{className:I.action,onClick:function(){return T(!1)}},r.a.createElement("span",{className:"plus"},"+"),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"):r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",wrap:"soft",rows:"1",cols:"30",className:I.input_text,onChange:function(e){return Y(e.target.value)}}),r.a.createElement(u.a,{size:"medium",onClick:function(){return function(){var e=[{one:W}];return W?(O(N.concat(e)),T(!0)):T(!0)}()},variant:"contained",color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"),r.a.createElement(u.a,{size:"medium",onClick:function(){return T(!0)},style:{margin:10}},"X \u041e\u0442\u043c\u0435\u043d\u0430")),r.a.createElement("span",{role:"img","aria-label":"wastebasket",className:"backet"},"\ud83d\uddd1\ufe0f"),r.a.createElement(d.a,{open:f,maxWidth:"sm",fullWidth:"true",onClose:H,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(s.a,{id:"alert-dialog-title",style:{backgroundColor:"#d4d4d4"}},r.a.createElement("p",{style:{margin:0,color:"#000",fontSize:24}},r.a.createElement(u.a,{onClick:H,color:"primary",style:{float:"right",marginTop:"-15px",marginRight:"-20px"}},"X"),r.a.createElement("input",{className:I.input_text,value:x,onChange:function(e){return h(e.target.value)}}))),r.a.createElement(m.a,{style:{backgroundColor:"#d4d4d4",padding:"0 24px"}},r.a.createElement("textarea",{value:A,rows:"5",cols:"20",style:{fontSize:15,color:"#989898"},className:I.input_rewrite,onChange:function(e){return t=e.target.value,void F(t);var t}})),r.a.createElement(s.a,{style:{backgroundColor:"#d4d4d4",paddingTop:0}},r.a.createElement("p",null,r.a.createElement(u.a,{onClick:function(){return function(e){var t=N.filter((function(t,a){return a===e?t.two=A:t.two})).filter((function(t,a){return a===e?t.one=x:t.one}));return O(t)}(k)},color:"primary",variant:"contained",style:{float:"left"}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))};var g=function(){var e=r.a.useState([]),t=Object(c.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"main_block"},r.a.createElement(f,{name:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",prev:[{one:"Shop",two:"You need going to shop"}],text:a,add_text:n}),r.a.createElement(f,{name:"\u041d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435",prev:[{one:"Cinema",two:"You need go to the cinema"}],text:a,add_text:n}),r.a.createElement(f,{name:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e",prev:[{one:"Trip",two:"You need going to shop"}],text:a,add_text:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b02dbabd.chunk.js.map