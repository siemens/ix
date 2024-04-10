/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';

@Component({
  tag: 'ix-workflow-steps',
  styleUrl: 'workflow-steps.scss',
  shadow: true,
})
export class WorkflowSteps {
  @Element() hostElement!: HTMLIxWorkflowStepsElement;

  /**
   * Select orientation
   */
  @Prop() vertical: boolean = false;

  /**
   * Activate navigation click
   */
  @Prop() clickable: boolean = false;

  /**
   * Activate navigation click
   */
  @Prop() selectedIndex: number = 0;

  /**
   * On step selected event
   */
  @Event() stepSelected: EventEmitter<number>;

  private getSteps() {
    return Array.from(this.hostElement.querySelectorAll('ix-workflow-step'));
  }

  updateSteps() {
    let steps = this.getSteps();
    steps.forEach((element, index) => {
      element.vertical = this.vertical;
      element.clickable = this.clickable;
      element.selected = this.selectedIndex === index;

      if (steps.length === 1) {
        element.position = 'single';
        return;
      }

      if (index === 0) {
        element.position = 'first';
      } else if (index === steps.length - 1) {
        element.position = 'last';
      } else {
        element.position = 'undefined';
      }
    });
  }

  private observer: MutationObserver;

  @Listen('selectedChanged')
  onStepSelectionChanged(event: CustomEvent<HTMLIxWorkflowStepElement>) {
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
        if (mutation.type === 'childList') {
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
    return (
      <Host>
        <div class={{ steps: true, vertical: this.vertical }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
