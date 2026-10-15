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

type Element = Components.IxPopoverFooter;

const meta = {
  title: 'Example/Popover Footer',
  tags: [],
  render: stencil((args) => (
    <ix-popover-footer {...args}>
      <ix-button slot="start" variant="secondary">
        Cancel
      </ix-button>
      <ix-button>Apply</ix-button>
    </ix-popover-footer>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-popover-footer'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
