/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { h, Host, } from '@stencil/core';
export class WorkflowSteps {
  constructor() {
    this.vertical = false;
    this.linear = false;
    this.clickable = false;
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
  static get is() { return "ix-workflow-steps"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["workflow-steps.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["workflow-steps.css"]
    };
  }
  static get properties() {
    return {
      "vertical": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Select orientation"
        },
        "attribute": "vertical",
        "reflect": false,
        "defaultValue": "false"
      },
      "linear": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Select linear mode"
        },
        "attribute": "linear",
        "reflect": false,
        "defaultValue": "false"
      },
      "clickable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Activate navigation click"
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "selectedIndex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Activate navigation click"
        },
        "attribute": "selected-index",
        "reflect": false,
        "defaultValue": "0"
      }
    };
  }
  static get events() {
    return [{
        "method": "stepSelected",
        "name": "stepSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "On step selected event"
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
}
