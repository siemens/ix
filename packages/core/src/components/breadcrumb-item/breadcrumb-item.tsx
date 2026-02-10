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
  State,
} from '@stencil/core';
import { animate } from 'animejs';
import { BaseButton, BaseButtonProps } from '../button/base-button';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import Animation from '../utils/animation';
import { AnchorInterface, AnchorTarget } from '../button/button.interface';
import { Mixin } from '../utils/internal/component';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

@Component({
  tag: 'ix-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem extends Mixin() implements AnchorInterface {
  @Element() override hostElement!: HTMLIxBreadcrumbItemElement;

  /**
   * ARIA label for the button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 3.2.0
   *
   * @deprecated Use `aria-label` attribute directly on the component instead.
   */
  @Prop() ariaLabelButton?: string;

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

  /**@internal */
  @Event() itemClick!: EventEmitter<string>;

  @State() inheritAriaAttributes: A11yAttributes = {};

  override componentDidLoad() {
    this.animationFadeIn();
  }

  override componentWillLoad() {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement, [
      'role',
      'aria-label',
    ]);
  }

  override componentDidRender(): void {}

  animationFadeIn() {
    animate(this.hostElement, {
      duration: Animation.defaultTime,
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      easing: 'linear',
      onComplete: () => {
        // this.hostElement.innerText is not available in componentWillLoad,
        // so we need to set aria-label in onComplete callback to ensure it is set after the content is rendered.
        requestAnimationFrameNoNgZone(() => {
          const ariaLabel =
            this.inheritAriaAttributes['aria-label'] ??
            this.ariaLabelButton ??
            this.label ??
            this.hostElement.innerText;
          this.hostElement.setAttribute('aria-label', ariaLabel);
        });
      },
    });
  }

  override render() {
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
      ariaAttributes: {
        ...this.inheritAriaAttributes,
        'aria-label':
          this.inheritAriaAttributes['aria-label'] ?? this.ariaLabelButton,
      },
      href: this.href,
      target: this.target,
      rel: this.rel,
    };

    if (this.invisible) {
      return <Host class={'invisible'} aria-hidden></Host>;
    }

    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      'aria-label':
        this.inheritAriaAttributes['aria-label'] ??
        this.ariaLabelButton ??
        this.label ??
        this.hostElement.innerText,
    };

    return (
      <Host
        {...ariaAttributes}
        role="listitem"
        class={{
          'hide-chevron': this.hideChevron,
        }}
        onClick={() => this.itemClick.emit(this.label)}
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
