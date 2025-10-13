/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html } from 'lit';
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxTree;

const defaultModel = {
  root: {
    id: 'root',
    data: { name: '' },
    hasChildren: true,
    children: ['sample'],
  },
  sample: {
    id: 'sample',
    data: { name: 'Sample' },
    hasChildren: true,
    children: ['sample-child-1', 'sample-child-2'],
  },
  'sample-child-1': {
    id: 'sample-child-1',
    data: { name: 'Sample Child 1' },
    hasChildren: false,
    children: [],
  },
  'sample-child-2': {
    id: 'sample-child-2',
    data: { name: 'Sample Child 2' },
    hasChildren: false,
    children: [],
  },
};

const meta = {
  title: 'Example/Tree',
  tags: [],
  render: (args) => html`
    <ix-tree
      .model=${args.model}
      .root=${args.root}
      .context=${args.context}
      .toggleOnItemClick=${args.toggleOnItemClick}
    ></ix-tree>
  `,
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-tree', {
    model: { control: false },
    root: { control: false },
    context: { control: false },
    toggleOnItemClick: {
      control: 'boolean',
      description: 'Enable to toggle items by click on the item',
    },
  }),
  args: {
    root: 'root',
    model: defaultModel,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=721-9472&m=dev',
    },
    controls: { expanded: true },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const DefaultCollapsedOnStart: Story = {
  name: 'Default',
  args: {
    context: { sample: { isExpanded: false, isSelected: false } },
    toggleOnItemClick: false,
  },
};

export const ExpandOnChevronClick: Story = {
  name: 'Parent node expands only when chevron is clicked',
  args: {
    context: { sample: { isExpanded: true, isSelected: false } },
    toggleOnItemClick: false,
  },
};

export const ExpandOnNodeClick: Story = {
  name: 'Parent node expands when the entire node is clicked',
  args: {
    context: { sample: { isExpanded: true, isSelected: false } },
    toggleOnItemClick: true,
  },
};

export const SelectableExpandOnNode: Story = {
  name: 'Selectable parent nodes both expand and change to selected when entire node is clicked',
  args: {
    context: { sample: { isExpanded: true, isSelected: true } },
    toggleOnItemClick: true,
  },
};
