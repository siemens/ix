/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it, vi } from 'vitest';
import { waitForComponentReady } from '../component-ready';

describe('waitForComponentReady', () => {
  it('waits for componentOnReady in the lazy-loaded build', async () => {
    const element = document.createElement('div');
    const componentOnReady = vi.fn(() => Promise.resolve(element));
    Object.assign(element, { componentOnReady });

    await waitForComponentReady(element);

    expect(componentOnReady).toHaveBeenCalledOnce();
  });

  it('resolves without componentOnReady in the standalone build', async () => {
    await expect(
      waitForComponentReady(document.createElement('div'))
    ).resolves.toBeUndefined();
  });

  it('resolves without an element', async () => {
    await expect(waitForComponentReady(undefined)).resolves.toBeUndefined();
  });
});
