/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import {
  iconAlarm,
  iconError,
  iconInfo,
  iconSuccess,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';
import { toast } from './../../../public-api';
import type { ToastType } from '../toast.types';

declare global {
  interface Window {
    toast: typeof toast;
  }
}

/**
 * Figma order: Success, Information, Warning, Error, Custom icon, Danger, Caution, Critical.
 */
const toastTypes: { type: ToastType; icon: string }[] = [
  { type: 'success', icon: iconSuccess },
  { type: 'information', icon: iconInfo },
  { type: 'warning', icon: iconWarning },
  { type: 'error', icon: iconError },
  { type: 'danger', icon: iconAlarm },
  { type: 'caution', icon: iconWarningRhomb },
  { type: 'critical', icon: iconWarningOctagon },
];

regressionTest('renders', async ({ mount, page }) => {
  await mount('');

  await page.evaluate(() => {
    window.toast({
      message: 'This is a toast message',
    });
  });

  const toast = page.locator('ix-toast');
  await expect(toast).toHaveAttribute('hydrated');
  await expect(toast).toBeVisible();
});

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount('');

  await page.evaluate(() => {
    window.toast({
      title: 'Info',
      message: 'This is a toast message',
      autoClose: false,
    });
  });

  const toast = page.locator('ix-toast');
  await expect(toast).toHaveAttribute('hydrated');
  await expect(toast).toBeVisible();

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest(
  'removes the toast after the fade-out animation ended',
  async ({ mount, page }) => {
    await mount('');

    const events = await page.evaluate(
      () =>
        new Promise<string[]>((resolve) => {
          const events: string[] = [];

          window
            .toast({ message: 'Auto close', autoCloseDelay: 200 })
            .then(() => {
              const element = document.querySelector('ix-toast')!;

              element.addEventListener('animationend', (event) => {
                if (event.animationName === 'toast-fade-out') {
                  events.push('animationend');
                }
              });

              new MutationObserver((_, observer) => {
                if (!element.isConnected) {
                  events.push('removed');
                  observer.disconnect();
                  resolve(events);
                }
              }).observe(document.body, { childList: true, subtree: true });
            });
        })
    );

    expect(events).toEqual(['animationend', 'removed']);
  }
);

regressionTest(
  'sets live-region attributes for screen reader announcements',
  async ({ mount, page }) => {
    await mount('');

    await page.evaluate(() => {
      window.toast({
        title: 'Info',
        message: 'Toast announcement',
      });
    });

    const toast = page.locator('ix-toast');
    await expect(toast).toHaveAttribute('hydrated');
    await expect(toast).toHaveAttribute('role', 'alert');
    await expect(toast).toHaveAttribute('aria-live', 'polite');
    await expect(toast).toHaveAttribute('aria-atomic', 'true');
    await expect(toast).toContainText('Info');
    await expect(toast).toContainText('Toast announcement');
  }
);

regressionTest(
  'should be visible through overlays',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-application-header></ix-application-header>
        <ix-menu>
          <ix-menu-settings>
          </ix-menu-settings>
        </ix-menu>
      </ix-application>
    `);

    const settingsButton = page.getByRole('menuitem', { name: 'Settings' });
    await settingsButton.click();

    // Wait for the menu to be visible
    await page.waitForTimeout(500);

    await page.evaluate(() => {
      window.toast({
        message: 'This is a toast message',
      });
    });

    const toast = page.locator('ix-toast');
    const closeToast = toast.locator('ix-icon-button');
    await expect(toast).toHaveAttribute('hydrated');

    await closeToast.click();
    await expect(toast).not.toBeVisible();
  }
);

regressionTest(
  'verify functionality of pause and resume api',
  async ({ mount, page }) => {
    await mount('');
    const toastHandle = await page.evaluateHandle(() => {
      return window.toast({
        message: 'Pause/Resume test',
        autoCloseDelay: 1000,
      });
    });

    const toast = page.locator('ix-toast');
    await expect(toast).toBeVisible();

    await page.evaluate((handle) => {
      handle.pause();
    }, toastHandle);

    // Wait for the toast to be paused and check persistence
    await page.waitForTimeout(1500);
    await expect(toast).toBeVisible();

    await page.evaluate((handle) => {
      handle.resume();
    }, toastHandle);

    // Wait for the toast to be resumed and check disappearance
    await page.waitForTimeout(1500);
    await expect(toast).not.toBeVisible();
  }
);

regressionTest('verify isPaused method', async ({ mount, page }) => {
  await mount('');
  const toastHandle = await page.evaluateHandle(() => {
    return window.toast({
      message: 'isPaused test',
      autoCloseDelay: 2000,
    });
  });

  // Should not be paused initially
  let paused = await page.evaluate(async (handle) => {
    return await handle.isPaused();
  }, toastHandle);
  expect(paused).toBe(false);

  // Pause and check
  await page.evaluate((handle) => handle.pause(), toastHandle);
  paused = await page.evaluate(async (handle) => {
    return await handle.isPaused();
  }, toastHandle);
  expect(paused).toBe(true);

  // Resume and check
  await page.evaluate((handle) => handle.resume(), toastHandle);
  paused = await page.evaluate(async (handle) => {
    return await handle.isPaused();
  }, toastHandle);
  expect(paused).toBe(false);
});

regressionTest(
  'defaults to information type and reflects type to attribute',
  async ({ mount, page }) => {
    await mount('');
    await page.evaluate(() => {
      window.toast({ message: 'Default type toast', autoClose: false });
    });
    const toastEl = page.locator('ix-toast').first();
    await expect(toastEl).toHaveAttribute('hydrated');
    await expect(toastEl).toHaveAttribute('type', 'information');

    for (const { type } of toastTypes) {
      await page.evaluate((t) => {
        window.toast({ message: `${t} toast`, type: t, autoClose: false });
      }, type);
      const lastToast = page.locator('ix-toast').last();
      await expect(lastToast).toHaveAttribute('hydrated');
      await expect(lastToast).toHaveAttribute('type', type);
    }
  }
);

for (const { type, icon } of toastTypes) {
  regressionTest(
    `renders ${type} type with its status icon`,
    async ({ mount, page }) => {
      await mount('');
      await page.evaluate((t) => {
        window.toast({ message: `${t} toast`, type: t, autoClose: false });
      }, type);

      const toastEl = page.locator('ix-toast').last();
      await expect(toastEl).toHaveAttribute('hydrated');
      await expect(toastEl.getByTestId('toast-icon')).toHaveJSProperty(
        'name',
        icon
      );
      await expect(toastEl.getByTestId('toast-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
    }
  );
}

regressionTest(
  'exposes renamed and new toast helpers',
  async ({ mount, page }) => {
    await mount('');

    const helpers = await page.evaluate(async () => {
      const results: string[] = [];
      await window.toast.information({
        message: 'information',
        autoClose: false,
      });
      results.push(
        document.querySelector('ix-toast:last-of-type')!.getAttribute('type')!
      );
      await window.toast.danger({ message: 'danger', autoClose: false });
      results.push(
        document.querySelector('ix-toast:last-of-type')!.getAttribute('type')!
      );
      await window.toast.caution({ message: 'caution', autoClose: false });
      results.push(
        document.querySelector('ix-toast:last-of-type')!.getAttribute('type')!
      );
      await window.toast.critical({ message: 'critical', autoClose: false });
      results.push(
        document.querySelector('ix-toast:last-of-type')!.getAttribute('type')!
      );
      return results;
    });

    expect(helpers).toEqual([
      'information',
      'danger',
      'caution',
      'critical',
    ]);
  }
);
