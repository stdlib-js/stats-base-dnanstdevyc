// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).dnanstdevyc={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||a.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),s="get"in e,y="set"in e,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),y&&f&&f.call(r,t,e.set),r};var l=e;function s(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===b(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function p(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var b="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},d=/./;function v(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var h,m="function"==typeof Symbol?Symbol.toStringTag:"";h=_()?function(r){var t,e,n,o,u;if(null==r)return g.call(r);e=r[m],u=m,t=null!=(o=r)&&w.call(o,u);try{r[m]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[m]=e:delete r[m],n}:function(r){return g.call(r)};var O=h,N=Boolean.prototype.toString;var E=_();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return N.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function A(r){return v(r)||S(r)}function P(){return new Function("return this;")()}s(A,"isPrimitive",v),s(A,"isObject",S);var T="object"==typeof self?self:null,B="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof x?x:null;var M=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(T)return T;if(B)return B;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),V=M.document&&M.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;s(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var q=G;function I(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!q(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(I);function R(r){var t,e,n,o;if(("Object"===(e=O(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=L.exec(n.toString()))return t[1]}return I(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(I,"isObjectLikeArray",J);var U="function"==typeof d||"object"==typeof C||"function"==typeof V?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,X="function"===U(z)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var H,K=X;function Q(r){return null==r?null:(r=Object(r),K(r))}function W(r,t,e,n){var o,u,i,f,c,a,l,s;if(r<=0)return NaN;if(1===r||0===n)return(c=e[0])==c&&r-t>0?0:NaN;for(u=n<0?(1-r)*n:0,s=0;s<r&&(c=e[u])!=c;s++)u+=n;if(s===r)return NaN;for(u+=n,o=c,f=0,s+=1,l=1;s<r;s++)(c=e[u])==c&&(f+=1/((l+=1)*(l-1))*(a=l*c-(o+=c))*a),u+=n;return(i=l-t)<=0?NaN:f/i}s(W,"ndarray",(function(r,t,e,n,o){var u,i,f,c,a,l,s,y;if(r<=0)return NaN;if(1===r||0===n)return(a=e[o])==a&&r-t>0?0:NaN;for(i=o,y=0;y<r&&(a=e[i])!=a;y++)i+=n;if(y===r)return NaN;for(i+=n,u=a,c=0,y+=1,s=1;y<r;y++)(a=e[i])==a&&(c+=1/((s+=1)*(s-1))*(l=s*a-(u+=a))*l),i+=n;return(f=s-t)<=0?NaN:c/f}));var Y=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=Q(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return y(p(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-dnanstdevyc/stats-base-dnanstdevyc/node_modules/@stdlib/stats-base-dnanvarianceyc/lib","./native.js")),Z=H=Y instanceof Error?W:Y;const{ndarray:$}=H;var rr=Math.sqrt;function tr(r,t,e,n){return rr(Z(r,t,e,n))}function er(r,t,e,n,o){return rr($(r,t,e,n,o))}s(tr,"ndarray",er),r.default=tr,r.ndarray=er,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
