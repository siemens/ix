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

type Elements = Components.IxMenuItem;

const meta = {
  title: 'Example/MenuItem',
  tags: [],
  render: (args) => {
    const container = genericRender('ix-menu-item', args);
    const menuItem = container.querySelector(
      'ix-menu-item'
    ) as HTMLIxMenuItemElement;

    const menu = document.createElement('ix-menu');
    menu.appendChild(menuItem);
    return menu;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Elements>>>('ix-menu'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev',
    },
  },
} satisfies Meta<Elements>;

export default meta;
type Story = StoryObj<Elements>;

export const Default: Story = {
  args: {
    label: 'Menu Item',
  },
};

export const Icon: Story = {
  args: {
    label: 'Menu Item',
    icon: 'home',
  },
};

export const Notification: Story = {
  args: {
    label: 'Menu Item',
    icon: 'home',
    notifications: 5,
  },
};

export const CustomTooltip: Story = {
  args: {
    label: 'Menu Item',
    icon: 'home',
    tooltipText: 'My custom tooltip text',
  },
};
