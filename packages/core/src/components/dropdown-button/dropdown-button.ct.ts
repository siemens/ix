/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
  <ix-dropdown-button label="Open">
    <ix-dropdown-item label="Test"></ix-dropdown-item>
  </ix-dropdown-button>
  `);

  const dropdownButton = page.locator('ix-dropdown-button');
  await expect(dropdownButton).toHaveClass(/\bhydrated\b/);
  await expect(dropdownButton.locator('ix-button button')).toHaveAttribute(
    'aria-hidden',
    'true'
  );
  await expect(dropdownButton.locator('ix-button button')).toHaveAttribute(
    'inert',
    ''
  );

  await dropdownButton.click();
  const item = page.locator('ix-dropdown-item');
  await expect(item).toBeVisible();

  await item.click();
  await expect(item).not.toBeVisible();
});

for (const key of ['Enter', 'Space']) {
  regressionTest(
    `opens an icon-only dropdown with ${key}`,
    async ({ mount, page }) => {
      await mount(
        `
          <button>Before</button>
          <ix-dropdown-button
            label=""
            icon="checkboxes"
          >
            <ix-dropdown-item label="Item"></ix-dropdown-item>
          </ix-dropdown-button>
        `,
        { icons: { iconCheckboxes } }
      );

      const dropdownButton = page.locator('ix-dropdown-button');
      await expect(dropdownButton).toHaveClass(/\bhydrated\b/);

      await page.getByRole('button', { name: 'Before' }).focus();
      await page.keyboard.press('Tab');
      await expect(dropdownButton).toBeFocused();

      await page.keyboard.press(key);

      await expect(dropdownButton.locator('ix-dropdown')).toBeVisible();
      await expect(dropdownButton).toHaveAttribute('aria-expanded', 'true');
    }
  );
}

regressionTest(
  'exposes one named button for an icon-only dropdown',
  async ({ makeAxeBuilder, mount, page }) => {
    await mount(
      `
        <ix-dropdown-button
          label=""
          icon="checkboxes"
        >
          <ix-dropdown-item label="Item"></ix-dropdown-item>
        </ix-dropdown-button>
      `,
      { icons: { iconCheckboxes } }
    );

    const dropdownButton = page.locator('ix-dropdown-button');
    await expect(dropdownButton).toHaveClass(/\bhydrated\b/);
    await dropdownButton.evaluate(
      (element: HTMLIxDropdownButtonElement) =>
        (element.ariaLabelDropdownButton = 'Actions')
    );
    await expect(dropdownButton).toHaveAccessibleName('Actions');
    await expect(page.getByRole('button', { name: 'Actions' })).toHaveCount(1);
    await expect(
      dropdownButton.locator('ix-icon-button').locator('button')
    ).toHaveAttribute('aria-hidden', 'true');
    await expect(
      dropdownButton.locator('ix-icon-button').locator('button')
    ).toHaveAttribute('inert', '');

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  }
);

regressionTest(
  'updates the default accessible name for an icon-only dropdown',
  async ({ mount, page }) => {
    await mount(`
      <ix-dropdown-button label="">
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dropdownButton = page.locator('ix-dropdown-button');
    await expect(dropdownButton).toHaveAttribute('aria-label', 'Open dropdown');

    await dropdownButton.click();

    await expect(dropdownButton).toHaveAttribute(
      'aria-label',
      'Close dropdown'
    );
  }
);

