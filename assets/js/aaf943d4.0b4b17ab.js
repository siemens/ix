"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53407],{93962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(97458),i=a(16436),s=a(6492);const o={},r=void 0,l={id:"auto-generated/ix-menu-item/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-menu-item/props.md",sourceDirName:"auto-generated/ix-menu-item",slug:"/auto-generated/ix-menu-item/props",permalink:"/docs/auto-generated/ix-menu-item/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-item/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function m(e){return(0,n.jsx)(s.Z,{attributes:[{name:"active",description:"State to display active",definition:[{name:"Attribute",value:"active"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"bottom",description:'Caution: this is no longer working. Please use slot="bottom" instead.\n\nPlace tab on bottom',definition:[{name:"Attribute",value:"bottom"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"disabled",description:"Disable tab and remove event handlers",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"home",description:"Move the Tab to a top position.",definition:[{name:"Attribute",value:"home"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"icon",description:"Name of the icon you want to display. Icon names can be resolved from the documentation",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"label",description:"Label of the menu item. Will also be used as tooltip text",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[{type:"since",message:"2.2.0"}]},{name:"notifications",description:"Show notification count on tab",definition:[{name:"Attribute",value:"notifications"},{name:"Type",value:"number \uff5c undefined"},{name:"Default"}],tags:[]},{name:"tabIcon",description:"Name of the icon you want to display. Icon names can be resolved from the documentation",definition:[{name:"Attribute",value:"tab-icon"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[{type:"deprecated",message:"since 2.0.0 use `icon` property. Will be removed in 3.0.0"}]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},6492:(e,t,a)=>{a.d(t,{Z:()=>o});a(52983);var n=a(4173),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(52983);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);