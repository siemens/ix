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
import { toast } from '../toast-utils';
import type { ToastType } from '../toast.types';

declare global {
  interface Window {
    toast: typeof toast;
  }
}

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount('');

  await page.evaluate(async () => {
    await window.toast({
      title: 'Info',
      message: 'This is a toast message',
      autoClose: false,
    });
  });

  const toast = page.getByRole('alert');
  await expect(toast).toHaveAttribute('hydrated');
  await expect(toast).toBeVisible();
  await expect(
    toast.getByRole('button', { name: 'Close toast' })
  ).toBeVisible();
  await expect(toast.locator('.toast-icon')).toHaveAttribute(
    'aria-hidden',
    'true'
  );

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

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

regressionTest(
  'clips the timer bar to the rounded toast corners',
  async ({ mount, page }) => {
    await mount(`
      <ix-toast toast-title="Toast headline" auto-close-delay="100000">
        Lorem ipsum dolor sit amet
      </ix-toast>
    `);

    const toast = page.getByRole('alert');
    await expect(toast).toHaveAttribute('hydrated');
    const bar = toast.locator('.toast-progress-bar');
    await bar.evaluate((element) => {
      element.style.animation = 'none';
      element.style.transform = 'scaleX(1)';
    });

    for (const radius of [null, '12px']) {
      if (radius) {
        await toast.evaluate((element, value) => {
          element.style.setProperty('--ix-toast--border-radius', value);
        }, radius);
      }

      const hits = await bar.evaluate((element) => {
        const root = element.getRootNode();
        if (!(root instanceof ShadowRoot)) {
          throw new Error('The timer bar must be inside the toast shadow root');
        }
        const { left, right, bottom, width, height } =
          element.getBoundingClientRect();
        return {
          bottomLeft:
            root.elementFromPoint(left + 0.5, bottom - 0.5) === element,
          bottomRight:
            root.elementFromPoint(right - 0.5, bottom - 0.5) === element,
          center:
            root.elementFromPoint(left + width / 2, bottom - height / 2) ===
            element,
        };
      });
      expect(hits).toEqual({
        bottomLeft: false,
        bottomRight: false,
        center: true,
      });
    }

    await bar.evaluate((element) => {
      element.style.transform = 'scaleX(0.5)';
    });
    const toastWidth = await toast.evaluate(
      (element) => element.getBoundingClientRect().width
    );
    const barWidth = await bar.evaluate(
      (element) => element.getBoundingClientRect().width
    );
    expect(barWidth).toBe(toastWidth / 2);
  }
);

for (const { type } of toastTypes) {
  regressionTest(
    `aligns the ${type} toast with the design`,
    async ({ mount, page }) => {
      await mount(`
        <ix-toast type="${type}" toast-title="Toast headline" auto-close-delay="100000">
          Lorem ipsum dolor sit amet
        </ix-toast>
      `);

      const toast = page.getByRole('alert');
      await expect(toast).toHaveAttribute('hydrated');
      await toast.evaluate((element: HTMLIxToastElement) => element.pause());

      const title = toast.locator('ix-typography');
      const message = toast.locator('.toast-message');
      const icon = toast.getByTestId('toast-icon');
      await expect(title).toHaveCSS('margin', '0px');
      await expect(toast.locator('.toast-action')).toHaveCSS(
        'margin-top',
        '0px'
      );

      const bounds = await toast.boundingBox();
      expect(bounds).toMatchObject({ width: 320, height: 70 });
      const titleBounds = await title.boundingBox();
      const messageBounds = await message.boundingBox();
      const iconBounds = await icon.boundingBox();
      expect(titleBounds).not.toBeNull();
      expect(messageBounds).not.toBeNull();
      expect(iconBounds).not.toBeNull();
      expect(titleBounds).toMatchObject({
        x: messageBounds?.x,
        y: iconBounds?.y,
      });
      expect(messageBounds?.y).toBe(
        await title.evaluate(
          (element) => element.getBoundingClientRect().bottom
        )
      );

      const strip = await toast.evaluate((element) => {
        const style = getComputedStyle(element, '::before');
        return {
          content: style.content,
          position: style.position,
          width: style.width,
          height: style.height,
          left: style.left,
          pointerEvents: style.pointerEvents,
          zIndex: style.zIndex,
          color: style.backgroundColor,
        };
      });
      expect(strip).toMatchObject({
        content: '""',
        position: 'absolute',
        width: '4px',
        height: '70px',
        left: '0px',
        pointerEvents: 'none',
        zIndex: '1',
        color: await icon.evaluate(
          (element) => getComputedStyle(element).color
        ),
      });
    }
  );
}

