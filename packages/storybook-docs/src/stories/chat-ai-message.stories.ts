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
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatAiMessage;

function appendMessageContent(message: HTMLIxChatAiMessageElement) {
  const title = document.createElement('h3');
  title.textContent = 'Text block example';

  const content = document.createElement('p');
  content.textContent =
    'Effective asset performance management improves uptime, reduces maintenance costs, and ensures long-term equipment health.';

  const summary = document.createElement('p');
  summary.textContent = 'Summary';

  message.append(title, content, summary);
}

function createAction(label: string, icon: string) {
  const action = document.createElement('ix-icon-button');
  action.slot = 'actions';
  action.icon = icon;
  action.size = '16';
  action.variant = 'subtle-tertiary';
  action.setAttribute('aria-label', label);
  return action;
}

function createSources() {
  const sources = document.createElement('ix-pill');
  sources.slot = 'sources';
  sources.icon = iconGlobe;
  sources.outline = true;
  sources.variant = 'neutral';
  sources.textContent = 'Sources';
  sources.setAttribute('aria-label', 'Show sources');
  return sources;
}

function renderChatAiMessage(args: Partial<Element>) {
  const container = genericRender('ix-chat-ai-message', args);
  const message = container.querySelector(
    'ix-chat-ai-message'
  ) as HTMLIxChatAiMessageElement;

  appendMessageContent(message);

  return container;
}

const meta = {
  title: 'Example/Chat AI Message',
  tags: [],
  render: (args) => renderChatAiMessage(args),
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
  render: (args) => {
    const container = renderChatAiMessage(args);
    const message = container.querySelector(
      'ix-chat-ai-message'
    ) as HTMLIxChatAiMessageElement;

    message.append(
      createAction('Copy message', iconCopy),
      createAction('Helpful response', iconThumbUp),
      createAction('Not helpful response', iconThumbDown),
      createAction('Regenerate response', iconRefresh)
    );

    return container;
  },
};

export const WithActionsAndSources: Story = {
  render: (args) => {
    const container = renderChatAiMessage(args);
    const message = container.querySelector(
      'ix-chat-ai-message'
    ) as HTMLIxChatAiMessageElement;

    message.append(
      createAction('Copy message', iconCopy),
      createAction('Helpful response', iconThumbUp),
      createAction('Not helpful response', iconThumbDown),
      createAction('Regenerate response', iconRefresh),
      createSources()
    );

    return container;
  },
};
