/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of thi  s source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '8px');
  await expect(input).toHaveCSS('padding-right', '15px');
});

regressionTest('initial padding start', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <span slot="input-start">
        <ix-icon name="eye" size="16"></ix-icon>
      </span>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '27px');
  await expect(input).toHaveCSS('padding-right', '15px');
});

regressionTest('initial padding end', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <span slot="input-start">
          <ix-icon name="eye" size="16"></ix-icon>
        </span>
        <span slot="input-end">
        <ix-icon name="eye" size="16"></ix-icon>
      </span>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '27px');
  await expect(input).toHaveCSS('padding-right', '31px');
});

regressionTest('update padding end', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '8px');
  await expect(input).toHaveCSS('padding-right', '15px');

  await group.evaluate((group: HTMLElement) => {
    const startElement = document.createElement('DIV');
    startElement.style.height = '1px';
    startElement.style.width = '40px';
    startElement.slot = 'input-start';
    group.appendChild(startElement);
  });

  await expect(input).toHaveCSS('padding-left', '51px');
  await expect(input).toHaveCSS('padding-right', '15px');

  await group.evaluate((group: HTMLElement) => {
    const endElement = document.createElement('DIV');
    endElement.style.height = '1px';
    endElement.style.width = '50px';
    endElement.slot = 'input-end';
    group.appendChild(endElement);
  });

  await expect(input).toHaveCSS('padding-left', '51px');
  await expect(input).toHaveCSS('padding-right', '65px');
});

regressionTest('validation padding', async ({ mount, page }) => {
  await mount(`
    <form class="needs-validation" noValidation>
      <ix-input-group>
        <input type="text" required />
      </ix-input-group>

      <ix-button type="submit">Submit</ix-button>
    </form>
  `);

  const form = page.locator('form');
  await form.evaluate((form) =>
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('was-validated');
    })
  );

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  const button = page.locator('ix-button');

  await button.click();

  await expect(input).toHaveCSS('background-position-x', '7px');
});

regressionTest(
  'validation padding with input-start slot',
  async ({ mount, page }) => {
    await mount(`
    <form class="needs-validation" noValidation>
      <ix-input-group>
        <ix-icon name="eye" size="12" slot="input-start"></ix-icon>
        <input type="text" required />
      </ix-input-group>

      <ix-button type="submit">Submit</ix-button>
    </form>
  `);

    const form = page.locator('form');
    await form.evaluate((form) =>
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('was-validated');
      })
    );

    const group = page.locator('ix-input-group');
    await expect(group).toHaveClass(/hydrated/);

    const input = group.locator('input');
    const button = page.locator('ix-button');

    await button.click();

    await expect(input).toHaveCSS('background-position-x', '23px');
    await expect(input).toHaveCSS('padding-left', '49px');
  }
);

regressionTest(
  'validation with class padding with input-start slot',
  async ({ mount, page }) => {
    await mount(`
    <form class="needs-validation" noValidation>
      <ix-input-group>
        <ix-icon name="eye" size="12" slot="input-start"></ix-icon>
        <input type="text" class="is-invalid" />
      </ix-input-group>
    </form>
  `);

    const form = page.locator('form');
    await form.evaluate((form) =>
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('was-validated');
      })
    );

    const group = page.locator('ix-input-group');
    await expect(group).toHaveClass(/hydrated/);

    const input = group.locator('input');

    await expect(input).toHaveCSS('background-position-x', '23px');
    await expect(input).toHaveCSS('padding-left', '49px');
  }
);
