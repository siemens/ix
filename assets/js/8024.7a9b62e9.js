"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8024],{26822:(t,e,i)=>{function s(t){return null!==t&&void 0!==t.getDropdownItemElement&&"function"==typeof t.getDropdownItemElement}i.d(e,{d:()=>n,h:()=>s});const n=new class{constructor(){this.dropdowns=new Map,this.submenuIds={},this.isWindowListenerActive=!1}connected(t){this.isWindowListenerActive||this.addOverlayListeners(),this.dropdowns.set(t.getId(),t),t.discoverAllSubmenus&&this.discoverSubmenus()}disconnected(t){const e=t.getId();this.removeFromSubmenuIds(e),this.dropdowns.delete(e)}removeFromSubmenuIds(t){this.dropdowns.forEach((e=>{const i=this.submenuIds[e.getId()];if(i){const e=i.indexOf(t);e>-1&&i.splice(e,1)}})),delete this.submenuIds[t]}getDropdownById(t){return this.dropdowns.get(t)}discoverSubmenus(){this.dropdowns.forEach((t=>{t.discoverSubmenu()}))}present(t){var e;!t.isPresent()&&(null===(e=t.willPresent)||void 0===e?void 0:e.call(t))&&(this.submenuIds[t.getId()]=t.getAssignedSubmenuIds(),t.present())}dismissChildren(t){const e=this.submenuIds[t]||[];for(const i of e){const t=this.dropdowns.get(i);t&&this.dismiss(t)}}dismiss(t){var e;t.isPresent()&&(null===(e=t.willDismiss)||void 0===e?void 0:e.call(t))&&(this.dismissChildren(t.getId()),t.dismiss(),delete this.submenuIds[t.getId()])}dismissAll(t,e){void 0===t&&(t=[]),void 0===e&&(e=!1),this.dropdowns.forEach((i=>{const s="inside"===i.closeBehavior||!1===i.closeBehavior,n=t.includes(i.getId()),o=this.buildComposedPath(i.getId(),new Set);if(t.length>0&&e){let e=!1;if(t.forEach((t=>{o.has(t)&&(e=!0)})),!e)return}!n&&s||this.dismiss(i)}))}dismissOthers(t){let e=this.buildComposedPath(t,new Set);e.add(t),this.dropdowns.forEach((t=>{"inside"===t.closeBehavior||!1===t.closeBehavior||e.has(t.getId())||this.dismiss(t)}))}pathIncludesTrigger(t){for(let e of t)if(e instanceof HTMLElement&&e.hasAttribute("data-ix-dropdown-trigger"))return e}pathIncludesDropdown(t){return!!t.find((t=>"IX-DROPDOWN"===t.tagName))}buildComposedPath(t,e){this.submenuIds[t]&&e.add(t);for(const i of Object.keys(this.submenuIds))this.submenuIds[i].includes(t)&&this.buildComposedPath(i,e).forEach((t=>e.add(t)));return e}addOverlayListeners(){this.isWindowListenerActive=!0,window.addEventListener("click",(t=>{const e=this.pathIncludesTrigger(t.composedPath()),i=this.pathIncludesDropdown(t.composedPath());e||i||this.dismissAll()})),window.addEventListener("keydown",(t=>{"Escape"===t.key&&this.dismissAll([...this.dropdowns.keys()])}))}}},8024:(t,e,i)=>{i.r(e),i.d(e,{ix_tree:()=>h});var s=i(39567);var n=i(26822);const o=t=>!Number.isNaN(Number(t));class r{static create(t,e){return void 0===e&&(e=r.defaultConfig),new r(t,e)}static mergeStyle(t,e){for(let i in e)t.style[i]!==e[i]&&(t.style[i]=e[i])}static getMaxBrowserHeight(){const t=document.createElement("div"),e=document.createElement("div");r.mergeStyle(t,{position:"absolute",height:"1px",opacity:0}),r.mergeStyle(e,{height:"1e7px"}),t.appendChild(e),document.body.appendChild(t);const i=e.offsetHeight;return document.body.removeChild(t),i}constructor(t,e){this._lastRepaint=null,this._maxElementHeight=r.getMaxBrowserHeight(),this.refresh(t,e);const i=this._config,s=()=>{const t=this._getScrollPosition(),e=this._lastRepaint;if(this._renderAnimationFrame=window.requestAnimationFrame(s),t===e)return;const n=e?t-e:0;if(!e||n<0||n>this._averageHeight){let e=this._renderChunk();this._lastRepaint=t,!1!==e&&"function"==typeof i.afterRender&&i.afterRender()}};s()}destroy(){window.cancelAnimationFrame(this._renderAnimationFrame)}refresh(t,e){if(void 0===e&&(e=r.defaultConfig),this._config=e,!t||1!==t.nodeType)throw new Error("HyperList requires a valid DOM Node container");this._element=t;const i=this._config,s=this._scroller||i.scroller||document.createElement(i.scrollerTagName||"tr");if("boolean"!=typeof i.useFragment&&(this._config.useFragment=!0),!i.generate)throw new Error("Missing required `generate` function");if(!o(i.total))throw new Error("Invalid required `total` value, expected number");if(!Array.isArray(i.itemHeight)&&!o(i.itemHeight))throw new Error("\n        Invalid required `itemHeight` value, expected number or array\n      ".trim());o(i.itemHeight)?this._itemHeights=Array(i.total).fill(i.itemHeight):this._itemHeights=[i.itemHeight],Object.keys(r.defaultConfig).filter((t=>t in i)).forEach((t=>{const e=i[t],s=o(e);if(e&&"string"!=typeof e&&"number"!=typeof e){throw new Error(`Invalid optional \`${t}\`, expected string or number`)}s&&(i[t]=`${e}px`)}));const n=Boolean(i.horizontal),h=i[n?"width":"height"];if(h){const t=o(h),e=!t&&"%"===h.slice(-1),i=t?parseInt(h,10):parseInt(h.replace(/px|%/,""),10),s=window[n?"innerWidth":"innerHeight"];this._containerSize=e?s*i/100:o(h)?h:i}const d=i.scrollContainer,l=i.itemHeight*i.total,a=this._maxElementHeight;l>a&&console.warn(["HyperList: The maximum element height",a+"px has","been exceeded; please reduce your item height."].join(" "));const c={width:`${i.width}`,height:d?`${l}px`:`${i.height}`,overflow:d?"none":"auto",position:"relative"};r.mergeStyle(t,c),d&&r.mergeStyle(i.scrollContainer,{overflow:"auto"});const m={opacity:"0",position:"absolute",[n?"height":"width"]:"1px",[n?"width":"height"]:`${l}px`};r.mergeStyle(s,m),this._scroller||t.appendChild(s);const u=this._computeScrollPadding();this._scrollPaddingBottom=u.bottom,this._scrollPaddingTop=u.top,this._scroller=s,this._scrollHeight=this._computeScrollHeight(),this._itemPositions=this._itemPositions||Array(i.total).fill(0),this._computePositions(0),this._renderChunk(null!==this._lastRepaint),"function"==typeof i.afterRender&&i.afterRender()}_getRow(t){const e=this._config;let i=e.generate(t),s=i.height;if(void 0!==s&&o(s)?(i=i.element,s!==this._itemHeights[t]&&(this._itemHeights[t]=s,this._computePositions(t),this._scrollHeight=this._computeScrollHeight())):s=this._itemHeights[t],!i||1!==i.nodeType)throw new Error(`Generator did not return a DOM Node for index: ${t}`);var n,h;n=i,h=e.rowClassName||"vrow",n.classList.add(h);const d=this._itemPositions[t]+this._scrollPaddingTop;return r.mergeStyle(i,{position:"absolute",[e.horizontal?"left":"top"]:`${d}px`}),i}_getScrollPosition(){const t=this._config;return"function"==typeof t.overrideScrollPosition?t.overrideScrollPosition():this._element[t.horizontal?"scrollLeft":"scrollTop"]}_renderChunk(t){void 0===t&&(t=!1);const e=this._config,i=this._element,s=this._getScrollPosition(),n=e.total;let o=this._getFrom(s)-1;if((o<0||o-this._screenItemsLen<0)&&(o=0),!t&&this._lastFrom===o)return!1;this._lastFrom=o;let r=o+this._cachedItemsLen;(r>n||r+this._cachedItemsLen>n)&&(r=n);const h=e.useFragment?document.createDocumentFragment():[],d=this._scroller;h[e.useFragment?"appendChild":"push"](d);for(let l=o;l<r;l++){let t=this._getRow(l);h[e.useFragment?"appendChild":"push"](t)}if(e.applyPatch)return e.applyPatch(i,h);i.innerHTML="",i.appendChild(h)}_computePositions(t){void 0===t&&(t=1);const e=this._config.total;t<1&&(t=1);for(let i=t;i<e;i++)this._itemPositions[i]=this._itemHeights[i-1]+this._itemPositions[i-1]}_computeScrollHeight(){const t=this._config,e=Boolean(t.horizontal),i=t.total,s=this._itemHeights.reduce(((t,e)=>t+e),0)+this._scrollPaddingBottom+this._scrollPaddingTop;r.mergeStyle(this._scroller,{opacity:0,position:"absolute",top:"0px",[e?"height":"width"]:"1px",[e?"width":"height"]:`${s}px`});const n=this._itemHeights.slice(0).sort(((t,e)=>t-e)),o=Math.floor(i/2),h=i%2==0?(n[o]+n[o-1])/2:n[o],d=e?"clientWidth":"clientHeight",l=t.scrollContainer?t.scrollContainer:this._element,a=l[d]?l[d]:this._containerSize;return this._screenItemsLen=Math.ceil(a/h),this._containerSize=a,this._cachedItemsLen=Math.max(this._cachedItemsLen||0,3*this._screenItemsLen),this._averageHeight=h,s}_computeScrollPadding(){const t=this._config,e=Boolean(t.horizontal),i=window.getComputedStyle(this._element),s=t=>{const e=i.getPropertyValue(`padding-${t}`);return parseInt(e,10)||0};return e?{bottom:s("right"),top:s("left")}:{bottom:s("bottom"),top:s("top")}}_getFrom(t){let e=0;for(;this._itemPositions[e]<t;)e++;return e}}r.defaultConfig={width:"100%",height:"100%"};const h=class{constructor(t){(0,s.r)(this,t),this.contextChange=(0,s.c)(this,"contextChange",7),this.nodeToggled=(0,s.c)(this,"nodeToggled",7),this.nodeClicked=(0,s.c)(this,"nodeClicked",7),this.nodeRemoved=(0,s.c)(this,"nodeRemoved",7),this.toggleListener=new Map,this.itemClickListener=new Map,this.updates=new Map,this.hasFirstRender=!1,this.root=void 0,this.model={},this.renderItem=void 0,this.context={}}updatePadding(t,e){t.style.paddingLeft=e.level+"rem"}getVirtualizerOptions(){const t=this.buildTreeList(this.model[this.root]);let e=(e,i,s)=>{if(e.hasChildren&&!this.toggleListener.has(i)){const n=i=>{i.preventDefault(),i.stopPropagation();const n=this.getContext(t[s].id);n.isExpanded=!n.isExpanded,this.nodeToggled.emit({id:e.id,isExpaned:n.isExpanded}),this.setContext(e.id,n)};i.addEventListener("toggle",n),this.toggleListener.set(i,n)}};return{width:"100%",height:"100%",itemHeight:32,total:t.length,generate:i=>{const s=t[i],o=this.hostElement.querySelector(`[data-tree-node-id="${s.id}"]`),r=this.getContext(s.id);if(o){if(o.hasChildren=s.hasChildren,o.context=Object.assign({},r),e(s,o,i),this.updates.has(s.id)){const t=this.updates.get(s.id);t&&t(s,Object.assign({},this.context))}return this.updatePadding(o,s),o}const h=t=>{this.updates.set(s.id,t)};let d=null;this.renderItem&&(d=this.renderItem(i,s,t,Object.assign({},this.context),h)),null===d&&(d=function(t,e,i){const s=document.createElement("ix-tree-item");return s.hasChildren=t.hasChildren,s.context=e,s.text=t.data.name,i((t=>{s.text=t.data.name})),s}(s,r,h));const l=d;if(l.setAttribute("data-tree-node-id",s.id),l.style.paddingRight="1rem",this.updatePadding(l,s),!this.itemClickListener.has(l)){const t=t=>{const e=t.composedPath(),i=e.indexOf(this.hostElement),o=e.slice(0,i),r=n.d.pathIncludesTrigger(o);if(t.defaultPrevented)return;if(r)return;Object.values(this.context).forEach((t=>t.isSelected=!1));const h=this.getContext(s.id);h.isSelected=!0,this.setContext(s.id,h),this.nodeClicked.emit(s.id)};l.addEventListener("toggle",(t=>{t.preventDefault()})),l.addEventListener("click",t),this.itemClickListener.set(l,t)}return e(s,l,i),l}}}setContext(t,e){this.context=Object.assign(Object.assign({},this.context),{[t]:e}),this.contextChange.emit(this.context)}getContext(t){return this.context?(this.context[t]||(this.context[t]={isExpanded:!1,isSelected:!1}),this.context[t]):{isExpanded:!1,isSelected:!1}}buildTreeList(t,e){void 0===e&&(e=0);const i=[];if(null==t?void 0:t.hasChildren){const s=e+1;t.children.forEach((t=>{const n=this.model[t],o=this.getContext(t);i.push(Object.assign(Object.assign({},n),{level:e})),n.hasChildren&&o.isExpanded&&i.push(...this.buildTreeList(n,s))}))}return i}componentDidLoad(){this.initList(),this.observer=new MutationObserver((t=>{let e=[];t.forEach((t=>{e=[...e,...Array.from(t.removedNodes)],t.addedNodes.forEach((t=>{const i=e.indexOf(t);i>=0&&e.splice(i,1)}))})),this.nodeRemoved.emit(e)})),this.observer.observe(this.hostElement,{childList:!0})}componentWillRender(){this.hasFirstRender=!0,this.isListInitialized()?this.refreshList():this.initList()}disconnectedCallback(){var t,e;null===(t=this.hyperlist)||void 0===t||t.destroy(),null===(e=this.observer)||void 0===e||e.disconnect()}modelChange(){this.hasFirstRender&&!this.isListInitialized()&&this.initList()}isListInitialized(){var t;const e=null===(t=this.hyperlist)||void 0===t?void 0:t._itemPositions;return void 0!==e&&e.length&&!(null==e?void 0:e.some((t=>void 0===t||Number.isNaN(t))))}refreshList(){this.hyperlist&&this.hyperlist.refresh(this.hostElement,this.getVirtualizerOptions())}initList(){var t;if(!this.model)return;null===(t=this.hyperlist)||void 0===t||t.destroy();const e=this.getVirtualizerOptions();this.hyperlist=new r(this.hostElement,e)}render(){return(0,s.h)(s.H,{key:"f07f8e18cb87e576426b1ba321d8d198712db756"},(0,s.h)("slot",{key:"c2f1bfa0cb99eeac46d11270d22e949a4d8674c3"}))}get hostElement(){return(0,s.g)(this)}static get watchers(){return{model:["modelChange"]}}};h.style=":host{display:block}"}}]);