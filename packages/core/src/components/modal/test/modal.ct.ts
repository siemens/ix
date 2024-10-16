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

declare global {
  interface Window {
    showModal: any;
  }
}

regressionTest('closes on Escape key down', async ({ mount, page }) => {
  await mount(``);

  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import * as ix from 'http://127.0.0.1:8080/www/build/index.esm.js';
        window.showModal = ix.showModal;
      `;
      document.body.appendChild(script);
      resolve();
    });
  });

  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-header>
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

regressionTest.describe('closeOnBackdropClick = true', () => {
  regressionTest(
    'should close modal on backdrop click',
    async ({ mount, page }) => {
      await mount(`
      <ix-button>Some background noise</ix-button>
    `);

      await page.evaluate(() => {
        return new Promise<void>((resolve) => {
          const script = document.createElement('script');
          script.type = 'module';
          script.innerHTML = `
          import * as ix from 'http://127.0.0.1:8080/www/build/index.esm.js';
          window.showModal = ix.showModal;
        `;

          document.getElementById('mount').appendChild(script);

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

            resolve();
          }, 2000);
        });
      });

      // needed to skip fade out / in animation
      await page.waitForTimeout(500);

      const toggle = page.locator('#toggle');
      await expect(toggle).toBeVisible();

      await page.mouse.click(20, 20);

      // needed to skip fade out / in animation
      await page.waitForTimeout(500);
      await expect(page.locator('ix-modal dialog')).not.toBeVisible();
    }
  );

  regressionTest(
    'should stay open after interacting with input elements',
    async ({ mount, page }) => {
      await mount(`
      <ix-button>Some background noise</ix-button>
    `);

      await page.evaluate(() => {
        return new Promise<void>((resolve) => {
          const script = document.createElement('script');
          script.type = 'module';
          script.innerHTML = `
          import * as ix from 'http://127.0.0.1:8080/www/build/index.esm.js';
          window.showModal = ix.showModal;
        `;

          document.getElementById('mount').appendChild(script);

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

            resolve();
          }, 2000);
        });
      });

      // needed to skip fade out / in animation
      await page.waitForTimeout(500);

      const toggle = page.locator('#toggle');
      await expect(toggle).toBeVisible();

      await toggle.locator('input').press('Space');

      // needed to skip fade out / in animation
      await page.waitForTimeout(500);
      await expect(page.locator('ix-modal dialog')).toBeVisible();
    }
  );
});
