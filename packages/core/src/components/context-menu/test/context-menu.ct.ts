/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Locator, Page } from '@playwright/test';
import { regressionTest, expect } from '@utils/test';

const html = String.raw;

const fixture = (contextMenuAttributes = '') => html`
  <style>
    #area {
      position: fixed;
      inset: 0;
    }
  </style>
  <div id="area">
    <ix-context-menu ${contextMenuAttributes}>
      <ix-dropdown-item label="Copy"></ix-dropdown-item>
      <ix-dropdown-item label="Paste"></ix-dropdown-item>
      <ix-dropdown-item label="Delete"></ix-dropdown-item>
    </ix-context-menu>
  </div>
`;

const getMenu = (page: Page) => page.getByRole('menu');

async function mountFixture(
  mount: (html: string) => Promise<unknown>,
  page: Page,
  contextMenuAttributes = ''
) {
  await mount(fixture(contextMenuAttributes));
  await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');
}

function recordNativeContextMenuPrevented(page: Page) {
  return page.evaluate(() =>
    window.addEventListener('contextmenu', (event) =>
      setTimeout(() => {
        document.body.dataset.nativePrevented = String(event.defaultPrevented);
      })
    )
  );
}

async function expectTopLeftAt(locator: Locator, x: number, y: number) {
  await expect(async () => {
    const box = await locator.boundingBox();
    if (!box) {
      throw new Error('Expected bounding box');
    }
    expect(Math.round(box.x)).toBe(x);
    expect(Math.round(box.y)).toBe(y);
  }).toPass({ timeout: 2000 });
}

