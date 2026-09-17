/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it, vi } from 'vitest';
import { getSafeNavigationUrl, isSafeNavigationUrl } from '../condition-checks';

describe('navigation URL checks', () => {
  it.each([
    '/components/button',
    '../relative',
    '#section',
    'https://example.com',
    'HTTP://example.com',
    'mailto:user@example.com',
    'tel:+4912345',
  ])('allows %s', (url) => {
    expect(isSafeNavigationUrl(url)).toBe(true);
  });

  it.each([
    'javascript:alert(1)',
    'java\tscript:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'blob:https://example.com/id',
    'ftp://example.com',
    'custom:resource',
    'https://',
  ])('rejects %s', (url) => {
    expect(isSafeNavigationUrl(url)).toBe(false);
  });

  it('reports rejected URLs without including their value', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    expect(getSafeNavigationUrl('javascript:secret()', 'ix-test')).toBe(
      undefined
    );
    expect(warn).toHaveBeenCalledWith(
      '[ix-test] Ignoring URL with an unsupported or invalid protocol.'
    );
    expect(warn.mock.calls.flat().join(' ')).not.toContain('secret');

    warn.mockRestore();
  });
});
