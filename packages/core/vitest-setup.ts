/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as matchers from '@testing-library/jest-dom/matchers';
import { afterEach, expect } from 'vitest';

expect.extend(matchers);

const { defineCustomElements } = await import('./loader');
defineCustomElements(window);

Object.defineProperty(HTMLFormElement.prototype, 'requestSubmit', {
  configurable: true,
  value(submitter?: HTMLElement) {
    if (submitter) {
      submitter.dispatchEvent(new Event('click', { bubbles: true }));
    }

    this.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    );
  },
});

/**
 * Stencil disconnect schedules a `nextTick` that does `instanceof Node`.
 * If that runs after jsdom tears down globals, Vitest reports an unhandled
 * `ReferenceError: Node is not defined` (seen in CI on pagination specs).
 * Pin `Node` and flush disconnect while the document is still alive.
 */
const pinnedNode = globalThis.Node;

Object.defineProperty(globalThis, 'Node', {
  configurable: true,
  enumerable: false,
  get: () => pinnedNode,
  set: () => {
    /* ignore jsdom teardown clears */
  },
});

afterEach(async () => {
  document.body.replaceChildren();
  await Promise.resolve();
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });
});
