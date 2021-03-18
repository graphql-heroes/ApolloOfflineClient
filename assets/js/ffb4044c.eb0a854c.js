(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),a=(n(0),n(135)),o={id:"offix-scheduler-introduction",title:"Offix Scheduler Introduction",sidebar_label:"Offix Scheduler"},c={unversionedId:"offix-scheduler-introduction",id:"version-0.13.0/offix-scheduler-introduction",isDocsHomePage:!1,title:"Offix Scheduler Introduction",description:"Offix Scheduler is the core component that delivers the offline queueing and storage in packages such as offix-client. The scheduler can be used in an application directly to build offline workflows, or it can be as the foundation to build new packages and clients with offline functionality.",source:"@site/versioned_docs/version-0.13.0/ref-offix-scheduler.md",slug:"/offix-scheduler-introduction",permalink:"/docs/0.13.0/offix-scheduler-introduction",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-0.13.0/ref-offix-scheduler.md",version:"0.13.0",sidebar_label:"Offix Scheduler",sidebar:"version-0.13.0/docs",previous:{title:"Cookbooks",permalink:"/docs/0.13.0/cookbooks"},next:{title:"What is new in Offix",permalink:"/docs/0.13.0/release-notes"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Getting Started Example",id:"getting-started-example",children:[{value:"Executor",id:"executor",children:[]},{value:"Initialize the <code>OffixScheduler</code>",id:"initialize-the-offixscheduler",children:[]},{value:"Schedule an Operation",id:"schedule-an-operation",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Offix Scheduler is the core component that delivers the offline queueing and storage in packages such as ",Object(a.b)("inlineCode",{parentName:"p"},"offix-client"),". The scheduler can be used in an application directly to build offline workflows, or it can be as the foundation to build new packages and clients with offline functionality."),Object(a.b)("p",null,"Unlike ",Object(a.b)("inlineCode",{parentName:"p"},"offix-client")," which provides many features out of the box, ",Object(a.b)("inlineCode",{parentName:"p"},"offix-scheduler")," provides a lower level set of core functionalities which can be used to build offline experiences."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"NetworkStatus")," interface for defining when an app is and is not offline."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Executor")," interface for defining the operations/behaviour to be scheduled. Example: A HTTP request, sending a message, a GraphQL request."),Object(a.b)("li",{parentName:"ul"},"Offline queue mechanism where all operations are scheduled and fulfilled in order."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"OfflineQueueListener")," functions that are called at various stages in the queue lifecycle. Can be used to extend the queue with additional behaviour."),Object(a.b)("li",{parentName:"ul"},"Offline storage mechanism for persisting operations in the queue and restoring them after application restarts.")),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"/docs/0.13.0/getting-started"},"Offix-Client")," for a fully featured implementation that uses the Offix Scheduler."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Using ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/offix-scheduler"},"npm"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"npm install offix-scheduler\n")),Object(a.b)("p",null,"Or ",Object(a.b)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/offix-scheduler"},"yarn"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"yarn add offix-scheduler\n")),Object(a.b)("h2",{id:"getting-started-example"},"Getting Started Example"),Object(a.b)("p",null,"This example shows how ",Object(a.b)("inlineCode",{parentName:"p"},"offix-scheduler")," could be used to schedule HTTP Requests using the ",Object(a.b)("inlineCode",{parentName:"p"},"fetch")," API found in most browsers. "),Object(a.b)("h3",{id:"executor"},"Executor"),Object(a.b)("p",null,"An ",Object(a.b)("inlineCode",{parentName:"p"},"Executor")," is a class or an object with an ",Object(a.b)("inlineCode",{parentName:"p"},"execute")," method that will be called by the scheduler. This is the core operation/behaviour to be scheduled while offline. In this example we will define a ",Object(a.b)("inlineCode",{parentName:"p"},"FetchExecutor")," class that can make requests using ",Object(a.b)("inlineCode",{parentName:"p"},"fetch"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'class FetchExecutor {\n  // You could pass in some state and initialize it within the constructor\n  constructor() {}\n\n  // The execute function where the http request is made\n  // options is an object which can contain any properties\n  // you wish to pass in.\n  public async execute(options) {\n\n    // in this example options will have a url and a body\n    const { url, body } = options;\n\n    // make the request\n    const res = await fetch(url, {\n      method: "post",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(body)\n    });\n\n    // return the result\n    return res.json();\n  }\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"execute")," method defines the business logic to be scheduled. In this example, we're scheduling HTTP ",Object(a.b)("inlineCode",{parentName:"p"},"POST")," requests using the ",Object(a.b)("inlineCode",{parentName:"p"},"fetch")," API. ",Object(a.b)("inlineCode",{parentName:"p"},"execute")," accepts an ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object which can contain any properties needed to perform the operation. In this case ",Object(a.b)("inlineCode",{parentName:"p"},"execute")," expects the options to have a ",Object(a.b)("inlineCode",{parentName:"p"},"url")," which is where we will send the request and a ",Object(a.b)("inlineCode",{parentName:"p"},"body")," which will be the body of the request."),Object(a.b)("p",null,"This example is simplified as a realistic example would likely need to handle more options and also various error cases."),Object(a.b)("h3",{id:"initialize-the-offixscheduler"},"Initialize the ",Object(a.b)("inlineCode",{parentName:"h3"},"OffixScheduler")),Object(a.b)("p",null,"The example below shows how to initialize the ",Object(a.b)("inlineCode",{parentName:"p"},"OffixScheduler")," with the ",Object(a.b)("inlineCode",{parentName:"p"},"Executor")," we defined above."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const offix = new OffixScheduler({\n  executor: new FetchExecutor()\n});\n\nawait offix.init();\n")),Object(a.b)("h3",{id:"schedule-an-operation"},"Schedule an Operation"),Object(a.b)("p",null,"To schedule an operation, call ",Object(a.b)("inlineCode",{parentName:"p"},"execute")," on the scheduler and pass down any options needed by the ",Object(a.b)("inlineCode",{parentName:"p"},"Executor"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'try {\n  // if online the result is immediately returned\n  const result = await offix.execute({\n    url: "http://example.com/tasks",\n    body: {\n      title: "A New Task!",\n      description: "This was created by Offix Scheduler"\n    }\n  });\n} catch (err) {\n  // check if an offline error occurred and wait for the result.\n  if (err.offline) {\n    const result = await err.watchOfflineChange();\n  }\n}\n')))}u.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);