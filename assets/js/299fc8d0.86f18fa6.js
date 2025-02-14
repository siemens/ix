"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74515],{83172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(97458),s=n(16436);const r={sidebar_position:2,title:"User intent"},o="User intent",a={id:"conversational-design/essentials/user-intent",title:"User intent",description:"Overview",source:"@site/docs/conversational-design/essentials/user-intent.md",sourceDirName:"conversational-design/essentials",slug:"/conversational-design/essentials/user-intent",permalink:"/docs/conversational-design/essentials/user-intent",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/conversational-design/essentials/user-intent.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"User intent"},sidebar:"mySidebar",previous:{title:"Natural language",permalink:"/docs/conversational-design/essentials/natural-language"},next:{title:"System personas",permalink:"/docs/conversational-design/essentials/system-presonas"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Explicit vs. implicit intent",id:"explicit-vs-implicit-intent",level:2},{value:"Benefits of establishing user intent",id:"benefits-of-establishing-user-intent",level:2},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:2}];function d(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"user-intent",children:"User intent"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"User intent refers to the main purpose or goal of users and is directly related to what they want to achieve \u2013 whether they\u2019re trying to access information, schedule maintenance or ask a question about a product or system."}),"\n",(0,i.jsx)(t.p,{children:"For chatbots to recognize and establish intent correctly, they need knowledge of the user\u2019s working environment that continuously builds as users give them input. It often requires chatbots to use follow-up questions in order to correctly establish intent and then provide the most accurate response. When chatbots are unable to understand user intent, they cannot provide relevant or helpful responses."}),"\n",(0,i.jsx)(t.h2,{id:"explicit-vs-implicit-intent",children:"Explicit vs. implicit intent"}),"\n",(0,i.jsx)(t.p,{children:"When users ask direct and clear questions, user intent is explicit which makes it easier for chatbots to respond quickly and accurately. When users ask more general questions, or even just enter key words, user intent is unclear (implicit) requiring more information. Training chatbots to understand both explicit (clear) and implicit (unclear) user intent is essential to provide effective and supportive solutions."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"User intent: An engineer in a plant needs to install a new gateway"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3218-4236&t=etx1DcSbA7VDx5xD-4",alt:"User intent with explicit input"})}),"\n",(0,i.jsx)(t.p,{children:"Here the user intent is explicit and clear, giving the chatbot a well-defined purpose and goal. The chatbot does not need to ask further questions and can easily and quickly provide an accurate solution."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"User intent: An engineer in a plant needs to install a new gateway"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3218-4239&t=etx1DcSbA7VDx5xD-4",alt:"User intent with implicit input"})}),"\n",(0,i.jsx)(t.p,{children:"Here the user intent is implicit and unclear (at the beginning). The chatbot has interpreted what the user wants and initially provided what it thinks could be the desired response. The user is then required to keep asking and clarifying so the chatbot finally understands intent and provides the desired solution. In this interaction, the user had to work to establish intent, which leads to a frustrating user experience. When we know our users and their working environment, it\u2019s much easier to train our chatbots to comprehend user intent correctly to them the right response:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3218-4246&t=etx1DcSbA7VDx5xD-4",alt:"Explicit user input"})}),"\n",(0,i.jsx)(t.p,{children:"Here we see that although the intent for maintenance is very explicit, the chatbot knows to ask which day and which zones as follow-up questions to provide the most precise solution. The chatbot used its training to build on the user\u2019s intent to create a more supportive and satisfying user experience."}),"\n",(0,i.jsx)(t.h2,{id:"benefits-of-establishing-user-intent",children:"Benefits of establishing user intent"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Relevant interactions:"})," When chatbots understand user intent and provide relevant responses, it enhances the overall user experience, builds trust and improves satisfaction."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Personalized interactions:"})," When chatbots collect feedback and trains with user data, they are better able to create personalized interactions."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Contextualized interactions:"})," When chatbots understand the working environment, they provide context-relevant responses that better support users."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Accurate interactions:"})," When chatbots can accurately recognize intent, it minimizes misunderstandings and helps reduce errors."]}),"\n",(0,i.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Do carry out extensive research on user needs and goals"}),"\n",(0,i.jsx)(t.li,{children:"Do work with your teams to establish and predict user intent with example dialogs"}),"\n",(0,i.jsx)(t.li,{children:"Do test your chatbot with explicit and implicit requests to assess evaluation of user intent"}),"\n",(0,i.jsx)(t.li,{children:"Don\u2019t assume your users will be explicit about what they need"}),"\n",(0,i.jsx)(t.li,{children:"Don\u2019t assume users are skilled at prompting your chatbot"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},16436:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(52983);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);