"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9126],{29607:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"components/forms-behavior/index","title":"Forms behavior","description":"Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.","source":"@site/docs/components/forms-behavior/index.mdx","sourceDirName":"components/forms-behavior","slug":"/components/forms-behavior/","permalink":"/version-alpha/docs/components/forms-behavior/","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/forms-behavior/index.mdx","tags":[],"version":"current","frontMatter":{"doc-type":"banner","description":"Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.","title":"Forms behavior","deprecated":null},"sidebar":"components","previous":{"title":"Code","permalink":"/version-alpha/docs/components/forms-validation/code"},"next":{"title":"Category filter","permalink":"/version-alpha/docs/components/category-filter/"}}');var s=i(65723),r=i(65598);const a={"doc-type":"banner",description:"Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.",title:"Forms behavior",deprecated:null},o=void 0,l={},d=[{value:"Validation feedback",id:"validation-feedback",level:2},{value:"Form submission strategies",id:"form-submission-strategies",level:2},{value:"Strategy 1: Disable submit button",id:"strategy-1-disable-submit-button",level:3},{value:"Strategy 2: Always enable submit button",id:"strategy-2-always-enable-submit-button",level:3},{value:"Strategy 3: Submit on blur",id:"strategy-3-submit-on-blur",level:3},{value:"Related",id:"related",level:2}];function c(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"validation-feedback",children:"Validation feedback"}),"\n",(0,s.jsx)(n.p,{children:"When data is validated, a validation result is provided to guide users to correct invalid data, convey a sense of security, warn about critical inputs or inform about special features of an input."}),"\n",(0,s.jsx)(n.p,{children:"We support 4 types of validation feedback:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Valid"}),"\n",(0,s.jsx)(n.li,{children:"Info"}),"\n",(0,s.jsx)(n.li,{children:"Warning"}),"\n",(0,s.jsx)(n.li,{children:"Invalid"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"form-submission-strategies",children:"Form submission strategies"}),"\n",(0,s.jsx)(n.p,{children:"When it comes to handling form submissions, there are three common strategies to ensure a seamless user experience and maintain data integrity:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Disable submit button"}),"\n",(0,s.jsx)(n.li,{children:"Always enable submit button"}),"\n",(0,s.jsx)(n.li,{children:"Submit on blur"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A combination of strategy 1 and 3 is possible."}),"\n",(0,s.jsx)(n.h3,{id:"strategy-1-disable-submit-button",children:"Strategy 1: Disable submit button"}),"\n",(0,s.jsx)(n.p,{children:"In this strategy, the submit button is disabled until all required input controls are filled or controls are valid. This helps prevent users from submitting invalid data to the server."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pro: Prevents sending invalid data to the server."}),"\n",(0,s.jsx)(n.li,{children:"Pro: Communicates issues with the form."}),"\n",(0,s.jsx)(n.li,{children:"Con: Doesn't specify missing or incorrect fields which can be frustrating."}),"\n",(0,s.jsx)(n.li,{children:"Con: Some screen readers may not read out the disabled submit button, causing confusion."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"strategy-2-always-enable-submit-button",children:"Strategy 2: Always enable submit button"}),"\n",(0,s.jsx)(n.p,{children:"In this strategy, the submit button is always enabled, allowing users to click it at any time."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pro: Users can always click the submit button and receive feedback on missing or invalid data."}),"\n",(0,s.jsx)(n.li,{children:"Con: The form may appear complete even with missing or invalid data."}),"\n",(0,s.jsx)(n.li,{children:"Con: Unnecessary data may be sent to the server, consuming resources."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"strategy-3-submit-on-blur",children:"Strategy 3: Submit on blur"}),"\n",(0,s.jsx)(n.p,{children:"In this strategy, there is no need for a submit button. The form is automatically submitted after the user finishes inputting and leaves the control."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pro: Provides a seamless user experience by automatically submitting the form when the user moves away from a field."}),"\n",(0,s.jsx)(n.li,{children:"Pro: Provides immediate feedback without the need for a submit button."}),"\n",(0,s.jsx)(n.li,{children:"Con: Users may accidentally trigger form submission by navigating away from a field unintentionally."}),"\n",(0,s.jsx)(n.li,{children:"Con: Handling validation and error messages without a submit button can be challenging."}),"\n",(0,s.jsx)(n.li,{children:"Con: Users may not have a chance to review and confirm their input before submission."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on form validation, refer to the ",(0,s.jsx)(n.a,{href:"../forms-validation",children:"validation"})," chapter."]}),"\n",(0,s.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../forms-validation",children:"Validation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../forms-layout",children:"Layout"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65598:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(22155);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);