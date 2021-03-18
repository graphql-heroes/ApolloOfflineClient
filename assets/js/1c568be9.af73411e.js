/*! For license information please see 1c568be9.af73411e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{135:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),f=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=f(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||p[d]||a;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},137:function(e,t,r){"use strict";e.exports=r(138)},138:function(e,t,r){"use strict";var n=r(139),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,u=60112;t.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),c=l("react.context"),u=l("react.forward_ref"),t.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}function m(){}function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var O=h.prototype=new m;O.constructor=h,n(O,y.prototype),O.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];a.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:g.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+N(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),x(i,t,r,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+N(c=e[s],s);u+=x(c,t,r,f,i)}else if("function"==typeof(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=f.call(e),s=0;!(c=e.next()).done;)u+=x(c=c.value,t,r,f=n+N(c,s++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function E(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=g.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in t)w.call(t,f)&&!j.hasOwnProperty(f)&&(a[f]=void 0===t[f]&&void 0!==s?s[f]:t[f])}var f=arguments.length-2;if(1===f)a.children=r;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];a.children=s}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},139:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=i(e),s=1;s<arguments.length;s++){for(var f in r=Object(arguments[s]))o.call(r,f)&&(u[f]=r[f]);if(n){c=n(r);for(var l=0;l<c.length;l++)a.call(r,c[l])&&(u[c[l]]=r[c[l]])}}return u}},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),a=(r(137),r(135)),i={id:"react-native",title:"React Native - using Datastore for Mobile",sidebar_label:"React Native"},c={unversionedId:"react-native",id:"react-native",isDocsHomePage:!1,title:"React Native - using Datastore for Mobile",description:"Offix Datastore provides support for indexeddb by default.",source:"@site/../docs/react-native.md",slug:"/react-native",permalink:"/docs/next/react-native",editUrl:"https://github.com/aerogear/offix/edit/master/website/../docs/react-native.md",version:"current",sidebar_label:"React Native",sidebar:"docs",previous:{title:"React - using Datastore Hooks",permalink:"/docs/next/react"},next:{title:"Datastore CLI",permalink:"/docs/next/cli"}},u=[{value:"Storage",id:"storage",children:[]},{value:"Network Status",id:"network-status",children:[]}],s={toc:u};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Offix Datastore provides support for ",Object(a.b)("inlineCode",{parentName:"p"},"indexeddb")," by default.\nWhen using datastore in React Native is necessary to override the default storage and network implementations. "),Object(a.b)("h2",{id:"storage"},"Storage"),Object(a.b)("p",null,"The Datastore provides an SQLite adapter out of the box. In order to enable this storage options can be passed as the second paramater to the datastore constructor."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'...\nimport { SQLiteAdapter } from "offix-datastore/dist/storage/adapters/sqlite/SQLiteAdapter";\n...\n\nexport const datastore = new DataStore({\n  // datastore config\n}, {\n  storeAdapter: new SQLiteAdapter("offixdb", "1.0") // name & version\n});\n')),Object(a.b)("h2",{id:"network-status"},"Network Status"),Object(a.b)("p",null,"Since the default implementation relies on the browser ",Object(a.b)("inlineCode",{parentName:"p"},"window.navigator")," for network connectivity, it is necessary to provide an implementation of the ",Object(a.b)("inlineCode",{parentName:"p"},"NetworkStatus")," interface for native application. This can be done with ",Object(a.b)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/network"},"Capacitor")," or ",Object(a.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-netinfo"},"@react-native-community/netinfo")," for React Native."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import { NetworkStatus, NetworkStatusEvent } from "offix-datastore";\nimport Observable from "zen-observable";\nimport NetInfo from "@react-native-community/netinfo";\n\n/**\n * Uses web api to detect network status changes\n */\nexport class ReactNativeNetworkStatus implements NetworkStatus {\n\n  public observable: Observable<NetworkStatusEvent>;\n\n  constructor() {\n    this.observable = new Observable((observer) => {\n      NetInfo.addEventListener((state) => observer.next({ isOnline: state.isConnected }));\n    });\n  }\n\n  public subscribe(observer: ZenObservable.Observer<NetworkStatusEvent>) {\n    return this.observable.subscribe(observer);\n  }\n\n  public isOnline(): Promise<boolean> {\n    return new Promise((resolve, reject) => {\n      NetInfo.fetch()\n        .then((state) => resolve(state.isConnected))\n        .catch((err) => reject(err));\n    });\n  }\n}\n')),Object(a.b)("p",null,"This can then be provided as in the config for the Datastore"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export const datastore = new DataStore({\n  // normal config options\n  ...\n  networkStatus: new ReactNativeNetworkStatus(),\n  ...\n}, {\n  // custom engine config\n});\n")))}f.isMDXComponent=!0}}]);