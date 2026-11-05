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
import { makeArgTypes } from '@utils/generic-render';
import { stencil } from '@utils/stencil-render';

type Element = Components.IxPushCard & { defaultSlot: string };

const meta = {
  title: 'Example/PushCard',
  tags: [],
  render: stencil(({ defaultSlot, ...args }) => (
    <ix-push-card {...args}>{defaultSlot}</ix-push-card>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-push-card', {
    defaultSlot: {
      control: 'text',
    },
  }),
  args: {
    defaultSlot: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=104612-25078&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    defaultSlot: ``,
    icon: 'bulb',
    notification: '99',
    heading: 'Heading content',
    subheading: 'Subheading',
    variant: 'base',
  },
};
