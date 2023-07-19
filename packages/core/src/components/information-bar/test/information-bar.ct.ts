/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { test } from '@utils/test';

const barNumbers = [
  { count: 50, stripped: 2, icon: 'alarm', color: 'alarm' },
  { count: 50, stripped: 2, icon: 'warning-rhomb', color: 'critical' },
  { count: 5, stripped: 2, icon: 'warning', color: 'warning' },
  { count: 5, stripped: 2, icon: 'info', color: 'info' },
  { count: 5, stripped: 2, icon: 'question', color: 'unassigned' },
];

test('should render', async ({ mount, page }) => {
  await mount(`<ix-information-bar></ix-information-bar>`);
  const element = page.locator('ix-information-bar');
  await element.evaluate((element: HTMLIxInformationBarElement) => {
    element.bar = [
      { count: 50, stripped: 2, icon: 'alarm', color: 'alarm' },
      { count: 50, stripped: 2, icon: 'warning-rhomb', color: 'critical' },
      { count: 5, stripped: 2, icon: 'warning', color: 'warning' },
      { count: 5, stripped: 2, icon: 'info', color: 'info' },
      { count: 5, stripped: 2, icon: 'question', color: 'unassigned' },
    ];
  });
  await expect(element).toHaveClass('hydrated');
});

test('should have right width', async ({ mount, page }) => {
  await mount(`<ix-information-bar></ix-information-bar>`);
  const element = page.locator('ix-information-bar');
  await element.evaluate((element: HTMLIxInformationBarElement) => {
    element.bar = [
      { count: 50, stripped: 2, icon: 'alarm', color: 'alarm' },
      { count: 50, stripped: 2, icon: 'warning-rhomb', color: 'critical' },
      { count: 5, stripped: 2, icon: 'warning', color: 'warning' },
      { count: 5, stripped: 2, icon: 'info', color: 'info' },
      { count: 5, stripped: 2, icon: 'question', color: 'unassigned' },
    ];
  });

  for (const [index, _] of barNumbers.entries()) {
    const bar = page.locator('#bar-' + index);
    expect(
      await bar.evaluate((node: HTMLElement) => node.getAttribute('class'))
    ).toBe(barNumbers[index].color);
    expect(
      await bar.evaluate((node: HTMLElement) => node.getAttribute('style'))
    ).toContain(
      'width: ' + Math.floor((100 * barNumbers[index].count) / sum())
    );
  }
});

test('should have right icons', async ({ mount, page }) => {
  await mount(`<ix-information-bar></ix-information-bar>`);
  const element = page.locator('ix-information-bar');
  await element.evaluate((element: HTMLIxInformationBarElement) => {
    element.bar = [
      { count: 50, stripped: 2, icon: 'alarm', color: 'alarm' },
      { count: 50, stripped: 2, icon: 'warning-rhomb', color: 'critical' },
      { count: 5, stripped: 2, icon: 'warning', color: 'warning' },
      { count: 5, stripped: 2, icon: 'info', color: 'info' },
      { count: 5, stripped: 2, icon: 'question', color: 'unassigned' },
    ];
  });

  for (const [index, _] of barNumbers.entries()) {
    const icon = page.locator('#icon-' + index + ' i');
    expect(
      await icon.evaluate((node: HTMLElement) => node.getAttribute('class'))
    ).toContain(barNumbers[index].icon);

    const number = page.locator('#icon-' + index);
    expect(
      await number.evaluate((node: HTMLElement) =>
        node.children.item(0).getAttribute('class')
      )
    ).toContain(barNumbers[index].color);
    expect(
      await number.evaluate((node: HTMLElement) =>
        node.children.item(0).getAttribute('name')
      )
    ).toBe(barNumbers[index].icon);
  }
});

function sum() {
  return barNumbers.map((el) => el.count).reduce((acc, curr) => acc + curr);
}
