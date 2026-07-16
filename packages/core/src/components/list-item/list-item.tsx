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
  State,
} from '@stencil/core';
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
import { hasSlottedContent } from '../utils/shadow-dom';

export type ListItemVariant = 'ghost' | 'outline' | 'filled';

/**
 * @slot default - Custom content replacing the standard icon, label, description, and status layout.
 * @slot action - Persistent trailing controls.
 * @slot additional-actions - Secondary controls revealed when the item is hovered or focused.
 * @since 5.2.0
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
   * @since 5.2.0
   */
  @Prop({ reflect: true }) variant: ListItemVariant = 'filled';

  /**
   * Label displayed by the standard item layout.
   * @since 5.2.0
   */
  @Prop() label?: string;

  /**
   * Supporting text displayed below the label.
   * @since 5.2.0
   */
  @Prop() description?: string;

  /**
   * Status displayed at the end of the standard item content.
   * @since 5.2.0
   */
  @Prop() status?: string;

  /**
   * Icon displayed by the standard item layout.
   * @since 5.2.0
   */
  @Prop() icon?: string;

  /**
   * Accessible label for the item icon.
   * @since 5.2.0
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Tooltip text for the primary item surface. Uses the item label by default.
   * @since 5.2.0
   */
  @Prop() tooltipText?: string;

  /**
   * Show the item as selected.
   * @since 5.2.0
   */
  @Prop({ reflect: true }) selected = false;

  /**
   * Disable item activation and action controls.
   * @since 5.2.0
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Display selection with checkbox semantics.
   * @since 5.2.0
   */
  @Prop({ reflect: true }) checkbox = false;

  /**
   * Display a divider below this item.
   * @since 5.2.0
   */
  @Prop({ reflect: true }) hasDivider = false;

  /**
   * Emitted when the primary item surface is activated.
   * @since 5.2.0
   */
  @Event() itemClick!: EventEmitter<HTMLIxListItemElement>;

  /**
   * Requests a controlled selection update when a checkbox item is activated.
   * @since 5.2.0
   */
  @Event() selectedChange!: EventEmitter<boolean>;

  private readonly primaryActionRef = makeRef<HTMLButtonElement>();

  @State() private hasCustomContent = false;

  override getIgnoredAriaAttributes(): A11yAttributeName[] {
    return ['role', 'aria-checked', 'aria-disabled', 'aria-pressed'];
  }

  override componentDidLoad() {
    if (!this.hostElement.hasAttribute('tabindex')) {
      this.hostElement.tabIndex = 0;
    }
  }

  private activateItem() {
    if (this.disabled) {
      return;
    }

    this.itemClick.emit(this.hostElement);

    if (this.checkbox) {
      this.selectedChange.emit(!this.selected);
    }
  }

  private handleDefaultSlotChange(event: Event) {
    this.hasCustomContent = hasSlottedContent(
      event.currentTarget as HTMLSlotElement
    );
  }

  private renderStandardContent(labelId: string) {
    return (
      <div class="standard-content">
        {this.checkbox ? (
          <ix-checkbox
            class="selection-checkbox"
            checked={this.selected}
            aria-hidden="true"
            inert
          ></ix-checkbox>
        ) : null}
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
        {this.status ? (
          <ix-pill class="status" variant="neutral">
            {this.status}
          </ix-pill>
        ) : null}
      </div>
    );
  }

  override render() {
    const hostId = this.getHostElementId();
    const labelId = `${hostId}-label`;
    const hasInheritedLabel =
      !!this.inheritAriaAttributes['aria-label'] ||
      !!this.inheritAriaAttributes['aria-labelledby'];
    const tooltip = this.tooltipText ?? this.label;

    return (
      <Host
        id={hostId}
        role="listitem"
        aria-disabled={a11yBoolean(this.disabled)}
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
            role={this.checkbox ? 'checkbox' : undefined}
            aria-checked={
              this.checkbox ? a11yBoolean(this.selected) : undefined
            }
            aria-pressed={
              this.checkbox ? undefined : a11yBoolean(this.selected)
            }
            aria-labelledby={
              !hasInheritedLabel && this.label ? labelId : undefined
            }
            onClick={() => this.activateItem()}
          >
            <div hidden={this.hasCustomContent}>
              {this.renderStandardContent(labelId)}
            </div>
            <slot
              onSlotchange={(event) => this.handleDefaultSlotChange(event)}
            ></slot>
          </button>
          <div class="action" inert={this.disabled}>
            <slot name="action"></slot>
          </div>
          <div class="additional-actions" inert={this.disabled}>
            <slot name="additional-actions"></slot>
          </div>
        </div>
        {tooltip ? (
          <ix-tooltip for={this.primaryActionRef.waitForCurrent()}>
            {tooltip}
          </ix-tooltip>
        ) : null}
      </Host>
    );
  }
}
