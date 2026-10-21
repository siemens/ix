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

type Element = Components.IxCardContent;

const meta = {
  title: 'Example/Card Content',
  tags: [],
  render: stencil((args) => (
    <ix-card>
      <ix-card-content {...args}>Current asset information</ix-card-content>
    </ix-card>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-card-content'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
