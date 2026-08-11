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

type Element = Components.IxRow;

const meta = {
  title: 'Example/Row',
  tags: [],
  render: stencil((args) => (
    <ix-row {...args}>
      <ix-col>
        <div style={{ padding: '1rem' }}>First column</div>
      </ix-col>
      <ix-col>
        <div style={{ padding: '1rem' }}>Second column</div>
      </ix-col>
    </ix-row>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-row'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
