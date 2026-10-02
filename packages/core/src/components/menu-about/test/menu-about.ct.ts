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

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`
    <ix-menu>
      <ix-menu-about suppress-legacy-tabs>
        <ix-tab-set>
          <ix-tabs active-tab-key="tab-1">
            <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
            <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
          </ix-tabs>
          <ix-tab-panel tab-key="tab-1">Content 1</ix-tab-panel>
          <ix-tab-panel tab-key="tab-2">Content 2</ix-tab-panel>
        </ix-tab-set>
      </ix-menu-about>
    </ix-menu>
  `);

  await expect(page.locator('ix-menu-about')).toHaveClass(/\bhydrated\b/);
  await page.locator('#aboutAndLegal').click();

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

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

  await expect(page.getByText('Content 1')).toBeVisible();

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
  'selects legacy tabs with attribute-only keys',
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
    await expect(about).toHaveClass(/\bhydrated\b/);
    await page.locator('#aboutAndLegal').click();
    await expect(page.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute(
      'aria-selected',
      'true'
    );

    await about.evaluate((element: HTMLIxMenuAboutElement) => {
      element.querySelectorAll('ix-menu-about-item').forEach((item) => {
        Object.defineProperty(item, 'tabKey', {
          configurable: true,
          value: undefined,
        });
      });
      element.activeTabKey = undefined;
      element
        .querySelector('ix-menu-about-item')!
        .setAttribute('label', 'First');
    });

    const firstTab = page.getByRole('tab', { name: 'First', exact: true });
    await expect(firstTab).toHaveJSProperty('tabKey', 'tab-1');
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByText('Content 1')).toBeVisible();
    await expect(page.getByText('Content 2')).not.toBeVisible();

    const secondTab = page.getByRole('tab', { name: 'Tab 2' });
    await expect(secondTab).toHaveJSProperty('tabKey', 'tab-2');
    await secondTab.click();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByText('Content 2')).toBeVisible();
    await expect(page.getByText('Content 1')).not.toBeVisible();
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
