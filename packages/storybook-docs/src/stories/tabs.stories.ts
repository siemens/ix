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
import { action } from 'storybook/actions';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxTabs;

const baseTabs = () => html`
  <ix-tab-item tab-key="overview" label="Overview"></ix-tab-item>
  <ix-tab-item tab-key="analytics" label="Analytics"></ix-tab-item>
  <ix-tab-item tab-key="events" label="Events"></ix-tab-item>
  <ix-tab-item tab-key="settings" label="Settings" disabled></ix-tab-item>
`;

const iconTabs = () => html`
  <ix-tab-item tab-key="success">
    <ix-icon name="success"></ix-icon>
  </ix-tab-item>
  <ix-tab-item tab-key="tree" counter="12">
    <ix-icon name="tree"></ix-icon>
  </ix-tab-item>
  <ix-tab-item tab-key="maintenance">
    <ix-icon name="maintenance"></ix-icon>
  </ix-tab-item>
  <ix-tab-item tab-key="sound" disabled counter="4">
    <ix-icon name="sound-loud"></ix-icon>
  </ix-tab-item>
`;

const overflowTabs = () => html`
  <ix-tab-item tab-key="overview" label="Overview"></ix-tab-item>
  <ix-tab-item tab-key="analytics" label="Analytics"></ix-tab-item>
  <ix-tab-item tab-key="events" label="Events"></ix-tab-item>
  <ix-tab-item tab-key="automation" label="Automation"></ix-tab-item>
  <ix-tab-item tab-key="datasources" label="Data Sources"></ix-tab-item>
  <ix-tab-item tab-key="notifications" label="Notifications"></ix-tab-item>
  <ix-tab-item tab-key="history" label="History"></ix-tab-item>
  <ix-tab-item tab-key="settings" label="Settings"></ix-tab-item>
`;

const meta = {
  title: 'Example/Tabs',
  tags: [],
  render: ({ small, rounded, activeTabKey, layout, placement }) => html`
    <ix-tabs
      ?small=${small}
      ?rounded=${rounded}
      active-tab-key=${activeTabKey}
      layout=${layout}
      placement=${placement}
      @tabChange=${action('tabChange')}
    >
      ${rounded ? iconTabs() : baseTabs()}
    </ix-tabs>
  `,
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-tabs'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    activeTabKey: 'overview',
    layout: 'auto',
    placement: 'bottom',
    rounded: false,
    small: false,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    small: true,
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    activeTabKey: 'success',
    rounded: true,
  },
};

export const Stretched: Story = {
  args: {
    ...Default.args,
    layout: 'stretched',
  },
};

export const TopPlacement: Story = {
  args: {
    ...Default.args,
    placement: 'top',
  },
};

export const DisabledTabActive: Story = {
  args: {
    ...Default.args,
    activeTabKey: 'settings',
  },
};

export const Overflow: Story = {
  args: {
    ...Default.args,
  },
  render: ({ small, rounded, activeTabKey, layout, placement }) => html`
    <div style="width: 340px;">
      <ix-tabs
        ?small=${small}
        ?rounded=${rounded}
        active-tab-key=${activeTabKey}
        layout=${layout}
        placement=${placement}
        @tabChange=${action('tabChange')}
      >
        ${overflowTabs()}
      </ix-tabs>
    </div>
  `,
};
