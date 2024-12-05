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
  validation: string;
  'text-on': string;
};

const toggleRender = (args: Element) => {
  const container = genericRender('ix-toggle', args);
  const ixToggle = container.querySelector('ix-toggle') as HTMLIxToggleElement;
  ixToggle.addEventListener('checkedChange', action('checkedChange'));
  ixToggle.classList.remove('ix-invalid', 'ix-valid', 'ix-warning', 'ix-info');
  ixToggle.classList.add(args.validation);
  return container;
};

const meta = {
  title: 'Example/Toggle',
  tags: [],
  render: (args) => toggleRender(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-toggle', {
    validation: {
      control: { type: 'select' },
      options: ['ix-invalid', 'ix-valid', 'ix-warning', 'ix-info'],
    },
  }),
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

export const Valid: Story = {
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-valid',
  },
};

export const Invalid: Story = {
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-invalid',
  },
};

export const Info: Story = {
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-info',
  },
};

export const Warning: Story = {
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-warning',
  },
};

export const Overflow: Story = {
  args: {
    disabled: false,
    'text-on': 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    checked: true,
  },
  render: (args) => {
    const container = toggleRender(args);
    const ixToggle = container.querySelector('ix-toggle')!;
    ixToggle.style.width = '10rem';

    return container;
  },
};
