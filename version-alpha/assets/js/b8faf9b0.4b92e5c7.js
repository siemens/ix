"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5043],{84284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"components/split-button/guide","title":"guide","description":"Guidelines","source":"@site/docs/components/split-button/guide.md","sourceDirName":"components/split-button","slug":"/components/split-button/guide","permalink":"/version-alpha/docs/components/split-button/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/split-button/guide.md","tags":[],"version":"current","frontMatter":{}}');var o=n(65723),s=n(65598);const l={},a=void 0,d={},r=[{value:"Guidelines",id:"guidelines",level:2},{value:"Options",id:"options",level:3},{value:"Behavior in context",id:"behavior-in-context",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:3},{value:"Related patterns",id:"related-patterns",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,o.jsx)(t.p,{children:"Split buttons consist of two parts: a button labeled with text and/or an icon on the left and a dropdown button labeled with an icon on the right. We typically use split buttons when a default action is available but more options need to be offered. Split buttons group similar or related actions."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1480_30799.png",alt:"Overview"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Button"}),"\n",(0,o.jsx)(t.li,{children:"Dropdown button"}),"\n",(0,o.jsx)(t.li,{children:"Button icon"}),"\n",(0,o.jsx)(t.li,{children:"Button label"}),"\n",(0,o.jsx)(t.li,{children:"Dropdown button icon"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"All the variants, options and states of the ix button and the ix dropdown button components apply to the split button. We've listed additional or deviating specifications here."}),"\n",(0,o.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Disabled:"})," The disabled option can be applied to the complete component. There is no option to disable each part of the split button independently."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Label:"})," Set a label for the button component (left side). We typically use short labels that contain a verb."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Placement:"})," Define where the flyout appears which is triggered when the dropdown button is active. You can choose between different directions (top, bottom, left, right) and two options for alignment with the button (start, end). When there is not enough space for the chosen setting, the placement is corrected automatically."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1504_2203.png",alt:"Placement example"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Bottom-end placement"}),"\n",(0,o.jsx)(t.li,{children:"Bottom-start placement"}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SplitIcon:"}),' We typically use a chevron icon on the dropdown button, but a custom icon can be set. A common alternative to the chevron is the "more-menu" icon.']}),"\n",(0,o.jsxs)(t.li,{children:["The options ",(0,o.jsx)(t.strong,{children:"loading"})," and ",(0,o.jsx)(t.strong,{children:"type"})," are not available for split buttons."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Interaction:"})," When users press an option from the dropdown list, the action is triggered. Typically the label of the button on the left side stays static. Be aware that updating the left side with the last triggered action may lead to layout changes (e.g. button width) and requires updating the dropdown by adding the action that was removed from the button face."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"states",children:"States"}),"\n",(0,o.jsx)(t.p,{children:"Split buttons have five states: Default, hover, active, disabled and focused. States are applied to left and the right part of the split button independently except for the disabled state. The visual appearance and the behavior of the states is the same as the ix button and the ix dropdown button."}),"\n",(0,o.jsx)(t.h3,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Do use split buttons when there is a frequent or most-important action"}),"\n",(0,o.jsx)(t.li,{children:"Don't use split buttons for unrelated actions"}),"\n",(0,o.jsx)(t.li,{children:"Don't duplicate the default option in the dropdown"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"related-patterns",children:"Related patterns"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../button",children:"Button"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../dropdown",children:"Dropdown"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../select",children:"Select"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../split-button",children:"Split button"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);