/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
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
  Mixin,
  Prop,
} from '@stencil/core';
import { iconDragGripper } from '@siemens/ix-icons/icons';
import { A11yAttributeName, a11yBoolean } from '../utils/a11y';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import { makeRef } from '../utils/make-ref';

export type ListItemVariant = 'ghost' | 'outline' | 'filled';
export type ListItemActionSlotAlignment = 'start' | 'center';

const interactiveElementSelector = [
  'a[href]',
  'button',
  'input',
  'select',
  'textarea',
  '[contenteditable]',
  '[tabindex]',
  'ix-button',
  'ix-checkbox',
  'ix-dropdown-button',
  'ix-icon-button',
  'ix-split-button',
  'ix-toggle',
].join(',');

/**
 * @slot default - Non-interactive custom content rendered after the standard icon, label, and description layout.
 * @slot action - Interactive trailing controls that do not activate the item.
 * @since 6.0.0
 */

@Component({
  tag: 'ix-list-item',
  styleUrl: 'list-item.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class ListItem
  extends Mixin(...DefaultMixins, ComponentIdMixin, InheritAriaAttributesMixin)
  implements ComponentIdMixinContract, InheritAriaAttributesMixinContract
{
  @Element() override hostElement!: HTMLIxListItemElement;

  /**
   * Visual variant of the item.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) variant: ListItemVariant = 'filled';

  /**
   * Label displayed by the standard item layout.
   * @since 6.0.0
   */
  @Prop() label?: string;

  /**
   * Supporting text displayed below the label.
   * @since 6.0.0
   */
  @Prop() description?: string;

  /**
   * Icon displayed by the standard item layout.
   * @since 6.0.0
   */
  @Prop() icon?: string;

  /**
   * Accessible label for the item icon.
   * @since 6.0.0
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Show the item as selected.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) selected = false;

  /**
   * Disable item activation and action controls.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Display selection with checkbox semantics.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) checkbox = false;

  /**
   * Display a divider below this item.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) hasDivider = false;

  /**
   * Show action slot content only when the item is hovered or focused.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) actionOnHover = false;

  /**
   * Vertical alignment of the action slot content.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) actionSlotAlignment: ListItemActionSlotAlignment =
    'center';

  /**
   * Emitted when the primary item surface is activated.
   * @since 6.0.0
   */
  @Event() itemClick!: EventEmitter<HTMLIxListItemElement>;

  /**
   * Requests a controlled selection update when a checkbox item is activated.
   * @since 6.0.0
   */
  @Event() selectedChange!: EventEmitter<boolean>;

  private readonly primaryActionRef = makeRef<HTMLButtonElement>();

  private hasStandardContent() {
    return !!(this.icon || this.label || this.description);
  }

  override getIgnoredAriaAttributes(): A11yAttributeName[] {
    return ['role', 'aria-checked', 'aria-disabled', 'aria-pressed'];
  }

  override componentDidLoad() {
    if (!this.hostElement.hasAttribute('tabindex')) {
      this.hostElement.tabIndex = 0;
    }
    const primaryAction = this.primaryActionRef.current;
    if (primaryAction) {
      primaryAction.tabIndex = this.disabled ? -1 : this.hostElement.tabIndex;
    }
  }

  private activateItem(event: MouseEvent) {
    if (
      this.disabled ||
      event.composedPath().some((element) => {
        return (
          element instanceof HTMLElement &&
          element !== this.hostElement &&
          element !== this.primaryActionRef.current &&
          element.matches(interactiveElementSelector)
        );
      })
    ) {
      return;
    }

    this.itemClick.emit(this.hostElement);
  }

  private handleSelectedChange(event: CustomEvent<boolean>) {
    this.selectedChange.emit(event.detail);
  }

  private renderStandardContent(labelId: string) {
    if (!this.hasStandardContent()) {
      return null;
    }

    return (
      <div class="standard-content">
        {this.icon ? (
          <ix-icon
            class="item-icon"
            name={this.icon}
            aria-label={this.ariaLabelIcon}
            aria-hidden={a11yBoolean(!this.ariaLabelIcon)}
          ></ix-icon>
        ) : null}
        <span class="text-content">
          {this.label ? (
            <span id={labelId} class="label">
              {this.label}
            </span>
          ) : null}
          {this.description ? (
            <span class="description">{this.description}</span>
          ) : null}
        </span>
      </div>
    );
  }

  override render() {
    const hostId = this.getHostElementId();
    const labelId = `${hostId}-label`;
    const hasInheritedLabel =
      !!this.inheritAriaAttributes['aria-label'] ||
      !!this.inheritAriaAttributes['aria-labelledby'];

    return (
      <Host
        id={hostId}
        role="listitem"
        aria-disabled={a11yBoolean(this.disabled)}
        onClick={(event: MouseEvent) => this.activateItem(event)}
        class={{
          disabled: this.disabled,
          selected: this.selected,
          checkbox: this.checkbox,
          'has-divider': this.hasDivider,
        }}
      >
        <div class="item-surface">
          <button
            {...this.inheritAriaAttributes}
            ref={this.primaryActionRef}
            class="primary-action"
            type="button"
            tabindex={-1}
            disabled={this.disabled}
            aria-pressed={
              this.checkbox ? undefined : a11yBoolean(this.selected)
            }
            aria-labelledby={
              !hasInheritedLabel && this.label ? labelId : undefined
            }
          >
            {this.renderStandardContent(labelId)}
            <slot></slot>
          </button>
          <button
            class="drag-gripper"
            type="button"
            tabindex={-1}
            disabled={this.disabled}
            aria-pressed="false"
            aria-label={
              this.label ? `Reorder ${this.label}` : 'Reorder list item'
            }
          >
            <ix-icon name={iconDragGripper} aria-hidden="true"></ix-icon>
          </button>
          {this.checkbox ? (
            <ix-checkbox
              class="selection-checkbox"
              checked={this.selected}
              disabled={this.disabled}
              aria-label={
                this.label ? `Select ${this.label}` : 'Select list item'
              }
              onCheckedChange={(event) => this.handleSelectedChange(event)}
            ></ix-checkbox>
          ) : null}
          <div class="action" inert={this.disabled}>
            <slot name="action"></slot>
          </div>
        </div>
        {/* {tooltip ? (
          <ix-tooltip for={this.primaryActionRef.waitForCurrent()}>
            {tooltip}
          </ix-tooltip>
        ) : null} */}
        <div class="drag-announcement" aria-live="polite" aria-atomic="true" />
      </Host>
    );
  }
}
