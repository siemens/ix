"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3199],{41739:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"components/toast/guide","title":"Toast - Usage","description":"Toasts are UI elements where an event causes a small text field to appear on screen. Toasts are informative, last for a few seconds only, and take up a very small part of the screen to avoid interrupting the workflow. They usually follow an action performed by the user and provide information about the success or failure of that action. We typically use toasts for immediate feedback or tips on actions that a user performs, e.g. successful deletion.","source":"@site/docs/components/toast/guide.md","sourceDirName":"components/toast","slug":"/components/toast/guide","permalink":"/version-alpha/docs/components/toast/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/toast/guide.md","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Toast","permalink":"/version-alpha/docs/components/toast/"},"next":{"title":"Code","permalink":"/version-alpha/docs/components/toast/code"}}');var n=s(65723),i=s(65598);const a={"doc-type":"tab-item"},r="Toast - Usage",l={},c=[{value:"Options",id:"options",level:2},{value:"Behavior in context",id:"behavior-in-context",level:2},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:2},{value:"Related",id:"related",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"toast---usage",children:"Toast - Usage"})}),"\n",(0,n.jsx)(t.p,{children:"Toasts are UI elements where an event causes a small text field to appear on screen. Toasts are informative, last for a few seconds only, and take up a very small part of the screen to avoid interrupting the workflow. They usually follow an action performed by the user and provide information about the success or failure of that action. We typically use toasts for immediate feedback or tips on actions that a user performs, e.g. successful deletion."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_2550_58743.png",alt:"Overview"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Icon"}),"\n",(0,n.jsx)(t.li,{children:"Button"}),"\n",(0,n.jsx)(t.li,{children:"Progress bar"}),"\n",(0,n.jsx)(t.li,{children:"Header"}),"\n",(0,n.jsx)(t.li,{children:"Message"}),"\n",(0,n.jsx)(t.li,{children:"Close action"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Toast types:"})," There are four preset toast types and one custom type:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Info: Provides users with additional information about the performed action."}),"\n",(0,n.jsx)(t.li,{children:"Success: Informs users of a successfully performed action."}),"\n",(0,n.jsx)(t.li,{children:"Warning: Warns users of potential problems that could occur due to the action."}),"\n",(0,n.jsx)(t.li,{children:"Error: Notifies users that the action cannot be performed due to a specific problem."}),"\n",(0,n.jsx)(t.li,{children:"Custom: Adjust the icon and its color to customize your own toast messages."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Header:"}),' Add a header for the toast. Use short and concise words. We typically use 1 to 3 keywords, such as "Error occurred" or "Action completed".']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Message:"}),' Add a clear and concise message providing more detailed information about the toast event. We typically provide additional context or instructions related to the event, e.g. "Please check your email for further instructions" or "Your changes have been saved successfully".']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Button:"})," Include a button to provide users with an option to take further action. We typically use a button to give the user an option to undo the action or to provide a link for further information."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Position:"})," Toasts are positioned either at the bottom or top right. The default position is bottom right. This position is configured globally, which means all toasts appear from the same position. We typically change the default position if the toast covers important workflow elements."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_2552_64766.png",alt:"Toast types"})}),"\n",(0,n.jsx)(t.h2,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Auto closure:"})," Toasts should only be displayed on the screen for a few seconds. A progress bar is displayed to visualize the time left until the toast disappears. We typically leave the toast on the screen from 3 to 8 seconds."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Manual closure:"})," Toasts can be closed manually at any time. It's also possible to suppress the automatic closing so that the user has to actively close the toast. We normally use a purely manual closure of the toast if the workflow is continued by using the toast, e.g. downloading files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Multiple toasts:"})," Toasts are stacked on top of each other with the newest at the bottom."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Modal vs. toast:"})," When both the modal and the toast are triggered simultaneously, the toast appears below the modal. The toast is visible but blurred due to the transparent layer, and it eventually closes if not prevented by the auto-closing option."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_2589_2697.png",alt:"Toast in Context"})}),"\n",(0,n.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Do use toasts to provide contextual tips and shortcuts for users"}),"\n",(0,n.jsx)(t.li,{children:"Do use toasts to instantly inform a user about the outcome of an action"}),"\n",(0,n.jsx)(t.li,{children:"Do include shortcuts to undo an action immediately after it's taken"}),"\n",(0,n.jsx)(t.li,{children:"Do stick with a consistent position for toasts within the same app and avoid interchanging their positions"}),"\n",(0,n.jsxs)(t.li,{children:["Don\u2019t use toasts for high-priority or critical alerts that prevent the user from continuing their work (use a ",(0,n.jsx)(t.a,{href:"../messagebar",children:"modal"})," instead)"]}),"\n",(0,n.jsx)(t.li,{children:"Don\u2019t edit or reuse icons or icon colors from the four predefined toast types when creating custom toasts"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../modal",children:"Modal"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../messagebar",children:"Message bar"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../drawer",children:"Drawer"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},65598:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var o=s(22155);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);