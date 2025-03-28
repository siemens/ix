"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6164],{53780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>K,contentTitle:()=>q,default:()=>G,frontMatter:()=>H,metadata:()=>o,toc:()=>z});const o=JSON.parse('{"id":"components/layout-auto/code","title":"Layout auto - Code","description":"Basic","source":"@site/docs/components/layout-auto/code.mdx","sourceDirName":"components/layout-auto","slug":"/components/layout-auto/code","permalink":"/version-alpha/docs/components/layout-auto/code","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/layout-auto/code.mdx","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Layout auto","permalink":"/version-alpha/docs/components/layout-auto/"},"next":{"title":"Layout grid","permalink":"/version-alpha/docs/components/layout-grid/"}}');var r=n(65723),a=n(65598),s=n(37746);function i(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import \'./layout-auto.scoped.css\';\n\nimport { IxLayoutAuto, IxTypography } from \'@siemens/ix-react\';\n\nexport default () => {\n  return (\n    <IxLayoutAuto className="LayoutExample">\n      <IxTypography format="display">1</IxTypography>\n      <IxTypography format="display">2</IxTypography>\n      <IxTypography format="display">3</IxTypography>\n      <IxTypography format="display" data-colspan="2">\n        4\n      </IxTypography>\n      <IxTypography format="display">5</IxTypography>\n      <IxTypography format="display">6</IxTypography>\n    </IxLayoutAuto>\n  );\n};\n'})})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function l(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:"ix-layout-auto ix-typography {\n  display: flex;\n  padding: 0.15rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border: 0.0625rem solid var(--theme-color-soft-bdr);\n  background: var(--theme-color-ghost);\n  border-radius: 0.1875rem;\n}\n"})})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function u(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './layout-auto.html',\n  styleUrls: ['./layout-auto.css'],\n})\nexport default class LayoutAuto {}\n"})})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function m(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<ix-layout-auto>\n  <ix-typography format="display">1</ix-typography>\n  <ix-typography format="display">2</ix-typography>\n  <ix-typography format="display">3</ix-typography>\n  <ix-typography format="display" data-colspan="2">4</ix-typography>\n  <ix-typography format="display">5</ix-typography>\n  <ix-typography format="display">6</ix-typography>\n</ix-layout-auto>\n'})})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}function y(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:"ix-layout-auto ix-typography {\n  display: flex;\n  padding: 0.15rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border: 0.0625rem solid var(--theme-color-soft-bdr);\n  background: var(--theme-color-ghost);\n  border-radius: 0.1875rem;\n}\n"})})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}function f(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vue",children:'<script setup lang="ts">\nimport { IxLayoutAuto, IxTypography } from \'@siemens/ix-vue\';\n<\/script>\n\n<style scoped src="./layout-auto.css"></style>\n\n<template>\n  <IxLayoutAuto className="LayoutExample">\n    <IxTypography format="display">1</IxTypography>\n    <IxTypography format="display">2</IxTypography>\n    <IxTypography format="display">3</IxTypography>\n    <IxTypography format="display" data-colspan="2"> 4 </IxTypography>\n    <IxTypography format="display">5</IxTypography>\n    <IxTypography format="display">6</IxTypography>\n  </IxLayoutAuto>\n</template>\n'})})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}function j(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:"ix-layout-auto ix-typography {\n  display: flex;\n  padding: 0.15rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border: 0.0625rem solid var(--theme-color-soft-bdr);\n  background: var(--theme-color-ghost);\n  border-radius: 0.1875rem;\n}\n"})})}function v(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}function w(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Layout auto example</title>\n    <link rel="stylesheet" href="./layout-auto.css" />\n  </head>\n  <body>\n    <ix-layout-auto>\n      <ix-typography format="display">1</ix-typography>\n      <ix-typography format="display">2</ix-typography>\n      <ix-typography format="display">3</ix-typography>\n      <ix-typography format="display" data-colspan="2">4</ix-typography>\n      <ix-typography format="display">5</ix-typography>\n      <ix-typography format="display">6</ix-typography>\n    </ix-layout-auto>\n\n    <style>\n      ix-layout-auto > ix-typography {\n        display: flex;\n        padding: 0.15rem;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        align-self: stretch;\n        border: 1px solid var(--theme-color-soft-bdr);\n        background: var(--theme-color-ghost);\n        border-radius: 3px;\n      }\n    </style>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}function k(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:"ix-layout-auto ix-typography {\n  display: flex;\n  padding: 0.15rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border: 0.0625rem solid var(--theme-color-soft-bdr);\n  background: var(--theme-color-ghost);\n  border-radius: 0.1875rem;\n}\n"})})}function T(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}function A(e){return(0,r.jsx)(s.A,{name:"layout-auto",source:{react:{"layout-auto.tsx":c,"layout-auto.scoped.css":p},angular:{"layout-auto.ts":d,"layout-auto.html":h,"layout-auto.css":x},vue:{"layout-auto.vue":g,"layout-auto.css":v},html:{"layout-auto.html":b,"layout-auto.css":T}},files:{react:{"layout-auto.tsx":"react/layout-auto.tsx","layout-auto.scoped.css":"react/layout-auto.scoped.css"},angular:{"layout-auto.ts":"angular/layout-auto.ts","layout-auto.html":"angular/layout-auto.html","layout-auto.css":"angular/layout-auto.css"},vue:{"layout-auto.vue":"vue/layout-auto.vue","layout-auto.css":"vue/layout-auto.css"},html:{"layout-auto.html":"html/layout-auto.html","layout-auto.css":"html/layout-auto.css"}},height:e.height,onlyFramework:e.onlyFramework})}function I(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}function _(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import \'./layout-auto.scoped.css\';\n\nimport { IxLayoutAuto, IxTypography } from \'@siemens/ix-react\';\n\nexport default () => {\n  return (\n    <IxLayoutAuto\n      className="LayoutExample"\n      layout={[\n        { minWidth: \'0\', columns: 1 },\n        { minWidth: \'560px\', columns: 2 },\n        { minWidth: \'800px\', columns: 4 },\n      ]}\n    >\n      <IxTypography format="display">1</IxTypography>\n      <IxTypography format="display">2</IxTypography>\n      <IxTypography format="display">3</IxTypography>\n      <IxTypography format="display" data-colspan="2">\n        4\n      </IxTypography>\n      <IxTypography format="display">5</IxTypography>\n      <IxTypography format="display">6</IxTypography>\n    </IxLayoutAuto>\n  );\n};\n'})})}function E(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}function $(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './layout-auto-custom.html',\n  styleUrls: ['./layout-auto.css'],\n})\nexport default class LayoutAutoCustom {\n  layout = [\n    { minWidth: '0', columns: 1 },\n    { minWidth: '35rem', columns: 2 },\n    { minWidth: '50rem', columns: 4 },\n  ];\n}\n"})})}function C(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)($,{...e})}):$(e)}function N(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<ix-layout-auto [layout]="layout">\n  <ix-typography format="display">1</ix-typography>\n  <ix-typography format="display">2</ix-typography>\n  <ix-typography format="display">3</ix-typography>\n  <ix-typography format="display" data-colspan="2">4</ix-typography>\n  <ix-typography format="display">5</ix-typography>\n  <ix-typography format="display">6</ix-typography>\n</ix-layout-auto>\n'})})}function S(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}function L(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vue",children:'<script setup lang="ts">\nimport { IxLayoutAuto, IxTypography } from \'@siemens/ix-vue\';\n\nconst layout = [\n  { minWidth: \'0\', columns: 1 },\n  { minWidth: \'560px\', columns: 2 },\n  { minWidth: \'800px\', columns: 4 },\n];\n<\/script>\n\n<style scoped src="./layout-auto.css"></style>\n\n<template>\n  <IxLayoutAuto className="LayoutExample" :layout="layout">\n    <IxTypography format="display">1</IxTypography>\n    <IxTypography format="display">2</IxTypography>\n    <IxTypography format="display">3</IxTypography>\n    <IxTypography format="display" data-colspan="2"> 4 </IxTypography>\n    <IxTypography format="display">5</IxTypography>\n    <IxTypography format="display">6</IxTypography>\n  </IxLayoutAuto>\n</template>\n'})})}function R(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(L,{...e})}):L(e)}function F(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Layout auto custom example</title>\n    <link rel="stylesheet" href="./layout-auto.css" />\n  </head>\n  <body>\n    <ix-layout-auto>\n      <ix-typography format="display">1</ix-typography>\n      <ix-typography format="display">2</ix-typography>\n      <ix-typography format="display">3</ix-typography>\n      <ix-typography format="display" data-colspan="4">4</ix-typography>\n      <ix-typography format="display">5</ix-typography>\n      <ix-typography format="display">6</ix-typography>\n    </ix-layout-auto>\n    <script>\n      const autoLayout = document.querySelector(\'ix-layout-auto\');\n      autoLayout.layout = [\n        { minWidth: \'0\', columns: 1 },\n        { minWidth: \'35rem\', columns: 2 },\n        { minWidth: \'50rem\', columns: 4 },\n      ];\n    <\/script>\n\n    <style>\n      ix-layout-auto > ix-typography {\n        display: flex;\n        padding: 0.15rem;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        align-self: stretch;\n        border: 1px solid var(--theme-color-soft-bdr);\n        background: var(--theme-color-ghost);\n        border-radius: 3px;\n      }\n    </style>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function P(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(F,{...e})}):F(e)}function O(e){return(0,r.jsx)(s.A,{name:"layout-auto-custom",source:{react:{"layout-auto-custom.tsx":E},angular:{"layout-auto-custom.ts":C,"layout-auto-custom.html":S},vue:{"layout-auto-custom.vue":R},html:{"layout-auto-custom.html":P}},files:{react:{"layout-auto-custom.tsx":"react/layout-auto-custom.tsx"},angular:{"layout-auto-custom.ts":"angular/layout-auto-custom.ts","layout-auto-custom.html":"angular/layout-auto-custom.html"},vue:{"layout-auto-custom.vue":"vue/layout-auto-custom.vue"},html:{"layout-auto-custom.html":"html/layout-auto-custom.html"}},height:e.height,onlyFramework:e.onlyFramework})}function D(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(O,{...e})}):O(e)}n(61339),n(43304);var U=n(26457);function B(e){const t={h2:"h2",h3:"h3",...(0,a.R)(),...e.components};return U.A||W("ApiTable",!1),U.A.Code||W("ApiTable.Code",!0),U.A.PropertyHeader||W("ApiTable.PropertyHeader",!0),U.A.Text||W("ApiTable.Text",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"api-for-ix-layout-auto",children:"API for ix-layout-auto"}),"\n",(0,r.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(U.A,{id:"property-layout",children:[(0,r.jsx)(U.A.PropertyHeader,{name:"layout",singleFramework:""}),(0,r.jsx)(U.A.Text,{name:"Description",children:"Defines the layout of the form."}),(0,r.jsx)(U.A.Code,{name:"Type",children:"{ minWidth: string; columns: number; }[]"}),(0,r.jsx)(U.A.Code,{name:"Default",children:"[\n    { minWidth: '0', columns: 1 },\n    { minWidth: '48em', columns: 2 },\n  ]"})]})]})}function M(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(B,{...e})}):B(e)}function W(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const H={"doc-type":"tab-item"},q="Layout auto - Code",K={},z=[{value:"Basic",id:"basic",level:2},{value:"Custom columns",id:"custom-columns",level:2},{value:"API for ix-layout-auto",id:"api-for-ix-layout-auto",level:2},{value:"Properties",id:"properties",level:3}];function V(e){const t={h1:"h1",h2:"h2",header:"header",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"layout-auto---code",children:"Layout auto - Code"})}),"\n",(0,r.jsx)(t.h2,{id:"basic",children:"Basic"}),"\n",(0,r.jsx)(I,{height:"14rem"}),"\n",(0,r.jsx)(t.h2,{id:"custom-columns",children:"Custom columns"}),"\n",(0,r.jsx)(D,{height:"14rem"}),"\n",(0,r.jsx)(M,{})]})}function G(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(V,{...e})}):V(e)}},36132:(e,t,n)=>{n.d(t,{A:()=>I});const o=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],r=["project","search","ports","settings"],a=["light","dark"],s=["editor","preview"],i={clickToLoad:e=>l("ctl",e),devToolsHeight:e=>p("devtoolsheight",e),forceEmbedLayout:e=>l("embed",e),hideDevTools:e=>l("hidedevtools",e),hideExplorer:e=>l("hideExplorer",e),hideNavigation:e=>l("hideNavigation",e),openFile:e=>d("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>u("sidebarView",e,r),startScript:e=>d("startScript",e),terminalHeight:e=>p("terminalHeight",e),theme:e=>u("theme",e,a),view:e=>u("view",e,s),zenMode:e=>l("zenMode",e),organization:e=>`${d("orgName",e?.name)}&${d("orgProvider",e?.provider)}`,crossOriginIsolated:e=>l("corp",e)};function c(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&i.hasOwnProperty(e)?i[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function l(e,t){return!0===t?`${e}=1`:""}function p(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function u(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function d(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function m(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function h(e,t){return`${x(t)}${e}${c(t)}`}function y(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${x(n)}${e}${c(n)}`}function x(e={}){return("string"==typeof e.origin?e.origin:"https://stackblitz.com").replace(/\/$/,"")}function f(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}(t,n),function(e,t,n={}){const o=e.allow?.split(";")?.map((e=>e.trim()))??[];n.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated");o.length>0&&(t.allow=o.join("; "))}(e,t,n),e.replaceWith(t)}function g(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function j(e){return e&&!1===e.newWindow?"_self":"_blank"}class v{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,o)=>{const r=m();this.pending[r]={resolve:n,reject:o},this.port.postMessage({type:e,payload:{...t,__reqid:r}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:o,__success:r,__error:a}=n;this.pending[o]&&(r?this.pending[o].resolve(this.cleanResult(n)):this.pending[o].reject(a?`${t}: ${a}`:t),delete this.pending[o])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class w{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new v(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class k{constructor(e){this.id=m(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new w(n[0],t.payload),e(this.vm),r())},o=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(s),window.removeEventListener("message",n)}window.addEventListener("message",n),o();let a=0;const s=window.setInterval((()=>{if(this.vm)r();else{if(a>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,t)=>{e.id===this.id&&b.splice(t,1)}));a++,o()}}),500)})),b.push(this)}}function T({template:e,title:t,description:n,dependencies:r,files:a,settings:s}){if(!o.includes(e)){const e=o.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const i=[],c=(e,t,n="")=>{i.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),r&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(r))),s&&c("project[settings]",JSON.stringify(s)),Object.entries(a).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...i),l}function A(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return((e=>{const t=e instanceof Element?"element":"id";return b.find((n=>n[t]===e))??null})(e)??new k(e)).pending}const I={connect:A,embedGithubProject:function(e,t,n){const o=g(e),r=document.createElement("iframe");return r.src=y(`/github/${t}`,n),f(o,r,n),A(r)},embedProject:function(e,t,n){const o=g(e),r=function(e,t){const n=T(e);return n.action=y("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),a=document.createElement("iframe");return f(o,a,n),a.contentDocument?.write(r),A(a)},embedProjectId:function(e,t,n){const o=g(e),r=document.createElement("iframe");return r.src=y(`/edit/${t}`,n),f(o,r,n),A(r)},openGithubProject:function(e,t){const n=h(`/github/${e}`,t),o=j(t);window.open(n,o)},openProject:function(e,t){!function(e,t){const n=T(e);n.action=h("/run",t),n.target=j(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=h(`/edit/${e}`,t),o=j(t);window.open(n,o)}}},26457:(e,t,n)=>{n.d(t,{b:()=>m,A:()=>d});var o=n(72922),r=n(45291),a=n(51038),s=n(43304);const i={AnchorButton:"AnchorButton_X7SC",AnchorHeader:"AnchorHeader_kjZv",NoButtonBorder:"NoButtonBorder_Hb7W",ApiTableText:"ApiTableText_hDT2"};var c=n(65723);function l(e){let{children:t,id:n}=e;return(0,c.jsx)(o.A,{children:()=>(0,c.jsx)("div",{className:"api-table container ml-0 mb-8",id:n,children:(0,c.jsx)("div",{className:"bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]",children:t})})})}function p(e){let{children:t,name:n,type:o,singleFramework:a}=e;const{framework:i}=(0,r.u)();let l=n;return"vue"!==i&&"angular"!==i&&"html"!==i||(l=n.split("").map(((e,t)=>e.toUpperCase()===e?`${0!==t?"-":""}${e.toLowerCase()}`:e)).join("")),(0,c.jsxs)("div",{className:"flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor",children:[(0,c.jsxs)("div",{className:"flex items-center font-bold",children:[l,(0,c.jsx)("a",{href:`#${o??"property"}-${n}`,className:"hash-link","aria-label":`Direct link to ${n}`,title:`Direct link to ${n}`})]}),(0,c.jsxs)("div",{className:"flex items-center ml-auto gap-2",children:[t,a?"":(0,c.jsx)(s.A,{})]})]})}function u(e){let{children:t,name:n}=e;return(0,c.jsxs)("div",{className:i.ApiTableText,children:[(0,c.jsx)("div",{className:"px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]",children:n}),(0,c.jsx)("div",{className:"w-auto p-4",children:t})]})}l.PropertyHeader=p,l.EventHeader=function(e){let{children:t,name:n}=e;const{framework:o}=(0,r.u)();let a=n;return"react"===o&&(a=`on${n.charAt(0).toUpperCase()}${n.slice(1)}`),(0,c.jsx)(p,{name:a,type:"event",children:t})},l.SlotHeader=function(e){let{children:t,name:n}=e;return(0,c.jsx)(p,{name:n,type:"slot",children:t})},l.Text=u,l.Code=function(e){let{children:t,name:n}=e;return(0,c.jsx)(u,{name:n,children:(0,c.jsx)("code",{className:"p-1",children:t})})};const d=l;function m(e){let{children:t,right:n,anchorName:o,anchorLabel:r,noBottomBorder:s,onClick:l}=e;return(0,c.jsxs)("div",{className:(0,a.A)(i.AnchorHeader,{[i.NoButtonBorder]:s}),children:[(0,c.jsx)("div",{className:"flex items-center font-bold w-full",children:(0,c.jsxs)("button",{onClick:l,className:(0,a.A)("all-unset",i.AnchorButton),tabIndex:0,children:[t,(0,c.jsx)("a",{href:`#${o}`,className:"hash-link","aria-label":r,title:r})]})}),(0,c.jsx)("div",{className:"flex items-center ml-auto gap-2",children:n})]})}},37746:(e,t,n)=>{n.d(t,{A:()=>S});var o=n(20295),r=n(6053),a=n(95130),s=n(50728),i=n(51038),c=n(22155);const l={CodePreview:"CodePreview_qXsk",toolbar:"toolbar_rOKU",code:"code_RYOk"};var p=n(2616),u=n(18463),d=n(65723);function m(e){const{selectedFramework:t}=e,[n,o]=(0,c.useState)(""),[r,i]=(0,c.useState)((()=>()=>(0,d.jsx)(s.A,{children:["Test"]}))),m=(0,c.useRef)(null);return(0,c.useEffect)((()=>{if(e.files&&e.files[t]){const n=Object.keys(e.files[t])[0];o(n),i((()=>e.source[t][n]))}}),[t]),(0,c.useEffect)((()=>{e.onShowSource(r)}),[r]),(0,d.jsx)("div",{className:l.CodePreview,children:e.source&&e.source[t]&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(u.A,{ref:m,children:[n,c.createElement("ix-icon",{name:a.mvO})]}),m.current&&(0,d.jsx)(p.$9,{trigger:m.current,children:Object.keys(e.source[t]).map((r=>(0,d.jsx)(p.iz,{checked:n===r,onClick:()=>{o(r),i((()=>e.source[t][r]))},children:r},r)))})]})})}var h=n(43304);function y(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}async function x(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const o=await n.text();if(!o||o?.includes('<div id="__docusaurus"></div>')||o?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?o.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim():o}var f=n(36132);function g(e,t,n,o){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,o),f.A.openProject({title:`iX ${y(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function j(e,t,n,o){const r=await async function(e,t,n){const o=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const o=await x(`${e}code-runtime/vue/${n}`);t[n]=o}));await Promise.all(n);const o=await x(`${e}/vue/global.css`);return t["src/styles/global.css"]=o,t}(e),r={...o};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${y(n)} from './${n}.vue';`;return r["src/App.vue"]=r["src/App.vue"].replace("import Example from './Example.vue';",a),r["src/App.vue"]=r["src/App.vue"].replace("<Example />",`<${y(n)} />`),r}(e,t,n);g("vue",r,`${n}.vue`,o)}async function v(e,t,n,o){const r=await async function(e,t,n){const o=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const o=await x(`${e}code-runtime/html/${n}`);t[n]=o}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const o=await x(`${e}/html/global.css`);return t["src/styles/global.css"]=o,t}(e),r={...o},a=t[`${n}.html`];return r["src/index.html"]=a,Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]})),delete r[`src/${n}.html`],r}(e,t,n);g("html",r,"src/index.html",o)}async function w(e,t,n,o){const r=await async function(e,t,n){const o=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const o=await x(`${e}code-runtime/angular/${n}`);t[n]=o}));await Promise.all(n);const o=await x(`${e}/angular/global.css`);return t["src/styles.css"]=o,t}(e),r={...o};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const a=function(e,t){const n=/@Component\(/;return Object.keys(e).filter((o=>o.endsWith(".ts")&&o!==`${t}.ts`&&n.test(e[o]))).map((e=>e.replace(".ts","")))}(t,n),s=a.map((e=>`import ${y(e)} from './../${e}';`)).join("\n");r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${y(n)} from './../${n}';`,s].join("\n"));const i=a.map((e=>y(e))).join(", ");return r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${y(n)}, ${i}],`),r}(e,t,n);g("angular",r,`src/${n}.ts`,o)}async function b(e,t,n,o){const r=await async function(e,t,n){const o=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const o=await x(`${e}code-runtime/react/${n}`);t[n]=o}));await Promise.all(n);const o=await x(`${e}/react/global.css`);return t["src/styles/global.css"]=o,t}(e),r={...o};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${y(n)} from './${n}';`;return r["src/App.tsx"]=r["src/App.tsx"].replace("import Example from './Example';",a),r["src/App.tsx"]=r["src/App.tsx"].replace("<Example />",`<${y(n)} />`),r}(e,t,n);g("react",r,`src/${n}.tsx`,o)}var k=n(72922);function T(e){const t=(0,r.Ay)("/demo/v2/");return(0,d.jsx)(k.A,{children:()=>(0,d.jsxs)(u.A,{onClick:()=>{!async function(e){let{baseUrl:t,name:n,framework:o,sourcePath:r,version:a}=e;const s=a||"latest",i={};await Promise.all(Object.keys(r).map((async e=>{i[e]=await x(`${t}/${r[e]}`)}))),"react"===o?b(t,i,n,s):"angular"===o?w(t,i,n,s):"html"===o?v(t,i,n,s):"vue"===o&&j(t,i,n,s)}({baseUrl:t,framework:e.framework,name:e.mount,sourcePath:e.files,version:"latest"})},children:[c.createElement("ix-icon",{name:a.Ymj}),"Open Stackblitz"]})})}const A={pill:"pill_UrZt",pill__active:"pill__active_n11m"};function I(e){let{children:t,active:n,onClick:o}=e;return(0,d.jsx)("button",{onClick:o,className:(0,i.A)("all-unset",A.pill,{[A.pill__active]:n}),children:t})}var _=n(78657),E=n(90800);const $={playground:"playground_GmEd",toolbar:"toolbar_EsJG",preview:"preview_jEFK",code:"code_wC2A",toolbar__actions:"toolbar__actions_bull",spacer:"spacer_C_ki",iframe:"iframe_SPmo"};function C(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("a",{href:e.openExternalUrl,target:"_blank",className:"flex gap-1 text-[var(--theme-color-soft-text)]",children:[c.createElement("ix-icon",{name:a.B7e}),"Full preview"]}),(0,d.jsx)(_.Ay,{onThemeChange:e.onChangeTheme}),(0,d.jsx)(E.A,{isLight:e.colorModeLight,onChangeColorMode:e.onChangeColorMode})]})}function N(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(T,{framework:e.framework,files:e.files,mount:e.mount}),!e.hideFrameworkSelection&&(0,d.jsx)(h.A,{onFrameworkChange:e.onFrameworkChange})]})}function S(e){const t=(0,_.wM)(),{colorMode:n}=(0,o.G)(),[a,l]=(0,c.useState)("dark"===n),[p,u]=(0,c.useState)(!e.noPreview),[h,y]=(0,c.useState)(t),x=(0,r.Ay)(`/demo/v2/preview/html/preview-examples/${e.name}.html?no-margin=true&theme=theme-${h}-${a?"dark":"light"}`),[f,g]=(0,c.useState)(e.onlyFramework??"angular"),[j,v]=(0,c.useState)((()=>()=>(0,d.jsx)(s.A,{children:["Nothing to see here \ud83e\udd78"]})));return(0,c.useEffect)((()=>{l("dark"===n)}),[n]),(0,d.jsxs)("div",{className:$.playground,children:[(0,d.jsxs)("div",{className:$.toolbar,children:[!e.noPreview&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(I,{onClick:()=>u(!0),active:p,children:"Preview"}),(0,d.jsx)(I,{onClick:()=>u(!1),active:!p,children:"Code"}),(0,d.jsx)("div",{className:$.spacer})]}),!p&&(0,d.jsx)(m,{selectedFramework:f,name:e.name,files:e.files,source:e.source,onShowSource:e=>{v((()=>e))}}),(0,d.jsx)("div",{className:$.toolbar__actions,children:p?(0,d.jsx)(C,{colorModeLight:!a,openExternalUrl:x,onChangeColorMode:()=>l(!a),onChangeTheme:y}):(0,d.jsx)(N,{mount:e.name,hideFrameworkSelection:!!e.onlyFramework,onFrameworkChange:g,framework:f,files:e.files[f]})})]}),(0,d.jsx)("div",{className:(0,i.A)($.preview,{[$.code]:p}),style:{"--preview-height":e.height},children:p?(0,d.jsx)("iframe",{src:x,className:$.iframe}):(0,d.jsx)(j,{})})]})}},18463:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(22155);const r="Button_k5HP";var a=n(51038),s=n(65723);const i=(0,o.forwardRef)(((e,t)=>{let{children:n,onClick:o}=e;return(0,s.jsx)("button",{className:(0,a.A)("all-unset",r),onClick:o,ref:t,children:n})}))},43304:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(95130),r=n(2616),a=n(45291),s=n(22155),i=n(18463),c=n(72922),l=n(65723);function p(e){return(0,l.jsx)(c.A,{children:()=>(0,l.jsx)(u,{...e})})}function u(e){const{framework:t,setFramework:n}=(0,a.u)(),c=(0,s.useRef)(null);return(0,s.useEffect)((()=>{e.onFrameworkChange&&e.onFrameworkChange(t)}),[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.A,{ref:c,children:[s.createElement("ix-icon",{name:o.NCo}),(0,a.F)(t)," ",s.createElement("ix-icon",{name:o.mvO})]}),c.current&&(0,l.jsxs)(r.$9,{trigger:c.current,children:[(0,l.jsx)(r.iz,{onClick:()=>n("angular"),children:"Angular"}),(0,l.jsx)(r.iz,{onClick:()=>n("react"),children:"React"}),(0,l.jsx)(r.iz,{onClick:()=>n("vue"),children:"Vue"}),(0,l.jsx)(r.iz,{onClick:()=>n("html"),children:"HTML"})]})]})}},61339:(e,t,n)=>{n.d(t,{k$:()=>i,PI:()=>u,df:()=>s});const o={Tag:"Tag_JPbC",Since:"Since_Ybno",FormReady:"FormReady_rKLF",Deprecated:"Deprecated_M0Gf",Redirect:"Redirect_eyq7",Link:"Link_YkBF"};var r=n(65723);function a(e){let{children:t}=e;return(0,r.jsx)("div",{className:o.Tag,children:t})}function s(e){let{message:t}=e;return(0,r.jsx)(a,{children:(0,r.jsxs)("div",{className:o.Since,children:["Since ",t]})})}function i(e){let{message:t}=e;return(0,r.jsx)(a,{children:(0,r.jsxs)("div",{className:o.Deprecated,children:["Deprecated ",t]})})}var c=n(22155),l=n(95130),p=n(51038);function u(e){let{link:t,children:n}=e;return(0,r.jsx)(a,{children:(0,r.jsxs)("div",{className:(0,p.A)(o.Redirect),children:[c.createElement("ix-icon",{name:l.B7e,color:"color-primary",size:"16"}),(0,r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:o.Link,children:n})]})})}},78657:(e,t,n)=>{n.d(t,{Ay:()=>y,wM:()=>m});var o=n(22155),r=n(2616),a=n(18463),s=n(95130),i=n(26558),c=n(72922),l=n(65723);const p="brand",u="classic";function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function m(){return(0,i.A)().siteConfig.customFields.withBrandTheme?p:u}function h(e){const t=(0,i.A)(),[n]=(0,o.useState)((()=>{const e=[u];return t.siteConfig.customFields.withBrandTheme&&e.push(p),e})),[c,m]=(0,o.useState)((()=>t.siteConfig.customFields.withBrandTheme?p:u)),[h,y]=(0,o.useState)(null),x=d(c);return(0,o.useEffect)((()=>{e.onThemeChange?.(c)}),[c]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.A,{ref:y,children:[o.createElement("ix-icon",{name:s.z4G}),x,o.createElement("ix-icon",{name:s.mvO})]}),h&&(0,l.jsx)(r.$9,{trigger:h,children:n.map((e=>(0,l.jsx)(r.iz,{onClick:()=>m(e),children:d(e)},e)))})]})}const y=e=>(0,l.jsx)(c.A,{children:()=>(0,l.jsx)(h,{...e})})},90800:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(95130),r=n(22155),a=n(18463),s=n(65723);function i(e){let{isLight:t,onChangeColorMode:n}=e;return(0,s.jsxs)(a.A,{onClick:n,children:[r.createElement("ix-icon",{name:t?o.q35:o.fDS}),t?"Light":"Dark"]})}},45291:(e,t,n)=>{n.d(t,{F:()=>r,u:()=>a});var o=n(22155);const r=e=>{switch(e){case"angular":return"Angular";case"react":return"React";case"vue":return"Vue";case"html":return"HTML"}},a=()=>{const[e,t]=function(e,t){const[n,r]=(0,o.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return(0,o.useEffect)((()=>{const t=t=>{if(t.key===e){const e=t.newValue?JSON.parse(t.newValue):void 0;r(e)}};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}}),[e]),[n,t=>{try{const o=t instanceof Function?t(n):t;r(o),window.localStorage.setItem(e,JSON.stringify(o)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(o)}))}catch(o){console.error(o)}}]}("docusaurus.code.framework","angular");return{framework:e,setFramework:t}}}}]);