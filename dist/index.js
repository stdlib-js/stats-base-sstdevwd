"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=i(function(k,u){
var f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/stats-strided-svariancewd/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,t){return f(y(p(e,r,a,t)))}u.exports=x
});var q=i(function(z,n){
var j=require('@stdlib/number-float64-base-to-float32/dist'),m=require('@stdlib/stats-strided-svariancewd/dist').ndarray,F=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,t,w){return j(F(m(e,r,a,t,w)))}n.exports=R
});var c=i(function(A,o){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),_=q();T(d,"ndarray",_);o.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,l=O(E(__dirname,"./native.js"));b(l)?s=g:s=l;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
