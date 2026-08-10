/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

declare global {
  var __chipClosed: boolean | undefined;
}

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <div style="display:flex;flex-direction:column;gap:0.5rem;align-items:flex-start;">
      <ix-chip>Label</ix-chip>
      <ix-chip variant="primary" closable>Primary closable</ix-chip>
      <ix-chip variant="primary" outline closable>Primary outline closable</ix-chip>
      <ix-chip variant="warning" closable>Warning closable</ix-chip>
      <ix-chip variant="info" outline>Info outline</ix-chip>
      <ix-chip closable aria-label="Filter: status">Status</ix-chip>
      <ix-chip inactive>Inactive</ix-chip>
      <ix-chip
        variant="custom"
        background="var(--theme-color-secondary)"
        chip-color="var(--theme-color-std-text)"
        closable
      >Custom filled</ix-chip>
      <ix-chip
        variant="custom"
        background="var(--theme-color-primary)"
        chip-color="var(--theme-color-primary--contrast)"
        outline
        closable
      >Custom outline</ix-chip>
    </div>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest(
  'forwards host aria-label to main button and sets group role',
  async ({ mount, page }) => {
    await mount(`<ix-chip closable aria-label="Project Alpha">PA</ix-chip>`);
    const chip = page.locator('ix-chip');
    await expect(chip).toHaveAttribute('role', 'group');

    await expect(
      page.getByRole('button', { name: 'Project Alpha' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Close chip' })
    ).toBeVisible();
  }
);

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-chip></ix-chip>`);
  const datePicker = page.locator('ix-chip');
  await expect(datePicker).toHaveClass(/hydrated/);
});

regressionTest.describe('default variant fallback', () => {
  regressionTest(
    'applies primary styling when no variant attribute is set',
    async ({ mount, page }) => {
      await mount(`<ix-chip>Default</ix-chip>`);
      const chip = page.locator('ix-chip');
      await expect(chip).toHaveClass(/hydrated/);
      await expect(chip).toHaveAttribute('variant', 'primary');
      await expect(chip.locator('.chip-wrap')).toHaveClass(/primary/);
    }
  );

  regressionTest(
    'falls back to primary styling when variant is empty',
    async ({ mount, page }) => {
      await mount(`<ix-chip variant="">Empty variant</ix-chip>`);
      const chip = page.locator('ix-chip');
      await expect(chip).toHaveClass(/hydrated/);
      await expect(chip.locator('.chip-wrap')).toHaveClass(/primary/);
    }
  );

  regressionTest(
    'falls back to primary styling when variant is unknown',
    async ({ mount, page }) => {
      await mount(`<ix-chip variant="not-a-variant">Bad variant</ix-chip>`);
      const chip = page.locator('ix-chip');
      await expect(chip).toHaveClass(/hydrated/);
      await expect(chip.locator('.chip-wrap')).toHaveClass(/primary/);
    }
  );

  regressionTest(
    'applies primary outline styling when only the outline attribute is set',
    async ({ mount, page }) => {
      await mount(`<ix-chip outline>Default outline</ix-chip>`);
      const chip = page.locator('ix-chip');
      await expect(chip).toHaveClass(/hydrated/);
      const wrap = chip.locator('.chip-wrap');
      await expect(wrap).toHaveClass(/primary/);
      await expect(wrap).toHaveClass(/outline/);
    }
  );
});

regressionTest.describe('chip test', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `
      <ix-chip>Label</ix-chip>
      <ix-chip outline>Label</ix-chip>
      `
    );
  });

  regressionTest(
    'outline and normal variant should have the same width',
    async ({ page }) => {
      await page.waitForSelector('ix-chip');

      const normalChipElement = page.locator('ix-chip').first();
      const outlineChipElement = page.locator('ix-chip').last();

      const normalChipSize = (await normalChipElement.boundingBox()) as {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      const outlineChipSize = (await outlineChipElement.boundingBox()) as {
        x: number;
        y: number;
        width: number;
        height: number;
      };

      expect(normalChipSize).not.toBeNull();
      expect(outlineChipSize).not.toBeNull();
      expect(normalChipSize.width).toEqual(outlineChipSize.width);
    }
  );
});

regressionTest('check inactive class', async ({ mount, page }) => {
  await mount(`<ix-chip inactive>test</ix-chip>`);
  const chip = page.locator('ix-chip');
  await expect(chip).toHaveClass('inactive hydrated');
});

regressionTest(
  'keeps inactive closable chip text from overlapping the close button',
  async ({ mount, page }) => {
    await mount(
      `<ix-chip inactive closable style="width: 8rem">Long inactive chip text</ix-chip>`
    );

    const chip = page.locator('ix-chip');
    const slotContainer = chip.locator('.slot-container');
    const closeButton = chip.locator('.chip-close');

    await expect(closeButton).toBeVisible();

    const slotBox = await slotContainer.boundingBox();
    const closeBox = await closeButton.boundingBox();

    expect(slotBox).not.toBeNull();
    expect(closeBox).not.toBeNull();
    expect(slotBox!.x + slotBox!.width).toBeLessThanOrEqual(closeBox!.x);
  }
);

regressionTest(
  'truncates overflowing chip text with an ellipsis',
  async ({ mount, page }) => {
    await mount(
      `<ix-chip closable style="width: 8rem">Long overflowing chip text</ix-chip>`
    );

    const slotContainer = page.locator('ix-chip').locator('.slot-container');

    const overflowState = await slotContainer.evaluate((element) => {
      const style = getComputedStyle(element);

      return {
        clientWidth: element.clientWidth,
        overflow: style.overflow,
        scrollWidth: element.scrollWidth,
        textOverflow: style.textOverflow,
        whiteSpace: style.whiteSpace,
      };
    });

    expect(overflowState.scrollWidth).toBeGreaterThan(
      overflowState.clientWidth
    );
    expect(overflowState.overflow).toBe('hidden');
    expect(overflowState.textOverflow).toBe('ellipsis');
    expect(overflowState.whiteSpace).toBe('nowrap');
  }
);

regressionTest(
  'emits closeChip when the close button is clicked on an inactive chip',
  async ({ mount, page }) => {
    await mount(`<ix-chip inactive closable>Inactive chip</ix-chip>`);

    await page.evaluate(() => {
      globalThis.__chipClosed = false;
      document.querySelector('ix-chip')?.addEventListener('closeChip', () => {
        globalThis.__chipClosed = true;
      });
    });

    await page.locator('ix-chip').locator('.chip-close').click();

    await expect
      .poll(() => page.evaluate(() => globalThis.__chipClosed))
      .toBe(true);
  }
);

regressionTest(
  'does not apply main hover and active styles when inactive',
  async ({ mount, page }) => {
    await mount(`<ix-chip inactive closable>Inactive chip</ix-chip>`);

    const chipMain = page.locator('ix-chip').locator('.chip-main');
    const chipMainBox = await chipMain.boundingBox();

    expect(chipMainBox).not.toBeNull();

    const getBackgroundColor = () =>
      chipMain.evaluate((element) => getComputedStyle(element).backgroundColor);

    const defaultBackgroundColor = await getBackgroundColor();

    await page.mouse.move(
      chipMainBox!.x + chipMainBox!.width / 2,
      chipMainBox!.y + chipMainBox!.height / 2
    );
    await expect.poll(getBackgroundColor).toBe(defaultBackgroundColor);

    await page.mouse.down();
    await expect.poll(getBackgroundColor).toBe(defaultBackgroundColor);
    await page.mouse.up();
  }
);

regressionTest.describe('tooltip', () => {
  regressionTest(
    'should not display when tooltip-text attribute is absent',
    async ({ mount, page }) => {
      await mount('<ix-chip>Text content</ix-chip>');
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).not.toHaveAttribute('tooltip-text');
      const tooltip = chip.locator('ix-tooltip');
      await expect(tooltip).not.toBeAttached();
    }
  );

  regressionTest(
    'should display the component text content when tooltip-text attribute is an empty string',
    async ({ mount, page }) => {
      await mount('<ix-chip tooltip-text="">Text content</ix-chip>');
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).toHaveAttribute('tooltip-text', '');
      const tooltip = chip.locator('ix-tooltip');
      await expect(tooltip).toHaveClass(/visible/);
      await expect(tooltip).toHaveText(/Text content/);
    }
  );

  regressionTest(
    'should display the component text content when tooltip-text attribute is present but no value is set',
    async ({ mount, page }) => {
      await mount('<ix-chip tooltip-text>Text content</ix-chip>');
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).toHaveAttribute('tooltip-text', undefined);
      const tooltip = chip.locator('ix-tooltip');
      await expect(tooltip).toHaveClass(/visible/);
      await expect(tooltip).toHaveText(/Text content/);
    }
  );

  regressionTest(
    'should display the custom text when tooltip-text attribute is a custom string',
    async ({ mount, page }) => {
      await mount(
        '<ix-chip tooltip-text="custom tooltip text">Text content</ix-chip>'
      );
      const chip = page.locator('ix-chip');
      await chip.hover();

      await expect(chip).toHaveAttribute('tooltip-text', 'custom tooltip text');
      const tooltip = chip.locator('ix-tooltip');
      await expect(tooltip).toHaveClass(/visible/);
      await expect(tooltip).toHaveText(/custom tooltip text/);
    }
  );
});
