/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test } from '@utils/test';
import { expect } from '@playwright/test';

test.describe('validation', () => {
  test.describe('ix-input', () => {
    test('validation class should persist if provided by user', async ({
      mount,
      page,
    }) => {
      await mount('<ix-input class="ix-invalid"></ix-input>');
      const input = page.locator('ix-input');
      const shadowDomInput = input.locator('input');

      await shadowDomInput.fill('my example');
      await shadowDomInput.blur();

      await expect(input).toHaveClass(/ix-invalid/);
    });

    test('min-length validation should be triggered', async ({
      mount,
      page,
    }) => {
      await mount('<ix-input min-length="3" value="123"></ix-input>');

      const input = page.locator('ix-input');
      const shadowDomInput = input.locator('input');

      await shadowDomInput.fill('12');
      await shadowDomInput.blur();

      await expect(input).toHaveClass(/ix-invalid/);
    });
  });

  test.describe('ix-number-input', () => {
    test('number input should NOT be invalid if value is zero (zero is valid)', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input required></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.fill('0');
      await shadowDomInput.blur();

      await expect(ixInput).not.toHaveClass(/ix-invalid--required/);
    });

    test('validityStateChange emitted only if validity change', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input required value="10"></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await ixInput.evaluate((el) => {
        (el as any).__validityChanged = false;
        el.addEventListener('validityStateChange', () => {
          (el as any).__validityChanged = true;
        });
      });

      await shadowDomInput.fill('15');
      await shadowDomInput.blur();

      const firstCheckResult = await ixInput.evaluate(
        (el) => (el as any).__validityChanged
      );
      expect(firstCheckResult).toBe(false);

      await ixInput.evaluate((el) => {
        (el as any).__validityChanged = false;
      });

      await shadowDomInput.clear();
      await shadowDomInput.blur();

      const secondCheckResult = await ixInput.evaluate(
        (el) => (el as any).__validityChanged
      );
      expect(secondCheckResult).toBe(true);
    });

    test('number input should be invalid if value is empty and required', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input required></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.fill('');
      await shadowDomInput.blur();
      await expect(ixInput).toHaveClass(/ix-invalid--required/);
    });

    test('number input should accept scientific notation', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input step="0.1"></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.fill('1E6');
      await shadowDomInput.blur();
      await expect(shadowDomInput).toHaveValue('1000000');
      await expect(ixInput).not.toHaveClass(/ix-invalid/);

      await shadowDomInput.fill('1E-1');
      await shadowDomInput.blur();
      await expect(shadowDomInput).toHaveValue('0.1');
      await expect(ixInput).not.toHaveClass(/ix-invalid/);

      await shadowDomInput.fill('2.5e3');
      await shadowDomInput.blur();
      await expect(shadowDomInput).toHaveValue('2500');
      await expect(ixInput).not.toHaveClass(/ix-invalid/);
    });

    test('number input should be valid when empty and not required', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.fill('');
      await shadowDomInput.blur();
      await expect(ixInput).not.toHaveClass(/ix-invalid/);
    });

    test('number input should reject letter input', async ({ mount, page }) => {
      await mount('<ix-number-input required value="1"></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.pressSequentially('abc');

      await expect(shadowDomInput).toHaveValue('1');
    });

    test('increment by step', async ({ mount, page }) => {
      await mount(
        '<ix-number-input show-stepper-buttons step="3" value="5"></ix-number-input>'
      );

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');
      await expect(shadowDomInput).toHaveAttribute('step', '3');
      await expect(ixInput).toHaveAttribute('value', '5');

      const buttonPlus = ixInput.getByLabel('increment number');
      await buttonPlus.click();

      await expect(ixInput).toHaveAttribute('value', '8');
    });

    test('stepper buttons should handle undefined values', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input show-stepper-buttons></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      ixInput.evaluate((el) => {
        // @ts-ignore
        el.value = undefined;
      });

      const buttonPlus = ixInput.getByLabel('increment number');
      await buttonPlus.click();

      await expect(shadowDomInput).toHaveValue('1');
    });
  });
});

test.describe.configure({
  mode: 'parallel',
});

function getInputSelector(selector: string): string {
  return selector === 'ix-textarea' ? 'textarea' : 'input';
}

function setupIxChangeEmittedListener(el: Element): void {
  (globalThis as any).__ixChangeEmitted = false;
  el.addEventListener('ixChange', () => {
    (globalThis as any).__ixChangeEmitted = true;
  });
}

