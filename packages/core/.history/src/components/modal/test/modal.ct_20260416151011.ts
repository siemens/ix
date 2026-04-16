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
import {
  dismissModal as dismissModalFromIx,
  showModal as showModalFromIx,
  type ModalInstance,
} from './../../utils/modal';
import {
  iconError,
  iconInfo,
  iconQuestion,
  iconSuccess,
  iconWarning,
} from '@siemens/ix-icons/icons';

declare global {
  var dismissModal: typeof dismissModalFromIx;
  var showModal: typeof showModalFromIx;
  var showMessage: any;
  var __counter: number;
  var __nbBgClick: boolean | undefined;
}

async function setupModalEnvironment(page: Page) {
  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import * as ix from 'http://127.0.0.1:8080/www/build/index.esm.js';
        globalThis.showModal = ix.showModal;
        globalThis.dismissModal = ix.dismissModal;

        globalThis.showMessage = ix.showMessage;
        globalThis.showMessage.info = ix.showMessage.info;
        globalThis.showMessage.error = ix.showMessage.error;
        globalThis.showMessage.success = ix.showMessage.success;
        globalThis.showMessage.question = ix.showMessage.question;
      `;
      document.getElementById('mount')?.appendChild(script);
      resolve();
    });
  });

  await page.waitForFunction(
    () =>
      typeof globalThis.showModal === 'function' &&
      typeof globalThis.dismissModal === 'function' &&
      globalThis.showMessage != null,
    { timeout: 15_000 }
  );
}

// Native `<dialog>` inside the modal (single dialog per test in this file).
function modalPanel(page: Page) {
  return page.getByRole('dialog');
}

async function waitForModalDialogOpen(page: Page) {
  const panel = modalPanel(page);
  await expect(panel).toBeVisible({ timeout: 5000 });
  await expect(panel).toHaveClass(/modal-open-settled/, { timeout: 5000 });
}

async function createToggleExample(page: Page) {
  await page.evaluate(() => {
    function createModalExample() {
      const el = document.createElement('DIV');
      el.style.display = 'contents';
      el.innerHTML = `<ix-toggle id="toggle" aria-label="Toggle"></ix-toggle>`;
      return el;
    }

    setTimeout(() => {
      globalThis.showModal({
        content: createModalExample(),
        closeOnBackdropClick: true,
      });
    }, 2000);
  });
}

async function createSelectOverflowExample(page: Page) {
  await page.evaluate(() => {
    const modal = document.createElement('ix-modal');
    modal.setAttribute('size', '360');

    const content = document.createElement('ix-modal-content');
    content.innerHTML = '<div style="height: 12rem;"></div>';

    const select = document.createElement('ix-select');
    select.setAttribute('id', 'overflow-select');
    select.style.width = '100%';

    for (let i = 1; i <= 20; i++) {
      const item = document.createElement('ix-select-item');
      item.setAttribute('value', `${i}`);
      item.setAttribute('label', `Item ${i}`);
      select.appendChild(item);
    }

    content.appendChild(select);

    modal.appendChild(content);

    globalThis.showModal({
      content: modal,
      closeOnBackdropClick: true,
      animation: false,
    });
  });
}

regressionTest('closes on Escape key down', async ({ mount, page }) => {
  await mount(``);
  await setupModalEnvironment(page);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
    globalThis.showModal({
      content: elm,
    });
  });
  const dialog = modalPanel(page);
  await waitForModalDialogOpen(page);
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

      const toggle = page.locator('#toggle');
      await expect(toggle).toBeVisible();
      await waitForModalDialogOpen(page);

      await page.mouse.click(20, 20);

      await expect(modalPanel(page)).not.toBeVisible();
    }
  );

  regressionTest(
    'should not close modal when mouse is held down inside modal and released outside modal',
    async ({ mount, page }) => {
      await mount(`<ix-button>Some background noise</ix-button>`);

      await setupModalEnvironment(page);
      await createToggleExample(page);

      const modalDialog = modalPanel(page);
      const toggle = page.locator('#toggle');
      await expect(toggle).toBeVisible();
      await waitForModalDialogOpen(page);

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

      // Modal should still be visible
      await expect(modalDialog).toBeVisible();
    }
  );

  regressionTest(
    'should not close modal when mouse is held down ouside modal and released inside modal',
    async ({ mount, page }) => {
      await mount(`<ix-button>Some background noise</ix-button>`);

      await setupModalEnvironment(page);
      await createToggleExample(page);

      const modalDialog = modalPanel(page);
      await waitForModalDialogOpen(page);

      // Get bounding box of the modal to find a point inside it
      const box = await modalDialog.boundingBox();
      if (!box) throw new Error('Modal bounding box not found');

      const insideX = box.x + box.width / 2;
      const insideY = box.y + box.height / 2;

      // Simulate mouse down outside modal
      await page.mouse.move(20, 20);
      await page.mouse.down();

      // Simulate mouse up inside modal
      await page.mouse.move(insideX, insideY);
      await page.mouse.up();

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

      const toggle = page.locator('#toggle');
      await expect(toggle).toBeVisible();
      await waitForModalDialogOpen(page);

      await toggle.focus();
      await toggle.press('Space');

      await expect(modalPanel(page)).toBeVisible();
    }
  );

  regressionTest(
    'should stay open when selecting ix-select dropdown item outside modal bounds',
    async ({ mount, page }) => {
      await mount(`<ix-button>Some background noise</ix-button>`);

      await setupModalEnvironment(page);
      await createSelectOverflowExample(page);

      const modalDialog = modalPanel(page);
      await waitForModalDialogOpen(page);

      await page.locator('[data-select-dropdown]').click();

      const dropdownItem = page.getByRole('option', {
        name: 'Item 1',
        exact: true,
      });
      await expect(dropdownItem).toBeVisible();

      const modalBox = await modalDialog.boundingBox();
      const itemBox = await dropdownItem.boundingBox();

      if (!modalBox || !itemBox) {
        throw new Error('Could not resolve bounds for modal or dropdown item');
      }

      expect(itemBox.y + itemBox.height / 2).toBeGreaterThan(
        modalBox.y + modalBox.height
      );

      await dropdownItem.click();

      await expect(modalDialog).toBeVisible();
    }
  );
});

regressionTest.describe('isNonBlocking', () => {
  regressionTest(
    'showModal config should set non-blocking mode',
    async ({ mount, page }) => {
      await mount(``);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      await waitForModalDialogOpen(page);
      await expect(page.locator('ix-modal')).toHaveClass(/non-blocking/);
      await expect(modalPanel(page)).toHaveAttribute('aria-modal', 'false');
    }
  );

  regressionTest(
    'non-blocking modal should not close on backdrop click',
    async ({ mount, page }) => {
      await mount(`<ix-button>Background</ix-button>`);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          closeOnBackdropClick: true,
          animation: false,
        });
      });

      const dialog = modalPanel(page);
      await waitForModalDialogOpen(page);

      await page.mouse.click(20, 20);
      await expect(dialog).toBeVisible();
    }
  );

  regressionTest(
    'non-blocking modal should allow clicking content behind the dialog',
    async ({ mount, page }) => {
      await mount(`<ix-button id="bg">Behind</ix-button>`);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        document.getElementById('bg')?.addEventListener('click', () => {
          globalThis.__nbBgClick = true;
        });
      });

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      await waitForModalDialogOpen(page);
      await page.locator('#bg').click();
      expect(await page.evaluate(() => globalThis.__nbBgClick)).toBe(true);
      await expect(modalPanel(page)).toBeVisible();
    }
  );

  regressionTest(
    'non-blocking modal should close when header close button is pressed',
    async ({ mount, page }) => {
      await mount(``);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      const dialog = modalPanel(page);
      await waitForModalDialogOpen(page);
      await page.locator('ix-icon-button').click();
      await expect(dialog).not.toBeVisible();
    }
  );

  regressionTest(
    'non-blocking modal should close when dismissModal is called',
    async ({ mount, page }) => {
      await mount(``);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      const dialog = modalPanel(page);
      await waitForModalDialogOpen(page);

      await page.evaluate(() => {
        const modal = document.querySelector('ix-modal');
        if (modal) {
          globalThis.dismissModal(modal);
        }
      });

      await expect(dialog).not.toBeVisible();
    }
  );

  regressionTest(
    'non-blocking modal should move initial focus inside the panel',
    async ({ mount, page }) => {
      await mount(``);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
      <ix-modal-footer>
        <ix-button autofocus>OK</ix-button>
      </ix-modal-footer>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      await waitForModalDialogOpen(page);
      await expect(page.getByRole('button', { name: 'OK' })).toBeFocused({
        timeout: 5000,
      });
    }
  );

  regressionTest(
    'non-blocking modal should allow moving focus outside the dialog',
    async ({ mount, page }) => {
      await mount(`<ix-button id="behind">Behind</ix-button>`);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      await waitForModalDialogOpen(page);
      await page.evaluate(() => {
        document.getElementById('behind')?.focus();
      });
      await expect(page.locator('#behind')).toBeFocused();
      await expect(modalPanel(page)).toBeVisible();
    }
  );

  regressionTest(
    'non-blocking modal should close on Escape when focus is inside',
    async ({ mount, page }) => {
      await mount(``);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      await waitForModalDialogOpen(page);
      await page.locator('ix-modal ix-icon-button.modal-close').focus();
      await page.keyboard.press('Escape');
      await expect(modalPanel(page)).not.toBeVisible();
    }
  );

  regressionTest(
    'non-blocking modal should not close on Escape when beforeDismiss returns false',
    async ({ mount, page }) => {
      await mount(``);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.beforeDismiss = () => false;
        elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          isNonBlocking: true,
          animation: false,
        });
      });

      await waitForModalDialogOpen(page);
      await page.locator('ix-modal ix-icon-button.modal-close').focus();
      await page.keyboard.press('Escape');
      await expect(modalPanel(page)).toBeVisible();
    }
  );

  regressionTest(
    'non-blocking modal accessibility',
    async ({ mount, page, makeAxeBuilder }) => {
      await mount(`<main></main>`);
      await setupModalEnvironment(page);

      await page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.isNonBlocking = true;
        elm.setAttribute('aria-labelledby', 'nb-axe-title');
        elm.innerHTML = `
      <ix-modal-header id="nb-axe-title">Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
        globalThis.showModal({
          content: elm,
          animation: false,
        });
      });

      await waitForModalDialogOpen(page);
      const accessibilityScanResults = await makeAxeBuilder().analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    }
  );
});

