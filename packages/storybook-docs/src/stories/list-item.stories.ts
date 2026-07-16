/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import {
  GenericArgs,
  genericRender,
  makeArgTypes,
} from './utils/generic-render';

type Element = GenericArgs<Components.IxListItem>;

const meta = {
  title: 'Example/ListItem',
  tags: [],
  render: (args) => {
    const list = document.createElement('ix-list');
    const item = genericRender('ix-list-item', args) as HTMLIxListItemElement;

    const persistentAction = document.createElement('ix-button');
    persistentAction.slot = 'action';
    persistentAction.variant = 'tertiary';
    persistentAction.textContent = 'Open';

    const additionalAction = document.createElement('ix-button');
    additionalAction.slot = 'additional-actions';
    additionalAction.variant = 'tertiary';
    additionalAction.textContent = 'Details';

    item.append(persistentAction, additionalAction);
    item.addEventListener('selectedChange', (event) => {
      item.selected = (event as CustomEvent<boolean>).detail;
    });
    list.appendChild(item);

    return list;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-list-item', {}),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Ghost: Story = {
  args: {
    label: 'Factory overview',
    description: 'Updated 5 minutes ago',
    status: 'Online',
    variant: 'ghost',
  },
};

export const Outline: Story = {
  args: {
    label: 'Factory overview',
    description: 'Updated 5 minutes ago',
    status: 'Online',
    variant: 'outline',
  },
};

export const Filled: Story = {
  args: {
    label: 'Factory overview',
    description: 'Updated 5 minutes ago',
    status: 'Online',
    variant: 'filled',
  },
};

export const Checkbox: Story = {
  args: {
    label: 'Selectable project',
    checkbox: true,
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Archived project',
    disabled: true,
  },
};
