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

type Element = Components.IxPaneLayout;

const meta = {
  title: 'Example/Pane Layout',
  tags: [],
  render: stencil((args) => (
    <ix-pane-layout {...args} style={{ height: '24rem' }}>
      <ix-pane heading="Navigation" slot="left">
        Navigation pane
      </ix-pane>
      <div slot="content">Main content</div>
      <ix-pane heading="Details" slot="right">
        Details pane
      </ix-pane>
    </ix-pane-layout>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-pane-layout'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
