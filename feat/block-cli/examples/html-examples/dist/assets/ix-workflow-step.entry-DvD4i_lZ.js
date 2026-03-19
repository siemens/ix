import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from "./global-C_dy4gBz.js";
import { K as iconCircle, b as iconError, a as iconWarning, L as iconCircleFilled, c as iconSuccess, M as iconCircleDot, N as iconTriangleFilled } from "./index-DFdo1y_u-D_8X33yw.js";
const workflowStepCss = () => `:host(:not(.host-vertical)){width:12rem;height:4rem;min-width:2rem;min-height:4rem;max-width:12rem}:host(.host-vertical){width:100%;height:4rem;min-width:4rem;min-height:2rem;max-height:12rem}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--theme-workflow-step--background);border-radius:var(--theme-workflow--border-radius);padding:1.125rem 0 0.5rem 0}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:0.125rem;background-color:var(--theme-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--theme-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--theme-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--theme-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--theme-color-warning)}:host .step .wrapper .line.success{background-color:var(--theme-color-success)}:host .step .wrapper .line.error{background-color:var(--theme-color-alarm)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:1rem;width:100%;padding:0 0.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:center}:host .step.vertical{flex-direction:row;padding:0;height:100%}:host .step.vertical .wrapper{width:auto;padding-left:1.125rem;height:100%}:host .step.vertical .wrapper .line{width:0.125rem;height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin:0 1rem;padding:0;width:auto}:host .step.clickable:hover{background-color:var(--theme-workflow-step--background--hover)}:host .step.clickable:active{background-color:var(--theme-workflow-step--background--active)}:host .step:focus-visible{outline:1px solid var(--focus--border-color);border-radius:0}:host .step.selected{background-color:var(--theme-workflow-step--background--selected)}:host .step.disabled{background-color:var(--theme-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--theme-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--theme-workflow-step--color--disabled)}`;
const WorkflowStep = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Select orientation
   */
  vertical = false;
  /**
   * Set disabled
   */
  disabled = false;
  /**
   * Set status
   */
  status = "open";
  /**
   * Activate navigation click
   */
  clickable = false;
  /**
   * Set selected
   */
  selected = false;
  /**
   * Activate navigation click
   *
   * @internal
   */
  position = "undefined";
  iconName;
  iconColor = "workflow-step-icon-default--color";
  /**
   * @internal
   */
  selectedChanged;
  customIconSlot = false;
  selectedHandler() {
    this.setWorkflowStepStyles();
  }
  watchPropHandler() {
    this.setWorkflowStepStyles();
  }
  setWorkflowStepStyles() {
    const selectedStyle = this.selected ? "--selected" : "";
    switch (this.status) {
      case "open":
        this.iconName = this.selected ? iconCircleDot : iconCircle;
        this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
        break;
      case "success":
        this.iconName = iconSuccess;
        this.iconColor = "color-success";
        break;
      case "done":
        this.iconName = iconCircleFilled;
        this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
        break;
      case "warning":
        this.iconName = iconWarning;
        this.iconColor = "color-warning-text";
        break;
      case "error":
        this.iconName = iconError;
        this.iconColor = "color-alarm";
        break;
      default:
        this.iconName = iconCircle;
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
  getIconAriaLabel() {
    switch (this.iconName) {
      case iconCircle:
        return "Circle";
      case iconCircleDot:
        return "Circle dot";
      case iconCircleFilled:
        return "Done";
      case iconError:
        return "Error";
      case iconSuccess:
        return "Success";
      case iconTriangleFilled:
        return "Warning";
      case iconWarning:
        return "Warning";
      default:
        return "Step";
    }
  }
  render() {
    const icons = !this.customIconSlot ? h(Fragment, null, h("ix-icon", { color: "color-1", name: this.status === "warning" ? iconTriangleFilled : iconCircleFilled, class: "absolute", size: "24" }), h("ix-icon", { color: this.iconColor, name: this.iconName, class: "absolute", size: "24", "aria-label": this.getIconAriaLabel() })) : null;
    return h(Host, { key: "192e9eae80949751a9499aae7e41836e33d21f53", class: { "host-vertical": this.vertical }, onClick: () => this.onStepClick() }, h("div", { key: "8e9c3cf84fdf99becce34fc62650c96053a4f8da", tabIndex: 0, class: {
      step: true,
      selected: this.selected,
      vertical: this.vertical,
      disabled: this.disabled,
      clickable: this.clickable && !this.disabled
    } }, h("div", { key: "58e3e489798f9cc4f240714950283668ee8d3c4d", class: "wrapper" }, h("div", { key: "76cf7ee19583a0f28342d052d9148d259f294b52", class: {
      line: true,
      selected: this.selected,
      [this.status]: true,
      [this.position]: true
    } }), h("div", { key: "39911600c4c467ac0f6842e70b54e9ed7dc56b41", class: "iconWrapper" }, icons, h("slot", { key: "1db94bf4652a797182927cc3eaca6202f8427c71", name: "custom-icon" }))), h("div", { key: "2be9f4164f2d6c3dce075763b037bfe0f47b1c74", class: "text" }, h("slot", { key: "cb2e8627b35c440ddde1358e180db339b1e29110" }))));
  }
  static get watchers() {
    return {
      "selected": [{
        "selectedHandler": 0
      }],
      "disabled": [{
        "watchPropHandler": 0
      }],
      "status": [{
        "watchPropHandler": 0
      }]
    };
  }
};
WorkflowStep.style = workflowStepCss();
export {
  WorkflowStep as ix_workflow_step
};
