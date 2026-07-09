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
  counterBadge,
  iconButtonAnchor,
  showcaseParameters,
  themePanel,
  VARIANT_ROWS,
  variantGridHeaders,
  attachedVariantGridHeaders,
} from './badge-preview.shared';

/**
 * Mirrors `packages/react-test-app/src/preview-examples/badge.tsx`
 * (`/preview/badge`).
 */
function standaloneVariantGrid(): TemplateResult {
  return html`
    <div class="variant-grid">
      ${variantGridHeaders()}
      ${VARIANT_ROWS.map(
        ({ label, variant }) => html`
          <span class="variant-grid-row-label">${label}</span>
          ${cell(`${variant} · filled`, counterBadge({ variant }))}
          ${cell(`${variant} · outline`, counterBadge({ variant, outline: true }))}
          ${cell(`${variant} · border`, counterBadge({ variant, border: true }))}
          ${cell(
            `${variant} · pulse`,
            html`<div class="grid-cell-pulse-group">
              ${counterBadge({ variant, enableAnimation: true })}
              ${counterBadge({ variant, outline: true, enableAnimation: true })}
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
            counterBadge({
              variant,
              children: iconButtonAnchor(`${label} anchor`),
            }),
            true
          )}
          ${cell(
            `${variant} · border · attached`,
            counterBadge({
              variant,
              border: true,
              children: iconButtonAnchor(`${label} anchor`),
            }),
            true
          )}
          ${cell(
            `${variant} · pulse · attached`,
            counterBadge({
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

function badgeCounterPreview(): TemplateResult {
  return html`
    <div class="badge-preview">
      <section>
        <h2>type="counter"</h2>
        <p class="edge-intro">
          Solid cell border = alignment grid; dashed outline =
          <code>ix-badge</code> host bounds.
        </p>
      </section>

      <section class="theme-section">
        <h2>Variants — standalone</h2>
        <p class="edge-note">No default slot → standalone counter.</p>
        ${themePanel('dark', 'Dark', standaloneVariantGrid())}
        ${themePanel('light', 'Light', standaloneVariantGrid())}
      </section>

      <section class="theme-section">
        <h2>Variants — attached (anchor element)</h2>
        <p class="edge-note">
          Default slot wraps anchor; counter overlays top-trailing (−10px /
          −10px default offset).
        </p>
        ${themePanel('dark', 'Dark', attachedVariantGrid())}
        ${themePanel('light', 'Light', attachedVariantGrid())}
      </section>

      <section>
        <h2>Standalone counts</h2>
        <div class="demo-grid">
          ${cell(
            'type="counter" label="1"',
            counterBadge({ variant: 'primary', label: '1' })
          )}
          ${cell(
            'type="counter" label="12"',
            counterBadge({ variant: 'alarm', label: '12' })
          )}
          ${cell(
            'type="counter" label="99"',
            counterBadge({ variant: 'warning', label: '99' })
          )}
          ${cell(
            'type="counter" label="100" → 99+',
            counterBadge({ variant: 'info', label: '100' })
          )}
          ${cell(
            'type="counter" label="142" → 99+',
            counterBadge({ variant: 'critical', label: '142' })
          )}
          ${cell(
            'type="counter" label="0"',
            counterBadge({ variant: 'neutral', label: '0' })
          )}
          ${cell(
            'type="counter" label="-1"',
            counterBadge({ variant: 'success', label: '-1' })
          )}
          ${cell(
            'type="counter" label="-99"',
            counterBadge({ variant: 'primary', label: '-99' })
          )}
          ${cell(
            'type="counter" label="-100" (literal)',
            counterBadge({ variant: 'alarm', label: '-100' })
          )}
        </div>
      </section>

      <section>
        <h2>Attached anchors</h2>
        <div class="demo-grid">
          ${cell(
            'IxButton anchor',
            counterBadge({
              variant: 'alarm',
              label: '3',
              children: html`<ix-button>Notifications</ix-button>`,
            }),
            true
          )}
          ${cell(
            'IxIconButton anchor',
            counterBadge({
              variant: 'info',
              label: '5',
              children: iconButtonAnchor("What's new"),
            }),
            true
          )}
          ${cell(
            'IxAvatar anchor',
            counterBadge({
              variant: 'primary',
              label: '12',
              children: html`<ix-avatar username="User"></ix-avatar>`,
            }),
            true
          )}
        </div>
      </section>

      <section>
        <h2>Formatting</h2>
        <div class="demo-grid">
          ${cell('label="1"', counterBadge({ variant: 'alarm', label: '1' }))}
          ${cell('label="99"', counterBadge({ variant: 'alarm', label: '99' }))}
          ${cell(
            'label="100" → 99+',
            counterBadge({ variant: 'alarm', label: '100' })
          )}
          ${cell(
            'label="3.7" → 3',
            counterBadge({ variant: 'alarm', label: '3.7' })
          )}
          ${cell(
            'label="99.9" → 99',
            counterBadge({ variant: 'alarm', label: '99.9' })
          )}
          ${cell(
            'label="007" → 7',
            counterBadge({ variant: 'alarm', label: '007' })
          )}
          ${cell('label="-1"', counterBadge({ variant: 'alarm', label: '-1' }))}
          ${cell(
            'label="new" → no indicator',
            counterBadge({ variant: 'alarm', label: 'new' })
          )}
          ${cell(
            'label="99+" → 99+',
            counterBadge({ variant: 'alarm', label: '99+' })
          )}
          ${cell(
            'no label → no indicator',
            html`<ix-badge
              class="align-host"
              type="counter"
              variant="alarm"
            ></ix-badge>`
          )}
        </div>
      </section>

      <section>
        <h2>Position and offset</h2>
        <div class="demo-grid">
          ${cell(
            'position="top-after" (default)',
            counterBadge({
              variant: 'warning',
              label: '5',
              children: html`<ix-button>Top after</ix-button>`,
            }),
            true
          )}
          ${cell(
            'position="bottom-after"',
            counterBadge({
              variant: 'warning',
              label: '99',
              position: 'bottom-after',
              children: html`<ix-avatar username="User"></ix-avatar>`,
            }),
            true
          )}
          ${cell(
            'offsetX={6} offsetY={-4}',
            counterBadge({
              variant: 'info',
              label: '2',
              offsetX: 6,
              offsetY: -4,
              children: html`<ix-button>Offset</ix-button>`,
            }),
            true
          )}
          ${cell(
            'Custom offset',
            counterBadge({
              variant: 'alarm',
              label: '1',
              offsetX: -4,
              offsetY: 2,
              children: html`<ix-button>Custom offset</ix-button>`,
            }),
            true
          )}
        </div>
      </section>

      <section>
        <h2>Animation</h2>
        <div class="animation-spec">
          <p class="animation-spec-label">Pulsing (bool)</p>
          <p class="edge-note animation-spec-note">warning · counter</p>
          <div class="animation-pulsing-row">
            ${cell('filled', counterBadge({ variant: 'warning', label: '1' }))}
            ${cell(
              'filled · pulse',
              counterBadge({
                variant: 'warning',
                label: '1',
                enableAnimation: true,
              })
            )}
            ${cell(
              'outline',
              counterBadge({ variant: 'warning', label: '1', outline: true })
            )}
            ${cell(
              'outline · pulse',
              counterBadge({
                variant: 'warning',
                label: '1',
                outline: true,
                enableAnimation: true,
              })
            )}
          </div>

          <p class="animation-spec-label">Live pulse</p>
          <div class="animation-live-row">
            ${cell(
              'standalone · 2s',
              counterBadge({
                variant: 'primary',
                label: '1',
                enableAnimation: true,
              })
            )}
            ${cell(
              'attached · 2s',
              counterBadge({
                variant: 'primary',
                label: '1',
                enableAnimation: true,
                children: iconButtonAnchor("What's new"),
              }),
              true
            )}
            ${cell(
              'standalone · 6s',
              counterBadge({
                variant: 'warning',
                label: '1',
                enableAnimation: true,
                hostStyle: { '--ix-badge-animation-duration': '6s' },
              })
            )}
          </div>
        </div>
      </section>

      <section>
        <h2>Width</h2>
        <div class="demo-grid">
          ${cell('label="1"', counterBadge({ variant: 'primary', label: '1' }))}
          ${cell(
            'label="12"',
            counterBadge({ variant: 'primary', label: '12' })
          )}
          ${cell(
            'label="99"',
            counterBadge({ variant: 'primary', label: '99' })
          )}
          ${cell(
            'label="142" → 99+',
            counterBadge({ variant: 'primary', label: '142' })
          )}
          ${cell(
            '--ix-badge-max-width: 2rem',
            counterBadge({
              variant: 'primary',
              label: '142',
              hostStyle: { '--ix-badge-max-width': '2rem' },
            })
          )}
        </div>
      </section>

      <section>
        <h2>Container bounds</h2>
        <div class="demo-grid">
          ${cell(
            '32px IxIconButton',
            counterBadge({
              variant: 'alarm',
              label: '1',
              children: html`<ix-icon-button
                icon="info"
                aria-label="Notifications on 32px icon button"
              ></ix-icon-button>`,
            }),
            true
          )}
          ${cell(
            '24px IxIcon size="24"',
            counterBadge({
              variant: 'alarm',
              label: '12',
              children: html`<ix-icon
                name="home"
                size="24"
                aria-label="Home icon 24px"
              ></ix-icon>`,
            }),
            true
          )}
        </div>
      </section>

      <section>
        <h2>Accessibility</h2>
        <div class="demo-grid">
          ${cell(
            'role="alert" · standalone',
            html`<ix-badge
              class="align-host"
              type="counter"
              label="3"
              role="alert"
              variant="alarm"
            ></ix-badge>`
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

export const Counter: Story = {
  name: 'Counter',
  render: () => badgeCounterPreview(),
};
