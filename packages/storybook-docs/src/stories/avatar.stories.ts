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
import { genericRender, makeArgTypes } from './utils/generic-render';
import { html } from 'lit';

type Element = Components.IxAvatar;

const meta = {
  title: 'Example/Avatar',
  tags: [],
  render: (args) => genericRender('ix-avatar', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-avatar'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};

export const withAvatar: Story = {
  render: ({ extra, image, initials, username }) => {
    return html`<ix-application-header name="Application name">
      <ix-avatar
        extra=${extra}
        image=${image}
        initials=${initials}
        username=${username}
      >
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`;
  },
  args: {
    extra: 'Administrator',
    username: 'John Doe',
    initials: 'JD',
  },
};
