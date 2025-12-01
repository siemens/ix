/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconDocument } from '@siemens/ix-icons/icons';
import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { AnchorTarget } from '../button/button.interface';
import { a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import { makeRef } from '../utils/make-ref';
import { menuController } from '../utils/menu-service/menu-service';
import { createMutationObserver } from '../utils/mutation-observer';
import { Disposable } from '../utils/typed-event';
import { createSequentialId } from '../utils/uuid';
import { IxMenuItemBase } from './menu-item.interface';

let sequenceId = 0;

/**
 * @slot menu-item-label Custom label
 */
@Component({
  tag: 'ix-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true,
})
export class MenuItem implements IxMenuItemBase {
  /**
   * Label of the menu item. Will also be used as tooltip text
   */
  @Prop() label?: string;

  /**
   * Move the Tab to a top position.
   */
  @Prop() home = false;

  /**
   * Caution: this is no longer working. Please use slot="bottom" instead.
   *
   * Place tab on bottom
   */
  @Prop() bottom = false;

  /**
   * Name of the icon you want to display. Icon names can be resolved from the documentation {@link https://ix.siemens.io/docs/icon-library/icons}
   */
  @Prop({ mutable: true }) icon?: string;

  /**
   * Show notification count on tab
   */
  @Prop() notifications?: number;

  /**
   * State to display active
   */
  @Prop() active: boolean = false;

  /**
   * Disable tab and remove event handlers
   */
  @Prop() disabled: boolean = false;

  /**
   * Will be shown as tooltip text, if not provided menu text content will be used.
   *
   * @since 4.0.0
   */
  @Prop() tooltipText?: string;

  /**
   * URL for the button link. When provided, the button will render as an anchor tag.
   *
   * @since 4.0.0
   */
  @Prop() href?: string;

  /**
   * Specifies where to open the linked document when href is provided.
   *
   * @since 4.0.0
   */
  @Prop() target?: AnchorTarget = '_self';

  /**
   * Specifies the relationship between the current document and the linked document when href is provided.
   *
   * @since 4.0.0
   */
  @Prop() rel?: string;

  /** @internal */
  @Prop() isCategory: boolean = false;

  @Element() hostElement!: HTMLIxMenuItemElement;

  @State() tooltip?: string;
  @State() ariaHiddenTooltip = false;
  @State() menuExpanded: boolean = false;

  private readonly internalItemId = createSequentialId(
    'ix-menu-item-',
    sequenceId++
  );

  private readonly buttonRef = makeRef<HTMLButtonElement | HTMLAnchorElement>();
  private isHostedInsideCategory = false;
  private menuExpandedDisposer?: Disposable;

  private readonly observer: MutationObserver = createMutationObserver(() => {
    this.setTooltip();
  });

  componentWillLoad() {
    this.isHostedInsideCategory =
      !!this.hostElement.closest('ix-menu-category');

    this.onIconChange();

    this.menuExpanded = menuController.nativeElement?.expand || false;
    this.menuExpandedDisposer = menuController.expandChange.on(
      (expand) => (this.menuExpanded = expand)
    );
  }

  componentWillRender() {
    this.setTooltip();
  }

  setTooltip() {
    this.tooltip =
      this.tooltipText ??
      this.label ??
      this.hostElement.textContent ??
      undefined;

    this.ariaHiddenTooltip =
      this.tooltipText === this.label ||
      this.tooltipText === this.hostElement.textContent;
  }

  connectedCallback() {
    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.menuExpandedDisposer) {
      this.menuExpandedDisposer.dispose();
    }
  }

  @Watch('icon')
  onIconChange() {
    if (!this.isHostedInsideCategory && !this.hostElement.icon) {
      this.icon = iconDocument;
    }
  }

  render() {
    let extendedAttributes = {};
    if (this.home) {
      extendedAttributes = {
        slot: 'home',
      };
    }

    if (this.bottom) {
      extendedAttributes = {
        slot: 'bottom',
      };
    }

    const hostA11y = a11yHostAttributes(this.hostElement);

    const commonAttributes = {
      class: 'tab',
      tabIndex: this.disabled ? -1 : 0,
      ...hostA11y,
    };

    const menuContent = [
      this.icon && (
        <ix-icon
          class={'tab-icon'}
          name={this.icon}
          aria-hidden="true"
          tabindex="-1"
        ></ix-icon>
      ),
      this.notifications ? (
        <div class="notification">
          <div class="pill">{this.notifications}</div>
        </div>
      ) : null,
      <span id={this.internalItemId} class="tab-text text-default">
        {this.label}
        <slot></slot>
      </span>,
    ];

    return (
      <Host
        class={{
          disabled: this.disabled,
          'home-tab': this.home,
          'bottom-tab': this.bottom,
          active: this.active,
          'tab-nested': this.isHostedInsideCategory,
        }}
        {...extendedAttributes}
      >
        {this.href ? (
          <a
            {...commonAttributes}
            href={this.disabled ? undefined : this.href}
            target={this.target}
            rel={this.rel}
            role="button"
            ref={this.buttonRef}
            onClick={(e: Event) => {
              if (this.disabled) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            {menuContent}
          </a>
        ) : (
          <button {...commonAttributes} ref={this.buttonRef}>
            {menuContent}
          </button>
        )}
        <ix-tooltip
          for={this.buttonRef.waitForCurrent()}
          placement={'right'}
          showDelay={1000}
          interactive={false}
          aria-hidden={a11yBoolean(this.ariaHiddenTooltip)}
          aria-labelledby={this.internalItemId}
        >
          {this.tooltip}
        </ix-tooltip>
      </Host>
    );
  }
}
