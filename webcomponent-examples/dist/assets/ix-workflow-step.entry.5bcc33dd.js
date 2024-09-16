import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global.00f6d77e.js";
const workflowStepCss = ":host(:not(.host-vertical)){width:12rem;height:4rem;min-width:2rem;min-height:4rem;max-width:12rem}:host(.host-vertical){width:100%;height:4rem;min-width:4rem;min-height:2rem;max-height:12rem}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--theme-workflow-step--background);border-radius:var(--theme-workflow--border-radius);padding:1.125rem 0 0.5rem 0}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:0.125rem;background-color:var(--theme-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--theme-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--theme-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--theme-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--theme-color-warning)}:host .step .wrapper .line.success{background-color:var(--theme-color-success)}:host .step .wrapper .line.error{background-color:var(--theme-color-alarm)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:1rem;width:100%;padding:0 0.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:center}:host .step.vertical{flex-direction:row;padding:0;height:100%}:host .step.vertical .wrapper{width:auto;padding-left:1.125rem;height:100%}:host .step.vertical .wrapper .line{width:0.125rem;height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin:0 1rem;padding:0;width:auto}:host .step.clickable:hover{background-color:var(--theme-workflow-step--background--hover)}:host .step.clickable:active{background-color:var(--theme-workflow-step--background--active)}:host .step:focus-visible{outline:1px solid var(--focus--border-color);border-radius:0}:host .step.selected{background-color:var(--theme-workflow-step--background--selected)}:host .step.disabled{background-color:var(--theme-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--theme-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--theme-workflow-step--color--disabled)}";
const IxWorkflowStepStyle0 = workflowStepCss;
const WorkflowStep = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
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
    return h(Host, { key: "d4e68cd7e2eb915e8e8f7d09b0c62a6a8af119d2", class: { "host-vertical": this.vertical }, onClick: () => this.onStepClick() }, h("div", { key: "de386fc5cde68f15a663726b1133e9cfa08a742a", tabIndex: 0, class: {
      step: true,
      selected: this.selected,
      vertical: this.vertical,
      disabled: this.disabled,
      clickable: this.clickable && !this.disabled
    } }, h("div", { key: "2399853ee54da5c2bdc15b7392634cf2611ea748", class: "wrapper" }, h("div", { key: "5da5862fa6295670b1ba3b3f2811a46c91cb4001", class: {
      line: true,
      selected: this.selected,
      [this.status]: true,
      [this.position]: true
    } }), h("div", { key: "a419c64f356fb6ea53d148669de0bba0d160f61d", class: "iconWrapper" }, icons, h("slot", { key: "7834816f2573a75da4dd55ccccf4eee69d2ed9bf", name: "custom-icon" }))), h("div", { key: "75e4924fe9eab8b4db9147ac7700a9a50ce73b9a", class: "text" }, h("slot", { key: "8bb8981bb1ee9c0f3e43f82d5771cc1fccec44db" }))));
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
