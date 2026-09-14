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
import illustration from './introduction.png';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxInfoPage;

const meta = {
  title: 'Example/Info Page',
  tags: [],
  render: (args) => genericRender('ix-info-page', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-info-page', {
    iconColor: {
      control: { type: 'text' },
    },
  }),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    iconColor: 'color-warning-text',
    titleText: 'Report could not be generated',
    copyText: 'An error occurred while generating the report.',
    instructions: 'Contact your administrator for more information.',
  },
};

export const WithIllustration: Story = {
  argTypes: {
    icon: { table: { disable: true } },
    iconColor: { table: { disable: true } },
  },
  args: {
    titleText: 'Explore Industrial Experience',
    copyText: 'Build consistent industrial applications with IX components.',
    instructions: 'Choose a component to get started.',
  },
  render: (args) =>
    genericRender('ix-info-page', args, [], (element) => {
      element.style.setProperty('--ix-info-page-image-width', '616.18px');
      element.style.setProperty('--ix-info-page-image-height', '196px');

      const image = document.createElement('img');
      image.slot = 'image';
      image.src = illustration;
      image.alt = 'Industrial Experience interface components';
      element.appendChild(image);
      return element;
    }),
};

export const WithAction: Story = {
  args: {
    iconColor: 'color-warning-text',
    titleText: 'Invitation received',
    copyText: 'You were invited to join Sample Co.',
    instructions: 'Accept the invitation to continue.',
  },
  render: (args) =>
    genericRender('ix-info-page', args, [], (element) => {
      const button = document.createElement('ix-button');
      button.slot = 'actions';
      button.textContent = 'Accept invitation';
      element.appendChild(button);
      return element;
    }),
};
