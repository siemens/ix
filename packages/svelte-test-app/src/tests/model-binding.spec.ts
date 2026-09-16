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
import InputComponent from '../testability-examples/input.svelte';

/**
 * The native `<input>` that `ix-input` renders, wherever it puts it.
 */
async function nativeInput(host: Element): Promise<HTMLInputElement> {
  return vi.waitFor(() => {
    const input =
      host.querySelector('input') ?? host.shadowRoot?.querySelector('input');
    expect(input).toBeInstanceOf(HTMLInputElement);
    return input as HTMLInputElement;
  });
}

function clickText(text: string): void {
  // A plain DOM click rather than a locator click: the test app is rendered
  // without the iX theme, so the buttons have no layout for Playwright's
  // actionability checks to pass.
  (page.getByText(text).element() as HTMLElement).click();
}

describe('IxInput model binding', () => {
  it('round-trips `bind:value` through the camelCase `valueChange` event', async () => {
    render(InputComponent);

    await customElements.whenDefined('ix-input');
    const host = document.querySelector('ix-input')!;
    const input = await nativeInput(host);

    // Element -> component. `ix-input` announces this as `valueChange`; if the
    // runtime lowercased Stencil event names the listener would never fire and
    // the bound value would stay empty.
    input.value = 'typed by the user';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    await expect
      .element(page.getByTestId('input-value'))
      .toHaveTextContent('Value: typed by the user');

    // Component -> element.
    clickText('Set value from outside');

    await expect
      .element(page.getByTestId('input-value'))
      .toHaveTextContent('Value: set from outside');

    await vi.waitFor(() => {
      expect(input.value).toBe('set from outside');
    });
  });
});
