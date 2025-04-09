"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6208],{51982:(t,e,i)=>{i.d(e,{a:()=>r,b:()=>o,g:()=>a});const r=t=>t?"true":"false",a=t=>{if(!t)return"Unknown";if((t=>{if(!t)return!1;let e;try{e=new URL(t)}catch(i){return!1}return"http:"===e.protocol||"https:"===e.protocol})(t))return"Unknown";if((e=t)&&"string"==typeof e&&e.startsWith("data:image/svg+xml"))return"Unknown";var e;const i=t.replace("-filled","").split("-").map((t=>{const e=t.trim(),i=e.replace(/\d+/g,"");return 0===i.length?e:i})).map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" ");return 0===i.length?"Unknown":i},o=function(t,e){void 0===e&&(e=[]);const i={};return n.forEach((r=>{var a;if(t.hasAttribute(r)){null===t.getAttribute(r)||e.includes(r)||(i[r]=null!==(a=t.getAttribute(r))&&void 0!==a?a:"",t.removeAttribute(r))}})),i},n=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},16208:(t,e,i)=>{i.r(e),i.d(e,{ix_breadcrumb:()=>h});var r=i(72539),a=i(51982),o=i(83145),n=i(87172);let s=0;const l=function(t){return void 0===t&&(t="breadcrumb-"),`${t}-${s++}`},h=class{constructor(t){(0,r.r)(this,t),this.itemClick=(0,r.c)(this,"itemClick",7),this.nextClick=(0,r.c)(this,"nextClick",7),this.visibleItemCount=9,this.nextItems=[],this.ghost=!0,this.ariaLabelPreviousButton="previous",this.previousButtonRef=(0,n.m)(),this.nextButtonRef=(0,n.m)(),this.items=[],this.isPreviousDropdownExpanded=!1,this.previousButtonId=l(),this.previousDropdownId=l()}onNextItemsChange(){this.onChildMutation()}onItemClick(t){this.itemClick.emit(t)}componentDidLoad(){this.mutationObserver=(0,o.c)((()=>this.onChildMutation())),this.mutationObserver.observe(this.hostElement,{subtree:!0,childList:!0})}componentWillLoad(){this.onChildMutation()}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}async onChildMutation(){const t=this.getItems();t.forEach(((e,i)=>{const r=0!==this.nextItems.length&&t.length-1===i;e.ghost=this.ghost,e.showChevron=t.length-1!==i||r,e.isDropdownTrigger=r,r&&this.nextButtonRef(e),t.length<this.visibleItemCount||(e.visible=i>=t.length-this.visibleItemCount)})),this.items=t}getItems(){return Array.from(this.hostElement.querySelectorAll("ix-breadcrumb-item"))}render(){var t,e,i,o;const n=(0,a.b)(this.hostElement);return(0,r.h)(r.H,{key:"ad4b8c147f3478a9cb8f01d5f46b99ff86ee323f"},(0,r.h)("ix-dropdown",{key:"b8fa759644e7252e3f25c5805e06196ad7acfeb3",id:this.previousDropdownId,"aria-label":this.ariaLabelPreviousButton,trigger:(null===(t=this.items)||void 0===t?void 0:t.length)>this.visibleItemCount?this.previousButtonRef.waitForCurrent():void 0,onShowChanged:t=>{let{detail:e}=t;this.isPreviousDropdownExpanded=e;const i=this.hostElement.shadowRoot.getElementById(this.previousButtonId);i&&(0,r.f)(i)}},this.items.slice(0,this.items.length-this.visibleItemCount).map((t=>{var e;const i=null!==(e=t.label)&&void 0!==e?e:t.innerText;return(0,r.h)("ix-dropdown-item",{label:i,onClick:()=>{this.onItemClick(i)},onItemClick:t=>t.stopPropagation()})}))),(null===(e=this.items)||void 0===e?void 0:e.length)>this.visibleItemCount?(0,r.h)("ix-breadcrumb-item",{id:this.previousButtonId,ref:this.previousButtonRef,label:"...",tabIndex:1,onItemClick:t=>t.stopPropagation(),"aria-describedby":this.previousDropdownId,"aria-controls":this.previousDropdownId,"aria-expanded":(0,a.a)(this.isPreviousDropdownExpanded),class:"previous-button"}):null,(0,r.h)("nav",{key:"894aa6aba077c3154ff4e2f75ea90e044c9dd1b8",class:"crumb-items","aria-label":null!==(i=n["aria-label"])&&void 0!==i?i:"breadcrumbs"},(0,r.h)("ol",{key:"a1bba2fc77e17877306e996373dc6269c7530e48"},(0,r.h)("slot",{key:"50dea282515e311e37ea48776793cc0aaa6746b2"}))),(0,r.h)("ix-dropdown",{key:"3ebe74020ea3edabcaff09c3840db5fdeef1581d",trigger:this.nextButtonRef.waitForCurrent()},null===(o=this.nextItems)||void 0===o?void 0:o.map((t=>(0,r.h)("ix-dropdown-item",{label:t,onClick:e=>{this.nextClick.emit({event:e,item:t})},onItemClick:t=>t.stopPropagation()})))))}get hostElement(){return(0,r.g)(this)}static get watchers(){return{nextItems:["onNextItemsChange"]}}};h.style=":host{display:flex;justify-content:flex-start;height:2.5rem;align-items:center;background-color:transparent;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .previous-button{width:3rem;min-width:0px}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:1rem;display:inline-block;font-weight:700}:host .more-text ix-icon{padding-top:2px}:host nav,:host ol,:host .crumb-items{display:contents}"},87172:(t,e,i)=>{function r(t){let e,i,r=new Promise((t=>e=t));const a=r=>{void 0!==r&&(i=a.current=r,null==t||t(r),null==e||e(r))};return a.current=i,a.waitForCurrent=async()=>(await r,i),a}i.d(e,{m:()=>r})},83145:(t,e,i)=>{i.d(e,{c:()=>r});const r=t=>new MutationObserver(t)}}]);