/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Example/VisuallyHidden',
  tags: [],
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * `.ix-visually-hidden` keeps text in the accessibility tree while removing it
 * from the visual layout.
 *
 * A link reading "Read more" is unambiguous on screen, where the surrounding
 * heading supplies the context. A screen reader user listing the links on the
 * page hears only "Read more" and has no way to tell them apart. The hidden
 * span restores that context without changing the visual design.
 *
 * Inspect either link in the DevTools Accessibility pane: the first is named
 * "Read more", the second "Read more about safety instructions".
 *
 * Note that iX components already name themselves — `ix-icon-button` and
 * friends expose `ariaLabel*` properties, and an `aria-label` overrides element
 * content. This utility is for your own markup.
 */
export const Default: Story = {
  render: () => html`<div>
    <p>
      Without the utility:
      <a href="#safety-instructions">Read more</a>
    </p>
    <p>
      With the utility:
      <a href="#safety-instructions"
        >Read more<span class="ix-visually-hidden">
          about safety instructions</span
        ></a
      >
    </p>
  </div>`,
};

/**
 * A caption describes a table to screen reader users. When the surrounding page
 * already carries a visible heading, the caption would only duplicate it on
 * screen, so it is hidden.
 *
 * The utility deliberately does not take a caption out of flow — absolute
 * positioning would collapse the table layout.
 */
export const TableCaption: Story = {
  render: () => html`<table class="ix-table">
    <caption class="ix-visually-hidden">
      Sensor readings for line 4
    </caption>
    <thead>
      <tr>
        <th scope="col">Sensor</th>
        <th scope="col">Reading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Inlet pressure</td>
        <td>4.2 bar</td>
      </tr>
      <tr>
        <td>Outlet pressure</td>
        <td>3.8 bar</td>
      </tr>
    </tbody>
  </table>`,
};

/**
 * `.ix-visually-hidden-focusable` stays hidden until it receives focus, which
 * is what makes a "skip to main content" link possible. Place the link as the
 * first focusable element on the page.
 *
 * Click the text below, then press `Tab` to reveal the skip link.
 */
export const Focusable: Story = {
  render: () => html`<div>
    <a class="ix-visually-hidden-focusable" href="#main-content">
      Skip to main content
    </a>
    <p>Click here, then press <kbd>Tab</kbd> to reveal the skip link above.</p>
    <div id="main-content" tabindex="-1">Main content</div>
  </div>`,
};
