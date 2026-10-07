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

type Element = Components.IxLayoutAuto;

const meta = {
  title: 'Example/Layout Auto',
  tags: [],
  render: stencil((args) => (
    <ix-layout-auto {...args}>
      <ix-card>
        <ix-card-title>Asset 1</ix-card-title>
      </ix-card>
      <ix-card>
        <ix-card-title>Asset 2</ix-card-title>
      </ix-card>
    </ix-layout-auto>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-layout-auto'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
