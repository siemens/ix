import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from "./global-Do6maBom.js";
import { Z as iconCircle, b as iconError, c as iconWarning, h as iconCircleFilled, a as iconSuccess, _ as iconCircleDot, l as iconTriangleFilled } from "./index-BeX6RWvV-CXzUIwMU.js";
const workflowStepCss = () => `@charset "UTF-8";:host{--ix-workflow-step-line--background--warning:var(--si-sys-text-warning);--ix-workflow-step-line--background--success:var(--si-sys-text-success);--ix-workflow-step-line--background--error:var(--si-sys-text-danger);--ix-workflow-step--border-radius:1px;--ix-workflow-step--background:rgba(0, 0, 0, 0);--ix-workflow-step--background--active:var(--si-sys-background-accent-secondary-active);--ix-workflow-step--background--disabled:rgba(0, 0, 0, 0);--ix-workflow-step--background--hover:var(--si-sys-background-hover);--ix-workflow-step--background--selected:var(--si-sys-background-accent-secondary-active);--ix-workflow-step--color--disabled:var(--si-sys-text-disabled);--ix-workflow-step-icon-default--color:var(--si-sys-text-secondary);--ix-workflow-step-icon-default--color--disabled:var(--si-sys-text-disabled);--ix-workflow-step-icon-default--color--selected:var(--si-sys-text-accent-hover);--ix-workflow-step-icon-done--color:var(--si-sys-text-accent);--ix-workflow-step-icon-error--color:var(--si-sys-text-danger);--ix-workflow-step-icon-success--color:var(--si-sys-text-success);--ix-workflow-step-icon-warning--color:var(--si-sys-text-warning);--ix-workflow-step-icon-done--color--selected:var(--si-sys-text-accent);--ix-workflow-step-icon-status--color--disabled:var(--si-sys-text-disabled)}:host(:not(.host-vertical)){width:12rem;height:4rem;min-width:2rem;min-height:4rem;max-width:12rem}:host(.host-vertical){width:100%;height:4rem;min-width:4rem;min-height:2rem;max-height:12rem}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--ix-workflow-step--background);border-radius:var(--ix-workflow-step--border-radius);padding:1.125rem 0 0.5rem 0}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:0.125rem;background-color:var(--ix-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--ix-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--ix-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--ix-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--ix-workflow-step-line--background--warning)}:host .step .wrapper .line.success{background-color:var(--ix-workflow-step-line--background--success)}:host .step .wrapper .line.error{background-color:var(--ix-workflow-step-line--background--error)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:1rem;width:100%;padding:0 0.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:center}:host .step.vertical{flex-direction:row;padding:0;height:100%}:host .step.vertical .wrapper{width:auto;padding-left:1.125rem;height:100%}:host .step.vertical .wrapper .line{width:0.125rem;height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin:0 1rem;padding:0;width:auto}:host .step.clickable:hover{background-color:var(--ix-workflow-step--background--hover)}:host .step.clickable:active{background-color:var(--ix-workflow-step--background--active)}:host .step:focus-visible{outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--theme-focus-outline-offset)}:host .step.selected{background-color:var(--ix-workflow-step--background--selected)}:host .step.disabled{background-color:var(--ix-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--ix-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--ix-workflow-step--color--disabled)}`;
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
        this.iconColor = "workflow-step-icon-success--color";
        break;
      case "done":
        this.iconName = iconCircleFilled;
        this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
        break;
      case "warning":
        this.iconName = iconWarning;
        this.iconColor = "workflow-step-icon-warning--color";
        break;
      case "error":
        this.iconName = iconError;
        this.iconColor = "workflow-step-icon-error--color";
        break;
      default:
        this.iconName = iconCircle;
        break;
    }
    if (this.disabled) {
      this.iconColor = "workflow-step-icon-status--color--disabled";
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
  onKeyDown(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      this.onStepClick();
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
    const icons = !this.customIconSlot ? h(Fragment, null, h("ix-icon", { color: "--si-sys-background-0", name: this.status === "warning" ? iconTriangleFilled : iconCircleFilled, class: "absolute", size: "24", "aria-hidden": "true" }), h("ix-icon", { style: { color: `var(--ix-${this.iconColor})` }, name: this.iconName, class: "absolute", size: "24", "aria-label": this.getIconAriaLabel() })) : null;
    return h(Host, { key: "ee9fd0da82aa0bf68e6a431b4792797d01dc32f2", class: { "host-vertical": this.vertical } }, h("div", { key: "fcd916fff4afd0ab19b234d7b51a93fc5a1a3922", tabIndex: this.disabled || !this.clickable ? -1 : 0, role: this.clickable ? "button" : void 0, "aria-disabled": this.disabled ? "true" : void 0, "aria-current": this.selected ? "step" : void 0, onClick: () => this.onStepClick(), onKeyDown: (e) => this.onKeyDown(e), class: {
      step: true,
      selected: this.selected,
      vertical: this.vertical,
      disabled: this.disabled,
      clickable: this.clickable && !this.disabled
    } }, h("div", { key: "1367675647f205553124872b29aa24dd0675fc78", class: "wrapper" }, h("div", { key: "1a6b3afb1142d9a89879a61011da2764d0d0f3bc", class: {
      line: true,
      selected: this.selected,
      [this.status]: true,
      [this.position]: true
    } }), h("div", { key: "3e96968f6ed18a087a8879f6e9f392145f84d9ef", class: "iconWrapper" }, icons, h("slot", { key: "952980fa990d1c0ccf34fedeed2f7449afbe999c", name: "custom-icon" }))), h("div", { key: "9e82e4d17740be6b2358c1d29cfe9b5d14325340", class: "text" }, h("slot", { key: "d90964af2c4b04c272397b0f7e251964283069e3" }))));
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
