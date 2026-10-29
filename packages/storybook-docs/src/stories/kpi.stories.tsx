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

export const Warning: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
    state: 'warning',
  },
};

export const Danger: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
    state: 'danger',
  },
};

export const Caution: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
    state: 'caution',
  },
};

export const Success: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
    state: 'success',
  },
};

export const Information: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
    state: 'information',
  },
};

export const Accent: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
    state: 'accent',
  },
};

export const Critical: Story = {
  args: {
    label: 'Availability',
    unit: '%',
    value: '98.7',
    state: 'critical',
  },
};
