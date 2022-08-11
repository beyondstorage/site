"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3457],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2363:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"2021-20 Weekly Report",author:"Prnyself",author_url:"https://github.com/Prnyself",tags:["updates","weekly-report"]},p=void 0,s={permalink:"/zh-CN/blog/2021/05/21/weekly-report",editUrl:"https://github.com/beyondstorage/site/edit/master/blog/2021-05-21-weekly-report.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2021-05-21-weekly-report.md",title:"2021-20 Weekly Report",description:"Hello everyone, here is the weekly report for BeyondStorage, range from 2021-05-17 to 2021-05-21.",date:"2021-05-21T00:00:00.000Z",formattedDate:"2021\u5e745\u670821\u65e5",tags:[{label:"updates",permalink:"/zh-CN/blog/tags/updates"},{label:"weekly-report",permalink:"/zh-CN/blog/tags/weekly-report"}],readingTime:2.395,truncated:!0,authors:[{name:"Prnyself",url:"https://github.com/Prnyself"}],prevItem:{title:"Why and what's Beyond Storage",permalink:"/zh-CN/blog/2021/05/21/beyondstorage"},nextItem:{title:"2021-19 Weekly Report",permalink:"/zh-CN/blog/2021/05/14/weekly-report"}},u={authorsImageUrls:[void 0]},m=[{value:"\u5e94\u7528",id:"\u5e94\u7528",children:[{value:"dm",id:"dm",children:[]}]},{value:"\u5e93",id:"\u5e93",children:[{value:"Organization Rename",id:"organization-rename",children:[]},{value:"Local Function Metadata",id:"local-function-metadata",children:[]},{value:"Multipart upload part number check in go-service-qingstor",id:"multipart-upload-part-number-check-in-go-service-qingstor",children:[]}]},{value:"\u793e\u533a",id:"\u793e\u533a",children:[{value:"\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212 - \u6691\u671f2021",id:"\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212---\u6691\u671f2021",children:[]}]}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello everyone, here is the weekly report for ",(0,o.kt)("a",{parentName:"p",href:"https://beyondstorage.io"},"BeyondStorage"),", range from 2021-05-17 to 2021-05-21."),(0,o.kt)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,o.kt)("h3",{id:"dm"},"dm"),(0,o.kt)("p",null,"In order to make it easier for users to use the service without having to manually enter authentication information (e.g. ak, sk, hmac, etc.) and service endpoint information each time, we have added identity management-related functionality to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.figma.com/file/tZBW1fMDLlcdFpaHJYih9B/Data-Migration-Prototype?node-id=1191%3A5"},"prototype"),". The identity information needs to be stored persistently and can be reused when adding tasks at the ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),". The identity information needs to be stored persistently and can be reused when adding tasks at the ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),"."),(0,o.kt)("p",null,"So ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Prnyself"},"@Prnyself")," made a proposal ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/dm/pull/69"},"DMP-69: Add identity management APIs"),", to add identity management APIs, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"credential")," information can be reused by resolving the ",(0,o.kt)("inlineCode",{parentName:"p"},"identity"),"."),(0,o.kt)("p",null,"This proposal is now still implementing, for more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/dm/pull/69"},"DMP-69: Add identity management APIs"),"."),(0,o.kt)("h2",{id:"\u5e93"},"\u5e93"),(0,o.kt)("h3",{id:"organization-rename"},"Organization Rename"),(0,o.kt)("p",null,"Yeah, you may notice that we have renamed our organization from AOS, because it\u2019s hard to explain to users or developers what Application Oriented Storage really means."),(0,o.kt)("p",null,"So after a discussion, we renamed our organization into ",(0,o.kt)("inlineCode",{parentName:"p"},"BeyondStorage"),", which indicates our abstraction is ",(0,o.kt)("inlineCode",{parentName:"p"},"beyond the existing storage services"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/JinnyYi"},"@JinnyYi")," is now implementing changing links and module names in our projects, and you are welcome to make your PR to help us, please take ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/pull/73/"},"GSP-73: Organization Rename")," as a guidance."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bokket"},"@bokket")," is also helping add more information"),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://forum.beyondstorage.io/t/organization-name-changing-proposal/38"},"Organization Name Changing Proposal"),"."),(0,o.kt)("h3",{id:"local-function-metadata"},"Local Function Metadata"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Metadata")," is a function to retrieve Storage's Metadata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Metadata(pairs ...Pair) (meta *StorageMeta, err error)\nMetadataWithContext(ctx context.Context, pairs ...Pair) (meta *StorageMeta)\n")),(0,o.kt)("p",null,"However, we will not send API/RPC call in this function, a.k.a., this function never returns errors. Our user still need to check them: Our user still need to check them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"meta, err := s.Metadata()\nif err != nil {\n    return err\n}\n")),(0,o.kt)("p",null,"So ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Xuanwo"},"@xuanwo")," made this proposal ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/pull/76/"},"GSP-76: Local Function Metadata")," to make ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata")," a local function which will not need a ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," param and not return an error."),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/issues/579"},"Implement GSP-76 Local Function Metadata"),"."),(0,o.kt)("h3",{id:"multipart-upload-part-number-check-in-go-service-qingstor"},"Multipart upload part number check in go-service-qingstor"),(0,o.kt)("p",null,"As we mentioned in ",(0,o.kt)("a",{parentName:"p",href:"/blog/2021/05/14/weekly-report#multipart-upload-part-number-check-in-go-service-qingstor"},"last week's report"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xiongjiwei"},"@xiongjiwei")," made his first PR ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-qingstor/pull/48"},"storage: Check if part number is valid when multipart upload"),", which is formally merged this week. Thanks for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xiongjiwei"},"@xiongjiwei"),"'s contribution! Thanks for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xiongjiwei"},"@xiongjiwei"),"'s contribution!"),(0,o.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,o.kt)("h3",{id:"\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212---\u6691\u671f2021"},"\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212 - \u6691\u671f2021"),(0,o.kt)("p",null,"This week, we added two more projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/go-service-gdrive"},"go-storage \u7684 Google Drive \u5b9e\u73b0"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Mentor: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Xuanwo"},"@xuanwo")),(0,o.kt)("li",{parentName:"ul"},"Issue: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/go-service-gdrive/issues/2"},"https://github.com/beyondstorage/go-service-gdrive/issues/2")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/go-service-onedrive"},"go-storage \u7684 OneDrive \u5b9e\u73b0"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Mentor: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/xxchan"},"@xxchan")),(0,o.kt)("li",{parentName:"ul"},"Issue: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/go-service-onedrive/issues/2"},"https://github.com/beyondstorage/go-service-onedrive/issues/2"))))),(0,o.kt)("p",null,"You are welcome to keep an eye on our forum: ",(0,o.kt)("a",{parentName:"p",href:"https://forum.beyondstorage.io"},"https://forum.beyondstorage.io"),", where all event-related announcements will be posted."),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://beyondstorage.io/community/events/ospp-summer-2021"},"https://beyondstorage.io/community/events/ospp-summer-2021"),"."),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);