regressionTest('renders', async ({ mount, page }) => {
  await mountFixture(mount, page);

  await expect(getMenu(page)).toBeHidden();

  await page.mouse.click(100, 100, { button: 'right' });

  await expect(getMenu(page)).toBeVisible();
  await expect(page.getByRole('menuitem')).toHaveCount(3);
});

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mountFixture(mount, page);
  // Set as property, axe reports `aria-label-*` attributes as invalid ARIA attributes
  await page
    .locator('ix-context-menu')
    .evaluate((element: HTMLIxContextMenuElement) => {
      element.ariaLabelMenu = 'File actions';
    });

  await page.mouse.click(100, 100, { button: 'right' });
  await expect(getMenu(page)).toBeVisible();
  await expect(getMenu(page)).toHaveAccessibleName('File actions');
  await expect(getMenu(page)).not.toHaveAttribute('aria-modal');

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest.describe('open', () => {
  regressionTest(
    'opens at the pointer and prevents the native context menu',
    async ({ mount, page }) => {
      await mountFixture(mount, page);

      await recordNativeContextMenuPrevented(page);

      await page.mouse.click(120, 80, { button: 'right' });

      await expect(page.locator('body')).toHaveAttribute(
        'data-native-prevented',
        'true'
      );
      await expectTopLeftAt(getMenu(page), 120, 80);
    }
  );

  regressionTest(
    'moves to the new position on another right-click on the target',
    async ({ mount, page }) => {
      await mountFixture(mount, page);

      await page.mouse.click(100, 100, { button: 'right' });
      await expectTopLeftAt(getMenu(page), 100, 100);

      await page.mouse.click(300, 200, { button: 'right' });
      await expect(getMenu(page)).toBeVisible();
      await expectTopLeftAt(getMenu(page), 300, 200);
    }
  );

  regressionTest('target by id', async ({ mount, page }) => {
    await mount(html`
      <div id="file" style="width: 200px; height: 100px">File</div>
      <div id="other" style="width: 200px; height: 100px">Other</div>
      <ix-context-menu target="file">
        <ix-dropdown-item label="Open"></ix-dropdown-item>
      </ix-context-menu>
    `);
    await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');

    await page.getByText('Other').click({ button: 'right' });
    await expect(getMenu(page)).toBeHidden();

    await page.getByText('File').click({ button: 'right' });
    await expect(getMenu(page)).toBeVisible();
  });

  regressionTest('target change', async ({ mount, page }) => {
    await mount(html`
      <div id="first" style="width: 200px; height: 100px">First</div>
      <div id="second" style="width: 200px; height: 100px">Second</div>
      <ix-context-menu target="first">
        <ix-dropdown-item label="Open"></ix-dropdown-item>
      </ix-context-menu>
    `);
    const contextMenu = page.locator('ix-context-menu');
    await expect(contextMenu).toHaveAttribute('hydrated');

    await contextMenu.evaluate((element: HTMLIxContextMenuElement) => {
      element.target = 'second';
    });

    await expect(async () => {
      await page.getByText('First').click({ button: 'right' });
      await expect(getMenu(page)).toBeHidden();
      await page.getByText('Second').click({ button: 'right' });
      await expect(getMenu(page)).toBeVisible({ timeout: 500 });
    }).toPass({ timeout: 3000 });
  });

  regressionTest(
    'disabled shows the native context menu',
    async ({ mount, page }) => {
      await mountFixture(mount, page, 'disabled');

      await recordNativeContextMenuPrevented(page);

      await page.mouse.click(100, 100, { button: 'right' });

      await expect(page.locator('body')).toHaveAttribute(
        'data-native-prevented',
        'false'
      );
      await expect(getMenu(page)).toBeHidden();
    }
  );

  regressionTest(
    'preventing contextMenuOpen keeps the menu closed',
    async ({ mount, page }) => {
      await mountFixture(mount, page);

      await page.locator('ix-context-menu').evaluate((element) =>
        element.addEventListener('contextMenuOpen', (event) => {
          event.preventDefault();
          const { target, originalEvent } = (event as CustomEvent).detail;
          document.body.dataset.openDetail = `${target.id}:${originalEvent.type}`;
        })
      );

      await page.mouse.click(100, 100, { button: 'right' });

      await expect(page.locator('body')).toHaveAttribute(
        'data-open-detail',
        'area:contextmenu'
      );
      await expect(getMenu(page)).toBeHidden();
    }
  );

  regressionTest('showAt method', async ({ mount, page }) => {
    await mountFixture(mount, page);

    await page
      .locator('ix-context-menu')
      .evaluate((element: HTMLIxContextMenuElement) => element.showAt(150, 60));

    await expectTopLeftAt(getMenu(page), 150, 60);
  });

  regressionTest(
    'only the innermost context menu opens for nested targets',
    async ({ mount, page }) => {
      await mount(html`
        <div id="outer" style="width: 400px; height: 300px">
          <div id="inner" style="width: 200px; height: 100px">Inner</div>
          <ix-context-menu id="outer-menu">
            <ix-dropdown-item label="Outer action"></ix-dropdown-item>
          </ix-context-menu>
          <ix-context-menu id="inner-menu" target="inner">
            <ix-dropdown-item label="Inner action"></ix-dropdown-item>
          </ix-context-menu>
        </div>
      `);
      await expect(page.locator('#outer-menu')).toHaveAttribute('hydrated');
      await expect(page.locator('#inner-menu')).toHaveAttribute('hydrated');

      await page.getByText('Inner', { exact: true }).click({ button: 'right' });
      await expect(
        page.getByRole('menuitem', { name: 'Inner action' })
      ).toBeVisible();
      await expect(
        page.getByRole('menuitem', { name: 'Outer action' })
      ).toBeHidden();

      await page.mouse.click(300, 250, { button: 'right' });
      await expect(
        page.getByRole('menuitem', { name: 'Outer action' })
      ).toBeVisible();
      await expect(
        page.getByRole('menuitem', { name: 'Inner action' })
      ).toBeHidden();
    }
  );
});

