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

type Element = Components.IxTreeItem;

const meta = {
  title: 'Example/Tree Item',
  tags: [],
  render: stencil((args) => (
    <ix-tree>
      <ix-tree-item {...args}></ix-tree-item>
    </ix-tree>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-tree-item'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    text: 'Asset 1',
  },
};
