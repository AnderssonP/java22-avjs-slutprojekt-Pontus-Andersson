!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire9b8f;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire9b8f=a),a.register("aiCu8",(function(t,n){
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o;e(t.exports,"Fragment",(function(){return r}),(function(e){return r=e})),e(t.exports,"jsx",(function(){return i}),(function(e){return i=e})),e(t.exports,"jsxs",(function(){return o}),(function(e){return o=e}));var s=a("bcSyl"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var r,i={},a=null,o=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!f.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:a,ref:o,props:i,_owner:d.current}}r=u,i=h,o=h})),a.register("bcSyl",(function(e,t){"use strict";e.exports=a("6Qkcx")})),a.register("6Qkcx",(function(t,n){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,k,_,S,E,I,C,T,x,P,N,R,O,L,A,D,M,z;e(t.exports,"Children",(function(){return r}),(function(e){return r=e})),e(t.exports,"Component",(function(){return i}),(function(e){return i=e})),e(t.exports,"Fragment",(function(){return a}),(function(e){return a=e})),e(t.exports,"Profiler",(function(){return o}),(function(e){return o=e})),e(t.exports,"PureComponent",(function(){return s}),(function(e){return s=e})),e(t.exports,"StrictMode",(function(){return l}),(function(e){return l=e})),e(t.exports,"Suspense",(function(){return u}),(function(e){return u=e})),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return c}),(function(e){return c=e})),e(t.exports,"cloneElement",(function(){return d}),(function(e){return d=e})),e(t.exports,"createContext",(function(){return f}),(function(e){return f=e})),e(t.exports,"createElement",(function(){return h}),(function(e){return h=e})),e(t.exports,"createFactory",(function(){return p}),(function(e){return p=e})),e(t.exports,"createRef",(function(){return m}),(function(e){return m=e})),e(t.exports,"forwardRef",(function(){return g}),(function(e){return g=e})),e(t.exports,"isValidElement",(function(){return v}),(function(e){return v=e})),e(t.exports,"lazy",(function(){return y}),(function(e){return y=e})),e(t.exports,"memo",(function(){return b}),(function(e){return b=e})),e(t.exports,"startTransition",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_act",(function(){return k}),(function(e){return k=e})),e(t.exports,"useCallback",(function(){return _}),(function(e){return _=e})),e(t.exports,"useContext",(function(){return S}),(function(e){return S=e})),e(t.exports,"useDebugValue",(function(){return E}),(function(e){return E=e})),e(t.exports,"useDeferredValue",(function(){return I}),(function(e){return I=e})),e(t.exports,"useEffect",(function(){return C}),(function(e){return C=e})),e(t.exports,"useId",(function(){return T}),(function(e){return T=e})),e(t.exports,"useImperativeHandle",(function(){return x}),(function(e){return x=e})),e(t.exports,"useInsertionEffect",(function(){return P}),(function(e){return P=e})),e(t.exports,"useLayoutEffect",(function(){return N}),(function(e){return N=e})),e(t.exports,"useMemo",(function(){return R}),(function(e){return R=e})),e(t.exports,"useReducer",(function(){return O}),(function(e){return O=e})),e(t.exports,"useRef",(function(){return L}),(function(e){return L=e})),e(t.exports,"useState",(function(){return A}),(function(e){return A=e})),e(t.exports,"useSyncExternalStore",(function(){return D}),(function(e){return D=e})),e(t.exports,"useTransition",(function(){return M}),(function(e){return M=e})),e(t.exports,"version",(function(){return z}),(function(e){return z=e}));var j=Symbol.for("react.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),$=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function Z(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,ae={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function se(e,t,n){var r,i={},a=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)ie.call(t,r)&&!oe.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:j,type:e,key:a,ref:o,props:i,_owner:ae.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function de(e,t,n,r,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var o=!1;if(null===e)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case j:case U:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ce(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),de(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:j,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ue,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var s=0;s<e.length;s++){var l=r+ce(a=e[s],s);o+=de(a,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)o+=de(a=a.value,t,n,l=r+ce(a,s++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fe(e,t,n){if(null==e)return e;var r=[],i=0;return de(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function he(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:fe,forEach:function(e,t,n){fe(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return fe(e,(function(){t++})),t},toArray:function(e){return fe(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,a=F,o=H,s=te,l=B,u=K,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:ae},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=ae.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ie.call(t,l)&&!oe.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:j,type:e.type,key:i,ref:a,props:r,_owner:o}},f=function(e){return(e={$$typeof:$,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:V,_context:e},e.Consumer=e},h=se,p=function(e){var t=se.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:W,render:e}},v=le,y=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:he}},b=function(e,t){return{$$typeof:q,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},k=function(){throw Error("act(...) is not supported in production builds of React.")},_=function(e,t){return pe.current.useCallback(e,t)},S=function(e){return pe.current.useContext(e)},E=function(){},I=function(e){return pe.current.useDeferredValue(e)},C=function(e,t){return pe.current.useEffect(e,t)},T=function(){return pe.current.useId()},x=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},P=function(e,t){return pe.current.useInsertionEffect(e,t)},N=function(e,t){return pe.current.useLayoutEffect(e,t)},R=function(e,t){return pe.current.useMemo(e,t)},O=function(e,t,n){return pe.current.useReducer(e,t,n)},L=function(e){return pe.current.useRef(e)},A=function(e){return pe.current.useState(e)},D=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},z="18.2.0"})),a.register("1wA08",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,s,l,u,c,d,f,h,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return r}),(function(e){return r=e})),e(t.exports,"createPortal",(function(){return i}),(function(e){return i=e})),e(t.exports,"createRoot",(function(){return o}),(function(e){return o=e})),e(t.exports,"findDOMNode",(function(){return s}),(function(e){return s=e})),e(t.exports,"flushSync",(function(){return l}),(function(e){return l=e})),e(t.exports,"hydrate",(function(){return u}),(function(e){return u=e})),e(t.exports,"hydrateRoot",(function(){return c}),(function(e){return c=e})),e(t.exports,"render",(function(){return d}),(function(e){return d=e})),e(t.exports,"unmountComponentAtNode",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_batchedUpdates",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_renderSubtreeIntoContainer",(function(){return p}),(function(e){return p=e})),e(t.exports,"version",(function(){return m}),(function(e){return m=e}));var g=a("bcSyl"),v=a("eLT1s");function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function k(e,t){_(e,t),_(e+"Capture",t)}function _(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),E=Object.prototype.hasOwnProperty,I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},T={};function x(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){P[e]=new x(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];P[t]=new x(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){P[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){P[e]=new x(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){P[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){P[e]=new x(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){P[e]=new x(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){P[e]=new x(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){P[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)}));var N=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}function O(e,t,n,r){var i=P.hasOwnProperty(t)?P[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!E.call(T,e)||!E.call(C,e)&&(I.test(e)?T[e]=!0:(C[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(N,R);P[t]=new x(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(N,R);P[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(N,R);P[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){P[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)})),P.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){P[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)}));var L=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),D=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),F=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),W=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var q=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=q&&e[q]||e["@@iterator"])?e:null}var Q,J=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{X=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case D:return"Portal";case j:return"Profiler";case z:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case F:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case B:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ae(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function se(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&O(e,"checked",t,!1)}function de(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?he(e,t.type,n):t.hasOwnProperty("defaultValue")&&he(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function fe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function he(e,t,n){"number"===t&&se(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(y(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ve(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(y(92));if(pe(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ye(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var _e,Se,Ee=(Se=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((_e=_e||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_e.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Se(e,t)}))}:Se);function Ie(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];function xe(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ce.hasOwnProperty(e)&&Ce[e]?(""+t).trim():t+"px"}function Pe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=xe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Ce).forEach((function(e){Te.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ce[t]=Ce[e]}))}));var Ne=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Ne[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(y(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(y(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(y(62))}}function Oe(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function Ae(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var De=null,Me=null,ze=null;function je(e){if(e=Oi(e)){if("function"!=typeof De)throw Error(y(280));var t=e.stateNode;t&&(t=Ai(t),De(e.stateNode,e.type,t))}}function Ue(e){Me?ze?ze.push(e):ze=[e]:Me=e}function Fe(){if(Me){var e=Me,t=ze;if(ze=Me=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Be(e,t){return e(t)}function He(){}var Ve=!1;function $e(e,t,n){if(Ve)return e(t,n);Ve=!0;try{return Be(e,t,n)}finally{Ve=!1,(null!==Me||null!==ze)&&(He(),Fe())}}function We(e,t){var n=e.stateNode;if(null===n)return null;var r=Ai(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(y(231,t,typeof n));return n}var Ke=!1;if(S)try{var qe={};Object.defineProperty(qe,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",qe,qe),window.removeEventListener("test",qe,qe)}catch(Se){Ke=!1}function Ge(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Je=null,Ye=!1,Xe=null,Ze={onError:function(e){Qe=!0,Je=e}};function et(e,t,n,r,i,a,o,s,l){Qe=!1,Je=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(y(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return rt(i),e;if(a===r)return rt(i),t;a=a.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(3!==n.tag)throw Error(y(188));return n.stateNode.current===n?e:t}(e))?at(e):null}function at(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=at(e);if(null!==t)return t;e=e.sibling}return null}var ot=v.unstable_scheduleCallback,st=v.unstable_cancelCallback,lt=v.unstable_shouldYield,ut=v.unstable_requestPaint,ct=v.unstable_now,dt=v.unstable_getCurrentPriorityLevel,ft=v.unstable_ImmediatePriority,ht=v.unstable_UserBlockingPriority,pt=v.unstable_NormalPriority,mt=v.unstable_LowPriority,gt=v.unstable_IdlePriority,vt=null,yt=null;var bt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(wt(e)/kt|0)|0},wt=Math.log,kt=Math.LN2;var _t=64,St=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function It(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=Et(s):0!==(a&=o)&&(r=Et(a))}else 0!==(o=n&~i)?r=Et(o):0!==a&&(r=Et(a));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!=(4194240&a)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function Ct(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Tt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function xt(){var e=_t;return 0==(4194240&(_t<<=1))&&(_t=64),e}function Pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ot=0;function Lt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var At,Dt,Mt,zt,jt,Ut=!1,Ft=[],Bt=null,Ht=null,Vt=null,$t=new Map,Wt=new Map,Kt=[],qt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":$t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(t.pointerId)}}function Qt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Oi(t))&&Dt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Jt(e){var t=Ri(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void jt(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Oi(n))&&Dt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Le=r,n.target.dispatchEvent(r),Le=null,t.shift()}return!0}function Xt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){Ut=!1,null!==Bt&&Yt(Bt)&&(Bt=null),null!==Ht&&Yt(Ht)&&(Ht=null),null!==Vt&&Yt(Vt)&&(Vt=null),$t.forEach(Xt),Wt.forEach(Xt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Ut||(Ut=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<Ft.length){en(Ft[0],e);for(var n=1;n<Ft.length;n++){var r=Ft[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Bt&&en(Bt,e),null!==Ht&&en(Ht,e),null!==Vt&&en(Vt,e),$t.forEach(t),Wt.forEach(t),n=0;n<Kt.length;n++)(r=Kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&null===(n=Kt[0]).blockedOn;)Jt(n),null===n.blockedOn&&Kt.shift()}var nn=L.ReactCurrentBatchConfig,rn=!0;function an(e,t,n,r){var i=Ot,a=nn.transition;nn.transition=null;try{Ot=1,sn(e,t,n,r)}finally{Ot=i,nn.transition=a}}function on(e,t,n,r){var i=Ot,a=nn.transition;nn.transition=null;try{Ot=4,sn(e,t,n,r)}finally{Ot=i,nn.transition=a}}function sn(e,t,n,r){if(rn){var i=un(e,t,n,r);if(null===i)ri(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Bt=Qt(Bt,e,t,n,r,i),!0;case"dragenter":return Ht=Qt(Ht,e,t,n,r,i),!0;case"mouseover":return Vt=Qt(Vt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return $t.set(a,Qt($t.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Wt.set(a,Qt(Wt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<qt.indexOf(e)){for(;null!==i;){var a=Oi(i);if(null!==a&&At(a),null===(a=un(e,t,n,r))&&ri(e,t,r,ln,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Ri(e=Ae(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case ft:return 1;case ht:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var dn=null,fn=null,hn=null;function pn(){if(hn)return hn;var e,t,n=fn,r=n.length,i="value"in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return hn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:vn,this.isPropagationStopped=vn,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,kn,_n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=yn(_n),En=J({},_n,{view:0,detail:0}),In=yn(En),Cn=J({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&"mousemove"===e.type?(bn=e.screenX-kn.screenX,wn=e.screenY-kn.screenY):wn=bn=0,kn=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Tn=yn(Cn),xn=yn(J({},Cn,{dataTransfer:0})),Pn=yn(J({},En,{relatedTarget:0})),Nn=yn(J({},_n,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=J({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),On=yn(Rn),Ln=yn(J({},_n,{data:0})),An={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function jn(){return zn}var Un=J({},En,{key:function(e){if(e.key){var t=An[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Fn=yn(Un),Bn=yn(J({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=yn(J({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Vn=yn(J({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=J({},Cn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wn=yn($n),Kn=[9,13,27,32],qn=S&&"CompositionEvent"in window,Gn=null;S&&"documentMode"in document&&(Gn=document.documentMode);var Qn=S&&"TextEvent"in window&&!Gn,Jn=S&&(!qn||Gn&&8<Gn&&11>=Gn),Yn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Kn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){Ue(r),0<(t=ai(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,or=null;function sr(e){Yr(e,0)}function lr(e){if(oe(Li(e)))return e}function ur(e,t){if("change"===e)return t}var cr=!1;if(S){var dr;if(S){var fr="oninput"in document;if(!fr){var hr=document.createElement("div");hr.setAttribute("oninput","return;"),fr="function"==typeof hr.oninput}dr=fr}else dr=!1;cr=dr&&(!document.documentMode||9<document.documentMode)}function pr(){ar&&(ar.detachEvent("onpropertychange",mr),or=ar=null)}function mr(e){if("value"===e.propertyName&&lr(or)){var t=[];ir(t,or,e,Ae(e)),$e(sr,t)}}function gr(e,t,n){"focusin"===e?(pr(),or=n,(ar=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(or)}function yr(e,t){if("click"===e)return lr(t)}function br(e,t){if("input"===e||"change"===e)return lr(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function kr(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!E.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function _r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n,r=_r(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_r(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Ir(){for(var e=window,t=se();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=se((e=t.contentWindow).document)}return t}function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Tr(e){var t=Ir(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Er(n.ownerDocument.documentElement,n)){if(null!==r&&Cr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Sr(n,a);var o=Sr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xr=S&&"documentMode"in document&&11>=document.documentMode,Pr=null,Nr=null,Rr=null,Or=!1;function Lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Or||null==Pr||Pr!==se(r)||("selectionStart"in(r=Pr)&&Cr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Rr&&kr(Rr,r)||(Rr=r,0<(r=ai(Nr,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Mr={},zr={};function jr(e){if(Mr[e])return Mr[e];if(!Dr[e])return e;var t,n=Dr[e];for(t in n)if(n.hasOwnProperty(t)&&t in zr)return Mr[e]=n[t];return e}S&&(zr=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);var Ur=jr("animationend"),Fr=jr("animationiteration"),Br=jr("animationstart"),Hr=jr("transitionend"),Vr=new Map,$r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(e,t){Vr.set(e,t),k(t,[e])}for(var Kr=0;Kr<$r.length;Kr++){var qr=$r[Kr];Wr(qr.toLowerCase(),"on"+(qr[0].toUpperCase()+qr.slice(1)))}Wr(Ur,"onAnimationEnd"),Wr(Fr,"onAnimationIteration"),Wr(Br,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(Hr,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Jr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,o,s,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(y(198));var u=Je;Qe=!1,Je=null,Ye||(Ye=!0,Xe=u)}}(r,t,void 0,e),e.currentTarget=null}function Yr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Jr(i,s,u),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Jr(i,s,u),a=l}}}if(Ye)throw e=Xe,Ye=!1,Xe=null,e}function Xr(e,t){var n=t[xi];void 0===n&&(n=t[xi]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(cn(t)){case 1:var i=an;break;case 4:i=on;break;default:i=sn}n=i.bind(null,t,n,e),i=void 0,!Ke||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var a=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=Ri(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}$e((function(){var r=a,i=Ae(n),o=[];e:{var s=Vr.get(e);if(void 0!==s){var l=Sn,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=Fn;break;case"focusin":u="focus",l=Pn;break;case"focusout":u="blur",l=Pn;break;case"beforeblur":case"afterblur":l=Pn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=xn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Hn;break;case Ur:case Fr:case Br:l=Nn;break;case Hr:l=Vn;break;case"scroll":l=In;break;case"wheel":l=Wn;break;case"copy":case"cut":case"paste":l=On;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Bn}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=We(p,f))&&c.push(ii(p,m,h)))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Le||!(u=n.relatedTarget||n.fromElement)||!Ri(u)&&!u[Ti])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ri(u):null)&&(u!==(d=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Tn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Bn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:Li(l),h=null==u?s:Li(u),(s=new c(m,p+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,Ri(i)===r&&((c=new c(f,p+"enter",u,n,i)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,p=0,h=c=l;h;h=oi(h))p++;for(h=0,m=f;m;m=oi(m))h++;for(;0<p-h;)c=oi(c),p--;for(;0<h-p;)f=oi(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=oi(c),f=oi(f)}c=null}else c=null;null!==l&&si(o,s,l,c,!1),null!==u&&null!==d&&si(o,d,u,c,!0)}if("select"===(l=(s=r?Li(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=ur;else if(rr(s))if(cr)g=br;else{g=vr;var v=gr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=yr);switch(g&&(g=g(e,r))?ir(o,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&he(s,"number",s.value)),v=r?Li(r):window,e){case"focusin":(rr(v)||"true"===v.contentEditable)&&(Pr=v,Nr=r,Rr=null);break;case"focusout":Rr=Nr=Pr=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Lr(o,n,i);break;case"selectionchange":if(xr)break;case"keydown":case"keyup":Lr(o,n,i)}var y;if(qn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Jn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(y=pn()):(fn="value"in(dn=i)?dn.value:dn.textContent,tr=!0)),0<(v=ai(r,b)).length&&(b=new Ln(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=er(n))&&(b.data=y))),(y=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!qn&&Zn(e,t)?(e=pn(),hn=fn=dn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ai(r,"onBeforeInput")).length&&(i=new Ln("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=y))}Yr(o,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=We(e,n))&&r.unshift(ii(e,a,i)),null!=(a=We(e,t))&&r.push(ii(e,a,i))),e=e.return}return r}function oi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function si(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=We(n,a))&&o.unshift(ii(n,l,s)):i||null!=(l=We(n,a))&&o.push(ii(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function ci(e){return("string"==typeof e?e:""+e).replace(li,"\n").replace(ui,"")}function di(e,t,n){if(t=ci(t),ci(e)!==t&&n)throw Error(y(425))}function fi(){}var hi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,vi="function"==typeof clearTimeout?clearTimeout:void 0,yi="function"==typeof Promise?Promise:void 0,bi="function"==typeof queueMicrotask?queueMicrotask:void 0!==yi?function(e){return yi.resolve(null).then(e).catch(wi)}:gi;function wi(e){setTimeout((function(){throw e}))}function ki(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function _i(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Si(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ei,Ci="__reactProps$"+Ei,Ti="__reactContainer$"+Ei,xi="__reactEvents$"+Ei,Pi="__reactListeners$"+Ei,Ni="__reactHandles$"+Ei;function Ri(e){var t=e[Ii];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ti]||n[Ii]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Si(e);null!==e;){if(n=e[Ii])return n;e=Si(e)}return t}n=(e=n).parentNode}return null}function Oi(e){return!(e=e[Ii]||e[Ti])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Li(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(y(33))}function Ai(e){return e[Ci]||null}var Di=[],Mi=-1;function zi(e){return{current:e}}function ji(e){0>Mi||(e.current=Di[Mi],Di[Mi]=null,Mi--)}function Ui(e,t){Mi++,Di[Mi]=e.current,e.current=t}var Fi={},Bi=zi(Fi),Hi=zi(!1),Vi=Fi;function $i(e,t){var n=e.type.contextTypes;if(!n)return Fi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Wi(e){return null!=(e=e.childContextTypes)}function Ki(){ji(Hi),ji(Bi)}function qi(e,t,n){if(Bi.current!==Fi)throw Error(y(168));Ui(Bi,t),Ui(Hi,n)}function Gi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(y(108,ne(e)||"Unknown",i));return J({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fi,Vi=Bi.current,Ui(Bi,e),Ui(Hi,Hi.current),!0}function Ji(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Gi(e,t,Vi),r.__reactInternalMemoizedMergedChildContext=e,ji(Hi),ji(Bi),Ui(Bi,e)):ji(Hi),Ui(Hi,n)}var Yi=null,Xi=!1,Zi=!1;function ea(e){null===Yi?Yi=[e]:Yi.push(e)}function ta(){if(!Zi&&null!==Yi){Zi=!0;var e=0,t=Ot;try{var n=Yi;for(Ot=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Yi=null,Xi=!1}catch(t){throw null!==Yi&&(Yi=Yi.slice(e+1)),ot(ft,ta),t}finally{Ot=t,Zi=!1}}return null}var na=[],ra=0,ia=null,aa=0,oa=[],sa=0,la=null,ua=1,ca="";function da(e,t){na[ra++]=aa,na[ra++]=ia,ia=e,aa=t}function fa(e,t,n){oa[sa++]=ua,oa[sa++]=ca,oa[sa++]=la,la=e;var r=ua;e=ca;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var a=32-bt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ua=1<<32-bt(t)+i|n<<i|r,ca=a+e}else ua=1<<a|n<<i|r,ca=e}function ha(e){null!==e.return&&(da(e,1),fa(e,1,0))}function pa(e){for(;e===ia;)ia=na[--ra],na[ra]=null,aa=na[--ra],na[ra]=null;for(;e===la;)la=oa[--sa],oa[sa]=null,ca=oa[--sa],oa[sa]=null,ua=oa[--sa],oa[sa]=null}var ma=null,ga=null,va=!1,ya=null;function ba(e,t){var n=Wu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function wa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ma=e,ga=_i(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ma=e,ga=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==la?{id:ua,overflow:ca}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Wu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ma=e,ga=null,!0);default:return!1}}function ka(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function _a(e){if(va){var t=ga;if(t){var n=t;if(!wa(e,t)){if(ka(e))throw Error(y(418));t=_i(n.nextSibling);var r=ma;t&&wa(e,t)?ba(r,n):(e.flags=-4097&e.flags|2,va=!1,ma=e)}}else{if(ka(e))throw Error(y(418));e.flags=-4097&e.flags|2,va=!1,ma=e}}}function Sa(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ma=e}function Ea(e){if(e!==ma)return!1;if(!va)return Sa(e),va=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=ga)){if(ka(e))throw Ia(),Error(y(418));for(;t;)ba(e,t),t=_i(t.nextSibling)}if(Sa(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ga=_i(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ga=null}}else ga=ma?_i(e.stateNode.nextSibling):null;return!0}function Ia(){for(var e=ga;e;)e=_i(e.nextSibling)}function Ca(){ga=ma=null,va=!1}function Ta(e){null===ya?ya=[e]:ya.push(e)}var xa=L.ReactCurrentBatchConfig;function Pa(e,t){if(e&&e.defaultProps){for(var n in t=J({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Na=zi(null),Ra=null,Oa=null,La=null;function Aa(){La=Oa=Ra=null}function Da(e){var t=Na.current;ji(Na),e._currentValue=t}function Ma(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function za(e,t){Ra=e,La=Oa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Ls=!0),e.firstContext=null)}function ja(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},null===Oa){if(null===Ra)throw Error(y(308));Oa=e,Ra.dependencies={lanes:0,firstContext:e}}else Oa=Oa.next=e;return t}var Ua=null;function Fa(e){null===Ua?Ua=[e]:Ua.push(e)}function Ba(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Fa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ha(e,r)}function Ha(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Va=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ka(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Hl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ha(e,n)}return null===(i=r.interleaved)?(t.next=t,Fa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ha(e,n)}function Ga(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ja(e,t,n,r){var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(f="function"==typeof(p=m.payload)?p.call(h,d,f):p))break e;d=J({},d,f);break e;case 2:Va=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Jl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(y(191,i));i.call(r)}}}var Xa=(new g.Component).refs;function Za(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:J({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),a=Ka(r,i);a.payload=t,null!=n&&(a.callback=n),null!==(t=qa(e,a,i))&&(gu(t,e,i,r),Ga(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),a=Ka(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=qa(e,a,i))&&(gu(t,e,i,r),Ga(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=mu(e),i=Ka(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=qa(e,i,r))&&(gu(t,e,r,n),Ga(t,e,r))}};function to(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!kr(n,r)||!kr(i,a))}function no(e,t,n){var r=!1,i=Fi,a=t.contextType;return"object"==typeof a&&null!==a?a=ja(a):(i=Wi(t)?Vi:Bi.current,a=(r=null!=(r=t.contextTypes))?$i(e,i):Fi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Xa,$a(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=ja(a):(a=Wi(t)?Vi:Bi.current,i.context=$i(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(Za(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Ja(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ao(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;t===Xa&&(t=i.refs={}),null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!=typeof e)throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function so(e){return(0,e._init)(e._payload)}function lo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=qu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Yu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var a=n.type;return a===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===W&&so(a)===t.type)?((r=i(t,n.props)).ref=ao(e,t,n),r.return=e,r):((r=Gu(n.type,n.key,n.props,null,e.mode,r)).ref=ao(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,a){return null===t||7!==t.tag?((t=Qu(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Yu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case A:return(n=Gu(t.type,t.key,t.props,null,e.mode,n)).ref=ao(e,null,t),n.return=e,n;case D:return(t=Xu(t,e.mode,n)).return=e,t;case W:return d(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Qu(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case A:return n.key===i?l(e,t,n,r):null;case D:return n.key===i?u(e,t,n,r):null;case W:return f(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:c(e,t,n,r,null);oo(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case A:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case D:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case W:return h(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}function p(i,o,s,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<s.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=f(i,p,s[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===s.length)return n(i,p),va&&da(i,m),u;if(null===p){for(;m<s.length;m++)null!==(p=d(i,s[m],l))&&(o=a(p,o,m),null===c?u=p:c.sibling=p,c=p);return va&&da(i,m),u}for(p=r(i,p);m<s.length;m++)null!==(g=h(p,i,m,s[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),va&&da(i,m),u}function m(i,o,s,l){var u=G(s);if("function"!=typeof u)throw Error(y(150));if(null==(s=u.call(s)))throw Error(y(151));for(var c=u=null,p=o,m=o=0,g=null,v=s.next();null!==p&&!v.done;m++,v=s.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=f(i,p,v.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),o=a(b,o,m),null===c?u=b:c.sibling=b,c=b,p=g}if(v.done)return n(i,p),va&&da(i,m),u;if(null===p){for(;!v.done;m++,v=s.next())null!==(v=d(i,v.value,l))&&(o=a(v,o,m),null===c?u=v:c.sibling=v,c=v);return va&&da(i,m),u}for(p=r(i,p);!v.done;m++,v=s.next())null!==(v=h(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(i,e)})),va&&da(i,m),u}return function e(r,a,s,l){if("object"==typeof s&&null!==s&&s.type===M&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case A:e:{for(var u=s.key,c=a;null!==c;){if(c.key===u){if((u=s.type)===M){if(7===c.tag){n(r,c.sibling),(a=i(c,s.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===W&&so(u)===c.type){n(r,c.sibling),(a=i(c,s.props)).ref=ao(r,c,s),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}s.type===M?((a=Qu(s.props.children,r.mode,l,s.key)).return=r,r=a):((l=Gu(s.type,s.key,s.props,null,r.mode,l)).ref=ao(r,a,s),l.return=r,r=l)}return o(r);case D:e:{for(c=s.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===s.containerInfo&&a.stateNode.implementation===s.implementation){n(r,a.sibling),(a=i(a,s.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Xu(s,r.mode,l)).return=r,r=a}return o(r);case W:return e(r,a,(c=s._init)(s._payload),l)}if(pe(s))return p(r,a,s,l);if(G(s))return m(r,a,s,l);oo(r,s)}return"string"==typeof s&&""!==s||"number"==typeof s?(s=""+s,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,s)).return=r,r=a):(n(r,a),(a=Yu(s,r.mode,l)).return=r,r=a),o(r)):n(r,a)}}var uo=lo(!0),co=lo(!1),fo={},ho=zi(fo),po=zi(fo),mo=zi(fo);function go(e){if(e===fo)throw Error(y(174));return e}function vo(e,t){switch(Ui(mo,t),Ui(po,e),Ui(ho,fo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ke(null,"");break;default:t=ke(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ji(ho),Ui(ho,t)}function yo(){ji(ho),ji(po),ji(mo)}function bo(e){go(mo.current);var t=go(ho.current),n=ke(t,e.type);t!==n&&(Ui(po,e),Ui(ho,n))}function wo(e){po.current===e&&(ji(ho),ji(po))}var ko=zi(0);function _o(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var So=[];function Eo(){for(var e=0;e<So.length;e++)So[e]._workInProgressVersionPrimary=null;So.length=0}var Io=L.ReactCurrentDispatcher,Co=L.ReactCurrentBatchConfig,To=0,xo=null,Po=null,No=null,Ro=!1,Oo=!1,Lo=0,Ao=0;function Do(){throw Error(y(321))}function Mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function zo(e,t,n,r,i,a){if(To=a,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=null===e||null===e.memoizedState?ws:ks,e=n(r,i),Oo){a=0;do{if(Oo=!1,Lo=0,25<=a)throw Error(y(301));a+=1,No=Po=null,t.updateQueue=null,Io.current=_s,e=n(r,i)}while(Oo)}if(Io.current=bs,t=null!==Po&&null!==Po.next,To=0,No=Po=xo=null,Ro=!1,t)throw Error(y(300));return e}function jo(){var e=0!==Lo;return Lo=0,e}function Uo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===No?xo.memoizedState=No=e:No=No.next=e,No}function Fo(){if(null===Po){var e=xo.alternate;e=null!==e?e.memoizedState:null}else e=Po.next;var t=null===No?xo.memoizedState:No.next;if(null!==t)No=t,Po=e;else{if(null===e)throw Error(y(310));e={memoizedState:(Po=e).memoizedState,baseState:Po.baseState,baseQueue:Po.baseQueue,queue:Po.queue,next:null},null===No?xo.memoizedState=No=e:No=No.next=e}return No}function Bo(e,t){return"function"==typeof t?t(e):t}function Ho(e){var t=Fo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=Po,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((To&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=d,o=r):l=l.next=d,xo.lanes|=c,Jl|=c}u=u.next}while(null!==u&&u!==a);null===l?o=r:l.next=s,wr(r,t.memoizedState)||(Ls=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,xo.lanes|=a,Jl|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=Fo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{a=e(a,o.action),o=o.next}while(o!==i);wr(a,t.memoizedState)||(Ls=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $o(){}function Wo(e,t){var n=xo,r=Fo(),i=t(),a=!wr(r.memoizedState,i);if(a&&(r.memoizedState=i,Ls=!0),r=r.queue,rs(Go.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==No&&1&No.memoizedState.tag){if(n.flags|=2048,Xo(9,qo.bind(null,n,r,i,t),void 0,null),null===Vl)throw Error(y(349));0!=(30&To)||Ko(n,t,i)}return i}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xo.updateQueue)?(t={lastEffect:null,stores:null},xo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function qo(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&Jo(e)}function Go(e,t,n){return n((function(){Qo(t)&&Jo(e)}))}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Jo(e){var t=Ha(e,1);null!==t&&gu(t,e,1,-1)}function Yo(e){var t=Uo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=ms.bind(null,xo,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=xo.updateQueue)?(t={lastEffect:null,stores:null},xo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return Fo().memoizedState}function es(e,t,n,r){var i=Uo();xo.flags|=e,i.memoizedState=Xo(1|t,n,void 0,void 0===r?null:r)}function ts(e,t,n,r){var i=Fo();r=void 0===r?null:r;var a=void 0;if(null!==Po){var o=Po.memoizedState;if(a=o.destroy,null!==r&&Mo(r,o.deps))return void(i.memoizedState=Xo(t,n,a,r))}xo.flags|=e,i.memoizedState=Xo(1|t,n,a,r)}function ns(e,t){return es(8390656,8,e,t)}function rs(e,t){return ts(2048,8,e,t)}function is(e,t){return ts(4,2,e,t)}function as(e,t){return ts(4,4,e,t)}function os(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ss(e,t,n){return n=null!=n?n.concat([e]):null,ts(4,4,os.bind(null,t,e),n)}function ls(){}function us(e,t){var n=Fo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cs(e,t){var n=Fo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ds(e,t,n){return 0==(21&To)?(e.baseState&&(e.baseState=!1,Ls=!0),e.memoizedState=n):(wr(n,t)||(n=xt(),xo.lanes|=n,Jl|=n,e.baseState=!0),t)}function fs(e,t){var n=Ot;Ot=0!==n&&4>n?n:4,e(!0);var r=Co.transition;Co.transition={};try{e(!1),t()}finally{Ot=n,Co.transition=r}}function hs(){return Fo().memoizedState}function ps(e,t,n){var r=mu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gs(e))vs(t,n);else if(null!==(n=Ba(e,t,n,r))){gu(n,e,r,pu()),ys(n,t,r)}}function ms(e,t,n){var r=mu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gs(e))vs(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Fa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=Ba(e,t,i,r))&&(gu(n,e,r,i=pu()),ys(n,t,r))}}function gs(e){var t=e.alternate;return e===xo||null!==t&&t===xo}function vs(e,t){Oo=Ro=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ys(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}var bs={readContext:ja,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useInsertionEffect:Do,useLayoutEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useMutableSource:Do,useSyncExternalStore:Do,useId:Do,unstable_isNewReconciler:!1},ws={readContext:ja,useCallback:function(e,t){return Uo().memoizedState=[e,void 0===t?null:t],e},useContext:ja,useEffect:ns,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,es(4194308,4,os.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){return es(4,2,e,t)},useMemo:function(e,t){var n=Uo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Uo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ps.bind(null,xo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Uo().memoizedState=e},useState:Yo,useDebugValue:ls,useDeferredValue:function(e){return Uo().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=fs.bind(null,e[1]),Uo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xo,i=Uo();if(va){if(void 0===n)throw Error(y(407));n=n()}else{if(n=t(),null===Vl)throw Error(y(349));0!=(30&To)||Ko(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ns(Go.bind(null,r,a,e),[e]),r.flags|=2048,Xo(9,qo.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Uo(),t=Vl.identifierPrefix;if(va){var n=ca;t=":"+t+"R"+(n=(ua&~(1<<32-bt(ua)-1)).toString(32)+n),0<(n=Lo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Ao++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ks={readContext:ja,useCallback:us,useContext:ja,useEffect:rs,useImperativeHandle:ss,useInsertionEffect:is,useLayoutEffect:as,useMemo:cs,useReducer:Ho,useRef:Zo,useState:function(){return Ho(Bo)},useDebugValue:ls,useDeferredValue:function(e){return ds(Fo(),Po.memoizedState,e)},useTransition:function(){return[Ho(Bo)[0],Fo().memoizedState]},useMutableSource:$o,useSyncExternalStore:Wo,useId:hs,unstable_isNewReconciler:!1},_s={readContext:ja,useCallback:us,useContext:ja,useEffect:rs,useImperativeHandle:ss,useInsertionEffect:is,useLayoutEffect:as,useMemo:cs,useReducer:Vo,useRef:Zo,useState:function(){return Vo(Bo)},useDebugValue:ls,useDeferredValue:function(e){var t=Fo();return null===Po?t.memoizedState=e:ds(t,Po.memoizedState,e)},useTransition:function(){return[Vo(Bo)[0],Fo().memoizedState]},useMutableSource:$o,useSyncExternalStore:Wo,useId:hs,unstable_isNewReconciler:!1};function Ss(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Is(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var Cs="function"==typeof WeakMap?WeakMap:Map;function Ts(e,t,n){(n=Ka(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){iu||(iu=!0,au=r),Is(0,t)},n}function xs(e,t,n){(n=Ka(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Is(0,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){Is(0,t),"function"!=typeof r&&(null===ou?ou=new Set([this]):ou.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Ps(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Cs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Uu.bind(null,e,t,n),t.then(e,e))}function Ns(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Rs(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ka(-1,1)).tag=2,qa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Os=L.ReactCurrentOwner,Ls=!1;function As(e,t,n,r){t.child=null===e?co(t,null,n,r):uo(t,e.child,n,r)}function Ds(e,t,n,r,i){n=n.render;var a=t.ref;return za(t,i),r=zo(e,t,n,r,a,i),n=jo(),null===e||Ls?(va&&n&&ha(t),t.flags|=1,As(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Ms(e,t,n,r,i){if(null===e){var a=n.type;return"function"!=typeof a||Ku(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Gu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,zs(e,t,a,r,i))}if(a=e.child,0==(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:kr)(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=qu(a,r)).ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(Ls=!1,t.pendingProps=r=a,0==(e.lanes&i))return t.lanes=e.lanes,il(e,t,i);0!=(131072&e.flags)&&(Ls=!0)}}return Fs(e,t,n,r,i)}function js(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ui(ql,Kl),Kl|=n;else{if(0==(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ui(ql,Kl),Kl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ui(ql,Kl),Kl|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ui(ql,Kl),Kl|=r;return As(e,t,i,n),t.child}function Us(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,r,i){var a=Wi(n)?Vi:Bi.current;return a=$i(t,a),za(t,i),n=zo(e,t,n,r,a,i),r=jo(),null===e||Ls?(va&&r&&ha(t),t.flags|=1,As(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Bs(e,t,n,r,i){if(Wi(n)){var a=!0;Qi(t)}else a=!1;if(za(t,i),null===t.stateNode)rl(e,t),no(t,n,r),io(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=ja(u):u=$i(t,u=Wi(n)?Vi:Bi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ro(t,o,r,u),Va=!1;var f=t.memoizedState;o.state=f,Ja(t,r,o,i),l=t.memoizedState,s!==r||f!==l||Hi.current||Va?("function"==typeof c&&(Za(t,n,c,r),l=t.memoizedState),(s=Va||to(t,n,s,r,f,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Wa(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Pa(t.type,s),o.props=u,d=t.pendingProps,f=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=ja(l):l=$i(t,l=Wi(n)?Vi:Bi.current);var h=n.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ro(t,o,r,l),Va=!1,f=t.memoizedState,o.state=f,Ja(t,r,o,i);var p=t.memoizedState;s!==d||f!==p||Hi.current||Va?("function"==typeof h&&(Za(t,n,h,r),p=t.memoizedState),(u=Va||to(t,n,u,r,f,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,a,i)}function Hs(e,t,n,r,i,a){Us(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&Ji(t,n,!1),il(e,t,a);r=t.stateNode,Os.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=uo(t,e.child,null,a),t.child=uo(t,null,s,a)):As(e,t,s,a),t.memoizedState=r.state,i&&Ji(t,n,!0),t.child}function Vs(e){var t=e.stateNode;t.pendingContext?qi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&qi(0,t.context,!1),vo(e,t.containerInfo)}function $s(e,t,n,r,i){return Ca(),Ta(i),t.flags|=256,As(e,t,n,r),t.child}var Ws,Ks,qs,Gs,Qs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r,i=t.pendingProps,a=ko.current,o=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ui(ko,1&a),null===e)return _a(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=Ju(s,i,0,null),e=Qu(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Js(n),t.memoizedState=Qs,e):Xs(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,o){if(n)return 256&t.flags?(t.flags&=-257,Zs(e,t,o,r=Es(Error(y(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ju({mode:"visible",children:r.children},i,0,null),(a=Qu(a,i,o,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!=(1&t.mode)&&uo(t,e.child,null,o),t.child.memoizedState=Js(o),t.memoizedState=Qs,a);if(0==(1&t.mode))return Zs(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Zs(e,t,o,r=Es(a=Error(y(419)),r,void 0))}if(s=0!=(o&e.childLanes),Ls||s){if(null!==(r=Vl)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Ha(e,i),gu(r,e,i,-1))}return Pu(),Zs(e,t,o,r=Es(Error(y(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Bu.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ga=_i(i.nextSibling),ma=t,va=!0,ya=null,null!==e&&(oa[sa++]=ua,oa[sa++]=ca,oa[sa++]=la,ua=e.id,ca=e.overflow,la=t),t=Xs(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(o){o=i.fallback,s=t.mode,r=(a=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=qu(a,l)).subtreeFlags=14680064&a.subtreeFlags,null!==r?o=qu(r,o):(o=Qu(o,s,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=null===(s=e.child.memoizedState)?Js(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Qs,i}return e=(o=e.child).sibling,i=qu(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Xs(e,t){return(t=Ju({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Zs(e,t,n,r){return null!==r&&Ta(r),uo(t,e.child,null,n),(e=Xs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function el(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ma(e.return,t,n)}function tl(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(As(e,t,r.children,n),0!=(2&(r=ko.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&el(e,n,t);else if(19===e.tag)el(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ui(ko,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===_o(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===_o(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,a);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Jl|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(y(153));if(null!==t.child){for(n=qu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=qu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function al(e,t){if(!va)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ol(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sl(e,t,n){var r=t.pendingProps;switch(pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ol(t),null;case 1:case 17:return Wi(t.type)&&Ki(),ol(t),null;case 3:return r=t.stateNode,yo(),ji(Hi),ji(Bi),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ea(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==ya&&(wu(ya),ya=null))),Ks(e,t),ol(t),null;case 5:wo(t);var i=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)qs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(y(166));return ol(t),null}if(e=go(ho.current),Ea(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ii]=t,r[Ci]=a,e=0!=(1&t.mode),n){case"dialog":Xr("cancel",r),Xr("close",r);break;case"iframe":case"object":case"embed":Xr("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)Xr(Gr[i],r);break;case"source":Xr("error",r);break;case"img":case"image":case"link":Xr("error",r),Xr("load",r);break;case"details":Xr("toggle",r);break;case"input":ue(r,a),Xr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Xr("invalid",r);break;case"textarea":ve(r,a),Xr("invalid",r)}for(var o in Re(n,a),i=null,a)if(a.hasOwnProperty(o)){var s=a[o];"children"===o?"string"==typeof s?r.textContent!==s&&(!0!==a.suppressHydrationWarning&&di(r.textContent,s,e),i=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==a.suppressHydrationWarning&&di(r.textContent,s,e),i=["children",""+s]):w.hasOwnProperty(o)&&null!=s&&"onScroll"===o&&Xr("scroll",r)}switch(n){case"input":ae(r),fe(r,a,!0);break;case"textarea":ae(r),be(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=fi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ii]=t,e[Ci]=r,Ws(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oe(n,r),n){case"dialog":Xr("cancel",e),Xr("close",e),i=r;break;case"iframe":case"object":case"embed":Xr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)Xr(Gr[i],e);i=r;break;case"source":Xr("error",e),i=r;break;case"img":case"image":case"link":Xr("error",e),Xr("load",e),i=r;break;case"details":Xr("toggle",e),i=r;break;case"input":ue(e,r),i=le(e,r),Xr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),Xr("invalid",e);break;case"textarea":ve(e,r),i=ge(e,r),Xr("invalid",e)}for(a in Re(n,i),s=i)if(s.hasOwnProperty(a)){var l=s[a];"style"===a?Pe(e,l):"dangerouslySetInnerHTML"===a?null!=(l=l?l.__html:void 0)&&Ee(e,l):"children"===a?"string"==typeof l?("textarea"!==n||""!==l)&&Ie(e,l):"number"==typeof l&&Ie(e,""+l):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(w.hasOwnProperty(a)?null!=l&&"onScroll"===a&&Xr("scroll",e):null!=l&&O(e,a,l,o))}switch(n){case"input":ae(e),fe(e,r,!1);break;case"textarea":ae(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?me(e,!!r.multiple,a,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ol(t),null;case 6:if(e&&null!=t.stateNode)Gs(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(y(166));if(n=go(mo.current),go(ho.current),Ea(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ii]=t,(a=r.nodeValue!==n)&&null!==(e=ma))switch(e.tag){case 3:di(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&di(r.nodeValue,n,0!=(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ii]=t,t.stateNode=r}return ol(t),null;case 13:if(ji(ko),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(va&&null!==ga&&0!=(1&t.mode)&&0==(128&t.flags))Ia(),Ca(),t.flags|=98560,a=!1;else if(a=Ea(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(y(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(y(317));a[Ii]=t}else Ca(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ol(t),a=!1}else null!==ya&&(wu(ya),ya=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ko.current)?0===Gl&&(Gl=3):Pu())),null!==t.updateQueue&&(t.flags|=4),ol(t),null);case 4:return yo(),Ks(e,t),null===e&&ti(t.stateNode.containerInfo),ol(t),null;case 10:return Da(t.type._context),ol(t),null;case 19:if(ji(ko),null===(a=t.memoizedState))return ol(t),null;if(r=0!=(128&t.flags),null===(o=a.rendering))if(r)al(a,!1);else{if(0!==Gl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=_o(e))){for(t.flags|=128,al(a,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(o=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ui(ko,1&ko.current|2),t.child}e=e.sibling}null!==a.tail&&ct()>nu&&(t.flags|=128,r=!0,al(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=_o(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),al(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!va)return ol(t),null}else 2*ct()-a.renderingStartTime>nu&&1073741824!==n&&(t.flags|=128,r=!0,al(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=a.last)?n.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ct(),t.sibling=null,n=ko.current,Ui(ko,r?1&n|2:1&n),t):(ol(t),null);case 22:case 23:return Iu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Kl)&&(ol(t),6&t.subtreeFlags&&(t.flags|=8192)):ol(t),null;case 24:case 25:return null}throw Error(y(156,t.tag))}function ll(e,t){switch(pa(t),t.tag){case 1:return Wi(t.type)&&Ki(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return yo(),ji(Hi),ji(Bi),Eo(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return wo(t),null;case 13:if(ji(ko),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(y(340));Ca()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ji(ko),null;case 4:return yo(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Iu(),null;default:return null}}Ws=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ks=function(){},qs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(ho.current);var a,o=null;switch(n){case"input":i=le(e,i),r=le(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=ge(e,i),r=ge(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=fi)}for(u in Re(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Xr("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Gs=function(e,t,n,r){n!==r&&(t.flags|=4)};var ul=!1,cl=!1,dl="function"==typeof WeakSet?WeakSet:Set,fl=null;function hl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){ju(e,t,n)}else n.current=null}function pl(e,t,n){try{n()}catch(n){ju(e,t,n)}}var ml=!1;function gl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&pl(t,n,a)}i=i.next}while(i!==r)}}function vl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function bl(e){var t=e.alternate;null!==t&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ii],delete t[Ci],delete t[xi],delete t[Pi],delete t[Ni])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wl(e){return 5===e.tag||3===e.tag||4===e.tag}function kl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||wl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function _l(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=fi));else if(4!==r&&null!==(e=e.child))for(_l(e,t,n),e=e.sibling;null!==e;)_l(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Sl(e,t,n),e=e.sibling;null!==e;)Sl(e,t,n),e=e.sibling}var El=null,Il=!1;function Cl(e,t,n){for(n=n.child;null!==n;)Tl(e,t,n),n=n.sibling}function Tl(e,t,n){if(yt&&"function"==typeof yt.onCommitFiberUnmount)try{yt.onCommitFiberUnmount(vt,n)}catch(e){}switch(n.tag){case 5:cl||hl(n,t);case 6:var r=El,i=Il;El=null,Cl(e,t,n),Il=i,null!==(El=r)&&(Il?(e=El,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):El.removeChild(n.stateNode));break;case 18:null!==El&&(Il?(e=El,n=n.stateNode,8===e.nodeType?ki(e.parentNode,n):1===e.nodeType&&ki(e,n),tn(e)):ki(El,n.stateNode));break;case 4:r=El,i=Il,El=n.stateNode.containerInfo,Il=!0,Cl(e,t,n),El=r,Il=i;break;case 0:case 11:case 14:case 15:if(!cl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!=(2&a)||0!=(4&a))&&pl(n,t,o),i=i.next}while(i!==r)}Cl(e,t,n);break;case 1:if(!cl&&(hl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){ju(n,t,e)}Cl(e,t,n);break;case 21:Cl(e,t,n);break;case 22:1&n.mode?(cl=(r=cl)||null!==n.memoizedState,Cl(e,t,n),cl=r):Cl(e,t,n);break;default:Cl(e,t,n)}}function xl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new dl),t.forEach((function(t){var r=Hu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Pl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;null!==s;){switch(s.tag){case 5:El=s.stateNode,Il=!1;break e;case 3:case 4:El=s.stateNode.containerInfo,Il=!0;break e}s=s.return}if(null===El)throw Error(y(160));Tl(a,o,i),El=null,Il=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){ju(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Nl(t,e),t=t.sibling}function Nl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pl(t,e),Rl(e),4&r){try{gl(3,e,e.return),vl(3,e)}catch(t){ju(e,e.return,t)}try{gl(5,e,e.return)}catch(t){ju(e,e.return,t)}}break;case 1:Pl(t,e),Rl(e),512&r&&null!==n&&hl(n,n.return);break;case 5:if(Pl(t,e),Rl(e),512&r&&null!==n&&hl(n,n.return),32&e.flags){var i=e.stateNode;try{Ie(i,"")}catch(t){ju(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,o=null!==n?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===a.type&&null!=a.name&&ce(i,a),Oe(s,o);var u=Oe(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];"style"===c?Pe(i,d):"dangerouslySetInnerHTML"===c?Ee(i,d):"children"===c?Ie(i,d):O(i,c,d,u)}switch(s){case"input":de(i,a);break;case"textarea":ye(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?me(i,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?me(i,!!a.multiple,a.defaultValue,!0):me(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ci]=a}catch(t){ju(e,e.return,t)}}break;case 6:if(Pl(t,e),Rl(e),4&r){if(null===e.stateNode)throw Error(y(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(t){ju(e,e.return,t)}}break;case 3:if(Pl(t,e),Rl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){ju(e,e.return,t)}break;case 4:default:Pl(t,e),Rl(e);break;case 13:Pl(t,e),Rl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(tu=ct())),4&r&&xl(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(cl=(u=cl)||c,Pl(t,e),cl=u):Pl(t,e),Rl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(fl=e,c=e.child;null!==c;){for(d=fl=c;null!==fl;){switch(h=(f=fl).child,f.tag){case 0:case 11:case 14:case 15:gl(4,f,f.return);break;case 1:hl(f,f.return);var p=f.stateNode;if("function"==typeof p.componentWillUnmount){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){ju(r,n,e)}}break;case 5:hl(f,f.return);break;case 22:if(null!==f.memoizedState){Dl(d);continue}}null!==h?(h.return=f,fl=h):Dl(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?"function"==typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=d.stateNode,o=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=xe("display",o))}catch(t){ju(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){ju(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pl(t,e),Rl(e),4&r&&xl(e);case 21:}}function Rl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(wl(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Ie(i,""),r.flags&=-33),Sl(e,kl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;_l(e,kl(e),a);break;default:throw Error(y(161))}}catch(t){ju(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e,t,n){fl=e,Ll(e,t,n)}function Ll(e,t,n){for(var r=0!=(1&e.mode);null!==fl;){var i=fl,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||ul;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||cl;s=ul;var u=cl;if(ul=o,(cl=l)&&!u)for(fl=i;null!==fl;)l=(o=fl).child,22===o.tag&&null!==o.memoizedState?Ml(i):null!==l?(l.return=o,fl=l):Ml(i);for(;null!==a;)fl=a,Ll(a,t,n),a=a.sibling;fl=i,ul=s,cl=u}Al(e)}else 0!=(8772&i.subtreeFlags)&&null!==a?(a.return=i,fl=a):Al(e)}}function Al(e){for(;null!==fl;){var t=fl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:cl||vl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!cl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pa(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ya(t,a,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ya(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tn(d)}}}break;default:throw Error(y(163))}cl||512&t.flags&&yl(t)}catch(e){ju(t,t.return,e)}}if(t===e){fl=null;break}if(null!==(n=t.sibling)){n.return=t.return,fl=n;break}fl=t.return}}function Dl(e){for(;null!==fl;){var t=fl;if(t===e){fl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,fl=n;break}fl=t.return}}function Ml(e){for(;null!==fl;){var t=fl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(e){ju(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){ju(t,i,e)}}var a=t.return;try{yl(t)}catch(e){ju(t,a,e)}break;case 5:var o=t.return;try{yl(t)}catch(e){ju(t,o,e)}}}catch(e){ju(t,t.return,e)}if(t===e){fl=null;break}var s=t.sibling;if(null!==s){s.return=t.return,fl=s;break}fl=t.return}}var zl,jl=Math.ceil,Ul=L.ReactCurrentDispatcher,Fl=L.ReactCurrentOwner,Bl=L.ReactCurrentBatchConfig,Hl=0,Vl=null,$l=null,Wl=0,Kl=0,ql=zi(0),Gl=0,Ql=null,Jl=0,Yl=0,Xl=0,Zl=null,eu=null,tu=0,nu=1/0,ru=null,iu=!1,au=null,ou=null,su=!1,lu=null,uu=0,cu=0,du=null,fu=-1,hu=0;function pu(){return 0!=(6&Hl)?ct():-1!==fu?fu:fu=ct()}function mu(e){return 0==(1&e.mode)?1:0!=(2&Hl)&&0!==Wl?Wl&-Wl:null!==xa.transition?(0===hu&&(hu=xt()),hu):0!==(e=Ot)?e:e=void 0===(e=window.event)?16:cn(e.type)}function gu(e,t,n,r){if(50<cu)throw cu=0,du=null,Error(y(185));Nt(e,n,r),0!=(2&Hl)&&e===Vl||(e===Vl&&(0==(2&Hl)&&(Yl|=n),4===Gl&&ku(e,Wl)),vu(e,r),1===n&&0===Hl&&0==(1&t.mode)&&(nu=ct()+500,Xi&&ta()))}function vu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-bt(a),s=1<<o,l=i[o];-1===l?0!=(s&n)&&0==(s&r)||(i[o]=Ct(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=It(e,e===Vl?Wl:0);if(0===r)null!==n&&st(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&st(n),1===t)0===e.tag?function(e){Xi=!0,ea(e)}(_u.bind(null,e)):ea(_u.bind(null,e)),bi((function(){0==(6&Hl)&&ta()})),n=null;else{switch(Lt(r)){case 1:n=ft;break;case 4:n=ht;break;case 16:default:n=pt;break;case 536870912:n=gt}n=Vu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(fu=-1,hu=0,0!=(6&Hl))throw Error(y(327));var n=e.callbackNode;if(Mu()&&e.callbackNode!==n)return null;var r=It(e,e===Vl?Wl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Nu(e,r);else{t=r;var i=Hl;Hl|=2;var a=xu();for(Vl===e&&Wl===t||(ru=null,nu=ct()+500,Cu(e,t));;)try{Ou();break}catch(t){Tu(e,t)}Aa(),Ul.current=a,Hl=i,null!==$l?t=0:(Vl=null,Wl=0,t=Gl)}if(0!==t){if(2===t&&(0!==(i=Tt(e))&&(r=i,t=bu(e,i))),1===t)throw n=Ql,Cu(e,0),ku(e,r),vu(e,ct()),n;if(6===t)ku(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Nu(e,r))&&(0!==(a=Tt(e))&&(r=a,t=bu(e,a))),1===t))throw n=Ql,Cu(e,0),ku(e,r),vu(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:case 5:Du(e,eu,ru);break;case 3:if(ku(e,r),(130023424&r)===r&&10<(t=tu+500-ct())){if(0!==It(e,0))break;if(((i=e.suspendedLanes)&r)!==r){pu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Du.bind(null,e,eu,ru),t);break}Du(e,eu,ru);break;case 4:if(ku(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);a=1<<o,(o=t[o])>i&&(i=o),r&=~a}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=gi(Du.bind(null,e,eu,ru),r);break}Du(e,eu,ru);break;default:throw Error(y(329))}}}return vu(e,ct()),e.callbackNode===n?yu.bind(null,e):null}function bu(e,t){var n=Zl;return e.current.memoizedState.isDehydrated&&(Cu(e,t).flags|=256),2!==(e=Nu(e,t))&&(t=eu,eu=n,null!==t&&wu(t)),e}function wu(e){null===eu?eu=e:eu.push.apply(eu,e)}function ku(e,t){for(t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if(0!=(6&Hl))throw Error(y(327));Mu();var t=It(e,0);if(0==(1&t))return vu(e,ct()),null;var n=Nu(e,t);if(0!==e.tag&&2===n){var r=Tt(e);0!==r&&(t=r,n=bu(e,r))}if(1===n)throw n=Ql,Cu(e,0),ku(e,t),vu(e,ct()),n;if(6===n)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Du(e,eu,ru),vu(e,ct()),null}function Su(e,t){var n=Hl;Hl|=1;try{return e(t)}finally{0===(Hl=n)&&(nu=ct()+500,Xi&&ta())}}function Eu(e){null!==lu&&0===lu.tag&&0==(6&Hl)&&Mu();var t=Hl;Hl|=1;var n=Bl.transition,r=Ot;try{if(Bl.transition=null,Ot=1,e)return e()}finally{Ot=r,Bl.transition=n,0==(6&(Hl=t))&&ta()}}function Iu(){Kl=ql.current,ji(ql)}function Cu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,vi(n)),null!==$l)for(n=$l.return;null!==n;){var r=n;switch(pa(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ki();break;case 3:yo(),ji(Hi),ji(Bi),Eo();break;case 5:wo(r);break;case 4:yo();break;case 13:case 19:ji(ko);break;case 10:Da(r.type._context);break;case 22:case 23:Iu()}n=n.return}if(Vl=e,$l=e=qu(e.current,null),Wl=Kl=t,Gl=0,Ql=null,Xl=Yl=Jl=0,eu=Zl=null,null!==Ua){for(t=0;t<Ua.length;t++)if(null!==(r=(n=Ua[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Ua=null}return e}function Tu(e,t){for(;;){var n=$l;try{if(Aa(),Io.current=bs,Ro){for(var r=xo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Ro=!1}if(To=0,No=Po=xo=null,Oo=!1,Lo=0,Fl.current=null,null===n||null===n.return){Gl=1,Ql=t,$l=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Wl,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ns(o);if(null!==h){h.flags&=-257,Rs(h,o,s,0,t),1&h.mode&&Ps(a,u,t),l=u;var p=(t=h).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){Ps(a,u,t),Pu();break e}l=Error(y(426))}else if(va&&1&s.mode){var g=Ns(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Rs(g,o,s,0,t),Ta(Ss(l,s));break e}}a=l=Ss(l,s),4!==Gl&&(Gl=2),null===Zl?Zl=[a]:Zl.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Qa(a,Ts(0,l,t));break e;case 1:s=l;var v=a.type,b=a.stateNode;if(0==(128&a.flags)&&("function"==typeof v.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===ou||!ou.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Qa(a,xs(a,s,t));break e}}a=a.return}while(null!==a)}Au(n)}catch(e){t=e,$l===n&&null!==n&&($l=n=n.return);continue}break}}function xu(){var e=Ul.current;return Ul.current=bs,null===e?bs:e}function Pu(){0!==Gl&&3!==Gl&&2!==Gl||(Gl=4),null===Vl||0==(268435455&Jl)&&0==(268435455&Yl)||ku(Vl,Wl)}function Nu(e,t){var n=Hl;Hl|=2;var r=xu();for(Vl===e&&Wl===t||(ru=null,Cu(e,t));;)try{Ru();break}catch(t){Tu(e,t)}if(Aa(),Hl=n,Ul.current=r,null!==$l)throw Error(y(261));return Vl=null,Wl=0,Gl}function Ru(){for(;null!==$l;)Lu($l)}function Ou(){for(;null!==$l&&!lt();)Lu($l)}function Lu(e){var t=zl(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,null===t?Au(e):$l=t,Fl.current=null}function Au(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=sl(n,t,Kl)))return void($l=n)}else{if(null!==(n=ll(n,t)))return n.flags&=32767,void($l=n);if(null===e)return Gl=6,void($l=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void($l=t);$l=t=e}while(null!==t);0===Gl&&(Gl=5)}function Du(e,t,n){var r=Ot,i=Bl.transition;try{Bl.transition=null,Ot=1,function(e,t,n,r){do{Mu()}while(null!==lu);if(0!=(6&Hl))throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,a),e===Vl&&($l=Vl=null,Wl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||su||(su=!0,Vu(pt,(function(){return Mu(),null}))),a=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||a){a=Bl.transition,Bl.transition=null;var o=Ot;Ot=1;var s=Hl;Hl|=4,Fl.current=null,function(e,t){if(hi=rn,Cr(e=Ir())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||0!==i&&3!==d.nodeType||(s=o+i),d!==a||0!==r&&3!==d.nodeType||(l=o+r),3===d.nodeType&&(o+=d.nodeValue.length),null!==(h=d.firstChild);)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=o),f===a&&++c===r&&(l=o),null!==(h=d.nextSibling))break;f=(d=f).parentNode}d=h}n=-1===s||-1===l?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,fl=t;null!==fl;)if(e=(t=fl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,fl=e;else for(;null!==fl;){t=fl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:Pa(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(y(163))}}catch(e){ju(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,fl=e;break}fl=t.return}p=ml,ml=!1}(e,n),Nl(n,e),Tr(pi),rn=!!hi,pi=hi=null,e.current=n,Ol(n,e,i),ut(),Hl=s,Ot=o,Bl.transition=a}else e.current=n;if(su&&(su=!1,lu=e,uu=i),a=e.pendingLanes,0===a&&(ou=null),function(e){if(yt&&"function"==typeof yt.onCommitFiberRoot)try{yt.onCommitFiberRoot(vt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),vu(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,e=au,au=null,e;0!=(1&uu)&&0!==e.tag&&Mu(),a=e.pendingLanes,0!=(1&a)?e===du?cu++:(cu=0,du=e):cu=0,ta()}(e,t,n,r)}finally{Bl.transition=i,Ot=r}return null}function Mu(){if(null!==lu){var e=Lt(uu),t=Bl.transition,n=Ot;try{if(Bl.transition=null,Ot=16>e?16:e,null===lu)var r=!1;else{if(e=lu,lu=null,uu=0,0!=(6&Hl))throw Error(y(331));var i=Hl;for(Hl|=4,fl=e.current;null!==fl;){var a=fl,o=a.child;if(0!=(16&fl.flags)){var s=a.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(fl=u;null!==fl;){var c=fl;switch(c.tag){case 0:case 11:case 15:gl(8,c,a)}var d=c.child;if(null!==d)d.return=c,fl=d;else for(;null!==fl;){var f=(c=fl).sibling,h=c.return;if(bl(c),c===u){fl=null;break}if(null!==f){f.return=h,fl=f;break}fl=h}}}var p=a.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}fl=a}}if(0!=(2064&a.subtreeFlags)&&null!==o)o.return=a,fl=o;else e:for(;null!==fl;){if(0!=(2048&(a=fl).flags))switch(a.tag){case 0:case 11:case 15:gl(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,fl=v;break e}fl=a.return}}var b=e.current;for(fl=b;null!==fl;){var w=(o=fl).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,fl=w;else e:for(o=b;null!==fl;){if(0!=(2048&(s=fl).flags))try{switch(s.tag){case 0:case 11:case 15:vl(9,s)}}catch(e){ju(s,s.return,e)}if(s===o){fl=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,fl=k;break e}fl=s.return}}if(Hl=i,ta(),yt&&"function"==typeof yt.onPostCommitFiberRoot)try{yt.onPostCommitFiberRoot(vt,e)}catch(e){}r=!0}return r}finally{Ot=n,Bl.transition=t}}return!1}function zu(e,t,n){e=qa(e,t=Ts(0,t=Ss(n,t),1),1),t=pu(),null!==e&&(Nt(e,1,t),vu(e,t))}function ju(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===ou||!ou.has(r))){t=qa(t,e=xs(t,e=Ss(n,e),1),1),e=pu(),null!==t&&(Nt(t,1,e),vu(t,e));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=pu(),e.pingedLanes|=e.suspendedLanes&n,Vl===e&&(Wl&n)===n&&(4===Gl||3===Gl&&(130023424&Wl)===Wl&&500>ct()-tu?Cu(e,0):Xl|=n),vu(e,t)}function Fu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=St,0==(130023424&(St<<=1))&&(St=4194304)));var n=pu();null!==(e=Ha(e,t))&&(Nt(e,t,n),vu(e,n))}function Bu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Fu(e,n)}function Hu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}null!==r&&r.delete(t),Fu(e,n)}function Vu(e,t){return ot(e,t)}function $u(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wu(e,t,n,r){return new $u(e,t,n,r)}function Ku(e){return!(!(e=e.prototype)||!e.isReactComponent)}function qu(e,t){var n=e.alternate;return null===n?((n=Wu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gu(e,t,n,r,i,a){var o=2;if(r=e,"function"==typeof e)Ku(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case M:return Qu(n.children,i,a,t);case z:o=8,i|=8;break;case j:return(e=Wu(12,n,t,2|i)).elementType=j,e.lanes=a,e;case H:return(e=Wu(13,n,t,i)).elementType=H,e.lanes=a,e;case V:return(e=Wu(19,n,t,i)).elementType=V,e.lanes=a,e;case K:return Ju(n,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case U:o=10;break e;case F:o=9;break e;case B:o=11;break e;case $:o=14;break e;case W:o=16,r=null;break e}throw Error(y(130,null==e?e:typeof e,""))}return(t=Wu(o,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Qu(e,t,n,r){return(e=Wu(7,e,r,t)).lanes=n,e}function Ju(e,t,n,r){return(e=Wu(22,e,r,t)).elementType=K,e.lanes=n,e.stateNode={isHidden:!1},e}function Yu(e,t,n){return(e=Wu(6,e,null,t)).lanes=n,e}function Xu(e,t,n){return(t=Wu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pt(0),this.expirationTimes=Pt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,i,a,o,s,l){return e=new Zu(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Wu(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(a),e}function tc(e){if(!e)return Fi;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(y(171))}if(1===e.tag){var n=e.type;if(Wi(n))return Gi(e,n,t)}return t}function nc(e,t,n,r,i,a,o,s,l){return(e=ec(n,r,!0,e,0,a,0,s,l)).context=tc(null),n=e.current,(a=Ka(r=pu(),i=mu(n))).callback=null!=t?t:null,qa(n,a,i),e.current.lanes=i,Nt(e,i,r),vu(e,r),e}function rc(e,t,n,r){var i=t.current,a=pu(),o=mu(i);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ka(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=qa(i,t,o))&&(gu(e,i,o,a),Ga(e,i,o)),o}function ic(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ac(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function oc(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}zl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Hi.current)Ls=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Ls=!1,function(e,t,n){switch(t.tag){case 3:Vs(t),Ca();break;case 5:bo(t);break;case 1:Wi(t.type)&&Qi(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ui(Na,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ui(ko,1&ko.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ys(e,t,n):(Ui(ko,1&ko.current),null!==(e=il(e,t,n))?e.sibling:null);Ui(ko,1&ko.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ui(ko,ko.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return il(e,t,n)}(e,t,n);Ls=0!=(131072&e.flags)}else Ls=!1,va&&0!=(1048576&t.flags)&&fa(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=$i(t,Bi.current);za(t,n),i=zo(null,t,r,e,i,n);var a=jo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wi(r)?(a=!0,Qi(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,$a(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,io(t,r,e,n),t=Hs(null,t,r,!0,a,n)):(t.tag=0,va&&a&&ha(t),As(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ku(e)?1:0;if(null!=e){if((e=e.$$typeof)===B)return 11;if(e===$)return 14}return 2}(r),e=Pa(r,e),i){case 0:t=Fs(null,t,r,e,n);break e;case 1:t=Bs(null,t,r,e,n);break e;case 11:t=Ds(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,Pa(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Fs(e,t,r,i=t.elementType===r?i:Pa(r,i),n);case 1:return r=t.type,i=t.pendingProps,Bs(e,t,r,i=t.elementType===r?i:Pa(r,i),n);case 3:e:{if(Vs(t),null===e)throw Error(y(387));r=t.pendingProps,i=(a=t.memoizedState).element,Wa(e,t),Ja(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=$s(e,t,r,n,i=Ss(Error(y(423)),t));break e}if(r!==i){t=$s(e,t,r,n,i=Ss(Error(y(424)),t));break e}for(ga=_i(t.stateNode.containerInfo.firstChild),ma=t,va=!0,ya=null,n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Ca(),r===i){t=il(e,t,n);break e}As(e,t,r,n)}t=t.child}return t;case 5:return bo(t),null===e&&_a(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,o=i.children,mi(r,i)?o=null:null!==a&&mi(r,a)&&(t.flags|=32),Us(e,t),As(e,t,o,n),t.child;case 6:return null===e&&_a(t),null;case 13:return Ys(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=uo(t,null,r,n):As(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Ds(e,t,r,i=t.elementType===r?i:Pa(r,i),n);case 7:return As(e,t,t.pendingProps,n),t.child;case 8:case 12:return As(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Ui(Na,r._currentValue),r._currentValue=o,null!==a)if(wr(a.value,o)){if(a.children===i.children&&!Hi.current){t=il(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){o=a.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===a.tag){(l=Ka(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),Ma(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===a.tag)o=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(o=a.return))throw Error(y(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Ma(o,n,t),o=a.sibling}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}As(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,za(t,n),r=r(i=ja(i)),t.flags|=1,As(e,t,r,n),t.child;case 14:return i=Pa(r=t.type,t.pendingProps),Ms(e,t,r,i=Pa(r.type,i),n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pa(r,i),rl(e,t),t.tag=1,Wi(r)?(e=!0,Qi(t)):e=!1,za(t,n),no(t,r,i),io(t,r,i,n),Hs(null,t,r,!0,e,n);case 19:return nl(e,t,n);case 22:return js(e,t,n)}throw Error(y(156,t.tag))};var sc="function"==typeof reportError?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}function uc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function dc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function fc(){}function hc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=ic(o);s.call(e)}}rc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var a=r;r=function(){var e=ic(o);a.call(e)}}var o=nc(t,r,e,0,null,!1,0,"",fc);return e._reactRootContainer=o,e[Ti]=o.current,ti(8===e.nodeType?e.parentNode:e),Eu(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=ic(l);s.call(e)}}var l=ec(e,0,!1,null,0,!1,0,"",fc);return e._reactRootContainer=l,e[Ti]=l.current,ti(8===e.nodeType?e.parentNode:e),Eu((function(){rc(t,l,n,r)})),l}(n,t,e,i,r);return ic(o)}uc.prototype.render=lc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(y(409));rc(e,t,null,null)},uc.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Eu((function(){rc(null,e,null,null)})),t[Ti]=null}},uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=zt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&0!==t&&t<Kt[n].priority;n++);Kt.splice(n,0,e),0===n&&Jt(e)}},At=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Et(t.pendingLanes);0!==n&&(Rt(t,1|n),vu(t,ct()),0==(6&Hl)&&(nu=ct()+500,ta()))}break;case 13:Eu((function(){var t=Ha(e,1);if(null!==t){var n=pu();gu(t,e,1,n)}})),oc(e,1)}},Dt=function(e){if(13===e.tag){var t=Ha(e,134217728);if(null!==t)gu(t,e,134217728,pu());oc(e,134217728)}},Mt=function(e){if(13===e.tag){var t=mu(e),n=Ha(e,t);if(null!==n)gu(n,e,t,pu());oc(e,t)}},zt=function(){return Ot},jt=function(e,t){var n=Ot;try{return Ot=e,t()}finally{Ot=n}},De=function(e,t,n){switch(t){case"input":if(de(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ai(r);if(!i)throw Error(y(90));oe(r),de(r,i)}}}break;case"textarea":ye(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},Be=Su,He=Eu;var pc={usingClientEntryPoint:!1,Events:[Oi,Li,Ai,Ue,Fe,Su]},mc={findFiberByHostInstance:Ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{vt=vc.inject(gc),yt=vc}catch(Se){}}r=pc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(y(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:D,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},o=function(e,t){if(!cc(e))throw Error(y(299));var n=!1,r="",i=sc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ec(e,1,!1,null,0,n,0,r,i),e[Ti]=t.current,ti(8===e.nodeType?e.parentNode:e),new lc(t)},s=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(y(188));throw e=Object.keys(e).join(","),Error(y(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return Eu(e)},u=function(e,t,n){if(!dc(t))throw Error(y(200));return hc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(y(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",o=sc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,i,0,a,o),e[Ti]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uc(t)},d=function(e,t,n){if(!dc(t))throw Error(y(200));return hc(null,e,t,!1,n)},f=function(e){if(!dc(e))throw Error(y(40));return!!e._reactRootContainer&&(Eu((function(){hc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ti]=null}))})),!0)},h=Su,p=function(e,t,n,r){if(!dc(n))throw Error(y(200));if(null==e||void 0===e._reactInternals)throw Error(y(38));return hc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),a.register("eLT1s",(function(e,t){"use strict";e.exports=a("bwABo")})),a.register("bwABo",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,k;function _(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<I(i,t)))break e;e[r]=t,e[n]=i,n=r}}function S(e){return 0===e.length?null:e[0]}function E(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var o=2*(r+1)-1,s=e[o],l=o+1,u=e[l];if(0>I(s,n))l<i&&0>I(u,s)?(e[r]=u,e[l]=n,r=l):(e[r]=s,e[o]=n,r=o);else{if(!(l<i&&0>I(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function I(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(function(){return r}),(function(e){return r=e})),e(t.exports,"unstable_IdlePriority",(function(){return i}),(function(e){return i=e})),e(t.exports,"unstable_ImmediatePriority",(function(){return a}),(function(e){return a=e})),e(t.exports,"unstable_LowPriority",(function(){return o}),(function(e){return o=e})),e(t.exports,"unstable_NormalPriority",(function(){return s}),(function(e){return s=e})),e(t.exports,"unstable_Profiling",(function(){return l}),(function(e){return l=e})),e(t.exports,"unstable_UserBlockingPriority",(function(){return u}),(function(e){return u=e})),e(t.exports,"unstable_cancelCallback",(function(){return c}),(function(e){return c=e})),e(t.exports,"unstable_continueExecution",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_forceFrameRate",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_getCurrentPriorityLevel",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_getFirstCallbackNode",(function(){return p}),(function(e){return p=e})),e(t.exports,"unstable_next",(function(){return m}),(function(e){return m=e})),e(t.exports,"unstable_pauseExecution",(function(){return g}),(function(e){return g=e})),e(t.exports,"unstable_requestPaint",(function(){return v}),(function(e){return v=e})),e(t.exports,"unstable_runWithPriority",(function(){return y}),(function(e){return y=e})),e(t.exports,"unstable_scheduleCallback",(function(){return b}),(function(e){return b=e})),e(t.exports,"unstable_shouldYield",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_wrapCallback",(function(){return k}),(function(e){return k=e})),"object"==typeof performance&&"function"==typeof performance.now){var C=performance;r=function(){return C.now()}}else{var T=Date,x=T.now();r=function(){return T.now()-x}}var P=[],N=[],R=1,O=null,L=3,A=!1,D=!1,M=!1,z="function"==typeof setTimeout?setTimeout:null,j="function"==typeof clearTimeout?clearTimeout:null,U="undefined"!=typeof setImmediate?setImmediate:null;function F(e){for(var t=S(N);null!==t;){if(null===t.callback)E(N);else{if(!(t.startTime<=e))break;E(N),t.sortIndex=t.expirationTime,_(P,t)}t=S(N)}}function B(e){if(M=!1,F(e),!D)if(null!==S(P))D=!0,Z(H);else{var t=S(N);null!==t&&ee(B,t.startTime-e)}}function H(e,t){D=!1,M&&(M=!1,j(K),K=-1),A=!0;var n=L;try{for(F(t),O=S(P);null!==O&&(!(O.expirationTime>t)||e&&!Q());){var i=O.callback;if("function"==typeof i){O.callback=null,L=O.priorityLevel;var a=i(O.expirationTime<=t);t=r(),"function"==typeof a?O.callback=a:O===S(P)&&E(P),F(t)}else E(P);O=S(P)}if(null!==O)var o=!0;else{var s=S(N);null!==s&&ee(B,s.startTime-t),o=!1}return o}finally{O=null,L=n,A=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var V,$=!1,W=null,K=-1,q=5,G=-1;function Q(){return!(r()-G<q)}function J(){if(null!==W){var e=r();G=e;var t=!0;try{t=W(!0,e)}finally{t?V():($=!1,W=null)}}else $=!1}if("function"==typeof U)V=function(){U(J)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=J,V=function(){X.postMessage(null)}}else V=function(){z(J,0)};function Z(e){W=e,$||($=!0,V())}function ee(e,t){K=z((function(){e(r())}),t)}i=5,a=1,o=4,s=3,l=null,u=2,c=function(e){e.callback=null},d=function(){D||A||(D=!0,Z(H))},f=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<e?Math.floor(1e3/e):5},h=function(){return L},p=function(){return S(P)},m=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},g=function(){},v=function(){},y=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:R++,callback:t,priorityLevel:e,startTime:n,expirationTime:a=n+a,sortIndex:-1},n>i?(e.sortIndex=n,_(N,e),null===S(P)&&e===S(N)&&(M?(j(K),K=-1):M=!0,ee(B,n-i))):(e.sortIndex=a,_(P,e),D||A||(D=!0,Z(H))),e},w=Q,k=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}}}));var o,s={};s=a("aiCu8");var l;!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),o=(l=a("1wA08")).createRoot,l.hydrateRoot;var u=a("bcSyl"),c={};e(c,"GenIcon",(function(){return g}),(function(e){return g=e}));u=a("bcSyl"),u=a("bcSyl");var d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=t(u).createContext&&t(u).createContext(d),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},h.apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function m(e){return e&&e.map((function(e,n){return t(u).createElement(e.tag,h({key:n},e.attr),m(e.child))}))}function g(e){return function(n){return t(u).createElement(v,h({attr:h({},e.attr)},n),m(e.child))}}function v(e){var n=function(n){var r,i=e.attr,a=e.size,o=e.title,s=p(e,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t(u).createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:h(h({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&t(u).createElement("title",null,o),e.children)};return void 0!==f?t(u).createElement(f.Consumer,null,(function(e){return n(e)})):n(d)}function y(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z"}}]})(e)}function b(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}}]})(e)}function w(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}}]})(e)}function k(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}}]})(e)}function _(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}}]})(e)}function S(e){return(0,c.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M94.32 70.473c-12.257.27-25.32 12.332-36.568 29.64a145.732 145.732 0 0 1 19.855-12.115c-31.622 23.364-46.658 83.72-47.166 122.336C43.54 191.32 70.73 160.196 96 174.964c-28.952-6.018-47.296 38.325-56.428 58.606 22.808-9.36 39.494-24.152 72.428-24.523-32.47 21.4-43.966 44.83-56.428 68.168 23.376-14.505 40.286-22.99 55.528-26.227 13.683-16.43 28.01-33.093 43.728-46.746 11.79-10.24 24.533-18.877 38.37-24.043-16.805-46.114-42.764-88.828-89.626-107.49-3-1.6-6.1-2.307-9.252-2.237zM207.578 194.64c-14.066 3.29-27.57 11.573-40.947 23.192-17.53 15.227-34.353 35.82-50.868 55.703-16.515 19.884-32.62 39.088-50.287 51.707-13.545 9.674-29.157 15.164-45.014 12.565 2.883 14.468 9.866 33.213 19.38 50.42 12.655 22.886 30.036 43.342 44.482 50.59 6.637 3.328 12.566 3.416 21.23 1.243 8.662-2.173 19.453-6.957 32.762-12.52C164.934 416.41 201.78 402.6 256 402.6c54.22 0 91.066 13.81 117.686 24.94 13.31 5.563 24.1 10.347 32.763 12.52 8.662 2.173 14.59 2.085 21.228-1.244 14.446-7.247 31.827-27.703 44.482-50.59 9.514-17.206 16.497-35.95 19.38-50.42-15.858 2.6-31.47-2.89-45.015-12.564-17.667-12.62-33.772-31.823-50.287-51.707s-33.337-40.476-50.87-55.703c-13.376-11.62-26.88-19.902-40.946-23.193 3.024 13.966-.075 26.363-7.594 34.985-10.06 11.535-25.643 16.307-40.828 16.307-15.185 0-30.77-4.772-40.828-16.307-7.52-8.622-10.618-21.02-7.594-34.986zm113.04 35.702c8.495-.304 17.71 10.54 7.925 22.465 16.326-15.08 30.872 6.004 13.81 13.808-13.26 6.065-25.986 13.423-37.937 21.86a32.33 32.33 0 0 1 1.584 9.958c0 10.202-2.76 19.5-10.88 26.696l-1.18 1.055-.047 1.582-.11 4.397c13.784 10.594 29.233 19.1 46.635 25.016 20.08 6.825 5.405 31.39-15.922 15.912 18.035 18.658-6.53 32.908-14.275 14.275-4.626-11.13-10.36-21.786-17.02-31.887l-.007.233c-1.505.906-4.646 2.64-9.295 4.308V340.6h-9.343v21.583c-3.997.946-6.635 1.68-11.875 1.94v-20.516h-11.344v20.565c-5-.19-7.527-.81-11.518-1.645V340.6h-9.344v20c-5.884-1.864-9.905-3.948-11.69-4.96l-.01-.298c-6.652 10.092-12.38 20.738-17.003 31.855-7.746 18.632-32.31 4.384-14.274-14.275-21.327 15.48-36.005-9.097-15.924-15.922 17.313-5.885 32.705-14.322 46.435-24.84l-.156-4.687-.05-1.547-1.152-1.032C208.72 317.74 206 308.48 206 298.396c0-3.362.53-6.647 1.533-9.798-11.935-8.415-24.646-15.747-37.883-21.8-17.063-7.806-2.527-28.89 13.8-13.812-9.574-11.666-.968-22.302 7.364-22.474 3.52-.073 6.99 1.722 9.024 6.086 5.733 12.305 12.05 24.032 19.04 35.013 8.91-7.97 21.735-13.142 36.214-13.352H256c14.805 0 27.942 5.186 37.03 13.28 7.024-11.008 13.372-22.763 19.124-35.11 1.926-4.134 5.14-5.967 8.463-6.086zM224.7 293.228c-4.483.056-7.877 1.904-8.042 7.28 0 8.555 6.923 15.498 15.485 15.498 8.555 0 15.496-6.943 15.496-15.498 0 0-13.757-7.395-22.94-7.28zm62.624 0c-9.18-.116-22.937 7.28-22.937 7.28 0 8.555 6.94 15.498 15.496 15.498 8.555 0 15.484-6.943 15.484-15.498-.164-5.376-3.56-7.224-8.043-7.28zm-31.336 18.96l-7.994 17.84h15.988l-7.994-17.84z"}}]})(e)}
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
 */u=a("bcSyl");function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}(I=E||(E={})).Pop="POP",I.Push="PUSH",I.Replace="REPLACE";const T="popstate";function x(e){return void 0===e&&(e={}),D((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return O("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:L(t)}),null,e)}function P(e,t){if(!1===e||null==e)throw new Error(t)}function N(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function R(e,t){return{usr:e.state,key:e.key,idx:t}}function O(e,t,n,r){return void 0===n&&(n=null),C({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?A(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function L(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function A(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function D(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=E.Pop,l=null,u=c();function c(){return(o.state||{idx:null}).idx}function d(){s=E.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:h.location,delta:t})}function f(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:L(e);return P(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,o.replaceState(C({},o.state,{idx:u}),""));let h={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(T,d),l=e,()=>{i.removeEventListener(T,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=E.Push;let r=O(h.location,e,t);n&&n(r,e),u=c()+1;let d=R(r,u),f=h.createHref(r);try{o.pushState(d,"",f)}catch(e){i.location.assign(f)}a&&l&&l({action:s,location:h.location,delta:1})},replace:function(e,t){s=E.Replace;let r=O(h.location,e,t);n&&n(r,e),u=c();let i=R(r,u),d=h.createHref(r);o.replaceState(i,"",d),a&&l&&l({action:s,location:h.location,delta:0})},go:e=>o.go(e)};return h}var M,z;(z=M||(M={})).data="data",z.deferred="deferred",z.redirect="redirect",z.error="error";new Set(["lazy","caseSensitive","path","id","index","children"]);function j(e,t,n){void 0===n&&(n="/");let r=X(("string"==typeof t?A(t):t).pathname||"/",n);if(null==r)return null;let i=U(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let e=0;null==a&&e<i.length;++e)a=Q(i[e],Y(r));return a}function U(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(P(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=ne([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(P(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),U(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:G(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of F(e.path))i(e,t,n);else i(e,t)})),t}function F(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=F(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const B=/^:\w+$/,H=3,V=2,$=1,W=10,K=-2,q=e=>"*"===e;function G(e,t){let n=e.split("/"),r=n.length;return n.some(q)&&(r+=K),t&&(r+=V),n.filter((e=>!q(e))).reduce(((e,t)=>e+(B.test(t)?H:""===t?$:W)),r)}function Q(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let e=0;e<n.length;++e){let o=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=J({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=o.route;a.push({params:r,pathname:ne([i,u.pathname]),pathnameBase:re(ne([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=ne([i,u.pathnameBase]))}return a}function J(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);N("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return N(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function Y(e){try{return decodeURI(e)}catch(t){return N(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function X(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function ee(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function te(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=A(e):(i=C({},e),P(!i.pathname||!i.pathname.includes("?"),Z("?","pathname","search",i)),P(!i.pathname||!i.pathname.includes("#"),Z("#","pathname","hash",i)),P(!i.search||!i.search.includes("#"),Z("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(r||null==s)a=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?A(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:ie(r),hash:ae(i)}}(i,a),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const ne=e=>e.join("/").replace(/\/\/+/g,"/"),re=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ie=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ae=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class oe extends Error{}function se(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const le=["post","put","patch","delete"],ue=(new Set(le),["get",...le]);new Set(ue),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred");function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}const de=(u=a("bcSyl")).createContext(null),fe=u.createContext(null),he=u.createContext(null),pe=u.createContext(null),me=u.createContext({outlet:null,matches:[]}),ge=u.createContext(null);function ve(e,t){let{relative:n}=void 0===t?{}:t;!ye()&&P(!1);let{basename:r,navigator:i}=u.useContext(he),{hash:a,pathname:o,search:s}=_e(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:ne([r,o])),i.createHref({pathname:l,search:s,hash:a})}function ye(){return null!=u.useContext(pe)}function be(){return!ye()&&P(!1),u.useContext(pe).location}function we(e){u.useContext(he).static||u.useLayoutEffect(e)}function ke(){return null!=u.useContext(de)?function(){let{router:e}=Le(Pe.UseNavigateStable),t=De(Re.UseNavigateStable),n=u.useRef(!1);return we((()=>{n.current=!0})),u.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,ce({fromRouteId:t},i)))}),[e,t])}():function(){!ye()&&P(!1);let{basename:e,navigator:t}=u.useContext(he),{matches:n}=u.useContext(me),{pathname:r}=be(),i=JSON.stringify(ee(n).map((e=>e.pathnameBase))),a=u.useRef(!1);return we((()=>{a.current=!0})),u.useCallback((function(n,o){if(void 0===o&&(o={}),!a.current)return;if("number"==typeof n)return void t.go(n);let s=te(n,JSON.parse(i),r,"path"===o.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:ne([e,s.pathname])),(o.replace?t.replace:t.push)(s,o.state,o)}),[e,t,i,r])}()}function _e(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=u.useContext(me),{pathname:i}=be(),a=JSON.stringify(ee(r).map((e=>e.pathnameBase)));return u.useMemo((()=>te(e,JSON.parse(a),i,"path"===n)),[e,a,i,n])}function Se(e,t,n){!ye()&&P(!1);let r,{navigator:i}=u.useContext(he),{matches:a}=u.useContext(me),o=a[a.length-1],s=o?o.params:{},l=(o&&o.pathname,o?o.pathnameBase:"/"),c=(o&&o.route,be());if(t){var d;let e="string"==typeof t?A(t):t;"/"!==l&&!(null==(d=e.pathname)?void 0:d.startsWith(l))&&P(!1),r=e}else r=c;let f=r.pathname||"/",h=j(e,{pathname:"/"===l?f:f.slice(l.length)||"/"}),p=xe(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:ne([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:ne([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,n);return t&&p?u.createElement(pe.Provider,{value:{location:ce({pathname:"/",search:"",hash:"",state:null,key:"default"},r),navigationType:E.Pop}},p):p}function Ee(){let e=function(){var e;let t=u.useContext(ge),n=Ae(Re.UseRouteError),r=De(Re.UseRouteError);return t||(null==(e=n.errors)?void 0:e[r])}(),t=se(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:i},n):null,null)}const Ie=u.createElement(Ee,null);class Ce extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?u.createElement(me.Provider,{value:this.props.routeContext},u.createElement(ge.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Te(e){let{routeContext:t,match:n,children:r}=e,i=u.useContext(de);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(me.Provider,{value:t},r)}function xe(e,t,n){var r;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){var i;if(null==(i=n)||!i.errors)return null;e=n.matches}let a=e,o=null==(r=n)?void 0:r.errors;if(null!=o){let e=a.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));!(e>=0)&&P(!1),a=a.slice(0,Math.min(a.length,e+1))}return a.reduceRight(((e,r,i)=>{let s=r.route.id?null==o?void 0:o[r.route.id]:null,l=null;n&&(l=r.route.errorElement||Ie);let c=t.concat(a.slice(0,i+1)),d=()=>{let t;return t=s?l:r.route.element?r.route.element:e,u.createElement(Te,{match:r,routeContext:{outlet:e,matches:c},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?u.createElement(Ce,{location:n.location,revalidation:n.revalidation,component:l,error:s,children:d(),routeContext:{outlet:null,matches:c}}):d()}),null)}var Pe,Ne,Re,Oe;function Le(e){let t=u.useContext(de);return!t&&P(!1),t}function Ae(e){let t=u.useContext(fe);return!t&&P(!1),t}function De(e){let t=function(e){let t=u.useContext(me);return!t&&P(!1),t}(),n=t.matches[t.matches.length-1];return!n.route.id&&P(!1),n.route.id}(Ne=Pe||(Pe={})).UseBlocker="useBlocker",Ne.UseRevalidator="useRevalidator",Ne.UseNavigateStable="useNavigate",(Oe=Re||(Re={})).UseBlocker="useBlocker",Oe.UseLoaderData="useLoaderData",Oe.UseActionData="useActionData",Oe.UseRouteError="useRouteError",Oe.UseNavigation="useNavigation",Oe.UseRouteLoaderData="useRouteLoaderData",Oe.UseMatches="useMatches",Oe.UseRevalidator="useRevalidator",Oe.UseNavigateStable="useNavigate",Oe.UseRouteId="useRouteId";function Me(e){P(!1)}function ze(e){let{basename:t="/",children:n=null,location:r,navigationType:i=E.Pop,navigator:a,static:o=!1}=e;ye()&&P(!1);let s=t.replace(/^\/*/,"/"),l=u.useMemo((()=>({basename:s,navigator:a,static:o})),[s,a,o]);"string"==typeof r&&(r=A(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:p="default"}=r,m=u.useMemo((()=>{let e=X(c,s);return null==e?null:{location:{pathname:e,search:d,hash:f,state:h,key:p},navigationType:i}}),[s,c,d,f,h,p,i]);return null==m?null:u.createElement(he.Provider,{value:l},u.createElement(pe.Provider,{children:n,value:m}))}function je(e){let{children:t,location:n}=e;return Se(He(t),n)}var Ue,Fe;(Fe=Ue||(Ue={}))[Fe.pending=0]="pending",Fe[Fe.success=1]="success",Fe[Fe.error=2]="error";new Promise((()=>{}));class Be extends u.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,i=Ue.pending;if(n instanceof Promise)if(this.state.error){Ue.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?Ue.error:void 0!==r._data?Ue.success:Ue.pending):(Ue.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else Ue.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(i===Ue.error&&r._error instanceof oe)throw $c16cf3774a37cfd6$var$neverSettledPromise;if(i===Ue.error&&!t)throw r._error;if(i===Ue.error)return u.createElement($c16cf3774a37cfd6$var$AwaitContext.Provider,{value:r,children:t});if(i===Ue.success)return u.createElement($c16cf3774a37cfd6$var$AwaitContext.Provider,{value:r,children:e});throw r}}function He(e,t){void 0===t&&(t=[]);let n=[];return u.Children.forEach(e,((e,r)=>{if(!u.isValidElement(e))return;let i=[...t,r];if(e.type===u.Fragment)return void n.push.apply(n,He(e.props.children,i));e.type!==Me&&P(!1),e.props.index&&e.props.children&&P(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=He(e.props.children,i)),n.push(a)})),n}function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}function $e(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const We=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ke=["aria-current","caseSensitive","className","end","style","to","children"];function qe(e){let{basename:t,children:n,window:r}=e,i=u.useRef();null==i.current&&(i.current=x({window:r,v5Compat:!0}));let a=i.current,[o,s]=u.useState({action:a.action,location:a.location});return u.useLayoutEffect((()=>a.listen(s)),[a]),u.createElement(ze,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const Ge="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Je=u.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:c,preventScrollReset:d}=e,f=$e(e,We),{basename:h}=u.useContext(he),p=!1;if("string"==typeof c&&Qe.test(c)&&(n=c,Ge))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=X(t.pathname,h);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:p=!0}catch(e){}let m=ve(c,{relative:i}),g=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=void 0===t?{}:t,s=ke(),l=be(),c=_e(e,{relative:o});return u.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:L(l)===L(c);s(e,{replace:n,state:i,preventScrollReset:a,relative:o})}}),[l,s,c,r,i,n,e,a,o])}(c,{replace:o,state:s,target:l,preventScrollReset:d,relative:i});return u.createElement("a",Ve({},f,{href:n||m,onClick:p||a?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))})),Ye=u.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:a=!1,style:o,to:s,children:l}=e,c=$e(e,Ke),d=_e(s,{relative:c.relative}),f=be(),h=u.useContext(fe),{navigator:p}=u.useContext(he),m=p.encodeLocation?p.encodeLocation(d).pathname:d.pathname,g=f.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(g=g.toLowerCase(),v=v?v.toLowerCase():null,m=m.toLowerCase());let y,b=g===m||!a&&g.startsWith(m)&&"/"===g.charAt(m.length),w=null!=v&&(v===m||!a&&v.startsWith(m)&&"/"===v.charAt(m.length)),k=b?n:void 0;y="function"==typeof i?i({isActive:b,isPending:w}):[i,b?"active":null,w?"pending":null].filter(Boolean).join(" ");let _="function"==typeof o?o({isActive:b,isPending:w}):o;return u.createElement(Je,Ve({},c,{"aria-current":k,className:y,ref:t,style:_,to:s}),"function"==typeof l?l({isActive:b,isPending:w}):l)}));var Xe,Ze;!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(Xe||(Xe={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ze||(Ze={}));
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
var et,tt,nt,rt=et={};function it(){throw new Error("setTimeout has not been defined")}function at(){throw new Error("clearTimeout has not been defined")}function ot(e){if(tt===setTimeout)return setTimeout(e,0);if((tt===it||!tt)&&setTimeout)return tt=setTimeout,setTimeout(e,0);try{return tt(e,0)}catch(t){try{return tt.call(null,e,0)}catch(t){return tt.call(this,e,0)}}}!function(){try{tt="function"==typeof setTimeout?setTimeout:it}catch(e){tt=it}try{nt="function"==typeof clearTimeout?clearTimeout:at}catch(e){nt=at}}();var st,lt=[],ut=!1,ct=-1;function dt(){ut&&st&&(ut=!1,st.length?lt=st.concat(lt):ct=-1,lt.length&&ft())}function ft(){if(!ut){var e=ot(dt);ut=!0;for(var t=lt.length;t;){for(st=lt,lt=[];++ct<t;)st&&st[ct].run();ct=-1,t=lt.length}st=null,ut=!1,function(e){if(nt===clearTimeout)return clearTimeout(e);if((nt===at||!nt)&&clearTimeout)return nt=clearTimeout,clearTimeout(e);try{return nt(e)}catch(t){try{return nt.call(null,e)}catch(t){return nt.call(this,e)}}}(e)}}function ht(e,t){this.fun=e,this.array=t}function pt(){}rt.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];lt.push(new ht(e,t)),1!==lt.length||ut||ot(ft)},ht.prototype.run=function(){this.fun.apply(null,this.array)},rt.title="browser",rt.browser=!0,rt.env={},rt.argv=[],rt.version="",rt.versions={},rt.on=pt,rt.addListener=pt,rt.once=pt,rt.off=pt,rt.removeListener=pt,rt.removeAllListeners=pt,rt.emit=pt,rt.prependListener=pt,rt.prependOnceListener=pt,rt.listeners=function(e){return[]},rt.binding=function(e){throw new Error("process.binding is not supported")},rt.cwd=function(){return"/"},rt.chdir=function(e){throw new Error("process.chdir is not supported")},rt.umask=function(){return 0};const mt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},gt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(mt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==s)throw new vt;const l=i<<2|a>>4;if(r.push(l),64!==o){const e=a<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
function Ct(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Tt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function xt(){const e=Ct();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Pt(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Nt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rt.prototype.create)}}class Rt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(Ot,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new Nt(r,o,n)}}const Ot=/\{\$([^}]+)}/g;
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
 */function Lt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function At(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(Dt(n)&&Dt(a)){if(!At(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Dt(e){return null!==e&&"object"==typeof e}
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
 */function Ut(e,t){const n=new Ft(e,t);return n.subscribe.bind(n)}class Ft{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Bt),void 0===r.error&&(r.error=Bt),void 0===r.complete&&(r.complete=Bt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Bt(){}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===$t?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Kt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const qt=[];var Gt,Qt;(Qt=Gt||(Gt={}))[Qt.DEBUG=0]="DEBUG",Qt[Qt.VERBOSE=1]="VERBOSE",Qt[Qt.INFO=2]="INFO",Qt[Qt.WARN=3]="WARN",Qt[Qt.ERROR=4]="ERROR",Qt[Qt.SILENT=5]="SILENT";const Jt={debug:Gt.DEBUG,verbose:Gt.VERBOSE,info:Gt.INFO,warn:Gt.WARN,error:Gt.ERROR,silent:Gt.SILENT},Yt=Gt.INFO,Xt={[Gt.DEBUG]:"log",[Gt.VERBOSE]:"log",[Gt.INFO]:"info",[Gt.WARN]:"warn",[Gt.ERROR]:"error"},Zt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Xt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class en{constructor(e){this.name=e,this._logLevel=Yt,this._logHandler=Zt,this._userLogHandler=null,qt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Gt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Jt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Gt.DEBUG,...e),this._logHandler(this,Gt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Gt.VERBOSE,...e),this._logHandler(this,Gt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Gt.INFO,...e),this._logHandler(this,Gt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Gt.WARN,...e),this._logHandler(this,Gt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Gt.ERROR,...e),this._logHandler(this,Gt.ERROR,...e)}}const tn=(e,t)=>t.some((t=>e instanceof t));let nn,rn;const an=new WeakMap,on=new WeakMap,sn=new WeakMap,ln=new WeakMap,un=new WeakMap;let cn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return on.get(e);if("objectStoreNames"===t)return e.objectStoreNames||sn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function dn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(rn||(rn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(pn(this),t),hn(an.get(this))}:function(...t){return hn(e.apply(pn(this),t))}:function(t,...n){const r=e.call(pn(this),t,...n);return sn.set(r,t.sort?t.sort():[t]),hn(r)}}function fn(e){return"function"==typeof e?dn(e):(e instanceof IDBTransaction&&function(e){if(on.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));on.set(e,t)}(e),tn(e,nn||(nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,cn):e)}function hn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(hn(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&an.set(t,e)})).catch((()=>{})),un.set(t,e),t}(e);if(ln.has(e))return ln.get(e);const t=fn(e);return t!==e&&(ln.set(e,t),un.set(t,e)),t}const pn=e=>un.get(e);function mn(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=hn(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(hn(o.result),e.oldVersion,e.newVersion,hn(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const gn=["get","getKey","getAll","getAllKeys","count"],vn=["put","add","delete","clear"],yn=new Map;function bn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(yn.get(t))return yn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=vn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!gn.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return yn.set(t,a),a}cn=(e=>({...e,get:(t,n,r)=>bn(t,n)||e.get(t,n,r),has:(t,n)=>!!bn(t,n)||e.has(t,n)}))(cn);
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
 */const Ln="9.21.0";function An(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:En,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(n||(n=St()),!n)throw Rn.create("no-options");const a=Cn.get(i);if(a){if(At(n,a.options)&&At(r,a.config))return a;throw Rn.create("duplicate-app",{appName:i})}const o=new Kt(i);for(const e of Tn.values())o.addComponent(e);const s=new On(n,r,o);return Cn.set(i,s),s}function Dn(e=En){const t=Cn.get(e);if(!t&&e===En)return An();if(!t)throw Rn.create("no-app",{appName:e});return t}function Mn(e,t,n){var r;let i=null!==(r=In[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Sn.warn(e.join(" "))}Pn(new Vt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */class $n{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Wn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Wn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),qn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=yt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wn(){return(new Date).toISOString().substring(0,10)}class Kn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Pt()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Bn()).transaction(Un).objectStore(Un).get(Vn(e))}catch(e){if(e instanceof Nt)Sn.warn(e.message);else{const t=Rn.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Sn.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Hn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Hn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function qn(e){return yt(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Gn;Gn="",Pn(new Vt("platform-logger",(e=>new wn(e)),"PRIVATE")),Pn(new Vt("heartbeat",(e=>new $n(e)),"PRIVATE")),Mn(kn,_n,Gn),Mn(kn,_n,"esm2017"),Mn("fire-js","");function Qn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Jn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yn=Jn,Xn=new Rt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Zn=new en("@firebase/auth");function er(e,...t){Zn.logLevel<=Gt.ERROR&&Zn.error(`Auth (${Ln}): ${e}`,...t)}
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
 */function tr(e,...t){throw ir(e,...t)}function nr(e,...t){return ir(e,...t)}function rr(e,t,n){const r=Object.assign(Object.assign({},Yn()),{[t]:n});return new Rt("auth","Firebase",r).create(t,{appName:e.name})}function ir(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xn.create(e,...t)}function ar(e,t,...n){if(!e)throw ir(t,...n)}function or(e){const t="INTERNAL ASSERTION FAILED: "+e;throw er(t),new Error(t)}function sr(e,t){e||or(t)}
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
 */function vr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function yr(e,t,n,r,i={}){return br(e,i,(async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const o=Mt(Object.assign({key:e.config.apiKey},a)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),pr.fetch()(kr(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))}))}async function br(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},mr),t);try{const t=new _r(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Sr(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Sr(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw Sr(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw Sr(e,"user-disabled",a);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw rr(e,s,o);tr(e,s)}}catch(t){if(t instanceof Nt)throw t;tr(e,"network-request-failed",{message:String(t)})}}async function wr(e,t,n,r,i={}){const a=await yr(e,t,n,r,i);return"mfaPendingCredential"in a&&tr(e,"multi-factor-auth-required",{_serverResponse:a}),a}function kr(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?hr(e.config,i):`${e.config.apiScheme}://${i}`}class _r{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(nr(this.auth,"network-request-failed"))),gr.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nr(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function Nr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Tr(e,async function(e,t){return yr(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));ar(null==i?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,n=Qn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const s=(l=e.providerData,u=o,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&a.passwordHash||(null==s?void 0:s.length)),f=!!c&&d,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Pr(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(e,h)}
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
class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ar(e.idToken,"internal-error"),ar(void 0!==e.idToken,"internal-error"),ar(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Cr(e);return ar(t,"internal-error"),ar(void 0!==t.exp,"internal-error"),ar(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ar(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await br(e,{},(async()=>{const n=Mt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=kr(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",pr.fetch()(a,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new Rr;return n&&(ar("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(ar("string"==typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(ar("number"==typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return or("not implemented")}}
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
 */function Or(e,t){ar("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Lr{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Qn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return ar(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),i=Cr(r);ar(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Er(Ir(i.auth_time)),issuedAtTime:Er(Ir(i.iat)),expirationTime:Er(Ir(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ht(e);await Nr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ar(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ar(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Nr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,async function(e,t){return yr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,a,o,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:k,stsTokenManager:_}=t;ar(y&&_,e,"internal-error");const S=Rr.fromJSON(this.name,_);ar("string"==typeof y,e,"internal-error"),Or(c,e.name),Or(d,e.name),ar("boolean"==typeof b,e,"internal-error"),ar("boolean"==typeof w,e,"internal-error"),Or(f,e.name),Or(h,e.name),Or(p,e.name),Or(m,e.name),Or(g,e.name),Or(v,e.name);const E=new Lr({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return k&&Array.isArray(k)&&(E.providerData=k.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Rr;r.updateFromServerResponse(t);const i=new Lr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Nr(i),i}}
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
 */function jr(e,t,n){return`firebase:${e}:${t}:${n}`}class Ur{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=jr(this.userKey,r.apiKey,i),this.fullPersistenceKey=jr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ur(Dr(zr),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Dr(zr);const a=jr(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(a);if(t){const r=Lr._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new Ur(i,e,n)):new Ur(i,e,n)}}
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
 */function Zr(e){return void 0!==e&&void 0!==e.enterprise}class ei{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function ti(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,a;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=nr("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(a=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==a?a:document).appendChild(r)}))}function ni(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ri{constructor(e){this.type="recaptcha-enterprise",this.auth=si(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Zr(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Xr(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new ei(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Zr(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));ti("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function ii(e,t,n,r=!1){const i=new ri(e);let a;try{a=await i.verify(n)}catch(e){a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class ai{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class oi{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new li(this),this.idTokenSubscription=new li(this),this.beforeStateQueue=new ai(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==a||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ar(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nr(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ht(e):null;return t&&ar(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ar(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Dr(e))}))}async initializeRecaptchaConfig(){const e=await Xr(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ei(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new ri(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;ar(t,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return ar(a,this,"internal-error"),a.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ar(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Zn.logLevel<=Gt.WARN&&Zn.warn(`Auth (${Ln}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function si(e){return Ht(e)}class li{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ut((e=>this.observer=e))}get next(){return ar(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function ui(e,t,n){const r=si(e);ar(r._canInitEmulator,r,"emulator-config-failed"),ar(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),a=ci(t),{host:o,port:s}=function(e){const t=ci(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:di(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:di(t)}}}(t),l=null===s?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ci(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function di(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class fi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,t){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}
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
 */async function hi(e,t){return yr(e,"POST","/v1/accounts:update",t)}
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
async function pi(e,t){return wr(e,"POST","/v1/accounts:signInWithPassword",vr(e,t))}
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
class mi extends fi{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new mi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new mi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await ii(e,n,"signInWithPassword");return pi(e,t)}return pi(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await ii(e,n,"signInWithPassword");return pi(e,t)}return Promise.reject(t)}));case"emailLink":
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
return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithEmailLink",vr(e,t))}(e,{email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return hi(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithEmailLink",vr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function gi(e,t){return wr(e,"POST","/v1/accounts:signInWithIdp",vr(e,t))}
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
 */class vi extends fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Qn(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new vi(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return gi(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gi(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mt(t)}return e}}
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
 */const yi={USER_NOT_FOUND:"user-not-found"};
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
class bi extends fi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new bi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new bi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithPhoneNumber",vr(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await wr(e,"POST","/v1/accounts:signInWithPhoneNumber",vr(e,t));if(n.temporaryProof)throw Sr(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return wr(e,"POST","/v1/accounts:signInWithPhoneNumber",vr(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),yi)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new bi({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class wi{constructor(e){var t,n,r,i,a,o;const s=zt(jt(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(n=s.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);ar(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(a=s.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=s.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=zt(jt(e)).link,n=t?zt(jt(t)).deep_link_id:null,r=zt(jt(e)).deep_link_id;return(r?zt(jt(r)).link:null)||r||n||t||e}(e);try{return new wi(t)}catch(e){return null}}}
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
class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,t){return mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=wi.parseLink(t);return ar(n,"argument-error"),mi._fromEmailAndCode(e,n.code,n.tenantId)}}ki.PROVIDER_ID="password",ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class _i{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Si extends _i{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Ei extends Si{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch(e){return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ei.PROVIDER_ID="facebook.com";
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
class Ii extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vi._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ii.credential(t,n)}catch(e){return null}}}Ii.GOOGLE_SIGN_IN_METHOD="google.com",Ii.PROVIDER_ID="google.com";
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
class Ci extends Si{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch(e){return null}}}Ci.GITHUB_SIGN_IN_METHOD="github.com",Ci.PROVIDER_ID="github.com";
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
class Ti extends Si{constructor(){super("twitter.com")}static credential(e,t){return vi._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ti.credential(t,n)}catch(e){return null}}}
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
async function xi(e,t){return wr(e,"POST","/v1/accounts:signUp",vr(e,t))}
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
 */Ti.TWITTER_SIGN_IN_METHOD="twitter.com",Ti.PROVIDER_ID="twitter.com";class Pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Lr._fromIdTokenResponse(e,n,r),a=Ni(n);return new Pi({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ni(n);return new Pi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ni(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Ri extends Nt{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ri(e,t,n,r)}}function Oi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ri._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Li(e,t,n=!1){const r=await Tr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pi._forOperation(e,"link",r)}
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
async function Ai(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await Tr(e,Oi(r,i,t,e),n);ar(a.idToken,r,"internal-error");const o=Cr(a.idToken);ar(o,r,"internal-error");const{sub:s}=o;return ar(e.uid===s,r,"user-mismatch"),Pi._forOperation(e,i,a)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&tr(r,"user-mismatch"),e}}
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
 */async function Di(e,t,n=!1){const r="signIn",i=await Oi(e,r,t),a=await Pi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function Mi(e,t){return Di(si(e),t)}async function zi(e,t,n){var r;const i=si(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await ii(i,a,"signUpPassword");o=xi(i,e)}else o=xi(i,a).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await ii(i,a,"signUpPassword");return xi(i,e)}return Promise.reject(e)}));const s=await o.catch((e=>Promise.reject(e))),l=await Pi._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(l.user),l}function ji(e,t,n){return Mi(Ht(e),ki.credential(t,n))}
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
 */new WeakMap;const Ui="__sak";
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
 */class Fi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Bi extends Fi{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ct();return Hr(e)||Gr(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Jr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Qr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bi.type="LOCAL";const Hi=Bi;
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
 */class Vi extends Fi{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vi.type="SESSION";const $i=Vi;
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
class Wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Wi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(a).map((async e=>e(t.origin,i))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ki(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Wi.receivers=[];class qi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise(((o,s)=>{const l=Ki("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
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
 */function Gi(){return window}
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
function Qi(){return void 0!==Gi().WorkerGlobalScope&&"function"==typeof Gi().importScripts}
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
const Ji="firebaseLocalStorageDb",Yi="firebaseLocalStorage",Xi="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ea(e,t){return e.transaction([Yi],t?"readwrite":"readonly").objectStore(Yi)}function ta(){const e=indexedDB.open(Ji,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Yi,{keyPath:Xi})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Yi)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ji);return new Zi(e).toPromise()}(),t(await ta()))}))}))}async function na(e,t,n){const r=ea(e,!0).put({[Xi]:t,value:n});return new Zi(r).toPromise()}function ra(e,t){const n=ea(e,!0).delete(t);return new Zi(n).toPromise()}class ia{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ta()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wi._getInstance(Qi()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new qi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ta();return await na(e,Ui,"1"),await ra(e,Ui),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>na(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ea(e,!1).get(t),r=await new Zi(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ra(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ea(e,!1).getAll();return new Zi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ia.type="LOCAL";const aa=ia;
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
ni("rcb"),new fr(3e4,6e4);
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
const oa="recaptcha";async function sa(e,t,n){var r;const i=await n.verify();try{let a;if(ar("string"==typeof i,e,"argument-error"),ar(n.type===oa,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){ar("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return yr(e,"POST","/v2/accounts/mfaEnrollment:start",vr(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{ar("signin"===t.type,e,"internal-error");const n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;ar(n,e,"missing-multi-factor-info");const o=await function(e,t){return yr(e,"POST","/v2/accounts/mfaSignIn:start",vr(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return yr(e,"POST","/v1/accounts:sendVerificationCode",vr(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class la{constructor(e){this.providerId=la.PROVIDER_ID,this.auth=si(e)}verifyPhoneNumber(e,t){return sa(this.auth,e,Ht(t))}static credential(e,t){return bi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return la.credentialFromTaggedObject(t)}static credentialFromError(e){return la.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?bi._fromTokenResponse(t,n):null}}
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
function ua(e,t){return t?Dr(t):(ar(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */la.PROVIDER_ID="phone",la.PHONE_SIGN_IN_METHOD="phone";class ca extends fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function da(e){return Di(e.auth,new ca(e),e.bypassAuthState)}function fa(e){const{auth:t,user:n}=e;return ar(n,t,"internal-error"),Ai(n,new ca(e),e.bypassAuthState)}async function ha(e){const{auth:t,user:n}=e;return ar(n,t,"internal-error"),Li(n,new ca(e),e.bypassAuthState)}
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
 */class pa{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a)return void this.reject(a);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return da;case"linkViaPopup":case"linkViaRedirect":return ha;case"reauthViaPopup":case"reauthViaRedirect":return fa;default:tr(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const ma=new fr(2e3,1e4);class ga extends pa{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ga.currentPopupAction&&ga.currentPopupAction.cancel(),ga.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ar(e,this.auth,"internal-error"),e}async onExecution(){sr(1===this.filter.length,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(nr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ga.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ma.get())};e()}}ga.currentPopupAction=null;
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
const va="pendingRedirect",ya=new Map;class ba extends pa{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=_a(t),r=ka(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function wa(e,t){ya.set(e._key(),t)}function ka(e){return Dr(e._redirectPersistence)}function _a(e){return jr(va,e.config.apiKey,e.name)}
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
 */async function Sa(e,t,n=!1){const r=si(e),i=ua(r,t),a=new ba(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ea{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ca(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ca(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ia(e))}saveEventToCache(e){this.cachedEventUids.add(Ia(e)),this.lastProcessedEventTime=Date.now()}}function Ia(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ca({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Ta=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xa=/^https?/;async function Pa(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return yr(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Na(e))return}catch(e){}tr(e,"unauthorized-domain")}function Na(e){const t=lr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xa.test(n))return!1;if(Ta.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Ra=new fr(3e4,6e4);function Oa(){const e=Gi().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let La=null;function Aa(e){return La=La||function(e){return new Promise(((t,n)=>{var r,i,a;function o(){Oa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Oa(),n(nr(e,"network-request-failed"))},timeout:Ra.get()})}if(null===(i=null===(r=Gi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Gi().gapi)||void 0===a?void 0:a.load)){const t=ni("iframefcb");return Gi()[t]=()=>{gapi.load?o():n(nr(e,"network-request-failed"))},ti(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw La=null,e}))}(e),La}
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
 */const Da=new fr(5e3,15e3),Ma="__/auth/iframe",za="emulator/auth/iframe",ja={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ua=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fa(e){const t=e.config;ar(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?hr(t,za):`https://${e.config.authDomain}/${Ma}`,r={apiKey:t.apiKey,appName:e.name,v:Ln},i=Ua.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Mt(r).slice(1)}`}
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
const Ba={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ha{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Va(e,t,n,r=500,i=600){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Ba),{width:r.toString(),height:i.toString(),top:a,left:o}),u=Ct().toLowerCase();n&&(s=Vr(u)?"_blank":n),Br(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ct()){var t;return Gr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",s),new Ha(null);const d=window.open(t||"",s,c);ar(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Ha(d)}const $a="__/auth/handler",Wa="emulator/auth/handler",Ka=encodeURIComponent("fac");async function qa(e,t,n,r,i,a){ar(e.config.authDomain,e,"auth-domain-config-required"),ar(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ln,eventId:i};if(t instanceof _i){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Lt(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof Si){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];const l=await e._getAppCheckToken(),u=l?`#${Ka}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?hr(e,Wa):`https://${e.authDomain}/${$a}`}
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
 */(e)}?${Mt(s).slice(1)}${u}`}const Ga="webStorageSupport";const Qa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$i,this._completeRedirectFn=Sa,this._overrideRedirectResult=wa}async _openPopup(e,t,n,r){var i;sr(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Va(e,await qa(e,t,n,lr(),r),Ki())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Gi().location.href=e}(await qa(e,t,n,lr(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(sr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Aa(e),n=Gi().gapi;return ar(n,e,"internal-error"),t.open({where:document.body,url:Fa(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ja,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=nr(e,"network-request-failed"),a=Gi().setTimeout((()=>{r(i)}),Da.get());function o(){Gi().clearTimeout(a),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Ea(e);return t.register("authEvent",(t=>{ar(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ga,{type:Ga},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Ga];void 0!==i&&t(!!i),tr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jr()||Hr()||Gr()}};var Ja="@firebase/auth",Ya="0.23.1";
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
class Xa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ar(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Za=Et("authIdTokenMaxAge")||300;let eo=null;var to;to="Browser",Pn(new Vt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;ar(a&&!a.includes(":"),"invalid-api-key",{appName:n.name}),ar(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const s={apiKey:a,authDomain:o,clientPlatform:to,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yr(to)},l=new oi(n,r,i,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Pn(new Vt("auth-internal",(e=>(e=>new Xa(e))(si(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Ja,Ya,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(to)),Mn(Ja,Ya,"esm2017");u=a("bcSyl");
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
Mn("firebase","9.21.0","app");const no=function(e=Dn()){const t=Nn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Nn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(At(n.getOptions(),null!=t?t:{}))return e;tr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Qa,persistence:[aa,Hi,$i]}),r=Et("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Za)return;const r=null==t?void 0:t.token;eo!==r&&(eo=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Ht(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Ht(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const a=_t("auth");return a&&ui(n,`http://${a}`),n}(An({apiKey:"AIzaSyDWySSDrg9HNHnNMoVkC8w72Uwvz71Tw-Q",authDomain:"products-e8e7d.firebaseapp.com",databaseURL:"https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app",projectId:"products-e8e7d",storageBucket:"products-e8e7d.appspot.com",messagingSenderId:"717987455455",appId:"1:717987455455:web:dab8a245da8ddce154646a"}));var ro=()=>{const[e,t]=(0,u.useState)(null);(0,u.useEffect)((()=>{const e=(n=e=>{t(e||null)},Ht(no).onAuthStateChanged(n,r,i));var n,r,i;return()=>{e()}}),[]);return(0,s.jsx)("div",{children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:`Signed In as ${e.email}`}),(0,s.jsx)("button",{onClick:()=>{var e;(e=no,Ht(e).signOut()).then((()=>{console.log("sign out successful")})).catch((e=>console.log(e)))},children:"Logga ut"})]}):(0,s.jsx)("p",{})})};function io({children:e}){const[t,n]=(0,u.useState)([]),[r,i]=(0,u.useState)(0);(0,u.useEffect)((()=>{(async()=>{const e=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"),t=await e.json();if(t){const e=Object.entries(t).map((([e,t])=>({id:e,...t})));n(e)}})()}),[]),(0,u.useEffect)((()=>{const e=t.reduce(((e,t)=>e+parseInt(t.amount)),0);i(e)}),[t]);const[a,o]=(0,u.useState)(!1),l=[{path:"/myaccount",name:"Mitt konto",icon:(0,s.jsx)(y,{})},{path:"/productpage",name:"Produkter",icon:(0,s.jsx)(b,{})},{path:"/cart",name:`Kassa (${r})`,icon:(0,s.jsx)(_,{})},{path:"/login",name:"Logga in",icon:(0,s.jsx)(k,{})},{path:"/createaccount",name:"Skapa konto",icon:(0,s.jsx)(y,{})}];return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{style:{width:a?"200px":"50px"},className:"sidebar",children:[(0,s.jsxs)("div",{className:"top-section",children:[(0,s.jsx)("h1",{style:{display:a?"block":"none"},className:"logo",children:(0,s.jsx)(S,{})}),(0,s.jsx)("p",{style:{display:a?"block":"none"},className:"header",children:(0,s.jsx)(ro,{})}),(0,s.jsx)("div",{style:{marginLeft:a?"50px":"0px"},className:"bars",children:(0,s.jsx)(w,{onClick:()=>o(!a)})})]}),l.map(((e,t)=>(0,s.jsxs)(Ye,{to:e.path,className:"link",activeClassName:"active",children:[(0,s.jsx)("div",{className:"icon",children:e.icon}),(0,s.jsx)("div",{className:"link-text",children:e.name})]},t)))]}),(0,s.jsx)("main",{children:e})]})}u=a("bcSyl");function ao(){const[e,t]=(0,u.useState)(""),[n,r]=(0,u.useState)(""),[i,a]=(0,u.useState)(""),[o,l]=(0,u.useState)("");return(0,s.jsx)("div",{className:"my-account-box",children:(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),zi(no,e,n).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},children:[(0,s.jsx)("input",{type:"text",name:"name",placeholder:"Namn",value:i,onChange:e=>a(e.target.value)}),(0,s.jsx)("input",{type:"email",name:"email",placeholder:"E-mail",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("input",{type:"password",name:"password",placeholder:"Lösenord",value:n,onChange:e=>r(e.target.value)}),(0,s.jsx)("input",{type:"text",name:"address",placeholder:"Adress",value:o,onChange:e=>l(e.target.value)}),(0,s.jsx)("input",{type:"submit",value:"Skapa konto"})]})})}u=a("bcSyl");function oo(){const[e,t]=(0,u.useState)(""),[n,r]=(0,u.useState)("");return(0,s.jsx)("div",{className:"my-account-box",children:(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),ji(no,e,n).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},children:[(0,s.jsx)("input",{type:"text",name:"email",placeholder:"E-mail",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("input",{type:"password",name:"password",placeholder:"Lösenord",value:n,onChange:e=>r(e.target.value)}),(0,s.jsx)("input",{type:"submit",value:"Logga in"})]})})}function so({id:e,name:t,img:n,price:r,stock:i,handleAddToBasket:a}){return console.log("produkt id",e),(0,s.jsxs)("div",{className:"productDisplay",children:[(0,s.jsx)("h1",{children:t}),(0,s.jsx)("img",{src:n,alt:""}),(0,s.jsxs)("h2",{children:["Pris: ",r]}),i>0?(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Antal kvar: ",i]}),(0,s.jsx)("button",{onClick:a,children:"Lägg i kassan"})]}):(0,s.jsx)("p",{children:"Tyvärr slut i lager"})]})}u=a("bcSyl");async function lo(e,t,n,r,i){const a=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"),o=await a.json(),s=o?o[`product${i}`]:null,l=`https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart/product${i}.json`;if(s){const a={img:e,name:t,price:n,amount:s.amount+r,id:i},o={method:"PUT",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8"}},u=await fetch(l,o),c=await u.json();console.log(c)}else{const r={img:e,name:t,price:n,amount:1,id:i},a={method:"PUT",body:JSON.stringify(r),headers:{"Content-type":"application/json; charset=UTF-8"}},o=await fetch(l,a),s=await o.json();console.log(s)}}function uo(){const[e,t]=(0,u.useState)([]);async function n(e,t,n,r,i,a){await lo(e,t,n,r,i),location.reload()}return(0,u.useEffect)((()=>{(async()=>{const e=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/Products.json"),n=await e.json(),r=Object.entries(n).map((([e,t])=>({id:e,...t})));t(r)})()}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"header",children:"Not pirated movies"}),(0,s.jsx)("div",{className:"product-container",children:e.map((e=>(0,s.jsx)(so,{id:e.id,name:e.name,img:e.img,price:e.price,stock:e.stock,handleAddToBasket:()=>{e.stock>0&&n(e.img,e.name,e.price,1,e.id)},disabled:e.stock<=0},e.id)))})]})}u=a("bcSyl");function co(e){return(0,c.GenIcon)({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#FF8A65",points:"24,21.3 12.7,10 26,1.7 38.3,10"}},{tag:"polygon",attr:{fill:"#FFAB91",points:"24,21.3 12.7,10 17,4.7 38.3,10"}},{tag:"path",attr:{fill:"#B39DDB",d:"M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"}},{tag:"path",attr:{fill:"#7E57C2",d:"M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"}}]})(e)}function fo({id:e,img:t,name:n,price:r,stock:i,amount:a}){return(0,s.jsxs)("div",{className:"cart-Display",children:[(0,s.jsx)("img",{src:t,alt:""}),(0,s.jsx)("h2",{children:n}),(0,s.jsx)("p",{children:r}),(0,s.jsx)("p",{children:i}),(0,s.jsx)("p",{children:a})]})}u=a("bcSyl");async function ho(e,t,n,r,i){const a={img:e,name:t,price:n,stock:r,amount:i},o={method:"DELETE",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8"}},s=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart/.json",o);await s.json()}function po(){const[e,t]=(0,u.useState)([]);(0,u.useEffect)((()=>{(async()=>{const e=await fetch("https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"),n=await e.json();if(n){const e=Object.entries(n).map((([e,t])=>({id:e,...t})));t(e)}})()}),[]);const n=e.reduce(((e,t)=>e+parseInt(t.price)*(t.amount||1)),0);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"header",children:"Kassa"}),(0,s.jsxs)("div",{className:"cart-border",children:[e.map((e=>(0,s.jsx)(fo,{id:e.id,name:e.name,img:e.img,price:e.price+" kr",amount:"antal: "+e.amount},e.id))),(0,s.jsxs)("div",{className:"checkout",children:[(0,s.jsx)("h1",{children:"Checkout"}),(0,s.jsxs)("h2",{children:["Totalt pris: ",n," kr"]}),(0,s.jsx)("p",{children:"Förnamn"}),(0,s.jsx)("p",{children:"Efternamn"}),(0,s.jsx)("p",{children:"Adress"}),(0,s.jsx)("button",{onClick:()=>e.map((e=>async function(e,n,r,i,a,o){const s=`https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/Products/product${e}.json`,l=await fetch(s),u=await l.json();if(u){const e=o||1,t=u.stock-e;if(t<0)return void alert(`Det finns inte tillräckligt med ${u.name} i lager för att slutföra köpet`);await fetch(s,{method:"PATCH",body:JSON.stringify({stock:t}),headers:{"Content-type":"application/json"}})}await ho(n,r,i,a,o),t([]),alert("Ditt köp har gått igenom"),location.reload()}(e.id,e.img,e.name,e.price,e.stock,e.amount))),className:"",children:"Genomför köp"}),(0,s.jsx)("button",{onClick:()=>async function(e,n,r,i,a){await ho(e,n,r,i,a),alert("Dina produkter har tagits bort från kassan, gå gärna tillbaka och se om du hittar någon annan vara!"),t([]),location.reload()}((0,s.jsx)(fo,{})),className:"trash",children:(0,s.jsx)(co,{})})]})]})]})}function mo(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"mitt konto"}),(0,s.jsxs)("h2",{children:["Välkommen ",(0,s.jsx)(ro,{})]}),(0,s.jsx)("div",{children:(0,s.jsx)("h1",{children:"Mina köp:"})})]})}a("bcSyl");o(document.querySelector("#root")).render((0,s.jsx)((function(){return(0,s.jsx)(qe,{children:(0,s.jsxs)(io,{children:[(0,s.jsxs)(je,{children:[(0,s.jsx)(Me,{path:"/createaccount",element:(0,s.jsx)(ao,{})}),(0,s.jsx)(Me,{path:"/myaccount",element:(0,s.jsx)(mo,{})}),(0,s.jsx)(Me,{path:"/login",element:(0,s.jsx)(oo,{})})]}),(0,s.jsxs)(je,{children:[(0,s.jsx)(Me,{path:"/productpage",element:(0,s.jsx)(uo,{})}),(0,s.jsx)(Me,{path:"/cart",element:(0,s.jsx)(po,{})})]})]})})}),{}))}();
//# sourceMappingURL=index.a273047e.js.map
