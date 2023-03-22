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

let sequentialInstanceId = 0;
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
  private id = ++sequentialInstanceId;

  constructor() {}

  private onHeaderToggle(e: Event) {
    if ((e.target as Element).closest('.header-actions')) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  private onHeaderClick(e: MouseEvent) {
    this.onHeaderToggle(e);
  }

  private onHeaderKeyPress(e: KeyboardEvent) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Space')
      this.onHeaderToggle(e);
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
          role="button"
          tabindex="0"
          aria-labelledby={'ix-blind-header-title-' + this.id}
          aria-controls={'ix-blind-content-section-' + this.id}
          aria-expanded={this.collapsed ? 'false' : 'true'}
          onClick={(e) => this.onHeaderClick(e)}
          onKeyPress={(e) => this.onHeaderKeyPress(e)}
        >
          <span
            class={{
              glyph: true,
              'glyph-chevron-right-small': true,
            }}
            ref={(ref) => (this.chevronRef = ref)}
          ></span>
          <div
            class="blind-header-title"
            id={'ix-blind-header-title-' + this.id}
          >
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
        <section
          id={'ix-blind-content-section-' + this.id}
          aria-labelledby={'ix-blind-header-title-' + this.id}
        >
          <div
            class={{
              'blind-content': true,
              hide: this.collapsed,
            }}
          >
            <slot></slot>
          </div>
        </section>
      </Host>
    );
  }
}
