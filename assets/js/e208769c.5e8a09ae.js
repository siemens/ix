"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29841],{79830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=a(97458),n=a(16436),i=a(6492);const r={},d=void 0,c={id:"auto-generated/ix-dropdown-header/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-dropdown-header/props.md",sourceDirName:"auto-generated/ix-dropdown-header",slug:"/auto-generated/ix-dropdown-header/props",permalink:"/docs/auto-generated/ix-dropdown-header/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown-header/props.md",tags:[],version:"current",frontMatter:{}},o={},l=[];function u(e){return(0,s.jsx)(i.Z,{attributes:[{name:"label",description:"Display name of the header",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u()}},6492:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var s=a(4173),n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,n.jsx)(s.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,n.jsx)(s.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(i,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>n,h:()=>i});a(52983);var s=a(97458);function n(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function i(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>r});var s=a(52983);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);