import { expect } from '@playwright/test';
import { test } from '@utils/test';

test.describe('ix-message-bar', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-message-bar type="danger" dismissible>Content</ix-message-bar>`
    );
  });

  test('emits closeAnimationCompleted event', async ({ page }) => {
    const messageBar = page.locator('ix-message-bar');
    const closeButton = messageBar.locator('[data-testid="close-btn"]');

    const [event] = await Promise.all([
      messageBar.evaluate((element: HTMLElement) => {
        return new Promise((resolve) => {
          element.addEventListener('closeAnimationCompleted', (e) =>
            resolve(e)
          );
        });
      }),
      closeButton.click(),
    ]);

    expect(event).toBeTruthy();
  });

  test('adds d-none class after dismissing', async ({ page }) => {
    const messageBar = page.locator('ix-message-bar');
    const closeButton = messageBar.locator('[data-testid="close-btn"]');

    await closeButton.click();
    await page.waitForTimeout(300);

    const messageContainer = messageBar.locator('.message-container');
    await expect(messageContainer).toHaveClass(/d-none/);
  });
});
