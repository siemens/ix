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
import { genericRender } from '@utils/generic-render';
type Element = Components.IxTile;

const meta = {
  title: 'Example/Tile',
  tags: [],
  render: (args) => genericRender('ix-tile', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-tile'),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};
