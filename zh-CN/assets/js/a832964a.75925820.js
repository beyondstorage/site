"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4389],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8362:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={},c=void 0,u={unversionedId:"operations/appender/write_append",id:"operations/appender/write_append",isDocsHomePage:!1,title:"write_append",description:"write_append is used to write data into an appendable object.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/operations/appender/write_append.md",sourceDirName:"operations/appender",slug:"/operations/appender/write_append",permalink:"/zh-CN/docs/go-storage/operations/appender/write_append",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/appender/write_append.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"2022/8/11",frontMatter:{},sidebar:"docs",previous:{title:"create_append",permalink:"/zh-CN/docs/go-storage/operations/appender/create_append"},next:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/go-storage/operations/blocker/index"}},s=[{value:"Behavior",id:"behavior",children:[]}],d={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"write_append")," is used to write data into an appendable object."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"write_append")," SHOULD be a thread safe operation.")))}l.isMDXComponent=!0}}]);