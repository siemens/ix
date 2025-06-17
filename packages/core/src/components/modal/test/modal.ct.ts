/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';
import { dismissModal, ModalInstance, showModal } from './../../utils/modal';
import {
  iconError,
  iconInfo,
  iconQuestion,
  iconSuccess,
  iconWarning,
} from '@siemens/ix-icons/icons';

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

        window.showMessage = ix.showMessage;
        window.showMessage.info = ix.showMessage.info;
        window.showMessage.error = ix.showMessage.error;
        window.showMessage.success = ix.showMessage.success;
        window.showMessage.question = ix.showMessage.question;
      `;
      document.getElementById('mount')?.appendChild(script);
      resolve();
    });
  });

  await page.waitForTimeout(500);
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

regressionTest('closes on Escape key down', async ({ mount, page }) => {
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

regressionTest.describe('closeOnBackdropClick = true', () => {
  regressionTest(
    'should close modal on backdrop click',
    async ({ mount, page }) => {
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
    }
  );
  regressionTest(
    'should not close modal when mouse is held down inside modal and released outside',
    async ({ mount, page }) => {
      await mount(`<ix-button>Some background noise</ix-button>`);

      await setupModalEnvironment(page);
      await createToggleExample(page);

      // Wait for modal to appear
      await page.waitForTimeout(500);

      const modalDialog = page.locator('ix-modal dialog');
      await expect(modalDialog).toBeVisible();

      // Get bounding box of the modal to find a point inside it
      const box = await modalDialog.boundingBox();
      if (!box) throw new Error('Modal bounding box not found');

      const insideX = box.x + box.width / 2;
      const insideY = box.y + box.height / 2;

      // Simulate mouse down inside modal
      await page.mouse.move(insideX, insideY);
      await page.mouse.down();

      // Simulate mouse up outside modal
      await page.mouse.move(20, 20);
      await page.mouse.up();

      // Wait for any animations
      await page.waitForTimeout(500);

      // Modal should still be visible
      await expect(modalDialog).toBeVisible();
    }
  );


  regressionTest(
    'should stay open after interacting with input elements',
    async ({ mount, page }) => {
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
    }
  );
});

regressionTest('emits one event on close', async ({ mount, page }) => {
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

regressionTest('button receives focus on load', async ({ mount, page }) => {
  await mount('');
  await setupModalEnvironment(page);
  await page.waitForTimeout(100);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-footer>
        <ix-button autofocus>OK</ix-button>
      </ix-modal-footer>
    `;
    window.showModal({
      content: elm,
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

regressionTest.describe('message utils', () => {
  [
    ['info', iconInfo],
    ['error', iconError],
    ['warning', iconWarning],
    ['success', iconSuccess],
    ['question', iconQuestion],
  ].forEach(([name, svgData]) => {
    regressionTest(`${name} message`, async ({ mount, page }) => {
      await mount(``);
      await page.evaluate(
        async ([svg]) => {
          const icon = document.createElement('ix-icon');
          icon.setAttribute('name', svg);
          icon.style.position = 'absolute';
          icon.style.top = '0px';
          icon.style.left = '0px';
          icon.setAttribute('data-testid', 'test-icon');
          document.body.appendChild(icon);
          await icon.componentOnReady();
        },
        [svgData]
      );

      await setupModalEnvironment(page);
      await page.evaluate(
        ([functionName]) => {
          (window.showMessage as any)[functionName]('title', 'message', 'okay');
        },
        [name]
      );

      const dialog = page.locator('ix-modal-header');
      await page.waitForTimeout(500);
      await expect(dialog).toBeVisible();

      const icon = dialog.locator('ix-icon').first();
      await expect(icon).toBeVisible();

      await expect(page.getByTestId('test-icon')).toBeVisible();
      await page.waitForTimeout(500);

      const expectedIconText = await page
        .getByTestId('test-icon')
        .locator('.svg-container')
        .innerHTML();

      const messageIconText = await icon.locator('.svg-container').innerHTML();
      expect(messageIconText).toEqual(expectedIconText);
    });
  });
});
