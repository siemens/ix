import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const workflowStepsCss = ".sc-ix-workflow-steps-h .steps.sc-ix-workflow-steps{display:flex}.sc-ix-workflow-steps-h .steps.vertical.sc-ix-workflow-steps{display:block}";

const WorkflowSteps = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.stepSelected = createEvent(this, "stepSelected", 7);
    /**
     * Select orientation
     */
    this.vertical = false;
    /**
     * Select linear mode
     */
    this.linear = false;
    /**
     * Activate navigation click
     */
    this.clickable = false;
    /**
     * Activate navigation click
     */
    this.selectedIndex = 0;
  }
  getSteps() {
    return Array.from(this.hostElement.querySelectorAll('ix-workflow-step'));
  }
  deselectAll() {
    const steps = this.getSteps();
    steps.forEach((element) => {
      element.setAttribute('selected', 'false');
    });
  }
  componentDidRender() {
    const steps = this.getSteps();
    steps.forEach((element, index) => {
      element.setAttribute('vertical', this.vertical === true ? 'true' : 'false');
      element.setAttribute('clickable', this.clickable === true ? 'true' : 'false');
      element.setAttribute('selected', this.selectedIndex === index ? 'true' : 'false');
      if (index === 0)
        element.setAttribute('position', 'first');
      if (index === steps.length - 1)
        element.setAttribute('position', 'last');
    });
  }
  componentWillRender() {
    const steps = this.getSteps();
    steps.forEach((element, index) => {
      element.addEventListener('click', () => {
        if (!this.clickable)
          return;
        const previousElement = steps[index - 1];
        if (this.linear &&
          previousElement &&
          !['done', 'success'].includes(previousElement === null || previousElement === void 0 ? void 0 : previousElement.status)) {
          return element.setAttribute('selected', 'false');
        }
        this.deselectAll();
        element.setAttribute('selected', 'true');
        this.stepSelected.emit(index);
      });
      // const isEnabled = element.getAttribute('first');
      // if(isEnabled){
      // }
      // console.log(isEnabled)
      // const isDisabled = element.getAttribute('disabled') !== null;
      // if (!isDisabled) element.addEventListener('click', () => '');
      //element.addEventListener('mousedown', event => this.clicked(element, index));
    });
  }
  render() {
    return (h(Host, null, h("div", { class: { steps: true, vertical: this.vertical } }, h("slot", null))));
  }
  get hostElement() { return this; }
  static get style() { return workflowStepsCss; }
}, [6, "ix-workflow-steps", {
    "vertical": [4],
    "linear": [4],
    "clickable": [4],
    "selectedIndex": [2, "selected-index"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-workflow-steps"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-workflow-steps":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, WorkflowSteps);
      }
      break;
  } });
}

const IxWorkflowSteps = WorkflowSteps;
const defineCustomElement = defineCustomElement$1;

export { IxWorkflowSteps, defineCustomElement };
