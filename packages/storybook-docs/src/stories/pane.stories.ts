/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxPane;

const meta = {
  title: 'Example/Pane',
  tags: [],
  render: (args) => genericRender('ix-pane', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-pane', {}),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const HeaderSlot: Story = {
  args: {},
  render: (args) => {
    const container = genericRender('ix-pane', args);
    const pane = container.querySelector('ix-pane')!;

    const button = document.createElement('ix-button');
    button.setAttribute('slot', 'header');
    button.textContent = 'Demo';
    pane.appendChild(button);

    return container;
  },
};
