/*! For license information please see text-viewer.js.LICENSE.txt */
(()=>{var e,t,n,i,r={48583:(e,t,n)=>{"use strict";var i=n(27418);function r(e,t){if(e===t)return 0;for(var n=e.length,i=t.length,r=0,a=Math.min(n,i);r<a;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0}function a(e){return n.g.Buffer&&"function"==typeof n.g.Buffer.isBuffer?n.g.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=n(89539),c=Object.prototype.hasOwnProperty,h=Array.prototype.slice,l="foo"===function(){}.name;function f(e){return Object.prototype.toString.call(e)}function s(e){return!a(e)&&("function"==typeof n.g.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var u=e.exports=y,g=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(o.isFunction(e)){if(l)return e.name;var t=e.toString().match(g);return t&&t[1]}}function p(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function b(e){if(l||!o.isFunction(e))return o.inspect(e);var t=d(e);return"[Function"+(t?": "+t:"")+"]"}function m(e,t,n,i,r){throw new u.AssertionError({message:n,actual:e,expected:t,operator:i,stackStartFunction:r})}function y(e,t){e||m(e,!0,t,"==",u.ok)}function v(e,t,n,i){if(e===t)return!0;if(a(e)&&a(t))return 0===r(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(s(e)&&s(t)&&f(e)===f(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(a(e)!==a(t))return!1;var c=(i=i||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===i.expected.indexOf(t)||(i.actual.push(e),i.expected.push(t),function(e,t,n,i){if(null==e||null==t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var r=x(e),a=x(t);if(r&&!a||!r&&a)return!1;if(r)return v(e=h.call(e),t=h.call(t),n);var c,l,f=E(e),s=E(t);if(f.length!==s.length)return!1;for(f.sort(),s.sort(),l=f.length-1;l>=0;l--)if(f[l]!==s[l])return!1;for(l=f.length-1;l>=0;l--)if(!v(e[c=f[l]],t[c],n,i))return!1;return!0}(e,t,n,i))}return n?e===t:e==t}function x(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function w(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function j(e,t,n,i){var r;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(i=n,n=null),r=function(e){var t;try{e()}catch(e){t=e}return t}(t),i=(n&&n.name?" ("+n.name+").":".")+(i?" "+i:"."),e&&!r&&m(r,n,"Missing expected exception"+i);var a="string"==typeof i,c=!e&&r&&!n;if((!e&&o.isError(r)&&a&&w(r,n)||c)&&m(r,n,"Got unwanted exception"+i),e&&r&&n&&!w(r,n)||!e&&r)throw r}u.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return p(b(e.actual),128)+" "+e.operator+" "+p(b(e.expected),128)}(this),this.generatedMessage=!0);var t=e.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var i=n.stack,r=d(t),a=i.indexOf("\n"+r);if(a>=0){var o=i.indexOf("\n",a+1);i=i.substring(o+1)}this.stack=i}}},o.inherits(u.AssertionError,Error),u.fail=m,u.ok=y,u.equal=function(e,t,n){e!=t&&m(e,t,n,"==",u.equal)},u.notEqual=function(e,t,n){e==t&&m(e,t,n,"!=",u.notEqual)},u.deepEqual=function(e,t,n){v(e,t,!1)||m(e,t,n,"deepEqual",u.deepEqual)},u.deepStrictEqual=function(e,t,n){v(e,t,!0)||m(e,t,n,"deepStrictEqual",u.deepStrictEqual)},u.notDeepEqual=function(e,t,n){v(e,t,!1)&&m(e,t,n,"notDeepEqual",u.notDeepEqual)},u.notDeepStrictEqual=function e(t,n,i){v(t,n,!0)&&m(t,n,i,"notDeepStrictEqual",e)},u.strictEqual=function(e,t,n){e!==t&&m(e,t,n,"===",u.strictEqual)},u.notStrictEqual=function(e,t,n){e===t&&m(e,t,n,"!==",u.notStrictEqual)},u.throws=function(e,t,n){j(!0,e,t,n)},u.doesNotThrow=function(e,t,n){j(!1,e,t,n)},u.ifError=function(e){if(e)throw e},u.strict=i((function e(t,n){t||m(t,!0,n,"==",e)}),u,{equal:u.strictEqual,deepEqual:u.deepStrictEqual,notEqual:u.notStrictEqual,notDeepEqual:u.notDeepStrictEqual}),u.strict.strict=u.strict;var E=Object.keys||function(e){var t=[];for(var n in e)c.call(e,n)&&t.push(n);return t}},74411:(e,t,n)=>{"use strict";var i,r;n.d(t,{lF:()=>a,w_:()=>o});var a=["text/markdown"],o=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];null!==(i=window.oc_appswebroots)&&void 0!==i&&i.richdocuments||null!==(r=window.oc_appswebroots)&&void 0!==r&&r.onlyoffice||o.push("text/csv");[].concat(a,o)},25108:(e,t,n)=>{var i=n(89539),r=n(48583);function a(){return(new Date).getTime()}var o,c=Array.prototype.slice,h={};o=void 0!==n.g&&n.g.console?n.g.console:"undefined"!=typeof window&&window.console?window.console:{};for(var l=[[function(){},"log"],[function(){o.log.apply(o,arguments)},"info"],[function(){o.log.apply(o,arguments)},"warn"],[function(){o.warn.apply(o,arguments)},"error"],[function(e){h[e]=a()},"time"],[function(e){var t=h[e];if(!t)throw new Error("No such label: "+e);delete h[e];var n=a()-t;o.log(e+": "+n+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=i.format.apply(null,arguments),o.error(e.stack)},"trace"],[function(e){o.log(i.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=c.call(arguments,1);r.ok(!1,i.format.apply(null,t))}},"assert"]],f=0;f<l.length;f++){var s=l[f],u=s[0],g=s[1];o[g]||(o[g]=u)}e.exports=o},84451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(87537),r=n.n(i),a=n(23645),o=n.n(a)()(r());o.push([e.id,"@media only screen and (max-width: 512px){.text-editor{top:auto}}","",{version:3,sources:["webpack://./src/components/ViewerComponent.vue"],names:[],mappings:"AAwEA,0CAEC,aACC,QAAA,CAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media only screen and (max-width: 512px) {\n\t// on mobile, modal-container has top: 50px\n\t.text-editor {\n\t\ttop: auto;\n\t}\n}\n"],sourceRoot:""}]);const c=o},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var c=0;c<this.length;c++){var h=this[c][0];null!=h&&(o[h]=!0)}for(var l=0;l<e.length;l++){var f=[].concat(e[l]);i&&o[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),r&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=r):f[4]="".concat(r)),t.push(f))}},t}},87537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(r," */"),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}return[t].join("\n")}},35717:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}},27418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,c,h=r(e),l=1;l<arguments.length;l++){for(var f in o=Object(arguments[l]))n.call(o,f)&&(h[f]=o[f]);if(t){c=t(o);for(var s=0;s<c.length;s++)i.call(o,c[s])&&(h[c[s]]=o[c[s]])}}return h}},34155:e=>{var t,n,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,h=[],l=!1,f=-1;function s(){l&&c&&(l=!1,c.length?h=c.concat(h):f=-1,h.length&&u())}function u(){if(!l){var e=o(s);l=!0;for(var t=h.length;t;){for(c=h,h=[];++f<t;)c&&c[f].run();f=-1,t=h.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new g(e,t)),1!==h.length||l||o(u)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},93379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],c=0;c<e.length;c++){var h=e[c],l=i.base?h[0]+i.base:h[0],f=a[l]||0,s="".concat(l," ").concat(f);a[l]=f+1;var u=n(s),g={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var d=r(g,i);i.byIndex=c,t.splice(c,0,{identifier:s,updater:d,references:1})}o.push(s)}return o}function r(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=n(a[o]);t[c].references--}for(var h=i(e,r),l=0;l<a.length;l++){var f=n(a[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}a=h}}},90569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},19216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},44589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},20384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},89539:(e,t,n)=>{var i=n(34155),r=n(25108),a=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(h(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,r=i.length,o=String(e).replace(a,(function(e){if("%%"===e)return"%";if(n>=r)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}})),c=i[n];n<r;c=i[++n])b(c)||!w(c)?o+=" "+c:o+=" "+h(c);return o},t.deprecate=function(e,a){if(v(n.g.process))return function(){return t.deprecate(e,a).apply(this,arguments)};if(!0===i.noDeprecation)return e;var o=!1;return function(){if(!o){if(i.throwDeprecation)throw new Error(a);i.traceDeprecation?r.trace(a):r.error(a),o=!0}return e.apply(this,arguments)}};var o,c={};function h(e,n){var i={seen:[],stylize:f};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),p(n)?i.showHidden=n:n&&t._extend(i,n),v(i.showHidden)&&(i.showHidden=!1),v(i.depth)&&(i.depth=2),v(i.colors)&&(i.colors=!1),v(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=l),s(i,e,i.depth)}function l(e,t){var n=h.styles[t];return n?"["+h.colors[n][0]+"m"+e+"["+h.colors[n][1]+"m":e}function f(e,t){return e}function s(e,n,i){if(e.customInspect&&n&&O(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,e);return y(r)||(r=s(e,r,i)),r}var a=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(m(t))return e.stylize(""+t,"number");if(p(t))return e.stylize(""+t,"boolean");if(b(t))return e.stylize("null","null")}(e,n);if(a)return a;var o=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(n)),E(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return u(n);if(0===o.length){if(O(n)){var h=n.name?": "+n.name:"";return e.stylize("[Function"+h+"]","special")}if(x(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return u(n)}var l,f="",w=!1,S=["{","}"];(d(n)&&(w=!0,S=["[","]"]),O(n))&&(f=" [Function"+(n.name?": "+n.name:"")+"]");return x(n)&&(f=" "+RegExp.prototype.toString.call(n)),j(n)&&(f=" "+Date.prototype.toUTCString.call(n)),E(n)&&(f=" "+u(n)),0!==o.length||w&&0!=n.length?i<0?x(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=w?function(e,t,n,i,r){for(var a=[],o=0,c=t.length;o<c;++o)_(t,String(o))?a.push(g(e,t,n,i,String(o),!0)):a.push("");return r.forEach((function(r){r.match(/^\d+$/)||a.push(g(e,t,n,i,r,!0))})),a}(e,n,i,c,o):o.map((function(t){return g(e,n,i,c,t,w)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,f,S)):S[0]+f+S[1]}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,n,i,r,a){var o,c,h;if((h=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?c=h.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):h.set&&(c=e.stylize("[Setter]","special")),_(i,r)||(o="["+r+"]"),c||(e.seen.indexOf(h.value)<0?(c=b(n)?s(e,h.value,null):s(e,h.value,n-1)).indexOf("\n")>-1&&(c=a?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),v(o)){if(a&&r.match(/^\d+$/))return c;(o=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+c}function d(e){return Array.isArray(e)}function p(e){return"boolean"==typeof e}function b(e){return null===e}function m(e){return"number"==typeof e}function y(e){return"string"==typeof e}function v(e){return void 0===e}function x(e){return w(e)&&"[object RegExp]"===S(e)}function w(e){return"object"==typeof e&&null!==e}function j(e){return w(e)&&"[object Date]"===S(e)}function E(e){return w(e)&&("[object Error]"===S(e)||e instanceof Error)}function O(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(o)&&(o=i.env.NODE_DEBUG||""),e=e.toUpperCase(),!c[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=i.pid;c[e]=function(){var i=t.format.apply(t,arguments);r.error("%s %d: %s",e,n,i)}}else c[e]=function(){};return c[e]},t.inspect=h,h.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},h.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=p,t.isNull=b,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=y,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=x,t.isObject=w,t.isDate=j,t.isError=E,t.isFunction=O,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(20384);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){r.log("%s - %s",T(),t.format.apply(t,arguments))},t.inherits=n(35717),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),i=n.length;i--;)e[n[i]]=t[n[i]];return e}},51900:(e,t,n)=>{"use strict";function i(e,t,n,i,r,a,o,c){var h,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=h):r&&(h=c?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),h)if(l.functional){l._injectStyles=h;var f=l.render;l.render=function(e,t){return h.call(t),f(e,t)}}else{var s=l.beforeCreate;l.beforeCreate=s?[].concat(s,h):[h]}return{exports:e,options:l}}n.d(t,{Z:()=>i})}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&i&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,o.d(r,a),r},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".js?v="+{vendors:"4cd3665a40640c14698d",editor:"a2f2b708fd8a7e819504","editor-rich":"32e52d6e476483354cc2","editor-guest":"f9f1066de382f2fadbd7","editor-collab":"7c365e98665bd2477a4a","highlight/1c":"0f34b871f8c27e510e17","highlight/abnf":"8418b3ca5aa2e0eeb3c4","highlight/accesslog":"193cab61f30a53474dbe","highlight/actionscript":"0160963adaeb03ddd2c6","highlight/ada":"cc4b4ffbf5a0e1a5ec8b","highlight/angelscript":"8ddf3d212233d9b5d349","highlight/apache":"72f935a30bf76305118e","highlight/applescript":"1e9ee111f9b130c52b53","highlight/arcade":"59adfc67d4bcc08c2810","highlight/arduino":"a35c152603b219918de2","highlight/armasm":"aa7928811dfd7acca71e","highlight/asciidoc":"5e49bf358dff3a434bb5","highlight/aspectj":"a2a8d760536a4f13c37b","highlight/autohotkey":"e48e8ee7320dc1d41f1d","highlight/autoit":"b087d9f3df127b6f31ef","highlight/avrasm":"7351adc4c5a2b520e145","highlight/awk":"9280cedb1849fc2503f6","highlight/axapta":"5c94f8e339425d53c56c","highlight/bash":"3e08b678c76e7afcb673","highlight/basic":"0b8a47af85eb555ad6a2","highlight/bnf":"4327271aec0f057c456a","highlight/brainfuck":"5950bb598b9d18901ee6","highlight/c":"062fd29b76965186e158","highlight/c-like":"50e84f62f963bfafa8cf","highlight/cal":"53c4da115fdbffc2f2de","highlight/capnproto":"9e7efe184f2fc3a5af4d","highlight/ceylon":"43da80a84f2eb93f720b","highlight/clean":"71225d5d4380dd7048b4","highlight/clojure":"0ff7a321eaadebf5e5fb","highlight/clojure-repl":"3d6923be929c0dfc5d9b","highlight/cmake":"bb6eea18e36693d3ee13","highlight/coffeescript":"6e6181f1de7fa33148ed","highlight/coq":"c39819510b96d6cfb79b","highlight/cos":"74a18b2f35747e898a1f","highlight/cpp":"ad08ed7df166597ca2e2","highlight/crmsh":"ec26a272d9782da0b519","highlight/crystal":"22a8072ddd7e969dad2b","highlight/csharp":"0efe866f49e12f8de1a1","highlight/csp":"043cec96608f2cfcf047","highlight/css":"115e6d0d4e5d8ec71143","highlight/d":"e20dc6578c553c76df9e","highlight/dart":"9218710803b503539db5","highlight/delphi":"0b54cb13f30a122dbea7","highlight/diff":"819d809d356c1ee4eb20","highlight/django":"89830db6a41e301cce77","highlight/dns":"af2765f9ae46628c9565","highlight/dockerfile":"62cdcf0cb24fd6b61150","highlight/dos":"2ed3283e268aac974fa4","highlight/dsconfig":"124e85dc67da77f9845e","highlight/dts":"af197a3bcd13bc490400","highlight/dust":"5f35802987033434cb45","highlight/ebnf":"f8826c4c127555845dfe","highlight/elixir":"9b970f6e5c5da7e8be77","highlight/elm":"d265f834285ab083405d","highlight/erb":"f97f07bef5de5cd5ccb7","highlight/erlang":"e85c22e0a73b8f946cbf","highlight/erlang-repl":"13af5babcc1d96d49b1f","highlight/excel":"87a77806dead994ab831","highlight/fix":"f2c13e8eee7875209d09","highlight/flix":"3db0a27e87fc2b296bc9","highlight/fortran":"e1ca86e222884da48c5b","highlight/fsharp":"d7f7b88414c75b644a4f","highlight/gams":"56e2b35ae27faf9ec8ca","highlight/gauss":"2f6fc7cca2b60afc2169","highlight/gcode":"7482c63b28c6e37ce175","highlight/gherkin":"f6041bfda6dfef745d56","highlight/glsl":"7597744f3846e8583bb8","highlight/gml":"cd405c1d8b442c1cd526","highlight/go":"2da572dcbd780c83a0bb","highlight/golo":"a89c8fdf271c5666244c","highlight/gradle":"51f15768233fb16ecfcf","highlight/groovy":"611d4fffe534495c31dd","highlight/haml":"376ec34cc81c891a76c7","highlight/handlebars":"d3447656b23949b619bb","highlight/haskell":"0468f3b1820450c5be84","highlight/haxe":"d6abe758f138d6bda2df","highlight/hsp":"6f33c58fd045e30f55c7","highlight/htmlbars":"dc4b38300f44fd29ef3b","highlight/http":"9b6fc091276cb385fee8","highlight/hy":"9493f77ee2949df78ad8","highlight/inform7":"a8bc9be6d212baf40a5b","highlight/ini":"399de0961c87502704e9","highlight/irpf90":"0498a9096261dc00c41c","highlight/isbl":"c9992936bebb8d7c0e8e","highlight/java":"3f2e32ee6b208bacefb2","highlight/javascript":"f41fdd2311fe601d335c","highlight/jboss-cli":"ca5d2a7fadea70abe0ff","highlight/json":"6f01d5e9b7f5427511d6","highlight/julia":"9a709fa2d834074d82d0","highlight/julia-repl":"f0aa3861f2820d6f7253","highlight/kotlin":"1a66da6784688d9385d7","highlight/lasso":"8cd5478ecc8768f5bfac","highlight/latex":"754ba25a9464ac0955c1","highlight/ldif":"d7f533e68999813ed035","highlight/leaf":"25b890170307c55819e4","highlight/less":"022a9c5c6d9ed842ac60","highlight/lisp":"cdd7d85922bde4958488","highlight/livecodeserver":"58ffe911972a028d00a3","highlight/livescript":"3d3ec0e18c0a6660927a","highlight/llvm":"43eef0a5bd764187e261","highlight/lsl":"d92e7a1c24b0d40decb6","highlight/lua":"7c6170f808f255b99294","highlight/makefile":"d2ad48950cf526c190ba","highlight/markdown":"e5155bdcc53e608f4c8c","highlight/mathematica":"37310e26599d2fa0d787","highlight/matlab":"7bf2d1fc58185d5227fe","highlight/maxima":"5ebd5f6c6666944140fe","highlight/mel":"6087c6e693748fb62cec","highlight/mercury":"47eb7dff494e73181321","highlight/mipsasm":"b4f37537ff29fda0feda","highlight/mizar":"442ef5dd9351647cfb81","highlight/mojolicious":"590c0909ac9eaf4dee63","highlight/monkey":"9745324172105d02ff67","highlight/moonscript":"147e03bd5401d0ef8497","highlight/n1ql":"0a461253e33a5955677b","highlight/nginx":"180d2b9be577d0a8cbdb","highlight/nim":"b377cd1fea559ce62544","highlight/nix":"05352ca9653c7282aa17","highlight/node-repl":"275f7ff741f507fb80cd","highlight/nsis":"13e9b33585e18196bbd4","highlight/objectivec":"f81c6c2fc5b9e6688fcf","highlight/ocaml":"9d81673eb0fc551c22da","highlight/openscad":"2c85a68daec3413e3272","highlight/oxygene":"9217cd47de23253bcd1b","highlight/parser3":"8c1c867375b9d6ea241b","highlight/perl":"7ac2f549f93a35960e69","highlight/pf":"f1f964ec3112bb56bd61","highlight/pgsql":"09d649186af68a00cf2c","highlight/php":"56a4de60f4b5ae1676b9","highlight/php-template":"39cbc717a221e0d5709e","highlight/plaintext":"44612fa299b99eed5a02","highlight/pony":"6e9139e244ee11496eb7","highlight/powershell":"3f54a1218b72bfd8b882","highlight/processing":"6ca0dc8250b886abd5b4","highlight/profile":"50329c2981699e2ff007","highlight/prolog":"327c9c2c315ce7f44c0b","highlight/properties":"0b7c5b3b911a74024862","highlight/protobuf":"8958e54c816bf43847cf","highlight/puppet":"1258761ae45e56983094","highlight/purebasic":"3428b33743aa198fbc71","highlight/python":"a9fbdf5051a47e429f77","highlight/python-repl":"8660c7e4ce2a9e63fd1e","highlight/q":"d68456df812d162520ab","highlight/qml":"91f409e0521389b99f13","highlight/r":"cadc06e542742d6723f3","highlight/reasonml":"e64dce93807f3b6affbe","highlight/rib":"3cfb22df561ade15d2d4","highlight/roboconf":"663408ebf7b80c1fd3f0","highlight/routeros":"e84fd048f06cfbd08d03","highlight/rsl":"b274c9ef636b31c93baf","highlight/ruby":"b74985c4e859bf2ec971","highlight/ruleslanguage":"954ba414a83283b9ebf8","highlight/rust":"00c3e472c5aace5bc1e4","highlight/sas":"7e0604e24a38f09b8926","highlight/scala":"36a231ab91010d272638","highlight/scheme":"862ccf7690ba73c5ddd7","highlight/scilab":"3972a2c91d5ecc778527","highlight/scss":"5c0c0e4989e20d7c6cfd","highlight/shell":"8ca180eb913c9d91b2df","highlight/smali":"2f3751eec5877ed1904e","highlight/smalltalk":"3be6545d5c63418d1a33","highlight/sml":"c5e37b1d25ce8a3d1872","highlight/sqf":"8c8c1d9654b3d66ed64d","highlight/sql":"81e132b850e931228dc2","highlight/sql_more":"5cec38aef73a369a9c2f","highlight/stan":"becf5baa6c3a20abae7c","highlight/stata":"1e672390f18b628f0984","highlight/step21":"5045d7d55a9c0858fd26","highlight/stylus":"327d8d8622adbdf6c049","highlight/subunit":"a086d4603c5773688c9a","highlight/swift":"33f811c40feba3b770b6","highlight/taggerscript":"56713876575881defc74","highlight/tap":"139f8239eddd5edc527f","highlight/tcl":"ed67f303b4116a78ea24","highlight/thrift":"4086b619f4366174c5c2","highlight/tp":"c570905e1377b233e7a4","highlight/twig":"aae6cb3f6c7e56d6e91f","highlight/typescript":"670010fe7e7e5bee4e96","highlight/vala":"e0d361119856cce3a577","highlight/vbnet":"e1038a5979596e54cd56","highlight/vbscript":"cf0204920d10671ea08c","highlight/vbscript-html":"2391befe8dec9447f542","highlight/verilog":"15ac71690f335ff8fd15","highlight/vhdl":"2aacb5ea49adab19ef42","highlight/vim":"95b56e8a65b48da113b8","highlight/x86asm":"4c39a528f099a64418c3","highlight/xl":"58aceb6b3d280cdfca43","highlight/xml":"72b45292d5519d0bbd99","highlight/xquery":"ae4cdbcba5d2ef7cc102","highlight/yaml":"aea56642f33dab609351","highlight/zephir":"514f70b5e05f5c056707","files-modal":"ca6ca9e857b5701c5f72"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="@nextcloud/text:",o.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var c,h;if(void 0!==r)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==i+r){c=s;break}}c||(h=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",i+r),c.src=e),n[e]=[t];var u=(t,i)=>{c.onerror=c.onload=null,clearTimeout(g);var r=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(i))),t)return t(i)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),h&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j="viewer",o.p="/apps/text/js/",(()=>{o.b=document.baseURI||self.location.href;var e={viewer:0};o.f.j=(t,n)=>{var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise(((n,r)=>i=e[t]=[n,r]));n.push(i[2]=r);var a=o.p+o.u(t),c=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,i[1](c)}}),"chunk-"+t,t)}};var t=(t,n)=>{var i,r,[a,c,h]=n,l=0;if(a.some((t=>0!==e[t]))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(h)h(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0,(()=>{"use strict";const e={name:"ViewerComponent",components:{EditorWrapper:function(){return Promise.all([o.e("vendors"),o.e("editor")]).then(o.bind(o,67508))}},props:{filename:{type:String,default:null},fileid:{type:Number,default:null},active:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!0},shareToken:{type:String,default:null},mime:{type:String,default:null}},beforeMount:function(){void 0!==this.$parent.$parent&&this.$parent.$parent.onResize&&window.removeEventListener("resize",this.$parent.$parent.onResize)}};var t=o(93379),n=o.n(t),i=o(7795),r=o.n(i),a=o(90569),c=o.n(a),h=o(3565),l=o.n(h),f=o(19216),s=o.n(f),u=o(44589),g=o.n(u),d=o(84451),p={};p.styleTagTransform=g(),p.setAttributes=l(),p.insert=c().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=s();n()(d.Z,p);d.Z&&d.Z.locals&&d.Z.locals;const b=(0,o(51900).Z)(e,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("EditorWrapper",{attrs:{"file-id":e.fileid,"relative-path":e.filename,active:e.active,autofocus:e.autofocus,"share-token":e.shareToken,mime:e.mime}})}),[],!1,null,null,null).exports;var m=o(74411),y=o(25108);function v(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}o.nc=btoa(OC.requestToken),o.p=OC.linkTo("text","js/"),void 0===OCA.Viewer?y.error("Viewer app is not installed"):OCA.Viewer.registerHandler({id:"text",mimes:[].concat(v(m.lF),v(m.w_)),component:b,group:null,theme:"default"})})()})();
//# sourceMappingURL=text-viewer.js.map?v=1e4f6ebe9ea91f691f95