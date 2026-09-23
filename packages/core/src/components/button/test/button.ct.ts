/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconRocket } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

declare global {
  interface Window {
    submitCount: number;
    isFormSubmitted: boolean;
  }
}

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-button>Content</ix-button>`);
  const button = page.locator('ix-button');
  await expect(button).toHaveClass(/hydrated/);
});

regressionTest(
  'all button variants follow default and compact density',
  async ({ mount, page }) => {
    const variants = [
      'primary',
      'secondary',
      'tertiary',
      'subtle-primary',
      'subtle-secondary',
      'subtle-tertiary',
      'danger-primary',
      'danger-secondary',
      'danger-tertiary',
    ];

    await mount(
      `<div style="display: flex; gap: 8px; flex-wrap: wrap;">${variants
        .map(
          (variant) => `<ix-button variant="${variant}">${variant}</ix-button>`
        )
        .join('')}</div>`
    );

    const buttons = page.locator('ix-button');
    await expect(buttons).toHaveCount(variants.length);
    for (const button of await buttons.all()) {
      await expect(button).toHaveCSS('height', '32px');
    }

    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });

    for (const button of await buttons.all()) {
      await expect(button).toHaveCSS('height', '24px');
    }
  }
);

regressionTest(
  'uses density spacing tokens for button internals',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-button id="default-button">Content</ix-button>
        <ix-button id="icon-button" icon="rocket">Content</ix-button>
        <ix-button id="loading-button" loading>Content</ix-button>
        <ix-button id="override-button" style="--ix-button-padding: 0 20px">
          Content
        </ix-button>
      `,
      { icons: { iconRocket } }
    );

    await expect(page.locator('#default-button')).toHaveCSS(
      'min-width',
      '80px'
    );
    await expect(page.locator('#default-button').locator('button')).toHaveCSS(
      'padding-left',
      '8px'
    );
    await expect(page.locator('#default-button').locator('button')).toHaveCSS(
      'padding-right',
      '8px'
    );
    await expect(page.locator('#icon-button').locator('.icon')).toHaveCSS(
      'margin-right',
      '4px'
    );
    await expect(
      page.locator('#loading-button').locator('ix-spinner')
    ).toHaveCSS('margin-right', '4px');
    await expect(page.locator('#override-button').locator('button')).toHaveCSS(
      'padding-left',
      '20px'
    );
  }
);

regressionTest('show icon', async ({ mount, page }) => {
  await mount(`<ix-button icon="rocket">Content</ix-button>`, {
    icons: { iconRocket },
  });
  const button = page.locator('ix-button');
  await expect(button.locator('ix-icon')).toBeVisible();
  await expect(button.locator('ix-icon')).toHaveClass(/size-20/);
});

regressionTest('show spinner while loading', async ({ mount, page }) => {
  await mount(`<ix-button>Content</ix-button>`);
  const button = page.locator('ix-button');

  await expect(button.locator('ix-spinner')).not.toBeVisible();
  await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
  await expect(button.locator('ix-spinner')).toBeVisible();
});

regressionTest(
  'replace icon with spinner while loading',
  async ({ mount, page }) => {
    await mount(`<ix-button icon="rocket">Content</ix-button>`, {
      icons: { iconRocket },
    });
    const button = page.locator('ix-button');

    await expect(button.locator('ix-spinner')).not.toBeVisible();
    await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
    await expect(button.locator('ix-spinner')).toBeVisible();
    await expect(button.locator('ix-icon')).not.toBeVisible();
  }
);

regressionTest(
  'should not fire event when disabled',
  async ({ mount, page }) => {
    await mount(`<ix-button disabled>Content</ix-button>`);
    const button = page.locator('ix-button');

    await expect(button).toHaveClass(/hydrated/);
    await expect(button).toHaveCSS('pointer-events', 'none');
  }
);

regressionTest('disabled', async ({ mount, page }) => {
  await mount('<ix-button disabled>Content</ix-button>');
  const button = page.locator('ix-button');
  const innerButton = button.locator('button');
  await expect(innerButton).toHaveAttribute('aria-disabled', 'true');
  await page.locator('ix-button').evaluate((btn: HTMLButtonElement) => {
    btn.disabled = false;
  });
  await expect(innerButton).toHaveAttribute('aria-disabled', 'false');
});

regressionTest(
  'form can be submitted multiple times',
  async ({ mount, page }) => {
    await mount(`
    <form id="test-form">
      <input type="text" name="test-input" required minlength="1">
      <ix-button type="submit">Submit</ix-button>
    </form>
  `);

    await page.evaluate(() => {
      const form = document.getElementById('test-form');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        window.submitCount = (window.submitCount || 0) + 1;
      });
    });

    const button = page.locator('ix-button');
    const input = page.locator('input[name="test-input"]');

    for (let i = 0; i < 3; i++) {
      await input.fill('test');
      await button.click();
      const submitCount = await page.evaluate(() => window.submitCount);
      expect(submitCount).toBe(i + 1);
      await page.waitForTimeout(100);
    }

    await expect(button).not.toHaveAttribute('disabled');
    await expect(button).not.toHaveClass(/loading/);
  }
);

regressionTest(
  'should not submit form when form attribute is not set',
  async ({ mount, page }) => {
    await mount(`
    <form id="test-form">
      <input type="text" name="test-input">
    </form>
    <ix-button type="submit">Submit</ix-button>
  `);

    await page.evaluate(() => {
      window.isFormSubmitted = false;
      const form = document.getElementById('test-form');
      if (!form) {
        return;
      }
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.isFormSubmitted = true;
      });
    });

    const button = page.locator('ix-button');
    await button.click();

    const formSubmitted = await page.evaluate(() => window.isFormSubmitted);
    expect(formSubmitted).toBe(false);
  }
);

regressionTest(
  'should not submit if form attribute is invalid',
  async ({ mount, page }) => {
    await mount(`
    <form id="test-form">
      <input type="text" name="test-input">
    </form>
    <ix-button type="submit" form="invalid-form">Submit</ix-button>
  `);

    await page.evaluate(() => {
      window.isFormSubmitted = false;
      const form = document.getElementById('test-form');

      if (!form) {
        return;
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.isFormSubmitted = true;
      });
    });

    const button = page.locator('ix-button');
    await button.click();

    const isFormSubmitted = await page.evaluate(() => window.isFormSubmitted);
    expect(isFormSubmitted).toBe(false);
  }
);

regressionTest(
  'should submit form when form attribute is set',
  async ({ mount, page }) => {
    await mount(`
    <form id="test-form">
      <input type="text" name="test-input">
    </form>
    <ix-button type="submit" form="test-form">Submit</ix-button>
  `);

    await page.evaluate(() => {
      window.isFormSubmitted = false;
      const form = document.getElementById('test-form');

      if (!form) {
        return;
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.isFormSubmitted = true;
      });
    });

    const button = page.locator('ix-button');

    await button.click();

    const formSubmitted = await page.evaluate(() => window.isFormSubmitted);
    expect(formSubmitted).toBe(true);
  }
);
