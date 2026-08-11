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

type Element = Components.IxModalHeader;

const meta = {
  title: 'Example/Modal Header',
  tags: [],
  render: stencil((args) => (
    <ix-modal class="visible">
      <ix-modal-header {...args}>Edit asset</ix-modal-header>
    </ix-modal>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-modal-header'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    icon: 'pen',
  },
};
