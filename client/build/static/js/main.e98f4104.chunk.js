(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),c=(a(80),a(18)),s=a(10),i=a(38),u=a(112),E=a(111),m=a(107),d=a(5),S=a.n(d),p=a(7),_=a(9),R=a(20),T=a.n(R),v=a(63);var f=a.n(v).a.create({baseURL:"http://localhost:5000",headers:function(){var e=T.a.getJSON("user");return e&&e.token?{Authorization:"Bearer ".concat(e.token)}:{}}()});f.interceptors.response.use((function(e){return new Promise((function(t,a){t(e)}))}),(function(e){return e.response?403!==e.response.status?new Promise((function(t,a){a(e)})):(T.a.remove("user"),void(window.location="/login")):new Promise((function(t,a){a(e)}))}));var g=f,y={STORY_UNDO_DELETE_REQUEST:"STORY_UNDO_DELETE_REQUEST",STORY_UNDO_DELETE_SUCCESS:"STORY_UNDO_DELETE_SUCCESS",STORY_UNDO_DELETE_FAIL:"STORY_UNDO_DELETE_FAIL",STORY_LIST_REQUEST:"STORY_LIST_REQUEST",STORY_LIST_SUCCESS:"STORY_LIST_SUCCESS",STORY_LIST_FAIL:"STORY_LIST_FAIL",STORY_PRIVATE_REQUEST:"STORY_PRIVATE_REQUEST",STORY_PRIVATE_SUCCESS:"STORY_PRIVATE_SUCCESS",STORY_PRIVATE_FAIL:"STORY_PRIVATE_FAIL",STORY_DETAILS_REQUEST:"STORY_DETAILS_REQUEST",STORY_DETAILS_SUCCESS:"STORY_DETAILS_SUCCESS",STORY_DETAILS_FAIL:"STORY_DETAILS_FAIL",STORY_COMMENT_REQUEST:"STORY_COMMENT_REQUEST",STORY_COMMENT_SUCCESS:"STORY_COMMENT_SUCCESS",STORY_COMMENT_FAIL:"STORY_COMMENT_FAIL",STORY_LIKE_REQUEST:"STORY_LIKE_REQUEST",STORY_LIKE_SUCCESS:"STORY_LIKE_SUCCESS",STORY_LIKE_FAIL:"STORY_LIKE_FAIL",STORY_UNLIKE_REQUEST:"STORY_UNLIKE_REQUEST",STORY_UNLIKE_SUCCESS:"STORY_UNLIKE_SUCCESS",STORY_UNLIKE_FAIL:"STORY_UNLIKE_FAIL",STORY_ADD_REQUEST:"STORY_ADD_REQUEST",STORY_ADD_SUCCESS:"STORY_ADD_SUCCESS",STORY_ADD_FAIL:"STORY_ADD_FAIL",STORY_UPDATE_REQUEST:"STORY_UPDATE_REQUEST",STORY_UPDATE_SUCCESS:"STORY_UPDATE_SUCCESS",STORY_UPDATE_FAIL:"STORY_UPDATE_FAIL",STORY_DELETE_REQUEST:"STORY_DELETE_REQUEST",STORY_DELETE_SUCCESS:"STORY_DELETE_SUCCESS",STORY_DELETE_FAIL:"STORY_DELETE_FAIL",USER_LOGIN_REQUEST:"USER_LOGIN_REQUEST",USER_LOGIN_SUCCESS:"USER_LOGIN_SUCCESS",USER_LOGIN_FAIL:"USER_LOGIN_FAIL",USER_REGISTER_REQUEST:"USER_REGISTER_REQUEST",USER_REGISTER_SUCCESS:"USER_REGISTER_SUCCESS",USER_REGISTER_FAIL:"USER_REGISTER_FAIL",USER_UPDATE_REQUEST:"USER_UPDATE_REQUEST",USER_UPDATE_SUCCESS:"USER_UPDATE_SUCCESS",USER_UPDATE_FAIL:"USER_UPDATE_FAIL",USER_PROFILE_DELETE_REQUEST:"USER_PROFILE_DELETE_REQUEST",USER_PROFILE_DELETE_SUCCESS:"USER_PROFILE_DELETE_SUCCESS",USER_PROFILE_DELETE_FAIL:"USER_PROFILE_DELETE_FAIL",USER_PROFILE_REQUEST:"USER_PROFILE_REQUEST",USER_PROFILE_SUCCESS:"USER_PROFILE_SUCCESS",USER_PROFILE_FAIL:"USER_PROFILE_FAIL",USER_LOGOUT:"USER_LOGOUT",USERS_LIST_REQUEST:"USERS_LIST_REQUEST",USERS_LIST_SUCCESS:"USERS_LIST_SUCCESS",USERS_LIST_FAIL:"USERS_LIST_FAIL"},O=a(8),U={user:null,token:null,loading:!1,error:"",users:[],profile:{},message:""};U.user=T.a.getJSON("user")||null;var h=function(e,t){switch(console.log(e,t),t.type){case y.USER_LOGIN_REQUEST:return{loading:!0};case y.USER_LOGIN_SUCCESS:return{user:t.payload,token:t.payload.token,loading:!1,message:t.payload.message};case y.USER_LOGIN_FAIL:return{loading:!1,error:t.payload};case y.USER_REGISTER_REQUEST:return{loading:!0};case y.USER_REGISTER_SUCCESS:return{loading:!1,message:t.payload.message};case y.USER_REGISTER_FAIL:return{loading:!1,error:t.payload};case y.USER_LOGOUT:return Object(O.a)(Object(O.a)({},e),{},{isLoggedIn:!1,user:null});case y.USER_PROFILE_REQUEST:return{loading:!0};case y.USER_PROFILE_SUCCESS:return{loading:!1,profile:t.payload};case y.USER_PROFILE_FAIL:return{loading:!1,error:t.payload};case y.USER_PROFILE_DELETE_REQUEST:return{loading:!0};case y.USER_PROFILE_DELETE_SUCCESS:return{loading:!1,user:null,message:t.payload};case y.USER_PROFILE_DELETE_FAIL:return{loading:!1,error:t.payload};case y.USERS_LIST_REQUEST:return{loading:!0};case y.USERS_LIST_SUCCESS:return{users:t.payload,loading:!1};case y.USERS_LIST_FAIL:return{loading:!1,error:t.payload};default:return e}},C=Object(n.createContext)(U);function L(e){var t=Object(n.useReducer)(h,U),a=Object(_.a)(t,2),l=a[0],o=a[1];function c(){return(c=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:y.USER_LOGIN_REQUEST,payload:t}),e.prev=1,e.next=4,g.post("/api/user/login",t);case 4:a=e.sent,n=a.data,o({type:y.USER_LOGIN_SUCCESS,payload:n}),T.a.set("user",JSON.stringify(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o({type:y.USER_LOGIN_FAIL,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function s(){return(s=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:y.USER_REGISTER_REQUEST,payload:t}),e.prev=1,e.next=4,g.post("/api/user/signup",t);case 4:a=e.sent,n=a.data,o({type:y.USER_REGISTER_SUCCESS,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o({type:y.USER_REGISTER_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function i(){return(i=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:y.USER_PROFILE_REQUEST,payload:t}),e.prev=1,e.next=4,g.get("/api/user/profile/"+t);case 4:a=e.sent,n=a.data,o({type:y.USER_PROFILE_SUCCESS,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o({type:y.USER_PROFILE_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function u(){return(u=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({type:y.USER_PROFILE_DELETE_REQUEST,payload:t});try{a=g.delete("/api/user/profile/"+t),n=a.data,o({type:y.USER_PROFILE_DELETE_SUCCESS,payload:n})}catch(r){o({type:y.USER_PROFILE_DELETE_FAIL,payload:r.response.data.message})}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(C.Provider,{value:{user:l.user,error:l.error,msg:l.message,loading:l.loading,loginUser:function(e){return c.apply(this,arguments)},logoutUser:function(){T.a.remove("user"),o({type:y.USER_LOGOUT})},register:function(e){return s.apply(this,arguments)},getUser:function(e){return i.apply(this,arguments)},deleteUser:function(e){return u.apply(this,arguments)}}},e.children)}C.Consumer;var b={stories:[],error:"",loading:!1,history:[],story:{},userStories:[],message:""},I=function(e,t){var a,n;switch(console.log(t.payload),t.type){case y.STORY_LIST_REQUEST:return{loading:!0};case y.STORY_LIST_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{stories:t.payload,loading:!1});case y.STORY_LIST_FAIL:return{loading:!1,error:t.payload};case y.STORY_PRIVATE_REQUEST:return{loading:!0};case y.STORY_PRIVATE_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{userStories:t.payload,loading:!1});case y.STORY_PRIVATE_FAIL:return{loading:!1,error:t.payload};case y.STORY_DETAILS_REQUEST:return{loading:!0};case y.STORY_DETAILS_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{story:t.payload,loading:!1});case y.STORY_DETAILS_FAIL:return{loading:!1,error:t.payload};case y.STORY_ADD_REQUEST:return{loading:!0};case y.STORY_ADD_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{stories:[t.payload],message:t.payload.message,loading:!1});case y.STORY_ADD_FAIL:return{loading:!1,error:t.payload};case y.STORY_UPDATE_REQUEST:return{loading:!0};case y.STORY_UPDATE_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{stories:null===(a=e.stories)||void 0===a?void 0:a.map((function(e){return e.id===t.payload.id?t.payload:e})),message:t.payload.message,loading:!1});case y.STORY_UPDATE_FAIL:return{loading:!1,error:t.payload};case y.STORY_DELETE_REQUEST:return{loading:!0};case y.STORY_DELETE_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{stories:null===(n=e.stories)||void 0===n?void 0:n.filter((function(e){return(null===e||void 0===e?void 0:e._id)!==t.payload})),message:t.payload,loading:!1});case y.STORY_DELETE_FAIL:return{loading:!1,error:t.payload};case y.STORY_LIKE_REQUEST:return{loading:!0};case y.STORY_LIKE_SUCCESS:return{story:t.payload,loading:!1};case y.STORY_LIKE_FAIL:return{loading:!1,error:t.payload};case y.STORY_UNLIKE_REQUEST:return{loading:!0};case y.STORY_UNLIKE_SUCCESS:return{loading:!1,story:t.payload};case y.STORY_UNLIKE_FAIL:return{loading:!1,error:t.payload};case y.STORY_COMMENT_REQUEST:return{loading:!0};case y.STORY_COMMENT_SUCCESS:return{loading:!1,story:t.payload};case y.STORY_COMMENT_FAIL:return{loading:!1,error:t.payload};default:return e}},x=Object(n.createContext)(b),N=function(e){var t,a=Object(n.useReducer)(I,b),l=Object(_.a)(a,2),o=l[0],c=l[1],s=r.a.useContext(C).user;function i(){return(i=Object(p.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:y.STORY_LIST_REQUEST}),e.next=4,g.get("/api/stories");case 4:t=e.sent,a=t.data,c({type:y.STORY_LIST_SUCCESS,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c({type:y.STORY_LIST_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(){return(u=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:y.STORY_PRIVATE_REQUEST}),e.next=4,g.get("/api/stories/user/"+t);case 4:a=e.sent,n=a.data,c({type:y.STORY_PRIVATE_SUCCESS,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c({type:y.STORY_PRIVATE_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function E(){return(E=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:y.STORY_DETAILS_REQUEST,payload:t}),e.next=4,g.get("/api/stories/"+t);case 4:a=e.sent,n=a.data,c({type:y.STORY_DETAILS_SUCCESS,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c({type:y.STORY_DETAILS_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function m(){return(m=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({type:y.STORY_DELETE_REQUEST,payload:t});try{a=g.delete("/api/stories/remove/"+t),n=a.data,c({type:y.STORY_DELETE_SUCCESS,payload:n})}catch(r){c({type:y.STORY_DELETE_FAIL,payload:r.response.data.message})}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:y.STORY_ADD_REQUEST,payload:t}),e.prev=1,e.next=4,g.post("/api/stories/new",t);case 4:a=e.sent,n=a.data,c({type:y.STORY_ADD_SUCCESS,payload:n}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),c({type:y.STORY_ADD_FAIL,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function R(){return(R=Object(p.a)(S.a.mark((function e(t,a){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:y.STORY_UPDATE_REQUEST,payload:t,updstory:a}),e.prev=1,e.next=4,g.put("/api/stories/update/"+t,a);case 4:n=e.sent,r=n.data,c({type:y.STORY_UPDATE_SUCCESS,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:y.STORY_UPDATE_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function T(){return(T=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:y.STORY_LIKE_REQUEST,payload:t}),e.prev=1,e.next=4,g.put("/api/stories/like/"+t);case 4:a=e.sent,n=a.data,c({type:y.STORY_LIKE_SUCCESS,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:y.STORY_LIKE_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=Object(p.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:y.STORY_LIKE_REQUEST,payload:t}),e.prev=1,e.next=4,g.put("/api/stories/unlike/"+t);case 4:a=e.sent,n=a.data,c({type:y.STORY_LIKE_SUCCESS,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:y.STORY_LIKE_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(){return(f=Object(p.a)(S.a.mark((function e(t,a){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:y.STORY_COMMENT_REQUEST,payload:t,text:a}),e.prev=1,e.next=4,g.put("/api/stories/comment/"+t,a);case 4:n=e.sent,r=n.data,c({type:y.STORY_COMMENT_SUCCESS,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:y.STORY_COMMENT_FAIL,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[s]);var O=r.a.useState(""),U=Object(_.a)(O,2),h=U[0],L=U[1];var N=h?null===(t=o.stories)||void 0===t?void 0:t.filter((function(e){return e.title.toLowerCase().includes(h.toLowerCase())})):o.stories,w=r.a.useState(!1),A=Object(_.a)(w,2);A[0],A[1];return r.a.createElement(x.Provider,{value:{stories:N,myStories:o.userStories,story:o.story,loading:o.loading,message:o.message,error:o.error,createStory:function(e){return d.apply(this,arguments)},removeStory:function(e){return m.apply(this,arguments)},updateStory:function(e,t){return R.apply(this,arguments)},getStory:function(e){return E.apply(this,arguments)},getPrivateStories:function(e){return u.apply(this,arguments)},likeStory:function(e){return T.apply(this,arguments)},unlikeStory:function(e){return v.apply(this,arguments)},makeComment:function(e,t){return f.apply(this,arguments)},searchStory:function(e){var t=e.currentTarget;L(t.value)},query:h}},e.children)},w=(x.Consumer,a(64)),A=a.n(w);function Y(){document.getElementById("logout");var e=Object(n.useContext)(C),t=e.logoutUser,a=e.user,l=Object(n.useContext)(x),o=l.searchStory,c=l.query,s=r.a.createElement(n.Fragment,null,r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{href:"/signup",className:"text-white"},"Signup"))),d=r.a.createElement(n.Fragment,null,r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{href:"/profile",className:"text-white"},null===a||void 0===a?void 0:a.username)),r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{href:"/users",className:"text-white"})),r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{href:a?"/dashboard":"/",className:"text-white"},"Dashboard")));return r.a.createElement(i.a,{className:"bg-dark",expand:"lg"},r.a.createElement(i.a.Brand,{href:a?"/dashboard":"/"},r.a.createElement("img",{src:A.a,alt:"logo"})),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav "}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(u.a,{className:"ml-auto nav-text"},a?d:s),r.a.createElement(E.a,{inline:!0},r.a.createElement(u.a.Item,null,r.a.createElement(u.a.Link,{href:"/",className:"mr-2"},r.a.createElement(m.a,{onClick:t,variant:"outline-warning",id:"logout"},a?"Logout":"You are logged out"))),r.a.createElement(E.a.Control,{type:"text",className:"white-bg",value:c,onChange:o,placeholder:"Search for a story"}))))}function D(){return r.a.createElement("div",{className:"welcome container"},r.a.createElement("div",{className:"col-10 mx-auto text-title text-center"},r.a.createElement("div",null,r.a.createElement("h3",{className:"bold-text"},"Welcome back to die Geschichten!"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("p",null,"Please log in to share your stories!"),r.a.createElement("p",null,"& Enjoy your time on here")),r.a.createElement(u.a.Link,{href:"/login",className:"primary-btn mt-5"},"login"))))}function F(){return r.a.createElement("div",null,r.a.createElement(D,null))}var k=a(23),j=a.n(k),P=a(108),Q=a(109),G=a(67);function K(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold yellow-text "},t," ",r.a.createElement("strong",{className:"blue-text"},a))))}var M=a(25),B=a(110);function z(){Object(s.g)();var e=r.a.useContext(x),t=e.createStory,a=e.message,l=e.error,o=e.loading,c=r.a.useContext(C).user,i=Object(n.useState)(""),u=Object(_.a)(i,2),d=(u[0],u[1]),R=r.a.useState({id:"",title:"",content:"",status:""}),T=Object(_.a)(R,2),v=T[0],f=T[1],g=r.a.useState(!1),y=Object(_.a)(g,2),U=y[0],h=y[1],L=function(){return h(!1)};function b(){return(b=Object(p.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={user:c._id,title:v.title,content:v.content,status:v.status},console.log(v),e.prev=3,r){e.next=6;break}return e.abrupt("return");case 6:t(r),j.a.fire({position:"top-end",icon:"success",title:a?"".concat(a):"Story created!",showConfirmButton:!1,timer:3e3}),window.location.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),d(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var I=function(e){var t=e.target,a=t.name,n=t.value;f(Object(O.a)(Object(O.a)({},v),{},Object(M.a)({},a,n)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return h(!0)}},"Create Story"),r.a.createElement(B.a,{show:U,onHide:L,animation:!0},r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,null,"Story"),o&&r.a.createElement("div",null,"Loading..."),l&&r.a.createElement("div",{className:"yellow-text"},l)),r.a.createElement(B.a.Body,null,r.a.createElement(E.a,{className:"container"},r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(E.a.Label,null,"Status"),r.a.createElement(E.a.Control,{as:"select",autoFocus:!0,type:"text",name:"status",value:v.status,onChange:I},r.a.createElement("option",{disabled:!0,hidden:!0,value:""}),r.a.createElement("option",{value:"public"},"public"),r.a.createElement("option",{value:"private"},"private"))),r.a.createElement(E.a.Group,{controlId:"email",bssize:"large"},r.a.createElement(E.a.Label,null,"Title"),r.a.createElement(E.a.Control,{autoFocus:!0,required:!0,type:"text",name:"title",value:v.title,onChange:I})),r.a.createElement(E.a.Group,{controlId:"content",bssize:"large"},r.a.createElement(E.a.Label,null,"Content"),r.a.createElement(E.a.Control,{as:"textarea",value:v.content,onChange:I,type:"text",name:"content",required:!0,max:"50"})))),r.a.createElement(B.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:L},"Close"),r.a.createElement(m.a,{variant:"info",type:"submit",disabled:!function(){var e=v.content.length>10,t=v.title.length>5;return e&&t}(),onClick:function(e){return b.apply(this,arguments)},className:"text-blue"},"Create"))))}function V(){var e=r.a.useContext(C),t=e.user,a=e.deleteUser,n=e.logoutUser,l=r.a.useContext(x),o=l.removeStory,s=l.myStories,i=(l.query,l.searchStory,l.getPrivateStories);l.handleClose;return r.a.useEffect((function(){return i(null===t||void 0===t?void 0:t._id),function(){}}),[null===t||void 0===t?void 0:t._id]),r.a.createElement(P.a,{className:"mt-5"},r.a.createElement(K,{name:"Dashboard",title:null===t||void 0===t?void 0:t.username}),r.a.createElement("div",{className:"mt-2 profile "},r.a.createElement(Q.a,null,r.a.createElement(G.a,null,r.a.createElement("div",{className:"shadow profile-left"},r.a.createElement("div",{className:"login-details"},r.a.createElement("div",null,r.a.createElement("img",{src:(null===t||void 0===t?void 0:t.image)?null===t||void 0===t?void 0:t.image:"http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",alt:"userImage",className:"profile-image"})),r.a.createElement("div",{className:"user"},r.a.createElement("p",null,"Username: ",null===t||void 0===t?void 0:t.username),r.a.createElement("p",null,"Email: ",null===t||void 0===t?void 0:t.email),r.a.createElement("p",null,"Joined: ",null===t||void 0===t?void 0:t.date.substring(0,10)))),r.a.createElement("button",{className:"btn btn-danger mt-5",onClick:function(){j.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(a(t._id),n(),j.a.fire("Deleted!","Your file has been deleted.","success"))}))}},"delete account"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:" profile-right shadow"},r.a.createElement("div",{className:"profile-create"},r.a.createElement("button",{className:" btn btn-warning h-25 mt-1  "},r.a.createElement(z,{className:"modal"})),r.a.createElement("span",{className:"profile-search"},r.a.createElement("div",{className:"btn btn-outline-warning"},"Search here..soon"))),0===(null===s||void 0===s?void 0:s.length)?r.a.createElement("p",null,"You have no stories!"):r.a.createElement("table",{className:"table "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"CreatedAt"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(c.b,{to:"/stories/"+e._id,className:"blue-text"},e.title)),r.a.createElement("td",null,e.status),r.a.createElement("td",null,e.createdAt.substring(0,10)),r.a.createElement("td",null,r.a.createElement(c.b,{to:"/story/edit/".concat(e._id)},r.a.createElement("i",{className:"fas fa-pen mr-3"})),r.a.createElement("i",{className:"fas fa-trash-alt",onClick:function(){j.a.fire({height:100,title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(o(e._id),j.a.fire("Deleted!","The story has been deleted.","success")),window.location.reload(!1)}))}})))})))))))))}var q=a(32);function J(e){var t=r.a.useContext(x),a=t.updateStory,l=t.message;console.log(l);var o=Object(s.h)(),c=Object(s.g)(),i=Object(n.useState)(""),u=Object(_.a)(i,2),d=u[0],R=u[1],T=r.a.useState({_id:"",title:"",content:"",status:""}),v=Object(_.a)(T,2),f=v[0],y=v[1],U=o.id;r.a.useEffect((function(){function e(){return(e=Object(p.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/api/stories/edit/"+U);case 2:t=e.sent,a=t.data,y({title:a.title,content:a.content,status:a.status});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[U]);var h=function(e){y(Object(O.a)(Object(O.a)({},f),{},Object(M.a)({},e.target.name,e.target.value)))};function C(){return(C=Object(p.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={_id:U,title:f.title,content:f.content,status:f.status},e.prev=2,n){e.next=5;break}return e.abrupt("return");case 5:a(U,n),j.a.fire({position:"top-end",icon:"success",title:l?"".concat(l):"Story updated!",showConfirmButton:!1,timer:3e3}),c.push("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),R(e.t0.msg);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement(H,null,r.a.createElement(E.a,{className:"container"},r.a.createElement("span",{className:"text-danger"},d),r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(E.a.Label,null,"Status"),r.a.createElement(E.a.Control,{as:"select",autoFocus:!0,type:"text",name:"status",value:f.status,onChange:h},r.a.createElement("option",{disabled:!0,hidden:!0,value:""}),r.a.createElement("option",{value:"public"},"public"),r.a.createElement("option",{value:"private"},"private"))),r.a.createElement(E.a.Group,{controlId:"title",bssize:"large"},r.a.createElement(E.a.Label,null,"Title"),r.a.createElement(E.a.Control,{autoFocus:!0,required:!0,type:"text",name:"title",value:f.title,onChange:h})),r.a.createElement(E.a.Group,{controlId:"content",bssize:"large"},r.a.createElement(E.a.Label,null,"Content"),r.a.createElement(E.a.Control,{as:"textarea",value:f.content,onChange:h,type:"text",name:"content",required:!0})),r.a.createElement("p",{className:"float-right mt-2"},r.a.createElement(m.a,{variant:"secondary",type:"button",className:"mr-3",onClick:function(){return c.push("/profile")}},"Close"),r.a.createElement(m.a,{variant:"info",type:"submit",onClick:function(e){return C.apply(this,arguments)}},"Update"))))}var H=q.a.div.withConfig({displayName:"EditStory__EditContainer",componentId:"o98pii-0"})(["form{width:400px;min-height:50vh;margin:4rem auto;padding:30px;box-shadow:1px 2px 3px rgba(0,0,0,0.1);border-radius:10px;background:white;}"]);function W(){var e=Object(s.g)(),t=r.a.useContext(C),a=t.loginUser,l=t.error,o=t.loading,c=t.user,i=Object(n.useState)(""),u=Object(_.a)(i,2),m=u[0],d=u[1],R=Object(n.useState)(""),T=Object(_.a)(R,2),v=T[0],f=T[1];r.a.useEffect((function(){return c&&e.push("/dashboard"),function(){}}),[c,e]);var g=function(){var e=Object(p.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a({email:m,password:v});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(X,null,r.a.createElement("div",{className:"form mt-3 container"},r.a.createElement("form",{onSubmit:g},r.a.createElement("h4",{className:"text-center"},"Login"),o&&r.a.createElement("div",null,"Loading..."),l&&r.a.createElement("div",{className:"yellow-text"},l),r.a.createElement(E.a.Group,{controlId:"email",bssize:"large"},r.a.createElement(E.a.Label,null,"Email"),r.a.createElement(E.a.Control,{autoFocus:!0,type:"text",value:m,onChange:function(e){return d(e.target.value)}})),r.a.createElement(E.a.Group,{controlId:"password",bssize:"large"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{value:v,onChange:function(e){return f(e.target.value)},type:"password"})),r.a.createElement("button",{type:"submit",className:"secondary-btn"},"Login"))))}var X=q.a.div.withConfig({displayName:"Login__LoginContainer",componentId:"sc-162lksa-0"})(["form{width:360px;margin:4rem auto;padding:30px;box-shadow:1px 2px 3px rgba(0,0,0,0.1);background:var(--Blue);color:white;}"]);function Z(e){var t=r.a.useContext(C),a=t.register,l=t.loading,o=t.error,c=t.user,s=t.msg,i=Object(n.useState)(),u=Object(_.a)(i,2),m=u[0],d=u[1],R=r.a.useState({email:"",username:"",password:""}),T=Object(_.a)(R,2),v=T[0],f=T[1],g=r.a.useState(""),y=Object(_.a)(g,2),U=y[0],h=y[1],L=r.a.useState(""),b=Object(_.a)(L,2),I=b[0],x=b[1];r.a.useEffect((function(){I&&Y()}),[I]),r.a.useEffect((function(){return(c||s)&&e.history.push("/dashboard"),function(){}}),[c,s,e.history]);var N=["image/png","image/jpeg","image/jpg"],w=function(e){var t=new FormData,a=U;if(!a||!N.includes(a.type))return d("invalid image type");t.append("file",U),t.append("upload_preset","geschichten"),t.append("cloud_name","imagecoding"),fetch("https://api.cloudinary.com/v1_1/imagecoding/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){console.log(e),x(e.url),d("")})).catch((function(e){d(e)}))};function A(){return(A=Object(p.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),U?w():Y();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(){var e={username:v.username,email:v.email,password:v.password,image:I};try{a(e)}catch(m){d(m)}},D=function(e){var t=e.target,a=t.name,n=t.value;f(Object(O.a)(Object(O.a)({},v),{},Object(M.a)({},a,n)))};return r.a.createElement($,null,r.a.createElement("div",{className:"form-container"},r.a.createElement(E.a,{onSubmit:function(e){return A.apply(this,arguments)}},m&&r.a.createElement("span",{className:"text-danger"},m),r.a.createElement("h4",{className:"text-center"},"Register"),l&&r.a.createElement("div",null,"Loading..."),o&&r.a.createElement("div",{className:"yellow-text"},o),r.a.createElement(E.a.Group,{controlId:"email",bssize:"large"},r.a.createElement(E.a.Label,null,"Email"),r.a.createElement(E.a.Control,{autoFocus:!0,type:"email",name:"email",value:v.email,onChange:D})),r.a.createElement(E.a.Group,{controlId:"email",bssize:"large"},r.a.createElement(E.a.Label,null,"Username"),r.a.createElement(E.a.Control,{autoFocus:!0,type:"text",name:"username",value:v.username,onChange:D})),r.a.createElement(E.a.Group,{controlId:"password",bssize:"large"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{value:v.password,onChange:D,type:"password",name:"password"})),r.a.createElement(E.a.Group,{controlId:"email",bssize:"large"},r.a.createElement(E.a.Label,null,"Photo"),r.a.createElement(E.a.Control,{autoFocus:!0,type:"file",onChange:function(e){return h(e.target.files[0])}})),r.a.createElement("button",{type:"submit",className:"secondary-btn"},l?"Registering...":"Register"))))}var $=q.a.div.withConfig({displayName:"Signup__SignupContainer",componentId:"sc-1d00aw-0"})(["form{width:360px;margin:2rem auto;padding:30px;box-shadow:1px 2px 3px rgba(0,0,0,0.1);background:var(--Blue);color:white;}}"]);function ee(e){var t,a,n,l,o=Object(s.g)(),c=r.a.useContext(x),i=c.likeStory,u=c.getStory,E=c.story,m=c.unlikeStory,d=c.makeComment,S=r.a.useContext(C).user,p=r.a.useState({text:""}),R=Object(_.a)(p,2),T=R[0],v=R[1];r.a.useEffect((function(){return u(e.match.params.id),function(){}}),[e.match.params.id]);return r.a.createElement("div",{className:"container mt-5 content-page"},r.a.createElement("button",{onClick:function(){o.push("/dashboard"),window.location.reload(!1)},className:"btn back btn-outline-dark"},"Back"),r.a.createElement("div",{className:"story-details"},r.a.createElement("div",{className:"details-left"},r.a.createElement("div",{className:" story shadow  py-5 px-5"},r.a.createElement("p",{className:"title"},r.a.createElement("strong",null,"Title: "),null===E||void 0===E?void 0:E.title),r.a.createElement("p",{className:"justify-body"},r.a.createElement("strong",null,"Content: ")," ",null===E||void 0===E?void 0:E.content),r.a.createElement("p",{className:"date"},r.a.createElement("strong",null,"Date: "),null===E||void 0===E?void 0:E.createdAt),r.a.createElement("p",{className:"date"},r.a.createElement("strong",null,"Story from: "),null===E||void 0===E||null===(t=E.user)||void 0===t?void 0:t.username),r.a.createElement("div",{className:"likes"},(null===E||void 0===E||null===(a=E.likes)||void 0===a?void 0:a.includes(null===S||void 0===S?void 0:S._id))?r.a.createElement("i",{className:"fas fa-thumbs-down mr-3",onClick:function(){m(null===E||void 0===E?void 0:E._id),window.location.reload(!1)}}):r.a.createElement("i",{className:"fas fa-thumbs-up",onClick:function(){i(null===E||void 0===E?void 0:E._id),window.location.reload(!1)}}),r.a.createElement("h4",{className:"red-text"},null===E||void 0===E||null===(n=E.likes)||void 0===n?void 0:n.length," likes"))),r.a.createElement("div",{className:"comments mt-4"},r.a.createElement("h4",null,"Comments"),null===E||void 0===E||null===(l=E.comments)||void 0===l?void 0:l.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{key:e._id},r.a.createElement("span",{style:{fontWeight:"500"}},null===e||void 0===e?void 0:e.username," ",r.a.createElement("br",null)),null===e||void 0===e?void 0:e.text,r.a.createElement("i",{className:"fas fa-thrash-alt"})))})))),r.a.createElement("div",{className:"comment-form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(E._id,{text:T}),window.location.reload(!1),v({text:""})}},r.a.createElement("textarea",{type:"text",placeholder:"Add a comment",onChange:function(e){var t;return v(null===(t=e.target)||void 0===t?void 0:t.value)},required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"})))))}var te=a(113);function ae(e){var t,a,n,l,o=e.story,c=r.a.useContext(C).user,s=r.a.useContext(x),i=s.likeStory,u=s.unlikeStory;return r.a.createElement(te.a,{style:{width:"20rem"},key:o._id},r.a.createElement(te.a.Body,null,r.a.createElement(te.a.Title,null,o.title),r.a.createElement(te.a.Subtitle,{className:"mb-2 text-muted"},"PostedBy: ",null===(t=o.user)||void 0===t?void 0:t.username),r.a.createElement(te.a.Text,null," Date: ",o.createdAt.substring(0,10)),r.a.createElement("hr",null),r.a.createElement(te.a.Link,{href:"/stories/".concat(o._id)},"Read"),r.a.createElement(te.a.Link,null,(null===o||void 0===o||null===(a=o.likes)||void 0===a?void 0:a.includes(null===c||void 0===c?void 0:c._id))?r.a.createElement("i",{className:"fas fa-heart text-danger mr-2",onClick:function(){u(null===o||void 0===o?void 0:o._id),window.location.reload(!1)}}):r.a.createElement("i",{className:"fas fa-heart",onClick:function(){i(null===o||void 0===o?void 0:o._id),window.location.reload(!1)}}),r.a.createElement("span",null," ",null===o||void 0===o||null===(n=o.likes)||void 0===n?void 0:n.length," likes"),r.a.createElement("span",null," ",null===o||void 0===o||null===(l=o.comments)||void 0===l?void 0:l.length," comments"))))}function ne(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Stories loading"),r.a.createElement("div",null),r.a.createElement("div",{className:"spinner-border m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}function re(){var e=r.a.useContext(x),t=e.stories,a=e.loading;return r.a.createElement("div",{className:"container"},a?r.a.createElement(ne,null):r.a.createElement("div",{className:"stories"},null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(ae,{story:e,key:e._id})}))))}function le(){var e=r.a.useContext(C).users;return r.a.createElement("div",null,r.a.createElement("ul",null,null===e||void 0===e?void 0:e.map((function(e){return r.a.createElement("li",{key:e.id},e.username)}))))}function oe(){return r.a.createElement("div",{className:""},r.a.createElement(re,null),r.a.createElement(le,null))}var ce=function(e){return console.log(e,"from notfound"),r.a.createElement("div",{className:"h-100 bg-light container"},r.a.createElement("div",{className:"container mt-5 py-5 "},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:" col-10 mx-auto text-title text-center"},r.a.createElement("h2",null,"404 error"),r.a.createElement("h2",null,"Page not found!"),r.a.createElement("h3",null,"the requested URL"," ",r.a.createElement("span",{className:"text-danger"},e.location.pathname," "),"was not found")))))};var se=function(e){return!!T.a.getJSON("user")?r.a.createElement(s.b,e):r.a.createElement(s.a,{to:"/"})};var ie=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(c.a,null,r.a.createElement(Y,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:F}),r.a.createElement(s.b,{exact:!0,path:"/login",component:W}),r.a.createElement(s.b,{exact:!0,path:"/signup",component:Z}),r.a.createElement(se,{exact:!0,path:"/dashboard",component:oe}),r.a.createElement(se,{exact:!0,path:"/stories/:id",component:ee}),r.a.createElement(se,{exact:!0,path:"/story/edit/:id",component:J}),r.a.createElement(se,{exact:!0,path:"/profile",component:V}),r.a.createElement(s.b,{component:ce}))))};a(104);o.a.render(r.a.createElement(L,null,r.a.createElement(N,null,r.a.createElement(ie,null))),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/logo.4b6e79ce.svg"},75:function(e,t,a){e.exports=a(105)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.e98f4104.chunk.js.map