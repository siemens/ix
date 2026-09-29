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

type Element = Components.IxGroupItem;

const meta = {
  title: 'Example/Group Item',
  tags: [],
  render: stencil((args) => (
    <ix-group>
      <ix-group-item {...args}></ix-group-item>
    </ix-group>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-group-item'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    icon: 'info',
    secondaryText: 'Additional information',
    text: 'Group item',
  },
};
