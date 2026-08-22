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

type Element = Components.IxFieldLabel;

const meta = {
  title: 'Example/Field Label',
  tags: [],
  render: stencil((args) => (
    <ix-field-label {...args}>Asset name</ix-field-label>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-field-label'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    htmlFor: 'asset-name',
  },
};
