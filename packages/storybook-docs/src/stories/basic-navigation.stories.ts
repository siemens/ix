/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Components } from '@siemens/ix';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { icon } from './utils/arg-types';
import { makeArgTypes } from './utils/generic-render';

@customElement('story-basic-navigation')
export class ExampleBasicNavigation extends LitElement {
  @property() args: Partial<ArgTypes<Element>> = {};
  @property() overlay = false;

  protected render() {
    return html`
      <ix-basic-navigation
        application-name=${this.args.applicationName}
        hide-header=${this.args.hideHeader}
        force-breakpoint=${this.args.forceBreakpoint}
      >
        <ix-icon slot="logo" name=${this.args.icon}></ix-icon>
        <ix-menu>
          <ix-menu-item>Item 1</ix-menu-item>
          <ix-menu-item>Item 2</ix-menu-item>
          <ix-menu-item>Item 3</ix-menu-item>
        </ix-menu>
        <ix-content style="height: fit-content"
          >${this.args.defaultSlot}</ix-content
        >
      </ix-basic-navigation>
    `;
  }
}

type Element = Components.IxBasicNavigation & {
  icon: string;
  defaultSlot: string;
};

const meta = {
  title: 'Example/Basic-Navigation',
  render: (args) => {
    return html`<story-basic-navigation
      .args=${args}
    ></story-basic-navigation>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-basic-navigation',
    {
      icon: icon('application icon', false),
      defaultSlot: {
        control: { type: 'text' },
      },
    },
    true,
    ['breakpoints', 'forceBreakpoint']
  ),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    applicationName: 'Application Name',
    hideHeader: false,
    icon: 'barchart',
    defaultSlot: 'Main Content',
  },
};
