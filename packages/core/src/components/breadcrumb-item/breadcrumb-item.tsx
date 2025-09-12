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
import { a11yHostAttributes } from '../utils/a11y';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import Animation from '../utils/animation';
import { AnchorInterface, AnchorTarget } from '../button/button.interface';

@Component({
  tag: 'ix-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem implements AnchorInterface {
  @Element() hostElement!: HTMLIxBreadcrumbItemElement;

  /**
   * ARIA label for the button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 3.2.0
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
   * @since 3.3.0
   */
  @Prop() href?: string;

  /**
   * Specifies where to open the linked document when href is provided.
   *
   * @since 3.3.0
   */
  @Prop() target?: AnchorTarget = '_self';

  /**
   * Specifies the relationship between the current document and the linked document when href is provided.
   *
   * @since 3.3.0
   */
  @Prop() rel?: string;

  /**@internal */
  @Prop() ghost: boolean = true;

  /**@internal */
  @Prop() visible = true;

  /**@internal */
  @Prop() showChevron = true;

  /** @internal */
  @Prop() isDropdownTrigger = false;

  /**@internal */
  @Event() itemClick!: EventEmitter<string>;

  @State() a11y: any;

  componentDidLoad() {
    this.animationFadeIn();
  }

  componentWillLoad() {
    this.a11y = a11yHostAttributes(this.hostElement, [
      'aria-describedby',
      'aria-controls',
      'aria-expanded',
    ]);
  }

  animationFadeIn() {
    animate(this.hostElement, {
      duration: Animation.defaultTime,
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      easing: 'linear',
    });
  }

  render() {
    const props: BaseButtonProps = {
      variant: this.ghost ? 'primary' : 'secondary',
      outline: false,
      ghost: this.ghost,
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
      ariaAttributes: { ...this.a11y, 'aria-label': this.ariaLabelButton },
      href: this.href,
      target: this.target,
      rel: this.rel,
    };

    if (!this.visible) {
      return <Host class={'invisible'}></Host>;
    }

    return (
      <Host
        class={{
          'hide-chevron': !this.showChevron,
        }}
        onClick={() => this.itemClick.emit(this.label)}
      >
        <li>
          <BaseButton
            {...props}
            afterContent={
              <Fragment>
                {this.showChevron ? (
                  <ix-icon
                    name={iconChevronRightSmall}
                    size="16"
                    class={'chevron'}
                  ></ix-icon>
                ) : null}
              </Fragment>
            }
          >
            {this.label}
            <slot></slot>
          </BaseButton>
        </li>
      </Host>
    );
  }
}
