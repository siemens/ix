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
import { getExampleResourcesInput } from './utils/example-resources';
import {
  genericRender,
  GenericRenderComponent,
  makeArgTypes,
} from './utils/generic-render';

type Element = GenericRenderComponent<
  Components.IxApplicationHeader,
  {
    showAppSwitch: boolean;
  }
>;

const meta = {
  title: 'Example/ApplicationHeader',
  tags: [],
  render: (args) =>
    genericRender('ix-application-header', args, ['showAppSwitch']),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-application-header', {
    appIcon: getExampleResourcesInput(),
    companyLogo: getExampleResourcesInput(),
    showAppSwitch: {
      control: 'boolean',
    },
  }),
  args: {
    name: 'Application Header',
  },
  parameters: {
    layout: 'fullscreen',
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

type OverflowArgs = Element & {
  defaultContent: number;
  secondaryContent: number;
  overflowContent: number;
};

type OverflowStory = StoryObj<OverflowArgs>;

const overflowRender = (args: OverflowArgs) => {
  const appframe = document.createElement('ix-application');
  const container = genericRender(
    'ix-application-header',
    args,
    ['defaultContent', 'secondaryContent', 'overflowContent', 'showAppSwitch'],
    (header, args) => {
      if (args.showAppSwitch) {
        appframe.appSwitchConfig = {
          apps: [
            {
              description: 'test',
              iconSrc: '',
              id: '1',
              name: 'Test App',
              target: '_blank',
              url: 'https://example.com',
            },
          ],
          currentAppId: '1',
        };
      }
      return header;
    }
  );
  const applicationHeader = container.querySelector(
    'ix-application-header'
  ) as HTMLIxApplicationHeaderElement;

  generateSomeButtons('Item', args.defaultContent, true).forEach((button) => {
    applicationHeader.appendChild(button);
  });

  generateSomeButtons('Slot item', args.secondaryContent).forEach((button) => {
    button.slot = 'secondary';
    applicationHeader.appendChild(button);
  });

  generateSomeButtons('Overflow item', args.overflowContent).forEach(
    (button) => {
      button.slot = 'overflow';
      applicationHeader.appendChild(button);
    }
  );

  const avatar = document.createElement('ix-avatar');
  avatar.initials = 'JD';
  applicationHeader.appendChild(avatar);

  appframe.appendChild(applicationHeader);

  return appframe;
};

export const Overflow: OverflowStory = {
  args: {
    appIcon: '/images/example-app-icon.svg',
    appIconAlt: 'Example App Icon',
    companyLogo: '/images/example-company.svg',
    companyLogoAlt: 'Example Company Logo',
    nameSuffix: 'Powered by XZY',

    defaultContent: 3,
    secondaryContent: 3,
    overflowContent: 2,
  },

  argTypes: {
    defaultContent: {
      control: {
        type: 'number',
      },
    },
    secondaryContent: {
      control: {
        type: 'number',
      },
    },
    overflowContent: {
      control: {
        type: 'number',
      },
    },
  },

  render: (args) => overflowRender(args),
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

export const NoBorderBottom: Story = {
  args: {
    name: 'Application Header',
    hideBottomBorder: true,
  },

  render: (args) => {
    const container = genericRender('ix-application-header', args);
    const bottomContent = document.createElement('div');
    Object.assign(bottomContent.style, {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--theme-app-header--background)',
      height: '5rem',
      width: '100%',
    });
    bottomContent.innerText = 'Simple div with same background as header';
    container.appendChild(bottomContent);
    return container;
  },
};

export const CompanyLogoAsSlot: StoryObj<
  Element & {
    hideSlottedLogo: boolean;
  }
> = {
  render: (args) => {
    const container = genericRender('ix-application-header', args, [
      'hideSlottedLogo',
    ]);

    if (!args.hideSlottedLogo) {
      const companyLogo = document.createElement('img');
      companyLogo.src = '/images/example-company.svg';
      companyLogo.slot = 'logo';
      container
        .querySelector('ix-application-header')
        ?.appendChild(companyLogo);
    }

    return container;
  },
  args: {
    hideSlottedLogo: false,
  },
  argTypes: {
    hideSlottedLogo: {
      control: 'boolean',
    },
  },
};

export const CompanyLogoAsProperty: Story = {
  args: {
    companyLogo: '/images/example-company.svg',
  },
};

function generateSomeButtons(prefix: string, count: number, outline = false) {
  return Array.from({ length: count }, (_, i) => {
    const button = document.createElement('ix-icon-button');
    button.icon = 'star';
    button.innerText = `${prefix} Button ${i + 1}`;
    if (i !== count - 1) {
      button.style.marginRight = '0.5rem';
    }
    if (outline) {
      button.setAttribute('outline', 'true');
    }
    return button;
  });
}

export const SafeArea: OverflowStory = {
  args: {
    name: 'Application Header',
  },
  render: (args) => {
    const container = overflowRender(args);
    container.style.setProperty('--ix-safe-area-inset-top', '5rem');
    return container;
  },
};

export const WindowControls: OverflowStory = {
  args: {
    name: 'Application Header',
  },
  render: (args) => {
    const container = genericRender('ix-application-header', args);

    const applicationHeader = container.querySelector(
      'ix-application-header'
    ) as HTMLIxApplicationHeaderElement;

    applicationHeader.style.width = '100%';

    const avatar = document.createElement('ix-avatar');
    avatar.initials = 'JD';
    applicationHeader.appendChild(avatar);

    const other = document.createElement('div');
    other.style.backgroundColor = 'var(--theme-app-header--background)';
    other.style.minHeight = '3rem';
    other.style.width = 'auto';
    other.style.borderBottom =
      'var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)';

    other.style.display = 'flex';
    other.style.flexDirection = 'row';
    other.style.justifyContent = 'flex-end';
    other.style.alignItems = 'center';
    other.style.paddingRight = '1rem';
    other.style.gap = '0.5rem';

    let button = document.createElement('ix-icon-button');
    button.variant = 'secondary';
    button.ghost = true;
    button.icon = 'minus';
    other.appendChild(button);

    button = document.createElement('ix-icon-button');
    button.variant = 'secondary';
    button.ghost = true;
    button.icon = 'editor-grid-none';
    other.appendChild(button);

    button = document.createElement('ix-icon-button');
    button.variant = 'secondary';
    button.ghost = true;
    button.icon = 'close';
    other.appendChild(button);

    container.appendChild(other);

    container.style.display = 'flex';
    container.style.height = '3rem';

    return container;
  },
};
