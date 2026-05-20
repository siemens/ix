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
  queryElements,
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

  describe('queryElements', () => {
    it('queries light DOM without includeShadowDom flag', () => {
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });

      const shadowButton = document.createElement('button');
      shadowButton.textContent = 'Shadow';
      shadowRoot.appendChild(shadowButton);

      const lightButton = document.createElement('button');
      lightButton.textContent = 'Light';
      host.appendChild(lightButton);

      const result = queryElements(host, 'button', false);
      expect(result).toEqual([lightButton]);
      expect(result).not.toContain(shadowButton);
    });

    it('includes shadow DOM when includeShadowDom is true', () => {
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });

      const shadowButton = document.createElement('button');
      shadowButton.textContent = 'Shadow';
      shadowRoot.appendChild(shadowButton);

      const result = queryElements(host, 'button', true);
      expect(result).toContain(shadowButton);
    });

    it('expands slot assignments in DOM order with includeShadowDom', () => {
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });

      const shadowButton = document.createElement('button');
      shadowButton.textContent = 'Shadow Button';

      const slot = document.createElement('slot');
      shadowRoot.appendChild(shadowButton);
      shadowRoot.appendChild(slot);

      const slottedButton = document.createElement('button');
      slottedButton.textContent = 'Slotted';
      host.appendChild(slottedButton);

      vi.spyOn(slot, 'assignedElements').mockReturnValue([slottedButton]);

      const result = queryElements(host, 'button', true);
      expect(result).toEqual([shadowButton, slottedButton]);
    });

    it('maintains order when shadow elements follow slot', () => {
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });

      const slot = document.createElement('slot');
      const shadowButton = document.createElement('button');
      shadowButton.textContent = 'After Slot';

      shadowRoot.appendChild(slot);
      shadowRoot.appendChild(shadowButton);

      const slottedButton = document.createElement('button');
      slottedButton.textContent = 'Slotted';
      host.appendChild(slottedButton);

      vi.spyOn(slot, 'assignedElements').mockReturnValue([slottedButton]);

      const result = queryElements(host, 'button', true);
      // Slotted should be at the position of the slot, before the button after slot
      expect(result).toEqual([slottedButton, shadowButton]);
    });

    it('queries passed ShadowRoot directly regardless of includeShadowDom flag', () => {
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });

      const shadowButton = document.createElement('button');
      shadowRoot.appendChild(shadowButton);

      // When passing ShadowRoot directly, includeShadowDom doesn't matter
      const result1 = queryElements(shadowRoot, 'button', false);
      const result2 = queryElements(shadowRoot, 'button', true);

      expect(result1).toEqual([shadowButton]);
      expect(result2).toEqual([shadowButton]);
    });

    it('returns empty array when no matches found', () => {
      const host = document.createElement('div');
      const result = queryElements(host, 'button', false);
      expect(result).toEqual([]);
    });

    it('returns empty array when passed null', () => {
      const result = queryElements(null, 'button', false);
      expect(result).toEqual([]);
    });
  });
});
