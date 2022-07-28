/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-chip',
  styleUrl: 'chip.scss',
  scoped: true,
})
export class Chip {
  @Element() el: HTMLCwChipElement;

  /**
   * Chip variant
   */
  @Prop({ reflect: true }) variant: 'primary' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'custom' = 'primary';

  /**
   * Display chip in active state. Only working witht `variant="primary"`
   */
  @Prop() active = false;

  /**
   * Show close icon
   */
  @Prop() closable = false;

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
   * Show chip with outline style
   */
  @Prop() outline = false;

  /**
   * Fire event if close button is clicked
   */
  @Event() close: EventEmitter;

  private getCloseButton() {
    return (
      <div class="close-button-container">
        <button type="button" class="btn btn-invisible-secondary btn-icon btn-oval close-button" onClick={event => this.close.emit(event)}>
          {this.variant === 'custom' ? <i class="glyph glyph-16 glyph-close-small" style={{ color: this.color }} /> : <cw-icon name={'close-small'} size={'16'} />}
        </button>
      </div>
    );
  }

  render() {
    return (
      <Host
        class={{
          outline: this.outline,
        }}
        tabIndex="-1"
        title={this.el.textContent}
        style={
          this.variant === 'custom'
            ? {
                color: this.color,
                backgroundColor: this.background,
              }
            : {}
        }
      >
        {this.icon ? <cw-icon class={'with-icon'} name={this.icon} size={'24'} /> : null}
        <span class="slot-container">
          <slot></slot>
        </span>
        {this.closable ? this.getCloseButton() : null}
      </Host>
    );
  }
}
