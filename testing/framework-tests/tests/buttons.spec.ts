import { test, expect } from '@playwright/test';

test.describe('buttons', () => {
  test('buttons', async ({ page }) => {
    await page.goto('/preview/buttons');
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - button "Button"
      - button "Button" [disabled]
    `);
  });
});
