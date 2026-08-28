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

type Element = Components.IxGroupContextMenu;

const meta = {
  title: 'Example/Group Context Menu',
  tags: [],
  render: stencil((args) => (
    <ix-group-context-menu {...args}>
      <ix-dropdown-item icon="pen" label="Edit"></ix-dropdown-item>
      <ix-dropdown-item icon="trashcan" label="Delete"></ix-dropdown-item>
    </ix-group-context-menu>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-group-context-menu'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
