import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
const workflowStepsCss = ":host{display:block;position:relative;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;min-width:2rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .steps{display:flex;height:100%}:host .steps.vertical{flex-direction:column}";
const IxWorkflowStepsStyle0 = workflowStepsCss;
const WorkflowSteps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stepSelected = createEvent(this, "stepSelected", 7);
    this.vertical = false;
    this.clickable = false;
    this.selectedIndex = 0;
  }
  getSteps() {
    return Array.from(this.hostElement.querySelectorAll("ix-workflow-step"));
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
  onStepSelectionChanged(event) {
    const eventTarget = event.detail;
    const steps = this.getSteps();
    const clickIndex = steps.findIndex((step) => step === eventTarget);
    const clientEvent = this.stepSelected.emit(clickIndex);
    if (clientEvent.defaultPrevented) {
      return;
    }
    steps.forEach((step, index) => {
      step.selected = index === clickIndex;
    });
  }
  componentWillLoad() {
    this.updateSteps();
  }
  componentDidLoad() {
    this.observer = createMutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type === "childList") {
          this.updateSteps();
        }
      }
    });
    this.observer.observe(this.hostElement, { childList: true });
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
    return h(Host, { key: "b1c24f42786d7086e8db94ae37e667716ec1345c" }, h("div", { key: "62fbf3c6c51d00e3bea9d3ec251324e8db147aa4", class: { steps: true, vertical: this.vertical } }, h("slot", { key: "7fee89ab9c086a56f1ba4d47cefe2566007b374a" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
WorkflowSteps.style = IxWorkflowStepsStyle0;
export {
  WorkflowSteps as ix_workflow_steps
};
