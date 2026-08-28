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

type Element = Components.IxMenuAvatar;

const meta = {
  title: 'Example/Menu/Avatar',
  tags: [],
  render: stencil((args) => (
    <ix-menu expand>
      <ix-menu-avatar {...args}>
        <ix-menu-avatar-item icon="user" label="Profile"></ix-menu-avatar-item>
      </ix-menu-avatar>
    </ix-menu>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-menu-avatar'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    initials: 'JD',
    tooltipText: 'Jane Doe',
  },
};
