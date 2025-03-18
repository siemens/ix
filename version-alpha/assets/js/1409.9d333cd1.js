"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1409],{6471:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>o,g:()=>i});const a=e=>e?"true":"false",i=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let t;try{t=new URL(e)}catch(r){return!1}return"http:"===t.protocol||"https:"===t.protocol})(e))return"Unknown";if((t=e)&&"string"==typeof t&&t.startsWith("data:image/svg+xml"))return"Unknown";var t;const r=e.replace("-filled","").split("-").map((e=>{const t=e.trim(),r=t.replace(/\d+/g,"");return 0===r.length?t:r})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===r.length?"Unknown":r},o=function(e,t){void 0===t&&(t=[]);const r={};return n.forEach((a=>{var i;if(e.hasAttribute(a)){null===e.getAttribute(a)||t.includes(a)||(r[a]=null!==(i=e.getAttribute(a))&&void 0!==i?i:"",e.removeAttribute(a))}})),r},n=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},91409:(e,t,r)=>{r.r(t),r.d(t,{ix_slider:()=>c});var a=r(71273),i=r(6471),o=r(14350),n=r(97761);var s=function(e,t,r,a){var i,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n};function l(e,t,r){return t<e?e:t>r?r:t}const c=class{constructor(e){(0,a.r)(this,e),this.valueChange=(0,a.c)(this,"valueChange",7),this.step=1,this.min=0,this.max=100,this.value=0,this.trace=!1,this.traceReference=0,this.disabled=!1,this.rangeInput=0,this.rangeMin=0,this.rangeMax=100,this.rangeTraceReference=0,this.showTooltip=!1,this.thumbRef=(0,n.m)(),this.tooltipRef=(0,n.m)()}get tooltip(){return this.tooltipRef.current}get pseudoThumb(){return this.thumbRef.current}get slider(){var e;return null===(e=this.hostElement.shadowRoot)||void 0===e?void 0:e.getElementById("slider")}onShowTooltipChange(){var e,t;this.showTooltip?null===(e=this.tooltip)||void 0===e||e.showTooltip(this.pseudoThumb):null===(t=this.tooltip)||void 0===t||t.hideTooltip()}componentWillLoad(){this.a11yAttributes=(0,i.b)(this.hostElement,["role","aria-valuemin","aria-valuemax","aria-valuenow"]),this.updateRangeVariables()}updateRangeVariables(){this.rangeInput=l(this.min,this.value,this.max),this.rangeTraceReference=l(this.min,this.traceReference,this.max),this.rangeMin=Math.min(this.min,this.max),this.rangeMax=Math.max(this.min,this.max)}onInput(e){e.stopPropagation();const t=parseFloat(this.slider.value);if(!isNaN(t)){const e=this.rangeInput;this.rangeInput=t;const{defaultPrevented:r}=this.emitInputEvent();r&&(this.rangeInput=e,this.slider.value=e.toString())}}emitInputEvent(){return this.valueChange.emit(this.rangeInput)}isMarkerActive(e){const t=Math.min(this.traceReference,this.rangeInput),r=Math.max(this.traceReference,this.rangeInput);return e>=t&&e<=r}onPointerUp(){this.showTooltip=!1}render(){const e=this.rangeMax-this.rangeMin;let t=(this.rangeTraceReference-this.rangeMin)/e,r=(this.rangeInput-this.rangeMin)/e;let i=t,o=r;return r-t<=0&&(i=r,o=t),(0,a.h)(a.H,{key:"568077c2ec218ec59fcc8c5b71ee995f67b81c50",class:{disabled:this.disabled,error:!!this.error},onPointerDown:()=>setTimeout((()=>this.showTooltip=!0))},(0,a.h)("div",{key:"5d90d4707432d082c643226572ba0df57fb31ecb",class:"slider"},(0,a.h)("div",{key:"6fa7862803ce7f774e33088866ffede29ec30ef8",class:"track"},(0,a.h)("div",{key:"c24021f42964edbb0fcba1b722ef1ad8bb1bfcfb",ref:this.thumbRef,class:"thumb",style:{left:`calc(${r} * 100% - 8px)`}}),(0,a.h)("div",{key:"610aaa115ad035cd656dfc92140c5b9219146396",class:"ticks"},this.marker?this.marker.map((t=>{if(t>this.max||t<this.min)return;let r=(t-this.rangeMin)/e;return(0,a.h)("div",{class:{tick:!0,"tick-active":this.isMarkerActive(t)&&this.trace},style:{"--tick-value":`${r}`}})})):null)),(0,a.h)("input",Object.assign({key:"6bccbc2d6f5fcea8b5d0e4f99a2e3839d01d5013",id:"slider",type:"range",list:this.marker?"markers":void 0,step:this.step,min:this.min,max:this.max,value:this.rangeInput,tabindex:this.disabled?-1:0,onInput:e=>this.onInput(e),style:{"--value":`${r}`,"--trace-reference":`${t}`,"--trace-start":`${i}`,"--trace-end":`${o}`},class:{trace:this.trace&&t!==r,"hide-trace-reference":this.trace&&(this.traceReference<=this.min||this.traceReference>=this.max)},onFocus:()=>{this.showTooltip=!0},onBlur:()=>{this.showTooltip=!1},role:"slider","aria-valuenow":this.rangeInput,"aria-valuemin":this.min,"aria-valuemax":this.max},this.a11yAttributes)),(0,a.h)("ix-tooltip",{key:"b948f1c61df20d1b091b8cd398cf3d6abff256d9",ref:this.tooltipRef,class:{"hide-tooltip":!this.showTooltip},animationFrame:!0,for:this.thumbRef.waitForCurrent()},this.rangeInput)),(0,a.h)("div",{key:"491a6efb7dbdc1c6df81571f45d1a3b6ec8e43ce",class:"label"},(0,a.h)("div",{key:"eceecfa340c3d7b1a7bf586935355ba21af71beb",class:"label-start"},(0,a.h)("slot",{key:"f29a5cccc390e0d16e125bf81e01ba0b9df93849",name:"label-start"})),(0,a.h)("div",{key:"7998cbb60c5a97ba20f23353bf34a661a8ff8198",class:"label-end"},(0,a.h)("slot",{key:"70e919a1b865884929945807fd3b36155e6da8b4",name:"label-end"}))),this.error?(0,a.h)("ix-typography",{class:"label-error",textColor:"alarm"},this.error):null)}get hostElement(){return(0,a.g)(this)}static get watchers(){return{showTooltip:["onShowTooltipChange"],value:["updateRangeVariables"],max:["updateRangeVariables"],min:["updateRangeVariables"],traceReference:["updateRangeVariables"]}}};s([(0,o.O)("pointerup",(e=>e.showTooltip))],c.prototype,"onPointerUp",null),c.style=':host{display:flex;flex-direction:column;min-height:2rem;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-color-8);--trace-color:var(--theme-color-dynamic);--tick-color:var(--theme-color-8);--tick-color--active:var(--theme-color-dynamic);--track-color:var(--theme-color-component-4);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc(7px + 100% * var(--trace-end) - 16px * var(--trace-end) - (7px + 100% * var(--trace-start) - 16px * var(--trace-start)));left:calc(7px + 100% * var(--trace-start) - 16px * var(--trace-start));height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%)}:host input[type=range].trace:not(.hide-trace-reference)::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(7px + 100% * var(--trace-reference) - 16px * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:hover::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host .ticks{display:flex;position:relative;top:50%;transform:translateY(-50%)}:host .ticks .tick{display:block;position:absolute;width:8px;height:8px;background-color:var(--tick-color);border-radius:100px;top:50%;transform:translateY(-50%);left:calc(var(--tick-value) * 100% - 4px)}:host .ticks .tick.tick-active{background-color:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:calc(100% - 1rem);margin-left:0.5rem;top:50%;transform:translateY(-50%);left:0px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;left:0px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host .label-start{margin-left:0.5rem}:host .label-end{margin-right:0.5rem}:host .label-error{margin-left:0.5rem}:host(.error){--trace-color:var(--theme-color-alarm-40);--tick-color--active:var(--theme-color-alarm)}:host(.error) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-alarm)}:host(.error) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-alarm)}:host(.disabled){pointer-events:none;--track-color:var(--theme-color-component-3);--trace-color:var(--theme-color-3);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-7)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-7)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-7)}'},14350:(e,t,r)=>{r.d(t,{O:()=>o});var a=r(71273);const i={target:"window",defaultEnabled:!0};function o(e,t){return(r,o)=>{const{componentWillLoad:n,componentWillRender:s,disconnectedCallback:l}=r;t&&(r.componentWillRender=function(){var e;return null===(e=(0,a.g)(this)[`__ix__${o}`])||void 0===e||e.enable(t(this)),s&&s.call(this)}),r.componentWillLoad=function(){const t=function(e,t){void 0===t&&(t={});const r=Object.assign(Object.assign({},i),t);let a;const o=e=>{a(e)},n={on:e=>{a=e},isEnabled:r.defaultEnabled,enable:t=>{n.isEnabled=t,t?addEventListener(e,o):removeEventListener(e,o)},destroy:()=>{n.enable(!1)}};return n.enable(!!r.defaultEnabled),n}(e),r=(0,a.g)(this),s=this[o];return r[`__ix__${o}`]=t,t.on(s.bind(this)),n&&n.call(this)},r.disconnectedCallback=function(){var e;const t=(0,a.g)(this);return t&&t[`__ix__${o}`]&&(null===(e=t[`__ix__${o}`])||void 0===e||e.destroy(),t[`__ix__${o}`]=null),l&&l.call(this)}}}},97761:(e,t,r)=>{function a(e){let t,r,a=new Promise((e=>t=e));const i=a=>{void 0!==a&&(r=i.current=a,null==e||e(a),null==t||t(a))};return i.current=r,i.waitForCurrent=async()=>(await a,r),i}r.d(t,{m:()=>a})}}]);