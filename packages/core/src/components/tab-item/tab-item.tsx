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
import { BaseTabMixin, BaseTabMixinContract } from './tab.mixin';

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
   * Set counter value
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

    if (this.rounded) {
      variant = 'rounded';
    } else if (this.icon || this.label === undefined) {
      variant = 'icon-only';
    } else {
      variant = 'normal';
    }

    return (
      <Host
        id={this.getHostElementId()}
        role="tab"
        aria-selected={a11yBoolean(this.selected)}
        tabIndex={this.selected && !this.disabled ? 0 : -1}
        class={{
          selected: this.selected,
          disabled: this.disabled,
          'small-tab': this.small,
          'icon-only': this.iconOnly,
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
        {variant === 'rounded' && (
          <div
            class={{
              circle: true,
            }}
          >
            {this.icon && <ix-icon name={this.icon} size="16"></ix-icon>}
          </div>
        )}
        {this.icon && variant !== 'rounded' && (
          <ix-icon name={this.icon} size="16" class={'tab-icon'}></ix-icon>
        )}
        {(variant === 'normal' || variant === 'icon-only') && (
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

        {variant === 'rounded' && this.counter !== undefined && (
          <div
            class={{
              counter: true,
              selected: this.selected,
              disabled: this.disabled,
            }}
          >
            {this.counter}
          </div>
        )}

        {this.counter && variant !== 'rounded' && (
          <ix-pill variant="primary" outline class={'tab-counter'}>
            {this.counter}
          </ix-pill>
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
