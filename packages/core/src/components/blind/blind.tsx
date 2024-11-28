/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  Watch,
} from '@stencil/core';
import anime from 'animejs';
import { CardVariant } from '../card/card';
import { a11yBoolean } from '../utils/a11y';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import { makeRef } from '../utils/make-ref';

export type BlindVariant = CardVariant;

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
  @Prop() label?: string;

  /**
   * Secondary label inside blind header
   * @since 2.0.0
   */
  @Prop() sublabel?: string;

  /**
   * Optional icon to be displayed next to the header label
   * @since 1.5.0
   */
  @Prop() icon?: string;

  /**
   * Blind variant
   * @since 2.0.0
   */
  @Prop() variant: BlindVariant = 'filled';

  /**
   * Collapsed state changed
   */
  @Event() collapsedChange!: EventEmitter<boolean>;

  @Element() hostElement!: HTMLIxBlindElement;

  //private chevronRef?: HTMLElement;
  private chevronRef1 = makeRef<HTMLElement>();
  private blindId = ++sequentialInstanceId;

  constructor() {}

  private onHeaderClick() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  componentDidLoad() {
    this.animateCollapse(this.collapsed);
  }

  get content() {
    return this.hostElement.shadowRoot!.querySelector('.blind-content');
  }

  @Watch('collapsed')
  async animation(isCollapsed: boolean) {
    await this.animateCollapse(isCollapsed);
  }

  private async animateCollapse(isCollapsed: boolean) {
    if (isCollapsed) {
      await this.rotateChevronRight();
    } else {
      await this.rotateChevronDown();
    }
  }

  private async rotateChevronDown() {
    anime({
      targets: await this.chevronRef1.waitForCurrent(),
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

  private async rotateChevronRight() {
    anime({
      targets: await this.chevronRef1.waitForCurrent(),
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
      <Host
        class={{
          [`blind-${this.variant}`]: true,
        }}
      >
        <div class={'blind-header-wrapper'}>
          <button
            class={{
              'blind-header': true,
              [`blind-${this.variant}`]: true,
              closed: this.collapsed,
            }}
            type="button"
            aria-labelledby={`ix-blind-header-title-${this.blindId}`}
            aria-controls={`ix-blind-content-section-${this.blindId}`}
            aria-expanded={a11yBoolean(!this.collapsed)}
            onClick={() => this.onHeaderClick()}
          >
            <slot name="custom-header"></slot>
          </button>

          <div class={'blind-header-content'}>
            <ix-icon
              class="collapse-icon"
              name={iconChevronRightSmall}
              color={
                this.variant === 'filled' || this.variant === 'outline'
                  ? 'color-primary'
                  : `color-${this.variant}--contrast`
              }
              ref={this.chevronRef1}
            ></ix-icon>
            <div
              class="blind-header-title"
              id={`ix-blind-header-title-${this.blindId}`}
            >
              {this.label !== undefined ? (
                <Fragment>
                  {this.icon && (
                    <ix-icon
                      class="blind-header-title-icon"
                      name={this.icon}
                      color={
                        this.variant === 'filled' || this.variant === 'outline'
                          ? 'color-std-text'
                          : `color-${this.variant}--contrast`
                      }
                    ></ix-icon>
                  )}
                  <div class={'blind-header-title-row'}>
                    <div class="blind-header-title-col">
                      <ix-typography title={this.label} format="label-lg" bold>
                        <div
                          class="blind-header-title-label"
                          title={this.label}
                        >
                          {this.label}
                        </div>
                      </ix-typography>
                    </div>

                    {this.sublabel && (
                      <div class="blind-header-title-col">
                        <ix-typography title={this.sublabel}>
                          <div class="blind-header-title-sublabel">
                            {this.sublabel}
                          </div>
                        </ix-typography>
                      </div>
                    )}
                  </div>
                  <div class="header-actions">
                    <slot name="header-actions"></slot>
                  </div>
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
        <section
          id={`ix-blind-content-section-${this.blindId}`}
          aria-labelledby={`ix-blind-header-title-${this.blindId}`}
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
