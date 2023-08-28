"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12713],{12713:(t,e,o)=>{o.r(e),o.d(e,{ix_category_filter:()=>n});var r=o(8823),i=o(51263);const n=class{constructor(t){(0,r.r)(this,t),this.inputChanged=(0,r.c)(this,"inputChanged",7),this.filterChanged=(0,r.c)(this,"filterChanged",7),this.ID_CUSTOM_FILTER_VALUE="CW_CUSTOM_FILTER_VALUE",this.textInput=void 0,this.hasFocus=void 0,this.categoryLogicalOperator=i.L.EQUAL,this.inputValue=void 0,this.category=void 0,this.filterTokens=[],this.initialState=void 0,this.filterState=void 0,this.placeholder=void 0,this.categories=void 0,this.nonSelectableCategories={},this.suggestions=void 0,this.icon="search",this.hideIcon=void 0,this.repeatCategories=!0,this.tmpDisableScrollIntoView=!0,this.labelCategories="Categories",this.i18nPlainText="Filter by text"}watchFilterState(t){this.setFilterState(t)}componentDidLoad(){var t,e;void 0!==this.initialState?this.setFilterState(this.initialState):void 0!==this.filterState&&setTimeout((()=>this.setFilterState(this.filterState))),null===(t=this.hostElement)||void 0===t||t.addEventListener("keydown",this.handleFormElementKeyDown.bind(this)),null===(e=this.formElement)||void 0===e||e.addEventListener("submit",(t=>t.preventDefault())),null!=this.textInput?(this.textInput.addEventListener("focusin",(()=>{this.hasFocus=!0})),this.textInput.addEventListener("focusout",(()=>this.hasFocus=!1)),this.textInput.addEventListener("input",(()=>{this.inputValue=this.textInput.value;const t=new i.I(this.inputValue,this.category);this.inputChanged.emit(t)})),this.textInput.addEventListener("keydown",this.handleInputElementKeyDown.bind(this))):console.warn("ix-category-filter - unable to add event listeners to native input element")}setFilterState(t){this.filterTokens=[];for(const e of t.tokens)this.addToken(e,this.ID_CUSTOM_FILTER_VALUE,this.categoryLogicalOperator,!1);for(const e of t.categories)this.addToken(e.value,e.id,e.operator,!1);this.emitFilterEvent()}closeDropdown(){this.hostElement.querySelector("ix-dropdown").show=!1}handleFormElementKeyDown(t){switch(t.code){case"Enter":case"NumpadEnter":if(!document.activeElement.classList.contains("dropdown-item"))return;const e=document.activeElement.getAttribute("data-id");this.hasCategorySelection()?this.category?this.addToken(e,this.category):document.activeElement.classList.contains("category-item-id")&&this.selectCategory(e):this.addToken(e),t.preventDefault();break;case"ArrowUp":this.focusPreviousItem(),t.preventDefault();break;case"ArrowDown":this.focusNextItem(),t.preventDefault();break;case"Escape":this.closeDropdown()}}focusPreviousItem(){const t=document.activeElement.previousSibling;t instanceof HTMLElement&&t.focus()}focusNextItem(){const t=document.activeElement.nextSibling;t instanceof HTMLElement&&t.focus()}handleInputElementKeyDown(t){var e;switch(t.code){case"ArrowDown":const o=".category-item-"+(this.category?"value":"id");let r=this.hostElement.querySelector(o);r instanceof HTMLElement?(r.focus(),t.stopPropagation()):(null===(e=this.suggestions)||void 0===e?void 0:e.length)&&(r=this.hostElement.querySelector(".category-item"),r instanceof HTMLElement&&(r.focus(),t.stopPropagation()));break;case"Backspace":if(""!==this.textInput.value)return;if(this.category)return void(this.category=void 0);const i=this.filterTokens.length;i>0&&this.removeToken(i-1);break;case"Enter":case"NumpadEnter":this.addToken(this.inputValue,this.category),t.preventDefault()}}emitFilterEvent(){const t={tokens:this.filterTokens.filter((t=>t.id===this.ID_CUSTOM_FILTER_VALUE)).map((t=>t.value)),categories:this.filterTokens.filter((t=>t.id!==this.ID_CUSTOM_FILTER_VALUE))};this.filterChanged.emit(t)}addToken(t,e,o,r){if(void 0===e&&(e=this.ID_CUSTOM_FILTER_VALUE),void 0===o&&(o=this.categoryLogicalOperator),void 0===r&&(r=!0),null==t)return;const n=t.trim();if(""===n)return;if(this.hasToken(n))return;const a={id:e,value:n,operator:o};this.filterTokens=[...this.filterTokens,a],this.textInput.value="",this.inputValue="",this.categoryLogicalOperator=i.L.EQUAL,this.category&&(this.category=void 0),this.isScrollStateDirty=!0,this.textInput.focus(),r&&this.emitFilterEvent(),this.closeDropdown()}removeToken(t){this.filterTokens=this.filterTokens.filter(((e,o)=>o!==t)),this.emitFilterEvent()}getCategoryIds(){const t=[];for(const e in this.categories)Object.prototype.hasOwnProperty.call(this.categories,e)&&t.push(e);return t}selectCategory(t){this.category=t,this.textInput.value="",this.inputValue="",this.textInput.focus()}resetFilter(){this.closeDropdown(),this.filterTokens=[],this.emitFilterEvent()}filterMultiples(t){if(this.repeatCategories)return!0;return!this.filterTokens.find((e=>e.id===t))}hasToken(t){return this.filterTokens.some((e=>{const o=e.value===t;return!!o&&(this.category?this.category===e.id:e.id?e.id===this.ID_CUSTOM_FILTER_VALUE:o)}))}filterDuplicateTokens(t){return!this.hasToken(t)}filterByInput(t){return void 0===this.inputValue||""===this.inputValue||-1!==t.toLowerCase().indexOf(this.inputValue.toLowerCase())}toggleCategoryOperator(){switch(this.categoryLogicalOperator){case i.L.EQUAL:this.categoryLogicalOperator=i.L.NOT_EQUAL;break;case i.L.NOT_EQUAL:this.categoryLogicalOperator=i.L.EQUAL}}getFilterChipLabel(t){var e,o,r;if(t.id===this.ID_CUSTOM_FILTER_VALUE)return t.value;const n=t.operator===i.L.EQUAL?"=":"!=";return`${null!==(r=null!==(o=null===(e=this.categories[t.id])||void 0===e?void 0:e.label)&&void 0!==o?o:this.nonSelectableCategories[t.id])&&void 0!==r?r:t.id} ${n} ${t.value}`}getFilteredSuggestions(){var t,e;return(null===(t=this.suggestions)||void 0===t?void 0:t.length)?null===(e=this.suggestions)||void 0===e?void 0:e.filter((t=>this.filterByInput(t))).filter((t=>this.filterDuplicateTokens(t))):[]}hasCategorySelection(){return void 0!==this.categories}displayDropdown(){return!!this.hasCategorySelection()||void 0!==this.suggestions&&this.getFilteredSuggestions().length>0}renderPlainSuggestions(){return(0,r.h)("div",{class:"dropdown-item-container"},this.getFilteredSuggestions().map((t=>(0,r.h)("button",{class:"dropdown-item","data-id":t,onClick:()=>this.addToken(t),key:t,title:t},t))))}renderCategoryValues(){var t,e;return(0,r.h)("div",{class:"dropdown-item-container"},(0,r.h)("button",{class:"btn btn-invisible-secondary btn-icon btn-toggle-operator",onClick:()=>this.toggleCategoryOperator(),tabindex:"-1"},this.categoryLogicalOperator===i.L.NOT_EQUAL?"=":"!="),(0,r.h)("div",{class:"dropdown-header"},null===(t=this.categories[this.category])||void 0===t?void 0:t.label),null===(e=this.categories[this.category])||void 0===e?void 0:e.options.filter((t=>this.filterByInput(t))).filter((t=>this.filterDuplicateTokens(t))).map((t=>(0,r.h)("button",{class:"dropdown-item category-item-value","data-id":t,title:t,key:t,onClick:()=>this.addToken(t,this.category)},`${this.categoryLogicalOperator===i.L.EQUAL?"=":"!="} ${t}`))))}renderDropdownContent(){return this.hasCategorySelection()?this.category?this.renderCategoryValues():this.renderCategorySelection():this.renderPlainSuggestions()}renderCategorySelection(){var t;return(0,r.h)("div",{class:"dropdown-item-container"},null===(t=this.getCategoryIds())||void 0===t?void 0:t.filter((t=>this.filterByInput(this.categories[t].label))).filter((t=>this.filterMultiples(t))).map((t=>{var e;return(0,r.h)("button",{class:"dropdown-item category-item category-item-id","data-id":t,title:this.categories[t].label,key:t,onClick:()=>this.selectCategory(t),tabindex:"0"},null===(e=this.categories[t])||void 0===e?void 0:e.label)})))}getDropdownHeader(){return this.categories?this.category?null:this.labelCategories:this.i18nPlainText}componentDidRender(){this.isScrollStateDirty&&(this.tmpDisableScrollIntoView||this.textInput.scrollIntoView(),this.isScrollStateDirty=!1)}getResetButton(){return(0,r.h)("ix-icon-button",{onClick:()=>this.resetFilter(),class:{"reset-button":!0,"hide-reset-button":!this.filterTokens.length&&!this.category},variant:"primary",ghost:!0,oval:!0,icon:"clear",size:"16",tabindex:"1"})}render(){var t;return(0,r.h)(r.H,null,(0,r.h)("form",{ref:t=>this.formElement=t},(0,r.h)("div",{class:{"form-control":!0,"input-container":!0,focus:this.hasFocus,"no-icon":this.hideIcon}},(0,r.h)("ix-icon",{class:{"d-none":this.hideIcon},name:this.icon,size:"16"}),(0,r.h)("div",{class:"token-container"},(0,r.h)("ul",{class:"list-unstyled"},this.filterTokens.map(((t,e)=>(0,r.h)("li",{key:t.toString(),class:{animate__animated:!0,animate__fadein:!0}},(0,r.h)("ix-filter-chip",{onCloseClick:()=>this.removeToken(e)},this.getFilterChipLabel(t))))),void 0===this.categories?"":(0,r.h)("li",{class:{"category-preview":!0,"d-none":!this.category}},null===(t=this.categories[this.category])||void 0===t?void 0:t.label),(0,r.h)("input",{class:{"text-input":!0,"hide-placeholder":void 0!==this.category},ref:t=>this.textInput=t,type:"text",placeholder:this.placeholder}))),this.getResetButton())),(0,r.h)("ix-dropdown",{closeBehavior:"outside",trigger:this.textInput,triggerEvent:["click","focus"],header:this.getDropdownHeader(),class:{"d-none":!this.displayDropdown()}},this.renderDropdownContent()))}get hostElement(){return(0,r.g)(this)}static get watchers(){return{filterState:["watchFilterState"]}}};n.style=".form-control.sc-ix-category-filter,.form-control-plaintext.sc-ix-category-filter{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);-webkit-padding-start:0.5rem;padding-inline-start:0.5rem;-webkit-padding-end:0.5rem;padding-inline-end:0.5rem}.form-control.sc-ix-category-filter::-moz-placeholder,.form-control-plaintext.sc-ix-category-filter::-moz-placeholder{color:var(--theme-input-hint--color)}.form-control.sc-ix-category-filter::placeholder,.form-control-plaintext.sc-ix-category-filter::placeholder{color:var(--theme-input-hint--color)}.form-control.sc-ix-category-filter:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext.sc-ix-category-filter:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control.sc-ix-category-filter:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext.sc-ix-category-filter:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control.sc-ix-category-filter:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext.sc-ix-category-filter:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control.sc-ix-category-filter:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext.sc-ix-category-filter:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control.sc-ix-category-filter:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext.sc-ix-category-filter:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control.sc-ix-category-filter:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext.sc-ix-category-filter:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control.sc-ix-category-filter:focus-visible{color:var(--theme-input--color)}.form-control[type=number].sc-ix-category-filter{text-align:right}.form-control[type=number].sc-ix-category-filter::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}.form-control.readonly.sc-ix-category-filter,.form-control[readonly].sc-ix-category-filter{background:transparent !important;-webkit-border-before:none !important;border-block-start:none !important;-webkit-border-start:none !important;border-inline-start:none !important;-webkit-border-end:none !important;border-inline-end:none !important;border-radius:0rem}.form-control.sc-ix-category-filter:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control.sc-ix-category-filter:read-only,.form-control[readonly].sc-ix-category-filter,.form-control[readOnly].sc-ix-category-filter,.form-control.readonly.sc-ix-category-filter{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control.sc-ix-category-filter:read-only::-moz-placeholder,.form-control[readonly].sc-ix-category-filter::-moz-placeholder,.form-control[readOnly].sc-ix-category-filter::-moz-placeholder,.form-control.readonly.sc-ix-category-filter::-moz-placeholder{color:transparent}.form-control.sc-ix-category-filter:-moz-read-only::placeholder{color:transparent}.form-control.sc-ix-category-filter:read-only::placeholder,.form-control[readonly].sc-ix-category-filter::placeholder,.form-control[readOnly].sc-ix-category-filter::placeholder,.form-control.readonly.sc-ix-category-filter::placeholder{color:transparent}.form-control.sc-ix-category-filter:disabled,.form-control.disabled.sc-ix-category-filter{background:transparent !important;-webkit-border-before:none !important;border-block-start:none !important;-webkit-border-start:none !important;border-inline-start:none !important;-webkit-border-end:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}.form-control.sc-ix-category-filter:disabled::-moz-placeholder,.form-control.disabled.sc-ix-category-filter::-moz-placeholder{color:transparent}.form-control.sc-ix-category-filter:disabled::placeholder,.form-control.disabled.sc-ix-category-filter::placeholder{color:transparent}.form-control-plaintext.sc-ix-category-filter{outline:0}.form-group.sc-ix-category-filter{position:relative}.input-wrapper.sc-ix-category-filter{display:flex;position:relative;align-items:center;flex-wrap:nowrap}.input-wrapper.sc-ix-category-filter>.glyph.sc-ix-category-filter{display:block;position:absolute;-webkit-margin-start:0.312rem;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}.input-wrapper.sc-ix-category-filter>input.sc-ix-category-filter{-webkit-padding-start:2.2rem;padding-inline-start:2.2rem}select.form-control.sc-ix-category-filter{padding:0 0.312rem}textarea.form-control.sc-ix-category-filter{padding:0.375rem 0.5rem}.was-validated.sc-ix-category-filter .form-control.sc-ix-category-filter:invalid,.was-validated.sc-ix-category-filter .is-invalid.sc-ix-category-filter{background-color:var(--theme-input-error--background);background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='512px' height='512px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 62 (101010) - https://sketch.com --%3E%3Ctitle%3Eerror%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.75'%3E%3Cg id='error' fill='%23ff2640'%3E%3Cg id='error/error'%3E%3Cpath d='M256,42.6666667 C373.626371,42.6666667 469.333333,138.373627 469.333333,256 C469.333333,373.626371 373.626371,469.333333 256,469.333333 C138.373627,469.333333 42.6666667,373.626371 42.6666667,256 C42.6666667,138.373627 138.373627,42.6666667 256,42.6666667 Z M256,85.3333333 C161.559631,85.3333333 85.3333333,161.559631 85.3333333,256 C85.3333333,350.44037 161.559631,426.666667 256,426.666667 C350.44037,426.666667 426.666667,350.44037 426.666667,256 C426.666667,161.559631 350.44037,85.3333333 256,85.3333333 Z M326.248389,155.581722 L356.418278,185.751611 L286.168667,255.999667 L356.418278,326.248389 L326.248389,356.418278 L255.999667,286.168667 L185.751611,356.418278 L155.581722,326.248389 L225.829667,255.999667 L155.581722,185.751611 L185.751611,155.581722 L255.999667,225.829667 L326.248389,155.581722 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") !important;background-position:left calc(0.375em + 0.1875rem) center !important;padding-right:0.75rem;padding-left:calc(1.5em + 0.75rem);background-size:18px;background-repeat:no-repeat}input.disabled.sc-ix-category-filter,input.sc-ix-category-filter:disabled{color:var(--theme-input--color--disabled)}.sc-ix-category-filter-h{display:block;position:relative}.sc-ix-category-filter-h .focus.sc-ix-category-filter{border-color:var(--theme-color-primary);box-shadow:0 0 0.25rem 0 var(--theme-color-primary) !important}.sc-ix-category-filter-h .reset-button.sc-ix-category-filter{position:absolute;top:0.25rem;right:0.25rem}.sc-ix-category-filter-h .reset-button.hide-reset-button.sc-ix-category-filter{display:none}.sc-ix-category-filter-h .input-container.sc-ix-category-filter{display:flex;height:100%;max-height:3.75rem;padding:1px 1.5rem 1px 2rem}.sc-ix-category-filter-h .input-container.no-icon.sc-ix-category-filter{padding-left:0.25rem}.sc-ix-category-filter-h .token-container.sc-ix-category-filter{flex-grow:1;overflow:hidden}.sc-ix-category-filter-h .text-input.sc-ix-category-filter{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;flex-grow:1;height:1.75rem}.sc-ix-category-filter-h .text-input.sc-ix-category-filter,.sc-ix-category-filter-h .text-input.sc-ix-category-filter:hover,.sc-ix-category-filter-h .text-input.sc-ix-category-filter:focus-visible{border:none;outline:none}.sc-ix-category-filter-h .text-input.hide-placeholder.sc-ix-category-filter::-moz-placeholder{opacity:0}.sc-ix-category-filter-h .text-input.hide-placeholder.sc-ix-category-filter::placeholder{opacity:0}.sc-ix-category-filter-h .list-unstyled.sc-ix-category-filter{display:flex;flex-wrap:wrap;list-style:none;padding:0;margin:0;overflow-y:auto}.sc-ix-category-filter-h ix-icon.sc-ix-category-filter{position:absolute;top:0.5rem;left:0.5rem}.sc-ix-category-filter-h ix-filter-chip.sc-ix-category-filter{margin-right:0.5rem}.sc-ix-category-filter-h .category-preview.sc-ix-category-filter{display:flex;align-items:center;height:1.5rem;background-color:var(--theme-bg-3);border-top-left-radius:1rem;border-bottom-left-radius:1rem;padding:0.5rem;margin:2px 0}.sc-ix-category-filter-h ul.sc-ix-category-filter{height:100%}.sc-ix-category-filter-h ul.sc-ix-category-filter>li.sc-ix-category-filter,.sc-ix-category-filter-h input.sc-ix-category-filter{padding-top:2px;padding-bottom:2px}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter{min-width:10rem !important}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter{display:flex;flex-direction:column}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter .dropdown-item.sc-ix-category-filter{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:2.5rem;margin:0.25rem 0.5rem;padding-inline:0.5rem;border-radius:100rem;width:auto}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter .category-item.sc-ix-category-filter{border-end-end-radius:0;border-start-end-radius:0}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter .category-item-value.sc-ix-category-filter{border-start-start-radius:0;border-end-start-radius:0}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .btn-toggle-operator.sc-ix-category-filter{margin-inline:0.5rem}"}}]);