regressionTest(
  'uses the shared status color for default icons and the strip',
  async ({ mount, page }) => {
    await mount(`
      <ix-toast toast-title="Toast headline" prevent-auto-close>
        Lorem ipsum dolor sit amet
      </ix-toast>
    `);

    const toast = page.getByRole('alert');
    const icon = toast.getByTestId('toast-icon');
    await expect(toast).toHaveAttribute('hydrated');
    await expect(icon).toHaveJSProperty('color', '--ix-toast-status-color');
    const initialColor = await icon.evaluate(
      (element) => getComputedStyle(element).color
    );

    await toast.evaluate((element) => {
      element.style.setProperty(
        '--ix-toast-status-color',
        'var(--si-sys-color-border-caution)'
      );
    });

    const overriddenColor = await icon.evaluate(
      (element) => getComputedStyle(element).color
    );
    expect(overriddenColor).not.toBe(initialColor);
    expect(
      await toast.evaluate(
        (element) => getComputedStyle(element, '::before').backgroundColor
      )
    ).toBe(overriddenColor);
  }
);

regressionTest(
  'preserves custom icon colors independently of the status strip',
  async ({ mount, page }) => {
    await mount('');
    await page.evaluate(async (customIcon) => {
      await window.toast({
        title: 'Toast headline',
        message: 'Lorem ipsum dolor sit amet',
        type: 'warning',
        icon: customIcon,
        iconColor: '--si-sys-color-border-success',
        autoClose: false,
      });
    }, iconInfo);

    const toast = page.getByRole('alert');
    const icon = toast.getByTestId('toast-icon');
    await expect(toast).toHaveAttribute('hydrated');
    await expect(icon).toHaveJSProperty('name', iconInfo);
    await expect(icon).toHaveJSProperty(
      'color',
      '--si-sys-color-border-success'
    );
    const customColor = await icon.evaluate(
      (element) => getComputedStyle(element).color
    );
    expect(
      await toast.evaluate(
        (element) => getComputedStyle(element, '::before').backgroundColor
      )
    ).not.toBe(customColor);

    await toast.evaluate((element) => {
      element.style.setProperty(
        '--ix-toast-status-color',
        'var(--si-sys-color-border-critical)'
      );
    });
    await expect(icon).toHaveCSS('color', customColor);
  }
);

regressionTest(
  'updates the status strip when the type changes and keeps it when the icon is hidden',
  async ({ mount, page }) => {
    await mount(`
      <ix-toast toast-title="Toast headline" prevent-auto-close>
        Lorem ipsum dolor sit amet
      </ix-toast>
    `);

    const toast = page.getByRole('alert');
    await expect(toast).toHaveAttribute('hydrated');
    const informationColor = await toast.evaluate(
      (element) => getComputedStyle(element, '::before').backgroundColor
    );

    await toast.evaluate((element: HTMLIxToastElement) => {
      element.type = 'warning';
    });
    await expect(toast).toHaveAttribute('type', 'warning');
    const warningColor = await toast
      .getByTestId('toast-icon')
      .evaluate((element) => getComputedStyle(element).color);
    expect(warningColor).not.toBe(informationColor);
    expect(
      await toast.evaluate(
        (element) => getComputedStyle(element, '::before').backgroundColor
      )
    ).toBe(warningColor);

    await toast.evaluate((element: HTMLIxToastElement) => {
      element.hideIcon = true;
    });
    await expect(toast.getByTestId('toast-icon')).toHaveCount(0);
    expect(
      await toast.evaluate(
        (element) => getComputedStyle(element, '::before').backgroundColor
      )
    ).toBe(warningColor);
  }
);

