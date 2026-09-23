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

type Element = Components.IxKpi;

const meta = {
  title: 'Example/KPI',
  tags: [],
  render: stencil((args) => <ix-kpi {...args}></ix-kpi>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-kpi'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
  },
};
