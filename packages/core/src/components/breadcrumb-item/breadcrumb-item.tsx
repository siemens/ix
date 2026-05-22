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
  Fragment,
  h,
  Host,
  Prop,
  Mixin,
  Watch,
} from '@stencil/core';
import { BaseButton, BaseButtonProps } from '../button/base-button';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import { AnchorInterface, AnchorTarget } from '../button/button.interface';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import type { BreadcrumbClick } from '../breadcrumb/breadcrumb.types';

/**
 * @documentation https://ix.siemens.io//docs/components/breadcrumb/guide.md
 * @figma-main-component-id 358:3004
 */
@Component({
  tag: 'ix-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin)
  implements AnchorInterface, InheritAriaAttributesMixinContract
{
  @Element() override hostElement!: HTMLIxBreadcrumbItemElement;

  /**
   * Breadcrumb label
   */
  @Prop() label?: string;

  /**
   * Icon to be displayed next ot the label
   */
  @Prop() icon?: string;

  /**
   * URL for the button link. When provided, the button will render as an anchor tag.
   *
   * @since 4.0.0
   */
  @Prop() href?: string;

  /**
   * Specifies where to open the linked document when href is provided.
   *
   * @since 4.0.0
   */
  @Prop() target?: AnchorTarget = '_self';

  /**
   * Will be used as the key for the breadcrumb item, which will be emitted in the itemClick event when the breadcrumb item is clicked.
   *
   * @since 5.0.0
   */
  @Prop() breadcrumbKey!: string;

  /**
   * Specifies the relationship between the current document and the linked document when href is provided.
   *
   * @since 4.0.0
   */
  @Prop() rel?: string;

  /**@internal */
  @Prop() subtle: boolean = false;

  /**@internal */
  @Prop() invisible = false;

  /**@internal */
  @Prop() hideChevron = false;

  /** @internal */
  @Prop() isDropdownTrigger = false;

  /** @internal */
  @Prop() isCurrentPage = false;

  /**@internal */
  @Event() itemClick!: EventEmitter<BreadcrumbClick>;

  override componentWillLoad() {
    super.componentWillLoad();
    this.validateProps();
  }

  @Watch('breadcrumbKey')
  validateProps() {
    if (!this.breadcrumbKey) {
      console.warn(
        '[IxBreadcrumbItem] The "breadcrumbKey" prop is required for breadcrumb items to function properly.',
        this.hostElement
      );
    }
  }

  override render() {
    if (this.invisible) {
      return <Host class={'invisible'} aria-hidden></Host>;
    }

    const fallbackAriaLabel =
      this.label ?? this.hostElement.textContent?.trim();

    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      'aria-label':
        this.inheritAriaAttributes['aria-label'] ?? fallbackAriaLabel,
      ...(this.isCurrentPage ? { 'aria-current': 'page' } : {}),
    };

    const props: BaseButtonProps = {
      variant: this.subtle ? 'subtle-primary' : 'tertiary',
      iconOnly: false,
      iconOval: false,
      disabled: false,
      icon: this.icon,
      iconSize: '16',
      loading: false,
      selected: false,
      type: 'button',
      tabIndex:
        this.hostElement.tabIndex !== -1 ? this.hostElement.tabIndex : 0,
      extraClasses: {
        'dropdown-trigger': this.isDropdownTrigger,
      },
      ariaAttributes,
      href: this.href,
      target: this.target,
      rel: this.rel,
    };

    return (
      <Host
        class={{
          'hide-chevron': this.hideChevron,
        }}
        onClick={() =>
          this.itemClick.emit({
            breadcrumbKey: this.breadcrumbKey,
            label: this.label ?? this.hostElement.textContent?.trim() ?? '',
          })
        }
      >
        <BaseButton
          {...props}
          afterContent={
            <Fragment>
              {!this.hideChevron && (
                <ix-icon
                  name={iconChevronRightSmall}
                  size="16"
                  class={'chevron'}
                ></ix-icon>
              )}
            </Fragment>
          }
        >
          {this.label}
          <slot></slot>
        </BaseButton>
      </Host>
    );
  }
}
