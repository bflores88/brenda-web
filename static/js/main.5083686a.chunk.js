(window["webpackJsonpbrenda-web"]=window["webpackJsonpbrenda-web"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports={SideBar:"SideBar_SideBar__2hk38",Open:"SideBar_Open__3KH8o",Close:"SideBar_Close__27Dms",Logo:"SideBar_Logo__13M5P"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1-Zcd",Desktop:"Toolbar_Desktop__2p-sc"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__3VlVL",active:"NavigationItem_active__YKR7z"}},,,,,,function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__i8nGS"}},,,function(e,t,a){e.exports={DrawerToggle:"BarToggle_DrawerToggle__2Xr__"}},function(e,t,a){e.exports={Content:"Layout_Content__2Mw8k"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3nvpx"}},function(e,t,a){e.exports={Box:"Box_Box__2b623"}},function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),l=a(12),i=(a(35),a(5)),s=a(6),u=a(8),m=a(7),d=a(9),p=a(10),f=a(16),_=a.n(f),h=a(23),E=a.n(h),b=a(17),g=a.n(b),v=function(e){return r.a.createElement("li",{className:g.a.NavigationItem},r.a.createElement(l.b,{to:e.link,activeClassName:g.a.active,exact:!0},e.children))},k=function(e){return r.a.createElement("ul",{className:E.a.NavigationItems},r.a.createElement(v,{link:"/"},"About"),r.a.createElement(v,{link:"/projects"},"Projects"),r.a.createElement(v,{link:"/contact"},"Contact"))},B=a(26),w=a.n(B),j=function(e){return r.a.createElement("div",{onClick:e.clicked,className:w.a.DrawerToggle},r.a.createElement("i",{className:"fas fa-caret-square-down"}))},O=function(e){return r.a.createElement("header",{className:_.a.Toolbar},r.a.createElement(j,{clicked:e.barToggleClicked}),r.a.createElement("nav",{className:_.a.Desktop},r.a.createElement(k,null)))},N=a(27),C=a.n(N),S=a(14),x=a.n(S),T=a(28),y=a.n(T),I=function(e){return e.show?r.a.createElement("div",{className:y.a.Backdrop,onClick:e.clicked}):null},D=function(e){var t=[x.a.SideBar,x.a.Close];return e.open&&(t=[x.a.SideBar,x.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("nav",null,r.a.createElement(k,null))))},H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showSideBar:!1},a.sideBarCloseHandler=function(){a.setState({showSideBar:!1})},a.sideBarToggleHandler=function(){a.setState(function(e){return{showSideBar:!e.showSideBar}})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{barToggleClicked:this.sideBarToggleHandler}),r.a.createElement(D,{open:this.state.showSideBar,closed:this.sideBarCloseHandler}),r.a.createElement("main",{className:C.a.Content},this.props.children))}}]),t}(n.Component),L=(a(41),a(29)),A=a.n(L),F=function(e){return r.a.createElement("div",{className:A.a.Box},e.children)},J=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,r.a.createElement("h1",null," Hi, I'm Brenda!"),r.a.createElement("p",null,"I am a Software Engineer.")))}}]),t}(n.Component),K=(a(42),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement("div",{id:"contact"},r.a.createElement("h1",null,"Contact")))}}]),t}(n.Component)),M=(a(43),a(44),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:J,exact:!0}),r.a.createElement(p.a,{path:"/contact",component:K})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=r.a.createElement(l.a,null,r.a.createElement(M,null));c.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[30,1,2]]]);
//# sourceMappingURL=main.5083686a.chunk.js.map