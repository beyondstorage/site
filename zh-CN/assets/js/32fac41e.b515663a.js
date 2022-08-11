"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2341],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1340:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),a=["components"],p={},i="cp",c={unversionedId:"commands/cp",id:"commands/cp",isDocsHomePage:!1,title:"cp",description:"BeyondCTL \u652f\u6301\u5728\u5b58\u50a8\u670d\u52a1\u4e4b\u95f4\u590d\u5236\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-beyond-ctl/current/commands/cp.md",sourceDirName:"commands",slug:"/commands/cp",permalink:"/zh-CN/docs/beyond-ctl/commands/cp",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/beyond-ctl/commands/cp.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"2022/8/11",frontMatter:{},sidebar:"docs",previous:{title:"cat",permalink:"/zh-CN/docs/beyond-ctl/commands/cat"},next:{title:"ls",permalink:"/zh-CN/docs/beyond-ctl/commands/ls"}},s=[{value:"Copy directory",id:"copy-directory",children:[]},{value:"\u901a\u8fc7\u5206\u6bb5\u4e0a\u4f20\u52a0\u901f\u590d\u5236",id:"\u901a\u8fc7\u5206\u6bb5\u4e0a\u4f20\u52a0\u901f\u590d\u5236",children:[]},{value:"\u901f\u5ea6\u9650\u5236",id:"\u901f\u5ea6\u9650\u5236",children:[]},{value:"\u9650\u5236\u5e76\u53d1\u6570\u91cf",id:"\u9650\u5236\u5e76\u53d1\u6570\u91cf",children:[]}],d={toc:s};function u(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cp"},"cp"),(0,o.kt)("p",null,"BeyondCTL \u652f\u6301\u5728\u5b58\u50a8\u670d\u52a1\u4e4b\u95f4\u590d\u5236\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"NAME:\n   byctl cp - copy file from source storager to target storager\n\nUSAGE:\n   byctl cp [command options] [source] [target]\n\nOPTIONS:\n   --multipart-threshold value  Specify multipart threshold. If source file size is larger than this value, beyondctl will use multipart method to copy file. (default: 1GB) [$BEYOND_CTL_MULTIPART_THRESHOLD]\n   --workers value              Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]\n   --read-speed-limit value     Specify speed limit for read I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_READ_SPEED_LIMIT]\n   --write-speed-limit value    Specify speed limit for write I/O operations, for example, 1MB, 10mb, 3GiB. [$BEYOND_CTL_WRITE_SPEED_LIMIT]\n   --recursive, -r, -R          copy directories recursively (default: false)\n   --help, -h                   show help (default: false)\n")),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"byctl cp test.mp4 example:/test.mp4\n")),(0,o.kt)("h2",{id:"copy-directory"},"Copy directory"),(0,o.kt)("p",null,"BeyondCTL supports copy directory."),(0,o.kt)("p",null,"By default, BeyondCTL does not switch to the copy directory, we can specify the copy directory with ",(0,o.kt)("inlineCode",{parentName:"p"},"--recursive"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-R"),"."),(0,o.kt)("p",null,"For example, we copy the local directory ",(0,o.kt)("inlineCode",{parentName:"p"},"testDir")," to the service specified by profile example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"byctl cp -r testDir example:/testDir\n")),(0,o.kt)("h2",{id:"\u901a\u8fc7\u5206\u6bb5\u4e0a\u4f20\u52a0\u901f\u590d\u5236"},"\u901a\u8fc7\u5206\u6bb5\u4e0a\u4f20\u52a0\u901f\u590d\u5236"),(0,o.kt)("p",null,"BeyondCTL \u652f\u6301\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/docs/go-storage/operations/multiparter/index"},"Multipart")," \u52a0\u5feb\u590d\u5236\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"By default, BeyondCTL will switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart")," method while the source file is larger than 1 GiB. We can specify the threshold by ",(0,o.kt)("inlineCode",{parentName:"p"},"--multipart-threshold"),": \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"--multipart-directly")," \u6307\u5b9a\u9608\u503c\uff1a"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c \u6211\u4eec\u53ef\u4ee5\u5c06\u9608\u503c\u964d\u4f4e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"100MB"),"  \u4ee5\u5f3a\u5236 beyondctl \u4e3a\u5927\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"100MB")," \u7684\u6587\u4ef6\u4f7f\u7528\u5206\u6bb5\u4e0a\u4f20\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"byctl cp --multipart-threshold=100MiB test.mp4 example:/test.mp4\n")),(0,o.kt)("h2",{id:"\u901f\u5ea6\u9650\u5236"},"\u901f\u5ea6\u9650\u5236"),(0,o.kt)("p",null,"\u6709\u65f6\uff0c\u6211\u4eec\u4e0d\u60f3\u8981 beyondctl \u4f7f\u7528\u592a\u591a\u8d44\u6e90\u3002 \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"--read-speedlimit")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"--rardspeedlimit")," \u6765\u9650\u5236\u8bfb\u53d6\u6216\u5199\u5165\u901f\u5ea6\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5168\u5c40\u8bfb\u53d6\u901f\u5ea6\u9650\u5236\u4e3a 1 MiB\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"byctl cp --read-speed-limit=1MiB test.mp4 example:/test.mp4\n")),(0,o.kt)("h2",{id:"\u9650\u5236\u5e76\u53d1\u6570\u91cf"},"\u9650\u5236\u5e76\u53d1\u6570\u91cf"),(0,o.kt)("p",null,"BeyondCTL \u9ed8\u8ba4\u91c7\u53d6\u5e76\u53d1\u7684\u65b9\u5f0f\u590d\u5236\u6587\u4ef6\u3002 \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"--workers")," \u63a7\u5236\u5e76\u884c\u6570\u91cf\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," \u5de5\u4f5c\u8005\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u5de5\u4eba\u4eba\u6570\u589e\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"byctl cp --workers=10 test.mp4 example:/test.mp4\n")))}u.isMDXComponent=!0}}]);