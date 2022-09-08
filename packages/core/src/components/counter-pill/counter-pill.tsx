/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-counter-pill',
  styleUrl: 'counter-pill.scss',
  scoped: true,
})
export class CounterPill {
  @Element() el: HTMLIxCounterPillElement;

  /**
   * Pill variant
   */
  @Prop({ reflect: true }) variant:
    | 'primary'
    | 'alarm'
    | 'critical'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'success'
    | 'custom' = 'primary';

  /**
   * Show pill as outline
   */
  @Prop() outline = false;

  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  @Prop() background: string | undefined;

  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  @Prop() color: string | undefined;

  /**
   * Align pill content left
   */
  @Prop() alignLeft = false;

  render() {
    return (
      <Host
        class={{
          outline: this.outline,
          'align-left': this.alignLeft,
        }}
        style={
          this.variant === 'custom'
            ? {
                color: this.color,
                backgroundColor: this.background,
              }
            : {}
        }
        title={this.el.textContent}
      >
        <span class="slot-container">
          <slot></slot>
        </span>
      </Host>
    );
  }
}
