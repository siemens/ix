/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, type TemplateResult } from 'lit';
import {
  cell,
  iconButtonAnchor,
  showcaseParameters,
  STATUS_ICON_VARIANT_ROWS,
  statusIconBadge,
  themePanel,
  variantGridHeaders,
  attachedVariantGridHeaders,
} from './badge-preview.shared';

/**
 * Mirrors `packages/react-test-app/src/preview-examples/badge-status-icon.tsx`
 * (`/preview/badge-status-icon`).
 */
function standaloneVariantGrid(): TemplateResult {
  return html`
    <div class="variant-grid">
      ${variantGridHeaders()}
      ${STATUS_ICON_VARIANT_ROWS.map(
        ({ label, variant }) => html`
          <span class="variant-grid-row-label">${label}</span>
          ${cell(`${variant} · filled`, statusIconBadge({ variant }))}
          ${cell(
            `${variant} · outline`,
            statusIconBadge({ variant, outline: true })
          )}
          ${cell(
            `${variant} · border`,
            statusIconBadge({ variant, border: true })
          )}
          ${cell(
            `${variant} · pulse`,
            html`<div class="grid-cell-pulse-group">
              ${statusIconBadge({ variant, enableAnimation: true })}
              ${statusIconBadge({
                variant,
                outline: true,
                enableAnimation: true,
              })}
            </div>`
          )}
        `
      )}
    </div>
  `;
}

function attachedVariantGrid(): TemplateResult {
  return html`
    <div class="variant-grid variant-grid--attached">
      ${attachedVariantGridHeaders()}
      ${STATUS_ICON_VARIANT_ROWS.map(
        ({ label, variant }) => html`
          <span class="variant-grid-row-label">${label}</span>
          ${cell(
            `${variant} · filled · attached`,
            statusIconBadge({
              variant,
              children: iconButtonAnchor(`${label} anchor`),
            }),
            true
          )}
          ${cell(
            `${variant} · border · attached`,
            statusIconBadge({
              variant,
              border: true,
              children: iconButtonAnchor(`${label} anchor`),
            }),
            true
          )}
          ${cell(
            `${variant} · pulse · attached`,
            statusIconBadge({
              variant,
              enableAnimation: true,
              children: iconButtonAnchor(`${label} anchor`),
            }),
            true
          )}
        `
      )}
    </div>
  `;
}

function badgeStatusIconPreview(): TemplateResult {
  return html`
    <div class="badge-preview">
      <section>
        <h2>Status-icon badge</h2>
        <p class="edge-intro">
          <code>type="status-icon"</code> · 20×20px circle · icon from
          <code>variant</code> · no <code>label</code>. Attached default offset
          −10px / −10px. Same a11y as dot: attached = decorative; standalone
          needs <code>aria-label</code> on the host.
        </p>
      </section>

      <section class="theme-section">
        ${themePanel('dark', 'Dark', standaloneVariantGrid())}
        ${themePanel('light', 'Light', standaloneVariantGrid())}
      </section>

      <section>
        <h2>Variants — attached</h2>
        <p class="edge-note">
          Icon button anchor; status icon overlays top-trailing (−0.625rem
          default offset).
        </p>
        ${themePanel('dark', 'Dark', attachedVariantGrid())}
        ${themePanel('light', 'Light', attachedVariantGrid())}
      </section>

      <section>
        <h2>Attached anchors</h2>
        <div class="demo-grid">
          ${cell(
            'IxIconButton · alarm',
            statusIconBadge({
              variant: 'alarm',
              children: iconButtonAnchor('Error state'),
            }),
            true
          )}
          ${cell(
            'IxButton · primary · warning badge',
            statusIconBadge({
              variant: 'warning',
              children: html`<ix-button>Messages</ix-button>`,
            }),
            true
          )}
          ${cell(
            'IxAvatar · success',
            statusIconBadge({
              variant: 'success',
              children: html`<ix-avatar username="User"></ix-avatar>`,
            }),
            true
          )}
        </div>
      </section>

      <section>
        <h2>Placement</h2>
        <div class="demo-grid">
          ${cell(
            'position="top-after" (default)',
            statusIconBadge({
              variant: 'alarm',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          ${cell(
            'position="bottom-after"',
            statusIconBadge({
              variant: 'info',
              position: 'bottom-after',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          ${cell(
            'offsetX={6} offsetY={-4}',
            statusIconBadge({
              variant: 'warning',
              offsetX: 6,
              offsetY: -4,
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
        </div>
      </section>

      <section>
        <h2>Standalone a11y</h2>
        <p class="edge-note">
          Set <code>aria-label</code> on <code>ix-badge</code> (no
          <code>aria-describedby</code> on anchor when attached).
        </p>
        <div class="demo-grid">
          ${cell(
            'aria-label="Action required"',
            statusIconBadge({
              variant: 'alarm',
              ariaLabel: 'Action required',
            })
          )}
          ${cell(
            'role="alert" · aria-label="Critical failure"',
            statusIconBadge({
              variant: 'critical',
              role: 'alert',
              ariaLabel: 'Critical failure',
            })
          )}
        </div>
      </section>

      <section>
        <h2>Pulse</h2>
        <div class="demo-grid">
          ${cell(
            'filled · pulse · standalone',
            statusIconBadge({ variant: 'warning', enableAnimation: true })
          )}
          ${cell(
            'filled · pulse · attached',
            statusIconBadge({
              variant: 'warning',
              enableAnimation: true,
              children: iconButtonAnchor('Live updates'),
            }),
            true
          )}
        </div>
      </section>
    </div>
  `;
}

const meta = {
  title: 'Example/Badge',
  tags: [],
  parameters: showcaseParameters,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const StatusIcon: Story = {
  name: 'Status icon',
  render: () => badgeStatusIconPreview(),
};
