/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  macOSActivate,
  nvda,
  type ScreenReader,
  voiceOver,
  WindowsKeyCodes,
  WindowsModifiers,
} from '@guidepup/guidepup';
import { execFile as execFileCallback } from 'child_process';
import type { Page } from '@playwright/test';
import { promisify } from 'util';

type BrowserAppName = 'chromium' | 'firefox' | 'webkit';
const execFile = promisify(execFileCallback);

type GuidepupScreenReader = ScreenReader & {
  keyboardCommands: Record<string, unknown>;
};

type ScreenReaderName = 'nvda' | 'voiceOver';

interface ScreenReaderAdapter {
  name: ScreenReaderName;
  reader: GuidepupScreenReader;
  activateBrowserApp(browserName: BrowserAppName): Promise<void>;
  describeFocusedElement(): Promise<void>;
}

export interface ScreenReaderController {
  readonly name: ScreenReaderName;
  clearLogs(): Promise<void>;
  lastSpokenPhrase(): Promise<string>;
  navigateToWebContent(page: Page, browserName: BrowserAppName): Promise<void>;
  press(key: string): Promise<void>;
  readFocusedElement(page: Page, browserName: BrowserAppName): Promise<void>;
}

const browserAppNames: Record<BrowserAppName, string> = {
  chromium: 'Chromium',
  firefox: 'Firefox',
  webkit: 'Playwright',
};

const nvdaMoveToTop = {
  keyCode: [WindowsKeyCodes.Home],
  modifiers: [WindowsModifiers.Control],
};

async function activateMacOSBrowserApp(browserName: BrowserAppName) {
  const applicationName = browserAppNames[browserName];

  await macOSActivate(applicationName);
  await execFile('/usr/bin/osascript', [
    '-e',
    `tell application "${applicationName}" to activate`,
    '-e',
    `tell application "System Events" to tell process "${applicationName}" to set frontmost to true`,
  ]);
}

async function resolveScreenReaderAdapter(): Promise<ScreenReaderAdapter> {
  if (await voiceOver.detect()) {
    return {
      name: 'voiceOver',
      reader: voiceOver as GuidepupScreenReader,
      activateBrowserApp: activateMacOSBrowserApp,
      describeFocusedElement: async () => {
        await voiceOver.perform(voiceOver.keyboardCommands.moveToFrontWindow);
        await voiceOver.perform(
          voiceOver.keyboardCommands.moveCursorToKeyboardFocus
        );
        await voiceOver.perform(
          voiceOver.keyboardCommands.describeItemWithKeyboardFocus
        );
      },
    };
  }

  if (await nvda.detect()) {
    return {
      name: 'nvda',
      reader: nvda as GuidepupScreenReader,
      activateBrowserApp: async () => undefined,
      describeFocusedElement: async () => {
        await nvda.perform(nvda.keyboardCommands.moveToFocusObject);
        await nvda.perform(nvda.keyboardCommands.reportCurrentFocus);
      },
    };
  }

  throw new Error(
    `No supported Guidepup screen reader is available on platform ${process.platform}.`
  );
}

class GuidepupScreenReaderController implements ScreenReaderController {
  readonly name: ScreenReaderName;

  constructor(private readonly adapter: ScreenReaderAdapter) {
    this.name = adapter.name;
  }

  async start() {
    await this.adapter.reader.start();
  }

  async stop() {
    await this.adapter.reader.stop();
  }

  async clearLogs() {
    await this.adapter.reader.clearSpokenPhraseLog();
    await this.adapter.reader.clearItemTextLog();
  }

  async lastSpokenPhrase() {
    return this.adapter.reader.lastSpokenPhrase();
  }

  async navigateToWebContent(page: Page, browserName: BrowserAppName) {
    await this.adapter.activateBrowserApp(browserName);
    await page.bringToFront();
    await page.locator('body').waitFor();
    await page.locator('body').focus();

    if (this.name === 'voiceOver') {
      await voiceOver.interact();
      await voiceOver.perform(voiceOver.keyboardCommands.jumpToLeftEdge);
    }

    if (this.name === 'nvda') {
      await nvda.perform(nvda.keyboardCommands.exitFocusMode);
      await nvda.perform(nvdaMoveToTop);
    }

    await this.clearLogs();
  }

  async press(key: string) {
    await this.adapter.reader.press(key);
  }

  async readFocusedElement(page: Page, browserName: BrowserAppName) {
    await page.bringToFront();
    await this.adapter.activateBrowserApp(browserName);
    await this.clearLogs();
    await this.adapter.activateBrowserApp(browserName);
    await this.adapter.describeFocusedElement();
  }
}

export async function createScreenReaderController() {
  const adapter = await resolveScreenReaderAdapter();
  const controller = new GuidepupScreenReaderController(adapter);

  await controller.start();

  return controller;
}
