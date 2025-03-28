"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8772],{25197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"components/custom-field/guide","title":"Custom field - Usage","description":"The custom field\'s properties\xa0allow you to control the validation state of the field and the helper text. It\'s a\xa0versatile\xa0tool to create your own form fields that can be used in combination with the \'Form\' components to create complex forms.","source":"@site/docs/components/custom-field/guide.md","sourceDirName":"components/custom-field","slug":"/components/custom-field/guide","permalink":"/version-alpha/docs/components/custom-field/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/custom-field/guide.md","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Custom field","permalink":"/version-alpha/docs/components/custom-field/"},"next":{"title":"Code","permalink":"/version-alpha/docs/components/custom-field/code"}}');var i=n(65723),s=n(65598);const l={"doc-type":"tab-item"},r="Custom field - Usage",d={},a=[{value:"Options",id:"options",level:2},{value:"Behavior in context",id:"behavior-in-context",level:2},{value:"States",id:"states",level:2},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:2},{value:"Related",id:"related",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"custom-field---usage",children:"Custom field - Usage"})}),"\n",(0,i.jsx)(t.p,{children:"The custom field's properties\xa0allow you to control the validation state of the field and the helper text. It's a\xa0versatile\xa0tool to create your own form fields that can be used in combination with the 'Form' components to create complex forms."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_3303_3291.png",alt:"Custom field"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Label"}),"\n",(0,i.jsx)(t.li,{children:"Helper or feedback text"}),"\n",(0,i.jsx)(t.li,{children:"Form component(s)"}),"\n",(0,i.jsx)(t.li,{children:"Required indicator"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Label:"}),"\xa0See ",(0,i.jsx)(t.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Group label:"})," Add a label to the group of radio buttons to provide context to your users. We typically use short and descriptive labels to summarize the options in the group."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Helper text"}),": See ",(0,i.jsx)(t.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Feedback text"}),": See ",(0,i.jsx)(t.a,{href:"../forms-field",children:"form field"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Customization"}),": Add form components to create the use case you need. For example, for a file upload field, add an input field with a ",(0,i.jsx)(t.code,{children:"readonly"}),"\xa0state and an ",(0,i.jsx)(t.a,{href:"../icon-button",children:"icon button"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_3483_7223.png",alt:"Custom field example"})}),"\n",(0,i.jsx)(t.h2,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Validation:"}),"\xa0See ",(0,i.jsx)(t.a,{href:"../forms-validation",children:"validation"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Form behavior:"})," See ",(0,i.jsx)(t.a,{href:"../forms-behavior",children:"behavior"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,i.jsx)(t.p,{children:"The states depend on the\xa0component that you use in the custom field. The custom field itself does not have any interaction states."}),"\n",(0,i.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Do use the custom field when your desired solution is not covered by the already existing form field components"}),"\n",(0,i.jsx)(t.li,{children:"Do use the custom field in combination with the form component to create complex forms"}),"\n",(0,i.jsx)(t.li,{children:"Don't use the custom field for simple form fields, use the form field component instead"}),"\n",(0,i.jsx)(t.li,{children:"Don't use the custom field without a form component, it is a wrapper component that is meant to be used in combination with the form component"}),"\n",(0,i.jsx)(t.li,{children:"Don't use helper and feedback texts for single fields within a custom field, use the helper and feedback text of the whole custom field instead"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../forms-field",children:"Form field"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../forms-validation",children:"Validation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../forms-behavior",children:"Behavior"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../forms-layout",children:"Layout"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},65598:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var o=n(22155);const i={},s=o.createContext(i);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);