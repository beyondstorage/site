"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8837],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),f=a,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},7729:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],i={},c=void 0,s={unversionedId:"operations/appender/create_append",id:"operations/appender/create_append",isDocsHomePage:!1,title:"create_append",description:"create_append is used to create an appendable object.",source:"@site/docs/go-storage/operations/appender/create_append.md",sourceDirName:"operations/appender",slug:"/operations/appender/create_append",permalink:"/docs/go-storage/operations/appender/create_append",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/operations/appender/create_append.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"8/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"commit_append",permalink:"/docs/go-storage/operations/appender/commit_append"},next:{title:"write_append",permalink:"/docs/go-storage/operations/appender/write_append"}},u=[{value:"Behavior",id:"behavior",children:[]}],d={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create_append")," is used to create an appendable object."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CreateAppend SHOULD create an appendable object with position 0 and size 0."),(0,o.kt)("li",{parentName:"ul"},"CreateAppend SHOULD NOT return an error as the object exist.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Service SHOULD check and delete the object if exists.")))))}l.isMDXComponent=!0}}]);