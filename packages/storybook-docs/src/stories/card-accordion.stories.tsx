/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxCardAccordion;

const meta = {
  title: 'Example/Card Accordion',
  tags: [],
  render: stencil((args) => (
    <ix-card>
      <ix-card-title>Asset details</ix-card-title>
      <ix-card-accordion {...args}>
        Additional asset information
      </ix-card-accordion>
    </ix-card>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-card-accordion'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
