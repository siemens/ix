import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/preview/buttons');
  await expect(page.locator('ix-button').nth(0)).toBeVisible();
  await expect(page.locator('ix-button').nth(1)).toBeVisible();
  await expect(page.locator('ix-button').nth(2)).toBeVisible();
});
