(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[31],{304:function(n,e,i){"use strict";n.exports=function(n){var e={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},i="[A-Za-z$_][0-9A-Za-z$_]*",s={className:"subst",begin:/#\{/,end:/}/,keywords:e},a=[n.BINARY_NUMBER_MODE,n.inherit(n.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[n.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s]},{begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,s]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[s,n.HASH_COMMENT_MODE]},{begin:"//[gim]*",relevance:0},{begin:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W)/}]},{begin:"@"+i},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];s.contains=a;var t=n.inherit(n.TITLE_MODE,{begin:i}),o={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:e,contains:["self"].concat(a)}]};return{aliases:["coffee","cson","iced"],keywords:e,illegal:/\/\*/,contains:a.concat([n.COMMENT("###","###"),n.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+i+"\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[t,o]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:"(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[o]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[t]},t]},{begin:i+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);
//# sourceMappingURL=coffeescript.js.map?v=bad8b203b7e4ac4abc60