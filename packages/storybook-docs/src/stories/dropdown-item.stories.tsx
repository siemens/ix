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

type Element = Components.IxDropdownItem;

const meta = {
  title: 'Example/Dropdown Item',
  tags: [],
  render: stencil((args) => <ix-dropdown-item {...args}></ix-dropdown-item>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-dropdown-item'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    icon: 'info',
    label: 'Dropdown item',
  },
};
