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
          '`textOverflow="wrap"` is the default. Use `textOverflow="ellipsis"` to opt into visual single-line truncation. Ellipsis does not add a tooltip; use wrapping when the complete text must remain visible.',
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
