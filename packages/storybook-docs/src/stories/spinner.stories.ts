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

type Element = Components.IxSpinner;

const meta = {
  title: 'Example/Spinner',
  tags: [],
  render: (args) => genericRender('ix-spinner', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-spinner', {}),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Large: Story = {
  args: {
    size: 'large',
  },
};
