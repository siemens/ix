"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4948],{37431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"home/installation/javascript","title":"Web Components","description":"Web Components are a set of web platform APIs that allow you to create reusable and encapsulated custom elements. This section guides you through the steps to install and set up our design system using web components, ensuring a straightforward and flexible integration process.","source":"@site/docs/home/installation/javascript.md","sourceDirName":"home/installation","slug":"/home/installation/javascript","permalink":"/version-alpha/docs/home/installation/javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/home/installation/javascript.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Web Components","title":"Web Components","doc-type":"banner","component-tabs":[""],"no_single_tab":true,"description":"Web Components are a set of web platform APIs that allow you to create reusable and encapsulated custom elements. This section guides you through the steps to install and set up our design system using web components, ensuring a straightforward and flexible integration process."},"sidebar":"home","previous":{"title":"React","permalink":"/version-alpha/docs/home/installation/react"},"next":{"title":"Vue","permalink":"/version-alpha/docs/home/installation/vue"}}');var s=t(65723),r=t(65598),i=t(78509),o=t(34676);const l={sidebar_position:3,sidebar_label:"Web Components",title:"Web Components","doc-type":"banner","component-tabs":[""],no_single_tab:!0,description:"Web Components are a set of web platform APIs that allow you to create reusable and encapsulated custom elements. This section guides you through the steps to install and set up our design system using web components, ensuring a straightforward and flexible integration process."},u="",c={},d=[{value:"Library installation",id:"library-installation",level:2},{value:"Build",id:"build",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:""})}),"\n",(0,s.jsx)(n.h2,{id:"library-installation",children:"Library installation"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"@siemens/ix"})," and ",(0,s.jsx)(n.code,{children:"@siemens/ix-icons"})," using a package manager:"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"npm",label:"NPM",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install @siemens/ix @siemens/ix-icons\n"})})}),(0,s.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"yarn add @siemens/ix @siemens/ix-icons\n"})})}),(0,s.jsx)(o.A,{value:"pnpm",label:"PNPM",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pnpm add @siemens/ix @siemens/ix-icons\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,s.jsxs)(n.p,{children:["There are several different possibilities to build and serve web apps with the library.\nIn the following section we will describe how you can build an application with ",(0,s.jsx)(n.a,{href:"https://vitejs.dev/guide/",children:"vite"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"index.html"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div>\n      <ix-button class="m-1" variant="primary">Button</ix-button>\n      <ix-button class="m-1" variant="primary" disabled>Button</ix-button>\n    </div>\n    <script type="module" src="./main.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"main.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import '@siemens/ix/dist/siemens-ix/siemens-ix.css';\nimport { defineCustomElements } from '@siemens/ix/loader';\nimport { defineCustomElements as defineIxIconCustomElement } from '@siemens/ix-icons/loader';\n\n(async () => {\n  defineIxIconCustomElement();\n  defineCustomElements();\n})();\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},34676:(e,n,t)=>{t.d(n,{A:()=>i});t(22155);var a=t(70851);const s={tabItem:"tabItem_17RD"};var r=t(65723);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:n})}},78509:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(22155),s=t(70851),r=t(379),i=t(62934),o=t(90558),l=t(16780),u=t(64949),c=t(20108);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=h({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=u??b;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(14438);const v={tabList:"tabList_bX2V",tabItem:"tabItem_dxC2"};var x=t(65723);function g(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==a&&(u(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},65598:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(22155);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);