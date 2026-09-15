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

type Element = Components.IxPopoverContent;

const meta = {
  title: 'Example/Popover Content',
  tags: [],
  render: stencil((args) => (
    <ix-popover-content {...args}>Popover content</ix-popover-content>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-popover-content'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
