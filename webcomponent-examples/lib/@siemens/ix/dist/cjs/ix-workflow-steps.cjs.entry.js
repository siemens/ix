'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');

const workflowStepsCss = ".sc-ix-workflow-steps-h .steps.sc-ix-workflow-steps{display:flex}.sc-ix-workflow-steps-h .steps.vertical.sc-ix-workflow-steps{display:block}";

const WorkflowSteps = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.stepSelected = index.createEvent(this, "stepSelected", 7);
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
    return (index.h(index.Host, null, index.h("div", { class: { steps: true, vertical: this.vertical } }, index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
WorkflowSteps.style = workflowStepsCss;

exports.ix_workflow_steps = WorkflowSteps;
