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
  Mixin,
  Prop,
} from '@stencil/core';
import { a11yBoolean, type A11yAttributeName } from '../utils/a11y';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import { makeRef } from '../utils/make-ref';

@Component({
  tag: 'ix-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class Chip
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin)
  implements InheritAriaAttributesMixinContract
{
  @Element() override hostElement!: HTMLIxChipElement;

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
   * Determines if the chip is interactive. If true no user input (e.g. mouse states, keyboard navigation)
   * will be possible and also the close button will not be present.
   */
  @Prop() inactive = false;

  /**
   * Show close icon
   */
  @Prop() closable = false;

  /**
   * Show icon
   */
  @Prop() icon?: string;

  /**
   * Accessible name for the leading icon.
   * When unset, the icon is treated as decorative (hidden from assistive tech) when the default slot supplies a visible label.
   *
   * @since 5.0.0
   */
  @Prop() ariaLabelIcon?: string;

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
   * Center the content of the chip.
   * Set to false to disable centering.
   * @since 3.2.0
   */
  @Prop() centerContent = false;

  /**
   * ARIA label for the close button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelCloseButton?: string = 'Close chip';

  /**
   * Fire event if close button is clicked
   */
  @Event() closeChip!: EventEmitter;

  private readonly containerElementRef = makeRef<HTMLElement>();

  override getIgnoredAriaAttributes(): A11yAttributeName[] {
    return ['role'];
  }

  override componentWillLoad() {
    super.componentWillLoad();
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
      <ix-tooltip
        for={this.containerElementRef.waitForCurrent()}
        aria-label={text || undefined}
      >
        {text}
      </ix-tooltip>
    );
  }

  override render() {
    const customWrapStyle: Record<string, string | undefined> = {};
    const customMainStyle: Record<string, string | undefined> = {};

    if (this.variant === 'custom') {
      customMainStyle.color = this.chipColor;
      if (this.outline && this.background) {
        customWrapStyle.borderColor = this.background;
      } else if (!this.outline && this.background) {
        customMainStyle.backgroundColor = this.background;
      }
    }

    const showClose = !this.inactive && this.closable;
    const wrapClasses = {
      'chip-wrap': true,
      outline: this.outline,
      inactive: this.inactive,
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
      centerContent: this.centerContent,
    };

    const closeIconStyle =
      this.variant === 'custom'
        ? ({ color: this.chipColor } as Record<string, string | undefined>)
        : undefined;

    const iconIsDecorative = !this.ariaLabelIcon?.trim();

    const hasAccessibleName =
      !!this.inheritAriaAttributes['aria-label']?.trim() ||
      !!this.inheritAriaAttributes['aria-labelledby']?.trim();

    let hostRole: string | undefined;
    if (this.hostElement.hasAttribute('role')) {
      hostRole = this.hostElement.getAttribute('role') ?? undefined;
    } else if (hasAccessibleName) {
      hostRole = 'group';
    }

    return (
      <Host
        role={hostRole}
        class={{
          inactive: this.inactive,
        }}
      >
        <div
          ref={this.containerElementRef}
          class={wrapClasses}
          style={customWrapStyle}
        >
          <button
            type="button"
            class="chip-main"
            {...this.inheritAriaAttributes}
            disabled={this.inactive}
            style={customMainStyle}
          >
            <div class="content-wrapper">
              {this.icon && (
                <ix-icon
                  class={{
                    'with-icon': true,
                  }}
                  name={this.icon}
                  size={'24'}
                  aria-label={this.ariaLabelIcon}
                  aria-hidden={a11yBoolean(iconIsDecorative)}
                  style={
                    this.variant === 'custom'
                      ? {
                          color: this.outline
                            ? this.background
                            : this.chipColor,
                        }
                      : undefined
                  }
                />
              )}
              <span class="slot-container">
                <slot></slot>
              </span>
            </div>
          </button>
          {showClose && (
            <button
              type="button"
              class="chip-close"
              aria-label={this.ariaLabelCloseButton}
              style={closeIconStyle}
              onClick={(event) => {
                this.closeChip.emit(event);
                event.stopPropagation();
              }}
            >
              <ix-icon
                class="chip-close__icon"
                name={iconCloseSmall}
                size="16"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
        {this.getTooltip()}
      </Host>
    );
  }
}
