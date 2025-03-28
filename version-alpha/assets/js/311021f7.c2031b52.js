"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9238],{12943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>S,default:()=>F,frontMatter:()=>N,metadata:()=>r,toc:()=>T});const r=JSON.parse('{"id":"components/kpi/code","title":"KPI - Code","description":"Basic","source":"@site/docs/components/kpi/code.mdx","sourceDirName":"components/kpi","slug":"/components/kpi/code","permalink":"/version-alpha/docs/components/kpi/code","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/kpi/code.mdx","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"KPI","permalink":"/version-alpha/docs/components/kpi/"},"next":{"title":"Overview","permalink":"/version-alpha/docs/components/charts-overview/"}}');var i=t(65723),o=t(65598),s=(t(61339),t(43304),t(26457));function a(e){const n={h2:"h2",h3:"h3",...(0,o.R)(),...e.components};return s.A||l("ApiTable",!1),s.A.Code||l("ApiTable.Code",!0),s.A.PropertyHeader||l("ApiTable.PropertyHeader",!0),s.A.Text||l("ApiTable.Text",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"api-for-ix-kpi",children:"API for ix-kpi"}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(s.A,{id:"property-label",children:[(0,i.jsx)(s.A.PropertyHeader,{name:"label",singleFramework:""}),(0,i.jsx)(s.A.Text,{name:"Description",children:""}),(0,i.jsx)(s.A.Code,{name:"Attribute",children:"label"}),(0,i.jsx)(s.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(s.A,{id:"property-orientation",children:[(0,i.jsx)(s.A.PropertyHeader,{name:"orientation",singleFramework:""}),(0,i.jsx)(s.A.Text,{name:"Description",children:""}),(0,i.jsx)(s.A.Code,{name:"Attribute",children:"orientation"}),(0,i.jsx)(s.A.Code,{name:"Type",children:'"horizontal" | "vertical"'}),(0,i.jsx)(s.A.Code,{name:"Default",children:"'horizontal'"})]}),"\n",(0,i.jsxs)(s.A,{id:"property-state",children:[(0,i.jsx)(s.A.PropertyHeader,{name:"state",singleFramework:""}),(0,i.jsx)(s.A.Text,{name:"Description",children:""}),(0,i.jsx)(s.A.Code,{name:"Attribute",children:"state"}),(0,i.jsx)(s.A.Code,{name:"Type",children:'"alarm" | "neutral" | "warning"'}),(0,i.jsx)(s.A.Code,{name:"Default",children:"'neutral'"})]}),"\n",(0,i.jsxs)(s.A,{id:"property-unit",children:[(0,i.jsx)(s.A.PropertyHeader,{name:"unit",singleFramework:""}),(0,i.jsx)(s.A.Text,{name:"Description",children:""}),(0,i.jsx)(s.A.Code,{name:"Attribute",children:"unit"}),(0,i.jsx)(s.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsxs)(s.A,{id:"property-value",children:[(0,i.jsx)(s.A.PropertyHeader,{name:"value",singleFramework:""}),(0,i.jsx)(s.A.Text,{name:"Description",children:""}),(0,i.jsx)(s.A.Code,{name:"Attribute",children:"value"}),(0,i.jsx)(s.A.Code,{name:"Type",children:"number | string"})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var p=t(37746);function d(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import \'./kpi.scoped.css\';\n\nimport { IxKpi } from \'@siemens/ix-react\';\n\nexport default () => {\n  return (\n    <div className="kpi">\n      <IxKpi label="Motor speed" value="Nominal"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" unit="rpm"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" state="alarm"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" state="warning"></IxKpi>\n\n      <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>\n      <IxKpi\n        label="Motor speed"\n        value="{122.6}"\n        unit="rpm"\n        state="alarm"\n        orientation="vertical"\n      ></IxKpi>\n    </div>\n  );\n};\n'})})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".kpi {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  max-width: 20rem;\n}\n\n.kpi > ix-kpi {\n  margin: 0.5rem;\n}\n"})})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function x(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <div class="kpi">\n      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>\n      <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>\n      <ix-kpi label="Motor speed" value="{122.6}" state="alarm"></ix-kpi>\n      <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>\n\n      <ix-kpi\n        label="Motor speed"\n        value="Nominal"\n        orientation="vertical"\n      ></ix-kpi>\n      <ix-kpi\n        label="Motor speed"\n        value="{122.6}"\n        unit="rpm"\n        state="alarm"\n        orientation="vertical"\n      ></ix-kpi>\n    </div>\n  `,\n  styleUrls: [\'./kpi.css\'],\n})\nexport default class Kpi {}\n'})})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}function g(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".kpi {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  max-width: 20rem;\n}\n\n.kpi > ix-kpi {\n  margin: 0.5rem;\n}\n"})})}function j(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}function v(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:'<script setup lang="ts">\nimport { IxKpi } from \'@siemens/ix-vue\';\n<\/script>\n\n<style scoped src="./kpi.css"></style>\n\n<template>\n  <div class="kpi">\n    <IxKpi label="Motor speed" value="Nominal"></IxKpi>\n    <IxKpi label="Motor speed" value="122.6" unit="rpm"></IxKpi>\n    <IxKpi label="Motor speed" value="122.6" state="alarm"></IxKpi>\n    <IxKpi label="Motor speed" value="122.6" state="warning"></IxKpi>\n\n    <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>\n    <IxKpi\n      label="Motor speed"\n      value="122.6"\n      unit="rpm"\n      state="alarm"\n      orientation="vertical"\n    ></IxKpi>\n  </div>\n</template>\n'})})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}function k(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".kpi {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  max-width: 20rem;\n}\n\n.kpi > ix-kpi {\n  margin: 0.5rem;\n}\n"})})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}function y(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Kpi example</title>\n    <link rel="stylesheet" href="./kpi.css" />\n  </head>\n  <body>\n    <div class="example">\n      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>\n      <ix-kpi label="Motor speed" value="122.6" unit="rpm"></ix-kpi>\n      <ix-kpi label="Motor speed" value="122.6" state="alarm"></ix-kpi>\n      <ix-kpi label="Motor speed" value="122.6" state="warning"></ix-kpi>\n\n      <ix-kpi\n        label="Motor speed"\n        value="Nominal"\n        orientation="vertical"\n      ></ix-kpi>\n      <ix-kpi\n        label="Motor speed"\n        value="122.6"\n        unit="rpm"\n        state="alarm"\n        orientation="vertical"\n      ></ix-kpi>\n    </div>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n'})})}function A(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}function _(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".kpi {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  max-width: 20rem;\n}\n\n.kpi > ix-kpi {\n  margin: 0.5rem;\n}\n"})})}function $(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}function C(e){return(0,i.jsx)(p.A,{name:"kpi",source:{react:{"kpi.tsx":m,"kpi.scoped.css":h},angular:{"kpi.ts":f,"kpi.css":j},vue:{"kpi.vue":w,"kpi.css":b},html:{"kpi.html":A,"kpi.css":$}},files:{react:{"kpi.tsx":"react/kpi.tsx","kpi.scoped.css":"react/kpi.scoped.css"},angular:{"kpi.ts":"angular/kpi.ts","kpi.css":"angular/kpi.css"},vue:{"kpi.vue":"vue/kpi.vue","kpi.css":"vue/kpi.css"},html:{"kpi.html":"html/kpi.html","kpi.css":"html/kpi.css"}},height:e.height,onlyFramework:e.onlyFramework})}function E(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}const N={"doc-type":"tab-item"},S="KPI - Code",I={},T=[{value:"Basic",id:"basic",level:2},{value:"API for ix-kpi",id:"api-for-ix-kpi",level:2},{value:"Properties",id:"properties",level:3}];function P(e){const n={h1:"h1",h2:"h2",header:"header",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"kpi---code",children:"KPI - Code"})}),"\n",(0,i.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,i.jsx)(E,{height:"28rem"}),"\n",(0,i.jsx)(c,{})]})}function F(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(P,{...e})}):P(e)}},36132:(e,n,t)=>{t.d(n,{A:()=>$});const r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],i=["project","search","ports","settings"],o=["light","dark"],s=["editor","preview"],a={clickToLoad:e=>l("ctl",e),devToolsHeight:e=>p("devtoolsheight",e),forceEmbedLayout:e=>l("embed",e),hideDevTools:e=>l("hidedevtools",e),hideExplorer:e=>l("hideExplorer",e),hideNavigation:e=>l("hideNavigation",e),openFile:e=>m("file",e),showSidebar:e=>function(e,n){if("boolean"==typeof n)return`${e}=${n?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>d("sidebarView",e,i),startScript:e=>m("startScript",e),terminalHeight:e=>p("terminalHeight",e),theme:e=>d("theme",e,o),view:e=>d("view",e,s),zenMode:e=>l("zenMode",e),organization:e=>`${m("orgName",e?.name)}&${m("orgProvider",e?.provider)}`,crossOriginIsolated:e=>l("corp",e)};function c(e={}){const n=Object.entries(e).map((([e,n])=>null!=n&&a.hasOwnProperty(e)?a[e](n):"")).filter(Boolean);return n.length?`?${n.join("&")}`:""}function l(e,n){return!0===n?`${e}=1`:""}function p(e,n){if("number"==typeof n&&!Number.isNaN(n)){const t=Math.min(100,Math.max(0,n));return`${e}=${encodeURIComponent(Math.round(t))}`}return""}function d(e,n="",t=[]){return t.includes(n)?`${e}=${encodeURIComponent(n)}`:""}function m(e,n){return(Array.isArray(n)?n:[n]).filter((e=>"string"==typeof e&&""!==e.trim())).map((n=>`${e}=${encodeURIComponent(n)}`)).join("&")}function u(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function h(e,n){return`${f(n)}${e}${c(n)}`}function x(e,n){const t={forceEmbedLayout:!0};return n&&"object"==typeof n&&Object.assign(t,n),`${f(t)}${e}${c(t)}`}function f(e={}){return("string"==typeof e.origin?e.origin:"https://stackblitz.com").replace(/\/$/,"")}function g(e,n,t){if(!n||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(n.id=e.id),e.className&&(n.className=e.className),function(e,n={}){const t=Object.hasOwnProperty.call(n,"height")?`${n.height}`:"300",r=Object.hasOwnProperty.call(n,"width")?`${n.width}`:void 0;e.setAttribute("height",t),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}(n,t),function(e,n,t={}){const r=e.allow?.split(";")?.map((e=>e.trim()))??[];t.crossOriginIsolated&&!r.includes("cross-origin-isolated")&&r.push("cross-origin-isolated");r.length>0&&(n.allow=r.join("; "))}(e,n,t),e.replaceWith(n)}function j(e){if("string"==typeof e){const n=document.getElementById(e);if(!n)throw new Error(`Could not find element with id '${e}'`);return n}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function v(e){return e&&!1===e.newWindow?"_self":"_blank"}class w{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:n}){return new Promise(((t,r)=>{const i=u();this.pending[i]={resolve:t,reject:r},this.port.postMessage({type:e,payload:{...n,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:n,payload:t}=e.data,{__reqid:r,__success:i,__error:o}=t;this.pending[r]&&(i?this.pending[r].resolve(this.cleanResult(t)):this.pending[r].reject(o?`${n}: ${o}`:n),delete this.pending[r])}cleanResult(e){const n={...e};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}}class k{constructor(e,n){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new w(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof n.previewOrigin?n.previewOrigin:null,writable:!1})}applyFsDiff(e){const n=e=>null!==e&&"object"==typeof e;if(!n(e)||!n(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class y{constructor(e){this.id=u(),this.element=e,this.pending=new Promise(((e,n)=>{const t=({data:n,ports:t})=>{"SDK_INIT_SUCCESS"===n?.action&&n.id===this.id&&(this.vm=new k(t[0],n.payload),e(this.vm),i())},r=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(s),window.removeEventListener("message",t)}window.addEventListener("message",t),r();let o=0;const s=window.setInterval((()=>{if(this.vm)i();else{if(o>=20)return i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,n)=>{e.id===this.id&&b.splice(n,1)}));o++,r()}}),500)})),b.push(this)}}function A({template:e,title:n,description:t,dependencies:i,files:o,settings:s}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],c=(e,n,t="")=>{a.push(function(e,n){const t=document.createElement("input");return t.type="hidden",t.name=e,t.value=n,t}(e,"string"==typeof n?n:t))};c("project[title]",n),"string"==typeof t&&t.length>0&&c("project[description]",t),c("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(i))),s&&c("project[settings]",JSON.stringify(s)),Object.entries(o).forEach((([e,n])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,n)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...a),l}function _(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return((e=>{const n=e instanceof Element?"element":"id";return b.find((t=>t[n]===e))??null})(e)??new y(e)).pending}const $={connect:_,embedGithubProject:function(e,n,t){const r=j(e),i=document.createElement("iframe");return i.src=x(`/github/${n}`,t),g(r,i,t),_(i)},embedProject:function(e,n,t){const r=j(e),i=function(e,n){const t=A(e);return t.action=x("/run",n),t.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${t.outerHTML}\n  <script>document.getElementById('${t.id}').submit();<\/script>\n</body>\n</html>`}(n,t),o=document.createElement("iframe");return g(r,o,t),o.contentDocument?.write(i),_(o)},embedProjectId:function(e,n,t){const r=j(e),i=document.createElement("iframe");return i.src=x(`/edit/${n}`,t),g(r,i,t),_(i)},openGithubProject:function(e,n){const t=h(`/github/${e}`,n),r=v(n);window.open(t,r)},openProject:function(e,n){!function(e,n){const t=A(e);t.action=h("/run",n),t.target=v(n),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}(e,n)},openProjectId:function(e,n){const t=h(`/edit/${e}`,n),r=v(n);window.open(t,r)}}},26457:(e,n,t)=>{t.d(n,{b:()=>u,A:()=>m});var r=t(72922),i=t(45291),o=t(51038),s=t(43304);const a={AnchorButton:"AnchorButton_X7SC",AnchorHeader:"AnchorHeader_kjZv",NoButtonBorder:"NoButtonBorder_Hb7W",ApiTableText:"ApiTableText_hDT2"};var c=t(65723);function l(e){let{children:n,id:t}=e;return(0,c.jsx)(r.A,{children:()=>(0,c.jsx)("div",{className:"api-table container ml-0 mb-8",id:t,children:(0,c.jsx)("div",{className:"bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]",children:n})})})}function p(e){let{children:n,name:t,type:r,singleFramework:o}=e;const{framework:a}=(0,i.u)();let l=t;return"vue"!==a&&"angular"!==a&&"html"!==a||(l=t.split("").map(((e,n)=>e.toUpperCase()===e?`${0!==n?"-":""}${e.toLowerCase()}`:e)).join("")),(0,c.jsxs)("div",{className:"flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor",children:[(0,c.jsxs)("div",{className:"flex items-center font-bold",children:[l,(0,c.jsx)("a",{href:`#${r??"property"}-${t}`,className:"hash-link","aria-label":`Direct link to ${t}`,title:`Direct link to ${t}`})]}),(0,c.jsxs)("div",{className:"flex items-center ml-auto gap-2",children:[n,o?"":(0,c.jsx)(s.A,{})]})]})}function d(e){let{children:n,name:t}=e;return(0,c.jsxs)("div",{className:a.ApiTableText,children:[(0,c.jsx)("div",{className:"px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]",children:t}),(0,c.jsx)("div",{className:"w-auto p-4",children:n})]})}l.PropertyHeader=p,l.EventHeader=function(e){let{children:n,name:t}=e;const{framework:r}=(0,i.u)();let o=t;return"react"===r&&(o=`on${t.charAt(0).toUpperCase()}${t.slice(1)}`),(0,c.jsx)(p,{name:o,type:"event",children:n})},l.SlotHeader=function(e){let{children:n,name:t}=e;return(0,c.jsx)(p,{name:t,type:"slot",children:n})},l.Text=d,l.Code=function(e){let{children:n,name:t}=e;return(0,c.jsx)(d,{name:t,children:(0,c.jsx)("code",{className:"p-1",children:n})})};const m=l;function u(e){let{children:n,right:t,anchorName:r,anchorLabel:i,noBottomBorder:s,onClick:l}=e;return(0,c.jsxs)("div",{className:(0,o.A)(a.AnchorHeader,{[a.NoButtonBorder]:s}),children:[(0,c.jsx)("div",{className:"flex items-center font-bold w-full",children:(0,c.jsxs)("button",{onClick:l,className:(0,o.A)("all-unset",a.AnchorButton),tabIndex:0,children:[n,(0,c.jsx)("a",{href:`#${r}`,className:"hash-link","aria-label":i,title:i})]})}),(0,c.jsx)("div",{className:"flex items-center ml-auto gap-2",children:t})]})}},37746:(e,n,t)=>{t.d(n,{A:()=>T});var r=t(20295),i=t(6053),o=t(95130),s=t(50728),a=t(51038),c=t(22155);const l={CodePreview:"CodePreview_qXsk",toolbar:"toolbar_rOKU",code:"code_RYOk"};var p=t(2616),d=t(18463),m=t(65723);function u(e){const{selectedFramework:n}=e,[t,r]=(0,c.useState)(""),[i,a]=(0,c.useState)((()=>()=>(0,m.jsx)(s.A,{children:["Test"]}))),u=(0,c.useRef)(null);return(0,c.useEffect)((()=>{if(e.files&&e.files[n]){const t=Object.keys(e.files[n])[0];r(t),a((()=>e.source[n][t]))}}),[n]),(0,c.useEffect)((()=>{e.onShowSource(i)}),[i]),(0,m.jsx)("div",{className:l.CodePreview,children:e.source&&e.source[n]&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d.A,{ref:u,children:[t,c.createElement("ix-icon",{name:o.mvO})]}),u.current&&(0,m.jsx)(p.$9,{trigger:u.current,children:Object.keys(e.source[n]).map((i=>(0,m.jsx)(p.iz,{checked:t===i,onClick:()=>{r(i),a((()=>e.source[n][i]))},children:i},i)))})]})})}var h=t(43304);function x(e){const n=e.split("-").map(((e,n)=>0===n?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return n.charAt(0).toUpperCase()+n.slice(1)}async function f(e,n){void 0===n&&(n=!0);const t=await fetch(e);if(!t.ok)throw`Error fetching code from ${e}`;const r=await t.text();if(!r||r?.includes('<div id="__docusaurus"></div>')||r?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return n?r.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim():r}var g=t(36132);function j(e,n,t,r){!function(e,n){const t=e["package.json"];e["package.json"]=t.replace(/\"<VERSION>\"/g,`"${n}"`)}(n,r),g.A.openProject({title:`iX ${x(e)} Example`,template:"node",description:`iX ${e} playground`,files:n},{openFile:t})}async function v(e,n,t,r){const i=await async function(e,n,t){const r=await async function(e){const n={},t=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async t=>{const r=await f(`${e}code-runtime/vue/${t}`);n[t]=r}));await Promise.all(t);const r=await f(`${e}/vue/global.css`);return n["src/styles/global.css"]=r,n}(e),i={...r};Object.keys(n).forEach((e=>{i[`src/${e.replace("./","")}`]=n[e]}));const o=`import ${x(t)} from './${t}.vue';`;return i["src/App.vue"]=i["src/App.vue"].replace("import Example from './Example.vue';",o),i["src/App.vue"]=i["src/App.vue"].replace("<Example />",`<${x(t)} />`),i}(e,n,t);j("vue",i,`${t}.vue`,r)}async function w(e,n,t,r){const i=await async function(e,n,t){const r=await async function(e){const n={},t=["src/main.js","package.json","vite.config.ts"].map((async t=>{const r=await f(`${e}code-runtime/html/${t}`);n[t]=r}));await Promise.all(t),n["src/init.js"]=n["src/main.js"],delete n["src/main.js"];const r=await f(`${e}/html/global.css`);return n["src/styles/global.css"]=r,n}(e),i={...r},o=n[`${t}.html`];return i["src/index.html"]=o,Object.keys(n).forEach((e=>{i[`src/${e.replace("./","")}`]=n[e]})),delete i[`src/${t}.html`],i}(e,n,t);j("html",i,"src/index.html",r)}async function k(e,n,t,r){const i=await async function(e,n,t){const r=await async function(e){const n={},t=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async t=>{const r=await f(`${e}code-runtime/angular/${t}`);n[t]=r}));await Promise.all(t);const r=await f(`${e}/angular/global.css`);return n["src/styles.css"]=r,n}(e),i={...r};Object.keys(n).forEach((e=>{i[`src/${e.replace("./","")}`]=n[e]}));const o=function(e,n){const t=/@Component\(/;return Object.keys(e).filter((r=>r.endsWith(".ts")&&r!==`${n}.ts`&&t.test(e[r]))).map((e=>e.replace(".ts","")))}(n,t),s=o.map((e=>`import ${x(e)} from './../${e}';`)).join("\n");i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${x(t)} from './../${t}';`,s].join("\n"));const a=o.map((e=>x(e))).join(", ");return i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${x(t)}, ${a}],`),i}(e,n,t);j("angular",i,`src/${t}.ts`,r)}async function b(e,n,t,r){const i=await async function(e,n,t){const r=await async function(e){const n={},t=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async t=>{const r=await f(`${e}code-runtime/react/${t}`);n[t]=r}));await Promise.all(t);const r=await f(`${e}/react/global.css`);return n["src/styles/global.css"]=r,n}(e),i={...r};Object.keys(n).forEach((e=>{i[`src/${e.replace("./","")}`]=n[e]}));const o=`import ${x(t)} from './${t}';`;return i["src/App.tsx"]=i["src/App.tsx"].replace("import Example from './Example';",o),i["src/App.tsx"]=i["src/App.tsx"].replace("<Example />",`<${x(t)} />`),i}(e,n,t);j("react",i,`src/${t}.tsx`,r)}var y=t(72922);function A(e){const n=(0,i.Ay)("/demo/v2/");return(0,m.jsx)(y.A,{children:()=>(0,m.jsxs)(d.A,{onClick:()=>{!async function(e){let{baseUrl:n,name:t,framework:r,sourcePath:i,version:o}=e;const s=o||"latest",a={};await Promise.all(Object.keys(i).map((async e=>{a[e]=await f(`${n}/${i[e]}`)}))),"react"===r?b(n,a,t,s):"angular"===r?k(n,a,t,s):"html"===r?w(n,a,t,s):"vue"===r&&v(n,a,t,s)}({baseUrl:n,framework:e.framework,name:e.mount,sourcePath:e.files,version:"latest"})},children:[c.createElement("ix-icon",{name:o.Ymj}),"Open Stackblitz"]})})}const _={pill:"pill_UrZt",pill__active:"pill__active_n11m"};function $(e){let{children:n,active:t,onClick:r}=e;return(0,m.jsx)("button",{onClick:r,className:(0,a.A)("all-unset",_.pill,{[_.pill__active]:t}),children:n})}var C=t(78657),E=t(90800);const N={playground:"playground_GmEd",toolbar:"toolbar_EsJG",preview:"preview_jEFK",code:"code_wC2A",toolbar__actions:"toolbar__actions_bull",spacer:"spacer_C_ki",iframe:"iframe_SPmo"};function S(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("a",{href:e.openExternalUrl,target:"_blank",className:"flex gap-1 text-[var(--theme-color-soft-text)]",children:[c.createElement("ix-icon",{name:o.B7e}),"Full preview"]}),(0,m.jsx)(C.Ay,{onThemeChange:e.onChangeTheme}),(0,m.jsx)(E.A,{isLight:e.colorModeLight,onChangeColorMode:e.onChangeColorMode})]})}function I(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(A,{framework:e.framework,files:e.files,mount:e.mount}),!e.hideFrameworkSelection&&(0,m.jsx)(h.A,{onFrameworkChange:e.onFrameworkChange})]})}function T(e){const n=(0,C.wM)(),{colorMode:t}=(0,r.G)(),[o,l]=(0,c.useState)("dark"===t),[p,d]=(0,c.useState)(!e.noPreview),[h,x]=(0,c.useState)(n),f=(0,i.Ay)(`/demo/v2/preview/html/preview-examples/${e.name}.html?no-margin=true&theme=theme-${h}-${o?"dark":"light"}`),[g,j]=(0,c.useState)(e.onlyFramework??"angular"),[v,w]=(0,c.useState)((()=>()=>(0,m.jsx)(s.A,{children:["Nothing to see here \ud83e\udd78"]})));return(0,c.useEffect)((()=>{l("dark"===t)}),[t]),(0,m.jsxs)("div",{className:N.playground,children:[(0,m.jsxs)("div",{className:N.toolbar,children:[!e.noPreview&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)($,{onClick:()=>d(!0),active:p,children:"Preview"}),(0,m.jsx)($,{onClick:()=>d(!1),active:!p,children:"Code"}),(0,m.jsx)("div",{className:N.spacer})]}),!p&&(0,m.jsx)(u,{selectedFramework:g,name:e.name,files:e.files,source:e.source,onShowSource:e=>{w((()=>e))}}),(0,m.jsx)("div",{className:N.toolbar__actions,children:p?(0,m.jsx)(S,{colorModeLight:!o,openExternalUrl:f,onChangeColorMode:()=>l(!o),onChangeTheme:x}):(0,m.jsx)(I,{mount:e.name,hideFrameworkSelection:!!e.onlyFramework,onFrameworkChange:j,framework:g,files:e.files[g]})})]}),(0,m.jsx)("div",{className:(0,a.A)(N.preview,{[N.code]:p}),style:{"--preview-height":e.height},children:p?(0,m.jsx)("iframe",{src:f,className:N.iframe}):(0,m.jsx)(v,{})})]})}},18463:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(22155);const i="Button_k5HP";var o=t(51038),s=t(65723);const a=(0,r.forwardRef)(((e,n)=>{let{children:t,onClick:r}=e;return(0,s.jsx)("button",{className:(0,o.A)("all-unset",i),onClick:r,ref:n,children:t})}))},43304:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(95130),i=t(2616),o=t(45291),s=t(22155),a=t(18463),c=t(72922),l=t(65723);function p(e){return(0,l.jsx)(c.A,{children:()=>(0,l.jsx)(d,{...e})})}function d(e){const{framework:n,setFramework:t}=(0,o.u)(),c=(0,s.useRef)(null);return(0,s.useEffect)((()=>{e.onFrameworkChange&&e.onFrameworkChange(n)}),[n]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.A,{ref:c,children:[s.createElement("ix-icon",{name:r.NCo}),(0,o.F)(n)," ",s.createElement("ix-icon",{name:r.mvO})]}),c.current&&(0,l.jsxs)(i.$9,{trigger:c.current,children:[(0,l.jsx)(i.iz,{onClick:()=>t("angular"),children:"Angular"}),(0,l.jsx)(i.iz,{onClick:()=>t("react"),children:"React"}),(0,l.jsx)(i.iz,{onClick:()=>t("vue"),children:"Vue"}),(0,l.jsx)(i.iz,{onClick:()=>t("html"),children:"HTML"})]})]})}},61339:(e,n,t)=>{t.d(n,{k$:()=>a,PI:()=>d,df:()=>s});const r={Tag:"Tag_JPbC",Since:"Since_Ybno",FormReady:"FormReady_rKLF",Deprecated:"Deprecated_M0Gf",Redirect:"Redirect_eyq7",Link:"Link_YkBF"};var i=t(65723);function o(e){let{children:n}=e;return(0,i.jsx)("div",{className:r.Tag,children:n})}function s(e){let{message:n}=e;return(0,i.jsx)(o,{children:(0,i.jsxs)("div",{className:r.Since,children:["Since ",n]})})}function a(e){let{message:n}=e;return(0,i.jsx)(o,{children:(0,i.jsxs)("div",{className:r.Deprecated,children:["Deprecated ",n]})})}var c=t(22155),l=t(95130),p=t(51038);function d(e){let{link:n,children:t}=e;return(0,i.jsx)(o,{children:(0,i.jsxs)("div",{className:(0,p.A)(r.Redirect),children:[c.createElement("ix-icon",{name:l.B7e,color:"color-primary",size:"16"}),(0,i.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:r.Link,children:t})]})})}},78657:(e,n,t)=>{t.d(n,{Ay:()=>x,wM:()=>u});var r=t(22155),i=t(2616),o=t(18463),s=t(95130),a=t(26558),c=t(72922),l=t(65723);const p="brand",d="classic";function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(){return(0,a.A)().siteConfig.customFields.withBrandTheme?p:d}function h(e){const n=(0,a.A)(),[t]=(0,r.useState)((()=>{const e=[d];return n.siteConfig.customFields.withBrandTheme&&e.push(p),e})),[c,u]=(0,r.useState)((()=>n.siteConfig.customFields.withBrandTheme?p:d)),[h,x]=(0,r.useState)(null),f=m(c);return(0,r.useEffect)((()=>{e.onThemeChange?.(c)}),[c]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.A,{ref:x,children:[r.createElement("ix-icon",{name:s.z4G}),f,r.createElement("ix-icon",{name:s.mvO})]}),h&&(0,l.jsx)(i.$9,{trigger:h,children:t.map((e=>(0,l.jsx)(i.iz,{onClick:()=>u(e),children:m(e)},e)))})]})}const x=e=>(0,l.jsx)(c.A,{children:()=>(0,l.jsx)(h,{...e})})},90800:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(95130),i=t(22155),o=t(18463),s=t(65723);function a(e){let{isLight:n,onChangeColorMode:t}=e;return(0,s.jsxs)(o.A,{onClick:t,children:[i.createElement("ix-icon",{name:n?r.q35:r.fDS}),n?"Light":"Dark"]})}},45291:(e,n,t)=>{t.d(n,{F:()=>i,u:()=>o});var r=t(22155);const i=e=>{switch(e){case"angular":return"Angular";case"react":return"React";case"vue":return"Vue";case"html":return"HTML"}},o=()=>{const[e,n]=function(e,n){const[t,i]=(0,r.useState)((()=>{try{const t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(t){return console.error(t),n}}));return(0,r.useEffect)((()=>{const n=n=>{if(n.key===e){const e=n.newValue?JSON.parse(n.newValue):void 0;i(e)}};return window.addEventListener("storage",n),()=>{window.removeEventListener("storage",n)}}),[e]),[t,n=>{try{const r=n instanceof Function?n(t):n;i(r),window.localStorage.setItem(e,JSON.stringify(r)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(r)}))}catch(r){console.error(r)}}]}("docusaurus.code.framework","angular");return{framework:e,setFramework:n}}}}]);