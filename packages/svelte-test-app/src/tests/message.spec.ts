/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { page } from '@vitest/browser/context';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import MessageComponent from '../testability-examples/message.svelte';

/**
 * The modal is attached outside the render container, so it is looked up on
 * the document rather than through the render result.
 */
function modal(): Element | null {
  return document.querySelector('ix-modal');
}

function clickText(text: string): void {
  // A plain DOM click rather than a locator click: the test app is rendered
  // without the iX theme, so the buttons have no layout for Playwright's
  // actionability checks to pass.
  (page.getByText(text).element() as HTMLElement).click();
}

/**
 * The Vue equivalent of this test is framed as a camelCase-event regression
 * test. It is not one here: `showMessage` builds the whole modal out of core
 * elements, so no generated proxy sits in the close path. Verified by
 * lowercasing event names in the runtime -- this test still passes.
 * `model-binding.spec.ts` is the end-to-end camelCase test.
 *
 * What this does cover is the Svelte framework delegate: mounting the message
 * through it, tearing it down again, and getting the action payload back.
 */
describe('Message Events', () => {
  it('should remove message modal from DOM after close', async () => {
    render(MessageComponent);

    clickText("Show 'success' message");

    await customElements.whenDefined('ix-modal');
    await vi.waitFor(() => {
      expect(modal()).not.toBeNull();
    });

    await vi.waitFor(() => {
      expect(page.getByText('Cancel').query()).not.toBeNull();
    });
    clickText('Cancel');

    await vi.waitFor(() => {
      expect(modal()).toBeNull();
    });

    await expect
      .element(page.getByTestId('message-payload'))
      .toHaveTextContent('payload:cancel');
  });
});
