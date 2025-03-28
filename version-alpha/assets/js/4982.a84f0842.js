"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4982],{33915:(e,c,o)=>{o.d(c,{a:()=>r,b:()=>t,g:()=>h});const r=e=>e?"true":"false",h=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let c;try{c=new URL(e)}catch(o){return!1}return"http:"===c.protocol||"https:"===c.protocol})(e))return"Unknown";if((c=e)&&"string"==typeof c&&c.startsWith("data:image/svg+xml"))return"Unknown";var c;const o=e.replace("-filled","").split("-").map((e=>{const c=e.trim(),o=c.replace(/\d+/g,"");return 0===o.length?c:o})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===o.length?"Unknown":o},t=function(e,c){void 0===c&&(c=[]);const o={};return d.forEach((r=>{var h;if(e.hasAttribute(r)){null===e.getAttribute(r)||c.includes(r)||(o[r]=null!==(h=e.getAttribute(r))&&void 0!==h?h:"",e.removeAttribute(r))}})),o},d=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},82601:(e,c,o)=>{o.r(c),o.d(c,{ix_checkbox:()=>a});var r=o(52069),h=o(95367),t=o(99085),d=o(33915);var n=function(e,c,o,r){var h,t=arguments.length,d=t<3?c:null===r?r=Object.getOwnPropertyDescriptor(c,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,c,o,r);else for(var n=e.length-1;n>=0;n--)(h=e[n])&&(d=(t<3?h(d):t>3?h(c,o,d):h(c,o))||d);return t>3&&d&&Object.defineProperty(c,o,d),d};const a=class{constructor(e){(0,r.r)(this,e),this.checkedChange=(0,r.c)(this,"checkedChange",7),this.valueChange=(0,r.c)(this,"valueChange",7),e.$hostElement$["s-ei"]?this.formInternals=e.$hostElement$["s-ei"]:(this.formInternals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.formInternals),this.value="on",this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.required=!1,this.inputRef=(0,t.m)((e=>{e.checked=this.checked}))}setCheckedState(e){this.checked=e,this.checkedChange.emit(this.checked)}onCheckedChange(){this.updateFormInternalValue()}onValueChange(){this.valueChange.emit(this.value)}componentWillLoad(){this.updateFormInternalValue()}updateFormInternalValue(){var e;this.checked?this.formInternals.setFormValue(null!==(e=this.value)&&void 0!==e?e:"on"):this.formInternals.setFormValue(null)}hasValidValue(){return Promise.resolve(this.checked)}getAssociatedFormElement(){return Promise.resolve(this.formInternals.form)}updateClassMappings(){}renderCheckmark(){return(0,r.h)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},this.indeterminate&&(0,r.h)(r.F,null,(0,r.h)("rect",{width:"18",height:"18",fill:"transparent"}),(0,r.h)("rect",{x:"3",y:"8",width:"12",height:"2",fill:"var(--ix-checkbox-check-color)"})),this.checked&&(0,r.h)("path",{d:"M3.65625 8.15625L8.4375 12.9375L14.625 3.9375",stroke:"var(--ix-checkbox-check-color)","stroke-width":"2"}))}render(){return(0,r.h)(r.H,{key:"d089bc3c663788b708f2ceb7fd1bbb21706a1534","aria-checked":(0,d.a)(this.checked),"aria-disabled":(0,d.a)(this.disabled),role:"checkbox",class:{disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate}},(0,r.h)("label",{key:"c80b9d8f724f6b76bfaffb2f5a1a182bb8753e53"},(0,r.h)("input",{key:"ab21dcea80e6823ae3029ba769853be39cab7bf4","aria-checked":(0,d.a)(this.checked),disabled:this.disabled,checked:this.checked,ref:this.inputRef,type:"checkbox",onChange:()=>this.setCheckedState(!this.checked)}),(0,r.h)("button",{key:"100dc970576623fc11099abfefc9a51479c9ea14",disabled:this.disabled,class:{checked:this.checked},onClick:()=>this.setCheckedState(!this.checked)},this.renderCheckmark()),(0,r.h)("ix-typography",{key:"0852bd38494e0d39fc8d37d8e1f5b8469fe8b811",format:"label",textColor:this.disabled?"weak":"std"},this.label,(0,r.h)("slot",{key:"9ec03a9c86d0ec8e1306320963fc690640a55723"}))))}static get formAssociated(){return!0}get hostElement(){return(0,r.g)(this)}static get watchers(){return{checked:["onCheckedChange"],value:["onValueChange"]}}};n([(0,h.H)()],a.prototype,"updateClassMappings",null),a.style=":host{--ix-checkbox-check-color:var(--theme-color-primary--contrast);display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:1.125rem;min-width:1.125rem;max-width:1.125rem;height:1.125rem;min-height:1.125rem;max-height:1.125rem;margin-right:0.5rem}:host button:disabled{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host button:focus-visible{outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:var(--theme-checkbox--focus--outline-offset)}:host input[type=checkbox]{display:none}:host label{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;height:100%}:host ix-typography{margin-top:0.125rem}:host button{background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.checked) button,:host(.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.checked:hover) button,:host(.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.checked:active) button,:host(.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.checked.disabled) button,:host(.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-info) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--info\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--info--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--info--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--info\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--info--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--info--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--info\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--info--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--info--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--info\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--info--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--info--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--info\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--info--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--info--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--info\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--info--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--info--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-info:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-info:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-info.checked) button,:host(.ix-info.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-info.checked:hover) button,:host(.ix-info.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-info.checked:active) button,:host(.ix-info.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-info.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) button,:host(.ix-info.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-warning) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--warning\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--warning--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--warning--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--warning\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--warning--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--warning--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--warning\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--warning--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--warning--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--warning\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--warning--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--warning--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--warning\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--warning--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--warning--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--warning\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--warning--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--warning--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-warning:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-warning:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-warning.checked) button,:host(.ix-warning.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-warning.checked:hover) button,:host(.ix-warning.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-warning.checked:active) button,:host(.ix-warning.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-warning.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) button,:host(.ix-warning.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid--required) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--invalid\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--invalid--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--invalid--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--invalid\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--invalid--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--invalid--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--invalid\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--invalid--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--invalid--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--invalid\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--invalid--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--invalid--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--invalid\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--invalid--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--invalid--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--invalid\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--invalid--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--invalid--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid--required:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid--required:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid--required.checked) button,:host(.ix-invalid--required.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid--required.checked:hover) button,:host(.ix-invalid--required.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) button,:host(.ix-invalid--required.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid--required.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) button,:host(.ix-invalid--required.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.ix-invalid) button{--theme-checkbox-unchecked--background:var(\n    --theme-checkbox-unchecked--background--invalid\n  );--theme-checkbox-unchecked--background--hover:var(\n    --theme-checkbox-unchecked--background--invalid--hover\n  );--theme-checkbox-unchecked--background--active:var(\n    --theme-checkbox-unchecked--background--invalid--active\n  );--theme-checkbox-unchecked--border-color:var(\n    --theme-checkbox-unchecked--border-color--invalid\n  );--theme-checkbox-unchecked--border-color--hover:var(\n    --theme-checkbox-unchecked--border-color--invalid--hover\n  );--theme-checkbox-unchecked--border-color--active:var(\n    --theme-checkbox-unchecked--border-color--invalid--active\n  );--theme-checkbox-checked--background:var(\n    --theme-checkbox-checked--background--invalid\n  );--theme-checkbox-checked--background--hover:var(\n    --theme-checkbox-checked--background--invalid--hover\n  );--theme-checkbox-checked--background--active:var(\n    --theme-checkbox-checked--background--invalid--active\n  );--theme-checkbox-checked--border-color:var(\n    --theme-checkbox-checked--border-color--invalid\n  );--theme-checkbox-checked--border-color--hover:var(\n    --theme-checkbox-checked--border-color--invalid--hover\n  );--theme-checkbox-checked--border-color--active:var(\n    --theme-checkbox-checked--border-color--invalid--active\n  );--theme-checkbox-mixed--background:var(\n    --theme-checkbox-mixed--background--invalid\n  );--theme-checkbox-mixed--background--hover:var(\n    --theme-checkbox-mixed--background--invalid--hover\n  );--theme-checkbox-mixed--background--active:var(\n    --theme-checkbox-mixed--background--invalid--active\n  );--theme-checkbox-mixed--border-color:var(\n    --theme-checkbox-mixed--border-color--invalid\n  );--theme-checkbox-mixed--border-color--hover:var(\n    --theme-checkbox-mixed--border-color--invalid--hover\n  );--theme-checkbox-mixed--border-color--active:var(\n    --theme-checkbox-mixed--border-color--invalid--active\n  );background-color:var(--theme-checkbox-unchecked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color)}:host(.ix-invalid:hover) button{background-color:var(--theme-checkbox-unchecked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--hover)}:host(.ix-invalid:active) button{background-color:var(--theme-checkbox-unchecked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--active)}:host(.ix-invalid.checked) button,:host(.ix-invalid.indeterminate) button{background-color:var(--theme-checkbox-checked--background);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color)}:host(.ix-invalid.checked:hover) button,:host(.ix-invalid.indeterminate:hover) button{background-color:var(--theme-checkbox-checked--background--hover);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--hover)}:host(.ix-invalid.checked:active) button,:host(.ix-invalid.indeterminate:active) button{background-color:var(--theme-checkbox-checked--background--active);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--active)}:host(.ix-invalid.disabled) button{background-color:var(--theme-checkbox-unchecked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) button,:host(.ix-invalid.indeterminate.disabled) button{background-color:var(--theme-checkbox-checked--background--disabled);border:var(--theme-checkbox--border-thickness) solid var(--theme-checkbox-checked--border-color--disabled)}:host(.disabled){pointer-events:none}:host(.disabled) button,:host(.disabled) label,:host(.disabled) input{pointer-events:none}"},99085:(e,c,o)=>{function r(e){let c,o,r=new Promise((e=>c=e));const h=r=>{void 0!==r&&(o=h.current=r,null==e||e(r),null==c||c(r))};return h.current=o,h.waitForCurrent=async()=>(await r,o),h}o.d(c,{m:()=>r})},95367:(e,c,o)=>{o.d(c,{H:()=>a,a:()=>n,c:()=>t,s:()=>h});var r=o(52069);async function h(e){if(e.getAssociatedFormElement&&"function"==typeof e.getAssociatedFormElement){const c=await e.getAssociatedFormElement();return!!c&&c.noValidate}return!1}function t(e,c,o){const r=new MutationObserver(c);return r.observe(e,{subtree:null==o?void 0:o.includeChildren,childList:null==o?void 0:o.includeChildren,attributes:!0,attributeFilter:["class"]}),{destroy(){r.disconnect()}}}function d(e,c,o){return e.classList.contains(`${c}`)||!!o&&!!e.querySelector(`.${c}`)}function n(e,c){return void 0===c&&(c=!1),{isInvalid:d(e,"ix-invalid",c),isInvalidByRequired:d(e,"ix-invalid--required",c),isValid:d(e,"ix-valid",c),isInfo:d(e,"ix-info",c),isWarning:d(e,"ix-warning",c)}}function a(e){return(c,o)=>{let d,a;const{componentWillLoad:i,disconnectedCallback:b,connectedCallback:k}=c;c.connectedCallback=function(){const e=(0,r.g)(this);return d=async()=>{if(!await h(e)){if(e.hasValidValue&&"function"==typeof e.hasValidValue){const c=await e.hasValidValue(),o=await async function(e){if("function"==typeof e.isTouched)return e.isTouched()}(e);e.required?e.classList.toggle("ix-invalid--required",!c&&o):e.classList.remove("ix-invalid--required")}if(e.getValidityState&&"function"==typeof e.getValidityState){const c=await e.getValidityState();e.classList.toggle("ix-invalid--validity-patternMismatch",c.patternMismatch)}}},e.addEventListener("valueChange",d),e.addEventListener("ixBlur",d),setTimeout(d),null==k?void 0:k.call(this)},c.componentWillLoad=function(){const h=(0,r.g)(this);a=t(h,(()=>{const r=n(h,null==e?void 0:e.includeChildren);c[o].call(this,r)}),e);const d=n(h,null==e?void 0:e.includeChildren);return c[o].call(this,d),null==i?void 0:i.call(this)},c.disconnectedCallback=function(){const e=(0,r.g)(this);return e&&a&&(a.destroy(),a=null),e&&d&&(e.removeEventListener("valueChange",d),e.removeEventListener("ixBlur",d),d=null),null==b?void 0:b.call(this)}}}}}]);