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
  h,
  Host,
  Mixin,
  Prop,
  State,
  VNode,
  Watch,
} from '@stencil/core';
import { a11yBoolean, a11yHostAttributes } from '../utils/a11y';
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
import { convertToRemString } from '../utils/rwd.util';
import { hasSlottedElements } from '../utils/shadow-dom';
import {
  getBadgeStatusIcon,
  getBadgeStatusIconPlate,
  getResolvedStatusIconVariant,
} from './badge.status-icon';
import {
  BADGE_ANATOMY_TYPES,
  BADGE_ATTACHED_OFFSET_DEFAULTS,
  BADGE_POSITIONS,
  BADGE_VARIANTS,
  BadgeAnatomyType,
  BadgePosition,
  BadgeVariant,
} from './badge.types';
import { formatBadgeLabel } from './badge.utils';

/** Slot name for the screen-reader description. */
const BADGE_DESCRIPTION_SLOT = 'description';

/**
 * Overlay indicator for counts, labels, dots, and status icons.
 *
 * **Attached** (default slot has content): the indicator is decorative.
 * When `label` is set, that text is exposed on the anchor via `aria-describedby`.
 *
 * **Standalone** (empty default slot): author `role` / `aria-*` stay on the host.
 * For `dot` and `status-icon`, provide a host `aria-label` and a naming role
 * (for example `role="img"`, or `role="status"` / `role="alert"` for a live region).
 *
 * Override max-width with `--ix-badge-max-width`.
 *
 * @since 5.2.0
 */
