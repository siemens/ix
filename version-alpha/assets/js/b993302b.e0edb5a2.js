"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7461],{3484:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"guidelines/mobile/mobile-app-dev","title":"Mobile experience","description":"Use Siemens Industrial Experience to create mobile applications jointly with web technology based approaches easily. With the help of our design system you are able to swiftly build the user interface of your mobile web app or hybrid app. Discover best practices for creating designs that work seamlessly across different devices and screen sizes.","source":"@site/docs/guidelines/mobile/mobile-app-dev.md","sourceDirName":"guidelines/mobile","slug":"/guidelines/mobile/mobile-app-dev","permalink":"/version-alpha/docs/guidelines/mobile/mobile-app-dev","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/guidelines/mobile/mobile-app-dev.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Mobile experience","title":"Mobile experience","doc-type":"banner","component-tabs":[""],"no_single_tab":true,"description":"Use Siemens Industrial Experience to create mobile applications jointly with web technology based approaches easily. With the help of our design system you are able to swiftly build the user interface of your mobile web app or hybrid app. Discover best practices for creating designs that work seamlessly across different devices and screen sizes."},"sidebar":"guidelines","previous":{"title":"Accessibility","permalink":"/version-alpha/docs/guidelines/accessibility"},"next":{"title":"Optimizing mobile UX","permalink":"/version-alpha/docs/guidelines/mobile/mobile-ux"}}');var s=n(65723),a=n(65598),r=n(51038),o=n(6053);const l=e=>{const i="theme-brand-dark",n=(0,o.Ay)("/demo/v2/preview/mobile/");return(0,s.jsxs)("figure",{className:"DevicePreview",style:e.style,children:[(0,s.jsx)("div",{className:(0,r.A)("Content",{NoUI:!!e.image}),children:e.image?(0,s.jsx)("img",{src:e.image,alt:"Device preview"}):(0,s.jsx)("iframe",{src:`${n}?preview-mode=ios&preview-theme=${i}#/`})}),(0,s.jsx)("div",{className:(0,r.A)("Frame",{Light:i.includes("-light"),NoUI:!!e.image})})]})},d=n.p+"assets/images/mobile-c675444cb333b1ed9dbcd84c1315a3b1.gif",c={sidebar_label:"Mobile experience",title:"Mobile experience","doc-type":"banner","component-tabs":[""],no_single_tab:!0,description:"Use Siemens Industrial Experience to create mobile applications jointly with web technology based approaches easily. With the help of our design system you are able to swiftly build the user interface of your mobile web app or hybrid app. Discover best practices for creating designs that work seamlessly across different devices and screen sizes."},p="",h={},m=[{value:"Mobile app development",id:"mobile-app-development",level:2},{value:"Hybrid app development",id:"hybrid-app-development",level:3},{value:"Using Ionic",id:"using-ionic",level:2},{value:"Theming Ionic",id:"theming-ionic",level:3},{value:"Define safe areas",id:"define-safe-areas",level:3},{value:"Application frame layout",id:"application-frame-layout",level:3}];function x(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:""})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("table",{className:"table-no-border",children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(l,{})}),(0,s.jsxs)("td",{style:{verticalAlign:"top",paddingLeft:"2rem"},children:[(0,s.jsx)("br",{}),(0,s.jsx)(i.p,{children:"Check out our hybrid example application using Ionic, React and Siemens Industrial Experience on the left."}),(0,s.jsx)(i.p,{children:"Regardless of the technology there are aspects to take into consideration when you optimize applications for mobile devices:"}),(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Responsive and adaptive design"})," due to different viewport sizes."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Interaction through touch"}),", without access to mouse or keyboard."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Device-specific features"})," like notches or rounded corners."]}),"\n"]})]})]})})}),"\n",(0,s.jsx)(i.h2,{id:"mobile-app-development",children:"Mobile app development"}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(l,{image:d,style:{float:"right",margin:"0",marginLeft:"2rem"}})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(i.p,{children:"There are different ways to create applications for mobile devices:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Web apps"})," are accessed through a web browser and are platform-independent."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Native apps"})," are tailored for a particular platform like iOS or Android and usually need to be developed in a specific way for every target platform separately."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Hybrid apps"})," are based on web technologies while targeting multiple platforms using a single codebase."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Optimize your web application for mobile devices without any significant technological changes to provide a seamless User Experience across devices and screen sizes (read more about responsive and adaptive design ",(0,s.jsx)(i.a,{href:"/version-alpha/docs/guidelines/mobile/mobile-ux",children:"here"}),")."]}),"\n",(0,s.jsx)(i.h3,{id:"hybrid-app-development",children:"Hybrid app development"}),"\n",(0,s.jsx)(i.p,{children:"Since mobile web apps have some limitations as shown above, we recommend hybrid apps to combine the advantages of web and native apps."}),"\n",(0,s.jsx)(i.p,{children:"Hybrid apps are built using web technologies but run inside a native container providing access to device APIs, allowing native features of the device's operating system and hardware to be used. A variety of frameworks for building hybrid mobile applications are available today. Some provide User Interface components for a closer integration with the different operating systems designs."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(i.p,{children:"The table below shows the differences of the three approaches at a glance:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"(Mobile) web app"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"Native app"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"Hybrid app"})})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Performance"}),(0,s.jsx)(i.td,{children:"Medium / high"}),(0,s.jsx)(i.td,{children:"Best possible"}),(0,s.jsx)(i.td,{children:"Medium / high"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Look & Feel"}),(0,s.jsx)(i.td,{children:"Individual"}),(0,s.jsx)(i.td,{children:"Platform native"}),(0,s.jsx)(i.td,{children:"Platform native / individual"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Development effort"}),(0,s.jsx)(i.td,{children:"Low"}),(0,s.jsx)(i.td,{children:"High"}),(0,s.jsx)(i.td,{children:"Medium"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Hardware features"}),(0,s.jsx)(i.td,{children:"Limited"}),(0,s.jsx)(i.td,{children:"Best possible"}),(0,s.jsxs)(i.td,{children:["Extensive ",(0,s.jsx)("br",{}),"(depending on plugin availability)"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Packaging, distribution"}),(0,s.jsx)(i.td,{children:"Browser only"}),(0,s.jsx)(i.td,{children:"Installation, App stores"}),(0,s.jsx)(i.td,{children:"Installation, App stores"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Offline capability"}),(0,s.jsx)(i.td,{children:"Not supported"}),(0,s.jsx)(i.td,{children:"Supported"}),(0,s.jsx)(i.td,{children:"Supported"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Siemens Industrial Experience Components"}),(0,s.jsx)(i.td,{children:"Supported"}),(0,s.jsx)(i.td,{children:"Not supported"}),(0,s.jsx)(i.td,{children:"Supported"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["Cf. ",(0,s.jsx)(i.a,{href:"https://ionic.io/resources/articles/what-is-hybrid-app-development#h-key-features:-native-web-and-hybrid",children:"ionic.io - What is Hybrid Mobile App Development?"})]}),"\n",(0,s.jsx)(i.p,{children:"To learn more about how this works and how to implement it yourself keep on reading."}),"\n",(0,s.jsx)(i.h2,{id:"using-ionic",children:"Using Ionic"}),"\n",(0,s.jsx)(i.p,{children:"Developers have many options when choosing a framework for implementing mobile applications. In this example, we use Ionic and React to implement a hybrid mobile application that can be deployed on your mobile device."}),"\n",(0,s.jsx)(i.h3,{id:"theming-ionic",children:"Theming Ionic"}),"\n",(0,s.jsx)(i.p,{children:"In the first step, we're going to create a theme mapping between Siemens Industrial Experience and Ionic Framework."}),"\n",(0,s.jsx)(i.p,{children:"Ionic uses CSS custom properties (variables), just like Siemens Industrial Experience does. This makes is easy to map between the two theming systems."}),"\n",(0,s.jsxs)(i.p,{children:["Here is an example of a default theme mapping: ",(0,s.jsx)(i.a,{href:"https://github.com/siemens/ix/blob/main/packages/ionic-test-app/src/theme/variables.css",children:"Repository Link"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"define-safe-areas",children:"Define safe areas"}),"\n",(0,s.jsx)(i.p,{children:'Most devices nowadays do not have a rectangular display, but often feature rounded corners or characteristics like a display cut-out ("notch").'}),"\n",(0,s.jsxs)(i.p,{children:["To adapt our application to this, we need to set ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/env#safe-area-inset-top",children:"environment variables"})," called ",(0,s.jsx)(i.code,{children:"safe-area-inset"}),". This helps the ",(0,s.jsx)(i.code,{children:"ix-application"})," to layout the frame of your application correctly."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-css",children:"--ix-safe-area-inset-top: env(safe-area-inset-top);\n--ix-safe-area-inset-right: env(safe-area-inset-right);\n--ix-safe-area-inset-bottom: env(safe-area-inset-bottom);\n--ix-safe-area-inset-left: env(safe-area-inset-left);\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Additionally, some variables specific to your hardware need to be set. In our example, we use an iPhone with a notch at the top. Depending on the display orientation, it's required to adjust the safe-areas of some components (e.g. ",(0,s.jsx)(i.code,{children:"ix-menu"}),")."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-css",children:"body[data-screen-orientation='landscape-primary'] {\n  /*\n  * If the device is in landscape-primary orientation,\n  * we need to adjust the safe areas for the menu.\n  * The data-screen-orientation attribute is added by the main.ts file\n  */\n  --ix-application-menu-safe-area-left: var(--ix-safe-area-inset-left);\n}\n"})}),"\n",(0,s.jsxs)(i.p,{children:["The CSS selector ",(0,s.jsx)(i.code,{children:"body[data-screen-orientation='landscape-primary']"})," is not provided via the ionic framework.\nA suitable way to add it to the app is the ",(0,s.jsx)(i.code,{children:"main.ts"})," file of your project. There are two options:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Capacitor plugin: ",(0,s.jsx)(i.a,{href:"https://capacitorjs.com/docs/apis/screen-orientation",children:(0,s.jsx)(i.code,{children:"@capacitor/screen-orientation"})})]}),"\n",(0,s.jsxs)(i.li,{children:["Browser api: ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation",children:(0,s.jsx)(i.code,{children:"ScreenOrientation"})})]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"import { ScreenOrientation } from '@capacitor/screen-orientation';\n\nasync function screenOrientation() {\n  const { type } = await ScreenOrientation.orientation();\n  window.document.body.setAttribute('data-screen-orientation', type);\n\n  ScreenOrientation.addListener('screenOrientationChange', ({ type }) => {\n    window.document.body.setAttribute('data-screen-orientation', type);\n  });\n}\n\nscreenOrientation();\n\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n"})}),"\n",(0,s.jsx)(i.p,{children:"At this point, the application frame should respect all areas of your device which are not part of the app."}),"\n",(0,s.jsx)(i.p,{children:"Use the defined variables to ensure that the pages of your application displaying content also respect the previously defined areas as well."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-css",children:".my-content-space {\n  margin-top: var(--ix-safe-area-inset-top);\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"application-frame-layout",children:"Application frame layout"}),"\n",(0,s.jsxs)(i.p,{children:["By default, the ",(0,s.jsx)(i.a,{href:"./../../components/application",children:"Application Frame"})," provides three default layouts (",(0,s.jsx)(i.code,{children:"sm"}),", ",(0,s.jsx)(i.code,{children:"md"}),", ",(0,s.jsx)(i.code,{children:"lg"}),") that are automatically applied depending on the size of the screen."]}),"\n",(0,s.jsx)(i.p,{children:"If you intend to implement an app for both phones and tablets (e.g. iPhone and iPad), it may be necessary to configure the layouts which the application frame can pick from."}),"\n",(0,s.jsxs)(i.p,{children:["For apps targeting phones and tablets, typically the ",(0,s.jsx)(i.code,{children:"sm"})," and ",(0,s.jsx)(i.code,{children:"md"})," layouts are suitable."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"const Application = () => {\n  return (\n    <IonApp>\n      ...\n      <IxApplication breakpoints={breakpoints}>...</IxApplication>\n      ...\n    </IonApp>\n  );\n};\n"})}),"\n",(0,s.jsxs)(i.p,{children:["As mentioned above, in some cases it is beneficial to adapt the layouts (breakpoints) depending on the hardware. For example, the layout ",(0,s.jsx)(i.code,{children:"md"})," will be applied for an iPhone in landscape orientation and iPad in portrait orientation."]}),"\n",(0,s.jsxs)(i.p,{children:["Ionic provides ",(0,s.jsx)(i.a,{href:"https://ionicframework.com/docs/react/platform#platforms",children:"utility functions"})," that help to decide which layout to choose."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"const ipad = [`sm`, 'md', 'lg'];\nconst iphone = [`sm`];\n\nlet breakpoints = isPlatform('ipad') ? ipad : iphone;\n\nconst Application = () => {\n  return (\n    <IonApp>\n      ...\n      <IxApplication breakpoints={breakpoints}>...</IxApplication>\n      ...\n    </IonApp>\n  );\n};\n"})})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},65598:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(22155);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);