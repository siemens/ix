"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7593],{30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/tree",id:"auto-generated/previews/web-component/tree",title:"tree",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tree.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tree",permalink:"/version-dev/docs/auto-generated/previews/web-component/tree",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tree.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\n<div style=\"height: 8rem; width: 100%\">\n  <ix-tree root=\"root\" id=\"tree\"></ix-tree>\n</div>\n\n<script type=\"text/javascript\">\n  (async function () {\n    await window.customElements.whenDefined('ix-tree');\n    const tree = document.getElementById('tree');\n\n    tree.model = {\n      root: {\n        id: 'root',\n        data: null,\n        hasChildren: true,\n        children: ['sample'],\n      },\n      sample: {\n        id: 'sample',\n        data: {\n          name: 'Sample',\n        },\n        hasChildren: true,\n        children: ['sample-child-1', 'sample-child-2'],\n      },\n      'sample-child-1': {\n        id: 'sample-child-1',\n        data: {\n          name: 'Sample Child 1',\n        },\n        hasChildren: false,\n        children: [],\n      },\n      'sample-child-2': {\n        id: 'sample-child-2',\n        data: {\n          name: 'Sample Child 2',\n        },\n        hasChildren: false,\n        children: [],\n      },\n    };\n  })();\n<\/script>\n")))}d.isMDXComponent=!0}}]);