function setupIxChangeCountListener(el: Element): void {
  (globalThis as any).__ixChangeCount = 0;
  el.addEventListener('ixChange', () => {
    (globalThis as any).__ixChangeCount++;
  });
}

function setupIxChangeValueListener(el: Element): void {
  (globalThis as any).__ixChangeValue = undefined;
  (globalThis as any).__ixChangeEmitted = false;
  el.addEventListener('ixChange', ((e: CustomEvent) => {
    (globalThis as any).__ixChangeValue = e.detail;
    (globalThis as any).__ixChangeEmitted = true;
  }) as EventListener);
}

function getIxChangeEmitted(): boolean {
  return (globalThis as any).__ixChangeEmitted === true;
}

function getIxChangeCount(): number {
  return (globalThis as any).__ixChangeCount;
}

function getIxChangeValue<T>(): T {
  return (globalThis as any).__ixChangeValue as T;
}

function createIxChangePromise<T>(el: Element): Promise<T> {
  return new Promise<T>((resolve) => {
    el.addEventListener('ixChange', ((e: CustomEvent) => {
      resolve(e.detail);
    }) as EventListener);
  });
}

function createValidityOrValueChangePromise(
  el: Element,
  eventTriggered: number
): Promise<{ event: string; count?: number }> {
  return new Promise((resolve) => {
    el.addEventListener('validityStateChange', () => {
      eventTriggered++;
      resolve({ event: 'validityStateChange', count: eventTriggered });
    });
    el.addEventListener('valueChange', () => {
      resolve({ event: 'valueChange' });
    });
  });
}

function createValidityOrValueChangePromiseSimple(
  el: Element
): Promise<{ event: string; count?: number }> {
  return new Promise((resolve) => {
    el.addEventListener('validityStateChange', () => {
      resolve({ event: 'validityStateChange' });
    });
    el.addEventListener('valueChange', () => {
      resolve({ event: 'valueChange' });
    });
  });
}

function setElementValue(el: Element, value: string): void {
  (el as any).value = value;
}

