import{g as x,r as o}from"./index-Bjc78XoC.js";var u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var p;function l(){return p||(p=1,function(s){(function(){var i={}.hasOwnProperty;function r(){for(var t="",n=0;n<arguments.length;n++){var e=arguments[n];e&&(t=c(t,f(e)))}return t}function f(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var e in t)i.call(t,e)&&t[e]&&(n=c(n,e));return n}function c(t,n){return n?t?t+" "+n:t+n:t}s.exports?(r.default=r,s.exports=r):window.classNames=r})()}(u)),u.exports}var m=l();const v=x(m),B=["xxl","xl","lg","md","sm","xs"],C="xs",a=o.createContext({prefixes:{},breakpoints:B,minBreakpoint:C});function E(s,i){const{prefixes:r}=o.useContext(a);return s||r[i]||i}function b(){const{breakpoints:s}=o.useContext(a);return s}function y(){const{minBreakpoint:s}=o.useContext(a);return s}function A(){const{dir:s}=o.useContext(a);return s==="rtl"}export{A as a,b,v as c,y as d,E as u};
