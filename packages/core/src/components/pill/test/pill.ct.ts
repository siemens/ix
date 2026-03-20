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
import { iconStar } from '@siemens/ix-icons/icons';

test.describe('Pill', () => {
  test('dynamic gap behavior', async ({ mount, page }) => {
    await mount('<ix-pill icon="star">Dynamic gap</ix-pill>', {
      icons: { iconStar },
    });
    const pill = page.locator('ix-pill');
    const innerContainer = pill.locator('.container');

    await expect(innerContainer).toHaveClass(/with-gap/);

    await pill.evaluate((el: HTMLIxPillElement) => {
      el.innerText = '';
    });

    await expect(innerContainer).not.toHaveClass(/with-gap/);
  });
});

test.describe('accessibility', () => {
  test('should apply aria-label to container when set on host', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill aria-label="Custom label">Content</ix-pill>');
    const container = page.locator('ix-pill .container');
    await expect(container).toHaveAttribute('aria-label', 'Custom label');

    const host = page.locator('ix-pill');
    await expect(host).not.toHaveAttribute('aria-label');
  });

  test('should apply aria-hidden to container when set on host', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill aria-hidden="true">Content</ix-pill>');
    const container = page.locator('ix-pill .container');
    await expect(container).toHaveAttribute('aria-hidden', 'true');
  });

  test('should not apply aria-hidden when not set', async ({ mount, page }) => {
    await mount('<ix-pill>Content</ix-pill>');
    const container = page.locator('ix-pill .container');
    await expect(container).not.toHaveAttribute('aria-hidden');
  });

  test('should apply role to container when set on host', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill role="status">Online</ix-pill>');
    const container = page.locator('ix-pill .container');
    await expect(container).toHaveAttribute('role', 'status');
  });

  test('should hide decorative icon from screen readers', async ({
    mount,
    page,
  }) => {
    await mount('<ix-pill icon="star">Content</ix-pill>', {
      icons: { iconStar },
    });
    const icon = page.locator('ix-pill ix-icon');
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  test('should not hide icon with aria-label-icon', async ({ mount, page }) => {
    await mount(
      '<ix-pill icon="star" aria-label-icon="Featured">Content</ix-pill>',
      { icons: { iconStar } }
    );
    const icon = page.locator('ix-pill ix-icon');
    await expect(icon).toHaveAttribute('aria-label', 'Featured');
    await expect(icon).not.toHaveAttribute('aria-hidden');
  });

  test('should handle multiple ARIA attributes', async ({ mount, page }) => {
    await mount(
      '<ix-pill role="status" aria-label="System status" aria-live="polite">Online</ix-pill>'
    );
    const container = page.locator('ix-pill .container');
    await expect(container).toHaveAttribute('role', 'status');
    await expect(container).toHaveAttribute('aria-label', 'System status');
    await expect(container).toHaveAttribute('aria-live', 'polite');
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
    const tooltip = pill.locator('ix-tooltip');
    await expect(tooltip).not.toBeAttached();
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
    await expect(tooltip).toHaveClass(/visible/);
    await expect(tooltip).toHaveText(/Text content/);
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
    await expect(tooltip).toHaveClass(/visible/);
    await expect(tooltip).toHaveText(/Text content/);
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
    await expect(tooltip).toHaveClass(/visible/);
    await expect(tooltip).toHaveText(/custom tooltip text/);
  });
});
