"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2960],{57244:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"components/input-number/guide","title":"guide","description":"Guidelines","source":"@site/docs/components/input-number/guide.md","sourceDirName":"components/input-number","slug":"/components/input-number/guide","permalink":"/version-alpha/docs/components/input-number/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/input-number/guide.md","tags":[],"version":"current","frontMatter":{}}');var t=i(65723),r=i(65598);const l={},a=void 0,d={},o=[{value:"Guidelines",id:"guidelines",level:2},{value:"Options",id:"options",level:3},{value:"Behavior in context",id:"behavior-in-context",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:3},{value:"Related",id:"related",level:3}];function c(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,t.jsx)(n.p,{children:"The number input component is commonly used in forms, calculators and other areas where precise numerical input is required. We typically use the number input component to ensure accurate and efficient data entry."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_3805_24565.png",alt:"Number input overview"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Label"}),"\n",(0,t.jsx)(n.li,{children:"Required field indicator"}),"\n",(0,t.jsx)(n.li,{children:"Value"}),"\n",(0,t.jsx)(n.li,{children:"Stepper buttons"}),"\n",(0,t.jsx)(n.li,{children:"Input field"}),"\n",(0,t.jsx)(n.li,{children:"Helper or feedback text"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": See ",(0,t.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value"}),": See ",(0,t.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Required"}),": See ",(0,t.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Helper text"}),": See ",(0,t.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Feedback text"}),": See ",(0,t.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Show text as tooltip"}),": See ",(0,t.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Placeholder"}),": See ",(0,t.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Allowed characters pattern"}),": Specify the characters allowed for input. We typically use this to reject invalid characters, such as decimal points. When users type an invalid character, a shaking animation is immediately triggered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pattern"}),": Define the expected input using regular expressions, such as an integer between 1 and 100. We often use this to validate the input when the user leaves the field or clicks submit."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Min/Max"}),": Specify the minimum and maximum values that can be entered to ensure the input stays within the defined range. We typically use this option to prevent invalid entries and guide users towards acceptable values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Show stepper buttons"}),": Use these optional controls to increment or decrement the value (suitable for small ranges with few steps). We typically use these buttons when precise adjustments are needed, such as in quantity selectors, rating systems or form inputs requiring fine-tuned numerical values."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interaction:"})," Users can type a value or use stepper buttons to adjust it. We recommend using stepper buttons, especially for touch interactions, to enhance usability and precision."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Validation:"})," See ",(0,t.jsx)(n.a,{href:"../forms-validation",children:"form field"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Overflow:"})," Numbers are truncated to fit within the input field. Ensure that the expected value is visible in the input field so it can be properly displayed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Alignment:"})," Number inputs are always aligned to the right."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"states",children:"States"}),"\n",(0,t.jsxs)(n.p,{children:["The number input has five states: default, hover, focused, disabled and read-only.\n",(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_4097_1041.png",alt:"Number input states"})]}),"\n",(0,t.jsx)(n.h3,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do\xa0set appropriate\xa0min\xa0and\xa0max\xa0values to prevent invalid entries and guide user input"}),"\n",(0,t.jsx)(n.li,{children:"Do\xa0provide clear error messages when the input value is out of the allowed range or does not match the required pattern"}),"\n",(0,t.jsx)(n.li,{children:"Do consider special cases such as zero, negative numbers and very large numbers to ensure all possible inputs are handled correctly"}),"\n",(0,t.jsx)(n.li,{children:"Don't specify patterns that do not align with your use case, e.g. inappropriate intervals between valid values"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"related",children:"Related"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../forms-field",children:"Form fields"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../forms-validation",children:"Validation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../forms-layout",children:"Layout"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../input",children:"Input"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../select",children:"Select"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);