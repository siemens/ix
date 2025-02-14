"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6096],{97922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(97458),i=t(16436),s=t(6492);const l={},r=void 0,o={id:"auto-generated/ix-card-list/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-card-list/props.md",sourceDirName:"auto-generated/ix-card-list",slug:"/auto-generated/ix-card-list/props",permalink:"/docs/auto-generated/ix-card-list/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-list/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(e){return(0,n.jsx)(s.Z,{attributes:[{name:"collapse",description:"Collapse the list",definition:[{name:"Attribute",value:"collapse"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"hideShowAll",description:"Hide the show all button",definition:[{name:"Attribute",value:"hide-show-all"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.2.0"}]},{name:"i18nMoreCards",description:"i18n More cards available",definition:[{name:"Attribute",value:"i-1-8n-more-cards"},{name:"Type",value:"string"},{name:"Default",value:"'There are more cards available'"}],tags:[]},{name:"i18nShowAll",description:"i18n Show all button",definition:[{name:"Attribute",value:"i-1-8n-show-all"},{name:"Type",value:"string"},{name:"Default",value:"'Show all'"}],tags:[]},{name:"label",description:"Name the card list",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"listStyle",description:"List style",definition:[{name:"Attribute",value:"list-style"},{name:"Type",value:'"scroll" \uff5c "stack"'},{name:"Default",value:"'stack'"}],tags:[]},{name:"showAllCount",description:"Overwrite the default show all count.",definition:[{name:"Attribute",value:"show-all-count"},{name:"Type",value:"number \uff5c undefined"},{name:"Default"}],tags:[]},{name:"suppressOverflowHandling",description:"Suppress the overflow handling of child elements",definition:[{name:"Attribute",value:"suppress-overflow-handling"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u()}},6492:(e,a,t)=>{t.d(a,{Z:()=>l});t(52983);var n=t(4173),i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(n.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(n.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const l=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>s});t(52983);var n=t(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>l});var n=t(52983);const i={},s=n.createContext(i);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);