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

type Element = Components.IxApplication;

const meta = {
  title: 'Example/Application',
  tags: [],
  render: stencil((args) => (
    <ix-application {...args} style={{ height: '32rem' }}>
      <ix-application-header
        name="Industrial Experience"
        slot="application-header"
      ></ix-application-header>
      <ix-menu expand={true} slot="menu">
        <ix-menu-item home icon="home" active>
          Home
        </ix-menu-item>
        <ix-menu-item icon="alarm-bell">Alarms</ix-menu-item>
        <ix-menu-category label="Analysis" icon="piechart">
          <ix-menu-item icon="plant">Plants</ix-menu-item>
          <ix-menu-item icon="network-device">Networks</ix-menu-item>
        </ix-menu-category>
        <ix-menu-about></ix-menu-about>
        <ix-menu-settings></ix-menu-settings>
      </ix-menu>
      <ix-content>
        <ix-content-header
          headerTitle="Operations overview"
          slot="header"
        ></ix-content-header>
        <p>Monitor operations and manage your industrial applications.</p>
      </ix-content>
    </ix-application>
  )),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-application'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};
