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
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
