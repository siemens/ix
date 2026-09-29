/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
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

export const Initials: Story = {
  args: {
    initials: 'JD',
    username: 'John Doe',
  },
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

export const UsernameWrapping: Story = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(2, minmax(20rem, 1fr)); gap: 2rem; min-height: 16rem;"
    >
      <div>
        <ix-typography format="label">Default truncation</ix-typography>
        <ix-application-header name="Default">
          <ix-avatar
            initials="JD"
            username="Alexandria Catherine Montgomery"
            extra="Lead Industrial Experience Administrator"
          ></ix-avatar>
        </ix-application-header>
      </div>
      <div>
        <ix-typography format="label">Wrapped</ix-typography>
        <ix-application-header name="Wrapped">
          <ix-avatar
            initials="JD"
            username="Alexandria Catherine Montgomery"
            extra="Lead Industrial Experience Administrator"
            wrap-username
          ></ix-avatar>
        </ix-application-header>
      </div>
    </div>
  `,
  play: async ({ canvasElement }) => {
    await customElements.whenDefined('ix-avatar');

    const avatars = Array.from(
      canvasElement.querySelectorAll<HTMLIxAvatarElement>('ix-avatar')
    );

    if (avatars.length !== 2) {
      throw new Error('Unable to find the avatar comparison');
    }

    await Promise.all(avatars.map((avatar) => avatar.componentOnReady()));

    const dropdowns = avatars.flatMap((avatar) => {
      const dropdown =
        avatar.shadowRoot?.querySelector<HTMLIxDropdownElement>('ix-dropdown');
      return dropdown ? [dropdown] : [];
    });

    if (dropdowns.length !== avatars.length) {
      throw new Error('Unable to find the avatar dropdowns');
    }

    const showEvents = dropdowns.map(
      (dropdown) =>
        new Promise<void>((resolve) => {
          dropdown.addEventListener('showChanged', () => resolve(), {
            once: true,
          });
        })
    );

    dropdowns.forEach((dropdown) => {
      dropdown.show = true;
    });

    await Promise.all(showEvents);
  },
};
