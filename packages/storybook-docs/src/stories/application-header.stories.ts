/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxApplicationHeader;

const meta = {
  title: 'Example/ApplicationHeader',
  tags: [],
  render: (args) => {
    return html`<ix-application-header
      name="${args.name}"
      ?show-menu="${args.showMenu}"
    >
    </ix-application-header>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-application-header'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=8033-151366&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    name: 'Application Header',
  },
};

export const withAvatar: Story = {
  render: (args) => {
    return html`<ix-application-header
      name="${args.name}"
      ?show-menu="${args.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`;
  },
  args: {
    name: 'Application Header',
  },
};
