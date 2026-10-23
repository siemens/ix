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
export * from './date-time';

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
 * Reads the current form value for `key`. Form values update asynchronously,
 * so assert with `expect.poll(() => getFormValue(...))`.
 */
export const getFormValue = async (
  formLocator: Locator,
  key: string,
  _page?: Page
) => {
  return formLocator.evaluate((form: HTMLFormElement, key: string) => {
    const formData = new FormData(form);
    return formData.get(key);
  }, key);
};

export type RecordedEvent = { type: string; detail: unknown };

/**
 * Records the given events dispatched on `locator`. Returns a function that
 * reads the events recorded so far, in dispatch order.
 */
export const recordEvents = async (locator: Locator, names: string[]) => {
  const key = `__recordedEvents_${Math.random().toString(36).slice(2)}`;

  await locator.evaluate(
    (el, { eventNames, storeKey }) => {
      const events: { type: string; detail: unknown }[] = [];
      (window as unknown as Record<string, unknown>)[storeKey] = events;
      eventNames.forEach((name) =>
        el.addEventListener(name, (event) =>
          events.push({ type: name, detail: (event as CustomEvent).detail })
        )
      );
    },
    { eventNames: names, storeKey: key }
  );

  return () =>
    locator
      .page()
      .evaluate(
        (storeKey) =>
          (window as unknown as Record<string, RecordedEvent[]>)[storeKey],
        key
      );
};

/**
 * Presses Tab until the deepest focused element (piercing shadow roots) has
 * the given text, failing after `maxTabs` presses.
 */
export const tabUntilFocused = async (
  page: Page,
  text: string,
  maxTabs = 30
) => {
  for (let index = 0; index < maxTabs; index++) {
    await page.keyboard.press('Tab');

    const focusedText = await page.evaluate(() => {
      let active = document.activeElement;
      while (active?.shadowRoot?.activeElement) {
        active = active.shadowRoot.activeElement;
      }

      // Labels of components like ix-button are slotted into the focused
      // element, so fall back to the text of its shadow host
      const text = active?.textContent?.trim();
      const root = active?.getRootNode();
      if (!text && root instanceof ShadowRoot) {
        return root.host.textContent?.trim() ?? '';
      }
      return text ?? '';
    });

    if (focusedText === text) {
      return;
    }
  }

  throw new Error(`"${text}" was not focused after ${maxTabs} Tab presses`);
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
