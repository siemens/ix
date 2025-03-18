"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9573],{84892:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"components/chip/guide","title":"guide","description":"Guidelines","source":"@site/docs/components/chip/guide.md","sourceDirName":"components/chip","slug":"/components/chip/guide","permalink":"/version-alpha/docs/components/chip/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/chip/guide.md","tags":[],"version":"current","frontMatter":{}}');var t=s(65723),o=s(65598);const a={},r=void 0,l={},c=[{value:"Guidelines",id:"guidelines",level:2},{value:"Variants",id:"variants",level:3},{value:"Options",id:"options",level:3},{value:"Behavior",id:"behavior",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:3},{value:"Related patterns",id:"related-patterns",level:3}];function h(e){const i={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,t.jsx)(i.p,{children:"Chips typically contain a concise label and sometimes an icon, and they are both clickable and closable."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1149_41643.png",alt:"Chip overview"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Container"}),"\n",(0,t.jsx)(i.li,{children:"Label text"}),"\n",(0,t.jsx)(i.li,{children:"Icon"}),"\n",(0,t.jsx)(i.li,{children:"Close button"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(i.p,{children:"With our chip variants, you can apply different colors based on their purpose, importance or context. We use chip variants to show class, status and levels of importance. The custom variant is often used for chips that visualize a high number of different categories, but does not permit color specification for hover and active states."}),"\n",(0,t.jsx)(i.p,{children:"Chip variants:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Primary"}),": For high visual emphasis"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"State-related variants"}),": Alarm, critical, warning, success, info and neutral"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Custom"}),": For a customized background and label color"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1201_9512.png",alt:"Chip variants"})}),"\n",(0,t.jsx)(i.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Active"}),": Specifies chip interactivity. When set to false, user input such as mouse-over and keyboard navigation are disabled and the close button is not visible."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Background"}),": Use to set a custom background color when you require more flexibility in styling the chip. Only available for the custom chip variant."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Outline"}),": Use for lower visual emphasis."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Closable"}),": When set, the chip contains a close button that removes the entire chip when selected. This feature is only applicable to active chips so users can easily remove specific chips when necessary."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Icon"}),": Chips can include an icon within the element which is positioned before the chip's label."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Color"}),": Customize font and icon color for chip. This allows users to specify a unique font color in combination with a custom background color (only applicable when the variant is set to 'custom')."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Width"}),": Typically content length determines chip width with a minimum width of '2rem'. Chip width can be set to a specific value."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Tooltip text"}),": Provide a specific text to be displayed as the tooltip or set the attribute without a specific value to display the chip's text content."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"behavior",children:"Behavior"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Reactive"}),": Chips react or change their appearance or behavior based on user actions. For example, updates occur as a response to system actions, providing real-time information about system changes or events."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Multi-selection"}),": Chips can visualize multi-selection and filter actions. This helps users to easily identify and understand their choices."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Placement"}),": We typically place chips inline with other objects to inform users about their state, within tables or grouped together to show selected options and filters. We do not place chips within input and filter components as these components have similar components already built-in."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Dismiss"}),": When users select close, chips are dismissed from the list or interface and are removed visually."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Text truncation"}),": When a width is set for chips, long labels are truncated to fit the available space."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"states",children:"States"}),"\n",(0,t.jsx)(i.p,{children:"Chips take a default, hover, focused or active state with a varying background color. For the custom chip variant, the specified colors for font and background are applied to all states."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1246_6190.png",alt:"Chip states"})}),"\n",(0,t.jsx)(i.h3,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Do use chips to tag and categorize so users can easily organize and filter content"}),"\n",(0,t.jsx)(i.li,{children:"Do ensure proper color contrast between chip background and text/icon with the custom variant to support readability"}),"\n",(0,t.jsx)(i.li,{children:"Do consider chip spacing for easy tapping or selecting with mobiles and desktops"}),"\n",(0,t.jsx)(i.li,{children:"Don't overuse chips as this leads to cluttered and overwhelming interfaces"}),"\n",(0,t.jsx)(i.li,{children:"Don't use different styles for chips with the same or similar use"}),"\n",(0,t.jsx)(i.li,{children:"Don't use chips without any interaction (we recommend pills instead)"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"related-patterns",children:"Related patterns"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../pill",children:"Pill"})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);