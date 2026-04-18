/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { regressionTest, expect } from '@utils/test';

regressionTest(
  'accessibility time-range',
  async ({ mount, makeAxeBuilder }) => {
    await mount(`
    <ix-range-field type="time-range" style="width: 32rem" aria-label="Time range">
      <ix-time-input label="start" required></ix-time-input>
      <ix-time-input label="end" helper-text="Hallo layout!"></ix-time-input>
    </ix-range-field>
  `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  }
);

regressionTest(
  'accessibility date-range',
  async ({ mount, makeAxeBuilder }) => {
    await mount(`
    <ix-range-field type="date-range" style="width: 32rem" aria-label="Date range">
      <ix-date-input label="start" required></ix-date-input>
      <ix-date-input label="end" helper-text="Hallo layout!"></ix-date-input>
    </ix-range-field>
  `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  }
);

regressionTest('renders time-range', async ({ mount, page }) => {
  await mount(
    `
    <ix-range-field type="time-range" style="width: 32rem">
      <ix-time-input required></ix-time-input>
      <ix-time-input helper-text="Hallo layout!"></ix-time-input>
    </ix-range-field>
    `
  );

  const inputRangeElement = page.locator('ix-range-field');

  await expect(inputRangeElement).toBeVisible();
  await expect(inputRangeElement).toHaveClass(/hydrated/);
});

regressionTest('renders date-range', async ({ mount, page }) => {
  await mount(
    `
    <ix-range-field type="date-range" style="width: 32rem">
      <ix-date-input required></ix-date-input>
      <ix-date-input helper-text="Hallo layout!"></ix-date-input>
    </ix-range-field>
    `
  );

  const inputRangeElement = page.locator('ix-range-field');

  await expect(inputRangeElement).toBeVisible();
  await expect(inputRangeElement).toHaveClass(/hydrated/);
});

regressionTest('renders datetime-range', async ({ mount, page }) => {
  await mount(
    `
    <ix-range-field type="datetime-range" style="width: 32rem">
      <ix-datetime-input required></ix-datetime-input>
      <ix-datetime-input helper-text="Hallo layout!"></ix-datetime-input>
    </ix-range-field>
    `
  );

  const inputRangeElement = page.locator('ix-range-field');

  await expect(inputRangeElement).toBeVisible();
  await expect(inputRangeElement).toHaveClass(/hydrated/);
});

regressionTest(
  'throws error for combined type elements',
  async ({ mount, page }) => {
    const errorMessage =
      'Input range elements are not valid for the specified type (type=time-range). Current elements: ix-time-input, ix-date-input';

    const consoleErrorPromise = page.waitForEvent('console', {
      predicate: (msg) =>
        msg.type() === 'error' && msg.text().includes(errorMessage),
    });

    await mount(
      `
    <ix-range-field type="time-range" style="width: 32rem">
      <ix-time-input required></ix-time-input>
      <ix-date-input helper-text="Hallo layout!"></ix-date-input>
    </ix-range-field>
    `
    );

    const inputRangeElement = page.locator('ix-range-field');

    await expect(inputRangeElement).toBeVisible();
    await expect(inputRangeElement).toHaveClass(/hydrated/);

    const consoleError = await consoleErrorPromise;
    expect(consoleError.text()).toContain(errorMessage);
  }
);

regressionTest('hide arrow between range inputs', async ({ mount, page }) => {
  await mount(
    `
    <ix-range-field type="date-range" style="width: 32rem" hide-arrow>
      <ix-date-input required></ix-date-input>
      <ix-date-input helper-text="Hallo layout!"></ix-date-input>
    </ix-range-field>
    `
  );

  const inputRangeElement = page.locator('ix-range-field');

  const arrowElement = inputRangeElement.locator('.range-delimiter');

  await expect(inputRangeElement).toBeVisible();
  await expect(inputRangeElement).toHaveClass(/hydrated/);

  await expect(arrowElement).not.toBeVisible();
});

regressionTest(
  'default margin for label-less input element',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-range-field type="date-range" style="width: 32rem">
      <ix-date-input required aria-label="first"></ix-date-input>
      <ix-date-input helper-text="Hallo layout!" aria-label="second"></ix-date-input>
    </ix-range-field>
    `
    );

    const inputRangeElement = page.locator('ix-range-field');

    await expect(inputRangeElement).toBeVisible();
    await expect(inputRangeElement).toHaveClass(/hydrated/);

    const firstInput = page.locator('ix-date-input').first();
    const secondInput = page.locator('ix-date-input').nth(1);
    const arrowElement = inputRangeElement.locator('.range-delimiter');

    await expect(firstInput).toHaveCSS('margin-top', '0px');
    await expect(secondInput).toHaveCSS('margin-top', '0px');
    await expect(arrowElement).toHaveCSS('margin-top', '4px');
  }
);

regressionTest(
  'default margin for labelled input element',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-range-field type="date-range" style="width: 32rem">
      <ix-date-input label="first" required></ix-date-input>
      <ix-date-input label="second" helper-text="Hallo layout!"></ix-date-input>
    </ix-range-field>
    `
    );

    const inputRangeElement = page.locator('ix-range-field');

    await expect(inputRangeElement).toBeVisible();
    await expect(inputRangeElement).toHaveClass(/hydrated/);

    const firstInput = page.locator('ix-date-input').first();
    const secondInput = page.locator('ix-date-input').nth(1);
    const arrowElement = inputRangeElement.locator('.range-delimiter');

    await expect(firstInput).toHaveCSS('margin-top', '0px');
    await expect(secondInput).toHaveCSS('margin-top', '0px');
    await expect(arrowElement).toHaveCSS('margin-top', '32px');
  }
);

