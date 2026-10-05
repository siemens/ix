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

type Element = Components.IxLayoutGrid;

const meta = {
  title: 'Example/Layout Grid',
  tags: [],
  render: stencil((args) => (
    <ix-layout-grid {...args}>
      <ix-row>
        <ix-col>
          <ix-card>
            <ix-card-title>Grid content</ix-card-title>
          </ix-card>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-layout-grid'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
