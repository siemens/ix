/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-kpi',
  styleUrl: 'kpi.scss',
  shadow: true,
})
export class Kpi {
  /**
   *
   */
  @Prop() label?: string;

  /**
   *
   */
  @Prop() value?: string | number;

  /**
   *
   */
  @Prop() unit?: string;

  /**
   *
   */
  @Prop() state?: 'neutral' | 'warning' | 'alarm' = 'neutral';

  /**
   *
   */
  @Prop() orientation?: 'horizontal' | 'vertical' = 'horizontal';

  private getStateIcon() {
    switch (this.state) {
      case 'alarm':
        return (
          <ix-icon
            color="kpi-display-icon--color"
            name={'alarm'}
            size="16"
          ></ix-icon>
        );

      case 'warning':
        return (
          <ix-icon
            color="kpi-display-icon--color"
            name={'warning'}
            size="16"
          ></ix-icon>
        );

      default:
        return '';
    }
  }

  private getTooltipText() {
    let tooltip = `${this.label}: ${this.value}`;

    if (this.unit) {
      tooltip = tooltip.concat(` ${this.unit}`);
    }

    return tooltip;
  }

  render() {
    return (
      <Host
        title={this.getTooltipText()}
        tabindex="1"
        class={{
          stacked: this.orientation === 'vertical',
        }}
      >
        <div
          class={{
            'kpi-container': true,
            alarm: this.state === 'alarm',
            warning: this.state === 'warning',
          }}
        >
          <span class="kpi-label">
            {this.getStateIcon()}
            <span class="kpi-label-text">{this.label}</span>
          </span>
          <span class="kpi-value-container">
            <span class="kpi-value">{this.value}</span>
            {this.unit ? <span class="kpi-unit">{this.unit}</span> : ''}
          </span>
        </div>
      </Host>
    );
  }
}
