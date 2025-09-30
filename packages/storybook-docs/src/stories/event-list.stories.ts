/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxEventList;

const meta = {
  title: 'Example/EventList',
  tags: [],
  render: (args) => {
    const container = genericRender('ix-event-list', args);

    const eventList = container.querySelector(
      'ix-event-list'
    ) as HTMLIxEventListElement;

    const event1 = document.createElement('ix-event-list-item');
    event1.itemColor = '--theme-color-alarm';
    event1.textContent = 'Event List Item 1';
    eventList.appendChild(event1);

    return container;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-event-list', {}),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const ItemHeightS: Story = {
  args: {
    itemHeight: 'S',
  },
};

export const ItemHeightL: Story = {
  args: {
    itemHeight: 'L',
  },
};

export const CustomItemHeight: Story = {
  args: {
    itemHeight: 400,
  },
};
