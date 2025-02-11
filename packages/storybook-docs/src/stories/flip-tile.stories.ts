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
import { makeArgTypes } from './utils/generic-render';
import { html } from 'lit';

type Element = Components.IxFlipTile;

const meta = {
  title: 'Example/FlipTile',
  tags: [],
  render: (args) => {
    return html` <ix-flip-tile index=${args.index}>
      <ix-flip-tile-content> Page 1 </ix-flip-tile-content>
      <ix-flip-tile-content> Page 2 </ix-flip-tile-content>
      <ix-flip-tile-content> Page 3 </ix-flip-tile-content>
    </ix-flip-tile>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-flip-tile',
    {
      index: {
        control: {
          type: 'number',
          min: 0,
          max: 2,
        },
      },
    },
    true
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9900&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    index: 1,
  },
};
