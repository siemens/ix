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

type StoryArgs = Components.IxApplicationHeader & { content: string };

const meta: Meta = {
  component: (args) =>
    `<ix-application-header name="${args.name}"></ix-application-header>`,
  title: 'Application/Header',
  argTypes: {},
};

export default meta;

export const Default: StoryObj<StoryArgs> = {
  args: {
    name: 'Application Name',
  },
};

export const WithAvatar: StoryObj<StoryArgs> = {
  render: (args) =>
    `<ix-application-header name="${args.name}">
      <ix-avatar></ix-avatar>
    </ix-application-header>`,
  args: {
    name: 'Application Name',
  },
};
