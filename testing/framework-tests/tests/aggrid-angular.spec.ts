/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@playwright/test';

test('AG Grid cells support keyboard navigation and IX controls', async ({
  page,
}) => {
  await page.goto('/preview/aggrid');

  const row = page.getByRole('row').filter({ hasText: 'Equipment' });
  const typeCell = row.getByRole('gridcell').filter({ hasText: 'Equipment' });
  const enabledCell = row.getByRole('gridcell').filter({
    has: page.getByRole('checkbox', { name: 'Enable Equipment', exact: true }),
  });
  const checkbox = enabledCell.getByRole('checkbox');
  const statusCell = row.getByRole('gridcell').filter({
    has: page.getByRole('button', { name: 'Normal', exact: true }),
  });
  const versionCell = row.getByRole('gridcell').filter({
    has: page.getByRole('textbox', { name: 'HW version' }),
  });
  const input = versionCell.getByRole('textbox');

  await typeCell.click();
  await expect(typeCell).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(enabledCell).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(checkbox).toBeFocused();
  await expect(checkbox).toBeChecked();
  await page.keyboard.press('Space');
  await expect(checkbox).not.toBeChecked();
  await page.keyboard.press('Escape');
  await expect(enabledCell).toBeFocused();

  await page.keyboard.press('ArrowRight');
  await expect(statusCell).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(statusCell.getByRole('button')).toBeFocused();
  await page.keyboard.press('Enter');
  const warning = statusCell.getByText('Warning', { exact: true });
  await expect(warning).toBeVisible();
  await warning.click();
  const updatedStatusCell = row.getByRole('gridcell').filter({
    has: page.getByRole('button', { name: 'Warning', exact: true }),
  });
  await expect(updatedStatusCell.getByRole('button')).toHaveAccessibleName(
    'Warning'
  );

  await versionCell.focus();
  await page.keyboard.press('F2');
  await expect(input).toBeFocused();
  await input.fill('5.0');
  await page.keyboard.press('Home');
  await expect(input).toBeFocused();
  await page.keyboard.type('v');
  await expect(input).toHaveValue('v5.0');
  await page.keyboard.press('Escape');
  await expect(versionCell).toBeFocused();
  await page.keyboard.press('ArrowLeft');
  await expect(updatedStatusCell).toBeFocused();

  await enabledCell.focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await expect(updatedStatusCell).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(enabledCell).toBeFocused();
  await expect(checkbox).not.toBeChecked();
  await expect(input).toHaveValue('v5.0');

  await input.click();
  await expect(input).toBeFocused();
  await checkbox.click();
  await expect(checkbox).toBeChecked();
  await updatedStatusCell.getByRole('button').click();
  await expect(
    updatedStatusCell.getByText('Normal', { exact: true })
  ).toBeVisible();
});
