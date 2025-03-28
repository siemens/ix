"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2601],{38170:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"components/panes/guide","title":"Panes - Usage","description":"Panes have a header and a content area. When collapsed, panes are either hidden or reduced to a bar. In our applications, we often include contextual information, options, trees and lists inside panes.","source":"@site/docs/components/panes/guide.md","sourceDirName":"components/panes","slug":"/components/panes/guide","permalink":"/version-alpha/docs/components/panes/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/panes/guide.md","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Panes","permalink":"/version-alpha/docs/components/panes/"},"next":{"title":"Code","permalink":"/version-alpha/docs/components/panes/code"}}');var s=a(65723),i=a(65598);const o={"doc-type":"tab-item"},l="Panes - Usage",r={},d=[{value:"Options",id:"options",level:2},{value:"Behavior",id:"behavior",level:2},{value:"States",id:"states",level:2},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:2},{value:"Related",id:"related",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"panes---usage",children:"Panes - Usage"})}),"\n",(0,s.jsx)(n.p,{children:"Panes have a header and a content area. When collapsed, panes are either hidden or reduced to a bar. In our applications, we often include contextual information, options, trees and lists inside panes."}),"\n",(0,s.jsx)(n.p,{children:"Panes help users focus on tasks as related controls are visually grouped and the main content has less information. They are also beneficial for compact and hierarchically organized content and provide a more dynamic layout."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1680_22044.png",alt:"Pane overview"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Left pane, inline"}),"\n",(0,s.jsx)(n.li,{children:"Top pane, inline"}),"\n",(0,s.jsx)(n.li,{children:"Right pane, floating"}),"\n",(0,s.jsx)(n.li,{children:"Bottom pane, inline"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Heading"}),": Set a headline for the pane (we normally use a short content description)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Icon"}),": Panes can display an icon in the pane header next to the title."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Composition"}),': Panes can be positioned on the left, top, right or bottom. We often use left panes for structuring components like trees or lists, and right panes for contextual information. Top and bottom panes are less common in our applications, but can help communicate a clear "top to bottom" hierarchy.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Size"}),": Sizes can be picked either as a fixed size (in pixels) or as a relative size (in percentage) depending on the intended layout. However, picking sizes only applies to medium and large screens as small screen panes are always displayed in full screen (see responsiveness below for more information). We usually choose a pane width and height that avoids the need for scrolling in our applications."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Borderless"}),": Panes can have borders to visually split them from other content areas. We typically use borderless panes when placed within layouts that already have other visual means to split areas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hide on collapse"}),": Define whether a pane is visible in its collapsed state. If it is visible, it has a bar appearance when collapsed that contains both the title and the expand button. We usually use inline panes with a collapsible option and floating panes without since they are triggered from a dedicated control like a button or a list item."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Variant"}),": When used within a layout, floating panes are placed above (z-axis) the main content but below the navigation menu and header. When expanded, they cover a part of the main content. Inline panes are placed on one level with the main content. When expanded, they move the main content and reduce its available space."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Layout"}),": Depending on which pane needs more focus, the top/bottom or left/right panes can use more space."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1681_28910.png",alt:"Pane layouts"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Full height (left/right)"}),"\n",(0,s.jsx)(n.li,{children:"Full width (top/bottom)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"behavior",children:"Behavior"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Interaction"}),": Users expand panes that are collapsible by pressing on the expand button. To expand panes with hidden collapsed state, users typically click on a button or another interactive component within the main content. They close these panes by either pressing on the button on the right side of the header or clicking outside the pane area. This removes the pane from their view."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Overflow"}),": When content extends the available space within the pane, scrollbars appear. Headers stay fixed at the top allowing users to scroll the content area. We like to avoid overfilling panes with content to remove the need for scrolling."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stacking"}),": When users expand multiple panes within a pane layout, panes are stacked."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Placement"}),": We typically fit a pane layout within the complete content area of a page bounded by the application header on top and the navigation menu on the left."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Responsiveness"}),": On large and medium size screens, all panes have a maximum width or height of ",(0,s.jsx)(n.code,{children:"50%"})," of the available space. On small screens, all panes have full width and expand to full height, but the header and navigation menu remain visible. We show collapsed left and right panes on the top and bottom for a more efficient use of space."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1680_26548.png",alt:"Pane small viewport"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Inline panes in collapsed state"}),"\n",(0,s.jsx)(n.li,{children:"Inline or floating pane in expanded state"}),"\n",(0,s.jsx)(n.li,{children:"Opened navigation menu"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"states",children:"States"}),"\n",(0,s.jsx)(n.p,{children:"Panes have two states: collapsed and expanded. The appearance of the states varies between variants and screen sizes."}),"\n",(0,s.jsx)(n.h2,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Do use panes to organize your content and guide your users' attention"}),"\n",(0,s.jsx)(n.li,{children:"Do use panes to display different views within a single screen"}),"\n",(0,s.jsx)(n.li,{children:"Do use panes to expand/collapse content or hide/reveal content"}),"\n",(0,s.jsx)(n.li,{children:"Don't use panes for a small amount of content"}),"\n",(0,s.jsx)(n.li,{children:"Don't use panes for content that should stay visible"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../drawer",children:"Drawers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../application-header",children:"Header"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../application-menu",children:"Menu"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65598:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(22155);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);