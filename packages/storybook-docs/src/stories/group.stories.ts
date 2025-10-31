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
import { genericRender, makeArgTypes, GenericArgs } from './utils/generic-render';

type GroupElements = Components.IxGroup & GenericArgs & {
  itemCount: number;
  hasFooter: boolean;
  hasDropdown: boolean;
};

const meta = {
  title: 'Example/Group',
  tags: [],
  render: (args) => {
    const container = genericRender('ix-group', args, [
      'itemCount',
      'hasFooter',
      'hasDropdown',
    ]);
    const groupElement = container.querySelector('ix-group') as HTMLIxGroupElement;

    // Add group items based on itemCount
    for (let i = 0; i < args.itemCount; i++) {
      const groupItem = document.createElement('ix-group-item');
      groupItem.text = `Group Item ${i + 1}`;
      groupItem.secondaryText = `Secondary text for item ${i + 1}`;
      if (i === 0) {
        groupItem.icon = 'star';
      }
      groupElement.appendChild(groupItem);
    }

    // Add footer if requested
    if (args.hasFooter) {
      const footerDiv = document.createElement('div');
      footerDiv.slot = 'footer';
      footerDiv.innerHTML = '<ix-button>Footer content</ix-button>';
      footerDiv.style.padding = '8px 16px';
      footerDiv.style.color = 'var(--theme-color-soft-text)';
      footerDiv.style.fontSize = '12px';
      groupElement.appendChild(footerDiv);
    }

    // Add dropdown if requested
    if (args.hasDropdown) {
      const dropdown = document.createElement('ix-dropdown');
      dropdown.slot = 'dropdown';

      const dropdownItem1 = document.createElement('ix-dropdown-item');
      dropdownItem1.label = 'Edit';
      dropdownItem1.icon = 'pen';
      dropdown.appendChild(dropdownItem1);

      const dropdownItem2 = document.createElement('ix-dropdown-item');
      dropdownItem2.label = 'Delete';
      dropdownItem2.icon = 'trashcan';
      dropdown.appendChild(dropdownItem2);

      groupElement.appendChild(dropdown);
    }

    return container;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<GroupElements>>>('ix-group', {
    itemCount: {
      control: { type: 'number', min: 0, max: 10 },
      name: 'Item count*',
      description: 'Number of group items to display',
    },
    hasFooter: {
      control: 'boolean',
      name: 'Has footer*',
      description: 'Whether to show footer content',
    },
    hasDropdown: {
      control: 'boolean',
      name: 'Has dropdown*',
      description: 'Whether to show context menu dropdown',
    },
  }),
  args: {
    itemCount: 3,
    hasFooter: false,
    hasDropdown: false,
    suppressHeaderSelection: false,
    expanded: false,
    selected: false,
    expandOnHeaderClick: false,
    defaultSlot: '',
    styles: {},
    previewWidth: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev',
    },
  },
} satisfies Meta<GroupElements>;

export default meta;
type Story = StoryObj<GroupElements>;

export const Default: Story = {
  args: {
    header: 'Default Group',
    subHeader: 'This is a subtitle',
  },
};

export const WithFooter: Story = {
  args: {
    header: 'Group with Footer',
    subHeader: 'This group has footer content',
    expanded: true,
    hasFooter: true,
  },
};

export const WithDropdown: Story = {
  args: {
    header: 'Group with Context Menu',
    subHeader: 'This group has a context menu dropdown',
    expanded: true,
    hasDropdown: true,
  },
};
