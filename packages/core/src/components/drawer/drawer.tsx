/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconClose } from '@siemens/ix-icons/icons';
import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import anime from 'animejs';

@Component({
  tag: 'ix-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {
  /**
   * Show or hide the drawer
   */
  @Prop({ mutable: true }) show = false;

  /**
   * Fired in case of an outside click during drawer showed state
   */
  @Prop() closeOnClickOutside = true;

  /**
   * Render the drawer with maximum height
   */
  @Prop() fullHeight = false;

  /**
   * Min width interpreted as REM
   */
  @Prop() minWidth = 16;

  /**
   * Max width interpreted as REM
   */
  @Prop() maxWidth = 28;

  /**
   * Width interpreted as REM if not set to 'auto'
   */
  @Prop() width: number | 'auto' = this.minWidth;

  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelCloseButton?: string;

  /**
   * Fire event after drawer is open
   */
  @Event() open!: EventEmitter;

  /**
   * Fire event after drawer is close
   */
  @Event() drawerClose!: EventEmitter;

  toggle = false;

  private static duration = 300;
  private callback = this.clickedOutside.bind(this);
  private divElement?: HTMLElement;

  @State() showContent = true;

  @Watch('show')
  onShowChanged(newValue: boolean, oldValue?: boolean) {
    if (newValue === oldValue) {
      return;
    }

    this.toggleDrawer(newValue);
  }

  /**
   * Toggle or define show state of drawer
   * @param show Overwrite toggle state with boolean
   */
  @Method()
  async toggleDrawer(show?: boolean): Promise<void> {
    show = show ?? !this.show;

    if (show) {
      const { defaultPrevented } = this.open.emit();

      if (defaultPrevented) {
        return;
      }

      this.show = true;
      if (!this.toggle && this.divElement) {
        this.slideInRight(this.divElement);
        setTimeout(() => {
          window.addEventListener('mousedown', this.callback);
        }, Drawer.duration);
      }
    } else {
      const { defaultPrevented } = this.drawerClose.emit();

      if (defaultPrevented) {
        return;
      }

      this.show = false;

      if (this.toggle && this.divElement) {
        this.slideOutRight(this.divElement);
      }

      window.removeEventListener('mousedown', this.callback);
    }

    this.toggle = this.show;

    return Promise.resolve();
  }

  private onCloseClicked() {
    this.toggleDrawer(false);
  }

  private clickedOutside(evt: any) {
    if (!this.closeOnClickOutside) {
      return;
    }

    const target = evt.target;
    const closestElement = target.closest('#div-container');
    const btn = target.closest('#drawer-btn');

    if (
      evt.target.type !== 'button' &&
      closestElement !== this.divElement &&
      target !== btn
    ) {
      this.show = false;
    }
  }

  private getConstrainedWidth(width: number) {
    return Math.min(Math.max(width, this.minWidth), this.maxWidth);
  }

  private slideOutRight(el: HTMLElement) {
    const initialWidth = `${this.getConstrainedWidth(
      this.width === 'auto' ? this.minWidth : this.width
    )}rem`;

    anime({
      targets: el,
      duration: Drawer.duration,
      width: [initialWidth, 0],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        el.classList.add('display-none');
      },
    });
  }

  private slideInRight(el: HTMLElement) {
    const targetWidth = `${this.getConstrainedWidth(
      this.width === 'auto' ? this.minWidth : this.width
    )}rem`;

    anime({
      targets: el,
      duration: Drawer.duration,
      width: [0, targetWidth],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        el.classList.remove('display-none');
      },
      complete: () => {
        this.showContent = true;
      },
    });
  }

  componentDidLoad() {
    this.toggleDrawer(this.show);
  }

  render() {
    return (
      <Host
        class={{
          'drawer-container': true,
          'display-none': true,
        }}
        style={{
          width: '0',
          'max-width': `${this.maxWidth}rem`,
          height: this.fullHeight ? '100%' : 'auto',
          overflow: 'hidden',
        }}
        ref={(el) => (this.divElement = el as HTMLElement)}
        data-testid="container"
        id="div-container"
      >
        <div
          style={{
            width:
              this.width === 'auto'
                ? 'auto'
                : `${this.getConstrainedWidth(this.width)}rem`,
          }}
        >
          <div class="header">
            <div class="header-content">
              <slot name="header"></slot>
            </div>
            <ix-icon-button
              class="close-button"
              style={{
                display: this.showContent ? 'block' : 'none',
              }}
              icon={iconClose}
              size="24"
              ghost
              onClick={() => this.onCloseClicked()}
              data-testid="close-button"
              a11yLabel={this.ariaLabelCloseButton}
            ></ix-icon-button>
          </div>
          <div
            class="content"
            style={{
              display: this.showContent ? 'block' : 'none',
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
