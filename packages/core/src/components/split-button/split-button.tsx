/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconContextMenu } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Mixin,
  Prop,
  Build,
} from '@stencil/core';
import { CloseBehavior } from '../dropdown/dropdown-controller';
import { AlignedPlacement } from '../dropdown/placement';
import {
  FocusProxy,
  PROXY_LIST_ID_SUFFIX,
  PROXY_LISTITEM_ID_SUFFIX,
  updateFocusProxyList,
} from '../utils/focus/focus-proxy';
import { DefaultMixins } from '../utils/internal/component';
import type { SplitButtonVariant } from './split-button.types';
import {
  AriaActiveDescendantMixin,
  AriaActiveDescendantMixinContract,
} from '../utils/internal/mixins/accessibility/aria-activedescendant.mixin';

@Component({
  tag: 'ix-split-button',
  styleUrl: 'split-button.scss',
  shadow: true,
})
export class SplitButton
  extends Mixin(...DefaultMixins, AriaActiveDescendantMixin)
  implements AriaActiveDescendantMixinContract
{
  @Element() override hostElement!: HTMLIxSplitButtonElement;

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
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * Button clicked
   */
  @Event() buttonClick!: EventEmitter<MouseEvent>;

  private showDropdown = false;
  private internalId = 'ix-split-button';

  private observeChildrenChange?: MutationObserver;

  override componentDidLoad(): Promise<void> | void {
    super.componentDidLoad();
    this.observeChildrenChange = new MutationObserver(() => {
      this.updateProxyList();
    });
    this.observeChildrenChange.observe(this.hostElement, {
      childList: true,
      subtree: true,
    });

    this.updateProxyList();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.observeChildrenChange?.disconnect();
  }

  private get isDisabledButton() {
    return this.disabled || this.disableButton;
  }

  private get isDisabledIcon() {
    return this.disabled || this.disableDropdownButton;
  }

  override getControllingAriaElement():
    | Promise<HTMLElement>
    | HTMLElement
    | null {
    return this.hostElement.shadowRoot!.querySelector<HTMLElement>(
      `.right-button`
    );
  }

  override isAriaActiveDescendantActive(): boolean {
    return this.showDropdown;
  }

  override getAriaActiveDescendantProxyItemId(): string | boolean {
    return PROXY_LISTITEM_ID_SUFFIX;
  }

  private updateProxyList() {
    const items = this.hostElement.querySelectorAll('ix-dropdown-item');
    const proxyList = this.hostElement.shadowRoot!.querySelector(
      '.proxy-list'
    ) as HTMLUListElement | null;

    if (!proxyList) {
      Build.isDev &&
        console.warn('ix-split-button - focus proxy list element not found');
      return;
    }

    updateFocusProxyList(proxyList, Array.from(items), (item, proxyElement) => {
      proxyElement.role = 'menuitem';
      proxyElement.innerText = item.label ?? item.textContent ?? '';
      proxyElement.ariaLabel =
        item.ariaLabel ?? item.label ?? item.textContent ?? '';
    });
  }

  override render() {
    const hasOutline = this.variant.toLocaleLowerCase().includes('secondary');
    const baseAttributes = {
      variant: this.variant,
    };

    const buttonAttributes = {
      ...baseAttributes,
      disabled: this.isDisabledButton,
      class: {
        'left-button': true,
        'left-button-border': !hasOutline,
      },
    };

    return (
      <Host>
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
        <ix-dropdown-button
          class="right-button"
          aria-label={this.ariaLabelSplitIconButton}
          icon={this.splitIcon ?? iconContextMenu}
          enableTopLayer={this.enableTopLayer}
          closeBehavior={this.closeBehavior}
          disabled={this.isDisabledIcon}
          suppressAriaActiveDescendant={true}
          onShowChanged={({ detail }) => (this.showDropdown = detail)}
          aria-controls={`${this.internalId}-${PROXY_LIST_ID_SUFFIX}`}
        >
          <FocusProxy hostId={this.internalId} otherProps={{}}></FocusProxy>
          <slot></slot>
        </ix-dropdown-button>
      </Host>
    );
  }
}
