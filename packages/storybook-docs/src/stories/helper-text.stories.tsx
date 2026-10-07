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

type Element = Components.IxHelperText;

const meta = {
  title: 'Example/Helper Text',
  tags: [],
  render: stencil((args) => <ix-helper-text {...args}></ix-helper-text>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-helper-text'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    helperText: 'Supporting information',
  },
};
