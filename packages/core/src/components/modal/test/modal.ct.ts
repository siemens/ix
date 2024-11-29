/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Page } from '@playwright/test';
import { test } from '@utils/test';
import { dismissModal, ModalInstance, showModal } from './../../utils/modal';

declare global {
  interface Window {
    dismissModal: typeof dismissModal;
    showModal: typeof showModal;
    __counter: number;
  }
}

async function setupModalEnvironment(page: Page) {
  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import * as ix from 'http://127.0.0.1:8080/www/build/index.esm.js';
        window.showModal = ix.showModal;
        window.dismissModal = ix.dismissModal;
      `;
      document.getElementById('mount')?.appendChild(script);
      resolve();
    });
  });
}

async function createToggleExample(page: Page) {
  await page.evaluate(() => {
    function createModalExample() {
      const el = document.createElement('DIV');
      el.style.display = 'contents';
      el.innerHTML = `<ix-toggle id="toggle"></ix-toggle>`;
      return el;
    }

    setTimeout(() => {
      window.showModal({
        content: createModalExample(),
        closeOnBackdropClick: true,
      });
    }, 2000);
  });
}

test('closes on Escape key down', async ({ mount, page }) => {
  await mount(``);
  await setupModalEnvironment(page);
  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
    window.showModal({
      content: elm,
    });
  });
  const dialog = page.locator('ix-modal dialog');
  await expect(dialog).toBeVisible();
  await page.locator('ix-modal-content').click();
  await page.keyboard.down('Escape');

  await expect(dialog).not.toBeVisible();
});

test.describe('closeOnBackdropClick = true', () => {
  test('should close modal on backdrop click', async ({ mount, page }) => {
    await mount(`
      <ix-button>Some background noise</ix-button>
    `);

    await setupModalEnvironment(page);
    await createToggleExample(page);

    // needed to skip fade out / in animation
    await page.waitForTimeout(500);

    const toggle = page.locator('#toggle');
    await expect(toggle).toBeVisible();

    await page.mouse.click(20, 20);

    // needed to skip fade out / in animation
    await page.waitForTimeout(500);
    await expect(page.locator('ix-modal dialog')).not.toBeVisible();
  });

  test('should stay open after interacting with input elements', async ({
    mount,
    page,
  }) => {
    await mount(`
      <ix-button>Some background noise</ix-button>
    `);

    await setupModalEnvironment(page);
    await createToggleExample(page);

    // needed to skip fade out / in animation
    await page.waitForTimeout(500);

    const toggle = page.locator('#toggle');
    await expect(toggle).toBeVisible();

    await toggle.locator('input').press('Space');

    // needed to skip fade out / in animation
    await page.waitForTimeout(500);
    await expect(page.locator('ix-modal dialog')).toBeVisible();
  });
});

test('emits one event on close', async ({ mount, page }) => {
  await mount(``);

  await setupModalEnvironment(page);
  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;

    window
      .showModal({
        content: elm,
        // Disable animation to get the direct animation end callback
        animation: false,
      })
      .then((instance: ModalInstance<unknown>) => {
        instance.onDismiss.on(() => {
          const counter = window.__counter;
          if (counter) {
            window.__counter = counter + 1;
          } else {
            window.__counter = 1;
          }
        });
      });
  });
  const dialog = page.locator('ix-modal dialog');
  await expect(dialog).toBeVisible();
  const iconButton = page.locator('ix-icon-button');

  await iconButton.click();
  await expect(dialog).not.toBeVisible();

  expect(await page.evaluate(() => window.__counter)).toBe(1);
});

test('button receives focus on load', async ({ mount, page }) => {
  await mount('');
  await setupModalEnvironment(page);
  await page.waitForTimeout(100);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-footer>
        <ix-button autofocused>OK</ix-button>
      </ix-modal-footer>
    `;
    window.showModal({
      content: elm,
      autofocus: true,
    });
    const okButton = elm.querySelector('ix-button');
    okButton?.addEventListener('click', () => {
      window.dismissModal(elm);
    });
  });

  await page.waitForTimeout(250);
  const dialog = page.locator('ix-modal dialog');
  await expect(dialog).toBeVisible();

  await page.keyboard.press('Enter');

  await expect(dialog).not.toBeVisible();
});
