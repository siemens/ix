"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50865],{50865:(t,e,n)=>{n.r(e),n.d(e,{ix_input_group:()=>o});var i=n(8823),s=n(84351);const o=class{constructor(t){(0,i.r)(this,t),this.inputPaddingLeft=0,this.inputPaddingRight=0}get inputElement(){return this.hostElement.querySelector("input")}componentWillLoad(){var t;const{valid:e}=this.inputElement.validity;this.inputElement.addEventListener("valid",(()=>{this.onValidInput()})),this.inputElement.addEventListener("invalid",(()=>{this.onInvalidInput()})),this.inputElement.addEventListener("input",(()=>{this.startSlotChanged()})),null===(t=this.inputElement.form)||void 0===t||t.addEventListener("submit",(()=>{this.startSlotChanged()})),e?this.onValidInput():this.onInvalidInput()}componentDidRender(){this.prepareInputElement()}onValidInput(){this.startSlotChanged()}onInvalidInput(){this.startSlotChanged()}prepareInputElement(){this.inputElement?(this.inputElement.style.width="100%",0!==this.inputPaddingRight?this.inputElement.style.paddingRight=this.inputPaddingRight+"px":this.inputElement.style.paddingRight="none",0!==this.inputPaddingLeft?this.inputElement.style.paddingLeft=this.inputPaddingLeft+"px":this.inputElement.style.paddingLeft="none"):console.warn('You used the ix-input-group without an input tag, e.g. <input class="form-control" />')}startSlotChanged(){var t,e;const n=this.hostElement.shadowRoot.querySelector('slot[name="input-start"]'),i=this.getChildrenWidth(n);0!==i&&(this.inputPaddingLeft=15+i),this.inputElement&&(!(null===(t=this.inputElement.form)||void 0===t?void 0:t.classList.contains("was-validated"))&&!1!==(null===(e=this.inputElement.form)||void 0===e?void 0:e.noValidate)||this.inputElement.validity.valid||(this.inputElement.style.backgroundPositionX=`${this.inputPaddingLeft}px`,this.inputPaddingLeft+=32))}endSlotChanged(){const t=this.hostElement.shadowRoot.querySelector('slot[name="input-end"]');this.inputPaddingRight=15+this.getChildrenWidth(t)}getChildrenWidth(t){if(!t)return 0;const e=(0,s.g)(t);if(0===e.length)return 0;let n=0;return e.forEach((t=>{n+=t.getBoundingClientRect().width})),n}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"group group-start"},(0,i.h)("slot",{name:"input-start",onSlotchange:()=>this.startSlotChanged()})),(0,i.h)("slot",null),(0,i.h)("div",{class:"group group-end"},(0,i.h)("slot",{name:"input-end",onSlotchange:()=>this.endSlotChanged()})))}get hostElement(){return(0,i.g)(this)}};o.style=":host{position:relative;display:flex;width:100%;flex-wrap:wrap;align-items:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .group{display:flex;position:absolute;align-items:center;height:100%}:host .group-start{left:0px;height:2rem;margin-left:0.375rem;color:var(--theme-color-soft-text)}:host .group-end{right:0px;height:2rem;margin-right:0.375rem;color:var(--theme-color-soft-text)}:host ::slotted(*){display:flex}"},84351:(t,e,n)=>{function i(t){return t.assignedElements({flatten:!0})}function s(t){return!!t&&0!==t.assignedElements({flatten:!0}).length}n.d(e,{g:()=>i,h:()=>s})}}]);