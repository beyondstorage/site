"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7760],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(l,".").concat(f)]||b[f]||u[f]||a;return r?o.createElement(d,c(c({ref:t},p),{},{components:r})):o.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2828:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),c=["components"],i={},l=void 0,s={unversionedId:"operations/blocker/create_block",id:"operations/blocker/create_block",isDocsHomePage:!1,title:"create_block",description:"create_block is used to create a block object.",source:"@site/docs/go-storage/operations/blocker/create_block.md",sourceDirName:"operations/blocker",slug:"/operations/blocker/create_block",permalink:"/docs/go-storage/operations/blocker/create_block",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/blocker/create_block.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"8/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"combine_block",permalink:"/docs/go-storage/operations/blocker/combine_block"},next:{title:"list_block",permalink:"/docs/go-storage/operations/blocker/list_block"}},p=[{value:"Behavior",id:"behavior",children:[]}],u={toc:p};function b(e){var t=e.components,r=(0,n.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create_block")," is used to create a block object."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CreateBlock SHOULD NOT return an error as the object exist.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Service that has native support for ",(0,a.kt)("inlineCode",{parentName:"li"},"overwrite")," doesn't NEED to check the object exists or not."),(0,a.kt)("li",{parentName:"ul"},"Service that doesn't have native support for ",(0,a.kt)("inlineCode",{parentName:"li"},"overwrite")," SHOULD check and delete the object if exists.")))))}b.isMDXComponent=!0}}]);