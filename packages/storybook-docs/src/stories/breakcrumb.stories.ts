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
import { genericRender, makeArgTypes } from './generic-render';
import { html } from 'lit';

type Element = Components.IxBreadcrumb;

const meta = {
  title: 'Example/Breadcrumb',
  tags: [],
  render: ({ ghost, visibleItemCount }) => {
    return html`
      <ix-breadcrumb ?ghost=${ghost} visible-item-count=${visibleItemCount}>
        <ix-breadcrumb-item>Item 1</ix-breadcrumb-item>
        <ix-breadcrumb-item>Item 2</ix-breadcrumb-item>
        <ix-breadcrumb-item>Item 3</ix-breadcrumb-item>
        <ix-breadcrumb-item>Item 4</ix-breadcrumb-item>
      </ix-breadcrumb>
    `;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-breadcrumb',
    {
      visibleItemCount: {
        control: {
          type: 'number',
        },
      },
    },
    true,
    ['ariaLabelPreviousButton', 'nextItems']
  ),
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
    visibleItemCount: 4,
  },
};
