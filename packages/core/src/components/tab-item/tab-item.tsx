/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconClose } from '@siemens/ix-icons/icons';
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
import type { TabClickDetail } from './tab-item.types';
import { a11yBoolean } from '../utils/a11y';
import { DefaultMixins } from '../utils/internal/component';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import { formatBadgeLabel } from '../badge/badge.utils';
import { BaseTabMixin, BaseTabMixinContract } from './tab.mixin';

/**
 * A single selectable tab within a tab set.
 *
 * @documentation https://ix.siemens.io/docs/components/tabs/code.md
 * @figma-main-component-id 426:4122
 *
 * @slot - Tab label.
 */
@Component({
  tag: 'ix-tab-item',
  styleUrl: 'tab-item.scss',
  shadow: true,
})
export class TabItem
  extends Mixin(...DefaultMixins, ComponentIdMixin, BaseTabMixin)
  implements BaseTabMixinContract, ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxTabItemElement;

  /**
   * Set selected tab
   */
  @Prop() selected = false;

  /**
   * Set disabled tab
   */
  @Prop() disabled = false;

  /**
   * Set icon of the tab
   *
   * @since 5.0.0
   */
  @Prop() icon?: string;

  /**
   * Counter value, displayed as a counter badge whenever a value is set (including `0`).
   * Rounded tab items attach the badge to the circle; other variants show it next to the label.
   * Values above 99 render as `99+`.
   */
  @Prop() counter?: number;

  /**
   * If the tab can be closed
   *
   * @since 5.0.0
   */
  @Prop() closable = false;

  /**
   * Tab label
   *
   * @since 5.0.0
   */
  @Prop() label?: string;

  /**
   * Aria label for the close button, important for accessibility
   *
   * @since 5.0.0
   */
  @Prop() ariaLabelCloseButton: string = 'Close tab';

  /** @internal */
  @Prop() placement: 'bottom' | 'top' = 'bottom';

  /** @internal */
  @Prop() rounded = false;

  /** @internal */
  @Prop() small = false;

  /** @internal */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /** @internal */
  @Prop() iconOnly = false;

  /**
   * Emitted when the tab is clicked.
   */
  @Event() tabClick!: EventEmitter<TabClickDetail>;

  /**
   * Emitted when the tab's close button is clicked.
   */
  @Event() tabClose!: EventEmitter<TabClickDetail>;

  private onTabSelect(event: Event) {
    if (event.defaultPrevented) {
      return;
    }

    if (this.disabled) {
      event.preventDefault();
      return;
    }

    const clientEvent = this.tabClick.emit({
      tabKey: this.tabKey,
      nativeEvent: event,
    });

    if (clientEvent.defaultPrevented) {
      event.stopPropagation();
    }
  }

  override render() {
    let variant: 'normal' | 'icon-only' | 'rounded' = 'normal';
    const label = this.label || this.hostElement.textContent?.trim();

    if (this.rounded) {
      variant = 'rounded';
    } else if (this.icon && (label === undefined || label === '')) {
      variant = 'icon-only';
    } else {
      variant = 'normal';
    }

    const hasCounter = this.counter !== undefined && this.counter !== null;
    const counterLabel = hasCounter ? String(this.counter) : undefined;
    const counterBadgeProps = {
      type: 'counter' as const,
      variant: 'accent' as const,
      label: counterLabel,
      outline: true,
    };
    // The attached badge describes the circle, which is not the focusable tab,
    // so expose the count on the tab itself.
    const roundedCounterDescription =
      variant === 'rounded'
        ? (formatBadgeLabel('counter', counterLabel) ?? undefined)
        : undefined;
    const circle = (
      <div class="circle">
        {this.icon && <ix-icon name={this.icon} size="32"></ix-icon>}
        <slot></slot>
      </div>
    );

    return (
      <Host
        id={this.getHostElementId()}
        role="tab"
        aria-description={roundedCounterDescription}
        aria-selected={a11yBoolean(this.selected)}
        tabIndex={this.selected && !this.disabled ? 0 : -1}
        class={{
          selected: this.selected,
          disabled: this.disabled,
          'small-tab': this.small,
          'icon-only': variant === 'icon-only',
          stretched: this.layout === 'stretched',
          bottom: this.placement === 'bottom',
          top: this.placement === 'top',
          circle: this.rounded,
        }}
        onClick={(event: MouseEvent) => this.onTabSelect(event)}
        onKeyDown={(event: KeyboardEvent) => {
          if (event.key === 'Enter' || event.key === ' ') {
            this.onTabSelect(event);
          }
          if (this.closable && event.key === 'Delete') {
            event.preventDefault();
            this.tabClose.emit({
              tabKey: this.tabKey,
              nativeEvent: event,
            });
          }
        }}
      >
        {variant === 'rounded' && !hasCounter && circle}
        {variant === 'rounded' && hasCounter && (
          <ix-badge
            class="rounded-counter"
            {...counterBadgeProps}
            position="bottom-after"
          >
            {circle}
          </ix-badge>
        )}
        {this.icon && variant === 'icon-only' && (
          <ix-icon name={this.icon} class={'tab-icon'}></ix-icon>
        )}
        {this.icon && variant === 'normal' && (
          <ix-icon name={this.icon} class={'tab-icon'}></ix-icon>
        )}
        {variant === 'normal' && (
          <div
            class={{
              text: !!this.label,
              selected: this.selected,
              disabled: this.disabled,
            }}
          >
            {this.label}
            <slot></slot>
          </div>
        )}

        {variant !== 'rounded' && hasCounter && (
          <ix-badge class="tab-counter" {...counterBadgeProps}></ix-badge>
        )}
        {this.closable && variant !== 'rounded' && (
          <ix-icon-button
            aria-label={this.ariaLabelCloseButton}
            class={'close-tab'}
            size="12"
            variant="subtle-tertiary"
            icon={iconClose}
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();

              this.tabClose.emit({
                tabKey: this.tabKey,
                nativeEvent: event,
              });
            }}
          ></ix-icon-button>
        )}
      </Host>
    );
  }
}
