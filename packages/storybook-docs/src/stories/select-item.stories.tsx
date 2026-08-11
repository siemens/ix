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

type Element = Components.IxSelectItem;

const meta = {
  title: 'Example/Select Item',
  tags: [],
  render: stencil((args) => (
    <ix-select value={args.value}>
      <ix-select-item {...args}></ix-select-item>
    </ix-select>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-select-item'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    label: 'Munich',
    value: 'munich',
  },
};
