/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconAlarm,
  iconInfo,
  iconSuccess,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';
import { Component, h, Host, Prop } from '@stencil/core';
import type { StatusVariant } from '../utils/status.types';

/**
 * Status icons by state. States without an entry (`neutral`, `accent`) show no icon.
 */
const KPI_STATE_ICONS: Partial<Record<Exclude<StatusVariant, 'base'>, string>> =
  {
    warning: iconWarning,
    danger: iconAlarm,
    caution: iconWarningRhomb,
    success: iconSuccess,
    information: iconInfo,
    critical: iconWarningOctagon,
  };

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
   * ARIA label for the `danger` status icon.
   * Takes precedence over **ariaLabelStatusIcon** for the `danger` state.
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelAlarmIcon?: string;

  /**
   * ARIA label for the `warning` status icon.
   * Takes precedence over **ariaLabelStatusIcon** for the `warning` state.
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelWarningIcon?: string;

  /**
   * ARIA label for the status icon of every state that shows an icon.
   * Used for `caution`, `success`, `information` and `critical`, and as a fallback for `danger` and `warning`.
   *
   * @since 6.0.0
   */
  @Prop() ariaLabelStatusIcon?: string;

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
   */
  @Prop() state: Exclude<StatusVariant, 'base'> = 'neutral';

  /**
   *
   */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  private getStateIconLabel() {
    switch (this.state) {
      case 'danger':
        return this.ariaLabelAlarmIcon ?? this.ariaLabelStatusIcon;
      case 'warning':
        return this.ariaLabelWarningIcon ?? this.ariaLabelStatusIcon;
      default:
        return this.ariaLabelStatusIcon;
    }
  }

  private getStateIcon() {
    const icon = KPI_STATE_ICONS[this.state];

    if (!icon) {
      return '';
    }

    return (
      <ix-icon
        style={{ color: 'var(--ix-kpi-display-icon--color)' }}
        name={icon}
        size="16"
        aria-label={this.getStateIconLabel()}
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
