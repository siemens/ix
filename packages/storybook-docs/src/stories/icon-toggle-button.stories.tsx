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

type Element = Components.IxIconToggleButton;

const meta = {
  title: 'Example/Icon Toggle Button',
  tags: [],
  render: stencil((args) => (
    <ix-icon-toggle-button
      {...args}
      aria-label="Toggle visibility"
    ></ix-icon-toggle-button>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-icon-toggle-button'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    icon: 'eye',
  },
};
