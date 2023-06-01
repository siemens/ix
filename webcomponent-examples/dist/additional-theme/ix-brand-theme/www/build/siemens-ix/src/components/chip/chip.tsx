/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
  tag: 'ix-chip',
  styleUrl: 'chip.scss',
  scoped: true,
})
export class Chip {
  @Element() el: HTMLIxChipElement;

  /**
   * Chip variant
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
   * Determines if the chip is interactive. If false no user input (e.g. mouse states, keyboard navigation)
   * will be possible and also the close button will not be present.
   */
  @Prop() active = true;

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
        <button
          type="button"
          class="btn btn-invisible-secondary btn-icon btn-oval close-button"
          onClick={(event) => this.close.emit(event)}
        >
          {this.variant === 'custom' ? (
            <i
              class="glyph glyph-16 glyph-close-small"
              style={{ color: this.color }}
            />
          ) : (
            <ix-icon name={'close-small'} size={'16'} />
          )}
        </button>
      </div>
    );
  }

  render() {
    const isInactive = this.active === false;

    let customStyle = {};

    if (this.variant === 'custom' && this.outline === false) {
      customStyle = {
        color: this.color,
        backgroundColor: this.background,
      };
    }

    if (this.variant === 'custom' && this.outline === true) {
      customStyle = {
        color: this.color,
        borderColor: this.background,
      };
    }

    return (
      <Host
        class={{
          outline: this.outline,
          inactive: isInactive,
        }}
        tabIndex="-1"
        title={this.el.textContent}
        style={{ ...customStyle }}
      >
        <ix-icon
          class={{
            'with-icon': true,
            hidden: this.icon === undefined || this.icon === '',
          }}
          name={this.icon}
          size={'24'}
        />
        <span class="slot-container">
          <slot></slot>
        </span>
        {isInactive === false && this.closable ? this.getCloseButton() : null}
      </Host>
    );
  }
}
