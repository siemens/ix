/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true,
})
export class ProgressBar {
  @Element() el: HTMLIxProgressBarElement;

  /**
   * Progress bar variant
   */
  @Prop({ reflect: true }) variant:
    | 'primary'
    | 'alarm'
    | 'critical'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'success' = 'primary';

  /**
   * Progress value in percentage (0-100)
   */
  @Prop({ reflect: true }) value: string | number = 0;

  /**
   * Disable progress value change animation
   */
  @Prop({ reflect: true }) disableAnimation = false;

  private ceilProgressValue() {
    if (isNaN(+this.value)) {
      console.warn("Invalid value passed as 'value'");
      return 0;
    }

    const progress = +this.value;

    if (progress < 0) {
      return 0;
    }

    if (progress > 100) {
      return 100;
    }

    return progress;
  }

  render() {
    const ceiledValue = this.ceilProgressValue();
    const customProgressStyle = {
      'background-color': `var(--theme-color-${this.variant}${
        ceiledValue === 100 ? '--active' : ''
      })`,
      width: `${ceiledValue}%`,
      transition: `width ${
        this.disableAnimation ? '0' : '1'
      }s, background-color ${this.disableAnimation ? '0' : '1'}s`,
    };

    return (
      <Host title={this.el.textContent}>
        <div
          class="progress-bar"
          aria-valuenow={ceiledValue}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        >
          <div class="progress" style={{ ...customProgressStyle }}></div>
        </div>
      </Host>
    );
  }
}