regressionTest('emits one event on close', async ({ mount, page }) => {
  await mount(``);

  await setupModalEnvironment(page);
  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;

    globalThis
      .showModal({
        content: elm,
        // Disable animation to get the direct animation end callback
        animation: false,
      })
      .then((instance: ModalInstance<unknown>) => {
        instance.onDismiss.on(() => {
          const counter = globalThis.__counter;
          if (counter) {
            globalThis.__counter = counter + 1;
          } else {
            globalThis.__counter = 1;
          }
        });
      });
  });
  const dialog = modalPanel(page);
  await waitForModalDialogOpen(page);
  const iconButton = page.locator('ix-icon-button');

  await iconButton.click();
  await expect(dialog).not.toBeVisible();

  expect(await page.evaluate(() => globalThis.__counter)).toBe(1);
});

regressionTest('button receives focus on load', async ({ mount, page }) => {
  await mount('');
  await setupModalEnvironment(page);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-footer>
        <ix-button autofocus>OK</ix-button>
      </ix-modal-footer>
    `;
    globalThis.showModal({
      content: elm,
    });
    const okButton = elm.querySelector('ix-button');
    okButton?.addEventListener('click', () => {
      globalThis.dismissModal(elm);
    });
  });

  const dialog = modalPanel(page);
  await waitForModalDialogOpen(page);
  await expect(page.getByRole('button', { name: 'OK' })).toBeFocused({
    timeout: 5000,
  });

  await page.keyboard.press('Enter');

  await expect(dialog).not.toBeVisible();
});

regressionTest(
  'modal-header autofocus delegates focus to close button',
  async ({ mount, page }) => {
    await mount('');
    await setupModalEnvironment(page);

    await page.evaluate(() => {
      const elm = document.createElement('ix-modal');
      elm.innerHTML = `
      <ix-modal-header autofocus>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-content>
    `;
      globalThis.showModal({
        content: elm,
        animation: false,
      });
    });

    await waitForModalDialogOpen(page);
    await expect(page.getByRole('button', { name: 'Close modal' })).toBeFocused(
      { timeout: 5000 }
    );
  }
);

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
          globalThis.showMessage[functionName]('title', 'message', 'okay');
        },
        [name]
      );

      const dialog = page.locator('ix-modal-header');
      await expect(dialog).toBeVisible();

      const icon = dialog.locator('ix-icon').first();
      await expect(icon).toBeVisible();

      await expect(page.getByTestId('test-icon')).toBeVisible();

      const expectedIconText = await page
        .getByTestId('test-icon')
        .locator('.svg-container')
        .innerHTML();

      const messageIconText = await icon.locator('.svg-container').innerHTML();
      expect(messageIconText).toEqual(expectedIconText);
    });
  });
});

regressionTest(
  'centered modal should remain centered after reopening',
  async ({ mount, page }) => {
    await mount(``);
    await setupModalEnvironment(page);

    const positionTolerance = 5;
    const dialog = modalPanel(page);

    const openCenteredModal = () =>
      page.evaluate(() => {
        const elm = document.createElement('ix-modal');
        elm.innerHTML = `<div>hi</div>`;
        globalThis.showModal({
          content: elm,
          centered: true,
        });
      });

    const dismissCurrentModal = () =>
      page.evaluate(() => {
        const modal = document.querySelector('ix-modal');
        if (modal) {
          globalThis.dismissModal(modal);
        }
      });

    const getModalCenterX = async () => {
      const box = await dialog.boundingBox();
      if (!box) {
        throw new Error('Modal dialog bounding box not found');
      }
      return box.x + box.width / 2;
    };

    await openCenteredModal();
    await expect(dialog).toBeVisible();
    const initialCenterX = await getModalCenterX();

    await dismissCurrentModal();
    await expect(dialog).not.toBeVisible();

    await openCenteredModal();
    await expect(dialog).toBeVisible();
    const reopenCenterX = await getModalCenterX();

    expect(Math.abs(reopenCenterX - initialCenterX)).toBeLessThanOrEqual(
      positionTolerance
    );
  }
);
