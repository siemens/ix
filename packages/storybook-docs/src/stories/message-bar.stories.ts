/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type Element = {
  type: 'danger' | 'warning' | 'info';
  dismissible: boolean;
};

const meta = {
  title: 'Example/MessageBar',
  tags: [],
  render: (args) => {
    return html`
      <div class="message-bar">
        <ix-message-bar type=${args.type} ?dismissible=${args.dismissible}>
          Message text
        </ix-message-bar>
      </div>
    `;
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['danger', 'warning', 'info'],
    },
    dismissible: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139860&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    type: 'info',
    dismissible: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    dismissible: true,
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    dismissible: true,
  },
};
