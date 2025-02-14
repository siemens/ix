"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85527],{37536:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(97458),i=t(16436),s=t(6492);const o={},r=void 0,l={id:"auto-generated/ix-pane/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-pane/props.md",sourceDirName:"auto-generated/ix-pane",slug:"/auto-generated/ix-pane/props",permalink:"/docs/auto-generated/ix-pane/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pane/props.md",tags:[],version:"current",frontMatter:{}},d={},c=[];function u(e){return(0,n.jsx)(s.Z,{attributes:[{name:"borderless",description:"Toggle the border of the pane.\nDefaults to the borderless attribute of the pane layout. If used standalone it defaults to false.",definition:[{name:"Attribute",value:"borderless"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"composition",description:"Defines the position of the pane inside it's container.\nInside a pane layout this property will automatically be set to the name of slot the pane is assigned to.",definition:[{name:"Attribute",value:"composition"},{name:"Type",value:'"bottom" \uff5c "left" \uff5c "right" \uff5c "top"'},{name:"Default",value:"'top'"}],tags:[]},{name:"expanded",description:"State of the pane",definition:[{name:"Attribute",value:"expanded"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"heading",description:"Title of the side panel",definition:[{name:"Attribute",value:"heading"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"hideOnCollapse",description:"Define if the pane should have a collapsed state",definition:[{name:"Attribute",value:"hide-on-collapse"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"icon",description:"Name of the icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"size",description:"The maximum size of the sidebar, when it is expanded",definition:[{name:"Attribute",value:"size"},{name:"Type",value:'"240px" \uff5c "320px" \uff5c "33%" \uff5c "360px" \uff5c "480px" \uff5c "50%" \uff5c "600px"'},{name:"Default",value:"'240px'"}],tags:[]},{name:"variant",description:"Variant of the side pane.\nDefaults to the variant attribute of the pane layout. If used standalone it defaults to inline.",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"floating" \uff5c "inline"'},{name:"Default",value:"'inline'"}],tags:[]}]})}function p(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u()}},6492:(e,a,t)=>{t.d(a,{Z:()=>o});t(52983);var n=t(4173),i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(n.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(n.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>s});t(52983);var n=t(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>o});var n=t(52983);const i={},s=n.createContext(i);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);