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

type Element = Components.IxCustomField;

const meta = {
  title: 'Example/Custom Field',
  tags: [],
  render: stencil((args) => (
    <ix-custom-field {...args}>
      <ix-input value="Field value"></ix-input>
    </ix-custom-field>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-custom-field'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    helperText: 'Supporting information',
    label: 'Custom field',
  },
};
