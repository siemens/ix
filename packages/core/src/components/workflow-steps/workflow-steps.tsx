/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
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

  private getSteps() {
    return Array.from(this.hostElement.querySelectorAll('ix-workflow-step'));
  }

  get stepsContent() {
    return this.hostElement.querySelector('.steps');
  }

  styling() {
    let steps = this.getSteps();
    steps.forEach((element, index) => {
      element.vertical = this.vertical;
      element.clickable = this.clickable;
      element.selected = this.selectedIndex === index;

      if (steps.length === 1) {
        element.position = 'single';
        return;
      }
      if (steps.length > 1 && (index === 0 || index === steps.length - 1)) {
        if (index === 0) element.position = 'first';
        if (index === steps.length - 1) element.position = 'last';
      } else element.position = 'undefined';
    });
  }

  private observer: MutationObserver;

  componentDidLoad() {
    this.stepsContent.addEventListener(
      'selectedChanged',
      (event: CustomEvent<HTMLIxWorkflowStepElement>) => {
        const steps = this.getSteps();
        steps.forEach((element) => {
          if (element !== event.target) {
            element.selected = false;
          }
        });
      }
    );

    const slotDiv = this.hostElement.querySelector('.steps');

    this.observer = createMutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          this.styling();
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
    this.styling();
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
