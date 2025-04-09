"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4067],{34534:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"home/migration/uxt","title":"Migration from UXT 2.7.0","description":"For a quick and easy migration without changing your code base, the iX-UXT CSS Theme is prepared for app developers using the CSS from UXT (User Experience Toolkit, formerly named MindSphere Design System).","source":"@site/docs/home/migration/uxt.md","sourceDirName":"home/migration","slug":"/home/migration/uxt","permalink":"/version-alpha/docs/home/migration/uxt","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/home/migration/uxt.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Migration from UXT 2.7.0","title":"Migration from UXT 2.7.0","doc-type":"banner","description":"For a quick and easy migration without changing your code base, the iX-UXT CSS Theme is prepared for app developers using the CSS from UXT (User Experience Toolkit, formerly named MindSphere Design System)."},"sidebar":"home","previous":{"title":"Migration from Core UI 6.5.0","permalink":"/version-alpha/docs/home/migration/core-ui"},"next":{"title":"Angular","permalink":"/version-alpha/docs/home/installation/angular"}}');var r=s(65723),o=s(65598),t=s(4180);const d={sidebar_position:2,sidebar_label:"Migration from UXT 2.7.0",title:"Migration from UXT 2.7.0","doc-type":"banner",description:"For a quick and easy migration without changing your code base, the iX-UXT CSS Theme is prepared for app developers using the CSS from UXT (User Experience Toolkit, formerly named MindSphere Design System)."},c="",l={},a=[{value:"Usage",id:"usage",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Component name differences",id:"component-name-differences",level:2},{value:"System icons",id:"system-icons",level:2},{value:"Figma library",id:"figma-library",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:""})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"For the full experience, please use the Siemens Industrial Experience components. The theme is intended for a quick, yet, incomplete switch from UXT as a legacy design system."})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://code.siemens.com/siemens-ix/ix-brand-theme/uxt",children:"Brand CSS theme"})," and import it into your project. Note that it's available exclusively for Siemens AG products. For non Siemens AG products please ",(0,r.jsx)(n.a,{href:"/version-alpha/docs/home/support/contact-us",children:"contact us"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Apply the class ",(0,r.jsx)(n.code,{children:".ix"})," to the ",(0,r.jsx)(n.code,{children:".uxt-defaults"})," element."]}),"\n",(0,r.jsxs)(n.li,{children:["Depending if you want to use the dark or light theme, add ",(0,r.jsx)(n.code,{children:".uxt-ix-theme-dark"})," or ",(0,r.jsx)(n.code,{children:".uxt-ix-theme-light"})," to your ",(0,r.jsx)(n.code,{children:"body"})," element."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In the end, your setup should look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<body class="uxt-ix-theme-dark">\n  ...\n  <div class="uxt uxt-defaults ix"></div>\n  ...\n</body>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<body class="uxt-ix-theme-light">\n  ...\n  <div class="uxt uxt-defaults ix"></div>\n  ...\n</body>\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": We recommend using the CSS theme with UXT v2.7.0"]}),"\n",(0,r.jsx)(n.p,{children:"Your layout might change in some places when applying the theme, including:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Headings are notably smaller"}),"\n",(0,r.jsx)(n.li,{children:"Buttons are slightly wider because of the bold label"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.A,{title:"I don\u2019t see the right colors.",id:"colors",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check if you use color variables (no raw HEX or RGB values)"}),"\n",(0,r.jsxs)(n.li,{children:["Check if you applied the ",(0,r.jsx)(n.code,{children:".uxt-ix-theme-dark"})," on the ",(0,r.jsx)(n.code,{children:"body"})]}),"\n",(0,r.jsx)(n.li,{children:"Update your UXT version to v2.7.0"}),"\n"]})}),"\n",(0,r.jsx)(t.A,{title:"My custom component doesn\u2019t look right.",id:"custom-comoponents",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Check if you override specific attributes with ",(0,r.jsx)(n.code,{children:"!important"})]}),"\n",(0,r.jsxs)(n.li,{children:["Check if you added the ",(0,r.jsx)(n.code,{children:".ix"})," class to the element with the ",(0,r.jsx)(n.code,{children:".uxt-defaults"})," class, as shown above"]}),"\n",(0,r.jsx)(n.li,{children:"Update your current UXT version to 2.7.0"}),"\n"]})}),"\n",(0,r.jsx)(t.A,{title:"The colors don\u2019t look right in both themes.",id:"colors-dark",showBorderBottom:!0,children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check if you use color variables (no raw HEX or RGB values)"}),"\n",(0,r.jsxs)(n.li,{children:["Check if you used meta color variables correctly (see more details ",(0,r.jsx)(n.a,{href:"https://design.mindsphere.io/patterns/color.html#tab2anchor4",children:"here"}),"):","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"For text elements: use the font colors, e.g. color-font or color-font-secondary (no base colors)"}),"\n",(0,r.jsx)(n.li,{children:"For backgrounds: use the interface colors, e.g. color-interface or color-interface-secondary (no base colors)"}),"\n",(0,r.jsx)(n.li,{children:"For statuses: use the error, warning, info, success colors (not primary)"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["If you're facing any other problems, please raise an issue in GitHub ",(0,r.jsx)(n.a,{href:"https://github.com/siemens/ix/issues",children:"raising an issue"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"component-name-differences",children:"Component name differences"}),"\n",(0,r.jsx)(n.p,{children:"As some of the components are named differently in Industrial Experience, please consult this list of the most important component name differences to help make your migration easier:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"User Experience Toolkit"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Industrial Experience"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"App bar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/application-menu",children:"Nav menu"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Badge"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/components/pill",children:"Pill"}),", ",(0,r.jsx)(n.a,{href:"/docs/components/chip",children:"chip"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Busy indicator"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/spinner",children:"Spinner"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Button",(0,r.jsx)("br",{}),"- primary",(0,r.jsx)("br",{}),"- secondary",(0,r.jsx)("br",{}),"- ghost"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/components/button",children:"Button"}),(0,r.jsx)("br",{}),"- primary filled",(0,r.jsx)("br",{}),"- primary outline",(0,r.jsx)("br",{}),"- primary ghost"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Card grid"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/layout-grid",children:"Layout grid"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Container"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/card",children:"Card"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Dialog"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/modal",children:"Modal"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Dropzone"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/upload",children:"Upload"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"List"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/event-list",children:"Event list"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stepper"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/workflow",children:"Workflow"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Menu"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/dropdown-button",children:"Dropdown button"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Message"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/messagebar",children:"Message bar"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Notification"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/toast",children:"Toast"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pager"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/pagination",children:"Pagination"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Popover"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/components/tooltip",children:"Tooltip"}),", ",(0,r.jsx)(n.a,{href:"/docs/components/dropdown",children:"dropdown"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Switch"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/components/toggle",children:"Toggle"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Context region"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/components/panes",children:"Pane"})," (inline right)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Item region"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/components/panes",children:"Pane"})," (floating right)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leading region"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/components/panes",children:"Pane"})," (inline left)"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"system-icons",children:"System icons"}),"\n",(0,r.jsx)(n.p,{children:"Key differences between UXT and Industrial Experience:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"UXT offers an iconfont with 3 different styles (regular, bold, filled)"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/version-alpha/docs/icons/icon-library",children:"iX offers SVGs"})," with mainly 1 style that corresponds to our bold and partially filled variants separately"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When changing to the SVG icons by Industrial Experience, check whether your stylings still apply in your custom-built components."}),"\n",(0,r.jsx)(n.h2,{id:"figma-library",children:"Figma library"}),"\n",(0,r.jsxs)(n.p,{children:["When switching from UXT to Industrial Experience, use the swap library feature as described ",(0,r.jsx)(n.a,{href:"https://help.figma.com/hc/en-us/articles/4404856784663-Swap-style-and-component-libraries",children:"here"}),"."]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4180:(e,n,s)=>{s.d(n,{A:()=>d});var i=s(22155),r=s(70851),o=s(65723);let t=0;function d(e){const[n,s]=(0,i.useState)(!1),d=`accordion-${e.id||t++}-panel`;return(0,i.useEffect)((()=>{e.id&&window.location.hash===`#${e.id}`&&(s(!0),document.getElementById(e.id)?.scrollIntoView())}),[e.id]),(0,o.jsxs)("div",{className:(0,r.A)("Accordion",{Accordion__Expanded:n,Accordion__Last:e.showBorderBottom}),children:[(0,o.jsx)("a",{id:e.id}),(0,o.jsx)("h3",{onClick:()=>s(!n),onKeyDown:e=>{!function(e){"Enter"!==e.key&&" "!==e.key||(s(!n),e.preventDefault())}(e)},role:"heading",children:(0,o.jsxs)("div",{className:"Accordion__Header",role:"button",tabIndex:0,"aria-expanded":n,"aria-controls":d,children:[(0,o.jsx)("span",{className:"anchor Accordion__Title",id:e.id,children:e.title}),i.createElement("ix-icon",{name:n?"minus":"plus",color:n?"color-dynamic":"color-std-text"})]})}),n&&(0,o.jsx)("div",{id:d,className:"Accordion__Panel",children:e.children})]})}},65598:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(22155);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);