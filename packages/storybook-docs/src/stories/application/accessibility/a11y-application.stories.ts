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

const renderApplication = (
  args: Partial<Element> = {},
  withFooter = false
) => html`
  <ix-application
    ?disable-skip-links=${args.disableSkipLinks}
    i18n-skip-to-main=${ifDefined(args.i18nSkipToMain)}
    i18n-skip-to-footer=${ifDefined(args.i18nSkipToFooter)}
    skip-link-main-target-id=${ifDefined(args.skipLinkMainTargetId)}
  >
    <ix-application-header
      name="Skip link accessibility"
    ></ix-application-header>
    <ix-menu>
      <ix-menu-item>Home</ix-menu-item>
    </ix-menu>
    <h1 id="application-story-content" tabindex="-1">Application content</h1>
    <p>The skip links bypass repeated application-shell content.</p>
    ${withFooter
      ? html`<button slot="bottom">Application footer action</button>`
      : ''}
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
 * The default Main skip link targeting its internal main region.
 */
export const DefaultSkipLink: Story = {};

/**
 * Main and conditional Footer skip links.
 */
export const MainAndFooterSkipLinks: Story = {
  render: (args) => renderApplication(args, true),
};

/**
 * Main skip link targeting a light-DOM descendant.
 */
export const CustomSkipLinkTarget: Story = {
  args: {
    skipLinkMainTargetId: 'application-story-content',
  },
};

/**
 * Without the built-in skip links. An equivalent bypass link is
 * provided outside the component.
 */
export const DisabledSkipLinks: Story = {
  render: () => html`
    <a href="#application-story-content">Skip to application content</a>
    ${renderApplication({ disableSkipLinks: true })}
  `,
};

/**
 * Localized Main and Footer skip-link text.
 */
export const LocalizedSkipLinks: Story = {
  args: {
    i18nSkipToMain: 'Zum Hauptinhalt springen',
    i18nSkipToFooter: 'Zur Fußzeile springen',
  },
  render: (args) => renderApplication(args, true),
};
