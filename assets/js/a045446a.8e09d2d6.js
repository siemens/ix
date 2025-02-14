"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6987],{17703:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(97458),n=t(16436),s=t(6492);const r={},c=void 0,d={id:"auto-generated/ix-avatar/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-avatar/props.md",sourceDirName:"auto-generated/ix-avatar",slug:"/auto-generated/ix-avatar/props",permalink:"/docs/auto-generated/ix-avatar/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-avatar/props.md",tags:[],version:"current",frontMatter:{}},o={},l=[];function u(e){return(0,i.jsx)(s.Z,{attributes:[{name:"extra",description:"Optional description text that will be displayed underneath the username.\nNote: Only working if avatar is part of the ix-application-header",definition:[{name:"Attribute",value:"extra"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[{type:"since",message:"2.1.0"}]},{name:"image",description:"Display an avatar image",definition:[{name:"Attribute",value:"image"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"initials",description:"Display the initials of the user. Will be overwritten by image",definition:[{name:"Attribute",value:"initials"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"username",description:"If set an info card displaying the username will be placed inside the dropdown.\nNote: Only working if avatar is part of the ix-application-header",definition:[{name:"Attribute",value:"username"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[{type:"since",message:"2.1.0"}]}]})}function m(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u()}},6492:(e,a,t)=>{t.d(a,{Z:()=>r});t(52983);var i=t(4173),n=t(97458);function s(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,n.jsx)(i.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,n.jsx)(i.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,a,t)=>{t.d(a,{Q:()=>n,h:()=>s});t(52983);var i=t(97458);function n(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>c,a:()=>r});var i=t(52983);const n={},s=i.createContext(n);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);