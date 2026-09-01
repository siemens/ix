/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
  test,
} from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-checkbox label="Accept terms"></ix-checkbox>`);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-checkbox label="Accept terms"></ix-checkbox>`);

  const element = page.locator('ix-checkbox');
  await expect(element).toHaveClass(/\bhydrated\b/);
  await expect(element).toBeVisible();
});

regressionTest(
  'exposes role checkbox with accessible name from label and no nested button',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox label="Accept terms"></ix-checkbox>`);

    const checkbox = page.getByRole('checkbox', { name: 'Accept terms' });
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await expect(checkbox).toHaveAttribute('aria-required', 'false');

    await expect(page.getByRole('button')).toHaveCount(0);
  }
);

regressionTest(
  'exposes role checkbox with accessible name from slotted content',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox>Accept the <b>terms</b></ix-checkbox>`);

    const checkbox = page.getByRole('checkbox', {
      name: 'Accept the terms',
    });
    await expect(checkbox).toBeVisible();
  }
);

regressionTest(
  'space key toggles checked state while focused',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox label="Accept terms"></ix-checkbox>`);

    const checkbox = page.getByRole('checkbox', { name: 'Accept terms' });
    await checkbox.focus();

    await page.keyboard.press('Space');
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');

    await page.keyboard.press('Space');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
  }
);

regressionTest(
  'keyboard activation is not undone by a follow-up click',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox label="Accept terms"></ix-checkbox>`);

    const checkbox = page.getByRole('checkbox', { name: 'Accept terms' });
    await checkbox.focus();

    await page.keyboard.down('Space');
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');

    await checkbox.dispatchEvent('click', {
      bubbles: true,
      cancelable: true,
      detail: 0,
    });

    await page.keyboard.up('Space');
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  }
);

regressionTest(
  'clicking disabled checkbox does not toggle state',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox label="Accept terms" disabled></ix-checkbox>`);

    const checkbox = page.getByRole('checkbox', { name: 'Accept terms' });
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');

    await checkbox.click({ force: true });
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
  }
);

regressionTest(
  'emits checkedChange event when toggled',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox label="Accept terms"></ix-checkbox>`);

    const checkbox = page.locator('ix-checkbox');
    const eventPromise = checkbox.evaluate(
      (el) =>
        new Promise<boolean>((resolve) => {
          el.addEventListener('checkedChange', (event) =>
            resolve((event as CustomEvent<boolean>).detail)
          );
        })
    );

    await page.getByRole('checkbox', { name: 'Accept terms' }).click();
    const detail = await eventPromise;
    expect(detail).toBe(true);
  }
);

regressionTest(
  'indeterminate state is reflected on the host',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox label="Accept terms"></ix-checkbox>`);

    const checkbox = page.locator('ix-checkbox');
    await checkbox.evaluate((element: HTMLElement) => {
      (element as HTMLElement & { indeterminate: boolean }).indeterminate =
        true;
    });

    await expect(checkbox).toHaveClass(/\bindeterminate\b/);
    await expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  }
);

regressionTest(
  'required state is reflected on the host',
  async ({ mount, page }) => {
    await mount(`<ix-checkbox label="Accept terms" required></ix-checkbox>`);

    const checkbox = page.getByRole('checkbox', { name: 'Accept terms' });
    await expect(checkbox).toHaveAttribute('aria-required', 'true');
  }
);

regressionTest(`form-ready`, async ({ mount, page }) => {
  await mount(`<form><ix-checkbox name="my-field-name"></ix-checkbox></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-checkbox').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(`form-ready with value`, async ({ mount, page }) => {
  await mount(
    `<form><ix-checkbox name="my-field-name" value="custom-value"></ix-checkbox></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-checkbox').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('custom-value');
});

regressionTest(`form-ready default active`, async ({ mount, page }) => {
  await mount(
    `<form><ix-checkbox name="my-field-name" checked></ix-checkbox></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(`disabled`, async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label" disabled></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox');
  await expect(checkboxElement).toBeDisabled();
});

regressionTest(`disabled = undefined`, async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label"></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox');
  const label = checkboxElement.locator('ix-typography');

  const checkedChange$ = checkboxElement.evaluate(
    (element: HTMLIxCheckboxElement) => {
      // Needs to be tested because at runtime undefined assignment could happen
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      element.disabled = undefined as any;
      return new Promise<void>((resolve) => {
        element.addEventListener('checkedChange', () => resolve());
      });
    }
  );

  await checkboxElement.click();
  await checkedChange$;

  await expect(checkboxElement).not.toHaveClass(/disabled/);
  await expect(
    page.getByRole('checkbox', { name: 'some label' })
  ).not.toBeDisabled();

  const checkboxLabelColor = 'rgb(255, 255, 255)';
  await expect(label).toHaveCSS('color', checkboxLabelColor);
});

regressionTest(
  'label-less host size matches 24px active area',
  async ({
    mount,

    page,
  }) => {
    await mount(
      `<ix-checkbox aria-label="Accept" name="no-label"></ix-checkbox>`
    );
    const checkbox = page.locator('ix-checkbox');
    await expect(checkbox).toHaveClass(/label-less/);
    await expect(checkbox).toHaveCSS('width', '24px');
    await expect(checkbox).toHaveCSS('height', '24px');
    await expect(page.getByRole('checkbox', { name: 'Accept' })).toBeVisible();
  }
);

regressionTest(
  'default slot label is not label-less',
  async ({ mount, page }) => {
    await mount(
      `<ix-checkbox name="slot-label">Custom slot label text</ix-checkbox>`
    );
    const checkbox = page.locator('ix-checkbox');
    await expect(checkbox).not.toHaveClass(/label-less/);
    await expect(checkbox).toHaveText(/Custom slot label text/);
    const width = await checkbox.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).width)
    );
    expect(width).toBeGreaterThan(24);
  }
);

regressionTest('label', async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label"></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox').locator('label');
  await expect(checkboxElement).toHaveCount(0);
});

test('Checkbox should not cause layout shift when checked', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-checkbox label="test"></ix-checkbox>
    <div id="element-below">This element should not move</div>
  `);

  await page.waitForSelector('ix-checkbox', { state: 'attached' });

  const initialBounds = await page.$eval('#element-below', (el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  });

  await page.click('ix-checkbox');

  await page.waitForFunction(() => {
    const checkbox = document.querySelector('ix-checkbox');
    return checkbox?.getAttribute('aria-checked') === 'true';
  });

  const newBounds = await page.$eval('#element-below', (el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  });

  expect(newBounds.top).toBeCloseTo(initialBounds.top, 0);
  expect(newBounds.left).toBeCloseTo(initialBounds.left, 0);
});

test.describe('accessibility', () => {
  test('should expose aria-label for accessibility queries', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-checkbox label="Accept Terms"></ix-checkbox>`);
    const checkbox = page.getByRole('checkbox', { name: 'Accept Terms' });
    await expect(checkbox).toBeVisible();
    await checkbox.click();
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });
});
