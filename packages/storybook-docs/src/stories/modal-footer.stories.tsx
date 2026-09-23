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

type Element = Components.IxModalFooter;

const meta = {
  title: 'Example/Modal Footer',
  tags: [],
  render: stencil((args) => (
    <ix-modal class="visible">
      <ix-modal-footer {...args}>
        <ix-button variant="secondary">Cancel</ix-button>
        <ix-button>Apply</ix-button>
      </ix-modal-footer>
    </ix-modal>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-modal-footer'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
