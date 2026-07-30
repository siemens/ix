/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconCopy,
  iconGlobe,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';
import type { Components } from '@siemens/ix/components';
import { h, type VNode } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatAiMessage;

function createMessageContent() {
  return [
    <h3>Text block example</h3>,
    <p>
      Effective asset performance management improves uptime, reduces
      maintenance costs, and ensures long-term equipment health.
    </p>,
    <p>Summary</p>,
  ];
}

function createAction(label: string, icon: string) {
  return (
    <ix-icon-button
      aria-label={label}
      icon={icon}
      size="16"
      slot="actions"
      variant="subtle-tertiary"
    ></ix-icon-button>
  );
}

function createSources() {
  return (
    <ix-chip
      aria-label="Show sources"
      icon={iconGlobe}
      outline
      slot="sources"
      variant="neutral"
    >
      Sources
    </ix-chip>
  );
}

function renderChatAiMessage(args: Partial<Element>, children: VNode[] = []) {
  return (
    <ix-chat-ai-message {...args}>
      {createMessageContent()}
      {children}
    </ix-chat-ai-message>
  );
}

const meta = {
  title: 'Example/Chat AI Message',
  tags: [],
  render: stencil((args) => renderChatAiMessage(args)),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat-ai-message'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=12471-120647&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};

export const WithActions: Story = {
  render: stencil((args) =>
    renderChatAiMessage(args, [
      createAction('Copy message', iconCopy),
      createAction('Helpful response', iconThumbUp),
      createAction('Not helpful response', iconThumbDown),
      createAction('Regenerate response', iconRefresh),
    ])
  ),
};

export const WithActionsAndSources: Story = {
  render: stencil((args) =>
    renderChatAiMessage(args, [
      createAction('Copy message', iconCopy),
      createAction('Helpful response', iconThumbUp),
      createAction('Not helpful response', iconThumbDown),
      createAction('Regenerate response', iconRefresh),
      createSources(),
    ])
  ),
};
