import { html } from 'lit';
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxTree;

const meta = {
  title: 'Example/Tree',
  tags: [],
  render: (args) => html`
    <ix-tree
      .model=${args.model}
      .root=${args.root}
      .context=${args.context}
    ></ix-tree>
  `,
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-tree', {
    model: { control: false },
    root: { control: false },
    context: { control: false },
  }),
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

const defaultModel = {
  root: {
    id: 'root',
    data: { name: '' },
    hasChildren: true,
    children: ['sample'],
    expanded: false
  },
  sample: {
    id: 'sample',
    data: { name: 'Sample' },
    hasChildren: true,
    children: ['sample-child-1', 'sample-child-2'],
    expanded: false,
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

export const Default: Story = {
  args: {
    root: 'root',
    model: defaultModel,
    context: { sample: { isExpanded: false, isSelected: false } },
  },
  render: (args) => html`
    <ix-tree
      .model=${args.model}
      .root=${args.root}
      .context=${args.context}
    ></ix-tree>
    `,
};

export const ExpandOnChevronClick: Story = {
  name: 'Parent node expands only when chevron is clicked',
  args: {
    root: 'root',
    model: defaultModel,
    context: { sample: { isExpanded: false, isSelected: false } },
  },
  render: (args) => html`
    <ix-tree
      .model=${args.model}
      .root=${args.root}
      .context=${args.context}
    ></ix-tree>
  `,
};

export const ExpandOnNodeClick: Story = {
  name: 'Parent node expands when the entire node is clicked',
  args: {
    root: 'root',
    model: defaultModel,
    context: { sample: { isExpanded: false, isSelected: false } },
  },
  render: (args) => html`
    <ix-tree
      .model=${args.model}
      .root=${args.root}
      .context=${args.context}
    ></ix-tree>
  `,
};

export const SelectableExpandOnChevron: Story = {
  name: 'Selectable parent nodes expand only when chevron is clicked and change to selected when entire node is clicked',
  args: {
    root: 'root',
    model: defaultModel,
    context: { sample: { isExpanded: false, isSelected: false } },

  },
  render: (args) => html`
    <ix-tree
      .model=${args.model}
      .root=${args.root}
      .context=${args.context}
    ></ix-tree>
  `,
};

export const SelectableExpandOnNode: Story = {
  name: 'Selectable parent nodes both expand and change to selected when entire node is clicked',
  args: {
    root: 'root',
    model: defaultModel,
    context: { sample: { isExpanded: true, isSelected: true } },
  },
  render: (args) => html`
    <ix-tree
      .model=${args.model}
      .root=${args.root}
      .context=${args.context}
    ></ix-tree>
  `,
};