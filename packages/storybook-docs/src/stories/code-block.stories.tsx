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
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxCodeBlock;

const sampleCode = `import { Component, h } from '@stencil/core';

@Component({ tag: 'my-greeting', shadow: true })
export class Greeting {
  // Renders a static greeting
  render() {
    const count = 3;
    return <p>Hello iX, {count} times!</p>;
  }
}`;

const longLineCode = `const columns = ['timestamp', 'deviceId', 'temperature', 'pressure', 'vibration', 'status', 'operator', 'location', 'firmwareVersion'];
const rows = await fetch('https://example.com/api/v1/plants/plant-42/lines/line-7/machines/machine-13/telemetry?from=2026-01-01&to=2026-01-31');`;

const tokenPattern =
  /(\/\/.*$)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|\b(import|from|export|class|const|let|return|await|new|if|else)\b|\b(\d+(?:\.\d+)?)\b/gm;

const tokenColors = [
  'var(--si-sys-color-text-secondary)',
  'var(--si-sys-color-code-6)',
  'var(--si-sys-color-code-7)',
  'var(--si-sys-color-code-4)',
];

/**
 * Minimal demo highlighter for comments, strings, keywords and numbers.
 * Real applications plug in a library such as highlight.js or Shiki.
 */
function demoHighlight(code: string): Node {
  const fragment = document.createDocumentFragment();
  let lastIndex = 0;

  for (const match of code.matchAll(tokenPattern)) {
    fragment.append(code.slice(lastIndex, match.index));
    const group = match.slice(1).findIndex((value) => value !== undefined);
    const token = document.createElement('span');
    token.style.color = tokenColors[group];
    token.textContent = match[0];
    fragment.append(token);
    lastIndex = match.index + match[0].length;
  }

  fragment.append(code.slice(lastIndex));
  return fragment;
}

const meta = {
  title: 'Example/Code Block',
  tags: [],
  render: stencil((args) => <ix-code-block {...args}></ix-code-block>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-code-block',
    {},
    true,
    ['highlight']
  ),
  args: {
    code: sampleCode,
    language: 'tsx',
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};

export const WithFilename: Story = {
  args: {
    filename: 'greeting.tsx',
  },
};

export const LongLines: Story = {
  args: {
    code: longLineCode,
    language: 'typescript',
    filename: 'telemetry.ts',
  },
};

export const Localized: Story = {
  args: {
    i18nCopy: 'Code kopieren',
    i18nCopied: 'Kopiert',
  },
};

export const CustomHighlight: Story = {
  render: stencil((args) => (
    <ix-code-block {...args} highlight={demoHighlight}></ix-code-block>
  )),
  args: {
    filename: 'greeting.tsx',
  },
};
