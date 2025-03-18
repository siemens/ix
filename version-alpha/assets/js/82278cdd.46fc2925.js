"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[691],{95287:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"components/card/guide","title":"guide","description":"Guidelines","source":"@site/docs/components/card/guide.md","sourceDirName":"components/card","slug":"/components/card/guide","permalink":"/version-alpha/docs/components/card/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/card/guide.md","tags":[],"version":"current","frontMatter":{}}');var a=i(65723),s=i(65598);const r={},l=void 0,o={},d=[{value:"Guidelines",id:"guidelines",level:2},{value:"Card types",id:"card-types",level:3},{value:"Customization",id:"customization",level:3},{value:"Variants",id:"variants",level:3},{value:"Options",id:"options",level:3},{value:"Behavior in context",id:"behavior-in-context",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:3},{value:"Related patterns:",id:"related-patterns",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,a.jsx)(n.p,{children:"Cards make it easy for users to quickly scan small chunks of information. We typically use cards to create dashboards or modular, flexible designs that adapt seamlessly to various screen sizes. Additionally, cards can be used to draw attention to important content and serve as an entry point to deeper levels of navigation or detailed views."}),"\n",(0,a.jsx)(n.p,{children:"Cards are interactive elements. The entire container is clickable and triggers a single action."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_858_4956.png",alt:"Card overview"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Icon"}),"\n",(0,a.jsx)(n.li,{children:"Notification"}),"\n",(0,a.jsx)(n.li,{children:"Heading"}),"\n",(0,a.jsx)(n.li,{children:"Subheading"}),"\n",(0,a.jsx)(n.li,{children:"Expandable"}),"\n",(0,a.jsx)(n.li,{children:"Container"}),"\n",(0,a.jsx)(n.li,{children:"Expanding content"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"card-types",children:"Card types"}),"\n",(0,a.jsxs)(n.p,{children:["We currently offer two types of cards: ",(0,a.jsx)(n.strong,{children:"action"})," and ",(0,a.jsx)(n.strong,{children:"push"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Action cards have an icon, a heading and a subheading. We use them to trigger key actions."}),"\n",(0,a.jsx)(n.p,{children:"Push cards contain a notification value in addition to the icon, heading, and subheading. These cards have an expandable section placed at the bottom of the container. When clicked, the expandable section displays additional content. The notification value is logically related to the items shown in the expandable area. Push cards have a fixed content height of 11rem that cannot be changed."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_858_4953.png",alt:"Card types"})}),"\n",(0,a.jsx)(n.h3,{id:"customization",children:"Customization"}),"\n",(0,a.jsxs)(n.p,{children:["We also offer a card container component that enables designers to display various types of content, such as images, charts or key data. Some small rules apply: Background images can stretch over the complete size of the container, whereas the card content must maintain a default padding of at least ",(0,a.jsx)(n.code,{children:"1rem"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1329_26613.png",alt:"Card examples"})}),"\n",(0,a.jsx)(n.h3,{id:"variants",children:"Variants"}),"\n",(0,a.jsx)(n.p,{children:"Cards are available in nine variants: Insight (outline style), notification (filled style), alarm, critical, warning, success, info, neutral and primary. Each variant emphasizes different aspects to guide the user's attention. These variants differ visually through the presence of an outline and a distinct container fill color, but they all follow the same interaction pattern. We typically use the insight variant as the default choice as we find this creates a more balanced and subtle appearance for users."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_858_4969.png",alt:"Card variants"})}),"\n",(0,a.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Icon"}),": Cards can, but don't have to, include an icon. The icon is positioned in the top-left corner of the container."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Notification"}),": By default, push cards display a notification value at the top of the container. This value is logically related to the items displayed in the expanding content area."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Heading"}),": Cards can, but don't have to, include a heading. The heading is aligned to the top-left corner of the container."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Subheading"}),": Cards can, but don't have to, include a subheading. The subheading is aligned to the top-left corner of the container and positioned below the heading."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Interaction"}),": As a general rule, the entire card container is interactive and clickable. If the card also contains interactive elements, the corresponding actions are triggered."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Size"}),": By default, cards have a fixed width and height. However, content overflow is not managed automatically, so the card size must be manually adjusted."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Placement"}),": We typically group cards and position them at the top-left corner of the page or content area. Within the group, cards can be organized into lists or grids using the ",(0,a.jsx)(n.a,{href:"../card-list",children:"card list"})," component."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"states",children:"States"}),"\n",(0,a.jsx)(n.p,{children:"Cards can take one of three states: Default, hover and active. Action cards also offer a selected state."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_858_4979.png",alt:"Card states"})}),"\n",(0,a.jsx)(n.h3,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Do group cards in lists or grids (use the ",(0,a.jsx)(n.a,{href:"../card-list",children:"card list"})," control)"]}),"\n",(0,a.jsx)(n.li,{children:"Do keep multiple cards equal in size"}),"\n",(0,a.jsx)(n.li,{children:"Don't nest cards inside each other"}),"\n",(0,a.jsx)(n.li,{children:"Don't use cards to collect user input"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"related-patterns",children:"Related patterns:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../card-list",children:"Card list"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../flip",children:"Flip"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../tile",children:"Tile"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);