regressionTest(
  'keeps an explicit aria-label that matches the default label',
  async ({ mount, page }) => {
    await mount(`
      <ix-dropdown-button label="">
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dropdownButton = page.locator('ix-dropdown-button');
    await expect(dropdownButton).toHaveAttribute('aria-label', 'Open dropdown');

    await dropdownButton.evaluate((element) => {
      element.setAttribute('aria-label', 'Open dropdown');
    });
    await dropdownButton.click();

    await expect(dropdownButton).toHaveAttribute('aria-label', 'Open dropdown');
  }
);

regressionTest(
  'keeps the generated accessible name dynamic after reconnection',
  async ({ mount, page }) => {
    await mount(`
      <div>
        <ix-dropdown-button label="">
          <ix-dropdown-item label="Item"></ix-dropdown-item>
        </ix-dropdown-button>
      </div>
    `);

    const dropdownButton = page.locator('ix-dropdown-button');
    await expect(dropdownButton).toHaveAttribute('aria-label', 'Open dropdown');
    await dropdownButton.evaluate((element) => {
      const parent = element.parentElement;
      element.remove();
      parent?.append(element);
    });
    await dropdownButton.click();

    await expect(dropdownButton).toHaveAttribute(
      'aria-label',
      'Close dropdown'
    );
  }
);

regressionTest(
  'uses the fallback label for blank host aria-label values',
  async ({ mount, page }) => {
    await mount(`
      <ix-dropdown-button label="" aria-label="   ">
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dropdownButton = page.locator('ix-dropdown-button');
    await expect(dropdownButton).toHaveClass(/\bhydrated\b/);
    await expect(dropdownButton).toHaveAttribute('aria-label', 'Open dropdown');

    for (const ariaLabel of ['', '   ']) {
      await dropdownButton.evaluate((element, value) => {
        element.setAttribute('aria-label', value);
      }, ariaLabel);
      await expect(dropdownButton).toHaveAttribute(
        'aria-label',
        'Open dropdown'
      );
    }

    await dropdownButton.click();
    await expect(dropdownButton).toHaveAttribute(
      'aria-label',
      'Close dropdown'
    );
  }
);

regressionTest(
  'uses custom button-label slot text as the accessible name',
  async ({ mount, page }) => {
    await mount(`
      <ix-dropdown-button label="Temporary">
        <span slot="button-label">Select month</span>
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dropdownButton = page.locator('ix-dropdown-button');
    await expect(dropdownButton).toHaveClass(/\bhydrated\b/);
    await dropdownButton.evaluate(
      (element: HTMLIxDropdownButtonElement) => (element.label = null)
    );

    await expect(dropdownButton).toHaveAccessibleName('Select month');
    await dropdownButton
      .locator('[slot="button-label"]')
      .evaluate((element) => {
        element.textContent = 'Select year';
      });
    await expect(dropdownButton).toHaveAccessibleName('Select year');
  }
);

regressionTest(
  'uses the fallback for a whitespace-only configured aria label',
  async ({ mount, page }) => {
    await mount(`
      <ix-dropdown-button label="">
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dropdownButton = page.locator('ix-dropdown-button');
    await dropdownButton.evaluate(
      (element: HTMLIxDropdownButtonElement) =>
        (element.ariaLabelDropdownButton = '   ')
    );

    await expect(dropdownButton).toHaveAccessibleName('Open dropdown');
  }
);

regressionTest(
  'treats a whitespace-only label as icon-only',
  async ({ mount, page }) => {
    await mount(`
      <ix-dropdown-button label="   ">
        <ix-dropdown-item label="Item"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dropdownButton = page.locator('ix-dropdown-button');
    await expect(dropdownButton).toHaveClass(/\bicon-only\b/);
    await expect(dropdownButton.locator('ix-icon-button')).toHaveCount(1);
    await expect(dropdownButton).toHaveAccessibleName('Open dropdown');
  }
);

regressionTest('close behavior - outside', async ({ mount, page }) => {
  await mount(`
  <ix-dropdown-button close-behavior="outside" label="Open">
    <ix-dropdown-item label="Test"></ix-dropdown-item>
  </ix-dropdown-button>
  `);

  await page.locator('ix-dropdown-button').click();
  const item = page.locator('ix-dropdown-item');
  await expect(item).toBeVisible();

  await item.click();
  await expect(item).toBeVisible();
});

regressionTest('submenu', async ({ mount, page }) => {
  await mount(`
    <ix-dropdown-button close-behavior="outside" label="Open">
      <ix-dropdown-item label="Test" id="submenu"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown close-behavior="outside" trigger="submenu">
      <ix-dropdown-item label="Subitem"></ix-dropdown-item>
    </ix-dropdown>
  `);

  await page.locator('ix-dropdown-button').click();
  const item = page.locator('ix-dropdown-item').first();
  await item.click();
  const subItem = page.locator('ix-dropdown-item').last();
  await subItem.click();

  await expect(subItem).toBeVisible();
});

regressionTest(
  'should reflect aria-disabled on disabled dropdown button',
  async ({ page, mount }) => {
    await mount(`
    <ix-dropdown-button id="disabled-button" label="Disabled" disabled>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
    </ix-dropdown-button>
    <ix-dropdown-button id="enabled-button" label="Enabled">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

    const disabledButton = page.locator('#disabled-button');
    const enabledButton = page.locator('#enabled-button');

    await expect(disabledButton).toHaveAttribute('aria-disabled', 'true');
    await expect(enabledButton).toHaveAttribute('aria-disabled', 'false');
  }
);

regressionTest(
  'should reflect disabled attribute in DOM when changed dynamically',
  async ({ page, mount }) => {
    await mount(`
      <ix-dropdown-button id="dynamic-disabled" label="Dynamic Disabled">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      </ix-dropdown-button>
    `);

    const dynamicButton = page.locator('#dynamic-disabled');

    await expect(dynamicButton).not.toHaveAttribute('disabled');

    await dynamicButton.evaluate((element: any) => {
      element.disabled = true;
    });
    await expect(dynamicButton).toHaveAttribute('disabled');

    await dynamicButton.evaluate((element: any) => {
      element.disabled = false;
    });
    await expect(dynamicButton).not.toHaveAttribute('disabled');
  }
);

regressionTest(
  'should not render focus outline on trigger while dropdown is expanded',
  async ({ page, mount }) => {
    await mount(`
    <ix-dropdown-button label="Open">
      <ix-dropdown-item id="item-1" label="Test1"></ix-dropdown-item>
      <ix-dropdown-item id="item-2" label="Test2"></ix-dropdown-item>
    </ix-dropdown-button>
  `);

    const button = page.locator('ix-dropdown-button');
    await expect(button).toHaveClass(/hydrated/);

    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();

    await expect(button).not.toHaveCSS('outline-style', 'none');

    await page.keyboard.press('Enter');

    const dropdown = button.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(button.locator('ix-button')).toHaveClass(/\bactive\b/);

    await expect(button).toHaveCSS('outline-style', 'none');
  }
);

regressionTest(
  'handle visible focus in combination with aria-activedescendant',
  async ({ page, mount }) => {
    await mount(`
    <ix-dropdown-button label="Open">
      <ix-dropdown-item id="acc-1" label="Test1"></ix-dropdown-item>
      <ix-dropdown-item id="acc-2" label="Test2"></ix-dropdown-item>
      <ix-dropdown-item id="acc-3" label="Test3"></ix-dropdown-item>
    </ix-dropdown-button>
  `);
    const button = page.locator('ix-dropdown-button');
    const item2 = page.locator('#acc-2');

    const $onClickItem2 = item2.evaluateHandle(
      (el) =>
        new Promise<void>((resolve) => {
          el.addEventListener('click', () => resolve());
        })
    );

    await expect(button).toHaveClass(/hydrated/);

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');

    const dropdown = button.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();

    await expect(button).toHaveAttribute('aria-activedescendant', 'acc-1');

    await page.keyboard.press('ArrowDown');
    await expect(button).toHaveAttribute('aria-activedescendant', 'acc-2');

    await page.keyboard.press('Enter');

    await $onClickItem2;
    await expect(dropdown).not.toBeVisible();
  }
);
