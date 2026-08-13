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

type Element = Components.IxMenuSettings;

const meta = {
  title: 'Example/Menu/Settings',
  tags: [],
  render: stencil((args) => (
    <ix-menu expand>
      <ix-menu-settings {...args}>
        <ix-menu-settings-item label="General" tabKey="general">
          General settings
        </ix-menu-settings-item>
      </ix-menu-settings>
    </ix-menu>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-menu-settings'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
