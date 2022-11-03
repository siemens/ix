"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8287],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37170:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/react/aggrid",id:"auto-generated/previews/react/aggrid",title:"aggrid",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/aggrid.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/aggrid",permalink:"/version-dev/docs/auto-generated/previews/react/aggrid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/aggrid.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { GridOptions } from 'ag-grid-community';\n\nimport { AgGridReact } from 'ag-grid-react';\nimport React from 'react';\n\nconst gridOptions = {\n  columnDefs: [\n    { field: 'make', resizable: true, checkboxSelection: true },\n    { field: 'model', resizable: true, sortable: true, filter: true },\n    { field: 'price', resizable: true },\n  ],\n  rowData: [\n    { make: 'Toyota', model: 'Celica', price: 35000, checked: false },\n    { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },\n    { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },\n  ],\n  rowSelection: 'multiple',\n  suppressCellFocus: true,\n} as GridOptions;\n\nexport const AGGrid: React.FC = () => {\n  return (\n    <div\n      style={{ height: '12rem', width: '100%' }}\n      className=\"ag-theme-alpine-dark ag-theme-ix\"\n    >\n      <AgGridReact gridOptions={gridOptions} />\n    </div>\n  );\n};\n")))}d.isMDXComponent=!0}}]);