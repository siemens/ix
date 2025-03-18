"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6911],{99739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>q,contentTitle:()=>Y,default:()=>z,frontMatter:()=>U,metadata:()=>a,toc:()=>M});const a=JSON.parse('{"id":"components/empty-state/code","title":"code","description":"Development","source":"@site/docs/components/empty-state/code.mdx","sourceDirName":"components/empty-state","slug":"/components/empty-state/code","permalink":"/version-alpha/docs/components/empty-state/code","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/empty-state/code.mdx","tags":[],"version":"current","frontMatter":{}}');var r=n(65723),o=n(65598),c=(n(34197),n(17787),n(61838));function s(e){const t={h3:"h3",h4:"h4",...(0,o.R)(),...e.components};return c.A||l("ApiTable",!1),c.A.Code||l("ApiTable.Code",!0),c.A.EventHeader||l("ApiTable.EventHeader",!0),c.A.PropertyHeader||l("ApiTable.PropertyHeader",!0),c.A.Text||l("ApiTable.Text",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"api-for-ix-empty-state",children:"API for ix-empty-state"}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(c.A,{id:"property-action",children:[(0,r.jsx)(c.A.PropertyHeader,{name:"action",singleFramework:""}),(0,r.jsx)(c.A.Text,{name:"Description",children:"Optional empty state action"}),(0,r.jsx)(c.A.Code,{name:"Attribute",children:"action"}),(0,r.jsx)(c.A.Code,{name:"Type",children:"string"})]}),"\n",(0,r.jsxs)(c.A,{id:"property-header",children:[(0,r.jsx)(c.A.PropertyHeader,{name:"header",singleFramework:""}),(0,r.jsx)(c.A.Text,{name:"Description",children:"Empty state header"}),(0,r.jsx)(c.A.Code,{name:"Attribute",children:"header"}),(0,r.jsx)(c.A.Code,{name:"Type",children:"string"})]}),"\n",(0,r.jsxs)(c.A,{id:"property-icon",children:[(0,r.jsx)(c.A.PropertyHeader,{name:"icon",singleFramework:""}),(0,r.jsx)(c.A.Text,{name:"Description",children:"Optional empty state icon"}),(0,r.jsx)(c.A.Code,{name:"Attribute",children:"icon"}),(0,r.jsx)(c.A.Code,{name:"Type",children:"string"})]}),"\n",(0,r.jsxs)(c.A,{id:"property-layout",children:[(0,r.jsx)(c.A.PropertyHeader,{name:"layout",singleFramework:""}),(0,r.jsx)(c.A.Text,{name:"Description",children:"Optional empty state layout - one of &#39;large&#39;, &#39;compact&#39; or &#39;compactBreak&#39;"}),(0,r.jsx)(c.A.Code,{name:"Attribute",children:"layout"}),(0,r.jsx)(c.A.Code,{name:"Type",children:'"compact" | "compactBreak" | "large"'}),(0,r.jsx)(c.A.Code,{name:"Default",children:"'large'"})]}),"\n",(0,r.jsxs)(c.A,{id:"property-subHeader",children:[(0,r.jsx)(c.A.PropertyHeader,{name:"subHeader",singleFramework:""}),(0,r.jsx)(c.A.Text,{name:"Description",children:"Optional empty state sub header"}),(0,r.jsx)(c.A.Code,{name:"Attribute",children:"sub-header"}),(0,r.jsx)(c.A.Code,{name:"Type",children:"string"})]}),"\n",(0,r.jsx)(t.h4,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(c.A,{id:"event-actionClick",children:[(0,r.jsx)(c.A.EventHeader,{name:"actionClick"}),(0,r.jsx)(c.A.Text,{name:"Description",children:"Empty state action click event"}),(0,r.jsx)(c.A.Code,{name:"Event",children:"actionClick"}),(0,r.jsx)(c.A.Code,{name:"Detail",children:"void"})]})]})}function i(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}function l(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(89403);function p(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { iconAdd } from \'@siemens/ix-icons/icons\';\nimport { IxEmptyState } from \'@siemens/ix-react\';\n\nexport default () => {\n  return (\n    <IxEmptyState\n      header="No elements available"\n      subHeader="Create an element first"\n      icon={iconAdd}\n      action="Create element"\n      onActionClick={console.log}\n    ></IxEmptyState>\n  );\n};\n'})})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function u(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `<ix-empty-state\n    header="No elements available"\n    subHeader="Create an element first"\n    icon="add"\n    action="Create element"\n    (actionClick)="onActionClick($event)"\n  ></ix-empty-state>`,\n})\nexport default class EmptyState {\n  onActionClick(event: Event) {\n    console.log(event);\n  }\n}\n'})})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function h(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vue",children:'<script setup lang="ts">\nimport { iconAdd } from \'@siemens/ix-icons/icons\';\nimport { IxEmptyState } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxEmptyState\n    header="No elements available"\n    subHeader="Create an element first"\n    :icon="iconAdd"\n    action="Create element"\n  ></IxEmptyState>\n</template>\n'})})}function y(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function j(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Empty state example</title>\n    <script type="module">\n      import { addIcons } from \'@siemens/ix-icons\';\n      import { iconAdd } from \'@siemens/ix-icons/icons\';\n      addIcons({\n        iconAdd,\n      });\n    <\/script>\n  </head>\n  <body>\n    <ix-empty-state\n      header="No elements available"\n      sub-header="Create an element first"\n      icon="add"\n      action="Create element"\n    ></ix-empty-state>\n\n    <script>\n      (async function () {\n        await window.customElements.whenDefined(\'ix-empty-state\');\n        const emptyState = document.querySelector(\'ix-empty-state\');\n\n        emptyState.addEventListener(\'actionClick\', (event) =>\n          console.log(event)\n        );\n      })();\n    <\/script>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}function v(e){return(0,r.jsx)(m.A,{name:"empty-state",source:{react:{"empty-state.tsx":d},angular:{"empty-state.ts":x},vue:{"empty-state.vue":y},html:{"empty-state.html":f}},files:{react:{"empty-state.tsx":"react/empty-state.tsx"},angular:{"empty-state.ts":"angular/empty-state.ts"},vue:{"empty-state.vue":"vue/empty-state.vue"},html:{"empty-state.html":"html/empty-state.html"}},height:e.height,onlyFramework:e.onlyFramework})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}function A(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { iconAdd } from \'@siemens/ix-icons/icons\';\nimport { IxEmptyState } from \'@siemens/ix-react\';\n\nexport default () => {\n  return (\n    <IxEmptyState\n      layout="compact"\n      header="No elements available"\n      subHeader="Create an element first"\n      icon={iconAdd}\n      action="Create element"\n      onActionClick={console.log}\n    ></IxEmptyState>\n  );\n};\n'})})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}function C(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `<ix-empty-state\n    layout="compact"\n    header="No elements available"\n    subHeader="Create an element first"\n    icon="add"\n    action="Create element"\n    (actionClick)="onActionClick($event)"\n  ></ix-empty-state>`,\n})\nexport default class EmptyStateCompact {\n  onActionClick(event: Event) {\n    console.log(event);\n  }\n}\n'})})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}function w(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vue",children:'<script setup lang="ts">\nimport { iconAdd } from \'@siemens/ix-icons/icons\';\nimport { IxEmptyState } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxEmptyState\n    layout="compact"\n    header="No elements available"\n    subHeader="Create an element first"\n    :icon="iconAdd"\n    action="Create element"\n  ></IxEmptyState>\n</template>\n'})})}function N(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}function E(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Empty state compact example</title>\n    <script type="module">\n      import { addIcons } from \'@siemens/ix-icons\';\n      import { iconAdd } from \'@siemens/ix-icons/icons\';\n      addIcons({\n        iconAdd,\n      });\n    <\/script>\n  </head>\n  <body>\n    <ix-empty-state\n      layout="compact"\n      header="No elements available"\n      sub-header="Create an element first"\n      icon="add"\n      action="Create element"\n    ></ix-empty-state>\n\n    <script>\n      (async function () {\n        await window.customElements.whenDefined(\'ix-empty-state\');\n        const emptyState = document.querySelector(\'ix-empty-state\');\n\n        emptyState.addEventListener(\'actionClick\', (event) =>\n          console.log(event)\n        );\n      })();\n    <\/script>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function S(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}function R(e){return(0,r.jsx)(m.A,{name:"empty-state-compact",source:{react:{"empty-state-compact.tsx":g},angular:{"empty-state-compact.ts":k},vue:{"empty-state-compact.vue":N},html:{"empty-state-compact.html":S}},files:{react:{"empty-state-compact.tsx":"react/empty-state-compact.tsx"},angular:{"empty-state-compact.ts":"angular/empty-state-compact.ts"},vue:{"empty-state-compact.vue":"vue/empty-state-compact.vue"},html:{"empty-state-compact.html":"html/empty-state-compact.html"}},height:e.height,onlyFramework:e.onlyFramework})}function T(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(R,{...e})}):R(e)}function H(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { iconAdd } from \'@siemens/ix-icons/icons\';\nimport { IxEmptyState } from \'@siemens/ix-react\';\n\nexport default () => {\n  return (\n    <IxEmptyState\n      layout="compactBreak"\n      header="No elements available"\n      subHeader="Create an element first"\n      icon={iconAdd}\n      action="Create element"\n      onActionClick={console.log}\n    ></IxEmptyState>\n  );\n};\n'})})}function I(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(H,{...e})}):H(e)}function D(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: ` <ix-empty-state\n    layout="compactBreak"\n    header="No elements available"\n    subHeader="Create an element first"\n    icon="add"\n    action="Create element"\n    (actionClick)="onActionClick($event)"\n  ></ix-empty-state>`,\n})\nexport default class EmptyStateCompactBreak {\n  onActionClick(event: Event) {\n    console.log(event);\n  }\n}\n'})})}function B(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(D,{...e})}):D(e)}function F(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vue",children:'<script setup lang="ts">\nimport { iconAdd } from \'@siemens/ix-icons/icons\';\nimport { IxEmptyState } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxEmptyState\n    layout="compactBreak"\n    header="No elements available"\n    subHeader="Create an element first"\n    :icon="iconAdd"\n    action="Create element"\n  ></IxEmptyState>\n</template>\n'})})}function P(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(F,{...e})}):F(e)}function $(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Empty state compact break example</title>\n    <script type="module">\n      import { addIcons } from \'@siemens/ix-icons\';\n      import { iconAdd } from \'@siemens/ix-icons/icons\';\n      addIcons({\n        iconAdd,\n      });\n    <\/script>\n  </head>\n  <body>\n    <ix-empty-state\n      layout="compactBreak"\n      header="No elements available"\n      sub-header="Create an element first"\n      icon="add"\n      action="Create element"\n    ></ix-empty-state>\n\n    <script>\n      (async function () {\n        await window.customElements.whenDefined(\'ix-empty-state\');\n        const emptyState = document.querySelector(\'ix-empty-state\');\n\n        emptyState.addEventListener(\'actionClick\', (event) =>\n          console.log(event)\n        );\n      })();\n    <\/script>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function _(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)($,{...e})}):$(e)}function L(e){return(0,r.jsx)(m.A,{name:"empty-state-compact-break",source:{react:{"empty-state-compact-break.tsx":I},angular:{"empty-state-compact-break.ts":B},vue:{"empty-state-compact-break.vue":P},html:{"empty-state-compact-break.html":_}},files:{react:{"empty-state-compact-break.tsx":"react/empty-state-compact-break.tsx"},angular:{"empty-state-compact-break.ts":"angular/empty-state-compact-break.ts"},vue:{"empty-state-compact-break.vue":"vue/empty-state-compact-break.vue"},html:{"empty-state-compact-break.html":"html/empty-state-compact-break.html"}},height:e.height,onlyFramework:e.onlyFramework})}function O(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(L,{...e})}):L(e)}const U={},Y=void 0,q={},M=[{value:"Development",id:"development",level:2},{value:"Basic",id:"basic",level:3},{value:"Compact",id:"compact",level:3},{value:"Compact break",id:"compact-break",level:3},{value:"API for ix-empty-state",id:"api-for-ix-empty-state",level:3},{value:"Properties",id:"properties",level:4},{value:"Events",id:"events",level:4}];function J(e){const t={h2:"h2",h3:"h3",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"development",children:"Development"}),"\n",(0,r.jsx)(t.h3,{id:"basic",children:"Basic"}),"\n",(0,r.jsx)(b,{height:"16rem"}),"\n",(0,r.jsx)(t.h3,{id:"compact",children:"Compact"}),"\n",(0,r.jsx)(T,{}),"\n",(0,r.jsx)(t.h3,{id:"compact-break",children:"Compact break"}),"\n",(0,r.jsx)(O,{}),"\n",(0,r.jsx)(i,{})]})}function z(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(J,{...e})}):J(e)}},61838:(e,t,n)=>{n.d(t,{b:()=>u,A:()=>d});var a=n(68643),r=n(35478),o=n(51038),c=n(17787);const s={AnchorButton:"AnchorButton_X7SC",AnchorHeader:"AnchorHeader_kjZv",NoButtonBorder:"NoButtonBorder_Hb7W",ApiTableText:"ApiTableText_hDT2"};var i=n(65723);function l(e){let{children:t,id:n}=e;return(0,i.jsx)(a.A,{children:()=>(0,i.jsx)("div",{className:"api-table container ml-0 mb-8",id:n,children:(0,i.jsx)("div",{className:"bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]",children:t})})})}function m(e){let{children:t,name:n,type:a,singleFramework:o}=e;const{framework:s}=(0,r.u)();let l=n;return"vue"!==s&&"angular"!==s&&"html"!==s||(l=n.split("").map(((e,t)=>e.toUpperCase()===e?`${0!==t?"-":""}${e.toLowerCase()}`:e)).join("")),(0,i.jsxs)("div",{className:"flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor",children:[(0,i.jsxs)("div",{className:"flex items-center font-bold",children:[l,(0,i.jsx)("a",{href:`#${a??"property"}-${n}`,className:"hash-link","aria-label":`Direct link to ${n}`,title:`Direct link to ${n}`})]}),(0,i.jsxs)("div",{className:"flex items-center ml-auto gap-2",children:[t,o?"":(0,i.jsx)(c.A,{})]})]})}function p(e){let{children:t,name:n}=e;return(0,i.jsxs)("div",{className:s.ApiTableText,children:[(0,i.jsx)("div",{className:"px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]",children:n}),(0,i.jsx)("div",{className:"w-auto p-4",children:t})]})}l.PropertyHeader=m,l.EventHeader=function(e){let{children:t,name:n}=e;const{framework:a}=(0,r.u)();let o=n;return"react"===a&&(o=`on${n.charAt(0).toUpperCase()}${n.slice(1)}`),(0,i.jsx)(m,{name:o,type:"event",children:t})},l.SlotHeader=function(e){let{children:t,name:n}=e;return(0,i.jsx)(m,{name:n,type:"slot",children:t})},l.Text=p,l.Code=function(e){let{children:t,name:n}=e;return(0,i.jsx)(p,{name:n,children:(0,i.jsx)("code",{className:"p-1",children:t})})};const d=l;function u(e){let{children:t,right:n,anchorName:a,anchorLabel:r,noBottomBorder:c,onClick:l}=e;return(0,i.jsxs)("div",{className:(0,o.A)(s.AnchorHeader,{[s.NoButtonBorder]:c}),children:[(0,i.jsx)("div",{className:"flex items-center font-bold w-full",children:(0,i.jsxs)("button",{onClick:l,className:(0,o.A)("all-unset",s.AnchorButton),tabIndex:0,children:[t,(0,i.jsx)("a",{href:`#${a}`,className:"hash-link","aria-label":r,title:r})]})}),(0,i.jsx)("div",{className:"flex items-center ml-auto gap-2",children:n})]})}},34197:(e,t,n)=>{n.d(t,{k$:()=>s,PI:()=>p,df:()=>c});const a={Tag:"Tag_JPbC",Since:"Since_Ybno",FormReady:"FormReady_rKLF",Deprecated:"Deprecated_M0Gf",Redirect:"Redirect_eyq7",Link:"Link_YkBF"};var r=n(65723);function o(e){let{children:t}=e;return(0,r.jsx)("div",{className:a.Tag,children:t})}function c(e){let{message:t}=e;return(0,r.jsx)(o,{children:(0,r.jsxs)("div",{className:a.Since,children:["Since ",t]})})}function s(e){let{message:t}=e;return(0,r.jsx)(o,{children:(0,r.jsxs)("div",{className:a.Deprecated,children:["Deprecated ",t]})})}var i=n(22155),l=n(52961),m=n(51038);function p(e){let{link:t,children:n}=e;return(0,r.jsx)(o,{children:(0,r.jsxs)("div",{className:(0,m.A)(a.Redirect),children:[i.createElement("ix-icon",{name:l.B7e,color:"color-primary",size:"16"}),(0,r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:a.Link,children:n})]})})}}}]);