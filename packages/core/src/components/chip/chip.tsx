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
import { CHIP_VARIANTS, ChipVariant } from './chip.types';

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
   * Chip variant.
   * Defaults to `primary`. When unset or set to an unknown value the chip falls back to `primary` styling.
   */
  @Prop({ reflect: true }) variant: ChipVariant = 'primary';

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

  private getCustomStyles(variant: ChipVariant): {
    wrap: Record<string, string | undefined>;
    main: Record<string, string | undefined>;
  } {
    const wrap: Record<string, string | undefined> = {};
    const main: Record<string, string | undefined> = {};

    if (variant !== 'custom') {
      return { wrap, main };
    }

    main.color = this.chipColor;
    if (this.chipColor) {
      wrap.color = this.chipColor;
    }
    if (this.outline && this.background) {
      wrap.borderColor = this.background;
    } else if (!this.outline && this.background) {
      main.backgroundColor = this.background;
    }

    return { wrap, main };
  }

  private getIconStyle(variant: ChipVariant) {
    if (variant !== 'custom') {
      return undefined;
    }
    return { color: this.outline ? this.background : this.chipColor };
  }

  private getHostRole(needsGroupRole: boolean): string | undefined {
    if (this.hostElement.hasAttribute('role')) {
      return this.hostElement.getAttribute('role') ?? undefined;
    }
    return needsGroupRole ? 'group' : undefined;
  }

  override render() {
    const variant: ChipVariant = CHIP_VARIANTS.includes(this.variant)
      ? this.variant
      : 'primary';

    const { wrap: customWrapStyle, main: customMainStyle } =
      this.getCustomStyles(variant);

    const showClose = !this.inactive && this.closable;
    const wrapClasses = {
      'chip-wrap': true,
      outline: this.outline,
      inactive: this.inactive,
      alarm: variant === 'alarm',
      critical: variant === 'critical',
      info: variant === 'info',
      neutral: variant === 'neutral',
      primary: variant === 'primary',
      success: variant === 'success',
      warning: variant === 'warning',
      custom: variant === 'custom',
      closable: this.closable,
      icon: !!this.icon,
      centerContent: this.centerContent,
    };

    const iconIsDecorative = !this.ariaLabelIcon?.trim();

    const hasAccessibleName =
      !!this.inheritAriaAttributes['aria-label']?.trim() ||
      !!this.inheritAriaAttributes['aria-labelledby']?.trim();

    const hasTooltip =
      !!this.tooltipText || this.hostElement.hasAttribute('tooltip-text');

    const needsGroupRole = hasAccessibleName && (showClose || hasTooltip);

    return (
      <Host
        role={this.getHostRole(needsGroupRole)}
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
                  style={this.getIconStyle(variant)}
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