regressionTest(
  'default margin for fallback first input element',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-range-field type="date-range" style="width: 32rem">
      <ix-date-input required></ix-date-input>
      <ix-date-input label="second" helper-text="Hallo layout!"></ix-date-input>
    </ix-range-field>
    `
    );

    const inputRangeElement = page.locator('ix-range-field');

    await expect(inputRangeElement).toBeVisible();
    await expect(inputRangeElement).toHaveClass(/hydrated/);

    const firstInput = page.locator('ix-date-input').first();
    const secondInput = page.locator('ix-date-input').nth(1);
    const arrowElement = inputRangeElement.locator('.range-delimiter');

    await expect(firstInput).toHaveCSS('margin-top', '28.8px');
    await expect(secondInput).toHaveCSS('margin-top', '0px');
    await expect(arrowElement).toHaveCSS('margin-top', '32px');
  }
);

regressionTest(
  'default margin for fallback second input element',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-range-field type="date-range" style="width: 32rem">
      <ix-date-input label="second" required></ix-date-input>
      <ix-date-input helper-text="Hallo layout!"></ix-date-input>
    </ix-range-field>
    `
    );

    const inputRangeElement = page.locator('ix-range-field');

    await expect(inputRangeElement).toBeVisible();
    await expect(inputRangeElement).toHaveClass(/hydrated/);

    const firstInput = page.locator('ix-date-input').first();
    const secondInput = page.locator('ix-date-input').nth(1);
    const arrowElement = inputRangeElement.locator('.range-delimiter');

    await expect(firstInput).toHaveCSS('margin-top', '0px');
    await expect(secondInput).toHaveCSS('margin-top', '28.8px');
    await expect(arrowElement).toHaveCSS('margin-top', '32px');
  }
);

regressionTest(
  'focus and open second date picker element',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-range-field type="date-range" style="width: 32rem">
      <ix-date-input label="second" required value="2022/03/01"></ix-date-input>
      <ix-date-input helper-text="Hallo layout!" value="2022/03/01"></ix-date-input>
    </ix-range-field>
    `
    );

    const inputRangeElement = page.locator('ix-range-field');

    await expect(inputRangeElement).toBeVisible();
    await expect(inputRangeElement).toHaveClass(/hydrated/);

    const firstInput = page.locator('ix-date-input').first();
    const secondInput = page.locator('ix-date-input').nth(1);

    await firstInput.click();

    const dropdown = firstInput.getByTestId('date-dropdown');
    await expect(dropdown).toHaveClass(/show/);

    const day = firstInput.getByRole('button', { name: '12 March' });
    await day.click();

    await expect(dropdown).not.toHaveClass(/show/);

    const input = secondInput.locator('input');
    await expect(input).toBeFocused();

    const secondDropdown = secondInput.getByTestId('date-dropdown');
    await expect(secondDropdown).toHaveClass(/show/);

    const secondDay = secondInput.getByRole('button', { name: '12 March' });
    await secondDay.click();

    await expect(secondDropdown).not.toHaveClass(/show/);
  }
);

regressionTest(
  'focus and open second time picker element',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-range-field type="time-range" style="width: 32rem">
      <ix-time-input label="second" required value="10:11:12"></ix-time-input>
      <ix-time-input helper-text="Hallo layout!" value="10:11:12"></ix-time-input>
    </ix-range-field>
    `
    );

    const inputRangeElement = page.locator('ix-range-field');

    await expect(inputRangeElement).toBeVisible();
    await expect(inputRangeElement).toHaveClass(/hydrated/);

    const firstInput = page.locator('ix-time-input').first();
    const secondInput = page.locator('ix-time-input').nth(1);

    await firstInput.click();

    const dropdown = firstInput.getByTestId('time-dropdown');
    await expect(dropdown).toHaveClass(/show/);

    const day = firstInput.getByRole('button', { name: 'sec: 15' });
    await day.click();
    await firstInput.getByRole('button', { name: 'Confirm' }).click();

    await expect(dropdown).not.toHaveClass(/show/);

    const input = secondInput.locator('input');
    await expect(input).toBeFocused();

    const secondDropdown = secondInput.getByTestId('time-dropdown');
    await expect(secondDropdown).toHaveClass(/show/);

    const secondDay = secondInput.getByRole('button', { name: 'sec: 15' });
    await secondDay.click();
    await secondInput.getByRole('button', { name: 'Confirm' }).click();

    await expect(secondDropdown).not.toHaveClass(/show/);
  }
);
