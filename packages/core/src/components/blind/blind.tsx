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
  Watch,
} from '@stencil/core';
import anime from 'animejs';

@Component({
  tag: 'ix-blind',
  styleUrl: 'blind.scss',
  scoped: true,
})
export class Blind {
  /**
   * Collapsed state
   */
  @Prop({ mutable: true, reflect: true }) collapsed = false;

  /**
   * Label of blind
   */
  @Prop() label: string;

  /**
   * Optional icon to be displayed next to the header label
   * @since 1.5.0
   */
  @Prop() icon: string;

  /**
   * Collapsed state changed
   */
  @Event() collapsedChange: EventEmitter<boolean>;

  @Element() hostElement!: HTMLIxBlindElement;

  private chevronRef: HTMLElement;

  constructor() {}

  private onHeaderClick(e: Event) {
    if ((e.target as Element).closest('.header-actions')) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  componentDidLoad() {
    this.animateCollapse(this.collapsed);
  }

  get content() {
    return this.hostElement.querySelector('.blind-content');
  }

  @Watch('collapsed')
  animation(isCollapsed: boolean) {
    this.animateCollapse(isCollapsed);
  }

  private animateCollapse(isCollapsed: boolean) {
    if (isCollapsed) {
      this.rotateChevronRight();
    } else {
      this.rotateChevronDown();
    }
  }

  private rotateChevronDown() {
    anime({
      targets: this.chevronRef,
      duration: 150,
      easing: 'easeInOutSine',
      rotateZ: 90,
    });
    anime({
      targets: this.content,
      duration: 150,
      easing: 'easeInOutSine',
      opacity: 1,
    });
  }

  private rotateChevronRight() {
    anime({
      targets: this.chevronRef,
      duration: 150,
      easing: 'easeInOutSine',
      rotateZ: 0,
    });
    anime({
      targets: this.content,
      duration: 150,
      easing: 'easeInOutSine',
      opacity: 0,
    });
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'blind-header': true,
            closed: this.collapsed,
          }}
          onClick={(e) => this.onHeaderClick(e)}
        >
          <span
            ref={(ref) => (this.chevronRef = ref)}
            class={{
              glyph: true,
              'glyph-chevron-right-small': true,
            }}
          ></span>
          <div class="blind-header-title">
            {this.label !== undefined ? (
              <span class="blind-header-title-basic">
                {this.icon !== undefined ? (
                  <ix-icon name={this.icon}></ix-icon>
                ) : (
                  ''
                )}
                <span class="blind-header-title-default">{this.label}</span>
                <span class="header-actions">
                  <slot name="header-actions"></slot>
                </span>
              </span>
            ) : (
              <slot name="custom-header"></slot>
            )}
          </div>
        </div>
        <div
          class={{
            'blind-content': true,
            hide: this.collapsed,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
