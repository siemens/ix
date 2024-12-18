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

type Element = Components.IxDrawer;

const meta = {
  title: 'Example/Drawer',
  tags: [],
  render: (args) => {
    return html` <ix-drawer
      closeOnClickOutside=${args.closeOnClickOutside}
      ?fullHeight=${true}
      show=${args.show}
      onDrawerClose=${true}
    >
      <div>
        <ix-input-group>
          <ix-icon
            slot="input-start"
            name="success"
            color="color-success"
            size="16"
          />
          <input slot="input-end" />
          <span> dasda </span>
        </ix-input-group>
      </div>
    </ix-drawer>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-drawer'),
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
    closeOnClickOutside: true,
  },
};
