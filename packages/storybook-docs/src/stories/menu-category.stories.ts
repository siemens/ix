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

type Elements = Components.IxMenuCategory & {
  items: number;
};

const meta = {
  title: 'Example/MenuCategory',
  tags: [],
  render: (args) => {
    const container = genericRender('ix-menu-category', args, ['items']);
    const categoryMenu = container.querySelector(
      'ix-menu-category'
    ) as HTMLIxMenuCategoryElement;

    categoryMenu.ariaLabel = 'my-category-menu';

    const menu = document.createElement('ix-menu');
    menu.appendChild(categoryMenu);

    for (let i = 0; i < args.items; i++) {
      const menuItem = document.createElement('ix-menu-item');
      menuItem.label = `Item ${i + 1}`;
      menuItem.tooltipText = `Tooltip for Item ${i + 1}`;
      categoryMenu.appendChild(menuItem);
    }

    return menu;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Elements>>>('ix-menu', {
    items: {
      control: 'number',
      name: 'items*',
    },
  }),
  args: {
    items: 3,
  },
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
    label: 'Menu Category',
  },
};
