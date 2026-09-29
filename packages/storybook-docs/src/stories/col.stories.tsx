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

type Element = Components.IxCol;

const meta = {
  title: 'Example/Col',
  tags: [],
  render: stencil((args) => (
    <ix-row>
      <ix-col {...args}>
        <div style={{ padding: '1rem' }}>Column content</div>
      </ix-col>
    </ix-row>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-col'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
