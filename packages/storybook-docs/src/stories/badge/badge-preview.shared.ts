/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, nothing, type TemplateResult } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import './badge-preview.css';

/** Aligned with chip / react badge preview custom tokens. */
export const CUSTOM_BADGE_BACKGROUND = 'var(--theme-chart-11)';
export const CUSTOM_BADGE_COLOR = 'var(--theme-color-inv-std-text)';
export const CUSTOM_BADGE_OUTLINE_COLOR = 'var(--theme-chip-outline--color)';

export const VARIANT_ROWS = [
  { label: 'Primary', variant: 'primary' },
  { label: 'Alarm', variant: 'alarm' },
  { label: 'Critical', variant: 'critical' },
  { label: 'Warning', variant: 'warning' },
  { label: 'Info', variant: 'info' },
  { label: 'Success', variant: 'success' },
  { label: 'Neutral', variant: 'neutral' },
  { label: 'Custom', variant: 'custom' },
] as const;

export const STATUS_ICON_VARIANT_ROWS = [
  { label: 'Alarm', variant: 'alarm' },
  { label: 'Error', variant: 'error' },
  { label: 'Critical', variant: 'critical' },
  { label: 'Warning', variant: 'warning' },
  { label: 'Success', variant: 'success' },
  { label: 'Info', variant: 'info' },
] as const;

export type BadgeVariant = (typeof VARIANT_ROWS)[number]['variant'];
export type StatusIconVariant =
  (typeof STATUS_ICON_VARIANT_ROWS)[number]['variant'];

/** Showcase stories — a11y deep-dive stays under Example/Badge/Accessibility. */
export const showcaseParameters = {
  layout: 'fullscreen' as const,
  a11y: {
    test: 'off' as const,
  },
};

export function cell(
  label: string,
  content: TemplateResult | typeof nothing,
  attached = false
): TemplateResult {
  return html`
    <div class="grid-cell${attached ? ' grid-cell--attached' : ''}">
      <span class="grid-cell-label">${label}</span>
      ${content}
    </div>
  `;
}

export function themePanel(
  colorSchema: 'dark' | 'light',
  title: string,
  content: TemplateResult
): TemplateResult {
  return html`
    <section
      class="theme-panel"
      data-ix-color-schema=${colorSchema}
      data-ix-theme="classic"
    >
      <h3 class="theme-panel-title">${title}</h3>
      ${content}
    </section>
  `;
}

export function variantGridHeaders(): TemplateResult {
  return html`
    <span class="variant-grid-corner" aria-hidden="true"></span>
    <span class="variant-grid-header">Filled</span>
    <span class="variant-grid-header">Outline</span>
    <span class="variant-grid-header">Border</span>
    <span class="variant-grid-header">Pulse</span>
  `;
}

/** Attached grids omit Outline — not recommended on anchors. */
export function attachedVariantGridHeaders(): TemplateResult {
  return html`
    <span class="variant-grid-corner" aria-hidden="true"></span>
    <span class="variant-grid-header">Filled</span>
    <span class="variant-grid-header">Border</span>
    <span class="variant-grid-header">Pulse</span>
  `;
}

export function iconButtonAnchor(ariaLabel: string): TemplateResult {
  return html`
    <ix-icon-button icon="info" aria-label=${ariaLabel}></ix-icon-button>
  `;
}

type CustomColors = {
  background?: string;
  badgeColor?: string;
};

function resolveCustomBackground(
  variant: BadgeVariant,
  custom?: CustomColors
): string | undefined {
  if (custom?.background) {
    return custom.background;
  }
  return variant === 'custom' ? CUSTOM_BADGE_BACKGROUND : undefined;
}

function resolveCustomBadgeColor(
  variant: BadgeVariant,
  outline: boolean,
  custom?: CustomColors
): string | undefined {
  if (custom?.badgeColor) {
    return custom.badgeColor;
  }
  if (variant !== 'custom') {
    return undefined;
  }
  return outline ? CUSTOM_BADGE_OUTLINE_COLOR : CUSTOM_BADGE_COLOR;
}

export function counterBadge(options: {
  variant: BadgeVariant;
  label?: string;
  outline?: boolean;
  border?: boolean;
  enableAnimation?: boolean;
  position?: 'top-after' | 'bottom-after';
  offsetX?: number;
  offsetY?: number;
  hostStyle?: Record<string, string>;
  custom?: CustomColors;
  children?: TemplateResult | typeof nothing;
}): TemplateResult {
  const {
    variant,
    label = '1',
    outline = false,
    border = false,
    enableAnimation = false,
    position,
    offsetX,
    offsetY,
    hostStyle,
    custom,
    children,
  } = options;

  const background = resolveCustomBackground(variant, custom);
  const badgeColor = resolveCustomBadgeColor(variant, outline, custom);

  return html`
    <ix-badge
      class="align-host"
      type="counter"
      label=${label}
      variant=${variant}
      ?outline=${outline}
      ?border=${border}
      ?enable-animation=${enableAnimation}
      position=${position ?? nothing}
      offset-x=${offsetX ?? nothing}
      offset-y=${offsetY ?? nothing}
      background=${background ?? nothing}
      badge-color=${badgeColor ?? nothing}
      style=${hostStyle ? styleMap(hostStyle) : nothing}
      >${children ?? nothing}</ix-badge
    >
  `;
}

