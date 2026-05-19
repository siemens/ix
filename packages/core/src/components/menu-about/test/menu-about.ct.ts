/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item tab-key="tab-2" label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    `);

  const element = page.locator('#aboutAndLegal');
  await element.click();

  await page.getByText('Content 1').click();

  const aboutAndLegal = page.locator('ix-menu-about');
  await expect(aboutAndLegal).toHaveClass(/hydrated/);
});

regressionTest('active-tab-label', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-about active-tab-key="tab-2">
          <ix-menu-about-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item tab-key="tab-2" label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    </ix-application>
    `);

  const element = page.locator('#aboutAndLegal');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  await expect(tabItems.first()).not.toHaveClass(/\bselected\b/);
  await expect(tabItems.last()).toHaveClass(/\bselected\b/);
});

regressionTest('should not change tab', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item tab-key="tab-2" label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    `);

  const about = page.locator('ix-menu-about');
  const element = page.locator('#aboutAndLegal');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  await about.evaluate((e) => {
    e.addEventListener('tabChange', (event) => event.preventDefault());
  });

  await tabItems.last().click();

  await expect(tabItems.first()).toHaveClass(/\bselected\b/);
  await expect(tabItems.last()).not.toHaveClass(/\bselected\b/);
});

regressionTest(
  'tabChange event should fire exactly once per tab click',
  async ({ mount, page }) => {
    await mount(`
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item tab-key="tab-2" label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    `);

    const about = page.locator('ix-menu-about');
    const element = page.locator('#aboutAndLegal');
    await element.click();

    const tabItems = page.locator('ix-tab-item');
    await expect(tabItems.first()).toHaveClass(/hydrated/);

    const eventPromise = about.evaluate((e) => {
      return new Promise<string>((resolve) => {
        const handleTabChange = (event: Event) => {
          const detail = (event as CustomEvent<string>).detail;
          resolve(detail);
        };

        e.addEventListener('tabChange', handleTabChange);
      });
    });

    await tabItems.nth(1).click();

    const eventDetail = await eventPromise;
    expect(eventDetail).toBe('tab-2');
  }
);

regressionTest(
  'renders slotted tabs when suppressing legacy tabs',
  async ({ mount, page }) => {
    await mount(`
      <ix-menu>
        <ix-menu-about suppress-legacy-tabs>
          <ix-tabs active-tab-key="tab-1">
            <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
            <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
          </ix-tabs>
          <section role="tabpanel">Content 1</section>
        </ix-menu-about>
      </ix-menu>
    `);

    const element = page.locator('#aboutAndLegal');
    await element.click();

    const aboutAndLegal = page.locator('ix-menu-about');
    await expect(aboutAndLegal).not.toHaveClass(/legacy-tabs/);
    await expect(page.getByRole('tab', { name: 'Tab 1' })).toBeVisible();
  }
);
