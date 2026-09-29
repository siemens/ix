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

type Element = Components.IxDropdownHeader;

const meta = {
  title: 'Example/Dropdown Header',
  tags: [],
  render: stencil((args) => (
    <ix-dropdown-header {...args}></ix-dropdown-header>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-dropdown-header'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    label: 'Available actions',
  },
};
