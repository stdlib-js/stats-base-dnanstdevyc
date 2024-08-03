"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(w,s){
var x=require('@stdlib/stats-base-dnanvarianceyc/dist'),f=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,n){return f(x(e,r,a,n))}s.exports=j
});var d=i(function(z,v){
var m=require('@stdlib/stats-base-dnanvarianceyc/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,n,p){return l(m(e,r,a,n,p))}v.exports=R
});var y=i(function(A,q){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=u(),E=d();_(c,"ndarray",E);q.exports=c
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),t,o=b(O(__dirname,"./native.js"));g(o)?t=h:t=o;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
