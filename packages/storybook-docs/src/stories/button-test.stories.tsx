/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxButton & {
  defaultSlot: string;
  styles?: Record<string, string>;
};

const meta = {
  title: 'Example/ButtonStencil',
  tags: [],
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-button', {
    styles: {
      control: { type: 'object' },
    },
  }),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: stencil((args) => {
    return <ix-button>{args.variant}</ix-button>
  })
};
