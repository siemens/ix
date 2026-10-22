/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatWelcome;

const suggestions = [
  'Summarize the open alarms',
  'Which assets need maintenance first?',
  'Draft a status update for the plant manager',
];

function renderWelcome(args: Partial<Element>) {
  return (
    <ix-chat style={{ height: '30rem' }}>
      <ix-chat-welcome slot="welcome" {...args}>
        <p>
          Ask about asset status, alarms or maintenance plans, or start with one
          of the suggestions below.
        </p>
        {suggestions.map((suggestion) => (
          <ix-chat-prompt-suggestion
            slot="suggestions"
            onSuggestionSelect={(event: CustomEvent<string>) =>
              action('suggestionSelect')(event.detail)
            }
          >
            {suggestion}
          </ix-chat-prompt-suggestion>
        ))}
      </ix-chat-welcome>
      <ix-chat-input slot="prompt"></ix-chat-input>
    </ix-chat>
  );
}

const meta = {
  title: 'Example/Chat Welcome',
  tags: [],
  args: {
    heading: 'How can I help you today?',
  },
  render: stencil((args) => renderWelcome(args)),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat-welcome'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
