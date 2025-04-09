"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1668],{24667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>F,contentTitle:()=>P,default:()=>O,frontMatter:()=>T,metadata:()=>r,toc:()=>I});const r=JSON.parse('{"id":"components/spinner/code","title":"Spinner - Code","description":"Basic","source":"@site/docs/components/spinner/code.mdx","sourceDirName":"components/spinner","slug":"/components/spinner/code","permalink":"/version-alpha/docs/components/spinner/code","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/spinner/code.mdx","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Spinner","permalink":"/version-alpha/docs/components/spinner/"},"next":{"title":"Toast","permalink":"/version-alpha/docs/components/toast/"}}');var s=t(65723),o=t(65598),i=(t(64235),t(41525),t(33467));function a(e){const n={h2:"h2",h3:"h3",...(0,o.R)(),...e.components};return i.A||l("ApiTable",!1),i.A.Code||l("ApiTable.Code",!0),i.A.PropertyHeader||l("ApiTable.PropertyHeader",!0),i.A.Text||l("ApiTable.Text",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"api-for-ix-spinner",children:"API for ix-spinner"}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(i.A,{id:"property-size",children:[(0,s.jsx)(i.A.PropertyHeader,{name:"size",singleFramework:""}),(0,s.jsx)(i.A.Text,{name:"Description",children:"Size of spinner"}),(0,s.jsx)(i.A.Code,{name:"Attribute",children:"size"}),(0,s.jsx)(i.A.Code,{name:"Type",children:'"large" | "medium" | "small" | "x-small" | "xx-small"'}),(0,s.jsx)(i.A.Code,{name:"Default",children:"'medium'"})]}),"\n",(0,s.jsxs)(i.A,{id:"property-variant",children:[(0,s.jsx)(i.A.PropertyHeader,{name:"variant",singleFramework:""}),(0,s.jsx)(i.A.Text,{name:"Description",children:"Variant of spinner"}),(0,s.jsx)(i.A.Code,{name:"Attribute",children:"variant"}),(0,s.jsx)(i.A.Code,{name:"Type",children:'"primary" | "secondary"'}),(0,s.jsx)(i.A.Code,{name:"Default",children:"'secondary'"})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=t(10540);function p(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { IxSpinner } from '@siemens/ix-react';\n\nexport default () => {\n  return <IxSpinner></IxSpinner>;\n};\n"})})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function u(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-spinner></ix-spinner> `,\n})\nexport default class Spinner {}\n"})})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function x(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vue",children:"<script setup lang=\"ts\">\nimport { IxSpinner } from '@siemens/ix-vue';\n<\/script>\n\n<template>\n  <IxSpinner></IxSpinner>\n</template>\n"})})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}function g(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Spinner example</title>\n  </head>\n  <body>\n    <ix-spinner></ix-spinner>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function j(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}function v(e){return(0,s.jsx)(d.A,{name:"spinner",source:{react:{"spinner.tsx":m},angular:{"spinner.ts":h},vue:{"spinner.vue":f},html:{"spinner.html":j}},files:{react:{"spinner.tsx":"react/spinner.tsx"},angular:{"spinner.ts":"angular/spinner.ts"},vue:{"spinner.vue":"vue/spinner.vue"},html:{"spinner.html":"html/spinner.html"}},height:e.height,onlyFramework:e.onlyFramework})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}function y(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { IxSpinner } from '@siemens/ix-react';\n\nexport default () => {\n  return <IxSpinner size=\"large\"></IxSpinner>;\n};\n"})})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}function A(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-spinner size=\"large\"></ix-spinner> `,\n})\nexport default class SpinnerLarge {}\n"})})}function _(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}function k(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vue",children:'<script setup lang="ts">\nimport { IxSpinner } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxSpinner size="large"></IxSpinner>\n</template>\n'})})}function E(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}function S(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Spinner large example</title>\n  </head>\n  <body>\n    <ix-spinner size="large"></ix-spinner>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function $(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}function N(e){return(0,s.jsx)(d.A,{name:"spinner-large",source:{react:{"spinner-large.tsx":b},angular:{"spinner-large.ts":_},vue:{"spinner-large.vue":E},html:{"spinner-large.html":$}},files:{react:{"spinner-large.tsx":"react/spinner-large.tsx"},angular:{"spinner-large.ts":"angular/spinner-large.ts"},vue:{"spinner-large.vue":"vue/spinner-large.vue"},html:{"spinner-large.html":"html/spinner-large.html"}},height:e.height,onlyFramework:e.onlyFramework})}function C(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(N,{...e})}):N(e)}const T={"doc-type":"tab-item"},P="Spinner - Code",F={},I=[{value:"Basic",id:"basic",level:2},{value:"Large",id:"large",level:2},{value:"API for ix-spinner",id:"api-for-ix-spinner",level:2},{value:"Properties",id:"properties",level:3}];function R(e){const n={h1:"h1",h2:"h2",header:"header",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"spinner---code",children:"Spinner - Code"})}),"\n",(0,s.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,s.jsx)(w,{height:"5rem"}),"\n",(0,s.jsx)(n.h2,{id:"large",children:"Large"}),"\n",(0,s.jsx)(C,{height:"16rem"}),"\n",(0,s.jsx)(c,{})]})}function O(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(R,{...e})}):R(e)}},36132:(e,n,t)=>{t.d(n,{A:()=>E});const r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],s=["project","search","ports","settings"],o=["light","dark"],i=["editor","preview"],a={clickToLoad:e=>l("ctl",e),devToolsHeight:e=>d("devtoolsheight",e),forceEmbedLayout:e=>l("embed",e),hideDevTools:e=>l("hidedevtools",e),hideExplorer:e=>l("hideExplorer",e),hideNavigation:e=>l("hideNavigation",e),openFile:e=>m("file",e),showSidebar:e=>function(e,n){if("boolean"==typeof n)return`${e}=${n?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>p("sidebarView",e,s),startScript:e=>m("startScript",e),terminalHeight:e=>d("terminalHeight",e),theme:e=>p("theme",e,o),view:e=>p("view",e,i),zenMode:e=>l("zenMode",e),organization:e=>`${m("orgName",e?.name)}&${m("orgProvider",e?.provider)}`,crossOriginIsolated:e=>l("corp",e)};function c(e={}){const n=Object.entries(e).map((([e,n])=>null!=n&&a.hasOwnProperty(e)?a[e](n):"")).filter(Boolean);return n.length?`?${n.join("&")}`:""}function l(e,n){return!0===n?`${e}=1`:""}function d(e,n){if("number"==typeof n&&!Number.isNaN(n)){const t=Math.min(100,Math.max(0,n));return`${e}=${encodeURIComponent(Math.round(t))}`}return""}function p(e,n="",t=[]){return t.includes(n)?`${e}=${encodeURIComponent(n)}`:""}function m(e,n){return(Array.isArray(n)?n:[n]).filter((e=>"string"==typeof e&&""!==e.trim())).map((n=>`${e}=${encodeURIComponent(n)}`)).join("&")}function u(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function h(e,n){return`${f(n)}${e}${c(n)}`}function x(e,n){const t={forceEmbedLayout:!0};return n&&"object"==typeof n&&Object.assign(t,n),`${f(t)}${e}${c(t)}`}function f(e={}){return("string"==typeof e.origin?e.origin:"https://stackblitz.com").replace(/\/$/,"")}function g(e,n,t){if(!n||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(n.id=e.id),e.className&&(n.className=e.className),function(e,n={}){const t=Object.hasOwnProperty.call(n,"height")?`${n.height}`:"300",r=Object.hasOwnProperty.call(n,"width")?`${n.width}`:void 0;e.setAttribute("height",t),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}(n,t),function(e,n,t={}){const r=e.allow?.split(";")?.map((e=>e.trim()))??[];t.crossOriginIsolated&&!r.includes("cross-origin-isolated")&&r.push("cross-origin-isolated");r.length>0&&(n.allow=r.join("; "))}(e,n,t),e.replaceWith(n)}function j(e){if("string"==typeof e){const n=document.getElementById(e);if(!n)throw new Error(`Could not find element with id '${e}'`);return n}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function v(e){return e&&!1===e.newWindow?"_self":"_blank"}class w{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:n}){return new Promise(((t,r)=>{const s=u();this.pending[s]={resolve:t,reject:r},this.port.postMessage({type:e,payload:{...n,__reqid:s}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:n,payload:t}=e.data,{__reqid:r,__success:s,__error:o}=t;this.pending[r]&&(s?this.pending[r].resolve(this.cleanResult(t)):this.pending[r].reject(o?`${n}: ${o}`:n),delete this.pending[r])}cleanResult(e){const n={...e};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}}class y{constructor(e,n){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new w(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof n.previewOrigin?n.previewOrigin:null,writable:!1})}applyFsDiff(e){const n=e=>null!==e&&"object"==typeof e;if(!n(e)||!n(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class A{constructor(e){this.id=u(),this.element=e,this.pending=new Promise(((e,n)=>{const t=({data:n,ports:t})=>{"SDK_INIT_SUCCESS"===n?.action&&n.id===this.id&&(this.vm=new y(t[0],n.payload),e(this.vm),s())},r=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function s(){window.clearInterval(i),window.removeEventListener("message",t)}window.addEventListener("message",t),r();let o=0;const i=window.setInterval((()=>{if(this.vm)s();else{if(o>=20)return s(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,n)=>{e.id===this.id&&b.splice(n,1)}));o++,r()}}),500)})),b.push(this)}}function _({template:e,title:n,description:t,dependencies:s,files:o,settings:i}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],c=(e,n,t="")=>{a.push(function(e,n){const t=document.createElement("input");return t.type="hidden",t.name=e,t.value=n,t}(e,"string"==typeof n?n:t))};c("project[title]",n),"string"==typeof t&&t.length>0&&c("project[description]",t),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),i&&c("project[settings]",JSON.stringify(i)),Object.entries(o).forEach((([e,n])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,n)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...a),l}function k(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return((e=>{const n=e instanceof Element?"element":"id";return b.find((t=>t[n]===e))??null})(e)??new A(e)).pending}const E={connect:k,embedGithubProject:function(e,n,t){const r=j(e),s=document.createElement("iframe");return s.src=x(`/github/${n}`,t),g(r,s,t),k(s)},embedProject:function(e,n,t){const r=j(e),s=function(e,n){const t=_(e);return t.action=x("/run",n),t.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${t.outerHTML}\n  <script>document.getElementById('${t.id}').submit();<\/script>\n</body>\n</html>`}(n,t),o=document.createElement("iframe");return g(r,o,t),o.contentDocument?.write(s),k(o)},embedProjectId:function(e,n,t){const r=j(e),s=document.createElement("iframe");return s.src=x(`/edit/${n}`,t),g(r,s,t),k(s)},openGithubProject:function(e,n){const t=h(`/github/${e}`,n),r=v(n);window.open(t,r)},openProject:function(e,n){!function(e,n){const t=_(e);t.action=h("/run",n),t.target=v(n),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}(e,n)},openProjectId:function(e,n){const t=h(`/edit/${e}`,n),r=v(n);window.open(t,r)}}},33467:(e,n,t)=>{t.d(n,{b:()=>u,A:()=>m});var r=t(94539),s=t(19410),o=t(70851),i=t(41525);const a={AnchorButton:"AnchorButton_X7SC",AnchorHeader:"AnchorHeader_kjZv",NoButtonBorder:"NoButtonBorder_Hb7W",ApiTableText:"ApiTableText_hDT2"};var c=t(65723);function l(e){let{children:n,id:t}=e;return(0,c.jsx)(r.A,{children:()=>(0,c.jsx)("div",{className:"api-table container ml-0 mb-8",id:t,children:(0,c.jsx)("div",{className:"bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]",children:n})})})}function d(e){let{children:n,name:t,type:r,singleFramework:o}=e;const{framework:a}=(0,s.u)();let l=t;return"vue"!==a&&"angular"!==a&&"html"!==a||(l=t.split("").map(((e,n)=>e.toUpperCase()===e?`${0!==n?"-":""}${e.toLowerCase()}`:e)).join("")),(0,c.jsxs)("div",{className:"flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor",children:[(0,c.jsxs)("div",{className:"flex items-center font-bold",children:[l,(0,c.jsx)("a",{href:`#${r??"property"}-${t}`,className:"hash-link","aria-label":`Direct link to ${t}`,title:`Direct link to ${t}`})]}),(0,c.jsxs)("div",{className:"flex items-center ml-auto gap-2",children:[n,o?"":(0,c.jsx)(i.A,{})]})]})}function p(e){let{children:n,name:t}=e;return(0,c.jsxs)("div",{className:(0,o.A)(a.ApiTableText,"api-row"),children:[(0,c.jsx)("div",{className:"px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]",children:t}),(0,c.jsx)("div",{className:"w-auto p-4",children:n})]})}l.PropertyHeader=d,l.EventHeader=function(e){let{children:n,name:t}=e;const{framework:r}=(0,s.u)();let o=t;return"react"===r&&(o=`on${t.charAt(0).toUpperCase()}${t.slice(1)}`),(0,c.jsx)(d,{name:o,type:"event",children:n})},l.SlotHeader=function(e){let{children:n,name:t}=e;return(0,c.jsx)(d,{name:t,type:"slot",children:n})},l.Text=p,l.Code=function(e){let{children:n,name:t}=e;return(0,c.jsx)(p,{name:t,children:(0,c.jsx)("code",{className:"p-1",children:n})})};const m=l;function u(e){let{children:n,right:t,anchorName:r,anchorLabel:s,noBottomBorder:i,onClick:l,className:d,leftClassName:p,rightClassName:m}=e;return(0,c.jsxs)("div",{className:(0,o.A)(a.AnchorHeader,{[a.NoButtonBorder]:i},d),children:[(0,c.jsx)("div",{className:(0,o.A)("flex items-center font-bold w-full",p),children:(0,c.jsxs)("button",{onClick:l,className:(0,o.A)("all-unset",a.AnchorButton),tabIndex:0,children:[n,(0,c.jsx)("a",{href:`#${r}`,className:"hash-link","aria-label":s,title:s})]})}),(0,c.jsx)("div",{className:(0,o.A)("flex items-center ml-auto gap-2",m),children:t})]})}},10540:(e,n,t)=>{t.d(n,{A:()=>R});var r=t(66046),s=t(95130),o=t(89272),i=t(64409),a=t(70851),c=t(22155),l=t(91382),d=t(99043);const p={CodePreview:"CodePreview_qXsk",sourceFileName:"sourceFileName_EMBm",toolbar:"toolbar_rOKU",code:"code_RYOk"};var m=t(65723);function u(e){const{selectedFramework:n}=e,[t,r]=(0,c.useState)(""),[o,a]=(0,c.useState)((()=>()=>(0,m.jsx)(i.A,{children:"Test"}))),u=(0,c.useRef)(null);return(0,c.useEffect)((()=>{if(e.files?.[n]){const t=Object.keys(e.files[n])[0];r(t),a((()=>e.source[n][t]))}}),[n]),(0,c.useEffect)((()=>{e.onShowSource(o)}),[o]),(0,m.jsx)("div",{className:p.CodePreview,children:e.source?.[n]&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d.A,{ref:u,className:p.sourceFileButton,children:[(0,m.jsx)("span",{className:p.sourceFileName,children:t}),c.createElement("ix-icon",{name:s.mvO,size:"16"})]}),u.current&&(0,m.jsx)(l.$9,{trigger:u.current,children:Object.keys(e.source[n]).map((s=>(0,m.jsx)(l.iz,{checked:t===s,onClick:()=>{r(s),a((()=>e.source[n][s]))},children:s},s)))})]})})}var h=t(41525),x=t(79737);async function f(e,n){void 0===n&&(n=!0);const t=await fetch(e);if(!t.ok)throw`Error fetching code from ${e}`;const r=await t.text();if(!r||r?.includes('<div id="__docusaurus"></div>')||r?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return n?r.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim():r}var g=t(36132);function j(e,n,t,r){!function(e,n){const t=e["package.json"];e["package.json"]=t.replace(/\"<VERSION>\"/g,`"${n}"`)}(n,r),g.A.openProject({title:`iX ${(0,x.x)(e)} Example`,template:"node",description:`iX ${e} playground`,files:n},{openFile:t})}async function v(e,n,t,r){const s=await async function(e,n,t){const r=await async function(e){const n={},t=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async t=>{const r=await f(`${e}code-runtime/vue/${t}`);n[t]=r}));await Promise.all(t);const r=await f(`${e}/vue/global.css`);return n["src/styles/global.css"]=r,n}(e),s={...r};Object.keys(n).forEach((e=>{s[`src/${e.replace("./","")}`]=n[e]}));const o=`import ${(0,x.x)(t)} from './${t}.vue';`;return s["src/App.vue"]=s["src/App.vue"].replace("import Example from './Example.vue';",o),s["src/App.vue"]=s["src/App.vue"].replace("<Example />",`<${(0,x.x)(t)} />`),s}(e,n,t);j("vue",s,`${t}.vue`,r)}async function w(e,n,t,r){const s=await async function(e,n,t){const r=await async function(e){const n={},t=["src/main.js","package.json","vite.config.ts"].map((async t=>{const r=await f(`${e}code-runtime/html/${t}`);n[t]=r}));await Promise.all(t),n["src/init.js"]=n["src/main.js"],delete n["src/main.js"];const r=await f(`${e}/html/global.css`);return n["src/styles/global.css"]=r,n}(e),s={...r},o=n[`${t}.html`];return s["src/index.html"]=o,Object.keys(n).forEach((e=>{s[`src/${e.replace("./","")}`]=n[e]})),delete s[`src/${t}.html`],s}(e,n,t);j("html",s,"src/index.html",r)}async function y(e,n,t,r){const s=await async function(e,n,t){const r=await async function(e){const n={},t=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async t=>{const r=await f(`${e}code-runtime/angular/${t}`);n[t]=r}));await Promise.all(t);const r=await f(`${e}/angular/global.css`);return n["src/styles.css"]=r,n}(e),s={...r};Object.keys(n).forEach((e=>{s[`src/${e.replace("./","")}`]=n[e]}));const o=function(e,n){const t=/@Component\(/;return Object.keys(e).filter((r=>r.endsWith(".ts")&&r!==`${n}.ts`&&t.test(e[r]))).map((e=>e.replace(".ts","")))}(n,t),i=o.map((e=>`import ${(0,x.x)(e)} from './../${e}';`)).join("\n");s["src/app/app.module.ts"]=s["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${(0,x.x)(t)} from './../${t}';`,i].join("\n"));const a=o.map((e=>(0,x.x)(e))).join(", ");return s["src/app/app.module.ts"]=s["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${(0,x.x)(t)}, ${a}],`),s}(e,n,t);j("angular",s,`src/${t}.ts`,r)}async function b(e,n,t,r){const s=await async function(e,n,t){const r=await async function(e){const n={},t=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async t=>{const r=await f(`${e}code-runtime/react/${t}`);n[t]=r}));await Promise.all(t);const r=await f(`${e}/react/global.css`);return n["src/styles/global.css"]=r,n}(e),s={...r};Object.keys(n).forEach((e=>{s[`src/${e.replace("./","")}`]=n[e]}));const o=`import ${(0,x.x)(t)} from './${t}';`;return s["src/App.tsx"]=s["src/App.tsx"].replace("import Example from './Example';",o),s["src/App.tsx"]=s["src/App.tsx"].replace("<Example />",`<${(0,x.x)(t)} />`),s}(e,n,t);j("react",s,`src/${t}.tsx`,r)}var A=t(94539);function _(e){const n=(0,r.Ay)("/demo/v2/");return(0,m.jsx)(A.A,{children:()=>(0,m.jsxs)(d.A,{onClick:()=>{!async function(e){let{baseUrl:n,name:t,framework:r,sourcePath:s,version:o}=e;const i=o||"latest",a={};await Promise.all(Object.keys(s).map((async e=>{a[e]=await f(`${n}/${s[e]}`)}))),"react"===r?b(n,a,t,i):"angular"===r?y(n,a,t,i):"html"===r?w(n,a,t,i):"vue"===r&&v(n,a,t,i)}({baseUrl:n,framework:e.framework,name:e.mount,sourcePath:e.files,version:"latest"})},children:[c.createElement("ix-icon",{name:s.Ymj,size:"16"}),(0,m.jsx)("span",{className:"ButtonText",children:"Open Stackblitz"})]})})}const k={pill:"pill_UrZt",pill__active:"pill__active_n11m"};function E(e){let{children:n,active:t,onClick:r}=e;return(0,m.jsx)("button",{onClick:r,className:(0,a.A)("all-unset",k.pill,{[k.pill__active]:t}),children:n})}var S=t(21340),$=t(68285);const N={playground:"playground_GmEd",openExternal:"openExternal_DsHn",toolbar:"toolbar_EsJG",preview:"preview_jEFK",code:"code_wC2A",toolbar__actions:"toolbar__actions_bull",spacer:"spacer_C_ki",iframe:"iframe_SPmo",toolbar__right:"toolbar__right_sFNj"};var C=t(3699);const T=e=>{let{children:n}=e;const{theme:t,variant:r}=(0,c.useContext)(C.J),s=(0,c.useRef)(null);return(0,c.useEffect)((()=>{const e=s.current;e&&("brand"===t?(e.classList.remove("color-table-classic-dark"),e.classList.remove("color-table-classic-light"),e.setAttribute("data-ix-theme","brand"),e.setAttribute("data-ix-variant",r)):(e.removeAttribute("data-ix-theme"),e.removeAttribute("data-ix-variant"),e.className=`color-table-${t}-${r}`))}),[t,r]),(0,m.jsx)("div",{ref:s,children:n})};function P(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("a",{href:e.openExternalUrl,target:"_blank",className:(0,a.A)("flex gap-1 text-[var(--theme-color-soft-text)] flex-nowrap text-nowrap pr-2",N.openExternal),children:[c.createElement("ix-icon",{name:s.B7e,size:"16"}),(0,m.jsx)("span",{className:"ButtonText",children:"Full preview"})]}),(0,m.jsx)(S.Ay,{onThemeChange:e.onChangeTheme}),(0,m.jsx)($.A,{})]})}function F(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"DesktopOnly",children:(0,m.jsx)(_,{framework:e.framework,files:e.files,mount:e.mount})}),!e.hideFrameworkSelection&&(0,m.jsx)(h.A,{onFrameworkChange:e.onFrameworkChange})]})}function I(e){const n=(0,S.wM)(),{playgroundThemeVariant:t}=(0,o.z)(),[s,l]=(0,c.useState)("dark"===t),[d,p]=(0,c.useState)(!e.noPreview),[h,x]=(0,c.useState)(n),f=(0,r.Ay)(`/demo/v2/preview/html/preview-examples/${e.name}.html?no-margin=true&theme=theme-${h}-${s?"dark":"light"}`),[g,j]=(0,c.useState)(e.onlyFramework??"angular"),[v,w]=(0,c.useState)((()=>()=>(0,m.jsx)(i.A,{children:"Nothing to see here \ud83e\udd78"})));return(0,c.useEffect)((()=>{l("dark"===t)}),[t]),(0,m.jsxs)("div",{className:N.playground,children:[(0,m.jsxs)("div",{className:N.toolbar,children:[!e.noPreview&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(E,{onClick:()=>p(!0),active:d,children:"Preview"}),(0,m.jsx)(E,{onClick:()=>p(!1),active:!d,children:"Code"}),(0,m.jsx)("div",{className:N.spacer})]}),(0,m.jsxs)("div",{className:N.toolbar__right,children:[!d&&(0,m.jsx)(u,{selectedFramework:g,name:e.name,files:e.files,source:e.source,onShowSource:e=>{w((()=>e))}}),(0,m.jsx)("div",{className:N.toolbar__actions,children:d?(0,m.jsx)(P,{openExternalUrl:f,onChangeTheme:x}):(0,m.jsx)(F,{mount:e.name,hideFrameworkSelection:!!e.onlyFramework,onFrameworkChange:j,framework:g,files:e.files[g]})})]})]}),(0,m.jsx)("div",{className:(0,a.A)(N.preview,{[N.code]:d}),style:{"--preview-height":e.height},children:d?(0,m.jsx)("iframe",{title:`Preview for ${e.name}`,src:f,className:N.iframe}):(0,m.jsx)(v,{})})]})}function R(e){return(0,m.jsx)(A.A,{children:()=>(0,m.jsx)(T,{children:(0,m.jsx)(I,{...e})})})}},99043:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(22155);const s="Button_k5HP",o="ButtonText_kD4P";var i=t(70851),a=t(65723);const c=(0,r.forwardRef)(((e,n)=>{let{children:t,onClick:r,className:c}=e;return(0,a.jsx)("button",{className:(0,i.A)("all-unset",s,c),onClick:r,ref:n,children:(0,a.jsx)("div",{className:(0,i.A)(o,"ButtonText"),children:t})})}))},41525:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(94539),s=t(95130),o=t(91382),i=t(19410),a=t(22155),c=t(99043),l=t(65723);function d(e){return(0,l.jsx)(r.A,{children:()=>(0,l.jsx)(p,{...e})})}function p(e){const{framework:n,setFramework:t}=(0,i.u)(),[r,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{e.onFrameworkChange&&e.onFrameworkChange(n)}),[n]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.A,{ref:d,className:"dropdown-button",children:[a.createElement("ix-icon",{name:s.NCo,size:"16"}),(0,l.jsx)("span",{className:"ButtonText",children:(0,i.F)(n)}),a.createElement("ix-icon",{name:s.mvO,size:"16"})]}),r&&(0,l.jsxs)(o.$9,{trigger:r,children:[(0,l.jsx)(o.iz,{onClick:()=>t("angular"),children:"Angular"}),(0,l.jsx)(o.iz,{onClick:()=>t("react"),children:"React"}),(0,l.jsx)(o.iz,{onClick:()=>t("vue"),children:"Vue"}),(0,l.jsx)(o.iz,{onClick:()=>t("html"),children:"HTML"})]})]})}},64235:(e,n,t)=>{t.d(n,{k$:()=>a,PI:()=>p,df:()=>i});const r={Tag:"Tag_JPbC",Since:"Since_Ybno",FormReady:"FormReady_rKLF",Deprecated:"Deprecated_M0Gf",Redirect:"Redirect_eyq7",Link:"Link_YkBF"};var s=t(65723);function o(e){let{children:n}=e;return(0,s.jsx)("div",{className:r.Tag,children:n})}function i(e){let{message:n}=e;return(0,s.jsx)(o,{children:(0,s.jsxs)("div",{className:r.Since,children:["Since ",n]})})}function a(e){let{message:n}=e;return(0,s.jsx)(o,{children:(0,s.jsxs)("div",{className:r.Deprecated,children:["Deprecated ",n]})})}var c=t(22155),l=t(95130),d=t(70851);function p(e){let{link:n,children:t}=e;return(0,s.jsx)(o,{children:(0,s.jsxs)("div",{className:(0,d.A)(r.Redirect),children:[c.createElement("ix-icon",{name:l.B7e,color:"color-primary",size:"16"}),(0,s.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:r.Link,children:t})]})})}},21340:(e,n,t)=>{t.d(n,{Ay:()=>g,wM:()=>x});var r=t(94539),s=t(54213),o=t(95130),i=t(91382),a=t(89272),c=t(22155),l=t(99043);const d="DropdownItem_L91h";var p=t(65723);const m="brand",u="classic";function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}function x(){return(0,s.A)().siteConfig.customFields.withBrandTheme?m:u}function f(e){const{playgroundTheme:n,setPlaygroundTheme:t}=(0,a.A)(),r=(0,s.A)(),[x]=(0,c.useState)((()=>{const e=[u];return r.siteConfig.customFields.withBrandTheme&&e.push(m),e})),[f,g]=(0,c.useState)(null),j=h(n);return(0,c.useEffect)((()=>{e.onThemeChange?.(n)}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.A,{ref:g,className:"dropdown-button",children:[c.createElement("ix-icon",{name:o.LEH,size:"16"}),(0,p.jsx)("span",{className:"ButtonText",children:j}),c.createElement("ix-icon",{name:o.mvO,size:"16"})]}),f&&(0,p.jsx)(i.$9,{trigger:f,children:x.map((e=>(0,p.jsx)(i.iz,{onClick:()=>t(e),className:d,checked:n===e,children:h(e)},e)))})]})}const g=e=>(0,p.jsx)(r.A,{children:()=>(0,p.jsx)(f,{...e})})},68285:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(95130),s=t(22155),o=t(99043),i=t(89272),a=t(94539),c=t(65723);function l(){const{playgroundThemeVariant:e,setPlaygroundThemeVariant:n}=(0,i.z)();return(0,c.jsxs)(o.A,{onClick:()=>{n("light"===e?"dark":"light")},children:[s.createElement("ix-icon",{name:"light"===e?r.q35:r.fDS,size:"16"}),(0,c.jsx)("span",{className:"ButtonText",children:"light"===e?"Light":"Dark"})]})}const d=()=>(0,c.jsx)(a.A,{children:()=>(0,c.jsx)(l,{})})},19410:(e,n,t)=>{t.d(n,{F:()=>s,u:()=>o});var r=t(22155);const s=e=>{switch(e){case"angular":return"Angular";case"react":return"React";case"vue":return"Vue";case"html":return"HTML"}},o=()=>{const[e,n]=function(e,n){const[t,s]=(0,r.useState)((()=>{try{const t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(t){return console.error(t),n}}));return(0,r.useEffect)((()=>{const n=n=>{if(n.key===e){const e=n.newValue?JSON.parse(n.newValue):void 0;s(e)}};return window.addEventListener("storage",n),()=>{window.removeEventListener("storage",n)}}),[e]),[t,n=>{try{const r=n instanceof Function?n(t):n;s(r),window.localStorage.setItem(e,JSON.stringify(r)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(r)}))}catch(r){console.error(r)}},!!window.localStorage.getItem(e)]}("docusaurus.code.framework","angular");return{framework:e,setFramework:n}}},89272:(e,n,t)=>{t.d(n,{A:()=>o,z:()=>i});var r=t(22155),s=t(3699);const o=()=>{const e=(0,r.useContext)(s.J);return{playgroundTheme:e.theme,setPlaygroundTheme:n=>e.onThemeChange?.(n)}},i=()=>{const e=(0,r.useContext)(s.J);return{playgroundThemeVariant:e.variant,setPlaygroundThemeVariant:n=>e.onVariantChange?.(n)}}},79737:(e,n,t)=>{function r(e){const n=e.split("-").map(((e,n)=>0===n?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return n.charAt(0).toUpperCase()+n.slice(1)}function s(e,n){if(void 0===n&&(n=!1),!e)return e;return e[0].toUpperCase()+(n?e.slice(1):e.slice(1).toLowerCase())}t.d(n,{Z:()=>s,x:()=>r})}}]);