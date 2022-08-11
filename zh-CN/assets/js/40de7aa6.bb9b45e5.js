"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[188],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7422:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"\u4ecb\u7ecd",sidebar_position:1},l=void 0,s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"\u4ecb\u7ecd",description:"BeyondCTL \u662f\u6240\u6709\u5b58\u50a8\u670d\u52a1\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-beyond-ctl/current/index.md",sourceDirName:".",slug:"/index",permalink:"/zh-CN/docs/beyond-ctl/index",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/beyond-ctl/index.md",tags:[],version:"current",lastUpdatedBy:"BeyondRobot",lastUpdatedAt:1636425482,formattedLastUpdatedAt:"2021/11/9",sidebarPosition:1,frontMatter:{title:"\u4ecb\u7ecd",sidebar_position:1},sidebar:"docs",next:{title:"mv",permalink:"/zh-CN/docs/beyond-ctl/commands/mv"}},p=[{value:"\u7279\u6027",id:"\u7279\u6027",children:[]},{value:"\u547c\u53eb\u5e2e\u52a9\uff01",id:"\u547c\u53eb\u5e2e\u52a9",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/beyond-ctl"},"BeyondCTL")," \u662f\u6240\u6709\u5b58\u50a8\u670d\u52a1\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new profile if we don't have one.\nbyctl profile add example s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region>\n# Copy local file `test.mp4` to the service specified by profile example. \nbyctl cp test.mp4 example:/test.mp4\n")),(0,a.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,a.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/beyond-ctl/commands/profile"},"profile"),": \u591a\u4e2a\u914d\u7f6e\u6587\u4ef6\u652f\u6301\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/beyond-ctl/commands/cp"},"cp"),": \u5c06\u6587\u4ef6\u4ece\u6765\u6e90\u590d\u5236\u5230\u76ee\u7684\u5730\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/beyond-ctl/commands/rm"},"rm"),": Remove file from storager."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/beyond-ctl/commands/stat"},"stat"),": Get file or storage info."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/beyond-ctl/commands/tee"},"tee"),": Pipe data from stdin into storage services."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/beyond-ctl/commands/cat"},"cat"),": Pipe data from storage services into stdout."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/beyond-ctl/commands/ls"},"ls"),": List dirs and files from storage services.")),(0,a.kt)("h2",{id:"\u547c\u53eb\u5e2e\u52a9"},"\u547c\u53eb\u5e2e\u52a9\uff01"),(0,a.kt)("p",null,"\u8fd8\u6709\u8bb8\u591a\u5de5\u4f5c\u8981\u505a\uff0c\u6211\u4eec\u6b22\u8fce\u6240\u6709\u7684 PR\u3002"),(0,a.kt)("p",null,"\u8bf7\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/beyond-ctl/issues"},"issues")," \u6765\u4e86\u89e3\u5982\u4f55\u63d0\u4f9b\u5e2e\u52a9\u3002"))}u.isMDXComponent=!0}}]);