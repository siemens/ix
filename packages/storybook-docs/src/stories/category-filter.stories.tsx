/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import { LogicalFilterOperator } from '@siemens/ix';
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxCategoryFilter;

const categories: NonNullable<Element['categories']> = {
  ID_1: {
    label: 'Vendor',
    options: ['Apple', 'MS', 'Siemens'],
  },
  ID_2: {
    label: 'Product',
    options: ['iPhone X', 'Windows', 'APS'],
  },
  ID_3: {
    label: 'Asset group',
    options: ['Line 1', 'Bay 2'],
  },
};

const meta = {
  title: 'Example/Category Filter',
  tags: [],
  render: stencil((args) => (
    <ix-category-filter {...args}></ix-category-filter>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-category-filter', {
    categories: { control: { type: 'object' } },
    filterState: { control: { type: 'object' } },
    suggestions: { control: { type: 'object' } },
    nonSelectableCategories: { control: { type: 'object' } },
  }),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    placeholder: 'Filter assets',
  },
};

export const WithCategories: Story = {
  name: 'With categories',
  render: stencil((args) => (
    <div style={{ minHeight: '280px' }}>
      <ix-category-filter {...args}></ix-category-filter>
    </div>
  )),
  args: {
    placeholder: 'Filter by',
    uniqueCategories: false,
    categories,
    filterState: {
      tokens: ['Custom filter text'],
      categories: [
        {
          id: 'ID_1',
          value: 'IBM',
          operator: LogicalFilterOperator.NOT_EQUAL,
        },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click the input and type a value that contains a space, e.g. `env 1`. The space must appear. Press Enter to commit a token. Click the input or press ArrowDown to open the category list (Vendor, Product, **Asset group**). Open Product to see a value with a space (`iPhone X`).',
      },
    },
  },
};
