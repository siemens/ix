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

type Element = Components.IxFilterChip;

const meta = {
  title: 'Example/Filter Chip',
  tags: [],
  render: stencil((args) => (
    <ix-filter-chip {...args}>Location: Munich</ix-filter-chip>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-filter-chip'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
