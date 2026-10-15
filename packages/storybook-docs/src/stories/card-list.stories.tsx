/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxCardList;

const variants = ['filled', 'warning', 'success', 'alarm', 'info'] as const;

const cards = Array.from({ length: 20 }, (_, index) => ({
  icon: index % 2 === 0 ? 'rocket' : 'bulb',
  notification: `${(index % 5) + 1}`,
  variant: variants[index % variants.length],
}));

const meta = {
  title: 'Example/Card List',
  tags: [],
  render: stencil((args) => (
    <ix-card-list {...args}>
      {cards.map((card, index) => (
        <ix-push-card
          key={index}
          icon={card.icon}
          notification={card.notification}
          heading={`Heading content ${index + 1}`}
          subheading="Subheading"
          variant={card.variant}
        ></ix-push-card>
      ))}
    </ix-card-list>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-card-list'),
  args: {
    label: 'Stack Layout',
    showAllCount: 20,
    listStyle: 'stack',
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};

export const StackLayout: Story = {
  args: {
    label: 'Stack Layout',
    listStyle: 'stack',
  },
};

export const FlowLayout: Story = {
  args: {
    label: 'Flow Layout',
    listStyle: 'scroll',
  },
};
