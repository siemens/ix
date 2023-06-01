import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./index.8b470164.js";
import { c as createMutationObserver } from "./mutation-observer-7d01bbea.e6c38b94.js";
const workflowStepCss = ".sc-ix-workflow-step-h .step.sc-ix-workflow-step{display:flex;flex-direction:column;align-items:center;background-color:var(--theme-workflow-step--background);border-radius:var(--theme-workflow--border-radius);width:auto;padding:1.125rem 0 0.5rem 0;height:4rem;width:12.75rem}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step{display:flex;width:100%;align-items:center;justify-content:center;position:relative}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.sc-ix-workflow-step{width:100%;height:0.125rem;background-color:var(--theme-workflow-step-icon-default--color)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.first.sc-ix-workflow-step,.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.last.sc-ix-workflow-step{width:50%;margin:0 0 0 auto}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.last.sc-ix-workflow-step{margin:0 auto 0 0}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.single.sc-ix-workflow-step{width:0}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.selected.sc-ix-workflow-step{background-color:var(--theme-workflow-step-icon-default--color--selected)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.done.sc-ix-workflow-step{background-color:var(--theme-workflow-step-icon-done--color)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.done.selected.sc-ix-workflow-step{background-color:var(--theme-workflow-step-icon-done--color--selected)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.warning.sc-ix-workflow-step{background-color:var(--theme-color-warning)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.success.sc-ix-workflow-step{background-color:var(--theme-color-success)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.error.sc-ix-workflow-step{background-color:var(--theme-color-alarm)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .iconWrapper.sc-ix-workflow-step{display:flex;align-items:center;justify-content:center;position:absolute}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .iconWrapper.sc-ix-workflow-step .absolute.sc-ix-workflow-step{position:absolute}.sc-ix-workflow-step-h .step.sc-ix-workflow-step .text.sc-ix-workflow-step{margin-top:1rem;width:auto;padding:0 0.5rem}.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step{flex-direction:row;padding:0}.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step .wrapper.sc-ix-workflow-step{width:auto;padding-left:1.125rem;height:4rem}.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.sc-ix-workflow-step{width:0.125rem;height:100%}.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.first.sc-ix-workflow-step,.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.last.sc-ix-workflow-step{height:50%;margin:auto 0 0 0}.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.last.sc-ix-workflow-step{margin:0 0 auto 0}.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step .wrapper.sc-ix-workflow-step .line.single.sc-ix-workflow-step{width:0}.sc-ix-workflow-step-h .step.vertical.sc-ix-workflow-step .text.sc-ix-workflow-step{margin-top:0;margin-left:1rem;padding:0}.sc-ix-workflow-step-h .step.sc-ix-workflow-step:hover{background-color:var(--theme-workflow-step--background--hover)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step:active{background-color:var(--theme-workflow-step--background--active)}.sc-ix-workflow-step-h .step.sc-ix-workflow-step:focus-visible{outline:1px solid var(--focus--border-color);border-radius:0}.sc-ix-workflow-step-h .step.selected.sc-ix-workflow-step{background-color:var(--theme-workflow-step--background--selected)}.sc-ix-workflow-step-h .step.disabled.sc-ix-workflow-step{background-color:var(--theme-workflow-step--background--disabled)}.sc-ix-workflow-step-h .step.disabled.sc-ix-workflow-step .line.sc-ix-workflow-step{background-color:var(--theme-workflow-step-icon-default--color--disabled) !important}.sc-ix-workflow-step-h .step.disabled.sc-ix-workflow-step .text.sc-ix-workflow-step{color:var(--theme-workflow-step--color--disabled)}";
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
  select() {
    if (!this.clickable)
      return;
    if (this.disabled)
      return;
    this.selected = true;
    this.selectedHandler();
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
  componentDidLoad() {
    this.watchPropHandler();
    this.selectedHandler();
    this.customIconSlot = !!this.hostElement.querySelector('[slot="custom-icon"]');
  }
  clickFunction() {
    if (!this.disabled && this.clickable) {
      this.selectedChanged.emit(this.hostElement);
    }
  }
  render() {
    const icons = !this.customIconSlot ? h(Fragment, null, h("ix-icon", { color: "color-1", name: this.iconName === "warning" ? "triangle-filled" : "circle-filled", class: "absolute", size: "24" }), h("ix-icon", { color: this.iconColor, name: this.iconName, class: "absolute", size: "24" })) : "";
    return h(Host, null, h("div", { tabIndex: 0, onClick: () => this.select(), class: {
      step: true,
      selected: this.selected,
      vertical: this.vertical,
      disabled: this.disabled
    } }, h("div", { class: "wrapper" }, h("div", { class: {
      line: true,
      selected: this.selected,
      [this.status]: true,
      [this.position]: true
    } }), h("div", { class: "iconWrapper" }, icons, h("slot", { name: "custom-icon" }))), h("div", { class: "text" }, h("slot", null))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["selectedHandler"],
      "status": ["watchPropHandler"]
    };
  }
};
WorkflowStep.style = workflowStepCss;
const workflowStepsCss = ".sc-ix-workflow-steps-h .steps.sc-ix-workflow-steps{display:flex}.sc-ix-workflow-steps-h .steps.vertical.sc-ix-workflow-steps{display:block}";
const WorkflowSteps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stepSelected = createEvent(this, "stepSelected", 7);
    this.vertical = false;
    this.linear = false;
    this.clickable = false;
    this.selectedIndex = 0;
  }
  getSteps() {
    return Array.from(this.hostElement.querySelectorAll("ix-workflow-step"));
  }
  get stepsContent() {
    return this.hostElement.querySelector(".steps");
  }
  updateSteps() {
    let steps = this.getSteps();
    steps.forEach((element, index) => {
      element.vertical = this.vertical;
      element.clickable = this.clickable;
      element.selected = this.selectedIndex === index;
      if (steps.length === 1) {
        element.position = "single";
        return;
      }
      if (index === 0) {
        element.position = "first";
      } else if (index === steps.length - 1) {
        element.position = "last";
      } else {
        element.position = "undefined";
      }
    });
  }
  componentDidLoad() {
    this.stepsContent.addEventListener("selectedChanged", (event) => {
      const steps = this.getSteps();
      steps.forEach((element) => {
        if (element !== event.target) {
          element.selected = false;
        }
      });
    });
    const slotDiv = this.hostElement.querySelector(".steps");
    this.observer = createMutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type === "childList") {
          this.updateSteps();
        }
      }
    });
    this.observer.observe(slotDiv, { childList: true });
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  componentDidRender() {
    this.updateSteps();
  }
  render() {
    return h(Host, null, h("div", { class: { steps: true, vertical: this.vertical } }, h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
};
WorkflowSteps.style = workflowStepsCss;
export {
  WorkflowStep as ix_workflow_step,
  WorkflowSteps as ix_workflow_steps
};
