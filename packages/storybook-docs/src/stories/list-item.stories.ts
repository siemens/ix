/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import {
  GenericArgs,
  genericRender,
  makeArgTypes,
} from './utils/generic-render';

type Element = GenericArgs<Components.IxListItem>;

const renderStandaloneItem = (args: Element) => {
  const container = genericRender('ix-list-item', args, [], (element) => {
    const item = element as HTMLIxListItemElement;
    const actionSlot = document.createElement('div');
    actionSlot.slot = 'action';

    const editButton = document.createElement('ix-icon-button');
    editButton.icon = 'edit-document';
    editButton.variant = 'subtle-tertiary';
    editButton.setAttribute('aria-label', 'Edit item');

    const deleteButton = document.createElement('ix-icon-button');
    deleteButton.icon = 'trashcan';
    deleteButton.variant = 'subtle-tertiary';
    deleteButton.setAttribute('aria-label', 'Delete item');

    actionSlot.append(editButton, deleteButton);
    item.append(actionSlot);
    item.addEventListener('selectedChange', (event) => {
      item.selected = (event as CustomEvent<boolean>).detail;
    });

    return item;
  });
  container.setAttribute('role', 'list');
  container.setAttribute('aria-label', 'Standalone list item');

  return container;
};

const meta = {
  title: 'Example/ListItem',
  tags: [],
  render: (args) => renderStandaloneItem(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-list-item', {}),
  parameters: {
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Standalone: Story = {
  args: {
    checkbox: true,
    description: 'Updated 5 minutes ago',
    icon: 'project',
    label: 'Factory overview',
    previewWidth: '32rem',
  },
};
