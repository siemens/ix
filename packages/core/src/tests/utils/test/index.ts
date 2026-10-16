/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElementHandle, expect, Locator, Page } from '@playwright/test';
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

/** Waits for pending re-renders, e.g. before asserting that a state didn't change */
export const waitForRender = (page: Page) =>
  page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
      )
  );

/**
 * Removes the element from the DOM, releases the handle and expects a full
 * garbage collection to free it. Chromium only, it forces the collection
 * through the DevTools protocol.
 */
export const expectCollectedAfterRemoval = async (
  page: Page,
  element: ElementHandle<HTMLElement>
) => {
  await element.evaluate(async (el) => {
    await (el as any).componentOnReady?.();
    (window as any).__removedElement = new WeakRef(el);
    el.remove();
  });
  await element.dispose();

  const cdp = await page.context().newCDPSession(page);
  await expect
    .poll(async () => {
      await cdp.send('HeapProfiler.collectGarbage');
      return page.evaluate(
        () => (window as any).__removedElement.deref() === undefined
      );
    })
    .toBe(true);
  await cdp.detach();
};
