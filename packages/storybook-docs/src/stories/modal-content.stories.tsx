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

type Element = Components.IxModalContent;

const meta = {
  title: 'Example/Modal Content',
  tags: [],
  render: stencil((args) => (
    <ix-modal class="visible">
      <ix-modal-content {...args}>Modal content</ix-modal-content>
    </ix-modal>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-modal-content'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
