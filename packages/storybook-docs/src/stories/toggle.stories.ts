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
import { action } from '@storybook/addon-actions';

type Element = Components.IxToggle & {
  defaultSlot: string;
  ['checked-change']: any;
};

const meta = {
  title: 'Example/Toggle',
  tags: [],
  render: (args) => {
    const container = genericRender('ix-toggle', args);
    const ixToggle = container.querySelector(
      'ix-toggle'
    ) as HTMLIxToggleElement;
    ixToggle.addEventListener('checkedChange', action('checkedChange'));
    return container;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-toggle'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    disabled: false,
  },
};
