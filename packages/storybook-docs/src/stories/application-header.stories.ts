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
import { html } from 'lit';
import {
  genericRender,
  GenericRenderComponent,
  makeArgTypes,
} from './utils/generic-render';
import { getExampleResourcesInput } from './utils/example-resources';

type Element = GenericRenderComponent<Components.IxApplicationHeader>;

const meta = {
  title: 'Example/ApplicationHeader',
  tags: [],
  render: (args) => genericRender('ix-application-header', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-application-header', {
    appIcon: getExampleResourcesInput(),
    companyLogo: getExampleResourcesInput(),
  }),
  args: {
    name: 'Application Header',
  },
  parameters: {
    design: {
      type: 'figma',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    name: 'Application Header',
  },
};

export const AppIcon: Story = {
  args: {
    appIcon: '/images/example-app-icon.svg',
    appIconAlt: 'Example App Icon',
    companyLogo: '/images/example-company.svg',
    companyLogoAlt: 'Example Company Logo',
  },
};

type OverflowStory = StoryObj<
  Element & {
    defaultButtons: number;
    overflowButtons: number;
  }
>;
export const Overflow: OverflowStory = {
  args: {
    appIcon: '/images/example-app-icon.svg',
    appIconAlt: 'Example App Icon',
    companyLogo: '/images/example-company.svg',
    companyLogoAlt: 'Example Company Logo',
    nameSuffix: 'Powered by XZY',

    defaultButtons: 3,
    overflowButtons: 2,
  },

  argTypes: {
    defaultButtons: {
      control: {
        type: 'number',
      },
    },
    overflowButtons: {
      control: {
        type: 'number',
      },
    },
  },

  render: (args) => {
    const container = genericRender('ix-application-header', args, [
      'defaultButtons',
      'overflowButtons',
    ]);
    const applicationHeader = container.querySelector(
      'ix-application-header'
    ) as HTMLIxApplicationHeaderElement;

    generateSomeButtons('Default', args.defaultButtons, true).forEach(
      (button) => {
        applicationHeader.appendChild(button);
      }
    );

    generateSomeButtons('Secondary', args.overflowButtons).forEach((button) => {
      button.slot = 'secondary';
      applicationHeader.appendChild(button);
    });

    return container;
  },
};

export const withAvatar: Story = {
  render: (args) => {
    return html`<ix-application-header
      name="${args.name}"
      ?show-menu="${args.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`;
  },
  args: {
    name: 'Application Header',
  },
};

function generateSomeButtons(prefix: string, count: number, outline = false) {
  return Array.from({ length: count }, (_, i) => {
    const button = document.createElement('ix-button');
    button.innerText = `${prefix} Button ${i + 1}`;
    button.style.marginRight = '0.5rem';
    if (outline) {
      button.setAttribute('outline', 'true');
    }
    return button;
  });
}
