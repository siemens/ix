/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix';
import type { Meta, StoryObj } from '@storybook/html';

type ButtonStory = Components.IxButton & { content: string };

const meta: Meta = {
  component: (args) =>
    `<ix-button variant="${args.variant}"${args.ghost && 'ghost'}>${
      args.content
    }</ix-button>`,
  title: 'Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    ghost: {
      type: 'boolean',
    },
  },
};

export default meta;

export const Primary: StoryObj<ButtonStory> = {
  args: {
    content: 'Hello World',
    variant: 'primary',
  },
};

export const Secondary: StoryObj<ButtonStory> = {
  args: {
    content: 'Hello World',
    variant: 'secondary',
  },
};
