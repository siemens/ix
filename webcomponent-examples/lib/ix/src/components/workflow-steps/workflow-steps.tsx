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

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

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
      element.setAttribute('selected', 'false');
    });
  }

  componentDidRender() {
    const steps = this.getSteps();

    steps.forEach((element, index) => {
      element.setAttribute(
        'vertical',
        this.vertical === true ? 'true' : 'false'
      );
      element.setAttribute(
        'clickable',
        this.clickable === true ? 'true' : 'false'
      );
      element.setAttribute(
        'selected',
        this.selectedIndex === index ? 'true' : 'false'
      );
      if (index === 0) element.setAttribute('position', 'first');
      if (index === steps.length - 1) element.setAttribute('position', 'last');
    });
  }

  componentWillRender() {
    const steps = this.getSteps();
    steps.forEach((element, index) => {
      element.addEventListener('click', () => {
        if (!this.clickable) return;
        const previousElement = steps[index - 1];
        if (
          this.linear &&
          previousElement &&
          !['done', 'success'].includes(previousElement?.status)
        ) {
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
    return (
      <Host>
        <div class={{ steps: true, vertical: this.vertical }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
