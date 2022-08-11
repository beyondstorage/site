"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5646],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5927:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={},l="sign",s={unversionedId:"commands/sign",id:"commands/sign",isDocsHomePage:!1,title:"sign",description:"BeyondCTL support get the signed URL by the source object.",source:"@site/docs/beyond-ctl/commands/sign.md",sourceDirName:"commands",slug:"/commands/sign",permalink:"/zh-CN/docs/beyond-ctl/commands/sign",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/beyond-ctl/commands/sign.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"2022/8/11",frontMatter:{},sidebar:"docs",previous:{title:"mv",permalink:"/zh-CN/docs/beyond-ctl/commands/mv"},next:{title:"cat",permalink:"/zh-CN/docs/beyond-ctl/commands/cat"}},p=[{value:"Sign with expire",id:"sign-with-expire",children:[]},{value:"Control concurrency via Workers",id:"control-concurrency-via-workers",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"sign"},"sign"),(0,c.kt)("p",null,"BeyondCTL support get the signed URL by the source object."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'NAME:\n   byctl sign - get the signed URL by the source\n\nUSAGE:\n   byctl sign [command options] [source]\n\nOPTIONS:\n   --config FILE, -c FILE  Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]\n   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]\n   --expire value          the number of seconds until the signed URL expires (default: 300)\n   --help, -h              show help (default: false)\n')),(0,c.kt)("p",null,"For example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"byctl sign example:/test.mp4\n")),(0,c.kt)("h2",{id:"sign-with-expire"},"Sign with expire"),(0,c.kt)("p",null,"By default, the created ",(0,c.kt)("inlineCode",{parentName:"p"},"URL")," expires in ",(0,c.kt)("inlineCode",{parentName:"p"},"300")," seconds. If we want to specify the expire time, we can use flag ",(0,c.kt)("inlineCode",{parentName:"p"},"--expire"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"byctl sign --expire=150 example:/test.mp4\n")),(0,c.kt)("p",null,"This command changes the expire time to 150 seconds."),(0,c.kt)("h2",{id:"control-concurrency-via-workers"},"Control concurrency via Workers"),(0,c.kt)("p",null,"BeyondCTL support concurrency sign be default. We can control the concurrent workers by ",(0,c.kt)("inlineCode",{parentName:"p"},"--workers"),"."),(0,c.kt)("p",null,"By default, we will have ",(0,c.kt)("inlineCode",{parentName:"p"},"4")," workers."),(0,c.kt)("p",null,"We can increase the workers number to ",(0,c.kt)("inlineCode",{parentName:"p"},"10")," via:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"byctl sign --workers=10 example:/test.mp4\n")))}d.isMDXComponent=!0}}]);