"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30398],{33682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(97458),s=t(16436),a=t(6492);const r={},o=void 0,l={id:"auto-generated/ix-validation-tooltip/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-validation-tooltip/props.md",sourceDirName:"auto-generated/ix-validation-tooltip",slug:"/auto-generated/ix-validation-tooltip/props",permalink:"/docs/auto-generated/ix-validation-tooltip/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-validation-tooltip/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function p(e){return(0,i.jsx)(a.Z,{attributes:[{name:"message",description:"Message of the tooltip",definition:[{name:"Attribute",value:"message"},{name:"Type",value:"string \uff5c undefined"},{name:"Default"}],tags:[]},{name:"placement",description:"Placement of the tooltip",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"bottom" \uff5c "left" \uff5c "right" \uff5c "top"'},{name:"Default",value:"'top'"}],tags:[]},{name:"suppressAutomaticPlacement",description:"Suppress the automatic placement of the dropdown.",definition:[{name:"Attribute",value:"suppress-automatic-placement"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.0.0"}]}]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p()}},76284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>w,default:()=>N,frontMatter:()=>b,metadata:()=>y,toc:()=>T});var i=t(97458),s=t(16436),a=t(47834);function r(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,i.jsx)(n.p,{children:"Form validation gives users feedback on their input to ensure accurate, consistent data is submitted. When requirements are not met or data is incorrect, it\u2019s rejected."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5955&t=IIgjTqoOEP524yAH-4",alt:"Invalid state"})}),"\n",(0,i.jsx)(n.p,{children:"Key aspects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data accuracy: Collect precise information for informed decisions."}),"\n",(0,i.jsx)(n.li,{children:"Security: Prevent malicious submissions."}),"\n",(0,i.jsx)(n.li,{children:"User experience: Improve by guiding users and saving time."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Tooltip and feedback: See ",(0,i.jsx)(n.a,{href:"/docs/controls/forms/forms-field",children:"form field"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Validation options:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On value change (validate during input)"}),"\n",(0,i.jsx)(n.li,{children:"On blur (validate on leaving a field)"}),"\n",(0,i.jsx)(n.li,{children:"On blur of a certain part of the form (validate on leaving a certain part of the form)"}),"\n",(0,i.jsx)(n.li,{children:"On click on submit button (validate after users press the submit button)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"on-value-change",children:"On value change"}),"\n",(0,i.jsx)(n.p,{children:"This option provides instant feedback to the user as they type, making it suitable for checking character rules."}),"\n",(0,i.jsx)(n.p,{children:"Examples: As the user types a password, it instantly shows whether the password meets the required length or contains special characters. With an e-mail address, it validates when the email format is correct."}),"\n",(0,i.jsx)(n.h4,{id:"on-blur",children:"On blur"}),"\n",(0,i.jsx)(n.p,{children:"With this option, validation occurs after the user finishes inputting and leaves the control. It provides immediate feedback and is commonly used for checking required inputs, specific data patterns and comparing input with server data."}),"\n",(0,i.jsx)(n.p,{children:"Example: When the user enters an email address and moves to the next field, it validates when the email format is correct."}),"\n",(0,i.jsx)(n.h4,{id:"on-click-on-submit-button",children:"On click on submit button"}),"\n",(0,i.jsx)(n.p,{children:"This option validates all relevant user input for completeness and plausibility after the user presses the submit button. It's useful for checking data before sending it to the server and for final validation on the server side."}),"\n",(0,i.jsx)(n.p,{children:"Example: When the user fills out a registration form and clicks the submit button, it validates when all required fields are completed and if the data is valid."}),"\n",(0,i.jsx)(n.h4,{id:"on-blur-of-a-certain-part-of-the-form",children:"On blur of a certain part of the form"}),"\n",(0,i.jsx)(n.p,{children:"This option validates multiple input controls when users leave a specific part of the form. It provides feedback on the plausibility of multiple dependent inputs."}),"\n",(0,i.jsx)(n.p,{children:"Example: When the user completes the shipping address section of an e-commerce checkout form and moves to the payment section, it validates if the shipping address is complete and valid."}),"\n",(0,i.jsx)(n.h3,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Validation:"})," A validation occurs when a user interacts with a form field, such as submitting a form or moving to the next field."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Override behavior:"})," When multiple validation states are present, only the message with the highest priority state is shown. The order of priority, from lowest to highest, is: valid, info, warning and invalid."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"states",children:"States"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default: The initial state of a form field, often before any user interaction or validation.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example: Helper text with password strength requirements."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Valid: Indicates that the user input meets all validation criteria and is acceptable.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example: User enters a password that meets all the criteria for a strong password."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Info: Provides additional context or guidance to the user.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example: User changes a field that has a dependency to another field or is not saved yet."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Warning: A non-critical issue or suggestion related to the input.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Examples: User enters a weak password, or a rotation speed that is beyond a safety threshold."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Invalid: Indicates that the user input does not meet the specified requirements.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Examples: User enters an email address without the "@" symbol or misses a required input.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5681&t=IIgjTqoOEP524yAH-4",alt:"States"})}),"\n",(0,i.jsx)(n.h3,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Do use short and helpful copy for validation"}),"\n",(0,i.jsx)(n.li,{children:"Do include all relevant information in the validation message, including context"}),"\n",(0,i.jsx)(n.li,{children:"Don\u2019t show valid feedback on components, only in the input help component"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"related-patterns",children:"Related patterns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/controls/forms/forms-field",children:"Form field"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/controls/forms/forms-behavior",children:"Behavior"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var l=t(95192),c=t(7528),d=(t(93368),t(90466)),p=t(40749),u=t(52983);t(41124),t(94691);var h=t(36365);t(2476);function m(e){const[n,t]=(0,u.useState)(!0),s=(0,c.Z)("/auto-generated"),[a,r]=(0,u.useState)([]),[o,l]=(0,u.useState)(0);return(0,u.useEffect)((()=>{if(e.examplesByName)(0,h.nq)(s,e.name,e.framework,e.includeCssFile).then((e=>{l(0),r(e.filter((e=>e))),t(!1)}));else if(e.files&&e.files[e.framework]){const n=e.files[e.framework];t(!0),(0,h.Td)(s,e.framework,n).then((e=>{l(0),r(e.filter((e=>e))),t(!1)}))}}),[e.framework]),(0,u.useEffect)((()=>{e.onSourceCodeFetched&&e.onSourceCodeFetched(a)}),[a]),n?(0,i.jsx)(d.lL,{}):0===a.length?(0,i.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===a.length?(0,i.jsx)(p.Z,{language:(0,h.G3)(a[0].filename),children:a[0].source}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Vp,{children:a.map(((e,n)=>(0,i.jsx)(d.t3,{onClick:()=>l(n),children:e.filename},e.filename+"."+n)))}),(0,i.jsx)(p.Z,{language:(0,h.G3)(a[o].filename),children:a[o].source})]})}var x=t(75063),f=t(18931);t(33682);function v(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.p,{children:"This section details the technical implementation of validation in form components, utilizing component attributes along with corresponding CSS classes to represent various validation states."}),"\n",(0,i.jsx)(n.h3,{id:"validation-text",children:"Validation text"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"helperText"})," (optional): Text displayed below the field component to provide additional information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"infoText"})," (optional): Informational text for the field component."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"warningText"})," (optional): Warning text for the field component."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"invalidText"})," (optional): Error text for the field component."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"validText"})," (optional): Valid text for the field component."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"showTextAsTooltip"})," (optional): Determines whether to display helper, info, warning, error, and valid text as tooltips."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"validation-states",children:"Validation states"}),"\n",(0,i.jsx)(n.p,{children:"To change the validation representation, you have to apply the corresponding classes to the component."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ix-valid"}),": To show component as valid (Priority 1)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ix-info"}),": To show component as info (Priority 2)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ix-warning"}),": To show component as warning (Priority 3)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ix-invalid"}),": To show component as invalid (Priority 4)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These classes have different priority levels, which determining in which order the styling is applied to the component. (",(0,i.jsx)(n.code,{children:"1"})," is the lowest priority and ",(0,i.jsx)(n.code,{children:"3"})," the highest)"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<ix-select class="ix-invalid ix-info"></ix-select>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Above example will result in displaying the component as ",(0,i.jsx)(n.code,{children:"invalid"}),", because ",(0,i.jsx)(n.code,{children:"invalid"})," has a higher priority than ",(0,i.jsx)(n.code,{children:"info"}),"."]}),"\n",(0,i.jsx)(l.Z,{type:"tip",icon:"\ud83d\udca1",title:"You are using Angular?",children:(0,i.jsxs)(n.p,{children:["When using Angular in combination with reactive forms, it is not necessary to\nmanually apply the CSS classes ",(0,i.jsx)(n.code,{children:".ix-invalid"})," and ",(0,i.jsx)(n.code,{children:".ix-valid"}),". This will be\ndone automatically through value accessors."]})}),"\n",(0,i.jsx)(n.h3,{id:"suppress-internal-validation",children:"Suppress internal validation"}),"\n",(0,i.jsxs)(n.p,{children:["To suppress the internal validation of a component, you have to provide the ",(0,i.jsx)(n.code,{children:"novalidate"})," attribute to the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate",children:"form element"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<form novalidate>\n  \x3c!-- form content --\x3e\n</form>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsxs)(x.Z,{children:[(0,i.jsxs)(f.Z,{value:"angular",label:"Angular",default:!0,children:[(0,i.jsx)(l.Z,{type:"tip",icon:"\ud83d\udca1",title:"Important",children:(0,i.jsxs)(n.p,{children:["Please note that using the ",(0,i.jsx)(n.code,{children:"required"})," attribute in an Angular application could result in unfavourabe behaviour displaying the field as invalid even if there was no user interaction yet.\nTo avoid that it is suggested not to add the ",(0,i.jsx)(n.code,{children:"required"})," attribute, but implement a custom validator for required fields instead (see ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"last-name"})," in the following code)."]})}),(0,i.jsx)(m,{framework:"angular",name:"form-validation",examplesByName:!0,includeCssFile:!0})]}),(0,i.jsxs)(f.Z,{value:"react",label:"React",children:[(0,i.jsx)(l.Z,{type:"tip",icon:"\ud83d\udca1",title:"Just an example",children:(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"react-form-hook"})," is just an example to demonstrate how validation could be done\nwithin React. You can use any other validation library or write your own validation logic."]})}),(0,i.jsx)(m,{framework:"react",name:"form-validation",examplesByName:!0,includeCssFile:!0})]}),(0,i.jsxs)(f.Z,{value:"vue",label:"Vue",children:[(0,i.jsx)(l.Z,{type:"tip",icon:"\ud83d\udca1",title:"Just an example",children:(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"@vuelidate/core"})," is just an example to demonstrate how validation could be done\nwithin Vue. You can use any other validation library or write your own validation logic."]})}),(0,i.jsx)(m,{framework:"vue",name:"form-validation",examplesByName:!0,includeCssFile:!0})]})]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}var j=t(5838);const b={sidebar_position:3},w="Validation",y={id:"controls/forms/forms-validation",title:"Validation",description:"<DeprecatedTags",source:"@site/docs/controls/forms/forms-validation.mdx",sourceDirName:"controls/forms",slug:"/controls/forms/forms-validation",permalink:"/docs/controls/forms/forms-validation",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/forms/forms-validation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Layout",permalink:"/docs/controls/forms/forms-layout"},next:{title:"Behavior",permalink:"/docs/controls/forms/forms-behavior"}},A={},T=[{value:"Guidelines",id:"guidelines",level:2},{value:"Options",id:"options",level:3},{value:"On value change",id:"on-value-change",level:4},{value:"On blur",id:"on-blur",level:4},{value:"On click on submit button",id:"on-click-on-submit-button",level:4},{value:"On blur of a certain part of the form",id:"on-blur-of-a-certain-part-of-the-form",level:4},{value:"Behavior in context",id:"behavior-in-context",level:3},{value:"States",id:"states",level:3},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:3},{value:"Related patterns",id:"related-patterns",level:3},{value:"Development",id:"development",level:2},{value:"Validation text",id:"validation-text",level:3},{value:"Validation states",id:"validation-states",level:3},{value:"Example",id:"example",level:4},{value:"Suppress internal validation",id:"suppress-internal-validation",level:3},{value:"Example",id:"example-1",level:3}];function $(e){const n={h1:"h1",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)("div",{className:"d-flex gap-2 align-items-center",children:(0,i.jsx)(j.Z,{url:"/docs/legacy/validation",hasDeprecatedAncestor:!0})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(a.ZP,{children:[(0,i.jsx)(o,{}),(0,i.jsx)(g,{})]})]})}function N(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)($,{...e})}):$(e)}},6492:(e,n,t)=>{t.d(n,{Z:()=>r});t(52983);var i=t(4173),s=t(97458);function a(e){return(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((n=>(0,s.jsx)(i.h,{message:n.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((n=>(0,s.jsx)(i.Q,{message:n.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Content",children:[(0,s.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,s.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,s.jsxs)("div",{className:"row Attribute",children:[(0,s.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,s.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,s.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,s.jsx)(a,{attribute:e},e.name)))]})}},4173:(e,n,t)=>{t.d(n,{Q:()=>s,h:()=>a});t(52983);var i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function a(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},94691:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(76213),s=t(7528),a=t(2476),r=t(52983),o=t(83129),l=t(97458);function c(e){const n=(0,a.Z)(),[t]=(0,r.useState)(!1),c=(0,s.Z)("/"),[d,p]=(0,r.useState)(""),[u,h]=(0,r.useState)((0,o.V)(n)),{preferredVersion:m}=(0,i.J)();return(0,r.useEffect)((()=>{const n=m?.name;p(void 0===n||"current"===n?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${n}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,m?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(n);document.body.classList.forEach((n=>{n.includes("theme-")&&(e=n)})),h(e)},t=new MutationObserver((()=>e()));return t.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{t.disconnect()}}),[]),(0,l.jsx)(l.Fragment,{children:t?(0,l.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",m?.name]}):(0,l.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,n,t)=>{t.d(n,{QJ:()=>i,nI:()=>s});let i=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function s(e){switch(e){case i.ANGULAR:return"Angular";case i.REACT:return"React";case i.JAVASCRIPT:return"JavaScript";case i.VUE:return"Vue";case i.PREVIEW:return"Preview"}}},36365:(e,n,t)=>{t.d(n,{G3:()=>c,Sy:()=>v,Td:()=>d,nq:()=>p,zx:()=>r});var i=t(14455),s=t(41124),a=t(93368);function r(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function o(e,n){const t=e.match(n);if(t&&2===t.length){const[t,i]=e.split(n);return r(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function l(e){return m(function(e){const n=o(e,/<!-- Preview code -->/g);if(n){const t=o(e,/<!-- Sources -->/g);return t?"\x3c!-- Include in header --\x3e\n"+t+"\n\x3c!-- Include in header --\x3e\n\n"+n:n}return r(e)}(e),!0).source}function c(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function d(e,n,t){let i="web-components";return n===s.QJ.ANGULAR&&(i="angular"),n===s.QJ.REACT&&(i="react"),n===s.QJ.VUE&&(i="vue"),Promise.all(t.map((async n=>{try{const t=await async function(e){const n=await fetch(`${e}`),t=await n.text();return!t||t?.includes('<div id="__docusaurus"></div>')||t?.includes("Page Not Found")?null:t}(`${e}/previews/${i}/${n}`);return t?{filename:n,source:l(t),raw:t}:null}catch(t){console.warn(t)}})))}async function p(e,n,t,i){const a=[];return t===s.QJ.ANGULAR&&a.push(`${n}.html`,`${n}.ts`),t===s.QJ.JAVASCRIPT&&a.push(`${n}.html`),t===s.QJ.REACT&&a.push(`${n}.tsx`),t===s.QJ.VUE&&a.push(`${n}.vue`),i&&(t===s.QJ.REACT?a.push(`${n}.scoped.css`):a.push(`${n}.css`)),d(e,t,a)}function u(e,n){return e.replace(/\"<VERSION>\"/g,`"${n}"`)}function h(e){const n=a.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${n}$2`)}function m(e,n){var t;void 0===n&&(n=!1);const i=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return i&&i.length>1&&(t=i[1]),{source:e=e.replace("example-styles/dist",n?".":"./styles"),styleFileName:t}}async function x(e){const n=await Promise.all(e.map((e=>fetch(e))));return Promise.all(n.map((e=>e.text())))}async function f(e,n,t,i){const a={},r={},o=e.map((async e=>{let{filename:o,raw:l}=e;if(o.endsWith(".css"))return;let c=l;if(o===t){i===s.QJ.JAVASCRIPT&&(c=h(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(c)),o="index.html");const{source:e,styleFileName:t}=m(c,i===s.QJ.ANGULAR);c=e,t&&(r[`src/${i===s.QJ.ANGULAR?"app":"styles"}/${t}`]=(await x([`${n}${t}`]))[0])}a[`src${i===s.QJ.ANGULAR?"/app":""}/${o}`]=c}));return await Promise.all(o),{files:a,styleFiles:r}}async function v(e){let{name:n,framework:t,files:a,baseUrl:r,version:o}=e;const l=o||"latest";let c=null;return t===s.QJ.REACT&&(c=async function(e,n,t){const a=`${e}auto-generated/previews/styles/`,r=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[o,l,c,d,...p]=await x([`${a}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...r.map((n=>`${e}code-runtime/react/${n}`))]),m=n[0],{files:v,styleFiles:g}=await f(n,a,m.filename,s.QJ.REACT),j={...v,...g,"src/styles/global.css":o,"index.html":h(c),"src/App.tsx":l.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${m.filename.substring(0,m.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":u(d,t)};p.forEach(((e,n)=>{j[r[n]]=e}));const b={template:"node",title:"iX React App",description:"iX react playground",files:j};return{exampleFile:`src/${m.filename}`,open:()=>{i.Z.openProject(b,{openFile:`src/${m.filename}`})},config:b}}(r,a,l)),t===s.QJ.ANGULAR&&(c=async function(e,n,t,a){const r=`${e}auto-generated/previews/styles/`,[o,l,c,d,p,m,v,g,j,b]=await x([`${r}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let w=t[0];t.length>=2&&(w=t[1]);const y=[];t.forEach((e=>{let{filename:n,raw:t}=e;/@Component/gms.test(t)&&y.push(n)}));const A=`\n    ${y.map(((e,n)=>`import COMPONENT_${n} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${y.map(((e,n)=>`COMPONENT_${n}`))}\n    ];\n  `,{files:T,styleFiles:$}=await f(t,r,w.filename,s.QJ.ANGULAR),N={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{...T,...$,"src/app/declare-component.ts":A,"src/app/app.component.html":l,"src/app/app.component.ts":c,"src/app/app.module.ts":d,"src/index.html":h(p),"src/main.ts":m,"src/styles.css":o,"angular.json":v,"package.json":u(g,a),"tsconfig.app.json":j,"tsconfig.json":b}};return{exampleFile:`src/app/${n}.ts`,open:()=>{i.Z.openProject(N,{openFile:`src/app/${n}.ts`})},config:N}}(r,n,a,l)),t===s.QJ.JAVASCRIPT&&(c=async function(e,n,t){const a=`${e}auto-generated/previews/styles/`,[r,o,l,c]=await x([`${a}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),d=n[0],{files:p,styleFiles:h}=await f(n,a,d.filename,s.QJ.JAVASCRIPT),m={template:"node",title:"iX html app",description:"iX html playground",files:{...p,...h,"src/styles/global.css":r,"src/main.js":o,"package.json":u(l,t),"vite.config.ts":c}};return{exampleFile:"src/index.html",open:()=>{i.Z.openProject(m,{openFile:["src/index.html"]})},config:m}}(r,a,l)),t===s.QJ.VUE&&(c=async function(e,n,t){const a=`${e}auto-generated/previews/styles/`,[r,o,l,c,d,p,m,v]=await x([`${a}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),g=n[0],{files:j,styleFiles:b}=await f(n,a,g.filename,s.QJ.VUE),w={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...j,...b,"src/styles/global.css":r,"index.html":h(l),"src/main.ts":c,"src/App.vue":o.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${g.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":v,"package.json":u(d,t),"tsconfig.json":p,"vite.config.ts":m,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${g.filename}`,open:()=>{i.Z.openProject(w,{openFile:`src/${g.filename}`})},config:w}}(r,a,l)),c}},5838:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(90466),s=t(97458);function a(e){return(0,s.jsxs)("div",{className:"TagsContainer d-flex gap-2 align-items-center",children:[!e.hasDeprecatedAncestor&&(0,s.jsxs)("span",{className:"Api__Table Docs__Tag Docs__Tag__Deprecated",children:["Deprecated since ",e.deprecationVersion]}),(0,s.jsxs)("a",{href:e.url,target:"_blank",className:"TagContainer",children:[(0,s.jsx)(i.RI,{name:"open-external",color:"color-primary",size:"16"}),e.hasDeprecatedAncestor?"Show deprecated version":"Show latest version"]})]})}}}]);