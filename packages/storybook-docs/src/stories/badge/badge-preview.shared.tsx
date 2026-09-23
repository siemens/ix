/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h, type VNode } from '@stencil/core';
import './badge-preview.css';

/** Aligned with chip / react badge preview custom tokens. */
export const CUSTOM_BADGE_BACKGROUND = 'var(--si-sys-data-categorical-9)';
export const CUSTOM_BADGE_COLOR = 'var(--si-sys-text-inverse)';
export const CUSTOM_BADGE_OUTLINE_COLOR = 'var(--si-sys-text-primary)';

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
  content: VNode | null | undefined,
  attached = false
): VNode {
  return (
    <div class={`grid-cell${attached ? ' grid-cell--attached' : ''}`}>
      <span class="grid-cell-label">{label}</span>
      {content}
    </div>
  );
}

export function themePanel(
  colorSchema: 'dark' | 'light',
  title: string,
  content: VNode
): VNode {
  return (
    <section
      class="theme-panel"
      data-ix-color-schema={colorSchema}
      data-ix-theme="classic"
    >
      <h3 class="theme-panel-title">{title}</h3>
      {content}
    </section>
  );
}

export function variantGridHeaders(): VNode[] {
  return [
    <span
      key="header-corner"
      class="variant-grid-corner"
      aria-hidden="true"
    ></span>,
    <span key="header-filled" class="variant-grid-header">
      Filled
    </span>,
    <span key="header-outline" class="variant-grid-header">
      Outline
    </span>,
    <span key="header-border" class="variant-grid-header">
      Border
    </span>,
    <span key="header-pulse" class="variant-grid-header">
      Pulse
    </span>,
  ];
}

/** Attached grids omit Outline — not recommended on anchors. */
export function attachedVariantGridHeaders(): VNode[] {
  return [
    <span
      key="attached-header-corner"
      class="variant-grid-corner"
      aria-hidden="true"
    ></span>,
    <span key="attached-header-filled" class="variant-grid-header">
      Filled
    </span>,
    <span key="attached-header-border" class="variant-grid-header">
      Border
    </span>,
    <span key="attached-header-pulse" class="variant-grid-header">
      Pulse
    </span>,
  ];
}

export function iconButtonAnchor(ariaLabel: string): VNode {
  return <ix-icon-button icon="info" aria-label={ariaLabel}></ix-icon-button>;
}

type VariantRow<V extends string> = {
  label: string;
  variant: V;
};

type VariantGridBadgeFactory<V extends string> = (options: {
  variant: V;
  outline?: boolean;
  border?: boolean;
  enableAnimation?: boolean;
  children?: VNode | null;
}) => VNode;

export function buildStandaloneVariantGrid<V extends string>(
  rows: readonly VariantRow<V>[],
  createBadge: VariantGridBadgeFactory<V>
): VNode {
  return (
    <div class="variant-grid">
      {variantGridHeaders()}
      {rows.flatMap(({ label, variant }) => [
        <span key={`${variant}-label`} class="variant-grid-row-label">
          {label}
        </span>,
        <div key={`${variant}-filled`} class="grid-cell">
          <span class="grid-cell-label">{`${variant} · filled`}</span>
          {createBadge({ variant })}
        </div>,
        <div key={`${variant}-outline`} class="grid-cell">
          <span class="grid-cell-label">{`${variant} · outline`}</span>
          {createBadge({ variant, outline: true })}
        </div>,
        <div key={`${variant}-border`} class="grid-cell">
          <span class="grid-cell-label">{`${variant} · border`}</span>
          {createBadge({ variant, border: true })}
        </div>,
        <div key={`${variant}-pulse`} class="grid-cell">
          <span class="grid-cell-label">{`${variant} · pulse`}</span>
          <div class="grid-cell-pulse-group">
            {createBadge({ variant, enableAnimation: true })}
            {createBadge({ variant, outline: true, enableAnimation: true })}
          </div>
        </div>,
      ])}
    </div>
  );
}

export function buildAttachedVariantGrid<V extends string>(
  rows: readonly VariantRow<V>[],
  createBadge: VariantGridBadgeFactory<V>
): VNode {
  return (
    <div class="variant-grid variant-grid--attached">
      {attachedVariantGridHeaders()}
      {rows.flatMap(({ label, variant }) => [
        <span key={`${variant}-attached-label`} class="variant-grid-row-label">
          {label}
        </span>,
        <div
          key={`${variant}-attached-filled`}
          class="grid-cell grid-cell--attached"
        >
          <span class="grid-cell-label">{`${variant} · filled · attached`}</span>
          {createBadge({
            variant,
            children: iconButtonAnchor(`${label} anchor`),
          })}
        </div>,
        <div
          key={`${variant}-attached-border`}
          class="grid-cell grid-cell--attached"
        >
          <span class="grid-cell-label">{`${variant} · border · attached`}</span>
          {createBadge({
            variant,
            border: true,
            children: iconButtonAnchor(`${label} anchor`),
          })}
        </div>,
        <div
          key={`${variant}-attached-pulse`}
          class="grid-cell grid-cell--attached"
        >
          <span class="grid-cell-label">{`${variant} · pulse · attached`}</span>
          {createBadge({
            variant,
            enableAnimation: true,
            children: iconButtonAnchor(`${label} anchor`),
          })}
        </div>,
      ])}
    </div>
  );
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
  children?: VNode | null;
}): VNode {
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

  return (
    <ix-badge
      class="align-host"
      type="counter"
      label={label}
      variant={variant}
      outline={outline || undefined}
      border={border || undefined}
      enableAnimation={enableAnimation || undefined}
      position={position}
      offsetX={offsetX}
      offsetY={offsetY}
      background={background}
      badgeColor={badgeColor}
      style={hostStyle}
    >
      {children}
    </ix-badge>
  );
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
  children?: VNode | null;
}): VNode {
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

  return (
    <ix-badge
      class="align-host"
      type="label"
      label={label}
      icon={icon}
      ariaLabelIcon={ariaLabelIcon}
      aria-label={ariaLabel}
      role={role}
      alignLeft={alignLeft || undefined}
      variant={variant}
      outline={outline || undefined}
      border={border || undefined}
      enableAnimation={enableAnimation || undefined}
      position={position}
      offsetX={offsetX}
      offsetY={offsetY}
      background={background}
      badgeColor={badgeColor}
      style={hostStyle}
    >
      {children}
    </ix-badge>
  );
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
  children?: VNode | null;
}): VNode {
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

  return (
    <ix-badge
      class="align-host"
      type="dot"
      variant={variant}
      aria-label={ariaLabel}
      role={role}
      outline={outline || undefined}
      border={border || undefined}
      enableAnimation={enableAnimation || undefined}
      position={position}
      offsetX={offsetX}
      offsetY={offsetY}
      background={background}
      badgeColor={badgeColor}
    >
      {children}
    </ix-badge>
  );
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
  children?: VNode | null;
}): VNode {
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

  return (
    <ix-badge
      class="align-host"
      type="status-icon"
      variant={variant}
      aria-label={ariaLabel}
      role={role}
      outline={outline || undefined}
      border={border || undefined}
      enableAnimation={enableAnimation || undefined}
      position={position}
      offsetX={offsetX}
      offsetY={offsetY}
    >
      {children}
    </ix-badge>
  );
}
