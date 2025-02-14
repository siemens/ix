"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22267],{68631:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=t(97458),i=t(16436),s=t(6492);const r={},o=void 0,c={id:"auto-generated/ix-pagination/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-pagination/props.md",sourceDirName:"auto-generated/ix-pagination",slug:"/auto-generated/ix-pagination/props",permalink:"/docs/auto-generated/ix-pagination/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pagination/props.md",tags:[],version:"current",frontMatter:{}},d={},u=[];function l(e){return(0,n.jsx)(s.Z,{attributes:[{name:"advanced",description:"Advanced mode",definition:[{name:"Attribute",value:"advanced"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"count",description:"Total number of pages",definition:[{name:"Attribute",value:"count"},{name:"Type",value:"number"},{name:"Default",value:"0"}],tags:[]},{name:"i18nItems",description:"/**\n  i18n",definition:[{name:"Attribute",value:"i-1-8n-items"},{name:"Type",value:"string"},{name:"Default",value:"'Items'"}],tags:[]},{name:"i18nOf",description:"i18n",definition:[{name:"Attribute",value:"i-1-8n-of"},{name:"Type",value:"string"},{name:"Default",value:"'of'"}],tags:[]},{name:"i18nPage",description:"i18n",definition:[{name:"Attribute",value:"i-1-8n-page"},{name:"Type",value:"string"},{name:"Default",value:"'Page'"}],tags:[]},{name:"itemCount",description:"Number of items shown at once.\nCan only be changed in advaced mode.",definition:[{name:"Attribute",value:"item-count"},{name:"Type",value:"number"},{name:"Default",value:"15"}],tags:[]},{name:"selectedPage",description:"Zero based index of currently selected page",definition:[{name:"Attribute",value:"selected-page"},{name:"Type",value:"number"},{name:"Default",value:"0"}],tags:[]},{name:"showItemCount",description:"Show item count in advanced mode",definition:[{name:"Attribute",value:"show-item-count"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]}]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l()}},6492:(e,a,t)=>{t.d(a,{Z:()=>r});t(52983);var n=t(4173),i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(n.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(n.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>s});t(52983);var n=t(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var n=t(52983);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);