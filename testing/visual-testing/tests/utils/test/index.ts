/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';
export * from './page';

/**
 * Waits until an opened `ix-dropdown` panel is visible: Popover `dialog` (default)
 * or the host when `suppress-top-layer` is used (e.g. visual overflow fixtures).
 */
export async function waitForOpenDropdownPanel(
  scope: Page | Locator
): Promise<void> {
  const host = scope.locator('ix-dropdown.show').first();
  await expect(async () => {
    const dialog = host.locator('dialog.dialog[role="presentation"]');
    if ((await dialog.count()) > 0) {
      await expect(dialog.first()).toBeVisible();
    } else {
      await expect(host).toBeVisible();
    }
  }).toPass({ timeout: 15000 });
}

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
