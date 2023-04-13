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
  scoped: true,
})
export class WorkflowSteps {
  @Element() hostElement!: HTMLIxWorkflowStepsElement;

  /**
   * Select orientation
   */
  @Prop() vertical: boolean = false;

  /**
   * Select linear mode
   */
  @Prop() linear: boolean = false;

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

  private observer: MutationObserver;

  private getSteps() {
    return Array.from(this.hostElement.querySelectorAll('ix-workflow-step'));
  }

  get stepsContent() {
    return this.hostElement.querySelector('.steps');
  }

  changeWorkflowStepAttributes() {
    let steps = this.getSteps();
    steps.forEach((step, index) => {
      step.vertical = this.vertical;
      step.clickable = this.clickable;
      step.selected = this.selectedIndex === index;

      if (steps.length === 1) {
        step.position = 'single';
        return;
      }
      if (steps.length > 1 && (index === 0 || index === steps.length - 1)) {
        if (index === 0) step.position = 'first';
        if (index === steps.length - 1) step.position = 'last';
      } else step.position = 'undefined';
    });
  }

  componentDidLoad() {
    const slotDiv = this.hostElement.querySelector('.steps');

    this.observer = createMutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          this.changeWorkflowStepAttributes();
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
    this.changeWorkflowStepAttributes();
  }

  @Listen('click', {
    passive: false,
  })
  onClickEvent(event: Event) {
    const path = event.composedPath();
    const [targetStep] = path.filter(
      (element) => (element as HTMLElement).tagName === 'IX-WORKFLOW-STEP'
    );

    if (!targetStep) {
      return;
    }

    this.selectStepElement(targetStep as HTMLIxWorkflowStepElement);
  }

  private selectStepElement(stepToSelect: HTMLIxWorkflowStepElement) {
    const steps = this.getSteps();
    steps.forEach((element) => {
      element.selected = element === stepToSelect;
    });
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
