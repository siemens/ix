/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxAvatar;

const meta = {
  title: 'Example/Avatar',
  tags: [],
  render: (args) => genericRender('ix-avatar', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-avatar'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9899&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};

export const withAvatar: Story = {
  render: (args) => {
    const container = genericRender('ix-avatar', args);
    const avatar = container.querySelector('ix-avatar') as HTMLIxAvatarElement;

    const dropdownItem1 = document.createElement('ix-dropdown-item');
    dropdownItem1.textContent = 'Profile';

    const dropdownItem2 = document.createElement('ix-dropdown-item');
    dropdownItem2.textContent = 'Settings';

    const dropdownItem3 = document.createElement('ix-dropdown-item');
    dropdownItem3.textContent = 'Logout';

    avatar.appendChild(dropdownItem1);
    avatar.appendChild(dropdownItem2);
    avatar.appendChild(dropdownItem3);

    const applicationHeader = document.createElement('ix-application-header');
    applicationHeader.appendChild(avatar);

    return applicationHeader;
  },
  args: {
    extra: 'Administrator',
    username: 'John Doe',
    initials: 'JD',
  },
};
