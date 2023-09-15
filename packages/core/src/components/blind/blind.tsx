/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { chevronRightSmall } from '@siemens/ix-icons/icons';
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
import { a11yBoolean } from '../utils/a11y';

let sequentialInstanceId = 0;
@Component({
  tag: 'ix-blind',
  styleUrl: 'blind.scss',
  shadow: true,
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
   * Secondary label inside blind header
   * @since 2.0.0
   */
  @Prop() sublabel: string;

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
    return this.hostElement.shadowRoot.querySelector('.blind-content');
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
        <button
          class={{
            'blind-header': true,
            closed: this.collapsed,
          }}
          type="button"
          aria-labelledby={`ix-blind-header-title-${this.id}`}
          aria-controls={`ix-blind-content-section-${this.id}`}
          aria-expanded={a11yBoolean(!this.collapsed)}
          onClick={(e) => this.onHeaderClick(e)}
        >
          <ix-icon
            class={'collapse-icon'}
            name={chevronRightSmall}
            ref={(ref) => (this.chevronRef = ref)}
          ></ix-icon>
          <div
            class="blind-header-title"
            id={`ix-blind-header-title-${this.id}`}
          >
            {this.label !== undefined ? (
              <span class="blind-header-title-basic">
                {this.icon !== undefined ? (
                  <ix-icon name={this.icon}></ix-icon>
                ) : (
                  ''
                )}
                <ix-typography format="label-lg" bold>
                  <div class="blind-header-title-label" title={this.label}>
                    {this.label}
                  </div>
                </ix-typography>
                {this.sublabel !== undefined ? (
                  <ix-typography color="soft">
                    <div
                      class="blind-header-title-sublabel"
                      title={this.sublabel}
                    >
                      {this.sublabel}
                    </div>
                  </ix-typography>
                ) : (
                  ''
                )}
                <span
                  class="header-actions"
                  onClick={(e) => e.stopImmediatePropagation()}
                >
                  <slot name="header-actions"></slot>
                </span>
              </span>
            ) : (
              <slot name="custom-header"></slot>
            )}
          </div>
        </button>
        <section
          id={`ix-blind-content-section-${this.id}`}
          aria-labelledby={`ix-blind-header-title-${this.id}`}
        >
          <div
            class={{
              'blind-content': true,
              hide: this.collapsed,
            }}
          >
            {!this.collapsed ? <slot></slot> : null}
          </div>
        </section>
      </Host>
    );
  }
}
