"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[509],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5305:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={},l=void 0,c={unversionedId:"pairs/credential",id:"pairs/credential",isDocsHomePage:!1,title:"credential",description:"credential is used to carry credential data to connect the service.",source:"@site/docs/go-storage/pairs/credential.md",sourceDirName:"pairs",slug:"/pairs/credential",permalink:"/docs/go-storage/pairs/credential",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/pairs/credential.md",tags:[],version:"current",lastUpdatedBy:"npofsi | N/P\u7845",lastUpdatedAt:1629944107,formattedLastUpdatedAt:"8/26/2021",frontMatter:{},sidebar:"docs",previous:{title:"continuation_token",permalink:"/docs/go-storage/pairs/continuation_token"},next:{title:"endpoint",permalink:"/docs/go-storage/pairs/endpoint"}},s=[{value:"Supported Operation",id:"supported-operation",children:[]},{value:"Format",id:"format",children:[]},{value:"Supported Protocols",id:"supported-protocols",children:[{value:"hmac",id:"hmac",children:[]},{value:"apikey",id:"apikey",children:[]},{value:"file",id:"file",children:[]},{value:"env",id:"env",children:[]},{value:"base64",id:"base64",children:[]},{value:"basic",id:"basic",children:[]}]}],d={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"credential")," is used to carry credential data to connect the service."),(0,i.kt)("h2",{id:"supported-operation"},"Supported Operation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NewServicer"),(0,i.kt)("li",{parentName:"ul"},"NewStorager")),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"credential")," including two parts: ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," which devided by ",(0,i.kt)("inlineCode",{parentName:"p"},":"),"."),(0,i.kt)("h2",{id:"supported-protocols"},"Supported Protocols"),(0,i.kt)("p",null,"We support following ",(0,i.kt)("inlineCode",{parentName:"p"},"credential")," protocols."),(0,i.kt)("h3",{id:"hmac"},"hmac"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hmac")," has two values: ",(0,i.kt)("inlineCode",{parentName:"p"},"access_key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"secret_key"),"."),(0,i.kt)("p",null,"format: ",(0,i.kt)("inlineCode",{parentName:"p"},"hmac:<access_key>:<secret_key>"),"\nexample: ",(0,i.kt)("inlineCode",{parentName:"p"},"hmac:example_access_key:example_secret_key")),(0,i.kt)("h3",{id:"apikey"},"apikey"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," has one value: ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key"),"."),(0,i.kt)("p",null,"format: ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey:<api_key>"),"\nexample: ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey:example_api_key")),(0,i.kt)("h3",{id:"file"},"file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file")," has one value: ",(0,i.kt)("inlineCode",{parentName:"p"},"file_path"),", service will decide how to use this file."),(0,i.kt)("p",null,"format: ",(0,i.kt)("inlineCode",{parentName:"p"},"file:<file_path>"),"\nexample: ",(0,i.kt)("inlineCode",{parentName:"p"},"file:/path/to/file")),(0,i.kt)("h3",{id:"env"},"env"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"env")," has no values, service will read credential from runtime environment."),(0,i.kt)("p",null,"format: ",(0,i.kt)("inlineCode",{parentName:"p"},"env"),"\nexample: ",(0,i.kt)("inlineCode",{parentName:"p"},"env")),(0,i.kt)("h3",{id:"base64"},"base64"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"base64")," has one value: ",(0,i.kt)("inlineCode",{parentName:"p"},"base64"),", storage service like gcs will take token files as input, we provide base64 protocol so that user can pass token binary data directly."),(0,i.kt)("p",null,"format: ",(0,i.kt)("inlineCode",{parentName:"p"},"base64:<base64_content>"),"\nexample: ",(0,i.kt)("inlineCode",{parentName:"p"},"base64:exmaple_base64_content")),(0,i.kt)("h3",{id:"basic"},"basic"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"basic")," has two values: ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")),(0,i.kt)("p",null,"format: ",(0,i.kt)("inlineCode",{parentName:"p"},"basic:<user>:<password>"),"\nexample: ",(0,i.kt)("inlineCode",{parentName:"p"},"basic:example_user:example_password")))}u.isMDXComponent=!0}}]);