(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function u1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var K={},c1={get exports(){return K},set exports(t){K=t}},Ga={},Nt={},h1={get exports(){return Nt},set exports(t){Nt=t}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=Symbol.for("react.element"),d1=Symbol.for("react.portal"),f1=Symbol.for("react.fragment"),p1=Symbol.for("react.strict_mode"),m1=Symbol.for("react.profiler"),g1=Symbol.for("react.provider"),y1=Symbol.for("react.context"),v1=Symbol.for("react.forward_ref"),w1=Symbol.for("react.suspense"),E1=Symbol.for("react.memo"),_1=Symbol.for("react.lazy"),hf=Symbol.iterator;function S1(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Wm={};function li(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Hm}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=li.prototype;function sh(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Hm}var oh=sh.prototype=new Km;oh.constructor=sh;qm(oh,li.prototype);oh.isPureReactComponent=!0;var df=Array.isArray,Gm=Object.prototype.hasOwnProperty,ah={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,r)&&!Qm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ps,type:t,key:s,ref:o,props:i,_owner:ah.current}}function I1(t,e){return{$$typeof:Ps,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ps}function T1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ff=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?T1(""+t.key):e.toString(36)}function Lo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ps:case d1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jl(o,0):r,df(i)?(n="",t!=null&&(n=t.replace(ff,"$&/")+"/"),Lo(i,e,n,"",function(u){return u})):i!=null&&(lh(i)&&(i=I1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ff,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",df(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+jl(s,a);o+=Lo(s,e,n,l,i)}else if(l=S1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+jl(s,a++),o+=Lo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oo(t,e,n){if(t==null)return t;var r=[],i=0;return Lo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function k1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},$o={transition:null},C1={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:$o,ReactCurrentOwner:ah};j.Children={map:oo,forEach:function(t,e,n){oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oo(t,function(){e++}),e},toArray:function(t){return oo(t,function(e){return e})||[]},only:function(t){if(!lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=li;j.Fragment=f1;j.Profiler=m1;j.PureComponent=sh;j.StrictMode=p1;j.Suspense=w1;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gm.call(e,l)&&!Qm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ps,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:y1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g1,_context:t},t.Consumer=t};j.createElement=Ym;j.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:v1,render:t}};j.isValidElement=lh;j.lazy=function(t){return{$$typeof:_1,_payload:{_status:-1,_result:t},_init:k1}};j.memo=function(t,e){return{$$typeof:E1,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return We.current.useCallback(t,e)};j.useContext=function(t){return We.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return We.current.useDeferredValue(t)};j.useEffect=function(t,e){return We.current.useEffect(t,e)};j.useId=function(){return We.current.useId()};j.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return We.current.useMemo(t,e)};j.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};j.useRef=function(t){return We.current.useRef(t)};j.useState=function(t){return We.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return We.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(h1);const N1=u1(Nt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1=Nt,R1=Symbol.for("react.element"),D1=Symbol.for("react.fragment"),P1=Object.prototype.hasOwnProperty,x1=A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O1={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)P1.call(e,r)&&!O1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:R1,type:t,key:s,ref:o,props:i,_owner:x1.current}}Ga.Fragment=D1;Ga.jsx=Xm;Ga.jsxs=Xm;(function(t){t.exports=Ga})(c1);var Lu={},$u={},L1={get exports(){return $u},set exports(t){$u=t}},ot={},Mu={},$1={get exports(){return Mu},set exports(t){Mu=t}},Jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,V){var b=C.length;C.push(V);e:for(;0<b;){var ue=b-1>>>1,Ee=C[ue];if(0<i(Ee,V))C[ue]=V,C[b]=Ee,b=ue;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var V=C[0],b=C.pop();if(b!==V){C[0]=b;e:for(var ue=0,Ee=C.length,io=Ee>>>1;ue<io;){var Un=2*(ue+1)-1,Bl=C[Un],Vn=Un+1,so=C[Vn];if(0>i(Bl,b))Vn<Ee&&0>i(so,Bl)?(C[ue]=so,C[Vn]=b,ue=Vn):(C[ue]=Bl,C[Un]=b,ue=Un);else if(Vn<Ee&&0>i(so,b))C[ue]=so,C[Vn]=b,ue=Vn;else break e}}return V}function i(C,V){var b=C.sortIndex-V.sortIndex;return b!==0?b:C.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=C)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(C){if(v=!1,m(C),!y)if(n(l)!==null)y=!0,bl(I);else{var V=n(u);V!==null&&zl(E,V.startTime-C)}}function I(C,V){y=!1,v&&(v=!1,p(x),x=-1),g=!0;var b=d;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||C&&!mt());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,d=h.priorityLevel;var Ee=ue(h.expirationTime<=V);V=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var io=!0;else{var Un=n(u);Un!==null&&zl(E,Un.startTime-V),io=!1}return io}finally{h=null,d=b,g=!1}}var k=!1,N=null,x=-1,X=5,z=-1;function mt(){return!(t.unstable_now()-z<X)}function wi(){if(N!==null){var C=t.unstable_now();z=C;var V=!0;try{V=N(!0,C)}finally{V?Ei():(k=!1,N=null)}}else k=!1}var Ei;if(typeof f=="function")Ei=function(){f(wi)};else if(typeof MessageChannel<"u"){var cf=new MessageChannel,l1=cf.port2;cf.port1.onmessage=wi,Ei=function(){l1.postMessage(null)}}else Ei=function(){D(wi,0)};function bl(C){N=C,k||(k=!0,Ei())}function zl(C,V){x=D(function(){C(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,bl(I))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var b=d;d=V;try{return C()}finally{d=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var b=d;d=C;try{return V()}finally{d=b}},t.unstable_scheduleCallback=function(C,V,b){var ue=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ue+b:ue):b=ue,C){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=b+Ee,C={id:c++,callback:V,priorityLevel:C,startTime:b,expirationTime:Ee,sortIndex:-1},b>ue?(C.sortIndex=b,e(u,C),n(l)===null&&C===n(u)&&(v?(p(x),x=-1):v=!0,zl(E,b-ue))):(C.sortIndex=Ee,e(l,C),y||g||(y=!0,bl(I))),C},t.unstable_shouldYield=mt,t.unstable_wrapCallback=function(C){var V=d;return function(){var b=d;d=V;try{return C.apply(this,arguments)}finally{d=b}}}})(Jm);(function(t){t.exports=Jm})($1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=Nt,it=Mu;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eg=new Set,Zi={};function dr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(Zi[t]=e,t=0;t<e.length;t++)eg.add(e[t])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,M1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pf={},mf={};function F1(t){return Fu.call(mf,t)?!0:Fu.call(pf,t)?!1:M1.test(t)?mf[t]=!0:(pf[t]=!0,!1)}function U1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V1(t,e,n,r){if(e===null||typeof e>"u"||U1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var uh=/[\-:]([a-z])/g;function ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uh,ch);Re[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uh,ch);Re[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uh,ch);Re[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function hh(t,e,n,r){var i=Re.hasOwnProperty(e)?Re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V1(e,n,i,r)&&(n=null),r||i===null?F1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),tg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),ph=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),gf=Symbol.iterator;function _i(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Hl;function Di(t){if(Hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+t}var ql=!1;function Wl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Di(t):""}function b1(t){switch(t.tag){case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return t=Wl(t.type,!1),t;case 11:return t=Wl(t.type.render,!1),t;case 1:return t=Wl(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sr:return"Fragment";case _r:return"Portal";case Uu:return"Profiler";case dh:return"StrictMode";case Vu:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ng:return(t.displayName||"Context")+".Consumer";case tg:return(t._context.displayName||"Context")+".Provider";case fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ph:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function z1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function B1(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=B1(t))}function sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ig(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&hh(t,"checked",e,!1)}function ju(t,e){og(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||ea(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pi=Array.isArray;function Lr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(Pi(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function ag(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uo,ug=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function es(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j1=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(t){j1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ui[e]=Ui[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ui.hasOwnProperty(t)&&Ui[t]?(""+e).trim():e+"px"}function hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var H1=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(H1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,$r=null,Mr=null;function _f(t){if(t=Ls(t)){if(typeof Yu!="function")throw Error(_(280));var e=t.stateNode;e&&(e=Za(e),Yu(t.stateNode,t.type,e))}}function dg(t){$r?Mr?Mr.push(t):Mr=[t]:$r=t}function fg(){if($r){var t=$r,e=Mr;if(Mr=$r=null,_f(t),e)for(t=0;t<e.length;t++)_f(e[t])}}function pg(t,e){return t(e)}function mg(){}var Kl=!1;function gg(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return pg(t,e,n)}finally{Kl=!1,($r!==null||Mr!==null)&&(mg(),fg())}}function ts(t,e){var n=t.stateNode;if(n===null)return null;var r=Za(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var Xu=!1;if(Kt)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{Xu=!1}function q1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vi=!1,ta=null,na=!1,Ju=null,W1={onError:function(t){Vi=!0,ta=t}};function K1(t,e,n,r,i,s,o,a,l){Vi=!1,ta=null,q1.apply(W1,arguments)}function G1(t,e,n,r,i,s,o,a,l){if(K1.apply(this,arguments),Vi){if(Vi){var u=ta;Vi=!1,ta=null}else throw Error(_(198));na||(na=!0,Ju=u)}}function fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(t){if(fr(t)!==t)throw Error(_(188))}function Q1(t){var e=t.alternate;if(!e){if(e=fr(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sf(i),t;if(s===r)return Sf(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function vg(t){return t=Q1(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=it.unstable_scheduleCallback,If=it.unstable_cancelCallback,Y1=it.unstable_shouldYield,X1=it.unstable_requestPaint,ce=it.unstable_now,J1=it.unstable_getCurrentPriorityLevel,gh=it.unstable_ImmediatePriority,_g=it.unstable_UserBlockingPriority,ra=it.unstable_NormalPriority,Z1=it.unstable_LowPriority,Sg=it.unstable_IdlePriority,Qa=null,Dt=null;function eE(t){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:rE,tE=Math.log,nE=Math.LN2;function rE(t){return t>>>=0,t===0?32:31-(tE(t)/nE|0)|0}var co=64,ho=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ia(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xi(a):(s&=o,s!==0&&(r=xi(s)))}else o=n&~i,o!==0?r=xi(o):s!==0&&(r=xi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function iE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=iE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ig(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function Gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function oE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function Tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,vh,Cg,Ng,Ag,ec=!1,fo=[],gn=null,yn=null,vn=null,ns=new Map,rs=new Map,un=[],aE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(t,e){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(e.pointerId)}}function Ii(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ls(e),e!==null&&vh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lE(t,e,n,r,i){switch(e){case"focusin":return gn=Ii(gn,t,e,n,r,i),!0;case"dragenter":return yn=Ii(yn,t,e,n,r,i),!0;case"mouseover":return vn=Ii(vn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ns.set(s,Ii(ns.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,rs.set(s,Ii(rs.get(s)||null,t,e,n,r,i)),!0}return!1}function Rg(t){var e=jn(t.target);if(e!==null){var n=fr(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Ag(t.priority,function(){Cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qu=r,n.target.dispatchEvent(r),Qu=null}else return e=Ls(n),e!==null&&vh(e),t.blockedOn=n,!1;e.shift()}return!0}function kf(t,e,n){Mo(t)&&n.delete(e)}function uE(){ec=!1,gn!==null&&Mo(gn)&&(gn=null),yn!==null&&Mo(yn)&&(yn=null),vn!==null&&Mo(vn)&&(vn=null),ns.forEach(kf),rs.forEach(kf)}function Ti(t,e){t.blockedOn===e&&(t.blockedOn=null,ec||(ec=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,uE)))}function is(t){function e(i){return Ti(i,t)}if(0<fo.length){Ti(fo[0],t);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gn!==null&&Ti(gn,t),yn!==null&&Ti(yn,t),vn!==null&&Ti(vn,t),ns.forEach(e),rs.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&un.shift()}var Fr=nn.ReactCurrentBatchConfig,sa=!0;function cE(t,e,n,r){var i=Q,s=Fr.transition;Fr.transition=null;try{Q=1,wh(t,e,n,r)}finally{Q=i,Fr.transition=s}}function hE(t,e,n,r){var i=Q,s=Fr.transition;Fr.transition=null;try{Q=4,wh(t,e,n,r)}finally{Q=i,Fr.transition=s}}function wh(t,e,n,r){if(sa){var i=tc(t,e,n,r);if(i===null)iu(t,e,r,oa,n),Tf(t,r);else if(lE(i,t,e,n,r))r.stopPropagation();else if(Tf(t,r),e&4&&-1<aE.indexOf(t)){for(;i!==null;){var s=Ls(i);if(s!==null&&kg(s),s=tc(t,e,n,r),s===null&&iu(t,e,r,oa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else iu(t,e,r,null,n)}}var oa=null;function tc(t,e,n,r){if(oa=null,t=mh(r),t=jn(t),t!==null)if(e=fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oa=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J1()){case gh:return 1;case _g:return 4;case ra:case Z1:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var pn=null,Eh=null,Fo=null;function Pg(){if(Fo)return Fo;var t,e=Eh,n=e.length,r,i="value"in pn?pn.value:pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fo=i.slice(t,1<r?1-r:void 0)}function Uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function Cf(){return!1}function at(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:Cf,this.isPropagationStopped=Cf,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=at(ui),Os=oe({},ui,{view:0,detail:0}),dE=at(Os),Ql,Yl,ki,Ya=oe({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(Ql=t.screenX-ki.screenX,Yl=t.screenY-ki.screenY):Yl=Ql=0,ki=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),Nf=at(Ya),fE=oe({},Ya,{dataTransfer:0}),pE=at(fE),mE=oe({},Os,{relatedTarget:0}),Xl=at(mE),gE=oe({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),yE=at(gE),vE=oe({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wE=at(vE),EE=oe({},ui,{data:0}),Af=at(EE),_E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IE[t])?!!e[t]:!1}function Sh(){return TE}var kE=oe({},Os,{key:function(t){if(t.key){var e=_E[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(t){return t.type==="keypress"?Uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CE=at(kE),NE=oe({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=at(NE),AE=oe({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),RE=at(AE),DE=oe({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),PE=at(DE),xE=oe({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OE=at(xE),LE=[9,13,27,32],Ih=Kt&&"CompositionEvent"in window,bi=null;Kt&&"documentMode"in document&&(bi=document.documentMode);var $E=Kt&&"TextEvent"in window&&!bi,xg=Kt&&(!Ih||bi&&8<bi&&11>=bi),Df=String.fromCharCode(32),Pf=!1;function Og(t,e){switch(t){case"keyup":return LE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function ME(t,e){switch(t){case"compositionend":return Lg(e);case"keypress":return e.which!==32?null:(Pf=!0,Df);case"textInput":return t=e.data,t===Df&&Pf?null:t;default:return null}}function FE(t,e){if(Ir)return t==="compositionend"||!Ih&&Og(t,e)?(t=Pg(),Fo=Eh=pn=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var UE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UE[t.type]:e==="textarea"}function $g(t,e,n,r){dg(r),e=aa(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,ss=null;function VE(t){Wg(t,0)}function Xa(t){var e=Cr(t);if(sg(e))return t}function bE(t,e){if(t==="change")return e}var Mg=!1;if(Kt){var Jl;if(Kt){var Zl="oninput"in document;if(!Zl){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Zl=typeof Of.oninput=="function"}Jl=Zl}else Jl=!1;Mg=Jl&&(!document.documentMode||9<document.documentMode)}function Lf(){zi&&(zi.detachEvent("onpropertychange",Fg),ss=zi=null)}function Fg(t){if(t.propertyName==="value"&&Xa(ss)){var e=[];$g(e,ss,t,mh(t)),gg(VE,e)}}function zE(t,e,n){t==="focusin"?(Lf(),zi=e,ss=n,zi.attachEvent("onpropertychange",Fg)):t==="focusout"&&Lf()}function BE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xa(ss)}function jE(t,e){if(t==="click")return Xa(e)}function HE(t,e){if(t==="input"||t==="change")return Xa(e)}function qE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:qE;function os(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fu.call(e,i)||!It(t[i],e[i]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,e){var n=$f(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vg(){for(var t=window,e=ea();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ea(t.document)}return e}function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WE(t){var e=Vg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(r!==null&&Th(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Mf(n,s);var o=Mf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KE=Kt&&"documentMode"in document&&11>=document.documentMode,Tr=null,nc=null,Bi=null,rc=!1;function Ff(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rc||Tr==null||Tr!==ea(r)||(r=Tr,"selectionStart"in r&&Th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&os(Bi,r)||(Bi=r,r=aa(nc,"onSelect"),0<r.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},eu={},bg={};Kt&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Ja(t){if(eu[t])return eu[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bg)return eu[t]=e[n];return t}var zg=Ja("animationend"),Bg=Ja("animationiteration"),jg=Ja("animationstart"),Hg=Ja("transitionend"),qg=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,e){qg.set(t,e),dr(e,[t])}for(var tu=0;tu<Uf.length;tu++){var nu=Uf[tu],GE=nu.toLowerCase(),QE=nu[0].toUpperCase()+nu.slice(1);On(GE,"on"+QE)}On(zg,"onAnimationEnd");On(Bg,"onAnimationIteration");On(jg,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Hg,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function Vf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,G1(r,e,void 0,t),t.currentTarget=null}function Wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vf(i,a,u),s=l}}}if(na)throw t=Ju,na=!1,Ju=null,t}function J(t,e){var n=e[lc];n===void 0&&(n=e[lc]=new Set);var r=t+"__bubble";n.has(r)||(Kg(e,t,2,!1),n.add(r))}function ru(t,e,n){var r=0;e&&(r|=4),Kg(n,t,r,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function as(t){if(!t[go]){t[go]=!0,eg.forEach(function(n){n!=="selectionchange"&&(YE.has(n)||ru(n,!1,t),ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,ru("selectionchange",!1,e))}}function Kg(t,e,n,r){switch(Dg(e)){case 1:var i=cE;break;case 4:i=hE;break;default:i=wh}n=i.bind(null,e,n,t),i=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function iu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=jn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gg(function(){var u=s,c=mh(n),h=[];e:{var d=qg.get(t);if(d!==void 0){var g=_h,y=t;switch(t){case"keypress":if(Uo(n)===0)break e;case"keydown":case"keyup":g=CE;break;case"focusin":y="focus",g=Xl;break;case"focusout":y="blur",g=Xl;break;case"beforeblur":case"afterblur":g=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=pE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=RE;break;case zg:case Bg:case jg:g=yE;break;case Hg:g=PE;break;case"scroll":g=dE;break;case"wheel":g=OE;break;case"copy":case"cut":case"paste":g=wE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Rf}var v=(e&4)!==0,D=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=ts(f,p),E!=null&&v.push(ls(f,E,m)))),D)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Qu&&(y=n.relatedTarget||n.fromElement)&&(jn(y)||y[Gt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?jn(y):null,y!==null&&(D=fr(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Nf,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Rf,E="onPointerLeave",p="onPointerEnter",f="pointer"),D=g==null?d:Cr(g),m=y==null?d:Cr(y),d=new v(E,f+"leave",g,n,c),d.target=D,d.relatedTarget=m,E=null,jn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=D,E=v),D=E,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=vr(m))f++;for(m=0,E=p;E;E=vr(E))m++;for(;0<f-m;)v=vr(v),f--;for(;0<m-f;)p=vr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=vr(v),p=vr(p)}v=null}else v=null;g!==null&&bf(h,d,g,v,!1),y!==null&&D!==null&&bf(h,D,y,v,!0)}}e:{if(d=u?Cr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=bE;else if(xf(d))if(Mg)I=HE;else{I=BE;var k=zE}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=jE);if(I&&(I=I(t,u))){$g(h,I,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Hu(d,"number",d.value)}switch(k=u?Cr(u):window,t){case"focusin":(xf(k)||k.contentEditable==="true")&&(Tr=k,nc=u,Bi=null);break;case"focusout":Bi=nc=Tr=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,Ff(h,n,c);break;case"selectionchange":if(KE)break;case"keydown":case"keyup":Ff(h,n,c)}var N;if(Ih)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ir?Og(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(xg&&n.locale!=="ko"&&(Ir||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ir&&(N=Pg()):(pn=c,Eh="value"in pn?pn.value:pn.textContent,Ir=!0)),k=aa(u,x),0<k.length&&(x=new Af(x,t,null,n,c),h.push({event:x,listeners:k}),N?x.data=N:(N=Lg(n),N!==null&&(x.data=N)))),(N=$E?ME(t,n):FE(t,n))&&(u=aa(u,"onBeforeInput"),0<u.length&&(c=new Af("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Wg(h,e)})}function ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ts(t,n),s!=null&&r.unshift(ls(t,s,i)),s=ts(t,e),s!=null&&r.push(ls(t,s,i))),t=t.return}return r}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ts(n,s),l!=null&&o.unshift(ls(n,l,a))):i||(l=ts(n,s),l!=null&&o.push(ls(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XE=/\r\n?/g,JE=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(XE,`
`).replace(JE,"")}function yo(t,e,n){if(e=zf(e),zf(t)!==e&&n)throw Error(_(425))}function la(){}var ic=null,sc=null;function oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,ZE=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,e_=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(t_)}:ac;function t_(t){setTimeout(function(){throw t})}function su(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),is(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);is(e)}function wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ci=Math.random().toString(36).slice(2),At="__reactFiber$"+ci,us="__reactProps$"+ci,Gt="__reactContainer$"+ci,lc="__reactEvents$"+ci,n_="__reactListeners$"+ci,r_="__reactHandles$"+ci;function jn(t){var e=t[At];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[At]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jf(t);t!==null;){if(n=t[At])return n;t=jf(t)}return e}t=n,n=t.parentNode}return null}function Ls(t){return t=t[At]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function Za(t){return t[us]||null}var uc=[],Nr=-1;function Ln(t){return{current:t}}function ee(t){0>Nr||(t.current=uc[Nr],uc[Nr]=null,Nr--)}function Y(t,e){Nr++,uc[Nr]=t.current,t.current=e}var Rn={},be=Ln(Rn),Ye=Ln(!1),nr=Rn;function Wr(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(t){return t=t.childContextTypes,t!=null}function ua(){ee(Ye),ee(be)}function Hf(t,e,n){if(be.current!==Rn)throw Error(_(168));Y(be,e),Y(Ye,n)}function Gg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,z1(t)||"Unknown",i));return oe({},n,r)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,nr=be.current,Y(be,t),Y(Ye,Ye.current),!0}function qf(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=Gg(t,e,nr),r.__reactInternalMemoizedMergedChildContext=t,ee(Ye),ee(be),Y(be,t)):ee(Ye),Y(Ye,n)}var Ut=null,el=!1,ou=!1;function Qg(t){Ut===null?Ut=[t]:Ut.push(t)}function i_(t){el=!0,Qg(t)}function $n(){if(!ou&&Ut!==null){ou=!0;var t=0,e=Q;try{var n=Ut;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,el=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),Eg(gh,$n),i}finally{Q=e,ou=!1}}return null}var Ar=[],Rr=0,ha=null,da=0,lt=[],ut=0,rr=null,bt=1,zt="";function bn(t,e){Ar[Rr++]=da,Ar[Rr++]=ha,ha=t,da=e}function Yg(t,e,n){lt[ut++]=bt,lt[ut++]=zt,lt[ut++]=rr,rr=t;var r=bt;t=zt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-_t(e)+i|n<<i|r,zt=s+t}else bt=1<<s|n<<i|r,zt=t}function kh(t){t.return!==null&&(bn(t,1),Yg(t,1,0))}function Ch(t){for(;t===ha;)ha=Ar[--Rr],Ar[Rr]=null,da=Ar[--Rr],Ar[Rr]=null;for(;t===rr;)rr=lt[--ut],lt[ut]=null,zt=lt[--ut],lt[ut]=null,bt=lt[--ut],lt[ut]=null}var nt=null,tt=null,ne=!1,wt=null;function Xg(t,e){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rr!==null?{id:bt,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(ne){var e=tt;if(e){var n=e;if(!Wf(t,e)){if(cc(t))throw Error(_(418));e=wn(n.nextSibling);var r=nt;e&&Wf(t,e)?Xg(r,n):(t.flags=t.flags&-4097|2,ne=!1,nt=t)}}else{if(cc(t))throw Error(_(418));t.flags=t.flags&-4097|2,ne=!1,nt=t}}}function Kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function vo(t){if(t!==nt)return!1;if(!ne)return Kf(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oc(t.type,t.memoizedProps)),e&&(e=tt)){if(cc(t))throw Jg(),Error(_(418));for(;e;)Xg(t,e),e=wn(e.nextSibling)}if(Kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?wn(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=tt;t;)t=wn(t.nextSibling)}function Kr(){tt=nt=null,ne=!1}function Nh(t){wt===null?wt=[t]:wt.push(t)}var s_=nn.ReactCurrentBatchConfig;function yt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fa=Ln(null),pa=null,Dr=null,Ah=null;function Rh(){Ah=Dr=pa=null}function Dh(t){var e=fa.current;ee(fa),t._currentValue=e}function dc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ur(t,e){pa=t,Ah=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qe=!0),t.firstContext=null)}function ft(t){var e=t._currentValue;if(Ah!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(pa===null)throw Error(_(308));Dr=t,pa.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var Hn=null;function Ph(t){Hn===null?Hn=[t]:Hn.push(t)}function Zg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qt(t,r)}function Qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ey(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function En(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qt(t,n)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}function Gf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ma(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=oe({},h,d);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);sr|=o,t.lanes=o,t.memoizedState=h}}function Qf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var ty=new Zm.Component().refs;function fc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tl={isMounted:function(t){return(t=t._reactInternals)?fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Sn(t),s=qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(St(e,t,i,r),Vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Sn(t),s=qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(St(e,t,i,r),Vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=Sn(t),i=qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=En(t,i,r),e!==null&&(St(e,t,r,n),Vo(e,t,r))}};function Yf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!os(n,r)||!os(i,s):!0}function ny(t,e,n){var r=!1,i=Rn,s=e.contextType;return typeof s=="object"&&s!==null?s=ft(s):(i=Xe(e)?nr:be.current,r=e.contextTypes,s=(r=r!=null)?Wr(t,i):Rn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tl.enqueueReplaceState(e,e.state,null)}function pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ty,xh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ft(s):(s=Xe(e)?nr:be.current,i.context=Wr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tl.enqueueReplaceState(i,i.state,null),ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ty&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jf(t){var e=t._init;return e(t._payload)}function ry(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=In(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,E){return f===null||f.tag!==6?(f=fu(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,E){var I=m.type;return I===Sr?c(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===an&&Jf(I)===f.type)?(E=i(f,m.props),E.ref=Ci(p,f,m),E.return=p,E):(E=qo(m.type,m.key,m.props,null,p.mode,E),E.ref=Ci(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=pu(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,E,I){return f===null||f.tag!==7?(f=Xn(m,p.mode,E,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ao:return m=qo(f.type,f.key,f.props,null,p.mode,m),m.ref=Ci(p,null,f),m.return=p,m;case _r:return f=pu(f,p.mode,m),f.return=p,f;case an:var E=f._init;return h(p,E(f._payload),m)}if(Pi(f)||_i(f))return f=Xn(f,p.mode,m,null),f.return=p,f;wo(p,f)}return null}function d(p,f,m,E){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:return m.key===I?l(p,f,m,E):null;case _r:return m.key===I?u(p,f,m,E):null;case an:return I=m._init,d(p,f,I(m._payload),E)}if(Pi(m)||_i(m))return I!==null?null:c(p,f,m,E,null);wo(p,m)}return null}function g(p,f,m,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(f,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ao:return p=p.get(E.key===null?m:E.key)||null,l(f,p,E,I);case _r:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,I);case an:var k=E._init;return g(p,f,m,k(E._payload),I)}if(Pi(E)||_i(E))return p=p.get(m)||null,c(f,p,E,I,null);wo(f,E)}return null}function y(p,f,m,E){for(var I=null,k=null,N=f,x=f=0,X=null;N!==null&&x<m.length;x++){N.index>x?(X=N,N=null):X=N.sibling;var z=d(p,N,m[x],E);if(z===null){N===null&&(N=X);break}t&&N&&z.alternate===null&&e(p,N),f=s(z,f,x),k===null?I=z:k.sibling=z,k=z,N=X}if(x===m.length)return n(p,N),ne&&bn(p,x),I;if(N===null){for(;x<m.length;x++)N=h(p,m[x],E),N!==null&&(f=s(N,f,x),k===null?I=N:k.sibling=N,k=N);return ne&&bn(p,x),I}for(N=r(p,N);x<m.length;x++)X=g(N,p,x,m[x],E),X!==null&&(t&&X.alternate!==null&&N.delete(X.key===null?x:X.key),f=s(X,f,x),k===null?I=X:k.sibling=X,k=X);return t&&N.forEach(function(mt){return e(p,mt)}),ne&&bn(p,x),I}function v(p,f,m,E){var I=_i(m);if(typeof I!="function")throw Error(_(150));if(m=I.call(m),m==null)throw Error(_(151));for(var k=I=null,N=f,x=f=0,X=null,z=m.next();N!==null&&!z.done;x++,z=m.next()){N.index>x?(X=N,N=null):X=N.sibling;var mt=d(p,N,z.value,E);if(mt===null){N===null&&(N=X);break}t&&N&&mt.alternate===null&&e(p,N),f=s(mt,f,x),k===null?I=mt:k.sibling=mt,k=mt,N=X}if(z.done)return n(p,N),ne&&bn(p,x),I;if(N===null){for(;!z.done;x++,z=m.next())z=h(p,z.value,E),z!==null&&(f=s(z,f,x),k===null?I=z:k.sibling=z,k=z);return ne&&bn(p,x),I}for(N=r(p,N);!z.done;x++,z=m.next())z=g(N,p,x,z.value,E),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?x:z.key),f=s(z,f,x),k===null?I=z:k.sibling=z,k=z);return t&&N.forEach(function(wi){return e(p,wi)}),ne&&bn(p,x),I}function D(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Sr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:e:{for(var I=m.key,k=f;k!==null;){if(k.key===I){if(I=m.type,I===Sr){if(k.tag===7){n(p,k.sibling),f=i(k,m.props.children),f.return=p,p=f;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===an&&Jf(I)===k.type){n(p,k.sibling),f=i(k,m.props),f.ref=Ci(p,k,m),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}m.type===Sr?(f=Xn(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=qo(m.type,m.key,m.props,null,p.mode,E),E.ref=Ci(p,f,m),E.return=p,p=E)}return o(p);case _r:e:{for(k=m.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=pu(m,p.mode,E),f.return=p,p=f}return o(p);case an:return k=m._init,D(p,f,k(m._payload),E)}if(Pi(m))return y(p,f,m,E);if(_i(m))return v(p,f,m,E);wo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=fu(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return D}var Gr=ry(!0),iy=ry(!1),$s={},Pt=Ln($s),cs=Ln($s),hs=Ln($s);function qn(t){if(t===$s)throw Error(_(174));return t}function Oh(t,e){switch(Y(hs,e),Y(cs,t),Y(Pt,$s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}ee(Pt),Y(Pt,e)}function Qr(){ee(Pt),ee(cs),ee(hs)}function sy(t){qn(hs.current);var e=qn(Pt.current),n=Wu(e,t.type);e!==n&&(Y(cs,t),Y(Pt,n))}function Lh(t){cs.current===t&&(ee(Pt),ee(cs))}var ie=Ln(0);function ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var au=[];function $h(){for(var t=0;t<au.length;t++)au[t]._workInProgressVersionPrimary=null;au.length=0}var bo=nn.ReactCurrentDispatcher,lu=nn.ReactCurrentBatchConfig,ir=0,se=null,me=null,Se=null,ya=!1,ji=!1,ds=0,o_=0;function Pe(){throw Error(_(321))}function Mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function Fh(t,e,n,r,i,s){if(ir=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bo.current=t===null||t.memoizedState===null?c_:h_,t=n(r,i),ji){s=0;do{if(ji=!1,ds=0,25<=s)throw Error(_(301));s+=1,Se=me=null,e.updateQueue=null,bo.current=d_,t=n(r,i)}while(ji)}if(bo.current=va,e=me!==null&&me.next!==null,ir=0,Se=me=se=null,ya=!1,e)throw Error(_(300));return t}function Uh(){var t=ds!==0;return ds=0,t}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?se.memoizedState=Se=t:Se=Se.next=t,Se}function pt(){if(me===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Se===null?se.memoizedState:Se.next;if(e!==null)Se=e,me=t;else{if(t===null)throw Error(_(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Se===null?se.memoizedState=Se=t:Se=Se.next=t}return Se}function fs(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=pt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ir&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,se.lanes|=c,sr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,It(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cu(t){var e=pt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||(Qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oy(){}function ay(t,e){var n=se,r=pt(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,Vh(cy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,ps(9,uy.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(_(349));ir&30||ly(n,e,i)}return i}function ly(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uy(t,e,n,r){e.value=n,e.getSnapshot=r,hy(e)&&dy(t)}function cy(t,e,n){return n(function(){hy(e)&&dy(t)})}function hy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function dy(t){var e=Qt(t,1);e!==null&&St(e,t,1,-1)}function Zf(t){var e=Ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:t},e.queue=t,t=t.dispatch=u_.bind(null,se,t),[e.memoizedState,t]}function ps(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fy(){return pt().memoizedState}function zo(t,e,n,r){var i=Ct();se.flags|=t,i.memoizedState=ps(1|e,n,void 0,r===void 0?null:r)}function nl(t,e,n,r){var i=pt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&Mh(r,o.deps)){i.memoizedState=ps(e,n,s,r);return}}se.flags|=t,i.memoizedState=ps(1|e,n,s,r)}function ep(t,e){return zo(8390656,8,t,e)}function Vh(t,e){return nl(2048,8,t,e)}function py(t,e){return nl(4,2,t,e)}function my(t,e){return nl(4,4,t,e)}function gy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yy(t,e,n){return n=n!=null?n.concat([t]):null,nl(4,4,gy.bind(null,e,t),n)}function bh(){}function vy(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wy(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ey(t,e,n){return ir&21?(It(n,e)||(n=Ig(),se.lanes|=n,sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n)}function a_(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=lu.transition;lu.transition={};try{t(!1),e()}finally{Q=n,lu.transition=r}}function _y(){return pt().memoizedState}function l_(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sy(t))Iy(e,n);else if(n=Zg(t,e,n,r),n!==null){var i=qe();St(n,t,r,i),Ty(n,e,r)}}function u_(t,e,n){var r=Sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sy(t))Iy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,It(a,o)){var l=e.interleaved;l===null?(i.next=i,Ph(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Zg(t,e,i,r),n!==null&&(i=qe(),St(n,t,r,i),Ty(n,e,r))}}function Sy(t){var e=t.alternate;return t===se||e!==null&&e===se}function Iy(t,e){ji=ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ty(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}var va={readContext:ft,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},c_={readContext:ft,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:ft,useEffect:ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zo(4194308,4,gy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return zo(4,2,t,e)},useMemo:function(t,e){var n=Ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=l_.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:Zf,useDebugValue:bh,useDeferredValue:function(t){return Ct().memoizedState=t},useTransition:function(){var t=Zf(!1),e=t[0];return t=a_.bind(null,t[1]),Ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=Ct();if(ne){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),Ie===null)throw Error(_(349));ir&30||ly(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ep(cy.bind(null,r,s,t),[t]),r.flags|=2048,ps(9,uy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ct(),e=Ie.identifierPrefix;if(ne){var n=zt,r=bt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ds++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},h_={readContext:ft,useCallback:vy,useContext:ft,useEffect:Vh,useImperativeHandle:yy,useInsertionEffect:py,useLayoutEffect:my,useMemo:wy,useReducer:uu,useRef:fy,useState:function(){return uu(fs)},useDebugValue:bh,useDeferredValue:function(t){var e=pt();return Ey(e,me.memoizedState,t)},useTransition:function(){var t=uu(fs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:_y,unstable_isNewReconciler:!1},d_={readContext:ft,useCallback:vy,useContext:ft,useEffect:Vh,useImperativeHandle:yy,useInsertionEffect:py,useLayoutEffect:my,useMemo:wy,useReducer:cu,useRef:fy,useState:function(){return cu(fs)},useDebugValue:bh,useDeferredValue:function(t){var e=pt();return me===null?e.memoizedState=t:Ey(e,me.memoizedState,t)},useTransition:function(){var t=cu(fs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:_y,unstable_isNewReconciler:!1};function Yr(t,e){try{var n="",r=e;do n+=b1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var f_=typeof WeakMap=="function"?WeakMap:Map;function ky(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ea||(Ea=!0,kc=r),mc(t,e)},n}function Cy(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mc(t,e),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new f_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=N_.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,En(n,e,1))),n.lanes|=1),t)}var p_=nn.ReactCurrentOwner,Qe=!1;function je(t,e,n,r){e.child=t===null?iy(e,null,n,r):Gr(e,t.child,n,r)}function ip(t,e,n,r,i){n=n.render;var s=e.ref;return Ur(e,i),r=Fh(t,e,n,r,s,i),n=Uh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yt(t,e,i)):(ne&&n&&kh(e),e.flags|=1,je(t,e,r,i),e.child)}function sp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ny(t,e,s,r,i)):(t=qo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:os,n(o,r)&&t.ref===e.ref)return Yt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ny(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(os(s,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qe=!0);else return e.lanes=t.lanes,Yt(t,e,i)}return gc(t,e,n,r,i)}function Ay(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(xr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(xr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(xr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(xr,et),et|=r;return je(t,e,i,n),e.child}function Ry(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gc(t,e,n,r,i){var s=Xe(n)?nr:be.current;return s=Wr(e,s),Ur(e,i),n=Fh(t,e,n,r,s,i),r=Uh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yt(t,e,i)):(ne&&r&&kh(e),e.flags|=1,je(t,e,n,i),e.child)}function op(t,e,n,r,i){if(Xe(n)){var s=!0;ca(e)}else s=!1;if(Ur(e,i),e.stateNode===null)Bo(t,e),ny(e,n,r),pc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Xe(n)?nr:be.current,u=Wr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Xf(e,o,r,u),ln=!1;var d=e.memoizedState;o.state=d,ma(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ye.current||ln?(typeof c=="function"&&(fc(e,n,c,r),l=e.memoizedState),(a=ln||Yf(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ey(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=Xe(n)?nr:be.current,l=Wr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Xf(e,o,r,l),ln=!1,d=e.memoizedState,o.state=d,ma(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ye.current||ln?(typeof g=="function"&&(fc(e,n,g,r),y=e.memoizedState),(u=ln||Yf(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return yc(t,e,n,r,s,i)}function yc(t,e,n,r,i,s){Ry(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qf(e,n,!1),Yt(t,e,s);r=e.stateNode,p_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gr(e,t.child,null,s),e.child=Gr(e,null,a,s)):je(t,e,a,s),e.memoizedState=r.state,i&&qf(e,n,!0),e.child}function Dy(t){var e=t.stateNode;e.pendingContext?Hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hf(t,e.context,!1),Oh(t,e.containerInfo)}function ap(t,e,n,r,i){return Kr(),Nh(i),e.flags|=256,je(t,e,n,r),e.child}var vc={dehydrated:null,treeContext:null,retryLane:0};function wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Py(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(ie,i&1),t===null)return hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sl(o,r,0,null),t=Xn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wc(n),e.memoizedState=vc,t):zh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return m_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=In(a,s):(s=Xn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vc,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zh(t,e){return e=sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Eo(t,e,n,r){return r!==null&&Nh(r),Gr(e,t.child,null,n),t=zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function m_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hu(Error(_(422))),Eo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sl({mode:"visible",children:r.children},i,0,null),s=Xn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gr(e,t.child,null,o),e.child.memoizedState=wc(o),e.memoizedState=vc,s);if(!(e.mode&1))return Eo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=hu(s,r,void 0),Eo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qe||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qt(t,i),St(r,t,i,-1))}return Kh(),r=hu(Error(_(421))),Eo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=A_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=wn(i.nextSibling),nt=e,ne=!0,wt=null,t!==null&&(lt[ut++]=bt,lt[ut++]=zt,lt[ut++]=rr,bt=t.id,zt=t.overflow,rr=e),e=zh(e,r.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dc(t.return,e,n)}function du(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ga(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),du(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ga(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}du(e,!0,n,null,s);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function g_(t,e,n){switch(e.tag){case 3:Dy(e),Kr();break;case 5:sy(e);break;case 1:Xe(e.type)&&ca(e);break;case 4:Oh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(fa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Py(t,e,n):(Y(ie,ie.current&1),t=Yt(t,e,n),t!==null?t.sibling:null);Y(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Ay(t,e,n)}return Yt(t,e,n)}var Oy,Ec,Ly,$y;Oy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ec=function(){};Ly=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qn(Pt.current);var s=null;switch(n){case"input":i=Bu(t,i),r=Bu(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=qu(t,i),r=qu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=la)}Ku(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$y=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ni(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function y_(t,e,n){var r=e.pendingProps;switch(Ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Xe(e.type)&&ua(),xe(e),null;case 3:return r=e.stateNode,Qr(),ee(Ye),ee(be),$h(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(Ac(wt),wt=null))),Ec(t,e),xe(e),null;case 5:Lh(e);var i=qn(hs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ly(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return xe(e),null}if(t=qn(Pt.current),vo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[At]=e,r[us]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)J(Oi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":yf(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":wf(r,s),J("invalid",r)}Ku(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,a,t),i=["children",""+a]):Zi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":lo(r),vf(r,s,!0);break;case"textarea":lo(r),Ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=la)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[At]=e,t[us]=r,Oy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gu(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)J(Oi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":yf(t,r),i=Bu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),J("invalid",t);break;case"textarea":wf(t,r),i=qu(t,r),J("invalid",t);break;default:i=r}Ku(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&es(t,l):typeof l=="number"&&es(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&hh(t,s,l,o))}switch(n){case"input":lo(t),vf(t,r,!1);break;case"textarea":lo(t),Ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Lr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=la)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)$y(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=qn(hs.current),qn(Pt.current),vo(e)){if(r=e.stateNode,n=e.memoizedProps,r[At]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:yo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=e,e.stateNode=r}return xe(e),null;case 13:if(ee(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&tt!==null&&e.mode&1&&!(e.flags&128))Jg(),Kr(),e.flags|=98560,s=!1;else if(s=vo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[At]=e}else Kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else wt!==null&&(Ac(wt),wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ge===0&&(ge=3):Kh())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return Qr(),Ec(t,e),t===null&&as(e.stateNode.containerInfo),xe(e),null;case 10:return Dh(e.type._context),xe(e),null;case 17:return Xe(e.type)&&ua(),xe(e),null;case 19:if(ee(ie),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ni(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ga(t),o!==null){for(e.flags|=128,Ni(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>Xr&&(e.flags|=128,r=!0,Ni(s,!1),e.lanes=4194304)}else{if(!r)if(t=ga(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ni(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return xe(e),null}else 2*ce()-s.renderingStartTime>Xr&&n!==1073741824&&(e.flags|=128,r=!0,Ni(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ie.current,Y(ie,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return Wh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function v_(t,e){switch(Ch(e),e.tag){case 1:return Xe(e.type)&&ua(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qr(),ee(Ye),ee(be),$h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(ee(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));Kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(ie),null;case 4:return Qr(),null;case 10:return Dh(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var _o=!1,$e=!1,w_=typeof WeakSet=="function"?WeakSet:Set,T=null;function Pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function _c(t,e,n){try{n()}catch(r){ae(t,e,r)}}var up=!1;function E_(t,e){if(ic=sa,t=Vg(),Th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:t,selectionRange:n},sa=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:yt(e.type,v),D);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(E){ae(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=up,up=!1,y}function Hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_c(e,n,s)}i=i.next}while(i!==r)}}function rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function My(t){var e=t.alternate;e!==null&&(t.alternate=null,My(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[At],delete e[us],delete e[lc],delete e[n_],delete e[r_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fy(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ic(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=la));else if(r!==4&&(t=t.child,t!==null))for(Ic(t,e,n),t=t.sibling;t!==null;)Ic(t,e,n),t=t.sibling}function Tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}var ke=null,vt=!1;function sn(t,e,n){for(n=n.child;n!==null;)Uy(t,e,n),n=n.sibling}function Uy(t,e,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:$e||Pr(n,e);case 6:var r=ke,i=vt;ke=null,sn(t,e,n),ke=r,vt=i,ke!==null&&(vt?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(vt?(t=ke,n=n.stateNode,t.nodeType===8?su(t.parentNode,n):t.nodeType===1&&su(t,n),is(t)):su(ke,n.stateNode));break;case 4:r=ke,i=vt,ke=n.stateNode.containerInfo,vt=!0,sn(t,e,n),ke=r,vt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_c(n,e,o),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!$e&&(Pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,sn(t,e,n),$e=r):sn(t,e,n);break;default:sn(t,e,n)}}function hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new w_),e.forEach(function(r){var i=R_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,vt=!1;break e;case 3:ke=a.stateNode.containerInfo,vt=!0;break e;case 4:ke=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(ke===null)throw Error(_(160));Uy(s,o,i),ke=null,vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vy(e,t),e=e.sibling}function Vy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),kt(t),r&4){try{Hi(3,t,t.return),rl(3,t)}catch(v){ae(t,t.return,v)}try{Hi(5,t,t.return)}catch(v){ae(t,t.return,v)}}break;case 1:gt(e,t),kt(t),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(gt(e,t),kt(t),r&512&&n!==null&&Pr(n,n.return),t.flags&32){var i=t.stateNode;try{es(i,"")}catch(v){ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&og(i,s),Gu(a,o);var u=Gu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?hg(i,h):c==="dangerouslySetInnerHTML"?ug(i,h):c==="children"?es(i,h):hh(i,c,h,u)}switch(a){case"input":ju(i,s);break;case"textarea":ag(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Lr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Lr(i,!!s.multiple,s.defaultValue,!0):Lr(i,!!s.multiple,s.multiple?[]:"",!1))}i[us]=s}catch(v){ae(t,t.return,v)}}break;case 6:if(gt(e,t),kt(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ae(t,t.return,v)}}break;case 3:if(gt(e,t),kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{is(e.containerInfo)}catch(v){ae(t,t.return,v)}break;case 4:gt(e,t),kt(t);break;case 13:gt(e,t),kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Hh=ce())),r&4&&hp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($e=(u=$e)||c,gt(e,t),$e=u):gt(e,t),kt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(T=t,c=t.child;c!==null;){for(h=T=c;T!==null;){switch(d=T,g=d.child,d.tag){case 0:case 11:case 14:case 15:Hi(4,d,d.return);break;case 1:Pr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Pr(d,d.return);break;case 22:if(d.memoizedState!==null){fp(h);continue}}g!==null?(g.return=d,T=g):fp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cg("display",o))}catch(v){ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(e,t),kt(t),r&4&&hp(t);break;case 21:break;default:gt(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fy(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(es(i,""),r.flags&=-33);var s=cp(t);Tc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=cp(t);Ic(t,a,o);break;default:throw Error(_(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function __(t,e,n){T=t,by(t)}function by(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_o;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=_o;var u=$e;if(_o=o,($e=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?pp(i):l!==null?(l.return=o,T=l):pp(i);for(;s!==null;)T=s,by(s),s=s.sibling;T=i,_o=a,$e=u}dp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):dp(t)}}function dp(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&is(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}$e||e.flags&512&&Sc(e)}catch(d){ae(e,e.return,d)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function fp(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function pp(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rl(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{Sc(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{Sc(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var S_=Math.ceil,wa=nn.ReactCurrentDispatcher,Bh=nn.ReactCurrentOwner,dt=nn.ReactCurrentBatchConfig,q=0,Ie=null,fe=null,Ne=0,et=0,xr=Ln(0),ge=0,ms=null,sr=0,il=0,jh=0,qi=null,Ge=null,Hh=0,Xr=1/0,Ft=null,Ea=!1,kc=null,_n=null,So=!1,mn=null,_a=0,Wi=0,Cc=null,jo=-1,Ho=0;function qe(){return q&6?ce():jo!==-1?jo:jo=ce()}function Sn(t){return t.mode&1?q&2&&Ne!==0?Ne&-Ne:s_.transition!==null?(Ho===0&&(Ho=Ig()),Ho):(t=Q,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function St(t,e,n,r){if(50<Wi)throw Wi=0,Cc=null,Error(_(185));xs(t,n,r),(!(q&2)||t!==Ie)&&(t===Ie&&(!(q&2)&&(il|=n),ge===4&&cn(t,Ne)),Je(t,r),n===1&&q===0&&!(e.mode&1)&&(Xr=ce()+500,el&&$n()))}function Je(t,e){var n=t.callbackNode;sE(t,e);var r=ia(t,t===Ie?Ne:0);if(r===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?i_(mp.bind(null,t)):Qg(mp.bind(null,t)),e_(function(){!(q&6)&&$n()}),n=null;else{switch(Tg(r)){case 1:n=gh;break;case 4:n=_g;break;case 16:n=ra;break;case 536870912:n=Sg;break;default:n=ra}n=Gy(n,zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zy(t,e){if(jo=-1,Ho=0,q&6)throw Error(_(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=ia(t,t===Ie?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sa(t,r);else{e=r;var i=q;q|=2;var s=jy();(Ie!==t||Ne!==e)&&(Ft=null,Xr=ce()+500,Yn(t,e));do try{k_();break}catch(a){By(t,a)}while(1);Rh(),wa.current=s,q=i,fe!==null?e=0:(Ie=null,Ne=0,e=ge)}if(e!==0){if(e===2&&(i=Zu(t),i!==0&&(r=i,e=Nc(t,i))),e===1)throw n=ms,Yn(t,0),cn(t,r),Je(t,ce()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!I_(i)&&(e=Sa(t,r),e===2&&(s=Zu(t),s!==0&&(r=s,e=Nc(t,s))),e===1))throw n=ms,Yn(t,0),cn(t,r),Je(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:zn(t,Ge,Ft);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=Hh+500-ce(),10<e)){if(ia(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ac(zn.bind(null,t,Ge,Ft),e);break}zn(t,Ge,Ft);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S_(r/1960))-r,10<r){t.timeoutHandle=ac(zn.bind(null,t,Ge,Ft),r);break}zn(t,Ge,Ft);break;case 5:zn(t,Ge,Ft);break;default:throw Error(_(329))}}}return Je(t,ce()),t.callbackNode===n?zy.bind(null,t):null}function Nc(t,e){var n=qi;return t.current.memoizedState.isDehydrated&&(Yn(t,e).flags|=256),t=Sa(t,e),t!==2&&(e=Ge,Ge=n,e!==null&&Ac(e)),t}function Ac(t){Ge===null?Ge=t:Ge.push.apply(Ge,t)}function I_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~jh,e&=~il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function mp(t){if(q&6)throw Error(_(327));Vr();var e=ia(t,0);if(!(e&1))return Je(t,ce()),null;var n=Sa(t,e);if(t.tag!==0&&n===2){var r=Zu(t);r!==0&&(e=r,n=Nc(t,r))}if(n===1)throw n=ms,Yn(t,0),cn(t,e),Je(t,ce()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,Ge,Ft),Je(t,ce()),null}function qh(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Xr=ce()+500,el&&$n())}}function or(t){mn!==null&&mn.tag===0&&!(q&6)&&Vr();var e=q;q|=1;var n=dt.transition,r=Q;try{if(dt.transition=null,Q=1,t)return t()}finally{Q=r,dt.transition=n,q=e,!(q&6)&&$n()}}function Wh(){et=xr.current,ee(xr)}function Yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZE(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Ch(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ua();break;case 3:Qr(),ee(Ye),ee(be),$h();break;case 5:Lh(r);break;case 4:Qr();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Dh(r.type._context);break;case 22:case 23:Wh()}n=n.return}if(Ie=t,fe=t=In(t.current,null),Ne=et=e,ge=0,ms=null,jh=il=sr=0,Ge=qi=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hn=null}return t}function By(t,e){do{var n=fe;try{if(Rh(),bo.current=va,ya){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ya=!1}if(ir=0,Se=me=se=null,ji=!1,ds=0,Bh.current=null,n===null||n.return===null){ge=1,ms=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=np(o);if(g!==null){g.flags&=-257,rp(g,o,a,s,e),g.mode&1&&tp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){tp(s,u,e),Kh();break e}l=Error(_(426))}}else if(ne&&a.mode&1){var D=np(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),rp(D,o,a,s,e),Nh(Yr(l,a));break e}}s=l=Yr(l,a),ge!==4&&(ge=2),qi===null?qi=[s]:qi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ky(s,l,e);Gf(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_n===null||!_n.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Cy(s,a,e);Gf(s,E);break e}}s=s.return}while(s!==null)}qy(n)}catch(I){e=I,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function jy(){var t=wa.current;return wa.current=va,t===null?va:t}function Kh(){(ge===0||ge===3||ge===2)&&(ge=4),Ie===null||!(sr&268435455)&&!(il&268435455)||cn(Ie,Ne)}function Sa(t,e){var n=q;q|=2;var r=jy();(Ie!==t||Ne!==e)&&(Ft=null,Yn(t,e));do try{T_();break}catch(i){By(t,i)}while(1);if(Rh(),q=n,wa.current=r,fe!==null)throw Error(_(261));return Ie=null,Ne=0,ge}function T_(){for(;fe!==null;)Hy(fe)}function k_(){for(;fe!==null&&!Y1();)Hy(fe)}function Hy(t){var e=Ky(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?qy(t):fe=e,Bh.current=null}function qy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=v_(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}else if(n=y_(n,e,et),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function zn(t,e,n){var r=Q,i=dt.transition;try{dt.transition=null,Q=1,C_(t,e,n,r)}finally{dt.transition=i,Q=r}return null}function C_(t,e,n,r){do Vr();while(mn!==null);if(q&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oE(t,s),t===Ie&&(fe=Ie=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,Gy(ra,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dt.transition,dt.transition=null;var o=Q;Q=1;var a=q;q|=4,Bh.current=null,E_(t,n),Vy(n,t),WE(sc),sa=!!ic,sc=ic=null,t.current=n,__(n),X1(),q=a,Q=o,dt.transition=s}else t.current=n;if(So&&(So=!1,mn=t,_a=i),s=t.pendingLanes,s===0&&(_n=null),eE(n.stateNode),Je(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ea)throw Ea=!1,t=kc,kc=null,t;return _a&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===Cc?Wi++:(Wi=0,Cc=t):Wi=0,$n(),null}function Vr(){if(mn!==null){var t=Tg(_a),e=dt.transition,n=Q;try{if(dt.transition=null,Q=16>t?16:t,mn===null)var r=!1;else{if(t=mn,mn=null,_a=0,q&6)throw Error(_(331));var i=q;for(q|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Hi(8,c,s)}var h=c.child;if(h!==null)h.return=c,T=h;else for(;T!==null;){c=T;var d=c.sibling,g=c.return;if(My(c),c===u){T=null;break}if(d!==null){d.return=g,T=d;break}T=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(I){ae(a,a.return,I)}if(a===o){T=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,T=E;break e}T=a.return}}if(q=i,$n(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Qa,t)}catch{}r=!0}return r}finally{Q=n,dt.transition=e}}return!1}function gp(t,e,n){e=Yr(n,e),e=ky(t,e,1),t=En(t,e,1),e=qe(),t!==null&&(xs(t,1,e),Je(t,e))}function ae(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){t=Yr(n,t),t=Cy(e,t,1),e=En(e,t,1),t=qe(),e!==null&&(xs(e,1,t),Je(e,t));break}}e=e.return}}function N_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>ce()-Hh?Yn(t,0):jh|=n),Je(t,e)}function Wy(t,e){e===0&&(t.mode&1?(e=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):e=1);var n=qe();t=Qt(t,e),t!==null&&(xs(t,e,n),Je(t,n))}function A_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wy(t,n)}function R_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),Wy(t,n)}var Ky;Ky=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ye.current)Qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qe=!1,g_(t,e,n);Qe=!!(t.flags&131072)}else Qe=!1,ne&&e.flags&1048576&&Yg(e,da,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bo(t,e),t=e.pendingProps;var i=Wr(e,be.current);Ur(e,n),i=Fh(null,e,r,t,i,n);var s=Uh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(r)?(s=!0,ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xh(e),i.updater=tl,e.stateNode=i,i._reactInternals=e,pc(e,r,t,n),e=yc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&kh(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=P_(r),t=yt(r,t),i){case 0:e=gc(null,e,r,t,n);break e;case 1:e=op(null,e,r,t,n);break e;case 11:e=ip(null,e,r,t,n);break e;case 14:e=sp(null,e,r,yt(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),gc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),op(t,e,r,i,n);case 3:e:{if(Dy(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ey(t,e),ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yr(Error(_(423)),e),e=ap(t,e,r,n,i);break e}else if(r!==i){i=Yr(Error(_(424)),e),e=ap(t,e,r,n,i);break e}else for(tt=wn(e.stateNode.containerInfo.firstChild),nt=e,ne=!0,wt=null,n=iy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===i){e=Yt(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return sy(e),t===null&&hc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,oc(r,i)?o=null:s!==null&&oc(r,s)&&(e.flags|=32),Ry(t,e),je(t,e,o,n),e.child;case 6:return t===null&&hc(e),null;case 13:return Py(t,e,n);case 4:return Oh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gr(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),ip(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(fa,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!Ye.current){e=Yt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ur(e,n),i=ft(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),sp(t,e,r,i,n);case 15:return Ny(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Bo(t,e),e.tag=1,Xe(r)?(t=!0,ca(e)):t=!1,Ur(e,n),ny(e,r,i),pc(e,r,i,n),yc(null,e,r,!0,t,n);case 19:return xy(t,e,n);case 22:return Ay(t,e,n)}throw Error(_(156,e.tag))};function Gy(t,e){return Eg(t,e)}function D_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(t,e,n,r){return new D_(t,e,n,r)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P_(t){if(typeof t=="function")return Gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fh)return 11;if(t===ph)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sr:return Xn(n.children,i,s,e);case dh:o=8,i|=8;break;case Uu:return t=ht(12,n,e,i|2),t.elementType=Uu,t.lanes=s,t;case Vu:return t=ht(13,n,e,i),t.elementType=Vu,t.lanes=s,t;case bu:return t=ht(19,n,e,i),t.elementType=bu,t.lanes=s,t;case rg:return sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tg:o=10;break e;case ng:o=9;break e;case fh:o=11;break e;case ph:o=14;break e;case an:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xn(t,e,n,r){return t=ht(7,t,r,e),t.lanes=n,t}function sl(t,e,n,r){return t=ht(22,t,r,e),t.elementType=rg,t.lanes=n,t.stateNode={isHidden:!1},t}function fu(t,e,n){return t=ht(6,t,null,e),t.lanes=n,t}function pu(t,e,n){return e=ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qh(t,e,n,r,i,s,o,a,l){return t=new x_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(s),t}function O_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qy(t){if(!t)return Rn;t=t._reactInternals;e:{if(fr(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(Xe(n))return Gg(t,n,e)}return e}function Yy(t,e,n,r,i,s,o,a,l){return t=Qh(n,r,!0,t,i,s,o,a,l),t.context=Qy(null),n=t.current,r=qe(),i=Sn(n),s=qt(r,i),s.callback=e??null,En(n,s,i),t.current.lanes=i,xs(t,i,r),Je(t,r),t}function ol(t,e,n,r){var i=e.current,s=qe(),o=Sn(i);return n=Qy(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=En(i,e,o),t!==null&&(St(t,i,o,s),Vo(t,i,o)),o}function Ia(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yh(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function L_(){return null}var Xy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xh(t){this._internalRoot=t}al.prototype.render=Xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));ol(t,e,null,null)};al.prototype.unmount=Xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){ol(null,t,null,null)}),e[Gt]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&Rg(t)}};function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function $_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ia(o);s.call(u)}}var o=Yy(e,r,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[Gt]=o.current,as(t.nodeType===8?t.parentNode:t),or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ia(l);a.call(u)}}var l=Qh(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[Gt]=l.current,as(t.nodeType===8?t.parentNode:t),or(function(){ol(e,l,n,r)}),l}function ul(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ia(o);a.call(l)}}ol(e,o,t,i)}else o=$_(n,e,t,i,r);return Ia(o)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xi(e.pendingLanes);n!==0&&(yh(e,n|1),Je(e,ce()),!(q&6)&&(Xr=ce()+500,$n()))}break;case 13:or(function(){var r=Qt(t,1);if(r!==null){var i=qe();St(r,t,1,i)}}),Yh(t,1)}};vh=function(t){if(t.tag===13){var e=Qt(t,134217728);if(e!==null){var n=qe();St(e,t,134217728,n)}Yh(t,134217728)}};Cg=function(t){if(t.tag===13){var e=Sn(t),n=Qt(t,e);if(n!==null){var r=qe();St(n,t,e,r)}Yh(t,e)}};Ng=function(){return Q};Ag=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};Yu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Za(r);if(!i)throw Error(_(90));sg(r),ju(r,i)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&Lr(t,!!n.multiple,e,!1)}};pg=qh;mg=or;var M_={usingClientEntryPoint:!1,Events:[Ls,Cr,Za,dg,fg,qh]},Ai={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F_={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Qa=Io.inject(F_),Dt=Io}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M_;ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(e))throw Error(_(200));return O_(t,e,null,n)};ot.createRoot=function(t,e){if(!Jh(t))throw Error(_(299));var n=!1,r="",i=Xy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qh(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,as(t.nodeType===8?t.parentNode:t),new Xh(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return or(t)};ot.hydrate=function(t,e,n){if(!ll(e))throw Error(_(200));return ul(null,t,e,!0,n)};ot.hydrateRoot=function(t,e,n){if(!Jh(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Xy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yy(e,null,t,1,n??null,i,!1,s,o),t[Gt]=e.current,as(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new al(e)};ot.render=function(t,e,n){if(!ll(e))throw Error(_(200));return ul(null,t,e,!1,n)};ot.unmountComponentAtNode=function(t){if(!ll(t))throw Error(_(40));return t._reactRootContainer?(or(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};ot.unstable_batchedUpdates=qh;ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ll(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return ul(t,e,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ot})(L1);var wp=$u;Lu.createRoot=wp.createRoot,Lu.hydrateRoot=wp.hydrateRoot;/**
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
 *//**
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
 */const Jy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},U_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new V_;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class V_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b_=function(t){const e=Jy(t);return Zy.encodeByteArray(e,!0)},Ta=function(t){return b_(t).replace(/\./g,"")},ev=function(t){try{return Zy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function z_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const B_=()=>z_().__FIREBASE_DEFAULTS__,j_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},H_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ev(t[1]);return e&&JSON.parse(e)},Zh=()=>{try{return B_()||j_()||H_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tv=t=>{var e,n;return(n=(e=Zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q_=t=>{const e=tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},W_=()=>{var t;return(t=Zh())===null||t===void 0?void 0:t.config},nv=t=>{var e;return(e=Zh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class K_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function G_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Y_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function X_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function eS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const tS="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tS,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rn(i,a,r)}}function nS(t,e){return t.replace(rS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rS=/\{\$([^}]+)}/g;function iS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ep(s)&&Ep(o)){if(!ka(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ep(t){return t!==null&&typeof t=="object"}/**
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
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sS(t,e){const n=new oS(t,e);return n.subscribe.bind(n)}class oS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mu),i.error===void 0&&(i.error=mu),i.complete===void 0&&(i.complete=mu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mu(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class lS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new K_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cS(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uS(t){return t===Bn?void 0:t}function cS(t){return t.instantiationMode==="EAGER"}/**
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
 */class hS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const dS={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},fS=W.INFO,pS={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},mS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ed{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const gS=(t,e)=>e.some(n=>t instanceof n);let _p,Sp;function yS(){return _p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vS(){return Sp||(Sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rv=new WeakMap,Rc=new WeakMap,iv=new WeakMap,gu=new WeakMap,td=new WeakMap;function wS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rv.set(n,t)}).catch(()=>{}),td.set(e,t),e}function ES(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _S(t){Dc=t(Dc)}function SS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yu(this),e,...n);return iv.set(r,e.sort?e.sort():[e]),Tn(r)}:vS().includes(t)?function(...e){return t.apply(yu(this),e),Tn(rv.get(this))}:function(...e){return Tn(t.apply(yu(this),e))}}function IS(t){return typeof t=="function"?SS(t):(t instanceof IDBTransaction&&ES(t),gS(t,yS())?new Proxy(t,Dc):t)}function Tn(t){if(t instanceof IDBRequest)return wS(t);if(gu.has(t))return gu.get(t);const e=IS(t);return e!==t&&(gu.set(t,e),td.set(e,t)),e}const yu=t=>td.get(t);function TS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const kS=["get","getKey","getAll","getAllKeys","count"],CS=["put","add","delete","clear"],vu=new Map;function Ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vu.get(e))return vu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vu.set(e,s),s}_S(t=>({...t,get:(e,n,r)=>Ip(e,n)||t.get(e,n,r),has:(e,n)=>!!Ip(e,n)||t.has(e,n)}));/**
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
 */class NS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",Tp="0.9.8";/**
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
 */const lr=new ed("@firebase/app"),RS="@firebase/app-compat",DS="@firebase/analytics-compat",PS="@firebase/analytics",xS="@firebase/app-check-compat",OS="@firebase/app-check",LS="@firebase/auth",$S="@firebase/auth-compat",MS="@firebase/database",FS="@firebase/database-compat",US="@firebase/functions",VS="@firebase/functions-compat",bS="@firebase/installations",zS="@firebase/installations-compat",BS="@firebase/messaging",jS="@firebase/messaging-compat",HS="@firebase/performance",qS="@firebase/performance-compat",WS="@firebase/remote-config",KS="@firebase/remote-config-compat",GS="@firebase/storage",QS="@firebase/storage-compat",YS="@firebase/firestore",XS="@firebase/firestore-compat",JS="firebase",ZS="9.20.0";/**
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
 */const xc="[DEFAULT]",eI={[Pc]:"fire-core",[RS]:"fire-core-compat",[PS]:"fire-analytics",[DS]:"fire-analytics-compat",[OS]:"fire-app-check",[xS]:"fire-app-check-compat",[LS]:"fire-auth",[$S]:"fire-auth-compat",[MS]:"fire-rtdb",[FS]:"fire-rtdb-compat",[US]:"fire-fn",[VS]:"fire-fn-compat",[bS]:"fire-iid",[zS]:"fire-iid-compat",[BS]:"fire-fcm",[jS]:"fire-fcm-compat",[HS]:"fire-perf",[qS]:"fire-perf-compat",[WS]:"fire-rc",[KS]:"fire-rc-compat",[GS]:"fire-gcs",[QS]:"fire-gcs-compat",[YS]:"fire-fst",[XS]:"fire-fst-compat","fire-js":"fire-js",[JS]:"fire-js-all"};/**
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
 */const Ca=new Map,Oc=new Map;function tI(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jr(t){const e=t.name;if(Oc.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of Ca.values())tI(n,t);return!0}function nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new Ms("app","Firebase",nI);/**
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
 */class rI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=ZS;function sv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=W_()),!n)throw kn.create("no-options");const s=Ca.get(i);if(s){if(ka(n,s.options)&&ka(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const o=new hS(i);for(const l of Oc.values())o.addComponent(l);const a=new rI(n,r,o);return Ca.set(i,a),a}function ov(t=xc){const e=Ca.get(t);if(!e&&t===xc)return sv();if(!e)throw kn.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let i=(r=eI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}Jr(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iI="firebase-heartbeat-database",sI=1,gs="firebase-heartbeat-store";let wu=null;function av(){return wu||(wu=TS(iI,sI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),wu}async function oI(t){try{return(await av()).transaction(gs).objectStore(gs).get(lv(t))}catch(e){if(e instanceof rn)lr.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function kp(t,e){try{const r=(await av()).transaction(gs,"readwrite");return await r.objectStore(gs).put(e,lv(t)),r.done}catch(n){if(n instanceof rn)lr.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function lv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aI=1024,lI=30*24*60*60*1e3;class uI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cp(),{heartbeatsToSend:n,unsentEntries:r}=cI(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cp(){return new Date().toISOString().substring(0,10)}function cI(t,e=aI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Np(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Np(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?eS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Np(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dI(t){Jr(new ar("platform-logger",e=>new NS(e),"PRIVATE")),Jr(new ar("heartbeat",e=>new uI(e),"PRIVATE")),Cn(Pc,Tp,t),Cn(Pc,Tp,"esm2017"),Cn("fire-js","")}dI("");var fI="firebase",pI="9.20.0";/**
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
 */Cn(fI,pI,"app");var mI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,rd=rd||{},M=mI||self;function Na(){}function cl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Us(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gI(t){return Object.prototype.hasOwnProperty.call(t,Eu)&&t[Eu]||(t[Eu]=++yI)}var Eu="closure_uid_"+(1e9*Math.random()>>>0),yI=0;function vI(t,e,n){return t.call.apply(t.bind,arguments)}function wI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ue=vI:Ue=wI,Ue.apply(null,arguments)}function To(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Mn(){this.s=this.s,this.o=this.o}var EI=0;Mn.prototype.s=!1;Mn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),EI!=0)&&gI(this)};Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function id(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ap(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var _I=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",Na,e),M.removeEventListener("test",Na,e)}catch{}return t}();function Aa(t){return/^[\s\xa0]*$/.test(t)}var Rp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _u(t,e){return t<e?-1:t>e?1:0}function hl(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return hl().indexOf(t)!=-1}function sd(t){return sd[" "](t),t}sd[" "]=Na;function SI(t){var e=kI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var II=Rt("Opera"),Zr=Rt("Trident")||Rt("MSIE"),cv=Rt("Edge"),Lc=cv||Zr,hv=Rt("Gecko")&&!(hl().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),TI=hl().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function dv(){var t=M.document;return t?t.documentMode:void 0}var Ra;e:{var Su="",Iu=function(){var t=hl();if(hv)return/rv:([^\);]+)(\)|;)/.exec(t);if(cv)return/Edge\/([\d\.]+)/.exec(t);if(Zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(TI)return/WebKit\/(\S+)/.exec(t);if(II)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Iu&&(Su=Iu?Iu[1]:""),Zr){var Tu=dv();if(Tu!=null&&Tu>parseFloat(Su)){Ra=String(Tu);break e}}Ra=Su}var kI={};function CI(){return SI(function(){let t=0;const e=Rp(String(Ra)).split("."),n=Rp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=_u(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||_u(i[2].length==0,s[2].length==0)||_u(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var $c;if(M.document&&Zr){var Dp=dv();$c=Dp||parseInt(Ra,10)||void 0}else $c=void 0;var NI=$c;function ys(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hv){e:{try{sd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ys.X.h.call(this)}}De(ys,Ve);var AI={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vs="closure_listenable_"+(1e6*Math.random()|0),RI=0;function DI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++RI,this.ba=this.ea=!1}function dl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function od(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function fv(t){const e={};for(const n in t)e[n]=t[n];return e}const Pp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Pp.length;s++)n=Pp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fl(t){this.src=t,this.g={},this.h=0}fl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Fc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new DI(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Mc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=uv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var ad="closure_lm_"+(1e6*Math.random()|0),ku={};function mv(t,e,n,r,i){if(r&&r.once)return yv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mv(t,e[s],n,r,i);return null}return n=cd(n),t&&t[Vs]?t.N(e,n,Us(r)?!!r.capture:!!r,i):gv(t,e,n,!1,r,i)}function gv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Us(i)?!!i.capture:!!i,a=ud(t);if(a||(t[ad]=a=new fl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=PI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_I||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PI(){function t(n){return e.call(t.src,t.listener,n)}const e=xI;return t}function yv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yv(t,e[s],n,r,i);return null}return n=cd(n),t&&t[Vs]?t.O(e,n,Us(r)?!!r.capture:!!r,i):gv(t,e,n,!0,r,i)}function vv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vv(t,e[s],n,r,i);else r=Us(r)?!!r.capture:!!r,n=cd(n),t&&t[Vs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Fc(s,n,r,i),-1<n&&(dl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ud(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fc(e,n,r,i)),(n=-1<t?e[t]:null)&&ld(n))}function ld(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Vs])Mc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ud(e))?(Mc(n,t),n.h==0&&(n.src=null,e[ad]=null)):dl(t)}}}function wv(t){return t in ku?ku[t]:ku[t]="on"+t}function xI(t,e){if(t.ba)t=!0;else{e=new ys(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ld(t),t=n.call(r,e)}return t}function ud(t){return t=t[ad],t instanceof fl?t:null}var Cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function cd(t){return typeof t=="function"?t:(t[Cu]||(t[Cu]=function(e){return t.handleEvent(e)}),t[Cu])}function Te(){Mn.call(this),this.i=new fl(this),this.P=this,this.I=null}De(Te,Mn);Te.prototype[Vs]=!0;Te.prototype.removeEventListener=function(t,e,n,r){vv(this,t,e,n,r)};function Ae(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var i=e;e=new Ve(r,t),pv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ko(o,r,!0,e)&&i}if(o=e.g=t,i=ko(o,r,!0,e)&&i,i=ko(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ko(o,r,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dl(n[r]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Te.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ko(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Mc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var hd=M.JSON.stringify;function OI(){var t=Sv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LI{constructor(){this.h=this.g=null}add(e,n){const r=Ev.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ev=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $I,t=>t.reset());class $I{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MI(t){M.setTimeout(()=>{throw t},0)}function _v(t,e){Uc||FI(),Vc||(Uc(),Vc=!0),Sv.add(t,e)}var Uc;function FI(){var t=M.Promise.resolve(void 0);Uc=function(){t.then(UI)}}var Vc=!1,Sv=new LI;function UI(){for(var t;t=OI();){try{t.h.call(t.g)}catch(n){MI(n)}var e=Ev;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vc=!1}function pl(t,e){Te.call(this),this.h=t||1,this.g=e||M,this.j=Ue(this.lb,this),this.l=Date.now()}De(pl,Te);R=pl.prototype;R.ca=!1;R.R=null;R.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(dd(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}R.M=function(){pl.X.M.call(this),dd(this),delete this.g};function fd(t,e,n){if(typeof t=="function")n&&(t=Ue(t,n));else if(t&&typeof t.handleEvent=="function")t=Ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function Iv(t){t.g=fd(()=>{t.g=null,t.i&&(t.i=!1,Iv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VI extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Iv(this)}M(){super.M(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(t){Mn.call(this),this.h=t,this.g={}}De(vs,Mn);var xp=[];function Tv(t,e,n,r){Array.isArray(n)||(n&&(xp[0]=n.toString()),n=xp);for(var i=0;i<n.length;i++){var s=mv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kv(t){od(t.g,function(e,n){this.g.hasOwnProperty(n)&&ld(e)},t),t.g={}}vs.prototype.M=function(){vs.X.M.call(this),kv(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ml(){this.g=!0}ml.prototype.Aa=function(){this.g=!1};function bI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Or(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jI(t,n)+(r?" "+r:"")})}function BI(t,e){t.info(function(){return"TIMEOUT: "+e})}ml.prototype.info=function(){};function jI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hd(n)}catch{return e}}var pr={},Op=null;function gl(){return Op=Op||new Te}pr.Pa="serverreachability";function Cv(t){Ve.call(this,pr.Pa,t)}De(Cv,Ve);function ws(t){const e=gl();Ae(e,new Cv(e))}pr.STAT_EVENT="statevent";function Nv(t,e){Ve.call(this,pr.STAT_EVENT,t),this.stat=e}De(Nv,Ve);function He(t){const e=gl();Ae(e,new Nv(e,t))}pr.Qa="timingevent";function Av(t,e){Ve.call(this,pr.Qa,t),this.size=e}De(Av,Ve);function bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var yl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Rv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function pd(){}pd.prototype.h=null;function Lp(t){return t.h||(t.h=t.i())}function Dv(){}var zs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function md(){Ve.call(this,"d")}De(md,Ve);function gd(){Ve.call(this,"c")}De(gd,Ve);var bc;function vl(){}De(vl,pd);vl.prototype.g=function(){return new XMLHttpRequest};vl.prototype.i=function(){return{}};bc=new vl;function Bs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new vs(this),this.O=HI,t=Lc?125:void 0,this.T=new pl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Pv}function Pv(){this.i=null,this.g="",this.h=!1}var HI=45e3,zc={},Da={};R=Bs.prototype;R.setTimeout=function(t){this.O=t};function Bc(t,e,n){t.K=1,t.v=El(Xt(e)),t.s=n,t.P=!0,xv(t,null)}function xv(t,e){t.F=Date.now(),js(t),t.A=Xt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),bv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Pv,t.g=a0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new VI(Ue(t.La,t,t.g),t.N)),Tv(t.S,t.g,"readystatechange",t.ib),e=t.H?fv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ws(),bI(t.j,t.u,t.A,t.m,t.U,t.s)}R.ib=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.La(t)};R.La=function(t){try{if(t==this.g)e:{const c=Bt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Lc||this.g&&(this.h.h||this.g.fa()||Up(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ws(3):ws(2)),wl(this);var n=this.g.aa();this.Y=n;t:if(Ov(this)){var r=Up(this.g);t="";var i=r.length,s=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wn(this),Ki(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zI(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Aa(a)){var u=a;break t}}u=null}if(n=u)Or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jc(this,n);else{this.i=!1,this.o=3,He(12),Wn(this),Ki(this);break e}}this.P?(Lv(this,c,o),Lc&&this.i&&c==3&&(Tv(this.S,this.T,"tick",this.hb),this.T.start())):(Or(this.j,this.m,o,null),jc(this,o)),c==4&&Wn(this),this.i&&!this.I&&(c==4?r0(this.l,this):(this.i=!1,js(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),Wn(this),Ki(this)}}}catch{}finally{}};function Ov(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Lv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=qI(t,n),i==Da){e==4&&(t.o=4,He(14),r=!1),Or(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zc){t.o=4,He(15),Or(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Or(t.j,t.m,i,null),jc(t,i);Ov(t)&&i!=Da&&i!=zc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Id(e),e.K=!0,He(11))):(Or(t.j,t.m,n,"[Invalid Chunked Response]"),Wn(t),Ki(t))}R.hb=function(){if(this.g){var t=Bt(this.g),e=this.g.fa();this.C<e.length&&(wl(this),Lv(this,t,e),this.i&&t!=4&&js(this))}};function qI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Da:(n=Number(e.substring(n,r)),isNaN(n)?zc:(r+=1,r+n>e.length?Da:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,Wn(this)};function js(t){t.V=Date.now()+t.O,$v(t,t.O)}function $v(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bs(Ue(t.gb,t),e)}function wl(t){t.B&&(M.clearTimeout(t.B),t.B=null)}R.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(BI(this.j,this.A),this.K!=2&&(ws(),He(17)),Wn(this),this.o=2,Ki(this)):$v(this,this.V-t)};function Ki(t){t.l.G==0||t.I||r0(t.l,t)}function Wn(t){wl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,dd(t.T),kv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function jc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hc(n.h,t))){if(!t.J&&Hc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Oa(n),Il(n);else break e;Sd(n),He(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=bs(Ue(n.cb,n),6e3));if(1>=jv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Kn(n,11)}else if((t.J||n.g==t)&&Oa(n),!Aa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(yd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=o0(r,r.H?r.ka:null,r.V),o.J){Hv(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(wl(a),js(a)),r.g=o}else t0(r);0<n.i.length&&Tl(n)}else u[0]!="stop"&&u[0]!="close"||Kn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Kn(n,7):_d(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ws(4)}catch{}}function WI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Mv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KI(t),r=WI(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Fv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Jn){this.h=e!==void 0?e:t.h,Pa(this,t.j),this.s=t.s,this.g=t.g,xa(this,t.m),this.l=t.l,e=t.i;var n=new Es;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$p(this,n),this.o=t.o}else t&&(n=String(t).match(Fv))?(this.h=!!e,Pa(this,n[1]||"",!0),this.s=Li(n[2]||""),this.g=Li(n[3]||"",!0),xa(this,n[4]),this.l=Li(n[5]||"",!0),$p(this,n[6]||"",!0),this.o=Li(n[7]||"")):(this.h=!!e,this.i=new Es(null,this.h))}Jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push($i(e,Mp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($i(e,Mp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($i(n,n.charAt(0)=="/"?XI:YI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$i(n,ZI)),t.join("")};function Xt(t){return new Jn(t)}function Pa(t,e,n){t.j=n?Li(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $p(t,e,n){e instanceof Es?(t.i=e,eT(t.i,t.h)):(n||(e=$i(e,JI)),t.i=new Es(e,t.h))}function re(t,e,n){t.i.set(e,n)}function El(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Li(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $i(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mp=/[#\/\?@]/g,YI=/[#\?:]/g,XI=/[#\?]/g,JI=/[#\?@]/g,ZI=/#/g;function Es(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new Map,t.h=0,t.i&&GI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Es.prototype;R.add=function(t,e){Fn(this),this.i=null,t=di(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uv(t,e){Fn(t),e=di(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vv(t,e){return Fn(t),e=di(t,e),t.g.has(e)}R.forEach=function(t,e){Fn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.oa=function(){Fn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.W=function(t){Fn(this);let e=[];if(typeof t=="string")Vv(this,t)&&(e=e.concat(this.g.get(di(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Fn(this),this.i=null,t=di(this,t),Vv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function bv(t,e,n){Uv(t,e),0<n.length&&(t.i=null,t.g.set(di(t,e),id(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function di(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eT(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Uv(this,r),bv(this,i,n))},t)),t.j=e}var tT=class{constructor(e,n){this.h=e,this.g=n}};function zv(t){this.l=t||nT,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ga&&M.g.Ga()&&M.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nT=10;function Bv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jv(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yd(t,e){t.g?t.g.add(e):t.h=e}function Hv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zv.prototype.cancel=function(){if(this.i=qv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return id(t.i)}function vd(){}vd.prototype.stringify=function(t){return M.JSON.stringify(t,void 0)};vd.prototype.parse=function(t){return M.JSON.parse(t,void 0)};function rT(){this.g=new vd}function iT(t,e,n){const r=n||"";try{Mv(t,function(i,s){let o=i;Us(i)&&(o=hd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sT(t,e){const n=new ml;if(M.Image){const r=new Image;r.onload=To(Co,n,r,"TestLoadImage: loaded",!0,e),r.onerror=To(Co,n,r,"TestLoadImage: error",!1,e),r.onabort=To(Co,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=To(Co,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Co(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hs(t){this.l=t.ac||null,this.j=t.jb||!1}De(Hs,pd);Hs.prototype.g=function(){return new _l(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function _l(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(_l,Te);var wd=0;R=_l.prototype;R.open=function(t,e){if(this.readyState!=wd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_s(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||M).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=wd};R.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Wv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}R.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qs(this):_s(this),this.readyState==3&&Wv(this)}};R.Va=function(t){this.g&&(this.response=this.responseText=t,qs(this))};R.Ua=function(t){this.g&&(this.response=t,qs(this))};R.ga=function(){this.g&&qs(this)};function qs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_s(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var oT=M.JSON.parse;function le(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kv,this.K=this.L=!1}De(le,Te);var Kv="",aT=/^https?$/i,lT=["POST","PUT"];R=le.prototype;R.Ka=function(t){this.L=t};R.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bc.g(),this.C=this.u?Lp(this.u):Lp(bc),this.g.onreadystatechange=Ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Fp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=uv(lT,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yv(this),0<this.B&&((this.K=uT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ue(this.qa,this)):this.A=fd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Fp(this,s)}};function uT(t){return Zr&&CI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.qa=function(){typeof rd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Fp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gv(t),Sl(t)}function Gv(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Sl(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sl(this,!0)),le.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?Qv(this):this.fb())};R.fb=function(){Qv(this)};function Qv(t){if(t.h&&typeof rd<"u"&&(!t.C[1]||Bt(t)!=4||t.aa()!=2)){if(t.v&&Bt(t)==4)fd(t.Ha,0,t);else if(Ae(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Fv)[1]||null;if(!i&&M.self&&M.self.location){var s=M.self.location.protocol;i=s.substr(0,s.length-1)}r=!aT.test(i?i.toLowerCase():"")}n=r}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Gv(t)}}finally{Sl(t)}}}}function Sl(t,e){if(t.g){Yv(t);const n=t.g,r=t.C[0]?Na:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}R.aa=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),oT(e)}};function Up(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Kv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xv(t){let e="";return od(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ed(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Ri(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jv(t){this.Ca=0,this.i=[],this.j=new ml,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ri("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ri("baseRetryDelayMs",5e3,t),this.bb=Ri("retryDelaySeedMs",1e4,t),this.$a=Ri("forwardChannelMaxRetries",2,t),this.ta=Ri("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zv(t&&t.concurrentRequestLimit),this.Fa=new rT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=Jv.prototype;R.ma=8;R.G=1;function _d(t){if(Zv(t),t.G==3){var e=t.U++,n=Xt(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),Ws(t,n),e=new Bs(t,t.j,e,void 0),e.K=2,e.v=El(Xt(n)),n=!1,M.navigator&&M.navigator.sendBeacon&&(n=M.navigator.sendBeacon(e.v.toString(),"")),!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=a0(e.l,null),e.g.da(e.v)),e.F=Date.now(),js(e)}s0(t)}function Il(t){t.g&&(Id(t),t.g.cancel(),t.g=null)}function Zv(t){Il(t),t.u&&(M.clearTimeout(t.u),t.u=null),Oa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function Tl(t){Bv(t.h)||t.m||(t.m=!0,_v(t.Ja,t),t.C=0)}function cT(t,e){return jv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=bs(Ue(t.Ja,t,e),i0(t,t.C)),t.C++,!0)}R.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Bs(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=fv(s),pv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=e0(this,i,e),n=Xt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Ws(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Xv(s)))+"&"+e:this.o&&Ed(n,this.o,s)),yd(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,Bc(i,n,null)):Bc(i,n,e),this.G=2}}else this.G==3&&(t?Vp(this,t):this.i.length==0||Bv(this.h)||Vp(this))};function Vp(t,e){var n;e?n=e.m:n=t.U++;const r=Xt(t.F);re(r,"SID",t.I),re(r,"RID",n),re(r,"AID",t.T),Ws(t,r),t.o&&t.s&&Ed(r,t.o,t.s),n=new Bs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=e0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yd(t.h,n),Bc(n,r,e)}function Ws(t,e){t.ia&&od(t.ia,function(n,r){re(e,r,n)}),t.l&&Mv({},function(n,r){re(e,r,n)})}function e0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ue(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{iT(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function t0(t){t.g||t.u||(t.Z=1,_v(t.Ia,t),t.A=0)}function Sd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=bs(Ue(t.Ia,t),i0(t,t.A)),t.A++,!0)}R.Ia=function(){if(this.u=null,n0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=bs(Ue(this.eb,this),t)}};R.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,He(10),Il(this),n0(this))};function Id(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function n0(t){t.g=new Bs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Xt(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),Ws(t,e),t.o&&t.s&&Ed(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=El(Xt(e)),n.s=null,n.P=!0,xv(n,t)}R.cb=function(){this.v!=null&&(this.v=null,Il(this),Sd(this),He(19))};function Oa(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function r0(t,e){var n=null;if(t.g==e){Oa(t),Id(t),t.g=null;var r=2}else if(Hc(t.h,e))n=e.D,Hv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=gl(),Ae(r,new Av(r,n)),Tl(t)}else t0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&cT(t,e)||r==2&&Sd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Kn(t,5);break;case 4:Kn(t,10);break;case 3:Kn(t,6);break;default:Kn(t,2)}}}function i0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Kn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ue(t.kb,t);n||(n=new Jn("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Pa(n,"https"),El(n)),sT(n.toString(),r)}else He(2);t.G=0,t.l&&t.l.va(e),s0(t),Zv(t)}R.kb=function(t){t?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function s0(t){if(t.G=0,t.la=[],t.l){const e=qv(t.h);(e.length!=0||t.i.length!=0)&&(Ap(t.la,e),Ap(t.la,t.i),t.h.i.length=0,id(t.i),t.i.length=0),t.l.ua()}}function o0(t,e,n){var r=n instanceof Jn?Xt(n):new Jn(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),xa(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Jn(null,void 0);r&&Pa(s,r),e&&(s.g=e),i&&xa(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&re(r,n,e),re(r,"VER",t.ma),Ws(t,r),r}function a0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new le(new Hs({jb:!0})):new le(t.ra),e.Ka(t.H),e}function l0(){}R=l0.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Ra=function(){};function La(){if(Zr&&!(10<=Number(NI)))throw Error("Environmental error: no available transport.")}La.prototype.g=function(t,e){return new st(t,e)};function st(t,e){Te.call(this),this.g=new Jv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Aa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fi(this)}De(st,Te);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=o0(t,null,t.V),Tl(t)};st.prototype.close=function(){_d(this.g)};st.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hd(t),t=n);e.i.push(new tT(e.ab++,t)),e.G==3&&Tl(e)};st.prototype.M=function(){this.g.l=null,delete this.j,_d(this.g),delete this.g,st.X.M.call(this)};function u0(t){md.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(u0,md);function c0(){gd.call(this),this.status=1}De(c0,gd);function fi(t){this.g=t}De(fi,l0);fi.prototype.xa=function(){Ae(this.g,"a")};fi.prototype.wa=function(t){Ae(this.g,new u0(t))};fi.prototype.va=function(t){Ae(this.g,new c0)};fi.prototype.ua=function(){Ae(this.g,"b")};La.prototype.createWebChannel=La.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;yl.NO_ERROR=0;yl.TIMEOUT=8;yl.HTTP_ERROR=6;Rv.COMPLETE="complete";Dv.EventType=zs;zs.OPEN="a";zs.CLOSE="b";zs.ERROR="c";zs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.Oa;le.prototype.getLastErrorCode=le.prototype.Ea;le.prototype.getStatus=le.prototype.aa;le.prototype.getResponseJson=le.prototype.Sa;le.prototype.getResponseText=le.prototype.fa;le.prototype.send=le.prototype.da;le.prototype.setWithCredentials=le.prototype.Ka;var hT=function(){return new La},dT=function(){return gl()},Nu=yl,fT=Rv,pT=pr,bp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},mT=Hs,No=Dv,gT=le;const zp="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let pi="9.20.0";/**
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
 */const ur=new ed("@firebase/firestore");function Bp(){return ur.logLevel}function P(t,...e){if(ur.logLevel<=W.DEBUG){const n=e.map(Td);ur.debug(`Firestore (${pi}): ${t}`,...n)}}function Jt(t,...e){if(ur.logLevel<=W.ERROR){const n=e.map(Td);ur.error(`Firestore (${pi}): ${t}`,...n)}}function $a(t,...e){if(ur.logLevel<=W.WARN){const n=e.map(Td);ur.warn(`Firestore (${pi}): ${t}`,...n)}}function Td(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function L(t="Unexpected state"){const e=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: `+t;throw Jt(e),new Error(e)}function te(t,e){t||L()}function U(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class h0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class vT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wT{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new h0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Le(e)}}class ET{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class _T{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new ET(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ST{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IT{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.T=n.token,new ST(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function TT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class d0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ye(0,0))}static max(){return new F(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ss{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ss.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ss?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends Ss{construct(e,n,r){return new Z(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const kT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Ss{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return kT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Z.fromString(e))}static fromName(e){return new O(Z.fromString(e).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Z(e.slice()))}}function CT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new Dn(i,O.empty(),e)}function NT(t){return new Dn(t.readTime,t.key,-1)}class Dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dn(F.min(),O.empty(),-1)}static max(){return new Dn(F.max(),O.empty(),-1)}}function AT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
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
 */const RT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ks(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==RT)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class kd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}kd.ct=-1;function kl(t){return t==null}function Ma(t){return t===0&&1/t==-1/0}function PT(t){return typeof t=="number"&&Number.isInteger(t)&&!Ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function f0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ao(this.root,e,this.comparator,!0)}}class Ao{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ce.EMPTY,this.right=s??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hp(this.data.getIterator())}getIteratorFrom(e){return new Hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class Hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Et([])}unionWith(e){let n=new ve(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class xT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xT("Invalid base64 string: "+i):i}}(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const OT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(te(!!t),typeof t=="string"){let e=0;const n=OT.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
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
 */function p0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function m0(t){const e=t.mapValue.fields.__previous_value__;return p0(e)?m0(e):e}function Is(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class LT{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ts{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?p0(t)?4:$T(t)?9007199254740991:10:L()}function $t(t,e){if(t===e)return!0;const n=cr(t);if(n!==cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pn(r.timestampValue),o=Pn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ti(r.bytesValue).isEqual(ti(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return de(r.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return de(r.integerValue)===de(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=de(r.doubleValue),o=de(i.doubleValue);return s===o?Ma(s)===Ma(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(jp(s)!==jp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!$t(s[a],o[a])))return!1;return!0}(t,e);default:return L()}}function ks(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function ni(t,e){if(t===e)return 0;const n=cr(t),r=cr(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=de(i.integerValue||i.doubleValue),a=de(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return qp(t.timestampValue,e.timestampValue);case 4:return qp(Is(t),Is(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ti(i),a=ti(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=G(o[l],a[l]);if(u!==0)return u}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=G(de(i.latitude),de(s.latitude));return o!==0?o:G(de(i.longitude),de(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ni(o[l],a[l]);if(u)return u}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ro.mapValue&&s===Ro.mapValue)return 0;if(i===Ro.mapValue)return 1;if(s===Ro.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=G(a[c],u[c]);if(h!==0)return h;const d=ni(o[a[c]],l[u[c]]);if(d!==0)return d}return G(a.length,u.length)}(t.mapValue,e.mapValue);default:throw L()}}function qp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=Pn(t),r=Pn(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function ri(t){return qc(t)}function qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ti(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=qc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${qc(r.fields[a])}`;return s+"}"}(t.mapValue):L();var e,n}function Wp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function Cd(t){return!!t&&"arrayValue"in t}function Kp(t){return!!t&&"nullValue"in t}function Gp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wo(t){return!!t&&"mapValue"in t}function Gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $T(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Gi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Gi(this.value))}}function g0(t){const e=[];return mi(t.fields,(n,r)=>{const i=new Fe([n]);if(Wo(r)){const s=g0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
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
 */class Me{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,F.min(),F.min(),F.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Me(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Me(e,2,n,F.min(),F.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,F.min(),F.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fa{constructor(e,n){this.position=e,this.inclusive=n}}function Qp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class br{constructor(e,n="asc"){this.field=e,this.dir=n}}function MT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class y0{}class pe extends y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UT(e,n,r):n==="array-contains"?new zT(e,r):n==="in"?new BT(e,r):n==="not-in"?new jT(e,r):n==="array-contains-any"?new HT(e,r):new pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VT(e,r):new bT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ni(n,this.value)):n!==null&&cr(this.value)===cr(n)&&this.matchesComparison(ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tt extends y0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Tt(e,n)}matches(e){return v0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function v0(t){return t.op==="and"}function w0(t){return FT(t)&&v0(t)}function FT(t){for(const e of t.filters)if(e instanceof Tt)return!1;return!0}function Kc(t){if(t instanceof pe)return t.field.canonicalString()+t.op.toString()+ri(t.value);if(w0(t))return t.filters.map(e=>Kc(e)).join(",");{const e=t.filters.map(n=>Kc(n)).join(",");return`${t.op}(${e})`}}function E0(t,e){return t instanceof pe?function(n,r){return r instanceof pe&&n.op===r.op&&n.field.isEqual(r.field)&&$t(n.value,r.value)}(t,e):t instanceof Tt?function(n,r){return r instanceof Tt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&E0(s,r.filters[o]),!0):!1}(t,e):void L()}function _0(t){return t instanceof pe?function(e){return`${e.field.canonicalString()} ${e.op} ${ri(e.value)}`}(t):t instanceof Tt?function(e){return e.op.toString()+" {"+e.getFilters().map(_0).join(" ,")+"}"}(t):"Filter"}class UT extends pe{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class VT extends pe{constructor(e,n){super(e,"in",n),this.keys=S0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bT extends pe{constructor(e,n){super(e,"not-in",n),this.keys=S0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function S0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class zT extends pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cd(n)&&ks(n.arrayValue,this.value)}}class BT extends pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ks(this.value.arrayValue,n)}}class jT extends pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ks(this.value.arrayValue,n)}}class HT extends pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ks(this.value.arrayValue,r))}}/**
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
 */class qT{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Xp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qT(t,e,n,r,i,s,o)}function Nd(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ri(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ri(r)).join(",")),e.ft=n}return e.ft}function Ad(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!E0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yp(t.startAt,e.startAt)&&Yp(t.endAt,e.endAt)}function Gc(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class gi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function WT(t,e,n,r,i,s,o,a){return new gi(t,e,n,r,i,s,o,a)}function Rd(t){return new gi(t)}function Jp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function I0(t){return t.collectionGroup!==null}function zr(t){const e=U(t);if(e.dt===null){e.dt=[];const n=Cl(e),r=Dd(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new br(n)),e.dt.push(new br(Fe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new br(Fe.keyField(),s))}}}return e.dt}function Zt(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=Xp(e.path,e.collectionGroup,zr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of zr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new br(s.field,o))}const r=e.endAt?new Fa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Fa(e.startAt.position,e.startAt.inclusive):null;e.wt=Xp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Qc(t,e){e.getFirstInequalityField(),Cl(t);const n=t.filters.concat([e]);return new gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yc(t,e,n){return new gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nl(t,e){return Ad(Zt(t),Zt(e))&&t.limitType===e.limitType}function T0(t){return`${Nd(Zt(t))}|lt:${t.limitType}`}function Xc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>_0(r)).join(", ")}]`),kl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ri(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ri(r)).join(",")),`Target(${n})`}(Zt(t))}; limitType=${t.limitType})`}function Al(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of zr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Qp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,zr(n),r)||n.endAt&&!function(i,s,o){const a=Qp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,zr(n),r))}(t,e)}function KT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function k0(t){return(e,n)=>{let r=!1;for(const i of zr(t)){const s=GT(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GT(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ni(a,l):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return f0(this.inner)}size(){return this.innerSize}}/**
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
 */const QT=new we(O.comparator);function en(){return QT}const C0=new we(O.comparator);function Mi(...t){let e=C0;for(const n of t)e=e.insert(n.key,n);return e}function N0(t){let e=C0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gn(){return Qi()}function A0(){return Qi()}function Qi(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const YT=new we(O.comparator),XT=new ve(O.comparator);function B(...t){let e=XT;for(const n of t)e=e.add(n);return e}const JT=new ve(G);function R0(){return JT}/**
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
 */function D0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ma(e)?"-0":e}}function P0(t){return{integerValue:""+t}}function ZT(t,e){return PT(e)?P0(e):D0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Rl{constructor(){this._=void 0}}function ek(t,e,n){return t instanceof Cs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ns?O0(t,e):t instanceof As?L0(t,e):function(r,i){const s=x0(r,i),o=Zp(s)+Zp(r._t);return Wc(s)&&Wc(r._t)?P0(o):D0(r.serializer,o)}(t,e)}function tk(t,e,n){return t instanceof Ns?O0(t,e):t instanceof As?L0(t,e):n}function x0(t,e){return t instanceof Ua?Wc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Cs extends Rl{}class Ns extends Rl{constructor(e){super(),this.elements=e}}function O0(t,e){const n=$0(e);for(const r of t.elements)n.some(i=>$t(i,r))||n.push(r);return{arrayValue:{values:n}}}class As extends Rl{constructor(e){super(),this.elements=e}}function L0(t,e){let n=$0(e);for(const r of t.elements)n=n.filter(i=>!$t(i,r));return{arrayValue:{values:n}}}class Ua extends Rl{constructor(e,n){super(),this.serializer=e,this._t=n}}function Zp(t){return de(t.integerValue||t.doubleValue)}function $0(t){return Cd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class nk{constructor(e,n){this.field=e,this.transform=n}}function rk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ns&&r instanceof Ns||n instanceof As&&r instanceof As?ei(n.elements,r.elements,$t):n instanceof Ua&&r instanceof Ua?$t(n._t,r._t):n instanceof Cs&&r instanceof Cs}(t.transform,e.transform)}class ik{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dl{}function M0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new U0(t.key,Wt.none()):new Qs(t.key,t.data,Wt.none());{const n=t.data,r=ct.empty();let i=new ve(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(t.key,r,new Et(i.toArray()),Wt.none())}}function sk(t,e,n){t instanceof Qs?function(r,i,s){const o=r.value.clone(),a=tm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(r,i,s){if(!Ko(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=tm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(F0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n,r){return t instanceof Qs?function(i,s,o,a){if(!Ko(i.precondition,s))return o;const l=i.value.clone(),u=nm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(i,s,o,a){if(!Ko(i.precondition,s))return o;const l=nm(i.fieldTransforms,a,s),u=s.data;return u.setAll(F0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ko(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function ok(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=x0(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function em(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ei(n,r,(i,s)=>rk(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qs extends Dl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends Dl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function F0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tm(t,e,n){const r=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tk(o,a,n[i]))}return r}function nm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ek(s,o,e))}return r}class U0 extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ak extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=A0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=M0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),B())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>em(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>em(n,r))}}class Pd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){te(e.mutations.length===r.length);let i=YT;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pd(e,n,r,i)}}/**
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
 */class uk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ck{constructor(e){this.count=e}}/**
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
 */var he,H;function hk(t){switch(t){default:return L();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function V0(t){if(t===void 0)return Jt("GRPC error has no .code"),w.UNKNOWN;switch(t){case he.OK:return w.OK;case he.CANCELLED:return w.CANCELLED;case he.UNKNOWN:return w.UNKNOWN;case he.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case he.INTERNAL:return w.INTERNAL;case he.UNAVAILABLE:return w.UNAVAILABLE;case he.UNAUTHENTICATED:return w.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case he.NOT_FOUND:return w.NOT_FOUND;case he.ALREADY_EXISTS:return w.ALREADY_EXISTS;case he.PERMISSION_DENIED:return w.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case he.ABORTED:return w.ABORTED;case he.OUT_OF_RANGE:return w.OUT_OF_RANGE;case he.UNIMPLEMENTED:return w.UNIMPLEMENTED;case he.DATA_LOSS:return w.DATA_LOSS;default:return L()}}(H=he||(he={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */class xd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Do}static getOrCreateInstance(){return Do===null&&(Do=new xd),Do}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Do=null;/**
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
 */class Pl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pl(F.min(),i,R0(),en(),B())}}class Ys{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ys(r,n,B(),B(),B())}}/**
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
 */class Go{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class b0{constructor(e,n){this.targetId=e,this.Et=n}}class z0{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rm{constructor(){this.At=0,this.Rt=sm(),this.vt=Be.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=B(),n=B(),r=B();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Ys(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=sm()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class dk{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=en(),this.qt=im(),this.Ut=new ve(G)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Gc(o))if(i===0){const a=new O(o.path);this.Qt(r,a,Me.newNoDocument(a,F.min()))}else te(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=xd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Gc(a.target)){const l=new O(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Me.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=B();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Pl(e,n,this.Ut,this.Lt,r);return this.Lt=en(),this.qt=im(),this.Ut=new ve(G),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new rm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ve(G),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new rm),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function im(){return new we(O.comparator)}function sm(){return new we(O.comparator)}/**
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
 */const fk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mk=(()=>({and:"AND",or:"OR"}))();class gk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function B0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yk(t,e){return Va(t,e.toTimestamp())}function xt(t){return te(!!t),F.fromTimestamp(function(e){const n=Pn(e);return new ye(n.seconds,n.nanos)}(t))}function Od(t,e){return function(n){return new Z(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function j0(t){const e=Z.fromString(t);return te(K0(e)),e}function Jc(t,e){return Od(t.databaseId,e.path)}function Au(t,e){const n=j0(e);if(n.get(1)!==t.databaseId.projectId)throw new A(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(H0(n))}function Zc(t,e){return Od(t.databaseId,e)}function vk(t){const e=j0(t);return e.length===4?Z.emptyPath():H0(e)}function eh(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function H0(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function om(t,e,n){return{name:Jc(t,e),fields:n.value.mapValue.fields}}function wk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(te(u===void 0||typeof u=="string"),Be.fromBase64String(u||"")):(te(u===void 0||u instanceof Uint8Array),Be.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:V0(l.code);return new A(u,l.message||"")}(o);n=new z0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Au(t,r.document.name),s=xt(r.document.updateTime),o=r.document.createTime?xt(r.document.createTime):F.min(),a=new ct({mapValue:{fields:r.document.fields}}),l=Me.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Go(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Au(t,r.document),s=r.readTime?xt(r.readTime):F.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Go([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Au(t,r.document),s=r.removedTargetIds||[];n=new Go([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new ck(i),o=r.targetId;n=new b0(o,s)}}return n}function Ek(t,e){let n;if(e instanceof Qs)n={update:om(t,e.key,e.value)};else if(e instanceof U0)n={delete:Jc(t,e.key)};else if(e instanceof mr)n={update:om(t,e.key,e.data),updateMask:Rk(e.fieldMask)};else{if(!(e instanceof ak))return L();n={verify:Jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Cs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ns)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof As)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ua)return{fieldPath:s.field.canonicalString(),increment:o._t};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:yk(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L()}(t,e.precondition)),n}function _k(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?xt(r.updateTime):xt(i);return s.isEqual(F.min())&&(s=xt(i)),new ik(s,r.transformResults||[])}(n,e))):[]}function Sk(t,e){return{documents:[Zc(t,e.path)]}}function Ik(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return W0(Tt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:wr(c.field),direction:Ck(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||kl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Tk(t){let e=vk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=q0(c);return h instanceof Tt&&w0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new br(Er(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,kl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Fa(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Fa(d,h)}(n.endAt)),WT(e,i,o,s,a,"F",l,u)}function kk(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return L()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function q0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Er(e.unaryFilter.field);return pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Er(e.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(e.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Er(e.unaryFilter.field);return pe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(e){return pe.create(Er(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Tt.create(e.compositeFilter.filters.map(n=>q0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(t):L()}function Ck(t){return fk[t]}function Nk(t){return pk[t]}function Ak(t){return mk[t]}function wr(t){return{fieldPath:t.canonicalString()}}function Er(t){return Fe.fromServerFormat(t.fieldPath)}function W0(t){return t instanceof pe?function(e){if(e.op==="=="){if(Gp(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NAN"}};if(Kp(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Gp(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NAN"}};if(Kp(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(e.field),op:Nk(e.op),value:e.value}}}(t):t instanceof Tt?function(e){const n=e.getFilters().map(r=>W0(r));return n.length===1?n[0]:{compositeFilter:{op:Ak(e.op),filters:n}}}(t):L()}function Rk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function K0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Dk{constructor(e){this.se=e}}function Pk(t){const e=Tk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yc(e,e.limit,"L"):e}/**
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
 */class xk{constructor(){this.He=new Ok}addToCollectionParentIndex(e,n){return this.He.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Dn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Ok{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(Z.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(Z.comparator)).toArray()}}/**
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
 */class ii{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ii(0)}static bn(){return new ii(-1)}}/**
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
 */class Lk{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class $k{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Mk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yi(r.mutation,i,Et.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,n,r=B()){const i=Gn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Mi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,B()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=en();const o=Qi(),a=Qi();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof mr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Yi(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new $k(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qi();let i=new we((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Et.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||B()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=A0();c.forEach(d=>{if(!s.has(d)){const g=M0(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):I0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Gn());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,B())).next(c=>({batchId:a,changes:N0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=Mi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Mi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new gi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Me.newInvalidDocument(u)))});let o=Mi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Yi(u.mutation,l,Et.empty(),ye.now()),Al(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Fk{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:xt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Pk(r.bundledQuery),readTime:xt(r.readTime)}}(n)),S.resolve()}}/**
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
 */class Uk{constructor(){this.overlays=new we(O.comparator),this.ts=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Gn(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Gn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Gn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uk(n,r));let s=this.ts.get(n);s===void 0&&(s=B(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
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
 */class Ld{constructor(){this.es=new ve(_e.ns),this.ss=new ve(_e.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new _e(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new _e(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new O(new Z([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new O(new Z([])),r=new _e(n,e),i=new _e(n,e+1);let s=B();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return O.comparator(e.key,n.key)||G(e.ds,n.ds)}static rs(e,n){return G(e.ds,n.ds)||O.comparator(e.key,n.key)}}/**
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
 */class Vk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new ve(_e.ns)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(G);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),S.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new _e(new O(s),0);let a=new ve(G);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),S.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return S.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new _e(n,0),i=this._s.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bk{constructor(e){this.Ts=e,this.docs=new we(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=en();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=en();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AT(NT(c),r)<=0||(i.has(c.key)||Al(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){L()}Es(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zk(this)}getSize(e){return S.resolve(this.size)}}class zk extends Lk{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class Bk{constructor(e){this.persistence=e,this.As=new yi(n=>Nd(n),Ad),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ld,this.targetCount=0,this.bs=ii.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),S.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ii(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Sn(n),S.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.vs.containsKey(n))}}/**
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
 */class jk{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new kd(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Bk(this),this.indexManager=new xk,this.remoteDocumentCache=function(r){return new bk(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new Dk(n),this.xs=new Fk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Uk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new Vk(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new Hk(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return S.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class Hk extends DT{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.$s=new Ld,this.Ms=null}static Fs(e){return new $d(e)}get Bs(){if(this.Ms)return this.Ms;throw L()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),S.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Bs,r=>{const i=O.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return S.or([()=>S.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Md{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=B(),i=B();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Md(e,n.fromCache,r,i)}}/**
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
 */class qk{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Jp(n))return S.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yc(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=B(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,Yc(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return Jp(n)||i.isEqual(F.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(Bp()<=W.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xc(n)),this.Fi(e,o,n,CT(i,-1)))})}$i(e,n){let r=new ve(k0(e));return n.forEach((i,s)=>{Al(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Bp()<=W.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Xc(n)),this.xi.getDocumentsMatchingQuery(e,n,Dn.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Wk{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new we(G),this.qi=new yi(s=>Nd(s),Ad),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mk(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function Kk(t,e,n,r){return new Wk(t,e,n,r)}async function G0(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=B();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Gk(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);te(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=B();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Q0(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function Qk(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Be.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,c)&&a.push(n.Ds.updateTargetData(s,g))});let l=en(),u=B();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Yk(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(F.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function Yk(t,e,n){let r=B(),i=B();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=en();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function Xk(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Jk(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new er(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function th(t,e,n){const r=U(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gs(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function am(t,e,n){const r=U(t);let i=F.min(),s=B();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),h=c.qi.get(u);return h!==void 0?S.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,Zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:B())).next(a=>(Zk(r,KT(e),a),{documents:a,Wi:s})))}function Zk(t,e,n){let r=t.Ui.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class lm{constructor(){this.activeTargetIds=R0()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eC{constructor(){this.Br=new lm,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new lm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tC{qr(e){}shutdown(){}}/**
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
 */class um{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Po=null;function Ru(){return Po===null?Po=268435456+Math.round(2147483648*Math.random()):Po++,"0x"+Po.toString(16)}/**
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
 */const nC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rC{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Oe="WebChannelConnection";class iC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Ru(),a=this.ao(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(P("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw $a("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+pi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=nC[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Ru();return new Promise((o,a)=>{const l=new gT;l.setWithCredentials(!0),l.listenOnce(fT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Nu.NO_ERROR:const c=l.getResponseJson();P(Oe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Nu.TIMEOUT:P(Oe,`RPC '${e}' ${s} timed out`),a(new A(w.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const h=l.getStatus();if(P(Oe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const y=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(D)>=0?D:w.UNKNOWN}(g.status);a(new A(y,g.message))}else a(new A(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(w.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{P(Oe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(Oe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Ru(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hT(),a=dT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new mT({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");P(Oe,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const g=new rC({Wr:v=>{d?P(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(P(Oe,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),P(Oe,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},Hr:()=>c.close()}),y=(v,D,p)=>{v.listen(D,f=>{try{p(f)}catch(m){setTimeout(()=>{throw m},0)}})};return y(c,No.EventType.OPEN,()=>{d||P(Oe,`RPC '${e}' stream ${i} transport opened.`)}),y(c,No.EventType.CLOSE,()=>{d||(d=!0,P(Oe,`RPC '${e}' stream ${i} transport closed`),g.so())}),y(c,No.EventType.ERROR,v=>{d||(d=!0,$a(Oe,`RPC '${e}' stream ${i} transport errored:`,v),g.so(new A(w.UNAVAILABLE,"The operation could not be completed")))}),y(c,No.EventType.MESSAGE,v=>{var D;if(!d){const p=v.data[0];te(!!p);const f=p,m=f.error||((D=f[0])===null||D===void 0?void 0:D.error);if(m){P(Oe,`RPC '${e}' stream ${i} received error:`,m);const E=m.status;let I=function(N){const x=he[N];if(x!==void 0)return V0(x)}(E),k=m.message;I===void 0&&(I=w.INTERNAL,k="Unknown error status: "+E+" with message "+m.message),d=!0,g.so(new A(I,k)),c.close()}else P(Oe,`RPC '${e}' stream ${i} received:`,p),g.io(p)}}),y(a,pT.STAT_EVENT,v=>{v.stat===bp.PROXY?P(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===bp.NOPROXY&&P(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Du(){return typeof document<"u"?document:null}/**
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
 */function xl(t){return new gk(t,!0)}/**
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
 */class Y0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class X0{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Y0(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new A(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sC extends X0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=wk(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?xt(s.readTime):F.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=eh(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Gc(a)?{documents:Sk(i,a)}:{query:Ik(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=B0(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=Va(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=kk(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=eh(this.serializer),n.removeTarget=e,this.Fo(n)}}class oC extends X0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=_k(e.writeResults,e.commitTime),r=xt(e.commitTime);return this.listener.Zo(r,n)}return te(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=eh(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ek(this.serializer,r))};this.Fo(n)}}/**
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
 */class aC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new A(w.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(w.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(w.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class lC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Jt(n),this.ru=!1):P("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class uC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{gr(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.du.add(4),await Xs(l),l.mu.set("Unknown"),l.du.delete(4),await Ol(l)}(this))})}),this.mu=new lC(r,i)}}async function Ol(t){if(gr(t))for(const e of t.wu)await e(!0)}async function Xs(t){for(const e of t.wu)await e(!1)}function J0(t,e){const n=U(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Vd(n)?Ud(n):vi(n).No()&&Fd(n,e))}function Z0(t,e){const n=U(t),r=vi(n);n.fu.delete(e),r.No()&&ew(n,e),n.fu.size===0&&(r.No()?r.$o():gr(n)&&n.mu.set("Unknown"))}function Fd(t,e){t.gu.Ot(e.targetId),vi(t).jo(e)}function ew(t,e){t.gu.Ot(e),vi(t).Wo(e)}function Ud(t){t.gu=new dk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),vi(t).start(),t.mu.ou()}function Vd(t){return gr(t)&&!vi(t).xo()&&t.fu.size>0}function gr(t){return U(t).du.size===0}function tw(t){t.gu=void 0}async function cC(t){t.fu.forEach((e,n)=>{Fd(t,e)})}async function hC(t,e){tw(t),Vd(t)?(t.mu.au(e),Ud(t)):t.mu.set("Unknown")}async function dC(t,e,n){if(t.mu.set("Online"),e instanceof z0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ba(t,r)}else if(e instanceof Go?t.gu.Kt(e):e instanceof b0?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(F.min()))try{const r=await Q0(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Be.EMPTY_BYTE_STRING,l.snapshotVersion)),ew(i,a);const u=new er(l.target,a,1,l.sequenceNumber);Fd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await ba(t,r)}}async function ba(t,e,n){if(!Gs(e))throw e;t.du.add(1),await Xs(t),t.mu.set("Offline"),n||(n=()=>Q0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ol(t)})}function nw(t,e){return e().catch(n=>ba(t,n,e))}async function Ll(t){const e=U(t),n=xn(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;fC(e);)try{const i=await Xk(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,pC(e,i)}catch(i){await ba(e,i)}rw(e)&&iw(e)}function fC(t){return gr(t)&&t.lu.length<10}function pC(t,e){t.lu.push(e);const n=xn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function rw(t){return gr(t)&&!xn(t).xo()&&t.lu.length>0}function iw(t){xn(t).start()}async function mC(t){xn(t).tu()}async function gC(t){const e=xn(t);for(const n of t.lu)e.Yo(n.mutations)}async function yC(t,e,n){const r=t.lu.shift(),i=Pd.from(r,e,n);await nw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ll(t)}async function vC(t,e){e&&xn(t).Jo&&await async function(n,r){if(i=r.code,hk(i)&&i!==w.ABORTED){const s=n.lu.shift();xn(n).Oo(),await nw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ll(n)}var i}(t,e),rw(t)&&iw(t)}async function cm(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=gr(n);n.du.add(3),await Xs(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ol(n)}async function wC(t,e){const n=U(t);e?(n.du.delete(2),await Ol(n)):e||(n.du.add(2),await Xs(n),n.mu.set("Unknown"))}function vi(t){return t.yu||(t.yu=function(e,n,r){const i=U(e);return i.nu(),new sC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:cC.bind(null,t),Zr:hC.bind(null,t),zo:dC.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Vd(t)?Ud(t):t.mu.set("Unknown")):(await t.yu.stop(),tw(t))})),t.yu}function xn(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.nu(),new oC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:mC.bind(null,t),Zr:vC.bind(null,t),Xo:gC.bind(null,t),Zo:yC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Ll(t)):(await t.pu.stop(),t.lu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class bd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new bd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zd(t,e){if(Jt("AsyncQueue",`${e}: ${t}`),Gs(t))return new A(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Br{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Mi(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Br(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hm{constructor(){this.Iu=new we(O.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):L():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new si(e,n,Br.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class EC{constructor(){this.Eu=void 0,this.listeners=[]}}class _C{constructor(){this.queries=new yi(e=>T0(e),Nl),this.onlineState="Unknown",this.Au=new Set}}async function SC(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new EC),i)try{s.Eu=await n.onListen(r)}catch(o){const a=zd(o,`Initialization of query '${Xc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Bd(n)}async function IC(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TC(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Bd(n)}function kC(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Bd(t){t.Au.forEach(e=>{e.next()})}class CC{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class sw{constructor(e){this.key=e}}class ow{constructor(e){this.key=e}}class NC{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=B(),this.mutatedKeys=B(),this.Ku=k0(e),this.Gu=new Br(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new hm,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Al(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),D=!0):this.Wu(d,g)||(r.track({type:2,doc:g}),D=!0,(l&&this.Ku(g,l)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),D=!0):d&&!g&&(r.track({type:1,doc:d}),D=!0,(l||u)&&(a=!0)),D&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return g(h)-g(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new si(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new hm,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=B(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new ow(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new sw(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=B();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return si.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class AC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RC{constructor(e){this.key=e,this.ec=!1}}class DC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new yi(a=>T0(a),Nl),this.ic=new Map,this.rc=new Set,this.oc=new we(O.comparator),this.uc=new Map,this.cc=new Ld,this.ac={},this.hc=new Map,this.lc=ii.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function PC(t,e){const n=zC(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await Jk(n.localStore,Zt(e));n.isPrimaryClient&&J0(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await xC(n,e,r,a==="current",o.resumeToken)}return i}async function xC(t,e,n,r,i){t.dc=(h,d,g)=>async function(y,v,D,p){let f=v.view.zu(D);f.Mi&&(f=await am(y.localStore,v.query,!1).then(({documents:I})=>v.view.zu(I,f)));const m=p&&p.targetChanges.get(v.targetId),E=v.view.applyChanges(f,y.isPrimaryClient,m);return fm(y,v.targetId,E.Yu),E.snapshot}(t,h,d,g);const s=await am(t.localStore,e,!0),o=new NC(e,s.Wi),a=o.zu(s.documents),l=Ys.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);fm(t,n,u.Yu);const c=new AC(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function OC(t,e){const n=U(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Nl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await th(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Z0(n.remoteStore,r.targetId),nh(n,r.targetId)}).catch(Ks)):(nh(n,r.targetId),await th(n.localStore,r.targetId,!0))}async function LC(t,e,n){const r=BC(t);try{const i=await function(s,o){const a=U(s),l=ye.now(),u=o.reduce((d,g)=>d.add(g.key),B());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=en(),y=B();return a.Ki.getEntries(d,u).next(v=>{g=v,g.forEach((D,p)=>{p.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const D=[];for(const p of o){const f=ok(p,c.get(p.key).overlayedDocument);f!=null&&D.push(new mr(p.key,f,g0(f.value.mapValue),Wt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,D,o)}).next(v=>{h=v;const D=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,D)})}).then(()=>({batchId:h.batchId,changes:N0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new we(G)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Js(r,i.changes),await Ll(r.remoteStore)}catch(i){const s=zd(i,"Failed to persist write");n.reject(s)}}async function aw(t,e){const n=U(t);try{const r=await Qk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?te(o.ec):i.removedDocuments.size>0&&(te(o.ec),o.ec=!1))}),await Js(n,r,e)}catch(r){await Ks(r)}}function dm(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&Bd(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $C(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new we(O.comparator);o=o.insert(s,Me.newNoDocument(s,F.min()));const a=B().add(s),l=new Pl(F.min(),new Map,new ve(G),o,a);await aw(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),jd(r)}else await th(r.localStore,e,!1).then(()=>nh(r,e,n)).catch(Ks)}async function MC(t,e){const n=U(t),r=e.batch.batchId;try{const i=await Gk(n.localStore,e);uw(n,r,null),lw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Js(n,i)}catch(i){await Ks(i)}}async function FC(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(te(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);uw(r,e,n),lw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Js(r,i)}catch(i){await Ks(i)}}function lw(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function uw(t,e,n){const r=U(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function nh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||cw(t,r)})}function cw(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Z0(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),jd(t))}function fm(t,e,n){for(const r of n)r instanceof sw?(t.cc.addReference(r.key,e),UC(t,r)):r instanceof ow?(P("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||cw(t,r.key)):L()}function UC(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.rc.add(r),jd(t))}function jd(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new O(Z.fromString(e)),r=t.lc.next();t.uc.set(r,new RC(n)),t.oc=t.oc.insert(n,r),J0(t.remoteStore,new er(Zt(Rd(n.path)),r,2,kd.ct))}}async function Js(t,e,n){const r=U(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Md.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Gs(c))throw c;P("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(h,y)}}}(r.localStore,s))}async function VC(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await G0(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new A(w.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Js(n,r.Qi)}}function bC(t,e){const n=U(t),r=n.uc.get(e);if(r&&r.ec)return B().add(r.key);{let i=B();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function zC(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$C.bind(null,e),e.nc.zo=TC.bind(null,e.eventManager),e.nc.wc=kC.bind(null,e.eventManager),e}function BC(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FC.bind(null,e),e}class pm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Kk(this.persistence,new qk,e.initialUser,this.serializer)}createPersistence(e){return new jk($d.Fs,this.serializer)}createSharedClientState(e){return new eC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VC.bind(null,this.syncEngine),await wC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _C}createDatastore(e){const n=xl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new iC(i));var i;return function(s,o,a,l){return new aC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>dm(this.syncEngine,a,0),o=um.D()?new um:new tC,new uC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new DC(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);P("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Xs(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class HC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=d0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pu(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await G0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KC(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cm(e.remoteStore,s)),t._onlineComponents=e}function WC(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!WC(n))throw n;$a("Error using user provided cache. Falling back to memory cache: "+n),await Pu(t,new pm)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Pu(t,new pm);return t._offlineComponents}async function hw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await mm(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await mm(t,new jC))),t._onlineComponents}function GC(t){return hw(t).then(e=>e.syncEngine)}async function gm(t){const e=await hw(t),n=e.eventManager;return n.onListen=PC.bind(null,e.syncEngine),n.onUnlisten=OC.bind(null,e.syncEngine),n}/**
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
 */const ym=new Map;/**
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
 */function dw(t,e,n){if(!n)throw new A(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QC(t,e,n,r){if(e===!0&&r===!0)throw new A(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vm(t){if(!O.isDocumentKey(t))throw new A(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wm(t){if(O.isDocumentKey(t))throw new A(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $l(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function Xi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$l(t);throw new A(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Em{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,QC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ml{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Em({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Em(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yT;switch(n.type){case"firstParty":return new _T(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ym.get(e);n&&(P("ComponentProvider","Removing Datastore"),ym.delete(e),n.terminate())}(this),Promise.resolve()}}function YC(t,e,n,r={}){var i;const s=(t=Xi(t,Ml))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&$a("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Le.MOCK_USER;else{o=G_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new A(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(l)}t._authCredentials=new vT(new h0(o,a))}}/**
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
 */class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class Nn extends yr{constructor(e,n,r){super(e,n,Rd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new O(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function _m(t,e,...n){if(t=Ze(t),dw("collection","path",e),t instanceof Ml){const r=Z.fromString(e,...n);return wm(r),new Nn(t,null,r)}{if(!(t instanceof rt||t instanceof Nn))throw new A(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return wm(r),new Nn(t.firestore,null,r)}}function XC(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=d0.A()),dw("doc","path",e),t instanceof Ml){const r=Z.fromString(e,...n);return vm(r),new rt(t,null,new O(r))}{if(!(t instanceof rt||t instanceof Nn))throw new A(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return vm(r),new rt(t.firestore,t instanceof Nn?t.converter:null,new O(r))}}/**
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
 */class JC{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Y0(this,"async_queue_retry"),this.qc=()=>{const n=Du();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Du();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Zn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Gs(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Jt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=bd.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&L()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Sm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class za extends Ml{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new JC,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pw(this),this._firestoreClient.terminate()}}function ZC(t,e){const n=typeof t=="object"?t:ov(),r=typeof t=="string"?t:e||"(default)",i=nd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=q_("firestore");s&&YC(i,...s)}return i}function fw(t){return t._firestoreClient||pw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pw(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new LT(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new qC(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oi(Be.fromBase64String(e))}catch(n){throw new A(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oi(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qd{constructor(e){this._methodName=e}}/**
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
 */class Wd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
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
 */const eN=/^__.*__$/;class tN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(e,this.data,n,this.fieldTransforms)}}function mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Kd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Kd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ba(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(mw(this.Yc)&&eN.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class nN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xl(e)}ua(e,n,r,i=!1){return new Kd({Yc:e,methodName:n,oa:r,path:Fe.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gw(t){const e=t._freezeSettings(),n=xl(t._databaseId);return new nN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rN(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);ww("Data must be an object, but it was:",o,r);const a=yw(r,o);let l,u;if(s.merge)l=new Et(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=sN(e,h,n);if(!o.contains(d))throw new A(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);aN(c,d)||c.push(d)}l=new Et(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new tN(new ct(a),l,u)}class Gd extends qd{_toFieldTransform(e){return new nk(e.path,new Cs)}isEqual(e){return e instanceof Gd}}function iN(t,e,n,r=!1){return Qd(n,t.ua(r?4:3,e))}function Qd(t,e){if(vw(t=Ze(t)))return ww("Unsupported field value:",e,t),yw(t,e);if(t instanceof qd)return function(n,r){if(!mw(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Qd(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ZT(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Va(r.serializer,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Va(r.serializer,i)}}if(n instanceof Wd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof oi)return{bytesValue:B0(r.serializer,n._byteString)};if(n instanceof rt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Od(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${$l(n)}`)}(t,e)}function yw(t,e){const n={};return f0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,(r,i)=>{const s=Qd(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Wd||t instanceof oi||t instanceof rt||t instanceof qd)}function ww(t,e,n){if(!vw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=$l(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function sN(t,e,n){if((e=Ze(e))instanceof Hd)return e._internalPath;if(typeof e=="string")return Ew(t,e);throw Ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const oN=new RegExp("[~\\*/\\[\\]]");function Ew(t,e,n){if(e.search(oN)>=0)throw Ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hd(...e.split("."))._internalPath}catch{throw Ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ba(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(w.INVALID_ARGUMENT,a+t+l)}function aN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _w{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lN extends _w{data(){return super.data()}}function Yd(t,e){return typeof e=="string"?Ew(t,e):e instanceof Hd?e._internalPath:e._delegate._internalPath}/**
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
 */function uN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xd{}class Sw extends Xd{}function cN(t,e,...n){let r=[];e instanceof Xd&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Zd).length,o=i.filter(a=>a instanceof Jd).length;if(s>1||s>0&&o>0)throw new A(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Jd extends Sw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Jd(e,n,r)}_apply(e){const n=this._parse(e);return Iw(e._query,n),new yr(e.firestore,e.converter,Qc(e._query,n))}_parse(e){const n=gw(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Tm(c,u);const d=[];for(const g of c)d.push(Im(a,i,g));h={arrayValue:{values:d}}}else h=Im(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Tm(c,u),h=iN(o,s,c,u==="in"||u==="not-in");return pe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Zd extends Xd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Iw(s,a),s=Qc(s,a)}(e._query,n),new yr(e.firestore,e.converter,Qc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ef extends Sw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ef(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new br(i,s);return function(a,l){if(Dd(a)===null){const u=Cl(a);u!==null&&Tw(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new gi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function hN(t,e="asc"){const n=e,r=Yd("orderBy",t);return ef._create(r,n)}function Im(t,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new A(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!I0(e)&&n.indexOf("/")!==-1)throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Z.fromString(n));if(!O.isDocumentKey(r))throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wp(t,new O(r))}if(n instanceof rt)return Wp(t,n._key);throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$l(n)}.`)}function Tm(t,e){if(!Array.isArray(t)||t.length===0)throw new A(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iw(t,e){if(e.isInequality()){const r=Cl(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Dd(t);s!==null&&Tw(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Tw(t,e,n){if(!n.isEqual(e))throw new A(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dN{convertValue(e,n="none"){switch(cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){const r={};return mi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wd(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=m0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Z.fromString(e);te(K0(r));const i=new Ts(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||Jt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function fN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kw extends _w{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Qo extends kw{data(e={}){return super.data(e)}}class pN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qo(this._firestore,this._userDataWriter,r.key,r,new Fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Qo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Qo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:mN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Cw extends dN{constructor(e){super(),this.firestore=e}convertBytes(e){return new oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function gN(t,e){const n=Xi(t.firestore,za),r=XC(t),i=fN(t.converter,e);return vN(n,[rN(gw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function yN(t,...e){var n,r,i;t=Ze(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Sm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Sm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof rt)u=Xi(t.firestore,za),c=Rd(t._key.path),l={next:h=>{e[o]&&e[o](wN(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Xi(t,yr);u=Xi(h.firestore,za),c=h._query;const d=new Cw(u);l={next:g=>{e[o]&&e[o](new pN(u,d,h,g))},error:e[o+1],complete:e[o+2]},uN(t._query)}return function(h,d,g,y){const v=new HC(y),D=new CC(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>SC(await gm(h),D)),()=>{v.yc(),h.asyncQueue.enqueueAndForget(async()=>IC(await gm(h),D))}}(fw(u),c,a,l)}function vN(t,e){return function(n,r){const i=new Zn;return n.asyncQueue.enqueueAndForget(async()=>LC(await GC(n),r,i)),i.promise}(fw(t),e)}function wN(t,e,n){const r=n.docs.get(e._key),i=new Cw(t);return new kw(t,i,e._key,r,new Fi(n.hasPendingWrites,n.fromCache),e.converter)}function km(){return new Gd("serverTimestamp")}(function(t,e=!0){(function(n){pi=n})(hi),Jr(new ar("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new za(new wT(n.getProvider("auth-internal")),new IT(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Cn(zp,"3.10.1",t),Cn(zp,"3.10.1","esm2017")})();function tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EN=Nw,Aw=new Ms("auth","Firebase",Nw());/**
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
 */const ja=new ed("@firebase/auth");function _N(t,...e){ja.logLevel<=W.WARN&&ja.warn(`Auth (${hi}): ${t}`,...e)}function Yo(t,...e){ja.logLevel<=W.ERROR&&ja.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw nf(t,...e)}function Ot(t,...e){return nf(t,...e)}function Rw(t,e,n){const r=Object.assign(Object.assign({},EN()),{[e]:n});return new Ms("auth","Firebase",r).create(e,{appName:t.name})}function SN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mt(t,"argument-error"),Rw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Aw.create(t,...e)}function $(t,e,...n){if(!t)throw nf(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function tn(t,e){t||jt(e)}/**
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
 */function rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IN(){return Cm()==="http:"||Cm()==="https:"}function Cm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IN()||Y_()||"connection"in navigator)?navigator.onLine:!0}function kN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Q_()||X_()}get(){return TN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rf(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NN=new Zs(3e4,6e4);function Pw(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function eo(t,e,n,r,i={}){return xw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Dw.fetch()(Ow(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CN),e);try{const i=new RN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rw(t,c,u);Mt(t,c)}}catch(i){if(i instanceof rn)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function AN(t,e,n,r,i={}){const s=await eo(t,e,n,r,i);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rf(t.config,i):`${t.config.apiScheme}://${i}`}class RN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),NN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function DN(t,e){return eo(t,"POST","/v1/accounts:delete",e)}async function PN(t,e){return eo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xN(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=sf(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ji(xu(i.auth_time)),issuedAtTime:Ji(xu(i.iat)),expirationTime:Ji(xu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xu(t){return Number(t)*1e3}function sf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ev(n);return i?JSON.parse(i):(Yo("Failed to decode base64 JWT payload"),null)}catch(i){return Yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ON(t){const e=sf(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&LN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ha(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Rs(t,PN(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UN(s.providerUserInfo):[],a=FN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function MN(t){const e=Ze(t);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UN(t){return t.map(e=>{var{providerId:n}=e,r=tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VN(t,e){const n=await xw(t,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ow(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ON(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ds;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function on(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xN(this,e)}reload(){return MN(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rs(this,DN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:I,providerData:k,stsTokenManager:N}=n;$(m&&N,e,"internal-error");const x=Ds.fromJSON(this.name,N);$(typeof m=="string",e,"internal-error"),on(h,e.name),on(d,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof I=="boolean",e,"internal-error"),on(g,e.name),on(y,e.name),on(v,e.name),on(D,e.name),on(p,e.name),on(f,e.name);const X=new tr({uid:m,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(X.providerData=k.map(z=>Object.assign({},z))),D&&(X._redirectEventId=D),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ds;i.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ha(s),s}}/**
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
 */const Nm=new Map;function Ht(t){tn(t instanceof Function,"Expected a class definition");let e=Nm.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nm.set(t,e),e)}/**
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
 */class $w{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$w.type="NONE";const Am=$w;/**
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
 */function Xo(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(Ht(Am),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ht(Am);const o=Xo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=tr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jr(s,e,r))}}/**
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
 */function Rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bw(e))return"Blackberry";if(zw(e))return"Webos";if(of(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(Vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=ze()){return/firefox\//i.test(t)}function of(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(t=ze()){return/crios\//i.test(t)}function Uw(t=ze()){return/iemobile/i.test(t)}function Vw(t=ze()){return/android/i.test(t)}function bw(t=ze()){return/blackberry/i.test(t)}function zw(t=ze()){return/webos/i.test(t)}function Fl(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bN(t=ze()){var e;return Fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zN(){return J_()&&document.documentMode===10}function Bw(t=ze()){return Fl(t)||Vw(t)||zw(t)||bw(t)||/windows phone/i.test(t)||Uw(t)}function BN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jw(t,e=[]){let n;switch(t){case"Browser":n=Rm(ze());break;case"Worker":n=`${Rm(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}async function Hw(t,e){return eo(t,"GET","/v2/recaptchaConfig",Pw(t,e))}function Dm(t){return t!==void 0&&t.enterprise!==void 0}class qw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function jN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ww(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jN().appendChild(r)})}function HN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qN="https://www.google.com/recaptcha/enterprise.js?render=",WN="recaptcha-enterprise";class KN{constructor(e){this.type=WN,this.auth=to(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Hw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Dm(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Dm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ww(qN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class GN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class QN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pm(this),this.idTokenSubscription=new Pm(this),this.beforeStateQueue=new GN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}async initializeRecaptchaConfig(){const e=await Hw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new qw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new KN(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_N(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function to(t){return Ze(t)}class Pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=sS(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function YN(t,e){const n=nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ka(s,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function XN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JN(t,e,n){const r=to(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Kw(e),{host:o,port:a}=ZN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eA()}function Kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZN(t){const e=Kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xm(o)}}}function xm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}/**
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
 */async function Hr(t,e){return AN(t,"POST","/v1/accounts:signInWithIdp",Pw(t,e))}/**
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
 */const tA="http://localhost";class hr extends Gw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:tA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
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
 */class af{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class no extends af{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends no{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class dn extends no{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class fn extends no{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tr._fromIdTokenResponse(e,r,i),o=Om(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Om(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qa extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function nA(t,e,n=!1){const r=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
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
 */async function rA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Rs(t,Qw(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=sf(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}}/**
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
 */async function iA(t,e,n=!1){const r="signIn",i=await Qw(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sA(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function oA(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function aA(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}const Wa="__sak";/**
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
 */class Yw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lA(){const t=ze();return of(t)||Fl(t)}const uA=1e3,cA=10;class Xw extends Yw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lA()&&BN(),this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xw.type="LOCAL";const hA=Xw;/**
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
 */class Jw extends Yw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jw.type="SESSION";const Zw=Jw;/**
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
 */function dA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await dA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
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
 */function lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function pA(t){Lt().location.href=t}/**
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
 */function e1(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function mA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yA(){return e1()?self:null}/**
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
 */const t1="firebaseLocalStorageDb",vA=1,Ka="firebaseLocalStorage",n1="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(t,e){return t.transaction([Ka],e?"readwrite":"readonly").objectStore(Ka)}function wA(){const t=indexedDB.deleteDatabase(t1);return new ro(t).toPromise()}function ih(){const t=indexedDB.open(t1,vA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ka,{keyPath:n1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ka)?e(r):(r.close(),await wA(),e(await ih()))})})}async function Lm(t,e,n){const r=Vl(t,!0).put({[n1]:e,value:n});return new ro(r).toPromise()}async function EA(t,e){const n=Vl(t,!1).get(e),r=await new ro(n).toPromise();return r===void 0?null:r.value}function $m(t,e){const n=Vl(t,!0).delete(e);return new ro(n).toPromise()}const _A=800,SA=3;class r1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(yA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mA(),!this.activeServiceWorker)return;this.sender=new fA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await Lm(e,Wa,"1"),await $m(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vl(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r1.type="LOCAL";const IA=r1;new Zs(3e4,6e4);/**
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
 */function i1(t,e){return e?Ht(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uf extends Gw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TA(t){return iA(t.auth,new uf(t),t.bypassAuthState)}function kA(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),rA(n,new uf(t),t.bypassAuthState)}async function CA(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),nA(n,new uf(t),t.bypassAuthState)}/**
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
 */class s1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TA;case"linkViaPopup":case"linkViaRedirect":return CA;case"reauthViaPopup":case"reauthViaRedirect":return kA;default:Mt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NA=new Zs(2e3,1e4);async function AA(t,e,n){const r=to(t);SN(t,e,af);const i=i1(r,n);return new Qn(r,"signInViaPopup",e,i).executeNotNull()}class Qn extends s1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,NA.get())};e()}}Qn.currentPopupAction=null;/**
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
 */const RA="pendingRedirect",Jo=new Map;class DA extends s1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await PA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PA(t,e){const n=LA(e),r=OA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xA(t,e){Jo.set(t._key(),e)}function OA(t){return Ht(t._redirectPersistence)}function LA(t){return Xo(RA,t.config.apiKey,t.name)}async function $A(t,e,n=!1){const r=to(t),i=i1(r,e),o=await new DA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const MA=10*60*1e3;class FA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mm(e))}saveEventToCache(e){this.cachedEventUids.add(Mm(e)),this.lastProcessedEventTime=Date.now()}}function Mm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o1(t);default:return!1}}/**
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
 */async function VA(t,e={}){return eo(t,"GET","/v1/projects",e)}/**
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
 */const bA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zA=/^https?/;async function BA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VA(t);for(const n of e)try{if(jA(n))return}catch{}Mt(t,"unauthorized-domain")}function jA(t){const e=rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zA.test(n))return!1;if(bA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const HA=new Zs(3e4,6e4);function Fm(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qA(t){return new Promise((e,n)=>{var r,i,s;function o(){Fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fm(),n(Ot(t,"network-request-failed"))},timeout:HA.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const a=HN("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},Ww(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zo=null,e})}let Zo=null;function WA(t){return Zo=Zo||qA(t),Zo}/**
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
 */const KA=new Zs(5e3,15e3),GA="__/auth/iframe",QA="emulator/auth/iframe",YA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JA(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rf(e,QA):`https://${t.config.authDomain}/${GA}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=XA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function ZA(t){const e=await WA(t),n=Lt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:JA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Lt().setTimeout(()=>{s(o)},KA.get());function l(){Lt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const eR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tR=500,nR=600,rR="_blank",iR="http://localhost";class Um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sR(t,e,n,r=tR,i=nR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ze().toLowerCase();n&&(a=Fw(u)?rR:n),Mw(u)&&(e=e||iR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(bN(u)&&a!=="_self")return oR(e||"",a),new Um(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Um(h)}function oR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aR="__/auth/handler",lR="emulator/auth/handler",uR=encodeURIComponent("fac");async function Vm(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof af){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof no){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${uR}=${encodeURIComponent(l)}`:"";return`${cR(t)}?${Fs(a).slice(1)}${u}`}function cR({config:t}){return t.emulator?rf(t,lR):`https://${t.authDomain}/${aR}`}/**
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
 */const Ou="webStorageSupport";class hR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zw,this._completeRedirectFn=$A,this._overrideRedirectResult=xA}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Vm(e,n,r,rh(),i);return sR(e,o,lf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Vm(e,n,r,rh(),i);return pA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZA(e),r=new FA(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ou,{type:Ou},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ou];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||of()||Fl()}}const dR=hR;var bm="@firebase/auth",zm="0.23.0";/**
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
 */class fR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mR(t){Jr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),$(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jw(t)},u=new QN(r,i,s,l);return XN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jr(new ar("auth-internal",e=>{const n=to(e.getProvider("auth").getImmediate());return(r=>new fR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(bm,zm,pR(t)),Cn(bm,zm,"esm2017")}/**
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
 */const gR=5*60,yR=nv("authIdTokenMaxAge")||gR;let Bm=null;const vR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yR)return;const i=n==null?void 0:n.token;Bm!==i&&(Bm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wR(t=ov()){const e=nd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YN(t,{popupRedirectResolver:dR,persistence:[IA,hA,Zw]}),r=nv("authTokenSyncURL");if(r){const s=vR(r);oA(n,s,()=>s(n.currentUser)),sA(n,o=>s(o))}const i=tv("auth");return i&&JN(n,`http://${i}`),n}mR("Browser");const ER={apiKey:"AIzaSyB5t-rzF2sW2bZANCWrStfeucItno-M6VQ",authDomain:"whatsapp-clone-8d2b2.firebaseapp.com",projectId:"whatsapp-clone-8d2b2",storageBucket:"whatsapp-clone-8d2b2.appspot.com",messagingSenderId:"480255933543",appId:"1:480255933543:web:6ec10ce10eee8b306228c2",measurementId:"G-PXQZGJED1W"},a1=sv(ER),jm=ZC(a1),Oo=wR(a1);function _R({chats:t,user:e}){return K.jsx("div",{className:"box",children:t&&t.map(n=>K.jsx("div",{className:n.data().email===e.email?"message alert alert-success right":"message left alert",color:n.data().email===e.email?"primary":"success",children:n.data().message},n.data().Id))})}function SR({setInput:t,handleSubmit:e}){return console.log(e),K.jsxs("form",{onSubmit:e,children:[K.jsx("input",{type:"text",placeholder:"Type, Don'be Shy",onChange:n=>t(n.target.value),className:"input input-bordered input-accent"}),K.jsx("button",{type:"submit",className:"btn btn-accent",children:"Submit"})]})}const IR="/assets/logo-95a9ab06.png";function TR({handleClick:t}){return K.jsxs("div",{className:"login-form",children:[K.jsx("img",{src:IR,alt:""}),K.jsx("button",{className:"btn btn-accent",onClick:t,children:"Sign In with Google"})]})}function kR({user:t,auth:e}){return K.jsx(K.Fragment,{children:K.jsxs("div",{className:"navbar bg-base-100",children:[K.jsx("div",{className:"flex-1",children:K.jsx("a",{className:"btn btn-ghost normal-case text-xl",children:"WhatsApp"})}),K.jsx("div",{className:"flex-none",children:K.jsxs("ul",{className:"menu menu-horizontal px-1",children:[K.jsx("li",{children:K.jsx("a",{children:t&&K.jsx("img",{className:"btn-circle avatar",src:t.photoURL})})}),K.jsx("li",{children:K.jsx("a",{onClick:n=>e.signOut(),children:"Logout "})})]})})]})})}function CR(){const[t,e]=Nt.useState(),[n,r]=Nt.useState(),[i,s]=Nt.useState(),o=Nt.useRef(null);Nt.useEffect(()=>{var u;aA(Oo,c=>{r(c)}),yN(cN(_m(jm,"chatroom"),hN("date")),c=>{s(c.docs)}),(u=o.current)==null||u.scrollIntoView({behavior:"smooth"})},[]);const a=async u=>{u.preventDefault(),console.log(km(),t,n.email),await gN(_m(jm,"chatroom"),{message:t,email:n.email,Id:crypto.randomUUID(),date:km()}),e("")},l=()=>{console.log(Oo),AA(Oo,new Vt).then(u=>{}).catch(u=>{console.log(u)})};return K.jsxs("div",{children:[K.jsx(kR,{auth:Oo,user:n}),!n&&K.jsx(TR,{handleClick:l}),n&&K.jsxs(K.Fragment,{children:[K.jsx(_R,{chats:i,user:n}),K.jsx(SR,{setInput:e,handleSubmit:a})]})]})}Lu.createRoot(document.getElementById("root")).render(K.jsx(N1.StrictMode,{children:K.jsx(CR,{})}));
