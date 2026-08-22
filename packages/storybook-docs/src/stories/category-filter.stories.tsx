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

type Element = Components.IxCategoryFilter;

const meta = {
  title: 'Example/Category Filter',
  tags: [],
  render: stencil((args) => (
    <ix-category-filter {...args}></ix-category-filter>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-category-filter'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    placeholder: 'Filter assets',
  },
};
