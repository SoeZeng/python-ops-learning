(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))E(k);new MutationObserver(k=>{for(const C of k)if(C.type==="childList")for(const v of C.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&E(v)}).observe(document,{childList:!0,subtree:!0});function c(k){const C={};return k.integrity&&(C.integrity=k.integrity),k.referrerPolicy&&(C.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?C.credentials="include":k.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function E(k){if(k.ep)return;k.ep=!0;const C=c(k);fetch(k.href,C)}})();function Xd(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Io={exports:{}},kr={},Fo={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma;function Gd(){if(Ma)return Q;Ma=1;var a=Symbol.for("react.element"),y=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),v=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),V=Symbol.iterator;function $(p){return p===null||typeof p!="object"?null:(p=V&&p[V]||p["@@iterator"],typeof p=="function"?p:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,K={};function te(p,_,W){this.props=p,this.context=_,this.refs=K,this.updater=W||B}te.prototype.isReactComponent={},te.prototype.setState=function(p,_){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,_,"setState")},te.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Te(){}Te.prototype=te.prototype;function pt(p,_,W){this.props=p,this.context=_,this.refs=K,this.updater=W||B}var tt=pt.prototype=new Te;tt.constructor=pt,G(tt,te.prototype),tt.isPureReactComponent=!0;var Ne=Array.isArray,nt=Object.prototype.hasOwnProperty,Re={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Je(p,_,W){var Y,Z={},b=null,ie=null;if(_!=null)for(Y in _.ref!==void 0&&(ie=_.ref),_.key!==void 0&&(b=""+_.key),_)nt.call(_,Y)&&!Ie.hasOwnProperty(Y)&&(Z[Y]=_[Y]);var ne=arguments.length-2;if(ne===1)Z.children=W;else if(1<ne){for(var ae=Array(ne),Be=0;Be<ne;Be++)ae[Be]=arguments[Be+2];Z.children=ae}if(p&&p.defaultProps)for(Y in ne=p.defaultProps,ne)Z[Y]===void 0&&(Z[Y]=ne[Y]);return{$$typeof:a,type:p,key:b,ref:ie,props:Z,_owner:Re.current}}function Tt(p,_){return{$$typeof:a,type:p.type,key:_,ref:p.ref,props:p.props,_owner:p._owner}}function wt(p){return typeof p=="object"&&p!==null&&p.$$typeof===a}function Xt(p){var _={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(W){return _[W]})}var ht=/\/+/g;function $e(p,_){return typeof p=="object"&&p!==null&&p.key!=null?Xt(""+p.key):_.toString(36)}function rt(p,_,W,Y,Z){var b=typeof p;(b==="undefined"||b==="boolean")&&(p=null);var ie=!1;if(p===null)ie=!0;else switch(b){case"string":case"number":ie=!0;break;case"object":switch(p.$$typeof){case a:case y:ie=!0}}if(ie)return ie=p,Z=Z(ie),p=Y===""?"."+$e(ie,0):Y,Ne(Z)?(W="",p!=null&&(W=p.replace(ht,"$&/")+"/"),rt(Z,_,W,"",function(Be){return Be})):Z!=null&&(wt(Z)&&(Z=Tt(Z,W+(!Z.key||ie&&ie.key===Z.key?"":(""+Z.key).replace(ht,"$&/")+"/")+p)),_.push(Z)),1;if(ie=0,Y=Y===""?".":Y+":",Ne(p))for(var ne=0;ne<p.length;ne++){b=p[ne];var ae=Y+$e(b,ne);ie+=rt(b,_,W,ae,Z)}else if(ae=$(p),typeof ae=="function")for(p=ae.call(p),ne=0;!(b=p.next()).done;)b=b.value,ae=Y+$e(b,ne++),ie+=rt(b,_,W,ae,Z);else if(b==="object")throw _=String(p),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return ie}function mt(p,_,W){if(p==null)return p;var Y=[],Z=0;return rt(p,Y,"","",function(b){return _.call(W,b,Z++)}),Y}function Fe(p){if(p._status===-1){var _=p._result;_=_(),_.then(function(W){(p._status===0||p._status===-1)&&(p._status=1,p._result=W)},function(W){(p._status===0||p._status===-1)&&(p._status=2,p._result=W)}),p._status===-1&&(p._status=0,p._result=_)}if(p._status===1)return p._result.default;throw p._result}var pe={current:null},z={transition:null},U={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:z,ReactCurrentOwner:Re};function L(){throw Error("act(...) is not supported in production builds of React.")}return Q.Children={map:mt,forEach:function(p,_,W){mt(p,function(){_.apply(this,arguments)},W)},count:function(p){var _=0;return mt(p,function(){_++}),_},toArray:function(p){return mt(p,function(_){return _})||[]},only:function(p){if(!wt(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},Q.Component=te,Q.Fragment=c,Q.Profiler=k,Q.PureComponent=pt,Q.StrictMode=E,Q.Suspense=N,Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Q.act=L,Q.cloneElement=function(p,_,W){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var Y=G({},p.props),Z=p.key,b=p.ref,ie=p._owner;if(_!=null){if(_.ref!==void 0&&(b=_.ref,ie=Re.current),_.key!==void 0&&(Z=""+_.key),p.type&&p.type.defaultProps)var ne=p.type.defaultProps;for(ae in _)nt.call(_,ae)&&!Ie.hasOwnProperty(ae)&&(Y[ae]=_[ae]===void 0&&ne!==void 0?ne[ae]:_[ae])}var ae=arguments.length-2;if(ae===1)Y.children=W;else if(1<ae){ne=Array(ae);for(var Be=0;Be<ae;Be++)ne[Be]=arguments[Be+2];Y.children=ne}return{$$typeof:a,type:p.type,key:Z,ref:b,props:Y,_owner:ie}},Q.createContext=function(p){return p={$$typeof:v,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:C,_context:p},p.Consumer=p},Q.createElement=Je,Q.createFactory=function(p){var _=Je.bind(null,p);return _.type=p,_},Q.createRef=function(){return{current:null}},Q.forwardRef=function(p){return{$$typeof:T,render:p}},Q.isValidElement=wt,Q.lazy=function(p){return{$$typeof:P,_payload:{_status:-1,_result:p},_init:Fe}},Q.memo=function(p,_){return{$$typeof:M,type:p,compare:_===void 0?null:_}},Q.startTransition=function(p){var _=z.transition;z.transition={};try{p()}finally{z.transition=_}},Q.unstable_act=L,Q.useCallback=function(p,_){return pe.current.useCallback(p,_)},Q.useContext=function(p){return pe.current.useContext(p)},Q.useDebugValue=function(){},Q.useDeferredValue=function(p){return pe.current.useDeferredValue(p)},Q.useEffect=function(p,_){return pe.current.useEffect(p,_)},Q.useId=function(){return pe.current.useId()},Q.useImperativeHandle=function(p,_,W){return pe.current.useImperativeHandle(p,_,W)},Q.useInsertionEffect=function(p,_){return pe.current.useInsertionEffect(p,_)},Q.useLayoutEffect=function(p,_){return pe.current.useLayoutEffect(p,_)},Q.useMemo=function(p,_){return pe.current.useMemo(p,_)},Q.useReducer=function(p,_,W){return pe.current.useReducer(p,_,W)},Q.useRef=function(p){return pe.current.useRef(p)},Q.useState=function(p){return pe.current.useState(p)},Q.useSyncExternalStore=function(p,_,W){return pe.current.useSyncExternalStore(p,_,W)},Q.useTransition=function(){return pe.current.useTransition()},Q.version="18.3.1",Q}var qa;function $o(){return qa||(qa=1,Fo.exports=Gd()),Fo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha;function Zd(){if(Ha)return kr;Ha=1;var a=$o(),y=Symbol.for("react.element"),c=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,k=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function v(T,N,M){var P,V={},$=null,B=null;M!==void 0&&($=""+M),N.key!==void 0&&($=""+N.key),N.ref!==void 0&&(B=N.ref);for(P in N)E.call(N,P)&&!C.hasOwnProperty(P)&&(V[P]=N[P]);if(T&&T.defaultProps)for(P in N=T.defaultProps,N)V[P]===void 0&&(V[P]=N[P]);return{$$typeof:y,type:T,key:$,ref:B,props:V,_owner:k.current}}return kr.Fragment=c,kr.jsx=v,kr.jsxs=v,kr}var Ua;function bd(){return Ua||(Ua=1,Io.exports=Zd()),Io.exports}var s=bd(),J=$o();const ef=Xd(J);var Fl={},Do={exports:{}},Ae={},Mo={exports:{}},qo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa;function tf(){return Aa||(Aa=1,(function(a){function y(z,U){var L=z.length;z.push(U);e:for(;0<L;){var p=L-1>>>1,_=z[p];if(0<k(_,U))z[p]=U,z[L]=_,L=p;else break e}}function c(z){return z.length===0?null:z[0]}function E(z){if(z.length===0)return null;var U=z[0],L=z.pop();if(L!==U){z[0]=L;e:for(var p=0,_=z.length,W=_>>>1;p<W;){var Y=2*(p+1)-1,Z=z[Y],b=Y+1,ie=z[b];if(0>k(Z,L))b<_&&0>k(ie,Z)?(z[p]=ie,z[b]=L,p=b):(z[p]=Z,z[Y]=L,p=Y);else if(b<_&&0>k(ie,L))z[p]=ie,z[b]=L,p=b;else break e}}return U}function k(z,U){var L=z.sortIndex-U.sortIndex;return L!==0?L:z.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;a.unstable_now=function(){return C.now()}}else{var v=Date,T=v.now();a.unstable_now=function(){return v.now()-T}}var N=[],M=[],P=1,V=null,$=3,B=!1,G=!1,K=!1,te=typeof setTimeout=="function"?setTimeout:null,Te=typeof clearTimeout=="function"?clearTimeout:null,pt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function tt(z){for(var U=c(M);U!==null;){if(U.callback===null)E(M);else if(U.startTime<=z)E(M),U.sortIndex=U.expirationTime,y(N,U);else break;U=c(M)}}function Ne(z){if(K=!1,tt(z),!G)if(c(N)!==null)G=!0,Fe(nt);else{var U=c(M);U!==null&&pe(Ne,U.startTime-z)}}function nt(z,U){G=!1,K&&(K=!1,Te(Je),Je=-1),B=!0;var L=$;try{for(tt(U),V=c(N);V!==null&&(!(V.expirationTime>U)||z&&!Xt());){var p=V.callback;if(typeof p=="function"){V.callback=null,$=V.priorityLevel;var _=p(V.expirationTime<=U);U=a.unstable_now(),typeof _=="function"?V.callback=_:V===c(N)&&E(N),tt(U)}else E(N);V=c(N)}if(V!==null)var W=!0;else{var Y=c(M);Y!==null&&pe(Ne,Y.startTime-U),W=!1}return W}finally{V=null,$=L,B=!1}}var Re=!1,Ie=null,Je=-1,Tt=5,wt=-1;function Xt(){return!(a.unstable_now()-wt<Tt)}function ht(){if(Ie!==null){var z=a.unstable_now();wt=z;var U=!0;try{U=Ie(!0,z)}finally{U?$e():(Re=!1,Ie=null)}}else Re=!1}var $e;if(typeof pt=="function")$e=function(){pt(ht)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,mt=rt.port2;rt.port1.onmessage=ht,$e=function(){mt.postMessage(null)}}else $e=function(){te(ht,0)};function Fe(z){Ie=z,Re||(Re=!0,$e())}function pe(z,U){Je=te(function(){z(a.unstable_now())},U)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){G||B||(G=!0,Fe(nt))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return $},a.unstable_getFirstCallbackNode=function(){return c(N)},a.unstable_next=function(z){switch($){case 1:case 2:case 3:var U=3;break;default:U=$}var L=$;$=U;try{return z()}finally{$=L}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=$;$=z;try{return U()}finally{$=L}},a.unstable_scheduleCallback=function(z,U,L){var p=a.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?p+L:p):L=p,z){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=L+_,z={id:P++,callback:U,priorityLevel:z,startTime:L,expirationTime:_,sortIndex:-1},L>p?(z.sortIndex=L,y(M,z),c(N)===null&&z===c(M)&&(K?(Te(Je),Je=-1):K=!0,pe(Ne,L-p))):(z.sortIndex=_,y(N,z),G||B||(G=!0,Fe(nt))),z},a.unstable_shouldYield=Xt,a.unstable_wrapCallback=function(z){var U=$;return function(){var L=$;$=U;try{return z.apply(this,arguments)}finally{$=L}}}})(qo)),qo}var $a;function nf(){return $a||($a=1,Mo.exports=tf()),Mo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba;function rf(){if(Ba)return Ae;Ba=1;var a=$o(),y=nf();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E=new Set,k={};function C(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(k[e]=t,e=0;e<t.length;e++)E.add(t[e])}var T=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},V={};function $(e){return N.call(V,e)?!0:N.call(P,e)?!1:M.test(e)?V[e]=!0:(P[e]=!0,!1)}function B(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G(e,t,n,r){if(t===null||typeof t>"u"||B(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){te[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){te[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){te[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){te[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var Te=/[\-:]([a-z])/g;function pt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Te,pt);te[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Te,pt);te[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Te,pt);te[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){te[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),te.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){te[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function tt(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G(t,n,l,r)&&(n=null),r||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ne=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),Re=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),wt=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),z=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,p;function _(e){if(p===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);p=t&&t[1]||""}return`
`+p+e}var W=!1;function Y(e,t){if(!e||W)return"";W=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{W=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_(e):""}function Z(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function b(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Re:return"Portal";case Tt:return"Profiler";case Je:return"StrictMode";case $e:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xt:return(e.displayName||"Context")+".Consumer";case wt:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mt:return t=e.displayName||null,t!==null?t:b(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return b(e(t))}catch{}}return null}function ie(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return b(t);case 8:return t===Je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Be(e){var t=ae(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=Be(e))}function Bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ne(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wo(e,t){t=t.checked,t!=null&&tt(e,"checked",t,!1)}function Al(e,t){Wo(e,t);var n=ne(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$l(e,t.type,n):t.hasOwnProperty("defaultValue")&&$l(e,t.type,ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ko(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $l(e,t,n){(t!=="number"||Er(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ne(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(Mn(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ne(n)}}function Jo(e,t){var n=ne(t.value),r=ne(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Go=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ec=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){ec.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function Zo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function bo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Zo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var tc=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(tc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,pn=null,hn=null;function es(e){if(e=sr(e)){if(typeof Yl!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Xr(t),Yl(e.stateNode,e.type,t))}}function ts(e){pn?hn?hn.push(e):hn=[e]:pn=e}function ns(){if(pn){var e=pn,t=hn;if(hn=pn=null,es(e),t)for(e=0;e<t.length;e++)es(t[e])}}function rs(e,t){return e(t)}function ls(){}var Xl=!1;function is(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return rs(e,t,n)}finally{Xl=!1,(pn!==null||hn!==null)&&(ls(),ns())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=Xr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Gl=!1;if(T)try{var An={};Object.defineProperty(An,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Gl=!1}function nc(e,t,n,r,l,i,o,u,d){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(w){this.onError(w)}}var $n=!1,zr=null,Pr=!1,Zl=null,rc={onError:function(e){$n=!0,zr=e}};function lc(e,t,n,r,l,i,o,u,d){$n=!1,zr=null,nc.apply(rc,arguments)}function ic(e,t,n,r,l,i,o,u,d){if(lc.apply(this,arguments),$n){if($n){var g=zr;$n=!1,zr=null}else throw Error(c(198));Pr||(Pr=!0,Zl=g)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function os(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ss(e){if(Gt(e)!==e)throw Error(c(188))}function oc(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ss(l),e;if(i===r)return ss(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function us(e){return e=oc(e),e!==null?as(e):null}function as(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=as(e);if(t!==null)return t;e=e.sibling}return null}var cs=y.unstable_scheduleCallback,ds=y.unstable_cancelCallback,sc=y.unstable_shouldYield,uc=y.unstable_requestPaint,me=y.unstable_now,ac=y.unstable_getCurrentPriorityLevel,bl=y.unstable_ImmediatePriority,fs=y.unstable_UserBlockingPriority,Tr=y.unstable_NormalPriority,cc=y.unstable_LowPriority,ps=y.unstable_IdlePriority,Rr=null,yt=null;function dc(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Rr,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:hc,fc=Math.log,pc=Math.LN2;function hc(e){return e>>>=0,e===0?32:31-(fc(e)/pc|0)|0}var Or=64,Lr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=Bn(u):(i&=o,i!==0&&(r=Bn(i)))}else o=n&~l,o!==0?r=Bn(o):i!==0&&(r=Bn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),l=1<<n,r|=e[n],t&=~l;return r}function mc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-lt(i),u=1<<o,d=l[o];d===-1?((u&n)===0||(u&r)!==0)&&(l[o]=mc(u,t)):d<=t&&(e.expiredLanes|=u),i&=~u}}function ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hs(){var e=Or;return Or<<=1,(Or&4194240)===0&&(Or=64),e}function ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function gc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-lt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ni(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var re=0;function ms(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ys,ri,gs,vs,xs,li=!1,Fr=[],Rt=null,Ot=null,Lt=null,Wn=new Map,Kn=new Map,It=[],vc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Qn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function xc(e,t,n,r,l){switch(t){case"focusin":return Rt=Qn(Rt,e,t,n,r,l),!0;case"dragenter":return Ot=Qn(Ot,e,t,n,r,l),!0;case"mouseover":return Lt=Qn(Lt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Wn.set(i,Qn(Wn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Kn.set(i,Qn(Kn.get(i)||null,e,t,n,r,l)),!0}return!1}function ws(e){var t=Zt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=os(n),t!==null){e.blockedOn=t,xs(e.priority,function(){gs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=sr(n),t!==null&&ri(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){Dr(e)&&n.delete(t)}function _c(){li=!1,Rt!==null&&Dr(Rt)&&(Rt=null),Ot!==null&&Dr(Ot)&&(Ot=null),Lt!==null&&Dr(Lt)&&(Lt=null),Wn.forEach(ks),Kn.forEach(ks)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,li||(li=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,_c)))}function Yn(e){function t(l){return Jn(l,e)}if(0<Fr.length){Jn(Fr[0],e);for(var n=1;n<Fr.length;n++){var r=Fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Jn(Rt,e),Ot!==null&&Jn(Ot,e),Lt!==null&&Jn(Lt,e),Wn.forEach(t),Kn.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)ws(n),n.blockedOn===null&&It.shift()}var mn=Ne.ReactCurrentBatchConfig,Mr=!0;function wc(e,t,n,r){var l=re,i=mn.transition;mn.transition=null;try{re=1,ii(e,t,n,r)}finally{re=l,mn.transition=i}}function kc(e,t,n,r){var l=re,i=mn.transition;mn.transition=null;try{re=4,ii(e,t,n,r)}finally{re=l,mn.transition=i}}function ii(e,t,n,r){if(Mr){var l=oi(e,t,n,r);if(l===null)Si(e,t,r,qr,n),_s(e,r);else if(xc(l,e,t,n,r))r.stopPropagation();else if(_s(e,r),t&4&&-1<vc.indexOf(e)){for(;l!==null;){var i=sr(l);if(i!==null&&ys(i),i=oi(e,t,n,r),i===null&&Si(e,t,r,qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Si(e,t,r,null,n)}}var qr=null;function oi(e,t,n,r){if(qr=null,e=Jl(r),e=Zt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=os(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function Ss(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ac()){case bl:return 1;case fs:return 4;case Tr:case cc:return 16;case ps:return 536870912;default:return 16}default:return 16}}var Ft=null,si=null,Hr=null;function js(){if(Hr)return Hr;var e,t=si,n=t.length,r,l="value"in Ft?Ft.value:Ft.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Hr=l.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function Ns(){return!1}function Ve(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ar:Ns,this.isPropagationStopped=Ns,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=Ve(yn),Xn=L({},yn,{view:0,detail:0}),Sc=Ve(Xn),ai,ci,Gn,$r=L({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(ai=e.screenX-Gn.screenX,ci=e.screenY-Gn.screenY):ci=ai=0,Gn=e),ai)},movementY:function(e){return"movementY"in e?e.movementY:ci}}),Es=Ve($r),jc=L({},$r,{dataTransfer:0}),Nc=Ve(jc),Ec=L({},Xn,{relatedTarget:0}),di=Ve(Ec),Cc=L({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),zc=Ve(Cc),Pc=L({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tc=Ve(Pc),Rc=L({},yn,{data:0}),Cs=Ve(Rc),Oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ic[e])?!!t[e]:!1}function fi(){return Fc}var Dc=L({},Xn,{key:function(e){if(e.key){var t=Oc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mc=Ve(Dc),qc=L({},$r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zs=Ve(qc),Hc=L({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),Uc=Ve(Hc),Ac=L({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$c=Ve(Ac),Bc=L({},$r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vc=Ve(Bc),Wc=[9,13,27,32],pi=T&&"CompositionEvent"in window,Zn=null;T&&"documentMode"in document&&(Zn=document.documentMode);var Kc=T&&"TextEvent"in window&&!Zn,Ps=T&&(!pi||Zn&&8<Zn&&11>=Zn),Ts=" ",Rs=!1;function Os(e,t){switch(e){case"keyup":return Wc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ls(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Qc(e,t){switch(e){case"compositionend":return Ls(t);case"keypress":return t.which!==32?null:(Rs=!0,Ts);case"textInput":return e=t.data,e===Ts&&Rs?null:e;default:return null}}function Jc(e,t){if(gn)return e==="compositionend"||!pi&&Os(e,t)?(e=js(),Hr=si=Ft=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ps&&t.locale!=="ko"?null:t.data;default:return null}}var Yc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yc[e.type]:t==="textarea"}function Fs(e,t,n,r){ts(r),t=Qr(t,"onChange"),0<t.length&&(n=new ui("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bn=null,er=null;function Xc(e){bs(e,0)}function Br(e){var t=kn(e);if(Bo(t))return e}function Gc(e,t){if(e==="change")return t}var Ds=!1;if(T){var hi;if(T){var mi="oninput"in document;if(!mi){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),mi=typeof Ms.oninput=="function"}hi=mi}else hi=!1;Ds=hi&&(!document.documentMode||9<document.documentMode)}function qs(){bn&&(bn.detachEvent("onpropertychange",Hs),er=bn=null)}function Hs(e){if(e.propertyName==="value"&&Br(er)){var t=[];Fs(t,er,e,Jl(e)),is(Xc,t)}}function Zc(e,t,n){e==="focusin"?(qs(),bn=t,er=n,bn.attachEvent("onpropertychange",Hs)):e==="focusout"&&qs()}function bc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(er)}function ed(e,t){if(e==="click")return Br(t)}function td(e,t){if(e==="input"||e==="change")return Br(t)}function nd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:nd;function tr(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!N.call(t,l)||!it(e[l],t[l]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,t){var n=Us(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Us(n)}}function $s(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$s(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bs(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Er(e.document)}return t}function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rd(e){var t=Bs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$s(n.ownerDocument.documentElement,n)){if(r!==null&&yi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=As(n,i);var o=As(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ld=T&&"documentMode"in document&&11>=document.documentMode,vn=null,gi=null,nr=null,vi=!1;function Vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vi||vn==null||vn!==Er(r)||(r=vn,"selectionStart"in r&&yi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&tr(nr,r)||(nr=r,r=Qr(gi,"onSelect"),0<r.length&&(t=new ui("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},xi={},Ws={};T&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Wr(e){if(xi[e])return xi[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ws)return xi[e]=t[n];return e}var Ks=Wr("animationend"),Qs=Wr("animationiteration"),Js=Wr("animationstart"),Ys=Wr("transitionend"),Xs=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Xs.set(e,t),C(t,[e])}for(var _i=0;_i<Gs.length;_i++){var wi=Gs[_i],id=wi.toLowerCase(),od=wi[0].toUpperCase()+wi.slice(1);Dt(id,"on"+od)}Dt(Ks,"onAnimationEnd"),Dt(Qs,"onAnimationIteration"),Dt(Js,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Ys,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sd=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function Zs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ic(r,t,void 0,e),e.currentTarget=null}function bs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,g=u.currentTarget;if(u=u.listener,d!==i&&l.isPropagationStopped())break e;Zs(l,u,g),i=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,g=u.currentTarget,u=u.listener,d!==i&&l.isPropagationStopped())break e;Zs(l,u,g),i=d}}}if(Pr)throw e=Zl,Pr=!1,Zl=null,e}function se(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function ki(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Kr]){e[Kr]=!0,E.forEach(function(n){n!=="selectionchange"&&(sd.has(n)||ki(n,!1,e),ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,ki("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Ss(t)){case 1:var l=wc;break;case 4:l=kc;break;default:l=ii}n=l.bind(null,t,n,e),l=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Si(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Zt(u),o===null)return;if(d=o.tag,d===5||d===6){r=i=o;continue e}u=u.parentNode}}r=r.return}is(function(){var g=i,w=Jl(n),S=[];e:{var x=Xs.get(e);if(x!==void 0){var R=ui,I=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":R=Mc;break;case"focusin":I="focus",R=di;break;case"focusout":I="blur",R=di;break;case"beforeblur":case"afterblur":R=di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Nc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Uc;break;case Ks:case Qs:case Js:R=zc;break;case Ys:R=$c;break;case"scroll":R=Sc;break;case"wheel":R=Vc;break;case"copy":case"cut":case"paste":R=Tc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=zs}var F=(t&4)!==0,ye=!F&&e==="scroll",h=F?x!==null?x+"Capture":null:x;F=[];for(var f=g,m;f!==null;){m=f;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,h!==null&&(j=Un(f,h),j!=null&&F.push(ir(f,j,m)))),ye)break;f=f.return}0<F.length&&(x=new R(x,I,null,n,w),S.push({event:x,listeners:F}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",x&&n!==Ql&&(I=n.relatedTarget||n.fromElement)&&(Zt(I)||I[kt]))break e;if((R||x)&&(x=w.window===w?w:(x=w.ownerDocument)?x.defaultView||x.parentWindow:window,R?(I=n.relatedTarget||n.toElement,R=g,I=I?Zt(I):null,I!==null&&(ye=Gt(I),I!==ye||I.tag!==5&&I.tag!==6)&&(I=null)):(R=null,I=g),R!==I)){if(F=Es,j="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(F=zs,j="onPointerLeave",h="onPointerEnter",f="pointer"),ye=R==null?x:kn(R),m=I==null?x:kn(I),x=new F(j,f+"leave",R,n,w),x.target=ye,x.relatedTarget=m,j=null,Zt(w)===g&&(F=new F(h,f+"enter",I,n,w),F.target=m,F.relatedTarget=ye,j=F),ye=j,R&&I)t:{for(F=R,h=I,f=0,m=F;m;m=_n(m))f++;for(m=0,j=h;j;j=_n(j))m++;for(;0<f-m;)F=_n(F),f--;for(;0<m-f;)h=_n(h),m--;for(;f--;){if(F===h||h!==null&&F===h.alternate)break t;F=_n(F),h=_n(h)}F=null}else F=null;R!==null&&tu(S,x,R,F,!1),I!==null&&ye!==null&&tu(S,ye,I,F,!0)}}e:{if(x=g?kn(g):window,R=x.nodeName&&x.nodeName.toLowerCase(),R==="select"||R==="input"&&x.type==="file")var D=Gc;else if(Is(x))if(Ds)D=td;else{D=bc;var q=Zc}else(R=x.nodeName)&&R.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(D=ed);if(D&&(D=D(e,g))){Fs(S,D,n,w);break e}q&&q(e,x,g),e==="focusout"&&(q=x._wrapperState)&&q.controlled&&x.type==="number"&&$l(x,"number",x.value)}switch(q=g?kn(g):window,e){case"focusin":(Is(q)||q.contentEditable==="true")&&(vn=q,gi=g,nr=null);break;case"focusout":nr=gi=vn=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,Vs(S,n,w);break;case"selectionchange":if(ld)break;case"keydown":case"keyup":Vs(S,n,w)}var H;if(pi)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else gn?Os(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Ps&&n.locale!=="ko"&&(gn||A!=="onCompositionStart"?A==="onCompositionEnd"&&gn&&(H=js()):(Ft=w,si="value"in Ft?Ft.value:Ft.textContent,gn=!0)),q=Qr(g,A),0<q.length&&(A=new Cs(A,e,null,n,w),S.push({event:A,listeners:q}),H?A.data=H:(H=Ls(n),H!==null&&(A.data=H)))),(H=Kc?Qc(e,n):Jc(e,n))&&(g=Qr(g,"onBeforeInput"),0<g.length&&(w=new Cs("onBeforeInput","beforeinput",null,n,w),S.push({event:w,listeners:g}),w.data=H))}bs(S,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Un(e,n),i!=null&&r.unshift(ir(e,i,l)),i=Un(e,t),i!=null&&r.push(ir(e,i,l))),e=e.return}return r}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,d=u.alternate,g=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&g!==null&&(u=g,l?(d=Un(n,i),d!=null&&o.unshift(ir(n,d,u))):l||(d=Un(n,i),d!=null&&o.push(ir(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ud=/\r\n?/g,ad=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(ud,`
`).replace(ad,"")}function Jr(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(c(425))}function Yr(){}var ji=null,Ni=null;function Ei(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,cd=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,dd=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(fd)}:Ci;function fd(e){setTimeout(function(){throw e})}function zi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Yn(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),gt="__reactFiber$"+wn,or="__reactProps$"+wn,kt="__reactContainer$"+wn,Pi="__reactEvents$"+wn,pd="__reactListeners$"+wn,hd="__reactHandles$"+wn;function Zt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[gt])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[gt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Xr(e){return e[or]||null}var Ti=[],Sn=-1;function qt(e){return{current:e}}function ue(e){0>Sn||(e.current=Ti[Sn],Ti[Sn]=null,Sn--)}function oe(e,t){Sn++,Ti[Sn]=e.current,e.current=t}var Ht={},Ee=qt(Ht),De=qt(!1),bt=Ht;function jn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Me(e){return e=e.childContextTypes,e!=null}function Gr(){ue(De),ue(Ee)}function iu(e,t,n){if(Ee.current!==Ht)throw Error(c(168));oe(Ee,t),oe(De,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(c(108,ie(e)||"Unknown",l));return L({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,bt=Ee.current,oe(Ee,e),oe(De,De.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=ou(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,ue(De),ue(Ee),oe(Ee,e)):ue(De),oe(De,n)}var St=null,br=!1,Ri=!1;function uu(e){St===null?St=[e]:St.push(e)}function md(e){br=!0,uu(e)}function Ut(){if(!Ri&&St!==null){Ri=!0;var e=0,t=re;try{var n=St;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,br=!1}catch(l){throw St!==null&&(St=St.slice(e+1)),cs(bl,Ut),l}finally{re=t,Ri=!1}}return null}var Nn=[],En=0,el=null,tl=0,Ye=[],Xe=0,en=null,jt=1,Nt="";function tn(e,t){Nn[En++]=tl,Nn[En++]=el,el=e,tl=t}function au(e,t,n){Ye[Xe++]=jt,Ye[Xe++]=Nt,Ye[Xe++]=en,en=e;var r=jt;e=Nt;var l=32-lt(r)-1;r&=~(1<<l),n+=1;var i=32-lt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,jt=1<<32-lt(t)+l|n<<l|r,Nt=i+e}else jt=1<<i|n<<l|r,Nt=e}function Oi(e){e.return!==null&&(tn(e,1),au(e,1,0))}function Li(e){for(;e===el;)el=Nn[--En],Nn[En]=null,tl=Nn[--En],Nn[En]=null;for(;e===en;)en=Ye[--Xe],Ye[Xe]=null,Nt=Ye[--Xe],Ye[Xe]=null,jt=Ye[--Xe],Ye[Xe]=null}var We=null,Ke=null,ce=!1,ot=null;function cu(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ke=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:jt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ke=null,!0):!1;default:return!1}}function Ii(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(ce){var t=Ke;if(t){var n=t;if(!du(e,t)){if(Ii(e))throw Error(c(418));t=Mt(n.nextSibling);var r=We;t&&du(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,ce=!1,We=e)}}else{if(Ii(e))throw Error(c(418));e.flags=e.flags&-4097|2,ce=!1,We=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function nl(e){if(e!==We)return!1;if(!ce)return fu(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ei(e.type,e.memoizedProps)),t&&(t=Ke)){if(Ii(e))throw pu(),Error(c(418));for(;t;)cu(e,t),t=Mt(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=We?Mt(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=Ke;e;)e=Mt(e.nextSibling)}function Cn(){Ke=We=null,ce=!1}function Di(e){ot===null?ot=[e]:ot.push(e)}var yd=Ne.ReactCurrentBatchConfig;function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function rl(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function mu(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function l(h,f){return h=Jt(h,f),h.index=0,h.sibling=null,h}function i(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,f,m,j){return f===null||f.tag!==6?(f=zo(m,h.mode,j),f.return=h,f):(f=l(f,m),f.return=h,f)}function d(h,f,m,j){var D=m.type;return D===Ie?w(h,f,m.props.children,j,m.key):f!==null&&(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Fe&&hu(D)===f.type)?(j=l(f,m.props),j.ref=ur(h,f,m),j.return=h,j):(j=Cl(m.type,m.key,m.props,null,h.mode,j),j.ref=ur(h,f,m),j.return=h,j)}function g(h,f,m,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Po(m,h.mode,j),f.return=h,f):(f=l(f,m.children||[]),f.return=h,f)}function w(h,f,m,j,D){return f===null||f.tag!==7?(f=cn(m,h.mode,j,D),f.return=h,f):(f=l(f,m),f.return=h,f)}function S(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zo(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nt:return m=Cl(f.type,f.key,f.props,null,h.mode,m),m.ref=ur(h,null,f),m.return=h,m;case Re:return f=Po(f,h.mode,m),f.return=h,f;case Fe:var j=f._init;return S(h,j(f._payload),m)}if(Mn(f)||U(f))return f=cn(f,h.mode,m,null),f.return=h,f;rl(h,f)}return null}function x(h,f,m,j){var D=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return D!==null?null:u(h,f,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nt:return m.key===D?d(h,f,m,j):null;case Re:return m.key===D?g(h,f,m,j):null;case Fe:return D=m._init,x(h,f,D(m._payload),j)}if(Mn(m)||U(m))return D!==null?null:w(h,f,m,j,null);rl(h,m)}return null}function R(h,f,m,j,D){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(m)||null,u(f,h,""+j,D);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case nt:return h=h.get(j.key===null?m:j.key)||null,d(f,h,j,D);case Re:return h=h.get(j.key===null?m:j.key)||null,g(f,h,j,D);case Fe:var q=j._init;return R(h,f,m,q(j._payload),D)}if(Mn(j)||U(j))return h=h.get(m)||null,w(f,h,j,D,null);rl(f,j)}return null}function I(h,f,m,j){for(var D=null,q=null,H=f,A=f=0,ke=null;H!==null&&A<m.length;A++){H.index>A?(ke=H,H=null):ke=H.sibling;var ee=x(h,H,m[A],j);if(ee===null){H===null&&(H=ke);break}e&&H&&ee.alternate===null&&t(h,H),f=i(ee,f,A),q===null?D=ee:q.sibling=ee,q=ee,H=ke}if(A===m.length)return n(h,H),ce&&tn(h,A),D;if(H===null){for(;A<m.length;A++)H=S(h,m[A],j),H!==null&&(f=i(H,f,A),q===null?D=H:q.sibling=H,q=H);return ce&&tn(h,A),D}for(H=r(h,H);A<m.length;A++)ke=R(H,h,A,m[A],j),ke!==null&&(e&&ke.alternate!==null&&H.delete(ke.key===null?A:ke.key),f=i(ke,f,A),q===null?D=ke:q.sibling=ke,q=ke);return e&&H.forEach(function(Yt){return t(h,Yt)}),ce&&tn(h,A),D}function F(h,f,m,j){var D=U(m);if(typeof D!="function")throw Error(c(150));if(m=D.call(m),m==null)throw Error(c(151));for(var q=D=null,H=f,A=f=0,ke=null,ee=m.next();H!==null&&!ee.done;A++,ee=m.next()){H.index>A?(ke=H,H=null):ke=H.sibling;var Yt=x(h,H,ee.value,j);if(Yt===null){H===null&&(H=ke);break}e&&H&&Yt.alternate===null&&t(h,H),f=i(Yt,f,A),q===null?D=Yt:q.sibling=Yt,q=Yt,H=ke}if(ee.done)return n(h,H),ce&&tn(h,A),D;if(H===null){for(;!ee.done;A++,ee=m.next())ee=S(h,ee.value,j),ee!==null&&(f=i(ee,f,A),q===null?D=ee:q.sibling=ee,q=ee);return ce&&tn(h,A),D}for(H=r(h,H);!ee.done;A++,ee=m.next())ee=R(H,h,A,ee.value,j),ee!==null&&(e&&ee.alternate!==null&&H.delete(ee.key===null?A:ee.key),f=i(ee,f,A),q===null?D=ee:q.sibling=ee,q=ee);return e&&H.forEach(function(Yd){return t(h,Yd)}),ce&&tn(h,A),D}function ye(h,f,m,j){if(typeof m=="object"&&m!==null&&m.type===Ie&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case nt:e:{for(var D=m.key,q=f;q!==null;){if(q.key===D){if(D=m.type,D===Ie){if(q.tag===7){n(h,q.sibling),f=l(q,m.props.children),f.return=h,h=f;break e}}else if(q.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Fe&&hu(D)===q.type){n(h,q.sibling),f=l(q,m.props),f.ref=ur(h,q,m),f.return=h,h=f;break e}n(h,q);break}else t(h,q);q=q.sibling}m.type===Ie?(f=cn(m.props.children,h.mode,j,m.key),f.return=h,h=f):(j=Cl(m.type,m.key,m.props,null,h.mode,j),j.ref=ur(h,f,m),j.return=h,h=j)}return o(h);case Re:e:{for(q=m.key;f!==null;){if(f.key===q)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=l(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Po(m,h.mode,j),f.return=h,h=f}return o(h);case Fe:return q=m._init,ye(h,f,q(m._payload),j)}if(Mn(m))return I(h,f,m,j);if(U(m))return F(h,f,m,j);rl(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=l(f,m),f.return=h,h=f):(n(h,f),f=zo(m,h.mode,j),f.return=h,h=f),o(h)):n(h,f)}return ye}var zn=mu(!0),yu=mu(!1),ll=qt(null),il=null,Pn=null,Mi=null;function qi(){Mi=Pn=il=null}function Hi(e){var t=ll.current;ue(ll),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){il=e,Mi=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(qe=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Mi!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(il===null)throw Error(c(308));Pn=e,il.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var nn=null;function Ai(e){nn===null?nn=[e]:nn.push(e)}function gu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ai(t)):(n.next=l.next,l.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Et(e,n)}return l=r.interleaved,l===null?(t.next=t,Ai(r)):(t.next=l.next,l.next=t),r.interleaved=t,Et(e,n)}function ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ni(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var l=e.updateQueue;At=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,g=d.next;d.next=null,o===null?i=g:o.next=g,o=d;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==o&&(u===null?w.firstBaseUpdate=g:u.next=g,w.lastBaseUpdate=d))}if(i!==null){var S=l.baseState;o=0,w=g=d=null,u=i;do{var x=u.lane,R=u.eventTime;if((r&x)===x){w!==null&&(w=w.next={eventTime:R,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var I=e,F=u;switch(x=t,R=n,F.tag){case 1:if(I=F.payload,typeof I=="function"){S=I.call(R,S,x);break e}S=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=F.payload,x=typeof I=="function"?I.call(R,S,x):I,x==null)break e;S=L({},S,x);break e;case 2:At=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,x=l.effects,x===null?l.effects=[u]:x.push(u))}else R={eventTime:R,lane:x,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(g=w=R,d=S):w=w.next=R,o|=x;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;x=u,u=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);if(w===null&&(d=S),l.baseState=d,l.firstBaseUpdate=g,l.lastBaseUpdate=w,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);on|=o,e.lanes=o,e.memoizedState=S}}function _u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(c(191,l));l.call(r)}}}var ar={},vt=qt(ar),cr=qt(ar),dr=qt(ar);function rn(e){if(e===ar)throw Error(c(174));return e}function Bi(e,t){switch(oe(dr,t),oe(cr,e),oe(vt,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}ue(vt),oe(vt,t)}function Rn(){ue(vt),ue(cr),ue(dr)}function wu(e){rn(dr.current);var t=rn(vt.current),n=Vl(t,e.type);t!==n&&(oe(cr,e),oe(vt,n))}function Vi(e){cr.current===e&&(ue(vt),ue(cr))}var de=qt(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function Ki(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var al=Ne.ReactCurrentDispatcher,Qi=Ne.ReactCurrentBatchConfig,ln=0,fe=null,ve=null,_e=null,cl=!1,fr=!1,pr=0,gd=0;function Ce(){throw Error(c(321))}function Ji(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Yi(e,t,n,r,l,i){if(ln=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,al.current=e===null||e.memoizedState===null?wd:kd,e=n(r,l),fr){i=0;do{if(fr=!1,pr=0,25<=i)throw Error(c(301));i+=1,_e=ve=null,t.updateQueue=null,al.current=Sd,e=n(r,l)}while(fr)}if(al.current=pl,t=ve!==null&&ve.next!==null,ln=0,_e=ve=fe=null,cl=!1,t)throw Error(c(300));return e}function Xi(){var e=pr!==0;return pr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?fe.memoizedState=_e=e:_e=_e.next=e,_e}function Ze(){if(ve===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=_e===null?fe.memoizedState:_e.next;if(t!==null)_e=t,ve=e;else{if(e===null)throw Error(c(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},_e===null?fe.memoizedState=_e=e:_e=_e.next=e}return _e}function hr(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=ve,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,d=null,g=i;do{var w=g.lane;if((ln&w)===w)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var S={lane:w,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(u=d=S,o=r):d=d.next=S,fe.lanes|=w,on|=w}g=g.next}while(g!==null&&g!==i);d===null?o=r:d.next=u,it(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,fe.lanes|=i,on|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);it(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ku(){}function Su(e,t){var n=fe,r=Ze(),l=t(),i=!it(r.memoizedState,l);if(i&&(r.memoizedState=l,qe=!0),r=r.queue,bi(Eu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,mr(9,Nu.bind(null,n,r,l,t),void 0,null),we===null)throw Error(c(349));(ln&30)!==0||ju(n,t,l)}return l}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nu(e,t,n,r){t.value=n,t.getSnapshot=r,Cu(t)&&zu(e)}function Eu(e,t,n){return n(function(){Cu(t)&&zu(e)})}function Cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function zu(e){var t=Et(e,1);t!==null&&ct(t,e,1,-1)}function Pu(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=_d.bind(null,fe,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tu(){return Ze().memoizedState}function dl(e,t,n,r){var l=xt();fe.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=Ze();r=r===void 0?null:r;var i=void 0;if(ve!==null){var o=ve.memoizedState;if(i=o.destroy,r!==null&&Ji(r,o.deps)){l.memoizedState=mr(t,n,i,r);return}}fe.flags|=e,l.memoizedState=mr(1|t,n,i,r)}function Ru(e,t){return dl(8390656,8,e,t)}function bi(e,t){return fl(2048,8,e,t)}function Ou(e,t){return fl(4,2,e,t)}function Lu(e,t){return fl(4,4,e,t)}function Iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Iu.bind(null,t,e),n)}function eo(){}function Du(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mu(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qu(e,t,n){return(ln&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n):(it(n,t)||(n=hs(),fe.lanes|=n,on|=n,e.baseState=!0),t)}function vd(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{re=n,Qi.transition=r}}function Hu(){return Ze().memoizedState}function xd(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(e))Au(t,n);else if(n=gu(e,t,n,r),n!==null){var l=Le();ct(n,e,r,l),$u(n,t,r)}}function _d(e,t,n){var r=Kt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Au(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,it(u,o)){var d=t.interleaved;d===null?(l.next=l,Ai(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=gu(e,t,l,r),n!==null&&(l=Le(),ct(n,e,r,l),$u(n,t,r))}}function Uu(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Au(e,t){fr=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $u(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ni(e,n)}}var pl={readContext:Ge,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},wd={readContext:Ge,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,dl(4194308,4,Iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return dl(4194308,4,e,t)},useInsertionEffect:function(e,t){return dl(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xd.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:eo,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=vd.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,l=xt();if(ce){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),we===null)throw Error(c(349));(ln&30)!==0||ju(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ru(Eu.bind(null,r,i,e),[e]),r.flags|=2048,mr(9,Nu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=xt(),t=we.identifierPrefix;if(ce){var n=Nt,r=jt;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kd={readContext:Ge,useCallback:Du,useContext:Ge,useEffect:bi,useImperativeHandle:Fu,useInsertionEffect:Ou,useLayoutEffect:Lu,useMemo:Mu,useReducer:Gi,useRef:Tu,useState:function(){return Gi(hr)},useDebugValue:eo,useDeferredValue:function(e){var t=Ze();return qu(t,ve.memoizedState,e)},useTransition:function(){var e=Gi(hr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ku,useSyncExternalStore:Su,useId:Hu,unstable_isNewReconciler:!1},Sd={readContext:Ge,useCallback:Du,useContext:Ge,useEffect:bi,useImperativeHandle:Fu,useInsertionEffect:Ou,useLayoutEffect:Lu,useMemo:Mu,useReducer:Zi,useRef:Tu,useState:function(){return Zi(hr)},useDebugValue:eo,useDeferredValue:function(e){var t=Ze();return ve===null?t.memoizedState=e:qu(t,ve.memoizedState,e)},useTransition:function(){var e=Zi(hr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ku,useSyncExternalStore:Su,useId:Hu,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function to(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),l=Kt(e),i=Ct(r,l);i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,l),t!==null&&(ct(t,e,l,r),ol(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),l=Kt(e),i=Ct(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,l),t!==null&&(ct(t,e,l,r),ol(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Kt(e),l=Ct(n,r);l.tag=2,t!=null&&(l.callback=t),t=$t(e,l,r),t!==null&&(ct(t,e,r,n),ol(t,e,r))}};function Bu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(l,i):!0}function Vu(e,t,n){var r=!1,l=Ht,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(l=Me(t)?bt:Ee.current,r=t.contextTypes,i=(r=r!=null)?jn(e,l):Ht),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function no(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},$i(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ge(i):(i=Me(t)?bt:Ee.current,l.context=jn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(to(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&hl.enqueueReplaceState(l,l.state,null),sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",r=t;do n+=Z(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ro(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jd=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wl||(wl=!0,_o=r),lo(e,t)},n}function Qu(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){lo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){lo(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qd.bind(null,e,t,n),t.then(e,e))}function Yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Nd=Ne.ReactCurrentOwner,qe=!1;function Oe(e,t,n,r){t.child=e===null?yu(t,null,n,r):zn(t,e.child,n,r)}function Gu(e,t,n,r,l){n=n.render;var i=t.ref;return Tn(t,l),r=Yi(e,t,n,r,i,l),n=Xi(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ce&&n&&Oi(t),t.flags|=1,Oe(e,t,r,l),t.child)}function Zu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Co(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,bu(e,t,i,r,l)):(e=Cl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(o,r)&&e.ref===t.ref)return zt(e,t,l)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function bu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(tr(i,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,zt(e,t,l)}return io(e,t,n,r,l)}function ea(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(In,Qe),Qe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(In,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(In,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(In,Qe),Qe|=r;return Oe(e,t,l,n),t.child}function ta(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function io(e,t,n,r,l){var i=Me(n)?bt:Ee.current;return i=jn(t,i),Tn(t,l),n=Yi(e,t,n,r,i,l),r=Xi(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ce&&r&&Oi(t),t.flags|=1,Oe(e,t,n,l),t.child)}function na(e,t,n,r,l){if(Me(n)){var i=!0;Zr(t)}else i=!1;if(Tn(t,l),t.stateNode===null)yl(e,t),Vu(t,n,r),no(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var d=o.context,g=n.contextType;typeof g=="object"&&g!==null?g=Ge(g):(g=Me(n)?bt:Ee.current,g=jn(t,g));var w=n.getDerivedStateFromProps,S=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function";S||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==g)&&Wu(t,o,r,g),At=!1;var x=t.memoizedState;o.state=x,sl(t,r,o,l),d=t.memoizedState,u!==r||x!==d||De.current||At?(typeof w=="function"&&(to(t,n,w,r),d=t.memoizedState),(u=At||Bu(t,n,u,r,x,d,g))?(S||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=g,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vu(e,t),u=t.memoizedProps,g=t.type===t.elementType?u:st(t.type,u),o.props=g,S=t.pendingProps,x=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ge(d):(d=Me(n)?bt:Ee.current,d=jn(t,d));var R=n.getDerivedStateFromProps;(w=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==S||x!==d)&&Wu(t,o,r,d),At=!1,x=t.memoizedState,o.state=x,sl(t,r,o,l);var I=t.memoizedState;u!==S||x!==I||De.current||At?(typeof R=="function"&&(to(t,n,R,r),I=t.memoizedState),(g=At||Bu(t,n,g,r,x,I,d)||!1)?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),o.props=r,o.state=I,o.context=d,r=g):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return oo(e,t,n,r,i,l)}function oo(e,t,n,r,l,i){ta(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&su(t,n,!1),zt(e,t,i);r=t.stateNode,Nd.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=zn(t,e.child,null,i),t.child=zn(t,null,u,i)):Oe(e,t,u,i),t.memoizedState=r.state,l&&su(t,n,!0),t.child}function ra(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Bi(e,t.containerInfo)}function la(e,t,n,r,l){return Cn(),Di(l),t.flags|=256,Oe(e,t,n,r),t.child}var so={dehydrated:null,treeContext:null,retryLane:0};function uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ia(e,t,n){var r=t.pendingProps,l=de.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),oe(de,l&1),e===null)return Fi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zl(o,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=uo(n),t.memoizedState=so,e):ao(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Ed(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var d={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Jt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Jt(u,i):(i=cn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?uo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=so,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ao(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ml(e,t,n,r){return r!==null&&Di(r),zn(t,e.child,null,n),e=ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ed(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ro(Error(c(422))),ml(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),i=cn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&zn(t,e.child,null,o),t.child.memoizedState=uo(o),t.memoizedState=so,i);if((t.mode&1)===0)return ml(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(c(419)),r=ro(i,r,void 0),ml(e,t,o,r)}if(u=(o&e.childLanes)!==0,qe||u){if(r=we,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Et(e,l),ct(r,e,l,-1))}return Eo(),r=ro(Error(c(421))),ml(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Hd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ke=Mt(l.nextSibling),We=t,ce=!0,ot=null,e!==null&&(Ye[Xe++]=jt,Ye[Xe++]=Nt,Ye[Xe++]=en,jt=e.id,Nt=e.overflow,en=t),t=ao(t,r.children),t.flags|=4096,t)}function oa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function co(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function sa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Oe(e,t,r.children,n),r=de.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oa(e,n,t);else if(e.tag===19)oa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(de,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),co(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}co(t,!0,n,null,i);break;case"together":co(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cd(e,t,n){switch(t.tag){case 3:ra(t),Cn();break;case 5:wu(t);break;case 1:Me(t.type)&&Zr(t);break;case 4:Bi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;oe(ll,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(de,de.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ia(e,t,n):(oe(de,de.current&1),e=zt(e,t,n),e!==null?e.sibling:null);oe(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return sa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),oe(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,ea(e,t,n)}return zt(e,t,n)}var ua,fo,aa,ca;ua=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},fo=function(){},aa=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,rn(vt.current);var i=null;switch(n){case"input":l=Ul(e,l),r=Ul(e,r),i=[];break;case"select":l=L({},l,{value:void 0}),r=L({},r,{value:void 0}),i=[];break;case"textarea":l=Bl(e,l),r=Bl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}Wl(n,r);var o;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var u=l[g];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(k.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var d=r[g];if(u=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&d!==u&&(d!=null||u!=null))if(g==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(i||(i=[]),i.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(k.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&se("scroll",e),i||u===d||(i=[])):(i=i||[]).push(g,d))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}},ca=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zd(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Me(t.type)&&Gr(),ze(t),null;case 3:return r=t.stateNode,Rn(),ue(De),ue(Ee),Ki(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ot!==null&&(So(ot),ot=null))),fo(e,t),ze(t),null;case 5:Vi(t);var l=rn(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)aa(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(e=rn(vt.current),nl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gt]=t,r[or]=i,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(l=0;l<rr.length;l++)se(rr[l],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Vo(r,i),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},se("invalid",r);break;case"textarea":Qo(r,i),se("invalid",r)}Wl(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,u,e),l=["children",""+u]):k.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Nr(r),Ko(r,i,!0);break;case"textarea":Nr(r),Yo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[gt]=t,e[or]=r,ua(e,t,!1,!1),t.stateNode=e;e:{switch(o=Kl(n,r),n){case"dialog":se("cancel",e),se("close",e),l=r;break;case"iframe":case"object":case"embed":se("load",e),l=r;break;case"video":case"audio":for(l=0;l<rr.length;l++)se(rr[l],e);l=r;break;case"source":se("error",e),l=r;break;case"img":case"image":case"link":se("error",e),se("load",e),l=r;break;case"details":se("toggle",e),l=r;break;case"input":Vo(e,r),l=Ul(e,r),se("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=L({},r,{value:void 0}),se("invalid",e);break;case"textarea":Qo(e,r),l=Bl(e,r),se("invalid",e);break;default:l=r}Wl(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var d=u[i];i==="style"?bo(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Go(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&qn(e,d):typeof d=="number"&&qn(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(k.hasOwnProperty(i)?d!=null&&i==="onScroll"&&se("scroll",e):d!=null&&tt(e,i,d,o))}switch(n){case"input":Nr(e),Ko(e,r,!1);break;case"textarea":Nr(e),Yo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ne(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)ca(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=rn(dr.current),rn(vt.current),nl(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(i=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return ze(t),null;case 13:if(ue(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ke!==null&&(t.mode&1)!==0&&(t.flags&128)===0)pu(),Cn(),t.flags|=98560,i=!1;else if(i=nl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[gt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else ot!==null&&(So(ot),ot=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(de.current&1)!==0?xe===0&&(xe=3):Eo())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Rn(),fo(e,t),e===null&&lr(t.stateNode.containerInfo),ze(t),null;case 10:return Hi(t.type._context),ze(t),null;case 17:return Me(t.type)&&Gr(),ze(t),null;case 19:if(ue(de),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)yr(i,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ul(e),o!==null){for(t.flags|=128,yr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(de,de.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>Fn&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ul(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ce)return ze(t),null}else 2*me()-i.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=de.current,oe(de,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return No(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Pd(e,t){switch(Li(t),t.tag){case 1:return Me(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),ue(De),ue(Ee),Ki(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vi(t),null;case 13:if(ue(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(de),null;case 4:return Rn(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var gl=!1,Pe=!1,Td=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function po(e,t,n){try{n()}catch(r){he(e,t,r)}}var da=!1;function Rd(e,t){if(ji=Mr,e=Bs(),yi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,g=0,w=0,S=e,x=null;t:for(;;){for(var R;S!==n||l!==0&&S.nodeType!==3||(u=o+l),S!==i||r!==0&&S.nodeType!==3||(d=o+r),S.nodeType===3&&(o+=S.nodeValue.length),(R=S.firstChild)!==null;)x=S,S=R;for(;;){if(S===e)break t;if(x===n&&++g===l&&(u=o),x===i&&++w===r&&(d=o),(R=S.nextSibling)!==null)break;S=x,x=S.parentNode}S=R}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Mr=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var F=I.memoizedProps,ye=I.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?F:st(t.type,F),ye);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(j){he(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return I=da,da=!1,I}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&po(t,n,i)}l=l.next}while(l!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ho(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fa(e){var t=e.alternate;t!==null&&(e.alternate=null,fa(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[or],delete t[Pi],delete t[pd],delete t[hd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pa(e){return e.tag===5||e.tag===3||e.tag===4}function ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pa(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}function yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}var Se=null,ut=!1;function Bt(e,t,n){for(n=n.child;n!==null;)ma(e,t,n),n=n.sibling}function ma(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Rr,n)}catch{}switch(n.tag){case 5:Pe||Ln(n,t);case 6:var r=Se,l=ut;Se=null,Bt(e,t,n),Se=r,ut=l,Se!==null&&(ut?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ut?(e=Se,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),Yn(e)):zi(Se,n.stateNode));break;case 4:r=Se,l=ut,Se=n.stateNode.containerInfo,ut=!0,Bt(e,t,n),Se=r,ut=l;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&po(n,t,o),l=l.next}while(l!==r)}Bt(e,t,n);break;case 1:if(!Pe&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){he(n,t,u)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Bt(e,t,n),Pe=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function ya(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Td),t.forEach(function(r){var l=Ud.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:Se=u.stateNode,ut=!1;break e;case 3:Se=u.stateNode.containerInfo,ut=!0;break e;case 4:Se=u.stateNode.containerInfo,ut=!0;break e}u=u.return}if(Se===null)throw Error(c(160));ma(i,o,l),Se=null,ut=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(g){he(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ga(t,e),t=t.sibling}function ga(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),_t(e),r&4){try{gr(3,e,e.return),vl(3,e)}catch(F){he(e,e.return,F)}try{gr(5,e,e.return)}catch(F){he(e,e.return,F)}}break;case 1:at(t,e),_t(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(at(t,e),_t(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var l=e.stateNode;try{qn(l,"")}catch(F){he(e,e.return,F)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Wo(l,i),Kl(u,o);var g=Kl(u,i);for(o=0;o<d.length;o+=2){var w=d[o],S=d[o+1];w==="style"?bo(l,S):w==="dangerouslySetInnerHTML"?Go(l,S):w==="children"?qn(l,S):tt(l,w,S,g)}switch(u){case"input":Al(l,i);break;case"textarea":Jo(l,i);break;case"select":var x=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var R=i.value;R!=null?fn(l,!!i.multiple,R,!1):x!==!!i.multiple&&(i.defaultValue!=null?fn(l,!!i.multiple,i.defaultValue,!0):fn(l,!!i.multiple,i.multiple?[]:"",!1))}l[or]=i}catch(F){he(e,e.return,F)}}break;case 6:if(at(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(F){he(e,e.return,F)}}break;case 3:if(at(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(F){he(e,e.return,F)}break;case 4:at(t,e),_t(e);break;case 13:at(t,e),_t(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(xo=me())),r&4&&ya(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(g=Pe)||w,at(t,e),Pe=g):at(t,e),_t(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!w&&(e.mode&1)!==0)for(O=e,w=e.child;w!==null;){for(S=O=w;O!==null;){switch(x=O,R=x.child,x.tag){case 0:case 11:case 14:case 15:gr(4,x,x.return);break;case 1:Ln(x,x.return);var I=x.stateNode;if(typeof I.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(F){he(r,n,F)}}break;case 5:Ln(x,x.return);break;case 22:if(x.memoizedState!==null){_a(S);continue}}R!==null?(R.return=x,O=R):_a(S)}w=w.sibling}e:for(w=null,S=e;;){if(S.tag===5){if(w===null){w=S;try{l=S.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=S.stateNode,d=S.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Zo("display",o))}catch(F){he(e,e.return,F)}}}else if(S.tag===6){if(w===null)try{S.stateNode.nodeValue=g?"":S.memoizedProps}catch(F){he(e,e.return,F)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;w===S&&(w=null),S=S.return}w===S&&(w=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:at(t,e),_t(e),r&4&&ya(e);break;case 21:break;default:at(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pa(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qn(l,""),r.flags&=-33);var i=ha(e);yo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ha(e);mo(e,u,o);break;default:throw Error(c(161))}}catch(d){he(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Od(e,t,n){O=e,va(e)}function va(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var l=O,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gl;if(!o){var u=l.alternate,d=u!==null&&u.memoizedState!==null||Pe;u=gl;var g=Pe;if(gl=o,(Pe=d)&&!g)for(O=l;O!==null;)o=O,d=o.child,o.tag===22&&o.memoizedState!==null?wa(l):d!==null?(d.return=o,O=d):wa(l);for(;i!==null;)O=i,va(i),i=i.sibling;O=l,gl=u,Pe=g}xa(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,O=i):xa(e)}}function xa(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pe||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&_u(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_u(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var w=g.memoizedState;if(w!==null){var S=w.dehydrated;S!==null&&Yn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Pe||t.flags&512&&ho(t)}catch(x){he(t,t.return,x)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function _a(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function wa(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(d){he(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){he(t,l,d)}}var i=t.return;try{ho(t)}catch(d){he(t,i,d)}break;case 5:var o=t.return;try{ho(t)}catch(d){he(t,o,d)}}}catch(d){he(t,t.return,d)}if(t===e){O=null;break}var u=t.sibling;if(u!==null){u.return=t.return,O=u;break}O=t.return}}var Ld=Math.ceil,xl=Ne.ReactCurrentDispatcher,go=Ne.ReactCurrentOwner,be=Ne.ReactCurrentBatchConfig,X=0,we=null,ge=null,je=0,Qe=0,In=qt(0),xe=0,vr=null,on=0,_l=0,vo=0,xr=null,He=null,xo=0,Fn=1/0,Pt=null,wl=!1,_o=null,Vt=null,kl=!1,Wt=null,Sl=0,_r=0,wo=null,jl=-1,Nl=0;function Le(){return(X&6)!==0?me():jl!==-1?jl:jl=me()}function Kt(e){return(e.mode&1)===0?1:(X&2)!==0&&je!==0?je&-je:yd.transition!==null?(Nl===0&&(Nl=hs()),Nl):(e=re,e!==0||(e=window.event,e=e===void 0?16:Ss(e.type)),e)}function ct(e,t,n,r){if(50<_r)throw _r=0,wo=null,Error(c(185));Vn(e,n,r),((X&2)===0||e!==we)&&(e===we&&((X&2)===0&&(_l|=n),xe===4&&Qt(e,je)),Ue(e,r),n===1&&X===0&&(t.mode&1)===0&&(Fn=me()+500,br&&Ut()))}function Ue(e,t){var n=e.callbackNode;yc(e,t);var r=Ir(e,e===we?je:0);if(r===0)n!==null&&ds(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ds(n),t===1)e.tag===0?md(Sa.bind(null,e)):uu(Sa.bind(null,e)),dd(function(){(X&6)===0&&Ut()}),n=null;else{switch(ms(r)){case 1:n=bl;break;case 4:n=fs;break;case 16:n=Tr;break;case 536870912:n=ps;break;default:n=Tr}n=Ra(n,ka.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ka(e,t){if(jl=-1,Nl=0,(X&6)!==0)throw Error(c(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Ir(e,e===we?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=El(e,r);else{t=r;var l=X;X|=2;var i=Na();(we!==e||je!==t)&&(Pt=null,Fn=me()+500,un(e,t));do try{Dd();break}catch(u){ja(e,u)}while(!0);qi(),xl.current=i,X=l,ge!==null?t=0:(we=null,je=0,t=xe)}if(t!==0){if(t===2&&(l=ei(e),l!==0&&(r=l,t=ko(e,l))),t===1)throw n=vr,un(e,0),Qt(e,r),Ue(e,me()),n;if(t===6)Qt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Id(l)&&(t=El(e,r),t===2&&(i=ei(e),i!==0&&(r=i,t=ko(e,i))),t===1))throw n=vr,un(e,0),Qt(e,r),Ue(e,me()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:an(e,He,Pt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=xo+500-me(),10<t)){if(Ir(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ci(an.bind(null,e,He,Pt),t);break}an(e,He,Pt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-lt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ld(r/1960))-r,10<r){e.timeoutHandle=Ci(an.bind(null,e,He,Pt),r);break}an(e,He,Pt);break;case 5:an(e,He,Pt);break;default:throw Error(c(329))}}}return Ue(e,me()),e.callbackNode===n?ka.bind(null,e):null}function ko(e,t){var n=xr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=El(e,t),e!==2&&(t=He,He=n,t!==null&&So(t)),e}function So(e){He===null?He=e:He.push.apply(He,e)}function Id(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!it(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~vo,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function Sa(e){if((X&6)!==0)throw Error(c(327));Dn();var t=Ir(e,0);if((t&1)===0)return Ue(e,me()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=ei(e);r!==0&&(t=r,n=ko(e,r))}if(n===1)throw n=vr,un(e,0),Qt(e,t),Ue(e,me()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,He,Pt),Ue(e,me()),null}function jo(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Fn=me()+500,br&&Ut())}}function sn(e){Wt!==null&&Wt.tag===0&&(X&6)===0&&Dn();var t=X;X|=1;var n=be.transition,r=re;try{if(be.transition=null,re=1,e)return e()}finally{re=r,be.transition=n,X=t,(X&6)===0&&Ut()}}function No(){Qe=In.current,ue(In)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cd(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Li(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:Rn(),ue(De),ue(Ee),Ki();break;case 5:Vi(r);break;case 4:Rn();break;case 13:ue(de);break;case 19:ue(de);break;case 10:Hi(r.type._context);break;case 22:case 23:No()}n=n.return}if(we=e,ge=e=Jt(e.current,null),je=Qe=t,xe=0,vr=null,vo=_l=on=0,He=xr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}nn=null}return e}function ja(e,t){do{var n=ge;try{if(qi(),al.current=pl,cl){for(var r=fe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}cl=!1}if(ln=0,_e=ve=fe=null,fr=!1,pr=0,go.current=null,n===null||n.return===null){xe=1,vr=t,ge=null;break}e:{var i=e,o=n.return,u=n,d=t;if(t=je,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,w=u,S=w.tag;if((w.mode&1)===0&&(S===0||S===11||S===15)){var x=w.alternate;x?(w.updateQueue=x.updateQueue,w.memoizedState=x.memoizedState,w.lanes=x.lanes):(w.updateQueue=null,w.memoizedState=null)}var R=Yu(o);if(R!==null){R.flags&=-257,Xu(R,o,u,i,t),R.mode&1&&Ju(i,g,t),t=R,d=g;var I=t.updateQueue;if(I===null){var F=new Set;F.add(d),t.updateQueue=F}else I.add(d);break e}else{if((t&1)===0){Ju(i,g,t),Eo();break e}d=Error(c(426))}}else if(ce&&u.mode&1){var ye=Yu(o);if(ye!==null){(ye.flags&65536)===0&&(ye.flags|=256),Xu(ye,o,u,i,t),Di(On(d,u));break e}}i=d=On(d,u),xe!==4&&(xe=2),xr===null?xr=[i]:xr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Ku(i,d,t);xu(i,h);break e;case 1:u=d;var f=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=Qu(i,u,t);xu(i,j);break e}}i=i.return}while(i!==null)}Ca(n)}catch(D){t=D,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Na(){var e=xl.current;return xl.current=pl,e===null?pl:e}function Eo(){(xe===0||xe===3||xe===2)&&(xe=4),we===null||(on&268435455)===0&&(_l&268435455)===0||Qt(we,je)}function El(e,t){var n=X;X|=2;var r=Na();(we!==e||je!==t)&&(Pt=null,un(e,t));do try{Fd();break}catch(l){ja(e,l)}while(!0);if(qi(),X=n,xl.current=r,ge!==null)throw Error(c(261));return we=null,je=0,xe}function Fd(){for(;ge!==null;)Ea(ge)}function Dd(){for(;ge!==null&&!sc();)Ea(ge)}function Ea(e){var t=Ta(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Ca(e):ge=t,go.current=null}function Ca(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=zd(n,t,Qe),n!==null){ge=n;return}}else{if(n=Pd(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ge=null;return}}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);xe===0&&(xe=5)}function an(e,t,n){var r=re,l=be.transition;try{be.transition=null,re=1,Md(e,t,n,r)}finally{be.transition=l,re=r}return null}function Md(e,t,n,r){do Dn();while(Wt!==null);if((X&6)!==0)throw Error(c(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(gc(e,i),e===we&&(ge=we=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||kl||(kl=!0,Ra(Tr,function(){return Dn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=be.transition,be.transition=null;var o=re;re=1;var u=X;X|=4,go.current=null,Rd(e,n),ga(n,e),rd(Ni),Mr=!!ji,Ni=ji=null,e.current=n,Od(n),uc(),X=u,re=o,be.transition=i}else e.current=n;if(kl&&(kl=!1,Wt=e,Sl=l),i=e.pendingLanes,i===0&&(Vt=null),dc(n.stateNode),Ue(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(wl)throw wl=!1,e=_o,_o=null,e;return(Sl&1)!==0&&e.tag!==0&&Dn(),i=e.pendingLanes,(i&1)!==0?e===wo?_r++:(_r=0,wo=e):_r=0,Ut(),null}function Dn(){if(Wt!==null){var e=ms(Sl),t=be.transition,n=re;try{if(be.transition=null,re=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Sl=0,(X&6)!==0)throw Error(c(331));var l=X;for(X|=4,O=e.current;O!==null;){var i=O,o=i.child;if((O.flags&16)!==0){var u=i.deletions;if(u!==null){for(var d=0;d<u.length;d++){var g=u[d];for(O=g;O!==null;){var w=O;switch(w.tag){case 0:case 11:case 15:gr(8,w,i)}var S=w.child;if(S!==null)S.return=w,O=S;else for(;O!==null;){w=O;var x=w.sibling,R=w.return;if(fa(w),w===g){O=null;break}if(x!==null){x.return=R,O=x;break}O=R}}}var I=i.alternate;if(I!==null){var F=I.child;if(F!==null){I.child=null;do{var ye=F.sibling;F.sibling=null,F=ye}while(F!==null)}}O=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:gr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,O=h;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){o=O;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,O=m;else e:for(o=f;O!==null;){if(u=O,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:vl(9,u)}}catch(D){he(u,u.return,D)}if(u===o){O=null;break e}var j=u.sibling;if(j!==null){j.return=u.return,O=j;break e}O=u.return}}if(X=l,Ut(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Rr,e)}catch{}r=!0}return r}finally{re=n,be.transition=t}}return!1}function za(e,t,n){t=On(n,t),t=Ku(e,t,1),e=$t(e,t,1),t=Le(),e!==null&&(Vn(e,1,t),Ue(e,t))}function he(e,t,n){if(e.tag===3)za(e,e,n);else for(;t!==null;){if(t.tag===3){za(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=On(n,e),e=Qu(t,e,1),t=$t(t,e,1),e=Le(),t!==null&&(Vn(t,1,e),Ue(t,e));break}}t=t.return}}function qd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(je&n)===n&&(xe===4||xe===3&&(je&130023424)===je&&500>me()-xo?un(e,0):vo|=n),Ue(e,t)}function Pa(e,t){t===0&&((e.mode&1)===0?t=1:(t=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var n=Le();e=Et(e,t),e!==null&&(Vn(e,t,n),Ue(e,n))}function Hd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pa(e,n)}function Ud(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),Pa(e,n)}var Ta;Ta=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return qe=!1,Cd(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,ce&&(t.flags&1048576)!==0&&au(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yl(e,t),e=t.pendingProps;var l=jn(t,Ee.current);Tn(t,n),l=Yi(null,t,r,e,l,n);var i=Xi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Zr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$i(t),l.updater=hl,t.stateNode=l,l._reactInternals=t,no(t,r,e,n),t=oo(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&Oi(t),Oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=$d(r),e=st(r,e),l){case 0:t=io(null,t,r,e,n);break e;case 1:t=na(null,t,r,e,n);break e;case 11:t=Gu(null,t,r,e,n);break e;case 14:t=Zu(null,t,r,st(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),io(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),na(e,t,r,l,n);case 3:e:{if(ra(t),e===null)throw Error(c(387));r=t.pendingProps,i=t.memoizedState,l=i.element,vu(e,t),sl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=On(Error(c(423)),t),t=la(e,t,r,n,l);break e}else if(r!==l){l=On(Error(c(424)),t),t=la(e,t,r,n,l);break e}else for(Ke=Mt(t.stateNode.containerInfo.firstChild),We=t,ce=!0,ot=null,n=yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===l){t=zt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return wu(t),e===null&&Fi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ei(r,l)?o=null:i!==null&&Ei(r,i)&&(t.flags|=32),ta(e,t),Oe(e,t,o,n),t.child;case 6:return e===null&&Fi(t),null;case 13:return ia(e,t,n);case 4:return Bi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),Gu(e,t,r,l,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,oe(ll,r._currentValue),r._currentValue=o,i!==null)if(it(i.value,o)){if(i.children===l.children&&!De.current){t=zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=Ct(-1,n&-n),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var w=g.pending;w===null?d.next=d:(d.next=w.next,w.next=d),g.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Ui(i.return,n,t),u.lanes|=n;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ui(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Tn(t,n),l=Ge(l),r=r(l),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,l=st(r,t.pendingProps),l=st(r.type,l),Zu(e,t,r,l,n);case 15:return bu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),yl(e,t),t.tag=1,Me(r)?(e=!0,Zr(t)):e=!1,Tn(t,n),Vu(t,r,l),no(t,r,l,n),oo(null,t,r,!0,e,n);case 19:return sa(e,t,n);case 22:return ea(e,t,n)}throw Error(c(156,t.tag))};function Ra(e,t){return cs(e,t)}function Ad(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new Ad(e,t,n,r)}function Co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $d(e){if(typeof e=="function")return Co(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===mt)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Co(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ie:return cn(n.children,l,i,t);case Je:o=8,l|=8;break;case Tt:return e=et(12,n,t,l|2),e.elementType=Tt,e.lanes=i,e;case $e:return e=et(13,n,t,l),e.elementType=$e,e.lanes=i,e;case rt:return e=et(19,n,t,l),e.elementType=rt,e.lanes=i,e;case pe:return zl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wt:o=10;break e;case Xt:o=9;break e;case ht:o=11;break e;case mt:o=14;break e;case Fe:o=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=et(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=et(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function zo(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Po(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,n,r,l,i,o,u,d){return e=new Bd(e,t,n,u,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(i),e}function Vd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Oa(e){if(!e)return Ht;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Me(n))return ou(e,n,t)}return t}function La(e,t,n,r,l,i,o,u,d){return e=To(n,r,!0,e,l,i,o,u,d),e.context=Oa(null),n=e.current,r=Le(),l=Kt(n),i=Ct(r,l),i.callback=t??null,$t(n,i,l),e.current.lanes=l,Vn(e,l,r),Ue(e,r),e}function Pl(e,t,n,r){var l=t.current,i=Le(),o=Kt(l);return n=Oa(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(l,t,o),e!==null&&(ct(e,l,o,i),ol(e,l,o)),o}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ia(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Ia(e,t),(e=e.alternate)&&Ia(e,t)}function Wd(){return null}var Fa=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oo(e){this._internalRoot=e}Rl.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Pl(e,t,null,null)},Rl.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){Pl(null,e,null,null)}),t[kt]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=vs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&ws(e)}};function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Da(){}function Kd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=Tl(o);i.call(g)}}var o=La(t,r,e,0,null,!1,!1,"",Da);return e._reactRootContainer=o,e[kt]=o.current,lr(e.nodeType===8?e.parentNode:e),sn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var g=Tl(d);u.call(g)}}var d=To(e,0,!1,null,null,!1,!1,"",Da);return e._reactRootContainer=d,e[kt]=d.current,lr(e.nodeType===8?e.parentNode:e),sn(function(){Pl(t,d,n,r)}),d}function Ll(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var d=Tl(o);u.call(d)}}Pl(t,o,e,l)}else o=Kd(n,t,e,l,r);return Tl(o)}ys=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(ni(t,n|1),Ue(t,me()),(X&6)===0&&(Fn=me()+500,Ut()))}break;case 13:sn(function(){var r=Et(e,1);if(r!==null){var l=Le();ct(r,e,1,l)}}),Ro(e,1)}},ri=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Le();ct(t,e,134217728,n)}Ro(e,134217728)}},gs=function(e){if(e.tag===13){var t=Kt(e),n=Et(e,t);if(n!==null){var r=Le();ct(n,e,t,r)}Ro(e,t)}},vs=function(){return re},xs=function(e,t){var n=re;try{return re=e,t()}finally{re=n}},Yl=function(e,t,n){switch(t){case"input":if(Al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Xr(r);if(!l)throw Error(c(90));Bo(r),Al(r,l)}}}break;case"textarea":Jo(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}},rs=jo,ls=sn;var Qd={usingClientEntryPoint:!1,Events:[sr,kn,Xr,ts,ns,jo]},wr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jd={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=us(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Wd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Rr=Il.inject(Jd),yt=Il}catch{}}return Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qd,Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lo(t))throw Error(c(200));return Vd(e,t,null,n)},Ae.createRoot=function(e,t){if(!Lo(e))throw Error(c(299));var n=!1,r="",l=Fa;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,n,!1,r,l),e[kt]=t.current,lr(e.nodeType===8?e.parentNode:e),new Oo(t)},Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=us(t),e=e===null?null:e.stateNode,e},Ae.flushSync=function(e){return sn(e)},Ae.hydrate=function(e,t,n){if(!Ol(t))throw Error(c(200));return Ll(null,e,t,!0,n)},Ae.hydrateRoot=function(e,t,n){if(!Lo(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Fa;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=La(t,null,e,1,n??null,l,!1,i,o),e[kt]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Rl(t)},Ae.render=function(e,t,n){if(!Ol(t))throw Error(c(200));return Ll(null,e,t,!1,n)},Ae.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(c(40));return e._reactRootContainer?(sn(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Ae.unstable_batchedUpdates=jo,Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ll(e,t,n,!1,r)},Ae.version="18.3.1-next-f1338f8080-20240426",Ae}var Va;function lf(){if(Va)return Do.exports;Va=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(y){console.error(y)}}return a(),Do.exports=rf(),Do.exports}var Wa;function of(){if(Wa)return Fl;Wa=1;var a=lf();return Fl.createRoot=a.createRoot,Fl.hydrateRoot=a.hydrateRoot,Fl}var sf=of();function le({lang:a="python",filename:y,code:c,output:E,run:k,download:C}){const v=String(c).replace(/\n$/,"");return{type:"code",lang:a,filename:y,code:v,output:E,run:k,download:C===null?void 0:C??y}}const uf=`"""用字典描述一次检查，并筛出需要人看的项。"""

from __future__ import annotations


def check_disk(used_percent: float, warn: float = 80, crit: float = 90) -> dict:
    if used_percent >= crit:
        status = "crit"
        suggestion = "先清理或扩容，再继续发布"
    elif used_percent >= warn:
        status = "warn"
        suggestion = "安排清理，发布前再看一眼"
    else:
        status = "ok"
        suggestion = ""
    return {
        "name": "disk",
        "status": status,
        "detail": f"已用 {used_percent:.1f}%",
        "suggestion": suggestion,
    }


def needs_attention(results: list[dict]) -> list[dict]:
    return [item for item in results if item["status"] != "ok"]


def main() -> int:
    results = [check_disk(71), check_disk(86), check_disk(93)]
    for item in results:
        print(f"{item['status'].upper():4}  {item['name']:8}  {item['detail']}")
    print(f"需要处理 {len(needs_attention(results))} 项")
    if any(item["status"] == "crit" for item in results):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,af=`"""一个能交付的脚本：日志走标准错误，结果走标准输出，用退出码表示严重问题。"""

from __future__ import annotations

import logging
import sys

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s", stream=sys.stderr)
log = logging.getLogger("inspect")


def main() -> int:
    log.info("开始巡检")
    results = [
        {"name": "disk", "status": "ok", "detail": "已用 71.0%"},
        {"name": "backup", "status": "crit", "detail": "最近 26 小时没有成功备份"},
    ]
    for item in results:
        print(f"{item['status'].upper():4}  {item['name']:8}  {item['detail']}")
    critical = any(item["status"] == "crit" for item in results)
    log.info("结束")
    return 1 if critical else 0


if __name__ == "__main__":
    raise SystemExit(main())
`,cf=`"""先打印将要写什么。加上 --dry-run 时不落文件。"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


def check_root(raw: str) -> Path:
    root = Path(raw).expanduser().resolve()
    if len(root.parts) < 3:
        print("请指定一个专用目录，不要用太浅的路径", file=sys.stderr)
        raise SystemExit(2)
    return root


def write_notice(root: Path, dry_run: bool) -> str:
    target = root / "notice.txt"
    if dry_run:
        return f"DRY-RUN 将写入 {target}"
    root.mkdir(parents=True, exist_ok=True)
    target.write_text("published\\n", encoding="utf-8")
    return f"已写入 {target}"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="演示 dry-run")
    parser.add_argument("--root", required=True)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args(argv)
    root = check_root(args.root)
    print(write_notice(root, args.dry_run))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,df=`"""同一件事做很多遍：单项失败记下来，其余继续，最后给汇总。"""

from __future__ import annotations

JOBS = [
    {"name": "账单导出", "records": 1200},
    {"name": "空文件清理", "records": 0},
    {"name": "报表投递", "records": -1},
]


def handle(job: dict) -> dict:
    name = job["name"]
    records = job["records"]
    if records < 0:
        return {"name": name, "status": "fail", "detail": "记录数不合法"}
    if records == 0:
        return {"name": name, "status": "ok", "detail": "没有要处理的记录"}
    return {"name": name, "status": "ok", "detail": f"处理了 {records} 条"}


def main() -> int:
    results = [handle(job) for job in JOBS]
    failed = 0
    for item in results:
        label = "OK" if item["status"] == "ok" else "FAIL"
        print(f"{label:4}  {item['name']}  {item['detail']}")
        if item["status"] != "ok":
            failed += 1
    print(f"完成 {len(results)}  失败 {failed}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
`,ff=`"""ok / warn / crit，以及退出码。警告先记下，严重问题才让脚本失败。"""

from __future__ import annotations


def judge(name: str, value: float, warn: float, crit: float, unit: str) -> dict:
    if value >= crit:
        status = "crit"
        suggestion = "先处理再继续发布"
    elif value >= warn:
        status = "warn"
        suggestion = "记下，发布前再看一眼"
    else:
        status = "ok"
        suggestion = ""
    return {
        "name": name,
        "status": status,
        "detail": f"{value:.0f}{unit}",
        "suggestion": suggestion,
    }


def exit_code(results: list[dict], strict: bool = False) -> int:
    if any(item["status"] == "crit" for item in results):
        return 1
    if strict and any(item["status"] == "warn" for item in results):
        return 1
    return 0


def main() -> int:
    results = [
        judge("disk", 84, warn=80, crit=90, unit="%"),
        judge("memory", 70, warn=80, crit=90, unit="%"),
        judge("heartbeat", 45, warn=42, crit=60, unit=" 秒"),
    ]
    for item in results:
        print(f"{item['status'].upper():4}  {item['name']:10}  {item['detail']}")
        if item["suggestion"]:
            print(f"      {item['suggestion']}")
    code = exit_code(results)
    strict_code = exit_code(results, strict=True)
    print(f"退出码 {code}  严格模式 {strict_code}")
    return code


if __name__ == "__main__":
    raise SystemExit(main())
`,pf=`"""巡检可以继续，发布类步骤失败就停。"""

from __future__ import annotations

STEPS = [
    ("检查磁盘", "ok"),
    ("备份配置", "ok"),
    ("切换版本", "fail"),
    ("健康检查", "ok"),
]


def run(policy: str) -> list[str]:
    done: list[str] = []
    print(f"策略 {policy}")
    for name, outcome in STEPS:
        if outcome == "fail":
            print(f"FAIL {name}")
            if policy == "stop":
                print("停止，不执行后续步骤")
                return done
            print("记录失败，继续")
            continue
        print(f"OK   {name}")
        done.append(name)
    return done


def main() -> int:
    run("continue")
    print("")
    run("stop")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,hf=`"""再跑一次也不会搞坏已经准备好的目录。锁用来避免两个人同时跑。"""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path


def check_root(raw: str) -> Path:
    root = Path(raw).expanduser().resolve()
    if len(root.parts) < 3:
        print("请指定一个专用目录，不要用太浅的路径", file=sys.stderr)
        raise SystemExit(2)
    root.mkdir(parents=True, exist_ok=True)
    return root


def ensure_layout(root: Path) -> list[str]:
    created = []
    for name in ("app", "log", "tmp"):
        path = root / name
        if not path.exists():
            path.mkdir()
            created.append(name)
    config = root / "config.json"
    if not config.exists():
        config.write_text('{"name": "demo"}\\n', encoding="utf-8")
        created.append("config.json")
    return created


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="幂等地准备目录")
    parser.add_argument("--root", required=True)
    args = parser.parse_args(argv)
    root = check_root(args.root)
    lock = root / ".lock"
    fd = None
    try:
        fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        os.write(fd, str(os.getpid()).encode())
        created = ensure_layout(root)
        if created:
            print("新建 " + ", ".join(created))
        else:
            print("没有新文件")
        return 0
    except FileExistsError:
        print("已有一次运行还没结束", file=sys.stderr)
        return 2
    finally:
        if fd is not None:
            os.close(fd)
            lock.unlink(missing_ok=True)


if __name__ == "__main__":
    raise SystemExit(main())
`,mf=`"""一次会超时、能读状态码的 HTTP 调用。令牌从参数或环境变量来，不写进代码。"""

from __future__ import annotations

import argparse
import json
import os
import urllib.error
import urllib.request


def fetch_json(url: str, token: str | None = None, timeout: float = 3.0) -> dict:
    request = urllib.request.Request(url)
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            body = response.read().decode("utf-8")
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f"HTTP {exc.code} {url}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"网络失败 {url}：{exc.reason}") from exc
    data = json.loads(body)
    if not isinstance(data, dict):
        raise RuntimeError("响应不是 JSON 对象")
    return data


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="拉取 JSON 健康检查")
    parser.add_argument("url")
    parser.add_argument("--token", default=os.environ.get("OPS_TOKEN"))
    parser.add_argument("--timeout", type=float, default=3.0)
    args = parser.parse_args(argv)
    try:
        data = fetch_json(args.url, token=args.token, timeout=args.timeout)
    except RuntimeError as exc:
        print(exc)
        return 1
    print(json.dumps(data, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,yf=`"""只在本机提供一个健康检查，用来练习带令牌的请求。

任意非空 Bearer 令牌都会通过。真实接口会核对令牌内容，这里只帮你看请求头有没有带上。
"""

from __future__ import annotations

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path != "/health":
            self.send_response(404)
            self.end_headers()
            return
        auth = self.headers.get("Authorization") or ""
        if not auth.startswith("Bearer ") or not auth[7:].strip():
            self.send_response(401)
            self.end_headers()
            return
        body = b'{"status":"ok"}'
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        return


def main() -> None:
    server = ThreadingHTTPServer(("127.0.0.1", 8765), Handler)
    print("http://127.0.0.1:8765/health")
    server.serve_forever()


if __name__ == "__main__":
    main()
`,gf=`"""同一项配置：命令行优先，然后是环境变量、配置文件，最后才是默认值。"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path


def resolve_setting(cli_value, env_value, file_value, default):
    if cli_value is not None:
        return cli_value, "命令行"
    if env_value not in (None, ""):
        return env_value, "环境变量"
    if file_value is not None:
        return file_value, "配置文件"
    return default, "默认值"


def resolve_workers(cli, env: dict, file_data: dict | None, default: int = 4):
    file_value = None if not file_data else file_data.get("workers")
    raw, source = resolve_setting(cli, env.get("XUNZHAN_WORKERS"), file_value, default)
    try:
        workers = int(raw)
    except (TypeError, ValueError) as exc:
        raise RuntimeError("workers 必须是整数") from exc
    if workers < 1:
        raise RuntimeError("workers 至少为 1")
    return workers, source


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="演示配置优先级")
    parser.add_argument("--workers", type=int)
    parser.add_argument("--config")
    args = parser.parse_args(argv)
    file_data = None
    if args.config:
        file_data = json.loads(Path(args.config).read_text(encoding="utf-8"))
    workers, source = resolve_workers(args.workers, os.environ, file_data)
    print(f"workers={workers} 来自{source}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,vf=`"""超时和 5xx 可以重试。4xx 里除了 429，重试通常没有意义。"""

from __future__ import annotations

import time


def should_retry(status: int | None) -> bool:
    if status is None:
        return True
    if status == 429:
        return True
    return 500 <= status <= 599


def call_with_retry(do_request, tries: int = 3, base_delay: float = 0.2, sleep=time.sleep):
    if tries < 1:
        raise ValueError("tries 至少为 1")
    last_error: Exception | None = None
    for attempt in range(1, tries + 1):
        status = None
        try:
            status, body = do_request()
        except TimeoutError as exc:
            last_error = exc
        else:
            if status is not None and 200 <= status < 300:
                return body
            if status is not None and not should_retry(status):
                raise RuntimeError(f"HTTP {status} 不重试")
            last_error = RuntimeError(f"HTTP {status}")
        if attempt == tries:
            break
        sleep(base_delay * (2 ** (attempt - 1)))
    raise RuntimeError(f"重试 {tries} 次后仍失败") from last_error


def main() -> int:
    delays: list[float] = []
    calls = {"n": 0}

    def flaky():
        calls["n"] += 1
        if calls["n"] < 3:
            return 503, None
        return 200, {"status": "ok"}

    body = call_with_retry(flaky, tries=3, base_delay=0.2, sleep=delays.append)
    print(f"结果 {body['status']}  调用 {calls['n']} 次  等待 {delays}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,xf=`"""顺着 cursor 把页面拉完，并给页数一个上限。"""

from __future__ import annotations


def fetch_all(fetch_page, limit_pages: int = 20) -> list:
    items = []
    cursor = None
    pages = 0
    while True:
        page_items, cursor = fetch_page(cursor)
        items.extend(page_items)
        pages += 1
        if not cursor:
            return items
        if pages >= limit_pages:
            raise RuntimeError("分页超过上限，停下来检查 cursor 是否在前进")


def main() -> int:
    catalog = {
        None: (["api", "worker"], "p2"),
        "p2": (["cron"], None),
    }

    def fetch_page(cursor):
        return catalog[cursor]

    names = fetch_all(fetch_page)
    print(" ".join(names))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,_f=`"""等待 IO 时用线程池。报告按清单顺序输出，而不是按谁先做完。"""

from __future__ import annotations

import time
from concurrent.futures import ThreadPoolExecutor, as_completed

HOSTS = [
    {"name": "api-1", "latency_s": 0.2},
    {"name": "worker-1", "latency_s": 0.2},
    {"name": "cron-1", "latency_s": 0.2},
    {"name": "cache-1", "latency_s": 0.2},
]


def check_one(host: dict, sleep) -> str:
    sleep(host["latency_s"])
    return f"{host['name']} OK"


def run_checks(hosts: list[dict], workers: int = 4, sleep=time.sleep):
    started = time.perf_counter()
    found = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(check_one, host, sleep): host["name"] for host in hosts}
        for future in as_completed(futures):
            name = futures[future]
            found[name] = future.result()
    lines = [found[host["name"]] for host in hosts]
    return lines, time.perf_counter() - started


def main() -> int:
    lines, elapsed = run_checks(HOSTS, workers=4)
    print("\\n".join(lines))
    print(f"耗时 {elapsed:.2f} 秒")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,wf=`"""同步检查函数不动，用 asyncio.to_thread 放到事件循环旁边跑。"""

from __future__ import annotations

import asyncio
import time

HOSTS = [
    {"name": "api-1", "latency_s": 0.2},
    {"name": "worker-1", "latency_s": 0.2},
    {"name": "cron-1", "latency_s": 0.2},
    {"name": "cache-1", "latency_s": 0.2},
]


def check_sync(host: dict) -> str:
    time.sleep(host["latency_s"])
    return f"{host['name']} OK"


async def run_checks(hosts: list[dict]):
    started = time.perf_counter()
    results = await asyncio.gather(*(asyncio.to_thread(check_sync, host) for host in hosts))
    return list(results), time.perf_counter() - started


def main() -> int:
    lines, elapsed = asyncio.run(run_checks(HOSTS))
    print("\\n".join(lines))
    print(f"耗时 {elapsed:.2f} 秒")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,kf=`"""协程负责调度，信号量负责把同时打出去的请求数压住。"""

from __future__ import annotations

import asyncio
import time

HOSTS = [
    {"name": "api-1", "latency_s": 0.2},
    {"name": "worker-1", "latency_s": 0.2},
    {"name": "cron-1", "latency_s": 0.2},
    {"name": "cache-1", "latency_s": 0.2},
]


def check_sync(host: dict) -> str:
    time.sleep(host["latency_s"])
    return f"{host['name']} OK"


async def check_one(host: dict, sem: asyncio.Semaphore) -> str:
    async with sem:
        return await asyncio.to_thread(check_sync, host)


async def run_checks(hosts: list[dict], limit: int = 2):
    sem = asyncio.Semaphore(limit)
    started = time.perf_counter()
    results = await asyncio.gather(*(check_one(host, sem) for host in hosts))
    return list(results), time.perf_counter() - started


def main() -> int:
    lines, elapsed = asyncio.run(run_checks(HOSTS, limit=2))
    print("\\n".join(lines))
    print(f"耗时 {elapsed:.2f} 秒")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,Sf=`import requests

def fetch_json(url, token=None, timeout=3.0):
    headers = {}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    response = requests.get(url, headers=headers, timeout=timeout)
    response.raise_for_status()
    return response.json()
`,jf=[{id:"how-to-learn",title:"先看清这条路",read:8,practice:15,summary:"确认你已有的基础够用，并按「跑通、改一个数、做自测」来走后面的课。",goals:["知道这 27 课分别接住自动化、API、并发、工具链和可观测性","在本机准备一个练习目录","学会从页面下载示例并运行"],blocks:[{type:"p",text:"你已经会写变量、判断、循环和函数，也见过列表和字典。后面不再从零讲语法，而是把这些东西用在值班会碰到的脚本上。"},{type:"p",text:"路径分成八段。先把一次检查写成数据结构，再写成能交付的脚本；然后是批量任务、HTTP、并发；接着把重复的部分收成一个小工具链，做出巡检、部署、发布和采集；最后用 SRE 的看法这些工具该留下什么记录、什么情况才该叫醒人。"},{type:"h",text:"每次只做三件事"},{type:"ol",items:["把示例下载到练习目录，先原样跑通，看标准输出和退出码。","只改一个数字或一个参数，再跑一次，确认输出跟着变。","做页底的自测。答错就回到对应的小节，而不是把进度点亮了事。"]},{type:"p",text:"练习不需要一批服务器。清单是你自己写的 JSON，部署和发布只碰你用参数指定的目录。工具不会扫描网段，也不会去读仓库以外的密钥。"},{type:"code",lang:"bash",filename:"终端",code:`python3 --version
mkdir -p ~/xunzhan-lab
cd ~/xunzhan-lab`,output:"Python 3.10 或更高就可以。版本号低于 3.10 时，先升级解释器再继续。",download:null},{type:"p",text:"页面右上角可以下载全部示例。解压后进入 `samples` 目录，单文件脚本直接 `python3 文件名.py`。到了工具链那几课，在同一个目录里运行 `python3 -m xunzhan inspect`。"},{type:"callout",tone:"keep",title:"进度存在这台浏览器",text:"点过「我跑通了这一课」和自测分数会留在本地。换浏览器或清掉站点数据之后需要重新点。"}],exercise:{prompt:"在练习目录里运行 `python3 --version`，确认第一段数字大于等于 3.10。把版本号写在自己的笔记里。",hint:"macOS 上有时要写 python3，而不是 python。Windows 可以从 python.org 安装后重新打开终端。",solution:"输出类似 Python 3.12.3。只要主版本是 3、次版本大于等于 10，后面的示例都能跑。"},quiz:[{q:"还没有一批真实服务器时，怎么开始？",choices:["先等申请到机器再学","用本机目录和自己写的清单练习判断逻辑","先扫描公司网段找机器"],answer:1,why:"判断逻辑可以先用清单里的事实练熟。接真实探针时，只替换「读取事实」的那一层。"},{q:"一课做完的标志是什么？",choices:["把页面滚到底","原样跑通，并改过一个参数看到输出变化","把代码复制进笔记软件"],answer:1,why:"改一个参数是为了确认你知道哪个数在控制结果。"},{q:"示例工具适合对谁使用？",choices:["任何扫到的 IP","你有权维护的目录、账号和机器","同事电脑上的默认口令"],answer:1,why:"清单由你提供，目录由你指定。这是运维工具的边界，也是后面每一课的边界。"}]},{id:"check-result",title:"用字典记下一次检查",read:12,practice:20,summary:"一次检查先变成结构化结果，后面才能筛选、计数和决定退出码。",goals:["用字典表示名称、状态、细节和建议","用列表推导留下需要人看的项","让严重问题对应退出码 1"],blocks:[{type:"p",text:"打印一行「磁盘 93%」能看，但不能接着问：有几项要处理、要不要让脚本失败。先把结果放进字典，打印只是最后一步。"},{type:"p",text:"这里每项有四个键。`name` 是检查什么，`status` 用 `ok`、`warn`、`crit` 三个词，`detail` 是读到的事实，`suggestion` 是人接下来可以做的动作。正常时建议留空，避免报告里全是废话。"},le({filename:"check_result.py",code:uf,run:"python3 check_result.py",output:`OK    disk      已用 71.0%
WARN  disk      已用 86.0%
CRIT  disk      已用 93.0%
需要处理 2 项

退出码 1`}),{type:"p",text:"`needs_attention` 用列表推导留下状态不是 `ok` 的项。推导式就是把 `for` 和 `if` 收成一行，读的时候先看最左边要留下什么，再看从哪来、什么条件。"},{type:"p",text:"退出码给调用这个脚本的人用。人看文字，调度系统看退出码。有 `crit` 就返回 1，否则返回 0。`raise SystemExit(main())` 让 `main` 的返回值成为进程退出码。"},{type:"callout",tone:"pit",title:"别用一段话当结果",text:"如果函数只 return 一句中文，下一段代码就得去拆句子。状态用固定的三个英文词，中文放在 detail 和 suggestion 里。"}],exercise:{prompt:"把 86 改成 79，再运行。数一数「需要处理」变成几项，退出码有没有变。",hint:"79 低于默认警告线 80，这一项会变成 ok。93 仍是 crit。",solution:"需要处理的项从 2 变成 1，退出码仍是 1，因为 93 还在。把 93 也降到 80 以下，退出码才会变成 0。"},quiz:[{q:"为什么建议在 ok 时留空？",choices:["字典不能有空字符串","正常项不需要催人动作，报告更好扫","空字符串会让程序崩溃"],answer:1,why:"建议是给人看的下一步。没有下一步时就别占一行。"},{q:"`needs_attention` 留下哪些项？",choices:["只有 crit","status 不是 ok 的项","所有项"],answer:1,why:"警告也要被人看见。它和严重问题的差别放在退出码里处理。"},{q:"三行结果里有一个 crit 时，进程退出码是？",choices:["0","1","和警告的个数相同"],answer:1,why:"示例里只要出现 crit 就返回 1。调用方不用解析中文也能知道有严重问题。"}]},{id:"script-shape",title:"结果、日志、退出码",read:12,practice:15,summary:"给人看的结果走标准输出，过程日志走标准错误，严重问题用退出码表示。",goals:["分清 stdout 和 stderr","用 logging 留下开始和结束","让退出码表达有没有严重项"],blocks:[{type:"p",text:"脚本一长，`print` 会混进两种内容：给人或下游程序读的结果，以及「我现在跑到哪了」的过程。结果留在标准输出，过程放到标准错误。"},{type:"p",text:"这样别人可以写 `python3 script_shape.py > report.txt`，文件里只有结果。日志仍出现在终端上。后面加 `--json` 时，标准输出就可以整段被另一个程序解析。"},le({filename:"script_shape.py",code:af,run:"python3 script_shape.py",output:`标准输出
OK    disk      已用 71.0%
CRIT  backup    最近 26 小时没有成功备份

标准错误
INFO 开始巡检
INFO 结束

退出码 1`}),{type:"table",caption:"这门课后面一直沿用的退出码",columns:["码","含义"],rows:[["0","没有严重问题"],["1","有严重问题，或者健康检查、告警要求行动"],["2","参数、路径、清单不合法，脚本还没真正开始干活"]]},{type:"callout",tone:"keep",title:"看到 Traceback 先读最后一行",text:"异常从下往上最有用。最后一行是错误类型和原因，往上才是哪一行调用的。先把原因读完，再决定要不要看整段栈。"}],exercise:{prompt:"运行 `python3 script_shape.py > /tmp/report.txt`。打开这个文件，再看终端上还剩什么。",hint:"重定向 `>` 只搬走标准输出。",solution:"文件里是两行检查结果。终端上剩下 INFO 开始和结束。退出码仍是 1，可以用 `echo $?` 查看。"},quiz:[{q:"过程日志应该写到哪里？",choices:["和结果混在标准输出","标准错误","写进退出码"],answer:1,why:"退出码只能表达类别。过程放在 stderr，结果才能被重定向或被下游解析。"},{q:"参数写错、脚本还没开始检查时，用哪个退出码？",choices:["0","1","2"],answer:2,why:"1 留给「检查做完了，而且有严重问题」。用法错误是另一类，调用方可以分别处理。"},{q:"backup 那一项是 crit 时，标准输出里还会有 disk 的 ok 行吗？",choices:["会，两项都打印","不会，遇到 crit 就停止打印","只打印日志"],answer:0,why:"这份脚本先收集结果再决定退出码。人需要看见全部项，而不只是第一件坏事。"}]},{id:"dry-run",title:"演习运行和密钥",read:14,practice:20,summary:"用参数控制要不要真的写文件，并且拒绝在过浅的路径上动手。密钥留在环境里。",goals:["给脚本加上 --root 和 --dry-run","在写文件前检查路径深度","知道令牌不进源码"],blocks:[{type:"p",text:"会写文件的脚本，第一次运行应该只告诉你它打算写什么。`--dry-run` 就是这个开关。确认路径对了，再去掉它真正执行。"},{type:"p",text:"工作目录必须由调用的人指定。路径解析之后如果太浅，比如直接是 `/tmp` 这种只有两段的位置，脚本直接退出 2。专用目录至少像 `/tmp/xunzhan-demo` 这样再深一层。"},le({filename:"dry_run.py",code:cf,run:"python3 dry_run.py --root /tmp/xunzhan-demo --dry-run",output:`DRY-RUN 将写入 /tmp/xunzhan-demo/notice.txt

退出码 0，notice.txt 不会出现。去掉 --dry-run 再跑，文件内容是 published。`}),{type:"h",text:"密钥放在哪"},{type:"p",text:'令牌、密码、私钥不写进 `.py`，不写进要提交的 JSON。练习时用环境变量，例如 `OPS_TOKEN`。代码里只写 `os.environ.get("OPS_TOKEN")`。仓库里可以留 `config.example.json`，里面用空字符串占位。'},{type:"callout",tone:"pit",title:"dry-run 的限度",text:"它保证的是「这次不写那个文件」。它不会替你证明生产环境一定安全。路径、权限、下游是否存在，仍要在真正执行前看一遍输出。"}],exercise:{prompt:"先加 `--dry-run` 跑一遍，确认没有 `notice.txt`。再真正跑一遍，检查文件内容。最后用 `--root /tmp` 看它是否拒绝。",hint:"拒绝的那次退出码是 2，原因在标准错误。",solution:"演习时目录里没有 notice.txt。真正执行后文件内容是 `published` 加换行。`--root /tmp` 会提示路径太浅并退出 2。"},quiz:[{q:"第一次对一个新目录运行会写文件的脚本，应该？",choices:["直接执行","先加 --dry-run 看它准备写哪里","把目录设成 /"],answer:1,why:"先看路径。确认是你的练习目录，再去掉开关。"},{q:"令牌应该放在？",choices:["脚本顶部的变量","要提交的配置文件","环境变量或本机的密钥管理，代码只读取名字"],answer:2,why:"源码和示例配置会被复制、提交、贴到聊天里。令牌跟着它们走就会泄漏。"},{q:"`--root /tmp` 为什么被拒绝？",choices:["Python 不能写 /tmp","解析后的路径太浅，容易误伤一大片文件","dry-run 和它冲突"],answer:1,why:"工具要求一个专用目录。太浅的路径说明调用的人可能还没想清楚要动哪里。"}]},{id:"batch",title:"批量做完再汇总",read:12,practice:20,summary:"同一件事做很多遍时，单项失败先记下来，其余继续，最后给总数。",goals:["把一份清单映射成一份结果","单项失败不影响其余项","用汇总行加上退出码收尾"],blocks:[{type:"p",text:"批量任务的输入是一份清单，输出是同样顺序的结果加一行汇总。账单导出失败，不应该让你看不见空文件清理的结果。"},{type:"p",text:"示例里的清单先写在代码里，方便你看清循环。下一阶段会把清单挪到 JSON 文件。判断逻辑不用改，变的只是数据从哪读。"},le({filename:"batch_report.py",code:df,run:"python3 batch_report.py",output:`OK    账单导出  处理了 1200 条
OK    空文件清理  没有要处理的记录
FAIL  报表投递  记录数不合法
完成 3  失败 1

退出码 1`}),{type:"p",text:"记录数是 0 时，结果仍是成功：没有要处理的记录。再跑一次也是这句话。这就是幂等的一种小形式，下一课还会专门做目录。"},{type:"p",text:"记录数小于 0 是这项输入不合法。把它记成失败并继续。如果这里直接抛异常，后面的任务就不会留下记录。"},{type:"callout",tone:"do",title:"和发布的差别先记住",text:"批量处理希望尽量做完并汇报。发布类步骤常常是「这一步失败，后面的步骤就不该发生」。下一课用同一份步骤演示两种策略。"}],exercise:{prompt:"把报表投递的 `records` 改成 3，再运行，看退出码。然后再加一项你自己的任务。",hint:"只要还有一项 fail，退出码就是 1。",solution:"改成 3 之后三项都是 OK，汇总是「完成 3  失败 0」，退出码 0。新增的一项会出现在汇总前面的列表里。"},quiz:[{q:"报表投递失败时，空文件清理还会执行吗？",choices:["会","不会，遇到失败就 return","只会在记录数为 0 时执行"],answer:0,why:"handle 对每一项单独返回结果，main 再统一计数。"},{q:"记录数为 0 应该算？",choices:["失败","成功，而且没有新的副作用","需要重试"],answer:1,why:"没有工作可做，就报告这个事实。它不是错误。"},{q:"汇总行的作用是？",choices:["代替退出码","让人不用自己数失败项","把清单写回文件"],answer:1,why:"退出码仍负责告诉调度系统有没有失败。汇总行负责人在终端里一眼看完。"}]},{id:"inspect-levels",title:"正常、警告、严重",read:14,practice:20,summary:"警告记下来但默认不让脚本失败；严重问题让退出码变成 1。严格模式可以把警告也算失败。",goals:["给同一套判断套上 warn 和 crit 两条线","默认退出码只因 crit 变成 1","会解释 --strict 改变了什么"],blocks:[{type:"p",text:"磁盘 84% 和 93% 不该得到同一种反应。84% 要被人看见，发布仍可以继续；93% 应该挡住发布。所以状态分成三档，退出码默认只认识其中的严重档。"},le({filename:"inspect_levels.py",code:ff,run:"python3 inspect_levels.py",output:`WARN  disk        84%
      记下，发布前再看一眼
OK    memory      70%
WARN  heartbeat   45 秒
      记下，发布前再看一眼
退出码 0  严格模式 1`}),{type:"p",text:"这次没有 crit，所以默认退出码是 0。`strict=True` 时，只要有 warn 也返回 1。有的团队在发布窗口用严格模式，日常巡检用默认模式。两种都要能说清楚。"},{type:"p",text:"心跳的警告线在示例里直接写成 42 秒，也就是 60 秒上限的七成。后面的巡检工具会把「七成」写进代码，你就不用在每份清单里手算。"},{type:"widget",name:"inspect"},{type:"p",text:"模拟器和后面的 `xunzhan inspect` 用同一套规则：磁盘达到警告线记 warn，达到严重线记 crit；心跳达到上限的 70% 记 warn，达到上限记 crit。有任何 crit，退出码就是 1。"}],exercise:{prompt:"在模拟器里把 cron-1 的磁盘改成 70，把 worker-1 的心跳改成 10，再运行。看退出码。然后只把 api-1 的磁盘改成 85。",hint:"85 落在 80 和 90 之间，是警告。",solution:"三台都没有 crit 时退出码变成 0。只剩 85% 的磁盘时，主机状态是 warn，默认退出码仍是 0。这就是警告和严重的差别。"},quiz:[{q:"默认模式下，只有 warn、没有 crit，退出码是？",choices:["0","1","2"],answer:0,why:"示例把 1 留给严重问题。警告写在报告里。"},{q:"严格模式改变的是？",choices:["把 ok 变成 warn","让 warn 也导致退出码 1","不再打印建议"],answer:1,why:"阈值没变，变的是调用方要不要把警告当成失败。"},{q:"心跳 45 秒、上限 60 秒，按七成警告线会是？",choices:["ok","warn","crit"],answer:1,why:"42 秒开始警告，60 秒才到严重。45 落在中间。"}]},{id:"stop-or-continue",title:"继续，还是停下",read:10,practice:15,summary:"巡检和批处理尽量做完；后面的步骤依赖前面成功时，失败就要停。",goals:["用同一份步骤演示 continue 和 stop","指出发布不该在切换失败后继续健康检查","能为自己的脚本选一种策略"],blocks:[{type:"p",text:"上一课的巡检应该继续，因为你想看到所有机器。发布不是这样。版本没切换成功，就没有必要去做「切换之后」的健康检查，更不能把失败当成已经发布。"},le({filename:"stop_or_continue.py",code:pf,run:"python3 stop_or_continue.py",output:`策略 continue
OK   检查磁盘
OK   备份配置
FAIL 切换版本
记录失败，继续
OK   健康检查

策略 stop
OK   检查磁盘
OK   备份配置
FAIL 切换版本
停止，不执行后续步骤`}),{type:"p",text:"注意 continue 那段仍会打印健康检查 OK。那行在这个练习里是假的：切换已经失败，健康检查却像成功了一样出现。这就是「失败后还继续」在发布里会骗人的地方。"},{type:"table",caption:"选策略",columns:["任务","失败时"],rows:[["巡检、批量导出、采集","记下这项，继续其余项，最后用退出码汇总"],["部署、发布、迁移","停下。后面的步骤默认依赖前面已经成功"]]}],exercise:{prompt:"把步骤里的失败从「切换版本」改到「备份配置」，再运行。看 stop 策略停在哪一行。",hint:"stop 会在第一次 fail 后 return。",solution:"stop 会在备份配置处停下，切换版本和健康检查都不会打印。continue 仍会把四步都走完，并在备份那一行写「记录失败，继续」。"},quiz:[{q:"十台机器的磁盘巡检，一台读失败了，应该？",choices:["立即退出，不看剩下九台","记下这台，继续看剩下的，最后汇总","把失败改成 ok"],answer:1,why:"巡检的价值是一份完整报告。一台失败不应把其余机器的事实藏起来。"},{q:"版本切换失败后还去做健康检查，问题是？",choices:["健康检查可能针对旧状态，报告却看起来像发布后的结果","健康检查一定更慢","退出码不能是 1"],answer:0,why:"步骤之间有依赖时，后面的成功不能代表前面已经成功。"},{q:"stop 策略在示例里用什么实现？",choices:["遇到 fail 就 return","把后面的步骤改成 ok","删除清单"],answer:0,why:"return 会带着已经完成的名字离开，后续循环不再执行。"}]},{id:"idempotent",title:"再跑一次也要安全",read:14,practice:20,summary:"重复执行只补齐缺失的部分。锁用来避免两次运行叠在一起。",goals:["写一个补齐目录和配置的函数","第二次运行得到「没有新文件」","用排他创建做一把简单的锁"],blocks:[{type:"p",text:"部署脚本会被人再跑一次，也会被定时任务重试。第二次应该发现目录和配置已经在，就停手，而不是覆盖别人改过的配置，或者把目录删掉重建。"},le({filename:"idempotent_layout.py",code:hf,run:"python3 idempotent_layout.py --root /tmp/xunzhan-layout",output:`第一次：新建 app, log, tmp, config.json
第二次：没有新文件

如果 .lock 已经存在：标准错误写「已有一次运行还没结束」，退出码 2。`}),{type:"p",text:"锁用的是「创建时要求文件必须不存在」。两个进程同时创建，只有一个能成功。拿到锁的进程在 `finally` 里删掉它，没拿到的进程不能删，否则会把别人的锁清掉。"},{type:"p",text:"这把锁只防同一台机器上的重叠运行。它不跨机器，进程如果被杀掉且 `finally` 没跑到，锁文件会留下。练习里遇到「已有一次运行」，先确认没有进程还在，再决定要不要删 `.lock`。"},{type:"callout",tone:"keep",title:"已存在的配置不要覆盖",text:"示例发现 config.json 就跳过。手改过的端口不会被下一次运行冲掉。真要更新配置，就另做一个明确的步骤，而不是偷偷重写。"}],exercise:{prompt:"对同一个目录跑两次。然后手动创建 `.lock`，再跑第三次。看完之后删掉这把练习锁，确认第四次又恢复正常。",hint:"锁文件在你传入的目录里，不在脚本旁边。",solution:"第二次打印「没有新文件」。第三次退出码 2，`.lock` 的内容保持你写进去的字。删掉锁之后可以再次运行。"},quiz:[{q:"第二次运行还删除并重建 app 目录，会有什么问题？",choices:["没有问题，结果一样","目录里后来放进去的文件会被清掉","退出码会自动变成 0"],answer:1,why:"幂等是「再跑一次结果仍对」，不是「每次都恢复到空白」。"},{q:"没拿到锁的进程可以删除锁文件吗？",choices:["可以，这样自己就能继续","不可以，那是别人还在运行的标记","只有退出码为 0 时可以"],answer:1,why:"示例里拿不到锁就退出 2，并在 finally 之外不去 unlink。"},{q:"config.json 已存在时，示例会？",choices:["用新内容覆盖","跳过，不修改","退出 1"],answer:1,why:"跳过才能保住手改。输出会是「没有新文件」，如果目录也已经在。"}]},{id:"http",title:"不会挂住的 HTTP",read:16,practice:25,summary:"每次请求都带超时，把 HTTP 错误和网络错误变成能打印的失败，并带上令牌头。",goals:["用标准库发 GET 并设置 timeout","区分 HTTP 状态和连接失败","对着本机练习服务看到 200 和 401"],blocks:[{type:"p",text:"运维脚本里最常见的外部调用就是 HTTP：健康检查、工单、发布系统、云平台。第一件要加上的不是重试，而是超时。没有超时的请求会把整个巡检挂住。"},{type:"p",text:"`urllib` 随 Python 自带，适合把调用的形状看清楚。工作里更常见的是 `requests`，参数几乎一一对应。两种都要认得。"},le({filename:"http_health.py",code:mf,run:"python3 http_health.py http://127.0.0.1:8765/health --token practice",output:`{"status": "ok"}

不带 --token 时打印 HTTP 401，退出码 1。`}),le({filename:"tiny_health.py",code:yf,run:"python3 tiny_health.py",output:`http://127.0.0.1:8765/health

这个进程会一直占用终端。另开一个终端再跑 http_health.py。`}),{type:"p",text:"练习服务接受任意非空 Bearer 令牌，用来确认请求头带上了。真实接口会核对令牌是不是那一个。401 在这里表示「没带令牌」。404 表示路径不对。"},le({lang:"python",filename:"用 requests 时的同一件事",code:Sf,download:null,output:"pip install requests 之后可以替换。timeout 仍要写。raise_for_status() 会让 4xx 和 5xx 变成异常。"}),{type:"callout",tone:"pit",title:"timeout 是秒",text:"urllib 和 requests 的 timeout 都是秒，可以写 3 或 3.0。别把它当成毫秒，否则 3000 会让失败的请求干等接近一小时。"}],exercise:{prompt:"先启动 tiny_health.py。请求一次带令牌，一次不带，一次把路径改成 /missing。记下三个退出码。",hint:"路径错误也是 HTTP 错误，信息在标准输出，退出码是 1。",solution:"带令牌得到 JSON 和退出码 0。不带令牌是 HTTP 401，错误路径是 HTTP 404，两次都是退出码 1。"},quiz:[{q:"超时参数最先防的是什么？",choices:["JSON 解析失败","对端一直不响应，脚本停在那里","令牌写进代码"],answer:1,why:"超时把「等下去」变成一次可以报告的失败。"},{q:"练习服务返回 401，表示？",choices:["机器磁盘满了","请求没有带上非空 Bearer 令牌","应该立刻重试十次"],answer:1,why:"这是认证头的问题。下一课再讲哪些状态值得重试。401 不在其中。"},{q:"`requests` 版本里 `raise_for_status()` 的作用是？",choices:["自动加令牌","让 4xx 和 5xx 变成异常","把超时改成毫秒"],answer:1,why:"不调用它的话，500 也会安静地返回一个 response，你可能接着去解析错误页面。"}]},{id:"config-layers",title:"配置分四层",read:12,practice:15,summary:"命令行优先，然后是环境变量、配置文件，最后才是默认值。",goals:["写出四层优先级","用环境变量覆盖文件里的并发数","让非法数字变成明确的错误"],blocks:[{type:"p",text:"同一个 `workers`，可能出现在四个地方。如果不规定谁赢，脚本会在某台机器上悄悄用错并发。规定要短，而且每次都一样：命令行，环境变量，配置文件，默认值。"},le({filename:"config_layers.py",code:gf,run:"python3 config_layers.py",output:"workers=4 来自默认值"}),{type:"p",text:"命令行适合这一次的临时决定。环境变量适合这台机器或这次任务的密钥和差异，例如 `XUNZHAN_WORKERS=8`。配置文件适合可以提交的、不含密钥的团队默认值。代码里的默认值只是兜底。"},{type:"code",lang:"bash",filename:"终端",code:`XUNZHAN_WORKERS=3 python3 config_layers.py
python3 config_layers.py --workers 8`,output:`第一行会打印 workers=3 来自环境变量。
第二行会打印 workers=8 来自命令行。`,download:null},{type:"p",text:"读到的值要转成整数。转不成，就抛出一个写给人看的 `RuntimeError`，而不是把一串 ValueError 栈直接甩出去。调用这个函数的命令行脚本可以再决定把它变成退出码 2。"}],exercise:{prompt:'写一个 `workers.json`，内容是 `{"workers": 2}`。分别试：只用配置文件、加上环境变量、再加上 `--workers 5`。',hint:"命令是 `python3 config_layers.py --config workers.json`。",solution:"三者分别来自配置文件、环境变量、命令行，数值是 2、环境变量里的数、5。命令行一直赢。"},quiz:[{q:"环境变量和配置文件都给了 workers，用哪个？",choices:["配置文件","环境变量","两个数的平均数"],answer:1,why:"环境变量比文件更靠近这一次运行。"},{q:"哪一层适合放令牌？",choices:["要提交的配置文件","代码里的默认值","环境变量或本机密钥管理"],answer:2,why:"令牌会变，也会泄漏。它不属于源码，也不属于团队共享的默认配置。"},{q:"`workers` 读到 `fast` 时应该？",choices:["当成 4","报「必须是整数」","当成 0"],answer:1,why:"悄悄用默认值会把配置错误藏起来。明确失败更容易改。"}]},{id:"retry",title:"哪些失败值得再试",read:14,practice:15,summary:"超时、连接失败、429 和 5xx 可以有限次再试。其余 4xx 停下来改请求。",goals:["把「能不能重试」写成单独的判断","用指数退避拉开每次等待","看到 404 不会进入等待"],blocks:[{type:"p",text:"重试是为了扛住短暂的抖动，不是为了把错误请求多打几遍。先判断这一次失败有没有机会在下一秒变好。"},le({filename:"retry_call.py",code:vf,run:"python3 retry_call.py",output:"结果 ok  调用 3 次  等待 [0.2, 0.4]"}),{type:"p",text:"示例用一个会失败两次的假请求代替网络，所以你能看见等待序列：0.2 秒，然后 0.4 秒。这就是指数退避，每次把基础等待乘二。真接到 HTTP 时，把 `do_request` 换成上一课的 `fetch_json`，并让它在超时或 5xx 时把状态交回来。"},{type:"widget",name:"retry"},{type:"callout",tone:"keep",title:"429 要看 Retry-After",text:"对方如果在响应头里告诉你等多久，就按那个等。自己的退避只是没有这个头时的备用。重试次数仍然要有上限。"}],exercise:{prompt:'在 `retry_call.py` 的 `flaky` 里把成功条件改成 `calls["n"] < 5`，tries 保持 3。运行并读最后的异常。',hint:"三次都失败时，函数会在循环结束后抛错。",solution:"输出变成异常：重试 3 次后仍失败。等待列表里仍是两次间隔，因为第三次之后不再睡。"},quiz:[{q:"HTTP 404 应该？",choices:["按指数退避重试","停下来检查路径或资源","当成 200"],answer:1,why:"资源不存在不会因为多等 0.4 秒就出现。"},{q:"示例里两次等待为什么是 0.2 和 0.4？",choices:["固定每次 0.4","基础等待 0.2，第二次乘二","随机数"],answer:1,why:"第 n 次失败后的等待是 base_delay 乘 2 的 n-1 次方。第一次失败后是 0.2，第二次后是 0.4。"},{q:"超时为什么可以重试？",choices:["超时说明令牌错了","可能是一次抖动，下一次请求有机会完成","标准库要求必须重试"],answer:1,why:"前提是次数有限。无限重试会把一次故障放大成持续流量。"}]},{id:"paging-client",title:"分页与小客户端",read:14,practice:20,summary:"顺着 cursor 把页面取完，并给页数一个上限。每个 API 动作收成一个函数。",goals:["写出带 cursor 的 fetch_all","在页数过多时停下来","能画出一个只有三个函数的小客户端"],blocks:[{type:"p",text:"运维 API 很少一次返回全部主机或全部发布记录。常见的是 `page` 加 `per_page`，或者返回一个 `cursor`，你带着它要下一页。cursor 这种方式不用自己算页码，但你必须防止它永远不变。"},le({filename:"paged_fetch.py",code:xf,run:"python3 paged_fetch.py",output:"api worker cron"}),{type:"p",text:"示例没有真的打网络。`fetch_page` 接收上一次的 cursor，返回这一页的条目和下一页的 cursor。`None` 表示结束。`fetch_all` 不关心条目是机器还是工单，它只负责把页缝起来。"},{type:"p",text:"页数上限是保险丝。如果接口总是返回同一个 cursor，循环会永远转。超过 20 页就抛错，让人去看是不是没有前进。这个数字按你的数据量改，但一定要有。"},{type:"h",text:"收成小客户端"},{type:"p",text:"一个发布系统用三个函数就够起步：`get_health(env)`、`list_releases(env)`、`create_release(env, version)`。每个函数负责一条路径、自己的超时，并返回已经解析的字典或列表。调用方不直接碰 `urlopen`。令牌从环境变量读，在函数里放进请求头。"},{type:"callout",tone:"do",title:"请求之间留出间隔",text:"批量拉取时，在页与页之间睡一小段，或者遵守限流响应。一个紧的 for 循环可以把本来健康的接口打满。分页函数是加这个间隔的地方。"}],exercise:{prompt:"给练习目录加第三页：让 `p2` 返回 cursor `p3`，再加 `p3` 返回最后一台机器和 `None`。运行并看打印。",hint:"catalog 是一个字典，键是 cursor。",solution:"打印会按页的顺序多出一个名字。如果第三页的 cursor 写成一个永远存在的值，并且把 limit_pages 调小，就会撞上限错误。"},quiz:[{q:"cursor 一直不变时，上限的作用是？",choices:["把重复项自动去重","让循环停下来，避免脚本不结束","把超时改大"],answer:1,why:"去重解决不了「永远还有下一页」这个控制问题。"},{q:"小客户端的一个函数应该？",choices:["包住一条 API 动作并返回解析后的数据","打印所有日志然后不返回","同时创建发布和删除主机"],answer:0,why:"一个函数一件事，调用方才好在巡检或发布脚本里复用。"},{q:"`fetch_all` 为什么不自己写死 URL？",choices:["URL 不合法","翻页和「怎么要到一页」是两件事","标准库不支持 URL"],answer:1,why:"把 `fetch_page` 传进来之后，翻页逻辑可以用假数据测试，也可以接真实 HTTP。"}]},{id:"when-concurrent",title:"先算清要等多久",read:10,practice:10,summary:"并发用来重叠等待。先估算串行要多久，再决定要不要上线程或协程。",goals:["区分等待 IO 和自己算个不停","用机器数、单次等待和并发数估算耗时","知道并发会把限流一起放大"],blocks:[{type:"p",text:"十台机器，每台健康检查要等 300 毫秒。一台接一台是 3 秒。四台一起等，大约是 3 轮，0.9 秒。这段时间大部分花在等网络，而不是花在 Python 把 JSON 读出来。"},{type:"p",text:"等待网络、磁盘、子进程，用线程或协程来重叠。自己把 CPU 算满的活，线程帮不上忙，那是多进程的题目。这门课的巡检、HTTP、采集都是等待型，所以只学线程池和协程。"},{type:"widget",name:"concurrency"},{type:"p",text:"估算假设每台一样慢，而且并发槽一直是满的。真实接口会限流。你把并发从 4 调到 40，计算出来的时间会很短，对端却可能开始返回 429。下一课先把线程池跑通，再在后面给它加上限。"},{type:"callout",tone:"keep",title:"先留一个串行版本",text:"并发出错时更难读。函数先写成「检查一台」，串行调用能跑通，再把调用方式换成线程池。检查逻辑本身不用为了并发重写。"}],exercise:{prompt:"在估算器里设 20 台、每台 500 毫秒、同时 5 个。口算一遍，看和页面是否一致。",hint:"轮数是机器数除以并发，向上取整。",solution:"20 / 5 = 4 轮，每轮 500 毫秒，一共 2 秒。串行是 10 秒。"},quiz:[{q:"健康检查这种任务慢，主要慢在？",choices:["Python 的 for 循环本身","等待对端响应","打印文字"],answer:1,why:"所以重叠等待才有收益。"},{q:"把并发调得很大，估算时间变短之后还要担心？",choices:["退出码不能是 0","对端限流，真实时间反而变差","字典不能在线程里创建"],answer:1,why:"并发放大的是流量，不只是速度。"},{q:"检查一台机器的函数，最好？",choices:["里面直接开线程","只检查一台，由外面决定串行还是并行","只能返回字符串"],answer:1,why:"调用方式会变，检查规则应该稳定。"}]},{id:"thread-pool",title:"线程池重叠等待",read:16,practice:20,summary:"用线程池同时等多台机器，再按清单顺序输出结果。",goals:["用 ThreadPoolExecutor 提交检查","用 as_completed 收回结果","把完成顺序调回输入顺序"],blocks:[{type:"p",text:"线程池维护固定数量的工人。你把「检查这一台」提交进去，工人在等待时，别的工人可以检查别的机器。池子比每台机器新开一个线程好控：机器有 100 台，工人仍可以只有 4 个。"},le({filename:"thread_pool.py",code:_f,run:"python3 thread_pool.py",output:`api-1 OK
worker-1 OK
cron-1 OK
cache-1 OK
耗时 0.21 秒左右

四台各等 0.2 秒。串行大约要 0.8 秒。小数点后会有少量偏差。`}),{type:"p",text:"`as_completed` 谁先做完先给你谁。人读报告时，顺序一会儿一变会很难和清单对照。所以先把结果放进字典，再按 `HOSTS` 原来的顺序取出来。"},{type:"p",text:"示例用 `time.sleep` 假装网络等待。把 `check_one` 的函数体换成 `fetch_json`，外面的线程池不用改。记得每次请求仍有自己的超时。"},{type:"callout",tone:"pit",title:"别把工人数写成机器数那么大",text:"后面的工具把并发限制在 1 到 32。这是教学用的护栏，避免一个参数把下游打满。你的环境如果更小，默认 4 就够。"}],exercise:{prompt:"把 `run_checks` 的 workers 改成 1，再运行，看耗时。然后改回 4。",hint:"workers=1 就是串行，四次 0.2 秒会叠起来。",solution:"workers 为 1 时耗时大约 0.8 秒，顺序仍是清单顺序。改回 4 之后回到 0.2 秒多一点。"},quiz:[{q:"`as_completed` 的顺序是？",choices:["和提交顺序一致","谁先完成谁先返回","按名字排序"],answer:1,why:"所以示例又按原清单取了一次，报告顺序才稳定。"},{q:"四台各等 0.2 秒、4 个工人，耗时更接近？",choices:["0.8 秒","0.2 秒","0.2 乘 4 再乘 4"],answer:1,why:"四次等待叠在同一段时间里。还要加上一点调度开销。"},{q:"检查函数里已经有 timeout 时，线程池？",choices:["可以去掉单次超时","仍要保留单次超时，池子只决定同时等几路","会把 timeout 乘以工人数"],answer:1,why:"池子管并发度，超时管每一路最多等多久。两件都要。"}]},{id:"asyncio",title:"用协程调度同步函数",read:16,practice:20,summary:"async 负责调度。已经写好的同步检查，用 asyncio.to_thread 放进事件循环。",goals:["读懂 async def、await 和 gather","用 to_thread 包住 time.sleep 或 requests","避免在协程里直接 time.sleep"],blocks:[{type:"p",text:"协程是另一套调度：一个事件循环在很多个「可以暂停的函数」之间切换。函数执行到 `await` 就让出，循环去推别的函数。它很适合大量等待，但要求被等待的操作真的会让出控制权。"},{type:"p",text:"`requests` 和 `time.sleep` 不会让出。若在 `async def` 里直接调用它们，整个循环都会停住，别的协程也动不了。你已经有同步函数时，用 `asyncio.to_thread` 把它放到线程里，事件循环就能继续调度别的任务。"},le({filename:"async_inspect.py",code:wf,run:"python3 async_inspect.py",output:`api-1 OK
worker-1 OK
cron-1 OK
cache-1 OK
耗时 0.21 秒左右`}),{type:"p",text:"`asyncio.gather` 同时推进多件任务，并按你传入的顺序给出结果。这一点和线程池的 `as_completed` 不同，报告顺序天然稳定。"},{type:"p",text:"`asyncio.run` 是入口，只在普通函数 `main` 里调用一次。不要在已经运行的循环里再 `asyncio.run`。"},{type:"callout",tone:"pit",title:"协程里要等待，就 await asyncio.sleep",text:"演示延迟时写 `await asyncio.sleep(0.2)`。`time.sleep(0.2)` 会把事件循环冻住。to_thread 是给那些还不能改成异步库的函数准备的。"}],exercise:{prompt:"把 `check_sync` 里的等待改成 0.5 秒，运行一次。再把 gather 改成一个普通 for 循环，在循环里 `await asyncio.to_thread(...)`，比较耗时。",hint:"for 循环里的 await 会等完这一台再开始下一台。",solution:"gather 仍接近 0.5 秒。改成循环 await 之后接近 2 秒，因为四次等待又变成串行了。并发来自「一起创建任务」，不是来自函数写成了 async。"},quiz:[{q:"在 async 函数里直接 `time.sleep` 会？",choices:["只暂停这一个任务","把整个事件循环停住","自动变成 to_thread"],answer:1,why:"time.sleep 不懂得把控制权交回去。"},{q:"`asyncio.gather` 返回结果的顺序？",choices:["完成顺序","与传入任务的顺序一致","随机"],answer:1,why:"这让报告可以按清单输出，不必再手工排序。"},{q:"已有一个用 requests 写的同步函数时，最省事的接法是？",choices:["重写整个项目","用 asyncio.to_thread 调用它","去掉 timeout"],answer:1,why:"检查逻辑保持原样，调度交给事件循环和线程。请求很多、要更细的连接控制时，再考虑专门的异步 HTTP 库。"}]},{id:"bounded",title:"给并发加上限",read:14,practice:15,summary:"用信号量限制同时打出去的检查数，并保留每一路自己的失败。",goals:["用 Semaphore 把同时运行的同步函数压到 N 个","观察到四台、上限 2 时耗时大约翻倍","说出总超时和单次超时分别管什么"],blocks:[{type:"p",text:"能并发之后，下一件要写死的是「最多同时几个」。信号量就是这么多把钥匙：任务开始前拿走一把，结束时归还。没有钥匙的任务在 `async with` 那里等。"},le({filename:"bounded_async.py",code:kf,run:"python3 bounded_async.py",output:`api-1 OK
worker-1 OK
cron-1 OK
cache-1 OK
耗时 0.42 秒左右

上限 2，每台 0.2 秒，所以大约两轮。`}),{type:"p",text:"和线程池的 `max_workers` 是同一类旋钮，只是放在协程这边。巡检工具选择了线程池，因为检查函数是同步的；你在这里看到的是同一件事的协程写法。两个都要会读。"},{type:"p",text:"还差两层保护。单次检查要有超时，这样一把钥匙不会被一台失联的机器一直拿走。整批任务也可以有一个总超时，到点就把还没完成的记成 crit，而不是让值班的人干等。一台抛了异常，应该变成这台机器的失败记录，`gather` 可以配合每台自己的 try，避免一台拖垮整批。"},{type:"callout",tone:"keep",title:"失败隔离",text:"并发之后，异常会从工人线程或任务里冒出来。抓住它，写成这台主机的 crit，其余主机的结果照常收集。巡检命令里就是这样做的。"}],exercise:{prompt:"把 `limit` 改成 1 和 4 各跑一次，记下耗时。不用改检查函数。",hint:"limit=1 接近四次等待相加，limit=4 接近一次等待。",solution:"大约 0.8 秒和 0.2 秒。顺序始终是清单顺序，因为 gather 会按传入顺序给结果。"},quiz:[{q:"信号量在这里限制的是？",choices:["清单的长度","同一时刻真正执行的检查数","退出码的最大值"],answer:1,why:"任务可以先创建，但只有拿到钥匙的才会进入 to_thread。"},{q:"四台、每台 0.2 秒、上限 2，耗时更接近？",choices:["0.2 秒","0.4 秒","0.8 秒"],answer:1,why:"两轮，每轮两台一起等。"},{q:"一台检查抛了异常时，更合适的处理是？",choices:["让整个程序直接退出，不记录其余机器","把这台记成 crit，其余照常收结果","把异常吞掉，状态写成 ok"],answer:1,why:"这和「巡检要继续」是同一条原则，只是失败发生在并发任务里面。"}]}],Nf=`"""错误预算：这段时间里，SLO 还允许失败多少次。"""

from __future__ import annotations


def error_budget(total: int, failed: int, slo: float = 0.999) -> dict:
    if total < 0 or failed < 0 or failed > total:
        raise ValueError("请求数不合法")
    if not 0 < slo <= 1:
        raise ValueError("SLO 要在 0 和 1 之间")
    allowed = round(total * (1 - slo), 4)
    remaining = round(allowed - failed, 4)
    if allowed == 0:
        burn = 0 if failed == 0 else float("inf")
    else:
        burn = round(failed / allowed, 6)
    return {"allowed": allowed, "failed": failed, "remaining": remaining, "burn": burn}


def main() -> int:
    report = error_budget(1_000_000, 200, slo=0.999)
    print(f"允许失败 {report['allowed']:.0f}")
    print(f"已经失败 {report['failed']}")
    print(f"剩余 {report['remaining']:.0f}")
    print(f"烧掉了 {report['burn'] * 100:.1f}%")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
`,Ef=`"""一次检查的结果长什么样。后面的报告、退出码都靠这个结构。"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass
class Check:
    name: str
    status: str
    detail: str
    suggestion: str = ""


@dataclass
class HostReport:
    host: str
    checks: list[Check]

    @property
    def status(self) -> str:
        return worst_status(check.status for check in self.checks)


def worst_status(statuses) -> str:
    order = {"ok": 0, "warn": 1, "crit": 2}
    found = "ok"
    for status in statuses:
        if order[status] > order[found]:
            found = status
    return found


def plain_number(value: float) -> str:
    number = float(value)
    if number.is_integer():
        return str(int(number))
    return f"{number:g}"
`,Cf=`"""同一次结果，给人一行行看，也给下游一段 JSON。"""

from __future__ import annotations

import json
import sys
from datetime import datetime

from xunzhan.model import HostReport

LABEL = {"ok": "OK", "warn": "WARN", "crit": "CRIT"}


def log(message: str) -> None:
    stamp = datetime.now().astimezone().strftime("%H:%M:%S")
    print(f"{stamp} {message}", file=sys.stderr)


def report_to_dict(report: HostReport) -> dict:
    return {
        "host": report.host,
        "status": report.status,
        "checks": [
            {
                "name": check.name,
                "status": check.status,
                "detail": check.detail,
                "suggestion": check.suggestion,
            }
            for check in report.checks
        ],
    }


def format_text(reports: list[HostReport]) -> str:
    lines: list[str] = []
    host_counts = {"ok": 0, "warn": 0, "crit": 0}
    check_counts = {"ok": 0, "warn": 0, "crit": 0}
    for report in reports:
        host_counts[report.status] += 1
        lines.append(f"== {report.host}  {LABEL[report.status]}")
        for check in report.checks:
            check_counts[check.status] += 1
            lines.append(f"{LABEL[check.status]:4}  {check.name:10}  {check.detail}")
            if check.suggestion:
                lines.append(f"      {check.suggestion}")
        lines.append("")
    check_total = sum(check_counts.values())
    lines.append(
        f"主机 {len(reports)}  严重 {host_counts['crit']}  警告 {host_counts['warn']}  正常 {host_counts['ok']}"
    )
    lines.append(
        f"检查 {check_total}  严重 {check_counts['crit']}  警告 {check_counts['warn']}  正常 {check_counts['ok']}"
    )
    return "\\n".join(lines) + "\\n"


def format_json(reports: list[HostReport]) -> str:
    payload = [report_to_dict(report) for report in reports]
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\\n"


def exit_code(reports: list[HostReport], *, strict: bool) -> int:
    statuses = [report.status for report in reports]
    if "crit" in statuses:
        return 1
    if strict and "warn" in statuses:
        return 1
    return 0
`,zf=`"""工作目录检查。工具必须知道自己被允许动哪一块地方。"""

from __future__ import annotations

import sys
from pathlib import Path


def die(message: str, code: int = 2) -> None:
    print(message, file=sys.stderr)
    raise SystemExit(code)


def require_work_root(raw: str | None, *, create: bool) -> Path:
    if raw is None or not str(raw).strip():
        die("请用 --root 指定一个专用工作目录")
    root = Path(raw).expanduser().resolve()
    if root == Path(root.anchor) or len(root.parts) < 3:
        die("拒绝在磁盘根目录或过浅的路径上操作")
    if root.exists() and not root.is_dir():
        die("工作目录的路径上已经有一个文件")
    if create:
        root.mkdir(parents=True, exist_ok=True)
    return root
`,Pf=`"""四个工具加一个判断命令。约定同一套退出码。"""

from __future__ import annotations

import argparse

EPILOG = """退出码
  0  没有严重问题，或发布、部署成功
  1  有严重巡检项、健康检查失败，或出现需要行动的告警
  2  参数、清单或路径不合法

只对自己有权维护的目录、账号和机器使用。清单由你提供，工具不会扫描网段。
""".strip()


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="xunzhan",
        description="巡栈练习工具链：巡检、部署、发布、采集。",
        epilog=EPILOG,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    sub = parser.add_subparsers(dest="cmd", required=True)

    inspect = sub.add_parser("inspect", help="按清单巡检")
    inspect.add_argument("--hosts", help="主机清单 JSON，默认用练习清单")
    inspect.add_argument("--workers", type=int, default=4, help="并发数，1 到 32")
    inspect.add_argument("--disk-warn", type=float, default=80)
    inspect.add_argument("--disk-crit", type=float, default=90)
    inspect.add_argument("--strict", action="store_true", help="警告也让退出码变成 1")
    inspect.add_argument("--json", action="store_true", help="向标准输出打印 JSON")

    deploy = sub.add_parser("deploy", help="在指定目录准备一份练习环境")
    deploy.add_argument("--root", required=True, help="专用工作目录")
    deploy.add_argument("--port", type=int, default=8080)
    deploy.add_argument("--dry-run", action="store_true", help="只打印会做的事")

    publish = sub.add_parser("publish", help="切换版本指针")
    publish.add_argument("--root", required=True)
    publish.add_argument("--version", required=True)
    publish.add_argument("--artifact", required=True)
    publish.add_argument("--env", choices=("staging", "prod"), default="staging")
    publish.add_argument("--yes", action="store_true", help="确认对生产环境执行")
    publish.add_argument("--fail-health", action="store_true", help="演习：健康检查失败并回滚指针")

    collect = sub.add_parser("collect", help="追加写入指标 JSON Lines")
    collect.add_argument("--out", required=True)
    collect.add_argument("--count", type=int, default=1)
    collect.add_argument("--interval", type=float, default=0)
    collect.add_argument("--disk-path", default="/")

    judge = sub.add_parser("judge", help="根据指标判断要不要行动")
    judge.add_argument("--metrics", required=True)
    judge.add_argument("--disk-crit", type=float, default=90)
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    if args.cmd == "inspect":
        from xunzhan.inspect_cmd import run
    elif args.cmd == "deploy":
        from xunzhan.deploy_cmd import run
    elif args.cmd == "publish":
        from xunzhan.publish_cmd import run
    elif args.cmd == "collect":
        from xunzhan.collect_cmd import run
    elif args.cmd == "judge":
        from xunzhan.judge_cmd import run
    else:
        parser.error(f"未知命令 {args.cmd}")
    return run(args)
`,Tf=`"""按清单巡检。一台失败不会让后面的机器失去记录。"""

from __future__ import annotations

import json
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import shutil

from xunzhan.model import Check, HostReport, plain_number
from xunzhan.paths import die
from xunzhan.report import exit_code, format_json, format_text, log

DEFAULT_HOSTS = Path(__file__).resolve().parent / "fixtures" / "hosts.json"


def check_disk(host: dict, warn: float, crit: float) -> Check:
    if "disk_used_percent" in host:
        raw = host["disk_used_percent"]
    else:
        path = str(host.get("disk_path") or ".")
        try:
            usage = shutil.disk_usage(path)
        except OSError as exc:
            return Check("disk", "crit", f"读不到磁盘 {path}：{exc}", "先确认路径是否存在")
        raw = usage.used / usage.total * 100
    percent = round(float(raw), 1)
    detail = f"已用 {percent:.1f}%"
    if percent >= crit:
        return Check("disk", "crit", detail, "先清理或扩容，再继续发布")
    if percent >= warn:
        return Check("disk", "warn", detail, "安排清理，发布前再看一眼")
    return Check("disk", "ok", detail, "")


def check_heartbeat(host: dict) -> Check:
    if "heartbeat_age_s" not in host or "heartbeat_limit_s" not in host:
        return Check(
            "heartbeat",
            "crit",
            "清单里没有心跳数据",
            "补上采集，或标明这台机器不检查心跳",
        )
    age = float(host["heartbeat_age_s"])
    limit = float(host["heartbeat_limit_s"])
    if limit <= 0:
        return Check("heartbeat", "crit", "心跳上限不合法", "修正清单里的 heartbeat_limit_s")
    detail = f"心跳 {plain_number(age)} 秒，上限 {plain_number(limit)} 秒"
    if age >= limit:
        return Check("heartbeat", "crit", detail, "先确认进程是否还在")
    if age >= limit * 0.7:
        return Check("heartbeat", "warn", detail, "心跳偏旧，看一眼采集是否延迟")
    return Check("heartbeat", "ok", detail, "")


def inspect_host(host: dict, disk_warn: float, disk_crit: float) -> HostReport:
    name = str(host.get("name") or "未命名")
    checks = [check_disk(host, disk_warn, disk_crit), check_heartbeat(host)]
    return HostReport(name, checks)


def load_hosts(path: Path) -> list[dict]:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        die(f"找不到清单 {path}")
    except json.JSONDecodeError as exc:
        die(f"清单不是合法 JSON：{exc}")
    if not isinstance(data, list) or not data:
        die("清单需要是非空的 JSON 数组")
    names = [str(item.get("name")) for item in data if isinstance(item, dict)]
    if len(names) != len(data) or any(not name or name == "None" for name in names):
        die("每台机器都要有 name")
    if len(names) != len(set(names)):
        die("主机名不能重复")
    return data


def run_hosts(hosts: list[dict], *, workers: int, disk_warn: float, disk_crit: float) -> list[HostReport]:
    if not 1 <= workers <= 32:
        die("并发数请设在 1 到 32")
    if crit_not_above_warn(disk_warn, disk_crit):
        die("磁盘严重阈值必须高于警告阈值")
    order = [str(host["name"]) for host in hosts]
    found: dict[str, HostReport] = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {
            pool.submit(inspect_host, host, disk_warn, disk_crit): str(host["name"]) for host in hosts
        }
        for future in as_completed(futures):
            name = futures[future]
            try:
                found[name] = future.result()
            except Exception as exc:
                found[name] = HostReport(
                    name,
                    [Check("inspect", "crit", f"检查过程出错：{exc}", "看标准错误里的日志")],
                )
    return [found[name] for name in order]


def crit_not_above_warn(warn: float, crit: float) -> bool:
    return crit <= warn


def run(args) -> int:
    path = Path(args.hosts) if args.hosts else DEFAULT_HOSTS
    hosts = load_hosts(path)
    log(f"开始巡检 {len(hosts)} 台，并发 {args.workers}")
    reports = run_hosts(
        hosts,
        workers=args.workers,
        disk_warn=args.disk_warn,
        disk_crit=args.disk_crit,
    )
    text = format_json(reports) if args.json else format_text(reports)
    sys_stdout_write(text)
    code = exit_code(reports, strict=args.strict)
    log(f"结束，退出码 {code}")
    return code


def sys_stdout_write(text: str) -> None:
    import sys

    sys.stdout.write(text)
`,Rf=`"""把「记得要做的那几步」写成可以重复执行、失败会收回的步骤。"""

from __future__ import annotations

import json
import sys

from xunzhan.paths import die, require_work_root


class Step:
    def __init__(self, name: str, run, rollback=None, *, mutates: bool):
        self.name = name
        self._run = run
        self.rollback = rollback
        self.mutates = mutates

    def run(self, ctx: dict) -> None:
        self._run(ctx)


def run_python(ctx: dict) -> None:
    if sys.version_info < (3, 10):
        raise RuntimeError(f"需要 Python 3.10 或更高，当前是 {sys.version.split()[0]}")


def run_args(ctx: dict) -> None:
    port = ctx["port"]
    if not isinstance(port, int) or not 0 <= port <= 65535:
        raise RuntimeError("端口要在 0 到 65535 之间")


def run_dirs(ctx: dict) -> None:
    for name in ("app", "log", "tmp"):
        path = ctx["root"] / name
        if path.exists():
            continue
        path.mkdir()
        ctx["created_dirs"].append(path)


def rollback_dirs(ctx: dict) -> bool:
    removed = False
    for path in reversed(ctx["created_dirs"]):
        if path.is_dir():
            path.rmdir()
            removed = True
    ctx["created_dirs"].clear()
    return removed


def run_config(ctx: dict) -> None:
    path = ctx["root"] / "config.json"
    if path.exists():
        ctx["config_written"] = False
        return
    payload = {"name": "demo", "port": ctx["port"]}
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\\n", encoding="utf-8")
    ctx["config_written"] = True


def rollback_config(ctx: dict) -> bool:
    if not ctx.get("config_written"):
        return False
    path = ctx["root"] / "config.json"
    path.unlink(missing_ok=True)
    ctx["config_written"] = False
    return True


def run_smoke(ctx: dict) -> None:
    path = ctx["root"] / "config.json"
    if not path.is_file():
        raise RuntimeError("没有配置文件，无法做健康检查")
    data = json.loads(path.read_text(encoding="utf-8"))
    port = data.get("port")
    if not isinstance(port, int) or not 1 <= port <= 65535:
        raise RuntimeError(f"端口 {port} 不能提供服务")


def build_steps() -> list[Step]:
    return [
        Step("检查 Python", run_python, mutates=False),
        Step("检查参数", run_args, mutates=False),
        Step("准备目录", run_dirs, rollback_dirs, mutates=True),
        Step("渲染配置", run_config, rollback_config, mutates=True),
        Step("健康检查", run_smoke, mutates=False),
    ]


def rollback_done(done: list[Step], ctx: dict) -> None:
    for step in reversed(done):
        if step.rollback and step.rollback(ctx):
            print(f"回滚 {step.name}")


def run(args) -> int:
    if args.dry_run:
        root_path = require_work_root(args.root, create=False)
    else:
        root_path = require_work_root(args.root, create=True)
    ctx = {
        "root": root_path,
        "port": args.port,
        "created_dirs": [],
        "config_written": False,
    }
    done: list[Step] = []
    for step in build_steps():
        if args.dry_run and step.mutates:
            print(f"DRY-RUN {step.name}")
            continue
        if args.dry_run and step.name == "健康检查":
            print(f"DRY-RUN {step.name}")
            continue
        try:
            step.run(ctx)
        except Exception as exc:
            print(f"FAIL {step.name}：{exc}")
            rollback_done(done, ctx)
            return 1
        print(f"OK   {step.name}")
        done.append(step)
    return 0
`,Of=`"""切换版本指针。健康检查失败时只把指针拨回去，现场留着。"""

from __future__ import annotations

import re
import shutil
from pathlib import Path

from xunzhan.paths import die, require_work_root

VERSION_RE = re.compile(r"^\\d+\\.\\d+\\.\\d+$")


def run(args) -> int:
    if args.env == "prod" and not args.yes:
        die("生产环境需要显式加上 --yes")
    if not VERSION_RE.match(args.version):
        die("版本号需要形如 1.2.0")
    artifact = Path(args.artifact).expanduser().resolve()
    if not artifact.is_file():
        die(f"制品不存在：{artifact}")
    root = require_work_root(args.root, create=True)
    releases = root / "releases"
    if releases.exists() and not releases.is_dir():
        die("releases 的位置上有一个文件")
    dest = releases / args.version
    if dest.exists():
        die(f"版本 {args.version} 已经存在，拒绝覆盖")
    dest.mkdir(parents=True)
    shutil.copy2(artifact, dest / "artifact")
    (dest / "VERSION").write_text(args.version + "\\n", encoding="utf-8")

    pointer = root / "CURRENT"
    previous = pointer.read_text(encoding="utf-8").strip() if pointer.exists() else ""
    pointer.write_text(args.version + "\\n", encoding="utf-8")

    artifact_ok = (dest / "artifact").stat().st_size > 0
    healthy = artifact_ok and not args.fail_health
    if healthy:
        print(f"已发布 {args.version}，CURRENT 指向它")
        return 0

    if previous:
        pointer.write_text(previous + "\\n", encoding="utf-8")
    else:
        pointer.unlink(missing_ok=True)
    shown = previous or "无"
    print(f"健康检查失败，已回滚指针到 {shown}")
    print(f"现场保留在 {dest}")
    return 1
`,Lf=`"""采集一小撮指标，按 JSON Lines 追加写入。默认只采有限次。"""

from __future__ import annotations

import json
import os
import shutil
import socket
import time
from datetime import datetime
from pathlib import Path

from xunzhan.paths import die


def gather_metrics(disk_path: str = "/") -> list[dict]:
    stamp = datetime.now().astimezone().isoformat(timespec="seconds")
    host = socket.gethostname()
    metrics = []
    try:
        load1, _, _ = os.getloadavg()
    except OSError:
        load1 = None
    if load1 is not None:
        metrics.append({"ts": stamp, "host": host, "name": "load.1m", "value": round(load1, 4)})
    usage = shutil.disk_usage(disk_path)
    percent = round(usage.used / usage.total * 100, 2)
    metrics.append(
        {
            "ts": stamp,
            "host": host,
            "name": "disk.used_percent",
            "value": percent,
            "labels": {"path": disk_path},
        }
    )
    return metrics


def append_metrics(path: Path, metrics: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as handle:
        for item in metrics:
            handle.write(json.dumps(item, ensure_ascii=False) + "\\n")


def run(args) -> int:
    if args.count < 1:
        die("--count 至少为 1")
    if args.interval < 0:
        die("--interval 不能为负")
    out = Path(args.out).expanduser().resolve()
    if len(out.parts) < 3:
        die("请把结果写到一个明确的文件路径，不要写到过浅的位置")
    for index in range(args.count):
        if index > 0 and args.interval > 0:
            time.sleep(args.interval)
        append_metrics(out, gather_metrics(args.disk_path))
    print(f"已追加 {args.count} 次采集到 {out}")
    return 0
`,If=`"""读采集到的 JSON Lines，只对值得行动的情况开口。"""

from __future__ import annotations

import json
from pathlib import Path

from xunzhan.paths import die

RUNBOOK = {
    "disk.used_percent": {
        "symptom": "磁盘使用率越过阈值",
        "impact": "日志写不进去，发布复制制品也会失败",
        "first": "先找出大文件，确认是不是日志没轮转",
        "escalate": "超过临界值还在涨，或者清理后很快又满，就叫人一起看",
    }
}


def latest_metrics(path: Path) -> dict[tuple[str, str], dict]:
    latest: dict[tuple[str, str], dict] = {}
    try:
        lines = path.read_text(encoding="utf-8").splitlines()
    except FileNotFoundError:
        die(f"找不到指标文件 {path}")
    for line_number, line in enumerate(lines, start=1):
        if not line.strip():
            continue
        try:
            item = json.loads(line)
        except json.JSONDecodeError as exc:
            die(f"第 {line_number} 行不是合法 JSON：{exc}")
        if not isinstance(item, dict):
            die(f"第 {line_number} 行需要是 JSON 对象")
        host = str(item.get("host") or "")
        name = str(item.get("name") or "")
        if not host or not name or "value" not in item:
            die(f"第 {line_number} 行缺少 host、name 或 value")
        latest[(host, name)] = item
    return latest


def judge(latest: dict[tuple[str, str], dict], disk_crit: float) -> list[str]:
    alerts = []
    for (host, name), item in latest.items():
        if name != "disk.used_percent":
            continue
        value = float(item["value"])
        if value < disk_crit:
            continue
        book = RUNBOOK[name]
        alerts.append(
            "\\n".join(
                [
                    f"ALERT {host} {name}={value:g}",
                    f"现象：{book['symptom']}",
                    f"影响：{book['impact']}",
                    f"第一步：{book['first']}",
                    f"升级：{book['escalate']}",
                ]
            )
        )
    return alerts


def run(args) -> int:
    if args.disk_crit <= 0:
        die("阈值要大于 0")
    latest = latest_metrics(Path(args.metrics))
    alerts = judge(latest, args.disk_crit)
    if not alerts:
        print("没有需要行动的告警")
        return 0
    print("\\n\\n".join(alerts))
    return 1
`,Ff=`[
  {
    "name": "api-1",
    "disk_used_percent": 71.0,
    "heartbeat_age_s": 12,
    "heartbeat_limit_s": 60
  },
  {
    "name": "worker-1",
    "disk_used_percent": 84.0,
    "heartbeat_age_s": 480,
    "heartbeat_limit_s": 120
  },
  {
    "name": "cron-1",
    "disk_used_percent": 93.0,
    "heartbeat_age_s": 45,
    "heartbeat_limit_s": 60
  }
]
`,Df=`{"ts": "2026-11-18T10:00:00+08:00", "host": "api-1", "name": "disk.used_percent", "value": 71.2, "labels": {"path": "/"}}
{"ts": "2026-11-18T10:00:00+08:00", "host": "api-1", "name": "load.1m", "value": 0.2}
{"ts": "2026-11-18T10:00:00+08:00", "host": "worker-1", "name": "disk.used_percent", "value": 93.5, "labels": {"path": "/"}}
{"ts": "2026-11-18T10:00:05+08:00", "host": "worker-1", "name": "disk.used_percent", "value": 91.0, "labels": {"path": "/"}}
`,Ka=`== api-1  OK
OK    disk        已用 71.0%
OK    heartbeat   心跳 12 秒，上限 60 秒

== worker-1  CRIT
WARN  disk        已用 84.0%
      安排清理，发布前再看一眼
CRIT  heartbeat   心跳 480 秒，上限 120 秒
      先确认进程是否还在

== cron-1  CRIT
CRIT  disk        已用 93.0%
      先清理或扩容，再继续发布
WARN  heartbeat   心跳 45 秒，上限 60 秒
      心跳偏旧，看一眼采集是否延迟

主机 3  严重 2  警告 0  正常 1
检查 6  严重 2  警告 2  正常 2`,Mf=[{id:"from-script-to-cli",title:"收成一个命令入口",read:14,practice:20,summary:"四个工具共用一个程序，用子命令分开。先看目录，再看 argparse 怎么分发。",goals:["认得 xunzhan 目录里每个文件的职责","用子命令运行 inspect","记住退出码 0、1、2"],blocks:[{type:"p",text:"单独的脚本适合学一个想法。真要反复用，就把入口收成一个命令：`python3 -m xunzhan inspect`。子命令共享退出码约定和路径检查，检查规则不用在每个文件里复制。"},{type:"code",lang:"text",filename:"samples/xunzhan",download:null,code:`cli.py           子命令和参数
model.py         检查结果的数据结构
report.py        给人看的文本，和给程序的 JSON
paths.py         工作目录能不能动
inspect_cmd.py   巡检
deploy_cmd.py    准备环境
publish_cmd.py   切换版本
collect_cmd.py   采集指标
judge_cmd.py     判断要不要行动
fixtures/        练习清单和制品`},le({filename:"xunzhan/cli.py",code:Pf,download:"xunzhan/cli.py",run:"python3 -m xunzhan --help",output:"帮助末尾写着退出码。inspect、deploy、publish、collect、judge 各是一个子命令。"}),{type:"p",text:"在 `samples` 目录运行。Python 会把当前目录放进导入路径，于是 `xunzhan` 这个包能被找到。下载全部示例后，进入解压出来的 `samples` 再执行下面的命令。"},{type:"code",lang:"bash",filename:"终端",download:null,code:`cd samples
python3 -m xunzhan inspect
python3 -m xunzhan inspect --json`,output:"默认读取练习清单。文本报告在标准输出，开始和结束的日志在标准错误，退出码是 1。"}],exercise:{prompt:"运行 `python3 -m xunzhan inspect --help`，找出哪个参数会让警告也变成退出码 1。",hint:"帮助里每个参数有一行说明。",solution:"`--strict`。它不改变阈值，只改变有 warn 时退出码是不是 1。"},quiz:[{q:"为什么用子命令，而不是四个互不相关的入口？",choices:["Python 只能有一个文件","退出码、路径检查和帮助可以放在一处","子命令运行更快"],answer:1,why:"巡检和发布的策略不同，但「用法错误是 2」这种约定应该相同。"},{q:"`python3 -m xunzhan` 要在哪个目录运行？",choices:["任意目录","能导入到 xunzhan 包的目录，练习时就是 samples","必须是家目录"],answer:1,why:"当前目录在模块搜索路径里时，包才找得到。"},{q:"参数不合法时，这套工具用退出码？",choices:["0","1","2"],answer:2,why:"1 留给做完之后的严重问题或需要行动的告警。"}]},{id:"logs-and-json",title:"人读的和程序读的",read:14,practice:15,summary:"同一份结果打两遍：终端里的分段文本，以及 `--json` 的结构化输出。日志留在标准错误。",goals:["读懂文本报告的主机行和检查行","用 --json 让下游不必解析中文","确认日志没有混进 JSON"],blocks:[{type:"p",text:"人需要扫读：哪台机器、哪项是严重、建议是什么。另一个程序需要稳定的字段。一份报告同时满足这两件事，就不要挤在同一种格式里。"},le({filename:"xunzhan/report.py",code:Cf,download:"xunzhan/report.py",run:"python3 -m xunzhan inspect",output:`${Ka}

标准错误里还有带时间的「开始巡检」「结束，退出码 1」。时间会随你的时区变化。`}),{type:"p",text:"`--json` 把同样的事实打成数组。每台机器有 `host`、`status` 和 `checks`。检查项仍是 name、status、detail、suggestion。标准输出只有这段 JSON，日志仍在标准错误，所以 `python3 -m xunzhan inspect --json > report.json` 得到的文件可以直接解析。"},{type:"callout",tone:"keep",title:"字段用固定英文，句子用中文",text:"status 只有 ok、warn、crit。建议可以是中文。下游用 status 做判断，不从句子里抠「严重」。"}],exercise:{prompt:"把 JSON 报告重定向到文件，用 `python3 -c \"import json; print(json.load(open('report.json'))[1]['status'])\"` 打印第二台的状态。",hint:"第二台是 worker-1。命令要在 samples 目录执行，文件才会出现在当前目录。",solution:"打印 crit。若 JSON 文件里出现「开始巡检」，说明日志混进了标准输出，那就和 report.py 的约定不一致了。"},quiz:[{q:"文本报告里 worker-1 的主机状态为什么是 CRIT？",choices:["磁盘是 WARN，所以主机也是 WARN","它的检查里有一项 CRIT，主机取最严重的","名字里带 worker"],answer:1,why:"主机状态是各项里的最严重值。一项 crit 就让整台成为 crit。"},{q:"`--json` 时，开始巡检的日志在哪？",choices:["混在 JSON 数组前面","标准错误","写进退出码"],answer:1,why:"这样重定向标准输出才能得到合法 JSON。"},{q:"建议写在哪个字段？",choices:["从 detail 里用逗号拆出来","suggestion","用退出码表示建议文本"],answer:1,why:"detail 是事实，suggestion 是下一步。分开之后，没有建议的项可以留空。"}]},{id:"shared-skeleton",title:"抽出共用骨架",read:16,practice:20,summary:"数据结构、退出码和「这个目录能不能动」从各个脚本里抽出来，四个工具一起用。",goals:["读 HostReport 和 worst_status","说明路径检查挡的是什么","指出清单数据和真实探针要分开"],blocks:[{type:"p",text:"前面几课你已经写过字典、分级和路径拒绝。工具链把它们放进两个小文件。新工具要加检查项时，优先加在巡检命令里，而不是再发明一种结果格式。"},le({filename:"xunzhan/model.py",code:Ef,download:"xunzhan/model.py",output:"Check 是一项。HostReport 是一台机器。status 属性取各项里最严重的状态。"}),le({filename:"xunzhan/paths.py",code:zf,download:"xunzhan/paths.py",output:"require_work_root 拒绝磁盘根目录和过浅的路径。create=False 时不创建目录，给 dry-run 用。"}),{type:"p",text:"练习清单把磁盘使用率和心跳年龄写在 JSON 里，是为了在没有机房的时候也能学判断。`inspect_cmd.py` 里如果主机带了 `disk_used_percent`，就用这个数；如果没有，才去读 `disk_path` 指向的真实磁盘。替换探针时，只换读取事实的函数。"},{type:"p",text:"工作目录的检查放在部署和发布前面。巡检只读清单，不需要 `--root`。会创建文件的命令必须带 `--root`，而且不能是 `/` 或 `/tmp` 这种过浅的位置。"},{type:"callout",tone:"do",title:"库和命令的差别",text:"练习工具为了短，路径不合法时直接退出。若你以后把这些函数给别的程序导入，更合适的是抛出异常，由最外层的命令把异常变成退出码。"}],exercise:{prompt:"读 `paths.py`，用 `python3 -m xunzhan deploy --root /tmp --dry-run` 验证过浅路径会被拒绝。再把 root 换成 `/tmp/xunzhan-env`。",hint:"拒绝的信息在标准错误，退出码是 2。dry-run 不应把目录创建出来。",solution:"`/tmp` 退出 2，并且不会出现新的业务目录。`/tmp/xunzhan-env` 配上 `--dry-run` 会打印将要做的步骤，目录本身不会被创建。"},quiz:[{q:"一台机器有 warn 和 crit 两项时，HostReport.status 是？",choices:["warn","crit","ok"],answer:1,why:"worst_status 取序数更大的那个。crit 高于 warn。"},{q:"练习清单里的 disk_used_percent 代表？",choices:["工具扫描到的网段结果","你提供的事实，用来练习判断","必须和真实磁盘一致，否则程序崩溃"],answer:1,why:"删掉这个字段并提供 disk_path 时，才会去读真实磁盘。"},{q:"deploy 的 dry-run 为什么调用 require_work_root(create=False)？",choices:["为了在演习时也把目录建好","演习要检查路径，但先不创建","因为 /tmp 永远合法"],answer:1,why:"路径太浅仍然要拒绝。通过检查之后，不该留下一个空目录。"}]},{id:"tool-inspect",title:"批量机器巡检",read:18,practice:25,summary:"读一份主机清单，用有上限的线程池检查每台，按原顺序给出报告和退出码。",goals:["准备一份自己的 hosts.json","解释磁盘和心跳两条规则","用 --workers 和 --strict 改变行为"],blocks:[{type:"p",text:"这是四件工具里的第一件。它回答：按我给的清单，现在有没有严重问题。它不发现清单以外的机器，也不登录任何地方。你把事实放进 JSON，或者让它读取本机磁盘路径。"},le({lang:"json",filename:"xunzhan/fixtures/hosts.json",code:Ff,download:"xunzhan/fixtures/hosts.json"}),le({filename:"xunzhan/inspect_cmd.py",code:Tf,download:"xunzhan/inspect_cmd.py",run:"python3 -m xunzhan inspect --workers 4",output:Ka}),{type:"p",text:"心跳没有「七成」这个字段，警告线由上限乘 0.7 算出来。45 秒对 60 秒的上限是警告；480 秒对 120 秒的上限是严重。磁盘默认 80 警告、90 严重，可以用参数改。"},{type:"p",text:"并发用线程池，做完后按清单顺序组装。某台在检查过程中抛异常，会被记成一项 crit，其余机器继续。主机名重复直接退出 2，因为顺序字典没法表示两台同名机器。"},{type:"p",text:"要接到你有权维护的真实机器时，保持 `inspect_host` 的返回结构不变，只替换 `check_disk` 或 `check_heartbeat` 里面「事实从哪来」。例如心跳改成读你自己的采集文件。不要把工具改成扫描网段。"}],exercise:{prompt:"复制练习清单，删掉 cron-1，把 worker-1 的心跳改成 10。运行默认模式和 `--strict`。",hint:"磁盘 84 仍是警告。默认模式看有没有 crit。",solution:"默认退出码变成 0，因为只剩警告。加上 `--strict` 后退出码变成 1。文本里仍能看见 WARN。"},quiz:[{q:"清单之外的机器会被巡检吗？",choices:["会，工具会扫描本机网段","不会，只检查清单里的名字","只会在 --strict 时扫描"],answer:1,why:"资产范围由你写的清单决定。"},{q:"as_completed 的完成顺序和报告顺序？",choices:["报告按完成顺序","报告按清单顺序重新排过","报告按磁盘从高到低"],answer:1,why:"完成顺序不稳定。稳定的是输入里的名字顺序。"},{q:"两台机器都叫 api-1 时？",choices:["合并成一份报告","退出码 2，提示主机名不能重复","只保留第一台"],answer:1,why:"名字是报告的键。重复说明清单本身需要先改。"}]},{id:"tool-deploy",title:"环境部署自动化",read:18,practice:25,summary:"把准备环境写成步骤。失败时只收回自己创建的文件和空目录。",goals:["在专用目录里做一次 dry-run 和一次真实部署","用端口 0 看到健康检查失败后的回滚","确认已有文件不会被删"],blocks:[{type:"p",text:"部署脚本要回答两个问题：步骤是否按顺序发生，失败时动过的东西能否收回。示例在一个空目录里检查 Python、检查端口、创建 app/log/tmp、写入 config.json，再读配置做健康检查。"},le({filename:"xunzhan/deploy_cmd.py",code:Rf,download:"xunzhan/deploy_cmd.py",run:"python3 -m xunzhan deploy --root /tmp/xunzhan-env --dry-run",output:`DRY-RUN 准备目录
DRY-RUN 渲染配置
DRY-RUN 健康检查

检查 Python 和检查参数仍会真的执行，因为它们不写文件。目录不会被创建。`}),{type:"p",text:"端口 0 能通过参数检查，但健康检查拒绝它。这是演习失败的方法：你能看见回滚，又不用加一个「故意弄坏」的隐藏开关。端口 70000 会在参数检查就失败，此时还没有创建业务目录。"},{type:"code",lang:"text",filename:"端口 0 的回滚",download:null,code:`OK   检查 Python
OK   检查参数
OK   准备目录
OK   渲染配置
FAIL 健康检查：端口 0 不能提供服务
回滚 渲染配置
回滚 准备目录`},{type:"p",text:"回滚只删除这次写出来的 config.json，以及这次新建的空目录。事先放在 app 里的文件会留下，因为那个目录不是这次创建的。已有的 config.json 也不会被覆盖，所以第二次部署不会冲掉你改过的端口。"},{type:"callout",tone:"pit",title:"不用递归删除来回滚",text:"rmtree 很快，也很容易删出练习目录。这里用 unlink 和 rmdir。目录非空就删不掉，这是故意的保护。"}],exercise:{prompt:"选一个新的 `/tmp/你的名字-env`。先 dry-run，再以 `--port 8080` 真正部署。打开 config.json。把端口改成 9 后再部署一次，确认没有被改回 8080。",hint:"第二次应成功，且文件里的端口仍是 9。",solution:"第一次生成的配置端口是 8080。手改之后再次部署会跳过写入，端口保持 9。这说明脚本能重复执行，并且尊重已有配置。"},quiz:[{q:"dry-run 对「准备目录」会？",choices:["创建目录再删掉","只打印，不创建","因为是演习所以跳过路径检查"],answer:1,why:"会写磁盘的步骤在演习时只打印。路径太浅仍然会在更早的检查里被拒绝。"},{q:"健康检查失败后，事先放进 app 的 keep.txt 会？",choices:["被回滚删掉","留下来，因为那个目录不是这次创建的","被写成配置"],answer:1,why:"回滚清单只记录这次新建的路径。"},{q:"为什么用 `--port 0` 演习，而不是做一个总会成功的脚本？",choices:["0 是唯一合法端口","你需要看见失败和回滚，而不只是看见全绿","端口 0 会扫描网卡"],answer:1,why:"全绿的脚本证明不了回滚路径真的接上了。"}]},{id:"tool-publish",title:"小型服务发布",read:18,practice:25,summary:"把制品放进版本目录，切换 CURRENT 指针，健康检查失败时只把指针拨回去。",goals:["完成一次 staging 发布","看到生产环境没有确认时会被拒绝","用 --fail-health 观察回滚后现场还在"],blocks:[{type:"p",text:"小型发布不必先上一套编排系统。一个清晰的模型是：每个版本一个目录，一个 CURRENT 文件指向正在服务的版本。切换的是指针。失败时把指针写回上一版，有问题的目录留着，方便看里面到底是什么。"},le({filename:"xunzhan/publish_cmd.py",code:Of,download:"xunzhan/publish_cmd.py",run:"python3 -m xunzhan publish --root /tmp/xunzhan-rel --version 1.2.0 --artifact xunzhan/fixtures/artifact.txt --env staging"}),{type:"widget",name:"release"},{type:"p",text:"模拟器和命令的规则一致。版本号先限定为 `1.2.0` 这种三位数字。已有的版本目录拒绝覆盖，避免一次重跑把正在排查的现场冲掉。`--env prod` 必须同时给 `--yes`，否则退出 2，并且什么都不创建。"},{type:"p",text:"`--fail-health` 是练习开关，用来看指针回滚。给同事日常用的版本可以把这个开关去掉，改成请求真实的 `/health`。回滚时只改 CURRENT。版本目录保留，是为了还能打开制品排查，而不是为了继续对外服务。"},{type:"callout",tone:"keep",title:"先发布到 staging",text:"同一个命令，用环境名把练习和生产分开。生产多一道明确确认。确认不是安全本身，它只是让「我真的要对生产做这件事」留在命令行历史里。"}],exercise:{prompt:"在一个新的 root 里发布 1.2.0。再发布 1.3.0 并加上 `--fail-health`。看 CURRENT 和 releases 目录。然后不带 `--yes` 对 prod 发布 1.4.0。",hint:"制品可以用 xunzhan/fixtures/artifact.txt。",solution:"1.2.0 之后 CURRENT 是 1.2.0。失败的 1.3.0 会把指针拨回 1.2.0，同时留下 releases/1.3.0。prod 没有 --yes 时退出 2，1.4.0 不会出现。"},quiz:[{q:"健康检查失败后，版本目录为什么还留着？",choices:["留着继续对外服务","指针已经回到旧版，目录留下来给人排查","因为删除需要退出码 0"],answer:1,why:"对外指向由 CURRENT 决定。现场是证据。"},{q:"再次发布同一个版本号会？",choices:["覆盖制品","退出 2，拒绝覆盖","自动变成下一个版本"],answer:1,why:"覆盖会毁掉你可能正在看的那个目录。"},{q:"生产发布比 staging 多什么？",choices:["必须加上 --yes，否则命令拒绝执行","会扫描更多机器","可以不带版本号"],answer:0,why:"多的是一道明确确认，不是另一套发布逻辑。"}]},{id:"tool-collect",title:"监控数据采集",read:16,practice:20,summary:"一次采集写成一行 JSON，追加到文件。默认只采有限次。",goals:["写出一行里有时间、主机、指标名和值","用 --count 控制次数","说明哪些数适合当指标"],blocks:[{type:"p",text:"采集脚本的工作不是画图，而是稳定地留下数字。每一行一个 JSON 对象，这种格式叫 JSON Lines：追加方便，坏掉的一行也不会毁掉整个文件。"},le({filename:"xunzhan/collect_cmd.py",code:Lf,download:"xunzhan/collect_cmd.py",run:"python3 -m xunzhan collect --out /tmp/xunzhan-metrics.jsonl --count 2 --interval 0.2",output:"文件里每次采集至少有一行 disk.used_percent。系统提供 loadavg 时还会有 load.1m。数值随机器变化，字段不变。"}),{type:"p",text:"一行里有 `ts`、`host`、`name`、`value`。磁盘还有 `labels.path`，因为同一个指标可以来自不同路径。时间带时区偏移，后面的人不用猜这是哪一区的钟。"},{type:"p",text:"命令默认采 1 次，必须给出次数。它不会自己变成一个永远运行的进程。你要持续采集时，把 `--count` 和 `--interval` 交给一个你看得到的定时方式，而不是在忘记它之后让它无限写磁盘。"},{type:"p",text:"指标名用低基数的词：`disk.used_percent`、`load.1m`。用户 ID、订单号放进日志，不放进指标名或标签。否则每个用户一条曲线，存储和查询都会被撑满。这是可观测性里很具体的一条纪律，下一课会放到三种信号里一起看。"},{type:"callout",tone:"do",title:"追加，而不是每次清空",text:"采集的价值在于前后能比较。用追加写。要换文件时，换一个新的 --out，而不是让脚本默认覆盖历史。"}],exercise:{prompt:"采 3 次，间隔 0。数一数 disk.used_percent 有几行。再采 1 次到同一个文件，确认行数增加而不是被替换。",hint:"可以用 python 读文件数有多少行包含这个名字。",solution:"第一次之后有 3 行磁盘指标。再跑一次变成 4 行。若第二次把文件缩短了，就违反了追加约定。"},quiz:[{q:"JSON Lines 相比一个大数组，更适合采集是因为？",choices:["可以一行行追加，坏一行不影响别的行","它不能表示数字","它会自动画图"],answer:0,why:"采集是持续的写入。追加和容错比一次写成漂亮数组更重要。"},{q:"用户 ID 更适合出现在？",choices:["指标标签","某次事件的日志里","指标的名字里"],answer:1,why:"指标标签要保持低基数。用户 ID 的取值几乎没有上限。"},{q:"示例为什么要求 --count，而不是默认永远跑？",choices:["Python 不能循环","练习命令应该在你预期的次数后结束","磁盘指标只能读一次"],answer:1,why:"永远运行的循环要配上你看得见的停止方式和磁盘预算。默认有限次更安全。"}]},{id:"slo",title:"错误预算",read:16,practice:15,summary:"SLI 是你量的数，SLO 是你对这个数的目标。错误预算是目标允许的失败额度。",goals:["用自己的话区分 SLI 和 SLO","算出一段窗口里还允许失败多少次","把预算和能不能发布连起来"],blocks:[{type:"p",text:"SRE 把可靠性当成服务的一项行为，而不是上线之后才想起来的口号。先选定一个用户能感知的指标，再给它一个时间窗口里的目标。没有目标的告警，只是一个数字在闪。"},{type:"p",text:"SLI，服务等级指标，是量出来的比例或延迟。例如「HTTP 请求里返回成功的比例」。SLO，服务等级目标，是你给这个指标定的线，例如「连续 30 天里 99.9% 的请求成功」。错误预算就是 100% 减去 SLO，再乘上这段时间的请求量：还允许失败多少次。"},le({filename:"error_budget.py",code:Nf,run:"python3 error_budget.py",output:`允许失败 1000
已经失败 200
剩余 800
烧掉了 20.0%`}),{type:"widget",name:"budget"},{type:"p",text:"1,000,000 次请求、SLO 99.9%，允许失败 1,000 次。已经失败 200 次，还剩 800，烧掉了 20%。预算还在时，可以继续带有风险的发布，同时把新的失败算进同一扇窗口。预算用完，就先稳住成功率。"},{type:"p",text:"这个计算是教学用的四则运算。真实预算还要定清窗口从哪天到哪天、失败怎么计数、延迟的 SLI 用哪一个分位。先把「允许多少、已经用了多少」算对，再去接监控系统。"},{type:"callout",tone:"keep",title:"预算是发布讨论的输入",text:"它不代替巡检。巡检告诉你现在有没有严重项；预算告诉你这段时间还扛得住多少失败。两件一起看，才决定这次要不要发。"}],exercise:{prompt:"在页面上把已失败改成 2400，看剩余。再用 Python 算总请求 50_000、SLO 0.99、失败 100 时的剩余。",hint:"允许失败 = 50000 × 0.01。",solution:"2400 次失败时剩余是 -1400，预算已经超支。第二题允许失败 500，剩余 400。"},quiz:[{q:"「30 天内 99.9% 的请求成功」是？",choices:["SLI","SLO","一台机器的磁盘阈值"],answer:1,why:"它是对某个指标下达的目标，并且带了窗口。SLI 是被这个目标衡量的那个比例本身。"},{q:"100 万请求、SLO 99.9%，允许失败多少次？",choices:["999","1000","99.9"],answer:1,why:"允许的失败比例是 0.1%，100 万的 0.1% 是 1000。"},{q:"预算已经是负数时，更合理的下一步是？",choices:["继续加大发布频率，让预算自己恢复","优先处理正在造成失败的问题，再恢复有风险的变更","把 SLO 从报告里删掉"],answer:1,why:"预算用完说明这段窗口的可靠性目标已经达不到。先止住失败来源。"}]},{id:"three-signals",title:"三种信号",read:14,practice:15,summary:"日志记具体的事，指标记可聚合的数，链路记一次请求穿过了哪里。",goals:["为同一次失败各举一种信号","说出四个黄金信号","让巡检工具自己也留下耗时和运行 ID"],blocks:[{type:"p",text:"可观测性是：系统出了你没预设的问题时，你仍能从外面把它问清楚。事先把问题全写成固定检查是做不到的，所以要留下三种可以事后追问的信号。"},{type:"table",caption:"三种信号",columns:["信号","记下什么","适合的问题"],rows:[["日志","一件具体的事，带时间、级别和这次运行的 ID","这次发布为什么在健康检查失败"],["指标","可加总、可画曲线的数字，标签保持低基数","错误率这一小时是不是在升"],["链路","一次请求经过的步骤和每步耗时","慢是慢在自己的代码还是慢在下游"]]},{type:"p",text:"四个黄金信号把指标收成一组：延迟、流量、错误、饱和度。延迟看响应有多慢，流量看进来多少工作，错误看失败比例，饱和度看磁盘、队列、连接这些容量还剩多少。磁盘使用率就是饱和度的一种。"},{type:"p",text:"你的巡检工具自己也是一个小服务。一次运行生成一个 `run_id`，开始和结束的日志都带上它，并记下耗时和严重项个数。这些是工具的日志和指标。没有它们，工具失败时你只知道「脚本退出了 1」，不知道是等了 40 秒还是瞬间失败。"},{type:"code",lang:"python",filename:"一次运行的日志形状",download:null,code:`log.info("run_id=%s 开始 主机 %s", run_id, len(hosts))
# ... 检查 ...
log.info("run_id=%s 结束 耗时 %.2f 秒 严重 %s", run_id, elapsed, critical)`},{type:"p",text:"链路在这套小工具里可以先不搭追踪系统。你只要在发布步骤的日志里按同一顺序写「检查、复制、切换、健康检查、回滚」，并带同一个 run_id，就已经能回答「停在哪一步」。主机数量和调用层次变多之后，再把这个 ID 传给正式的追踪系统。"}],exercise:{prompt:"拿一次 `xunzhan inspect` 的标准错误，写出你还缺的三个字段：运行 ID、耗时、严重项个数。不必改代码，先写成你希望看到的两行日志。",hint:"现有日志已经有开始、结束和退出码。",solution:"例如「run_id=8f2 开始 主机 3」和「run_id=8f2 结束 耗时 0.03 秒 严重 2」。两行用同一个 ID，才能在很多并行运行里对上。"},quiz:[{q:"「过去一小时成功率」更适合来自？",choices:["把所有日志打开人工数","一个按状态计数的指标","一台机器的主机名"],answer:1,why:"比例需要聚合。指标就是为聚合准备的。日志用来追问具体哪一次。"},{q:"磁盘使用率属于四个黄金信号里的？",choices:["流量","饱和度","链路"],answer:1,why:"它描述容量还剩多少。链路不是这四个信号之一。"},{q:"run_id 的作用是？",choices:["代替退出码","把同一次运行的日志串起来","提高并发上限"],answer:1,why:"没有共同 ID 时，两个人同时巡检的日志会混在一起。"}]},{id:"alerts",title:"告警要能行动",read:16,practice:20,summary:"只对需要人动手的情况开口。一条告警带上现象、影响、第一步和何时升级。",goals:["用 judge 对练习指标做出一条告警","说明为什么负载升高不一定要叫人","写出四行就能用的处置说明"],blocks:[{type:"p",text:"采集到的数字会一直波动。告警如果跟着每一个波动响，人会把通知关掉。告警要对应一个动作：收到的人知道现象是什么、用户会有什么影响、第一件要做的事，以及什么情况下该把别人叫上。"},le({lang:"jsonl",filename:"xunzhan/fixtures/metrics.jsonl",code:Df,download:"xunzhan/fixtures/metrics.jsonl"}),le({filename:"xunzhan/judge_cmd.py",code:If,download:"xunzhan/judge_cmd.py",run:"python3 -m xunzhan judge --metrics xunzhan/fixtures/metrics.jsonl --disk-crit 90",output:`ALERT worker-1 disk.used_percent=91
现象：磁盘使用率越过阈值
影响：日志写不进去，发布复制制品也会失败
第一步：先找出大文件，确认是不是日志没轮转
升级：超过临界值还在涨，或者清理后很快又满，就叫人一起看

退出码 1。阈值调到 99 时打印「没有需要行动的告警」，退出码 0。`}),{type:"p",text:"练习文件里 worker-1 先出现 93.5，后来又有一行 91.0。判断用最新的一行。负载指标也在文件里，但这条命令不告警它。不是每个数字都该叫醒人。磁盘满了会让发布和日志写入失败，所以它配得上一条动作说明。"},{type:"p",text:"真实环境里还要加「持续多久」。抖动一次就响，和持续 10 分钟再响，打扰程度完全不同。示例先把「说什么」写对。你加上持续时间时，仍要保留这四行：现象、影响、第一步、升级。"},{type:"callout",tone:"pit",title:"症状和猜测分开",text:"现象是「使用率 91%」。第一步里的「是不是日志没轮转」是要去验证的猜测，不是已经发生的事实。告警正文把这两句分开，接电话的人才不会把猜测当成结论。"}],exercise:{prompt:"分别用 `--disk-crit 90` 和 `--disk-crit 99` 运行 judge。然后改练习文件，把最新的 91 改成 70，再跑一次 90 的阈值。",hint:"判断看的是同一主机同一指标的最后一行。",solution:"90 时退出码 1，99 时退出码 0。把最新值改成 70 后，90 的阈值也不再告警。更早的 93.5 不会覆盖最新样本。"},quiz:[{q:"worker-1 有 93.5 和后来的 91.0 时，告警里的数字是？",choices:["93.5","91","两个都算严重所以相加"],answer:1,why:"同一指标保留最新样本。91 仍超过 90，所以还是要告警。"},{q:"告警正文里「第一步」应该是？",choices:["一个接电话的人能做的检查","把服务重启十次","把 SLO 改低"],answer:0,why:"示例里的第一步是找出大文件、看日志是否没轮转。做完这一步才知道要不要升级。"},{q:"为什么 load.1m 在这份命令里不产生告警？",choices:["负载不是数字","还没有为它写一条值得行动的规则","JSON Lines 不能保存它"],answer:1,why:"没有行动说明的数字先留在文件里，不叫人。"}]},{id:"one-path",title:"串成一条值班路径",read:12,practice:30,summary:"巡检、部署、发布、采集和判断是一条路径上的五个命令，而不是五份互不相关的脚本。",goals:["按顺序在本机把五条命令跑通","说出每一步的退出码会怎样挡住下一步","列出你以后可以替换的两个接口"],blocks:[{type:"p",text:"到这里，你有的不是零散语法，而是一条能值一夜班的小路。清单进来，巡检先说有没有严重项。环境用部署命令准备。发布只切换指针。采集把数字追加下来。判断只在需要行动时开口。"},{type:"ol",items:["inspect：严重项的退出码是 1。发布前你先看它。","deploy：在专用目录准备环境。失败会收回这次创建的文件。","publish：staging 通过之后，生产还要 --yes。健康检查失败只回滚指针。","collect：把磁盘和负载按行写入文件。","judge：读这些行，该叫人时退出 1，并给出四行处置说明。"]},{type:"code",lang:"bash",filename:"一条可以照着做的顺序",download:null,code:`python3 -m xunzhan inspect
python3 -m xunzhan deploy --root /tmp/xunzhan-env --port 8080
python3 -m xunzhan publish --root /tmp/xunzhan-rel --version 1.2.0 \\
  --artifact xunzhan/fixtures/artifact.txt --env staging
python3 -m xunzhan collect --out /tmp/xunzhan-metrics.jsonl --count 1
python3 -m xunzhan judge --metrics xunzhan/fixtures/metrics.jsonl --disk-crit 90`},{type:"p",text:"练习清单里本来就有严重项，所以第一条命令会以 1 结束。这是对的：有严重项时，你不该接着去按生产发布。你可以先改清单把严重项消掉，看到 inspect 变成 0，再走后面的命令。"},{type:"h",text:"以后替换哪两处"},{type:"p",text:"第一处是事实从哪来。把心跳和磁盘换成你有权读取的采集接口，返回值仍放进 Check。第二处是健康检查打到哪。发布命令里的演习开关换成对你自己的服务发一次带超时的 GET。令牌继续从环境变量读。"},{type:"p",text:"这两处都替换完，工具的外壳不用推翻：子命令、退出码、dry-run、指针回滚、JSON Lines 和四行告警仍然适用。SRE 要看的 SLI，可以从采集文件里的成功与失败计数长出来，再放进你已经算过的错误预算。"},{type:"callout",tone:"keep",title:"你现在能交付的东西",text:"一份会分级的巡检，一段失败能停下的部署，一次会回滚指针的发布，一个追加写指标的采集，和一条写得清第一步的告警。它们都只动你点名的目录和清单。"}],exercise:{prompt:"按上面五条命令在本机跑一遍。给每一条记下退出码。然后把 inspect 的清单改到没有 crit，再确认退出码变成 0。",hint:"publish 的 root 和 deploy 的 root 用两个不同目录，避免把环境文件和版本目录混在一起。",solution:"原始练习清单的 inspect 是 1，judge 是 1。deploy、publish、collect 在参数正确时是 0。清单里不再有 crit 之后，inspect 变为 0。若 prod 没加 --yes，publish 是 2。"},quiz:[{q:"inspect 退出码为 1 时，更合适的下一步是？",choices:["立刻对生产执行 publish --yes","先看严重项，处理或明确接受之后再发布","把退出码改成 0 再继续"],answer:1,why:"退出码 1 就是路径上的红灯。绕过它，后面的自动化只是跑得更快的事故。"},{q:"采集和判断为什么分成两个命令？",choices:["一个命令不能写文件","采集负责留下数字，判断负责决定要不要叫人","判断必须扫描网段"],answer:1,why:"数字可以持续记。是不是叫醒人，是另一条可以单独改的规则。"},{q:"把工具接到真实环境时，优先替换的是？",choices:["退出码的含义","读取事实和健康检查的地址","把 dry-run 删掉"],answer:1,why:"外壳上的约定已经能用。变的是数据来源和要探测的服务。"}]}],jr=[{id:"start",index:"00",title:"先把路看清",blurb:"确认基础和练法",lessonIds:["how-to-learn"]},{id:"bridge",index:"01",title:"把基础用在脚本里",blurb:"结果、日志、演习",lessonIds:["check-result","script-shape","dry-run"]},{id:"auto",index:"02",title:"自动化任务",blurb:"批量、分级、停与继续、幂等",lessonIds:["batch","inspect-levels","stop-or-continue","idempotent"]},{id:"api",index:"03",title:"调用 API",blurb:"超时、配置、重试、分页",lessonIds:["http","config-layers","retry","paging-client"]},{id:"concurrent",index:"04",title:"线程与协程",blurb:"估算、线程池、协程、上限",lessonIds:["when-concurrent","thread-pool","asyncio","bounded"]},{id:"toolchain",index:"05",title:"收成工具链",blurb:"命令、报告、共用骨架",lessonIds:["from-script-to-cli","logs-and-json","shared-skeleton"]},{id:"projects",index:"06",title:"四件小工具",blurb:"巡检、部署、发布、采集",lessonIds:["tool-inspect","tool-deploy","tool-publish","tool-collect"]},{id:"sre",index:"07",title:"SRE 与可观测性",blurb:"预算、信号、告警、串起来",lessonIds:["slo","three-signals","alerts","one-path"]}],qf=[{id:"inspect",name:"批量巡检",lesson:"tool-inspect",cmd:"python3 -m xunzhan inspect",text:"按你写的清单给出分级报告。有严重项时退出码是 1。"},{id:"deploy",name:"环境部署",lesson:"tool-deploy",cmd:"python3 -m xunzhan deploy --root …",text:"按步骤准备目录和配置。失败时只收回这次创建的文件。"},{id:"publish",name:"小型发布",lesson:"tool-publish",cmd:"python3 -m xunzhan publish --root …",text:"切换版本指针。健康检查失败时把指针拨回，现场留着。"},{id:"collect",name:"指标采集",lesson:"tool-collect",cmd:"python3 -m xunzhan collect --out …",text:"把磁盘和负载按 JSON Lines 追加写入，默认只采有限次。"}],dn={};for(const a of[...jf,...Mf]){if(dn[a.id])throw new Error(`重复的课程 ${a.id}`);dn[a.id]=a}const ql=jr.flatMap(a=>a.lessonIds),Za=new Set(ql);if(Za.size!==ql.length)throw new Error("阶段里有重复课程");for(const a of ql)if(!dn[a])throw new Error(`缺少课程 ${a}`);for(const a of Object.keys(dn)){if(!Za.has(a))throw new Error(`课程没有放进阶段 ${a}`);dn[a].quiz.forEach((c,E)=>{if(c.answer<0||c.answer>=c.choices.length)throw new Error(`${a} 的第 ${E+1} 题答案越界`)})}const ft=ql.map(a=>dn[a]);function Hl(a){return dn[a]||null}function Hf(a){const y=ft.findIndex(c=>c.id===a);return y<0?{prev:null,next:null,number:0,stage:null}:{prev:ft[y-1]||null,next:ft[y+1]||null,number:y+1,stage:jr.find(c=>c.lessonIds.includes(a))||null}}function Uf(a){return(ft.find(c=>!a[c.id])||ft[ft.length-1]).id}function Af(a){return jr.map(y=>{const c=y.lessonIds.filter(E=>a[E]).length;return{...y,total:y.lessonIds.length,finished:c}})}const $f=/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(#.*?$)|(\b(?:False|None|True|and|as|assert|async|await|break|class|continue|def|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b)|(\b\d+(?:\.\d+)?\b)/gm,Bf=/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(?:true|false|null)\b|-?\b\d+(?:\.\d+)?\b/g;function Qa(a,y){y&&a.push({type:"text",text:y})}function Vf(a,y){return y==="python"?Ja(a,$f,Wf):y==="json"||y==="jsonl"?Ja(a,Bf,Kf):[{type:"text",text:a}]}function Ja(a,y,c){const E=[];let k=0;for(const C of a.matchAll(y)){const v=C.index??0;Qa(E,a.slice(k,v)),E.push({type:c(C),text:C[0]}),k=v+C[0].length}return Qa(E,a.slice(k)),E}function Wf(a){return a[1]?"str":a[2]?"com":a[3]?"kw":"num"}function Kf(a){return a[1]?"kw":a[3]?"str":a[0]==="true"||a[0]==="false"||a[0]==="null"?"kw":"num"}const ba="xunzhan.v1";function Sr(){return{done:{},quiz:{}}}function Qf(){try{const a=localStorage.getItem(ba);if(!a)return Sr();const y=JSON.parse(a);return!y||typeof y!="object"?Sr():{done:y.done&&typeof y.done=="object"?y.done:{},quiz:y.quiz&&typeof y.quiz=="object"?y.quiz:{}}}catch{return Sr()}}function Jf(a){if(!a)return"";const y=new Date(a);return Number.isNaN(y.getTime())?"":`${new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).format(y)} 北京时间`}function Yf(){const[a,y]=J.useState(Sr);J.useEffect(()=>{y(Qf())},[]);const c=J.useCallback(v=>{y(T=>{const N=v(T);return localStorage.setItem(ba,JSON.stringify(N)),N})},[]),E=J.useCallback(v=>{c(T=>{const N={...T.done};return N[v]?delete N[v]:N[v]=new Date().toISOString(),{...T,done:N}})},[c]),k=J.useCallback((v,T,N)=>{c(M=>({...M,quiz:{...M.quiz,[v]:{correct:T,total:N,at:new Date().toISOString()}}}))},[c]),C=J.useCallback(()=>{c(()=>Sr())},[c]);return{progress:a,markDone:E,saveQuiz:k,reset:C}}const Xf=[{term:"退出码",text:"进程结束时交给调用方的整数。这门课里 0 是没有严重问题，1 是有严重问题或需要行动，2 是参数和路径还不合法。"},{term:"标准输出 / 标准错误",text:"结果走标准输出，方便重定向和被别的程序解析。过程日志走标准错误，避免混进 JSON。"},{term:"dry-run",text:"演习运行。会改文件的步骤只打印打算做什么。路径是否太浅，仍然要检查。"},{term:"幂等",text:"再执行一次，结果仍然正确，并且不会毁掉已经存在的东西。已有配置跳过，而不是覆盖。"},{term:"ok / warn / crit",text:"正常、警告、严重。默认只有严重让退出码变成 1。警告写在报告里，严格模式才把它当成失败。"},{term:"超时",text:"一次外部调用最多等待的时间，单位是秒。没有超时，一台失联的机器会把整个脚本挂住。"},{term:"退避",text:"重试之前的等待。指数退避让第一次等 0.2 秒、第二次等 0.4 秒。遇到 429 时优先遵守 Retry-After。"},{term:"cursor",text:"「下一页从哪继续」的记号。取分页数据时带着它请求，并设置页数上限，防止记号不前进时死循环。"},{term:"线程池",text:"固定数量的工人一起等待 IO。max_workers 决定同时几路。结果先收回来，再按清单顺序输出。"},{term:"协程",text:"可以在 await 处让出控制权的函数。事件循环同时推进很多个这样的函数。同步的 requests 要用 to_thread 包起来。"},{term:"信号量",text:"限制同时进入某一段代码的任务数。没有空位的任务在门口等，用来给并发加上限。"},{term:"SLI",text:"服务等级指标。你真正量到的数，例如请求成功率或延迟。"},{term:"SLO",text:"服务等级目标。给某个 SLI 在一段窗口里定的线，例如 30 天内 99.9% 的请求成功。"},{term:"错误预算",text:"目标允许的失败额度。预算还在，可以继续有风险的变更；预算用完，先稳住成功率。"},{term:"黄金信号",text:"延迟、流量、错误、饱和度。磁盘使用率属于饱和度。"},{term:"JSON Lines",text:"每行一个 JSON 对象。适合采集脚本追加写入，一行损坏不会毁掉整个文件。"},{term:"低基数标签",text:"指标标签只用取值很少的维度，例如环境和接口名。用户 ID 这种取值极多的信息放进日志。"},{term:"处置说明",text:"告警附上的四行：现象、影响、第一步、何时升级。第一步是要去做的检查，不是已经认定的原因。"}],Gf=[{title:"读一份 JSON 清单",code:`import json
from pathlib import Path

hosts = json.loads(Path("hosts.json").read_text(encoding="utf-8"))
for host in hosts:
    print(host["name"])`},{title:"安全地拼路径",code:`from pathlib import Path

root = Path("/tmp/xunzhan-env")
target = root / "config.json"
target.write_text('{"port": 8080}\\n', encoding="utf-8")`},{title:"读环境变量",code:`import os

token = os.environ.get("OPS_TOKEN")
if not token:
    raise SystemExit("请先设置 OPS_TOKEN")`},{title:"带着超时取 JSON",code:`import json
import urllib.request

request = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
with urllib.request.urlopen(request, timeout=3) as response:
    data = json.loads(response.read().decode("utf-8"))`},{title:"留下不是 ok 的项",code:`bad = [item for item in results if item["status"] != "ok"]
print(f"需要处理 {len(bad)} 项")`},{title:"用退出码结束",code:`def main() -> int:
    return 1 if failed else 0

if __name__ == "__main__":
    raise SystemExit(main())`}];function Ao(a,y){const c=10**y;return Math.round(a*c)/c}function Ho(a){return a>=1e4?`${Math.round(a/1e3)} 秒`:a>=1e3?`${(a/1e3).toFixed(1)} 秒`:`${Math.round(a)} 毫秒`}function Zf({name:a}){return a==="concurrency"?s.jsx(bf,{}):a==="retry"?s.jsx(ep,{}):a==="budget"?s.jsx(tp,{}):a==="release"?s.jsx(np,{}):a==="inspect"?s.jsx(op,{}):null}function bf(){const[a,y]=J.useState(12),[c,E]=J.useState(300),[k,C]=J.useState(4),v=a*c,T=Math.ceil(a/Math.max(k,1))*c,N=v-T;return s.jsxs("section",{className:"lab",children:[s.jsxs("div",{className:"lab-head",children:[s.jsx("p",{className:"kicker",children:"估算"}),s.jsx("h3",{children:"串行要等多久"})]}),s.jsxs("div",{className:"lab-grid",children:[s.jsxs("label",{children:["机器数 ",a,s.jsx("input",{type:"range",min:"1",max:"40",value:a,onChange:M=>y(Number(M.target.value))})]}),s.jsxs("label",{children:["每台等待 ",c," 毫秒",s.jsx("input",{type:"range",min:"100",max:"2000",step:"100",value:c,onChange:M=>E(Number(M.target.value))})]}),s.jsxs("label",{children:["同时进行 ",k,s.jsx("input",{type:"range",min:"1",max:"20",value:k,onChange:M=>C(Number(M.target.value))})]})]}),s.jsxs("div",{className:"bars","aria-label":"耗时对比",children:[s.jsxs("div",{children:[s.jsx("span",{children:"一台接一台"}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill serial",style:{width:"100%"}})}),s.jsx("strong",{children:Ho(v)})]}),s.jsxs("div",{children:[s.jsxs("span",{children:[k," 路一起等"]}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill parallel",style:{width:`${Math.max(4,T/v*100)}%`}})}),s.jsx("strong",{children:Ho(T)})]})]}),s.jsxs("p",{className:"lab-note",children:["少等约 ",Ho(N),"。这是按每台等待一样久、并发槽一直占满来估算的。接口如果限流，真实耗时会被拉长。"]})]})}const Dl=[{id:"timeout",title:"连接超时",retry:!0,why:"没有拿到明确拒绝。限次数再试，有机会是网络抖动。"},{id:"refused",title:"连接被拒绝",retry:!0,why:"对端可能正在重启。次数要有上限。"},{id:"500",title:"HTTP 500",retry:!0,why:"服务端自己失败了，过一小会儿可能恢复。"},{id:"429",title:"HTTP 429",retry:!0,why:"对方要求慢下来。等待时优先遵守 Retry-After。"},{id:"404",title:"HTTP 404",retry:!1,why:"资源不存在。同一个地址再请求，结果还是不存在。"},{id:"401",title:"HTTP 401",retry:!1,why:"令牌不被接受。先更换令牌，再发下一次。"},{id:"400",title:"HTTP 400",retry:!1,why:"请求本身不合法。先改请求内容。"}];function ep(){const[a,y]=J.useState({}),[c,E]=J.useState(!1),k=Dl.every(v=>a[v.id]),C=Dl.filter(v=>a[v.id]===(v.retry?"yes":"no")).length;return s.jsxs("section",{className:"lab",children:[s.jsxs("div",{className:"lab-head",children:[s.jsx("p",{className:"kicker",children:"判断"}),s.jsx("h3",{children:"这一次要不要再试"})]}),s.jsx("ul",{className:"retry-list",children:Dl.map(v=>{const T=a[v.id],N=v.retry?"yes":"no",M=c&&T?T===N?"right":"wrong":"";return s.jsxs("li",{className:M,children:[s.jsx("p",{children:v.title}),s.jsxs("div",{className:"segmented",children:[s.jsx("button",{type:"button","aria-pressed":T==="yes",onClick:()=>y({...a,[v.id]:"yes"}),children:"再试"}),s.jsx("button",{type:"button","aria-pressed":T==="no",onClick:()=>y({...a,[v.id]:"no"}),children:"停"})]}),c?s.jsx("p",{className:"why",children:v.why}):null]},v.id)})}),s.jsxs("div",{className:"lab-actions",children:[s.jsx("button",{type:"button",disabled:!k,onClick:()=>E(!0),children:"对答案"}),c?s.jsxs("span",{children:["答对 ",C," / ",Dl.length]}):null]})]})}function tp(){const[a,y]=J.useState(1e6),[c,E]=J.useState(200),[k,C]=J.useState(99.9),v=J.useMemo(()=>{if(!Number.isFinite(a)||!Number.isFinite(c)||!Number.isFinite(k)||a<0||c<0||c>a||k<=0||k>100)return null;const N=Ao(a*(1-k/100),4),M=Ao(N-c,4),P=N===0?c===0?0:1/0:c/N;return{allowed:N,remaining:M,burn:P}},[a,c,k]),T=v&&v.allowed>0?Math.min(100,c/v.allowed*100):c>0?100:0;return s.jsxs("section",{className:"lab",children:[s.jsxs("div",{className:"lab-head",children:[s.jsx("p",{className:"kicker",children:"计算"}),s.jsx("h3",{children:"这段时间还剩多少失败额度"})]}),s.jsxs("div",{className:"preset-row",children:[s.jsx("button",{type:"button",onClick:()=>{y(1e6),E(200),C(99.9)},children:"还宽裕"}),s.jsx("button",{type:"button",onClick:()=>{y(1e6),E(2400),C(99.9)},children:"已经超支"})]}),s.jsxs("div",{className:"lab-grid",children:[s.jsxs("label",{children:["总请求",s.jsx("input",{type:"number",min:"0",value:a,onChange:N=>y(Number(N.target.value))})]}),s.jsxs("label",{children:["已失败",s.jsx("input",{type:"number",min:"0",value:c,onChange:N=>E(Number(N.target.value))})]}),s.jsxs("label",{children:["SLO（%）",s.jsx("input",{type:"number",min:"0.1",max:"100",step:"0.1",value:k,onChange:N=>C(Number(N.target.value))})]})]}),v?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"bar-track budget",children:s.jsx("div",{className:v.remaining<0?"bar-fill over":"bar-fill parallel",style:{width:`${T}%`}})}),s.jsxs("dl",{className:"stats",children:[s.jsxs("div",{children:[s.jsx("dt",{children:"允许失败"}),s.jsx("dd",{children:Ya(v.allowed)})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"剩余"}),s.jsx("dd",{children:Ya(v.remaining)})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"已烧掉"}),s.jsx("dd",{children:Number.isFinite(v.burn)?`${(v.burn*100).toFixed(1)}%`:"没有额度"})]})]}),s.jsx("p",{className:"lab-note",children:v.remaining<0?"额度已经用完。接下来优先稳住成功率，再考虑有风险的发布。":"额度还在。发布可以继续，同时把失败数记进同一扇窗口。"})]}):s.jsx("p",{className:"lab-note",children:"失败次数需要落在 0 和总请求之间，SLO 取 0 到 100 之间。"})]})}function Ya(a){if(Number.isInteger(a))return String(a);const y=Ao(a,1);return Number.isInteger(y)?String(y):y.toFixed(1)}function np(){const a=()=>({releases:["1.2.0","1.3.0"],current:"1.3.0",log:["练习环境已有 1.2.0 和 1.3.0，CURRENT 指向 1.3.0。"],code:null}),[y,c]=J.useState(a),[E,k]=J.useState("1.4.0"),[C,v]=J.useState("staging"),[T,N]=J.useState(!1),[M,P]=J.useState(!1);function V(B){B.preventDefault();const G=E.trim();c(K=>{if(C==="prod"&&!T)return{...K,code:2,log:["生产环境需要明确确认。指针保持不动。"]};if(!/^\d+\.\d+\.\d+$/.test(G))return{...K,code:2,log:["版本号需要形如 1.4.0。指针保持不动。"]};if(K.releases.includes(G))return{...K,code:2,log:[`版本 ${G} 已经存在，拒绝覆盖。`]};const te=[...K.releases,G],Te=[`复制制品到 releases/${G}`,`记住上一版本 ${K.current||"无"}`,`CURRENT 改为 ${G}`];return M?(Te.push("健康检查失败"),Te.push(`回滚指针到 ${K.current||"无"}，目录 ${G} 留着排查`),{releases:te,current:K.current,log:Te,code:1}):(Te.push(`已发布 ${G}`),{releases:te,current:G,log:Te,code:0})})}const $=["releases/",...y.releases.map(B=>`  ${B}/${B===y.current?"    ← 指针":""}`),`CURRENT  ${y.current||"无"}`].join(`
`);return s.jsxs("section",{className:"lab",children:[s.jsxs("div",{className:"lab-head",children:[s.jsx("p",{className:"kicker",children:"演习"}),s.jsx("h3",{children:"切换版本指针"})]}),s.jsxs("form",{onSubmit:V,className:"release-form",children:[s.jsxs("label",{children:["版本",s.jsx("input",{value:E,onChange:B=>k(B.target.value)})]}),s.jsxs("label",{children:["环境",s.jsxs("select",{value:C,onChange:B=>v(B.target.value),children:[s.jsx("option",{value:"staging",children:"staging"}),s.jsx("option",{value:"prod",children:"prod"})]})]}),s.jsxs("label",{className:"check",children:[s.jsx("input",{type:"checkbox",checked:T,onChange:B=>N(B.target.checked)}),"已确认生产变更"]}),s.jsxs("label",{className:"check",children:[s.jsx("input",{type:"checkbox",checked:M,onChange:B=>P(B.target.checked)}),"健康检查失败"]}),s.jsxs("div",{className:"lab-actions",children:[s.jsx("button",{type:"submit",children:"发布"}),s.jsx("button",{type:"button",className:"secondary",onClick:()=>c(a()),children:"重置环境"})]})]}),s.jsxs("div",{className:"split-preview",children:[s.jsx("pre",{children:$}),s.jsxs("div",{children:[y.code===null?null:s.jsxs("p",{className:`exitcode code-${y.code}`,children:["退出码 ",y.code]}),s.jsx("ol",{className:"run-log",children:y.log.map((B,G)=>s.jsx("li",{children:B},`${G}-${B}`))})]})]})]})}const Xa=[{name:"api-1",disk:71,heartbeat:12,limit:60},{name:"worker-1",disk:84,heartbeat:480,limit:120},{name:"cron-1",disk:93,heartbeat:45,limit:60}];function rp(a,y,c){return a>=c?"crit":a>=y?"warn":"ok"}function lp(a,y){return y<=0||a>=y?"crit":a>=y*.7?"warn":"ok"}function ip(a,y){const c={ok:0,warn:1,crit:2};return c[a]>=c[y]?a:y}function Ml(a,y){return y==="ok"?"":a==="disk"&&y==="crit"?"先清理或扩容，再继续发布":a==="disk"?"安排清理，发布前再看一眼":y==="crit"?"先确认进程是否还在":"心跳偏旧，看一眼采集是否延迟"}function op(){const[a,y]=J.useState(Xa),[c,E]=J.useState(80),[k,C]=J.useState(90),[v,T]=J.useState(null);function N(P,V,$){y(B=>B.map((G,K)=>K===P?{...G,[V]:$}:G))}function M(P){if(P.preventDefault(),!(k>c)){T({error:"严重阈值需要高于警告阈值。"});return}const V=a.map(B=>{const G=rp(B.disk,c,k),K=lp(B.heartbeat,B.limit);return{...B,diskState:G,heartbeatState:K,status:ip(G,K)}}),$=V.some(B=>B.status==="crit")?1:0;T({rows:V,exitCode:$})}return s.jsxs("section",{className:"lab",children:[s.jsxs("div",{className:"lab-head",children:[s.jsx("p",{className:"kicker",children:"演习"}),s.jsx("h3",{children:"三台机器，两道阈值"})]}),s.jsxs("form",{onSubmit:M,children:[s.jsxs("div",{className:"lab-grid",children:[s.jsxs("label",{children:["磁盘警告 %",s.jsx("input",{type:"number",value:c,onChange:P=>E(Number(P.target.value))})]}),s.jsxs("label",{children:["磁盘严重 %",s.jsx("input",{type:"number",value:k,onChange:P=>C(Number(P.target.value))})]})]}),s.jsx("div",{className:"host-table",children:a.map((P,V)=>s.jsxs("div",{className:"host-edit",children:[s.jsx("strong",{children:P.name}),s.jsxs("label",{children:["磁盘 %",s.jsx("input",{type:"number",value:P.disk,onChange:$=>N(V,"disk",Number($.target.value))})]}),s.jsxs("label",{children:["心跳秒",s.jsx("input",{type:"number",value:P.heartbeat,onChange:$=>N(V,"heartbeat",Number($.target.value))})]}),s.jsxs("label",{children:["上限秒",s.jsx("input",{type:"number",value:P.limit,onChange:$=>N(V,"limit",Number($.target.value))})]})]},P.name))}),s.jsxs("div",{className:"lab-actions",children:[s.jsx("button",{type:"submit",children:"运行巡检"}),s.jsx("button",{type:"button",className:"secondary",onClick:()=>{y(Xa),E(80),C(90),T(null)},children:"恢复练习数据"})]})]}),v!=null&&v.error?s.jsx("p",{className:"lab-note",children:v.error}):null,v!=null&&v.rows?s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:`exitcode code-${v.exitCode}`,children:["退出码 ",v.exitCode]}),s.jsx("ul",{className:"inspect-result",children:v.rows.map(P=>s.jsxs("li",{children:[s.jsxs("div",{className:"result-line",children:[s.jsx("strong",{children:P.name}),s.jsx(Uo,{value:P.status})]}),s.jsxs("p",{children:[s.jsx(Uo,{value:P.diskState})," 磁盘 已用 ",Number(P.disk).toFixed(1),"%",Ml("disk",P.diskState)?` · ${Ml("disk",P.diskState)}`:""]}),s.jsxs("p",{children:[s.jsx(Uo,{value:P.heartbeatState})," 心跳 ",P.heartbeat," 秒，上限 ",P.limit," 秒",Ml("heartbeat",P.heartbeatState)?` · ${Ml("heartbeat",P.heartbeatState)}`:""]})]},P.name))})]}):null]})}function Uo({value:a}){const y=a==="ok"?"OK":a==="warn"?"WARN":"CRIT";return s.jsx("span",{className:`pill ${a}`,children:y})}function dt({text:a}){return String(a).split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((c,E)=>c.startsWith("**")&&c.endsWith("**")&&c.length>4?s.jsx("strong",{children:c.slice(2,-2)},E):c.startsWith("`")&&c.endsWith("`")&&c.length>2?s.jsx("code",{children:c.slice(1,-1)},E):s.jsx("span",{children:c},E))}function sp({block:a}){const[y,c]=J.useState(!1),E=a.code.split(`
`).length,[k,C]=J.useState(E<=42),v=Vf(a.code,a.lang),T=a.download?`./samples/${a.download}`:null;async function N(){try{await navigator.clipboard.writeText(a.code)}catch{const M=document.createElement("textarea");M.value=a.code,document.body.appendChild(M),M.select(),document.execCommand("copy"),M.remove()}c(!0),window.setTimeout(()=>c(!1),1200)}return s.jsxs("figure",{className:"code-block",children:[s.jsxs("figcaption",{className:"code-bar",children:[s.jsx("span",{children:a.filename}),s.jsxs("span",{className:"code-actions",children:[s.jsx("button",{type:"button",onClick:N,children:y?"已复制":"复制"}),T?s.jsx("a",{href:T,download:!0,children:"下载"}):null]})]}),s.jsx("pre",{className:k?void 0:"clamped",children:v.map((M,P)=>s.jsx("span",{className:M.type==="text"?void 0:`token ${M.type}`,children:M.text},P))}),E>42?s.jsxs("div",{className:"code-bar",children:[s.jsxs("span",{children:[E," 行"]}),s.jsx("button",{type:"button",onClick:()=>C(M=>!M),children:k?"收起":"展开全文"})]}):null,a.run||a.output?s.jsxs("figcaption",{className:"code-foot",children:[a.run?s.jsxs("span",{className:"output-label",children:["运行 ",a.run]}):null,a.output?s.jsx("span",{style:{whiteSpace:"pre-wrap"},children:a.output}):null]}):null]})}function up({blocks:a}){return a.map((y,c)=>y.type==="p"?s.jsx("p",{children:s.jsx(dt,{text:y.text})},c):y.type==="h"?s.jsx("h2",{children:y.text},c):y.type==="ul"?s.jsx("ul",{children:y.items.map(E=>s.jsx("li",{children:s.jsx(dt,{text:E})},E))},c):y.type==="ol"?s.jsx("ol",{className:"steps",children:y.items.map((E,k)=>s.jsxs("li",{children:[s.jsx("span",{className:"n",children:String(k+1).padStart(2,"0")}),s.jsx("span",{children:s.jsx(dt,{text:E})})]},E))},c):y.type==="callout"?s.jsxs("aside",{className:`callout ${y.tone||""}`,children:[s.jsx("p",{className:"label",children:y.title}),s.jsx("p",{children:s.jsx(dt,{text:y.text})})]},c):y.type==="table"?s.jsx("div",{className:"table-wrap",children:s.jsxs("table",{children:[s.jsx("caption",{children:y.caption}),s.jsx("thead",{children:s.jsx("tr",{children:y.columns.map(E=>s.jsx("th",{children:E},E))})}),s.jsx("tbody",{children:y.rows.map(E=>s.jsx("tr",{children:E.map((k,C)=>s.jsx("td",{children:s.jsx(dt,{text:k})},C))},E.join("|")))})]})},c):y.type==="code"?s.jsx(sp,{block:y},c):y.type==="widget"?s.jsx(Zf,{name:y.name},c):null)}function ap({exercise:a}){const[y,c]=J.useState(!1),[E,k]=J.useState(!1);return s.jsxs("section",{className:"exercise",children:[s.jsx("h2",{children:"动手"}),s.jsx("p",{children:s.jsx(dt,{text:a.prompt})}),s.jsxs("div",{className:"actions",children:[s.jsx("button",{type:"button",className:"secondary",onClick:()=>c(!0),children:"看提示"}),s.jsx("button",{type:"button",className:"secondary",onClick:()=>k(!0),children:"看一种做法"})]}),y?s.jsx("p",{className:"muted",children:s.jsx(dt,{text:a.hint})}):null,E?s.jsx("p",{children:s.jsx(dt,{text:a.solution})}):null]})}function cp({lesson:a,onScore:y}){const[c,E]=J.useState({}),[k,C]=J.useState(!1),v=a.quiz.length,T=a.quiz.every((M,P)=>c[P]!==void 0),N=a.quiz.filter((M,P)=>c[P]===M.answer).length;return s.jsxs("section",{className:"quiz",children:[s.jsx("h2",{children:"自测"}),a.quiz.map((M,P)=>s.jsxs("fieldset",{className:"quiz-item",children:[s.jsx("legend",{children:s.jsx(dt,{text:M.q})}),s.jsx("div",{className:"choices",children:M.choices.map((V,$)=>{let B="";return k&&$===M.answer?B="right":k&&c[P]===$&&(B="wrong"),s.jsxs("label",{className:B,children:[s.jsx("input",{type:"radio",name:`${a.id}-${P}`,checked:c[P]===$,onChange:()=>E({...c,[P]:$})}),s.jsx("span",{children:s.jsx(dt,{text:V})})]},V)})}),k?s.jsx("p",{className:"why",children:s.jsx(dt,{text:M.why})}):null]},M.q)),s.jsxs("div",{className:"actions",children:[s.jsx("button",{type:"button",disabled:!T,onClick:()=>{C(!0),y(N,v)},children:"对答案"}),k?s.jsx("button",{type:"button",className:"secondary",onClick:()=>{C(!1),E({})},children:"再做一次"}):null,k?s.jsxs("span",{children:["答对 ",N," / ",v]}):null]})]})}function dp({route:a,progress:y,children:c}){const[E,k]=J.useState(!1),C=y.done||{};J.useEffect(()=>{k(!1)},[a.name,a.id]);const v=(T,N)=>a.name===T&&(!N||a.id===N)?"page":void 0;return s.jsxs("div",{className:"shell",children:[s.jsx("a",{className:"skip",href:"#content",children:"跳到正文"}),s.jsxs("aside",{className:E?"sidebar open":"sidebar",children:[s.jsxs("a",{className:"brand",href:"#/",children:[s.jsx("span",{className:"lamp","aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx("strong",{children:"巡栈"}),s.jsx("small",{children:"PYTHON OPS NOTES"})]})]}),s.jsx("button",{type:"button",className:"menu-toggle secondary",onClick:()=>k(T=>!T),children:E?"收起目录":"打开目录"}),s.jsxs("div",{className:"nav-body",children:[s.jsxs("nav",{className:"side-links","aria-label":"栏目",children:[s.jsx("a",{href:"#/","aria-current":v("home"),children:"起点"}),s.jsx("a",{href:"#/path","aria-current":v("path"),children:"路径"}),s.jsx("a",{href:"#/tools","aria-current":v("tools"),children:"四件工具"}),s.jsx("a",{href:"#/cheatsheet","aria-current":v("cheatsheet"),children:"速查"}),s.jsx("a",{href:"#/glossary","aria-current":v("glossary"),children:"词表"})]}),s.jsx("nav",{className:"lesson-nav","aria-label":"课程",children:jr.map(T=>s.jsxs("div",{children:[s.jsxs("p",{className:"stage-label",children:[T.index," ",T.title]}),T.lessonIds.map(N=>{const M=Hl(N),P=ft.findIndex(V=>V.id===N)+1;return s.jsxs("a",{href:`#/lesson/${N}`,"aria-current":v("lesson",N),children:[s.jsxs("span",{children:[String(P).padStart(2,"0")," ",M.title]}),s.jsx("span",{className:C[N]?"dot on":"dot","aria-label":C[N]?"已完成":"未完成"})]},N)})]},T.id))})]})]}),s.jsxs("div",{className:"main",children:[s.jsx("main",{id:"content",className:"sheet",children:c}),s.jsx("p",{className:"footer-note",children:"示例是教学代码。只对你有权操作的目录、账号和机器使用。学习记录保存在这台浏览器里。"})]})]})}function fp({progress:a}){const y=ft.filter(v=>a.done[v.id]).length,c=Uf(a.done),E=Hl(c),k=Af(a.done);return s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"kicker",children:"从会写基础语法，到交出能值一夜班的小工具"}),s.jsx("h1",{children:"巡栈"}),s.jsx("p",{className:"lead",children:"这条路径接住五件事：自动化脚本、运维里常见的 API、用线程和协程缩短等待、把它们收成自己的小工具链，以及用 SRE 的方式观察这些工具。"}),s.jsxs("div",{className:"actions",children:[s.jsx("a",{className:"button",href:`#/lesson/${E.id}`,children:y?`继续：${E.title}`:"从第 1 课开始"}),s.jsx("a",{className:"button secondary",href:"#/tools",children:"先看四件工具"}),s.jsx("a",{className:"button secondary",href:"./xunzhan-samples.zip",children:"下载全部示例"})]}),s.jsxs("p",{className:"muted",children:["已标记跑通 ",y," / ",ft.length," 课。需要 Python 3.10 或更高，不需要先准备一批服务器。"]}),s.jsx("h2",{children:"你想学的，落在哪"}),s.jsxs("div",{className:"goal-list",children:[s.jsxs("article",{className:"goal",children:[s.jsx("b",{children:"自动化脚本"}),s.jsx("span",{children:"批量处理、巡检分级、失败时继续还是停下、重复执行也安全。"})]}),s.jsxs("article",{className:"goal",children:[s.jsx("b",{children:"API 调用"}),s.jsx("span",{children:"超时、令牌、配置分层、重试、分页，并把接口收成小函数。"})]}),s.jsxs("article",{className:"goal",children:[s.jsx("b",{children:"线程与协程"}),s.jsx("span",{children:"先估算串行要等多久，再用线程池或协程重叠等待，并给并发加上限。"})]}),s.jsxs("article",{className:"goal",children:[s.jsx("b",{children:"小工具链"}),s.jsx("span",{children:"一个命令入口，四件工具：巡检、部署、发布、采集。"})]}),s.jsxs("article",{className:"goal",children:[s.jsx("b",{children:"SRE / 可观测性"}),s.jsx("span",{children:"错误预算、三种信号、写得清第一步的告警，再把工具串成一条路径。"})]})]}),s.jsx("h2",{children:"每次只做三件事"}),s.jsxs("ol",{className:"rule-list",children:[s.jsx("li",{children:s.jsx("span",{children:"原样跑通示例，看标准输出、标准错误和退出码。"})}),s.jsx("li",{children:s.jsx("span",{children:"只改一个数字或参数，确认输出跟着变。"})}),s.jsx("li",{children:s.jsx("span",{children:"做自测。答错就回到那一节，再决定要不要点「我跑通了」。"})})]}),s.jsx("h2",{children:"八段路径"}),s.jsx("div",{className:"stage-board",children:k.map(v=>s.jsxs("a",{className:"stage-card",href:`#/lesson/${v.lessonIds[0]}`,children:[s.jsx("span",{className:"index-no",children:v.index}),s.jsxs("span",{children:[s.jsx("strong",{children:v.title}),s.jsx("span",{className:"muted",style:{display:"block"},children:v.blurb}),s.jsx("span",{className:"track","aria-hidden":"true",children:s.jsx("span",{style:{width:`${v.finished/v.total*100}%`}})})]}),s.jsxs("span",{className:"muted",children:[v.finished,"/",v.total]})]},v.id))})]})}function pp({progress:a,onReset:y}){const[c,E]=J.useState(""),[k,C]=J.useState(!1),v=c.trim(),T=ft.filter(N=>v?`${N.title} ${N.summary}`.includes(v):!0);return s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"kicker",children:"27 课"}),s.jsx("h1",{children:"学习路径"}),s.jsx("div",{className:"path-tools",children:s.jsx("input",{value:c,onChange:N=>E(N.target.value),placeholder:"筛选标题或摘要","aria-label":"筛选课程"})}),jr.map(N=>{const M=T.filter(P=>N.lessonIds.includes(P.id));return M.length?s.jsxs("section",{children:[s.jsxs("h2",{children:[N.index," ",N.title]}),M.map(P=>{const V=ft.findIndex(G=>G.id===P.id)+1,$=a.quiz[P.id],B=Jf(a.done[P.id]);return s.jsxs("a",{className:"lesson-row",href:`#/lesson/${P.id}`,children:[s.jsx("span",{className:"index-no",children:String(V).padStart(2,"0")}),s.jsxs("span",{children:[s.jsx("b",{children:P.title}),s.jsx("small",{style:{display:"block"},children:P.summary})]}),s.jsxs("small",{children:[a.done[P.id]?`已跑通 ${B}`:"未标记",$?` · 自测 ${$.correct}/${$.total}`:""]})]},P.id)})]},N.id):null}),s.jsx("div",{className:"actions",children:k?s.jsx("button",{type:"button",onClick:y,children:"确认清除这台浏览器里的记录"}):s.jsx("button",{type:"button",className:"secondary",onClick:()=>C(!0),children:"清除学习记录"})})]})}function hp({id:a,progress:y,onDone:c,onScore:E}){const k=Hl(a);if(!k)return s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"没有这一课"}),s.jsx("p",{children:s.jsx("a",{href:"#/path",children:"回到路径"})})]});const C=Hf(a),v=!!y.done[a];return s.jsxs("article",{className:"prose",children:[s.jsxs("p",{className:"kicker",children:[C.stage.index," ",C.stage.title," · 第 ",String(C.number).padStart(2,"0")," 课"]}),s.jsx("h1",{children:k.title}),s.jsxs("p",{className:"lesson-meta",children:["阅读大约 ",k.read," 分钟 · 动手大约 ",k.practice," 分钟"]}),s.jsx("p",{children:k.summary}),s.jsx("h2",{children:"学完你可以"}),s.jsx("ul",{children:k.goals.map(T=>s.jsx("li",{children:T},T))}),s.jsx(up,{blocks:k.blocks}),s.jsx(ap,{exercise:k.exercise}),s.jsx(cp,{lesson:k,onScore:(T,N)=>E(k.id,T,N)}),s.jsxs("div",{className:"actions",children:[s.jsx("button",{type:"button",onClick:()=>c(k.id),children:v?"取消完成标记":"我跑通了这一课"}),y.quiz[k.id]?s.jsxs("span",{className:"muted",children:["最近自测 ",y.quiz[k.id].correct,"/",y.quiz[k.id].total]}):null]}),s.jsxs("nav",{className:"pager",children:[C.prev?s.jsxs("a",{href:`#/lesson/${C.prev.id}`,children:[s.jsx("small",{children:"上一课"}),C.prev.title]}):s.jsx("span",{}),C.next?s.jsxs("a",{href:`#/lesson/${C.next.id}`,children:[s.jsx("small",{children:"下一课"}),C.next.title]}):s.jsx("span",{})]})]})}function mp(){return s.jsxs("article",{className:"prose",children:[s.jsx("p",{className:"kicker",children:"四件可以留下的工具"}),s.jsx("h1",{children:"小工具链"}),s.jsxs("p",{children:["在 ",s.jsx("code",{children:"samples"})," 目录运行。四个子命令共用退出码：0 没有严重问题，1 需要处理，2 是用法或路径不对。"]}),s.jsxs("div",{className:"actions",children:[s.jsx("a",{className:"button",href:"./xunzhan-samples.zip",children:"下载全部示例"}),s.jsx("a",{className:"button secondary",href:"#/lesson/from-script-to-cli",children:"从命令入口那课看起"})]}),s.jsx("div",{className:"tool-grid",children:qf.map(y=>s.jsxs("a",{className:"tool-card",href:`#/lesson/${y.lesson}`,children:[s.jsx("span",{children:y.cmd}),s.jsx("h3",{children:y.name}),s.jsx("p",{children:y.text})]},y.id))}),s.jsx("h2",{children:"一条路径"}),s.jsxs("ol",{className:"flow",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"hosts.json"}),"你自己写的机器和事实。工具不扫描网段。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"inspect"}),"有严重项就先停下发布的念头。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"deploy"}),"在专用目录准备环境，失败只收回这次创建的文件。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"publish"}),"切换 CURRENT。健康检查失败时指针回到上一版，现场留着。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"collect"}),"把指标按行追加到文件。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"judge"}),"只在需要行动时开口，并写上第一步。"]})]}),s.jsx("h2",{children:"这套工具不做什么"}),s.jsxs("ul",{children:[s.jsx("li",{children:"不扫描网段，不猜测主机。"}),s.jsx("li",{children:"不保存令牌。令牌由你放在环境变量里。"}),s.jsx("li",{children:"不在过浅的目录上创建或删除文件。"})]})]})}function yp(){return s.jsxs("article",{children:[s.jsx("p",{className:"kicker",children:"用到再查"}),s.jsx("h1",{children:"词表"}),s.jsx("div",{className:"goal-list",children:Xf.map(a=>s.jsxs("article",{className:"term",children:[s.jsx("h2",{style:{margin:0,fontSize:"1.35rem"},children:a.term}),s.jsx("p",{children:a.text})]},a.term))})]})}function gp(){return s.jsxs("article",{children:[s.jsx("p",{className:"kicker",children:"写脚本时回来看"}),s.jsx("h1",{children:"速查"}),s.jsx("p",{children:"这些片段都只用标准库。完整脚本在各课里，可以下载后直接运行。"}),Gf.map(a=>s.jsxs("section",{className:"cheat",children:[s.jsx("h2",{children:a.title}),s.jsx("pre",{children:a.code})]},a.title))]})}function Ga(){const a=window.location.hash.replace(/^#/,"")||"/",c=(a.startsWith("/")?a:`/${a}`).split("/").filter(Boolean);return c.length===0?{name:"home"}:c[0]==="path"?{name:"path"}:c[0]==="tools"?{name:"tools"}:c[0]==="glossary"?{name:"glossary"}:c[0]==="cheatsheet"?{name:"cheatsheet"}:c[0]==="lesson"&&c[1]?{name:"lesson",id:decodeURIComponent(c[1])}:{name:"missing"}}function vp(){const[a,y]=J.useState(Ga),{progress:c,markDone:E,saveQuiz:k,reset:C}=Yf();J.useEffect(()=>{const T=()=>y(Ga());return window.addEventListener("hashchange",T),()=>window.removeEventListener("hashchange",T)},[]),J.useEffect(()=>{const T=a.name==="lesson"?Hl(a.id):null,N={home:"巡栈",path:"学习路径",tools:"四件工具",glossary:"词表",cheatsheet:"速查",missing:"没有这一页"};document.title=T?`${T.title} · 巡栈`:`${N[a.name]||"巡栈"} · 巡栈`,window.scrollTo(0,0)},[a]);let v=s.jsx(fp,{progress:c});return a.name==="path"&&(v=s.jsx(pp,{progress:c,onReset:C})),a.name==="tools"&&(v=s.jsx(mp,{})),a.name==="glossary"&&(v=s.jsx(yp,{})),a.name==="cheatsheet"&&(v=s.jsx(gp,{})),a.name==="lesson"&&(v=s.jsx(hp,{id:a.id,progress:c,onDone:E,onScore:k})),a.name==="missing"&&(v=s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"没有这一页"}),s.jsx("p",{children:s.jsx("a",{href:"#/",children:"回到起点"})})]})),s.jsx(dp,{route:a,progress:c,children:v})}sf.createRoot(document.getElementById("root")).render(s.jsx(ef.StrictMode,{children:s.jsx(vp,{})}));
