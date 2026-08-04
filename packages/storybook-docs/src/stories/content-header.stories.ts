/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { iconInfo } from '@siemens/ix-icons/icons';
import { genericRender, GenericRenderComponent, makeArgTypes } from './utils/generic-render';

type Element = GenericRenderComponent<Components.IxContentHeader, {}>;

const meta = {
  title: 'Example/ContentHeader',
  tags: [],
  render: (args) => genericRender('ix-content-header', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-content-header'),
  args: {
    headerTitle: 'Content title',
    headerSubtitle: 'Subtitle',
    hasBackButton: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

function addActions(container: HTMLElement) {
  const contentHeader = container.querySelector('ix-content-header') as HTMLElement;

  ['Button1', 'Button2', 'Button3'].forEach((label) => {
    const button = document.createElement('ix-button');
    button.slot = 'secondary-actions';
    button.setAttribute('variant', 'tertiary');
    button.textContent = label;
    contentHeader.appendChild(button);
  });

  return container;
}

function addDefaultAction(container: HTMLElement) {
  const contentHeader = container.querySelector('ix-content-header') as HTMLElement;

  const button = document.createElement('ix-button');
  button.setAttribute('variant', 'primary');
  button.textContent = 'Important';
  contentHeader.appendChild(button);

  return container;
}

export const Default: Story = {
  args: {
    headerTitle: 'Content title',
    headerSubtitle: 'Subtitle',
    hasBackButton: true,
  },
  render: (args) => addDefaultAction(genericRender('ix-content-header', args)),
};

export const Secondary: Story = {
  args: {
    headerTitle: 'Content title',
    headerSubtitle: 'Subtitle',
    hasBackButton: true,
    variant: 'secondary',
  },
  render: (args) => addActions(genericRender('ix-content-header', args)),
};

export const WithHeaderSlot: Story = {
  args: {
    headerTitle: 'Content title',
    headerSubtitle: 'Subtitle',
    hasBackButton: true,
  },
  render: (args) => {
    const container = genericRender('ix-content-header', args);
    const contentHeader = container.querySelector('ix-content-header') as HTMLElement;

    const pill = document.createElement('ix-pill') as HTMLElement & { icon: unknown };
    pill.slot = 'header';
    pill.icon = iconInfo;
    pill.textContent = 'Label';
    contentHeader.appendChild(pill);

    const secondaryActions = ['Button1', 'Button2', 'Button3'];
    secondaryActions.forEach((label) => {
      const button = document.createElement('ix-button');
      button.slot = 'secondary-actions';
      button.setAttribute('variant', 'tertiary');
      button.textContent = label;
      contentHeader.appendChild(button);
    });

    const primaryAction = document.createElement('ix-button');
    primaryAction.setAttribute('variant', 'primary');
    primaryAction.textContent = 'Important';
    contentHeader.appendChild(primaryAction);

    return container;
  },
};
