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

const welcome = `
  <ix-chat-welcome heading="How can I help you today?">
    <p>Ask about alarms, assets or maintenance plans.</p>
    <ix-chat-prompt-suggestion slot="suggestions">Summarize open alarms</ix-chat-prompt-suggestion>
    <ix-chat-prompt-suggestion slot="suggestions">Plan the next maintenance</ix-chat-prompt-suggestion>
  </ix-chat-welcome>
`;

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(welcome);
  await expect(
    page.locator('ix-chat-prompt-suggestion').first()
  ).toHaveAttribute('hydrated');

  const results = await makeAxeBuilder().include('ix-chat-welcome').analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(welcome);
  await expect(page.locator('ix-chat-welcome')).toHaveAttribute('hydrated');
});

regressionTest(
  'shows the heading, free content and suggestions',
  async ({ mount, page }) => {
    await mount(welcome);

    await expect(
      page.getByRole('heading', { name: 'How can I help you today?' })
    ).toBeVisible();
    await expect(
      page.getByText('Ask about alarms, assets or maintenance plans.')
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Summarize open alarms' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Plan the next maintenance' })
    ).toBeVisible();
  }
);

regressionTest(
  'renders no heading without heading',
  async ({ mount, page }) => {
    await mount(`
    <ix-chat-welcome>
      <p>Ask about alarms.</p>
    </ix-chat-welcome>
  `);

    await expect(page.getByText('Ask about alarms.')).toBeVisible();
    await expect(page.getByRole('heading')).toHaveCount(0);
  }
);

regressionTest(
  'forwards suggestionSelect from its suggestions',
  async ({ mount, page }) => {
    await mount(welcome);
    const details = await page
      .locator('ix-chat-welcome')
      .evaluateHandle((host) => {
        const values: string[] = [];
        host.addEventListener('suggestionSelect', (event) =>
          values.push((event as CustomEvent<string>).detail)
        );
        return values;
      });

    await page
      .getByRole('button', { name: 'Plan the next maintenance' })
      .click();

    expect(await details.jsonValue()).toEqual(['Plan the next maintenance']);
  }
);
