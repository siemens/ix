/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxEmptyState;

const meta = {
  title: 'Example/Empty State',
  tags: [],
  render: stencil((args) => <ix-empty-state {...args}></ix-empty-state>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-empty-state'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    header: 'No assets found',
    icon: 'info',
    subHeader: 'Try adjusting the current filters.',
  },
};
