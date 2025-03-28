"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4216],{19560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"components/card-list/guide","title":"Card list - Usage","description":"Card list content can be hidden or revealed by clicking on a control element. We typically use card lists on dashboards to show a huge amount of information in an organized and hierarchical way.","source":"@site/docs/components/card-list/guide.md","sourceDirName":"components/card-list","slug":"/components/card-list/guide","permalink":"/version-alpha/docs/components/card-list/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/card-list/guide.md","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Card list","permalink":"/version-alpha/docs/components/card-list/"},"next":{"title":"Code","permalink":"/version-alpha/docs/components/card-list/code"}}');var i=t(65723),a=t(65598);const o={"doc-type":"tab-item"},l="Card list - Usage",r={},c=[{value:"Types",id:"types",level:2},{value:"Options",id:"options",level:2},{value:"Behavior in context",id:"behavior-in-context",level:2},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:2},{value:"Related",id:"related",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"card-list---usage",children:"Card list - Usage"})}),"\n",(0,i.jsx)(n.p,{children:"Card list content can be hidden or revealed by clicking on a control element. We typically use card lists on dashboards to show a huge amount of information in an organized and hierarchical way."}),"\n",(0,i.jsx)(n.p,{children:"Card lists consist of a header section at the top and a content section below. The header section includes an icon button with a chevron on the left, followed by the card list's label. In the content section, items of the same type can be arranged in two different layout styles: stack and scroll."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_897_31906.png",alt:"Card list overview"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Header section"}),"\n",(0,i.jsx)(n.li,{children:"Content section"}),"\n",(0,i.jsx)(n.li,{children:'"Show all" button'}),"\n",(0,i.jsx)(n.li,{children:'"Show more" card'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,i.jsx)(n.p,{children:"The stack card list style displays content items from left to right next to each other and wraps them into a new line when space runs out. This means the height of the section can dynamically change."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_910_8581.png",alt:"Card list - stack style"})}),"\n",(0,i.jsx)(n.p,{children:"The scroll card list style displays the content items from left to right next to each other in a single row. When the space runs out, horizontal scrolling is enabled, indicated by a semi-transparent area on the left or right end of the content section."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_915_8647.png",alt:"Card list - scroll style"})}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Label"}),": Card lists can include a label in the header section. The label is positioned right next to the chevron."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Collapse"}),": By default, the card list is expanded, but this can be customized to suit your specific needs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Max visible cards"}),': By default, the card list displays a maximum of 12 items. If more items are available, a "Show more" card is displayed.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Show all button"}),": The header section can contain a button that triggers the action to show all card list items. Typically, these items are shown on a new page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"String - Show all"}),': By default, the button to display all items is labeled "Show all".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Show all count"}),': This represents the total number of card list items. This value is displayed on the "Show all" button.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"String - More cards"}),': By default, the card used to indicate when there are more items available is labeled "There are more cards available".']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Interaction"}),": Users expand and collapse card list content by clicking on the icon button with the chevron in the header section. When the card list is expanded, content below the card list is pushed downwards."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'"Show all" button'}),': Sometimes card lists only need to show the most important or most recent items. Clicking on the "Show all" button in the header section shows all items. Typically, these items are displayed on a new page.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'"Show more" card'}),': The number of visible items inside a list can be limited to reduce the user\'s cognitive load. The "Show more" card indicates that more information is available. Selecting the card either displays the next chunk of items or shows all items on a new page, similar to the "Show all" button pattern.']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Do keep cards and items within card lists the same size"}),"\n",(0,i.jsx)(n.li,{children:"Don't place different types of components within card lists"}),"\n",(0,i.jsx)(n.li,{children:"Don't nest card lists within each other"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../blind",children:"Blind"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../card",children:"Card"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65598:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(22155);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);