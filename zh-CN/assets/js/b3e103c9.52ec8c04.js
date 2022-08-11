"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[273],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},295:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Iterator"},c=void 0,u={unversionedId:"internal/iterator",id:"internal/iterator",isDocsHomePage:!1,title:"Iterator",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-go-storage/current/internal/iterator.md",sourceDirName:"internal",slug:"/internal/iterator",permalink:"/zh-CN/docs/go-storage/internal/iterator",editUrl:"https://github.com/beyondstorage/site/edit/master/docs/go-storage/internal/iterator.md",tags:[],version:"current",lastUpdatedBy:"zhouyang",lastUpdatedAt:1660215943,formattedLastUpdatedAt:"2022/8/11",frontMatter:{title:"Iterator"},sidebar:"docs",previous:{title:"Integration Tests",permalink:"/zh-CN/docs/go-storage/internal/integration-tests"},next:{title:"Migrate Reach to QuerySignHTTPRead",permalink:"/zh-CN/docs/go-storage/internal/migrate-reach-to-querysignhttpread"}},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Internal Implementation",id:"internal-implementation",children:[]},{value:"How to implement NextObjectFunc?",id:"how-to-implement-nextobjectfunc",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Iterator")," is an important part of go-storage APIs. ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator")," is an important part of go-storage APIs. All ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),"-alike operations will return a storage-typed ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator"),". In this document, we will describe exactly how it is implemented and how to use it. In this document, we will describe exactly how it is implemented and how to use it."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"Storager.List")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectIterator")," for example, other iterator should be similar.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ObjectIterator")," provides two public APIs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (it *ObjectIterator) Next() (object *Object, err error)\nfunc (it *ObjectIterator) ContinuationToken() string\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Next()")," will return an object or an error."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the error is ",(0,i.kt)("inlineCode",{parentName:"li"},"nil"),", the Object MUST be valid."),(0,i.kt)("li",{parentName:"ul"},"When there are no more objects, ",(0,i.kt)("inlineCode",{parentName:"li"},"ObjectIterator")," will return an ",(0,i.kt)("inlineCode",{parentName:"li"},"IteratorDone")," error.")),(0,i.kt)("p",null,"So the most common case will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'it, err := store.List("path/to/example")\nif err != nil {\n   return\n}\nfor {\n   o, err := it.Next()\n   if err != nil && errors.Is(err, IteratorDone) {\n      break\n    }\n    if err != nil {\n       return err\n    }\n    // handle object.\n}\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ContinuationToken()")," will return a token that reflects the current internal state of the iterator. We can use this token to create the same iterator so that we can resume an iteration. We can use this token to create the same iterator so that we can resume an iteration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The token defined by services and SHOULD be fetched from the iterator"),(0,i.kt)("li",{parentName:"ul"},"The token is meaningless outside list operations.")),(0,i.kt)("p",null,"So the most common case will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Fetch token from the iterator and save to file or other places.\ntoken := it.ContinuationToken()\n\n// Use this token to construct new iterator.\n// Fetch token from the iterator and save to file or other places.\ntoken := it.ContinuationToken()\n\n// Use this token to construct new iterator.\nnit, err := store.List("path/to/example", pairs.WithContinuationToken(token))\nif err != nil {\n   return err\n}\n')),(0,i.kt)("h2",{id:"internal-implementation"},"Internal Implementation"),(0,i.kt)("p",null,"All iterators are generated via our code generator under ",(0,i.kt)("inlineCode",{parentName:"p"},"internal/cmd/iterator"),". In this section, we care more about the internal logic of iterator and ignore the code generate. In this section, we care more about the internal logic of iterator and ignore the code generate."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ObjectIterator")," will hold the following things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"ObjectPage")," which carries the current object page. an ",(0,i.kt)("inlineCode",{parentName:"li"},"ObjectPage")," which carries the current object page. Every page includes the current status and a slice of objects to be consumed."),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"NextObjectFunc")," which used to fetch next object page."),(0,i.kt)("li",{parentName:"ul"},"Other flags to mark the internal status.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type NextObjectFunc func(ctx context.Context, page *ObjectPage) error\n\ntype ObjectPage struct {\n   Status Continuable\n   Data   []*Object\n}\n\ntype ObjectIterator struct {\n   ctx  context.Context\n   next NextObjectFunc\n\n   index int\n   done  bool\n\n   o ObjectPage\n}\n")),(0,i.kt)("p",null,"So the logic is simple:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ObjectIterator")," will call ",(0,i.kt)("inlineCode",{parentName:"li"},"NextObjectFunc")," to fetch new ",(0,i.kt)("inlineCode",{parentName:"li"},"ObjectPage")),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"NextObjectFunc")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"IteratorDone"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ObjectIterator")," will not call ",(0,i.kt)("inlineCode",{parentName:"li"},"NextObjectFunc")," anymore."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ObjectIterator")," will return an Object in ",(0,i.kt)("inlineCode",{parentName:"li"},"ObjectPage")," everytime user calls ",(0,i.kt)("inlineCode",{parentName:"li"},"Next()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ObjectIterator")," will return ",(0,i.kt)("inlineCode",{parentName:"li"},"IteratorDone")," if no more objects.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (it *ObjectIterator) Next() (object *Object, err error) {\n   // Consume Data via index.\n   func (it *ObjectIterator) Next() (object *Object, err error) {\n   // Consume Data via index.\n   if it.index < len(it.o.Data) {\n      it.index++\n      return it.o.Data[it.index-1], nil\n   }\n   // Return IterateDone if iterator is already done.\n   if it.done {\n      return nil, IterateDone\n   }\n\n   // Reset buf before call next.\n   it.o.Data = it.o.Data[:0]\n\n   err = it.next(it.ctx, &it.o)\n   if err != nil && !errors.Is(err, IterateDone) {\n      return nil, fmt.Errorf("iterator next failed: %w", err)\n   }\n   // Make iterator to done so that we will not fetch from upstream anymore.\n   if err != nil {\n      it.done = true\n   }\n   // Return IterateDone directly if we don\'t have any data.\n   if len(it.o.Data) == 0 {\n      return nil, IterateDone\n   }\n   // Return the first object.\n   it.index = 1\n   return it.o.Data[0], nil\n}\n   if it.done {\n      return nil, IterateDone\n   }\n\n   // Reset buf before call next.\n   it.o.Data = it.o.Data[:0]\n\n   err = it.next(it.ctx, &it.o)\n   if err != nil && !errors.Is(err, IterateDone) {\n      return nil, fmt.Errorf("iterator next failed: %w", err)\n   }\n   // Make iterator to done so that we will not fetch from upstream anymore.\n   if err != nil {\n      it.done = true\n   }\n   // Return IterateDone directly if we don\'t have any data.\n   if len(it.o.Data) == 0 {\n      return nil, IterateDone\n   }\n   // Return the first object.\n   it.index = 1\n   return it.o.Data[0], nil\n}\n')),(0,i.kt)("h2",{id:"how-to-implement-nextobjectfunc"},"How to implement NextObjectFunc?"),(0,i.kt)("p",null,"Implement ",(0,i.kt)("inlineCode",{parentName:"p"},"NextObjectFunc")," is the most complex thing in implement ",(0,i.kt)("inlineCode",{parentName:"p"},"Storager.List"),". We will provide an example and explain why we should do this. We will provide an example and explain why we should do this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type objectPageStatus struct {\n   delimiter string\n   maxKeys   int64\n   prefix    string\n}\n\nfunc (s *Storage) list(ctx context.Context, path string, opt pairStorageList) (oi *ObjectIterator, err error) {\n   input := &objectPageStatus{\n      maxKeys: 200,\n      prefix:  s.getAbsPath(path),\n   }\n\n   var nextFn NextObjectFunc\n\n   switch {\n   case opt.ListMode.IsDir():\n      input.delimiter = "/"\n      nextFn = s.nextObjectPageByDir\n   default:\n      return nil, services.ListModeInvalidError{Actual: opt.ListMode}\n   }\n\n   return NewObjectIterator(ctx, nextFn, input), nil\n}\n\nfunc (s *Storage) nextObjectPageByDir(ctx context.Context, page *ObjectPage) error {\n   input := page.Status.(*objectPageStatus)\n\n   // construct API input via objectPageStatus.\n   ...\n\n   // Send API call only once.\n   output, err := s.service.ListObjectsV2WithContext(ctx, listInput)\n   if err != nil {\n      return err\n   }\n\n   // Handle and parse output to object\n   ...\n\n   // Return IterateDone when this is no more data.\n   if !aws.BoolValue(output.IsTruncated) {\n      return IterateDone\n   }\n\n   input.continuationToken = *output.NextContinuationToken\n   return nil\n}\n   ...\n\n   // Send API call only once.\n   output, err := s.service.ListObjectsV2WithContext(ctx, listInput)\n   if err != nil {\n      return err\n   }\n\n   // Handle and parse output to object\n   ...\n\n   // Return IterateDone when this is no more data.\n   if !aws.BoolValue(output.IsTruncated) {\n      return IterateDone\n   }\n\n   input.continuationToken = *output.NextContinuationToken\n   return nil\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can use ",(0,i.kt)("inlineCode",{parentName:"li"},"objectPageStatus")," to store the status that is used to send API calls."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"List")," has different ",(0,i.kt)("inlineCode",{parentName:"li"},"ListMode"),", we need to support ",(0,i.kt)("inlineCode",{parentName:"li"},"ListModeDir")," as least."),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"nextObjectPageByDir"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Don't use the ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," loop, our iterator already handles it."),(0,i.kt)("li",{parentName:"ul"},"Don't read the whole list, this will consume too much memory.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We can specify a ",(0,i.kt)("inlineCode",{parentName:"li"},"limit")," when the service API supports."))),(0,i.kt)("li",{parentName:"ul"},"Don't store returned slices in ",(0,i.kt)("inlineCode",{parentName:"li"},"objectPageStatus"),", handle and parse them directly to ",(0,i.kt)("inlineCode",{parentName:"li"},"page.Data"),"."),(0,i.kt)("li",{parentName:"ul"},"Return ",(0,i.kt)("inlineCode",{parentName:"li"},"IterateDone")," when this is no more data.")))))}d.isMDXComponent=!0}}]);