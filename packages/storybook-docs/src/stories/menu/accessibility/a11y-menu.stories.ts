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
import { makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';

type Element = Components.IxMenu;

const meta = {
  title: 'Example/Menu/Accessibility',
  tags: [],
  render: (args) => {
    return html`<ix-menu expand="${args.expand}">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Top level Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3"></ix-menu-item>
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

/**
 * Menu expanded state
 */
export const Expanded: Story = {
  args: {
    expand: true,
  },
};

/**
 * Menu collapsed state
 */
export const Collapsed: Story = {
  args: {
    expand: false,
  },
};

/**
 * Menu with active item
 */
export const WithActiveItem: Story = {
  render: () => {
    return html`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home" active></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`;
  },
};

/**
 * Menu with disabled item
 *
 * Note: Disabled (inactive) UI components are exempt from color contrast
 * requirements per WCAG 2.1 SC 1.4.3
 * @see https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 */
export const WithDisabledItem: Story = {
  render: () => {
    return html`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1" disabled></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`;
  },
  parameters: {
    a11y: {
      test: 'error',
    },
  },
};

/**
 * Menu with notifications
 */
export const WithNotifications: Story = {
  render: () => {
    return html`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="Item 1"
        notifications="5"
      ></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket" notifications="3">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`;
  },
};

/**
 * Menu item with link (anchor)
 */
export const WithLink: Story = {
  render: () => {
    return html`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="External Link"
        href="https://ix.siemens.io"
        target="_blank"
      ></ix-menu-item>
    </ix-menu>`;
  },
};

/**
 * Full menu layout with all slots and features:
 * - home slot
 * - bottom slot
 * - settings tab
 * - about tab
 * - theme toggle
 */
export const FullLayout: Story = {
  render: () => {
    return html`<ix-menu expand="true" enable-toggle-theme="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3"></ix-menu-item>
      </ix-menu-category>
      <ix-menu-item slot="bottom" icon="info" label="Info"></ix-menu-item>
      <ix-menu-about>
        <ix-menu-about-item label="About Item 1"></ix-menu-about-item>
      </ix-menu-about>
      <ix-menu-settings>
        <ix-menu-settings-item label="Settings Item 1"></ix-menu-settings-item>
      </ix-menu-settings>
    </ix-menu>`;
  },
};

/**
 * Pinned menu (always visible, different interaction model)
 */
export const Pinned: Story = {
  render: () => {
    return html`<ix-menu expand="true" pinned>
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`;
  },
};

/**
 * Menu items with custom tooltip text
 */
export const WithCustomTooltip: Story = {
  render: () => {
    return html`<ix-menu expand="true">
      <ix-menu-item
        home
        icon="home"
        label="Home"
        tooltip-text="Navigate to home page"
      ></ix-menu-item>
      <ix-menu-item
        icon="globe"
        label="Item 1"
        tooltip-text="Custom tooltip for Item 1"
      ></ix-menu-item>
      <ix-menu-category
        label="Category"
        icon="rocket"
        tooltip-text="Expand category"
      >
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`;
  },
};

/**
 * Category with active nested item (tests auto-expansion behavior)
 */
export const WithActiveNestedItem: Story = {
  render: () => {
    return html`<ix-menu expand="true">
      <ix-menu-item home icon="home" label="Home"></ix-menu-item>
      <ix-menu-item icon="globe" label="Item 1"></ix-menu-item>
      <ix-menu-category label="Category" icon="rocket">
        <ix-menu-item icon="globe" label="Item 2"></ix-menu-item>
        <ix-menu-item icon="globe" label="Item 3" active></ix-menu-item>
      </ix-menu-category>
    </ix-menu>`;
  },
};
