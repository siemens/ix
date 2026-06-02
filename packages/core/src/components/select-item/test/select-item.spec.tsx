/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it, vi } from 'vitest';

describe('select-item', () => {
  it('should throw exception if value is missing', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { root, waitForChanges } = await render(
      <ix-select-item value="test"></ix-select-item>
    );

    root.removeAttribute('value');
    await waitForChanges();

    expect(warnSpy).toHaveBeenCalledWith(
      'ix-select-item must have a `value` property'
    );
  });

  it('should pass through click event from dropdown item', async () => {
    const { root, spyOnEvent, waitForChanges } = await render(
      <ix-select-item value="test" label="Test"></ix-select-item>
    );

    const eventSpy = spyOnEvent('itemClick');
    const item = root as HTMLIxSelectItemElement;
    const dropdownItem = item.shadowRoot!.querySelector(
      'ix-dropdown-item'
    ) as HTMLElement;
    dropdownItem.click();

    await waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });
});
