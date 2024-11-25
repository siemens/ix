import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.2bfd6008.js";
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
    return h(Host, { key: "052bc92640371b56974c12c8b07b49cc24233a4f" }, h("div", { key: "00d19de2fda034b1024c0a793e46ad401eed46ee", class: { steps: true, vertical: this.vertical } }, h("slot", { key: "4a6a73538d83c4d8f49c2404dadc5e130e6ba6e7" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
WorkflowSteps.style = IxWorkflowStepsStyle0;
export {
  WorkflowSteps as ix_workflow_steps
};
