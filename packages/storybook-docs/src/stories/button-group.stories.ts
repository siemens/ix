/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type Element = Components.IxButton & { defaultSlot: string };

const meta = {
  title: 'Example/Button/Group',
  tags: [],
  args: {},
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
  args: {
    defaultSlot: 'Button',
  },
  render: () => html`<div class="ix-button-group">
    <ix-button outline>Test</ix-button>
    <ix-button>Test 2</ix-button>
    <ix-button outline>Test 3</ix-button>
  </div>`,
};
