(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=n(10),s=n(8),l=n(17),u=n(18),d=(n(28),n(2)),h=n(3),b=n(5),f=n(4),p=n(6),g=function(e){var t=e.id,n=e.name,o=e.email;return r.a.createElement("div",{className:"tc bg-light-green  dib br3 pa3 ma2 bw2 grow shadow-5"},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(t,"?s=300&d=robohash"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,o)))},m=function(e){var t=e.robots;console.log("CardList");var n=t.map((function(e,n){return r.a.createElement(g,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},v=function(e){var t=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{title:"Here you can see something",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t}))},E=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Ooops. That's not good! "):this.props.children}}]),t}(o.Component),O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"0px solid black",height:"500px"}},e.children)},w=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(b.a)(this,Object(f.a)(t).call(this))).updateCount=function(){e.setState((function(e,t){return{count:e.count+1}}))},e.state={count:0},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),r.a.createElement("button",{style:{backgroundColor:"".concat(this.props.color)},onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(w,{color:"red"}))}}]),t}(o.Component),j=(n(29),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",{className:"tc"}," Loading "):r.a.createElement("div",{className:"tc"},r.a.createElement(y,null),r.a.createElement(v,{searchChange:n}),r.a.createElement(O,null,r.a.createElement(E,null,r.a.createElement(m,{robots:c}))))}}]),t}(o.Component)),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(j),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(30);var k={searchField:""},_={isPending:!0,robots:[],error:""},T=(Object(u.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}})),N=Object(s.d)(T,Object(s.a)(l.a));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends-Redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RoboFriends-Redux","/service-worker.js");C?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.d8a5b3f6.chunk.js.map