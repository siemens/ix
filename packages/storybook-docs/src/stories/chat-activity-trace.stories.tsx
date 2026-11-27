/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconBulb,
  iconCogwheel,
  iconDocument,
  iconSearch,
} from '@siemens/ix-icons/icons';
import type { Components } from '@siemens/ix/components';
import { h, type VNode } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatActivityTrace;

function createDetailedItem() {
  return (
    <ix-chat-trace-item label="Searched maintenance logs" icon={iconSearch}>
      <ix-chat-trace-item-section heading="Asset">
        <ix-pill variant="neutral" outline>
          Compressor C-12
        </ix-pill>
      </ix-chat-trace-item-section>
      <ix-chat-trace-item-section heading="Output" collapsible>
        <p>Found 3 vibration alarms in the last 7 days.</p>
      </ix-chat-trace-item-section>
    </ix-chat-trace-item>
  );
}

function renderInMessage(
  args: Partial<Element>,
  items: VNode[],
  content?: VNode
) {
  return (
    <ix-chat-ai-message>
      <ix-chat-activity-trace slot="trace" {...args}>
        {args.summary ? <span slot="summary-meta">4 steps, 12 s</span> : null}
        {items}
      </ix-chat-activity-trace>
      {content}
    </ix-chat-ai-message>
  );
}

const answer = (
  <p>
    The compressor vibration is within the expected range. Schedule the next
    inspection during the Friday service window.
  </p>
);

const meta = {
  title: 'Example/Chat Activity Trace',
  tags: [],
  args: {
    summary: 'Analyzed compressor data',
    expanded: true,
  },
  render: stencil((args) =>
    renderInMessage(
      args,
      [
        createDetailedItem(),
        <ix-chat-trace-item
          label="Read vibration-trend.csv"
          icon={iconDocument}
          state="running"
        ></ix-chat-trace-item>,
        <ix-chat-trace-item
          label="Read service-schedule.xlsx"
          icon={iconDocument}
          state="failed"
        ></ix-chat-trace-item>,
        <ix-chat-trace-item
          label="Stopped checking spare parts"
          icon={iconCogwheel}
          state="warning"
        ></ix-chat-trace-item>,
      ],
      answer
    )
  ),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat-activity-trace'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};

/**
 * While the AI works and nothing specific is running, show one running Trace item
 * with a generic label instead of a loading indicator.
 */
export const Waiting: Story = {
  args: { summary: undefined, expanded: false },
  render: stencil((args) =>
    renderInMessage(args, [
      <ix-chat-trace-item
        label="Thinking…"
        icon={iconBulb}
        state="running"
      ></ix-chat-trace-item>,
    ])
  ),
};

/**
 * Without `summary` the Trace items are shown flat while the response is running.
 */
export const Running: Story = {
  args: { summary: undefined, expanded: false },
  render: stencil((args) =>
    renderInMessage(args, [
      createDetailedItem(),
      <ix-chat-trace-item
        label="Reading vibration-trend.csv"
        icon={iconDocument}
        state="running"
      ></ix-chat-trace-item>,
    ])
  ),
};

/**
 * When the response is complete, set `summary` and collapse the Activity trace.
 */
export const Completed: Story = {
  args: { summary: 'Analyzed compressor data', expanded: false },
  render: stencil((args) =>
    renderInMessage(
      args,
      [
        createDetailedItem(),
        <ix-chat-trace-item
          label="Read vibration-trend.csv"
          icon={iconDocument}
        ></ix-chat-trace-item>,
      ],
      answer
    )
  ),
};
