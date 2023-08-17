/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
import { ButtonVariant } from '../button/button';
import { AlignedPlacement } from '../dropdown/placement';

export type SplitButtonVariant = ButtonVariant;

@Component({
  tag: 'ix-split-button',
  styleUrl: 'split-button.scss',
  shadow: true,
})
export class SplitButton {
  @Element() hostElement!: HTMLIxSplitButtonElement;

  /**
   * Color variant of button
   */
  @Prop() variant: SplitButtonVariant = 'primary';

  /**
   * Button outline variant
   */
  @Prop() outline = false;

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
   * Icon of the button on the right
   */
  @Prop() splitIcon = 'context-menu';

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * Placement of the dropdown
   */
  @Prop() placement: AlignedPlacement = 'bottom-start';

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
    const buttonAttributes = {
      variant: this.variant,
      outline: this.outline,
      ghost: this.ghost,
      disabled: this.disabled,
      class: {
        'left-button-border': !this.outline,
      },
    };
    return (
      <Host>
        <div class={{ 'btn-group': true, 'middle-gap': !this.outline }}>
          {this.label ? (
            <ix-button
              {...buttonAttributes}
              icon={this.icon}
              onClick={(e) => this.buttonClick.emit(e)}
            >
              {this.label}
            </ix-button>
          ) : (
            <ix-icon-button
              {...buttonAttributes}
              icon={this.icon}
              onClick={(e) => this.buttonClick.emit(e)}
            ></ix-icon-button>
          )}
          <ix-icon-button
            {...buttonAttributes}
            ref={(r) => (this.triggerElement = r)}
            class={'anchor'}
            icon={this.splitIcon}
          ></ix-icon-button>
        </div>

        <ix-dropdown ref={(r) => (this.dropdownElement = r)}>
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
