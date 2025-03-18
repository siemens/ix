"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9786],{92002:(e,r,t)=>{t.d(r,{Ay:()=>d,RM:()=>a});var n=t(65723),o=t(65598),i=t(34197),l=(t(17787),t(61838));const a=[{value:"API for ix-validation-tooltip",id:"api-for-ix-validation-tooltip",level:3},{value:"Properties",id:"properties",level:4},{value:"Slot",id:"slot",level:4}];function s(e){const r={h3:"h3",h4:"h4",...(0,o.R)(),...e.components};return l.A||c("ApiTable",!1),l.A.Code||c("ApiTable.Code",!0),l.A.PropertyHeader||c("ApiTable.PropertyHeader",!0),l.A.SlotHeader||c("ApiTable.SlotHeader",!0),l.A.Text||c("ApiTable.Text",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"api-for-ix-validation-tooltip",children:"API for ix-validation-tooltip"}),"\n",(0,n.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(l.A,{id:"property-message",children:[(0,n.jsx)(l.A.PropertyHeader,{name:"message",singleFramework:""}),(0,n.jsx)(l.A.Text,{name:"Description",children:"Message of the tooltip"}),(0,n.jsx)(l.A.Code,{name:"Attribute",children:"message"}),(0,n.jsx)(l.A.Code,{name:"Type",children:"string"})]}),"\n",(0,n.jsxs)(l.A,{id:"property-placement",children:[(0,n.jsx)(l.A.PropertyHeader,{name:"placement",singleFramework:""}),(0,n.jsx)(l.A.Text,{name:"Description",children:"Placement of the tooltip"}),(0,n.jsx)(l.A.Code,{name:"Attribute",children:"placement"}),(0,n.jsx)(l.A.Code,{name:"Type",children:'"bottom" | "left" | "right" | "top"'}),(0,n.jsx)(l.A.Code,{name:"Default",children:"'top'"})]}),"\n",(0,n.jsxs)(l.A,{id:"property-suppressAutomaticPlacement",children:[(0,n.jsx)(l.A.PropertyHeader,{name:"suppressAutomaticPlacement",singleFramework:"",children:(0,n.jsx)(i.df,{message:"2.0.0"})}),(0,n.jsx)(l.A.Text,{name:"Description",children:"Suppress the automatic placement of the dropdown."}),(0,n.jsx)(l.A.Code,{name:"Attribute",children:"suppress-automatic-placement"}),(0,n.jsx)(l.A.Code,{name:"Type",children:"boolean"}),(0,n.jsx)(l.A.Code,{name:"Default",children:"false"})]}),"\n",(0,n.jsx)(r.h4,{id:"slot",children:"Slot"}),"\n",(0,n.jsxs)(l.A,{id:"slot-tooltip-message",children:[(0,n.jsx)(l.A.SlotHeader,{name:"tooltip-message"}),(0,n.jsx)(l.A.Text,{name:"Description",children:"Custom tooltip message with html support"})]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function c(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},18072:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"components/forms-field/code","title":"code","description":"Development","source":"@site/docs/components/forms-field/code.mdx","sourceDirName":"components/forms-field","slug":"/components/forms-field/code","permalink":"/version-alpha/docs/components/forms-field/code","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/forms-field/code.mdx","tags":[],"version":"current","frontMatter":{}}');var o=t(65723),i=t(65598);t(92002);const l={},a=void 0,s={},d=[{value:"Development",id:"development",level:2},{value:"Label",id:"label",level:3},{value:"Required indicator",id:"required-indicator",level:3},{value:"Helper or feedback text",id:"helper-or-feedback-text",level:3},{value:"Counter",id:"counter",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"development",children:"Development"}),"\n",(0,o.jsxs)(r.p,{children:["All components which are tagged via ",(0,o.jsx)(r.code,{children:"form-ready"})," are usable inside a ",(0,o.jsx)(r.code,{children:"form"})," without requiring manual integration."]}),"\n",(0,o.jsx)(r.h3,{id:"label",children:"Label"}),"\n",(0,o.jsxs)(r.p,{children:["Each ",(0,o.jsx)(r.code,{children:"form-ready"})," component includes a ",(0,o.jsx)(r.code,{children:"label"})," attribute that displays a label above the component."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:'<ix-select label="Demo"></ix-select>\n'})}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"label"})," attribute is optional and can be left empty to display no label."]}),"\n",(0,o.jsx)(r.h3,{id:"required-indicator",children:"Required indicator"}),"\n",(0,o.jsxs)(r.p,{children:["To display an indicator whether a field is required, use the attribute ",(0,o.jsx)(r.code,{children:"required"}),". The indicator is only displayed, when a label is set."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:'<ix-input label="Demo" required></ix-input>\n'})}),"\n",(0,o.jsx)(r.h3,{id:"helper-or-feedback-text",children:"Helper or feedback text"}),"\n",(0,o.jsxs)(r.p,{children:["To display a helper or feedback text below your component please refer to ",(0,o.jsx)(r.a,{href:"../forms-validation",children:"validation"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"counter",children:"Counter"}),"\n",(0,o.jsxs)(r.p,{children:["To display a counter on inputs or textareas, use the attribute ",(0,o.jsx)(r.code,{children:"maxLength"}),". If you prefer not to display a counter, programmatically apply a custom validation."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:'<ix-input max-length="128"></ix-input>\n'})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},61838:(e,r,t)=>{t.d(r,{b:()=>m,A:()=>h});var n=t(68643),o=t(35478),i=t(51038),l=t(17787);const a={AnchorButton:"AnchorButton_X7SC",AnchorHeader:"AnchorHeader_kjZv",NoButtonBorder:"NoButtonBorder_Hb7W",ApiTableText:"ApiTableText_hDT2"};var s=t(65723);function d(e){let{children:r,id:t}=e;return(0,s.jsx)(n.A,{children:()=>(0,s.jsx)("div",{className:"api-table container ml-0 mb-8",id:t,children:(0,s.jsx)("div",{className:"bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]",children:r})})})}function c(e){let{children:r,name:t,type:n,singleFramework:i}=e;const{framework:a}=(0,o.u)();let d=t;return"vue"!==a&&"angular"!==a&&"html"!==a||(d=t.split("").map(((e,r)=>e.toUpperCase()===e?`${0!==r?"-":""}${e.toLowerCase()}`:e)).join("")),(0,s.jsxs)("div",{className:"flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor",children:[(0,s.jsxs)("div",{className:"flex items-center font-bold",children:[d,(0,s.jsx)("a",{href:`#${n??"property"}-${t}`,className:"hash-link","aria-label":`Direct link to ${t}`,title:`Direct link to ${t}`})]}),(0,s.jsxs)("div",{className:"flex items-center ml-auto gap-2",children:[r,i?"":(0,s.jsx)(l.A,{})]})]})}function p(e){let{children:r,name:t}=e;return(0,s.jsxs)("div",{className:a.ApiTableText,children:[(0,s.jsx)("div",{className:"px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]",children:t}),(0,s.jsx)("div",{className:"w-auto p-4",children:r})]})}d.PropertyHeader=c,d.EventHeader=function(e){let{children:r,name:t}=e;const{framework:n}=(0,o.u)();let i=t;return"react"===n&&(i=`on${t.charAt(0).toUpperCase()}${t.slice(1)}`),(0,s.jsx)(c,{name:i,type:"event",children:r})},d.SlotHeader=function(e){let{children:r,name:t}=e;return(0,s.jsx)(c,{name:t,type:"slot",children:r})},d.Text=p,d.Code=function(e){let{children:r,name:t}=e;return(0,s.jsx)(p,{name:t,children:(0,s.jsx)("code",{className:"p-1",children:r})})};const h=d;function m(e){let{children:r,right:t,anchorName:n,anchorLabel:o,noBottomBorder:l,onClick:d}=e;return(0,s.jsxs)("div",{className:(0,i.A)(a.AnchorHeader,{[a.NoButtonBorder]:l}),children:[(0,s.jsx)("div",{className:"flex items-center font-bold w-full",children:(0,s.jsxs)("button",{onClick:d,className:(0,i.A)("all-unset",a.AnchorButton),tabIndex:0,children:[r,(0,s.jsx)("a",{href:`#${n}`,className:"hash-link","aria-label":o,title:o})]})}),(0,s.jsx)("div",{className:"flex items-center ml-auto gap-2",children:t})]})}},34197:(e,r,t)=>{t.d(r,{k$:()=>a,PI:()=>p,df:()=>l});const n={Tag:"Tag_JPbC",Since:"Since_Ybno",FormReady:"FormReady_rKLF",Deprecated:"Deprecated_M0Gf",Redirect:"Redirect_eyq7",Link:"Link_YkBF"};var o=t(65723);function i(e){let{children:r}=e;return(0,o.jsx)("div",{className:n.Tag,children:r})}function l(e){let{message:r}=e;return(0,o.jsx)(i,{children:(0,o.jsxs)("div",{className:n.Since,children:["Since ",r]})})}function a(e){let{message:r}=e;return(0,o.jsx)(i,{children:(0,o.jsxs)("div",{className:n.Deprecated,children:["Deprecated ",r]})})}var s=t(22155),d=t(52961),c=t(51038);function p(e){let{link:r,children:t}=e;return(0,o.jsx)(i,{children:(0,o.jsxs)("div",{className:(0,c.A)(n.Redirect),children:[s.createElement("ix-icon",{name:d.B7e,color:"color-primary",size:"16"}),(0,o.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:n.Link,children:t})]})})}}}]);