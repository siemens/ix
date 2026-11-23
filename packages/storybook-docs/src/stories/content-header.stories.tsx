/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxContentHeader;

const meta = {
  title: 'Example/Content Header',
  render: stencil((args) => <ix-content-header {...args}></ix-content-header>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-content-header'),
  parameters: {
    a11y: {
      test: 'error',
    },
    docs: {
      description: {
        component:
          '`textOverflow="wrap"` is the default. Use `textOverflow="ellipsis"` to opt into visual single-line truncation. Ellipsis does not add a tooltip; use wrapping when the complete text must remain visible. Place `ix-button` or `ix-icon-button` in `slot="secondary-actions"` to collapse them into a vertical menu on small screens or when the actions exceed the header width. Default-slot actions remain visible and wrap if necessary. Use `ariaLabelMoreActions` to localize the menu trigger, and give icon-only actions an accessible name.',
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    headerSubtitle: 'Updated moments ago',
    headerTitle: 'Asset overview',
  },
};

const title =
  'Content title that demonstrates behavior when horizontal space is limited';
const subtitle =
  'Supporting context that demonstrates behavior when horizontal space is limited';

export const TextOverflow: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; max-width: 28rem;"
    >
      <section>
        <h3>Wrap (default)</h3>
        <ix-content-header
          header-title=${title}
          header-subtitle=${subtitle}
        ></ix-content-header>
      </section>

      <section>
        <h3>Ellipsis</h3>
        <ix-content-header
          header-title=${title}
          header-subtitle=${subtitle}
          text-overflow="ellipsis"
        ></ix-content-header>
      </section>
    </div>
  `,
};

export const ResponsiveActions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Resize the browser or drag the container edge. Secondary actions collapse based on available space, including on large viewports; the primary action stays visible. Secondary actions hidden by CSS media queries are excluded from the overflow menu, and their visibility updates when the browser is resized. Long titles retain the selected text-overflow behavior, and the following content stays below the header.',
      },
    },
  },
  render: () => html`
    <div style="resize: horizontal; overflow: auto; max-width: 100%;">
      <ix-content-header
        has-back-button
        header-title="Production line overview"
        header-subtitle="Review the current configuration and production reports"
      >
        ${[
          'Discard changes',
          'Refresh data',
          'Export production report',
          'Import configuration',
          'Manage permissions',
          'View change history',
          'Open settings',
        ].map(
          (label) => html`
            <ix-button slot="secondary-actions" variant="tertiary">
              ${label}
            </ix-button>
          `
        )}
        <ix-button variant="primary">Save changes</ix-button>
      </ix-content-header>
      <p>Page content follows the header without overlap.</p>
    </div>
  `,
};
