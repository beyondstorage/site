"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3754],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7223:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={},p=void 0,l={unversionedId:"operations/multiparter/create_multipart",id:"operations/multiparter/create_multipart",isDocsHomePage:!1,title:"create_multipart",description:"create_multipart is used to create a multipart object.",source:"@site/docs/go-storage/operations/multiparter/create_multipart.md",sourceDirName:"operations/multiparter",slug:"/operations/multiparter/create_multipart",permalink:"/docs/go-storage/operations/multiparter/create_multipart",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/multiparter/create_multipart.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"8/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"complete_multipart",permalink:"/docs/go-storage/operations/multiparter/complete_multipart"},next:{title:"list_multipart",permalink:"/docs/go-storage/operations/multiparter/list_multipart"}},c=[{value:"Behavior",id:"behavior",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create_multipart")," is used to create a multipart object."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you send a request to initiate a multipart upload, the service returns a response with an upload ID, which is a unique identifier for your multipart upload. You must include this upload ID whenever you upload parts, list the parts, complete an upload, or stop an upload.")))}m.isMDXComponent=!0}}]);