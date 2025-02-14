"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38772],{6071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=a(97458),n=a(16436),s=a(6492);const o={},r=void 0,l={id:"auto-generated/ix-tooltip/props",title:"props",description:'\uff5c string \uff5c undefined"},{"name"[]},{"name""Define if the user can access the tooltip via mouse.","definition""Attribute","value""Type","value""Default","value"[]},{"name""Initial placement of the tooltip.\\nIf the selected placement doesn\'t have enough space, the tooltip will be repositioned to another location.","definition""Attribute","value""Type","value""Default","value"[{"type""1.5.0"}]},{"name""Title of the tooltip","definition""Attribute","value""Type","value""Default"}],"tags":[]}]} />',source:"@site/docs/auto-generated/ix-tooltip/props.md",sourceDirName:"auto-generated/ix-tooltip",slug:"/auto-generated/ix-tooltip/props",permalink:"/docs/auto-generated/ix-tooltip/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tooltip/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(e){return(0,i.jsx)(s.Z,{attributes:[{name:"for",description:'CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`',definition:[{name:"Attribute",value:"for"},{name:"Type",value:"HTMLElement \uff5c Promise<HTMLElement> \uff5c string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"interactive",description:"Define if the user can access the tooltip via mouse.",definition:[{name:"Attribute",value:"interactive"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"placement",description:"Initial placement of the tooltip.\nIf the selected placement doesn't have enough space, the tooltip will be repositioned to another location.",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"bottom" \uff5c "left" \uff5c "right" \uff5c "top"'},{name:"Default",value:"'top'"}],tags:[{type:"since",message:"1.5.0"}]},{name:"titleContent",description:"Title of the tooltip",definition:[{name:"Attribute",value:"title-content"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},6492:(e,t,a)=>{a.d(t,{Z:()=>o});a(52983);var i=a(4173),n=a(97458);function s(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,n.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,n.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>n,h:()=>s});a(52983);var i=a(97458);function n(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var i=a(52983);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);