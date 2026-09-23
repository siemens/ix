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

type Element = Components.IxTooltip;

const meta = {
  title: 'Example/Tooltip',
  tags: [],
  render: stencil((args) => (
    <div style={{ padding: '4rem' }}>
      <ix-button id="tooltip-trigger">Asset details</ix-button>
      <ix-tooltip {...args}>Additional asset information</ix-tooltip>
    </div>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-tooltip'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    for: 'tooltip-trigger',
  },
};
