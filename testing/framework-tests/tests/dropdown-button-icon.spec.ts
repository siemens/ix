/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@playwright/test';
import { waitForReadiness } from './utils';

type DropdownButtonElement = HTMLElement & {
  ariaLabelDropdownButton?: string;
};

const getAriaLabelDropdownButton = (element: Element) =>
  (element as DropdownButtonElement).ariaLabelDropdownButton;

test('opens icon-only dropdown buttons with Enter and Space', async ({
  page,
}) => {
  await page.goto('/preview/dropdown-button-icon');
  await waitForReadiness(page);

  const dropdownButton = page
    .locator(
      '.dropdown-button > ix-dropdown-button.icon-only:not([disabled])'
    )
    .first();
  await expect(dropdownButton).toHaveClass(/\bicon-only\b/);
  await expect(dropdownButton).toHaveAccessibleName('Open dropdown');
  const ariaLabelDropdownButton = await dropdownButton.evaluate(
    getAriaLabelDropdownButton
  );
  expect(ariaLabelDropdownButton).toBeUndefined();

  for (const key of ['Enter', 'Space']) {
    await dropdownButton.focus();
    await page.keyboard.press(key);

    await expect(dropdownButton.locator('ix-dropdown')).toBeVisible();
    await expect(dropdownButton).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(dropdownButton.locator('ix-dropdown')).not.toBeVisible();
    await expect(dropdownButton).toHaveAccessibleName('Open dropdown');
  }
});
