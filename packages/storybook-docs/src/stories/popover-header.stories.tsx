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

type Element = Components.IxPopoverHeader;

const meta = {
  title: 'Example/Popover Header',
  tags: [],
  render: stencil((args) => (
    <ix-popover-header {...args}>Asset details</ix-popover-header>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-popover-header'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
