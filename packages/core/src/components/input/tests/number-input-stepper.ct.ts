/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
import { regressionTest as test } from '@utils/test';

declare global {
  var __stepperValues: number[];
}

const mountNumberInput = async (
  mount: (selector: string) => Promise<unknown>,
  page: Page,
  attributes = ''
) => {
  await mount(
    `<ix-number-input show-stepper-buttons ${attributes}></ix-number-input>`
  );
  const numberInput = page.locator('ix-number-input');
  await expect(numberInput).toHaveAttribute('hydrated');
  await expect(numberInput.locator('.step-plus')).toHaveAttribute('hydrated');

  await numberInput.evaluate((element) => {
    globalThis.__stepperValues = [];
    element.addEventListener('valueChange', (event) =>
      globalThis.__stepperValues.push((event as CustomEvent<number>).detail)
    );
  });

  // Fake and pause timers only after mounting, so hydration is not affected
  await page.clock.install();
  await page.clock.pauseAt(Date.now() + 1000);

  return {
    numberInput,
    nativeInput: numberInput.locator('input'),
    plus: numberInput.locator('.step-plus'),
    minus: numberInput.locator('.step-minus'),
  };
};

const emittedValues = (page: Page) =>
  page.evaluate(() => globalThis.__stepperValues);

const pressAndHold = async (page: Page, button: Locator) => {
  const box = await button.boundingBox();
  if (!box) {
    throw new Error('Stepper button is not visible');
  }
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
};

const dispatchTouchPointer = (
  button: Locator,
  type: string,
  pointerId: number
) =>
  button.evaluate(
    (element, { type, pointerId }) => {
      const target = element.shadowRoot?.querySelector('button') ?? element;
      return target.dispatchEvent(
        new PointerEvent(type, {
          bubbles: true,
          composed: true,
          cancelable: true,
          pointerId,
          pointerType: 'touch',
          isPrimary: true,
        })
      );
    },
    { type, pointerId }
  );

test.describe('ix-number-input stepper press and hold', () => {
  test('steps once on press and repeats after the initial delay', async ({
    mount,
    page,
  }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await pressAndHold(page, plus);
    await expect(nativeInput).toHaveValue('1');

    await page.clock.runFor(399);
    await expect(nativeInput).toHaveValue('1');

    await page.clock.runFor(1);
    await expect(nativeInput).toHaveValue('2');

    await page.clock.runFor(100);
    await expect(nativeInput).toHaveValue('3');

    await page.mouse.up();
    await page.clock.runFor(2000);
    await expect(nativeInput).toHaveValue('3');
    expect(await emittedValues(page)).toEqual([1, 2, 3]);
  });

  test('speeds up while the button is held', async ({ mount, page }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await pressAndHold(page, plus);
    await page.clock.runFor(2400);
    await page.mouse.up();

    // A constant 100 ms repeat would reach 1 + 1 + 20 = 22 after 2400 ms
    const value = Number(await nativeInput.inputValue());
    expect(value).toBeGreaterThan(30);

    const values = await emittedValues(page);
    expect(values).toEqual(values.map((_, index) => index + 1));
  });

  test('decrements while the minus button is held', async ({ mount, page }) => {
    const { nativeInput, minus } = await mountNumberInput(
      mount,
      page,
      'value="10" step="0.5"'
    );

    await pressAndHold(page, minus);
    await page.clock.runFor(500);
    await page.mouse.up();

    await expect(nativeInput).toHaveValue('8.5');
    expect(await emittedValues(page)).toEqual([9.5, 9, 8.5]);
  });

  test('a single click steps exactly once', async ({ mount, page }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await plus.click();
    await page.clock.runFor(2000);

    await expect(nativeInput).toHaveValue('1');
    expect(await emittedValues(page)).toEqual([1]);
  });

  test('stops repeating when the pointer leaves the button', async ({
    mount,
    page,
  }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await pressAndHold(page, plus);
    await page.clock.runFor(400);
    await expect(nativeInput).toHaveValue('2');

    await page.mouse.move(0, 0);
    await page.clock.runFor(2000);
    await page.mouse.up();

    await expect(nativeInput).toHaveValue('2');
  });

  test('stops at max', async ({ mount, page }) => {
    const { nativeInput, plus } = await mountNumberInput(
      mount,
      page,
      'value="1" max="4"'
    );

    await pressAndHold(page, plus);
    await page.clock.runFor(5000);
    await page.mouse.up();

    await expect(nativeInput).toHaveValue('4');
    expect(await emittedValues(page)).toEqual([2, 3, 4]);
  });

  test('stops at min', async ({ mount, page }) => {
    const { nativeInput, minus } = await mountNumberInput(
      mount,
      page,
      'value="3" min="0"'
    );

    await pressAndHold(page, minus);
    await page.clock.runFor(5000);
    await page.mouse.up();

    await expect(nativeInput).toHaveValue('0');
    expect(await emittedValues(page)).toEqual([2, 1, 0]);
  });

  test('does not step on secondary mouse button', async ({ mount, page }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await plus.click({ button: 'right' });
    await page.clock.runFor(1000);

    await expect(nativeInput).toHaveValue('0');
    expect(await emittedValues(page)).toEqual([]);
  });

  test('stops repeating when the input gets disabled', async ({
    mount,
    page,
  }) => {
    const { numberInput, nativeInput, plus } = await mountNumberInput(
      mount,
      page
    );

    await pressAndHold(page, plus);
    await page.clock.runFor(400);
    await expect(nativeInput).toHaveValue('2');

    await numberInput.evaluate((element: HTMLIxNumberInputElement) => {
      element.disabled = true;
    });
    await page.clock.runFor(2000);
    await page.mouse.up();

    await expect(nativeInput).toHaveValue('2');
  });

  test('repeats for touch and ignores other pointers', async ({
    mount,
    page,
  }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await dispatchTouchPointer(plus, 'pointerdown', 7);
    await expect(nativeInput).toHaveValue('1');

    await page.clock.runFor(400);
    await expect(nativeInput).toHaveValue('2');

    // The long press must not open the context menu
    const contextMenuAllowed = await dispatchTouchPointer(
      plus,
      'contextmenu',
      7
    );
    expect(contextMenuAllowed).toBe(false);

    // Lifting a different finger keeps the repeat going
    await page.evaluate(() =>
      window.dispatchEvent(
        new PointerEvent('pointerup', { pointerId: 8, pointerType: 'touch' })
      )
    );
    await page.clock.runFor(100);
    await expect(nativeInput).toHaveValue('3');

    await page.evaluate(() =>
      window.dispatchEvent(
        new PointerEvent('pointercancel', {
          pointerId: 7,
          pointerType: 'touch',
        })
      )
    );
    await page.clock.runFor(2000);
    await expect(nativeInput).toHaveValue('3');
  });

  test('a click without a pointer press still steps', async ({
    mount,
    page,
  }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await plus.evaluate((element) => {
      element.click();
      element.dispatchEvent(
        new MouseEvent('click', { bubbles: true, composed: true, detail: 1 })
      );
    });

    await expect(nativeInput).toHaveValue('2');
    expect(await emittedValues(page)).toEqual([1, 2]);
  });

  test('keyboard activation of a stepper button steps once', async ({
    mount,
    page,
  }) => {
    const { nativeInput, plus } = await mountNumberInput(mount, page);

    await plus.focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Space');

    await expect(nativeInput).toHaveValue('2');
    expect(await emittedValues(page)).toEqual([1, 2]);
  });
});
