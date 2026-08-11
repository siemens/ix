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

type Element = Components.IxKeyValue;

const meta = {
  title: 'Example/Key Value',
  tags: [],
  render: stencil((args) => <ix-key-value {...args}></ix-key-value>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-key-value'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    label: 'Location',
    value: 'Munich',
  },
};
