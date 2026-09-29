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

type Element = Components.IxCardTitle;

const meta = {
  title: 'Example/Card Title',
  tags: [],
  render: stencil((args) => (
    <ix-card>
      <ix-card-title {...args}>Asset overview</ix-card-title>
    </ix-card>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-card-title'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
