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

type Element = Components.IxMenuAbout;

const meta = {
  title: 'Example/Menu/About',
  tags: [],
  render: stencil((args) => (
    <ix-menu expand>
      <ix-menu-item home icon="home">
        Home
      </ix-menu-item>
      <ix-menu-about {...args}>
        <ix-menu-about-item label="Legal information" tabKey="legal">
          Legal information
        </ix-menu-about-item>
      </ix-menu-about>
    </ix-menu>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-menu-about'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
