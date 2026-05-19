/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
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

  promptInput.addEventListener('actionClick', (event) => {
    action('actionClick')((event as CustomEvent<'start' | 'end'>).detail);
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
