/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cleanup, render } from '@testing-library/vue';
import { defineComponent, h } from 'vue';
import { afterEach, describe, expect, it } from 'vitest';
import { VueFrameworkDelegate } from '../delegate';
import { IxOverlay, PORTAL_ID } from '../modal';

afterEach(cleanup);

function renderOverlay() {
  const delegate = new VueFrameworkDelegate();
  render(
    defineComponent({
      setup() {
        return () => [h(IxOverlay, { delegate }), h('div', { id: PORTAL_ID })];
      },
    })
  );
  return delegate;
}

describe('IxOverlay', () => {
  it('resolves and removes views across repeated attach cycles', async () => {
    const delegate = renderOverlay();

    for (let cycle = 0; cycle < 3; cycle++) {
      const element = await delegate.attachView(
        h('span', { class: 'overlay-content' }, `View ${cycle}`)
      );

      expect(element.textContent).toBe(`View ${cycle}`);
      expect(element.isConnected).toBe(true);

      await delegate.removeView(element);
      await expect
        .poll(() => document.querySelectorAll('.overlay-content').length)
        .toBe(0);
    }
  });

  it('resolves concurrently attached views independently', async () => {
    const delegate = renderOverlay();

    const [first, second] = await Promise.all([
      delegate.attachView(h('span', 'First')),
      delegate.attachView(h('span', 'Second')),
    ]);

    expect(first.textContent).toBe('First');
    expect(second.textContent).toBe('Second');
  });
});
