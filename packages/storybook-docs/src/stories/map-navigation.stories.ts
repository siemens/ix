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

@customElement('story-map-navigation')
export class ExampleMapNavigation extends LitElement {
  @property() args: Partial<ArgTypes<Element>> = {};
  @property() overlay = false;

  private attachDropdown() {
    const staticContent = this.shadowRoot
      ?.querySelector('ix-map-navigation')
      ?.shadowRoot?.querySelector('.map-nav-sidebar-static-content');

    if (staticContent) {
      const hasDropdown = staticContent.querySelector('ix-dropdown');

      if (!hasDropdown) {
        const dropdown = document.createElement('ix-dropdown');
        dropdown.setAttribute('trigger', 'triggerId');
        const dropdownItem = document.createElement('ix-dropdown-item');
        dropdownItem.setAttribute('label', 'Action');
        dropdown.appendChild(dropdownItem);
        staticContent.appendChild(dropdown);
      }

      const triggerButton = staticContent.querySelector('.btn-icon-32');

      if (triggerButton) {
        triggerButton.setAttribute('id', 'triggerId');
      }
    }
  }

  protected firstUpdated() {
    requestAnimationFrame(() => {
      this.attachDropdown();
    });
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    this.attachDropdown();
  }

  protected render() {
    return html`
      <ix-map-navigation
        application-name=${this.args.applicationName}
        hide-context-menu=${this.args.hideContextMenu}
        navigation-title=${this.args.navigationTitle}
        @contextMenuClick=${this.attachDropdown}
      >
        <ix-menu>
          <ix-menu-item>Item 1</ix-menu-item>
          <ix-menu-item>Item 2</ix-menu-item>
          <ix-menu-item>Item 3</ix-menu-item>
        </ix-menu>
        <ix-icon slot="logo" name=${this.args.icon}></ix-icon>
        <ix-content
          slot="sidebar-content"
          style="width: 100%; box-sizing: border-box"
          >${this.args.sidebarContentSlot}
        </ix-content>

        <ix-content>
          ${this.args.defaultSlot}
          <br />
          <br />
          <ix-button @click=${() => (this.overlay = !this.overlay)}
            >Open overlay</ix-button
          >
        </ix-content>

        ${this.overlay
          ? html`
              <ix-map-navigation-overlay
                name=${this.args.overlayName}
                icon=${this.args.overlayIcon}
                @closeClick=${() => {
                  this.overlay = false;
                }}
                slot="overlay"
              >
                <ix-content> ${this.args.overlayDefaultSlot} </ix-content>
              </ix-map-navigation-overlay>
            `
          : ''}
      </ix-map-navigation>
    `;
  }
}

type Element = Components.IxMapNavigation & {
  icon: string;
  defaultSlot: string;
  sidebarContentSlot: string;
  overlayIcon: string;
  overlayName: string;
  overlayDefaultSlot: string;
  showExampleOverlay: boolean;
};

const meta = {
  title: 'Example/Map-Navigation',
  render: (args) => {
    return html`<story-map-navigation
      .args=${args}
      .overlay=${args.showExampleOverlay}
    ></story-map-navigation>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-map-navigation', {
    icon: icon('application icon', false),
    defaultSlot: {
      control: { type: 'text' },
    },
    sidebarContentSlot: {
      control: { type: 'text' },
    },
    overlayIcon: icon('overlay icon', false),
    overlayName: {
      control: { type: 'text' },
    },
    overlayDefaultSlot: {
      control: { type: 'text' },
    },
    showExampleOverlay: {
      control: {
        type: 'boolean',
      },
    },
  }),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    applicationName: 'Application Name',
    hideContextMenu: false,
    navigationTitle: 'Navigation Title',
    icon: 'barchart',
    defaultSlot: 'Main Content',
    sidebarContentSlot: 'Sidebar Content',
    overlayName: 'Custom Overlay',
    overlayIcon: 'bulb',
    overlayDefaultSlot: 'Overlay Content',
    showExampleOverlay: true,
  },
};
