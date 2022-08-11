"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2931],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7938:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Core Concept"},p=void 0,c={unversionedId:"internal/core-concept",id:"internal/core-concept",isDocsHomePage:!1,title:"Core Concept",description:"go-storage is built upon the abstraction like the following:",source:"@site/docs/go-storage/internal/core-concept.md",sourceDirName:"internal",slug:"/internal/core-concept",permalink:"/docs/go-storage/internal/core-concept",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/internal/core-concept.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"8/11/2022",frontMatter:{title:"Core Concept"},sidebar:"docs",previous:{title:"How to bump a version",permalink:"/docs/go-storage/internal/bump-version"},next:{title:"Handling Errors",permalink:"/docs/go-storage/internal/handling-errors"}},s=[{value:"Service",id:"service",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Object",id:"object",children:[]},{value:"Operation",id:"operation",children:[]},{value:"Pair",id:"pair",children:[]},{value:"Info",id:"info",children:[{value:"Storage Metadata",id:"storage-metadata",children:[]},{value:"Object Metadata",id:"object-metadata",children:[]}]}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"go-storage")," is built upon the abstraction like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"                           +-------------+\n                           |   Service   |\n                           +------+------+\n                                  |\n               +------------------+------------------+\n               |                  |                  |\n        +------v------+    +------v------+    +------v------+\n        |   Storage   |    |   Storage   |    |   Storage   |\n        +-------------+    +------+------+    +-------------+\n                                  |\n      +-------------+-------------+-------------+-------------+\n      |             |             |             |             |\n+-----v----+  +-----v----+  +-----v----+  +-----v----+  +-----v----+\n|  Object  |  |  Object  |  |  Object  |  |  Object  |  |  Object  |\n+----------+  +----------+  +----------+  +----------+  +----------+\n")),(0,o.kt)("h2",{id:"service"},"Service"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/go-storage/operations/servicer/index"},(0,o.kt)("inlineCode",{parentName:"a"},"Servicer"))," is the interface used to maintain the storages."),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/go-storage/operations/storager/index"},(0,o.kt)("inlineCode",{parentName:"a"},"Storager"))," is the interface used to maintain the objects."),(0,o.kt)("h2",{id:"object"},"Object"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Object")," represents an Object under ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage"),"."),(0,o.kt)("p",null,"The Object could have different modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ModeRead"),": Object with ",(0,o.kt)("inlineCode",{parentName:"li"},"ModeRead")," can be read from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ModeDir"),": Object with ",(0,o.kt)("inlineCode",{parentName:"li"},"ModeDir")," will be treated as a directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ModeAppend"),": Object with ",(0,o.kt)("inlineCode",{parentName:"li"},"ModeAppend")," can be used to append data."),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"And the object could carry metadata like ",(0,o.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"content_type")," and so on. We will discuss them in section ",(0,o.kt)("a",{parentName:"p",href:"#object-metadata"},"Object Metadata"),"."),(0,o.kt)("h2",{id:"operation"},"Operation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Operation")," represents an action that we could take for a service or storage, it's the public APIs we exposed to users."),(0,o.kt)("h2",{id:"pair"},"Pair"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Pair")," is the argument we used in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Operation"),"."),(0,o.kt)("p",null,"We have two types of pair:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Global: The global shared pairs, defined in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/specs/blob/master/definitions/pairs.toml"},"pairs.toml"),"."),(0,o.kt)("li",{parentName:"ul"},"System:  The system pair that only valid inside service, defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"service.toml"),".")),(0,o.kt)("h2",{id:"info"},"Info"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Info")," represents information that we could retrieve from service, storage, or objects."),(0,o.kt)("p",null,"For now, we support the following type of information."),(0,o.kt)("h3",{id:"storage-metadata"},"Storage Metadata"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Storage Metadata")," is the metadata that we can retrieve from storage, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"work_dir"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", and so on."),(0,o.kt)("p",null,"We have two types of storage metadata:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Global: The global shared storage metadata, defined in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/specs/blob/master/definitions/info_storage_meta.toml"},"info_storage_meta.toml"),"."),(0,o.kt)("li",{parentName:"ul"},"System: The system metadata that only valid inside service, defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"service.toml"),".")),(0,o.kt)("h3",{id:"object-metadata"},"Object Metadata"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Object Metadata")," is the metadata that we can retrieve from an object, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"last_modified"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"storage_class"),", and so on."),(0,o.kt)("p",null,"We have three types of storage metadata:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Global: The global shared object metadata, defined in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/specs/blob/master/definitions/info_object_meta.toml"},"info_object_meta.toml"),"."),(0,o.kt)("li",{parentName:"ul"},"System: The system metadata that only valid inside the current service, defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"service.toml"),"."),(0,o.kt)("li",{parentName:"ul"},"User: The user metadata that is defined by users, we store them in a ",(0,o.kt)("inlineCode",{parentName:"li"},"map[string]string")," without any modification.")))}m.isMDXComponent=!0}}]);