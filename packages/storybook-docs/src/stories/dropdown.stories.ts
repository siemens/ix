/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxDropdown & { container?: string | HTMLElement };

function renderDropdown(args: Partial<Element>) {
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.minHeight = '250px';
  wrapper.style.padding = '16px';

  const trigger = document.createElement('ix-button');
  trigger.id = 'dropdown-trigger';
  trigger.textContent = 'Open Dropdown';
  wrapper.appendChild(trigger);

  const dropdown = document.createElement(
    'ix-dropdown'
  ) as HTMLIxDropdownElement;
  dropdown.trigger = trigger;

  if (args.placement !== undefined) dropdown.placement = args.placement;
  if (args.closeBehavior !== undefined)
    dropdown.closeBehavior = args.closeBehavior;
  if (args.header !== undefined) dropdown.header = args.header;
  if (args.show !== undefined) dropdown.show = args.show;
  if (args.suppressAutomaticPlacement !== undefined)
    dropdown.suppressAutomaticPlacement = args.suppressAutomaticPlacement;
  if (args.positioningStrategy !== undefined)
    dropdown.positioningStrategy = args.positioningStrategy;
  if (args.enableTopLayer !== undefined)
    dropdown.enableTopLayer = args.enableTopLayer;
  if (args.container !== undefined) dropdown.container = args.container;

  const items = ['Item 1', 'Item 2', 'Item 3'];
  items.forEach((label) => {
    const item = document.createElement('ix-dropdown-item');
    item.label = label;
    dropdown.appendChild(item);
  });

  wrapper.appendChild(dropdown);
  return wrapper;
}

const meta = {
  title: 'Example/Dropdown',
  tags: [],
  render: (args) => renderDropdown(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-dropdown'),
  args: {
    placement: 'bottom-start',
    closeBehavior: 'both',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=1219-25402&m=dev'
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    show: true,
  },
};

export const WithHeader: Story = {
  args: {
    header: 'Dropdown Header',
    show: true,
  },
};

export const WithContainer: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.id = 'dropdown-container';
    container.style.position = 'relative';
    container.style.height = '300px';
    container.style.overflow = 'auto';
    container.style.border = '2px dashed var(--theme-color-soft-bdr)';
    container.style.padding = '16px';

    const trigger = document.createElement('ix-button');
    trigger.textContent = 'Open Dropdown';
    container.appendChild(trigger);

    const dropdown = document.createElement(
      'ix-dropdown'
    ) as HTMLIxDropdownElement;
    dropdown.trigger = trigger;
    dropdown.container = container;
    if (args.placement !== undefined) dropdown.placement = args.placement;
    if (args.closeBehavior !== undefined)
      dropdown.closeBehavior = args.closeBehavior;
    if (args.header !== undefined) dropdown.header = args.header;

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    items.forEach((label) => {
      const item = document.createElement('ix-dropdown-item');
      item.label = label;
      dropdown.appendChild(item);
    });

    container.appendChild(dropdown);

    const spacer = document.createElement('div');
    spacer.style.height = '400px';
    spacer.textContent = 'Scroll content to test container constraint';
    spacer.style.paddingTop = '16px';
    spacer.style.color = 'var(--theme-color-std-text)';
    container.appendChild(spacer);

    return container;
  },
  args: {
    placement: 'bottom-start',
    closeBehavior: 'both',
    show: false,
  },
};

export const WithContainerById: Story = {
  render: (args) => {
    const wrapper = document.createElement('div');
    const container = document.createElement('div');
    container.id = 'my-dropdown-container';
    container.style.position = 'relative';
    container.style.height = '100px';
    container.style.overflow = 'auto';
    container.style.border = '2px dashed var(--theme-color-soft-bdr)';
    container.style.padding = '16px';

    const trigger = document.createElement('ix-button');
    trigger.textContent = 'Open Dropdown';
    container.appendChild(trigger);

    const dropdown = document.createElement(
      'ix-dropdown'
    ) as HTMLIxDropdownElement;
    dropdown.trigger = trigger;
    dropdown.container = 'my-dropdown-container';
    if (args.placement !== undefined) dropdown.placement = args.placement;
    if (args.header !== undefined) dropdown.header = args.header;

    const items = ['Item 1', 'Item 2', 'Item 3'];
    items.forEach((label) => {
      const item = document.createElement('ix-dropdown-item');
      item.label = label;
      dropdown.appendChild(item);
    });

    container.appendChild(dropdown);
    wrapper.appendChild(container);

    return wrapper;
  },
  args: {
    placement: 'bottom-start',
    show: false,
  },
};
