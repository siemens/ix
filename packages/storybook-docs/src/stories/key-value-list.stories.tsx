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

type Element = Components.IxKeyValueList;

const meta = {
  title: 'Example/Key Value List',
  tags: [],
  render: stencil((args) => (
    <ix-key-value-list {...args}>
      <ix-key-value label="Location" value="Munich"></ix-key-value>
      <ix-key-value label="Status" value="Operational"></ix-key-value>
    </ix-key-value-list>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-key-value-list'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
