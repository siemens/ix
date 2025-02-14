"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81484],{22515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=a(97458),i=a(16436),s=a(6492);const r={},l=void 0,d={id:"auto-generated/ix-date-input/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-date-input/props.md",sourceDirName:"auto-generated/ix-date-input",slug:"/auto-generated/ix-date-input/props",permalink:"/docs/auto-generated/ix-date-input/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-date-input/props.md",tags:[],version:"current",frontMatter:{}},o={},u=[];function m(e){return(0,n.jsx)(s.Z,{attributes:[{name:"disabled",description:"disabled attribute",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"format",description:'Date format string.\nSee {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.',definition:[{name:"Attribute",value:"format"},{name:"Type",value:"string"},{name:"Default",value:"'yyyy/LL/dd'"}],tags:[]},{name:"helperText",description:"helper text below the input field",definition:[{name:"Attribute",value:"helper-text"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"i18nErrorDateUnparsable",description:"i18n string for the error message when the date is not parsable",definition:[{name:"Attribute",value:"i18n-error-date-unparsable"},{name:"Type",value:"string"},{name:"Default",value:"'Date is not valid'"}],tags:[]},{name:"infoText",description:"info text below the input field",definition:[{name:"Attribute",value:"info-text"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"invalidText",description:"error text below the input field",definition:[{name:"Attribute",value:"invalid-text"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"label",description:"label of the input field",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"locale",description:"Locale identifier (e.g. 'en' or 'de').",definition:[{name:"Attribute",value:"locale"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[{type:"since",message:"2.6.0"}]},{name:"name",description:"name of the input element",definition:[{name:"Attribute",value:"name"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"placeholder",description:"placeholder of the input element",definition:[{name:"Attribute",value:"placeholder"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"readonly",description:"readonly attribute",definition:[{name:"Attribute",value:"readonly"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"required",description:"required attribute",definition:[{name:"Attribute",value:"required"},{name:"Type",value:"boolean \uff5c undefined"},{name:"Default"}],tags:[]},{name:"showTextAsTooltip",description:"show text as tooltip",definition:[{name:"Attribute",value:"show-text-as-tooltip"},{name:"Type",value:"boolean \uff5c undefined"},{name:"Default"}],tags:[]},{name:"validText",description:"valid text below the input field",definition:[{name:"Attribute",value:"valid-text"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"value",description:"value of the input element",definition:[{name:"Attribute",value:"value"},{name:"Type",value:"string"},{name:"Default",value:"''"}],tags:[]},{name:"warningText",description:"warning text below the input field",definition:[{name:"Attribute",value:"warning-text"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]}]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},6492:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var n=a(4173),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>r});var n=a(52983);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);