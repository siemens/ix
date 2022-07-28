/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-pill',
  styleUrl: 'pill.scss',
  scoped: true,
})
export class Pill {
  @Element() el: HTMLCwPillElement;

  /**
   * Pill variant
   */
  @Prop({ reflect: true }) variant: 'primary' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'custom' = 'primary';

  /**
   * Show pill as outline
   */
  @Prop() outline = false;

  /**
   * Show icon
   */
  @Prop() icon: string | undefined;

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
          'outline': this.outline,
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
        {this.icon ? <cw-icon class={'with-icon'} name={this.icon} size={'16'} /> : null}
        <div class="slot">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
