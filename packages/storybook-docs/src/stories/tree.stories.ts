import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Example/Tree',
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    expandOn: {
      control: { type: 'select' },
      options: ['chevron', 'node'],
    },
    selectable: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj;

export const SampleTree: Story = {
  render: (args) => html`
    <ix-tree
      expand-on=${args.expandOn}
      ?selectable=${args.selectable}
    >
      <ix-tree-item label="sample" expanded>
        <ix-tree-item label="sample1"></ix-tree-item>
        <ix-tree-item label="sample2"></ix-tree-item>
      </ix-tree-item>
    </ix-tree>
  `,
  args: {
    expandOn: 'chevron',
    selectable: false,
  },
};

export const ExpandOnChevronClick: Story = {
  name: 'Expand only when chevron is clicked',
  render: () => html`
    <ix-tree expand-on="chevron">
      <ix-tree-item label="Parent">
        <ix-tree-item label="Child 1"></ix-tree-item>
        <ix-tree-item label="Child 2"></ix-tree-item>
      </ix-tree-item>
    </ix-tree>
    <p>Parent expands only when chevron is clicked.</p>
  `,
};

export const ExpandOnNodeClick: Story = {
  name: 'Expand when entire node is clicked',
  render: () => html`
    <ix-tree expand-on="node">
      <ix-tree-item label="Parent">
        <ix-tree-item label="Child 1"></ix-tree-item>
        <ix-tree-item label="Child 2"></ix-tree-item>
      </ix-tree-item>
    </ix-tree>
    <p>Parent expands when the entire node is clicked.</p>
  `,
};

export const SelectableExpandOnChevron: Story = {
  name: 'Selectable parent, expand only on chevron',
  render: () => html`
    <ix-tree expand-on="chevron" selectable>
      <ix-tree-item label="Parent" selectable>
        <ix-tree-item label="Child 1"></ix-tree-item>
        <ix-tree-item label="Child 2"></ix-tree-item>
      </ix-tree-item>
    </ix-tree>
    <p>
      Selectable parent nodes expand only when chevron is clicked and change to selected when entire node is clicked.
    </p>
  `,
};

export const SelectableExpandOnNode: Story = {
  name: 'Selectable parent, expand and select on node click',
  render: () => html`
    <ix-tree expand-on="node" selectable>
      <ix-tree-item label="Parent" selectable>
        <ix-tree-item label="Child 1"></ix-tree-item>
        <ix-tree-item label="Child 2"></ix-tree-item>
      </ix-tree-item>
    </ix-tree>
    <p>
      Selectable parent nodes both expand and change to selected when entire node is clicked.
    </p>
  `,
};