"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4120],{84118:(e,o,t)=>{t.d(o,{B:()=>l,g:()=>a});var r=t(71273);const n=e=>e.toUpperCase()==="Danger".toUpperCase(),i=e=>e.toUpperCase()==="Primary".toUpperCase(),d=e=>e.toUpperCase()==="Secondary".toUpperCase(),a=function(e,o,t,r,a,s,l){return void 0===r&&(r=!1),void 0===a&&(a=!1),{btn:!0,"btn-danger":n(e)&&!o&&!t,"btn-outline-danger":n(e)&&o&&!t,"btn-invisible-danger":n(e)&&!o&&t,"btn-primary":i(e)&&!o&&!t,"btn-outline-primary":i(e)&&o&&!t,"btn-invisible-primary":i(e)&&!o&&t,"btn-secondary":d(e)&&!o&&!t,"btn-outline-secondary":d(e)&&o&&!t,"btn-invisible-secondary":d(e)&&!o&&t,"btn-icon":r,"btn-oval":a,selected:s,disabled:l}},s=e=>{if(!e.icon)return"small";switch(e.iconSize){case"12":return"xx-small";case"16":return"x-small";default:return"small"}},l=(e,o)=>{var t,n,i;const d=null!==(t=e.extraClasses)&&void 0!==t?t:{},l=null!==(n=e.ariaAttributes)&&void 0!==n?n:{};return!l["aria-disabled"]&&e.disabled&&(l["aria-disabled"]="true"),(0,r.h)("button",Object.assign({},l,{onClick:o=>e.onClick?e.onClick(o):void 0,tabindex:e.disabled?-1:null!==(i=e.tabIndex)&&void 0!==i?i:0,type:e.type,class:Object.assign(Object.assign({},a(e.variant,e.outline,e.ghost,e.iconOnly,e.iconOval,e.selected,e.disabled||e.loading)),d)}),e.loading?(0,r.h)("ix-spinner",{size:s(e),hideTrack:!0}):null,e.icon&&!e.loading?(0,r.h)("ix-icon",{class:"icon",name:e.icon,size:e.iconSize,color:e.iconColor}):null,(0,r.h)("div",{class:{content:!0,[`content-${e.alignment}`]:!!e.alignment}},o),e.afterContent?e.afterContent:null)}},74120:(e,o,t)=>{t.r(o),t.d(o,{ix_button:()=>i});var r=t(71273),n=t(84118);const i=class{constructor(e){(0,r.r)(this,e),this.variant="primary",this.outline=!1,this.ghost=!1,this.disabled=!1,this.type="button",this.loading=!1,this.alignment="center",this.iconSize="24"}handleClick(e){(this.disabled||this.loading)&&(e.stopPropagation(),e.preventDefault())}componentDidLoad(){if("submit"===this.type){const e=document.createElement("button");e.style.display="none",e.type="submit",e.tabIndex=-1,this.hostElement.appendChild(e),this.submitButtonElement=e}}componentDidRender(){this.submitButtonElement&&!this.hostElement.contains(this.submitButtonElement)&&this.hostElement.appendChild(this.submitButtonElement)}dispatchFormEvents(){"submit"!==this.type||!this.submitButtonElement||this.disabled||this.loading||this.submitButtonElement.click()}setFocus(){var e;null===(e=this.hostElement.shadowRoot.querySelector("button"))||void 0===e||e.focus()}render(){const e={variant:this.variant,outline:this.outline,ghost:this.ghost,iconOnly:!1,iconOval:!1,selected:!1,disabled:this.disabled||this.loading,icon:this.icon,iconSize:this.iconSize,loading:this.loading,onClick:()=>this.dispatchFormEvents(),type:this.type,alignment:this.alignment,tabIndex:this.hostElement.tabIndex};return(0,r.h)(r.H,{key:"0d7e9fe309d1c2fd320f19cafa0e15bcefafe346",tabindex:this.disabled?-1:0,class:{disabled:this.disabled||this.loading},onFocus:()=>this.setFocus()},(0,r.h)(n.B,Object.assign({key:"36c8821e58f2c9beee5d68b842636e629d728687"},e),(0,r.h)("slot",{key:"e7ef0928f22720a705f3223fc2495bd90de5767c"})))}get hostElement(){return(0,r.g)(this)}};i.style=":host{display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host ix-icon{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none}:host(.disabled){cursor:default}:host .btn-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-danger,:host .btn-danger.focus,:host .btn-danger:focus-visible{background-color:var(--theme-btn-danger--background);color:var(--theme-btn-danger--color);--ix-button-color:var(--theme-btn-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger--border-color);border-style:solid}:host .btn-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):active,:host .btn-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-danger--border-color--hover);background-color:var(--theme-btn-danger--background--hover);color:var(--theme-btn-danger--color--hover)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):active,:host .btn-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger--border-color--active);background-color:var(--theme-btn-danger--background--active);color:var(--theme-btn-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger.disabled,:host(.disabled) .btn-danger:disabled{pointer-events:none;border-color:var(--theme-btn-danger--border-color--disabled);background-color:var(--theme-btn-danger--background--disabled);color:var(--theme-btn-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger--color--disabled)}:host .btn-outline-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-danger,:host .btn-outline-danger.focus,:host .btn-outline-danger:focus-visible{background-color:var(--theme-btn-outline-danger--background);color:var(--theme-btn-outline-danger--color);--ix-button-color:var(--theme-btn-outline-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-danger--border-color);border-style:solid}:host .btn-outline-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):active,:host .btn-outline-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-danger--border-color--hover);background-color:var(--theme-btn-outline-danger--background--hover);color:var(--theme-btn-outline-danger--color--hover)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):active,:host .btn-outline-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-danger--border-color--active);background-color:var(--theme-btn-outline-danger--background--active);color:var(--theme-btn-outline-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-danger.disabled,:host(.disabled) .btn-outline-danger:disabled{pointer-events:none;border-color:var(--theme-btn-outline-danger--border-color--disabled);background-color:var(--theme-btn-outline-danger--background--disabled);color:var(--theme-btn-outline-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-danger--color--disabled)}:host .btn-invisible-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-danger,:host .btn-invisible-danger.focus,:host .btn-invisible-danger:focus-visible{background-color:var(--theme-btn-invisible-danger--background);color:var(--theme-btn-invisible-danger--color);--ix-button-color:var(--theme-btn-invisible-danger--color);border-color:transparent}:host .btn-invisible-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-danger--background--hover);color:var(--theme-btn-invisible-danger--color--hover)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):active,:host .btn-invisible-danger:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-danger--background--active);color:var(--theme-btn-invisible-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-danger.disabled,:host(.disabled) .btn-invisible-danger:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-danger--background--disabled);color:var(--theme-btn-invisible-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-danger--color--disabled)}:host .btn-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-outline-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-primary,:host .btn-outline-primary.focus,:host .btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}:host .btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):active,:host .btn-outline-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-primary.disabled,:host(.disabled) .btn-outline-primary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}:host .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-primary,:host .btn-invisible-primary.focus,:host .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):active,:host .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-primary.disabled,:host(.disabled) .btn-invisible-primary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}:host .btn-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-secondary,:host .btn-outline-secondary.focus,:host .btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}:host .btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):active,:host .btn-outline-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-secondary.disabled,:host(.disabled) .btn-outline-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}:host .btn-invisible-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-secondary,:host .btn-invisible-secondary.focus,:host .btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}:host .btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-secondary.disabled,:host(.disabled) .btn-invisible-secondary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}:host{min-width:5rem}"}}]);