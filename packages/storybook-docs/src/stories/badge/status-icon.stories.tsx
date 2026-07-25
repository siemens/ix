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
  iconButtonAnchor,
  showcaseParameters,
  STATUS_ICON_VARIANT_ROWS,
  statusIconBadge,
  themePanel,
} from './badge-preview.shared';

/**
 * Mirrors `packages/react-test-app/src/preview-examples/badge-status-icon.tsx`
 * (`/preview/badge-status-icon`).
 */
function standaloneVariantGrid(): VNode {
  return buildStandaloneVariantGrid(STATUS_ICON_VARIANT_ROWS, statusIconBadge);
}

function attachedVariantGrid(): VNode {
  return buildAttachedVariantGrid(STATUS_ICON_VARIANT_ROWS, statusIconBadge);
}

function badgeStatusIconPreview(): VNode {
  return (
    <div class="badge-preview">
      <section>
        <h2>Status-icon badge</h2>
        <p class="edge-intro">
          <code>type="status-icon"</code>
          {' · 20×20px circle · icon from '}
          <code>variant</code>
          {' · no '}
          <code>label</code>
          {
            '. Attached default offset −10px / −10px. Same a11y as dot: attached = decorative; standalone needs '
          }
          <code>aria-label</code>
          {' on the host.'}
        </p>
      </section>

      <section class="theme-section">
        {themePanel('dark', 'Dark', standaloneVariantGrid())}
        {themePanel('light', 'Light', standaloneVariantGrid())}
      </section>

      <section>
        <h2>Variants — attached</h2>
        <p class="edge-note">
          Icon button anchor; status icon overlays top-trailing (−0.625rem
          default offset).
        </p>
        {themePanel('dark', 'Dark', attachedVariantGrid())}
        {themePanel('light', 'Light', attachedVariantGrid())}
      </section>

      <section>
        <h2>Attached anchors</h2>
        <div class="demo-grid">
          {cell(
            'IxIconButton · alarm',
            statusIconBadge({
              variant: 'alarm',
              children: iconButtonAnchor('Error state'),
            }),
            true
          )}
          {cell(
            'IxButton · primary · warning badge',
            statusIconBadge({
              variant: 'warning',
              children: <ix-button>Messages</ix-button>,
            }),
            true
          )}
          {cell(
            'IxAvatar · success',
            statusIconBadge({
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
            statusIconBadge({
              variant: 'alarm',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          {cell(
            'position="bottom-after"',
            statusIconBadge({
              variant: 'info',
              position: 'bottom-after',
              children: iconButtonAnchor('Notifications'),
            }),
            true
          )}
          {cell(
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
          Set <code>aria-label</code> on <code>ix-badge</code>
          {' (no '}
          <code>aria-describedby</code>
          {' on anchor when attached).'}
        </p>
        <div class="demo-grid">
          {cell(
            'aria-label="Action required"',
            statusIconBadge({
              variant: 'alarm',
              ariaLabel: 'Action required',
            })
          )}
          {cell(
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
          {cell(
            'filled · pulse · standalone',
            statusIconBadge({ variant: 'warning', enableAnimation: true })
          )}
          {cell(
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
  );
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
  render: stencil(() => badgeStatusIconPreview()),
};
