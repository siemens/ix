/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconDocument } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  h,
  Host,
  Method,
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { AnchorTarget } from '../button/button.interface';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import { makeRef } from '../utils/make-ref';
import { menuController } from '../utils/menu-service/menu-service';
import { createMutationObserver } from '../utils/mutation-observer';
import { Disposable } from '../utils/typed-event';
import { createSequentialId } from '../utils/uuid';
import { IxMenuItemBase } from './menu-item.interface';
import { a11yBoolean } from '../utils/a11y';

let sequenceId = 0;

/**
 * Navigation entry within the side menu.
 *
 * @documentation https://ix.siemens.io//docs/components/application-menu/guide.md
 * @figma-main-component-id 308:1293
 * @slot - Menu item label.
 */
@Component({
  tag: 'ix-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class MenuItem
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin)
  implements IxMenuItemBase, InheritAriaAttributesMixinContract
{
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

  /** @internal */
  @Prop() menuCategoryLabel?: string;

  @Element() override hostElement!: HTMLIxMenuItemElement;

  @State() tooltip?: string;
  @State() menuExpanded: boolean = false;
  @State() private isInMenuContext = false;
  @State() private hostTabIndex = -1;

  /** @internal */
  @Method()
  async setTabIndex(value: number) {
    this.hostTabIndex = value;
  }

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

  override componentWillLoad() {
    super.componentWillLoad();

    this.isHostedInsideCategory =
      !!this.hostElement.closest('ix-menu-category');

    const rootNode = this.hostElement.getRootNode();
    const isInMenuShadowDOM =
      rootNode instanceof ShadowRoot &&
      rootNode.host?.tagName?.toLowerCase() === 'ix-menu';
    const directParent = this.hostElement.parentElement;
    const isMenuChild =
      !this.isHostedInsideCategory &&
      (directParent?.tagName?.toLowerCase() === 'ix-menu' ||
        (directParent?.tagName?.toLowerCase() === 'a' &&
          directParent?.parentElement?.tagName?.toLowerCase() === 'ix-menu'));

    this.isInMenuContext = isInMenuShadowDOM || isMenuChild;

    this.onIconChange();

    this.menuExpanded = menuController.nativeElement?.expand || false;
    this.menuExpandedDisposer = menuController.expandChange.on(
      (expand) => (this.menuExpanded = expand)
    );
  }

  override componentWillRender() {
    this.setTooltip();
  }

  setTooltip() {
    this.tooltip =
      this.tooltipText ??
      this.label ??
      this.hostElement.textContent ??
      undefined;
  }

  override connectedCallback() {
    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

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

  private handleCategoryKeyDown(e: KeyboardEvent) {
    if ((e.key === 'Enter' || e.key === ' ') && this.isHostedInsideCategory) {
      this.returnFocusToParentCategoryMenuItem();
    }
  }

  private getAriaLabel() {
    if ('aria-label' in this.inheritAriaAttributes) {
      return this.inheritAriaAttributes['aria-label'];
    }

    const hasDistinctTooltip =
      this.tooltipText &&
      this.tooltipText !== this.label &&
      this.tooltipText !== this.hostElement.textContent;

    if (hasDistinctTooltip) {
      return `${this.label ?? this.menuCategoryLabel ?? this.hostElement.textContent ?? ''} ${this.tooltipText}`;
    }

    return undefined;
  }

  private getEffectiveRole(externalRole?: string) {
    const internalRole =
      this.isHostedInsideCategory || this.isCategory || this.isInMenuContext
        ? 'menuitem'
        : undefined;

    return externalRole ?? internalRole;
  }

  private returnFocusToParentCategoryMenuItem() {
    const categoryElement =
      this.hostElement.closest<HTMLElement>('ix-menu-category');
    const categoryMenuItem = categoryElement?.shadowRoot?.querySelector(
      'ix-menu-item.category-parent'
    ) as HTMLElement | null;

    categoryElement?.dispatchEvent(
      new CustomEvent('ixMenuCategoryItemSelect', {
        bubbles: true,
        composed: true,
      })
    );

    categoryMenuItem?.focus();
  }

  override render() {
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

    const { role: externalRole, ...inheritedA11yWithoutRole } =
      this.inheritAriaAttributes;

    const effectiveRole = this.getEffectiveRole(externalRole);

    const commonAttributes = {
      class: 'tab',
      ...inheritedA11yWithoutRole,
    };

    const menuContent = [
      this.icon && (
        <ix-icon
          class={'tab-icon'}
          name={this.icon}
          aria-hidden="true"
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

    const ariaLabel = this.getAriaLabel();

    return (
      <Host
        class={{
          disabled: this.disabled,
          'home-tab': this.home,
          'bottom-tab': this.bottom,
          active: this.active,
          'tab-nested': this.isHostedInsideCategory,
          'ix-focusable': !this.disabled,
        }}
        {...extendedAttributes}
      >
        {this.href ? (
          <a
            {...commonAttributes}
            role={effectiveRole}
            href={this.disabled ? undefined : this.href}
            target={this.target}
            rel={this.rel}
            tabIndex={
              this.isInMenuContext || this.isCategory
                ? this.hostTabIndex
                : undefined
            }
            ref={this.buttonRef}
            onKeyDown={(e: KeyboardEvent) => this.handleCategoryKeyDown(e)}
            onClick={(e: Event) => {
              if (this.disabled) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            aria-disabled={a11yBoolean(this.disabled)}
            aria-label={ariaLabel}
            aria-current={this.active ? 'page' : undefined}
          >
            {menuContent}
          </a>
        ) : (
          <button
            {...commonAttributes}
            role={effectiveRole}
            tabIndex={
              this.isInMenuContext || this.isCategory
                ? this.hostTabIndex
                : undefined
            }
            ref={this.buttonRef}
            onKeyDown={(e: KeyboardEvent) => this.handleCategoryKeyDown(e)}
            aria-disabled={a11yBoolean(this.disabled)}
            aria-label={ariaLabel}
            aria-current={this.active ? 'page' : undefined}
          >
            {menuContent}
          </button>
        )}
        <ix-tooltip
          for={this.buttonRef.waitForCurrent()}
          placement={'right'}
          showDelay={1000}
          interactive={false}
          aria-hidden="true"
          aria-labelledby={this.internalItemId}
        >
          {this.tooltip}
        </ix-tooltip>
      </Host>
    );
  }
}
