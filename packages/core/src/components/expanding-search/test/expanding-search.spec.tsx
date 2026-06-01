/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { fireEvent } from '@testing-library/dom';
import { describe, expect, it, vi } from 'vitest';

describe('ix-expanding-search', () => {
  it("emits an event on change and returns 'this.value'", async () => {
    const { root, spyOnEvent, waitForChanges } = await render(
      <ix-expanding-search></ix-expanding-search>
    );
    const expandingSearch = root as HTMLIxExpandingSearchElement;
    const input = expandingSearch.shadowRoot!.querySelector(
      '[data-testid="input"]'
    ) as HTMLInputElement;
    input.focus = vi.fn();

    const callbackSpy = spyOnEvent('valueChange');

    fireEvent.input(input, { target: { value: 'new input' } });
    await waitForChanges();

    expect(callbackSpy).toHaveReceivedEvent();
    expect(callbackSpy.lastEvent?.detail).toEqual(expandingSearch.value);
  });
});
