/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@utils/test';
import { voiceOver } from '@guidepup/guidepup';
import { execFile as execFileCallback } from 'child_process';
import { promisify } from 'util';

const execFile = promisify(execFileCallback);

const browserAppNames = {
  chromium: 'Chromium',
  firefox: 'Firefox',
  webkit: 'Playwright',
} as const;

async function activateBrowserApp(browserName: keyof typeof browserAppNames) {
  const appName = browserAppNames[browserName];

  await execFile('/usr/bin/osascript', [
    '-e',
    `tell application "${appName}" to activate`,
    '-e',
    `tell application "System Events" to tell process "${appName}" to set frontmost to true`,
  ]);
}

test.describe('Playwright VoiceOver', () => {
  test.beforeEach(async () => {
    await voiceOver.start();
  });

  test.afterEach(async () => {
    await voiceOver.stop();
  });

  test('Test voice over on toast', async ({ page, mount, browserName }) => {
    await mount('<button>My super button</button>');
    const button = page.locator('button');

    await expect(button).toBeVisible();
    await page.bringToFront();
    await activateBrowserApp(browserName as keyof typeof browserAppNames);
    await button.focus();
    await expect(button).toBeFocused();
    await expect
      .poll(async () => page.evaluate(() => document.hasFocus()))
      .toBe(true);

    await voiceOver.clearSpokenPhraseLog();
    await voiceOver.clearItemTextLog();
    await activateBrowserApp(browserName as keyof typeof browserAppNames);
    await voiceOver.perform(voiceOver.keyboardCommands.moveToFrontWindow);
    await voiceOver.perform(
      voiceOver.keyboardCommands.moveCursorToKeyboardFocus
    );
    await voiceOver.perform(
      voiceOver.keyboardCommands.describeItemWithKeyboardFocus
    );

    await expect
      .poll(async () => voiceOver.lastSpokenPhrase())
      .toContain('My super button');
  });
});
