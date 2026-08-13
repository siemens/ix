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
import { makeArgTypes } from '@utils/generic-render';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type Element = Components.IxApplication;

const renderApplication = (args: Partial<Element> = {}) => html`
  <ix-application
    ?disable-skip-link=${args.disableSkipLink}
    i18n-skip-to-content=${ifDefined(args.i18nSkipToContent)}
    skip-link-target-id=${ifDefined(args.skipLinkTargetId)}
  >
    <ix-application-header
      name="Skip link accessibility"
    ></ix-application-header>
    <ix-menu>
      <ix-menu-item>Home</ix-menu-item>
    </ix-menu>
    <h1 id="application-story-content" tabindex="-1">Application content</h1>
    <p>The skip link bypasses the application navigation.</p>
  </ix-application>
`;

const meta = {
  title: 'Example/Application/Accessibility',
  tags: [],
  render: (args) => renderApplication(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-application', {}),
  parameters: {
    a11y: {
      test: 'error',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

/**
 * The default skip link targeting its internal main region.
 */
export const DefaultSkipLink: Story = {};

/**
 * Skip link targeting a light-DOM descendant.
 */
export const CustomSkipLinkTarget: Story = {
  args: {
    skipLinkTargetId: 'application-story-content',
  },
};

/**
 * Without the built-in skip link. An equivalent bypass link is
 * provided outside the component.
 */
export const DisabledSkipLink: Story = {
  render: () => html`
    <a href="#application-story-content">Skip to application content</a>
    ${renderApplication({ disableSkipLink: true })}
  `,
};

/**
 * Localized skip-link text.
 */
export const LocalizedSkipLink: Story = {
  args: {
    i18nSkipToContent: 'Zum Hauptinhalt springen',
  },
};
