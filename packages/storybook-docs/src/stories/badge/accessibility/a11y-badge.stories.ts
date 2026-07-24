/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';

type Element = Components.IxBadge;

const meta = {
  title: 'Example/Badge/Accessibility',
  tags: [],
  render: (args) => genericRender('ix-badge', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-badge', {}),
  parameters: {
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * Standalone badge with a text label.
 * Visible label text is static chrome (pill-like); no default live region.
 */
export const BasicUsage: Story = {
  args: {
    label: '12',
    variant: 'info',
  },
};

/**
 * Standalone dot badge: host accessible name requires a naming role
 * (e.g. `role="img"`) because `aria-label` alone is not valid on a role-less host.
 */
export const DotWithAriaLabel: Story = {
  render: () =>
    html`<ix-badge
      type="dot"
      variant="alarm"
      role="img"
      aria-label="New items"
    ></ix-badge>`,
};

/**
 * Standalone badge with optional live region: author sets `role` / `aria-label` on the host.
 */
export const CustomAriaLabel: Story = {
  render: () =>
    html`<ix-badge label="!" role="alert" aria-label="Urgent update"></ix-badge>`,
};

/**
 * Attached badge with a count: the anchor keeps its role; count text is exposed via `aria-describedby`.
 */
export const AttachedWithCount: Story = {
  render: () => html`
    <ix-badge label="3" variant="alarm">
      <ix-button>Review changes</ix-button>
    </ix-badge>
  `,
};

/**
 * Attached dot badge: the anchor must be named; the indicator is decorative (`aria-hidden`).
 */
export const AttachedDot: Story = {
  render: () => html`
    <ix-badge variant="primary">
      <ix-icon-button icon="info" aria-label="Notifications"></ix-icon-button>
    </ix-badge>
  `,
};

/**
 * Attached badge merges `aria-describedby` with existing ids on the anchor.
 */
export const MergedAriaDescribedby: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ix-badge label="5" variant="warning">
        <button aria-describedby="inbox-desc">Inbox</button>
      </ix-badge>
      <p id="inbox-desc" style="margin: 0;">Unread messages in your primary folder.</p>
    </div>
  `,
};

/**
 * Standalone overflow label: numbers above 99 render as `99+`.
 */
export const OverflowLabel: Story = {
  args: {
    label: '142',
    variant: 'primary',
  },
};

/**
 * Standalone badge hidden from screen readers when the count is redundant with surrounding text.
 */
export const DecorativeBadge: Story = {
  render: () => html`
    <div>
      <span>Notifications: 3 unread</span>
      <ix-badge label="3" aria-hidden="true" variant="alarm"></ix-badge>
    </div>
  `,
};
