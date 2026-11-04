/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxCategoryFilter;
type FilterState = NonNullable<Element['filterState']>;
type LogicalFilterOperator = FilterState['categories'][number]['operator'];

const EQUAL = 'Equal' as LogicalFilterOperator;
const NOT_EQUAL = 'Not equal' as LogicalFilterOperator;

const categories: Element['categories'] = {
  ID_1: {
    label: 'Vendor',
    options: ['Apple', 'MS', 'Siemens'],
  },
  ID_2: {
    label: 'Product',
    options: ['iPhone X', 'Windows', 'APS'],
  },
  ID_3: {
    label: 'Location',
    options: ['Munich', 'Erlangen', 'Nuremberg'],
  },
};

const suggestions = ['Pump', 'Valve', 'Motor', 'Sensor'];

const filterState: FilterState = {
  tokens: ['Pump'],
  categories: [
    { id: 'ID_1', value: 'Siemens', operator: EQUAL },
    { id: 'ID_3', value: 'Munich', operator: NOT_EQUAL },
  ],
};

const meta = {
  title: 'Example/Category Filter',
  tags: [],
  render: stencil((args) => (
    <ix-category-filter
      {...args}
      onCategoryChanged={(event: CustomEvent<string>) =>
        action('categoryChanged')(event.detail)
      }
      onInputChanged={(event: CustomEvent) =>
        action('inputChanged')(event.detail)
      }
      onFilterChanged={(event: CustomEvent<FilterState>) =>
        action('filterChanged')(event.detail)
      }
      onFilterCleared={() => action('filterCleared')()}
    ></ix-category-filter>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-category-filter'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    placeholder: 'Filter assets',
  },
};

export const WithCategories: Story = {
  args: {
    placeholder: 'Filter by category',
    categories,
  },
};

export const WithSuggestions: Story = {
  args: {
    placeholder: 'Filter by text',
    suggestions,
  },
};

export const WithCategoriesAndSuggestions: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    suggestions,
  },
};

export const WithPresetFilterState: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    suggestions,
    filterState,
  },
};

export const StaticOperator: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    staticOperator: NOT_EQUAL,
  },
};

export const UniqueCategories: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    uniqueCategories: true,
  },
};

export const NonSelectableCategories: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    nonSelectableCategories: {
      ID_LEGACY: 'Legacy plant',
    },
    filterState: {
      tokens: [],
      categories: [{ id: 'ID_LEGACY', value: 'Plant A', operator: EQUAL }],
    },
  },
};

export const CustomIcon: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    icon: 'filter',
  },
};

export const HiddenIcon: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    hideIcon: true,
  },
};

export const Readonly: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    filterState,
    readonly: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    filterState,
    disabled: true,
  },
};

export const EnableTopLayer: Story = {
  args: {
    placeholder: 'Filter assets',
    categories,
    suggestions,
    enableTopLayer: true,
  },
};
