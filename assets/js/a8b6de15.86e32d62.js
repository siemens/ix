"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9236],{91664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=a(97458),i=a(16436),s=a(6492);const r={},o=void 0,d={id:"auto-generated/ix-dropdown-item/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-dropdown-item/props.md",sourceDirName:"auto-generated/ix-dropdown-item",slug:"/auto-generated/ix-dropdown-item/props",permalink:"/docs/auto-generated/ix-dropdown-item/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown-item/props.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function m(e){return(0,n.jsx)(s.Z,{attributes:[{name:"checked",description:"Whether the item is checked or not. If true a checkmark will mark the item as checked.",definition:[{name:"Attribute",value:"checked"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"disabled",description:"Disable item and remove event listeners",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"hover",description:"Display hover state",definition:[{name:"Attribute",value:"hover"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"icon",description:"Icon of dropdown item",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"label",description:"Label of dropdown item",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},6492:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var n=a(4173),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(52983);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);