/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { IxComponent } from '../utils/internal';
import { makeRef } from '../utils/make-ref';

@Component({
  tag: 'ix-pill',
  styleUrl: 'pill.scss',
  shadow: true,
})
export class Pill implements IxComponent {
  @Element() hostElement!: HTMLIxPillElement;

  /**
   * Pill variant
   */
  @Prop({ reflect: true }) variant:
    | 'primary'
    | 'alarm'
    | 'critical'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'success'
    | 'custom' = 'primary';

  /**
   * Show pill as outline
   */
  @Prop() outline = false;

  /**
   * Show icon
   */
  @Prop() icon?: string;

  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  @Prop() background: string | undefined;

  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  @Prop() pillColor: string | undefined;

  /**
   * Align pill content left
   */
  @Prop() alignLeft = false;

  /**
   * Display a tooltip. By default, no tooltip will be displayed.
   * Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
   * @since 3.0.0
   */
  @Prop() tooltipText: string | boolean = false;

  @State() iconOnly = false;

  private readonly containerElementRef = makeRef<HTMLElement>();

  componentWillLoad() {
    this.checkIfContentAvailable();
  }

  private checkIfContentAvailable() {
    const hasChildren = this.hostElement.children.length > 0;
    const hasTextContent = !!this.hostElement.textContent;

    this.iconOnly = !hasChildren && !hasTextContent;
  }

  private getTooltip() {
    if (!this.tooltipText && !this.hostElement.hasAttribute('tooltip-text')) {
      return null;
    }

    const text =
      typeof this.tooltipText === 'string' && this.tooltipText.trim()
        ? this.tooltipText
        : this.hostElement.textContent?.trim();

    return (
      <ix-tooltip for={this.containerElementRef.waitForCurrent()}>
        {text}
      </ix-tooltip>
    );
  }

  render() {
    let customStyle = {};

    if (this.variant === 'custom') {
      customStyle = {
        color: this.pillColor,
        [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
      };
    }
    return (
      <Host
        style={
          this.variant === 'custom'
            ? {
                '--ix-icon-button-color': this.pillColor,
              }
            : {}
        }
        class={{
          'align-left': this.alignLeft,
        }}
      >
        <div
          ref={this.containerElementRef}
          style={{ ...customStyle }}
          class={{
            container: true,
            outline: this.outline,
            inactive: false,
            alarm: this.variant === 'alarm',
            critical: this.variant === 'critical',
            info: this.variant === 'info',
            neutral: this.variant === 'neutral',
            primary: this.variant === 'primary',
            success: this.variant === 'success',
            warning: this.variant === 'warning',
            custom: this.variant === 'custom',
            closable: false,
            icon: !!this.icon,
            'with-gap': !this.iconOnly,
          }}
        >
          {this.icon && (
            <ix-icon
              class={{
                'with-icon': true,
              }}
              name={this.icon}
              size={'16'}
            />
          )}
          <span class="slot-container">
            <slot onSlotchange={() => this.checkIfContentAvailable()}></slot>
          </span>
        </div>
        {this.getTooltip()}
      </Host>
    );
  }
}
