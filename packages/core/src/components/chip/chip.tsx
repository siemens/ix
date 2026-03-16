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
  Watch,
} from '@stencil/core';
import { a11yBoolean, a11yHostAttributes } from '../utils/a11y';
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
  @Prop({ attribute: 'aria-label-close-button' }) ariaLabelCloseButton?: string;

  /**
   * Fire event if close button is clicked
   */
  @Event() closeChip!: EventEmitter;

  private readonly containerElementRef = makeRef<HTMLElement>();
  private closeButtonLabel?: string;

  @Watch('ariaLabelCloseButton')
  private syncCloseButtonLabel() {
    this.closeButtonLabel = this.ariaLabelCloseButton;
    // This prop is consumed internally and should not appear as a DOM attribute
    this.hostElement.removeAttribute('aria-label-close-button');
  }

  componentWillLoad() {
    this.syncCloseButtonLabel();
  }

  private getCloseButton() {
    return (
      <div class="close-button-container">
        <ix-icon-button
          type="button"
          variant="subtle-tertiary"
          icon={iconCloseSmall}
          class="close-button"
          oval
          size="16"
          style={this.variant === 'custom' ? { color: this.chipColor } : {}}
          onClick={(event) => {
            this.closeChip.emit(event);
            event.stopPropagation();
          }}
          aria-label={this.closeButtonLabel}
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

  private getCustomStyle() {
    if (this.variant !== 'custom') {
      return {};
    }
    return {
      color: this.chipColor,
      [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
    };
  }

  private getEffectiveLabel(hostA11y: Record<string, string>) {
    if (hostA11y['aria-label']) {
      return hostA11y['aria-label'];
    }

    const chipText = this.hostElement.textContent?.trim();
    if (this.closable && chipText) {
      return chipText;
    }

    return undefined;
  }

  private getContainerRole(
    hostA11y: Record<string, string>,
    effectiveLabel?: string
  ) {
    if (hostA11y['role']) {
      return hostA11y['role'];
    }

    if (this.closable) {
      return effectiveLabel ? 'group' : undefined;
    }

    return 'button';
  }

  render() {
    const hostA11y = a11yHostAttributes(this.hostElement);
    const customStyle = this.getCustomStyle();
    const effectiveLabel = this.getEffectiveLabel(hostA11y);
    const containerRole = this.getContainerRole(hostA11y, effectiveLabel);

    return (
      <Host
        class={{
          inactive: this.inactive,
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
          {...hostA11y}
          aria-label={effectiveLabel}
          role={containerRole}
          aria-disabled={a11yBoolean(this.inactive)}
          tabIndex={this.inactive ? undefined : this.closable ? undefined : 0}
          ref={this.containerElementRef}
          style={{ ...customStyle }}
          class={{
            container: true,
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
          }}
        >
          <div class="content-wrapper">
            {this.icon && (
              <ix-icon
                class={{
                  'with-icon': true,
                }}
                name={this.icon}
                size={'24'}
                aria-hidden="true"
                style={
                  this.variant === 'custom'
                    ? { color: this.outline ? this.background : this.chipColor }
                    : undefined
                }
              />
            )}
            <span class="slot-container">
              <slot></slot>
            </span>
          </div>
          {this.inactive === false && this.closable && this.getCloseButton()}
        </div>
        {this.getTooltip()}
      </Host>
    );
  }
}
