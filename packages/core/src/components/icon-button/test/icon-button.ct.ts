/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, type Locator } from '@playwright/test';
import { iconRocket } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-icon-button icon="rocket">Content</ix-icon-button>`, {
    icons: { iconRocket },
  });

  const button = page.locator('ix-icon-button');
  await expect(button).toHaveClass(/hydrated/);
  expect(button.allInnerTexts).not.toEqual('Content');

  await expect(button.locator('ix-icon')).toBeVisible();
});

regressionTest(
  'defaults to a 32px host and 20px glyph',
  async ({ mount, page }) => {
    await mount(`<ix-icon-button icon="rocket"></ix-icon-button>`, {
      icons: { iconRocket },
    });

    const button = page.locator('ix-icon-button');
    await expect(button).toHaveClass(/hydrated/);
    await expect(button).toHaveClass(/btn-icon-32/);
    await expect(button.locator('ix-icon')).toHaveClass(/size-20/);
  }
);

regressionTest(
  'size 24 keeps a 32px host and 24px glyph',
  async ({ mount, page }) => {
    await mount(`<ix-icon-button icon="rocket" size="24"></ix-icon-button>`, {
      icons: { iconRocket },
    });

    const button = page.locator('ix-icon-button');
    await expect(button).toHaveClass(/hydrated/);
    await expect(button).toHaveClass(/btn-icon-32/);
    await expect(button.locator('ix-icon')).toHaveClass(/size-24/);
  }
);

regressionTest(
  'preserves explicit icon size properties without a size attribute',
  async ({ mount, page }) => {
    await mount(
      `<ix-icon data-testid="default" name="rocket"></ix-icon>
       <ix-icon data-testid="property-16" name="rocket"></ix-icon>
       <ix-icon data-testid="attribute-24" name="rocket" size="24"></ix-icon>
       <ix-icon data-testid="property-24" name="rocket"></ix-icon>`,
      {
        icons: { iconRocket },
      }
    );

    const defaultIcon = page.getByTestId('default');
    const property16Icon = page.getByTestId('property-16');
    const attribute24Icon = page.getByTestId('attribute-24');
    const property24Icon = page.getByTestId('property-24');

    await property16Icon.evaluate((icon: HTMLIxIconElement) => {
      icon.size = '16';
    });
    await property24Icon.evaluate((icon: HTMLIxIconElement) => {
      icon.size = '24';
    });

    await expect(property16Icon).not.toHaveAttribute('size');
    await expect(property24Icon).not.toHaveAttribute('size');
    await expect(attribute24Icon).toHaveAttribute('size', '24');

    const expectIconDimensions = async (icon: Locator, size: number) => {
      const expectedSize = `${size}px`;
      await expect(icon).toHaveCSS('width', expectedSize);
      await expect(icon).toHaveCSS('height', expectedSize);
      await expect(icon).toHaveCSS('min-width', expectedSize);
      await expect(icon).toHaveCSS('min-height', expectedSize);
    };

    const expectAllSizes = async () => {
      await expectIconDimensions(defaultIcon, 20);
      await expectIconDimensions(property16Icon, 16);
      await expectIconDimensions(attribute24Icon, 24);
      await expectIconDimensions(property24Icon, 24);
    };

    await expectAllSizes();
    await page.locator('body').evaluate((body: HTMLBodyElement) => {
      body.setAttribute('data-ix-density', 'compact');
    });
    await expectAllSizes();
  }
);

regressionTest(
  'forwards a custom property icon color',
  async ({ mount, page }) => {
    await mount(
      `<ix-icon-button
      icon="rocket"
      icon-color="--si-sys-color-text-danger"
      style="--si-sys-color-text-danger: rgb(1, 2, 3)"
    ></ix-icon-button>`,
      {
        icons: { iconRocket },
      }
    );

    await expect(page.locator('ix-icon-button ix-icon')).toHaveCSS(
      'color',
      'rgb(1, 2, 3)'
    );
  }
);

regressionTest('show spinner while loading', async ({ mount, page }) => {
  await mount(`<ix-icon-button icon="rocket"></ix-icon-button>`, {
    icons: { iconRocket },
  });
  const button = page.locator('ix-icon-button');

  await expect(button.locator('ix-spinner')).not.toBeVisible();
  await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
  await expect(button.locator('ix-spinner')).toBeVisible();
});
