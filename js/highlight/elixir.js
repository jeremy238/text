(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[52],{325:function(e,n,s){"use strict";e.exports=function(e){var n="[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?",s="and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0",a={className:"subst",begin:"#\\{",end:"}",lexemes:n,keywords:s},i={className:"string",contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},r={className:"function",beginKeywords:"def defp defmacro",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:n,endsParent:!0})]},o=e.inherit(r,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),t=[i,e.HASH_COMMENT_MODE,o,r,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[i,{begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}],relevance:0},{className:"symbol",begin:n+":(?!:)",relevance:0},{className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},{className:"variable",begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{begin:"->"},{begin:"("+e.RE_STARTERS_RE+")\\s*",contains:[e.HASH_COMMENT_MODE,{className:"regexp",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}],relevance:0}];return a.contains=t,{lexemes:n,keywords:s,contains:t}}}}]);
//# sourceMappingURL=elixir.js.map?v=f391204ed75a7692ac7c