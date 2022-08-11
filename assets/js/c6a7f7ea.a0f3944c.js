"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3705],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7475:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"BeyondStorage 2021Q3 Roadmap",author:"Xuanwo",author_url:"https://github.com/Xuanwo",tags:["roadmap"]},s=void 0,u={permalink:"/blog/2021/08/06/2021q3-roadmap",editUrl:"https://github.com/beyondstorage/site/edit/master/blog/2021-08-06-2021q3-roadmap.md",source:"@site/blog/2021-08-06-2021q3-roadmap.md",title:"BeyondStorage 2021Q3 Roadmap",description:"Hello everyone, in this article, we will announce our 2021Q3 roadmap.",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"roadmap",permalink:"/blog/tags/roadmap"}],readingTime:1.59,truncated:!1,authors:[{name:"Xuanwo",url:"https://github.com/Xuanwo"}],prevItem:{title:"2021-31 Weekly Report",permalink:"/blog/2021/08/08/weekly-report"},nextItem:{title:"2021-30 Weekly Report",permalink:"/blog/2021/08/01/weekly-report"}},c={authorsImageUrls:[void 0]},p=[{value:"Background",id:"background",children:[]},{value:"Roadmap",id:"roadmap",children:[{value:"More Services Connected",id:"more-services-connected",children:[]},{value:"More Releases for BeyondTP",id:"more-releases-for-beyondtp",children:[]},{value:"More Scene Expansion",id:"more-scene-expansion",children:[]}]}],d={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello everyone, in this article, we will announce our 2021Q3 roadmap."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"Before starting our plan, let\u2019s revisit our architecture."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(654).Z})),(0,a.kt)("p",null,"In the past year:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"go-storage API has been more and more stable, with no big break changes anymore."),(0,a.kt)("li",{parentName:"ul"},"Up to 21 services have been or are under development."),(0,a.kt)("li",{parentName:"ul"},"BeyondTP has released several beta versions.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We have many ideas so far, all of them are listed in ",(0,a.kt)("a",{parentName:"p",href:"https://forum.beyondstorage.io/t/beyondstorage-2021q3-roadmap-draft/164"},"BeyondStorage 2021Q3 Roadmap Draft"),", in this post, we only discuss our roadmap.")),(0,a.kt)("p",null,"Now we have a solid foundation to support us to go higher and further, we have to think about where BeyondStorage should go."),(0,a.kt)("h2",{id:"roadmap"},"Roadmap"),(0,a.kt)("h3",{id:"more-services-connected"},"More Services Connected"),(0,a.kt)("p",null,"For now, we have 21 supported services: 9 of them are stable, 1 of them is beta, 11 of them are under development."),(0,a.kt)("p",null,"In 2021Q3, we will expand them to 30 services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Services already implemented will become stable."),(0,a.kt)("li",{parentName:"ul"},"9 more services will be implemented.")),(0,a.kt)("p",null,"After 2021Q3, BeyondStorage will connect almost all major storage services in the world."),(0,a.kt)("h3",{id:"more-releases-for-beyondtp"},"More Releases for BeyondTP"),(0,a.kt)("p",null,"BeyondTP is a neutral data migration service that is built upon go-storage. In the past several months, our development speed is too slow. In 2021Q3, we will accelerate iteration speed."),(0,a.kt)("p",null,"After 2021Q3, we will release a usable version of BeyondTP."),(0,a.kt)("h3",{id:"more-scene-expansion"},"More Scene Expansion"),(0,a.kt)("p",null,"In 2021Q3, we will expand more scenes for BeyondStorage."),(0,a.kt)("p",null,"First of all, we will try to build BeyondFS: a high-performance, POSIX-ish File System based on go-storage. In 2021Q3, we plan to build a first beta release version of BeyondFS."),(0,a.kt)("p",null,"Then, we will build an FTP server based on go-storage: BeyondFTP. This service could behave like an FTP gateway for all supported storage services."),(0,a.kt)("p",null,"Finally, we will start an incubator project: BeyondCTL. This service is a command-line tool for storage management. In this project, we will support multiple profiles that each profile can connect to different storage services."))}m.isMDXComponent=!0},654:function(e,t,r){t.Z=r.p+"assets/images/architecture-21ea1ec7a4f3581b2600648d0c639e79.svg"}}]);