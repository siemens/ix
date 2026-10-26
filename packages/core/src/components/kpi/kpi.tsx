/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { KPI_STATE_ICONS, type KpiState } from './kpi.types';

/**
 * Displays a key performance indicator with a label, value, and status.
 *
 * @documentation https://ix.siemens.io//docs/components/kpi/code.md
 * @figma-main-component-id 423:3986
 */
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
   * Status of the KPI.
   * `neutral` and `accent` show no status icon.
   * Status icons are decorative (`aria-hidden`); convey status in visible text or the host accessible name when it matters for assistive technology.
   */
  @Prop() state: KpiState = 'neutral';

  /**
   *
   */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  private getStateIcon() {
    const icon = KPI_STATE_ICONS[this.state];

    if (!icon) {
      return '';
    }

    return (
      <ix-icon
        color="--ix-kpi-display-icon--color"
        name={icon}
        size="16"
        aria-hidden={a11yBoolean(true)}
      ></ix-icon>
    );
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
        <div class={{ 'kpi-container': true, [this.state]: true }}>
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
