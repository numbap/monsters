(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){},,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=(n(2),n(4)),i=n(5),l=n(7),u=n(6),m=n(8),h=(n(15),n(16),n(17),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),o.a.createElement("h1",null,e.monster.name),o.a.createElement("h2",null,e.monster.email))}),d=function(e){return console.log(e),o.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return o.a.createElement(h,{monster:e,key:e.id})}))},f=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),p=(n(19),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,r=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monster Rolodex"),o.a.createElement(f,{handleChange:function(t){return e.setState({searchField:t.target.value})},placeholder:"Search Bitch"}),o.a.createElement(d,{monsters:r}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.8dd9d6fc.chunk.js.map