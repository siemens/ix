/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h, type VNode } from '@stencil/core';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import {
  buildAttachedVariantGrid,
  buildStandaloneVariantGrid,
  cell,
  dotBadge,
  iconButtonAnchor,
  showcaseParameters,
  themePanel,
  VARIANT_ROWS,
} from './badge-preview.shared';

/**
 * Mirrors `packages/react-test-app/src/preview-examples/badge-dot.tsx`
 * (`/preview/badge-dot`).
 */
function standaloneVariantGrid(): VNode {
  return buildStandaloneVariantGrid(VARIANT_ROWS, dotBadge);
}

function attachedVariantGrid(): VNode {
  return buildAttachedVariantGrid(VARIANT_ROWS, dotBadge);
}

function badgeDotPreview(): VNode {
  return (
    <div class="badge-preview">
      <section>
        <h2>Dot badge</h2>
        <p class="edge-intro">
          <code>type="dot"</code>
          {' · 12×12px circle · no '}
          <code>label</code>
          {
            '. Attached default offset −6px / −6px (top-trailing). Standalone dots need '
          }
          <code>aria-label</code>
          {' on the host; attached dots are decorative (anchor carries meaning).'}
        </p>
      </section>

      <section class="theme-section">
        {themePanel('dark', 'Dark', standaloneVariantGrid())}
        {themePanel('light', 'Light', standaloneVariantGrid())}
      </section>

      <section>
        <h2>Variants — attached</h2>
        <p class="edge-note">
          Icon button anchor; dot overlays top-trailing (−0.375rem default
          offset).
        </p>
        {themePanel('dark', 'Dark', attachedVariantGrid())}
        {themePanel('light', 'Light', attachedVariantGrid())}
      </section>

      <section>
        <h2>Attached anchors</h2>
        <div class="demo-grid">
          {cell(
            'IxIconButton · alarm',
            dotBadge({
              variant: 'alarm',
              children: iconButtonAnchor("What's new"),
            }),
            true
          )}
          {cell(
            'IxButton · primary',
            dotBadge({
              variant: 'primary',
              children: <ix-button>Messages</ix-button>,
            }),
            true
          )}
          {cell(
            'IxAvatar · success',
            dotBadge({
              variant: 'success',
              children: <ix-avatar username="User"></ix-avatar>,
            }),
            true
          )}
        </div>
      </section>

      <section>
        <h2>Placement</h2>
        <div class="demo-grid">
          {cell(
            'position="top-after" (default)',
            dotBadge({
              variant: 'alarm',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          {cell(
            'position="bottom-after"',
            dotBadge({
              variant: 'info',
              position: 'bottom-after',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          {cell(
            'offsetX={6} offsetY={-4}',
            dotBadge({
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
          Set <code>aria-label</code> on <code>ix-badge</code>
          {' (no '}
          <code>aria-describedby</code>
          {' on anchor when attached).'}
        </p>
        <div class="demo-grid">
          {cell(
            'aria-label="Unread messages"',
            dotBadge({
              variant: 'alarm',
              ariaLabel: 'Unread messages',
            })
          )}
          {cell(
            'role="alert" · aria-label="Action required"',
            dotBadge({
              variant: 'critical',
              role: 'alert',
              ariaLabel: 'Action required',
            })
          )}
        </div>
      </section>

      <section>
        <h2>Pulse</h2>
        <div class="demo-grid">
          {cell(
            'filled · pulse · standalone',
            dotBadge({ variant: 'warning', enableAnimation: true })
          )}
          {cell(
            'filled · pulse · attached',
            dotBadge({
              variant: 'warning',
              enableAnimation: true,
              children: iconButtonAnchor('Live updates'),
            }),
            true
          )}
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: 'Example/Badge',
  tags: [],
  parameters: showcaseParameters,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Dot: Story = {
  name: 'Dot',
  render: stencil(() => badgeDotPreview()),
};
