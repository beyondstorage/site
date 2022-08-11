"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[573],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4723:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"\u4ecb\u7ecd",sidebar_position:1},s=void 0,p={unversionedId:"pairs/index",id:"pairs/index",isDocsHomePage:!1,title:"\u4ecb\u7ecd",description:"Pair is a core idea in go-storage, which used to carry optional arguments.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/pairs/index.md",sourceDirName:"pairs",slug:"/pairs/index",permalink:"/zh-CN/docs/go-storage/pairs/index",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/pairs/index.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"2022/8/11",sidebarPosition:1,frontMatter:{title:"\u4ecb\u7ecd",sidebar_position:1},sidebar:"docs",previous:{title:"query_sign_http_write",permalink:"/zh-CN/docs/go-storage/operations/storage_http_signer/query_sign_http_write"},next:{title:"content_md5",permalink:"/zh-CN/docs/go-storage/pairs/content_md5"}},u=[{value:"Available Pairs",id:"available-pairs",children:[]},{value:"Default Pairs",id:"default-pairs",children:[{value:"Defaultable Pair",id:"defaultable-pair",children:[]}]},{value:"Feature Pairs",id:"feature-pairs",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Pair")," is a core idea in ",(0,i.kt)("inlineCode",{parentName:"p"},"go-storage"),", which used to carry optional arguments."),(0,i.kt)("p",null,"There are two kinds of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pair"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Global Pair: Defined in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/beyondstorage/specs/blob/master/definitions/pairs.toml"},"specs"),", shared across all services."),(0,i.kt)("li",{parentName:"ul"},"System Pair: Defined in service's ",(0,i.kt)("inlineCode",{parentName:"li"},"service.toml")," pairs section, only available in current service.")),(0,i.kt)("h2",{id:"available-pairs"},"Available Pairs"),(0,i.kt)("p",null,"We will document all global pair here and leave system pairs in service's documents."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./content_md5/"},"content_md5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./content_type/"},"content_type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./continuation_token/"},"continuation_token")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./credential/"},"credential")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./endpoint/"},"endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./expire/"},"expire")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./interceptor/"},"interceptor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./list_mode/"},"list_mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./location/"},"location")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./name/"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./offset/"},"offset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./pair_policy/"},"pair_policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./multipart_id/"},"multipart_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./io_callback/"},"io_callback")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./size/"},"size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./work_dir/"},"work_dir"))),(0,i.kt)("h2",{id:"default-pairs"},"Default Pairs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go-storage")," provides a mechanism to allow user pass default pairs for every operation during ",(0,i.kt)("inlineCode",{parentName:"p"},"NewServicer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NewStorager"),"."),(0,i.kt)("p",null,"Any service that supports this mechanism will generate system pairs called ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultServicePairs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultStoragePairs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type DefaultStoragePairs struct {\n    CompleteMultipart []Pair\n    Create            []Pair\n    CreateMultipart   []Pair\n    Delete            []Pair\n    List              []Pair\n    ListMultipart     []Pair\n    Metadata          []Pair\n    Read              []Pair\n    Stat              []Pair\n    Write             []Pair\n    WriteMultipart    []Pair\n}\n\nfunc WithDefaultStoragePairs(v DefaultStoragePairs) Pair {\n    return Pair{\n        Key:   pairDefaultStoragePairs,\n        Value: v,\n    }\n}\n")),(0,i.kt)("p",null,"User can use pass default pairs like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'store, err := s3.NewStorager(\n    s3.WithDefaultStoragePairs(s3.DefaultStoragePairs{\n        Write: []types.Pair{\n            s3.WithStorageClass("STANDARD_IA"),\n        },\n    }),\n)\n')),(0,i.kt)("p",null,"As in example, every call to ",(0,i.kt)("inlineCode",{parentName:"p"},"Write")," will specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_class")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"STANDARD_IA"),"."),(0,i.kt)("h3",{id:"defaultable-pair"},"Defaultable Pair"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defaultable")," property for pair is introduced to set default value for pair, and the pair of operations with the same name will share the default value."),(0,i.kt)("p",null,"Default pairs will be generated for ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultable")," pairs, and the generated pair for defaultable global pair is still global:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Defaultable global pair in pairs.\nfunc WithDefualtContentType(v string) Pair {\n    return Pair{\n        Key:   "enable_content_type",\n        Value: v,\n    }\n}\n\n// Defualtable system pair in service.\nfunc WithDefaultStorageClass(v string) Pair {\n    return Pair{\n        Key:   "default_storage_class",\n        Value: v,\n    }\n}\n')),(0,i.kt)("p",null,"User can use default pairs like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'store, err := s3.NewStorager(\n    s3.WithDefaultStorageClass("STANDARD_IA"),\n    pairs.WithDefualtContentType("application/octet-stream"),\n)\n')),(0,i.kt)("p",null,"As in example, pairs of operations in the service with the same name ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_class")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"content_type")," will share the default values."),(0,i.kt)("h2",{id:"feature-pairs"},"Feature Pairs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go-storage")," provides a mechanism of userland optional abilities for service during ",(0,i.kt)("inlineCode",{parentName:"p"},"NewServicer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NewStorager"),"."),(0,i.kt)("p",null,"Any service that supports this mechanism will generate system pairs called ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageFeatures")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceFeatures"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type StorageFeatures struct {\n    LoosePair bool\n    VirtualDir bool\n}\n\nfunc WithStorageFeatures(v StorageFeatures) Pair {\n    return Pair{\n        Key:   "storage_features",\n        Value: v,\n    }\n}\n')),(0,i.kt)("p",null,"Enable feature pairs will be generated for each feature in service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func WithEnableVirtualDir() Pair {\n    return Pair{\n        Key:   "enable_virtual_dir",\n        Value: true,\n    }\n}\n')),(0,i.kt)("p",null,"User can enable features like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"store, err := s3.NewStorager(\n    s3.WithStorageFeatures(s3.StorageFeatures{\n        VirtualDir:  true,\n    }),\n)\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"store, err := s3.NewStorager(\n    s3.WithEnableVirtualDir(),\n)\n")),(0,i.kt)("p",null,"As in the above examples, the service will support simulated dir behavior."))}d.isMDXComponent=!0}}]);