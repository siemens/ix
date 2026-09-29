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

type Element = Components.IxBreadcrumbItem;

const meta = {
  title: 'Example/Breadcrumb Item',
  tags: [],
  render: stencil((args) => (
    <ix-breadcrumb>
      <ix-breadcrumb-item {...args}></ix-breadcrumb-item>
    </ix-breadcrumb>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-breadcrumb-item'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    breadcrumbKey: 'overview',
    label: 'Overview',
  },
};
