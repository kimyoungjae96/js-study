!function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=15)}([function(e,r){e.exports=require("react/jsx-runtime")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(14)},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";t.r(r);var n=t(3),c=t.n(n);function s(e,r,t,n,c,s,u){try{var o=e[s](u),i=o.value}catch(e){return void t(e)}o.done?r(i):Promise.resolve(i).then(n,c)}function u(e){return function(){var r=this,t=arguments;return new Promise((function(n,c){var u=e.apply(r,t);function o(e){s(u,n,c,o,i,"next",e)}function i(e){s(u,n,c,o,i,"throw",e)}o(void 0)}))}}var o=t(0),i=t(1),a=t.n(i),l=t(8),p=t.n(l),d=t(9),f=t.n(d),j=t(2),b=function(){return Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/red",children:"Red"})}),Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/blue",children:"Blue"})}),Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/users",children:"Users"})})]})},x=function(){return Object(o.jsx)("div",{className:"Red",children:"Red"})},O=function(){return Object(o.jsx)(x,{})},h=function(){return Object(o.jsx)("div",{className:"Blue",children:"Blue"})},v=function(){return Object(o.jsx)(h,{})},m=function(e){var r=e.users;return r?Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(j.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},y=t(4);function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){S(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _=t(10),R=t.n(_),w=t(5),P=c.a.mark(C),U=c.a.mark(D),k="users/GET_USER",T=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},q=function(e){return{type:k,payload:e}},G=function(e){return R.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function C(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.call)(G,e.payload);case 3:return r=t.sent,t.next=6,Object(w.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(w.put)({type:"users/GET_USERS_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),P,null,[[0,8]])}function D(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.takeEvery)(k,C);case 2:case"end":return e.stop()}}),U)}var L={users:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return E(E({},e),{},{loading:E(E({},e.loading),{},{users:!0}),error:E(E({},e.error),{},{users:null})});case"users/GET_USERS_SUCCESS":return E(E({},e),{},{loading:E(E({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return E(E({},e),{},{loading:E(E({},e.loading),{},{users:!1}),error:E(E({},e.error),{},{users:r.payload})});case k:return E(E({},e),{},{loading:E(E({},e.loading),{},{user:!0}),error:E(E({},e.error),{},{user:null})});case"users/GET_USER_SUCCESS":return E(E({},e),{},{loading:E(E({},e.loading),{},{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return E(E({},e),{},{loading:E(E({},e.loading),{},{user:!1}),error:E(E({},e.error),{},{user:r.payload})});default:return e}},A=Object(i.createContext)(null),F=A,I=function(e){var r=e.resolve,t=Object(i.useContext)(A);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},M=a.a.useEffect,B=Object(y.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=u(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,R.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(T(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return M((function(){r||t()}),[t,r]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{users:r}),Object(o.jsx)(I,{resolve:t})]})})),J=function(e){var r=e.user,t=r.email,n=r.name,c=r.username;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:[c," ",n]}),Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:["e-mail: ",t]})})]})},Y=function(e){var r,t,n=e.id,c=Object(y.useSelector)((function(e){return e.users.user})),s=Object(y.useDispatch)();return r=function(){return s(q(n))},(t=Object(i.useContext)(A))&&!t.done&&t.promises.push(Promise.resolve(r())),Object(i.useEffect)((function(){c&&c.id===parseInt(n,10)||s(q(n))}),[s,n,c]),c?Object(o.jsx)(J,{user:c}):null},$=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{}),Object(o.jsx)(j.Route,{path:"/users/:id",render:function(e){var r=e.match;return Object(o.jsx)(Y,{id:r.params.id})}})]})};var z=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(j.Route,{path:"/red",component:O}),Object(o.jsx)(j.Route,{path:"/blue",component:v}),Object(o.jsx)(j.Route,{path:"/users",component:$})]})},H=t(11),K=t.n(H),Q=t(12),V=t.n(Q),W=t(6),X=t(7),Z=t.n(X),ee=t(13),re=t.n(ee),te=c.a.mark(ne);function ne(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.all)([D()]);case 2:case"end":return e.stop()}}),te)}var ce=Object(W.combineReducers)({users:N}),se=JSON.parse(V.a.readFileSync(K.a.resolve("./build/asset-manifest.json"),"utf8")),ue=Object.keys(se.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(se.files[e],'"><\/script>')})).join("");function oe(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat(se.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,"\n      </div>\n      ").concat(r,'\n      <script src="').concat(se.files["runtime-main.js"],'"><\/script>\n      ').concat(ue,'\n      <script src="').concat(se.files["main.js"],'"><\/script>\n    </body>\n    </html>\n      ')}var ie=f()(),ae=function(){var e=u(c.a.mark((function e(r,t,n){var s,u,i,a,l,d,f,b,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},u=Z()(),i=Object(W.createStore)(ce,Object(W.applyMiddleware)(re.a,u)),a=u.run(ne).toPromise(),l={done:!1,promises:[]},d=Object(o.jsx)(F.Provider,{value:l,children:Object(o.jsx)(y.Provider,{store:i,children:Object(o.jsx)(j.StaticRouter,{location:r.url,context:s,children:Object(o.jsx)(z,{})})})}),p.a.renderToStaticMarkup(d),i.dispatch(X.END),e.prev=8,e.next=11,a;case 11:return e.next=13,Promise.all(l.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",t.staus(500));case 18:l.done=!0,f=p.a.renderToString(d),b=JSON.stringify(i.getState()).replace(/</g,"\\u003c"),x="<script>__PRELOADED_STATE__ = ".concat(b,"<\/script>"),t.send(oe(f,x));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(r,t,n){return e.apply(this,arguments)}}(),le=f.a.static(K.a.resolve("./build"),{index:!1});ie.use(le),ie.use(ae),ie.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);