regressionTest(
  'updates action spacing when slotted actions are added and removed',
  async ({ mount, page }) => {
    await mount(`
      <ix-toast toast-title="Toast headline" prevent-auto-close>
        Lorem ipsum dolor sit amet
      </ix-toast>
    `);

    const toast = page.getByRole('alert');
    const action = toast.locator('.toast-action');
    await expect(toast).toHaveAttribute('hydrated');
    await expect(action).toHaveCSS('margin-top', '0px');
    expect(await toast.boundingBox()).toMatchObject({ height: 70 });

    await toast.evaluate((element) => {
      const button = document.createElement('button');
      button.slot = 'action';
      button.textContent = 'Undo';
      element.appendChild(button);
    });

    await expect(toast.getByRole('button', { name: 'Undo' })).toBeVisible();
    await expect(action).toHaveCSS('margin-top', '8px');

    await toast.getByRole('button', { name: 'Undo' }).evaluate((button) => {
      button.remove();
    });

    await expect(action).toHaveCSS('margin-top', '0px');
    expect(await toast.boundingBox()).toMatchObject({ height: 70 });
  }
);

for (const hideIcon of [false, true]) {
  regressionTest(
    `keeps wrapped content aligned with hideIcon=${hideIcon}`,
    async ({ mount, page }) => {
      await mount(`
        <ix-toast toast-title="ThisIsAVeryLongToastHeadlineWithoutAnySpacesThatShouldWrap"
          prevent-auto-close ${hideIcon ? 'hide-icon' : ''}>
          ThisIsAVeryLongToastMessageWithoutAnySpacesThatShouldWrap
        </ix-toast>
      `);

      const toast = page.getByRole('alert');
      await expect(toast).toHaveAttribute('hydrated');
      await expect(toast.getByTestId('toast-icon')).toHaveCount(
        hideIcon ? 0 : 1
      );
      const title = toast.locator('ix-typography');
      const message = toast.locator('.toast-message');
      const titleBounds = await title.boundingBox();
      const messageBounds = await message.boundingBox();
      expect(titleBounds).toMatchObject({ x: messageBounds?.x });
      expect(
        await toast.evaluate((element) => element.clientHeight)
      ).toBeGreaterThan(70);
      for (const content of [title, message]) {
        expect(
          await content.evaluate(
            (element) => element.scrollWidth <= element.clientWidth
          )
        ).toBe(true);
      }
    }
  );
}

regressionTest('respects compact density', async ({ mount, page }) => {
  await mount(`
    <ix-toast toast-title="Toast headline" prevent-auto-close>
      Lorem ipsum dolor sit amet
    </ix-toast>
  `);
  await page.evaluate(() => {
    document.body.setAttribute('data-ix-density', 'compact');
  });

  const toast = page.getByRole('alert');
  await expect(toast).toHaveAttribute('hydrated');
  await expect(toast).toHaveCSS('max-width', '240px');
  expect(await toast.boundingBox()).toMatchObject({ width: 240, height: 52 });
  const titleBounds = await toast.locator('ix-typography').boundingBox();
  const messageBounds = await toast.locator('.toast-message').boundingBox();
  expect(titleBounds).toMatchObject({ x: messageBounds?.x });
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

    await page.evaluate(async () => {
      await window.toast.information({
        message: 'information',
        autoClose: false,
      });
    });
    await expect(page.locator('ix-toast').last()).toHaveAttribute(
      'type',
      'information'
    );

    await page.evaluate(async () => {
      await window.toast.danger({ message: 'danger', autoClose: false });
    });
    await expect(page.locator('ix-toast').last()).toHaveAttribute(
      'type',
      'danger'
    );

    await page.evaluate(async () => {
      await window.toast.caution({ message: 'caution', autoClose: false });
    });
    await expect(page.locator('ix-toast').last()).toHaveAttribute(
      'type',
      'caution'
    );

    await page.evaluate(async () => {
      await window.toast.critical({ message: 'critical', autoClose: false });
    });
    await expect(page.locator('ix-toast').last()).toHaveAttribute(
      'type',
      'critical'
    );
  }
);
