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

type Element = Components.IxContent;

const meta = {
  title: 'Example/Content',
  tags: [],
  render: stencil((args) => (
    <ix-content {...args}>
      <ix-content-header
        headerTitle="Asset overview"
        slot="header"
      ></ix-content-header>
      <p>Application content</p>
    </ix-content>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-content'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
