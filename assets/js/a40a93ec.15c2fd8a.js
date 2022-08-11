"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4178],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8294:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},l="tee",p={unversionedId:"commands/tee",id:"commands/tee",isDocsHomePage:!1,title:"tee",description:"BeyondCTL support read data from standard input and output its contents to a file.",source:"@site/docs/beyond-ctl/commands/tee.md",sourceDirName:"commands",slug:"/commands/tee",permalink:"/docs/beyond-ctl/commands/tee",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/beyond-ctl/commands/tee.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"8/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"stat",permalink:"/docs/beyond-ctl/commands/stat"}},d=[{value:"Use with the cat command",id:"use-with-the-cat-command",children:[]},{value:"Tee with expected size",id:"tee-with-expected-size",children:[]},{value:"Control concurrency via Workers",id:"control-concurrency-via-workers",children:[]}],s={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tee"},"tee"),(0,a.kt)("p",null,"BeyondCTL support read data from standard input and output its contents to a file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'NAME:\n   byctl tee - used to read data from standard input and output its contents to a file\n\nUSAGE:\n   byctl tee [command options] [target]\n\nOPTIONS:\n   --config FILE, -c FILE  Load config from FILE (default: "/root/.config/byctl/config.toml") [$BEYOND_CTL_CONFIG]\n   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]\n   --expected-size value   expected size of the input file (default: "128MiB")\n   --help, -h              show help (default: false)\n')),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"byctl tee example:/testTee\n")),(0,a.kt)("h2",{id:"use-with-the-cat-command"},"Use with the cat command"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tee")," command can be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," command, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat exampleTee | byctl tee example:testTee\n")),(0,a.kt)("p",null,"This command will write the contents of the local file ",(0,a.kt)("inlineCode",{parentName:"p"},"exampleTee")," to the file with the path ",(0,a.kt)("inlineCode",{parentName:"p"},"testTee")," in the specified service ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," via the Linux pipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," connection ",(0,a.kt)("inlineCode",{parentName:"p"},"tee")," command."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tee")," command can be used with the BeyondCTL's ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," command, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"byctl cat another:testTee | byctl tee example:testTee\n")),(0,a.kt)("h2",{id:"tee-with-expected-size"},"Tee with expected size"),(0,a.kt)("p",null,"If we know the exact size of the file, we can set ",(0,a.kt)("inlineCode",{parentName:"p"},"-expected-size")," to accurately determine the part size of the file for multipart uploads. For example, the local file ",(0,a.kt)("inlineCode",{parentName:"p"},"exampleTee")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"2MiB")," in size:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat exampleTee | byctl tee --expected-size=2MiB example:testTee\n")),(0,a.kt)("h2",{id:"control-concurrency-via-workers"},"Control concurrency via Workers"),(0,a.kt)("p",null,"BeyondCTL support concurrency tee be default. We can control the concurrent workers by ",(0,a.kt)("inlineCode",{parentName:"p"},"--workers"),"."),(0,a.kt)("p",null,"By default, we will have ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," workers."),(0,a.kt)("p",null,"We can increase the workers number to ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"byctl tee --workers=10 example:testTee\n")))}u.isMDXComponent=!0}}]);