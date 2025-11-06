/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { describe, it, expect, vi } from 'vitest';
import { ixPlugin } from '../plugin';

describe('Vue Plugin - Event Handling', () => {
  it('should initialize without errors', async () => {
    expect(() => ixPlugin.install()).not.toThrow();
  });

  it('should NOT convert camelCase events to kebab-case', () => {
    const element = document.createElement('div');
    const handler = vi.fn();
    element.addEventListener('customEvent', handler);
    const event = new CustomEvent('customEvent', { detail: 'test' });
    element.dispatchEvent(event);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'customEvent',
      })
    );
  });
});
