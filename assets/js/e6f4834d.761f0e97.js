"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8982],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,u=m["".concat(c,".").concat(f)]||m[f]||d[f]||l;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8791:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={},c="profile",p={unversionedId:"commands/profile",id:"commands/profile",isDocsHomePage:!1,title:"profile",description:"BeyondCTL support multiple profiles so that we can switch between different services quickly.",source:"@site/docs/beyond-ctl/commands/profile.md",sourceDirName:"commands",slug:"/commands/profile",permalink:"/docs/beyond-ctl/commands/profile",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/beyond-ctl/commands/profile.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"8/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"mv",permalink:"/docs/beyond-ctl/commands/mv"},next:{title:"rm",permalink:"/docs/beyond-ctl/commands/rm"}},s=[{value:"Add new profile",id:"add-new-profile",children:[]},{value:"List profiles",id:"list-profiles",children:[]},{value:"Remove profile",id:"remove-profile",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"profile"},"profile"),(0,l.kt)("p",null,"BeyondCTL support multiple profiles so that we can switch between different services quickly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NAME:\n   byctl profile - manage profile in config file\n\nUSAGE:\n   byctl profile command [command options] [arguments...]\n\nCOMMANDS:\n   add      add profile [name] [connection_string]\n   list     list profiles\n   remove   remove profile [name]\n   help, h  Shows a list of commands or help for one command\n\nOPTIONS:\n   --help, -h  show help (default: false)\n")),(0,l.kt)("h2",{id:"add-new-profile"},"Add new profile"),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"byctl profile add")," to add new profiles via connection string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"byctl profile add example s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To know more about connection string, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/go-storage/operations/index"},"connection string docs"),".")),(0,l.kt)("p",null,"Also, BeyondCTL supports add temporary profiles via env ",(0,l.kt)("inlineCode",{parentName:"p"},"BEYOND_CTL_PROFILE_<name>"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"BEYOND_CTL_PROFILE_EXAMPLE=s3://<bucketname>/path?credential=hmac:<access_key>:<secret_key>&endpoint=https:<example.com>&location=<region> beyondctl cp test.mp4 example:/test.mp4\n")),(0,l.kt)("p",null,"The profile will not be persisted in config file which is suitable for running inside container or CI/CD."),(0,l.kt)("h2",{id:"list-profiles"},"List profiles"),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"byctl profile list")," to list profiles that already added."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"byctl profile list\n")),(0,l.kt)("h2",{id:"remove-profile"},"Remove profile"),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"byctl profile remove")," to remove specified profile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"byctl profile remove example\n")))}m.isMDXComponent=!0}}]);