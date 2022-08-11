"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7902],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),g=n,d=m["".concat(u,".").concat(g)]||m[g]||c[g]||o;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2371:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"Why and what's Beyond Storage",author:"JinnyYi",author_url:"https://github.com/JinnyYi",tags:["updates"]},u=void 0,p={permalink:"/zh-CN/blog/2021/05/21/beyondstorage",editUrl:"https://github.com/beyondstorage/site/edit/master/blog/2021-05-21-beyondstorage.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2021-05-21-beyondstorage.md",title:"Why and what's Beyond Storage",description:"Why Beyond Storage",date:"2021-05-21T00:00:00.000Z",formattedDate:"2021\u5e745\u670821\u65e5",tags:[{label:"updates",permalink:"/zh-CN/blog/tags/updates"}],readingTime:1.255,truncated:!0,authors:[{name:"JinnyYi",url:"https://github.com/JinnyYi"}],prevItem:{title:"2021-21 Weekly Report",permalink:"/zh-CN/blog/2021/05/28/weekly-report"},nextItem:{title:"2021-20 Weekly Report",permalink:"/zh-CN/blog/2021/05/21/weekly-report"}},s={authorsImageUrls:[void 0]},c=[{value:"Why Beyond Storage",id:"why-beyond-storage",children:[]},{value:"What&#39;s Beyond Storage",id:"whats-beyond-storage",children:[]}],m={toc:c};function g(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-beyond-storage"},"Why Beyond Storage"),(0,o.kt)("p",null,"Our vision is to build a fully open sourced (Under Apache 2.0) storage abstraction that production-ready, high performance, and vendor-agnostic."),(0,o.kt)("p",null,"We plan to build a storage abstraction beyond the existing storage services which provides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cross storage service through uniform interface."),(0,o.kt)("li",{parentName:"ul"},"Cross cloud application upon our library.")),(0,o.kt)("h2",{id:"whats-beyond-storage"},"What's Beyond Storage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Beyond Storage")," \u662f\u4e00\u4e2a\u8d85\u8d8a\u73b0\u6709\u5b58\u50a8\u670d\u52a1\u7684\u5b58\u50a8\u62bd\u8c61\u3002"),(0,o.kt)("p",null,"For now, we are focus on the following projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e93",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/go-storage"},"go-storage"),": The go version of Beyond Storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go-services-*"),": go-storage \u4e0d\u540c\u670d\u52a1\u7684\u5b9e\u73b0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/rs-storage"},"rs-storage"),": The rust version of Beyond Storage."))),(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/dm/"},"dm"),": The data migration services based on Beyond Storage.")))),(0,o.kt)("p",null,"In the further, we will"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support as many as services we can, see more in Service Integration Tracking.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ipfs"),(0,o.kt)("li",{parentName:"ul"},"google drive"),(0,o.kt)("li",{parentName:"ul"},"onedrive"),(0,o.kt)("li",{parentName:"ul"},"minio"),(0,o.kt)("li",{parentName:"ul"},"ftp"),(0,o.kt)("li",{parentName:"ul"},"webdav"),(0,o.kt)("li",{parentName:"ul"},"glusferfs"),(0,o.kt)("li",{parentName:"ul"},"azfile"),(0,o.kt)("li",{parentName:"ul"},"NextCloud"),(0,o.kt)("li",{parentName:"ul"},"\u2026"))),(0,o.kt)("li",{parentName:"ul"},"Bring this idea to as many as languages we can:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"rust"),(0,o.kt)("li",{parentName:"ul"},"java"),(0,o.kt)("li",{parentName:"ul"},"python"),(0,o.kt)("li",{parentName:"ul"},"javascript"),(0,o.kt)("li",{parentName:"ul"},"\u2026"))),(0,o.kt)("li",{parentName:"ul"},"Build applications upon our library",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ftp"),(0,o.kt)("li",{parentName:"ul"},"webdav"),(0,o.kt)("li",{parentName:"ul"},"object storage services (works like an API gateway)"),(0,o.kt)("li",{parentName:"ul"},"fuse (userspace file system, allow user to mount a storage service as local path)"),(0,o.kt)("li",{parentName:"ul"},"migration (allow to migrate data between storage services)"),(0,o.kt)("li",{parentName:"ul"},"backup (allow backup data between storage services)"),(0,o.kt)("li",{parentName:"ul"},"management (allow manage data between storage services)"),(0,o.kt)("li",{parentName:"ul"},"\u2026")))),(0,o.kt)("hr",null))}g.isMDXComponent=!0}}]);