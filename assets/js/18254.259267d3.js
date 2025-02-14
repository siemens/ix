"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18254],{18509:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>h,g:()=>i});const o=e=>e?"true":"false",i=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let t;try{t=new URL(e)}catch(r){return!1}return"http:"===t.protocol||"https:"===t.protocol})(e))return"Unknown";if((t=e)&&"string"==typeof t&&t.startsWith("data:image/svg+xml"))return"Unknown";var t;const r=e.replace("-filled","").split("-").map((e=>{const t=e.trim(),r=t.replace(/\d+/g,"");return 0===r.length?t:r})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===r.length?"Unknown":r},h=function(e,t){void 0===t&&(t=[]);const r={};return n.forEach((o=>{var i;if(e.hasAttribute(o)){null===e.getAttribute(o)||t.includes(o)||(r[o]=null!==(i=e.getAttribute(o))&&void 0!==i?i:"",e.removeAttribute(o))}})),r},n=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},18254:(e,t,r)=>{r.r(t),r.d(t,{ix_toggle:()=>h});var o=r(39567),i=r(18509);const h=class{constructor(e){(0,o.r)(this,e),this.checkedChange=(0,o.c)(this,"checkedChange",7),this.valueChange=(0,o.c)(this,"valueChange",7),e.$hostElement$["s-ei"]?this.formInternals=e.$hostElement$["s-ei"]:(this.formInternals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.formInternals),this.name=void 0,this.value="on",this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.textOn="On",this.textOff="Off",this.textIndeterminate="Mixed",this.hideText=!1,this.required=!1}onCheckedChange(e){this.disabled||(this.indeterminate&&(this.indeterminate=!1),this.checked=e,this.checkedChange.emit(this.checked))}componentWillLoad(){this.updateFormInternalValue()}updateFormInternalValue(){this.checked?this.formInternals.setFormValue(this.value):this.formInternals.setFormValue(null)}watchCheckedChange(){this.updateFormInternalValue()}hasValidValue(){return Promise.resolve(this.checked)}getAssociatedFormElement(){return Promise.resolve(this.formInternals.form)}render(){let e=this.textOff;return this.checked&&(e=this.textOn),this.indeterminate&&(e=this.textIndeterminate),(0,o.h)(o.H,{key:"508fa5cd92f3b3707823b13175a6e243def7d61f",class:{disabled:this.disabled}},(0,o.h)("label",{key:"b01e8a3e4fb781dc979ebf915aa71055a688d0da",class:"wrapper"},(0,o.h)("button",{key:"22301abf1c108d18d8c73d5288f9b6cceb6f4992",role:"switch","aria-checked":(0,i.a)(this.checked),class:{switch:!0,checked:this.checked,indeterminate:this.indeterminate},onClick:()=>this.onCheckedChange(!this.checked)},(0,o.h)("div",{key:"2f0a33aa378f39f77f7905028884b93b530e9c5e",class:"slider"})),(0,o.h)("input",{key:"f5bb8b2a44d5881f769d2306b5eeadac9481dc46",type:"checkbox",disabled:this.disabled,indeterminate:this.indeterminate,checked:this.checked,tabindex:0,"aria-hidden":(0,i.a)(!0),"aria-checked":(0,i.a)(this.checked),onChange:e=>this.onCheckedChange(e.target.checked)}),!this.hideText&&(0,o.h)("ix-typography",{key:"d631ef3c16f5df85c752534b4f1c798f520678d3",class:"label"},e)))}static get formAssociated(){return!0}get hostElement(){return(0,o.g)(this)}static get watchers(){return{checked:["watchCheckedChange"]}}};h.style=':host{display:inline-flex;flex-direction:row;position:relative;height:1.5rem;margin-block-start:0.25rem;margin-block-end:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=checkbox]{display:none}:host .wrapper{display:flex;align-items:flex-start;width:100%;height:100%}:host .label{display:inline-block;white-space:normal;overflow:hidden;text-overflow:ellipsis;margin-block-start:0.125rem;margin-inline-start:0.5625rem}:host .switch{all:unset;position:relative;display:inline-block;width:3rem;min-width:3rem;max-width:3rem;height:1.5rem}:host .slider{position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--theme-switch-off--background);transition:var(--theme-default-time);border-radius:1.5rem;border:0.0625rem solid transparent}:host .slider:before{position:absolute;content:"";height:1.125rem;width:1.125rem;left:0.125rem;bottom:0.125rem;background-color:var(--theme-switch-thumb-off--background);transition:var(--theme-default-time);border-radius:50%}:host .switch.checked>.slider::before{background-color:var(--theme-switch-thumb-on--background);transform:translateX(1.5rem)}:host .switch>.slider{border-color:var(--theme-switch-off--border-color)}:host .switch:hover>.slider{background-color:var(--theme-switch-off--background--hover);border-color:var(--theme-switch-off--border-color--hover)}:host .switch:hover>.slider:before{background-color:var(--theme-switch-thumb-off--background--hover)}:host .switch:active>.slider{background-color:var(--theme-switch-off--background--active);border-color:var(--theme-switch-off--border-color--active)}:host .switch:active>.slider:before{background-color:var(--theme-switch-thumb-off--background--active)}:host .switch.checked>.slider{background-color:var(--theme-switch-on--background);border-color:var(--theme-switch-on--border-color)}:host .switch.checked:hover>.slider{background-color:var(--theme-switch-on--background--hover);border-color:var(--theme-switch-on--border-color--hover)}:host .switch.checked:hover>.slider:before{background-color:var(--theme-switch-thumb-on--background--hover)}:host .switch.checked:active>.slider{background-color:var(--theme-switch-on--background--active);border-color:var(--theme-switch-on--border-color--active)}:host .switch.checked:active>.slider:before{background-color:var(--theme-switch-thumb-on--background--active)}:host .switch.indeterminate>.slider::before{transform:translateX(0.75rem)}:host(:not(.disabled)) .wrapper{cursor:pointer}:host(:not(.disabled)) .switch:focus-visible>.slider{outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:0.0625rem}:host(.disabled){pointer-events:none}:host(.disabled) .switch{opacity:0.5}:host(.disabled) .switch>.slider{background-color:var(--theme-switch-off--background--disabled)}:host(.disabled) .switch>.slider:before{background-color:var(--theme-switch-thumb-off--background--disabled)}:host(.disabled) .switch.checked>.slider{background-color:var(--theme-switch-on--background--disabled)}:host(.disabled) .switch.checked>.slider:before{background-color:var(--theme-switch-thumb-on--background--disabled)}:host(.disabled) .label{color:var(--theme-color-weak-text)}:host(.ix-info:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--info\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--info--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--info--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--info\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--info--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--info--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--info\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--info--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--info--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--info\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--info--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--info--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--info\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--info--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--info--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--info\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--info--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--info--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--info\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--info--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--info--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--info\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--info--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--info--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--info\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--info--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--info--active\n  )}:host(.ix-warning:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--warning\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--warning--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--warning--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--warning\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--warning--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--warning--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--warning\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--warning--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--warning--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--warning\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--warning--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--warning--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--warning\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--warning--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--warning--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--warning\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--warning--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--warning--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--warning\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--warning--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--warning--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--warning\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--warning--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--warning--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--warning\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--warning--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--warning--active\n  )}:host(.ix-invalid--required:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--invalid\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--invalid--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--invalid--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--invalid\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--invalid--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--invalid--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--invalid\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--invalid--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--invalid--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--invalid\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--invalid--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--invalid--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--invalid\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--invalid--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--invalid--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--invalid\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--invalid--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--invalid--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--invalid\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--invalid--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--invalid--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--invalid\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--invalid--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--invalid--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--invalid\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--invalid--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--invalid--active\n  )}:host(.ix-invalid:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--invalid\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--invalid--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--invalid--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--invalid\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--invalid--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--invalid--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--invalid\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--invalid--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--invalid--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--invalid\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--invalid--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--invalid--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--invalid\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--invalid--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--invalid--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--invalid\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--invalid--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--invalid--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--invalid\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--invalid--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--invalid--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--invalid\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--invalid--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--invalid--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--invalid\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--invalid--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--invalid--active\n  )}'}}]);