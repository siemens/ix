"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[885],{30876:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,y=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(y,s(s({ref:t},d),{},{components:r})):n.createElement(y,s({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91870:(e,t,r)=>{r.d(t,{Z:()=>f,C:()=>g});var n=r(89817),i=r(37949),a=r(90077),s=r(6277),o=r(2784);const l="Card__List_PIGW",c="Card_EPsO",d="Auto__Width_RXP2",m="Card_big__rLc",p="With__Icon__M6w",u="Splitter_xIp1",y="Label_uVaA",b="Full__Height_Aspr",k="Icon_ZZVP",h="Card__Primary_p1H3";function f(e){const{preferredVersion:t}=(0,i.J)();return o.createElement(n.Z,{to:function(){var r;if(!t)return(0,a.Z)(`/docs/${e.link}`);if(null!=(r=e.link)&&r.startsWith("http"))return e.link;const n=t.path;return(0,a.Z)(`${n}/${e.link}`)}(),style:{textDecoration:"none"}},o.createElement("div",{className:(0,s.Z)(c,{[h]:e.isPrimary,[p]:e.icon,[d]:e.autoWidth},"big"===e.size?m:c),style:e.style},o.createElement("div",{className:(0,s.Z)(y,"text-h2",{[b]:!e.icon})},e.label),e.icon?o.createElement(o.Fragment,null,o.createElement("div",{className:u}),o.createElement("div",{className:(0,s.Z)(k)},o.createElement("ix-icon",{name:e.icon}))):null,e.children))}function g(e){return o.createElement("div",{className:(0,s.Z)(l)},e.children)}},55669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var n=r(7896),i=r(2784),a=r(30876),s=r(91870);function o(){return i.createElement("div",{className:"Design__Kit"},i.createElement("div",{className:"text-h2 Label"},"Access our design kits below!"),i.createElement("div",{className:"Icon"},i.createElement("i",{className:"glyph glyph-download"})))}function l(){return i.createElement("div",{className:"Separator"})}const c={},d="iX Design Kits",m={unversionedId:"design-kit/design-kit",id:"design-kit/design-kit",title:"iX Design Kits",description:"Download our iX Design System here. There are two Sketch libraries available, one for Siemens employees with brand elements and one open-source library.",source:"@site/docs/design-kit/design-kit.md",sourceDirName:"design-kit",slug:"/design-kit/",permalink:"/version-dev/docs/design-kit/",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/design-kit/design-kit.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Siemens iX Team",permalink:"/version-dev/docs/team"},next:{title:"Industrial Icon system",permalink:"/version-dev/docs/icon-library/icons"}},p={},u=[{value:"Sketch open-source library",id:"sketch-open-source-library",level:2},{value:"Siemens internal Sketch library",id:"siemens-internal-sketch-library",level:2},{value:"Siemens Figma library",id:"siemens-figma-library",level:2}],y={toc:u};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ix-design-kits"},"iX Design Kits"),(0,a.kt)("p",null,"Download our iX Design System here. There are two Sketch libraries available, one for Siemens employees with brand elements and one open-source library."),(0,a.kt)("p",null,"The Figma library is coming soon."),(0,a.kt)(s.C,{mdxType:"CardList"},(0,a.kt)(s.Z,{label:"Sketch open-source library",isPrimary:!0,autoWidth:!0,link:"design-kit#sketch-open-source-library",mdxType:"Card"}),(0,a.kt)(s.Z,{label:"Sketch Siemens brand library",autoWidth:!0,link:"design-kit#siemens-internal-sketch-library",mdxType:"Card"}),(0,a.kt)(s.Z,{label:"Figma library coming soon",autoWidth:!0,link:"design-kit#siemens-figma-library",mdxType:"Card"})),(0,a.kt)(l,{mdxType:"Separator"}),(0,a.kt)(o,{mdxType:"DesignKit"}),(0,a.kt)(l,{mdxType:"Separator"}),(0,a.kt)("h2",{id:"sketch-open-source-library"},"Sketch open-source library"),(0,a.kt)("p",null,"Our open-source Sketch library is available to everyone."),(0,a.kt)("p",null,"\u203a ",(0,a.kt)("a",{target:"_blank",href:r(56684).Z},"Download here")),(0,a.kt)("h2",{id:"siemens-internal-sketch-library"},"Siemens internal Sketch library"),(0,a.kt)("p",null,"Our Siemens brand Sketch library contains specific brand elements that are only accessible to Siemens employees."),(0,a.kt)("p",null,"\u203a ",(0,a.kt)("a",{parentName:"p",href:"https://siemens-ix.code.siemens.io/ix-brand-theme/sketch.zip"},"Download here")),(0,a.kt)("h2",{id:"siemens-figma-library"},"Siemens Figma library"),(0,a.kt)("p",null,"Coming soon"))}b.isMDXComponent=!0},56684:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/sketch-ef077d27a06372fb5d7d3a8aa35bb3c2.zip"}}]);