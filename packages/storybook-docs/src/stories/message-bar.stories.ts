/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type MessageBarType =
  | 'error'
  | 'danger'
  | 'warning'
  | 'caution'
  | 'success'
  | 'information'
  | 'neutral'
  | 'accent'
  | 'critical';

type Element = {
  type: MessageBarType;
  persistent: boolean;
};

const messageBarTypes: MessageBarType[] = [
  'error',
  'danger',
  'warning',
  'caution',
  'success',
  'information',
  'neutral',
  'accent',
  'critical',
];

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
      options: messageBarTypes,
    },
    persistent: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=103814-17692&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    type: 'information',
    persistent: false,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    persistent: false,
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    persistent: false,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    persistent: false,
  },
};

export const Caution: Story = {
  args: {
    type: 'caution',
    persistent: false,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    persistent: false,
  },
};

export const Information: Story = {
  args: {
    type: 'information',
    persistent: false,
  },
};

export const Neutral: Story = {
  args: {
    type: 'neutral',
    persistent: false,
  },
};

export const Accent: Story = {
  args: {
    type: 'accent',
    persistent: false,
  },
};

export const Critical: Story = {
  args: {
    type: 'critical',
    persistent: false,
  },
};
