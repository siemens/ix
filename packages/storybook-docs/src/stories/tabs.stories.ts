/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit/static-html.js';

type Element = Components.IxTabContext;

const meta = {
  title: 'Example/Tabs/Tab Context',
  tags: [],
  render: (args) => html`
    <ix-tab-context value="tab2">
      <ix-tabs>
        <ix-tab-item label="Tab 1" value="tab1">Content for Tab 1</ix-tab-item>
        <ix-tab-item label="Tab 2" value="tab2">Content for Tab 2</ix-tab-item>
        <ix-tab-item label="Tab 3" value="tab3">Content for Tab 3</ix-tab-item>
      </ix-tabs>
      <ix-tab-panel value="tab1">
        <p>This is Tab1 content.</p>
      </ix-tab-panel>
      <ix-tab-panel value="tab2">
        <p>This is Tab2 content.</p>
      </ix-tab-panel>
      <ix-tab-panel value="tab3">
        <p>This is Tab3 content.</p>
      </ix-tab-panel>
    </ix-tab-context>
  `,
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
