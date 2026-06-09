/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

const FOCUS_VISIBLE_CLASS = 'ix-focused';

/**
 * Verifies that calling focusInput() programmatically applies the same
 * focus-visible ring (ix-focused class on the host) as Tab-key navigation.
 *
 * Before IxFocusableComponent:
 *   focusInput() → nativeEl.focus() → keyboardMode still false → no ring ❌
 *
 * After IxFocusableComponent:
 *   focusInput() → setFocus(el) → programmaticFocusPending=true → focusin
 *   → ix-focused applied ✅
 */

// ── ix-input ──────────────────────────────────────────────────────────────────

regressionTest(
  'ix-input: focusInput() applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-input label="Email" type="email"></ix-input>`);
    const host = page.locator('ix-input');

    await host.evaluate(async (el: HTMLIxInputElement) => {
      await el.focusInput();
    });

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);

regressionTest(
  'ix-input: Tab-key focus applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-input label="Email" type="email"></ix-input>`);
    const host = page.locator('ix-input');

    await page.keyboard.press('Tab');

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);

regressionTest(
  'ix-input: focus-visible class removed on blur',
  async ({ mount, page }) => {
    await mount(`<ix-input label="Email" type="email"></ix-input>`);
    const host = page.locator('ix-input');

    await page.keyboard.press('Tab');
    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));

    await page.keyboard.press('Tab');
    await expect(host).not.toHaveClass(
      new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`)
    );
  }
);

regressionTest(
  'ix-input: pointer click does NOT apply focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-input label="Email" type="email"></ix-input>`);
    const host = page.locator('ix-input');

    await host.click();

    await expect(host).not.toHaveClass(
      new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`)
    );
  }
);

// ── ix-number-input ───────────────────────────────────────────────────────────

regressionTest(
  'ix-number-input: focusInput() applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-number-input label="Amount"></ix-number-input>`);
    const host = page.locator('ix-number-input');

    await host.evaluate(async (el: HTMLIxNumberInputElement) => {
      await el.focusInput();
    });

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);

// ── ix-textarea ───────────────────────────────────────────────────────────────

regressionTest(
  'ix-textarea: focusInput() applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-textarea label="Notes"></ix-textarea>`);
    const host = page.locator('ix-textarea');

    await host.evaluate(async (el: HTMLIxTextareaElement) => {
      await el.focusInput();
    });

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);

// ── ix-date-input ─────────────────────────────────────────────────────────────

regressionTest(
  'ix-date-input: focusInput() applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-date-input label="Date"></ix-date-input>`);
    const host = page.locator('ix-date-input');

    await host.evaluate(async (el: HTMLIxDateInputElement) => {
      await el.focusInput();
    });

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);

// ── ix-time-input ─────────────────────────────────────────────────────────────

regressionTest(
  'ix-time-input: focusInput() applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-time-input label="Time"></ix-time-input>`);
    const host = page.locator('ix-time-input');

    await host.evaluate(async (el: HTMLIxTimeInputElement) => {
      await el.focusInput();
    });

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);

// ── ix-datetime-input ─────────────────────────────────────────────────────────

regressionTest(
  'ix-datetime-input: focusInput() applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`<ix-datetime-input label="Date & Time"></ix-datetime-input>`);
    const host = page.locator('ix-datetime-input');

    await host.evaluate(async (el: HTMLIxDatetimeInputElement) => {
      await el.focusInput();
    });

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);

// ── ix-select ─────────────────────────────────────────────────────────────────

regressionTest(
  'ix-select: focusInput() applies focus-visible class',
  async ({ mount, page }) => {
    await mount(`
      <ix-select label="Options">
        <ix-select-item value="1" label="One"></ix-select-item>
        <ix-select-item value="2" label="Two"></ix-select-item>
      </ix-select>
    `);
    const host = page.locator('ix-select');

    await host.evaluate(async (el: HTMLIxSelectElement) => {
      await el.focusInput();
    });

    await expect(host).toHaveClass(new RegExp(`\\b${FOCUS_VISIBLE_CLASS}\\b`));
  }
);