regressionTest.describe('close', () => {
  regressionTest('on item click', async ({ mount, page }) => {
    await mountFixture(mount, page);

    const itemClick = page.getByRole('menuitem', { name: 'Paste' }).evaluate(
      (element) =>
        new Promise<void>((resolve) =>
          element.addEventListener('itemClick', () => resolve(), {
            once: true,
          })
        )
    );

    await page.mouse.click(100, 100, { button: 'right' });
    await page.getByRole('menuitem', { name: 'Paste' }).click();

    await itemClick;
    await expect(getMenu(page)).toBeHidden();
  });

  regressionTest('on outside click', async ({ mount, page }) => {
    await mountFixture(mount, page);

    await page.mouse.click(100, 100, { button: 'right' });
    await expect(getMenu(page)).toBeVisible();

    await page.mouse.click(500, 400);
    await expect(getMenu(page)).toBeHidden();
  });

  regressionTest(
    'on right-click outside the target',
    async ({ mount, page }) => {
      await mount(html`
        <div id="file" style="width: 200px; height: 100px">File</div>
        <ix-context-menu target="file">
          <ix-dropdown-item label="Open"></ix-dropdown-item>
        </ix-context-menu>
      `);
      await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');

      await page.getByText('File').click({ button: 'right' });
      await expect(getMenu(page)).toBeVisible();

      await page.mouse.click(500, 400, { button: 'right' });
      await expect(getMenu(page)).toBeHidden();
    }
  );

  regressionTest(
    'right-click inside the menu keeps it open',
    async ({ mount, page }) => {
      await mountFixture(mount, page);

      await page.mouse.click(100, 100, { button: 'right' });
      await page
        .getByRole('menuitem', { name: 'Paste' })
        .click({ button: 'right' });

      await expect(getMenu(page)).toBeVisible();
      await expectTopLeftAt(getMenu(page), 100, 100);
    }
  );

  regressionTest('on scroll', async ({ mount, page }) => {
    await mount(html`
      <div id="scroller" style="height: 200px; overflow: auto">
        <div id="file" style="height: 1000px">File</div>
      </div>
      <ix-context-menu target="file">
        <ix-dropdown-item label="Open"></ix-dropdown-item>
      </ix-context-menu>
    `);
    await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');

    await page.getByText('File').click({ button: 'right' });
    await expect(getMenu(page)).toBeVisible();

    await page.locator('#scroller').evaluate((element) => {
      element.scrollTop = 100;
    });
    await expect(getMenu(page)).toBeHidden();
  });

  regressionTest('on window resize', async ({ mount, page }) => {
    await mountFixture(mount, page);

    await page.mouse.click(100, 100, { button: 'right' });
    await expect(getMenu(page)).toBeVisible();

    await page.evaluate(() => window.dispatchEvent(new Event('resize')));
    await expect(getMenu(page)).toBeHidden();
  });

  regressionTest('on window blur', async ({ mount, page }) => {
    await mountFixture(mount, page);

    await page.mouse.click(100, 100, { button: 'right' });
    await expect(getMenu(page)).toBeVisible();

    await page.evaluate(() => window.dispatchEvent(new Event('blur')));
    await expect(getMenu(page)).toBeHidden();
  });

  regressionTest('on Escape', async ({ mount, page }) => {
    await mountFixture(mount, page);

    await page.mouse.click(100, 100, { button: 'right' });
    await expect(getMenu(page)).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(getMenu(page)).toBeHidden();
  });

  regressionTest('hide method', async ({ mount, page }) => {
    await mountFixture(mount, page);

    await page.mouse.click(100, 100, { button: 'right' });
    await expect(getMenu(page)).toBeVisible();

    await page
      .locator('ix-context-menu')
      .evaluate((element: HTMLIxContextMenuElement) => element.hide());
    await expect(getMenu(page)).toBeHidden();
  });

  regressionTest(
    'opening another context menu closes the open one',
    async ({ mount, page }) => {
      await mount(html`
        <div id="a" style="width: 200px; height: 100px">A</div>
        <div id="b" style="width: 200px; height: 100px">B</div>
        <ix-context-menu target="a">
          <ix-dropdown-item label="Action A"></ix-dropdown-item>
        </ix-context-menu>
        <ix-context-menu target="b">
          <ix-dropdown-item label="Action B"></ix-dropdown-item>
        </ix-context-menu>
      `);
      await expect(page.locator('ix-context-menu').nth(1)).toHaveAttribute(
        'hydrated'
      );

      await page.getByText('A', { exact: true }).click({ button: 'right' });
      await expect(
        page.getByRole('menuitem', { name: 'Action A' })
      ).toBeVisible();

      await page.getByText('B', { exact: true }).click({ button: 'right' });
      await expect(
        page.getByRole('menuitem', { name: 'Action B' })
      ).toBeVisible();
      await expect(
        page.getByRole('menuitem', { name: 'Action A' })
      ).toBeHidden();
    }
  );
});

