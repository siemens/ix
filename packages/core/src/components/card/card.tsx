/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host, Prop } from '@stencil/core';
import type { StatusVariant } from '../utils/status.types';

/**
 * @slot default - Main card content.
 * @slot card-accordion - Accordion displayed in the card footer.
 */
@Component({
  tag: 'ix-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Element() hostElement!: HTMLIxCardElement;

  /**
   * Card status variant
   */
  @Prop() variant: StatusVariant = 'default';

  /**
   * Show the card with an outline border.
   * When `false`, the card uses a filled surface; status variants then show a top color strip.
   *
   * @since 6.0.0
   */
  @Prop() outline: boolean = true;

  /**
   * Show card in selected state
   */
  @Prop() selected: boolean = false;

  /**
   * Enable pointer cursor and hover/active surface styles.
   * Default is `false` (non-clickable basic card).
   *
   * @since 6.0.0
   */
  @Prop() clickable: boolean = false;

  render() {
    return (
      <Host
        class={{
          selected: this.selected,
          outline: this.outline,
          clickable: this.clickable,
          [`card-${this.variant}`]: true,
        }}
      >
        <div class="card-content">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="card-accordion"></slot>
        </div>
      </Host>
    );
  }
}
