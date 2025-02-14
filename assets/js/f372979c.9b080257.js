"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35824],{11587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(97458),n=a(16436),s=a(6492);const r={},o=void 0,l={id:"auto-generated/ix-event-list-item/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-event-list-item/props.md",sourceDirName:"auto-generated/ix-event-list-item",slug:"/auto-generated/ix-event-list-item/props",permalink:"/docs/auto-generated/ix-event-list-item/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-event-list-item/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function m(e){return(0,i.jsx)(s.Z,{attributes:[{name:"chevron",description:"Show chevron on right side of the event list item",definition:[{name:"Attribute",value:"chevron"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"color",description:"Color of the status indicator.\nYou can find a list of all available colors in our documentation.\nExample values are `--theme-color-alarm` or `color-alarm`",definition:[{name:"Attribute",value:"color"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[{type:"deprecated",message:"since 2.1.0 use `item-color`"}]},{name:"disabled",description:"Disable event list item",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"itemColor",description:"Color of the status indicator.\nYou can find a list of all available colors in our documentation.\nExample values are `--theme-color-alarm` or `color-alarm`",definition:[{name:"Attribute",value:"item-color"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"selected",description:"Show event list item as selected",definition:[{name:"Attribute",value:"selected"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},6492:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var i=a(4173),n=a(97458);function s(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,n.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,n.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>n,h:()=>s});a(52983);var i=a(97458);function n(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var i=a(52983);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);