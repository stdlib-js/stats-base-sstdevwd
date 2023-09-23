// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,n,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,s=parseInt(n,10),!isFinite(s)){if(!t(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(n=(-s).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=s.toString(e),s||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,y,"$1e"),n=f.call(n,v,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),r.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,w,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var x=String.fromCharCode,j=isNaN,S=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,a,o,u,l,p,f;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(c(n=r[p]))u+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function I(r){var e,t,n;if(!$(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var O,C=Object.prototype,R=C.toString,P=C.__defineGetter__,N=C.__defineSetter__,Z=C.__lookupGetter__,L=C.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&N&&N.call(r,e,t.set),r};var W=O;function M(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G="function"==typeof Math.fround?Math.fround:null;var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return B&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";q=U()?function(r){var e,t,n,i,a;if(null==r)return X.call(r);t=r[J],a=J,e=null!=(i=r)&&z.call(i,a);try{r[J]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[J]=t:delete r[J],n}:function(r){return X.call(r)};var Y=q,H="function"==typeof Float32Array;var K=Number.POSITIVE_INFINITY,Q="function"==typeof Float32Array?Float32Array:null;var rr,er="function"==typeof Float32Array?Float32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,5e40]),t=e,r=(H&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===K}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=new rr(1);var nr="function"==typeof G?G:function(r){return tr[0]=r,tr[0]};function ir(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function ar(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var or=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,sr=function(r){return or.exec(r).slice(1)};function cr(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=ar(br(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function ur(r){var e=lr(r),t="/"===vr(r,-1);return(r=ar(br(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function lr(r){return"/"===r.charAt(0)}function pr(){var r=Array.prototype.slice.call(arguments,0);return ur(br(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function fr(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=cr(r).substr(1),e=cr(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),o=a,s=0;s<a;s++)if(n[s]!==i[s]){o=s;break}var c=[];for(s=o;s<n.length;s++)c.push("..");return(c=c.concat(i.slice(o))).join("/")}function gr(r){var e=sr(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function dr(r,e){var t=sr(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function hr(r){return sr(r)[3]}var wr={extname:hr,basename:dr,dirname:gr,sep:"/",delimiter:":",relative:fr,join:pr,isAbsolute:lr,normalize:ur,resolve:cr};function br(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var vr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},yr=ir(Object.freeze({__proto__:null,basename:dr,default:wr,delimiter:":",dirname:gr,extname:hr,isAbsolute:lr,join:pr,normalize:ur,relative:fr,resolve:cr,sep:"/"}));var mr=Object,Er=/./;function kr(r){return"boolean"==typeof r}var xr=Boolean,jr=Boolean.prototype.toString;var Sr=U();function _r(r){return"object"==typeof r&&(r instanceof xr||(Sr?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function Ar(r){return kr(r)||_r(r)}function Fr(r){return"number"==typeof r}function Vr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Tr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Vr(i):Vr(i)+r,n&&(r="-"+r)),r}M(Ar,"isPrimitive",kr),M(Ar,"isObject",_r);var $r=String.prototype.toLowerCase,Ir=String.prototype.toUpperCase;function Or(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Fr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Tr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Tr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Ir.call(r.specifier)?Ir.call(t):$r.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Cr(r){return"string"==typeof r}var Rr=Math.abs,Pr=String.prototype.toLowerCase,Nr=String.prototype.toUpperCase,Zr=String.prototype.replace,Lr=/e\+(\d)$/,Wr=/e-(\d)$/,Mr=/^(\d+)$/,Gr=/^(\d+)e/,Br=/\.0$/,Ur=/\.0*e/,Xr=/(\..*[^0])0*e/;function zr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Fr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Rr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Zr.call(t,Xr,"$1e"),t=Zr.call(t,Ur,"e"),t=Zr.call(t,Br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Zr.call(t,Lr,"e+0$1"),t=Zr.call(t,Wr,"e-0$1"),r.alternate&&(t=Zr.call(t,Mr,"$1."),t=Zr.call(t,Gr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Nr.call(r.specifier)?Nr.call(t):Pr.call(t)}function qr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Dr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+qr(n):qr(n)+r}var Jr=String.fromCharCode,Yr=isNaN,Hr=Array.isArray;function Kr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Qr(r){var e,t,n,i,a,o,s,c,u;if(!Hr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(Cr(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=Kr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,Yr(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,Yr(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Or(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Yr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Yr(a)?String(n.arg):Jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=zr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Tr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Dr(n.arg,n.width,n.padRight)),o+=n.arg||"",s+=1}return o}var re=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ee(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function te(r){var e,t,n,i;for(t=[],i=0,n=re.exec(r);n;)(e=r.slice(i,re.lastIndex-n[0].length)).length&&t.push(e),t.push(ee(n)),i=re.lastIndex,n=re.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ne(r){return"string"==typeof r}function ie(r){var e,t,n;if(!ne(r))throw new TypeError(ie("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=te(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Qr.apply(null,t)}function ae(){return new Function("return this;")()}var oe="object"==typeof self?self:null,se="object"==typeof window?window:null,ce="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ue="object"==typeof ce?ce:null,le="object"==typeof globalThis?globalThis:null;var pe=function(r){if(arguments.length){if(!kr(r))throw new TypeError(ie("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ae()}if(le)return le;if(oe)return oe;if(se)return se;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=pe.document&&pe.document.childNodes,ge=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var he,we=/^\s*function\s*([^(]*)/i;M(de,"REGEXP",we),he=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var be=he;function ve(r){return"number"==typeof r}function ye(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function me(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ye(i):ye(i)+r,n&&(r="-"+r)),r}var Ee=String.prototype.toLowerCase,ke=String.prototype.toUpperCase;function xe(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ve(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=me(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=me(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ke.call(r.specifier)?ke.call(t):Ee.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function je(r){return"string"==typeof r}var Se=Math.abs,_e=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase,Fe=String.prototype.replace,Ve=/e\+(\d)$/,Te=/e-(\d)$/,$e=/^(\d+)$/,Ie=/^(\d+)e/,Oe=/\.0$/,Ce=/\.0*e/,Re=/(\..*[^0])0*e/;function Pe(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ve(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Se(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Fe.call(t,Re,"$1e"),t=Fe.call(t,Ce,"e"),t=Fe.call(t,Oe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Fe.call(t,Ve,"e+0$1"),t=Fe.call(t,Te,"e-0$1"),r.alternate&&(t=Fe.call(t,$e,"$1."),t=Fe.call(t,Ie,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ae.call(r.specifier)?Ae.call(t):_e.call(t)}function Ne(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Ze(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ne(n):Ne(n)+r}var Le=String.fromCharCode,We=isNaN,Me=Array.isArray;function Ge(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Be(r){var e,t,n,i,a,o,s,c,u;if(!Me(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(je(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=Ge(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,We(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,We(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=xe(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!We(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=We(a)?String(n.arg):Le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Pe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=me(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ze(n.arg,n.width,n.padRight)),o+=n.arg||"",s+=1}return o}var Ue=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xe(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ze(r){var e,t,n,i;for(t=[],i=0,n=Ue.exec(r);n;)(e=r.slice(i,Ue.lastIndex-n[0].length)).length&&t.push(e),t.push(Xe(n)),i=Ue.lastIndex,n=Ue.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function qe(r){return"string"==typeof r}function De(r){var e,t,n;if(!qe(r))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ze(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Be.apply(null,t)}function Je(r){return null!==r&&"object"==typeof r}var Ye=function(r){if("function"!=typeof r)throw new TypeError(De("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!be(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Je);function He(r){var e,t,n,i;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=we.exec(n.toString()))return e[1]}return Je(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(Je,"isObjectLikeArray",Ye);var Ke="function"==typeof Er||"object"==typeof ge||"function"==typeof fe?function(r){return He(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?He(r).toLowerCase():e};var Qe,rt,et=Object.getPrototypeOf;rt=Object.getPrototypeOf,Qe="function"===Ke(rt)?et:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var tt=Qe;function nt(r){return null==r?null:(r=mr(r),tt(r))}function it(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Y(r))return!0;r=nt(r)}return!1}function at(r,e,t,n){var i,a,o,s,c,u,l;if(u=r-e,r<=0||u<=0)return NaN;if(1===r||0===n)return 0;for(s=n<0?(1-r)*n:0,o=0,a=0,l=0;l<r;l++)c=t[s],i=nr(c-a),a=nr(a+nr(i/(l+1))),o=nr(o+nr(i*nr(c-a))),s+=n;return nr(o/u)}M(at,"ndarray",(function(r,e,t,n,i){var a,o,s,c,u,l,p;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(c=i,s=0,o=0,p=0;p<r;p++)u=t[c],a=nr(u-o),o=nr(o+nr(a/(p+1))),s=nr(s+nr(a*nr(u-o))),c+=n;return nr(s/l)}));var ot,st=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return it(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,yr.join)("/home/runner/work/stats-base-sstdevwd/stats-base-sstdevwd/node_modules/@stdlib/stats-base-svariancewd/lib","./native.js")),ct=ot=it(st)?at:st;const{ndarray:ut}=ot;var lt=Math.sqrt;function pt(r,e,t,n){return nr(lt(ct(r,e,t,n)))}function ft(r,e,t,n,i){return nr(lt(ut(r,e,t,n,i)))}M(pt,"ndarray",ft);export{pt as default,ft as ndarray};
//# sourceMappingURL=mod.js.map
