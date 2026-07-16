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

const meta = {
  title: 'Example/List',
  tags: [],
  render: (args) => {
    const list = genericRender('ix-list', args) as HTMLIxListElement;
    list.setAttribute('aria-label', 'Projects');

    const firstItem = createItem('Factory overview', {
      description: 'Updated 5 minutes ago',
      status: 'Online',
    });
    const persistentAction = document.createElement('ix-button');
    persistentAction.slot = 'action';
    persistentAction.variant = 'tertiary';
    persistentAction.textContent = 'Open';
    firstItem.appendChild(persistentAction);

    const additionalAction = document.createElement('ix-button');
    additionalAction.slot = 'additional-actions';
    additionalAction.variant = 'tertiary';
    additionalAction.textContent = 'Details';
    firstItem.appendChild(additionalAction);

    list.append(
      firstItem,
      createItem('Production line 1', { checkbox: true, selected: true }),
      createItem('Production line 2', { checkbox: true }),
      createItem('Archived project', { disabled: true })
    );

    return list;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-list', {}),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    hasDivider: true,
    itemGap: 0,
  },
};

export const Spaced: Story = {
  args: {
    hasDivider: false,
    itemGap: 8,
  },
};

export const Constrained: Story = {
  render: (args) => {
    const list = meta.render(args);
    list.style.cssText = 'display: block; max-height: 10rem; width: 24rem;';
    return list;
  },
  args: {
    hasDivider: true,
    itemGap: 4,
  },
};
