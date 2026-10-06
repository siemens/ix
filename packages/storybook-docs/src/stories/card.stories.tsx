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

type Element = Components.IxCard;

const meta = {
  title: 'Example/Card',
  tags: [],
  render: stencil((args) => (
    <ix-card {...args}>
      <ix-card-title>Asset overview</ix-card-title>
      <ix-card-content>Current asset information</ix-card-content>
    </ix-card>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-card'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=104612-25078&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    variant: 'default',
    outline: true,
    clickable: false,
  },
};

export const Filled: Story = {
  args: {
    variant: 'default',
    outline: false,
  },
};

export const DangerOutline: Story = {
  args: {
    variant: 'danger',
    outline: true,
  },
};

export const DangerFilled: Story = {
  args: {
    variant: 'danger',
    outline: false,
  },
};

export const Clickable: Story = {
  args: {
    variant: 'default',
    clickable: true,
  },
};
