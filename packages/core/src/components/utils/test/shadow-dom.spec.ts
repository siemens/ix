/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { afterEach, describe, expect, it } from 'vitest';
import {
  closestPassShadow,
  hasSlottedContent,
  hasSlottedElements,
} from '../shadow-dom';

function createDefaultSlot(...assignedNodes: Node[]) {
  const host = document.createElement('div');
  const shadowRoot = host.attachShadow({ mode: 'open' });
  const slot = document.createElement('slot');

  shadowRoot.appendChild(slot);
  assignedNodes.forEach((node) => host.appendChild(node));

  return slot;
}

describe('shadow-dom slot helpers', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('hasSlottedElements', () => {
    it('returns false when slot is missing', () => {
      expect(hasSlottedElements(null)).toBe(false);
    });

    it('returns false for an empty slot', () => {
      expect(hasSlottedElements(createDefaultSlot())).toBe(false);
    });

    it('returns true for a slotted element', () => {
      const element = document.createElement('span');
      expect(hasSlottedElements(createDefaultSlot(element))).toBe(true);
    });

    it('returns false for plain text in the default slot', () => {
      expect(
        hasSlottedElements(createDefaultSlot(document.createTextNode('Label')))
      ).toBe(false);
    });
  });

  describe('hasSlottedContent', () => {
    it('returns false when slot is missing', () => {
      expect(hasSlottedContent(null)).toBe(false);
      expect(hasSlottedContent(undefined)).toBe(false);
    });

    it('returns false for an empty slot', () => {
      expect(hasSlottedContent(createDefaultSlot())).toBe(false);
    });

    it('returns false for whitespace-only text', () => {
      expect(
        hasSlottedContent(createDefaultSlot(document.createTextNode('   \n')))
      ).toBe(false);
    });

    it('returns true for non-empty text in the default slot', () => {
      expect(
        hasSlottedContent(createDefaultSlot(document.createTextNode('Label')))
      ).toBe(true);
    });

    it('returns true for a slotted element', () => {
      const link = document.createElement('a');
      link.textContent = 'terms';

      expect(hasSlottedContent(createDefaultSlot(link))).toBe(true);
    });

    it('returns true when both text and elements are slotted', () => {
      const link = document.createElement('a');
      link.textContent = 'terms';

      expect(
        hasSlottedContent(
          createDefaultSlot(document.createTextNode('I agree to '), link)
        )
      ).toBe(true);
    });
  });

  describe('closestPassShadow', () => {
    it('finds an ancestor across a shadow root', () => {
      const ancestor = document.createElement('section');
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });
      const child = document.createElement('button');
      ancestor.append(host);
      shadowRoot.append(child);

      expect(closestPassShadow(child, 'section')).toBe(ancestor);
    });

    it('finds an ancestor through an assigned slot', () => {
      const ancestor = document.createElement('section');
      const host = document.createElement('div');
      const shadowRoot = host.attachShadow({ mode: 'open' });
      const slot = document.createElement('slot');
      const child = document.createElement('button');
      ancestor.append(host);
      shadowRoot.append(slot);
      host.append(child);

      expect(closestPassShadow(child, 'section')).toBe(ancestor);
    });
  });
});
