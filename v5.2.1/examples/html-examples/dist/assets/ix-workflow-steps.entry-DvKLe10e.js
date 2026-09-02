import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
const workflowStepsCss = () => `@charset "UTF-8";:host{display:block;position:relative;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;min-width:2rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .steps{display:flex;height:100%}:host .steps.vertical{flex-direction:column}`;
const WorkflowSteps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stepSelected = createEvent(this, "stepSelected", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Select orientation
   */
  vertical = false;
  /**
   * Activate navigation click
   */
  clickable = false;
  /**
   * Activate navigation click
   */
  selectedIndex = 0;
  /**
   * On step selected event
   */
  stepSelected;
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
  observer;
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
    return h(Host, { key: "eb61c6a3bda57b167cd07dc1aeccea218e0f80ce" }, h("div", { key: "a8c22b5ccb336026cfe3f2eebe3e6e15c67857e0", class: { steps: true, vertical: this.vertical } }, h("slot", { key: "51329b8d8251940bcd1ebc1a14d0de1d9c14a96b" })));
  }
};
WorkflowSteps.style = workflowStepsCss();
export {
  WorkflowSteps as ix_workflow_steps
};
