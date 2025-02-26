/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ElementHandle, expect, Locator, Page } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

const html = String.raw;

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
  <ix-split-button label="Test 1">
    <ix-dropdown-item>Test 1</ix-dropdown-item>
  </ix-split-button>

  <ix-split-button label="Test 2">
    <ix-dropdown-item>Test 1</ix-dropdown-item>
  </ix-split-button>

  <ix-group header="Title" sub-header="Subtitle">
    <ix-dropdown slot="dropdown">
      <ix-dropdown-item label="Item 1" icon="pin" />
      <ix-dropdown-item label="Item 2" icon="star" />
      <ix-dropdown-item label="Item 3" icon="heart" />
      <ix-dropdown-item label="Item 4" icon="cogwheel" />
    </ix-dropdown>
  </ix-group>

  <ix-group header="Title" sub-header="Subtitle">
    <ix-dropdown slot="dropdown">
      <ix-dropdown-item label="Item 1" icon="pin" />
      <ix-dropdown-item label="Item 2" icon="star" />
      <ix-dropdown-item label="Item 3" icon="heart" />
      <ix-dropdown-item label="Item 4" icon="cogwheel" />
    </ix-dropdown>
  </ix-group>
  `);

  const sb1 = page.locator('ix-split-button').nth(0);
  const sb2 = page.locator('ix-split-button').nth(1);

  const g1 = page.locator('ix-group').nth(0);
  const g2 = page.locator('ix-group').nth(1);

  const sb1Dropdown = sb1.locator('ix-dropdown');
  const sb2Dropdown = sb2.locator('ix-dropdown');
  const g1Dropdown = g1.locator('ix-dropdown');
  const g2Dropdown = g2.locator('ix-dropdown');

  await sb1.locator('ix-icon-button').first().click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    0
  );

  await sb2.locator('ix-icon-button').first().click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    1
  );

  await g2.locator('ix-icon-button').click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    3
  );
});

function expectToBeVisible(elements: Locator[], index: number) {
  return Promise.all(
    elements.map(async (element, i) => {
      let ef = expect(element);
      if (i !== index) {
        ef = ef.not;
      }
      await ef.toBeVisible();
    })
  );
}

regressionTest('trigger toggles', async ({ mount, page }) => {
  await mount(`<ix-button id="trigger">Open</ix-button>
    <ix-dropdown trigger="trigger" trigger-toggles="true">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-dropdown>
  `);

  await page.locator('ix-button').click();
  const dropdown = page.locator('.dropdown-menu');
  await expect(dropdown).toHaveClass(/show/);
  await expect(dropdown).toBeVisible();

  await page.locator('ix-button').click();
  const after = page.locator('.dropdown-menu');
  await expect(after).not.toHaveClass(/show/);
  await expect(dropdown).not.toBeVisible();
});

regressionTest.describe('Close behavior', () => {
  function mountDropdown(
    mount: (selector: string) => Promise<ElementHandle<HTMLElement>>,
    config: {
      closeBehavior: string | boolean;
    }
  ) {
    const closeBehavior = config.closeBehavior
      ? `close-behavior="${config.closeBehavior}"`
      : '';

    return mount(`
      <ix-button id="level-1">Trigger</ix-button>
      <ix-dropdown id="dropdown-level-1" trigger="level-1" ${closeBehavior}>
        <ix-dropdown-item>Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item>Item 3</ix-dropdown-item>
      </ix-dropdown>
  `);
  }

  let triggerButton: Locator;
  let dropdownLevel1: Locator;

  let dropdownLevel1_Item1: Locator;

  function setupTest(page: Page) {
    triggerButton = page.locator('#level-1');
    dropdownLevel1 = page.locator('#dropdown-level-1');

    dropdownLevel1_Item1 = dropdownLevel1
      .locator('ix-dropdown-item')
      .getByText('Item 1');
  }

  regressionTest(' = both', async ({ mount, page }) => {
    await mountDropdown(mount, {
      closeBehavior: 'both',
    });

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).not.toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click();
    await expect(dropdownLevel1).not.toBeVisible();
  });

  regressionTest(' = inside', async ({ mount, page }) => {
    await mountDropdown(mount, {
      closeBehavior: 'inside',
    });

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click();
    await expect(dropdownLevel1).not.toBeVisible();
  });

  regressionTest(' = outside', async ({ mount, page }) => {
    await mountDropdown(mount, {
      closeBehavior: 'outside',
    });

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).not.toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click();
    await expect(dropdownLevel1).toBeVisible();
  });

  regressionTest(' = false', async ({ mount, page }) => {
    await mountDropdown(mount, {
      // Disable close behavior
      closeBehavior: false,
    });

    // Have to be provided via javascript, otherwise the component parse the value as a string.
    await page
      .locator('ix-dropdown')
      .evaluate((dropdown: any) => (dropdown.closeBehavior = false));

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).not.toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click({
      force: true,
    });
    await expect(dropdownLevel1).toBeVisible();
  });
});

regressionTest('Prevent closing', async ({ page, mount }) => {
  await mount(`
    <ix-button id="trigger">Open</ix-button>
    <ix-dropdown trigger="trigger">
      <ix-dropdown-header id="header">Header</ix-dropdown-header>
      <ix-dropdown-item id="item-1">Item 1</ix-dropdown-item>
    </ix-dropdown>`);

  const header = await page.locator('ix-dropdown-header');
  header.evaluate((h) =>
    h.addEventListener('click', (event) => {
      event.preventDefault();
    })
  );
  await page.locator('#trigger').click();
  await expect(header).toBeVisible();
  await header.click();
  await expect(header).toBeVisible();
  await page.locator('#item-1').click();
  await expect(header).not.toBeVisible();
});

regressionTest.describe('Nested dropdowns 1/3', () => {
  function mountDropdown(
    mount: (selector: string) => Promise<ElementHandle<HTMLElement>>,
    config?: {
      closeBehavior: string | boolean;
    }
  ) {
    return mount(html`
      <ix-button id="trigger-dropdown-1">Trigger 1</ix-button>
      <ix-dropdown
        close-behavior="${config?.closeBehavior ?? 'both'}"
        id="dropdown-1"
        trigger="trigger-dropdown-1"
      >
        <ix-dropdown-item id="trigger-dropdown-2">Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item id="trigger-dropdown-3">Item 3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown trigger="trigger-dropdown-2" id="dropdown-2">
        <ix-dropdown-item>Item 1.1</ix-dropdown-item>
        <ix-dropdown-item>Item 1.2</ix-dropdown-item>
        <ix-dropdown-item>Item 1.3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown trigger="trigger-dropdown-3" id="dropdown-3">
        <ix-dropdown-item>Item 3.1</ix-dropdown-item>
        <ix-dropdown-item>Item 3.2</ix-dropdown-item>
        <ix-dropdown-item id="trigger-dropdown-4">Item 3.3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown trigger="trigger-dropdown-4" id="dropdown-4">
        <ix-dropdown-item>Item 3.3.1</ix-dropdown-item>
        <ix-dropdown-item>Item 3.3.2</ix-dropdown-item>
        <ix-dropdown-item>Item 3.3.3</ix-dropdown-item>
      </ix-dropdown>

      <ix-button id="trigger-dropdown-5">Trigger 5</ix-button>
      <ix-dropdown id="dropdown-5" trigger="trigger-dropdown-5">
        <ix-dropdown-item>Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item id="trigger-dropdown-6">Item 3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown id="dropdown-6" trigger="trigger-dropdown-6">
        <ix-dropdown-item>Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item>Item 3</ix-dropdown-item>
      </ix-dropdown>
    `);
  }

  let triggerDropdown1: Locator;
  let triggerDropdown2: Locator;
  let triggerDropdown3: Locator;
  let triggerDropdown4: Locator;
  let triggerDropdown5: Locator;

  let dropdown1: Locator;
  let dropdown2: Locator;
  let dropdown3: Locator;
  let dropdown4: Locator;
  let dropdown5: Locator;

  function setupTest(page: Page) {
    triggerDropdown1 = page.locator('#trigger-dropdown-1');
    triggerDropdown2 = page.locator('#trigger-dropdown-2');
    triggerDropdown3 = page.locator('#trigger-dropdown-3');
    triggerDropdown4 = page.locator('#trigger-dropdown-4');
    triggerDropdown5 = page.locator('#trigger-dropdown-5');

    dropdown1 = page.locator('#dropdown-1');
    dropdown2 = page.locator('#dropdown-2');
    dropdown3 = page.locator('#dropdown-3');
    dropdown4 = page.locator('#dropdown-4');
    dropdown5 = page.locator('#dropdown-5');
  }

  regressionTest('close neighbor sub menu', async ({ mount, page }) => {
    await mountDropdown(mount);
    setupTest(page);

    await triggerDropdown1.click();
    await expect(dropdown1).toBeVisible();

    await triggerDropdown3.click();
    await expect(dropdown3).toBeVisible();

    await triggerDropdown5.click();
    await expect(dropdown5).toBeVisible();
    await expect(dropdown1).not.toBeVisible();
    await expect(dropdown3).not.toBeVisible();
  });

  regressionTest('close assigned submenu', async ({ mount, page }) => {
    await mountDropdown(mount);

    setupTest(page);

    await triggerDropdown1.click();
    await expect(dropdown1).toBeVisible();

    await triggerDropdown2.click();
    await expect(dropdown2).toBeVisible();

    await triggerDropdown3.click();
    await expect(dropdown2).not.toBeVisible();
    await expect(dropdown3).toBeVisible();

    await triggerDropdown4.click();
    await expect(dropdown4).toBeVisible();

    await triggerDropdown3.click();
    await expect(dropdown3).not.toBeVisible();
    await expect(dropdown4).not.toBeVisible();
  });

  regressionTest.describe('close by Escape with close behavior', () => {
    regressionTest(' = both', async ({ mount, page }) => {
      await mountDropdown(mount);

      setupTest(page);

      await triggerDropdown1.click();
      await expect(dropdown1).toBeVisible();

      await triggerDropdown2.click();
      await expect(dropdown2).toBeVisible();

      await triggerDropdown3.click();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).toBeVisible();

      await triggerDropdown4.click();
      await expect(dropdown4).toBeVisible();

      await page.keyboard.press('Escape');

      await expect(dropdown1).not.toBeVisible();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).not.toBeVisible();
      await expect(dropdown4).not.toBeVisible();
    });

    regressionTest(' = inside', async ({ mount, page }) => {
      await mountDropdown(mount, {
        closeBehavior: 'inside',
      });

      setupTest(page);

      await triggerDropdown1.click();
      await expect(dropdown1).toBeVisible();

      await triggerDropdown2.click();
      await expect(dropdown2).toBeVisible();

      await triggerDropdown3.click();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).toBeVisible();

      await triggerDropdown4.click();
      await expect(dropdown4).toBeVisible();

      await page.keyboard.press('Escape');

      await expect(dropdown1).not.toBeVisible();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).not.toBeVisible();
      await expect(dropdown4).not.toBeVisible();
    });

    regressionTest(' = outside', async ({ mount, page }) => {
      await mountDropdown(mount, { closeBehavior: 'outside' });

      setupTest(page);

      await triggerDropdown1.click();
      await expect(dropdown1).toBeVisible();

      await triggerDropdown2.click();
      await expect(dropdown2).toBeVisible();

      await triggerDropdown3.click();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).toBeVisible();

      await triggerDropdown4.click();
      await expect(dropdown4).toBeVisible();

      await page.keyboard.press('Escape');

      await expect(dropdown1).not.toBeVisible();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).not.toBeVisible();
      await expect(dropdown4).not.toBeVisible();
    });

    regressionTest(' = false', async ({ mount, page }) => {
      await mountDropdown(mount, { closeBehavior: false });

      setupTest(page);

      await triggerDropdown1.click();
      await expect(dropdown1).toBeVisible();

      await triggerDropdown2.click();
      await expect(dropdown2).toBeVisible();

      await triggerDropdown3.click();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).toBeVisible();

      await triggerDropdown4.click();
      await expect(dropdown4).toBeVisible();

      await page.keyboard.press('Escape');

      await expect(dropdown1).not.toBeVisible();
      await expect(dropdown2).not.toBeVisible();
      await expect(dropdown3).not.toBeVisible();
      await expect(dropdown4).not.toBeVisible();
    });
  });
});

regressionTest.describe('nested dropdown 2/3', () => {
  const button1Text = 'Triggerbutton1';
  const button2Text = 'Triggerbutton2';

  regressionTest.beforeEach(async ({ mount }) => {
    await mount(`
      <button id="trigger1">${button1Text}</button>
      <ix-dropdown trigger="trigger1">
        <button id="trigger2">${button2Text}</button>
        <ix-dropdown trigger="trigger2">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
      </ix-dropdown>
    `);
  });

  regressionTest('can open nested dropdown', async ({ page }) => {
    await page.getByText(button1Text).click();
    await page.getByText(button2Text).click();
    const nestedDropdownItem = page.locator('ix-dropdown-item');

    await expect(nestedDropdownItem).toHaveClass(/hydrated/);
  });
});

regressionTest.describe('nested dropdown 3/3', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(`
      <ix-button id="trigger-dropdown-1">Trigger 1</ix-button>
      <ix-dropdown id="dropdown-1" close-behavior="outside" trigger="trigger-dropdown-1">
        <ix-dropdown-item id="trigger-dropdown-2">Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown trigger="trigger-dropdown-2" id="dropdown-2" close-behavior="inside">
        <ix-dropdown-item>Item 1.1</ix-dropdown-item>
        <ix-dropdown-item>Item 1.2</ix-dropdown-item>
        <ix-dropdown-item>Item 1.3</ix-dropdown-item>
      </ix-dropdown>
    `);
  });

  regressionTest('close child on parent dismiss', async ({ page }) => {
    const triggerDropdown1 = page.locator('#trigger-dropdown-1');
    const triggerDropdown2 = page.locator('#trigger-dropdown-2');

    const dropdown1 = page.locator('#dropdown-1');
    const dropdown2 = page.locator('#dropdown-2');

    await triggerDropdown1.click();
    await triggerDropdown2.click();
    await triggerDropdown1.click();

    await expect(dropdown1).not.toBeVisible();
    await expect(dropdown2).not.toBeVisible();
  });
});

regressionTest(
  'Nested dropdowns within application-header',
  async ({ mount, page }) => {
    await mount(html`
      <ix-application-header>
        <ix-dropdown-button label="Trigger">
          <ix-dropdown-item label="MainItem 1"></ix-dropdown-item>
          <ix-dropdown-item label="MainItem 2"></ix-dropdown-item>
          <ix-dropdown-item
            label="MainItem 3"
            id="submenu-01"
          ></ix-dropdown-item>
        </ix-dropdown-button>
      </ix-application-header>
      <ix-dropdown id="submenu" trigger="submenu-01">
        <ix-dropdown-item>SubMenuItem 1</ix-dropdown-item>
        <ix-dropdown-item>SubMenuItem 2</ix-dropdown-item>
        <ix-dropdown-item>SubMenuItem 3</ix-dropdown-item>
        <ix-dropdown-item>SubMenuItem 4</ix-dropdown-item>
      </ix-dropdown>
    `);
    await page.setViewportSize(viewPorts.sm);
    await page.waitForTimeout(500);

    const header = page.locator('ix-application-header');
    await expect(header).toBeVisible();

    const overflowTrigger = header.locator('ix-icon-button');
    await overflowTrigger.click();

    const dropdownButton = header.locator('ix-dropdown-button');
    await dropdownButton.locator('ix-button').click();

    const dropdownOfDropdownButton = dropdownButton.locator('ix-dropdown');
    await expect(dropdownOfDropdownButton).toBeVisible();

    const submenuTrigger = page
      .locator('ix-dropdown-item')
      .getByText('MainItem 3');
    await expect(submenuTrigger).toBeVisible();
    await submenuTrigger.click();

    const submenuDropdown = page.locator('#submenu');

    await expect(submenuDropdown).toBeVisible();

    const subMenuItem = submenuDropdown
      .locator('ix-dropdown-item')
      .getByText('SubMenuItem 3');

    await subMenuItem.click();

    await expect(submenuDropdown).not.toBeVisible();
    await expect(dropdownOfDropdownButton).not.toBeVisible();
  }
);

regressionTest.describe('resolve during element connect', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(`
    <ix-button id="trigger">Open</ix-button>
    <ix-dropdown trigger="trigger">
      <ix-dropdown-item label="Item 1" icon="print"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item>Custom</ix-dropdown-item>
    </ix-dropdown>
    `);
  });

  regressionTest('attach and detach from dom', async ({ page }) => {
    await page.evaluate(() => {
      const dropdown = document.querySelector('ix-dropdown')!;
      const mount = document.querySelector('#mount')!;
      mount.removeChild(dropdown);
      mount.append(dropdown);
    });

    const dropdown = page.locator('ix-dropdown');
    await page.locator('ix-button').first().click();

    await expect(dropdown).toBeVisible();
  });

  regressionTest('add element within runtime', async ({ page }) => {
    await page.evaluate(async () => {
      const divElement = document.createElement('div');
      const mount = document.querySelector('#mount')!;
      mount.appendChild(divElement);
    });

    const dropdown = page.locator('ix-dropdown');
    await page.locator('ix-button').first().click();

    await expect(dropdown).toBeVisible();
  });
});

regressionTest('Child dropdown disconnects', async ({ mount, page }) => {
  await mount(`<ix-button id="trigger">Open</ix-icon-button>
        <ix-dropdown closeBehavior="outside" trigger="trigger">
          <ix-dropdown-item id="item-1">Item level 1</ix-dropdown-item>
          <ix-dropdown-button label="Nested">
            <ix-dropdown-item id="item-1">Item level 2</ix-dropdown-item>
          </ix-dropdown-button>
        </ix-dropdown>`);
  const trigger = page.locator('ix-button').first();
  await trigger.click();
  const dropdown = page.locator('ix-dropdown').first();

  await expect(dropdown).toBeVisible();

  await dropdown.evaluate((dd) => {
    dd.removeChild(dd.querySelector('ix-dropdown-button')!);
  });

  await trigger.click();
  await trigger.click();
  await expect(dropdown).toBeVisible();
});

regressionTest.describe('A11y', () => {
  regressionTest.describe('Keyboard navigation', () => {
    regressionTest.beforeEach(async ({ page, mount }) => {
      await mount(`
      <ix-button id="trigger">Open</ix-button>
      <ix-dropdown trigger="trigger">
        <ix-dropdown-item label="Item 1" icon="print"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        <ix-dropdown-item>Custom</ix-dropdown-item>
      </ix-dropdown>
      `);

      await page.locator('#trigger').click();
    });

    regressionTest.describe('ArrowDown', () => {
      regressionTest('trigger -> first item', async ({ page }) => {
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(100);
        const item = await page.locator('ix-dropdown-item').first();
        await expect(item).toBeFocused();
      });

      regressionTest('first item -> second item', async ({ page }) => {
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(100);
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(100);
        const item = await page.locator('ix-dropdown-item').nth(1);
        await expect(item).toBeFocused();
      });
    });

    regressionTest.describe('ArrowUp', () => {
      regressionTest('second item -> fist item', async ({ page }) => {
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(100);
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(100);
        await page.keyboard.press('ArrowUp');
        const item = page.locator('ix-dropdown-item').first();
        await expect(item).toBeFocused();
      });
    });
  });
});

regressionTest('Dropdown works in floating-ui', async ({ mount, page }) => {
  await mount(`
    <style>
      .dialog {
        animation: fade-in 0.2s forwards;
        overflow: visible;
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
          transform: translate(0, -50px);
        }
        100% {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    </style>

    <dialog id="dialog" class="dialog">
      <ix-button id="trigger">Open</ix-button>
      <ix-dropdown id="dropdown" trigger="trigger">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown>
    </dialog>
  `);

  await page.evaluate(() => {
    const dialog = document.getElementById('dialog') as HTMLDialogElement;
    dialog.showModal();
  });

  const trigger = page.locator('#trigger');
  await trigger.click();

  const dropdown = page.locator('#dropdown');

  const dropdownRect = (await dropdown.boundingBox())!;
  const triggerRect = (await trigger.boundingBox())!;

  expect(Math.round(dropdownRect.x)).toBe(Math.round(triggerRect.x));
  expect(Math.round(dropdownRect.y)).toBe(
    Math.round(triggerRect.y + triggerRect.height)
  );
});
