"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3433],{34143:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"components/pill/guide","title":"guide","description":"Guidelines","source":"@site/docs/components/pill/guide.md","sourceDirName":"components/pill","slug":"/components/pill/guide","permalink":"/version-alpha/docs/components/pill/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/pill/guide.md","tags":[],"version":"current","frontMatter":{}}');var t=n(65723),l=n(65598);const o={},a=void 0,r={},c=[{value:"Guidelines",id:"guidelines",level:2},{value:"Variants",id:"variants",level:3},{value:"Options",id:"options",level:3},{value:"Behavior",id:"behavior",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:3},{value:"Related patterns",id:"related-patterns",level:3}];function d(e){const i={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,t.jsx)(i.p,{children:"Pills typically contain a concise label and sometimes an icon. They are not clickable or closable, making them ideal for presenting static information succinctly within an application."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1377_3110.png",alt:"Pill overview"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Container"}),"\n",(0,t.jsx)(i.li,{children:"Icon"}),"\n",(0,t.jsx)(i.li,{children:"Label text"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(i.p,{children:"With our pill variants, you can apply different colors based on their purpose, importance or context. We use pill variants to show class, status and levels of importance. The custom variant is often used for pills that visualize a high number of different categories."}),"\n",(0,t.jsx)(i.p,{children:"Pill variants:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Primary"}),": For high visual emphasis."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"State-related variants"}),": Alarm, critical, warning, success, info and neutral."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Custom"}),": For a customized background and label color."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1375_1985.png",alt:"Pill variants"})}),"\n",(0,t.jsx)(i.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Align left"}),": Position the pill content to the left side."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Background"}),": Use to set a custom background color when you require more flexibility in styling the pill. Only available for the custom pill variant."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Color"}),": Customize font and icon color for pill. This allows users to specify a unique font color in combination with a custom background color (only applicable when the variant is set to 'custom')."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Icon"}),": Pills can include a close icon within the element which is positioned before the pill label."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Outline"}),": Use for lower visual emphasis."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Width"}),": Pill width can be set to a specific value, but content length normally determines pill width with a minimum width of '2rem'."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Tooltip text"}),": Provide a specific text to be displayed as the tooltip or set the attribute without a specific value to display the pill's text content."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"behavior",children:"Behavior"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Placement"}),": We usually position pills inline with other elements to convey their status or category. We do not place pills within input and filter components as these already contain similar components. However, it's possible to add components similar to pills to tabs and navigation menu items. These counter or notification components are provided as component options."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Text truncation"}),": When you set a width for pills, long labels are truncated to fit the available space."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"states",children:"States"}),"\n",(0,t.jsx)(i.p,{children:"Pills are read-only."}),"\n",(0,t.jsx)(i.h3,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Do use pills to communicate tags and categories"}),"\n",(0,t.jsx)(i.li,{children:"Do use pills to indicate the status or characteristics of an item"}),"\n",(0,t.jsx)(i.li,{children:"Don't overuse pills as this leads to cluttered and overwhelming interfaces"}),"\n",(0,t.jsx)(i.li,{children:"Don't use different styles for pills with the same or similar use"}),"\n",(0,t.jsx)(i.li,{children:"Don't use pills if users can interact with the component (e.g. click, close) use chips instead"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"related-patterns",children:"Related patterns"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../chip",children:"Chip"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);