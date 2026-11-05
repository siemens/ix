/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Locator, Page } from '@playwright/test';
export * from './page';

export const viewPorts = {
  sm: {
    height: 800,
    width: 360,
  },
  md: {
    height: 768,
    width: 1024,
  },
  lg: {
    height: 1080,
    width: 1920,
  },
} as const;

export const preventFormSubmission = async (formLocator: Locator) => {
  return formLocator.evaluate((form: HTMLFormElement) =>
    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();
    })
  );
};

/**
 * Presses `key` until `target` (or one of its shadow descendants) holds focus.
 * Keyboard navigation ensures `:focus-visible` styles apply.
 */
export const focusWithKeyboard = async (
  page: Page,
  target: Locator,
  options?: { key?: string; maxPresses?: number }
) => {
  const key = options?.key ?? 'Tab';
  const maxPresses = options?.maxPresses ?? 20;

  await target.waitFor({ state: 'attached' });

  // `mount` returns before Stencil finishes rendering, so wait for the target
  // and all of its (shadow-including) ancestor components to be loaded.
  await target.evaluate(async (element) => {
    const pending: Promise<unknown>[] = [];
    let node: Node | null = element;
    while (node) {
      const { componentOnReady } = node as {
        componentOnReady?: () => Promise<unknown>;
      };
      if (typeof componentOnReady === 'function') {
        pending.push(componentOnReady.call(node));
      }
      node = node.parentNode ?? (node instanceof ShadowRoot ? node.host : null);
    }
    await Promise.all(pending);
  });

  for (let i = 0; i < maxPresses; i++) {
    await page.keyboard.press(key);

    const isFocused = await target.evaluate((element) => {
      let active = document.activeElement;
      while (active?.shadowRoot?.activeElement) {
        active = active.shadowRoot.activeElement;
      }

      // Walk up shadow-including ancestors of the deepest focused element
      let node: Node | null = active;
      while (node) {
        if (node === element) {
          return true;
        }
        node =
          node.parentNode ?? (node instanceof ShadowRoot ? node.host : null);
      }
      return false;
    });

    if (isFocused) {
      return;
    }
  }

  throw new Error(`Target not focused after ${maxPresses} "${key}" presses`);
};

export const getFormValue = async (
  formLocator: Locator,
  key: string,
  page: Page
) => {
  await page.waitForTimeout(100);
  return formLocator.evaluate((form: HTMLFormElement, key: string) => {
    const formData = new FormData(form);
    return formData.get(key);
  }, key);
};
