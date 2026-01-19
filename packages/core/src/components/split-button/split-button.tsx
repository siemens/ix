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
} from '@stencil/core';
import { AlignedPlacement } from '../dropdown/placement';
import { iconContextMenu } from '@siemens/ix-icons/icons';
import { CloseBehavior } from '../dropdown/dropdown-controller';
import type { SplitButtonVariant } from './split-button.types';
import { makeRef } from '../utils/make-ref';
import { IxComponent } from '../utils/internal/component';

@Component({
  tag: 'ix-split-button',
  styleUrl: 'split-button.scss',
  shadow: true,
})
export class SplitButton extends IxComponent() {
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
   * Disables only the main button while keeping the dropdown trigger enabled
   *
   *  @since 4.1.0
   */
  @Prop() disableButton = false;

  /**
   * Disables only the dropdown trigger while keeping the main button enabled
   *
   * @since 4.1.0
   */
  @Prop() disableDropdownButton = false;

  /**
   * Placement of the dropdown
   */
  @Prop() placement: AlignedPlacement = 'bottom-start';

  /**
   * Button clicked
   */
  @Event() buttonClick!: EventEmitter<MouseEvent>;

  private readonly triggerElementRef = makeRef<HTMLElement>();

  private get isDisabledButton() {
    return this.disabled || this.disableButton;
  }

  private get isDisabledIcon() {
    return this.disabled || this.disableDropdownButton;
  }

  render() {
    const hasOutline = this.variant.toLocaleLowerCase().includes('secondary');
    const baseAttributes = {
      variant: this.variant,
    };

    const buttonAttributes = {
      ...baseAttributes,
      disabled: this.isDisabledButton,
      class: {
        'left-button-border': !hasOutline,
      },
    };

    const dropdownButtonAttributes = {
      ...baseAttributes,
      disabled: this.isDisabledIcon,
    };

    return (
      <Host class={{ 'btn-group': true, 'middle-gap': !hasOutline }}>
        {this.label ? (
          <ix-button
            {...buttonAttributes}
            icon={this.icon}
            onClick={(e) => this.buttonClick.emit(e)}
            aria-label={this.ariaLabelButton}
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
          {...dropdownButtonAttributes}
          ref={this.triggerElementRef}
          class={'anchor'}
          icon={this.splitIcon ?? iconContextMenu}
          aria-label={this.ariaLabelSplitIconButton}
        ></ix-icon-button>
        <ix-dropdown
          disableFocusTrap
          closeBehavior={this.closeBehavior}
          trigger={this.triggerElementRef.waitForCurrent()}
          onShowChanged={({ detail: show }) => {
            const triggerElement = this.triggerElementRef.current;
            if (triggerElement) {
              // Binding via @State variable does not work as expected for tabindex
              if (show) {
                triggerElement.tabIndex = -1;
              } else {
                triggerElement.removeAttribute('tabindex');
              }
            }
          }}
        >
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
