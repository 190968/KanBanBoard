(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{31:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(36),n(8)),l=n(66),u=n(71),s=n(70),d=n(69),m=n(72),p=(n(37),Object(l.a)({title:{fontSize:15,color:"#404B5A",margin:0},action:{padding:"0 5px",marginTop:"10px",height:50},input_text:{padding:10,display:"block",width:"95%",fontSize:"15px",lineHeight:"18px",backgroundColor:"#fff",margin:"10px 0",border:"none"},input_rewrite:{padding:10,display:"block",width:"95%",color:"#000",fontSize:"medium",backgroundColor:"#fff",margin:"10px 0",border:"none"},text:{padding:10,wordBreak:"break-all",fontSize:"medium",backgroundColor:"#fff",margin:"10px 0 0",boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.25)"}})),f=function(e){var t=e.name,n=e.prev,a=e.text,o=e.add_text,i=r.a.useState(!1),l=Object(c.a)(i,2),f=l[0],g=l[1],b=r.a.useState(),h=Object(c.a)(b,2),v=h[0],x=h[1],w=r.a.useState(),E=Object(c.a)(w,2),k=E[0],y=E[1],C=r.a.useState(n),S=Object(c.a)(C,2),O=S[0],j=S[1],N=r.a.useState(!0),_=Object(c.a)(N,2),z=_[0],T=_[1],B=r.a.useState(),D=Object(c.a)(B,2),W=D[0],Y=D[1],J=r.a.useState(),X=Object(c.a)(J,2),A=X[0],F=X[1],H=r.a.useState([]),I=Object(c.a)(H,2),R=I[0],$=I[1],q=function(){g(!1)},G=p(),K=function(e,t,n){var r=[{one:t.one,two:t.two}];return o(a.concat(r)),setTimeout((function(){return function(e){var t=O.filter((function(t,n){return n===e?"":t}));return j(t)}(n)}),1e3)};return r.a.createElement("div",{className:"root",onDrop:function(e){return O.filter((function(e){return e.one===a[0].one})).length>0&&$(R.concat(a)),j(O.concat(a)),o([])},onDragOver:function(e){return function(e){e.preventDefault()}(e)}},r.a.createElement("p",{className:G.title},t),O.map((function(e,t){return r.a.createElement("p",{onDragStart:function(n){return K(0,e,t)},title:"edit,  movie or delete",draggable:"true",className:G.text,onClick:function(){return n=e.one,a=e.two,r=t,g(!0),x(n),F(a),y(r);var n,a,r}},e.one)})),z?r.a.createElement(u.a,{className:G.action,onClick:function(){return T(!1)}},r.a.createElement("span",{className:"plus"},"+"),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"):r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",wrap:"soft",rows:"1",cols:"30",className:G.input_text,onChange:function(e){return Y(e.target.value)}}),r.a.createElement(u.a,{size:"medium",onClick:function(){return function(){var e=[{one:W}];return W?(j(O.concat(e)),T(!0)):T(!0)}()},variant:"contained",color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"),r.a.createElement(u.a,{size:"medium",onClick:function(){return T(!0)},style:{margin:10}},"X \u041e\u0442\u043c\u0435\u043d\u0430")),r.a.createElement("span",{role:"img","aria-label":"wastebasket",className:"backet",onClick:function(){return R.length>0?function(){var e=R.length,t=R.filter((function(t,n){return n+1===e?"":t}));return j(O.concat(R[e-1])),$(t)}():""},style:R.length>0?{opacity:1}:{opacity:"0.5"},title:R.length>0?"".concat(R.length," card"):"basket empty"},"\ud83d\uddd1\ufe0f"),r.a.createElement(s.a,{open:f,maxWidth:"sm",fullWidth:"true",onClose:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(m.a,{id:"alert-dialog-title",style:{backgroundColor:"#d4d4d4"}},r.a.createElement("p",{style:{margin:0,color:"#000",fontSize:24}},r.a.createElement(u.a,{onClick:q,color:"primary",style:{float:"right",marginTop:"-15px",marginRight:"-20px"}},"X"),r.a.createElement("input",{className:G.input_text,value:v,onChange:function(e){return x(e.target.value)}}))),r.a.createElement(d.a,{style:{backgroundColor:"#d4d4d4",padding:"0 24px"}},r.a.createElement("textarea",{value:A,rows:"5",cols:"20",style:{fontSize:16,color:"#000"},className:G.input_rewrite,onChange:function(e){return t=e.target.value,void F(t);var t}})),r.a.createElement(m.a,{style:{backgroundColor:"#d4d4d4",paddingTop:0}},r.a.createElement("p",null,r.a.createElement(u.a,{onClick:function(){return function(e){var t=O.filter((function(t,n){return n===e?t.two=A:t.two})).filter((function(t,n){return n===e?t.one=v:t.one}));return j(t)}(k)},color:"primary",variant:"contained",style:{float:"left"}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))};var g=function(){var e=r.a.useState([]),t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"main_block"},r.a.createElement(f,{name:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",prev:[{one:"Shop",two:"You need going to shop"}],text:n,add_text:a}),r.a.createElement(f,{name:"\u041d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435",prev:[{one:"Cinema",two:"You need go to the cinema"}],text:n,add_text:a}),r.a.createElement(f,{name:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e",prev:[{one:"Trip",two:"You need going to shop"}],text:n,add_text:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.3fec6d7d.chunk.js.map