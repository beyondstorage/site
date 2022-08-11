"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8152],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3240:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={},s=void 0,l={unversionedId:"services/ipfs",id:"services/ipfs",isDocsHomePage:!1,title:"ipfs",description:"InterPlanetary File System(IPFS)",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/services/ipfs.md",sourceDirName:"services",slug:"/services/ipfs",permalink:"/zh-CN/docs/go-storage/services/ipfs",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/services/ipfs.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"2022/8/11",frontMatter:{},sidebar:"docs",previous:{title:"hdfs",permalink:"/zh-CN/docs/go-storage/services/hdfs"},next:{title:"kodo",permalink:"/zh-CN/docs/go-storage/services/kodo"}},c=[{value:"Project",id:"project",children:[]},{value:"Config",id:"config",children:[{value:"Storager",id:"storager",children:[]}]},{value:"Implementation",id:"implementation",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"InterPlanetary File System(IPFS)")),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://go.beyondstorage.io/services/ipfs"},"https://go.beyondstorage.io/services/ipfs")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("h3",{id:"storager"},"Storager"),(0,o.kt)("h4",{id:"available-pairs"},"Available Pairs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-CN/docs/go-storage/pairs/endpoint"},"endpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"endpoint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gateway"),(0,o.kt)("td",{parentName:"tr",align:null},"Y"),(0,o.kt)("td",{parentName:"tr",align:null},"gateway")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-CN/docs/go-storage/pairs/work_dir"},"work_dir")),(0,o.kt)("td",{parentName:"tr",align:null},"N"),(0,o.kt)("td",{parentName:"tr",align:null},"work dir")))),(0,o.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"Init storager (see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/index#how-to-initialize-a-servicerstorager"},"this page")," for details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "go.beyondstorage.io/services/ipfs"\n    "go.beyondstorage.io/v5/services"\n)\n\nstore, err := services.NewStoragerFromString("ipfs:///<work_dir>?endpoint=<ipfs_http_api_endpoint>&gateway=<ipfs_http_gateway>") // endpoint example: http:127.0.0.1:5001\nif err != nil {\n    log.Fatalf("ipfs new service: %v", err)\n}\n\n')),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"This service implements following interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/storager/index"},"Storager"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/copy"},"Copier"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/move"},"Mover"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/go-storage/operations/storage_http_signer/query_sign_http_read"},"QuerySignHTTPRead")))))}d.isMDXComponent=!0}}]);