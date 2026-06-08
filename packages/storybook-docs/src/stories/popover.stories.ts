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
import { genericRender, makeArgTypes } from './utils/generic-render';

type PopoverHostElement = HTMLElement &
  Pick<Components.IxPopover, 'showPopover' | 'hidePopover'>;

const POPOVER_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E";

const TRIGGER_ID = 'popover-story-trigger';
const DISMISS_BUTTON_ID = 'popover-dismiss';

const storyA11y = {
  a11y: {
    test: 'error' as const,
  },
};

function wirePopoverDismissButtons(popover: PopoverHostElement) {
  const button = (popover as HTMLElement).querySelector(
    `#${DISMISS_BUTTON_ID}`
  );

  button?.addEventListener('click', () => {
    void popover.hidePopover();
  });
}

function popoverStoryContainer(inner: HTMLElement) {
  const wrapper = document.createElement('div');
  wrapper.style.padding = '8rem 4rem';

  const trigger = document.createElement('ix-button');
  trigger.id = TRIGGER_ID;
  trigger.textContent = 'Open';
  wrapper.appendChild(trigger);
  wrapper.appendChild(inner);

  if (inner instanceof HTMLElement && inner.tagName === 'IX-POPOVER') {
    wirePopoverDismissButtons(inner as PopoverHostElement);
  }

  return wrapper;
}

type Element = Components.IxPopover;

const meta = {
  title: 'Example/Popover',
  tags: [],
  render: (args) => {
    const container = genericRender('ix-popover', args, [], (element) => {
      element.setAttribute('trigger', TRIGGER_ID);
      element.innerHTML = `
        <ix-popover-header>Popover title</ix-popover-header>
        <ix-popover-content>Popover body content</ix-popover-content>
        <ix-popover-footer>
          <ix-button id="${DISMISS_BUTTON_ID}" variant="secondary">Cancel</ix-button>
          <ix-button>Save</ix-button>
        </ix-popover-footer>
      `;
      return element;
    });

    const popover = container.querySelector('ix-popover')!;
    return popoverStoryContainer(popover);
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-popover'),
  args: {
    placement: 'bottom',
    hasSpike: true,
    closeOnClickOutside: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=115095-99218',
    },
    ...storyA11y,
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  name: 'Default (interactive)',
};

export const Informational: Story = {
  parameters: storyA11y,
  args: {
    placement: 'bottom',
    hasSpike: false,
    closeOnClickOutside: true,
  },
  render: (args) => {
    const container = genericRender('ix-popover', args, [], (element) => {
      element.setAttribute('trigger', TRIGGER_ID);

      const content = document.createElement('ix-popover-content');
      content.textContent = 'This action cannot be undone.';
      element.appendChild(content);

      return element;
    });

    const popover = container.querySelector('ix-popover')!;
    return popoverStoryContainer(popover);
  },
};

export const With_Image: Story = {
  parameters: storyA11y,
  render: () => {
    const popover = document.createElement('ix-popover');
    popover.setAttribute('trigger', TRIGGER_ID);
    popover.setAttribute('placement', 'bottom');
    popover.setAttribute('has-spike', '');
    popover.setAttribute('close-on-click-outside', '');
    popover.setAttribute('aria-label', "What's new popover");

    popover.innerHTML = `
      <ix-popover-header icon="info" icon-color="color-info">
        Release highlights
        <ix-pill slot="additional-items" variant="info">New</ix-pill>
      </ix-popover-header>
      <ix-popover-image src="${POPOVER_IMAGE_SRC}" alt="Release preview"></ix-popover-image>
      <ix-popover-content>
        Check out the new dashboard and improved performance metrics.
      </ix-popover-content>
      <ix-popover-footer>
        <span slot="start">v4.0.0</span>
        <ix-button id="${DISMISS_BUTTON_ID}" variant="secondary">Dismiss</ix-button>
        <ix-button>Read more</ix-button>
      </ix-popover-footer>
    `;

    return popoverStoryContainer(popover);
  },
};

export const Stepper_Footer: Story = {
  name: 'Stepper footer',
  parameters: storyA11y,
  render: () => {
    const popover = document.createElement('ix-popover');
    popover.setAttribute('trigger', TRIGGER_ID);
    popover.setAttribute('placement', 'bottom');
    popover.setAttribute('has-spike', '');

    popover.innerHTML = `
      <ix-popover-header hide-close>Step 1 of 3</ix-popover-header>
      <ix-popover-content paddingless>
        Click the sidebar to navigate between pages.
      </ix-popover-content>
      <ix-popover-footer alignment="vertical">
        <span slot="start">1 / 3</span>
        <ix-button id="${DISMISS_BUTTON_ID}" variant="secondary">Cancel</ix-button>
        <ix-button>Next</ix-button>
      </ix-popover-footer>
    `;

    return popoverStoryContainer(popover);
  },
};
