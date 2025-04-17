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
  label: string;
};

const meta = {
  title: 'Example/Checkbox/Group',
  tags: [],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Required: Story = {
  args: {
    label: 'Required',
  },
  render: ({ label }) => html`<ix-checkbox-group label="${label}">
    <ix-checkbox label="Option 1" value="option1"></ix-checkbox>
    <ix-checkbox label="Option 2" value="option2" required></ix-checkbox>
    <ix-checkbox label="Option 3" value="option3"></ix-checkbox>
  </ix-checkbox-group>`,
};
