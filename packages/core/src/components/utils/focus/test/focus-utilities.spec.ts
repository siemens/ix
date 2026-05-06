/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  collectFocusableElementsInOrder,
  getDeepActiveElement,
} from '../focus-utilities';

const originalActiveElementDescriptor = Object.getOwnPropertyDescriptor(
  Document.prototype,
  'activeElement'
);

describe('focus-utilities deep focus collection', () => {
  afterEach(() => {
    if (originalActiveElementDescriptor) {
      Object.defineProperty(
        Document.prototype,
        'activeElement',
        originalActiveElementDescriptor
      );
    }

    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('collects focusables in DOM order across shadow roots and slotted content', () => {
    const host = document.createElement('div');
    const hostShadowRoot = host.attachShadow({ mode: 'open' });

    const shadowButton = document.createElement('button');
    shadowButton.textContent = 'Shadow button';

    const nestedHost = document.createElement('div');
    const nestedShadowRoot = nestedHost.attachShadow({ mode: 'open' });
    const nestedInput = document.createElement('input');
    nestedInput.type = 'text';
    nestedShadowRoot.appendChild(nestedInput);

    const slot = document.createElement('slot');

    hostShadowRoot.appendChild(shadowButton);
    hostShadowRoot.appendChild(nestedHost);
    hostShadowRoot.appendChild(slot);

    const slottedInput = document.createElement('input');
    slottedInput.type = 'text';

    vi.spyOn(slot, 'assignedElements').mockReturnValue([slottedInput]);

    const collected = collectFocusableElementsInOrder(host);

    expect(collected).toEqual([shadowButton, nestedInput, slottedInput]);
  });

  it('filters hidden and disabled elements during deep traversal', () => {
    const host = document.createElement('div');
    const hostShadowRoot = host.attachShadow({ mode: 'open' });

    const hiddenInput = document.createElement('input');
    hiddenInput.hidden = true;

    const disabledButton = document.createElement('button');
    disabledButton.disabled = true;

    const enabledButton = document.createElement('button');

    hostShadowRoot.appendChild(hiddenInput);
    hostShadowRoot.appendChild(disabledButton);
    hostShadowRoot.appendChild(enabledButton);

    const collected = collectFocusableElementsInOrder(host);

    expect(collected).toEqual([enabledButton]);
  });

  it('returns deepest active element by piercing nested shadow roots', () => {
    const outerHost = document.createElement('div');
    const outerShadowRoot = outerHost.attachShadow({ mode: 'open' });

    const innerHost = document.createElement('div');
    const innerShadowRoot = innerHost.attachShadow({ mode: 'open' });

    const deepInput = document.createElement('input');
    innerShadowRoot.appendChild(deepInput);
    outerShadowRoot.appendChild(innerHost);

    Object.defineProperty(Document.prototype, 'activeElement', {
      configurable: true,
      get: () => outerHost,
    });

    Object.defineProperty(outerShadowRoot, 'activeElement', {
      configurable: true,
      get: () => innerHost,
    });

    Object.defineProperty(innerShadowRoot, 'activeElement', {
      configurable: true,
      get: () => deepInput,
    });

    expect(getDeepActiveElement()).toBe(deepInput);
  });
});
