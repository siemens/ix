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
   * Fire event after drawer is open
   */
  @Event() open!: EventEmitter;

  /**
   * Fire event after drawer is close
   */
  @Event() drawerClose!: EventEmitter;

  private static duration = 300;
  private callback = this.clickedOutside.bind(this);
  private divElement?: HTMLElement;

  @State() showContent = true;
  // Added for unified state control
  @State() internalVisible = false;


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
      if (defaultPrevented) return;
      this.show = true;
      if (!this.internalVisible && this.divElement) {
        this.animateDrawer('in', this.divElement);
        setTimeout(() => {
          window.addEventListener('pointerdown', this.callback);
        }, Drawer.duration);
      }
    } else {
      const { defaultPrevented } = this.drawerClose.emit();
      if (defaultPrevented) return;
      this.show = false;
      if (this.internalVisible && this.divElement) {
        this.animateDrawer('out', this.divElement);
      }
      window.removeEventListener('pointerdown', this.callback);
    }

    this.internalVisible = this.show;
    return Promise.resolve();
  }

  private onCloseClicked() {
    this.toggleDrawer(false);
  }

  private clickedOutside(evt: PointerEvent) { 
    if (!this.closeOnClickOutside) return;
    const target = evt.target as HTMLElement;
    const closestElement = target.closest('#div-container');
    const btn = target.closest('#drawer-btn');

    if (
      target.tagName !== 'BUTTON' &&
      closestElement !== this.divElement &&
      target !== btn
    ) {
      this.show = false;
    }
  }

  private getConstrainedWidth(width: number) {
    return Math.min(Math.max(width, this.minWidth), this.maxWidth);
  }

  // Unified animation method
  private animateDrawer(direction: 'in' | 'out', el: HTMLElement) {
    const targetWidth = `${this.getConstrainedWidth(
      this.width === 'auto' ? this.minWidth : this.width
    )}rem`;

    anime({
      targets: el,
      duration: Drawer.duration,
      width: direction === 'in' ? [0, targetWidth] : [targetWidth, 0],
      opacity: direction === 'in' ? [0, 1] : [1, 0],
      easing: direction === 'in' ? 'easeOutSine' : 'easeInSine',
      begin: () => {
        if (direction === 'in') el.classList.remove('display-none');
      },
      complete: () => {
        if (direction === 'out') el.classList.add('display-none');
        if (direction === 'in') this.showContent = true;
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
        role="dialog"
        aria-modal="true"
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
