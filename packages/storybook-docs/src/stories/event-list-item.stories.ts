/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import {
  GenericArgs,
  genericRender,
  makeArgTypes,
} from './utils/generic-render';

type Element = GenericArgs<Components.IxEventListItem>;

const meta = {
  title: 'Example/EventListItem',
  tags: [],
  render: (args) => {
    const item = genericRender('ix-event-list-item', args);

    const list = document.createElement('ix-event-list');
    list.chevron = args.chevron;
    list.appendChild(item);

    return list;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-event-list-item', {}),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Outline: Story = {
  args: {
    itemColor: '--theme-color-primary',
    defaultSlot: 'Event List Item',
    variant: 'outline',
  },
};

export const Filled: Story = {
  args: {
    itemColor: '--theme-color-primary',
    defaultSlot: 'Event List Item',
    variant: 'filled',
  },
};

export const Default: Story = {
  args: {
    itemColor: '--theme-color-primary',
    defaultSlot: 'Event List Item',
  },
};

export const Chevron: Story = {
  args: {
    itemColor: '--theme-color-primary',
    defaultSlot: 'Event List Item',
    chevron: true,
  },
};

export const Selected: Story = {
  args: {
    itemColor: '--theme-color-primary',
    defaultSlot: 'Event List Item',
    chevron: true,
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    itemColor: '--theme-color-primary',
    defaultSlot: 'Event List Item',
    disabled: true,
  },
};
