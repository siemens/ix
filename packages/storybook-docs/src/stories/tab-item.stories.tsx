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

type Element = Components.IxTabItem;

const meta = {
  title: 'Example/Tab Item',
  tags: [],
  render: stencil((args) => (
    <ix-tabs activeTabKey={args.tabKey}>
      <ix-tab-item {...args}></ix-tab-item>
    </ix-tabs>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-tab-item'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    label: 'Overview',
    tabKey: 'overview',
  },
};
