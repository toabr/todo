(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,o){e.exports=o(26)},21:function(e,t,o){},24:function(e,t,o){},26:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),r=o(7),c=o.n(r),l=(o(21),o(8)),s=o(9),d=o(12),i=o(10),u=o(13),m=o(29),p=o(28);function v(e){return a.a.createElement("div",null,a.a.createElement("h1",null,"todo"),a.a.createElement("input",{type:"text",name:"q",placeholder:"type your next todo",value:e.todo,onChange:function(t){return e.onInputChange(t)},onKeyPress:function(t){"Enter"===t.key&&e.saveTodo()}}),a.a.createElement("button",{onClick:e.saveTodo},"save"))}var h=o(27);function f(e){var t=e.todos.map(function(t,o){return a.a.createElement("li",{key:o},a.a.createElement(h.a,{to:"/todo/".concat(o)},t),a.a.createElement("button",{onClick:function(){return e.deleteTodo(o)}},"x"))});return a.a.createElement("ul",null,t)}o(24);var E=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={todo:"testing",todos:["eat","sleep","design"]},o.onInputChange=function(e){var t=e.target.value;o.setState({todo:t}),console.log("inputChange")},o.saveTodo=function(){var e=o.state.todo;if(""===e)alert("todo is empty!");else{var t=o.state.todos;t.push(e),o.setState({todos:t}),o.setState({todo:""}),console.log("saveTodo",e)}},o.deleteTodo=function(e){var t=o.state.todos;t.splice(e,1),o.setState({todos:t}),console.log("deleteTodo @",e)},o}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(m.a,{basename:"/"},a.a.createElement("div",{className:"App"},a.a.createElement(p.a,{exact:!0,path:"/",render:function(){return a.a.createElement("div",null,a.a.createElement(v,{className:"App-header",todo:e.state.todo,saveTodo:e.saveTodo,onInputChange:e.onInputChange}),a.a.createElement(f,{todos:e.state.todos,deleteTodo:e.deleteTodo}))}}),a.a.createElement(p.a,{path:"/todo/:id",render:function(t){return a.a.createElement("h1",null,"todo: ",e.state.todos[t.match.params.id])}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.7b503fc6.chunk.js.map