(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{43:function(e,a,t){e.exports=t(65)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c),l=(t(48),t(13)),s=(t(49),t(50),t(92));var i=function(e){var a=e.username,t=e.caption,n=e.imageUrl;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__header"},r.a.createElement(s.a,{className:"post__avatar",alt:"vinayparmar",src:"/"}),r.a.createElement("h3",null,a)),r.a.createElement("img",{className:"post__image",src:n}),r.a.createElement("h4",{className:"post__text"},r.a.createElement("strong",null,a)," ",t))},u=t(31),m=t.n(u),p=m.a.initializeApp({apiKey:"AIzaSyCCnqvaW-UmazylDzGK5-ncvuhURVrokWg",authDomain:"instagram-cbbc8.firebaseapp.com",databaseURL:"https://instagram-cbbc8.firebaseio.com",projectId:"instagram-cbbc8",storageBucket:"instagram-cbbc8.appspot.com",messagingSenderId:"873304111428",appId:"1:873304111428:web:16666bfcf530a94a6dbf11",measurementId:"G-HG59MVSB9M"}).firestore(),g=m.a.auth(),d=(m.a.storage(),t(88)),f=t(89),h=t(91),b=t(90);var E=function(){var e=Object(n.useState)(null),a=Object(l.a)(e,2),t=(a[0],a[1]),c=Object(n.useState)(0),o=Object(l.a)(c,2),s=(o[0],o[1],Object(n.useState)("")),i=Object(l.a)(s,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Enter a caption...",onChange:function(e){return m(e.target.value)},value:u}),r.a.createElement("input",{type:"file",onChange:function(e){e.target.files[0]&&t(e.target.files[0])}}),r.a.createElement(b.a,{onClick:function(){}},"Upload"))};function v(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var _=Object(d.a)((function(e){return{paper:{position:"absolute",width:"270",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var w=function(){var e=_(),a=r.a.useState(v),t=Object(l.a)(a,1)[0],n=r.a.useState([]),c=Object(l.a)(n,2),o=c[0],s=c[1],u=r.a.useState(!1),m=Object(l.a)(u,2),d=m[0],w=m[1],y=r.a.useState(""),S=Object(l.a)(y,2),C=S[0],N=S[1],j=r.a.useState(""),O=Object(l.a)(j,2),k=O[0],I=O[1],U=r.a.useState(""),W=Object(l.a)(U,2),x=W[0],A=W[1],z=r.a.useState(""),B=Object(l.a)(z,2),D=B[0],G=B[1],M=r.a.useState(null),P=Object(l.a)(M,2),H=P[0],J=P[1];return r.a.useEffect((function(){var e=g.onAuthStateChanged((function(e){e?(console.log(e),J(e)):J(null)}));return function(){e()}}),[H,k]),r.a.useEffect((function(){p.collection("posts").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),r.a.createElement("div",{className:"app"},r.a.createElement(E,null),r.a.createElement(f.a,{open:d,onClose:function(){return w(!1)}},r.a.createElement("div",{style:t,className:e.paper},r.a.createElement("form",{className:"app__signup"},r.a.createElement("center",null,r.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),r.a.createElement(h.a,{placeholder:"username",type:"type",value:k,onChange:function(e){return I(e.target.value)}}),r.a.createElement(h.a,{placeholder:"email",type:"type",value:D,onChange:function(e){return G(e.target.value)}}),r.a.createElement(h.a,{placeholder:"password",type:"password",value:x,onChange:function(e){return A(e.target.value)}}),r.a.createElement(b.a,{className:"log__button",type:"submit",onClick:function(e){e.preventDefault(),g.createUserWithEmailAndPassword(D,x).then((function(e){return e.user.updateProfile({displayName:k})})).catch((function(e){return alert(e.message)})),w(!1)}},"Sign Up"))))),r.a.createElement(f.a,{open:C,onClose:function(){return N(!1)}},r.a.createElement("div",{style:t,className:e.paper},r.a.createElement("form",{className:"app__signup"},r.a.createElement("center",null,r.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),r.a.createElement(h.a,{placeholder:"email",type:"type",value:D,onChange:function(e){return G(e.target.value)}}),r.a.createElement(h.a,{placeholder:"password",type:"password",value:x,onChange:function(e){return A(e.target.value)}}),r.a.createElement(b.a,{className:"log__button",type:"submit",onClick:function(e){e.preventDefault(),g.signInWithEmailAndPassword(D,x).catch((function(e){return alert(e.message)})),N(!1)}},"Sign In"))))),r.a.createElement("div",{className:"app__header"},r.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})),H?r.a.createElement(b.a,{onClick:function(){return g.signOut()}},"Logout"):r.a.createElement("div",{className:"app__loginContainer"},r.a.createElement(b.a,{onClick:function(){return N(!0)}},"Sign In"),r.a.createElement(b.a,{onClick:function(){return w(!0)}},"Sign Up")),r.a.createElement("h1",null,"Hello"),o.map((function(e){var a=e.id,t=e.post;return r.a.createElement(i,{key:a,username:t.username,caption:t.caption,imageUrl:t.imageUrl})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.1a493740.chunk.js.map