regressionTest('showChanged event', async ({ mount, page }) => {
  await mountFixture(mount, page);

  await page.locator('ix-context-menu').evaluate((element) => {
    (window as unknown as { showChanged: boolean[] }).showChanged = [];
    element.addEventListener('showChanged', (event) =>
      (window as unknown as { showChanged: boolean[] }).showChanged.push(
        (event as CustomEvent<boolean>).detail
      )
    );
  });

  await page.mouse.click(100, 100, { button: 'right' });
  await expect(getMenu(page)).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(getMenu(page)).toBeHidden();

  await expect
    .poll(() =>
      page.evaluate(
        () => (window as unknown as { showChanged: boolean[] }).showChanged
      )
    )
    .toEqual([true, false]);
});

regressionTest.describe('keyboard', () => {
  regressionTest(
    'opens at the focused element via keyboard and restores focus',
    async ({ mount, page }) => {
      await mount(html`
        <button id="file" style="margin: 40px 0 0 60px">File</button>
        <ix-context-menu target="file">
          <ix-dropdown-item label="Open"></ix-dropdown-item>
          <ix-dropdown-item label="Rename"></ix-dropdown-item>
        </ix-context-menu>
      `);
      await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');

      const file = page.getByRole('button', { name: 'File' });
      await file.focus();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Shift+Tab');
      await expect(file).toBeFocused();

      // Headless browsers do not create a contextmenu event for the ContextMenu key
      await page.keyboard.press('Shift+F10');
      await file.dispatchEvent('contextmenu', { clientX: 0, clientY: 0 });

      const fileBox = await file.boundingBox();
      if (!fileBox) {
        throw new Error('Expected bounding box');
      }
      await expectTopLeftAt(
        getMenu(page),
        Math.round(fileBox.x),
        Math.round(fileBox.y + fileBox.height)
      );

      const items = page.getByRole('menuitem');
      await expect(items.nth(0)).toHaveClass(/ix-focused/);
      await page.keyboard.press('ArrowDown');
      await expect(items.nth(1)).toHaveClass(/ix-focused/);

      await page.keyboard.press('Escape');
      await expect(getMenu(page)).toBeHidden();
      await expect(file).toBeFocused();
    }
  );

  regressionTest(
    'roving-tabindex moves focus to the items',
    async ({ mount, page }) => {
      await mountFixture(mount, page, 'navigation-mode="roving-tabindex"');

      await page.mouse.click(100, 100, { button: 'right' });

      const items = page.getByRole('menuitem');
      await expect(items.nth(0)).toBeFocused();
      await page.keyboard.press('ArrowDown');
      await expect(items.nth(1)).toBeFocused();
    }
  );
});

regressionTest('submenu', async ({ mount, page }) => {
  await mount(html`
    <div id="area" style="position: fixed; inset: 0">
      <ix-context-menu>
        <ix-dropdown-item label="Copy"></ix-dropdown-item>
        <ix-dropdown-item id="share" label="Share"></ix-dropdown-item>
        <ix-dropdown trigger="share">
          <ix-dropdown-item label="Email"></ix-dropdown-item>
        </ix-dropdown>
      </ix-context-menu>
    </div>
  `);
  await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');

  await page.mouse.click(100, 100, { button: 'right' });
  await page.getByRole('menuitem', { name: 'Share' }).click();
  await expect(page.getByRole('menuitem', { name: 'Email' })).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(page.getByRole('menuitem', { name: 'Email' })).toBeHidden();
  await expect(page.getByRole('menuitem', { name: 'Copy' })).toBeHidden();
});

regressionTest('enableTopLayer', async ({ mount, page }) => {
  await mount(html`
    <div
      id="area"
      style="position: fixed; inset: 0; transform: translateX(0); overflow: hidden"
    >
      <ix-context-menu enable-top-layer>
        <ix-dropdown-item label="Copy"></ix-dropdown-item>
      </ix-context-menu>
    </div>
  `);
  await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');

  await page.mouse.click(200, 150, { button: 'right' });

  const dialog = page.locator('ix-context-menu ix-dropdown dialog');
  await expect(dialog).toBeVisible();
  await expectTopLeftAt(dialog, 200, 150);
});
