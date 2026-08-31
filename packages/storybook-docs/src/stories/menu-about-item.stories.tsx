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

type Element = Components.IxMenuAboutItem;

const meta = {
  title: 'Example/Menu/About Item',
  tags: [],
  render: stencil((args) => (
    <ix-menu expand>
      <ix-menu-about>
        <ix-menu-about-item {...args}>Legal information</ix-menu-about-item>
      </ix-menu-about>
    </ix-menu>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-menu-about-item'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    label: 'Legal information',
    tabKey: 'legal',
  },
};
