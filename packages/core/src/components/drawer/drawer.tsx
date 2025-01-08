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
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
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

  @Watch('show')
  onShowChanged(newValue: boolean) {
    this.show = newValue !== undefined ? newValue : !this.show;
    this.toggleDrawer(this.show);
  }

  /**
   * Toggle or define show state of drawer
   * @param show Overwrite toggle state with boolean
   */
  @Method()
  async toggleDrawer(show?: boolean): Promise<void> {
    this.show = show !== undefined ? show : !this.show;

    if (show) {
      this.open.emit();
      if (this.divElement) {
        this.slideInRight(this.divElement);
      }
      setTimeout(() => {
        window.addEventListener('mousedown', this.callback);
      }, 300);
    } else {
      this.drawerClose.emit();
      if (this.divElement) {
        this.slideOutRight(this.divElement);
      }
      window.removeEventListener('mousedown', this.callback);
    }

    return Promise.resolve();
  }

  private onCloseClicked() {
    this.show = false;
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

  private slideOutRight(el: HTMLElement) {
    anime({
      targets: el,
      duration: Drawer.duration,
      translateX: [0, '16rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        el.classList.add('display-none');
      },
    });
  }

  private slideInRight(el: HTMLElement) {
    anime({
      targets: el,
      duration: Drawer.duration,
      translateX: ['16rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        el.classList.remove('display-none');
      },
    });
  }

  componentDidLoad() {
    this.onShowChanged(this.show);
  }

  render() {
    return (
      <Host
        class={{
          'drawer-container': true,
          toggle: this.show,
          'display-none': true,
        }}
        style={{
          width: this.width === 'auto' ? this.width : `${this.width}rem`,
          'min-width': `${this.minWidth}rem`,
          'max-width': `${this.maxWidth}rem`,
          height: this.fullHeight ? '100%' : 'auto',
        }}
        ref={(el) => (this.divElement = el as HTMLElement)}
        data-testid="container"
        id="div-container"
      >
        <div class="header">
          <div class="header-content">
            <slot name="header"></slot>
          </div>
          <ix-icon-button
            class="close-button"
            icon={'close'}
            size="24"
            ghost
            onClick={() => this.onCloseClicked()}
            data-testid="close-button"
          ></ix-icon-button>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
