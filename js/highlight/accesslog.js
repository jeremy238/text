(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[3],{459:function(e,n,a){"use strict";function r(e){return e?"string"==typeof e?e:e.source:null}function l(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var l=n.map((function(e){return r(e)})).join("");return l}function i(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var l="("+n.map((function(e){return r(e)})).join("|")+")";return l}e.exports=function(e){var n=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:l(/"/,i.apply(void 0,n)),end:/"/,keywords:n,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}}}]);
//# sourceMappingURL=accesslog.js.map?v=95dde638007ffb49e9ea