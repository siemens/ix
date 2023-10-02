import { expect, Page } from '@playwright/test';
import { test } from '@utils/test';

const DATE_INPUT_SELECTOR = 'ix-date-input';
const getInputObj = (page: Page) => {
  return page.$eval(DATE_INPUT_SELECTOR, (el: HTMLIxDateInputElement) =>
    el.getCurrentInput()
  );
};

test.describe('date input tests single', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(`<ix-date-input range="false"></ix-date-input>`);
  });

  test('renders', async ({ page }) => {
    const dateInput = page.locator(DATE_INPUT_SELECTOR);
    await expect(dateInput).toHaveClass(/hydrated/);
  });

  test('no initial value', async ({ page }) => {
    expect(await getInputObj(page)).toEqual({
      from: undefined,
      to: undefined,
    });
  });

  test('entered date is selected', async ({ page }) => {
    const testDate = '2023/02/15';

    await page.getByPlaceholder('YYYY/MM/DD').click();
    await page.getByPlaceholder('YYYY/MM/DD').fill(testDate);

    const month = page
      .locator('ix-button')
      .filter({ hasText: 'February 2023' });
    const day = page.getByText('15');

    await expect(month).toHaveClass(/hydrated/);
    await expect(day).toHaveClass(/selected/);
    expect(await getInputObj(page)).toEqual({
      from: testDate,
      to: undefined,
    });
  });

  test('selected date is entered in input', async ({ page }) => {
    page.$eval(DATE_INPUT_SELECTOR, (el: HTMLIxDateInputElement) => {
      el.from = '2023/01/01';
    });

    await page.getByText('2023/01/01').click();
    await page.getByText('13').click();

    expect(await getInputObj(page)).toEqual({
      from: '2023/01/13',
      to: undefined,
    });
  });
});
