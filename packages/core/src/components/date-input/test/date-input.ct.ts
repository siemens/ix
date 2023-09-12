import { expect } from '@playwright/test';
import { test } from '@utils/test';

const DATE_INPUT_SELECTOR = 'ix-date-input';

test('renders', async ({ mount, page }) => {
  await mount(`<${DATE_INPUT_SELECTOR}></${DATE_INPUT_SELECTOR}>`);
  const dateInput = page.locator(DATE_INPUT_SELECTOR);
  await expect(dateInput).toHaveClass(/hydrated/);
});
