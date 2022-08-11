"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6175],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1036:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},s=void 0,u={unversionedId:"operations/servicer/create",id:"operations/servicer/create",isDocsHomePage:!1,title:"create",description:"create operation is used to create a storage under current service.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/operations/servicer/create.md",sourceDirName:"operations/servicer",slug:"/operations/servicer/create",permalink:"/zh-CN/docs/go-storage/operations/servicer/create",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/servicer/create.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1630043305,formattedLastUpdatedAt:"2021/8/27",frontMatter:{},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/go-storage/operations/servicer/index"},next:{title:"delete",permalink:"/zh-CN/docs/go-storage/operations/servicer/delete"}},p=[{value:"Behavior",id:"behavior",children:[]}],l={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create")," operation is used to create a storage under current service."),(0,a.kt)("p",null,"For example, in object storage services, ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," means create a bucket."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Storage service COULD return errors while the storage exists.")))}d.isMDXComponent=!0}}]);