/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@siemens/ix/components';
import { html } from 'lit';

type Element = Components.IxEventList & {
  itemCount?: number;
  showSelected?: boolean;
  showDisabled?: boolean;
  showItemColors?: boolean;
};

const renderEventList = (args: Element) => {
  const {
    itemCount = 4,
    showSelected,
    showDisabled,
    showItemColors,
    ...eventListProps
  } = args;

  const colors = [
    'color-primary',
    'color-success',
    'color-warning',
    'color-alarm',
  ];

  const items = Array.from({ length: itemCount }, (_, i) => {
    const itemProps: any = {};

    if (showItemColors) {
      itemProps.itemColor = colors[i % colors.length];
    } else {
      itemProps.itemColor = 'color-primary';
    }

    if (showSelected && i === 1) {
      itemProps.selected = true;
    }

    if (showDisabled && i === 2) {
      itemProps.disabled = true;
    }

    if (eventListProps.chevron !== undefined) {
      itemProps.chevron = eventListProps.chevron;
    }

    return html`
      <ix-event-list-item
        .itemColor=${itemProps.itemColor}
        ?selected=${itemProps.selected}
        ?disabled=${itemProps.disabled}
        ?chevron=${itemProps.chevron}
      >
        Event Item ${i + 1}
      </ix-event-list-item>
    `;
  });

  return html`
    <ix-event-list
      .itemHeight=${eventListProps.itemHeight}
      ?compact=${eventListProps.compact}
      ?animated=${eventListProps.animated}
      ?chevron=${eventListProps.chevron}
    >
      ${items}
    </ix-event-list>
  `;
};

const meta = {
  title: 'Example/Event List',
  tags: [],
  render: renderEventList,
  argTypes: {
    itemHeight: {
      description:
        'Height of list items - can be "S", "L", or a number in pixels',
      options: ['S', 'L'],
      control: { type: 'select' },
    },
    compact: {
      description: 'Make event-list items more compact',
      control: { type: 'boolean' },
    },
    animated: {
      description: 'Animate state change transitions',
      control: { type: 'boolean' },
    },
    chevron: {
      description: 'Display a chevron icon in list items',
      control: { type: 'boolean' },
    },
    itemCount: {
      description: 'Number of items to display (for story demo)',
      control: { type: 'number', min: 1, max: 10 },
    },
    showSelected: {
      description: 'Show one item as selected (for story demo)',
      control: { type: 'boolean' },
    },
    showDisabled: {
      description: 'Show one item as disabled (for story demo)',
      control: { type: 'boolean' },
    },
    showItemColors: {
      description: 'Show different item colors (for story demo)',
      control: { type: 'boolean' },
    },
  },
  args: {
    itemHeight: 'S',
    compact: false,
    animated: true,
    chevron: false,
    itemCount: 4,
    showSelected: false,
    showDisabled: false,
    showItemColors: false,
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};

export const Compact: Story = {
  args: {
    compact: true,
  },
};

export const WithChevron: Story = {
  args: {
    chevron: true,
  },
};

export const LargeItems: Story = {
  args: {
    itemHeight: 'L',
  },
};

export const CustomHeight: Story = {
  args: {
    itemHeight: 80,
  },
};

export const WithSelection: Story = {
  args: {
    showSelected: true,
  },
};

export const WithDisabledItem: Story = {
  args: {
    showDisabled: true,
  },
};

export const ColorfulItems: Story = {
  args: {
    showItemColors: true,
  },
};

export const CompactWithChevron: Story = {
  args: {
    compact: true,
    chevron: true,
    showSelected: true,
  },
};
