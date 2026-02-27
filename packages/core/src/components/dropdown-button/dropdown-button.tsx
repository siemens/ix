/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconChevronDownSmall,
  iconChevronUpSmall,
} from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  h,
  Host,
  Mixin,
  Prop,
  State,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core';
import { AlignedPlacement } from '../dropdown/placement';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import { makeRef } from '../utils/make-ref';
import type { DropdownButtonVariant } from './dropdown-button.types';
import { DefaultMixins } from '../utils/internal/component';
import {
  AriaActiveDescendantMixinContract,
  AriaActiveDescendantMixin,
} from '../utils/internal/mixins/accessibility/aria-activedescendant.mixin';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import { closestPassShadow } from '../utils/shadow-dom';

@Component({
  tag: 'ix-dropdown-button',
  styleUrl: 'dropdown-button.scss',
  shadow: {
    delegatesFocus: false,
  },
})
export class DropdownButton
  extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin)
  implements AriaActiveDescendantMixinContract, ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxDropdownButtonElement;

  /**
   * Button variant
   */
  @Prop() variant: DropdownButtonVariant = 'primary';

  /**
   * Disable button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Set label
   */
  @Prop() label?: string | null;

  /**
   * Button icon
   */
  @Prop() icon?: string;

  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  @Prop() closeBehavior: 'inside' | 'outside' | 'both' | boolean = 'both';

  /**
   * Placement of the dropdown
   */
  @Prop() placement?: AlignedPlacement;

  /**
   * ARIA label for the dropdown button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelDropdownButton?: string;

  /**
   * If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
   *
   * @since 5.0.0
   */
  @Prop() focusCheckedItem: boolean = false;

  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * Suppress the use of the aria-activedescendant attribute and related focus proxy functionality.
   *
   * @internal
   * */
  @Prop() override suppressAriaActiveDescendant = false;

  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  @Event() showChange!: EventEmitter<boolean>;

  /**
   * Fire event after visibility of dropdown has changed
   */
  @Event() showChanged!: EventEmitter<boolean>;

  @State() dropdownShow = false;

  private inheritAriaAttributes: A11yAttributes = {};

  private dropdownButtonId = this.getHostElementId();

  private readonly dropdownAnchor = makeRef<HTMLElement>();
  private readonly dropdownRef = makeRef<HTMLIxDropdownElement>();

  private hostContext?: {
    breadcrumb: boolean;
    datePicker: boolean;
    splitButton: boolean;
  };

  private getTriangle() {
    return (
      <div
        class={{
          triangle: true,
          [this.variant]: true,
          hide: !!this.label,
          disabled: this.disabled,
        }}
      ></div>
    );
  }

  private readonly onDropdownShowChanged = (event: CustomEvent<boolean>) => {
    if (this.disabled && event.detail) {
      return;
    }
    this.dropdownShow = event.detail;
  };

  override componentDidLoad(): void {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement, [
      'aria-label',
      'aria-activedescendant',
      'aria-haspopup',
      'aria-controls',
      'aria-disabled',
      'aria-expanded',
      'aria-current',
      'role',
    ]);
  }

  override componentWillRender(): Promise<void> | void {
    this.hostContext = {
      breadcrumb: !!closestPassShadow(this.hostElement, 'ix-breadcrumb'),
      datePicker: !!closestPassShadow(this.hostElement, 'ix-date-picker'),
      splitButton: !!closestPassShadow(this.hostElement, 'ix-split-button'),
    };
  }

  override getControllingAriaElement():
    | Promise<HTMLElement>
    | HTMLElement
    | null {
    return this.hostElement;
  }

  override isAriaActiveDescendantActive(): boolean {
    return !this.suppressAriaActiveDescendant && this.dropdownShow;
  }

  override getAriaActiveDescendantProxyItemId(): string | boolean {
    return false;
  }

  /**@internal */
  @Method()
  async getDropdownReference(): Promise<HTMLIxDropdownElement> {
    return this.dropdownRef.waitForCurrent();
  }

  override render() {
    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      'aria-haspopup': 'true',
      'aria-disabled': a11yBoolean(this.disabled),
      'aria-expanded': a11yBoolean(this.dropdownShow),
      role: 'button',
    };

    if (!this.inheritAriaAttributes['aria-controls']) {
      ariaAttributes['aria-controls'] =
        `dropdown-button-menu-${this.dropdownButtonId}`;
    }

    const commonProperties = {
      id: `dropdown-button-${this.dropdownButtonId}`,
      disabled: this.disabled,
      variant: this.variant,
    };

    const hideChevron =
      this.hostContext?.breadcrumb ||
      this.hostContext?.datePicker ||
      this.hostContext?.splitButton;

    return (
      <Host
        class={{
          disabled: this.disabled,
          'host-context-breadcrumb': !!this.hostContext?.breadcrumb,
          'host-context-date-picker': !!this.hostContext?.datePicker,
        }}
        ref={this.dropdownAnchor}
        tabIndex={this.disabled ? -1 : 0}
        {...ariaAttributes}
      >
        <div class="dropdown-button">
          {this.label || this.label === null ? (
            <ix-button
              {...commonProperties}
              class={'internal-button'}
              alignment="start"
              ref={(ref) => (ref!.tabIndex = -1)}
            >
              <div class={'content'}>
                {this.icon ? (
                  <ix-icon
                    name={this.icon}
                    size="24"
                    class={'dropdown-icon'}
                  ></ix-icon>
                ) : null}
                <div class={'button-label'}>{this.label}</div>
                <slot name="button-label"></slot>
                {!hideChevron && (
                  <ix-icon
                    aria-hidden="true"
                    name={
                      this.dropdownShow
                        ? iconChevronUpSmall
                        : iconChevronDownSmall
                    }
                    size="24"
                  ></ix-icon>
                )}
              </div>
            </ix-button>
          ) : (
            <div>
              <ix-icon-button
                {...commonProperties}
                icon={this.icon}
                ref={(ref) => (ref!.tabIndex = -1)}
              ></ix-icon-button>
              {!hideChevron && this.getTriangle()}
            </div>
          )}
        </div>

        <ix-dropdown
          role="menu"
          ref={this.dropdownRef}
          id={`dropdown-button-menu-${this.dropdownButtonId}`}
          aria-labelledby={`dropdown-button-${this.dropdownButtonId}`}
          trigger={this.dropdownAnchor.waitForCurrent()}
          placement={this.placement}
          closeBehavior={this.closeBehavior}
          enableTopLayer={this.enableTopLayer}
          disableFocusTrap={true}
          focusCheckedItem={this.focusCheckedItem}
          onShowChanged={(event) => this.onDropdownShowChanged(event)}
          onScroll={(event) => {
            // Need to dispatch the event again to handle infinite scroll of ix-date-picker,
            // as the scroll event does not bubble beyond the shadow root
            const scrollEvent = new CustomEvent('scroll', {
              bubbles: event.bubbles,
              cancelable: event.cancelable,
              detail: event.detail,
            });
            this.hostElement.dispatchEvent(scrollEvent);
          }}
        >
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
