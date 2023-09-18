"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39433],{39433:(e,t,o)=>{o.r(t),o.d(t,{ix_workflow_step:()=>i,ix_workflow_steps:()=>l});var s=o(35254),r=o(16107);const i=class{constructor(e){(0,s.r)(this,e),this.selectedChanged=(0,s.c)(this,"selectedChanged",7),this.vertical=!1,this.disabled=!1,this.status="open",this.clickable=!1,this.selected=!1,this.position="undefined",this.iconName="circle",this.iconColor="workflow-step-icon-default--color"}selectedHandler(){const e=this.selected?"--selected":"";"open"===this.status&&(this.iconName=this.selected?"circle-dot":"circle",this.iconColor=`workflow-step-icon-default--color${e}`),"done"!==this.status||this.disabled||(this.iconColor=`workflow-step-icon-done--color${e}`)}watchPropHandler(){switch(this.status){case"open":this.iconName="circle",this.iconColor="workflow-step-icon-default--color";break;case"success":this.iconName="success",this.iconColor="color-success";break;case"done":this.iconName="success",this.iconColor="workflow-step-icon-done--color";break;case"warning":this.iconName="warning",this.iconColor="color-warning";break;case"error":this.iconName="error",this.iconColor="color-alarm";break;default:this.iconName="circle"}this.disabled&&(this.iconColor="workflow-step-icon-success--color--disabled")}componentDidLoad(){this.watchPropHandler(),this.selectedHandler(),this.customIconSlot=!!this.hostElement.querySelector('[slot="custom-icon"]')}onStepClick(){!this.disabled&&this.clickable&&this.selectedChanged.emit(this.hostElement)}render(){const e=this.customIconSlot?null:(0,s.h)(s.F,null,(0,s.h)("ix-icon",{color:"color-1",name:"warning"===this.iconName?"triangle-filled":"circle-filled",class:"absolute",size:"24"}),(0,s.h)("ix-icon",{color:this.iconColor,name:this.iconName,class:"absolute",size:"24"}));return(0,s.h)(s.H,{onClick:()=>this.onStepClick()},(0,s.h)("div",{tabIndex:0,class:{step:!0,selected:this.selected,vertical:this.vertical,disabled:this.disabled,clickable:this.clickable&&!this.disabled}},(0,s.h)("div",{class:"wrapper"},(0,s.h)("div",{class:{line:!0,selected:this.selected,[this.status]:!0,[this.position]:!0}}),(0,s.h)("div",{class:"iconWrapper"},e,(0,s.h)("slot",{name:"custom-icon"}))),(0,s.h)("div",{class:"text"},(0,s.h)("slot",null))))}get hostElement(){return(0,s.g)(this)}static get watchers(){return{selected:["selectedHandler"],status:["watchPropHandler"]}}};i.style=":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--theme-workflow-step--background);border-radius:var(--theme-workflow--border-radius);width:auto;padding:1.125rem 0 0.5rem 0;height:4rem;width:12.75rem}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:0.125rem;background-color:var(--theme-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--theme-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--theme-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--theme-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--theme-color-warning)}:host .step .wrapper .line.success{background-color:var(--theme-color-success)}:host .step .wrapper .line.error{background-color:var(--theme-color-alarm)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:1rem;width:auto;padding:0 0.5rem}:host .step.vertical{flex-direction:row;padding:0}:host .step.vertical .wrapper{width:auto;padding-left:1.125rem;height:4rem}:host .step.vertical .wrapper .line{width:0.125rem;height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin-top:0;margin-left:1rem;padding:0}:host .step.clickable:hover{background-color:var(--theme-workflow-step--background--hover)}:host .step.clickable:active{background-color:var(--theme-workflow-step--background--active)}:host .step:focus-visible{outline:1px solid var(--focus--border-color);border-radius:0}:host .step.selected{background-color:var(--theme-workflow-step--background--selected)}:host .step.disabled{background-color:var(--theme-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--theme-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--theme-workflow-step--color--disabled)}";const l=class{constructor(e){(0,s.r)(this,e),this.stepSelected=(0,s.c)(this,"stepSelected",7),this.vertical=!1,this.clickable=!1,this.selectedIndex=0}getSteps(){return Array.from(this.hostElement.querySelectorAll("ix-workflow-step"))}updateSteps(){let e=this.getSteps();e.forEach(((t,o)=>{t.vertical=this.vertical,t.clickable=this.clickable,t.selected=this.selectedIndex===o,1!==e.length?0===o?t.position="first":o===e.length-1?t.position="last":t.position="undefined":t.position="single"}))}onStepSelectionChanged(e){const t=e.detail,o=this.getSteps(),s=o.findIndex((e=>e===t));this.stepSelected.emit(s).defaultPrevented||o.forEach(((e,t)=>{e.selected=t===s}))}componentDidLoad(){this.observer=(0,r.c)((e=>{for(let t of e)"childList"===t.type&&this.updateSteps()})),this.observer.observe(this.hostElement,{childList:!0})}disconnectedCallback(){this.observer&&this.observer.disconnect()}componentDidRender(){this.updateSteps()}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:{steps:!0,vertical:this.vertical}},(0,s.h)("slot",null)))}get hostElement(){return(0,s.g)(this)}};l.style=":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .steps{display:flex}:host .steps.vertical{display:block}"},16107:(e,t,o)=>{o.d(t,{c:()=>s});const s=e=>new MutationObserver(e)}}]);