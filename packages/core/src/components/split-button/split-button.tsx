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
import { AlignedPlacement } from '../dropdown/placement';
import { iconContextMenu } from '@siemens/ix-icons/icons';
import { CloseBehavior } from '../dropdown/dropdown-controller';
import type { SplitButtonVariant } from './split-button.types';

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
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  @Prop() closeBehavior: CloseBehavior = 'both';

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
  @Prop() label?: string;

  /**
   * ARIA label for the button (use if no label and icon button)
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelButton?: string;

  /**
   * Button icon
   */
  @Prop() icon?: string;

  /**
   * Icon of the button on the right
   */
  @Prop() splitIcon?: string;

  /**
   * ARIA label for the split icon button
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelSplitIconButton?: string;

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
  @Event() buttonClick!: EventEmitter<MouseEvent>;

  private triggerElement?: HTMLElement;
  private dropdownElement?: HTMLIxDropdownElement;

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
              aria-label={this.ariaLabelButton}
            ></ix-icon-button>
          )}
          <ix-icon-button
            {...buttonAttributes}
            ref={(r) => (this.triggerElement = r)}
            class={'anchor'}
            icon={this.splitIcon ?? iconContextMenu}
            aria-label={this.ariaLabelSplitIconButton}
          ></ix-icon-button>
        </div>

        <ix-dropdown
          ref={(r) => (this.dropdownElement = r)}
          closeBehavior={this.closeBehavior}
        >
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
