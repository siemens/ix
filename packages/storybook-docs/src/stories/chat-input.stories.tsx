/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconAttach,
  iconMicrophone,
  iconRefresh,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';
import type { Components } from '@siemens/ix/components';
import { h, type VNode } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatInput;

function renderChatInput(args: Partial<Element>, children: VNode[] = []) {
  return (
    <ix-chat-input
      {...args}
      onPromptSubmit={(event: CustomEvent<string>) =>
        action('promptSubmit')(event.detail)
      }
    >
      {children}
    </ix-chat-input>
  );
}

const meta = {
  title: 'Example/Chat Input',
  tags: [],
  render: stencil((args) => renderChatInput(args)),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat-input'),
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

export const WithProcessing: Story = {
  args: {
    state: 'processing',
    value: 'Summarize the current alarm list',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Summarize the current alarm list',
  },
};

export const SoftCharacterLimit: Story = {
  args: {
    characterLimit: 30,
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

function createAttachment(index: number) {
  return (
    <ix-chat-prompt-attachment
      fileName={`file_${String(index).padStart(2, '0')}.txt`}
      slot="attachments"
    ></ix-chat-prompt-attachment>
  );
}

function createAttachmentOverflowItem(index: number) {
  return (
    <ix-dropdown-item
      icon={iconTxtDocument}
      label={`meeting_notes_summary_0${index}.txt`}
      slot="attachment-overflow"
    ></ix-dropdown-item>
  );
}

export const WithAttachments: Story = {
  render: stencil((args) =>
    renderChatInput(args, [
      ...Array.from({ length: 9 }, (_, index) => createAttachment(index + 1)),
      ...Array.from({ length: 4 }, (_, index) =>
        createAttachmentOverflowItem(index + 1)
      ),
    ])
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev',
    },
  },
};

export const WithScrollableAttachments: Story = {
  render: stencil((args) =>
    renderChatInput(
      args,
      Array.from({ length: 8 }, (_, index) => createAttachment(index + 1))
    )
  ),
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

function createFollowUpRefreshButton() {
  return (
    <ix-icon-button
      aria-label="Refresh follow-up prompts"
      icon={iconRefresh}
      slot="follow-up"
      variant="secondary"
    ></ix-icon-button>
  );
}

function createFollowUpPrompt(label: string) {
  return (
    <ix-button slot="follow-up" variant="secondary">
      {label}
    </ix-button>
  );
}

export const WithFollowUpPrompts: Story = {
  render: stencil((args) =>
    renderChatInput(args, [
      createFollowUpRefreshButton(),
      createFollowUpPrompt('What are the risks if this insight is ignored?'),
      createFollowUpPrompt(
        'Show related insights from similar customer events.'
      ),
      createFollowUpPrompt(
        'Summarize this insight in 2 bullet points for presentation.'
      ),
    ])
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=225-51348&m=dev',
    },
  },
};

export const CustomActions: Story = {
  render: stencil((args) =>
    renderChatInput(args, [
      <ix-icon-button
        aria-label="Attach file"
        icon={iconAttach}
        slot="start"
        variant="subtle-tertiary"
      ></ix-icon-button>,
      <ix-icon-button
        aria-label="Record voice input"
        icon={iconMicrophone}
        slot="end"
        variant="subtle-tertiary"
      ></ix-icon-button>,
    ])
  ),
  args: {},
};
