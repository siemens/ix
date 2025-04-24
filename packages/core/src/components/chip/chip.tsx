/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconCloseSmall } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';

@Component({
  tag: 'ix-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class Chip {
  @Element() hostElement!: HTMLIxChipElement;

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
  @Prop() icon?: string;

  /**
   * Custom background color.
   * Only has an effect on chips with `variant='custom'`
   */
  @Prop() background: string | undefined;

  /**
   * Custom font and icon color.
   * Only has an effect on chips with `variant='custom'`
   */
  @Prop() chipColor: string | undefined;

  /**
   * Show chip with outline style
   */
  @Prop() outline = false;

  /**
   * Display a tooltip. By default, no tooltip will be displayed.
   * Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
   *
   * @since 3.0.0
   */
  @Prop() tooltipText: string | boolean = false;

  /**
   * Fire event if close button is clicked
   */
  @Event() closeChip!: EventEmitter;

  private readonly containerElementRef = makeRef<HTMLElement>();

  private getCloseButton() {
    return (
      <div class="close-button-container">
        <ix-icon-button
          type="button"
          variant="secondary"
          icon={iconCloseSmall}
          class="close-button"
          oval
          size="16"
          style={this.variant === 'custom' ? { color: this.chipColor } : {}}
          ghost
          onClick={(event) => {
            this.closeChip.emit(event);
            event.stopPropagation();
          }}
        ></ix-icon-button>
      </div>
    );
  }

  private getTooltip() {
    if (!this.tooltipText && !this.hostElement.hasAttribute('tooltip-text')) {
      return null;
    }

    const text =
      typeof this.tooltipText === 'string' && this.tooltipText.trim()
        ? this.tooltipText
        : this.hostElement.textContent?.trim();

    return (
      <ix-tooltip for={this.containerElementRef.waitForCurrent()}>
        {text}
      </ix-tooltip>
    );
  }

  render() {
    const isInactive = this.active === false;

    let customStyle = {};

    if (this.variant === 'custom') {
      customStyle = {
        color: this.chipColor,
        [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
      };
    }

    return (
      <Host
        tabIndex="-1"
        class={{
          inactive: isInactive,
        }}
        style={
          this.variant === 'custom'
            ? {
                '--ix-icon-button-color': this.chipColor,
              }
            : {}
        }
      >
        <div
          ref={this.containerElementRef}
          style={{ ...customStyle }}
          class={{
            container: true,
            outline: this.outline,
            inactive: isInactive,
            alarm: this.variant === 'alarm',
            critical: this.variant === 'critical',
            info: this.variant === 'info',
            neutral: this.variant === 'neutral',
            primary: this.variant === 'primary',
            success: this.variant === 'success',
            warning: this.variant === 'warning',
            custom: this.variant === 'custom',
            closable: this.closable,
            icon: !!this.icon,
          }}
        >
          <ix-icon
            class={{
              'with-icon': true,
              hidden: !this.icon,
            }}
            name={this.icon}
            size={'24'}
          />
          <span class="slot-container">
            <slot></slot>
          </span>
          {isInactive === false && this.closable ? this.getCloseButton() : null}
        </div>
        {this.getTooltip()}
      </Host>
    );
  }
}
