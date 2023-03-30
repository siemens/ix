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

  private deselectAll() {
    const steps = this.getSteps();
    steps.forEach((element) => {
      element.selected = false;
    });
  }

  clickListener(steps, element, index) {
    element.addEventListener('click', () => {
      if (!this.clickable) return;
      const previousElement = steps[index - 1];
      if (
        this.linear &&
        previousElement &&
        !['done', 'success'].includes(previousElement?.status)
      ) {
        return (element.selected = false);
      }
      this.deselectAll();
      element.selected = true;
      this.stepSelected.emit(index);
    });
  }

  styling() {
    let steps = this.getSteps();
    steps.forEach((element, index) => {
      this.clickListener(steps, element, index);

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

      element.addEventListener('click', () => {
        if (!this.clickable) return;
        const previousElement = steps[index - 1];
        if (
          this.linear &&
          previousElement &&
          !['done', 'success'].includes(previousElement?.status)
        ) {
          return (element.selected = false);
        }
        this.deselectAll();
        element.selected = true;
        this.stepSelected.emit(index);
      });
    });
  }

  private observer: MutationObserver;

  componentDidLoad() {
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