@Component({
  tag: 'ix-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin, ComponentIdMixin)
  implements InheritAriaAttributesMixinContract, ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxBadgeElement;

  /**
   * Badge type (`counter`, `label`, `dot`, or `status-icon`).
   *
   * @since 5.2.0
   */
  @Prop({ reflect: true }) type: BadgeAnatomyType = 'counter';

  /**
   * Visible text or count.
   * Required for `label` and `counter`. Omit for `dot` and `status-icon`.
   * Counters accept integers only (decimals truncated); values above 99 render as `99+`.
   *
   * @since 5.2.0
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * Color variant.
   * For `status-icon`, unsupported values fall back to `info`.
   * Use `error` only with `status-icon` (other types map it to `alarm`).
   *
   * @since 5.2.0
   */
  @Prop({ reflect: true }) variant: BadgeVariant = 'primary';

  /**
   * Show the badge in outline style.
   *
   * @since 5.2.0
   */
  @Prop({ reflect: true }) outline = false;

  /**
   * Add a high-contrast border on filled badges.
   * Ignored when **outline** is `true` or **type** is `status-icon`.
   *
   * @since 5.2.0
   */
  @Prop({ reflect: true }) border = false;

  /**
   * Position relative to the slotted anchor.
   * Only has an effect when attached.
   *
   * @since 5.2.0
   */
  @Prop({ reflect: true }) position: BadgePosition = 'top-after';

  /**
   * Extra horizontal offset in pixels.
   * Only has an effect when attached.
   * Added to the type default.
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'offset-x' }) offsetX = 0;

  /**
   * Extra vertical offset in pixels.
   * Only has an effect when attached.
   * Added to the type default.
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'offset-y' }) offsetY = 0;

  /**
   * Play the attention pulse animation.
   * Override duration with `--ix-badge-animation-duration` (default `2s`).
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'enable-animation', reflect: true }) enableAnimation =
    false;

  /**
   * Custom background or border color.
   * Only has an effect when **variant** is `custom`.
   *
   * @since 5.2.0
   */
  @Prop() background?: string;

  /**
   * Custom text color.
   * Only has an effect when **variant** is `custom`.
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'badge-color' }) badgeColor?: string;

  /**
   * Leading icon name.
   * Only has an effect when **type** is `label`.
   *
   * @since 5.2.0
   */
  @Prop() icon?: string;

  /**
   * Accessible name for the leading icon.
   * When unset, the icon is decorative if **label** provides visible text.
   * Only has an effect when **type** is `label`.
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'aria-label-icon' }) ariaLabelIcon?: string;

  /**
   * Left-align label content.
   * Only has an effect when **type** is `label`.
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'align-left', reflect: true }) alignLeft = false;

  /**
   * Display a tooltip when the badge is standalone.
   * By default, no tooltip is displayed.
   * Add the attribute to use the badge label (or host `aria-label`) as the tooltip, or pass a string for custom text.
   * Ignored when the badge is attached to an anchor.
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'tooltip-text' }) tooltipText: string | boolean = false;

  @State() hasAnchor = false;

  private descriptionId = '';

  private anchorElements: HTMLElement[] = [];

  private slotElement?: HTMLSlotElement;

  private readonly indicatorElementRef = makeRef<HTMLElement>();

  private hasDisconnected = false;

  override componentWillLoad() {
    super.componentWillLoad();
    this.descriptionId = `${this.getHostElementId()}-description`;
    const hasAnchor = this.detectHasAnchor();

    if (hasAnchor) {
      this.hasAnchor = true;
      a11yHostAttributes(this.hostElement);
      this.inheritAriaAttributes = {};
      return;
    }

    this.hasAnchor = false;
    // Preserve author ARIA for standalone mode.
  }

  override componentDidLoad() {
    this.syncAnchorDescribedBy();
  }

  override componentDidRender() {
    const nextHasAnchor = this.detectHasAnchor();

    if (nextHasAnchor !== this.hasAnchor) {
      this.applyAnchorMode(nextHasAnchor);
      this.syncAnchorDescribedBy();
    }
  }

  override connectedCallback() {
    if (this.hasDisconnected) {
      this.syncAnchorDescribedBy();
      this.hasDisconnected = false;
    }
  }

  override disconnectedCallback() {
    this.clearAnchorDescribedBy();
    this.hasDisconnected = true;
  }

  @Watch('label')
  @Watch('type')
  labelOrTypeChanged() {
    if (this.hasAnchor) {
      this.syncAnchorDescribedBy();
    }
  }

  private readonly setSlotRef = (element: HTMLSlotElement | undefined) => {
    this.slotElement = element;
  };

  private readonly onSlotChange = () => {
    this.applyAnchorMode(this.detectHasAnchor());
    this.syncAnchorDescribedBy();
  };

  private isDescriptionElement(element: Element): boolean {
    return (
      element.getAttribute('slot') === BADGE_DESCRIPTION_SLOT ||
      (!!this.descriptionId && element.id === this.descriptionId)
    );
  }

  private getAnchorElements(): HTMLElement[] {
    return Array.from(this.hostElement.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement && !this.isDescriptionElement(child)
    );
  }

  private detectHasAnchor(): boolean {
    if (hasSlottedElements(this.slotElement)) {
      return true;
    }

    return this.getAnchorElements().length > 0;
  }

  private applyAnchorMode(hasAnchor: boolean) {
    if (hasAnchor === this.hasAnchor) {
      return;
    }

    this.clearAnchorDescribedBy();

    if (hasAnchor) {
      this.hasAnchor = true;
      a11yHostAttributes(this.hostElement);
      this.inheritAriaAttributes = {};
      this.descriptionId = `${this.getHostElementId()}-description`;
      return;
    }

    this.hasAnchor = false;
    // Re-apply author ARIA after leaving attached mode.
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
  }

  private getResolvedVariant(): BadgeVariant {
    if (this.variant === 'error') {
      return this.getResolvedType() === 'status-icon' ? 'error' : 'alarm';
    }

    return (BADGE_VARIANTS as readonly string[]).includes(this.variant)
      ? this.variant
      : 'primary';
  }

  private getResolvedType(): BadgeAnatomyType {
    return BADGE_ANATOMY_TYPES.includes(this.type) ? this.type : 'counter';
  }

  private getResolvedPosition(): BadgePosition {
    return BADGE_POSITIONS.includes(this.position)
      ? this.position
      : 'top-after';
  }

  private getResolvedOffsets(): { x: number; y: number } {
    const type = this.getResolvedType();
    const defaults = this.hasAnchor
      ? BADGE_ATTACHED_OFFSET_DEFAULTS[type]
      : { x: 0, y: 0 };

    return {
      x: defaults.x + this.offsetX,
      y: defaults.y + this.offsetY,
    };
  }

  private getFormattedLabel(type: BadgeAnatomyType): string | null {
    return formatBadgeLabel(type, this.label);
  }

  private getAccessibleText(formattedLabel: string | null): string | undefined {
    return formattedLabel || undefined;
  }

  private isTooltipRequested(): boolean {
    return !!(
      this.tooltipText || this.hostElement.hasAttribute('tooltip-text')
    );
  }

  private hasVisibleIndicator(
    type: BadgeAnatomyType,
    formattedLabel: string | null
  ): boolean {
    if (type === 'counter' || type === 'label') {
      return !!formattedLabel;
    }

    return type === 'dot' || type === 'status-icon';
  }

  private shouldShowTooltip(
    type: BadgeAnatomyType,
    formattedLabel: string | null
  ): boolean {
    return (
      !this.hasAnchor &&
      this.isTooltipRequested() &&
      this.hasVisibleIndicator(type, formattedLabel)
    );
  }

  private getTooltipContent(formattedLabel: string | null): string | undefined {
    if (typeof this.tooltipText === 'string' && this.tooltipText.trim()) {
      return this.tooltipText.trim();
    }

    return (
      formattedLabel?.trim() ||
      this.inheritAriaAttributes['aria-label']?.trim() ||
      this.hostElement.getAttribute('aria-label')?.trim() ||
      undefined
    );
  }

  private getTooltip(formattedLabel: string | null) {
    if (!this.shouldShowTooltip(this.getResolvedType(), formattedLabel)) {
      return null;
    }

    const text = this.getTooltipContent(formattedLabel);
    if (!text) {
      return null;
    }

    return (
      <ix-tooltip
        for={this.indicatorElementRef.waitForCurrent()}
        aria-label={text}
      >
        {text}
      </ix-tooltip>
    );
  }

  private syncAnchorDescribedBy() {
    this.clearAnchorDescribedBy();

    if (!this.hasAnchor) {
      return;
    }

    const accessibleText = this.getAccessibleText(
      this.getFormattedLabel(this.getResolvedType())
    );

    if (!accessibleText) {
      return;
    }

    const descriptionEl = this.ensureLightDomDescription(accessibleText);
    const anchors = this.getAnchorElements();

    for (const anchor of anchors) {
      const existing = anchor.getAttribute('aria-describedby');
      const ids = new Set(
        existing?.split(/\s+/).filter((id) => id.length > 0) ?? []
      );
      ids.add(descriptionEl.id);
      anchor.setAttribute('aria-describedby', Array.from(ids).join(' '));
      anchor.dataset.ixBadgeDescribedby = descriptionEl.id;
    }

    this.anchorElements = anchors;
  }

  private ensureLightDomDescription(text: string): HTMLElement {
    let descriptionEl = Array.from(this.hostElement.children).find(
      (child): child is HTMLElement =>
        child instanceof HTMLElement && this.isDescriptionElement(child)
    );

    if (!descriptionEl) {
      descriptionEl = document.createElement('span');
      descriptionEl.slot = BADGE_DESCRIPTION_SLOT;
      descriptionEl.className = 'description';
      this.hostElement.appendChild(descriptionEl);
    }

    descriptionEl.id = this.descriptionId;
    descriptionEl.textContent = text;
    return descriptionEl;
  }

  private removeLightDomDescription() {
    Array.from(this.hostElement.children)
      .filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement && this.isDescriptionElement(child)
      )
      .forEach((child) => child.remove());
  }

  private clearAnchorDescribedBy() {
    for (const anchor of this.anchorElements) {
      if (anchor.dataset.ixBadgeDescribedby !== this.descriptionId) {
        continue;
      }

      const existing = anchor.getAttribute('aria-describedby');
      const ids =
        existing?.split(/\s+/).filter((id) => id !== this.descriptionId) ?? [];

      delete anchor.dataset.ixBadgeDescribedby;

      if (ids.length > 0) {
        anchor.setAttribute('aria-describedby', ids.join(' '));
      } else {
        anchor.removeAttribute('aria-describedby');
      }
    }

    this.anchorElements = [];
    this.removeLightDomDescription();
  }

  private renderIndicatorShell(
    _accessibleText: string | undefined,
    content?: VNode | VNode[]
  ) {
    return (
      <div
        class="indicator"
        ref={this.indicatorElementRef}
        aria-hidden={this.hasAnchor ? a11yBoolean(true) : undefined}
      >
        {content}
      </div>
    );
  }

  private renderIndicator(
    type: BadgeAnatomyType,
    variant: BadgeVariant,
    accessibleText: string | undefined,
    formattedLabel: string | null
  ) {
    if (type === 'counter') {
      if (!formattedLabel) {
        return null;
      }

      return this.renderIndicatorShell(
        accessibleText,
        <span class="label">{formattedLabel}</span>
      );
    }

    if (type === 'dot') {
      return this.renderIndicatorShell(accessibleText);
    }

    if (type === 'label') {
      if (!formattedLabel) {
        return null;
      }

      const iconIsDecorative = !this.ariaLabelIcon?.trim();

      return this.renderIndicatorShell(accessibleText, [
        this.icon ? (
          <ix-icon
            key="icon"
            class="icon"
            name={this.icon}
            size="16"
            aria-label={this.ariaLabelIcon}
            aria-hidden={a11yBoolean(iconIsDecorative)}
          />
        ) : null,
        <span key="label" class="label">
          {formattedLabel}
        </span>,
      ]);
    }

    if (type === 'status-icon') {
      if (this.outline) {
        return this.renderIndicatorShell(
          accessibleText,
          <ix-icon
            class="status-icon"
            name={getBadgeStatusIcon(variant, true)}
            size="16"
            aria-hidden={a11yBoolean(true)}
          />
        );
      }

      return this.renderIndicatorShell(
        accessibleText,
        <span class="status-icon-stack">
          <ix-icon
            class="status-icon status-icon-plate"
            name={getBadgeStatusIconPlate(variant)}
            size="16"
            aria-hidden={a11yBoolean(true)}
          />
          <ix-icon
            class="status-icon status-icon-glyph"
            name={getBadgeStatusIcon(variant, false)}
            size="16"
            aria-hidden={a11yBoolean(true)}
          />
        </span>
      );
    }

    return null;
  }

  override render() {
    const type = this.getResolvedType();
    const variant = this.getResolvedVariant();
    const position = this.getResolvedPosition();
    const offsets = this.getResolvedOffsets();
    const formattedLabel = this.getFormattedLabel(type);
    const accessibleText = this.getAccessibleText(formattedLabel);
    const hostVariant =
      type === 'status-icon' ? getResolvedStatusIconVariant(variant) : variant;
    const showBorder = this.border && type !== 'status-icon';
    const showTooltip = this.shouldShowTooltip(type, formattedLabel);

    const customHostStyle =
      hostVariant === 'custom'
        ? ({
            '--ix-badge-custom-background': this.background,
            '--ix-badge-custom-color': this.badgeColor,
          } as Record<string, string | undefined>)
        : undefined;

    return (
      <Host
        {...(this.hasAnchor ? {} : this.inheritAriaAttributes)}
        class={{
          attached: this.hasAnchor,
          outline: this.outline,
          border: showBorder,
          'enable-animation': this.enableAnimation,
          'align-left': this.alignLeft,
          'with-icon': type === 'label' && !!this.icon,
          'with-tooltip': showTooltip,
          ...(this.hasAnchor ? { [position]: true } : {}),
          [hostVariant]: true,
        }}
        style={{
          ...customHostStyle,
          ...(this.hasAnchor
            ? {
                '--ix-badge-offset-x': convertToRemString(offsets.x),
                '--ix-badge-offset-y': convertToRemString(offsets.y),
              }
            : {}),
        }}
      >
        <slot name={BADGE_DESCRIPTION_SLOT}></slot>
        <div class="anchor">
          <slot ref={this.setSlotRef} onSlotchange={this.onSlotChange}></slot>
        </div>
        {this.renderIndicator(type, variant, accessibleText, formattedLabel)}
        {this.getTooltip(formattedLabel)}
      </Host>
    );
  }
}
