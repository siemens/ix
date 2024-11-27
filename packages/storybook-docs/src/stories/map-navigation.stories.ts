/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import { icon } from './utils/arg-types';
import { Components } from '@siemens/ix';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxMapNavigation & {
  icon: string;
  defaultSlot: string;
  sidebarContentSlot: string;
  overlayIcon: string;
  overlayName: string;
  overlayDefaultSlot: string;
};

const meta = {
  title: 'Example/Map-Navigation',
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-map-navigation', {
    icon: icon('application icon', false),
    defaultSlot: {
      control: { type: 'text' },
    },
    sidebarContentSlot: {
      control: { type: 'text' },
    },
    overlayIcon: icon('overlay icon', false),
    overlayName: {
      control: { type: 'text' },
    },
    overlayDefaultSlot: {
      control: { type: 'text' },
    },
  }),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    applicationName: 'Application Name',
    hideContextMenu: false,
    navigationTitle: 'Navigation Title',
    icon: 'barchart',
    defaultSlot: 'Content',
    sidebarContentSlot: 'Sidebar Content',
    overlayName: 'Custom overlay',
    overlayIcon: 'bulb',
    overlayDefaultSlot: 'Overlay content',
  },
  render: (args) => {
    const show = () => {
      const mount = document.querySelector('ix-map-navigation')!;
      console.log('mount', mount);

      render(
        html`
          <ix-map-navigation-overlay
            name=${args.overlayName}
            icon=${args.overlayIcon}
            slot="overlay"
          >
            ${args.overlayDefaultSlot}
          </ix-map-navigation-overlay>
        `,
        mount
      );

      const overlay = mount.querySelector('ix-map-navigation-overlay')!;
      console.log('overlay', overlay);

      const listener = () => {
        overlay.removeEventListener('closeClick', listener);
        overlay.remove();
        console.log('remove');
      };
      overlay.addEventListener('closeClick', listener);
    };

    return html`
      <ix-map-navigation
        application-name=${args.applicationName}
        hide-context-menu=${args.hideContextMenu}
        navigation-title=${args.navigationTitle}
      >
        <ix-menu>
          <ix-menu-item>Item 1</ix-menu-item>
          <ix-menu-item>Item 2</ix-menu-item>
          <ix-menu-item>Item 3</ix-menu-item>
        </ix-menu>
        <ix-icon slot="logo" name=${args.icon}></ix-icon>
        <div slot="sidebar-content">${args.sidebarContentSlot}</div>
        <div>
          ${args.defaultSlot}
          <br />
          <br />
          <ix-button @click=${show}>Open overlay</ix-button>
        </div>
      </ix-map-navigation>
    `;
  },
};
