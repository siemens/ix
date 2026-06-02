/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-application></ix-application>`);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest(
  'uses forced breakpoint on initial render',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');
    await expect(application).toHaveClass(/breakpoint-md/);
  }
);

regressionTest(
  'keeps forced breakpoint when breakpoints prop changes',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.breakpoints = ['sm'];
    });

    await expect(application).toHaveClass(/breakpoint-md/);
  }
);

regressionTest(
  'updates forced breakpoint when force-breakpoint changes at runtime',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');
    await expect(application).toHaveClass(/breakpoint-md/);

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.setAttribute('force-breakpoint', 'sm');
    });

    await expect(application).toHaveClass(/breakpoint-sm/);

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.breakpoints = ['md', 'lg'];
    });

    await expect(application).toHaveClass(/breakpoint-sm/);
  }
);

regressionTest(
  're-enables responsive detection when force breakpoint is removed',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');
    await expect(application).toHaveClass(/breakpoint-md/);

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.removeAttribute('force-breakpoint');
    });

    await expect(application).toHaveClass(/breakpoint-lg/);
  }
);
