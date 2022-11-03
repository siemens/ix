"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9757,9291,7393,2721,7284,8004,8644,3278,4148,4972,4886,2650,5424,2352],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=l,v=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(v,i(i({ref:t},d),{},{components:n})):a.createElement(v,i({ref:t},d))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),l=n(6277);const r="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7896),l=n(2784),r=n(6277),i=n(89741),s=n(42244),o=n(78963),c=n(24126);const d="tabList_M0Dn",m="tabItem_ysIP";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:p,groupId:v,className:g}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,s.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===u?u:u??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==x&&!b.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,o.U)(),[h,I]=(0,l.useState)(x),y=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=v){const e=f[v];null!=e&&e!==h&&b.some((t=>t.value===e))&&I(e)}const S=e=>{const t=e.currentTarget,n=y.indexOf(t),a=b[n].value;a!==h&&(T(t),I(a),null!=v&&w(v,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;n=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;n=y[t]??y[y.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>y.push(e),onKeyDown:_,onFocus:S,onClick:S},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":h===t})}),n??t)}))),n?(0,l.cloneElement)(k.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function p(e){const t=(0,i.Z)();return l.createElement(u,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(37949),l=n(90077),r=n(37614),i=n(2784),s=n(90943);function o(e){const t=(0,r.Z)(),[n]=(0,i.useState)(!1),o=(0,l.Z)("/"),[c,d]=(0,i.useState)(""),[m,u]=(0,i.useState)((0,s.V)(t)),{preferredVersion:p}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==p?void 0:p.name;d(void 0===t||"current"===t?o+`webcomponent-examples/dist/preview-examples/${e.name}.html`:o+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[o,null==p?void 0:p.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),u(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):i.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(82009),l=n(1112),r=n(2784),i=n(77942);const s={angular:1,react:2,javascript:3,preview:4};function o(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return r.createElement(l.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[r.createElement(a.Z,{value:"preview",key:"preview"},r.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>s[e.props.value]-s[t.props.value])))}},43804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/ix-select-item/events",id:"auto-generated/ix-select-item/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-select-item/events.md",sourceDirName:"auto-generated/ix-select-item",slug:"/auto-generated/ix-select-item/events",permalink:"/version-dev/docs/auto-generated/ix-select-item/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select-item/events.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"itemClick")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Item clicked"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},52276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/ix-select-item/props",id:"auto-generated/ix-select-item/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-select-item/props.md",sourceDirName:"auto-generated/ix-select-item",slug:"/auto-generated/ix-select-item/props",permalink:"/version-dev/docs/auto-generated/ix-select-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select-item/props.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"hover")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Internal"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hover")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"label")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Displayed name of the item"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"selected")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the item is selected."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selected")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"value")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Item value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))))}m.isMDXComponent=!0},61423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/ix-select/events",id:"auto-generated/ix-select/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-select/events.md",sourceDirName:"auto-generated/ix-select",slug:"/auto-generated/ix-select/events",permalink:"/version-dev/docs/auto-generated/ix-select/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select/events.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"addItem")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Item added to selection"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"itemSelectionChange")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Item selection changed"),(0,l.kt)("td",{parentName:"tr",align:null},"`string"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]`")))))}m.isMDXComponent=!0},68086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/ix-select/props",id:"auto-generated/ix-select/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-select/props.md",sourceDirName:"auto-generated/ix-select",slug:"/auto-generated/ix-select/props",permalink:"/version-dev/docs/auto-generated/ix-select/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select/props.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"allowClear")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allow-clear")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"disabled")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"If true the select will be in disabled state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"editable")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Select is extendable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"editable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"i18nPlaceholder")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Input field placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i-1-8n-placeholder")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'Select an option'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"i18nPlaceholderEditable")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Input field placeholder for editable select"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i-1-8n-placeholder-editable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'Type of select option'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"i18nSelectListHeader")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Select list header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i-1-8n-select-list-header")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'Please select an option'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"mode")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Selection mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"multiple" \uff5c "single"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'single'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"readonly")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"If true the select will be in readonly mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{className:"Api__Table"}," ",(0,l.kt)("div",null,"selectedIndices")," ",(0,l.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,l.kt)("td",{parentName:"tr",align:null},"Indices of selected items"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selected-indices")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \uff5c string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))))))}m.isMDXComponent=!0},40686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/angular/select-editable",id:"auto-generated/previews/angular/select-editable",title:"select-editable",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/select-editable.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/select-editable",permalink:"/version-dev/docs/auto-generated/previews/angular/select-editable",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/select-editable.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-select-editable\',\n  template: `\n    <ix-select editable [selectedIndices]="selectedIndices">\n      <ix-select-item label="Item 1" value="1"></ix-select-item>\n      <ix-select-item label="Item 2" value="2"></ix-select-item>\n      <ix-select-item label="Item 3" value="3"></ix-select-item>\n      <ix-select-item label="Item 4" value="4"></ix-select-item>\n    </ix-select>\n  `,\n})\nexport class SelectEditable {\n  selectedIndices = \'1\';\n}\n')))}m.isMDXComponent=!0},52719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/angular/select-multiple",id:"auto-generated/previews/angular/select-multiple",title:"select-multiple",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/select-multiple.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/select-multiple",permalink:"/version-dev/docs/auto-generated/previews/angular/select-multiple",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/select-multiple.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-select-multiple\',\n  template: `\n    <ix-select mode="multiple" [selectedIndices]="selectedIndices">\n      <ix-select-item label="Item 1" value="1"></ix-select-item>\n      <ix-select-item label="Item 2" value="2"></ix-select-item>\n      <ix-select-item label="Item 3" value="3"></ix-select-item>\n      <ix-select-item label="Item 4" value="4"></ix-select-item>\n    </ix-select>\n  `,\n})\nexport class SelectMultiple {\n  selectedIndices = [\'1\', \'3\'];\n}\n')))}m.isMDXComponent=!0},44926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/angular/select",id:"auto-generated/previews/angular/select",title:"select",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/select.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/select",permalink:"/version-dev/docs/auto-generated/previews/angular/select",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/select.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-select\',\n  template: `\n    <ix-select [selectedIndices]="selectedIndices">\n      <ix-select-item label="Item 1" value="1"></ix-select-item>\n      <ix-select-item label="Item 2" value="2"></ix-select-item>\n      <ix-select-item label="Item 3" value="3"></ix-select-item>\n      <ix-select-item label="Item 4" value="4"></ix-select-item>\n    </ix-select>\n  `,\n})\nexport class Select {\n  selectedIndices = \'1\';\n}\n')))}m.isMDXComponent=!0},18649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/react/select-editable",id:"auto-generated/previews/react/select-editable",title:"select-editable",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/select-editable.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/select-editable",permalink:"/version-dev/docs/auto-generated/previews/react/select-editable",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/select-editable.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const SelectEditable: React.FC = () => {\n  return (\n    <IxSelect selectedIndices={\'1\'} editable>\n      <IxSelectItem label="Item 1" value="1"></IxSelectItem>\n      <IxSelectItem label="Item 2" value="2"></IxSelectItem>\n      <IxSelectItem label="Item 3" value="3"></IxSelectItem>\n      <IxSelectItem label="Item 4" value="4"></IxSelectItem>\n    </IxSelect>\n  );\n};\n')))}m.isMDXComponent=!0},72048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/react/select-multiple",id:"auto-generated/previews/react/select-multiple",title:"select-multiple",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/select-multiple.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/select-multiple",permalink:"/version-dev/docs/auto-generated/previews/react/select-multiple",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/select-multiple.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React, { useLayoutEffect, useState } from \'react\';\n\nexport const SelectMultiple: React.FC = () => {\n  const [selection, setSelection] = useState<string[]>([]);\n\n  useLayoutEffect(() => {\n    setSelection([\'1\', \'3\']);\n  }, [setSelection]);\n\n  return (\n    <IxSelect mode="multiple" selectedIndices={selection}>\n      <IxSelectItem label="Item 1" value="1"></IxSelectItem>\n      <IxSelectItem label="Item 2" value="2"></IxSelectItem>\n      <IxSelectItem label="Item 3" value="3"></IxSelectItem>\n      <IxSelectItem label="Item 4" value="4"></IxSelectItem>\n    </IxSelect>\n  );\n};\n')))}m.isMDXComponent=!0},3675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/react/select",id:"auto-generated/previews/react/select",title:"select",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/select.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/select",permalink:"/version-dev/docs/auto-generated/previews/react/select",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/select.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Select: React.FC = () => {\n  return (\n    <IxSelect selected-indices="1">\n      <IxSelectItem label="Item 1" value="1"></IxSelectItem>\n      <IxSelectItem label="Item 2" value="2"></IxSelectItem>\n      <IxSelectItem label="Item 3" value="3"></IxSelectItem>\n      <IxSelectItem label="Item 4" value="4"></IxSelectItem>\n    </IxSelect>\n  );\n};\n')))}m.isMDXComponent=!0},6090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/select-editable",id:"auto-generated/previews/web-component/select-editable",title:"select-editable",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/select-editable.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/select-editable",permalink:"/version-dev/docs/auto-generated/previews/web-component/select-editable",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/select-editable.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ix-select editable selected-indices="1">\n  <ix-select-item label="Item 1" value="1"></ix-select-item>\n  <ix-select-item label="Item 2" value="2"></ix-select-item>\n  <ix-select-item label="Item 3" value="3"></ix-select-item>\n  <ix-select-item label="Item 4" value="4"></ix-select-item>\n</ix-select>\n')))}m.isMDXComponent=!0},69747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/select-multiple",id:"auto-generated/previews/web-component/select-multiple",title:"select-multiple",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/select-multiple.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/select-multiple",permalink:"/version-dev/docs/auto-generated/previews/web-component/select-multiple",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/select-multiple.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ix-select mode="multiple">\n  <ix-select-item label="Item 1" value="1"></ix-select-item>\n  <ix-select-item label="Item 2" value="2"></ix-select-item>\n  <ix-select-item label="Item 3" value="3"></ix-select-item>\n  <ix-select-item label="Item 4" value="4"></ix-select-item>\n</ix-select>\n<script>\n  (async function () {\n    await window.customElements.whenDefined(\'ix-select\');\n    const select = document.querySelector(\'ix-select\');\n    select.selectedIndices = [\'1\', \'3\'];\n  })();\n<\/script>\n')))}m.isMDXComponent=!0},28902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),l=(n(2784),n(30876));const r={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/select",id:"auto-generated/previews/web-component/select",title:"select",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/select.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/select",permalink:"/version-dev/docs/auto-generated/previews/web-component/select",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/select.md",tags:[],version:"current",frontMatter:{}},o={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ix-select selected-indices="1">\n  <ix-select-item label="Item 1" value="1"></ix-select-item>\n  <ix-select-item label="Item 2" value="2"></ix-select-item>\n  <ix-select-item label="Item 3" value="3"></ix-select-item>\n  <ix-select-item label="Item 4" value="4"></ix-select-item>\n</ix-select>\n')))}m.isMDXComponent=!0},80346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>w,default:()=>S,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var a=n(7896),l=(n(2784),n(30876)),r=n(82009),i=n(64176),s=n(68086),o=n(61423),c=n(52276),d=n(43804),m=n(28902),u=n(6090),p=n(69747),v=n(3675),g=n(18649),k=n(72048),b=n(44926),N=n(40686),x=n(52719);const f={},w="Select",h={unversionedId:"controls/select",id:"controls/select",title:"Select",description:"Usage",source:"@site/docs/controls/select.md",sourceDirName:"controls",slug:"/controls/select",permalink:"/version-dev/docs/controls/select",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/select.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Radiobutton",permalink:"/version-dev/docs/controls/radiobutton"},next:{title:"Spinner",permalink:"/version-dev/docs/controls/spinner"}},I={},y=[{value:"Usage",id:"usage",level:2},{value:"Editable",id:"editable",level:3},{value:"Multiselect",id:"multiselect",level:3},{value:"Properties (ix-select)",id:"properties-ix-select",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-select-item)",id:"properties-ix-select-item",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],T={toc:y};function S(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select"},"Select"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.Z,{name:"select",height:"18rem",mdxType:"Preview"},(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)(m.default,{mdxType:"SourceSelect"})),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)(v.default,{mdxType:"SourceReactSelect"})),(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)(b.default,{mdxType:"SourceAngularSelect"}))),(0,l.kt)("h3",{id:"editable"},"Editable"),(0,l.kt)(i.Z,{name:"select-editable",height:"18rem",mdxType:"Preview"},(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)(u.default,{mdxType:"SourceEditable"})),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)(g.default,{mdxType:"SourceReactEditable"})),(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)(N.default,{mdxType:"SourceAngularEditable"}))),(0,l.kt)("h3",{id:"multiselect"},"Multiselect"),(0,l.kt)(i.Z,{name:"select-multiple",height:"18rem",mdxType:"Preview"},(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)(p.default,{mdxType:"SourceMultiple"})),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)(k.default,{mdxType:"SourceReactMultiple"})),(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)(x.default,{mdxType:"SourceAngularMultiple"}))),(0,l.kt)("h2",{id:"properties-ix-select"},"Properties (ix-select)"),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)(s.default,{mdxType:"Props"}),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)(o.default,{mdxType:"Events"}),(0,l.kt)("h2",{id:"properties-ix-select-item"},"Properties (ix-select-item)"),(0,l.kt)("h3",{id:"props-1"},"Props"),(0,l.kt)(c.default,{mdxType:"ItemProps"}),(0,l.kt)("h3",{id:"events-1"},"Events"),(0,l.kt)(d.default,{mdxType:"ItemEvents"}))}S.isMDXComponent=!0}}]);