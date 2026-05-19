/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import { iconTxtDocument } from '@siemens/ix-icons/icons';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxPromptInput;

function renderPromptInput(args: Partial<Element>) {
  const container = genericRender('ix-prompt-input', args);
  const promptInput = container.querySelector(
    'ix-prompt-input'
  ) as HTMLIxPromptInputElement;

  promptInput.addEventListener('promptSubmit', (event) => {
    action('promptSubmit')((event as CustomEvent<string>).detail);
  });

  return container;
}

const meta = {
  title: 'Example/Prompt Input',
  tags: [],
  render: (args) => renderPromptInput(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-prompt-input'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=6316-45495&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: 'Summarize the current alarm list',
  },
};

export const SoftCharacterLimit: Story = {
  args: {
    characterLimit: 30,
    characterLimitMode: 'soft',
    value: 'Summarize all critical alarms',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11693-45416&m=dev',
    },
  },
};

export const HardCharacterLimit: Story = {
  args: {
    characterLimit: 30,
    value: 'Summarize all critical alarms now',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11693-45416&m=dev',
    },
  },
};

export const WithAttachments: Story = {
  render: (args) => {
    const container = renderPromptInput(args);
    const promptInput = container.querySelector(
      'ix-prompt-input'
    ) as HTMLIxPromptInputElement;

    for (let index = 1; index <= 9; index++) {
      const attachment = document.createElement('ix-chat-prompt-attachment');
      attachment.slot = 'attachments';
      attachment.fileName = `file_${String(index).padStart(2, '0')}.txt`;
      promptInput.append(attachment);
    }

    for (let index = 1; index <= 4; index++) {
      const item = document.createElement('ix-dropdown-item');
      item.slot = 'attachment-overflow';
      item.icon = iconTxtDocument;
      item.label = `meeting_notes_summary_0${index}.txt`;
      promptInput.append(item);
    }

    return container;
  },
  args: {
    attachmentOverflowCount: 4,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev',
    },
  },
};

export const WithScrollableAttachments: Story = {
  render: (args) => {
    const container = renderPromptInput(args);
    const promptInput = container.querySelector(
      'ix-prompt-input'
    ) as HTMLIxPromptInputElement;

    for (let index = 1; index <= 8; index++) {
      const attachment = document.createElement('ix-chat-prompt-attachment');
      attachment.slot = 'attachments';
      attachment.fileName = `file_${String(index).padStart(2, '0')}.txt`;
      promptInput.append(attachment);
    }

    return container;
  },
  args: {
    attachmentLayout: 'scroll',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev',
    },
  },
};

export const CustomActions: Story = {
  render: (args) => {
    const container = renderPromptInput(args);
    const promptInput = container.querySelector(
      'ix-prompt-input'
    ) as HTMLIxPromptInputElement;

    const startAction = document.createElement('ix-icon-button');
    startAction.icon = 'attach';
    startAction.slot = 'start';
    startAction.variant = 'subtle-tertiary';
    startAction.setAttribute('aria-label', 'Attach file');

    const endAction = document.createElement('ix-icon-button');
    endAction.icon = 'microphone';
    endAction.slot = 'end';
    endAction.variant = 'subtle-tertiary';
    endAction.setAttribute('aria-label', 'Record voice input');

    promptInput.append(startAction, endAction);

    return container;
  },
  args: {},
};
