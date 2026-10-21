/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, type Locator } from '@playwright/test';
import { regressionTest } from '@utils/test';

function trackSuggestionSelect(element: Locator) {
  return element.evaluateHandle((host) => {
    const details: string[] = [];
    host.addEventListener('suggestionSelect', (event) =>
      details.push((event as CustomEvent<string>).detail)
    );
    return details;
  });
}

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`
    <ix-chat-prompt-suggestion>Summarize open alarms</ix-chat-prompt-suggestion>
  `);
  await expect(page.locator('ix-chat-prompt-suggestion')).toHaveAttribute(
    'hydrated'
  );

  const results = await makeAxeBuilder()
    .include('ix-chat-prompt-suggestion')
    .analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-chat-prompt-suggestion>Summarize open alarms</ix-chat-prompt-suggestion>
  `);
  await expect(page.locator('ix-chat-prompt-suggestion')).toHaveAttribute(
    'hydrated'
  );
});

regressionTest(
  'is a button with the suggestion text as accessible name',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-prompt-suggestion>Summarize open alarms</ix-chat-prompt-suggestion>
    `);

    await expect(
      page.getByRole('button', { name: 'Summarize open alarms' })
    ).toBeVisible();
  }
);

regressionTest(
  'emits suggestionSelect with the suggestion text on click',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-prompt-suggestion>
        Summarize   open alarms
      </ix-chat-prompt-suggestion>
    `);
    const suggestion = page.locator('ix-chat-prompt-suggestion');
    const details = await trackSuggestionSelect(suggestion);

    await page.getByRole('button', { name: 'Summarize open alarms' }).click();

    expect(await details.jsonValue()).toEqual(['Summarize open alarms']);
  }
);

regressionTest(
  'emits suggestionSelect via keyboard (Enter and Space)',
  async ({ mount, page }) => {
    await mount(`
      <input aria-label="Before" />
      <ix-chat-prompt-suggestion>Show related alarms</ix-chat-prompt-suggestion>
    `);
    const suggestion = page.locator('ix-chat-prompt-suggestion');
    const details = await trackSuggestionSelect(suggestion);

    await page.getByRole('textbox', { name: 'Before' }).focus();
    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('button', { name: 'Show related alarms' })
    ).toBeFocused();

    await page.keyboard.press('Enter');
    await page.keyboard.press('Space');

    await expect
      .poll(() => details.jsonValue())
      .toEqual(['Show related alarms', 'Show related alarms']);
  }
);

regressionTest(
  'suggestionSelect bubbles to the chat input follow-up slot',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input>
        <ix-chat-prompt-suggestion slot="follow-up">What are the biggest risks?</ix-chat-prompt-suggestion>
        <ix-button slot="follow-up" variant="secondary">Show related alarms</ix-button>
      </ix-chat-input>
    `);
    const input = page.locator('ix-chat-input');
    const details = await trackSuggestionSelect(input);

    await expect(
      page.getByRole('button', { name: 'Show related alarms' })
    ).toBeVisible();
    await page
      .getByRole('button', { name: 'What are the biggest risks?' })
      .click();

    expect(await details.jsonValue()).toEqual(['What are the biggest risks?']);
  }
);
