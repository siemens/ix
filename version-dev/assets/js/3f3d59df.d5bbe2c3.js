"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[533],{30876:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return t?n.createElement(g,p(p({ref:r},c),{},{components:t})):n.createElement(g,p({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42973:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7896),o=(t(2784),t(30876));const a={},p=void 0,i={unversionedId:"auto-generated/previews/angular/group-header-suppressed",id:"auto-generated/previews/angular/group-header-suppressed",title:"group-header-suppressed",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/group-header-suppressed.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/group-header-suppressed",permalink:"/version-dev/docs/auto-generated/previews/angular/group-header-suppressed",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/group-header-suppressed.md",tags:[],version:"current",frontMatter:{}},u={},s=[],c={toc:s};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-group-header-suppressed\',\n  template: `\n    <ix-group\n      header="Header text"\n      sub-header="Subheader text"\n      suppress-header-selection\n    >\n      <ix-group-item text="Example text 1"></ix-group-item>\n      <ix-group-item text="Example text 2"></ix-group-item>\n      <ix-group-item text="Example text 3"></ix-group-item>\n    </ix-group>\n  `,\n})\nexport class GroupHeaderSuppressed {}\n')))}l.isMDXComponent=!0}}]);