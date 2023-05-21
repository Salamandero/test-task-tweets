import{g as Ze,s as A,r as N,j as w,a as Ee,u as Ke,L as Ae}from"./index-3d36b5b4.js";function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ye}=Object.prototype,{getPrototypeOf:se}=Object,J=(e=>t=>{const n=Ye.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>J(t)===e),V=e=>t=>typeof t===e,{isArray:U}=Array,D=V("undefined");function Qe(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Re=R("ArrayBuffer");function $e(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Re(e.buffer),t}const et=V("string"),x=V("function"),Te=V("number"),W=e=>e!==null&&typeof e=="object",tt=e=>e===!0||e===!1,q=e=>{if(J(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nt=R("Date"),rt=R("File"),st=R("Blob"),ot=R("FileList"),it=e=>W(e)&&x(e.pipe),at=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=J(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},ct=R("URLSearchParams"),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ne=e=>!D(e)&&e!==Pe;function ee(){const{caseless:e}=Ne(this)&&this||{},t={},n=(r,s)=>{const o=e&&Oe(t,s)||s;q(t[o])&&q(r)?t[o]=ee(t[o],r):q(r)?t[o]=ee({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&B(arguments[r],n);return t}const ut=(e,t,n,{allOwnKeys:r}={})=>(B(t,(s,o)=>{n&&x(s)?e[o]=Se(s,n):e[o]=s},{allOwnKeys:r}),e),ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},bt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},yt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},gt=R("HTMLFormElement"),xt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Et=R("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},At=e=>{Ce(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},St=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Rt=()=>{},Tt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",ue="0123456789",Fe={DIGIT:ue,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+ue},Ot=(e=16,t=Fe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Pt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Nt=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return B(r,(i,l)=>{const d=n(i,s+1);!D(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Ct=R("AsyncFunction"),Ft=e=>e&&(W(e)||x(e))&&x(e.then)&&x(e.catch),a={isArray:U,isArrayBuffer:Re,isBuffer:Qe,isFormData:at,isArrayBufferView:$e,isString:et,isNumber:Te,isBoolean:tt,isObject:W,isPlainObject:q,isUndefined:D,isDate:nt,isFile:rt,isBlob:st,isRegExp:Et,isFunction:x,isStream:it,isURLSearchParams:ct,isTypedArray:bt,isFileList:ot,forEach:B,merge:ee,extend:ut,trim:lt,stripBOM:ft,inherits:dt,toFlatObject:pt,kindOf:J,kindOfTest:R,endsWith:ht,toArray:mt,forEachEntry:wt,matchAll:yt,isHTMLForm:gt,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:Ce,freezeMethods:At,toObjectSet:St,toCamelCase:xt,noop:Rt,toFiniteNumber:Tt,findKey:Oe,global:Pe,isContextDefined:Ne,ALPHABET:Fe,generateString:Ot,isSpecCompliantForm:Pt,toJSONObject:Nt,isAsyncFn:Ct,isThenable:Ft};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(m,je);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Lt=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function Ue(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ue(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function jt(e){return a.isArray(e)&&!e.some(te)}const Ut=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,T){return!a.isUndefined(T[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,T){let E=f;if(f&&!T&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&jt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(E=a.toArray(f)))return h=Ue(h),E.forEach(function(I,Ge){!(a.isUndefined(I)||I===null)&&t.append(i===!0?fe([h],Ge,o):i===null?h:h+"[]",c(I))}),!1}return te(f)?!0:(t.append(fe(T,h,o),c(f)),!1)}const p=[],y=Object.assign(Ut,{defaultVisitor:u,convertValue:c,isVisitable:te});function b(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(E,F){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(F)?F.trim():F,h,y))===!0&&b(E,h?h.concat(F):[F])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function de(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oe(e,t){this._pairs=[],e&&X(e,this,t)}const ke=oe.prototype;ke.append=function(t,n){this._pairs.push([t,n])};ke.toString=function(t){const n=t?function(r){return t.call(this,r,de)}:de;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||kt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Dt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const pe=Dt,Be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bt=typeof URLSearchParams<"u"?URLSearchParams:oe,Ht=typeof FormData<"u"?FormData:null,It=typeof Blob<"u"?Blob:null,qt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_t=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Bt,FormData:Ht,Blob:It},isStandardBrowserEnv:qt,isStandardBrowserWebWorkerEnv:_t,protocols:["http","https","file","blob","url","data"]};function zt(e,t){return X(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Mt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(vt(r),s,n,0)}),n}return null}const Jt={"Content-Type":void 0};function Vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const G={transitional:Be,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return zt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return X(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Vt(t)):t}],transformResponse:[function(t){const n=this.transitional||G.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){G.headers[t]={}});a.forEach(["post","put","patch"],function(t){G.headers[t]=a.merge(Jt)});const ie=G,Wt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Wt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},he=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function _(e){return e===!1||e==null?e:a.isArray(e)?e.map(_):String(e)}function Gt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Zt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Kt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Yt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,c){const u=k(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=_(l))}const i=(l,d)=>a.forEach(l,(c,u)=>o(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Zt(t)?i(Xt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Gt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const l=a.findKey(r,i);l&&(!n||Y(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=_(s),delete n[o];return}const l=t?Kt(o):String(o).trim();l!==o&&delete n[o],n[l]=_(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[he]=this[he]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=k(i);r[l]||(Yt(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Z.prototype);a.freezeMethods(Z);const O=Z;function Q(e,t){const n=this||ie,r=t||n,s=O.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,m,{__CANCEL__:!0});function Qt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $t=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function en(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qe(e,t){return e&&!en(t)?tn(e,t):t}const nn=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const b=u&&c-u;return b?Math.round(y*1e3/b):void 0}}function me(e,t){let n=0;const r=sn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const on=typeof XMLHttpRequest<"u",an=on&&function(e){return new Promise(function(n,r){let s=e.data;const o=O.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(b+":"+f))}const u=qe(e.baseURL,e.url);c.open(e.method.toUpperCase(),De(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const b=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:b,config:e,request:c};Qt(function(E){n(E),d()},function(E){r(E),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Be;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const b=(e.withCredentials||nn(u))&&e.xsrfCookieName&&$t.read(e.xsrfCookieName);b&&o.set(e.xsrfHeaderName,b)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",me(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",me(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=b=>{c&&(r(!b||b.type?new H(null,e,c):b),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=rn(u);if(y&&S.protocols.indexOf(y)===-1){r(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Lt,xhr:an};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function $(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function be(e){return $(e),e.headers=O.from(e.headers),e.data=Q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),cn.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return $(e),r.data=Q.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Ie(r)||($(e),r&&r.response&&(r.response.data=Q.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof O?e.toJSON():e;function L(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(we(c),we(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||s,y=p(e[u],t[u],u);a.isUndefined(y)&&p!==l||(n[u]=y)}),n}const _e="1.4.0",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ye={};ae.transitional=function(t,n,r){function s(o,i){return"[Axios v"+_e+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ye[i]&&(ye[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function ln(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ne={assertOptions:ln,validators:ae},P=ne.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=O.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,y;if(!d){const f=[be.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),y=f.length,u=Promise.resolve(n);p<y;)u=u.then(f[p++],f[p++]);return u}y=l.length;let b=n;for(p=0;p<y;){const f=l[p++],h=l[p++];try{b=f(b)}catch(T){h.call(this,T);break}}try{u=be.call(this,b)}catch(f){return Promise.reject(f)}for(p=0,y=c.length;p<y;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=L(this.defaults,t);const n=qe(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(L(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const v=M;class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new H(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(s){t=s}),cancel:t}}}const un=ce;function fn(e){return function(n){return e.apply(null,n)}}function dn(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const pn=re;function ze(e){const t=new v(e),n=Se(v.prototype.request,t);return a.extend(n,v.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(L(e,s))},n}const g=ze(ie);g.Axios=v;g.CanceledError=H;g.CancelToken=un;g.isCancel=Ie;g.VERSION=_e;g.toFormData=X;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=fn;g.isAxiosError=dn;g.mergeConfig=L;g.AxiosHeaders=O;g.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=pn;g.default=g;const ve=g,j=new URL("https://6464cb4c127ad0b8f8a83cff.mockapi.io/tweets");j.searchParams.append("completed",!1);j.searchParams.append("page",1);j.searchParams.append("limit",3);async function hn(e){return j.searchParams.set("limit",e),(await ve.get(j.toString())).data}async function ge(e,t){await ve.put(`${j}/${e}`,{...t})}var Me={exports:{}},mn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bn=mn,wn=bn;function Je(){}function Ve(){}Ve.resetWarningCache=Je;var yn=function(){function e(r,s,o,i,l,d){if(d!==wn){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ve,resetWarningCache:Je};return n.PropTypes=n,n};Me.exports=yn();var gn=Me.exports;const C=Ze(gn),xn="/test-task-tweets/assets/noImg-dc8f665c.png",En="/test-task-tweets/assets/circlePortret-6373a8aa.png",An="/test-task-tweets/assets/pictureAskSuccess-9f4b25d6.png",Sn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAAPCAYAAADnJnQRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAc7SURBVHgB7VtdUtw4EG7Zzs7kZTdJJZWligceeOIUXIL7cLk9xR6AoqgCklogGcbWqo1atNstWZ4ZCBB1rbB++ufrP3vGszH//vOf/evvd/D+zxqqxoABR/0fR5bNxZqm4eomhvMmyLJJVMYrDnq5bT83Ep+uIrqeBKnEIUwJH4x1EmYeIyIj9IblIJjuPzPGHnRIjJYtU/H0wjJXWpy4rdy4jWqAx4j5RGutlgBm5EiTieRN41VrC0apeJAR9defMd1GgppRl7TJcy5jFNXJ8woiX5Ea1WpJyoBms/T/q+z/9t7C3fcWvp3dQ1PXBpp3FTSLCupmTqsVKlSoUKGXTsZ07h5voHajwadRt7bQ3funz0Ya/ZV/hMrVpfHOkZ9L8qPkJna29W9X9p4D/yaU0i8+rfWU4k2d7wLHlLy0vy2ml0rb1ETp/93wztWRqbtbu9E65g6gaVcW7u8A6tq6VzqQT7O+HxV6Viq5KfTUVGrs5ZLIDd7w728trFfuhr+6ce93mhbalfvIX5uYTErfYB9gN3UwpWvbetP0j96BTtiN8Y/eFQ/mFvCXEut3DdvbhKz/m5LX9D9i12Ufceoxgom9GA7Y0NO5+ZZ+8VwBbO7D2M58uVg+pvK4qb08TNN5njor/a/r/tX93647WP1w48a92rn7vgbbAvx0N/6qTidzzr7kAchLkBbE2E1G6py6GclvcnPw5FDshyvpU05hSTlJuTHXZHLiNDdGAHm+xNZT+3N1TumfmwOAdINrNQYwfXMExp9bqwFHpN40rCmMmty2+5IHMvi4vtL/O+p/N7HuVc76Zws/btbQ3FyvYXWLr3PWUFWwW0JjxoPL6cYnouT/QZBbsTPxzi4UgN3fEX8Vbfax92n9UvQP6mIXHxlfel6em0r/5/E+cf933cPvtPerFprbb2uoqxZMZUZBmfpqQxj5E0g+wQD0PKee5LE9EHYgoVebx+RST1zpG8zQDZCOByi2pp74ANt9MonhimFP6U3lJIZJ452qs1hNxPRP1YLkTdXgnE9h2+SFn3Nc2jzGP6V/7lnp/7fR//hAse5P19p+770b7mUOVFzXx48f4erqCuT6w4cPxpHVzrgt3CPivJI+ffrksFgj5fHqbFXCVjQmEq/0350beU4ydEUsl5eXJqWLy3D/SFbDQrwpPzgP1yX4ez+IT9GrxUH1XfLiHGNNdhmG3rbiX6g/ET8A4ZvMsawlYHHUMGpnzNbAnsjhIF7C75ADGYdUvUo8uEbfrq+vrSar5BJJ4hrUg8TD7cVI68sIhf6c8rP0f9zOK+x/9+Ie2urg4MB++fKlP0BDXrmt67rz647WeHWF3fpmsZ8/f+5w0Jnn73VhonD4s470+tHL4dw5hgmV8rgGskW87jqQJb0oh7bYfvDF72EQOuZfj8n7Ea7+BmK5TeIlu/4G1flCpDXHbWV8cI18FE93BY6VZCiOVVUFWYqF96n3g/TjlebkM1+TDMWG5ZP875h98j/khdkOV2+jX6NukuXx4znG4XNsWXx6PS6/HcWQdPC8EkaKOd/3+KzHYSVueiD5GA18Z353It+dgqOXpXxhjnh+cd40TUuyrFZDLnl+WD2GmvBxDLlgNdVxexRTpif4xfuS9zHHwvuT8sHrovT/2+x/1Pv161e7v7/fPzUWblK1bWvOzs76p4c7hPPzc2/n4cmyt7dn6VzhGRCd4RVJ4Rt9S3MPHXNxcWHpCnEK31S8HakrPD25rhy8El8Mv9TbdV0udsjwi3wIOCQuiZvsyjXo34YHNDMuwV8sSow9FhLlml8zbATZGF+kjkJuiFfUDnC9uOdvuoFieqR9rX6oD7Rcp3RxLCx+ICnRO2gTeJ5pH8Y1YT1/qAMfk8ArsXJbpf/fXP/zBx00R0dHf7jrAsfh4WE/3HxJe2y+dN8I+sH5/bnk53xLwTuS5bxkw59L/Us+GJ6eP4JtoZynfCDbQYbiwnAFzAznQmCWvveDx5Dv8/hxP9g64OD4NP08Vgo+6acaZ+VsEYnZUonHaM2xKjW2UHQNfNZ0glJnoNfbUonPQrE/iKfi50CvFn8ZN1Z3qt1ILqO8smYmcqphXCo1uEzkpvT/6+9/vMf3/9IK393jO/zm+Pi4oXli4HmNvJ6/3zs5OanpLCLTeJ4mZwj9jYIvWxe3jVfSK680FzhrycN1aLh5nGKxiPCrfIQnkp9a84XzsnnIm8BfK3GtE/No3smWjBHHE4sf95PzCP9HdcRjSHYyarmOxHJUq0qstNg2mbaS9Ut+83olf3gcaEicGh6tlxS/Sv/Dm+//qv/BCQc8fPw38PjjrVHO1L3UIF4hA9xOijcmj786a3wZo8rAN8JwenpapfxL7cdkxYCMOFYSF+2LNV5hysdIXLN8iujiOamm/BB4R/GSNubkQJNN+SX91mxNxcXLVJru3FjG8iuuwG3m1j7PDdVH6f/frv8LFSpUqNDvQP8DChErvWRvzKUAAAAASUVORK5CYII=",Rn="/test-task-tweets/assets/logoGoit-4c0f5340.svg",Tn=A.li`
  width: 380px;
  height: 460px;

  margin-left: auto;
  margin-right: auto;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`,On=A.div`
  display: block;
  text-align: center;
  width: 380px;
  height: 460px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
  text-transform: uppercase;

  background-image: url(${En}), url(${An}),
    url(${Sn}), url(${Rn});
  background-repeat: no-repeat;
  background-size: 88px, 308px, 380px, 76px;
  background-position: center top 179px, center top 28px, center top 214px,
    left 20px top 20px;
`,xe=A.img`
  display: block;
  position: relative;
  top: 188px;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  border-radius: 50%;
  width: 62px;
`,Pn=A.p`
  margin-top: 226px;
  margin-bottom: 16px;
`,Nn=A.p`
  margin-bottom: 26px;
`,We=A.button`
  font-size: 18px;
  line-height: 1.222;
  font-weight: 600;

  width: 196px;
  padding: 14px 0;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  text-transform: uppercase;
  flex: none;
  order: 0;
  flex-grow: 0;
`,Cn=A(We)`
  background: #5cd3a8;
`,Fn=({id:e,user:t,tweets:n,followers:r,avatar:s})=>{const[o,i]=N.useState(!1),[l,d]=N.useState(r),[c,u]=N.useState(!1),p={id:e,user:t,tweets:n,followers:r,avatar:s},y=()=>{const f=l+1;d(f),u(!0),ge(e,{...p,followers:f}).catch(h=>console.log(h.message)).finally(()=>u(!1)),i(!0)},b=()=>{const f=l-1;d(f),u(!0),ge(e,{...p,followers:f}).catch(h=>console.log(h.message)).finally(()=>u(!1)),i(!1)};return w.jsxs(w.Fragment,{children:[c&&w.jsx(Ee,{}),!c&&w.jsx(Tn,{children:w.jsxs(On,{children:[s?w.jsx(xe,{src:s,alt:t,loading:"lazy"}):w.jsx(xe,{src:xn,alt:t,loading:"lazy"}),w.jsxs(Pn,{children:[n.toLocaleString()," tweets"]}),w.jsxs(Nn,{children:[l.toLocaleString()," followers"]}),o?w.jsx(Cn,{type:"button",onClick:b,children:"Following"}):w.jsx(We,{type:"button",onClick:y,children:"Follow"})]})})]})},Ln=A.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`,Xe=({cards:e})=>{const t=Ke();return w.jsx(Ln,{children:e.map(({id:n,user:r,tweets:s,followers:o,avatar:i})=>w.jsx(Fn,{id:n,user:r,tweets:s,followers:o,avatar:i,children:w.jsx(Ae,{to:"/tweets",state:{from:t}})},n))})};Xe.propTypes={cards:C.arrayOf(C.shape({id:C.string.isRequired,user:C.string.isRequired,tweets:C.number.isRequired,followers:C.number.isRequired,avatar:C.string.isRequired}))};const jn=A.h2`
  text-align: center;
  margin-top: 8px;
  margin-bottom: 16px;
`,Un=A(Ae)`
  font-weight: 500;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  padding: 4px;
  background-color: #ad00b5;
  padding-left: 8px;
  padding-right: 8px;
`,kn=A.button`
  display: block;
  font-size: 18px;
  line-height: 1.222;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  width: 196px;

  padding: 14px 0;
  margin-top: 18px;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  text-transform: uppercase;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    background: #5cd3a8;
  }
`,Bn=()=>{var u;const[e,t]=N.useState(!1),[n,r]=N.useState([]),s=((u=location.state)==null?void 0:u.from)??"/",[o,i]=N.useState(!0),[l,d]=N.useState(3);N.useEffect(()=>{t(!0),hn(l).then(r).catch(p=>console.log(p.message)).finally(()=>t(!1)),Number(n.length)===Number(l)?i(!0):i(!1)},[n.length,l]);const c=()=>{d(p=>p+3)};return w.jsxs(w.Fragment,{children:[w.jsx(Un,{to:s,children:"Go back"}),e&&w.jsx(Ee,{}),n.length>0&&w.jsxs("section",{children:[w.jsx(jn,{children:"Choice to connect"}),w.jsx(Xe,{cards:n}),o&&w.jsx(kn,{onClick:c,children:"LoadMore"})]})]})};export{Bn as default};
