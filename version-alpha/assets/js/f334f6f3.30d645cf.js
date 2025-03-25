"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9126],{2802:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"components/forms-behavior/index","title":"Forms behavior","description":"Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.","source":"@site/docs/components/forms-behavior/index.mdx","sourceDirName":"components/forms-behavior","slug":"/components/forms-behavior/","permalink":"/version-alpha/docs/components/forms-behavior/","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/forms-behavior/index.mdx","tags":[],"version":"current","frontMatter":{"doc-type":"banner","description":"Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.","title":"Forms behavior","deprecated":null,"toc_min_heading_level":2,"toc_max_heading_level":5},"sidebar":"components","previous":{"title":"Forms validation","permalink":"/version-alpha/docs/components/forms-validation/"},"next":{"title":"Category filter","permalink":"/version-alpha/docs/components/category-filter/"}}');var s=n(65723),a=n(65598);const r={"doc-type":"banner",description:"Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.",title:"Forms behavior",deprecated:null,toc_min_heading_level:2,toc_max_heading_level:5},o=void 0,l={},d=[{value:"Validation feedback",id:"validation-feedback",level:2},{value:"Form submission strategies",id:"form-submission-strategies",level:2},{value:"Strategy 1: Disable submit button",id:"strategy-1-disable-submit-button",level:3},{value:"Strategy 2: Always enable submit button",id:"strategy-2-always-enable-submit-button",level:3},{value:"Strategy 3: Submit on blur",id:"strategy-3-submit-on-blur",level:3},{value:"Related",id:"related",level:2}];function c(e){const i={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"validation-feedback",children:"Validation feedback"}),"\n",(0,s.jsx)(i.p,{children:"When data is validated, a validation result is provided to guide users to correct invalid data, convey a sense of security, warn about critical inputs or inform about special features of an input."}),"\n",(0,s.jsx)(i.p,{children:"We support 4 types of validation feedback:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Valid"}),"\n",(0,s.jsx)(i.li,{children:"Info"}),"\n",(0,s.jsx)(i.li,{children:"Warning"}),"\n",(0,s.jsx)(i.li,{children:"Invalid"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"form-submission-strategies",children:"Form submission strategies"}),"\n",(0,s.jsx)(i.p,{children:"When it comes to handling form submissions, there are three common strategies to ensure a seamless user experience and maintain data integrity:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Disable submit button"}),"\n",(0,s.jsx)(i.li,{children:"Always enable submit button"}),"\n",(0,s.jsx)(i.li,{children:"Submit on blur"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"A combination of strategy 1 and 3 is possible."}),"\n",(0,s.jsx)(i.h3,{id:"strategy-1-disable-submit-button",children:"Strategy 1: Disable submit button"}),"\n",(0,s.jsx)(i.p,{children:"In this strategy, the submit button is disabled until all required input controls are filled or controls are valid. This helps prevent users from submitting invalid data to the server."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Pro: Prevents sending invalid data to the server."}),"\n",(0,s.jsx)(i.li,{children:"Pro: Communicates issues with the form."}),"\n",(0,s.jsx)(i.li,{children:"Con: Doesn't specify missing or incorrect fields which can be frustrating."}),"\n",(0,s.jsx)(i.li,{children:"Con: Some screen readers may not read out the disabled submit button, causing confusion."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"strategy-2-always-enable-submit-button",children:"Strategy 2: Always enable submit button"}),"\n",(0,s.jsx)(i.p,{children:"In this strategy, the submit button is always enabled, allowing users to click it at any time."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Pro: Users can always click the submit button and receive feedback on missing or invalid data."}),"\n",(0,s.jsx)(i.li,{children:"Con: The form may appear complete even with missing or invalid data."}),"\n",(0,s.jsx)(i.li,{children:"Con: Unnecessary data may be sent to the server, consuming resources."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"strategy-3-submit-on-blur",children:"Strategy 3: Submit on blur"}),"\n",(0,s.jsx)(i.p,{children:"In this strategy, there is no need for a submit button. The form is automatically submitted after the user finishes inputting and leaves the control."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Pro: Provides a seamless user experience by automatically submitting the form when the user moves away from a field."}),"\n",(0,s.jsx)(i.li,{children:"Pro: Provides immediate feedback without the need for a submit button."}),"\n",(0,s.jsx)(i.li,{children:"Con: Users may accidentally trigger form submission by navigating away from a field unintentionally."}),"\n",(0,s.jsx)(i.li,{children:"Con: Handling validation and error messages without a submit button can be challenging."}),"\n",(0,s.jsx)(i.li,{children:"Con: Users may not have a chance to review and confirm their input before submission."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["For more information on form validation, refer to the ",(0,s.jsx)(i.a,{href:"../forms-validation",children:"validation"})," chapter."]}),"\n",(0,s.jsx)(i.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"../forms-validation",children:"Validation"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"../forms-layout",children:"Layout"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);