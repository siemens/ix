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
  <ix-tab-item>Overview</ix-tab-item>
  <ix-tab-item>Analytics</ix-tab-item>
  <ix-tab-item>Events</ix-tab-item>
  <ix-tab-item disabled>Settings</ix-tab-item>
`;

const iconTabs = () => html`
  <ix-tab-item>
    <ix-icon name="success"></ix-icon>
  </ix-tab-item>
  <ix-tab-item counter="12">
    <ix-icon name="tree"></ix-icon>
  </ix-tab-item>
  <ix-tab-item>
    <ix-icon name="maintenance"></ix-icon>
  </ix-tab-item>
  <ix-tab-item disabled counter="4">
    <ix-icon name="sound-loud"></ix-icon>
  </ix-tab-item>
`;

const overflowTabs = () => html`
  <ix-tab-item>Overview</ix-tab-item>
  <ix-tab-item>Analytics</ix-tab-item>
  <ix-tab-item>Events</ix-tab-item>
  <ix-tab-item>Automation</ix-tab-item>
  <ix-tab-item>Data Sources</ix-tab-item>
  <ix-tab-item>Notifications</ix-tab-item>
  <ix-tab-item>History</ix-tab-item>
  <ix-tab-item>Settings</ix-tab-item>
`;

const meta = {
  title: 'Example/Tabs',
  tags: [],
  render: ({ small, rounded, selected, layout, placement }) => html`
    <ix-tabs
      ?small=${small}
      ?rounded=${rounded}
      .selected=${selected}
      layout=${layout}
      placement=${placement}
      @selectedChange=${action('selectedChange')}
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
    selected: 0,
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

export const DisabledSelectedFallback: Story = {
  args: {
    ...Default.args,
    selected: 3,
  },
};

export const Overflow: Story = {
  args: {
    ...Default.args,
  },
  render: ({ small, rounded, selected, layout, placement }) => html`
    <div style="width: 340px;">
      <ix-tabs
        ?small=${small}
        ?rounded=${rounded}
        .selected=${selected}
        layout=${layout}
        placement=${placement}
        @selectedChange=${action('selectedChange')}
      >
        ${overflowTabs()}
      </ix-tabs>
    </div>
  `,
};
