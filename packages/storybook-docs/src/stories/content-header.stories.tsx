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

type Element = Components.IxContentHeader;

const meta = {
  title: 'Example/Content Header',
  tags: [],
  render: stencil((args) => <ix-content-header {...args}></ix-content-header>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-content-header'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    headerSubtitle: 'Updated moments ago',
    headerTitle: 'Asset overview',
  },
};
