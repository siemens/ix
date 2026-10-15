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

type Element = Components.IxDropdownQuickActions;

const meta = {
  title: 'Example/Dropdown Quick Actions',
  tags: [],
  render: stencil((args) => (
    <ix-dropdown-quick-actions {...args}>
      <ix-icon-button aria-label="Edit" icon="pen"></ix-icon-button>
      <ix-icon-button aria-label="Delete" icon="trashcan"></ix-icon-button>
    </ix-dropdown-quick-actions>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-dropdown-quick-actions'
  ),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
