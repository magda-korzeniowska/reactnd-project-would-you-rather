(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/angie-newman.bb16ee27.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/vipin-cordoba.d9d69048.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/erik-roman.76547045.jpg"},39:function(e,t,a){e.exports=a(59)},44:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),s=a.n(r),i=(a(44),a(6)),c=a(7),u=a(9),l=a(8),m=a(10),d=a(13),p=a(17),h=a(2),v=a(38),b=a(4),f=a(1),E=a(33),O=a.n(E),w=a(34),g=a.n(w),j=a(35),N=a.n(j),q={angienewman:{id:"angienewman",name:"Angie Newman",avatarURL:O.a,answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},vipincordoba:{id:"vipincordoba",name:"Vipin Cordoba",avatarURL:g.a,answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},erikroman:{id:"erikroman",name:"Erik Roman",avatarURL:N.a,answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},y={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"angienewman",timestamp:1467166872634,optionOne:{votes:["angienewman"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"erikroman",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["erikroman","angienewman"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"angienewman",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["angienewman"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"vipincordoba",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["angienewman"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"vipincordoba",timestamp:1489579767190,optionOne:{votes:["vipincordoba"],text:"find $50 yourself"},optionTwo:{votes:["erikroman"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"erikroman",timestamp:1493579767190,optionOne:{votes:["erikroman"],text:"write JavaScript"},optionTwo:{votes:["vipincordoba"],text:"write Swift"}}};function T(e){return new Promise(function(t,a){var n=e.author,o=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout(function(){y=Object(f.a)({},y,Object(b.a)({},o.id,o)),q=Object(f.a)({},q,Object(b.a)({},n,Object(f.a)({},q[n],{questions:q[n].questions.concat([o.id])}))),t(o)},1e3)})}function x(e,t,a){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise(function(e,o){setTimeout(function(){q=Object(f.a)({},q,Object(b.a)({},t,Object(f.a)({},q[t],{answers:Object(f.a)({},q[t].answers,Object(b.a)({},a,n))}))),y=Object(f.a)({},y,Object(b.a)({},a,Object(f.a)({},y[a],Object(b.a)({},n,Object(f.a)({},y[a][n],{votes:y[a][n].votes.concat([t])}))))),e()},500)})}(e)}var U="RECEIVE_USERS";var k=a(12),S=a.n(k),C="RECEIVE_QUESTIONS",L="SAVE_QUESTION_ANSWER",R="ADD_QUESTION";function A(e,t){return function(a,n){var o,r=n().authedUser;return a(Object(k.showLoading)()),(o={optionOneText:e,optionTwoText:t,author:r},T(o)).then(function(e){return a(function(e){return{type:R,question:e}}(e))}).then(function(){return a(Object(k.hideLoading)())})}}function z(e){return function(t){return t(Object(k.showLoading)()),x(e).then(function(){t(function(e){var t=e.authedUser,a=e.qid,n=e.answer;return{type:L,authedUser:t,qid:a,answer:n}}(e))}).then(function(){return t(Object(k.hideLoading)())})}}function I(){return function(e){return e(Object(k.showLoading)()),Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(f.a)({},q))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(f.a)({},y))},1e3)})]).then(function(e){var t=Object(v.a)(e,2);return{users:t[0],questions:t[1]}}).then(function(t){var a=t.users,n=t.questions;e(function(e){return{type:U,users:e}}(a)),e(function(e){return{type:C,questions:e}}(n)),e(Object(k.hideLoading)())})}}var Q=Object(h.connect)(function(e,t){var a=e.authedUser,n=e.users;return{authedUser:a,question:e.questions[t.id],users:n}})(function(e){var t=e.authedUser,a=e.question,n=e.users,r=e.id;return o.a.createElement("div",{className:"question-box"},o.a.createElement("div",{className:"question-box-form"},t===a.author?o.a.createElement("div",{className:"question-author"},"You asked:"):o.a.createElement("div",{className:"question-author"},n[a.author].name," asks:"),o.a.createElement("h3",{className:"question-form-title"},"Would you rather..."),o.a.createElement("div",{className:"box-choice"},o.a.createElement("p",null,a.optionOne.text),o.a.createElement("p",null,"or"),o.a.createElement("p",null,a.optionTwo.text)),o.a.createElement(d.b,{to:"question/".concat(r),className:"quiz-btn"},"GO TO QUIZ")),o.a.createElement("img",{src:n[a.author].avatarURL,alt:"Avatar of ".concat(n[a.author].name),className:"user-avatar"}))});var D=Object(h.connect)(function(e,t){var a=e.authedUser,n=e.users;return{authedUser:a,question:e.questions[t.id],users:n}})(function(e){var t=e.authedUser,a=e.question,n=e.users,r=a.optionOne.votes.length+a.optionTwo.votes.length,s=a.optionOne.votes.length,i=a.optionTwo.votes.length;return o.a.createElement("div",{className:"results"},o.a.createElement("div",{className:"results-table"},t===a.author?o.a.createElement("div",{className:"question-author"},"Asked by you:"):o.a.createElement("div",{className:"question-author"},"Asked by ",n[a.author].name,":"),o.a.createElement("h3",{className:"question-form-title"},"Would you rather..."),o.a.createElement("div",{className:"show-results"},o.a.createElement("div",{className:"results-option-one"},o.a.createElement("p",null,"...",a.optionOne.text),a.optionOne.votes.includes(t)&&o.a.createElement("div",{className:"badge-wrapper"},o.a.createElement("span",{className:"badge"},"Your choice")),o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar",style:{width:"".concat(s/r*100,"%")}},"".concat((s/r*100).toFixed(0),"%"))),o.a.createElement("p",{className:"votes"},s," out of ",r," votes")),o.a.createElement("div",{className:"results-option-two"},o.a.createElement("p",null,"...",a.optionTwo.text),a.optionTwo.votes.includes(t)&&o.a.createElement("div",{className:"badge-wrapper"},o.a.createElement("span",{className:"badge"},"Your choice")),o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar",style:{width:"".concat(i/r*100,"%")}},"".concat((i/r*100).toFixed(0),"%"))),o.a.createElement("p",{className:"votes"},i," out of ",r," votes")))),o.a.createElement("img",{src:n[a.author].avatarURL,alt:"Avatar of ".concat(n[a.author].name),className:"user-avatar"}))}),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={showUnansweredQuestions:!0},a.showQuestions=function(){a.setState({showUnansweredQuestions:!0})},a.showResults=function(){a.setState({showUnansweredQuestions:!1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.showUnansweredQuestions,t=this.props,a=t.questionIds,n=t.answeredQuestionIds;return o.a.createElement("div",{className:"dashboard-container"},o.a.createElement("div",{className:"questions-btns"},o.a.createElement("button",{className:"question-btn unanswered-btn",onClick:this.showQuestions},"QUESTIONS"),o.a.createElement("button",{className:"question-btn results-btn",onClick:this.showResults},"RESULTS")),e&&0===a.length&&o.a.createElement("div",{className:"question-end"},"No more questions!"),o.a.createElement("div",null,!0===e&&o.a.createElement("ul",{className:"questions-list"},a.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement(Q,{id:e}))})),!1===e&&o.a.createElement("ul",{className:"questions-list"},n.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement(D,{id:e}))}))))}}]),t}(n.Component);var H=Object(h.connect)(function(e){var t=e.authedUser,a=e.questions,n=Object.values(a).filter(function(e){return!e.optionOne.votes.includes(t)&&!e.optionTwo.votes.includes(t)}),o=Object.values(a).filter(function(e){return e.optionOne.votes.includes(t)||e.optionTwo.votes.includes(t)});return{authedUser:t,questionIds:Object.values(n).sort(function(e,t){return t.timestamp-e.timestamp}).map(function(e){return e.id}),answeredQuestionIds:Object.values(o).sort(function(e,t){return t.timestamp-e.timestamp}).map(function(e){return e.id})}})(P),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={optionOne:"",optionTwo:"",toHome:!1},a.handleChangeOne=function(e){a.setState({optionOne:e.target.value})},a.handleChangeTwo=function(e){a.setState({optionTwo:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.optionOne,o=t.optionTwo,r=a.props.dispatch;""===n?alert("Please add two options"):(r(A(n,o)),a.setState(function(){return{optionOne:"",optionTwo:"",toHome:!0}}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionOne,a=e.optionTwo;return!0===e.toHome?o.a.createElement(p.a,{to:"/"}):o.a.createElement("div",{className:"new-question"},o.a.createElement("h3",{className:"new-question-title"},"Create New Question"),o.a.createElement("form",{className:"new-question-form",onSubmit:this.handleSubmit},o.a.createElement("h2",{className:"new-question-form-title"},"Would you rather ..."),o.a.createElement("input",{placeholder:"Enter Option One Text Here",value:t,onChange:this.handleChangeOne,className:"option newOptionOne"}),o.a.createElement("p",{className:"new-question-form-alternative"},"or"),o.a.createElement("input",{placeholder:"Enter Option Two Text Here",value:a,onChange:this.handleChangeTwo,className:"option newOptionTwo"}),o.a.createElement("br",null),o.a.createElement("button",{className:"submit-btn",type:"submit",disabled:""===t||""===a},"SUBMIT")))}}]),t}(n.Component),B=Object(h.connect)()(W);var _=Object(h.connect)(function(e){var t=e.users;return{users:Object.values(t).map(function(e){return Object.assign({},e,{answersNo:Object.keys(e.answers).length,questionsNo:e.questions.length})}).sort(function(e,t){return t.answersNo+t.questionsNo-(e.answersNo+e.questionsNo)})}})(function(e){var t=e.users;return o.a.createElement("div",{className:"leaderboard-container"},o.a.createElement("h2",{className:"leaderboard-title"},"Leaderboard"),t.map(function(e){return o.a.createElement("div",{className:"leaderboard-card",key:e.id},o.a.createElement("img",{src:e.avatarURL,alt:"Avatar of ".concat(e.name),className:"user-avatar leaderboard-user-avatar"}),o.a.createElement("div",{className:"leaderboard-details"},o.a.createElement("h4",{className:"leaderboard-name"},e.name),o.a.createElement("p",{className:"details"},"Answered questions: ",e.answersNo),o.a.createElement("p",{className:"details"},"Added questions: ",e.questionsNo)),o.a.createElement("div",{className:"total-score"},o.a.createElement("p",null,"Total score"),o.a.createElement("p",null,e.answersNo+e.questionsNo)))}))}),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={option:"",toResults:!1},a.handleChange=function(e){a.setState({option:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.dispatch,o=t.question,r=t.authedUser,s=a.state.option;""===s?alert("Please select an answer"):(n(z({authedUser:r,qid:o.id,answer:s})),a.setState(function(){return{toResults:!0}}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authedUser,a=e.question,n=e.users,r=e.id;return!0===this.state.toResults?o.a.createElement(D,{id:r}):o.a.createElement("div",{className:"question"},o.a.createElement("form",{className:"question-form",onSubmit:this.handleSubmit},t===a.author?o.a.createElement("div",{className:"question-author"},"You asked:"):o.a.createElement("div",{className:"question-author"},n[a.author].name," asks:"),o.a.createElement("h3",{className:"question-form-title"},"Would you rather..."),o.a.createElement("div",{className:"choice"},o.a.createElement("input",{type:"radio",name:"options",value:"optionOne",id:"optionOne",onChange:this.handleChange}),o.a.createElement("label",{className:"question-choice option-one",htmlFor:"optionOne"},a.optionOne.text),o.a.createElement("br",null),o.a.createElement("input",{type:"radio",name:"options",value:"optionTwo",id:"optionTwo",onChange:this.handleChange}),o.a.createElement("label",{className:"question-choice option-two",htmlFor:"optionTwo"},a.optionTwo.text),o.a.createElement("br",null),o.a.createElement("button",{className:"submit-btn",type:"submit"},"SUBMIT"))),o.a.createElement("img",{src:n[a.author].avatarURL,alt:"Avatar of ".concat(n[a.author].name),className:"user-avatar"}))}}]),t}(n.Component);var M=Object(h.connect)(function(e,t){var a=e.authedUser,n=e.users;return{authedUser:a,question:e.questions[t.id],users:n}})(F);var Y=function(e){return o.a.createElement("div",null,o.a.createElement("h2",{className:"page-not-found"},"404 Page Not Found"))};var V=Object(h.connect)(function(e,t){e.authedUser;var a=e.questions;return{id:t.match.params.id,questions:a}})(function(e){var t=e.id;return void 0===e.questions[t]?o.a.createElement(Y,null):o.a.createElement("div",{className:"question-page-container"},o.a.createElement("h2",{className:"question-page-title"},"Answer the Question"),o.a.createElement(M,{id:t}))}),J="SET_AUTHED_USER";function $(e){return{type:J,id:e}}var G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={isLogged:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleLogin",value:function(e){(0,this.props.dispatch)($(e)),this.setState(function(){return{isLogged:!0}})}},{key:"render",value:function(){var e=this,t=(this.props.location||{from:{pathname:"/"}}).from,a=this.state.isLogged,n=this.props.users;return a?o.a.createElement(p.a,{to:t}):o.a.createElement("div",{className:"login"},o.a.createElement("h1",{className:"app-title"},"WOULD YOU RATHER?"),o.a.createElement("ul",{className:"dropdown"},o.a.createElement("button",{className:"drop-btn"},"Please login to take a quiz"),Object.keys(n).map(function(t){return o.a.createElement("li",{className:"dropdown-content",key:n[t].id,onClick:function(){e.handleLogin(n[t].id)}},o.a.createElement("div",{className:"card-body"},o.a.createElement("img",{className:"card-avatar",alt:n[t].name,src:n[t].avatarURL,height:"80"}),o.a.createElement("p",{className:"card-name"},n[t].name)))})),o.a.createElement("footer",{className:"footer"},o.a.createElement("p",null,"App created for UDACITY React Nanodegree")))}}]),t}(n.Component);var Z=Object(h.connect)(function(e){return{users:e.users}})(G),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleLogout=function(){(0,a.props.dispatch)($(null))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authedUser,a=e.users;return o.a.createElement("nav",{className:"nav"},o.a.createElement("ul",{className:"nav-ul"},o.a.createElement("li",{className:"nav-items"},o.a.createElement(d.c,{to:"/",exact:!0,activeClassName:"active"},"HOME")),o.a.createElement("li",{className:"nav-items"},o.a.createElement(d.c,{to:"/add",activeClassName:"active"},"ADD QUESTION")),o.a.createElement("li",{className:"nav-items"},o.a.createElement(d.c,{to:"/leaderboard",activeClassName:"active"},"LEADERBOARD")),o.a.createElement("li",{className:"nav-items logout"},o.a.createElement(d.c,{to:"/",activeClassName:"active",onClick:this.handleLogout},o.a.createElement("img",{className:"nav-avatar",alt:"user-avatar",src:a[t].avatarURL}),o.a.createElement("span",{className:"logged-name"},a[t].name)," LOGOUT"))))}}]),t}(n.Component);var X=Object(h.connect)(function(e){return{authedUser:e.authedUser,users:e.users}})(K),ee=(a(58),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(I())}},{key:"render",value:function(){var e=this.props.loading;return o.a.createElement(d.a,{basename:"/reactnd-project-would-you-rather"},o.a.createElement(n.Fragment,null,o.a.createElement(S.a,null),o.a.createElement("div",{className:"App"},!0===e?o.a.createElement(Z,null):o.a.createElement("div",null,o.a.createElement(X,null),o.a.createElement(p.d,null,o.a.createElement(p.b,{path:"/",exact:!0,component:H}),o.a.createElement(p.b,{path:"/question/:id",component:V}),o.a.createElement(p.b,{path:"/add",component:B}),o.a.createElement(p.b,{path:"/leaderboard",component:_}),o.a.createElement(p.b,{path:"/login",component:Z}),o.a.createElement(p.b,{component:Y}))))))}}]),t}(n.Component));var te=Object(h.connect)(function(e){return{loading:null===e.authedUser}})(ee),ae=a(16);var ne=Object(ae.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return t.id;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(f.a)({},e,t.users);case L:return Object(f.a)({},e,Object(b.a)({},t.authedUser,Object(f.a)({},e[t.authedUser],{answers:Object(f.a)({},e[t.authedUser].answers,Object(b.a)({},t.qid,[t.answer]))})));case R:return Object(f.a)({},e,Object(b.a)({},t.question.author,Object(f.a)({},e[t.question.author],{questions:e[t.question.author].questions.concat([t.qid])})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(f.a)({},e,t.questions);case L:return Object(f.a)({},e,Object(b.a)({},t.qid,Object(f.a)({},e[t.qid],Object(b.a)({},t.answer,Object(f.a)({},e[t.qid][t.answer],{votes:e[t.qid][t.answer].votes.concat([t.authedUser])})))));case R:return Object(f.a)({},e,Object(b.a)({},t.question.id,t.question));default:return e}},loadingBar:k.loadingBarReducer}),oe=a(37),re=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},se=Object(ae.a)(oe.a,re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=Object(ae.d)(ne,se);s.a.render(o.a.createElement(h.Provider,{store:ie},o.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.9894f2e2.chunk.js.map