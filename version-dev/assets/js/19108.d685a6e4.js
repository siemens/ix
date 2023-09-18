"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19108],{19108:(t,e,r)=>{r.r(e),r.d(e,{ix_tabs:()=>s});var o=r(35254);let i=window.innerWidth;const s=class{constructor(t){(0,o.r)(this,t),this.selectedChange=(0,o.c)(this,"selectedChange",7),this.clickAction={timeout:null,isClick:!0},this.small=!1,this.rounded=!1,this.selected=0,this.layout="auto",this.placement="bottom",this.totalItems=0,this.currentScrollAmount=0,this.scrollAmount=100,this.styleNextArrow={},this.stylePreviousArrow={},this.scrollActionAmount=0}onWindowResize(){if(this.totalItems=0,this.totalItems=this.getTabs().length,0===i)return i=window.innerWidth;this.move(i-window.innerWidth),i=window.innerWidth}getTabs(){return Array.from(this.hostElement.querySelectorAll("ix-tab-item"))}getTab(t){return this.getTabs()[t]}getTabsWrapper(){return this.hostElement.shadowRoot.querySelector(".items-content")}showArrows(){try{const t=this.getTabsWrapper();return t.scrollWidth>Math.ceil(t.getBoundingClientRect().width)&&"auto"===this.layout}catch(t){return!1}}showPreviousArrow(){try{return this.showArrows()&&this.scrollActionAmount<0}catch(t){return!1}}showNextArrow(){try{const t=this.getTabsWrapper(),e=t.getBoundingClientRect();return this.showArrows()&&this.scrollActionAmount>-1*(t.scrollWidth-e.width)}catch(t){return!1}}getArrowStyle(t){return{opacity:t?"1":"0",zIndex:t?"1":"-1"}}move(t,e){void 0===e&&(e=!1);const r=this.getTabsWrapper(),o=-1*(r.scrollWidth-r.getBoundingClientRect().width),i=[`transform: translateX(${t=(t=this.currentScrollAmount+t)>0?0:t<o?o:t}px);`,e?"transition: all ease-in-out 400ms;":""].join("");r.setAttribute("style",i),e?this.currentScrollAmount=this.scrollActionAmount=t:this.scrollActionAmount=t}moveTabToView(t){if(!this.showArrows())return;const e=-1*this.getTab(t).getBoundingClientRect().x;this.move(e,!0)}setSelected(t){this.selected=t}clickTab(t){if(this.dragStop())return;const{defaultPrevented:e}=this.selectedChange.emit(t);e||(this.setSelected(t),this.moveTabToView(t))}dragStart(t,e){if(!this.showArrows())return;if(e.button>0)return;this.clickAction.timeout=null===this.clickAction.timeout?setTimeout((()=>this.clickAction.isClick=!1),300):null;const r=parseFloat(window.getComputedStyle(t).left),o=e.clientX,i=t=>this.dragMove(t,r,o);window.addEventListener("mouseup",(()=>{window.removeEventListener("mousemove",i,!1),this.dragStop()})),window.addEventListener("mousemove",i,!1)}dragMove(t,e,r){this.move(t.clientX+e-r)}dragStop(){return clearTimeout(this.clickAction.timeout),this.clickAction.timeout=null,!this.clickAction.isClick&&(this.currentScrollAmount=this.scrollActionAmount,this.clickAction.isClick=!0,!0)}componentDidRender(){const t=this.getTabs();this.totalItems=t.length,t.forEach(((t,e)=>{this.small&&t.setAttribute("small","true"),this.rounded&&t.setAttribute("rounded","true"),t.setAttribute("layout",this.layout),t.setAttribute("selected",e===this.selected?"true":"false"),t.setAttribute("placement",this.placement)}))}componentWillRender(){requestAnimationFrame((()=>{const t=this.showNextArrow(),e=this.showPreviousArrow();this.styleNextArrow=this.getArrowStyle(t),this.stylePreviousArrow=this.getArrowStyle(e)}))}componentDidLoad(){this.getTabs().forEach((t=>{t.addEventListener("mousedown",(e=>this.dragStart(t,e)))}))}onTabClick(t){if(t.defaultPrevented)return;const e=t.target;this.getTabs().forEach(((t,r)=>{t.disabled||t!==e||this.clickTab(r)}))}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{class:"arrow",style:this.stylePreviousArrow,onClick:()=>this.move(this.scrollAmount,!0)},(0,o.h)("ix-icon",{name:"chevron-left-small"})),(0,o.h)("div",{class:{"tab-items":!0,"overflow-shadow":!0,"shadow-left":this.showPreviousArrow(),"shadow-right":this.showNextArrow(),"shadow-both":this.showNextArrow()&&this.showPreviousArrow()}},(0,o.h)("div",{class:"items-content"},(0,o.h)("slot",null))),(0,o.h)("div",{class:"arrow right",style:this.styleNextArrow,onClick:()=>this.move(-this.scrollAmount,!0)},(0,o.h)("ix-icon",{name:"chevron-right-small"})))}get hostElement(){return(0,o.g)(this)}};s.style=":host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tab-items{overflow:hidden;scroll-behavior:smooth;width:100%}:host .tab-items .items-content{display:flex;align-items:center}:host .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}:host .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}:host .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}:host .arrow.right{left:auto;right:0}:host .overflow-shadow{display:block;position:relative;height:100%;width:100%;pointer-events:all}:host .overflow-shadow.shadow-left{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px);mask-image:linear-gradient(90deg, transparent 0px, black 45px)}:host .overflow-shadow.shadow-right{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}:host .overflow-shadow.shadow-both{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%)}"}}]);