"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8593],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(h,i(i({ref:t},d),{},{components:r})):o.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},599:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"2021-19 Weekly Report",author:"Prnyself",author_url:"https://github.com/Prnyself",tags:["updates","weekly-report"]},p=void 0,l={permalink:"/blog/2021/05/14/weekly-report",editUrl:"https://github.com/beyondstorage/site/edit/master/blog/2021-05-14-weekly-report.md",source:"@site/blog/2021-05-14-weekly-report.md",title:"2021-19 Weekly Report",description:"Hello everyone, here is the weekly report for BeyondStorage, range from 2021-05-10 to 2021-05-14.",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 14, 2021",tags:[{label:"updates",permalink:"/blog/tags/updates"},{label:"weekly-report",permalink:"/blog/tags/weekly-report"}],readingTime:4.775,truncated:!0,authors:[{name:"Prnyself",url:"https://github.com/Prnyself"}],prevItem:{title:"2021-20 Weekly Report",permalink:"/blog/2021/05/21/weekly-report"},nextItem:{title:"2021-18 Weekly Report",permalink:"/blog/2021/05/08/weekly-report"}},d={authorsImageUrls:[void 0]},c=[{value:"Library",id:"library",children:[{value:"Path Style Support for go-service-qingstor",id:"path-style-support-for-go-service-qingstor",children:[]},{value:"Idempotent Storager Delete Operation",id:"idempotent-storager-delete-operation",children:[]},{value:"BeyondStorage Error Handling",id:"beyondstorage-error-handling",children:[]},{value:"Add object mode check for operations",id:"add-object-mode-check-for-operations",children:[]},{value:"WriteMultipart returns Part",id:"writemultipart-returns-part",children:[]},{value:"Multipart upload part number check in go-service-qingstor",id:"multipart-upload-part-number-check-in-go-service-qingstor",children:[]}]},{value:"Community",id:"community",children:[{value:"Cooperation activities",id:"cooperation-activities",children:[]},{value:"Summer 2021 of Open Source Promotion Plan",id:"summer-2021-of-open-source-promotion-plan",children:[]}]}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello everyone, here is the weekly report for ",(0,a.kt)("a",{parentName:"p",href:"https://beyondstorage.io"},"BeyondStorage"),", range from 2021-05-10 to 2021-05-14."),(0,a.kt)("h2",{id:"library"},"Library"),(0,a.kt)("h3",{id:"path-style-support-for-go-service-qingstor"},"Path Style Support for go-service-qingstor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vhost")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," style are two different endpoint styles which are defined in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.qingcloud.com/qingstor/#%E5%8C%BA%E5%9F%9F%E5%8F%8A%E8%AE%BF%E9%97%AE%E5%9F%9F%E5%90%8D"},"QingStor"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Virtual-host Style: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://<bucket-name>.<zone-id>.qingstor.com/<object-name>")),(0,a.kt)("li",{parentName:"ul"},"Path Style: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://<zone-id>.qingstor.com/<bucket-name>/<object-name>"))),(0,a.kt)("p",null,"For some reason, dns is not available for vhost, so we need to use path style to detect bucket location."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/bokket"},"@bokket")," made his first commit to solve this by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-qingstor/pull/43"},"Use path style instead of vhost"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-qingstor/pull/45"},"service: Fix location not detected correctly"),". Great job!  "),(0,a.kt)("p",null,"For more details, please refer\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-qingstor/issues/1"},"QingStor detect use path style instead of vhost"),"."),(0,a.kt)("h3",{id:"idempotent-storager-delete-operation"},"Idempotent Storager Delete Operation"),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete")," to handle all object delete operations, but their behavior is not unified and well-defined."),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Xuanwo"},"@Xuanwo")," made this\nproposal: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/blob/master/rfcs/46-idempotent-delete.md"},"GSP-46: Idempotent Storager Delete Operation"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JinnyYi"},"@JinnyYi")," is now finished all the implementation in different services except ",(0,a.kt)("inlineCode",{parentName:"p"},"USS"),", which can not pass our integration tests,\nbecause ",(0,a.kt)("inlineCode",{parentName:"p"},"USS")," requires a short interval between PUT and DELETE, or we will get this error:\n",(0,a.kt)("inlineCode",{parentName:"p"},'DELETE 429 {"msg":"concurrent put or delete","code":42900007,"id":"xxx"}'),"."),(0,a.kt)("p",null,"For more details, please refer\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/issues/554"},"Implement GSP-46: Idempotent Storager Delete Operation"),"."),(0,a.kt)("h3",{id:"beyondstorage-error-handling"},"BeyondStorage Error Handling"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/xxchan"},"@xxchan")," has designed the new error handling proposal:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/blob/master/rfcs/47-additional-error-specification.md"},"GSP-47: Additional Error Specification")," last week."),(0,a.kt)("p",null,"In this week, to distinguish our errors more convenient, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xxchan"},"@xxchan")," also made the proposal:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/pull/51"},"GSP-51: Distinguish Errors by IsAosError"),", which introduces the interface ",(0,a.kt)("inlineCode",{parentName:"p"},"AosError"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type AosError interface {\n    // IsAosError SHOULD and SHOULD ONLY be implemented by error definitions in go-storage & go-service-*.\n    // We depends on the AosError interface to distinguish our errors.\n    // There's no need for user code to implement or use this function and interface.\n    IsAosError()\n}\n")),(0,a.kt)("p",null,"For now, he has finished the implementation for both proposals above in different services,\nand the ",(0,a.kt)("a",{parentName:"p",href:"/docs/go-storage/handling-errors"},"Error Handling Doc")," is also added for reference. Nicely done!"),(0,a.kt)("p",null,"For more details, please refer\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/issues/558"},"Implement GSP-47: Additional Error Specification"),"."),(0,a.kt)("h3",{id:"add-object-mode-check-for-operations"},"Add object mode check for operations"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/blob/master/rfcs/25-object-mode.md"},"GSP-25"),",\nwe added support for object modes by bit map. All available object modes are listed below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ObjectMode uint32\n// All available object mode\nconst (\n    // ModeDir means this Object represents a dir which can be used to list with dir mode.\n    ModeDir ObjectMode = 1 << iota\n    // ModeRead means this Object can be used to read content.\n    ModeRead\n    // ModeLink means this Object is a link which targets to another Object.\n    ModeLink\n    // ModePart means this Object is a Multipart Object which can be used for multipart operations.\n    ModePart\n    // ModeBlock means this Object is a Block Object which can be used for block operations.\n    ModeBlock\n    // ModePage means this Object is a Page Object which can be used for random write with offset.\n    ModePage\n    // ModeAppend means this Object is a Append Object which can be used for append.\n    ModeAppend\n)\n")),(0,a.kt)("p",null,"It is intended to check object mode at the start of specific operation. For instance, both ",(0,a.kt)("inlineCode",{parentName:"p"},"WritePart"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteAppend")," got a pointer to ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," as an input, we need to ensure this ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," is available\nfor certain operation, so we should add object mode check and\nreturn ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectModeInvalidError"),"(introduced in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/blob/master/rfcs/47-additional-error-specification.md"},"GSP-47"),") asap if ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," not fit."),(0,a.kt)("p",null,"So ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Prnyself"},"@Prnyself")," made a proposal: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/blob/master/rfcs/61-add-object-mode-check-for-operations.md"},"GSP-61: Add object mode check for operations"),"\nto generate mode check, instead of user implementation in specific actions. All the implementation for different services are finished now."),(0,a.kt)("p",null,"For more details, please refer\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/issues/557"},"Implement GSP-61 Add object mode check for operations"),"."),(0,a.kt)("h3",{id:"writemultipart-returns-part"},"WriteMultipart returns Part"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Multiparter")," is designed for multipart upload. Multipart upload is a three-step process:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CreateMultipart")," is used to initiate the upload."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WriteMultipart")," is used to upload the object parts. And ",(0,a.kt)("inlineCode",{parentName:"li"},"ListMultipart")," could be used to list all of your in-progress multipart uploads or get a list of the parts that you have uploaded for a specific multipart upload."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CompleteMultipart")," is used to complete the multipart upload after you have uploaded all the parts.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CompleteMultipart")," request must include the upload ID and a list of both part numbers and corresponding ETag values returned after those parts were uploaded in some services.\nThe ETag uniquely identifies the combined object data, not necessarily an MD5 hash of the object data. We need return ETag that we got from services to make it possible."),(0,a.kt)("p",null,"So ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JinnyYi"},"@JinnyYi")," made a proposal: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/specs/blob/master/rfcs/62-writemultipart-returns-part.md"},"GSP-62: WriteMultipart Returns Part"),",\nwhich introduced a ",(0,a.kt)("strong",{parentName:"p"},"break change"),": return ",(0,a.kt)("inlineCode",{parentName:"p"},"*Part")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteMultipart"),", which should be held and passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"CompleteMultipart")," as a param."),(0,a.kt)("p",null,"This proposal's implementation has been finished by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JinnyYi"},"@JinnyYi")," in services implemented ",(0,a.kt)("inlineCode",{parentName:"p"},"Multiparter"),", and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-integration-test"},"go-integration-tests"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/go-storage/operations/multiparter/index"},"multiparter docs")," are also updated. Good Job!"),(0,a.kt)("p",null,"For more details, please refer\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-storage/issues/571"},"Implement GSP-62: WriteMultipart returns Part"),"."),(0,a.kt)("h3",{id:"multipart-upload-part-number-check-in-go-service-qingstor"},"Multipart upload part number check in go-service-qingstor"),(0,a.kt)("p",null,"This week, we have a new contributor ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xiongjiwei"},"@xiongjiwei"),", who made his first PR in ",(0,a.kt)("inlineCode",{parentName:"p"},"go-service-qingstor"),":\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beyondstorage/go-service-qingstor/pull/48"},"storage: Check if part number is valid when multipart upload"),"."),(0,a.kt)("p",null,"This PR is still a draft now, and working in progress. Anyway, let's welcome ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xiongjiwei"},"@xiongjiwei")," !"),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("h3",{id:"cooperation-activities"},"Cooperation activities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Azure Blob Storage integration ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/benbjohnson/litestream/issues/134"},"https://github.com/benbjohnson/litestream/issues/134")),(0,a.kt)("li",{parentName:"ul"},"proposal: Integrate mediaapi with go-storage to allow store files on various storage service ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/matrix-org/dendrite/issues/1857"},"https://github.com/matrix-org/dendrite/issues/1857")),(0,a.kt)("li",{parentName:"ul"},"Integrate with go-storage to allow using various storage service as storing location ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/filecoin-project/lotus/discussions/6218"},"https://github.com/filecoin-project/lotus/discussions/6218")),(0,a.kt)("li",{parentName:"ul"},"Working with dropbox to fix their SDK",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dropbox/dropbox-sdk-go-unofficial/issues/77"},"Is there any plan to release a new version?")),(0,a.kt)("li",{parentName:"ul"},"Fixed, and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dropbox/dropbox-sdk-go-unofficial/releases/tag/v6.0.1"},"sdk v6.0.1")," was released")))),(0,a.kt)("h3",{id:"summer-2021-of-open-source-promotion-plan"},"Summer 2021 of Open Source Promotion Plan"),(0,a.kt)("p",null,"This week, we got more new hands join in, and the discussion group is getting more and more active.\nYou are welcome to keep an eye on our forum: ",(0,a.kt)("a",{parentName:"p",href:"https://forum.beyondstorage.io/"},"https://forum.beyondstorage.io/"),", where all event-related announcements will be posted."),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://beyondstorage.io/community/events/ospp-summer-2021"},"https://beyondstorage.io/community/events/ospp-summer-2021"),"."),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);