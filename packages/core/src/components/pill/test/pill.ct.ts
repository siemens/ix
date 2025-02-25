/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test } from '@utils/test';
import { expect } from '@playwright/test';

test.describe('Pill', () => {
  test('dynamic gap behavior', async ({ mount, page }) => {
    await mount('<ix-pill icon="star">Dynamic gap</ix-pill>');
    const pill = page.locator('ix-pill');
    const innerContainer = pill.locator('.container');

    await expect(innerContainer).toHaveClass(/with-gap/);

    await pill.evaluate((el: HTMLIxPillElement) => {
      el.innerText = '';
    });

    await expect(innerContainer).not.toHaveClass(/with-gap/);
  });
});

test.describe('tooltip', () => {
  test('should not display when tooltip-text attribute is absent', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill>Text content</ix-pill>');
    const pill = page.locator('ix-pill');
    await pill.hover();

    await expect(pill).not.toHaveAttribute('tooltip-text');
    await expect(pill.locator('ix-tooltip')).not.toBeVisible();
  });

  test('should display the component text content when tooltip-text attribute is an empty string', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill tooltip-text="">Text content</ix-pill>');
    const pill = page.locator('ix-pill');
    await pill.hover();

    await expect(pill).toHaveAttribute('tooltip-text', '');
    const tooltip = pill.locator('ix-tooltip');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('Text content');
  });

  test('should display "false" when tooltip-text attribute is "false"', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill tooltip-text="false">Text content</ix-pill>');
    const pill = page.locator('ix-pill');
    await pill.hover();

    await expect(pill).toHaveAttribute('tooltip-text', 'false');
    const tooltip = pill.locator('ix-tooltip');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('false');
  });

  test('should display "true" when tooltip-text attribute is "true"', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill tooltip-text="true">Text content</ix-pill>');
    const pill = page.locator('ix-pill');
    await pill.hover();

    await expect(pill).toHaveAttribute('tooltip-text', 'true');
    const tooltip = pill.locator('ix-tooltip');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('true');
  });

  test('should display the component text content when tooltip-text attribute is present but no value is set', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill tooltip-text>Text content</ix-pill>');
    const pill = page.locator('ix-pill');
    await pill.hover();

    await expect(pill).toHaveAttribute('tooltip-text', undefined);
    const tooltip = pill.locator('ix-tooltip');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('Text content');
  });

  test('should display the custom text when tooltip-text attribute is a custom string', async ({
    mount,
    page,
  }) => {
    await mount(
      '<ix-pill tooltip-text="custom tooltip text">Text content</ix-pill>'
    );
    const pill = page.locator('ix-pill');
    await pill.hover();

    await expect(pill).toHaveAttribute('tooltip-text', 'custom tooltip text');
    const tooltip = pill.locator('ix-tooltip');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('custom tooltip text');
  });
});
