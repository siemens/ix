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
  labelBadge,
  showcaseParameters,
  themePanel,
  VARIANT_ROWS,
  variantGridHeaders,
  attachedVariantGridHeaders,
} from './badge-preview.shared';

/**
 * Mirrors `packages/react-test-app/src/preview-examples/badge-label.tsx`
 * (`/preview/badge-label`).
 */
function standaloneVariantGrid(): TemplateResult {
  return html`
    <div class="variant-grid">
      ${variantGridHeaders()}
      ${VARIANT_ROWS.map(
        ({ label, variant }) => html`
          <span class="variant-grid-row-label">${label}</span>
          ${cell(`${variant} · filled`, labelBadge({ variant }))}
          ${cell(`${variant} · outline`, labelBadge({ variant, outline: true }))}
          ${cell(`${variant} · border`, labelBadge({ variant, border: true }))}
          ${cell(
            `${variant} · pulse`,
            html`<div class="grid-cell-pulse-group">
              ${labelBadge({ variant, enableAnimation: true })}
              ${labelBadge({ variant, outline: true, enableAnimation: true })}
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
      ${VARIANT_ROWS.map(
        ({ label, variant }) => html`
          <span class="variant-grid-row-label">${label}</span>
          ${cell(
            `${variant} · filled · attached`,
            labelBadge({
              variant,
              children: iconButtonAnchor(`${label} anchor`),
            }),
            true
          )}
          ${cell(
            `${variant} · border · attached`,
            labelBadge({
              variant,
              border: true,
              children: iconButtonAnchor(`${label} anchor`),
            }),
            true
          )}
          ${cell(
            `${variant} · pulse · attached`,
            labelBadge({
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

function badgeLabelPreview(): TemplateResult {
  return html`
    <div class="badge-preview">
      <section>
        <h2>Label badge</h2>
        <p class="edge-intro">
          <code>type="label"</code> · text pill (20px height) ·
          <code>label</code> required · body-regular typography · leading
          <code>icon</code> in examples. Optional
          <code>aria-label-icon</code> and <code>align-left</code>. Attached
          default offset −10px / −10px.
        </p>
      </section>

      <section class="theme-section">
        ${themePanel('dark', 'Dark', standaloneVariantGrid())}
        ${themePanel('light', 'Light', standaloneVariantGrid())}
      </section>

      <section>
        <h2>Variants — attached</h2>
        <p class="edge-note">
          Icon button anchor; label overlays top-trailing (−0.625rem default
          offset).
        </p>
        ${themePanel('dark', 'Dark', attachedVariantGrid())}
        ${themePanel('light', 'Light', attachedVariantGrid())}
      </section>

      <section>
        <h2>Icon</h2>
        <div class="demo-grid">
          ${cell(
            'icon={star} · decorative (default)',
            labelBadge({ variant: 'primary' })
          )}
          ${cell(
            'icon={star} · decorative · warning',
            labelBadge({ variant: 'warning' })
          )}
          ${cell(
            'icon={star} · aria-label-icon="Featured"',
            labelBadge({
              variant: 'success',
              label: 'Featured',
              ariaLabelIcon: 'Featured',
            })
          )}
        </div>
      </section>

      <section>
        <h2>Align left</h2>
        <div class="demo-grid">
          ${cell(
            'default · icon + text',
            labelBadge({ variant: 'info', label: "What's new" })
          )}
          ${cell(
            'alignLeft · icon + text',
            labelBadge({
              variant: 'primary',
              label: "What's new",
              alignLeft: true,
            })
          )}
          ${cell(
            'alignLeft · --ix-badge-max-width: 2.5rem',
            labelBadge({
              variant: 'alarm',
              label: "What's new",
              alignLeft: true,
              hostStyle: { '--ix-badge-max-width': '2.5rem' },
            })
          )}
        </div>
      </section>

      <section>
        <h2>Attached anchors</h2>
        <div class="demo-grid">
          ${cell(
            'IxIconButton · alarm',
            labelBadge({
              variant: 'alarm',
              children: iconButtonAnchor("What's new"),
            }),
            true
          )}
          ${cell(
            'IxButton · primary · warning badge',
            labelBadge({
              variant: 'warning',
              children: html`<ix-button>Messages</ix-button>`,
            }),
            true
          )}
          ${cell(
            'IxAvatar · success',
            labelBadge({
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
            labelBadge({
              variant: 'alarm',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          ${cell(
            'position="bottom-after"',
            labelBadge({
              variant: 'info',
              position: 'bottom-after',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          ${cell(
            'offsetX={6} offsetY={-4}',
            labelBadge({
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
          Attached: label text via <code>aria-describedby</code> on anchor.
          Standalone: author ARIA stays on the host (pill-like; opt-in live region).
        </p>
        <div class="demo-grid">
          ${cell(
            'aria-label="New content available"',
            labelBadge({
              variant: 'primary',
              label: 'NEW',
              ariaLabel: 'New content available',
            })
          )}
          ${cell(
            'role="alert" · aria-label="Action required"',
            labelBadge({
              variant: 'critical',
              label: '!',
              role: 'alert',
              ariaLabel: 'Action required',
            })
          )}
        </div>
      </section>

      <section>
        <h2>Pulse</h2>
        <div class="demo-grid">
          ${cell(
            'filled · pulse · standalone',
            labelBadge({ variant: 'warning', enableAnimation: true })
          )}
          ${cell(
            'filled · pulse · attached',
            labelBadge({
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

export const Label: Story = {
  name: 'Label',
  render: () => badgeLabelPreview(),
};
