/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Mixin, Prop, State } from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { IxComponentInterface } from '../utils/internal';
import { DefaultMixins } from '../utils/internal/component';
import { makeRef } from '../utils/make-ref';
import { CHIP_VARIANTS, type ChipVariant } from '../chip/chip.types';

/**
 * Compact label that highlights a status, count, or category.
 *
 * @documentation https://ix.siemens.io//docs/components/pill/guide.md
 * @figma-main-component-id 312:1219
 *
 * @slot - Pill content.
 */
@Component({
  tag: 'ix-pill',
  styleUrl: 'pill.scss',
  shadow: true,
})
export class Pill
  extends Mixin(...DefaultMixins)
  implements IxComponentInterface
{
  @Element() override hostElement!: HTMLIxPillElement;

  /**
   * Pill variant.
   * Defaults to `accent`. When unset or set to an unknown value the pill falls back to `accent` styling.
   */
  @Prop({ reflect: true }) variant: ChipVariant = 'accent';

  /**
   * Show pill as outline
   */
  @Prop() outline = false;

  /**
   * Show icon
   */
  @Prop() icon?: string;

  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  @Prop() background: string | undefined;

  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  @Prop() pillColor: string | undefined;

  /**
   * Align pill content left
   */
  @Prop() alignLeft = false;

  /**
   * Display a tooltip. By default, no tooltip will be displayed.
   * Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
   * @since 3.0.0
   */
  @Prop() tooltipText: string | boolean = false;

  @State() iconOnly = false;

  private readonly containerElementRef = makeRef<HTMLElement>();

  override componentWillLoad() {
    this.checkIfContentAvailable();
  }

  private checkIfContentAvailable() {
    const hasChildren = this.hostElement.children.length > 0;
    const hasTextContent = !!this.hostElement.textContent;

    this.iconOnly = !hasChildren && !hasTextContent;
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

  private resolveVariant(): ChipVariant {
    return CHIP_VARIANTS.includes(this.variant) ? this.variant : 'accent';
  }

  override render() {
    const variant = this.resolveVariant();
    let customStyle = {};

    if (variant === 'custom') {
      customStyle = {
        color: this.pillColor,
        [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
      };
    }

    const hasAccessibleName =
      this.hostElement.hasAttribute('aria-label') ||
      this.hostElement.hasAttribute('aria-labelledby');

    let hostRole: string | undefined = undefined;
    if (this.hostElement.hasAttribute('role')) {
      hostRole = this.hostElement.getAttribute('role') ?? undefined;
    } else if (hasAccessibleName) {
      hostRole = 'group';
    }

    const iconIsDecorative = !this.ariaLabelIcon?.trim();

    return (
      <Host
        style={
          variant === 'custom'
            ? {
                '--ix-icon-button-color': this.pillColor,
              }
            : {}
        }
        class={{
          'align-left': this.alignLeft,
        }}
        role={hostRole}
      >
        <div
          ref={this.containerElementRef}
          style={{ ...customStyle }}
          class={{
            container: true,
            outline: this.outline,
            inactive: false,
            danger: variant === 'danger',
            warning: variant === 'warning',
            caution: variant === 'caution',
            information: variant === 'information',
            accent: variant === 'accent',
            critical: variant === 'critical',
            success: variant === 'success',
            neutral: variant === 'neutral',
            custom: variant === 'custom',
            closable: false,
            icon: !!this.icon,
            'with-gap': !this.iconOnly,
          }}
        >
          {this.icon && (
            <ix-icon
              class={{
                'with-icon': true,
              }}
              name={this.icon}
              size={'16'}
              aria-label={this.ariaLabelIcon}
              aria-hidden={a11yBoolean(iconIsDecorative)}
            />
          )}
          <span class="slot-container">
            <ix-typography format="body">
              <slot onSlotchange={() => this.checkIfContentAvailable()}></slot>
            </ix-typography>
          </span>
        </div>
        {this.getTooltip()}
      </Host>
    );
  }
}
