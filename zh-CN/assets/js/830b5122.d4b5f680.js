"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4721],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5376:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={},c="stat",i={unversionedId:"commands/stat",id:"commands/stat",isDocsHomePage:!1,title:"stat",description:"BeyondCTL support  get file or storage infos.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-beyond-ctl/current/commands/stat.md",sourceDirName:"commands",slug:"/commands/stat",permalink:"/zh-CN/docs/beyond-ctl/commands/stat",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/beyond-ctl/commands/stat.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"2022/8/11",frontMatter:{},sidebar:"docs",previous:{title:"rm",permalink:"/zh-CN/docs/beyond-ctl/commands/rm"},next:{title:"tee",permalink:"/zh-CN/docs/beyond-ctl/commands/tee"}},p=[{value:"Stat file",id:"stat-file",children:[]},{value:"Stat storage",id:"stat-storage",children:[]},{value:"\u9650\u5236\u5e76\u53d1\u6570\u91cf",id:"\u9650\u5236\u5e76\u53d1\u6570\u91cf",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stat"},"stat"),(0,o.kt)("p",null,"BeyondCTL support  get file or storage infos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"NAME:\n   byctl stat - get file or storage info\n\nUSAGE:\n   byctl stat [command options] [source]\n\nOPTIONS:\n   --workers value         Specify the workers number (default: 4) [$BEYOND_CTL_WORKERS]\n   --json                  Output in json format (default: false)\n   --help, -h              show help (default: false)\n")),(0,o.kt)("h2",{id:"stat-file"},"Stat file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"byctl stat example:/test.jpg\n")),(0,o.kt)("p",null,"The above command will output the basic information of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"test.jpg")," in service ",(0,o.kt)("inlineCode",{parentName:"p"},"example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ID: path/to/workdir/test.jpg\nPath: test.jpg\nMode: Read\nLastModified: 2021-10-25 09:06:57 +0000 UTC\nEtag: "7e4611c52075590896dd26905ac0c4cf"\nContentType: image/jpeg\n\nSystemMetadata: \nStorageClass: STANDARD\nxxxxxxxxx: xxx\n\nUserMetadata: \nxxxx: xxxx\nxxx: xxx  \n')),(0,o.kt)("p",null,"If we need json output, we can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"byctl stat --json example:/test.jpg\n")),(0,o.kt)("h2",{id:"stat-storage"},"Stat storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"byctl stat example:\n")),(0,o.kt)("p",null,"The above command will output basic information about the storager of the ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," service(Added via profile, qingstor)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Service: qingstor\nBucketName: test-stat\nWorkDir: /path/to/workdir/\nLocation: sh1a\n")),(0,o.kt)("p",null,"If we need json output, we can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"byctl stat --json example:\n")),(0,o.kt)("h2",{id:"\u9650\u5236\u5e76\u53d1\u6570\u91cf"},"\u9650\u5236\u5e76\u53d1\u6570\u91cf"),(0,o.kt)("p",null,"BeyondCTL support concurrency stat be default. \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"--workers")," \u63a7\u5236\u5e76\u884c\u6570\u91cf\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," \u5de5\u4f5c\u8005\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u5de5\u4eba\u4eba\u6570\u589e\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"byctl stat --workers=10 example:/test.jpg\n")))}d.isMDXComponent=!0}}]);