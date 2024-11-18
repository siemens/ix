/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { showModal } from '@siemens/ix/components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import { icon } from './utils/arg-types';

type Element = any;

const meta = {
  title: 'Example/Modal',
  tags: [],
  render: (args) => {
    return html`
      <!-- class="visible" is only needed during storybook development  -->
      <ix-modal class="visible">
        <ix-modal-header icon=${args.icon}>Modal Header</ix-modal-header>
        <ix-modal-content>Content</ix-modal-content>
        <ix-modal-footer>
          <ix-button>Okay</ix-button>
          <ix-button>Close</ix-button>
        </ix-modal-footer>
      </ix-modal>
    `;
  },
  argTypes: {
    icon: icon('Header icon', true),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

const refs = new Map<string, HTMLElement>();
export const ShowFunction: Story = {
  beforeEach: (ctx) => {
    return () => {
      if (refs.has(ctx.id)) {
        refs.get(ctx.id)?.remove();
        refs.delete(ctx.id);
      }
    };
  },
  render: (args, ctx) => {
    const show = () => {
      const isMounted = refs.has(ctx.id);
      const mount = refs.get(ctx.id) ?? document.createElement('ix-modal');
      render(
        html`
          <ix-modal-header icon=${args.icon}>Modal Header</ix-modal-header>
          <ix-modal-content>Content</ix-modal-content>
          <ix-modal-footer>
            <ix-button>Okay</ix-button>
            <ix-button>Close</ix-button>
          </ix-modal-footer>
        `,
        mount
      );
      if (!isMounted) {
        showModal({ content: mount }).then((p) => {
          p.onClose.once(() => refs.delete(ctx.id));
          p.onDismiss.once(() => refs.delete(ctx.id));
        });
        refs.set(ctx.id, mount);
      }
    };
    // setTimeout(show, 250);
    return html`<ix-button @click=${show}>Show Modal</ix-button>`;
  },
};
