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

type Element = Components.IxDivider;

const meta = {
  title: 'Example/Divider',
  tags: [],
  render: stencil((args) => <ix-divider {...args}></ix-divider>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-divider'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
