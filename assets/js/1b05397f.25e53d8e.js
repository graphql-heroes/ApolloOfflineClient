(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,b=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(135)),i={id:"cookbooks",title:"Cookbooks",sidebar_label:"Offline Cookbook"},c={unversionedId:"cookbooks",id:"version-0.14.0/cookbooks",isDocsHomePage:!1,title:"Cookbooks",description:"Offix Cookbook",source:"@site/versioned_docs/version-0.14.0/ref-advanced.md",slug:"/cookbooks",permalink:"/docs/0.14.0/cookbooks",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-0.14.0/ref-advanced.md",version:"0.14.0",sidebar_label:"Offline Cookbook",sidebar:"version-0.14.0/docs",previous:{title:"Android",permalink:"/docs/0.14.0/android"},next:{title:"Offix Scheduler Introduction",permalink:"/docs/0.14.0/offix-scheduler-introduction"}},s=[{value:"Implementing Custom Network Status checks",id:"implementing-custom-network-status-checks",children:[]},{value:"Querying Data when Offline",id:"querying-data-when-offline",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"offix-cookbook"},"Offix Cookbook"),Object(a.b)("p",null,"This section contains multiple tips and tricks for working with Offix."),Object(a.b)("h2",{id:"implementing-custom-network-status-checks"},"Implementing Custom Network Status checks"),Object(a.b)("p",null,"To use your own custom network checks, implement the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/aerogear/offix/blob/0.14.0/packages/offix-offline/src/network/NetworkStatus.ts"},"NetworkStatus"),"\ninterface which provides two functions;"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"  onStatusChangeListener(callback: NetworkStatusChangeCallback): void;\n\n  isOffline(): boolean;\n")),Object(a.b)("p",null,"This interface can be used to redefine what being offline means.\nFor example, for some use cases developers might decide to use scheduler only when Wifi connection is available."),Object(a.b)("h2",{id:"querying-data-when-offline"},"Querying Data when Offline"),Object(a.b)("p",null,"To make sure that data will be available when the devices comes back online, we need to query it with the proper\n",Object(a.b)("inlineCode",{parentName:"p"},"fetchPolicy")),Object(a.b)("p",null,"We recommend to always use the default fetch policy and to let Offix to control the flow. However, for advanced use cases\ndevelopers can modify their approach. "),Object(a.b)("p",null,"For more information see:\n",Object(a.b)("a",{parentName:"p",href:"https://medium.com/@wtr/data-query-patterns-for-graphql-clients-af66830531aa"},"https://medium.com/@wtr/data-query-patterns-for-graphql-clients-af66830531aa")))}u.isMDXComponent=!0}}]);