"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5019],{51989:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"components/blind/guide","title":"guide","description":"Guidelines","source":"@site/docs/components/blind/guide.md","sourceDirName":"components/blind","slug":"/components/blind/guide","permalink":"/version-alpha/docs/components/blind/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/blind/guide.md","tags":[],"version":"current","frontMatter":{}}');var s=i(65723),l=i(65598);const a={},o=void 0,d={},r=[{value:"Guidelines",id:"guidelines",level:2},{value:"Types",id:"types",level:3},{value:"Variants",id:"variants",level:3},{value:"Options",id:"options",level:3},{value:"Behavior in context",id:"behavior-in-context",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:3},{value:"Related patterns:",id:"related-patterns",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,s.jsx)(n.p,{children:"Blinds are UI controls that allow the users to hide or reveal content by clicking on a control element. Blinds can display a large amount of content in a compact space or present information in an organized and hierarchical way. Blinds reduce the user's cognitive load by removing clutter and less important information from an interface. We typically don't use blinds if the content is central to the user's task due to its reduced visibility and accessibility."}),"\n",(0,s.jsx)(n.p,{children:"Blinds consist of a header section on the top and a content section below. The header section contains a chevron on the left followed by the blind's label. Within the content section, content can be placed freely."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_2_2.png",alt:"Blind overview"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Header section"}),"\n",(0,s.jsx)(n.li,{children:"Content section"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,s.jsxs)(n.p,{children:["Multiple blinds can be placed below each other to create an accordion. The recommended distance between the blinds is ",(0,s.jsx)(n.code,{children:"0.5rem"}),". Typically, only one blind can be opened within an accordion but users can be allowed to open multiple blinds at a time."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_2_655.png",alt:"Accordion"})}),"\n",(0,s.jsx)(n.h3,{id:"variants",children:"Variants"}),"\n",(0,s.jsx)(n.p,{children:"Multiple blind variants are available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Filled"}),": Default variant"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outline"}),": Variant for lower visual emphasis"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Primary"}),": Variant for high visual emphasis"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"State-related variants"}),": Alarm, critical, warning, success, info, neutral"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_929_47485.png",alt:"Blind variants"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Icon"}),": Blinds can, but don't have to, include an icon in the header section. The icon is positioned before the blind label."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sublabel"}),": A secondary label can be placed within the header section. The sublabel gives additional information about the blind's content."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Header action"}),": The header section can contain an action area. We typically use the action area to include one or two buttons for actions directly related to the blind, e.g. to delete the blind or to navigate to additional content."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,s.jsx)(n.p,{children:"The user expands and collapses the blind by pressing anywhere in the header section. When the blind is expanded, content below the blind is moved downwards."}),"\n",(0,s.jsx)(n.h3,{id:"states",children:"States"}),"\n",(0,s.jsx)(n.p,{children:"For all blind variants, a default, hover, active and focused state is available."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_2_352.png",alt:"Blind states"})}),"\n",(0,s.jsx)(n.h3,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Do stay within the recommended number of blinds - between 3 and 7"}),"\n",(0,s.jsx)(n.li,{children:"Don't use multi-line text in the header. The header section has a fixed height for single-line text entries"}),"\n",(0,s.jsx)(n.li,{children:"Don't change the position of the chevron icon and the blind's label in the header"}),"\n",(0,s.jsx)(n.li,{children:"Don't use a blind if there is only a single category to be displayed"}),"\n",(0,s.jsx)(n.li,{children:"Don't use blinds to display hierarchically structured files or objects - rather use a tree for such cases"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"related-patterns",children:"Related patterns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../tabs",children:"Tabs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../tree",children:"Tree"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../workflow",children:"Workflow"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);