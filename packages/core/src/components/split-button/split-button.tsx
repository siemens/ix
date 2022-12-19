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
  State,
} from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
import { Placement } from '../dropdown/placement';
import { Buttons } from '../utils/button-variants';

@Component({
  tag: 'ix-split-button',
  styleUrl: 'split-button.scss',
  scoped: true,
})
export class SplitButton {
  @Element() hostElement!: HTMLIxSplitButtonElement;

  /**
   * Color variant of button
   */
  @Prop() variant: Buttons = 'Primary';

  /**
   * Button outline variant
   */
  @Prop() outline = false;

  /**
   * Button invisible
   *
   * @deprecated Will be removed in 2.0.0. Use ghost property
   */
  @Prop() invisible = false;

  /**
   * Button invisible
   */
  @Prop() ghost = false;

  /**
   * Button label
   */
  @Prop() label: string;

  /**
   * Button icon
   */
  @Prop() icon = '';

  /**
   * Splitbutton icon
   */
  @Prop() splitIcon = 'context-menu';

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * Placement of the dropdown
   */
  @Prop() placement: Placement = 'bottom-start';

  @State() toggle = false;

  /**
   * Button clicked
   */
  @Event() buttonClick: EventEmitter<MouseEvent>;

  private triggerElement: HTMLElement;
  private dropdownElement: HTMLIxDropdownElement;

  get splitItems() {
    return Array.from(
      this.hostElement.querySelectorAll('ix-split-button-item')
    );
  }

  private linkTriggerRef() {
    if (this.triggerElement && this.dropdownElement) {
      this.dropdownElement.trigger = this.triggerElement;
    }
  }

  componentDidLoad() {
    this.linkTriggerRef();
  }

  render() {
    return (
      <Host class="btn-group">
        <button
          class={getButtonClasses(
            this.variant,
            this.outline,
            this.ghost || this.invisible,
            !this.label,
            false,
            false,
            this.disabled
          )}
          onClick={(e) => this.buttonClick.emit(e)}
        >
          {this.icon ? <ix-icon name={this.icon} /> : null} {this.label}
        </button>
        <button
          ref={(r) => (this.triggerElement = r)}
          class={{
            ...getButtonClasses(
              this.variant,
              this.outline,
              this.ghost || this.invisible,
              true,
              false,
              false,
              this.disabled
            ),
            ...{
              anchor: true,
            },
          }}
        >
          <ix-icon name={this.splitIcon} />
          <ix-dropdown ref={(r) => (this.dropdownElement = r)}>
            <slot></slot>
          </ix-dropdown>
        </button>
      </Host>
    );
  }
}
