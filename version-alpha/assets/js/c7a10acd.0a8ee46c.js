"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3907],{36774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>w,contentTitle:()=>v,default:()=>D,frontMatter:()=>y,metadata:()=>r,toc:()=>T});const r=JSON.parse('{"id":"components/date-time-picker/code","title":"code","description":"Development","source":"@site/docs/components/date-time-picker/code.mdx","sourceDirName":"components/date-time-picker","slug":"/components/date-time-picker/code","permalink":"/version-alpha/docs/components/date-time-picker/code","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/date-time-picker/code.mdx","tags":[],"version":"current","frontMatter":{}}');var i=t(65723),s=t(65598),a=t(34197),o=(t(17787),t(61838));function d(e){const n={h3:"h3",h4:"h4",...(0,s.R)(),...e.components};return o.A||l("ApiTable",!1),o.A.Code||l("ApiTable.Code",!0),o.A.EventHeader||l("ApiTable.EventHeader",!0),o.A.PropertyHeader||l("ApiTable.PropertyHeader",!0),o.A.Text||l("ApiTable.Text",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"api-for-ix-datetime-picker",children:"API for ix-datetime-picker"}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(o.A,{id:"property-dateFormat",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"dateFormat",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Date format string.See {@link &quot;https:&#x2F;&#x2F;moment.github.io&#x2F;luxon&#x2F;#&#x2F;formatting?id&#x3D;table-of-tokens&quot;} for all available tokens."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"date-format"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"'yyyy/LL/dd'"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-from",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"from",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"The selected starting date. If the picker is not in range mode this is the selected date.Format has to match the &#x60;format&#x60; property."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"from"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-i18nDone",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"i18nDone",singleFramework:"",children:(0,i.jsx)(a.df,{message:"2.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Text of date select button"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"i18n-done"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"'Done'"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-i18nTime",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"i18nTime",singleFramework:"",children:(0,i.jsx)(a.df,{message:"3.0.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Top label of time picker"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"i-1-8n-time"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"'Time'"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-locale",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"locale",singleFramework:"",children:(0,i.jsx)(a.df,{message:"2.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Format of time stringSee {@link &quot;https:&#x2F;&#x2F;moment.github.io&#x2F;luxon&#x2F;#&#x2F;formatting?id&#x3D;table-of-tokens&quot;} for all available tokens."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"locale"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-maxDate",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"maxDate",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"The latest date that can be selected by the date picker.If not set there will be no restriction."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"max-date"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-minDate",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"minDate",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"The earliest date that can be selected by the date picker.If not set there will be no restriction."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"min-date"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-range",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"range",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"If true a date-range can be selected (from&#x2F;to)."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"range"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"boolean"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"true"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-showHour",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"showHour",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Show hour input"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"show-hour"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"boolean"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"true"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-showMinutes",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"showMinutes",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Show minutes input"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"show-minutes"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"boolean"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"true"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-showSeconds",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"showSeconds",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Show seconds input"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"show-seconds"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"boolean"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"true"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-showTimeReference",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"showTimeReference",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Show time reference inputTime reference is default aligned with"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"show-time-reference"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"boolean"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"false"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-showWeekNumbers",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"showWeekNumbers",singleFramework:"",children:(0,i.jsx)(a.df,{message:"3.0.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Shows week numbers displayed on the left side of the date picker"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"show-week-numbers"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"boolean"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"false"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-time",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"time",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Select time with format string"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"time"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-timeFormat",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"timeFormat",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Time format string.See {@link &quot;https:&#x2F;&#x2F;moment.github.io&#x2F;luxon&#x2F;#&#x2F;formatting?id&#x3D;table-of-tokens&quot;} for all available tokens."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"time-format"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"'HH:mm:ss'"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-timeReference",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"timeReference",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Set time reference"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"time-reference"}),(0,i.jsx)(o.A.Code,{name:"Type",children:'"AM" | "PM"'})]}),"\n",(0,i.jsxs)(o.A,{id:"property-to",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"to",singleFramework:"",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"The selected end date. If the the picker is not in range mode this property has no impact.Format has to match the &#x60;format&#x60; property."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"to"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-weekStartIndex",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"weekStartIndex",singleFramework:"",children:(0,i.jsx)(a.df,{message:"2.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"The index of which day to start the week on, based on the Locale#weekdays array.E.g. if the locale is en-us, weekStartIndex &#x3D; 1 results in starting the week on monday."}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"week-start-index"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"number"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"0"})]}),"\n",(0,i.jsx)(n.h4,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(o.A,{id:"event-dateChange",children:[(0,i.jsx)(o.A.EventHeader,{name:"dateChange",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Date change"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"dateChange"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"string | { from?: string; to?: string; }"})]}),"\n",(0,i.jsxs)(o.A,{id:"event-dateSelect",children:[(0,i.jsx)(o.A.EventHeader,{name:"dateSelect",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Datetime selection event is fired after confirm button is pressed"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"dateSelect"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"{ from?: string; to?: string; time: string; }"})]}),"\n",(0,i.jsxs)(o.A,{id:"event-timeChange",children:[(0,i.jsx)(o.A.EventHeader,{name:"timeChange",children:(0,i.jsx)(a.df,{message:"1.1.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"\nTime change"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"timeChange"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"string"})]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=t(89403);function h(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { IxDatetimePicker } from '@siemens/ix-react';\n\nexport default () => {\n  return <IxDatetimePicker />;\n};\n"})})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function p(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `<ix-datetime-picker></ix-datetime-picker>`,\n})\nexport default class Datetimepicker {}\n"})})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function u(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:"<script setup lang=\"ts\">\nimport { IxDatetimePicker } from '@siemens/ix-vue';\n<\/script>\n\n<template>\n  <IxDatetimePicker />\n</template>\n"})})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function f(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Datetimepicker example</title>\n  </head>\n  <body>\n    <ix-datetime-picker></ix-datetime-picker>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}function k(e){return(0,i.jsx)(m.A,{name:"datetimepicker",source:{react:{"datetimepicker.tsx":x},angular:{"datetimepicker.ts":j},vue:{"datetimepicker.vue":A},html:{"datetimepicker.html":g}},files:{react:{"datetimepicker.tsx":"react/datetimepicker.tsx"},angular:{"datetimepicker.ts":"angular/datetimepicker.ts"},vue:{"datetimepicker.vue":"vue/datetimepicker.vue"},html:{"datetimepicker.html":"html/datetimepicker.html"}},height:e.height,onlyFramework:e.onlyFramework})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}const y={},v=void 0,w={},T=[{value:"Development",id:"development",level:2},{value:"Basic",id:"basic",level:3},{value:"API for ix-datetime-picker",id:"api-for-ix-datetime-picker",level:3},{value:"Properties",id:"properties",level:4},{value:"Events",id:"events",level:4}];function C(e){const n={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,i.jsx)(b,{height:"35rem"}),"\n",(0,i.jsx)(c,{})]})}function D(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}},61838:(e,n,t)=>{t.d(n,{b:()=>x,A:()=>h});var r=t(68643),i=t(35478),s=t(51038),a=t(17787);const o={AnchorButton:"AnchorButton_X7SC",AnchorHeader:"AnchorHeader_kjZv",NoButtonBorder:"NoButtonBorder_Hb7W",ApiTableText:"ApiTableText_hDT2"};var d=t(65723);function c(e){let{children:n,id:t}=e;return(0,d.jsx)(r.A,{children:()=>(0,d.jsx)("div",{className:"api-table container ml-0 mb-8",id:t,children:(0,d.jsx)("div",{className:"bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]",children:n})})})}function l(e){let{children:n,name:t,type:r,singleFramework:s}=e;const{framework:o}=(0,i.u)();let c=t;return"vue"!==o&&"angular"!==o&&"html"!==o||(c=t.split("").map(((e,n)=>e.toUpperCase()===e?`${0!==n?"-":""}${e.toLowerCase()}`:e)).join("")),(0,d.jsxs)("div",{className:"flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor",children:[(0,d.jsxs)("div",{className:"flex items-center font-bold",children:[c,(0,d.jsx)("a",{href:`#${r??"property"}-${t}`,className:"hash-link","aria-label":`Direct link to ${t}`,title:`Direct link to ${t}`})]}),(0,d.jsxs)("div",{className:"flex items-center ml-auto gap-2",children:[n,s?"":(0,d.jsx)(a.A,{})]})]})}function m(e){let{children:n,name:t}=e;return(0,d.jsxs)("div",{className:o.ApiTableText,children:[(0,d.jsx)("div",{className:"px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]",children:t}),(0,d.jsx)("div",{className:"w-auto p-4",children:n})]})}c.PropertyHeader=l,c.EventHeader=function(e){let{children:n,name:t}=e;const{framework:r}=(0,i.u)();let s=t;return"react"===r&&(s=`on${t.charAt(0).toUpperCase()}${t.slice(1)}`),(0,d.jsx)(l,{name:s,type:"event",children:n})},c.SlotHeader=function(e){let{children:n,name:t}=e;return(0,d.jsx)(l,{name:t,type:"slot",children:n})},c.Text=m,c.Code=function(e){let{children:n,name:t}=e;return(0,d.jsx)(m,{name:t,children:(0,d.jsx)("code",{className:"p-1",children:n})})};const h=c;function x(e){let{children:n,right:t,anchorName:r,anchorLabel:i,noBottomBorder:a,onClick:c}=e;return(0,d.jsxs)("div",{className:(0,s.A)(o.AnchorHeader,{[o.NoButtonBorder]:a}),children:[(0,d.jsx)("div",{className:"flex items-center font-bold w-full",children:(0,d.jsxs)("button",{onClick:c,className:(0,s.A)("all-unset",o.AnchorButton),tabIndex:0,children:[n,(0,d.jsx)("a",{href:`#${r}`,className:"hash-link","aria-label":i,title:i})]})}),(0,d.jsx)("div",{className:"flex items-center ml-auto gap-2",children:t})]})}},34197:(e,n,t)=>{t.d(n,{k$:()=>o,PI:()=>m,df:()=>a});const r={Tag:"Tag_JPbC",Since:"Since_Ybno",FormReady:"FormReady_rKLF",Deprecated:"Deprecated_M0Gf",Redirect:"Redirect_eyq7",Link:"Link_YkBF"};var i=t(65723);function s(e){let{children:n}=e;return(0,i.jsx)("div",{className:r.Tag,children:n})}function a(e){let{message:n}=e;return(0,i.jsx)(s,{children:(0,i.jsxs)("div",{className:r.Since,children:["Since ",n]})})}function o(e){let{message:n}=e;return(0,i.jsx)(s,{children:(0,i.jsxs)("div",{className:r.Deprecated,children:["Deprecated ",n]})})}var d=t(22155),c=t(52961),l=t(51038);function m(e){let{link:n,children:t}=e;return(0,i.jsx)(s,{children:(0,i.jsxs)("div",{className:(0,l.A)(r.Redirect),children:[d.createElement("ix-icon",{name:c.B7e,color:"color-primary",size:"16"}),(0,i.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:r.Link,children:t})]})})}}}]);