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
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxList;

const createItem = (
  label: string,
  options: Partial<Components.IxListItem> = {}
) => {
  const item = document.createElement('ix-list-item');
  item.label = label;
  Object.assign(item, options);

  item.addEventListener('selectedChange', (event) => {
    item.selected = (event as CustomEvent<boolean>).detail;
  });

  return item;
};

const renderList = (
  args: Element,
  items: HTMLElement[] = [
    createItem('Factory overview', {
      description: 'Updated 5 minutes ago',
      icon: 'project',
    }),
    createItem('Production line 1', {
      description: 'Running normally',
      icon: 'project',
    }),
    createItem('Archived project', { disabled: true }),
  ]
) => {
  const container = genericRender('ix-list', args);
  const list = container.querySelector('ix-list') as HTMLIxListElement;
  list.setAttribute('aria-label', 'Projects');
  list.append(...items);

  return container;
};

const meta = {
  title: 'Example/List',
  tags: [],
  render: (args) => renderList(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-list', {}),
  parameters: {
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    hasDivider: true,
    itemGap: 0,
  },
};

export const Variants: Story = {
  render: (args) =>
    renderList(args, [
      createItem('Ghost item', { variant: 'ghost' }),
      createItem('Outline item', { variant: 'outline' }),
      createItem('Filled item', { variant: 'filled' }),
    ]),
  args: {
    itemGap: 8,
  },
};

export const Selection: Story = {
  render: (args) =>
    renderList(args, [
      createItem('Factory overview', { checkbox: true, selected: true }),
      createItem('Production line 1', { checkbox: true }),
      createItem('Production line 2', { checkbox: true }),
    ]),
  args: {
    itemGap: 4,
  },
};

export const Actions: Story = {
  render: (args) => {
    const createActionSlot = () => {
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
      return actionSlot;
    };

    return renderList(
      args,
      [
        Object.assign(createItem('test', { icon: 'info', checkbox: true }), {
          variant: 'filled',
        }),
        Object.assign(createItem('test 2', { icon: 'info', checkbox: true }), {
          variant: 'filled',
        }),
        Object.assign(createItem('test 3', { icon: 'info', checkbox: true }), {
          variant: 'filled',
        }),
        Object.assign(createItem('test 4', { icon: 'info', checkbox: true }), {
          variant: 'filled',
        }),
      ].map((item) => {
        item.append(createActionSlot());
        return item;
      })
    );
  },
  args: {
    checkbox: true,
    draggable: true,
    itemGap: '8',
    variant: 'filled',
  },
};

export const Draggable: Story = {
  args: {
    dragBehavior: 'dynamic',
    draggable: true,
    itemGap: 4,
  },
};

export const Separator: Story = {
  render: (args) => {
    const separator = document.createElement('ix-list-item-separator');

    return renderList(args, [
      createItem('Factory overview', {
        description: 'Updated 5 minutes ago',
        icon: 'project',
      }),
      createItem('Production line 1', {
        description: 'Running normally',
        icon: 'project',
      }),
      separator,
      createItem('Archived project', { disabled: true }),
    ]);
  },
  args: {
    itemGap: 8,
  },
};

export const ActionOnHover: Story = {
  render: (args) => {
    const createItemWithAction = (label: string) => {
      const item = createItem(label, {
        description: 'Updated 5 minutes ago',
        icon: 'project',
        actionOnHover: true,
      });
      const action = document.createElement('ix-icon-button');
      action.slot = 'action';
      action.variant = 'subtle-tertiary';
      action.textContent = 'Open';
      action.icon = 'edit';
      item.append(action);

      return item;
    };

    return renderList(args, [
      createItemWithAction('Factory overview'),
      createItemWithAction('Production line 1'),
    ]);
  },
  args: {
    itemGap: 4,
  },
};
