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
import { makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';

type Element = Components.IxMenu;

const meta = {
  title: 'Example/Menu/Menu',
  tags: [],
  render: (args) => {
    return html`<ix-menu expand="${args.expand}">
      <ix-menu-item home icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Item 1</ix-menu-item>
      <ix-menu-category label="Top level Category" icon="rocket">
        <ix-menu-item icon="globe">Item 2</ix-menu-item>
        <ix-menu-item icon="globe">Item 3</ix-menu-item>
      </ix-menu-category>
      <ix-menu-about></ix-menu-about>
      <ix-menu-settings></ix-menu-settings>
    </ix-menu>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-menu', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev',
    },
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    expand: true,
  },
};

export const Collapsed: Story = {
  args: {
    expand: false,
  },
};

export const Overflow: Story = {
  parameters: {
    a11y: {
      config: {
        rules: [
          //TODO will be fixed with EIX-232
          { id: 'scrollable-region-focusable', enabled: false },
        ],
      },
    },
  },
  render: () => html`
    <div style="height: 32rem; overflow: hidden; position: relative;">
      <ix-menu expand="true">
        <ix-menu-item home icon="home">Home</ix-menu-item>
        ${Array.from(
          { length: 18 },
          (_, index) => html`
            <ix-menu-item icon="star">Item ${index + 1}</ix-menu-item>
          `
        )}
        <ix-menu-about></ix-menu-about>
        <ix-menu-settings></ix-menu-settings>
      </ix-menu>
    </div>
  `,
  play: async ({ canvasElement }) => {
    await customElements.whenDefined('ix-menu');

    const menu = canvasElement.querySelector('ix-menu');
    const tabs = menu?.shadowRoot?.querySelector<HTMLElement>('.tabs');
    const menuNavigation =
      menu?.shadowRoot?.querySelector<HTMLElement>('.menu-navigation');

    if (!tabs || !menuNavigation) {
      throw new Error('Unable to find the menu navigation containers');
    }

    menuNavigation.focus();
    menuNavigation.dispatchEvent(
      new KeyboardEvent('keydown', {
        bubbles: true,
        composed: true,
        key: 'ArrowDown',
      })
    );

    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    tabs.scrollTop = (tabs.scrollHeight - tabs.clientHeight) / 2;
    tabs.dispatchEvent(new Event('scroll'));
  },
};
