/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

export type TabClickDetail = {
  nativeEvent: MouseEvent;
};

@Component({
  tag: 'ix-tab-item',
  styleUrl: 'tab-item.scss',
  shadow: true,
})
export class TabItem {
  /**
   * Set selected tab
   */
  @Prop() selected = false;

  /**
   * Set disabled tab
   */
  @Prop() disabled = false;

  /**
   * Set small size tab
   */
  @Prop() small = false;

  /**
   * Set icon only tab
   */
  @Prop() icon = false;

  /**
   * Set rounded tab
   */
  @Prop() rounded = false;

  /**
   * Set counter value
   */
  @Prop() counter?: number;

  /**
   * Set layout width style
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Set selected placement
   */
  @Prop() placement: 'bottom' | 'top' = 'bottom';

  /**
   * Emitted when the tab is clicked.
   *
   * @since 2.0.0
   */
  @Event() tabClick!: EventEmitter<TabClickDetail>;

  private tabItemClasses(props: {
    selected: boolean;
    disabled: boolean;
    small: boolean;
    icon: boolean;
    circle: boolean;
    layout: 'auto' | 'stretched';
    placement: 'bottom' | 'top';
  }) {
    return {
      selected: props.selected,
      disabled: props.disabled,
      'small-tab': props.small,
      icon: props.small,
      stretched: props.layout === 'stretched',
      bottom: props.placement === 'bottom',
      top: props.placement === 'top',
      circle: props.circle,
    };
  }

  render() {
    return (
      <Host
        class={this.tabItemClasses({
          selected: this.selected,
          disabled: this.disabled,
          small: this.small,
          icon: this.icon,
          layout: this.layout,
          placement: this.placement,
          circle: this.rounded,
        })}
        tabIndex={0}
        onClick={(event: MouseEvent) => {
          if(event.defaultPrevented)
            return
          
          const clientEvent = this.tabClick.emit({
            nativeEvent: event,
          });

          if (clientEvent.defaultPrevented) {
            event.stopPropagation();
          }
        }}
      >
        <div
          class={{
            circle: this.rounded,
            text: !this.rounded,
            selected: this.selected,
            disabled: this.disabled,
          }}
        >
          <slot></slot>
        </div>
        <div
          class={{
            counter: true,
            selected: this.selected,
            hidden: !(this.rounded && this.counter !== undefined),
            disabled: this.disabled,
          }}
        >
          {this.counter}
        </div>
      </Host>
    );
  }
}
