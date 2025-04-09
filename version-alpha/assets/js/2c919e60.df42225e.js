"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3140],{7335:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"components/dropdown-button/guide","title":"Dropdown button - Usage","description":"Dropdown buttons are button elements that allow users to select an action from a list of options by clicking on a button and revealing a dropdown. Clicking on one of the exposed options triggers the action. We typically use dropdown buttons when no default action is available. Dropdown buttons typically group similar or related actions.","source":"@site/docs/components/dropdown-button/guide.md","sourceDirName":"components/dropdown-button","slug":"/components/dropdown-button/guide","permalink":"/version-alpha/docs/components/dropdown-button/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/dropdown-button/guide.md","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Dropdown button","permalink":"/version-alpha/docs/components/dropdown-button/"},"next":{"title":"Code","permalink":"/version-alpha/docs/components/dropdown-button/code"}}');var s=t(65723),i=t(65598);const r={"doc-type":"tab-item"},a="Dropdown button - Usage",l={},d=[{value:"Options",id:"options",level:2},{value:"States",id:"states",level:2},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:2},{value:"Related",id:"related",level:2}];function c(n){const e={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"dropdown-button---usage",children:"Dropdown button - Usage"})}),"\n",(0,s.jsx)(e.p,{children:"Dropdown buttons are button elements that allow users to select an action from a list of options by clicking on a button and revealing a dropdown. Clicking on one of the exposed options triggers the action. We typically use dropdown buttons when no default action is available. Dropdown buttons typically group similar or related actions."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1477_13932.png",alt:"Overview"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Button container"}),"\n",(0,s.jsx)(e.li,{children:"Button label"}),"\n",(0,s.jsx)(e.li,{children:"Chevron"}),"\n",(0,s.jsx)(e.li,{children:"Button icon"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"All the variants, options and states of the ix button component apply to the dropdown button. We've listed additional or deviating specifications here."}),"\n",(0,s.jsx)(e.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Label:"})," Set a label for the dropdown button. We typically use short labels including verbs."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Placement:"})," Define where the dropdown appears when the button is active. Choose between different directions (top, bottom, left, right) and two options for alignment with the button (start, end). When there isn't enough space for the chosen placement, it's automatically corrected."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1504_2203.png",alt:"Placement example"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Bottom-end placement"}),"\n",(0,s.jsx)(e.li,{children:"Bottom-start placement"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"For options of the dropdown triggered when pressing the button, please refer to our separate dropdown component guide."}),"\n",(0,s.jsxs)(e.li,{children:["The options ",(0,s.jsx)(e.strong,{children:"loading"})," and ",(0,s.jsx)(e.strong,{children:"type"})," are not available for split buttons."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"states",children:"States"}),"\n",(0,s.jsx)(e.p,{children:"Dropdown buttons have five states: Default, hover, active, disabled and focused. In an active state, dropdown buttons show a dropdown with the available options. The visual appearance of the states is the same as the ix button component."}),"\n",(0,s.jsx)(e.h2,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Do use dropdown buttons when selecting an option triggers an action"}),"\n",(0,s.jsx)(e.li,{children:"Don't use dropdown buttons when there is a frequent or most-important action (use a standard button or a split button instead)"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../button",children:"Button"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../dropdown",children:"Dropdown"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../select",children:"Select"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../split-button",children:"Split button"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},65598:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var o=t(22155);const s={},i=o.createContext(s);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);