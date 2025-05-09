import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global.7dd975c7.js";
const workflowStepCss = ":host(:not(.host-vertical)){width:12rem;height:4rem;min-width:2rem;min-height:4rem;max-width:12rem}:host(.host-vertical){width:100%;height:4rem;min-width:4rem;min-height:2rem;max-height:12rem}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--theme-workflow-step--background);border-radius:var(--theme-workflow--border-radius);padding:1.125rem 0 0.5rem 0}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:0.125rem;background-color:var(--theme-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--theme-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--theme-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--theme-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--theme-color-warning)}:host .step .wrapper .line.success{background-color:var(--theme-color-success)}:host .step .wrapper .line.error{background-color:var(--theme-color-alarm)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:1rem;width:100%;padding:0 0.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:center}:host .step.vertical{flex-direction:row;padding:0;height:100%}:host .step.vertical .wrapper{width:auto;padding-left:1.125rem;height:100%}:host .step.vertical .wrapper .line{width:0.125rem;height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin:0 1rem;padding:0;width:auto}:host .step.clickable:hover{background-color:var(--theme-workflow-step--background--hover)}:host .step.clickable:active{background-color:var(--theme-workflow-step--background--active)}:host .step:focus-visible{outline:1px solid var(--focus--border-color);border-radius:0}:host .step.selected{background-color:var(--theme-workflow-step--background--selected)}:host .step.disabled{background-color:var(--theme-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--theme-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--theme-workflow-step--color--disabled)}";
const IxWorkflowStepStyle0 = workflowStepCss;
const WorkflowStep = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
    this.customIconSlot = false;
    this.vertical = false;
    this.disabled = false;
    this.status = "open";
    this.clickable = false;
    this.selected = false;
    this.position = "undefined";
    this.iconName = "circle";
    this.iconColor = "workflow-step-icon-default--color";
  }
  selectedHandler() {
    const selectedStyle = this.selected ? "--selected" : "";
    if (this.status === "open") {
      this.iconName = this.selected ? "circle-dot" : "circle";
      this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
    }
    if (this.status === "done" && !this.disabled) {
      this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
    }
  }
  watchPropHandler() {
    switch (this.status) {
      case "open":
        this.iconName = "circle";
        this.iconColor = "workflow-step-icon-default--color";
        break;
      case "success":
        this.iconName = "success";
        this.iconColor = "color-success";
        break;
      case "done":
        this.iconName = "success";
        this.iconColor = "workflow-step-icon-done--color";
        break;
      case "warning":
        this.iconName = "warning";
        this.iconColor = "color-warning";
        break;
      case "error":
        this.iconName = "error";
        this.iconColor = "color-alarm";
        break;
      default:
        this.iconName = "circle";
        break;
    }
    if (this.disabled) {
      this.iconColor = "workflow-step-icon-success--color--disabled";
    }
  }
  componentWillLoad() {
    this.watchPropHandler();
    this.selectedHandler();
    this.customIconSlot = !!this.hostElement.querySelector('[slot="custom-icon"]');
  }
  onStepClick() {
    if (!this.disabled && this.clickable) {
      this.selectedChanged.emit(this.hostElement);
    }
  }
  render() {
    const icons = !this.customIconSlot ? h(Fragment, null, h("ix-icon", { color: "color-1", name: this.iconName === "warning" ? "triangle-filled" : "circle-filled", class: "absolute", size: "24" }), h("ix-icon", { color: this.iconColor, name: this.iconName, class: "absolute", size: "24" })) : null;
    return h(Host, { key: "484ce65ed951050c54a3daf605449e09308acb7c", class: { "host-vertical": this.vertical }, onClick: () => this.onStepClick() }, h("div", { key: "490aeaf08167b8f09e1f190d530852d09bb7ff14", tabIndex: 0, class: {
      step: true,
      selected: this.selected,
      vertical: this.vertical,
      disabled: this.disabled,
      clickable: this.clickable && !this.disabled
    } }, h("div", { key: "7316aeceb9d686c1a374301c6b3a189c0cf99b81", class: "wrapper" }, h("div", { key: "632b86d733ea490271b55e35709754f2ec45538f", class: {
      line: true,
      selected: this.selected,
      [this.status]: true,
      [this.position]: true
    } }), h("div", { key: "0f46b7b348bb7592b5fef581b8732ec6e6863c4d", class: "iconWrapper" }, icons, h("slot", { key: "051b8c00079203a2eb57a52104b54c2fc6107a86", name: "custom-icon" }))), h("div", { key: "d7048ea95b804bc074d35a20d39605928b4c0e93", class: "text" }, h("slot", { key: "e583bc0231a1aede593925c1f93ea5bb38020938" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["selectedHandler"],
      "disabled": ["watchPropHandler"],
      "status": ["watchPropHandler"]
    };
  }
};
WorkflowStep.style = IxWorkflowStepStyle0;
export {
  WorkflowStep as ix_workflow_step
};
