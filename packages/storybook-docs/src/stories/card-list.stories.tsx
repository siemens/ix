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

type Element = Components.IxCardList;

const meta = {
  title: 'Example/Card List',
  tags: [],
  render: stencil((args) => (
    <ix-card-list {...args}>
      <ix-card>
        <ix-card-title>Asset 1</ix-card-title>
      </ix-card>
      <ix-card>
        <ix-card-title>Asset 2</ix-card-title>
      </ix-card>
      <ix-card>
        <ix-card-title>Asset 3</ix-card-title>
      </ix-card>
    </ix-card-list>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-card-list'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
