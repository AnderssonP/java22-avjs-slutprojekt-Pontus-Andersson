function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequire9b8f;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequire9b8f=i),i.register("iTWFB",(function(t,n){
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,o;e(t.exports,"Fragment",(()=>r),(e=>r=e)),e(t.exports,"jsx",(()=>a),(e=>a=e)),e(t.exports,"jsxs",(()=>o),(e=>o=e));var s=i("2TgRs"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var r,a={},i=null,o=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!f.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:i,ref:o,props:a,_owner:d.current}}r=u,a=h,o=h})),i.register("2TgRs",(function(e,t){e.exports=i("1lshC")})),i.register("1lshC",(function(t,n){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,i,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,k,_,S,E,I,C,T,x,P,N,R,O,L,A,D,M,z;e(t.exports,"Children",(()=>r),(e=>r=e)),e(t.exports,"Component",(()=>a),(e=>a=e)),e(t.exports,"Fragment",(()=>i),(e=>i=e)),e(t.exports,"Profiler",(()=>o),(e=>o=e)),e(t.exports,"PureComponent",(()=>s),(e=>s=e)),e(t.exports,"StrictMode",(()=>l),(e=>l=e)),e(t.exports,"Suspense",(()=>u),(e=>u=e)),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>c),(e=>c=e)),e(t.exports,"cloneElement",(()=>d),(e=>d=e)),e(t.exports,"createContext",(()=>f),(e=>f=e)),e(t.exports,"createElement",(()=>h),(e=>h=e)),e(t.exports,"createFactory",(()=>p),(e=>p=e)),e(t.exports,"createRef",(()=>m),(e=>m=e)),e(t.exports,"forwardRef",(()=>g),(e=>g=e)),e(t.exports,"isValidElement",(()=>v),(e=>v=e)),e(t.exports,"lazy",(()=>y),(e=>y=e)),e(t.exports,"memo",(()=>b),(e=>b=e)),e(t.exports,"startTransition",(()=>w),(e=>w=e)),e(t.exports,"unstable_act",(()=>k),(e=>k=e)),e(t.exports,"useCallback",(()=>_),(e=>_=e)),e(t.exports,"useContext",(()=>S),(e=>S=e)),e(t.exports,"useDebugValue",(()=>E),(e=>E=e)),e(t.exports,"useDeferredValue",(()=>I),(e=>I=e)),e(t.exports,"useEffect",(()=>C),(e=>C=e)),e(t.exports,"useId",(()=>T),(e=>T=e)),e(t.exports,"useImperativeHandle",(()=>x),(e=>x=e)),e(t.exports,"useInsertionEffect",(()=>P),(e=>P=e)),e(t.exports,"useLayoutEffect",(()=>N),(e=>N=e)),e(t.exports,"useMemo",(()=>R),(e=>R=e)),e(t.exports,"useReducer",(()=>O),(e=>O=e)),e(t.exports,"useRef",(()=>L),(e=>L=e)),e(t.exports,"useState",(()=>A),(e=>A=e)),e(t.exports,"useSyncExternalStore",(()=>D),(e=>D=e)),e(t.exports,"useTransition",(()=>M),(e=>M=e)),e(t.exports,"version",(()=>z),(e=>z=e));var j=Symbol.for("react.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),$=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function Z(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ae=Object.prototype.hasOwnProperty,ie={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function se(e,t,n){var r,a={},i=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)ae.call(t,r)&&!oe.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:j,type:e,key:i,ref:o,props:a,_owner:ie.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function de(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var o=!1;if(null===e)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case j:case U:o=!0}}if(o)return a=a(o=e),e=""===r?"."+ce(o,0):r,re(a)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),de(a,t,n,"",(function(e){return e}))):null!=a&&(le(a)&&(a=function(e,t){return{$$typeof:j,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(ue,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=""===r?".":r+":",re(e))for(var s=0;s<e.length;s++){var l=r+ce(i=e[s],s);o+=de(i,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)o+=de(i=i.value,t,n,l=r+ce(i,s++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fe(e,t,n){if(null==e)return e;var r=[],a=0;return de(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function he(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:fe,forEach:function(e,t,n){fe(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return fe(e,(function(){t++})),t},toArray:function(e){return fe(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a=Z,i=F,o=H,s=te,l=B,u=K,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:ie},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),a=e.key,i=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,o=ie.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ae.call(t,l)&&!oe.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:j,type:e.type,key:a,ref:i,props:r,_owner:o}},f=function(e){return(e={$$typeof:$,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:V,_context:e},e.Consumer=e},h=se,p=function(e){var t=se.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:W,render:e}},v=le,y=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:he}},b=function(e,t){return{$$typeof:q,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},k=function(){throw Error("act(...) is not supported in production builds of React.")},_=function(e,t){return pe.current.useCallback(e,t)},S=function(e){return pe.current.useContext(e)},E=function(){},I=function(e){return pe.current.useDeferredValue(e)},C=function(e,t){return pe.current.useEffect(e,t)},T=function(){return pe.current.useId()},x=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},P=function(e,t){return pe.current.useInsertionEffect(e,t)},N=function(e,t){return pe.current.useLayoutEffect(e,t)},R=function(e,t){return pe.current.useMemo(e,t)},O=function(e,t,n){return pe.current.useReducer(e,t,n)},L=function(e){return pe.current.useRef(e)},A=function(e){return pe.current.useState(e)},D=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},z="18.2.0"})),i.register("je6Lo",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,o,s,l,u,c,d,f,h,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>r),(e=>r=e)),e(t.exports,"createPortal",(()=>a),(e=>a=e)),e(t.exports,"createRoot",(()=>o),(e=>o=e)),e(t.exports,"findDOMNode",(()=>s),(e=>s=e)),e(t.exports,"flushSync",(()=>l),(e=>l=e)),e(t.exports,"hydrate",(()=>u),(e=>u=e)),e(t.exports,"hydrateRoot",(()=>c),(e=>c=e)),e(t.exports,"render",(()=>d),(e=>d=e)),e(t.exports,"unmountComponentAtNode",(()=>f),(e=>f=e)),e(t.exports,"unstable_batchedUpdates",(()=>h),(e=>h=e)),e(t.exports,"unstable_renderSubtreeIntoContainer",(()=>p),(e=>p=e)),e(t.exports,"version",(()=>m),(e=>m=e));var g=i("2TgRs"),v=i("lBiG1");function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function k(e,t){_(e,t),_(e+"Capture",t)}function _(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),E=Object.prototype.hasOwnProperty,I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},T={};function x(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){P[e]=new x(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];P[t]=new x(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){P[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){P[e]=new x(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){P[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){P[e]=new x(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){P[e]=new x(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){P[e]=new x(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){P[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)}));var N=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}function O(e,t,n,r){var a=P.hasOwnProperty(t)?P[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!E.call(T,e)||!E.call(C,e)&&(I.test(e)?T[e]=!0:(C[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(N,R);P[t]=new x(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(N,R);P[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(N,R);P[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){P[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)})),P.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){P[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)}));var L=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),D=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),F=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),W=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var q=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=q&&e[q]||e["@@iterator"])?e:null}var Q,J=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var a=t.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(1!==o||1!==s)do{if(o--,0>--s||a[o]!==i[s]){var l="\n"+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{X=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case D:return"Portal";case j:return"Profiler";case z:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case F:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case B:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ie(e){e._valueTracker||(e._valueTracker=function(e){var t=ae(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function se(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&O(e,"checked",t,!1)}function de(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?he(e,t.type,n):t.hasOwnProperty("defaultValue")&&he(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function fe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function he(e,t,n){"number"===t&&se(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(y(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ve(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(y(92));if(pe(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ye(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var _e,Se,Ee=(Se=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((_e=_e||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_e.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Se(e,t)}))}:Se);function Ie(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];function xe(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ce.hasOwnProperty(e)&&Ce[e]?(""+t).trim():t+"px"}function Pe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=xe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(Ce).forEach((function(e){Te.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ce[t]=Ce[e]}))}));var Ne=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Ne[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(y(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(y(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(y(62))}}function Oe(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function Ae(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var De=null,Me=null,ze=null;function je(e){if(e=Oa(e)){if("function"!=typeof De)throw Error(y(280));var t=e.stateNode;t&&(t=Aa(t),De(e.stateNode,e.type,t))}}function Ue(e){Me?ze?ze.push(e):ze=[e]:Me=e}function Fe(){if(Me){var e=Me,t=ze;if(ze=Me=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Be(e,t){return e(t)}function He(){}var Ve=!1;function $e(e,t,n){if(Ve)return e(t,n);Ve=!0;try{return Be(e,t,n)}finally{Ve=!1,(null!==Me||null!==ze)&&(He(),Fe())}}function We(e,t){var n=e.stateNode;if(null===n)return null;var r=Aa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(y(231,t,typeof n));return n}var Ke=!1;if(S)try{var qe={};Object.defineProperty(qe,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",qe,qe),window.removeEventListener("test",qe,qe)}catch(Se){Ke=!1}function Ge(e,t,n,r,a,i,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Je=null,Ye=!1,Xe=null,Ze={onError:function(e){Qe=!0,Je=e}};function et(e,t,n,r,a,i,o,s,l){Qe=!1,Je=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(y(188))}function at(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return rt(a),e;if(i===r)return rt(a),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(3!==n.tag)throw Error(y(188));return n.stateNode.current===n?e:t}(e))?it(e):null}function it(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=it(e);if(null!==t)return t;e=e.sibling}return null}var ot=v.unstable_scheduleCallback,st=v.unstable_cancelCallback,lt=v.unstable_shouldYield,ut=v.unstable_requestPaint,ct=v.unstable_now,dt=v.unstable_getCurrentPriorityLevel,ft=v.unstable_ImmediatePriority,ht=v.unstable_UserBlockingPriority,pt=v.unstable_NormalPriority,mt=v.unstable_LowPriority,gt=v.unstable_IdlePriority,vt=null,yt=null;var bt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(wt(e)/kt|0)|0},wt=Math.log,kt=Math.LN2;var _t=64,St=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function It(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~a;0!==s?r=Et(s):0!==(i&=o)&&(r=Et(i))}else 0!==(o=n&~a)?r=Et(o):0!==i&&(r=Et(i));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!=(4194240&i)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-bt(t)),r|=e[n],t&=~a;return r}function Ct(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Tt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function xt(){var e=_t;return 0==(4194240&(_t<<=1))&&(_t=64),e}function Pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Ot=0;function Lt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var At,Dt,Mt,zt,jt,Ut=!1,Ft=[],Bt=null,Ht=null,Vt=null,$t=new Map,Wt=new Map,Kt=[],qt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":$t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(t.pointerId)}}function Qt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Oa(t))&&Dt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Jt(e){var t=Ra(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void jt(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Oa(n))&&Dt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Le=r,n.target.dispatchEvent(r),Le=null,t.shift()}return!0}function Xt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){Ut=!1,null!==Bt&&Yt(Bt)&&(Bt=null),null!==Ht&&Yt(Ht)&&(Ht=null),null!==Vt&&Yt(Vt)&&(Vt=null),$t.forEach(Xt),Wt.forEach(Xt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Ut||(Ut=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<Ft.length){en(Ft[0],e);for(var n=1;n<Ft.length;n++){var r=Ft[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Bt&&en(Bt,e),null!==Ht&&en(Ht,e),null!==Vt&&en(Vt,e),$t.forEach(t),Wt.forEach(t),n=0;n<Kt.length;n++)(r=Kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&null===(n=Kt[0]).blockedOn;)Jt(n),null===n.blockedOn&&Kt.shift()}var nn=L.ReactCurrentBatchConfig,rn=!0;function an(e,t,n,r){var a=Ot,i=nn.transition;nn.transition=null;try{Ot=1,sn(e,t,n,r)}finally{Ot=a,nn.transition=i}}function on(e,t,n,r){var a=Ot,i=nn.transition;nn.transition=null;try{Ot=4,sn(e,t,n,r)}finally{Ot=a,nn.transition=i}}function sn(e,t,n,r){if(rn){var a=un(e,t,n,r);if(null===a)ra(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Bt=Qt(Bt,e,t,n,r,a),!0;case"dragenter":return Ht=Qt(Ht,e,t,n,r,a),!0;case"mouseover":return Vt=Qt(Vt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return $t.set(i,Qt($t.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Wt.set(i,Qt(Wt.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<qt.indexOf(e)){for(;null!==a;){var i=Oa(a);if(null!==i&&At(i),null===(i=un(e,t,n,r))&&ra(e,t,r,ln,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else ra(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Ra(e=Ae(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case ft:return 1;case ht:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var dn=null,fn=null,hn=null;function pn(){if(hn)return hn;var e,t,n=fn,r=n.length,a="value"in dn?dn.value:dn.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return hn=a.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?gn:vn,this.isPropagationStopped=vn,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,kn,_n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=yn(_n),En=J({},_n,{view:0,detail:0}),In=yn(En),Cn=J({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&"mousemove"===e.type?(bn=e.screenX-kn.screenX,wn=e.screenY-kn.screenY):wn=bn=0,kn=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Tn=yn(Cn),xn=yn(J({},Cn,{dataTransfer:0})),Pn=yn(J({},En,{relatedTarget:0})),Nn=yn(J({},_n,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=J({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),On=yn(Rn),Ln=yn(J({},_n,{data:0})),An={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function jn(){return zn}var Un=J({},En,{key:function(e){if(e.key){var t=An[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Fn=yn(Un),Bn=yn(J({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=yn(J({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Vn=yn(J({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=J({},Cn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wn=yn($n),Kn=[9,13,27,32],qn=S&&"CompositionEvent"in window,Gn=null;S&&"documentMode"in document&&(Gn=document.documentMode);var Qn=S&&"TextEvent"in window&&!Gn,Jn=S&&(!qn||Gn&&8<Gn&&11>=Gn),Yn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Kn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ar(e,t,n,r){Ue(r),0<(t=ia(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,or=null;function sr(e){Yr(e,0)}function lr(e){if(oe(La(e)))return e}function ur(e,t){if("change"===e)return t}var cr=!1;if(S){var dr;if(S){var fr="oninput"in document;if(!fr){var hr=document.createElement("div");hr.setAttribute("oninput","return;"),fr="function"==typeof hr.oninput}dr=fr}else dr=!1;cr=dr&&(!document.documentMode||9<document.documentMode)}function pr(){ir&&(ir.detachEvent("onpropertychange",mr),or=ir=null)}function mr(e){if("value"===e.propertyName&&lr(or)){var t=[];ar(t,or,e,Ae(e)),$e(sr,t)}}function gr(e,t,n){"focusin"===e?(pr(),or=n,(ir=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(or)}function yr(e,t){if("click"===e)return lr(t)}function br(e,t){if("input"===e||"change"===e)return lr(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function kr(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!E.call(t,a)||!wr(e[a],t[a]))return!1}return!0}function _r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n,r=_r(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_r(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Ir(){for(var e=window,t=se();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=se((e=t.contentWindow).document)}return t}function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Tr(e){var t=Ir(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Er(n.ownerDocument.documentElement,n)){if(null!==r&&Cr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Sr(n,i);var o=Sr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xr=S&&"documentMode"in document&&11>=document.documentMode,Pr=null,Nr=null,Rr=null,Or=!1;function Lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Or||null==Pr||Pr!==se(r)||("selectionStart"in(r=Pr)&&Cr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Rr&&kr(Rr,r)||(Rr=r,0<(r=ia(Nr,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Mr={},zr={};function jr(e){if(Mr[e])return Mr[e];if(!Dr[e])return e;var t,n=Dr[e];for(t in n)if(n.hasOwnProperty(t)&&t in zr)return Mr[e]=n[t];return e}S&&(zr=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);var Ur=jr("animationend"),Fr=jr("animationiteration"),Br=jr("animationstart"),Hr=jr("transitionend"),Vr=new Map,$r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(e,t){Vr.set(e,t),k(t,[e])}for(var Kr=0;Kr<$r.length;Kr++){var qr=$r[Kr];Wr(qr.toLowerCase(),"on"+(qr[0].toUpperCase()+qr.slice(1)))}Wr(Ur,"onAnimationEnd"),Wr(Fr,"onAnimationIteration"),Wr(Br,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(Hr,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Jr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,o,s,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(y(198));var u=Je;Qe=!1,Je=null,Ye||(Ye=!0,Xe=u)}}(r,t,void 0,e),e.currentTarget=null}function Yr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Jr(a,s,u),i=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Jr(a,s,u),i=l}}}if(Ye)throw e=Xe,Ye=!1,Xe=null,e}function Xr(e,t){var n=t[xa];void 0===n&&(n=t[xa]=new Set);var r=e+"__bubble";n.has(r)||(na(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),na(n,e,r,t)}var ea="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[ea]){e[ea]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ea]||(t[ea]=!0,Zr("selectionchange",!1,t))}}function na(e,t,n,r){switch(cn(t)){case 1:var a=an;break;case 4:a=on;break;default:a=sn}n=a.bind(null,t,n,e),a=void 0,!Ke||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ra(e,t,n,r,a){var i=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===a||8===s.nodeType&&s.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;o=o.return}for(;null!==s;){if(null===(o=Ra(s)))return;if(5===(l=o.tag)||6===l){r=i=o;continue e}s=s.parentNode}}r=r.return}$e((function(){var r=i,a=Ae(n),o=[];e:{var s=Vr.get(e);if(void 0!==s){var l=Sn,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=Fn;break;case"focusin":u="focus",l=Pn;break;case"focusout":u="blur",l=Pn;break;case"beforeblur":case"afterblur":l=Pn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=xn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Hn;break;case Ur:case Fr:case Br:l=Nn;break;case Hr:l=Vn;break;case"scroll":l=In;break;case"wheel":l=Wn;break;case"copy":case"cut":case"paste":l=On;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Bn}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=We(p,f))&&c.push(aa(p,m,h)))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,a),o.push({event:s,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Le||!(u=n.relatedTarget||n.fromElement)||!Ra(u)&&!u[Ta])&&(l||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ra(u):null)&&(u!==(d=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Tn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Bn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:La(l),h=null==u?s:La(u),(s=new c(m,p+"leave",l,n,a)).target=d,s.relatedTarget=h,m=null,Ra(a)===r&&((c=new c(f,p+"enter",u,n,a)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,p=0,h=c=l;h;h=oa(h))p++;for(h=0,m=f;m;m=oa(m))h++;for(;0<p-h;)c=oa(c),p--;for(;0<h-p;)f=oa(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=oa(c),f=oa(f)}c=null}else c=null;null!==l&&sa(o,s,l,c,!1),null!==u&&null!==d&&sa(o,d,u,c,!0)}if("select"===(l=(s=r?La(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=ur;else if(rr(s))if(cr)g=br;else{g=vr;var v=gr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=yr);switch(g&&(g=g(e,r))?ar(o,g,n,a):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&he(s,"number",s.value)),v=r?La(r):window,e){case"focusin":(rr(v)||"true"===v.contentEditable)&&(Pr=v,Nr=r,Rr=null);break;case"focusout":Rr=Nr=Pr=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Lr(o,n,a);break;case"selectionchange":if(xr)break;case"keydown":case"keyup":Lr(o,n,a)}var y;if(qn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Jn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(y=pn()):(fn="value"in(dn=a)?dn.value:dn.textContent,tr=!0)),0<(v=ia(r,b)).length&&(b=new Ln(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=er(n))&&(b.data=y))),(y=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!qn&&Zn(e,t)?(e=pn(),hn=fn=dn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ia(r,"onBeforeInput")).length&&(a=new Ln("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Yr(o,t)}))}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=We(e,n))&&r.unshift(aa(e,i,a)),null!=(i=We(e,t))&&r.push(aa(e,i,a))),e=e.return}return r}function oa(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function sa(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,a?null!=(l=We(n,i))&&o.unshift(aa(n,l,s)):a||null!=(l=We(n,i))&&o.push(aa(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var la=/\r\n?/g,ua=/\u0000|\uFFFD/g;function ca(e){return("string"==typeof e?e:""+e).replace(la,"\n").replace(ua,"")}function da(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(y(425))}function fa(){}var ha=null,pa=null;function ma(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ga="function"==typeof setTimeout?setTimeout:void 0,va="function"==typeof clearTimeout?clearTimeout:void 0,ya="function"==typeof Promise?Promise:void 0,ba="function"==typeof queueMicrotask?queueMicrotask:void 0!==ya?function(e){return ya.resolve(null).then(e).catch(wa)}:ga;function wa(e){setTimeout((function(){throw e}))}function ka(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);tn(t)}function _a(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Sa(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),Ia="__reactFiber$"+Ea,Ca="__reactProps$"+Ea,Ta="__reactContainer$"+Ea,xa="__reactEvents$"+Ea,Pa="__reactListeners$"+Ea,Na="__reactHandles$"+Ea;function Ra(e){var t=e[Ia];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[Ia]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Sa(e);null!==e;){if(n=e[Ia])return n;e=Sa(e)}return t}n=(e=n).parentNode}return null}function Oa(e){return!(e=e[Ia]||e[Ta])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function La(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(y(33))}function Aa(e){return e[Ca]||null}var Da=[],Ma=-1;function za(e){return{current:e}}function ja(e){0>Ma||(e.current=Da[Ma],Da[Ma]=null,Ma--)}function Ua(e,t){Ma++,Da[Ma]=e.current,e.current=t}var Fa={},Ba=za(Fa),Ha=za(!1),Va=Fa;function $a(e,t){var n=e.type.contextTypes;if(!n)return Fa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Wa(e){return null!=(e=e.childContextTypes)}function Ka(){ja(Ha),ja(Ba)}function qa(e,t,n){if(Ba.current!==Fa)throw Error(y(168));Ua(Ba,t),Ua(Ha,n)}function Ga(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(y(108,ne(e)||"Unknown",a));return J({},n,r)}function Qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fa,Va=Ba.current,Ua(Ba,e),Ua(Ha,Ha.current),!0}function Ja(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Ga(e,t,Va),r.__reactInternalMemoizedMergedChildContext=e,ja(Ha),ja(Ba),Ua(Ba,e)):ja(Ha),Ua(Ha,n)}var Ya=null,Xa=!1,Za=!1;function ei(e){null===Ya?Ya=[e]:Ya.push(e)}function ti(){if(!Za&&null!==Ya){Za=!0;var e=0,t=Ot;try{var n=Ya;for(Ot=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ya=null,Xa=!1}catch(t){throw null!==Ya&&(Ya=Ya.slice(e+1)),ot(ft,ti),t}finally{Ot=t,Za=!1}}return null}var ni=[],ri=0,ai=null,ii=0,oi=[],si=0,li=null,ui=1,ci="";function di(e,t){ni[ri++]=ii,ni[ri++]=ai,ai=e,ii=t}function fi(e,t,n){oi[si++]=ui,oi[si++]=ci,oi[si++]=li,li=e;var r=ui;e=ci;var a=32-bt(r)-1;r&=~(1<<a),n+=1;var i=32-bt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,ui=1<<32-bt(t)+a|n<<a|r,ci=i+e}else ui=1<<i|n<<a|r,ci=e}function hi(e){null!==e.return&&(di(e,1),fi(e,1,0))}function pi(e){for(;e===ai;)ai=ni[--ri],ni[ri]=null,ii=ni[--ri],ni[ri]=null;for(;e===li;)li=oi[--si],oi[si]=null,ci=oi[--si],oi[si]=null,ui=oi[--si],oi[si]=null}var mi=null,gi=null,vi=!1,yi=null;function bi(e,t){var n=Wu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function wi(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,mi=e,gi=_a(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,mi=e,gi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==li?{id:ui,overflow:ci}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Wu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,mi=e,gi=null,!0);default:return!1}}function ki(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function _i(e){if(vi){var t=gi;if(t){var n=t;if(!wi(e,t)){if(ki(e))throw Error(y(418));t=_a(n.nextSibling);var r=mi;t&&wi(e,t)?bi(r,n):(e.flags=-4097&e.flags|2,vi=!1,mi=e)}}else{if(ki(e))throw Error(y(418));e.flags=-4097&e.flags|2,vi=!1,mi=e}}}function Si(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;mi=e}function Ei(e){if(e!==mi)return!1;if(!vi)return Si(e),vi=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ma(e.type,e.memoizedProps)),t&&(t=gi)){if(ki(e))throw Ii(),Error(y(418));for(;t;)bi(e,t),t=_a(t.nextSibling)}if(Si(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){gi=_a(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}gi=null}}else gi=mi?_a(e.stateNode.nextSibling):null;return!0}function Ii(){for(var e=gi;e;)e=_a(e.nextSibling)}function Ci(){gi=mi=null,vi=!1}function Ti(e){null===yi?yi=[e]:yi.push(e)}var xi=L.ReactCurrentBatchConfig;function Pi(e,t){if(e&&e.defaultProps){for(var n in t=J({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Ni=za(null),Ri=null,Oi=null,Li=null;function Ai(){Li=Oi=Ri=null}function Di(e){var t=Ni.current;ja(Ni),e._currentValue=t}function Mi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zi(e,t){Ri=e,Li=Oi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Ls=!0),e.firstContext=null)}function ji(e){var t=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:t,next:null},null===Oi){if(null===Ri)throw Error(y(308));Oi=e,Ri.dependencies={lanes:0,firstContext:e}}else Oi=Oi.next=e;return t}var Ui=null;function Fi(e){null===Ui?Ui=[e]:Ui.push(e)}function Bi(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Fi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Hi(e,r)}function Hi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Vi=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ki(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Hl)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Hi(e,n)}return null===(a=r.interleaved)?(t.next=t,Fi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Hi(e,n)}function Gi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}function Qi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ji(e,t,n,r){var a=e.updateQueue;Vi=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?i=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=a.baseState;for(o=0,c=u=l=null,s=i;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(f="function"==typeof(p=m.payload)?p.call(h,d,f):p))break e;d=J({},d,f);break e;case 2:Vi=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=f;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(f=s).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Jl|=o,e.lanes=o,e.memoizedState=d}}function Yi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(y(191,a));a.call(r)}}}var Xi=(new g.Component).refs;function Zi(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:J({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),a=mu(e),i=Ki(r,a);i.payload=t,null!=n&&(i.callback=n),null!==(t=qi(e,i,a))&&(gu(t,e,a,r),Gi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),a=mu(e),i=Ki(r,a);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=qi(e,i,a))&&(gu(t,e,a,r),Gi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=mu(e),a=Ki(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=qi(e,a,r))&&(gu(t,e,r,n),Gi(t,e,r))}};function to(e,t,n,r,a,i,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!kr(n,r)||!kr(a,i))}function no(e,t,n){var r=!1,a=Fa,i=t.contextType;return"object"==typeof i&&null!==i?i=ji(i):(a=Wa(t)?Va:Ba.current,i=(r=null!=(r=t.contextTypes))?$a(e,a):Fa),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function ao(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Xi,$i(e);var i=t.contextType;"object"==typeof i&&null!==i?a.context=ji(i):(i=Wa(t)?Va:Ba.current,a.context=$a(e,i)),a.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(Zi(e,t,i,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&eo.enqueueReplaceState(a,a.state,null),Ji(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function io(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;t===Xi&&(t=a.refs={}),null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!=typeof e)throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function so(e){return(0,e._init)(e._payload)}function lo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=qu(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Yu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function l(e,t,n,r){var i=n.type;return i===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===W&&so(i)===t.type)?((r=a(t,n.props)).ref=io(e,t,n),r.return=e,r):((r=Gu(n.type,n.key,n.props,null,e.mode,r)).ref=io(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function c(e,t,n,r,i){return null===t||7!==t.tag?((t=Qu(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Yu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case A:return(n=Gu(t.type,t.key,t.props,null,e.mode,n)).ref=io(e,null,t),n.return=e,n;case D:return(t=Xu(t,e.mode,n)).return=e,t;case W:return d(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Qu(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case A:return n.key===a?l(e,t,n,r):null;case D:return n.key===a?u(e,t,n,r):null;case W:return f(e,t,(a=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==a?null:c(e,t,n,r,null);oo(e,n)}return null}function h(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case A:return l(t,e=e.get(null===r.key?n:r.key)||null,r,a);case D:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case W:return h(e,t,n,(0,r._init)(r._payload),a)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,a,null);oo(t,r)}return null}function p(a,o,s,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<s.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=f(a,p,s[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(a,p),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===s.length)return n(a,p),vi&&di(a,m),u;if(null===p){for(;m<s.length;m++)null!==(p=d(a,s[m],l))&&(o=i(p,o,m),null===c?u=p:c.sibling=p,c=p);return vi&&di(a,m),u}for(p=r(a,p);m<s.length;m++)null!==(g=h(p,a,m,s[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(a,e)})),vi&&di(a,m),u}function m(a,o,s,l){var u=G(s);if("function"!=typeof u)throw Error(y(150));if(null==(s=u.call(s)))throw Error(y(151));for(var c=u=null,p=o,m=o=0,g=null,v=s.next();null!==p&&!v.done;m++,v=s.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=f(a,p,v.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(a,p),o=i(b,o,m),null===c?u=b:c.sibling=b,c=b,p=g}if(v.done)return n(a,p),vi&&di(a,m),u;if(null===p){for(;!v.done;m++,v=s.next())null!==(v=d(a,v.value,l))&&(o=i(v,o,m),null===c?u=v:c.sibling=v,c=v);return vi&&di(a,m),u}for(p=r(a,p);!v.done;m++,v=s.next())null!==(v=h(p,a,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(a,e)})),vi&&di(a,m),u}return function e(r,i,s,l){if("object"==typeof s&&null!==s&&s.type===M&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case A:e:{for(var u=s.key,c=i;null!==c;){if(c.key===u){if((u=s.type)===M){if(7===c.tag){n(r,c.sibling),(i=a(c,s.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===W&&so(u)===c.type){n(r,c.sibling),(i=a(c,s.props)).ref=io(r,c,s),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}s.type===M?((i=Qu(s.props.children,r.mode,l,s.key)).return=r,r=i):((l=Gu(s.type,s.key,s.props,null,r.mode,l)).ref=io(r,i,s),l.return=r,r=l)}return o(r);case D:e:{for(c=s.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===s.containerInfo&&i.stateNode.implementation===s.implementation){n(r,i.sibling),(i=a(i,s.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Xu(s,r.mode,l)).return=r,r=i}return o(r);case W:return e(r,i,(c=s._init)(s._payload),l)}if(pe(s))return p(r,i,s,l);if(G(s))return m(r,i,s,l);oo(r,s)}return"string"==typeof s&&""!==s||"number"==typeof s?(s=""+s,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,s)).return=r,r=i):(n(r,i),(i=Yu(s,r.mode,l)).return=r,r=i),o(r)):n(r,i)}}var uo=lo(!0),co=lo(!1),fo={},ho=za(fo),po=za(fo),mo=za(fo);function go(e){if(e===fo)throw Error(y(174));return e}function vo(e,t){switch(Ua(mo,t),Ua(po,e),Ua(ho,fo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ke(null,"");break;default:t=ke(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ja(ho),Ua(ho,t)}function yo(){ja(ho),ja(po),ja(mo)}function bo(e){go(mo.current);var t=go(ho.current),n=ke(t,e.type);t!==n&&(Ua(po,e),Ua(ho,n))}function wo(e){po.current===e&&(ja(ho),ja(po))}var ko=za(0);function _o(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var So=[];function Eo(){for(var e=0;e<So.length;e++)So[e]._workInProgressVersionPrimary=null;So.length=0}var Io=L.ReactCurrentDispatcher,Co=L.ReactCurrentBatchConfig,To=0,xo=null,Po=null,No=null,Ro=!1,Oo=!1,Lo=0,Ao=0;function Do(){throw Error(y(321))}function Mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function zo(e,t,n,r,a,i){if(To=i,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=null===e||null===e.memoizedState?ws:ks,e=n(r,a),Oo){i=0;do{if(Oo=!1,Lo=0,25<=i)throw Error(y(301));i+=1,No=Po=null,t.updateQueue=null,Io.current=_s,e=n(r,a)}while(Oo)}if(Io.current=bs,t=null!==Po&&null!==Po.next,To=0,No=Po=xo=null,Ro=!1,t)throw Error(y(300));return e}function jo(){var e=0!==Lo;return Lo=0,e}function Uo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===No?xo.memoizedState=No=e:No=No.next=e,No}function Fo(){if(null===Po){var e=xo.alternate;e=null!==e?e.memoizedState:null}else e=Po.next;var t=null===No?xo.memoizedState:No.next;if(null!==t)No=t,Po=e;else{if(null===e)throw Error(y(310));e={memoizedState:(Po=e).memoizedState,baseState:Po.baseState,baseQueue:Po.baseQueue,queue:Po.queue,next:null},null===No?xo.memoizedState=No=e:No=No.next=e}return No}function Bo(e,t){return"function"==typeof t?t(e):t}function Ho(e){var t=Fo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=Po,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=o=null,l=null,u=i;do{var c=u.lane;if((To&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=d,o=r):l=l.next=d,xo.lanes|=c,Jl|=c}u=u.next}while(null!==u&&u!==i);null===l?o=r:l.next=s,wr(r,t.memoizedState)||(Ls=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,xo.lanes|=i,Jl|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=Fo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var o=a=a.next;do{i=e(i,o.action),o=o.next}while(o!==a);wr(i,t.memoizedState)||(Ls=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function $o(){}function Wo(e,t){var n=xo,r=Fo(),a=t(),i=!wr(r.memoizedState,a);if(i&&(r.memoizedState=a,Ls=!0),r=r.queue,rs(Go.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==No&&1&No.memoizedState.tag){if(n.flags|=2048,Xo(9,qo.bind(null,n,r,a,t),void 0,null),null===Vl)throw Error(y(349));0!=(30&To)||Ko(n,t,a)}return a}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xo.updateQueue)?(t={lastEffect:null,stores:null},xo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function qo(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&Jo(e)}function Go(e,t,n){return n((function(){Qo(t)&&Jo(e)}))}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Jo(e){var t=Hi(e,1);null!==t&&gu(t,e,1,-1)}function Yo(e){var t=Uo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=ms.bind(null,xo,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=xo.updateQueue)?(t={lastEffect:null,stores:null},xo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return Fo().memoizedState}function es(e,t,n,r){var a=Uo();xo.flags|=e,a.memoizedState=Xo(1|t,n,void 0,void 0===r?null:r)}function ts(e,t,n,r){var a=Fo();r=void 0===r?null:r;var i=void 0;if(null!==Po){var o=Po.memoizedState;if(i=o.destroy,null!==r&&Mo(r,o.deps))return void(a.memoizedState=Xo(t,n,i,r))}xo.flags|=e,a.memoizedState=Xo(1|t,n,i,r)}function ns(e,t){return es(8390656,8,e,t)}function rs(e,t){return ts(2048,8,e,t)}function as(e,t){return ts(4,2,e,t)}function is(e,t){return ts(4,4,e,t)}function os(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ss(e,t,n){return n=null!=n?n.concat([e]):null,ts(4,4,os.bind(null,t,e),n)}function ls(){}function us(e,t){var n=Fo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cs(e,t){var n=Fo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ds(e,t,n){return 0==(21&To)?(e.baseState&&(e.baseState=!1,Ls=!0),e.memoizedState=n):(wr(n,t)||(n=xt(),xo.lanes|=n,Jl|=n,e.baseState=!0),t)}function fs(e,t){var n=Ot;Ot=0!==n&&4>n?n:4,e(!0);var r=Co.transition;Co.transition={};try{e(!1),t()}finally{Ot=n,Co.transition=r}}function hs(){return Fo().memoizedState}function ps(e,t,n){var r=mu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gs(e))vs(t,n);else if(null!==(n=Bi(e,t,n,r))){gu(n,e,r,pu()),ys(n,t,r)}}function ms(e,t,n){var r=mu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gs(e))vs(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,wr(s,o)){var l=t.interleaved;return null===l?(a.next=a,Fi(t)):(a.next=l.next,l.next=a),void(t.interleaved=a)}}catch(e){}null!==(n=Bi(e,t,a,r))&&(gu(n,e,r,a=pu()),ys(n,t,r))}}function gs(e){var t=e.alternate;return e===xo||null!==t&&t===xo}function vs(e,t){Oo=Ro=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ys(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}var bs={readContext:ji,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useInsertionEffect:Do,useLayoutEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useMutableSource:Do,useSyncExternalStore:Do,useId:Do,unstable_isNewReconciler:!1},ws={readContext:ji,useCallback:function(e,t){return Uo().memoizedState=[e,void 0===t?null:t],e},useContext:ji,useEffect:ns,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,es(4194308,4,os.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){return es(4,2,e,t)},useMemo:function(e,t){var n=Uo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Uo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ps.bind(null,xo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Uo().memoizedState=e},useState:Yo,useDebugValue:ls,useDeferredValue:function(e){return Uo().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=fs.bind(null,e[1]),Uo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xo,a=Uo();if(vi){if(void 0===n)throw Error(y(407));n=n()}else{if(n=t(),null===Vl)throw Error(y(349));0!=(30&To)||Ko(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,ns(Go.bind(null,r,i,e),[e]),r.flags|=2048,Xo(9,qo.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Uo(),t=Vl.identifierPrefix;if(vi){var n=ci;t=":"+t+"R"+(n=(ui&~(1<<32-bt(ui)-1)).toString(32)+n),0<(n=Lo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Ao++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ks={readContext:ji,useCallback:us,useContext:ji,useEffect:rs,useImperativeHandle:ss,useInsertionEffect:as,useLayoutEffect:is,useMemo:cs,useReducer:Ho,useRef:Zo,useState:function(){return Ho(Bo)},useDebugValue:ls,useDeferredValue:function(e){return ds(Fo(),Po.memoizedState,e)},useTransition:function(){return[Ho(Bo)[0],Fo().memoizedState]},useMutableSource:$o,useSyncExternalStore:Wo,useId:hs,unstable_isNewReconciler:!1},_s={readContext:ji,useCallback:us,useContext:ji,useEffect:rs,useImperativeHandle:ss,useInsertionEffect:as,useLayoutEffect:is,useMemo:cs,useReducer:Vo,useRef:Zo,useState:function(){return Vo(Bo)},useDebugValue:ls,useDeferredValue:function(e){var t=Fo();return null===Po?t.memoizedState=e:ds(t,Po.memoizedState,e)},useTransition:function(){return[Vo(Bo)[0],Fo().memoizedState]},useMutableSource:$o,useSyncExternalStore:Wo,useId:hs,unstable_isNewReconciler:!1};function Ss(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var a=n}catch(e){a="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:a,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Is(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var Cs="function"==typeof WeakMap?WeakMap:Map;function Ts(e,t,n){(n=Ki(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){au||(au=!0,iu=r),Is(0,t)},n}function xs(e,t,n){(n=Ki(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Is(0,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){Is(0,t),"function"!=typeof r&&(null===ou?ou=new Set([this]):ou.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Ps(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Cs;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Uu.bind(null,e,t,n),t.then(e,e))}function Ns(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Rs(e,t,n,r,a){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ki(-1,1)).tag=2,qi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Os=L.ReactCurrentOwner,Ls=!1;function As(e,t,n,r){t.child=null===e?co(t,null,n,r):uo(t,e.child,n,r)}function Ds(e,t,n,r,a){n=n.render;var i=t.ref;return zi(t,a),r=zo(e,t,n,r,i,a),n=jo(),null===e||Ls?(vi&&n&&hi(t),t.flags|=1,As(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,al(e,t,a))}function Ms(e,t,n,r,a){if(null===e){var i=n.type;return"function"!=typeof i||Ku(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Gu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,zs(e,t,i,r,a))}if(i=e.child,0==(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:kr)(o,r)&&e.ref===t.ref)return al(e,t,a)}return t.flags|=1,(e=qu(i,r)).ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(kr(i,r)&&e.ref===t.ref){if(Ls=!1,t.pendingProps=r=i,0==(e.lanes&a))return t.lanes=e.lanes,al(e,t,a);0!=(131072&e.flags)&&(Ls=!0)}}return Fs(e,t,n,r,a)}function js(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ua(ql,Kl),Kl|=n;else{if(0==(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ua(ql,Kl),Kl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ua(ql,Kl),Kl|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ua(ql,Kl),Kl|=r;return As(e,t,a,n),t.child}function Us(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,r,a){var i=Wa(n)?Va:Ba.current;return i=$a(t,i),zi(t,a),n=zo(e,t,n,r,i,a),r=jo(),null===e||Ls?(vi&&r&&hi(t),t.flags|=1,As(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,al(e,t,a))}function Bs(e,t,n,r,a){if(Wa(n)){var i=!0;Qa(t)}else i=!1;if(zi(t,a),null===t.stateNode)rl(e,t),no(t,n,r),ao(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=ji(u):u=$a(t,u=Wa(n)?Va:Ba.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ro(t,o,r,u),Vi=!1;var f=t.memoizedState;o.state=f,Ji(t,r,o,a),l=t.memoizedState,s!==r||f!==l||Ha.current||Vi?("function"==typeof c&&(Zi(t,n,c,r),l=t.memoizedState),(s=Vi||to(t,n,s,r,f,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Wi(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Pi(t.type,s),o.props=u,d=t.pendingProps,f=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=ji(l):l=$a(t,l=Wa(n)?Va:Ba.current);var h=n.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ro(t,o,r,l),Vi=!1,f=t.memoizedState,o.state=f,Ji(t,r,o,a);var p=t.memoizedState;s!==d||f!==p||Ha.current||Vi?("function"==typeof h&&(Zi(t,n,h,r),p=t.memoizedState),(u=Vi||to(t,n,u,r,f,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,i,a)}function Hs(e,t,n,r,a,i){Us(e,t);var o=0!=(128&t.flags);if(!r&&!o)return a&&Ja(t,n,!1),al(e,t,i);r=t.stateNode,Os.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=uo(t,e.child,null,i),t.child=uo(t,null,s,i)):As(e,t,s,i),t.memoizedState=r.state,a&&Ja(t,n,!0),t.child}function Vs(e){var t=e.stateNode;t.pendingContext?qa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&qa(0,t.context,!1),vo(e,t.containerInfo)}function $s(e,t,n,r,a){return Ci(),Ti(a),t.flags|=256,As(e,t,n,r),t.child}var Ws,Ks,qs,Gs,Qs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r,a=t.pendingProps,i=ko.current,o=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ua(ko,1&i),null===e)return _i(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,o?(a=t.mode,o=t.child,s={mode:"hidden",children:s},0==(1&a)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=Ju(s,a,0,null),e=Qu(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Js(n),t.memoizedState=Qs,e):Xs(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,o){if(n)return 256&t.flags?(t.flags&=-257,Zs(e,t,o,r=Es(Error(y(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ju({mode:"visible",children:r.children},a,0,null),(i=Qu(i,a,o,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!=(1&t.mode)&&uo(t,e.child,null,o),t.child.memoizedState=Js(o),t.memoizedState=Qs,i);if(0==(1&t.mode))return Zs(e,t,o,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Zs(e,t,o,r=Es(i=Error(y(419)),r,void 0))}if(s=0!=(o&e.childLanes),Ls||s){if(null!==(r=Vl)){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!=(a&(r.suspendedLanes|o))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Hi(e,a),gu(r,e,a,-1))}return Pu(),Zs(e,t,o,r=Es(Error(y(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Bu.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,gi=_a(a.nextSibling),mi=t,vi=!0,yi=null,null!==e&&(oi[si++]=ui,oi[si++]=ci,oi[si++]=li,ui=e.id,ci=e.overflow,li=t),t=Xs(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(o){o=a.fallback,s=t.mode,r=(i=e.child).sibling;var l={mode:"hidden",children:a.children};return 0==(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=l,t.deletions=null):(a=qu(i,l)).subtreeFlags=14680064&i.subtreeFlags,null!==r?o=qu(r,o):(o=Qu(o,s,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,s=null===(s=e.child.memoizedState)?Js(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Qs,a}return e=(o=e.child).sibling,a=qu(o,{mode:"visible",children:a.children}),0==(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Xs(e,t){return(t=Ju({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Zs(e,t,n,r){return null!==r&&Ti(r),uo(t,e.child,null,n),(e=Xs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function el(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Mi(e.return,t,n)}function tl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function nl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(As(e,t,r.children,n),0!=(2&(r=ko.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&el(e,n,t);else if(19===e.tag)el(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ua(ko,r),0==(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===_o(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),tl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===_o(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}tl(t,!0,n,null,i);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function al(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Jl|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(y(153));if(null!==t.child){for(n=qu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=qu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function il(e,t){if(!vi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ol(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sl(e,t,n){var r=t.pendingProps;switch(pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ol(t),null;case 1:case 17:return Wa(t.type)&&Ka(),ol(t),null;case 3:return r=t.stateNode,yo(),ja(Ha),ja(Ba),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ei(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==yi&&(wu(yi),yi=null))),Ks(e,t),ol(t),null;case 5:wo(t);var a=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)qs(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(y(166));return ol(t),null}if(e=go(ho.current),Ei(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ia]=t,r[Ca]=i,e=0!=(1&t.mode),n){case"dialog":Xr("cancel",r),Xr("close",r);break;case"iframe":case"object":case"embed":Xr("load",r);break;case"video":case"audio":for(a=0;a<Gr.length;a++)Xr(Gr[a],r);break;case"source":Xr("error",r);break;case"img":case"image":case"link":Xr("error",r),Xr("load",r);break;case"details":Xr("toggle",r);break;case"input":ue(r,i),Xr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Xr("invalid",r);break;case"textarea":ve(r,i),Xr("invalid",r)}for(var o in Re(n,i),a=null,i)if(i.hasOwnProperty(o)){var s=i[o];"children"===o?"string"==typeof s?r.textContent!==s&&(!0!==i.suppressHydrationWarning&&da(r.textContent,s,e),a=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==i.suppressHydrationWarning&&da(r.textContent,s,e),a=["children",""+s]):w.hasOwnProperty(o)&&null!=s&&"onScroll"===o&&Xr("scroll",r)}switch(n){case"input":ie(r),fe(r,i,!0);break;case"textarea":ie(r),be(r);break;case"select":case"option":break;default:"function"==typeof i.onClick&&(r.onclick=fa)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ia]=t,e[Ca]=r,Ws(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oe(n,r),n){case"dialog":Xr("cancel",e),Xr("close",e),a=r;break;case"iframe":case"object":case"embed":Xr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Gr.length;a++)Xr(Gr[a],e);a=r;break;case"source":Xr("error",e),a=r;break;case"img":case"image":case"link":Xr("error",e),Xr("load",e),a=r;break;case"details":Xr("toggle",e),a=r;break;case"input":ue(e,r),a=le(e,r),Xr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=J({},r,{value:void 0}),Xr("invalid",e);break;case"textarea":ve(e,r),a=ge(e,r),Xr("invalid",e)}for(i in Re(n,a),s=a)if(s.hasOwnProperty(i)){var l=s[i];"style"===i?Pe(e,l):"dangerouslySetInnerHTML"===i?null!=(l=l?l.__html:void 0)&&Ee(e,l):"children"===i?"string"==typeof l?("textarea"!==n||""!==l)&&Ie(e,l):"number"==typeof l&&Ie(e,""+l):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(w.hasOwnProperty(i)?null!=l&&"onScroll"===i&&Xr("scroll",e):null!=l&&O(e,i,l,o))}switch(n){case"input":ie(e),fe(e,r,!1);break;case"textarea":ie(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?me(e,!!r.multiple,i,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=fa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ol(t),null;case 6:if(e&&null!=t.stateNode)Gs(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(y(166));if(n=go(mo.current),go(ho.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ia]=t,(i=r.nodeValue!==n)&&null!==(e=mi))switch(e.tag){case 3:da(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&da(r.nodeValue,n,0!=(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ia]=t,t.stateNode=r}return ol(t),null;case 13:if(ja(ko),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(vi&&null!==gi&&0!=(1&t.mode)&&0==(128&t.flags))Ii(),Ci(),t.flags|=98560,i=!1;else if(i=Ei(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(y(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(y(317));i[Ia]=t}else Ci(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ol(t),i=!1}else null!==yi&&(wu(yi),yi=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ko.current)?0===Gl&&(Gl=3):Pu())),null!==t.updateQueue&&(t.flags|=4),ol(t),null);case 4:return yo(),Ks(e,t),null===e&&ta(t.stateNode.containerInfo),ol(t),null;case 10:return Di(t.type._context),ol(t),null;case 19:if(ja(ko),null===(i=t.memoizedState))return ol(t),null;if(r=0!=(128&t.flags),null===(o=i.rendering))if(r)il(i,!1);else{if(0!==Gl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=_o(e))){for(t.flags|=128,il(i,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(o=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ua(ko,1&ko.current|2),t.child}e=e.sibling}null!==i.tail&&ct()>nu&&(t.flags|=128,r=!0,il(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=_o(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),il(i,!0),null===i.tail&&"hidden"===i.tailMode&&!o.alternate&&!vi)return ol(t),null}else 2*ct()-i.renderingStartTime>nu&&1073741824!==n&&(t.flags|=128,r=!0,il(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=i.last)?n.sibling=o:t.child=o,i.last=o)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ct(),t.sibling=null,n=ko.current,Ua(ko,r?1&n|2:1&n),t):(ol(t),null);case 22:case 23:return Iu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Kl)&&(ol(t),6&t.subtreeFlags&&(t.flags|=8192)):ol(t),null;case 24:case 25:return null}throw Error(y(156,t.tag))}function ll(e,t){switch(pi(t),t.tag){case 1:return Wa(t.type)&&Ka(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return yo(),ja(Ha),ja(Ba),Eo(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return wo(t),null;case 13:if(ja(ko),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(y(340));Ci()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ja(ko),null;case 4:return yo(),null;case 10:return Di(t.type._context),null;case 22:case 23:return Iu(),null;default:return null}}Ws=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ks=function(){},qs=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,go(ho.current);var i,o=null;switch(n){case"input":a=le(e,a),r=le(e,r),o=[];break;case"select":a=J({},a,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":a=ge(e,a),r=ge(e,r),o=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=fa)}for(u in Re(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Xr("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Gs=function(e,t,n,r){n!==r&&(t.flags|=4)};var ul=!1,cl=!1,dl="function"==typeof WeakSet?WeakSet:Set,fl=null;function hl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){ju(e,t,n)}else n.current=null}function pl(e,t,n){try{n()}catch(n){ju(e,t,n)}}var ml=!1;function gl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&pl(t,n,i)}a=a.next}while(a!==r)}}function vl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function bl(e){var t=e.alternate;null!==t&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ia],delete t[Ca],delete t[xa],delete t[Pa],delete t[Na])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wl(e){return 5===e.tag||3===e.tag||4===e.tag}function kl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||wl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function _l(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=fa));else if(4!==r&&null!==(e=e.child))for(_l(e,t,n),e=e.sibling;null!==e;)_l(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Sl(e,t,n),e=e.sibling;null!==e;)Sl(e,t,n),e=e.sibling}var El=null,Il=!1;function Cl(e,t,n){for(n=n.child;null!==n;)Tl(e,t,n),n=n.sibling}function Tl(e,t,n){if(yt&&"function"==typeof yt.onCommitFiberUnmount)try{yt.onCommitFiberUnmount(vt,n)}catch(e){}switch(n.tag){case 5:cl||hl(n,t);case 6:var r=El,a=Il;El=null,Cl(e,t,n),Il=a,null!==(El=r)&&(Il?(e=El,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):El.removeChild(n.stateNode));break;case 18:null!==El&&(Il?(e=El,n=n.stateNode,8===e.nodeType?ka(e.parentNode,n):1===e.nodeType&&ka(e,n),tn(e)):ka(El,n.stateNode));break;case 4:r=El,a=Il,El=n.stateNode.containerInfo,Il=!0,Cl(e,t,n),El=r,Il=a;break;case 0:case 11:case 14:case 15:if(!cl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!=(2&i)||0!=(4&i))&&pl(n,t,o),a=a.next}while(a!==r)}Cl(e,t,n);break;case 1:if(!cl&&(hl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){ju(n,t,e)}Cl(e,t,n);break;case 21:Cl(e,t,n);break;case 22:1&n.mode?(cl=(r=cl)||null!==n.memoizedState,Cl(e,t,n),cl=r):Cl(e,t,n);break;default:Cl(e,t,n)}}function xl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new dl),t.forEach((function(t){var r=Hu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Pl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;null!==s;){switch(s.tag){case 5:El=s.stateNode,Il=!1;break e;case 3:case 4:El=s.stateNode.containerInfo,Il=!0;break e}s=s.return}if(null===El)throw Error(y(160));Tl(i,o,a),El=null,Il=!1;var l=a.alternate;null!==l&&(l.return=null),a.return=null}catch(e){ju(a,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Nl(t,e),t=t.sibling}function Nl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pl(t,e),Rl(e),4&r){try{gl(3,e,e.return),vl(3,e)}catch(t){ju(e,e.return,t)}try{gl(5,e,e.return)}catch(t){ju(e,e.return,t)}}break;case 1:Pl(t,e),Rl(e),512&r&&null!==n&&hl(n,n.return);break;case 5:if(Pl(t,e),Rl(e),512&r&&null!==n&&hl(n,n.return),32&e.flags){var a=e.stateNode;try{Ie(a,"")}catch(t){ju(e,e.return,t)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,o=null!==n?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===i.type&&null!=i.name&&ce(a,i),Oe(s,o);var u=Oe(s,i);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];"style"===c?Pe(a,d):"dangerouslySetInnerHTML"===c?Ee(a,d):"children"===c?Ie(a,d):O(a,c,d,u)}switch(s){case"input":de(a,i);break;case"textarea":ye(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?me(a,!!i.multiple,h,!1):f!==!!i.multiple&&(null!=i.defaultValue?me(a,!!i.multiple,i.defaultValue,!0):me(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ca]=i}catch(t){ju(e,e.return,t)}}break;case 6:if(Pl(t,e),Rl(e),4&r){if(null===e.stateNode)throw Error(y(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(t){ju(e,e.return,t)}}break;case 3:if(Pl(t,e),Rl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){ju(e,e.return,t)}break;case 4:default:Pl(t,e),Rl(e);break;case 13:Pl(t,e),Rl(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(tu=ct())),4&r&&xl(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(cl=(u=cl)||c,Pl(t,e),cl=u):Pl(t,e),Rl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(fl=e,c=e.child;null!==c;){for(d=fl=c;null!==fl;){switch(h=(f=fl).child,f.tag){case 0:case 11:case 14:case 15:gl(4,f,f.return);break;case 1:hl(f,f.return);var p=f.stateNode;if("function"==typeof p.componentWillUnmount){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){ju(r,n,e)}}break;case 5:hl(f,f.return);break;case 22:if(null!==f.memoizedState){Dl(d);continue}}null!==h?(h.return=f,fl=h):Dl(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{a=d.stateNode,u?"function"==typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=d.stateNode,o=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=xe("display",o))}catch(t){ju(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){ju(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pl(t,e),Rl(e),4&r&&xl(e);case 21:}}function Rl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(wl(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(Ie(a,""),r.flags&=-33),Sl(e,kl(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;_l(e,kl(e),i);break;default:throw Error(y(161))}}catch(t){ju(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e,t,n){fl=e,Ll(e,t,n)}function Ll(e,t,n){for(var r=0!=(1&e.mode);null!==fl;){var a=fl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||ul;if(!o){var s=a.alternate,l=null!==s&&null!==s.memoizedState||cl;s=ul;var u=cl;if(ul=o,(cl=l)&&!u)for(fl=a;null!==fl;)l=(o=fl).child,22===o.tag&&null!==o.memoizedState?Ml(a):null!==l?(l.return=o,fl=l):Ml(a);for(;null!==i;)fl=i,Ll(i,t,n),i=i.sibling;fl=a,ul=s,cl=u}Al(e)}else 0!=(8772&a.subtreeFlags)&&null!==i?(i.return=a,fl=i):Al(e)}}function Al(e){for(;null!==fl;){var t=fl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:cl||vl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!cl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Pi(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Yi(t,i,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Yi(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tn(d)}}}break;default:throw Error(y(163))}cl||512&t.flags&&yl(t)}catch(e){ju(t,t.return,e)}}if(t===e){fl=null;break}if(null!==(n=t.sibling)){n.return=t.return,fl=n;break}fl=t.return}}function Dl(e){for(;null!==fl;){var t=fl;if(t===e){fl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,fl=n;break}fl=t.return}}function Ml(e){for(;null!==fl;){var t=fl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(e){ju(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(e){ju(t,a,e)}}var i=t.return;try{yl(t)}catch(e){ju(t,i,e)}break;case 5:var o=t.return;try{yl(t)}catch(e){ju(t,o,e)}}}catch(e){ju(t,t.return,e)}if(t===e){fl=null;break}var s=t.sibling;if(null!==s){s.return=t.return,fl=s;break}fl=t.return}}var zl,jl=Math.ceil,Ul=L.ReactCurrentDispatcher,Fl=L.ReactCurrentOwner,Bl=L.ReactCurrentBatchConfig,Hl=0,Vl=null,$l=null,Wl=0,Kl=0,ql=za(0),Gl=0,Ql=null,Jl=0,Yl=0,Xl=0,Zl=null,eu=null,tu=0,nu=1/0,ru=null,au=!1,iu=null,ou=null,su=!1,lu=null,uu=0,cu=0,du=null,fu=-1,hu=0;function pu(){return 0!=(6&Hl)?ct():-1!==fu?fu:fu=ct()}function mu(e){return 0==(1&e.mode)?1:0!=(2&Hl)&&0!==Wl?Wl&-Wl:null!==xi.transition?(0===hu&&(hu=xt()),hu):0!==(e=Ot)?e:e=void 0===(e=window.event)?16:cn(e.type)}function gu(e,t,n,r){if(50<cu)throw cu=0,du=null,Error(y(185));Nt(e,n,r),0!=(2&Hl)&&e===Vl||(e===Vl&&(0==(2&Hl)&&(Yl|=n),4===Gl&&ku(e,Wl)),vu(e,r),1===n&&0===Hl&&0==(1&t.mode)&&(nu=ct()+500,Xa&&ti()))}function vu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-bt(i),s=1<<o,l=a[o];-1===l?0!=(s&n)&&0==(s&r)||(a[o]=Ct(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=It(e,e===Vl?Wl:0);if(0===r)null!==n&&st(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&st(n),1===t)0===e.tag?function(e){Xa=!0,ei(e)}(_u.bind(null,e)):ei(_u.bind(null,e)),ba((function(){0==(6&Hl)&&ti()})),n=null;else{switch(Lt(r)){case 1:n=ft;break;case 4:n=ht;break;case 16:default:n=pt;break;case 536870912:n=gt}n=Vu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(fu=-1,hu=0,0!=(6&Hl))throw Error(y(327));var n=e.callbackNode;if(Mu()&&e.callbackNode!==n)return null;var r=It(e,e===Vl?Wl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Nu(e,r);else{t=r;var a=Hl;Hl|=2;var i=xu();for(Vl===e&&Wl===t||(ru=null,nu=ct()+500,Cu(e,t));;)try{Ou();break}catch(t){Tu(e,t)}Ai(),Ul.current=i,Hl=a,null!==$l?t=0:(Vl=null,Wl=0,t=Gl)}if(0!==t){if(2===t&&(0!==(a=Tt(e))&&(r=a,t=bu(e,a))),1===t)throw n=Ql,Cu(e,0),ku(e,r),vu(e,ct()),n;if(6===t)ku(e,r);else{if(a=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!wr(i(),a))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=Nu(e,r))&&(0!==(i=Tt(e))&&(r=i,t=bu(e,i))),1===t))throw n=Ql,Cu(e,0),ku(e,r),vu(e,ct()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:case 5:Du(e,eu,ru);break;case 3:if(ku(e,r),(130023424&r)===r&&10<(t=tu+500-ct())){if(0!==It(e,0))break;if(((a=e.suspendedLanes)&r)!==r){pu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ga(Du.bind(null,e,eu,ru),t);break}Du(e,eu,ru);break;case 4:if(ku(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-bt(r);i=1<<o,(o=t[o])>a&&(a=o),r&=~i}if(r=a,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=ga(Du.bind(null,e,eu,ru),r);break}Du(e,eu,ru);break;default:throw Error(y(329))}}}return vu(e,ct()),e.callbackNode===n?yu.bind(null,e):null}function bu(e,t){var n=Zl;return e.current.memoizedState.isDehydrated&&(Cu(e,t).flags|=256),2!==(e=Nu(e,t))&&(t=eu,eu=n,null!==t&&wu(t)),e}function wu(e){null===eu?eu=e:eu.push.apply(eu,e)}function ku(e,t){for(t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if(0!=(6&Hl))throw Error(y(327));Mu();var t=It(e,0);if(0==(1&t))return vu(e,ct()),null;var n=Nu(e,t);if(0!==e.tag&&2===n){var r=Tt(e);0!==r&&(t=r,n=bu(e,r))}if(1===n)throw n=Ql,Cu(e,0),ku(e,t),vu(e,ct()),n;if(6===n)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Du(e,eu,ru),vu(e,ct()),null}function Su(e,t){var n=Hl;Hl|=1;try{return e(t)}finally{0===(Hl=n)&&(nu=ct()+500,Xa&&ti())}}function Eu(e){null!==lu&&0===lu.tag&&0==(6&Hl)&&Mu();var t=Hl;Hl|=1;var n=Bl.transition,r=Ot;try{if(Bl.transition=null,Ot=1,e)return e()}finally{Ot=r,Bl.transition=n,0==(6&(Hl=t))&&ti()}}function Iu(){Kl=ql.current,ja(ql)}function Cu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,va(n)),null!==$l)for(n=$l.return;null!==n;){var r=n;switch(pi(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ka();break;case 3:yo(),ja(Ha),ja(Ba),Eo();break;case 5:wo(r);break;case 4:yo();break;case 13:case 19:ja(ko);break;case 10:Di(r.type._context);break;case 22:case 23:Iu()}n=n.return}if(Vl=e,$l=e=qu(e.current,null),Wl=Kl=t,Gl=0,Ql=null,Xl=Yl=Jl=0,eu=Zl=null,null!==Ui){for(t=0;t<Ui.length;t++)if(null!==(r=(n=Ui[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ui=null}return e}function Tu(e,t){for(;;){var n=$l;try{if(Ai(),Io.current=bs,Ro){for(var r=xo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}Ro=!1}if(To=0,No=Po=xo=null,Oo=!1,Lo=0,Fl.current=null,null===n||null===n.return){Gl=1,Ql=t,$l=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=Wl,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ns(o);if(null!==h){h.flags&=-257,Rs(h,o,s,0,t),1&h.mode&&Ps(i,u,t),l=u;var p=(t=h).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){Ps(i,u,t),Pu();break e}l=Error(y(426))}else if(vi&&1&s.mode){var g=Ns(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Rs(g,o,s,0,t),Ti(Ss(l,s));break e}}i=l=Ss(l,s),4!==Gl&&(Gl=2),null===Zl?Zl=[i]:Zl.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Qi(i,Ts(0,l,t));break e;case 1:s=l;var v=i.type,b=i.stateNode;if(0==(128&i.flags)&&("function"==typeof v.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===ou||!ou.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Qi(i,xs(i,s,t));break e}}i=i.return}while(null!==i)}Au(n)}catch(e){t=e,$l===n&&null!==n&&($l=n=n.return);continue}break}}function xu(){var e=Ul.current;return Ul.current=bs,null===e?bs:e}function Pu(){0!==Gl&&3!==Gl&&2!==Gl||(Gl=4),null===Vl||0==(268435455&Jl)&&0==(268435455&Yl)||ku(Vl,Wl)}function Nu(e,t){var n=Hl;Hl|=2;var r=xu();for(Vl===e&&Wl===t||(ru=null,Cu(e,t));;)try{Ru();break}catch(t){Tu(e,t)}if(Ai(),Hl=n,Ul.current=r,null!==$l)throw Error(y(261));return Vl=null,Wl=0,Gl}function Ru(){for(;null!==$l;)Lu($l)}function Ou(){for(;null!==$l&&!lt();)Lu($l)}function Lu(e){var t=zl(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,null===t?Au(e):$l=t,Fl.current=null}function Au(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=sl(n,t,Kl)))return void($l=n)}else{if(null!==(n=ll(n,t)))return n.flags&=32767,void($l=n);if(null===e)return Gl=6,void($l=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void($l=t);$l=t=e}while(null!==t);0===Gl&&(Gl=5)}function Du(e,t,n){var r=Ot,a=Bl.transition;try{Bl.transition=null,Ot=1,function(e,t,n,r){do{Mu()}while(null!==lu);if(0!=(6&Hl))throw Error(y(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-bt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,i),e===Vl&&($l=Vl=null,Wl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||su||(su=!0,Vu(pt,(function(){return Mu(),null}))),i=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||i){i=Bl.transition,Bl.transition=null;var o=Ot;Ot=1;var s=Hl;Hl|=4,Fl.current=null,function(e,t){if(ha=rn,Cr(e=Ir())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(e){n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||0!==a&&3!==d.nodeType||(s=o+a),d!==i||0!==r&&3!==d.nodeType||(l=o+r),3===d.nodeType&&(o+=d.nodeValue.length),null!==(h=d.firstChild);)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===a&&(s=o),f===i&&++c===r&&(l=o),null!==(h=d.nextSibling))break;f=(d=f).parentNode}d=h}n=-1===s||-1===l?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pa={focusedElem:e,selectionRange:n},rn=!1,fl=t;null!==fl;)if(e=(t=fl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,fl=e;else for(;null!==fl;){t=fl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:Pi(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(y(163))}}catch(e){ju(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,fl=e;break}fl=t.return}p=ml,ml=!1}(e,n),Nl(n,e),Tr(pa),rn=!!ha,pa=ha=null,e.current=n,Ol(n,e,a),ut(),Hl=s,Ot=o,Bl.transition=i}else e.current=n;if(su&&(su=!1,lu=e,uu=a),i=e.pendingLanes,0===i&&(ou=null),function(e){if(yt&&"function"==typeof yt.onCommitFiberRoot)try{yt.onCommitFiberRoot(vt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),vu(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(au)throw au=!1,e=iu,iu=null,e;0!=(1&uu)&&0!==e.tag&&Mu(),i=e.pendingLanes,0!=(1&i)?e===du?cu++:(cu=0,du=e):cu=0,ti()}(e,t,n,r)}finally{Bl.transition=a,Ot=r}return null}function Mu(){if(null!==lu){var e=Lt(uu),t=Bl.transition,n=Ot;try{if(Bl.transition=null,Ot=16>e?16:e,null===lu)var r=!1;else{if(e=lu,lu=null,uu=0,0!=(6&Hl))throw Error(y(331));var a=Hl;for(Hl|=4,fl=e.current;null!==fl;){var i=fl,o=i.child;if(0!=(16&fl.flags)){var s=i.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(fl=u;null!==fl;){var c=fl;switch(c.tag){case 0:case 11:case 15:gl(8,c,i)}var d=c.child;if(null!==d)d.return=c,fl=d;else for(;null!==fl;){var f=(c=fl).sibling,h=c.return;if(bl(c),c===u){fl=null;break}if(null!==f){f.return=h,fl=f;break}fl=h}}}var p=i.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}fl=i}}if(0!=(2064&i.subtreeFlags)&&null!==o)o.return=i,fl=o;else e:for(;null!==fl;){if(0!=(2048&(i=fl).flags))switch(i.tag){case 0:case 11:case 15:gl(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,fl=v;break e}fl=i.return}}var b=e.current;for(fl=b;null!==fl;){var w=(o=fl).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,fl=w;else e:for(o=b;null!==fl;){if(0!=(2048&(s=fl).flags))try{switch(s.tag){case 0:case 11:case 15:vl(9,s)}}catch(e){ju(s,s.return,e)}if(s===o){fl=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,fl=k;break e}fl=s.return}}if(Hl=a,ti(),yt&&"function"==typeof yt.onPostCommitFiberRoot)try{yt.onPostCommitFiberRoot(vt,e)}catch(e){}r=!0}return r}finally{Ot=n,Bl.transition=t}}return!1}function zu(e,t,n){e=qi(e,t=Ts(0,t=Ss(n,t),1),1),t=pu(),null!==e&&(Nt(e,1,t),vu(e,t))}function ju(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===ou||!ou.has(r))){t=qi(t,e=xs(t,e=Ss(n,e),1),1),e=pu(),null!==t&&(Nt(t,1,e),vu(t,e));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=pu(),e.pingedLanes|=e.suspendedLanes&n,Vl===e&&(Wl&n)===n&&(4===Gl||3===Gl&&(130023424&Wl)===Wl&&500>ct()-tu?Cu(e,0):Xl|=n),vu(e,t)}function Fu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=St,0==(130023424&(St<<=1))&&(St=4194304)));var n=pu();null!==(e=Hi(e,t))&&(Nt(e,t,n),vu(e,n))}function Bu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Fu(e,n)}function Hu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}null!==r&&r.delete(t),Fu(e,n)}function Vu(e,t){return ot(e,t)}function $u(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wu(e,t,n,r){return new $u(e,t,n,r)}function Ku(e){return!(!(e=e.prototype)||!e.isReactComponent)}function qu(e,t){var n=e.alternate;return null===n?((n=Wu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gu(e,t,n,r,a,i){var o=2;if(r=e,"function"==typeof e)Ku(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case M:return Qu(n.children,a,i,t);case z:o=8,a|=8;break;case j:return(e=Wu(12,n,t,2|a)).elementType=j,e.lanes=i,e;case H:return(e=Wu(13,n,t,a)).elementType=H,e.lanes=i,e;case V:return(e=Wu(19,n,t,a)).elementType=V,e.lanes=i,e;case K:return Ju(n,a,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case U:o=10;break e;case F:o=9;break e;case B:o=11;break e;case $:o=14;break e;case W:o=16,r=null;break e}throw Error(y(130,null==e?e:typeof e,""))}return(t=Wu(o,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Qu(e,t,n,r){return(e=Wu(7,e,r,t)).lanes=n,e}function Ju(e,t,n,r){return(e=Wu(22,e,r,t)).elementType=K,e.lanes=n,e.stateNode={isHidden:!1},e}function Yu(e,t,n){return(e=Wu(6,e,null,t)).lanes=n,e}function Xu(e,t,n){return(t=Wu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pt(0),this.expirationTimes=Pt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,a,i,o,s,l){return e=new Zu(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Wu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(i),e}function tc(e){if(!e)return Fa;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(y(171))}if(1===e.tag){var n=e.type;if(Wa(n))return Ga(e,n,t)}return t}function nc(e,t,n,r,a,i,o,s,l){return(e=ec(n,r,!0,e,0,i,0,s,l)).context=tc(null),n=e.current,(i=Ki(r=pu(),a=mu(n))).callback=null!=t?t:null,qi(n,i,a),e.current.lanes=a,Nt(e,a,r),vu(e,r),e}function rc(e,t,n,r){var a=t.current,i=pu(),o=mu(a);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ki(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=qi(a,t,o))&&(gu(e,a,o,i),Gi(e,a,o)),o}function ac(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ic(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function oc(e,t){ic(e,t),(e=e.alternate)&&ic(e,t)}zl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ha.current)Ls=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Ls=!1,function(e,t,n){switch(t.tag){case 3:Vs(t),Ci();break;case 5:bo(t);break;case 1:Wa(t.type)&&Qa(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ua(Ni,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ua(ko,1&ko.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ys(e,t,n):(Ua(ko,1&ko.current),null!==(e=al(e,t,n))?e.sibling:null);Ua(ko,1&ko.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ua(ko,ko.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return al(e,t,n)}(e,t,n);Ls=0!=(131072&e.flags)}else Ls=!1,vi&&0!=(1048576&t.flags)&&fi(t,ii,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var a=$a(t,Ba.current);zi(t,n),a=zo(null,t,r,e,a,n);var i=jo();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wa(r)?(i=!0,Qa(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,$i(t),a.updater=eo,t.stateNode=a,a._reactInternals=t,ao(t,r,e,n),t=Hs(null,t,r,!0,i,n)):(t.tag=0,vi&&i&&hi(t),As(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return Ku(e)?1:0;if(null!=e){if((e=e.$$typeof)===B)return 11;if(e===$)return 14}return 2}(r),e=Pi(r,e),a){case 0:t=Fs(null,t,r,e,n);break e;case 1:t=Bs(null,t,r,e,n);break e;case 11:t=Ds(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,Pi(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Fs(e,t,r,a=t.elementType===r?a:Pi(r,a),n);case 1:return r=t.type,a=t.pendingProps,Bs(e,t,r,a=t.elementType===r?a:Pi(r,a),n);case 3:e:{if(Vs(t),null===e)throw Error(y(387));r=t.pendingProps,a=(i=t.memoizedState).element,Wi(e,t),Ji(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=$s(e,t,r,n,a=Ss(Error(y(423)),t));break e}if(r!==a){t=$s(e,t,r,n,a=Ss(Error(y(424)),t));break e}for(gi=_a(t.stateNode.containerInfo.firstChild),mi=t,vi=!0,yi=null,n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Ci(),r===a){t=al(e,t,n);break e}As(e,t,r,n)}t=t.child}return t;case 5:return bo(t),null===e&&_i(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,o=a.children,ma(r,a)?o=null:null!==i&&ma(r,i)&&(t.flags|=32),Us(e,t),As(e,t,o,n),t.child;case 6:return null===e&&_i(t),null;case 13:return Ys(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=uo(t,null,r,n):As(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,Ds(e,t,r,a=t.elementType===r?a:Pi(r,a),n);case 7:return As(e,t,t.pendingProps,n),t.child;case 8:case 12:return As(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Ua(Ni,r._currentValue),r._currentValue=o,null!==i)if(wr(i.value,o)){if(i.children===a.children&&!Ha.current){t=al(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){o=i.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===i.tag){(l=Ki(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),Mi(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===i.tag)o=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(o=i.return))throw Error(y(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Mi(o,n,t),o=i.sibling}else o=i.child;if(null!==o)o.return=i;else for(o=i;null!==o;){if(o===t){o=null;break}if(null!==(i=o.sibling)){i.return=o.return,o=i;break}o=o.return}i=o}As(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zi(t,n),r=r(a=ji(a)),t.flags|=1,As(e,t,r,n),t.child;case 14:return a=Pi(r=t.type,t.pendingProps),Ms(e,t,r,a=Pi(r.type,a),n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pi(r,a),rl(e,t),t.tag=1,Wa(r)?(e=!0,Qa(t)):e=!1,zi(t,n),no(t,r,a),ao(t,r,a,n),Hs(null,t,r,!0,e,n);case 19:return nl(e,t,n);case 22:return js(e,t,n)}throw Error(y(156,t.tag))};var sc="function"==typeof reportError?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}function uc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function dc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function fc(){}function hc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"==typeof a){var s=a;a=function(){var e=ac(o);s.call(e)}}rc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"==typeof r){var i=r;r=function(){var e=ac(o);i.call(e)}}var o=nc(t,r,e,0,null,!1,0,"",fc);return e._reactRootContainer=o,e[Ta]=o.current,ta(8===e.nodeType?e.parentNode:e),Eu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var s=r;r=function(){var e=ac(l);s.call(e)}}var l=ec(e,0,!1,null,0,!1,0,"",fc);return e._reactRootContainer=l,e[Ta]=l.current,ta(8===e.nodeType?e.parentNode:e),Eu((function(){rc(t,l,n,r)})),l}(n,t,e,a,r);return ac(o)}uc.prototype.render=lc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(y(409));rc(e,t,null,null)},uc.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Eu((function(){rc(null,e,null,null)})),t[Ta]=null}},uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=zt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&0!==t&&t<Kt[n].priority;n++);Kt.splice(n,0,e),0===n&&Jt(e)}},At=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Et(t.pendingLanes);0!==n&&(Rt(t,1|n),vu(t,ct()),0==(6&Hl)&&(nu=ct()+500,ti()))}break;case 13:Eu((function(){var t=Hi(e,1);if(null!==t){var n=pu();gu(t,e,1,n)}})),oc(e,1)}},Dt=function(e){if(13===e.tag){var t=Hi(e,134217728);if(null!==t)gu(t,e,134217728,pu());oc(e,134217728)}},Mt=function(e){if(13===e.tag){var t=mu(e),n=Hi(e,t);if(null!==n)gu(n,e,t,pu());oc(e,t)}},zt=function(){return Ot},jt=function(e,t){var n=Ot;try{return Ot=e,t()}finally{Ot=n}},De=function(e,t,n){switch(t){case"input":if(de(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Aa(r);if(!a)throw Error(y(90));oe(r),de(r,a)}}}break;case"textarea":ye(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},Be=Su,He=Eu;var pc={usingClientEntryPoint:!1,Events:[Oa,La,Aa,Ue,Fe,Su]},mc={findFiberByHostInstance:Ra,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=at(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{vt=vc.inject(gc),yt=vc}catch(Se){}}r=pc,a=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(y(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:D,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},o=function(e,t){if(!cc(e))throw Error(y(299));var n=!1,r="",a=sc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=ec(e,1,!1,null,0,n,0,r,a),e[Ta]=t.current,ta(8===e.nodeType?e.parentNode:e),new lc(t)},s=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(y(188));throw e=Object.keys(e).join(","),Error(y(268,e))}return e=null===(e=at(t))?null:e.stateNode},l=function(e){return Eu(e)},u=function(e,t,n){if(!dc(t))throw Error(y(200));return hc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(y(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",o=sc;if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,a,0,i,o),e[Ta]=t.current,ta(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new uc(t)},d=function(e,t,n){if(!dc(t))throw Error(y(200));return hc(null,e,t,!1,n)},f=function(e){if(!dc(e))throw Error(y(40));return!!e._reactRootContainer&&(Eu((function(){hc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ta]=null}))})),!0)},h=Su,p=function(e,t,n,r){if(!dc(n))throw Error(y(200));if(null==e||void 0===e._reactInternals)throw Error(y(38));return hc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),i.register("lBiG1",(function(e,t){e.exports=i("iRHjC")})),i.register("iRHjC",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,i,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,k;function _(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<I(a,t)))break e;e[r]=t,e[n]=a,n=r}}function S(e){return 0===e.length?null:e[0]}function E(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var o=2*(r+1)-1,s=e[o],l=o+1,u=e[l];if(0>I(s,n))l<a&&0>I(u,s)?(e[r]=u,e[l]=n,r=l):(e[r]=s,e[o]=n,r=o);else{if(!(l<a&&0>I(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function I(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(()=>r),(e=>r=e)),e(t.exports,"unstable_IdlePriority",(()=>a),(e=>a=e)),e(t.exports,"unstable_ImmediatePriority",(()=>i),(e=>i=e)),e(t.exports,"unstable_LowPriority",(()=>o),(e=>o=e)),e(t.exports,"unstable_NormalPriority",(()=>s),(e=>s=e)),e(t.exports,"unstable_Profiling",(()=>l),(e=>l=e)),e(t.exports,"unstable_UserBlockingPriority",(()=>u),(e=>u=e)),e(t.exports,"unstable_cancelCallback",(()=>c),(e=>c=e)),e(t.exports,"unstable_continueExecution",(()=>d),(e=>d=e)),e(t.exports,"unstable_forceFrameRate",(()=>f),(e=>f=e)),e(t.exports,"unstable_getCurrentPriorityLevel",(()=>h),(e=>h=e)),e(t.exports,"unstable_getFirstCallbackNode",(()=>p),(e=>p=e)),e(t.exports,"unstable_next",(()=>m),(e=>m=e)),e(t.exports,"unstable_pauseExecution",(()=>g),(e=>g=e)),e(t.exports,"unstable_requestPaint",(()=>v),(e=>v=e)),e(t.exports,"unstable_runWithPriority",(()=>y),(e=>y=e)),e(t.exports,"unstable_scheduleCallback",(()=>b),(e=>b=e)),e(t.exports,"unstable_shouldYield",(()=>w),(e=>w=e)),e(t.exports,"unstable_wrapCallback",(()=>k),(e=>k=e)),"object"==typeof performance&&"function"==typeof performance.now){var C=performance;r=function(){return C.now()}}else{var T=Date,x=T.now();r=function(){return T.now()-x}}var P=[],N=[],R=1,O=null,L=3,A=!1,D=!1,M=!1,z="function"==typeof setTimeout?setTimeout:null,j="function"==typeof clearTimeout?clearTimeout:null,U="undefined"!=typeof setImmediate?setImmediate:null;function F(e){for(var t=S(N);null!==t;){if(null===t.callback)E(N);else{if(!(t.startTime<=e))break;E(N),t.sortIndex=t.expirationTime,_(P,t)}t=S(N)}}function B(e){if(M=!1,F(e),!D)if(null!==S(P))D=!0,Z(H);else{var t=S(N);null!==t&&ee(B,t.startTime-e)}}function H(e,t){D=!1,M&&(M=!1,j(K),K=-1),A=!0;var n=L;try{for(F(t),O=S(P);null!==O&&(!(O.expirationTime>t)||e&&!Q());){var a=O.callback;if("function"==typeof a){O.callback=null,L=O.priorityLevel;var i=a(O.expirationTime<=t);t=r(),"function"==typeof i?O.callback=i:O===S(P)&&E(P),F(t)}else E(P);O=S(P)}if(null!==O)var o=!0;else{var s=S(N);null!==s&&ee(B,s.startTime-t),o=!1}return o}finally{O=null,L=n,A=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var V,$=!1,W=null,K=-1,q=5,G=-1;function Q(){return!(r()-G<q)}function J(){if(null!==W){var e=r();G=e;var t=!0;try{t=W(!0,e)}finally{t?V():($=!1,W=null)}}else $=!1}if("function"==typeof U)V=function(){U(J)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=J,V=function(){X.postMessage(null)}}else V=function(){z(J,0)};function Z(e){W=e,$||($=!0,V())}function ee(e,t){K=z((function(){e(r())}),t)}a=5,i=1,o=4,s=3,l=null,u=2,c=function(e){e.callback=null},d=function(){D||A||(D=!0,Z(H))},f=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<e?Math.floor(1e3/e):5},h=function(){return L},p=function(){return S(P)},m=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},g=function(){},v=function(){},y=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},b=function(e,t,n){var a=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?a+n:a:n=a,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:R++,callback:t,priorityLevel:e,startTime:n,expirationTime:i=n+i,sortIndex:-1},n>a?(e.sortIndex=n,_(N,e),null===S(P)&&e===S(N)&&(M?(j(K),K=-1):M=!0,ee(B,n-a))):(e.sortIndex=i,_(P,e),D||A||(D=!0,Z(H))),e},w=Q,k=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}}}));var o,s={};s=i("iTWFB");var l;!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),o=(l=i("je6Lo")).createRoot,l.hydrateRoot;var u=i("2TgRs"),c={};e(c,"GenIcon",(()=>g),(e=>g=e));u=i("2TgRs"),u=i("2TgRs");var d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=t(u).createContext&&t(u).createContext(d),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},h.apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function m(e){return e&&e.map((function(e,n){return t(u).createElement(e.tag,h({key:n},e.attr),m(e.child))}))}function g(e){return function(n){return t(u).createElement(v,h({attr:h({},e.attr)},n),m(e.child))}}function v(e){var n=function(n){var r,a=e.attr,i=e.size,o=e.title,s=p(e,["attr","size","title"]),l=i||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t(u).createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,s,{className:r,style:h(h({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&t(u).createElement("title",null,o),e.children)};return void 0!==f?t(u).createElement(f.Consumer,null,(function(e){return n(e)})):n(d)}function y(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z"}}]})(e)}function b(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}}]})(e)}function w(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}}]})(e)}function k(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}}]})(e)}function _(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}}]})(e)}function S(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M94.32 70.473c-12.257.27-25.32 12.332-36.568 29.64a145.732 145.732 0 0 1 19.855-12.115c-31.622 23.364-46.658 83.72-47.166 122.336C43.54 191.32 70.73 160.196 96 174.964c-28.952-6.018-47.296 38.325-56.428 58.606 22.808-9.36 39.494-24.152 72.428-24.523-32.47 21.4-43.966 44.83-56.428 68.168 23.376-14.505 40.286-22.99 55.528-26.227 13.683-16.43 28.01-33.093 43.728-46.746 11.79-10.24 24.533-18.877 38.37-24.043-16.805-46.114-42.764-88.828-89.626-107.49-3-1.6-6.1-2.307-9.252-2.237zM207.578 194.64c-14.066 3.29-27.57 11.573-40.947 23.192-17.53 15.227-34.353 35.82-50.868 55.703-16.515 19.884-32.62 39.088-50.287 51.707-13.545 9.674-29.157 15.164-45.014 12.565 2.883 14.468 9.866 33.213 19.38 50.42 12.655 22.886 30.036 43.342 44.482 50.59 6.637 3.328 12.566 3.416 21.23 1.243 8.662-2.173 19.453-6.957 32.762-12.52C164.934 416.41 201.78 402.6 256 402.6c54.22 0 91.066 13.81 117.686 24.94 13.31 5.563 24.1 10.347 32.763 12.52 8.662 2.173 14.59 2.085 21.228-1.244 14.446-7.247 31.827-27.703 44.482-50.59 9.514-17.206 16.497-35.95 19.38-50.42-15.858 2.6-31.47-2.89-45.015-12.564-17.667-12.62-33.772-31.823-50.287-51.707s-33.337-40.476-50.87-55.703c-13.376-11.62-26.88-19.902-40.946-23.193 3.024 13.966-.075 26.363-7.594 34.985-10.06 11.535-25.643 16.307-40.828 16.307-15.185 0-30.77-4.772-40.828-16.307-7.52-8.622-10.618-21.02-7.594-34.986zm113.04 35.702c8.495-.304 17.71 10.54 7.925 22.465 16.326-15.08 30.872 6.004 13.81 13.808-13.26 6.065-25.986 13.423-37.937 21.86a32.33 32.33 0 0 1 1.584 9.958c0 10.202-2.76 19.5-10.88 26.696l-1.18 1.055-.047 1.582-.11 4.397c13.784 10.594 29.233 19.1 46.635 25.016 20.08 6.825 5.405 31.39-15.922 15.912 18.035 18.658-6.53 32.908-14.275 14.275-4.626-11.13-10.36-21.786-17.02-31.887l-.007.233c-1.505.906-4.646 2.64-9.295 4.308V340.6h-9.343v21.583c-3.997.946-6.635 1.68-11.875 1.94v-20.516h-11.344v20.565c-5-.19-7.527-.81-11.518-1.645V340.6h-9.344v20c-5.884-1.864-9.905-3.948-11.69-4.96l-.01-.298c-6.652 10.092-12.38 20.738-17.003 31.855-7.746 18.632-32.31 4.384-14.274-14.275-21.327 15.48-36.005-9.097-15.924-15.922 17.313-5.885 32.705-14.322 46.435-24.84l-.156-4.687-.05-1.547-1.152-1.032C208.72 317.74 206 308.48 206 298.396c0-3.362.53-6.647 1.533-9.798-11.935-8.415-24.646-15.747-37.883-21.8-17.063-7.806-2.527-28.89 13.8-13.812-9.574-11.666-.968-22.302 7.364-22.474 3.52-.073 6.99 1.722 9.024 6.086 5.733 12.305 12.05 24.032 19.04 35.013 8.91-7.97 21.735-13.142 36.214-13.352H256c14.805 0 27.942 5.186 37.03 13.28 7.024-11.008 13.372-22.763 19.124-35.11 1.926-4.134 5.14-5.967 8.463-6.086zM224.7 293.228c-4.483.056-7.877 1.904-8.042 7.28 0 8.555 6.923 15.498 15.485 15.498 8.555 0 15.496-6.943 15.496-15.498 0 0-13.757-7.395-22.94-7.28zm62.624 0c-9.18-.116-22.937 7.28-22.937 7.28 0 8.555 6.94 15.498 15.496 15.498 8.555 0 15.484-6.943 15.484-15.498-.164-5.376-3.56-7.224-8.043-7.28zm-31.336 18.96l-7.994 17.84h15.988l-7.994-17.84z"}}]})(e)}
/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var E,I;
/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */u=i("2TgRs");function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}(I=E||(E={})).Pop="POP",I.Push="PUSH",I.Replace="REPLACE";const T="popstate";function x(e){return void 0===e&&(e={}),D((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return O("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:L(t)}),null,e)}function P(e,t){if(!1===e||null==e)throw new Error(t)}function N(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function R(e,t){return{usr:e.state,key:e.key,idx:t}}function O(e,t,n,r){return void 0===n&&(n=null),C({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?A(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function L(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function A(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function D(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=E.Pop,l=null,u=c();function c(){return(o.state||{idx:null}).idx}function d(){s=E.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:h.location,delta:t})}function f(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:L(e);return P(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,o.replaceState(C({},o.state,{idx:u}),""));let h={get action(){return s},get location(){return e(a,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(T,d),l=e,()=>{a.removeEventListener(T,d),l=null}},createHref:e=>t(a,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=E.Push;let r=O(h.location,e,t);n&&n(r,e),u=c()+1;let d=R(r,u),f=h.createHref(r);try{o.pushState(d,"",f)}catch(e){a.location.assign(f)}i&&l&&l({action:s,location:h.location,delta:1})},replace:function(e,t){s=E.Replace;let r=O(h.location,e,t);n&&n(r,e),u=c();let a=R(r,u),d=h.createHref(r);o.replaceState(a,"",d),i&&l&&l({action:s,location:h.location,delta:0})},go:e=>o.go(e)};return h}var M,z;(z=M||(M={})).data="data",z.deferred="deferred",z.redirect="redirect",z.error="error";new Set(["lazy","caseSensitive","path","id","index","children"]);function j(e,t,n){void 0===n&&(n="/");let r=X(("string"==typeof t?A(t):t).pathname||"/",n);if(null==r)return null;let a=U(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let i=null;for(let e=0;null==i&&e<a.length;++e)i=Q(a[e],Y(r));return i}function U(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(P(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=ne([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(P(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),U(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:G(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of F(e.path))a(e,t,n);else a(e,t)})),t}function F(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=F(r.join("/")),s=[];return s.push(...o.map((e=>""===e?i:[i,e].join("/")))),a&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const B=/^:\w+$/,H=3,V=2,$=1,W=10,K=-2,q=e=>"*"===e;function G(e,t){let n=e.split("/"),r=n.length;return n.some(q)&&(r+=K),t&&(r+=V),n.filter((e=>!q(e))).reduce(((e,t)=>e+(B.test(t)?H:""===t?$:W)),r)}function Q(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let e=0;e<n.length;++e){let o=n[e],s=e===n.length-1,l="/"===a?t:t.slice(a.length)||"/",u=J({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=o.route;i.push({params:r,pathname:ne([a,u.pathname]),pathnameBase:re(ne([a,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(a=ne([a,u.pathnameBase]))}return i}function J(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);N("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return N(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:i,pathnameBase:o,pattern:e}}function Y(e){try{return decodeURI(e)}catch(t){return N(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function X(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function ee(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function te(e,t,n,r){let a;void 0===r&&(r=!1),"string"==typeof e?a=A(e):(a=C({},e),P(!a.pathname||!a.pathname.includes("?"),Z("?","pathname","search",a)),P(!a.pathname||!a.pathname.includes("#"),Z("#","pathname","hash",a)),P(!a.search||!a.search.includes("#"),Z("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(r||null==s)i=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?A(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:ae(r),hash:ie(a)}}(a,i),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const ne=e=>e.join("/").replace(/\/\/+/g,"/"),re=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ae=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ie=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class oe extends Error{}function se(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const le=["post","put","patch","delete"],ue=(new Set(le),["get",...le]);new Set(ue),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred");function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}const de=(u=i("2TgRs")).createContext(null),fe=u.createContext(null),he=u.createContext(null),pe=u.createContext(null),me=u.createContext({outlet:null,matches:[]}),ge=u.createContext(null);function ve(e,t){let{relative:n}=void 0===t?{}:t;!ye()&&P(!1);let{basename:r,navigator:a}=u.useContext(he),{hash:i,pathname:o,search:s}=_e(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:ne([r,o])),a.createHref({pathname:l,search:s,hash:i})}function ye(){return null!=u.useContext(pe)}function be(){return!ye()&&P(!1),u.useContext(pe).location}function we(e){u.useContext(he).static||u.useLayoutEffect(e)}function ke(){return null!=u.useContext(de)?function(){let{router:e}=Le(Pe.UseNavigateStable),t=De(Re.UseNavigateStable),n=u.useRef(!1);return we((()=>{n.current=!0})),u.useCallback((function(r,a){void 0===a&&(a={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,ce({fromRouteId:t},a)))}),[e,t])}():function(){!ye()&&P(!1);let{basename:e,navigator:t}=u.useContext(he),{matches:n}=u.useContext(me),{pathname:r}=be(),a=JSON.stringify(ee(n).map((e=>e.pathnameBase))),i=u.useRef(!1);return we((()=>{i.current=!0})),u.useCallback((function(n,o){if(void 0===o&&(o={}),!i.current)return;if("number"==typeof n)return void t.go(n);let s=te(n,JSON.parse(a),r,"path"===o.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:ne([e,s.pathname])),(o.replace?t.replace:t.push)(s,o.state,o)}),[e,t,a,r])}()}function _e(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=u.useContext(me),{pathname:a}=be(),i=JSON.stringify(ee(r).map((e=>e.pathnameBase)));return u.useMemo((()=>te(e,JSON.parse(i),a,"path"===n)),[e,i,a,n])}function Se(e,t,n){!ye()&&P(!1);let r,{navigator:a}=u.useContext(he),{matches:i}=u.useContext(me),o=i[i.length-1],s=o?o.params:{},l=(o&&o.pathname,o?o.pathnameBase:"/"),c=(o&&o.route,be());if(t){var d;let e="string"==typeof t?A(t):t;"/"!==l&&!(null==(d=e.pathname)?void 0:d.startsWith(l))&&P(!1),r=e}else r=c;let f=r.pathname||"/",h=j(e,{pathname:"/"===l?f:f.slice(l.length)||"/"}),p=xe(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:ne([l,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:ne([l,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,n);return t&&p?u.createElement(pe.Provider,{value:{location:ce({pathname:"/",search:"",hash:"",state:null,key:"default"},r),navigationType:E.Pop}},p):p}function Ee(){let e=function(){var e;let t=u.useContext(ge),n=Ae(Re.UseRouteError),r=De(Re.UseRouteError);return t||(null==(e=n.errors)?void 0:e[r])}(),t=se(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:a},n):null,null)}const Ie=u.createElement(Ee,null);class Ce extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?u.createElement(me.Provider,{value:this.props.routeContext},u.createElement(ge.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Te(e){let{routeContext:t,match:n,children:r}=e,a=u.useContext(de);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(me.Provider,{value:t},r)}function xe(e,t,n){var r;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){var a;if(null==(a=n)||!a.errors)return null;e=n.matches}let i=e,o=null==(r=n)?void 0:r.errors;if(null!=o){let e=i.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));!(e>=0)&&P(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,r,a)=>{let s=r.route.id?null==o?void 0:o[r.route.id]:null,l=null;n&&(l=r.route.errorElement||Ie);let c=t.concat(i.slice(0,a+1)),d=()=>{let t;return t=s?l:r.route.element?r.route.element:e,u.createElement(Te,{match:r,routeContext:{outlet:e,matches:c},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?u.createElement(Ce,{location:n.location,revalidation:n.revalidation,component:l,error:s,children:d(),routeContext:{outlet:null,matches:c}}):d()}),null)}var Pe,Ne,Re,Oe;function Le(e){let t=u.useContext(de);return!t&&P(!1),t}function Ae(e){let t=u.useContext(fe);return!t&&P(!1),t}function De(e){let t=function(e){let t=u.useContext(me);return!t&&P(!1),t}(),n=t.matches[t.matches.length-1];return!n.route.id&&P(!1),n.route.id}(Ne=Pe||(Pe={})).UseBlocker="useBlocker",Ne.UseRevalidator="useRevalidator",Ne.UseNavigateStable="useNavigate",(Oe=Re||(Re={})).UseBlocker="useBlocker",Oe.UseLoaderData="useLoaderData",Oe.UseActionData="useActionData",Oe.UseRouteError="useRouteError",Oe.UseNavigation="useNavigation",Oe.UseRouteLoaderData="useRouteLoaderData",Oe.UseMatches="useMatches",Oe.UseRevalidator="useRevalidator",Oe.UseNavigateStable="useNavigate",Oe.UseRouteId="useRouteId";function Me(e){P(!1)}function ze(e){let{basename:t="/",children:n=null,location:r,navigationType:a=E.Pop,navigator:i,static:o=!1}=e;ye()&&P(!1);let s=t.replace(/^\/*/,"/"),l=u.useMemo((()=>({basename:s,navigator:i,static:o})),[s,i,o]);"string"==typeof r&&(r=A(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:p="default"}=r,m=u.useMemo((()=>{let e=X(c,s);return null==e?null:{location:{pathname:e,search:d,hash:f,state:h,key:p},navigationType:a}}),[s,c,d,f,h,p,a]);return null==m?null:u.createElement(he.Provider,{value:l},u.createElement(pe.Provider,{children:n,value:m}))}function je(e){let{children:t,location:n}=e;return Se(He(t),n)}var Ue,Fe;(Fe=Ue||(Ue={}))[Fe.pending=0]="pending",Fe[Fe.success=1]="success",Fe[Fe.error=2]="error";new Promise((()=>{}));class Be extends u.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,a=Ue.pending;if(n instanceof Promise)if(this.state.error){Ue.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?Ue.error:void 0!==r._data?Ue.success:Ue.pending):(Ue.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else Ue.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(a===Ue.error&&r._error instanceof oe)throw $373a084899bc2a4b$var$neverSettledPromise;if(a===Ue.error&&!t)throw r._error;if(a===Ue.error)return u.createElement($373a084899bc2a4b$var$AwaitContext.Provider,{value:r,children:t});if(a===Ue.success)return u.createElement($373a084899bc2a4b$var$AwaitContext.Provider,{value:r,children:e});throw r}}function He(e,t){void 0===t&&(t=[]);let n=[];return u.Children.forEach(e,((e,r)=>{if(!u.isValidElement(e))return;let a=[...t,r];if(e.type===u.Fragment)return void n.push.apply(n,He(e.props.children,a));e.type!==Me&&P(!1),e.props.index&&e.props.children&&P(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=He(e.props.children,a)),n.push(i)})),n}function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}function $e(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}const We=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ke=["aria-current","caseSensitive","className","end","style","to","children"];function qe(e){let{basename:t,children:n,window:r}=e,a=u.useRef();null==a.current&&(a.current=x({window:r,v5Compat:!0}));let i=a.current,[o,s]=u.useState({action:i.action,location:i.location});return u.useLayoutEffect((()=>i.listen(s)),[i]),u.createElement(ze,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:i})}const Ge="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Je=u.forwardRef((function(e,t){let n,{onClick:r,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:c,preventScrollReset:d}=e,f=$e(e,We),{basename:h}=u.useContext(he),p=!1;if("string"==typeof c&&Qe.test(c)&&(n=c,Ge))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=X(t.pathname,h);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:p=!0}catch(e){}let m=ve(c,{relative:a}),g=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=void 0===t?{}:t,s=ke(),l=be(),c=_e(e,{relative:o});return u.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:L(l)===L(c);s(e,{replace:n,state:a,preventScrollReset:i,relative:o})}}),[l,s,c,r,a,n,e,i,o])}(c,{replace:o,state:s,target:l,preventScrollReset:d,relative:a});return u.createElement("a",Ve({},f,{href:n||m,onClick:p||i?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))})),Ye=u.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:i=!1,style:o,to:s,children:l}=e,c=$e(e,Ke),d=_e(s,{relative:c.relative}),f=be(),h=u.useContext(fe),{navigator:p}=u.useContext(he),m=p.encodeLocation?p.encodeLocation(d).pathname:d.pathname,g=f.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(g=g.toLowerCase(),v=v?v.toLowerCase():null,m=m.toLowerCase());let y,b=g===m||!i&&g.startsWith(m)&&"/"===g.charAt(m.length),w=null!=v&&(v===m||!i&&v.startsWith(m)&&"/"===v.charAt(m.length)),k=b?n:void 0;y="function"==typeof a?a({isActive:b,isPending:w}):[a,b?"active":null,w?"pending":null].filter(Boolean).join(" ");let _="function"==typeof o?o({isActive:b,isPending:w}):o;return u.createElement(Je,Ve({},c,{"aria-current":k,className:y,ref:t,style:_,to:s}),"function"==typeof l?l({isActive:b,isPending:w}):l)}));var Xe,Ze;!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(Xe||(Xe={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ze||(Ze={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var et,tt,nt,rt=et={};function at(){throw new Error("setTimeout has not been defined")}function it(){throw new Error("clearTimeout has not been defined")}function ot(e){if(tt===setTimeout)return setTimeout(e,0);if((tt===at||!tt)&&setTimeout)return tt=setTimeout,setTimeout(e,0);try{return tt(e,0)}catch(t){try{return tt.call(null,e,0)}catch(t){return tt.call(this,e,0)}}}!function(){try{tt="function"==typeof setTimeout?setTimeout:at}catch(e){tt=at}try{nt="function"==typeof clearTimeout?clearTimeout:it}catch(e){nt=it}}();var st,lt=[],ut=!1,ct=-1;function dt(){ut&&st&&(ut=!1,st.length?lt=st.concat(lt):ct=-1,lt.length&&ft())}function ft(){if(!ut){var e=ot(dt);ut=!0;for(var t=lt.length;t;){for(st=lt,lt=[];++ct<t;)st&&st[ct].run();ct=-1,t=lt.length}st=null,ut=!1,function(e){if(nt===clearTimeout)return clearTimeout(e);if((nt===it||!nt)&&clearTimeout)return nt=clearTimeout,clearTimeout(e);try{return nt(e)}catch(t){try{return nt.call(null,e)}catch(t){return nt.call(this,e)}}}(e)}}function ht(e,t){this.fun=e,this.array=t}function pt(){}rt.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];lt.push(new ht(e,t)),1!==lt.length||ut||ot(ft)},ht.prototype.run=function(){this.fun.apply(null,this.array)},rt.title="browser",rt.browser=!0,rt.env={},rt.argv=[],rt.version="",rt.versions={},rt.on=pt,rt.addListener=pt,rt.once=pt,rt.off=pt,rt.removeListener=pt,rt.removeAllListeners=pt,rt.emit=pt,rt.prependListener=pt,rt.prependOnceListener=pt,rt.listeners=function(e){return[]},rt.binding=function(e){throw new Error("process.binding is not supported")},rt.cwd=function(){return"/"},rt.chdir=function(e){throw new Error("process.chdir is not supported")},rt.umask=function(){return 0};const mt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},gt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=a>>2,c=(3&a)<<4|o>>4;let d=(15&o)<<2|l>>6,f=63&l;s||(f=64,i||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(mt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const a=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==a||null==i||null==o||null==s)throw new vt;const l=a<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yt=function(e){return function(e){const t=mt(e);return gt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},bt=function(e){try{return gt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,kt=()=>{try{return wt()||(()=>{if(void 0===et||void 0===et.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&bt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},_t=e=>{var t,n;return null===(n=null===(t=kt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},St=()=>{var e;return null===(e=kt())||void 0===e?void 0:e.config},Et=e=>{var t;return null===(t=kt())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Tt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function xt(){const e=Ct();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Pt(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Nt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rt.prototype.create)}}class Rt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(Ot,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new Nt(r,o,n)}}const Ot=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function At(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(Dt(n)&&Dt(i)){if(!At(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Dt(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function zt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function jt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){const n=new Ft(e,t);return n.subscribe.bind(n)}class Ft{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Bt),void 0===r.error&&(r.error=Bt),void 0===r.complete&&(r.complete=Bt);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Bt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(e){return e&&e._delegate?e._delegate:e}class Vt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new It;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===$t?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Kt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=[];var Gt,Qt;(Qt=Gt||(Gt={}))[Qt.DEBUG=0]="DEBUG",Qt[Qt.VERBOSE=1]="VERBOSE",Qt[Qt.INFO=2]="INFO",Qt[Qt.WARN=3]="WARN",Qt[Qt.ERROR=4]="ERROR",Qt[Qt.SILENT=5]="SILENT";const Jt={debug:Gt.DEBUG,verbose:Gt.VERBOSE,info:Gt.INFO,warn:Gt.WARN,error:Gt.ERROR,silent:Gt.SILENT},Yt=Gt.INFO,Xt={[Gt.DEBUG]:"log",[Gt.VERBOSE]:"log",[Gt.INFO]:"info",[Gt.WARN]:"warn",[Gt.ERROR]:"error"},Zt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=Xt[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};class en{constructor(e){this.name=e,this._logLevel=Yt,this._logHandler=Zt,this._userLogHandler=null,qt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Gt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Jt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Gt.DEBUG,...e),this._logHandler(this,Gt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Gt.VERBOSE,...e),this._logHandler(this,Gt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Gt.INFO,...e),this._logHandler(this,Gt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Gt.WARN,...e),this._logHandler(this,Gt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Gt.ERROR,...e),this._logHandler(this,Gt.ERROR,...e)}}const tn=(e,t)=>t.some((t=>e instanceof t));let nn,rn;const an=new WeakMap,on=new WeakMap,sn=new WeakMap,ln=new WeakMap,un=new WeakMap;let cn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return on.get(e);if("objectStoreNames"===t)return e.objectStoreNames||sn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function dn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(rn||(rn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(pn(this),t),hn(an.get(this))}:function(...t){return hn(e.apply(pn(this),t))}:function(t,...n){const r=e.call(pn(this),t,...n);return sn.set(r,t.sort?t.sort():[t]),hn(r)}}function fn(e){return"function"==typeof e?dn(e):(e instanceof IDBTransaction&&function(e){if(on.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));on.set(e,t)}(e),tn(e,nn||(nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,cn):e)}function hn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(hn(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&an.set(t,e)})).catch((()=>{})),un.set(t,e),t}(e);if(ln.has(e))return ln.get(e);const t=fn(e);return t!==e&&(ln.set(e,t),un.set(t,e)),t}const pn=e=>un.get(e);function mn(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=hn(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(hn(o.result),e.oldVersion,e.newVersion,hn(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const gn=["get","getKey","getAll","getAllKeys","count"],vn=["put","add","delete","clear"],yn=new Map;function bn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(yn.get(t))return yn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=vn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!gn.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return yn.set(t,i),i}cn=(e=>({...e,get:(t,n,r)=>bn(t,n)||e.get(t,n,r),has:(t,n)=>!!bn(t,n)||e.has(t,n)}))(cn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const kn="@firebase/app",_n="0.9.9",Sn=new en("@firebase/app"),En="[DEFAULT]",In={[kn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Cn=new Map,Tn=new Map;function xn(e,t){try{e.container.addComponent(t)}catch(n){Sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pn(e){const t=e.name;if(Tn.has(t))return Sn.debug(`There were multiple attempts to register component ${t}.`),!1;Tn.set(t,e);for(const t of Cn.values())xn(t,e);return!0}function Nn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn=new Rt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="9.21.0";function An(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:En,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!=typeof a||!a)throw Rn.create("bad-app-name",{appName:String(a)});if(n||(n=St()),!n)throw Rn.create("no-options");const i=Cn.get(a);if(i){if(At(n,i.options)&&At(r,i.config))return i;throw Rn.create("duplicate-app",{appName:a})}const o=new Kt(a);for(const e of Tn.values())o.addComponent(e);const s=new On(n,r,o);return Cn.set(a,s),s}function Dn(e=En){const t=Cn.get(e);if(!t&&e===En)return An();if(!t)throw Rn.create("no-app",{appName:e});return t}function Mn(e,t,n){var r;let a=null!==(r=In[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${a}" with version "${t}":`];return i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Sn.warn(e.join(" "))}Pn(new Vt(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zn="firebase-heartbeat-database",jn=1,Un="firebase-heartbeat-store";let Fn=null;function Bn(){return Fn||(Fn=mn(zn,jn,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Un)}}).catch((e=>{throw Rn.create("idb-open",{originalErrorMessage:e.message})}))),Fn}async function Hn(e,t){try{const n=(await Bn()).transaction(Un,"readwrite"),r=n.objectStore(Un);return await r.put(t,Vn(e)),n.done}catch(e){if(e instanceof Nt)Sn.warn(e.message);else{const t=Rn.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Sn.warn(t.message)}}}function Vn(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Wn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Wn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),qn(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),qn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=yt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wn(){return(new Date).toISOString().substring(0,10)}class Kn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Pt()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Bn()).transaction(Un).objectStore(Un).get(Vn(e))}catch(e){if(e instanceof Nt)Sn.warn(e.message);else{const t=Rn.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Sn.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Hn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Hn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function qn(e){return yt(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;Gn="",Pn(new Vt("platform-logger",(e=>new wn(e)),"PRIVATE")),Pn(new Vt("heartbeat",(e=>new $n(e)),"PRIVATE")),Mn(kn,_n,Gn),Mn(kn,_n,"esm2017"),Mn("fire-js","");function Qn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}Object.create;Object.create;function Jn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yn=Jn,Xn=new Rt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Zn=new en("@firebase/auth");function er(e,...t){Zn.logLevel<=Gt.ERROR&&Zn.error(`Auth (${Ln}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e,...t){throw ar(e,...t)}function nr(e,...t){return ar(e,...t)}function rr(e,t,n){const r=Object.assign(Object.assign({},Yn()),{[t]:n});return new Rt("auth","Firebase",r).create(t,{appName:e.name})}function ar(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xn.create(e,...t)}function ir(e,t,...n){if(!e)throw ar(t,...n)}function or(e){const t="INTERNAL ASSERTION FAILED: "+e;throw er(t),new Error(t)}function sr(e,t){e||or(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ur(){return"http:"===cr()||"https:"===cr()}function cr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ur()||Tt()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,sr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return dr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t){sr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},gr=new fr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function yr(e,t,n,r,a={}){return br(e,a,(async()=>{let a={},i={};r&&("GET"===t?i=r:a={body:JSON.stringify(r)});const o=Mt(Object.assign({key:e.config.apiKey},i)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),pr.fetch()(kr(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},a))}))}async function br(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},mr),t);try{const t=new _r(e),a=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw Sr(e,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const t=a.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Sr(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Sr(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Sr(e,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw rr(e,s,o);tr(e,s)}}catch(t){if(t instanceof Nt)throw t;tr(e,"network-request-failed",{message:String(t)})}}async function wr(e,t,n,r,a={}){const i=await yr(e,t,n,r,a);return"mfaPendingCredential"in i&&tr(e,"multi-factor-auth-required",{_serverResponse:i}),i}function kr(e,t,n,r){const a=`${t}${n}?${r}`;return e.config.emulator?hr(e.config,a):`${e.config.apiScheme}://${a}`}class _r{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(nr(this.auth,"network-request-failed"))),gr.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=nr(e,t,r);return a.customData._tokenResponse=n,a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Er(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){return 1e3*Number(e)}function Cr(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return er("JWT malformed, contained fewer than 3 sections"),null;try{const e=bt(n);return e?JSON.parse(e):(er("Failed to decode base64 JWT payload"),null)}catch(e){return er("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tr(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Nt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class xr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(e){var t;const n=e.auth,r=await e.getIdToken(),a=await Tr(e,async function(e,t){return yr(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));ir(null==a?void 0:a.users.length,n,"internal-error");const i=a.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Qn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const s=(l=e.providerData,u=o,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&i.passwordHash||(null==s?void 0:s.length)),f=!!c&&d,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pr(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ir(e.idToken,"internal-error"),ir(void 0!==e.idToken,"internal-error"),ir(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Cr(e);return ir(t,"internal-error"),ir(void 0!==t.exp,"internal-error"),ir(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ir(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:a}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await br(e,{},(async()=>{const n=Mt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=e.config,i=kr(e,r,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",pr.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:a}=t,i=new Rr;return n&&(ir("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(ir("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),a&&(ir("number"==typeof a,"internal-error",{appName:e}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return or("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t){ir("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Lr{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,a=Qn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Pr(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return ir(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),a=Cr(r);ir(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const i="object"==typeof a.firebase?a.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:a,token:r,authTime:Er(Ir(a.auth_time)),issuedAtTime:Er(Ir(a.iat)),expirationTime:Er(Ir(a.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ht(e);await Nr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ir(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ir(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Nr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,async function(e,t){return yr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,a,i,o,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(a=t.phoneNumber)&&void 0!==a?a:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:k,stsTokenManager:_}=t;ir(y&&_,e,"internal-error");const S=Rr.fromJSON(this.name,_);ir("string"==typeof y,e,"internal-error"),Or(c,e.name),Or(d,e.name),ir("boolean"==typeof b,e,"internal-error"),ir("boolean"==typeof w,e,"internal-error"),Or(f,e.name),Or(h,e.name),Or(p,e.name),Or(m,e.name),Or(g,e.name),Or(v,e.name);const E=new Lr({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return k&&Array.isArray(k)&&(E.providerData=k.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Rr;r.updateFromServerResponse(t);const a=new Lr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Nr(a),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map;function Dr(e){sr(e instanceof Function,"Expected a class definition");let t=Ar.get(e);return t?(sr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ar.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mr.type="NONE";const zr=Mr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t,n){return`firebase:${e}:${t}:${n}`}class Ur{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:a}=this.auth;this.fullUserKey=jr(this.userKey,r.apiKey,a),this.fullPersistenceKey=jr("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ur(Dr(zr),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let a=r[0]||Dr(zr);const i=jr(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const r=Lr._fromJSON(e,t);n!==a&&(o=r),a=n;break}}catch(e){}const s=r.filter((e=>e._shouldAllowMigration));return a._shouldAllowMigration&&s.length?(a=s[0],o&&await a._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==a)try{await e._remove(i)}catch(e){}}))),new Ur(a,e,n)):new Ur(a,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($r(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Br(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Kr(t))return"Blackberry";if(qr(t))return"Webos";if(Hr(t))return"Safari";if((t.includes("chrome/")||Vr(t))&&!t.includes("edge/"))return"Chrome";if(Wr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Br(e=Ct()){return/firefox\//i.test(e)}function Hr(e=Ct()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Vr(e=Ct()){return/crios\//i.test(e)}function $r(e=Ct()){return/iemobile/i.test(e)}function Wr(e=Ct()){return/android/i.test(e)}function Kr(e=Ct()){return/blackberry/i.test(e)}function qr(e=Ct()){return/webos/i.test(e)}function Gr(e=Ct()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Qr(){return xt()&&10===document.documentMode}function Jr(e=Ct()){return Gr(e)||Wr(e)||qr(e)||Kr(e)||/windows phone/i.test(e)||$r(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(e,t=[]){let n;switch(e){case"Browser":n=Fr(Ct());break;case"Worker":n=`${Fr(Ct())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(e,t){return yr(e,"GET","/v2/recaptchaConfig",vr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){return void 0!==e&&void 0!==e.enterprise}class ea{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){return new Promise(((t,n)=>{const r=document.createElement("script");var a,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=nr("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(a=document.getElementsByTagName("head"))||void 0===a?void 0:a[0])&&void 0!==i?i:document).appendChild(r)}))}function na(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ra{constructor(e){this.type="recaptcha-enterprise",this.auth=sa(e)}async verify(e="verify",t=!1){function n(t,n,r){const a=window.grecaptcha;Zr(a)?a.enterprise.ready((()=>{a.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Xr(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new ea(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((a=>{if(!t&&Zr(window.grecaptcha))n(a,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));ta("https://www.google.com/recaptcha/enterprise.js?render="+a).then((()=>{n(a,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function aa(e,t,n,r=!1){const a=new ra(e);let i;try{i=await a.verify(n)}catch(e){i=await a.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new ia(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ir(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nr(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ht(e):null;return t&&ir(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ir(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Dr(e))}))}async initializeRecaptchaConfig(){const e=await Xr(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ea(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new ra(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;ir(t,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const a="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return ir(i,this,"internal-error"),i.then((()=>a(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ir(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Zn.logLevel<=Gt.WARN&&Zn.warn(`Auth (${Ln}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function sa(e){return Ht(e)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ut((e=>this.observer=e))}get next(){return ir(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e,t,n){const r=sa(e);ir(r._canInitEmulator,r,"emulator-config-failed"),ir(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const a=!!(null==n?void 0:n.disableWarnings),i=ca(t),{host:o,port:s}=function(e){const t=ca(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const e=a[1];return{host:e,port:da(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:da(t)}}}(t),l=null===s?"":`:${s}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ca(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function da(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class fa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,t){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(e,t){return yr(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pa(e,t){return wr(e,"POST","/v1/accounts:signInWithPassword",vr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma extends fa{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ma(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ma(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await aa(e,n,"signInWithPassword");return pa(e,t)}return pa(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await aa(e,n,"signInWithPassword");return pa(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithEmailLink",vr(e,t))}(e,{email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ha(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithEmailLink",vr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(e,t){return wr(e,"POST","/v1/accounts:signInWithIdp",vr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new va(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,a=Qn(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new va(n,r);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(e){return ga(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ga(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ga(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mt(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba extends fa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ba({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ba({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithPhoneNumber",vr(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await wr(e,"POST","/v1/accounts:signInWithPhoneNumber",vr(e,t));if(n.temporaryProof)throw Sr(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithPhoneNumber",vr(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ya)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:a}=e;return n||t||r||a?new ba({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:a}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){var t,n,r,a,i,o;const s=zt(jt(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(n=s.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);ir(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(a=s.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(i=s.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=s.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=zt(jt(e)).link,n=t?zt(jt(t)).deep_link_id:null,r=zt(jt(e)).deep_link_id;return(r?zt(jt(r)).link:null)||r||n||t||e}(e);try{return new wa(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka{constructor(){this.providerId=ka.PROVIDER_ID}static credential(e,t){return ma._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=wa.parseLink(t);return ir(n,"argument-error"),ma._fromEmailAndCode(e,n.code,n.tenantId)}}ka.PROVIDER_ID="password",ka.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ka.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends _a{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea extends Sa{constructor(){super("facebook.com")}static credential(e){return va._fromParams({providerId:Ea.PROVIDER_ID,signInMethod:Ea.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ea.credentialFromTaggedObject(e)}static credentialFromError(e){return Ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ea.credential(e.oauthAccessToken)}catch(e){return null}}}Ea.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ea.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return va._fromParams({providerId:Ia.PROVIDER_ID,signInMethod:Ia.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ia.credentialFromTaggedObject(e)}static credentialFromError(e){return Ia.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ia.credential(t,n)}catch(e){return null}}}Ia.GOOGLE_SIGN_IN_METHOD="google.com",Ia.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ca extends Sa{constructor(){super("github.com")}static credential(e){return va._fromParams({providerId:Ca.PROVIDER_ID,signInMethod:Ca.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ca.credentialFromTaggedObject(e)}static credentialFromError(e){return Ca.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ca.credential(e.oauthAccessToken)}catch(e){return null}}}Ca.GITHUB_SIGN_IN_METHOD="github.com",Ca.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta extends Sa{constructor(){super("twitter.com")}static credential(e,t){return va._fromParams({providerId:Ta.PROVIDER_ID,signInMethod:Ta.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ta.credentialFromTaggedObject(e)}static credentialFromError(e){return Ta.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ta.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xa(e,t){return wr(e,"POST","/v1/accounts:signUp",vr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ta.TWITTER_SIGN_IN_METHOD="twitter.com",Ta.PROVIDER_ID="twitter.com";class Pa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const a=await Lr._fromIdTokenResponse(e,n,r),i=Na(n);return new Pa({user:a,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Na(n);return new Pa({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Na(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra extends Nt{constructor(e,t,n,r){var a;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:null!==(a=e.tenantId)&&void 0!==a?a:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ra(e,t,n,r)}}function Oa(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ra._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(e,t,n=!1){const r=await Tr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pa._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Aa(e,t,n=!1){const{auth:r}=e,a="reauthenticate";try{const i=await Tr(e,Oa(r,a,t,e),n);ir(i.idToken,r,"internal-error");const o=Cr(i.idToken);ir(o,r,"internal-error");const{sub:s}=o;return ir(e.uid===s,r,"user-mismatch"),Pa._forOperation(e,a,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&tr(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(e,t,n=!1){const r="signIn",a=await Oa(e,r,t),i=await Pa._fromIdTokenResponse(e,r,a);return n||await e._updateCurrentUser(i.user),i}async function Ma(e,t){return Da(sa(e),t)}async function za(e,t,n){var r;const a=sa(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=a._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await aa(a,i,"signUpPassword");o=xa(a,e)}else o=xa(a,i).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await aa(a,i,"signUpPassword");return xa(a,e)}return Promise.reject(e)}));const s=await o.catch((e=>Promise.reject(e))),l=await Pa._fromIdTokenResponse(a,"signIn",s);return await a._updateCurrentUser(l.user),l}function ja(e,t,n){return Ma(Ht(e),ka.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;const Ua="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ua,"1"),this.storage.removeItem(Ua),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Fa{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ct();return Hr(e)||Gr(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Jr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);Qr()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ba.type="LOCAL";const Ha=Ba;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Fa{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Va.type="SESSION";const $a=Va;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Wa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:a}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,a))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ka(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wa.receivers=[];class qa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,i;return new Promise(((o,s)=>{const l=Ka("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),a=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),o(t.data.response);break;default:clearTimeout(u),clearTimeout(a),s(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qa(){return void 0!==Ga().WorkerGlobalScope&&"function"==typeof Ga().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ja="firebaseLocalStorageDb",Ya="firebaseLocalStorage",Xa="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ei(e,t){return e.transaction([Ya],t?"readwrite":"readonly").objectStore(Ya)}function ti(){const e=indexedDB.open(Ja,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ya,{keyPath:Xa})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ya)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ja);return new Za(e).toPromise()}(),t(await ti()))}))}))}async function ni(e,t,n){const r=ei(e,!0).put({[Xa]:t,value:n});return new Za(r).toPromise()}function ri(e,t){const n=ei(e,!0).delete(t);return new Za(n).toPromise()}class ai{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ti()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wa._getInstance(Qa()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new qa(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await ni(e,Ua,"1"),await ri(e,Ua),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ni(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ei(e,!1).get(t),r=await new Za(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ri(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ei(e,!1).getAll();return new Za(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:a}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ai.type="LOCAL";const ii=ai;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
na("rcb"),new fr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi="recaptcha";async function si(e,t,n){var r;const a=await n.verify();try{let i;if(ir("string"==typeof a,e,"argument-error"),ir(n.type===oi,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){ir("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return yr(e,"POST","/v2/accounts/mfaEnrollment:start",vr(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:a}});return n.phoneSessionInfo.sessionInfo}{ir("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;ir(n,e,"missing-multi-factor-info");const o=await function(e,t){return yr(e,"POST","/v2/accounts/mfaSignIn:start",vr(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return yr(e,"POST","/v1/accounts:sendVerificationCode",vr(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:a});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(e){this.providerId=li.PROVIDER_ID,this.auth=sa(e)}verifyPhoneNumber(e,t){return si(this.auth,e,Ht(t))}static credential(e,t){return ba._fromVerification(e,t)}static credentialFromResult(e){const t=e;return li.credentialFromTaggedObject(t)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ba._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ui(e,t){return t?Dr(t):(ir(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li.PROVIDER_ID="phone",li.PHONE_SIGN_IN_METHOD="phone";class ci extends fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ga(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ga(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ga(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function di(e){return Da(e.auth,new ci(e),e.bypassAuthState)}function fi(e){const{auth:t,user:n}=e;return ir(n,t,"internal-error"),Aa(n,new ci(e),e.bypassAuthState)}async function hi(e){const{auth:t,user:n}=e;return ir(n,t,"internal-error"),La(n,new ci(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,n,r,a=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:a,error:i,type:o}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return di;case"linkViaPopup":case"linkViaRedirect":return hi;case"reauthViaPopup":case"reauthViaRedirect":return fi;default:tr(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new fr(2e3,1e4);class gi extends pi{constructor(e,t,n,r,a){super(e,t,r,a),this.provider=n,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ir(e,this.auth,"internal-error"),e}async onExecution(){sr(1===this.filter.length,"Popup operations only handle one event");const e=Ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(nr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,mi.get())};e()}}gi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vi="pendingRedirect",yi=new Map;class bi extends pi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=_i(t),r=ki(e);if(!await r._isAvailable())return!1;const a="true"===await r._get(n);return await r._remove(n),a}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function wi(e,t){yi.set(e._key(),t)}function ki(e){return Dr(e._redirectPersistence)}function _i(e){return jr(vi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(e,t,n=!1){const r=sa(e),a=ui(r,t),i=new bi(r,a,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ei{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ci(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ci(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ii(e))}saveEventToCache(e){this.cachedEventUids.add(Ii(e)),this.lastProcessedEventTime=Date.now()}}function Ii(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ci({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ti=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xi=/^https?/;async function Pi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return yr(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ni(e))return}catch(e){}tr(e,"unauthorized-domain")}function Ni(e){const t=lr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===r}if(!xi.test(n))return!1;if(Ti.test(e))return r===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new fr(3e4,6e4);function Oi(){const e=Ga().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Li=null;function Ai(e){return Li=Li||function(e){return new Promise(((t,n)=>{var r,a,i;function o(){Oi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Oi(),n(nr(e,"network-request-failed"))},timeout:Ri.get()})}if(null===(a=null===(r=Ga().gapi)||void 0===r?void 0:r.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Ga().gapi)||void 0===i?void 0:i.load)){const t=na("iframefcb");return Ga()[t]=()=>{gapi.load?o():n(nr(e,"network-request-failed"))},ta(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Li=null,e}))}(e),Li}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new fr(5e3,15e3),Mi="__/auth/iframe",zi="emulator/auth/iframe",ji={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ui=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fi(e){const t=e.config;ir(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?hr(t,zi):`https://${e.config.authDomain}/${Mi}`,r={apiKey:t.apiKey,appName:e.name,v:Ln},a=Ui.get(e.config.apiHost);a&&(r.eid=a);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mt(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Hi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Vi(e,t,n,r=500,a=600){const i=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Bi),{width:r.toString(),height:a.toString(),top:i,left:o}),u=Ct().toLowerCase();n&&(s=Vr(u)?"_blank":n),Br(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ct()){var t;return Gr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new Hi(null);const d=window.open(t||"",s,c);ir(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Hi(d)}const $i="__/auth/handler",Wi="emulator/auth/handler",Ki=encodeURIComponent("fac");async function qi(e,t,n,r,a,i){ir(e.config.authDomain,e,"auth-domain-config-required"),ir(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ln,eventId:a};if(t instanceof _a){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Lt(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Sa){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];const l=await e._getAppCheckToken(),u=l?`#${Ki}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?hr(e,Wi):`https://${e.authDomain}/${$i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Mt(s).slice(1)}${u}`}const Gi="webStorageSupport";const Qi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$a,this._completeRedirectFn=Si,this._overrideRedirectResult=wi}async _openPopup(e,t,n,r){var a;sr(null===(a=this.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");return Vi(e,await qi(e,t,n,lr(),r),Ka())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Ga().location.href=e}(await qi(e,t,n,lr(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(sr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ai(e),n=Ga().gapi;return ir(n,e,"internal-error"),t.open({where:document.body,url:Fi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ji,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const a=nr(e,"network-request-failed"),i=Ga().setTimeout((()=>{r(a)}),Di.get());function o(){Ga().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(a)}))}))))}(e),n=new Ei(e);return t.register("authEvent",(t=>{ir(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gi,{type:Gi},(n=>{var r;const a=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Gi];void 0!==a&&t(!!a),tr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jr()||Hr()||Gr()}};var Ji="@firebase/auth",Yi="0.23.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ir(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zi=Et("authIdTokenMaxAge")||300;let eo=null;var to;to="Browser",Pn(new Vt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;ir(i&&!i.includes(":"),"invalid-api-key",{appName:n.name}),ir(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const s={apiKey:i,authDomain:o,clientPlatform:to,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yr(to)},l=new oa(n,r,a,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Pn(new Vt("auth-internal",(e=>(e=>new Xi(e))(sa(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Ji,Yi,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(to)),Mn(Ji,Yi,"esm2017");u=i("2TgRs");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Mn("firebase","9.21.0","app");const no=function(e=Dn()){const t=Nn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Nn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(At(n.getOptions(),null!=t?t:{}))return e;tr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Qi,persistence:[ii,Ha,$a]}),r=Et("authTokenSyncURL");if(r){const e=(a=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Zi)return;const r=null==t?void 0:t.token;eo!==r&&(eo=r,await fetch(a,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Ht(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Ht(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var a;const i=_t("auth");return i&&ua(n,`http://${i}`),n}(An({apiKey:"AIzaSyDWySSDrg9HNHnNMoVkC8w72Uwvz71Tw-Q",authDomain:"products-e8e7d.firebaseapp.com",databaseURL:"https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app",projectId:"products-e8e7d",storageBucket:"products-e8e7d.appspot.com",messagingSenderId:"717987455455",appId:"1:717987455455:web:dab8a245da8ddce154646a"}));var ro=()=>{const[e,t]=(0,u.useState)(null);(0,u.useEffect)((()=>{const e=(n=e=>{t(e||null)},Ht(no).onAuthStateChanged(n,r,a));var n,r,a;return()=>{e()}}),[]);return(0,s.jsx)("div",{children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:`Signed In as ${e.email}`}),(0,s.jsx)("button",{onClick:()=>{var e;(e=no,Ht(e).signOut()).then((()=>{console.log("sign out successful")})).catch((e=>console.log(e)))},children:"Logga ut"})]}):(0,s.jsx)("p",{})})};function ao({children:e}){const[t,n]=(0,u.useState)([]),[r,a]=(0,u.useState)(0);(0,u.useEffect)((()=>{(async()=>{const e=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"),t=await e.json();if(t){const e=Object.entries(t).map((([e,t])=>({id:e,...t})));n(e)}})()}),[]),(0,u.useEffect)((()=>{const e=t.reduce(((e,t)=>e+parseInt(t.amount)),0);a(e)}),[t]);const[i,o]=(0,u.useState)(!1),l=[{path:"/myaccount",name:"Mitt konto",icon:(0,s.jsx)(y,{})},{path:"/productpage",name:"Produkter",icon:(0,s.jsx)(b,{})},{path:"/cart",name:`Kassa (${r})`,icon:(0,s.jsx)(_,{})},{path:"/login",name:"Logga in",icon:(0,s.jsx)(k,{})},{path:"/createaccount",name:"Skapa konto",icon:(0,s.jsx)(y,{})}];return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{style:{width:i?"200px":"50px"},className:"sidebar",children:[(0,s.jsxs)("div",{className:"top-section",children:[(0,s.jsx)("h1",{style:{display:i?"block":"none"},className:"logo",children:(0,s.jsx)(S,{})}),(0,s.jsx)("p",{style:{display:i?"block":"none"},className:"header",children:(0,s.jsx)(ro,{})}),(0,s.jsx)("div",{style:{marginLeft:i?"50px":"0px"},className:"bars",children:(0,s.jsx)(w,{onClick:()=>o(!i)})})]}),l.map(((e,t)=>(0,s.jsxs)(Ye,{to:e.path,className:"link",activeClassName:"active",children:[(0,s.jsx)("div",{className:"icon",children:e.icon}),(0,s.jsx)("div",{className:"link-text",children:e.name})]},t)))]}),(0,s.jsx)("main",{children:e})]})}u=i("2TgRs");function io(){const[e,t]=(0,u.useState)(""),[n,r]=(0,u.useState)(""),[a,i]=(0,u.useState)(""),[o,l]=(0,u.useState)("");return(0,s.jsx)("div",{className:"my-account-box",children:(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),za(no,e,n).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},children:[(0,s.jsx)("input",{type:"text",name:"name",placeholder:"Namn",value:a,onChange:e=>i(e.target.value)}),(0,s.jsx)("input",{type:"email",name:"email",placeholder:"E-mail",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("input",{type:"password",name:"password",placeholder:"Lösenord",value:n,onChange:e=>r(e.target.value)}),(0,s.jsx)("input",{type:"text",name:"address",placeholder:"Adress",value:o,onChange:e=>l(e.target.value)}),(0,s.jsx)("input",{type:"submit",value:"Skapa konto"})]})})}u=i("2TgRs");function oo(){const[e,t]=(0,u.useState)(""),[n,r]=(0,u.useState)("");return(0,s.jsx)("div",{className:"my-account-box",children:(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),ja(no,e,n).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},children:[(0,s.jsx)("input",{type:"text",name:"email",placeholder:"E-mail",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("input",{type:"password",name:"password",placeholder:"Lösenord",value:n,onChange:e=>r(e.target.value)}),(0,s.jsx)("input",{type:"submit",value:"Logga in"})]})})}function so({id:e,name:t,img:n,price:r,stock:a,handleAddToBasket:i}){return console.log("produkt id",e),(0,s.jsxs)("div",{className:"productDisplay",children:[(0,s.jsx)("h1",{children:t}),(0,s.jsx)("img",{src:n,alt:""}),(0,s.jsxs)("h2",{children:["Pris: ",r]}),a>0?(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Antal kvar: ",a]}),(0,s.jsx)("button",{onClick:i,children:"Lägg i kassan"})]}):(0,s.jsx)("p",{children:"Tyvärr slut i lager"})]})}u=i("2TgRs");async function lo(e,t,n,r,a){const i=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"),o=await i.json(),s=o?o[`product${a}`]:null,l=`https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart/product${a}.json`;if(s){const i={img:e,name:t,price:n,amount:s.amount+r,id:a},o={method:"PUT",body:JSON.stringify(i),headers:{"Content-type":"application/json; charset=UTF-8"}},u=await fetch(l,o),c=await u.json();console.log(c)}else{const r={img:e,name:t,price:n,amount:1,id:a},i={method:"PUT",body:JSON.stringify(r),headers:{"Content-type":"application/json; charset=UTF-8"}},o=await fetch(l,i),s=await o.json();console.log(s)}}function uo(){const[e,t]=(0,u.useState)([]);async function n(e,t,n,r,a,i){await lo(e,t,n,r,a),location.reload()}return(0,u.useEffect)((()=>{(async()=>{const e=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/Products.json"),n=await e.json(),r=Object.entries(n).map((([e,t])=>({id:e,...t})));t(r)})()}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"header",children:"Not pirated movies"}),(0,s.jsx)("div",{className:"product-container",children:e.map((e=>(0,s.jsx)(so,{id:e.id,name:e.name,img:e.img,price:e.price,stock:e.stock,handleAddToBasket:()=>{e.stock>0&&n(e.img,e.name,e.price,1,e.id)},disabled:e.stock<=0},e.id)))})]})}u=i("2TgRs");function co(e){return(0,c.GenIcon)({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#FF8A65",points:"24,21.3 12.7,10 26,1.7 38.3,10"}},{tag:"polygon",attr:{fill:"#FFAB91",points:"24,21.3 12.7,10 17,4.7 38.3,10"}},{tag:"path",attr:{fill:"#B39DDB",d:"M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"}},{tag:"path",attr:{fill:"#7E57C2",d:"M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"}}]})(e)}function fo({id:e,img:t,name:n,price:r,stock:a,amount:i}){return(0,s.jsxs)("div",{className:"cart-Display",children:[(0,s.jsx)("img",{src:t,alt:""}),(0,s.jsx)("h2",{children:n}),(0,s.jsx)("p",{children:r}),(0,s.jsx)("p",{children:a}),(0,s.jsx)("p",{children:i})]})}u=i("2TgRs");async function ho(e,t,n,r,a){const i={img:e,name:t,price:n,stock:r,amount:a},o={method:"DELETE",body:JSON.stringify(i),headers:{"Content-type":"application/json; charset=UTF-8"}},s=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart/.json",o);await s.json()}function po(){const[e,t]=(0,u.useState)([]);(0,u.useEffect)((()=>{(async()=>{const e=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"),n=await e.json();if(n){const e=Object.entries(n).map((([e,t])=>({id:e,...t})));t(e)}})()}),[]);const n=e.reduce(((e,t)=>e+parseInt(t.price)*(t.amount||1)),0);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"header",children:"Kassa"}),(0,s.jsxs)("div",{className:"cart-border",children:[e.map((e=>(0,s.jsx)(fo,{id:e.id,name:e.name,img:e.img,price:e.price+" kr",amount:"antal: "+e.amount},e.id))),(0,s.jsxs)("div",{className:"checkout",children:[(0,s.jsx)("h1",{children:"Checkout"}),(0,s.jsxs)("h2",{children:["Totalt pris: ",n," kr"]}),(0,s.jsx)("p",{children:"Förnamn"}),(0,s.jsx)("p",{children:"Efternamn"}),(0,s.jsx)("p",{children:"Adress"}),(0,s.jsx)("button",{onClick:()=>e.map((e=>async function(e,n,r,a,i,o){const s=`https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/Products/product${e}.json`,l=await fetch(s),u=await l.json();if(u){const e=o||1,t=u.stock-e;if(t<0)return void alert(`Det finns inte tillräckligt med ${u.name} i lager för att slutföra köpet`);await fetch(s,{method:"PATCH",body:JSON.stringify({stock:t}),headers:{"Content-type":"application/json"}})}await ho(n,r,a,i,o),t([]),alert("Ditt köp har gått igenom"),location.reload()}(e.id,e.img,e.name,e.price,e.stock,e.amount))),className:"",children:"Genomför köp"}),(0,s.jsx)("button",{onClick:()=>async function(e,n,r,a,i){await ho(e,n,r,a,i),alert("Dina produkter har tagits bort från kassan, gå gärna tillbaka och se om du hittar någon annan vara!"),t([]),location.reload()}((0,s.jsx)(fo,{})),className:"trash",children:(0,s.jsx)(co,{})})]})]})]})}function mo(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"mitt konto"}),(0,s.jsxs)("h2",{children:["Välkommen ",(0,s.jsx)(ro,{})]}),(0,s.jsx)("div",{children:(0,s.jsx)("h1",{children:"Mina köp:"})})]})}i("2TgRs");o(document.querySelector("#root")).render((0,s.jsx)((function(){return(0,s.jsx)(qe,{children:(0,s.jsxs)(ao,{children:[(0,s.jsxs)(je,{children:[(0,s.jsx)(Me,{path:"/createaccount",element:(0,s.jsx)(io,{})}),(0,s.jsx)(Me,{path:"/myaccount",element:(0,s.jsx)(mo,{})}),(0,s.jsx)(Me,{path:"/login",element:(0,s.jsx)(oo,{})})]}),(0,s.jsxs)(je,{children:[(0,s.jsx)(Me,{path:"/productpage",element:(0,s.jsx)(uo,{})}),(0,s.jsx)(Me,{path:"/cart",element:(0,s.jsx)(po,{})})]})]})})}),{}));
//# sourceMappingURL=index.986eb04f.js.map
