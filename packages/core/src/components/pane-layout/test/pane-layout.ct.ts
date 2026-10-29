/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { iconStar } from '@siemens/ix-icons/icons';
import {
  expectCollectedAfterRemoval,
  regressionTest,
  waitForRender,
} from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-pane-layout></ix-pane-layout>`);
  const pane = page.locator('ix-pane-layout');
  await expect(pane).toHaveAttribute('hydrated');
});

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-pane-layout>
      <ix-pane slot="left" heading="Left"></ix-pane>
      <div slot="content">Content</div>
    </ix-pane-layout>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest.describe('pane-layout with floating pane', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `
        <div style="width: 100vw; height: 100vh;">
          <ix-pane-layout variant="floating">
            <ix-pane
              heading="LEFT"
              slot="left"
              icon="star"
              expanded="true"
              size="240px"
              hide-on-collapse
            >
              <h1>Test Heading</h1>
            </ix-pane>
            <div slot="content" style="width: 100%; height: 100%; display: flex; flex-direction: row;">
              <div style="width: 200px; height: 100%;">
                <p>Text 1</p>
              </div>
              <div style="width: 200px; height: 100%; margin-left: 100px;">
                <p>Text 2</p>
              </div>
            </div>
          </ix-pane-layout>
        </div>
      `,
      {
        icons: { iconStar },
      }
    );
  });

  regressionTest('expanded', async ({ page }) => {
    await page.waitForSelector('h1');
    const title = page.locator('h1');
    // timeout to make sure it is currently not closing
    await waitForRender(page);
    await expect(title).toBeVisible();
  });

  regressionTest('floating pane closes on content click', async ({ page }) => {
    await page.waitForSelector('h1');
    await page.getByText('Text 2').click();
    const textOne = page.getByText('Text 1');
    await expect(textOne).toBeVisible();
  });
  regressionTest(
    'should reconfigure panes when switching between mobile and desktop',
    async ({ mount, page }) => {
      await page.setViewportSize({ width: 1024, height: 768 });

      await mount(`
      <ix-pane-layout>
        <ix-pane slot="left" heading="Left">Left Content</ix-pane>
        <ix-pane slot="top" heading="Top">Top Content</ix-pane>
        <div slot="content">Main Content</div>
      </ix-pane-layout>
    `);

      const desktopWrapper = page.locator('.side-panes-wrapper');
      await expect(desktopWrapper).toBeVisible();

      await page.setViewportSize({ width: 375, height: 667 });

      await waitForRender(page);

      const mobileLayout = page.locator('.col');
      await expect(mobileLayout).toBeVisible();

      const topPane = page.locator('ix-pane[slot="top"]');
      await expect(topPane).toHaveCSS('z-index', '3');
    }
  );

  regressionTest(
    'should maintain pane configuration after multiple layout changes',
    async ({ mount, page }) => {
      await mount(`
      <ix-pane-layout>
        <ix-pane slot="left" heading="Left">Left Content</ix-pane>
        <ix-pane slot="top" heading="Top">Top Content</ix-pane>
        <div slot="content">Main Content</div>
      </ix-pane-layout>
    `);

      const layout = page.locator('ix-pane-layout');
      const desktopWrapper = layout.locator('.side-panes-wrapper');
      const leftPane = page.locator('ix-pane[slot="left"]');
      const topPane = page.locator('ix-pane[slot="top"]');

      await page.setViewportSize({ width: 1024, height: 768 });
      await expect(desktopWrapper).toBeVisible();
      await expect(leftPane).toHaveCSS('z-index', '3');
      await expect(topPane).toHaveCSS('z-index', '1');

      await page.setViewportSize({ width: 375, height: 667 });
      await expect(desktopWrapper).toHaveCount(0);
      await expect(layout.locator('.col')).toBeVisible();
      await expect(leftPane).toHaveCSS('z-index', '1');
      await expect(topPane).toHaveCSS('z-index', '3');

      await page.setViewportSize({ width: 1024, height: 768 });
      await expect(desktopWrapper).toBeVisible();
      await expect(leftPane).toHaveCSS('z-index', '3');
      await expect(topPane).toHaveCSS('z-index', '1');
    }
  );
});

regressionTest(
  'is garbage collected after it was removed',
  async ({ mount, page }) => {
    const layout = await mount(`
      <ix-pane-layout>
        <ix-pane slot="left" heading="Left"></ix-pane>
        <ix-pane slot="bottom" heading="Bottom"></ix-pane>
      </ix-pane-layout>
    `);
    await expectCollectedAfterRemoval(page, layout);
  }
);

regressionTest(
  'configures added panes after it was reattached',
  async ({ mount, page }) => {
    const layout = await mount(`
      <ix-pane-layout>
        <ix-pane slot="left" heading="First"></ix-pane>
      </ix-pane-layout>
    `);
    await expect(page.locator('ix-pane-layout')).toHaveAttribute('hydrated');

    await layout.evaluate((el) => el.parentElement?.append(el));
    await layout.evaluate((el) => {
      const pane = document.createElement('ix-pane');
      pane.setAttribute('slot', 'left');
      pane.setAttribute('heading', 'Second');
      el.append(pane);
    });

    // A layout allows one pane per slot and clears the slot of the second one
    await expect
      .poll(() =>
        page.locator('ix-pane[heading="Second"]').evaluate((el) => el.slot)
      )
      .toBe('');
  }
);
