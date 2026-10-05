/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
import { recordEvents, regressionTest } from '@utils/test';

regressionTest('renders a single done button', async ({ mount, page }) => {
  await mount(`<ix-confirmation-footer></ix-confirmation-footer>`);
  const footer = page.locator('ix-confirmation-footer');

  await expect(footer.getByRole('button')).toHaveCount(1);
  await expect(footer.getByRole('button', { name: 'Done' })).toBeVisible();
});

regressionTest(
  'renders cancel and confirm with require confirmation',
  async ({ mount, page }) => {
    await mount(
      `<ix-confirmation-footer require-confirmation i18n-confirm="Apply" i18n-cancel="Discard"></ix-confirmation-footer>`
    );
    const footer = page.locator('ix-confirmation-footer');

    await expect(footer.getByRole('button')).toHaveCount(2);
    await expect(footer.getByTestId('cancel')).toHaveText('Discard');
    await expect(footer.getByTestId('confirm')).toHaveText('Apply');
  }
);

regressionTest(
  'primary action disabled applies to done and confirm',
  async ({ mount, page }) => {
    await mount(
      `<ix-confirmation-footer primary-action-disabled></ix-confirmation-footer>`
    );
    const footer = page.locator('ix-confirmation-footer');
    await expect(footer.getByRole('button', { name: 'Done' })).toBeDisabled();

    await footer.evaluate((el: HTMLIxConfirmationFooterElement) => {
      el.requireConfirmation = true;
    });
    await expect(
      footer.getByRole('button', { name: 'Confirm' })
    ).toBeDisabled();
    await expect(footer.getByRole('button', { name: 'Cancel' })).toBeEnabled();
  }
);

const FOOTER_EVENTS = ['doneClick', 'confirmClick', 'cancelClick'];

regressionTest(
  'emits doneClick for the done button',
  async ({ mount, page }) => {
    await mount(`<div><ix-confirmation-footer></ix-confirmation-footer></div>`);
    const footer = page.locator('ix-confirmation-footer');
    const footerEvents = await recordEvents(footer, FOOTER_EVENTS);
    const parentEvents = await recordEvents(
      page.locator('div').first(),
      FOOTER_EVENTS
    );

    await footer.getByTestId('confirm').click();

    expect((await footerEvents()).map((event) => event.type)).toEqual([
      'doneClick',
    ]);
    expect(await parentEvents()).toEqual([]);
  }
);

regressionTest(
  'emits confirmClick and cancelClick with require confirmation',
  async ({ mount, page }) => {
    await mount(
      `<div><ix-confirmation-footer require-confirmation></ix-confirmation-footer></div>`
    );
    const footer = page.locator('ix-confirmation-footer');
    const footerEvents = await recordEvents(footer, FOOTER_EVENTS);
    const parentEvents = await recordEvents(
      page.locator('div').first(),
      FOOTER_EVENTS
    );

    await footer.getByTestId('cancel').click();
    await footer.getByTestId('confirm').click();

    expect((await footerEvents()).map((event) => event.type)).toEqual([
      'cancelClick',
      'confirmClick',
    ]);
    expect(await parentEvents()).toEqual([]);
  }
);

const boxOf = async (locator: Locator) => {
  const box = await locator.boundingBox();
  if (!box) {
    throw new Error('Element has no bounding box');
  }
  return box;
};

/** Distances of the confirm button from the footer edges and its width. */
const measure = async (page: Page) => {
  const footer = page.locator('ix-confirmation-footer');
  const footerBox = await boxOf(footer);
  const buttonBox = await boxOf(footer.getByTestId('confirm'));

  return {
    buttonWidth: Math.round(buttonBox.width),
    startOffset: Math.round(buttonBox.x - footerBox.x),
    endOffset: Math.round(
      footerBox.x + footerBox.width - (buttonBox.x + buttonBox.width)
    ),
  };
};

regressionTest(
  'aligns buttons to the end by default',
  async ({ mount, page }) => {
    await mount(
      `<ix-confirmation-footer style="width: 400px"></ix-confirmation-footer>`
    );

    await expect.poll(async () => (await measure(page)).endOffset).toBe(0);
    expect((await measure(page)).startOffset).toBeGreaterThan(0);
  }
);

regressionTest('centers buttons in center layout', async ({ mount, page }) => {
  await mount(
    `<ix-confirmation-footer layout="center" style="width: 400px"></ix-confirmation-footer>`
  );

  await expect
    .poll(async () => {
      const { startOffset, endOffset } = await measure(page);
      return startOffset > 0 && Math.abs(startOffset - endOffset) <= 1;
    })
    .toBe(true);
});

regressionTest(
  'stretches buttons in full-width layout',
  async ({ mount, page }) => {
    await mount(
      `<div style="width: 400px"><ix-confirmation-footer layout="full-width"></ix-confirmation-footer></div>`
    );

    await expect.poll(async () => (await measure(page)).buttonWidth).toBe(400);
  }
);

regressionTest(
  'responsive layout is full-width only on small screens',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await mount(
      `<div style="width: 300px"><ix-confirmation-footer layout="responsive"></ix-confirmation-footer></div>`
    );

    await expect.poll(async () => (await measure(page)).endOffset).toBe(0);
    expect((await measure(page)).buttonWidth).toBeLessThan(150);

    await page.setViewportSize({ width: 500, height: 768 });
    await expect.poll(async () => (await measure(page)).buttonWidth).toBe(300);
  }
);
