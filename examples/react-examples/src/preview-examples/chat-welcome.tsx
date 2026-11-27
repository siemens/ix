/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxChat,
  IxChatInput,
  IxChatPromptSuggestion,
  IxChatUserMessage,
  IxChatWelcome,
} from '@siemens/ix-react';
import { useState } from 'react';

const suggestions = [
  'Summarize the open alarms',
  'Which assets need maintenance first?',
  'Draft a status update for the plant manager',
];

export default () => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <IxChat className="chat-example__chat" style={{ height: '30rem' }}>
      <IxChatWelcome slot="welcome" heading="How can I help you today?">
        <p>
          Ask about asset status, alarms or maintenance plans, or start with one
          of the suggestions below.
        </p>
        {suggestions.map((suggestion) => (
          <IxChatPromptSuggestion
            key={suggestion}
            slot="suggestions"
            onSuggestionSelect={(event) =>
              setMessages((current) => [...current, event.detail])
            }
          >
            {suggestion}
          </IxChatPromptSuggestion>
        ))}
      </IxChatWelcome>
      {messages.map((message, index) => (
        <IxChatUserMessage key={index} message={message}></IxChatUserMessage>
      ))}
      <IxChatInput slot="prompt"></IxChatInput>
    </IxChat>
  );
};
