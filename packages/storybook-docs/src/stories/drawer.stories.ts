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

type Element = Components.IxDrawer & {
  defaultSlot: string;
};

const meta = {
  title: 'Example/Drawer',
  tags: [],
  render: (args) => genericRender('ix-drawer', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-drawer'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=1435-46275&t=5zXnZqWXYsw5HV0T-4',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    defaultSlot: 'Example contents',
  },
};