export function labelBadge(options: {
  variant: BadgeVariant;
  label?: string;
  icon?: string;
  ariaLabelIcon?: string;
  alignLeft?: boolean;
  outline?: boolean;
  border?: boolean;
  enableAnimation?: boolean;
  position?: 'top-after' | 'bottom-after';
  offsetX?: number;
  offsetY?: number;
  hostStyle?: Record<string, string>;
  ariaLabel?: string;
  role?: string;
  custom?: CustomColors;
  children?: TemplateResult | typeof nothing;
}): TemplateResult {
  const {
    variant,
    label = 'NEW',
    icon = 'star',
    ariaLabelIcon,
    alignLeft = false,
    outline = false,
    border = false,
    enableAnimation = false,
    position,
    offsetX,
    offsetY,
    hostStyle,
    ariaLabel,
    role,
    custom,
    children,
  } = options;

  const background = resolveCustomBackground(variant, custom);
  const badgeColor = resolveCustomBadgeColor(variant, outline, custom);

  return html`
    <ix-badge
      class="align-host"
      type="label"
      label=${label}
      icon=${icon}
      aria-label-icon=${ariaLabelIcon ?? nothing}
      aria-label=${ariaLabel ?? nothing}
      role=${role ?? nothing}
      ?align-left=${alignLeft}
      variant=${variant}
      ?outline=${outline}
      ?border=${border}
      ?enable-animation=${enableAnimation}
      position=${position ?? nothing}
      offset-x=${offsetX ?? nothing}
      offset-y=${offsetY ?? nothing}
      background=${background ?? nothing}
      badge-color=${badgeColor ?? nothing}
      style=${hostStyle ? styleMap(hostStyle) : nothing}
      >${children ?? nothing}</ix-badge
    >
  `;
}

export function dotBadge(options: {
  variant: BadgeVariant;
  outline?: boolean;
  border?: boolean;
  enableAnimation?: boolean;
  position?: 'top-after' | 'bottom-after';
  offsetX?: number;
  offsetY?: number;
  ariaLabel?: string;
  role?: string;
  custom?: CustomColors;
  children?: TemplateResult | typeof nothing;
}): TemplateResult {
  const {
    variant,
    outline = false,
    border = false,
    enableAnimation = false,
    position,
    offsetX,
    offsetY,
    ariaLabel,
    role,
    custom,
    children,
  } = options;

  const background = resolveCustomBackground(variant, custom);
  const badgeColor = resolveCustomBadgeColor(variant, outline, custom);

  return html`
    <ix-badge
      class="align-host"
      type="dot"
      variant=${variant}
      aria-label=${ariaLabel ?? nothing}
      role=${role ?? nothing}
      ?outline=${outline}
      ?border=${border}
      ?enable-animation=${enableAnimation}
      position=${position ?? nothing}
      offset-x=${offsetX ?? nothing}
      offset-y=${offsetY ?? nothing}
      background=${background ?? nothing}
      badge-color=${badgeColor ?? nothing}
      >${children ?? nothing}</ix-badge
    >
  `;
}

export function statusIconBadge(options: {
  variant: StatusIconVariant;
  outline?: boolean;
  border?: boolean;
  enableAnimation?: boolean;
  position?: 'top-after' | 'bottom-after';
  offsetX?: number;
  offsetY?: number;
  ariaLabel?: string;
  role?: string;
  children?: TemplateResult | typeof nothing;
}): TemplateResult {
  const {
    variant,
    outline = false,
    border = false,
    enableAnimation = false,
    position,
    offsetX,
    offsetY,
    ariaLabel,
    role,
    children,
  } = options;

  return html`
    <ix-badge
      class="align-host"
      type="status-icon"
      variant=${variant}
      aria-label=${ariaLabel ?? nothing}
      role=${role ?? nothing}
      ?outline=${outline}
      ?border=${border}
      ?enable-animation=${enableAnimation}
      position=${position ?? nothing}
      offset-x=${offsetX ?? nothing}
      offset-y=${offsetY ?? nothing}
      >${children ?? nothing}</ix-badge
    >
  `;
}
