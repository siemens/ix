"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5542],{17574:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"components/input-date/guide","title":"guide","description":"Guidelines","source":"@site/docs/components/input-date/guide.md","sourceDirName":"components/input-date","slug":"/components/input-date/guide","permalink":"/version-alpha/docs/components/input-date/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/input-date/guide.md","tags":[],"version":"current","frontMatter":{}}');var s=i(65723),l=i(65598);const r={},d=void 0,a={},o=[{value:"Guidelines",id:"guidelines",level:2},{value:"Options",id:"options",level:3},{value:"Behavior in context",id:"behavior-in-context",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:3},{value:"Related",id:"related",level:3}];function c(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,s.jsx)(n.p,{children:"The date input component is typically used in forms, filters and scheduling tools to ensure consistent and accurate date entries. By standardizing date input, it helps maintain data integrity and improves the user experience in applications requiring precise date information."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_3629_6200.png",alt:"Date input overview"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Label"}),"\n",(0,s.jsx)(n.li,{children:"Required field indicator"}),"\n",(0,s.jsx)(n.li,{children:"Current value"}),"\n",(0,s.jsx)(n.li,{children:"Calendar icon button"}),"\n",(0,s.jsx)(n.li,{children:"Input field"}),"\n",(0,s.jsx)(n.li,{children:"Date dropdown"}),"\n",(0,s.jsx)(n.li,{children:"Month and year selection"}),"\n",(0,s.jsx)(n.li,{children:"Weekdays"}),"\n",(0,s.jsx)(n.li,{children:"Week numbers"}),"\n",(0,s.jsx)(n.li,{children:"Indicator for current day"}),"\n",(0,s.jsx)(n.li,{children:"Indicator for selected day"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Label"}),": See ",(0,s.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Required"}),": See ",(0,s.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Helper text"}),": See ",(0,s.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Feedback text"}),": See ",(0,s.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Show text as tooltip"}),": See ",(0,s.jsx)(n.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Placeholder"}),": See ",(0,s.jsx)(n.a,{href:"../forms-field",children:"form field"}),". We typically use a placeholder to show an example date format to assist users when the field is empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error message"}),": Feedback text when date is not parsable. We typically use this to inform users that the entered date format is incorrect and guide them to enter a valid date."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Format"}),": Specify the date format, default \u2018yyyy/LL/dd\u2019 to ensure that dates are entered in a consistent and recognizable format."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Interaction"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click or focus opens the date picker."}),"\n",(0,s.jsx)(n.li,{children:"Use mouse or keyboard arrows to navigate to the desired date."}),"\n",(0,s.jsx)(n.li,{children:"Selecting a date in date picker with mouse click or enter closes the date picker."}),"\n",(0,s.jsx)(n.li,{children:"Typing a date into input field with valid format closes the date picker."}),"\n",(0,s.jsx)(n.li,{children:"Escape key closes the date picker."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Validation"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use feedback text for validation types valid, info, warning and invalid."}),"\n",(0,s.jsx)(n.li,{children:"Invalid feedback automatically provided if entered date in not parsable."}),"\n",(0,s.jsxs)(n.li,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"../forms-validation",children:"validation"})," chapter for detailed guidelines."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Overflow"}),": The input field should be wide enough to display the full date without truncation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Alignment"}),": Date inputs are always aligned to the left."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"states",children:"States"}),"\n",(0,s.jsx)(n.p,{children:"Date input has five states: Default, hover, disabled, read-only and focused."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_3989_2545.png",alt:"Date input states"})}),"\n",(0,s.jsx)(n.h3,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Do use consistent date formats throughout the application to avoid confusion"}),"\n",(0,s.jsx)(n.li,{children:"Do use separate inputs for start and end dates to simplify date ranges"}),"\n",(0,s.jsx)(n.li,{children:"Do provide clear instructions, such as \u201cEnter the date in yyyy/mm/dd format\u201d"}),"\n",(0,s.jsx)(n.li,{children:"Do consider localization to adapt date formats to local conventions"}),"\n",(0,s.jsx)(n.li,{children:"Don't use ambiguous formats like 09/08/2006 without giving clear context"}),"\n",(0,s.jsx)(n.li,{children:"Don't allow free text without validation or formatting guidance"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../date-dropdown",children:"Date dropdown"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../date-picker",children:"Date picker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../date-picker",children:"Date time picker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../forms-field",children:"Forms field"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../forms-validation",children:"Validation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../dropdown",children:"Dropdown"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../input",children:"Input"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../select",children:"Select"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);