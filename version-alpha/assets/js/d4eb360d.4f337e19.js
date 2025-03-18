"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9181],{57184:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"home/theming/usage-developers","title":"Developing with themes","description":"Siemens Industrial Experience supports theming for all of its components.","source":"@site/docs/home/theming/usage-developers.md","sourceDirName":"home/theming","slug":"/home/theming/usage-developers","permalink":"/version-alpha/docs/home/theming/usage-developers","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/home/theming/usage-developers.md","tags":[],"version":"current","frontMatter":{},"sidebar":"home","previous":{"title":"Themes","permalink":"/version-alpha/docs/home/theming/theme"},"next":{"title":"Designing with themes","permalink":"/version-alpha/docs/home/theming/usage-designers"}}');var t=i(65723),l=i(65598);const r={},a="Developing with themes",o={},h=[{value:"Using the old classic theme",id:"using-the-old-classic-theme",level:2},{value:"Siemens AG Corporate Brand Theme",id:"siemens-ag-corporate-brand-theme",level:2},{value:"How to set a theme",id:"how-to-set-a-theme",level:2},{value:"Applying only one theme to reduce build size",id:"applying-only-one-theme-to-reduce-build-size",level:2},{value:"Working with themes during runtime",id:"working-with-themes-during-runtime",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"developing-with-themes",children:"Developing with themes"})}),"\n",(0,t.jsx)(s.p,{children:"Siemens Industrial Experience supports theming for all of its components."}),"\n",(0,t.jsx)(s.p,{children:"Everyone can use the two embedded themes that already ship with Siemens Industrial Experience:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Classic light (theme-classic-light)"}),"\n",(0,t.jsx)(s.li,{children:"Classic dark (theme-classic-dark)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You can also create your own themes in order to customize the design system for your own brand."}),"\n",(0,t.jsx)(s.p,{children:"Siemens AG applications should utilize the exclusive Siemens AG Corporate Brand Theme."}),"\n",(0,t.jsx)(s.h2,{id:"using-the-old-classic-theme",children:"Using the old classic theme"}),"\n",(0,t.jsx)(s.p,{children:"The original classic theme was deprecated in favor of an updated version that is more easily maintainable for us.\nThe legacy theme is still available but no longer part of the main CSS file. In order to still apply it to your app, you have to load it manually.\nThis can be done in various ways."}),"\n",(0,t.jsx)(s.p,{children:"The simplest way is to use the bundler/loader and just import the legacy styles inside your global stylesheet."}),"\n",(0,t.jsx)(s.p,{children:"e.g. styles.css:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"@import '@siemens/ix/dist-css/theme/legacy-classic-dark.css';\n@import '@siemens/ix/dist-css/theme/legacy-classic-light.css';\n"})}),"\n",(0,t.jsx)(s.p,{children:"If this step is done, you can set the theme name class on the body tag:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<html>\n  \x3c!-- Framework related imports --\x3e\n  \x3c!--  --\x3e\n  <body class="theme-legacy-classic-dark"></body>\n</html>\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"deprecated"})," Legacy Classic light (theme-legacy-classic-light)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"deprecated"})," Legacy Classic dark (theme-legacy-classic-dark)"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"siemens-ag-corporate-brand-theme",children:"Siemens AG Corporate Brand Theme"}),"\n",(0,t.jsxs)("div",{className:"siemens-brand-section",children:[(0,t.jsx)(s.p,{children:"The Siemens AG Corporate Brand Theme is exclusively available for official Siemens AG products, where it should always be used as the default theme to reflect the latest Siemens AG Corporate Brand guidelines."}),(0,t.jsxs)(s.p,{children:["Siemens AG employees can access the Corporate Brand Theme at ",(0,t.jsx)(s.a,{href:"https://code.siemens.com/siemens-ix/ix-brand-theme",children:(0,t.jsx)(s.strong,{children:"https://code.siemens.com/siemens-ix/ix-brand-theme"})}),"."]})]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-set-a-theme",children:"How to set a theme"}),"\n",(0,t.jsxs)(s.p,{children:["The default theme is ",(0,t.jsx)(s.code,{children:"theme-classic-dark"}),". To set a different theme, change the ",(0,t.jsx)(s.code,{children:"class"})," attribute of the ",(0,t.jsx)(s.code,{children:"<body>"})," tag to contain e.g. ",(0,t.jsx)(s.code,{children:"theme-classic-light"})," instead of ",(0,t.jsx)(s.code,{children:"theme-classic-dark"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<html>\n  \x3c!-- Framework related imports --\x3e\n  \x3c!--  --\x3e\n  <body class="theme-classic-light"></body>\n</html>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"applying-only-one-theme-to-reduce-build-size",children:"Applying only one theme to reduce build size"}),"\n",(0,t.jsxs)(s.p,{children:["Importing ",(0,t.jsx)(s.code,{children:"siemens-ix-core.css"})," will only load core related functionalities, without preloading any theme or bootstrap."]}),"\n",(0,t.jsx)(s.p,{children:"You can load a specific theme by importing the corresponding CSS file."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Import CSS"})})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"// Load 3rd Party libraries\nimport 'bootstrap/dist/css/bootstrap.css';\n\n// Load the core parts\nimport '@siemens/ix/dist/siemens-ix/siemens-ix-core.css';\n\n// Load theme\nimport '@siemens/ix/dist/siemens-ix/theme/classic-light.css';\nimport '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Set theme"})})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<body class="theme-classic-dark">\n  ...\n</body>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"working-with-themes-during-runtime",children:"Working with themes during runtime"})]})}function d(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);