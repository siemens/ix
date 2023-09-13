"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22718,31283],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31283:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/slider-marker",id:"auto-generated/previews/web-component/slider-marker",title:"slider-marker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/slider-marker.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/slider-marker",permalink:"/version-dev/docs/auto-generated/previews/web-component/slider-marker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/slider-marker.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-slider value="25">\n  <span slot="label-start">0</span>\n  <span slot="label-end">100</span>\n</ix-slider>\n\n<ix-slider min="0" max="50" step="10" value="10">\n  <span slot="label-start">0</span>\n  <span slot="label-end">100</span>\n</ix-slider>\n<script type="module">\n  (async () => {\n    await window.customElements.whenDefined(\'ix-slider\');\n\n    const slider = document.querySelector(\'ix-slider:nth-child(1)\');\n    slider.marker = [0, 25, 50, 75, 100];\n\n    const slider2 = document.querySelector(\'ix-slider:nth-child(2)\');\n    slider2.marker = [0, 10, 20, 30, 40, 50];\n  })();\n<\/script>\n')))}u.isMDXComponent=!0}}]);