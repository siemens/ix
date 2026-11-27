/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconContextMenu,
  iconCopy,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChat;

function createIconButton(label: string, icon: string, id?: string) {
  return (
    <ix-icon-button
      id={id}
      aria-label={label}
      icon={icon}
      size="24"
      slot="actions"
      variant="subtle-tertiary"
    ></ix-icon-button>
  );
}

function createFollowUpPrompt(text: string) {
  return (
    <ix-chat-prompt-suggestion
      slot="follow-up"
      onSuggestionSelect={(event: CustomEvent<string>) =>
        action('suggestionSelect')(event.detail)
      }
    >
      {text}
    </ix-chat-prompt-suggestion>
  );
}

function renderMessageActions(args: Partial<Element>) {
  return (
    <div>
      <ix-chat {...args} style={{ height: '30rem' }}>
        <ix-chat-user-message message="Which assets need maintenance first?">
          {createIconButton('Copy', iconCopy)}
        </ix-chat-user-message>
        <ix-chat-ai-message>
          <p>
            Compressor C-12 should be serviced first. Its vibration increased
            over the last week, and the next service window is on Friday.
          </p>
          {createIconButton('Copy', iconCopy)}
          {createIconButton('Regenerate', iconRefresh)}
          {createIconButton('Good response', iconThumbUp)}
          {createIconButton('Bad response', iconThumbDown)}
          {createIconButton(
            'More actions',
            iconContextMenu,
            'chat-more-actions-trigger'
          )}
        </ix-chat-ai-message>
        <ix-chat-input slot="prompt">
          {createFollowUpPrompt('Show the vibration trend of C-12')}
          {createFollowUpPrompt('Create a work order for Friday')}
        </ix-chat-input>
      </ix-chat>
      <ix-dropdown trigger="chat-more-actions-trigger">
        <ix-dropdown-item label="Share"></ix-dropdown-item>
        <ix-dropdown-item label="Report"></ix-dropdown-item>
      </ix-dropdown>
    </div>
  );
}

/**
 * Message actions are icon buttons in the `actions` slot of `ix-chat-user-message`
 * and `ix-chat-ai-message`. Put rarely used actions into an `ix-dropdown` opened by
 * an overflow icon button. Follow-up prompts are `ix-chat-prompt-suggestion`s in the
 * `follow-up` slot of `ix-chat-input`.
 */
const meta = {
  title: 'Example/Chat Message Actions',
  tags: [],
  render: stencil((args) => renderMessageActions(args)),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
