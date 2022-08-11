"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5059],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"BeyondStorage 2021Q4 Roadmap",author:"Xuanwo",author_url:"https://github.com/Xuanwo",tags:["roadmap"]},s=void 0,u={permalink:"/blog/2021/09/26/2021q4-roadmap",editUrl:"https://github.com/beyondstorage/site/edit/master/blog/2021-09-26-2021q4-roadmap.md",source:"@site/blog/2021-09-26-2021q4-roadmap.md",title:"BeyondStorage 2021Q4 Roadmap",description:"Hello, my name is xuanwo and on behalf of the BeyondStorage community, I would like to announce BeyondStorage's goals and plans for 2021Q4.",date:"2021-09-26T00:00:00.000Z",formattedDate:"September 26, 2021",tags:[{label:"roadmap",permalink:"/blog/tags/roadmap"}],readingTime:2.995,truncated:!1,authors:[{name:"Xuanwo",url:"https://github.com/Xuanwo"}],nextItem:{title:"2021-36 Weekly Report",permalink:"/blog/2021/09/12/weekly-report"}},c={authorsImageUrls:[void 0]},p=[{value:"Mission",id:"mission",children:[]},{value:"Roadmap",id:"roadmap",children:[{value:"BeyondTP",id:"beyondtp",children:[]},{value:"BeyondCTL",id:"beyondctl",children:[]}]}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hello, my name is xuanwo and on behalf of the BeyondStorage community, I would like to announce BeyondStorage's goals and plans for 2021Q4."),(0,r.kt)("h2",{id:"mission"},"Mission"),(0,r.kt)("p",null,"Let me start by introducing the mission and vision of BeyondStorage."),(0,r.kt)("p",null,"BeyondStorage will always focus on ",(0,r.kt)("strong",{parentName:"p"},"Building Open Source Cross-Cloud Data Services for the Multi-Cloud Era")," to power digital transformation driven by multi-cloud strategies, our vision is to ",(0,r.kt)("strong",{parentName:"p"},"Let data flow freely between storage platforms"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application developers don't need to care about the compatibility of the underlying storage"),(0,r.kt)("li",{parentName:"ul"},"Service providers can deploy on any platform without anxiety about single-vendor lock-in"),(0,r.kt)("li",{parentName:"ul"},"Users' data can flow freely between storage platforms")),(0,r.kt)("p",null,"We expect to solve the following problems for users with multi-cloud data services that are available across clouds."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data access: Access data from ",(0,r.kt)("strong",{parentName:"li"},"any")," storage service via ",(0,r.kt)("strong",{parentName:"li"},"any")," open protocol"),(0,r.kt)("li",{parentName:"ul"},"Data Management: Manage storage platforms through ",(0,r.kt)("strong",{parentName:"li"},"unified")," management applications"),(0,r.kt)("li",{parentName:"ul"},"Data Migration: Migrate data between ",(0,r.kt)("strong",{parentName:"li"},"any")," storage services"),(0,r.kt)("li",{parentName:"ul"},"Data Backup: Backup data from ",(0,r.kt)("strong",{parentName:"li"},"any")," storage service to another service")),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"In 2021Q4, we plan to focus on the following projects."),(0,r.kt)("h3",{id:"beyondtp"},"BeyondTP"),(0,r.kt)("p",null,"First is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/beyond-tp"},"BeyondTP"),": a cross-cloud data migration service."),(0,r.kt)("p",null,"It can support data migration between any storage services, concurrent multi-node migration, breakpoint migration, and incremental migration. In addition, it has a graphical management interface that allows users to easily create/submit migration tasks and view the progress of the migration from a native client or web page. We expect BeyondTP to become an open-source, neutral, and efficient new option for data migration."),(0,r.kt)("p",null,"Over the past year, ongoing staff changes have caused us to postpone the release of BeyondTP, and in Q4 we will be giving BeyondTP more love. We plan to deliver the first preview version of BeyondTP in 2021Q4, in which users will be able to use the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Migrate data between any storage service (25 services are expected to be supported)"),(0,r.kt)("li",{parentName:"ul"},"Create/submit/manage migration tasks via command line or graphical interface"),(0,r.kt)("li",{parentName:"ul"},"Flexible deployment: scaling from single-node to multi-node migrations")),(0,r.kt)("p",null,"Until we release a preview version, we plan to release a test version every month to get feedback from the community."),(0,r.kt)("h3",{id:"beyondctl"},"BeyondCTL"),(0,r.kt)("p",null,"Then there's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/beyond-ctl"},"BeyondCTL"),": a cross-cloud data management tool."),(0,r.kt)("p",null,"It can manage any storage service, view/list/add/delete files, copy/move/sync between storage services, count the number and size of files in a directory, generate publicly accessible links, and more."),(0,r.kt)("p",null,"We expect BeyondCTL to be a replacement for great tools like s3cmd, azcopy, s3ctl, etc., allowing users to manage all their storage services with just one tool installed."),(0,r.kt)("p",null,"We plan to deliver the first stable version of BeyondCTL in 2021Q4, in which users will be able to use the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"profile: easily switch between multiple stores"),(0,r.kt)("li",{parentName:"ul"},"ls: list a directory"),(0,r.kt)("li",{parentName:"ul"},"cp: Copy files or folders between services"),(0,r.kt)("li",{parentName:"ul"},"mv: move files or folders between services"),(0,r.kt)("li",{parentName:"ul"},"rm: Delete a file or folder"),(0,r.kt)("li",{parentName:"ul"},"sync: synchronize files or folders between services"),(0,r.kt)("li",{parentName:"ul"},"stat: View information about a specified file or folder"),(0,r.kt)("li",{parentName:"ul"},"cat: Outputs the contents of a file to standard output"),(0,r.kt)("li",{parentName:"ul"},"tee: writes the contents of standard input to a file"),(0,r.kt)("li",{parentName:"ul"},"sign: Sign the specified file so that it can be accessed publicly"),(0,r.kt)("li",{parentName:"ul"},"create/delete: Creates or deletes a storage service"),(0,r.kt)("li",{parentName:"ul"},"config: Modify the configuration of the storage service")),(0,r.kt)("p",null,"Before we release the final stable version, we plan to release a test version every two weeks to get feedback from the community."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This is our development plan for 2021Q4, please let us know what you think. We look forward to all the comments and suggestions from the community!"))}d.isMDXComponent=!0}}]);