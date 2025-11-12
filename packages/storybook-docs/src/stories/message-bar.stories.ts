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
  type: 'alarm' | 'danger' | 'warning' | 'success' | 'info' | 'critical' | 'neutral' | 'primary';
  persistent: boolean;
};

const meta = {
  title: 'Example/MessageBar',
  tags: [],
  render: (args) => {
    return html`
      <div class="message-bar">
        <ix-message-bar type=${args.type} ?persistent=${args.persistent}>
          Message text
        </ix-message-bar>
      </div>
    `;
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['alarm', 'danger', 'warning', 'success', 'info', 'critical', 'neutral', 'primary'],
    },
    persistent: {
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
    persistent: false,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    persistent: false,
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    persistent: false,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    persistent: false,
  },
};

export const Critical: Story = {
  args: {
    type: 'critical',
    persistent: false,
  },
};

export const Neutral: Story = {
  args: {
    type: 'neutral',
    persistent: false,
  },
};

export const Primary: Story = {
  args: {
    type: 'success',
    persistent: false,
  },
};

export const Alarm: Story = {
  args: {
    type: 'alarm',
    persistent: false,
  },
};
