import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from "./index-CgUi6DzV-CNdMQz6S.js";
import { U as iconCircle, a as iconError, f as iconWarning, V as iconCircleFilled, b as iconSuccess, W as iconCircleDot, X as iconTriangleFilled } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import "./preload-helper-UZRgTS1n.js";
const workflowStepCss = () => `@charset "UTF-8";:host{--ix-workflow-step-line--background--warning:var(--si-sys-color-text-warning);--ix-workflow-step-line--background--success:var(--si-sys-color-text-success);--ix-workflow-step-line--background--error:var(--si-sys-color-text-danger);--ix-workflow-step--background:rgba(0, 0, 0, 0);--ix-workflow-step--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-workflow-step--background--disabled:rgba(0, 0, 0, 0);--ix-workflow-step--background--hover:var(--si-sys-color-background-hover);--ix-workflow-step--background--selected:var(--si-sys-color-background-accent-secondary-active);--ix-workflow-step--color--disabled:var(--si-sys-color-text-disabled);--ix-workflow-step-icon-default--color:var(--si-sys-color-text-secondary);--ix-workflow-step-icon-default--color--disabled:var(--si-sys-color-text-disabled);--ix-workflow-step-icon-default--color--selected:var(--si-sys-color-text-accent-active);--ix-workflow-step-icon-default--color--selected--hover:var(--si-sys-color-text-accent-active);--ix-workflow-step-icon-default--color--selected--active:var(--si-sys-color-text-accent-active);--ix-workflow-step-icon-done--color:var(--si-sys-color-text-accent);--ix-workflow-step-icon-done--color--hover:var(--si-sys-color-text-accent-hover);--ix-workflow-step-icon-done--color--active:var(--si-sys-color-text-accent-active);--ix-workflow-step-icon-error--color:var(--si-sys-color-text-danger);--ix-workflow-step-icon-success--color:var(--si-sys-color-text-success);--ix-workflow-step-icon-warning--color:var(--si-sys-color-text-warning);--ix-workflow-step-icon-done--color--selected:var(--si-sys-color-text-accent-active);--ix-workflow-step-icon-done--color--selected--hover:var(--si-sys-color-text-accent-active);--ix-workflow-step-icon-done--color--selected--active:var(--si-sys-color-text-accent-active);--ix-workflow-step-icon-status--color--disabled:var(--si-sys-color-text-disabled);--ix-workflow-step-step--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-workflow-step--border-radius:calc(var(--si-sys-sizing-border-radius-xs) / 2);--ix-workflow-step--width--horizontal:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-90));--ix-workflow-step--height:var(--si-sys-sizing-size-110);--ix-workflow-step--min-width--horizontal:var(--si-sys-sizing-size-80);--ix-workflow-step--min-height--horizontal:var(--si-sys-sizing-size-110);--ix-workflow-step--max-width--horizontal:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-90));--ix-workflow-step--min-width--vertical:var(--si-sys-sizing-size-110);--ix-workflow-step--min-height--vertical:var(--si-sys-sizing-size-80);--ix-workflow-step--max-height--vertical:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-90));--ix-workflow-step-step--padding:calc(var(--si-sys-sizing-spacing-y-60) + var(--si-sys-sizing-spacing-y-10)) 0 var(--si-sys-sizing-spacing-y-40) 0;--ix-workflow-step-text--margin-top:var(--si-sys-sizing-spacing-y-60);--ix-workflow-step-text--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-workflow-step-wrapper--padding-left--vertical:calc(var(--si-sys-sizing-spacing-x-60) + var(--si-sys-sizing-spacing-x-10));--ix-workflow-step-text--margin--vertical:0 var(--si-sys-sizing-spacing-x-60);--ix-workflow-step-line--height:var(--si-sys-sizing-size-10);--ix-workflow-step-line--width:var(--si-sys-sizing-size-10);--ix-workflow-step--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-workflow-step-step--outline-offset:calc(-1 * var(--ix-workflow-step--outline-width--focus))}:host(:not(.host-vertical)){width:var(--ix-workflow-step--width--horizontal);height:var(--ix-workflow-step--height);min-width:var(--ix-workflow-step--min-width--horizontal);min-height:var(--ix-workflow-step--min-height--horizontal);max-width:var(--ix-workflow-step--max-width--horizontal)}:host(.host-vertical){width:100%;height:var(--ix-workflow-step--height);min-width:var(--ix-workflow-step--min-width--vertical);min-height:var(--ix-workflow-step--min-height--vertical);max-height:var(--ix-workflow-step--max-height--vertical)}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--ix-workflow-step--background);border-radius:var(--ix-workflow-step--border-radius);padding:var(--ix-workflow-step-step--padding)}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:var(--ix-workflow-step-line--height);background-color:var(--ix-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--ix-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--ix-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--ix-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--ix-workflow-step-line--background--warning)}:host .step .wrapper .line.success{background-color:var(--ix-workflow-step-line--background--success)}:host .step .wrapper .line.error{background-color:var(--ix-workflow-step-line--background--error)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:var(--ix-workflow-step-text--margin-top);width:100%;padding:var(--ix-workflow-step-text--padding);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:center}:host .step.vertical{flex-direction:row;padding:0;height:100%}:host .step.vertical .wrapper{width:auto;padding-left:var(--ix-workflow-step-wrapper--padding-left--vertical);height:100%}:host .step.vertical .wrapper .line{width:var(--ix-workflow-step-line--width);height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin:var(--ix-workflow-step-text--margin--vertical);padding:0;width:auto}:host .step.clickable:hover{background-color:var(--ix-workflow-step--background--hover);--ix-workflow-step-icon-default--color--selected:var(--ix-workflow-step-icon-default--color--selected--hover);--ix-workflow-step-icon-done--color:var(--ix-workflow-step-icon-done--color--hover);--ix-workflow-step-icon-done--color--selected:var(--ix-workflow-step-icon-done--color--selected--hover)}:host .step.clickable:active{background-color:var(--ix-workflow-step--background--active);--ix-workflow-step-icon-default--color--selected:var(--ix-workflow-step-icon-default--color--selected--active);--ix-workflow-step-icon-done--color:var(--ix-workflow-step-icon-done--color--active);--ix-workflow-step-icon-done--color--selected:var(--ix-workflow-step-icon-done--color--selected--active)}:host .step:focus-visible{outline:var(--ix-workflow-step--outline-width--focus) solid var(--ix-workflow-step-step--outline-color--focus);outline-offset:var(--ix-workflow-step-step--outline-offset)}:host .step.selected{background-color:var(--ix-workflow-step--background--selected)}:host .step.disabled{background-color:var(--ix-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--ix-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--ix-workflow-step--color--disabled)}:host .step .status-icon{color:var(--ix-workflow-step-icon-default--color)}:host .step .status-icon.success{color:var(--ix-workflow-step-icon-success--color)}:host .step .status-icon.done{color:var(--ix-workflow-step-icon-done--color)}:host .step .status-icon.warning{color:var(--ix-workflow-step-icon-warning--color)}:host .step .status-icon.error{color:var(--ix-workflow-step-icon-error--color)}:host .step.selected .status-icon.open{color:var(--ix-workflow-step-icon-default--color--selected)}:host .step.selected .status-icon.done{color:var(--ix-workflow-step-icon-done--color--selected)}:host .step.disabled .iconWrapper .status-icon{color:var(--ix-workflow-step-icon-status--color--disabled)}`;
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
    switch (this.status) {
      case "open":
        this.iconName = this.selected ? iconCircleDot : iconCircle;
        break;
      case "success":
        this.iconName = iconSuccess;
        break;
      case "done":
        this.iconName = iconCircleFilled;
        break;
      case "warning":
        this.iconName = iconWarning;
        break;
      case "error":
        this.iconName = iconError;
        break;
      default:
        this.iconName = iconCircle;
        break;
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
    const icons = !this.customIconSlot ? h(Fragment, null, h("ix-icon", { color: "--si-sys-color-background-0", name: this.status === "warning" ? iconTriangleFilled : iconCircleFilled, class: "absolute", "aria-hidden": "true" }), h("ix-icon", { name: this.iconName, class: { absolute: true, "status-icon": true, [this.status]: true }, "aria-label": this.getIconAriaLabel() })) : null;
    return h(Host, { key: "3791ef2880c87ac55e4b8df12e61b924ecadc1a1", class: { "host-vertical": this.vertical } }, h("div", { key: "a64e6bc5dc8553abe1b71447150d7f57c4be0b52", tabIndex: this.disabled || !this.clickable ? -1 : 0, role: this.clickable ? "button" : void 0, "aria-disabled": this.disabled ? "true" : void 0, "aria-current": this.selected ? "step" : void 0, onClick: () => this.onStepClick(), onKeyDown: (e) => this.onKeyDown(e), class: {
      step: true,
      selected: this.selected,
      vertical: this.vertical,
      disabled: this.disabled,
      clickable: this.clickable && !this.disabled
    } }, h("div", { key: "ed8b4c0f10f097dd6c83e48e6861d73a6b88f7ca", class: "wrapper" }, h("div", { key: "fce7c016d8cde4179cf0851c823fa7c6cedf0838", class: {
      line: true,
      selected: this.selected,
      [this.status]: true,
      [this.position]: true
    } }), h("div", { key: "4a5e0bda3763b7ee953f1b07da32e86a8c50baee", class: "iconWrapper" }, icons, h("slot", { key: "e8f8f6342c282d7c122961fbb735d3a8ea1f271a", name: "custom-icon" }))), h("div", { key: "ca01b44905eeb233c5d6248edbc5ff76e426afc0", class: "text" }, h("slot", { key: "7b0c7fd2c8de20757cb41cdf268541f104188178" }))));
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
