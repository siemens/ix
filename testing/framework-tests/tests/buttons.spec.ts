import { test, expect } from '@playwright/test';

test.describe('buttons', () => {
  test('buttons', async ({ page }) => {
    await page.goto('/preview/buttons');
    await expect(page.locator('ix-button').nth(0)).toBeVisible();
    await expect(page.locator('ix-button').nth(1)).toBeVisible();
  });
});
