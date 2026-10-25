/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Waits until a Stencil component has rendered.
 *
 * `componentOnReady()` only exists in the lazy-loaded build. Standalone custom
 * elements (`dist-custom-elements`) don't provide it, so this resolves
 * immediately there.
 */
export async function waitForComponentReady(element?: HTMLElement) {
  const stencilComponent = element as
    | Partial<{ componentOnReady: () => Promise<unknown> }>
    | undefined;

  if (typeof stencilComponent?.componentOnReady === 'function') {
    await stencilComponent.componentOnReady();
  }
}