test.describe('ixChange event', () => {
  test.describe('on blur', () => {
    ['ix-input', 'ix-textarea'].forEach((selector) => {
      test(`${selector} - should emit ixChange on blur when value changed`, async ({
        mount,
        page,
      }) => {
        await mount(`<${selector} value="initial"></${selector}>`);

        const component = page.locator(selector);
        const input = component.locator(getInputSelector(selector));

        const ixChangePromise = component.evaluate(
          createIxChangePromise<string>
        );

        await input.focus();
        await input.fill('changed');
        await input.blur();

        const emittedValue = await ixChangePromise;
        expect(emittedValue).toBe('changed');
      });

      test(`${selector} - should NOT emit ixChange on blur when value unchanged`, async ({
        mount,
        page,
      }) => {
        await mount(`<${selector} value="initial"></${selector}>`);

        const component = page.locator(selector);
        const input = component.locator(getInputSelector(selector));

        await component.evaluate(setupIxChangeEmittedListener);

        await input.focus();
        await input.blur();

        const ixChangeEmitted = await page.evaluate(getIxChangeEmitted);
        expect(ixChangeEmitted).toBe(false);
      });
    });

    test('ix-number-input - should emit ixChange on blur when value changed', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input value="100"></ix-number-input>');

      const component = page.locator('ix-number-input');
      const input = component.locator('input');

      const ixChangePromise = component.evaluate(createIxChangePromise<number>);

      await input.focus();
      await input.fill('200');
      await input.blur();

      const emittedValue = await ixChangePromise;
      expect(emittedValue).toBe(200);
    });

    test('ix-number-input - should NOT emit ixChange on blur when value unchanged', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input value="100"></ix-number-input>');

      const component = page.locator('ix-number-input');
      const input = component.locator('input');

      await component.evaluate(setupIxChangeEmittedListener);

      await input.focus();
      await input.blur();

      const ixChangeEmitted = await page.evaluate(getIxChangeEmitted);
      expect(ixChangeEmitted).toBe(false);
    });
  });

  test.describe('on Enter keydown', () => {
    test('ix-input - should emit ixChange on Enter when value changed', async ({
      mount,
      page,
    }) => {
      await mount('<ix-input value="initial"></ix-input>');

      const component = page.locator('ix-input');
      const input = component.locator('input');

      const ixChangePromise = component.evaluate(createIxChangePromise<string>);

      await input.focus();
      await input.fill('changed');
      await input.press('Enter');

      const emittedValue = await ixChangePromise;
      expect(emittedValue).toBe('changed');
    });

    test('ix-input - should NOT double-emit ixChange on Enter then blur', async ({
      mount,
      page,
    }) => {
      await mount('<ix-input value="initial"></ix-input>');

      const component = page.locator('ix-input');
      const input = component.locator('input');

      await component.evaluate(setupIxChangeCountListener);

      await input.focus();
      await input.fill('changed');
      await input.press('Enter');
      await input.blur();

      const count = await page.evaluate(getIxChangeCount);
      expect(count).toBe(1);
    });

    test('ix-number-input - should emit ixChange on Enter when value changed', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input value="100"></ix-number-input>');

      const component = page.locator('ix-number-input');
      const input = component.locator('input');

      const ixChangePromise = component.evaluate(createIxChangePromise<number>);

      await input.focus();
      await input.fill('200');
      await input.press('Enter');

      const emittedValue = await ixChangePromise;
      expect(emittedValue).toBe(200);
    });

    test('ix-number-input - should NOT double-emit ixChange on Enter then blur', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input value="100"></ix-number-input>');

      const component = page.locator('ix-number-input');
      const input = component.locator('input');

      await component.evaluate(setupIxChangeCountListener);

      await input.focus();
      await input.fill('200');
      await input.press('Enter');
      await input.blur();

      const count = await page.evaluate(getIxChangeCount);
      expect(count).toBe(1);
    });

    test('ix-textarea - should NOT emit ixChange on Enter (Enter creates newline)', async ({
      mount,
      page,
    }) => {
      await mount('<ix-textarea value="initial"></ix-textarea>');

      const component = page.locator('ix-textarea');
      const textarea = component.locator('textarea');

      await component.evaluate(setupIxChangeEmittedListener);

      await textarea.focus();
      await textarea.fill('changed');
      await textarea.press('Enter');

      const emitted = await page.evaluate(getIxChangeEmitted);
      expect(emitted).toBe(false);
    });
  });

  test.describe('on picker selection', () => {
    test('ix-time-input - should emit ixChange when time is picked', async ({
      mount,
      page,
    }) => {
      await mount(
        '<ix-time-input format="HH:mm:ss" value="10:00:00"></ix-time-input>'
      );

      const component = page.locator('ix-time-input');
      const input = component.locator('input');
      const clockButton = component.getByTestId('open-time-picker');

      await component.evaluate(setupIxChangeValueListener);

      await input.focus();
      await clockButton.click();

      const dropdown = page.getByTestId('time-dropdown');
      await expect(dropdown).toBeVisible();

      const timePicker = component.locator('ix-time-picker');
      await timePicker.locator('[data-element-container-id="hour-12"]').click();
      const confirmButton = timePicker.locator('ix-button');
      await confirmButton.click();

      await page.waitForFunction(getIxChangeEmitted, { timeout: 5000 });

      const emittedValue = await page.evaluate(getIxChangeValue<string>);
      expect(emittedValue).toBeDefined();
      expect(typeof emittedValue).toBe('string');
      expect(emittedValue).toContain('12:');
    });
  });

  test.describe('programmatic value changes', () => {
    ['ix-input', 'ix-number-input', 'ix-textarea'].forEach((selector) => {
      test(`${selector} - should NOT emit ixChange on programmatic value change`, async ({
        mount,
        page,
      }) => {
        await mount(`<${selector} value="initial"></${selector}>`);

        const component = page.locator(selector);

        await component.evaluate(setupIxChangeEmittedListener);

        await component.evaluate(setElementValue, 'programmatic');

        await page.waitForTimeout(100);

        const emitted = await page.evaluate(getIxChangeEmitted);
        expect(emitted).toBe(false);
      });
    });

    test('ix-date-input - should NOT emit ixChange on programmatic value change', async ({
      mount,
      page,
    }) => {
      await mount(
        '<ix-date-input format="yyyy/LL/dd" value="2024/01/01"></ix-date-input>'
      );

      const component = page.locator('ix-date-input');

      await component.evaluate(setupIxChangeEmittedListener);

      await component.evaluate((el: any) => {
        el.value = '2024/12/31';
      });

      await page.waitForTimeout(100);

      const emitted = await page.evaluate(getIxChangeEmitted);
      expect(emitted).toBe(false);
    });

    test('ix-time-input - should NOT emit ixChange on programmatic value change', async ({
      mount,
      page,
    }) => {
      await mount('<ix-time-input format="HH:mm:ss"></ix-time-input>');

      const component = page.locator('ix-time-input');

      await component.evaluate(setupIxChangeEmittedListener);

      await component.evaluate((el: any) => {
        el.value = '23:59:59';
      });

      await page.waitForTimeout(100);

      const emitted = await page.evaluate(getIxChangeEmitted);
      expect(emitted).toBe(false);
    });
  });

  test.describe('disabled and readonly states', () => {
    ['ix-input', 'ix-number-input', 'ix-textarea'].forEach((selector) => {
      test(`${selector} - should NOT emit ixChange when disabled`, async ({
        mount,
        page,
      }) => {
        await mount(`<${selector} value="initial" disabled></${selector}>`);

        const component = page.locator(selector);
        const input = component.locator(getInputSelector(selector));

        await component.evaluate(setupIxChangeEmittedListener);

        try {
          await input.focus({ timeout: 1000 });
        } catch {
          // Expected - disabled inputs cannot be focused
        }

        const emitted = await page.evaluate(getIxChangeEmitted);
        expect(emitted).toBe(false);
      });

      test(`${selector} - should NOT emit ixChange when readonly`, async ({
        mount,
        page,
      }) => {
        await mount(`<${selector} value="initial" readonly></${selector}>`);

        const component = page.locator(selector);
        const input = component.locator(getInputSelector(selector));

        await component.evaluate(setupIxChangeEmittedListener);

        await input.focus();
        await input.blur();

        const emitted = await page.evaluate(getIxChangeEmitted);
        expect(emitted).toBe(false);
      });
    });
  });

  test.describe('empty value transitions', () => {
    ['ix-input', 'ix-textarea'].forEach((selector) => {
      test(`${selector} - should emit ixChange when changing from empty to value`, async ({
        mount,
        page,
      }) => {
        await mount(`<${selector} value=""></${selector}>`);

        const component = page.locator(selector);
        const input = component.locator(getInputSelector(selector));

        const ixChangePromise = component.evaluate(
          createIxChangePromise<string>
        );

        await input.focus();
        await input.fill('new value');
        await input.blur();

        const emittedValue = await ixChangePromise;
        expect(emittedValue).toBe('new value');
      });

      test(`${selector} - should emit ixChange when changing from value to empty`, async ({
        mount,
        page,
      }) => {
        await mount(`<${selector} value="existing"></${selector}>`);

        const component = page.locator(selector);
        const input = component.locator(getInputSelector(selector));

        const ixChangePromise = component.evaluate(
          createIxChangePromise<string>
        );

        await input.focus();
        await input.fill('');
        await input.blur();

        const emittedValue = await ixChangePromise;
        expect(emittedValue).toBe('');
      });
    });

    test('ix-number-input - should emit ixChange when changing from empty to value', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input></ix-number-input>');

      const component = page.locator('ix-number-input');
      const input = component.locator('input');

      const ixChangePromise = component.evaluate(createIxChangePromise<number>);

      await input.focus();
      await input.fill('42');
      await input.blur();

      const emittedValue = await ixChangePromise;
      expect(emittedValue).toBe(42);
    });

    test('ix-number-input - should emit ixChange when changing from value to empty', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input value="100"></ix-number-input>');

      const component = page.locator('ix-number-input');
      const input = component.locator('input');

      const ixChangePromise = component.evaluate(
        createIxChangePromise<number | undefined>
      );

      await input.focus();
      await input.fill('');
      await input.blur();

      const emittedValue = await ixChangePromise;
      expect(
        emittedValue === undefined ||
          emittedValue === null ||
          Number.isNaN(emittedValue)
      ).toBe(true);
    });
  });
});

test.describe('prevent initial require validation', async () => {
  [
    'ix-input',
    'ix-number-input',
    'ix-date-input',
    'ix-select',
    'ix-textarea',
  ].forEach((selector) => {
    test(`${selector} - should not show validation on initial load`, async ({
      mount,
      page,
    }) => {
      const template =
        selector === 'ix-number-input'
          ? `<${selector} required value="undefined"></${selector}>`
          : `<${selector} required value=""></${selector}>`;

      await mount(template);

      const inputComponent = page.locator(selector);
      const input = inputComponent.locator(getInputSelector(selector));

      await expect(inputComponent).toBeVisible();
      await expect(inputComponent).not.toHaveClass(/ix-invalid/);

      await input.focus();
      await input.blur();

      await expect(inputComponent).toHaveClass(/ix-invalid/);
    });
  });
});
