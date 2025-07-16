/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import '@siemens/ix/dist/siemens-ix/siemens-ix-core.css';

import { showMessage } from '@siemens/ix';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElement as defineCustomElementIxIcon } from '@siemens/ix-icons/components/ix-icon.js';
import { addIcons } from '@siemens/ix-icons';

function normalizeBodyStyles() {
  const body = document.body;
  body.style.margin = '0';
  body.style.padding = '0';
  body.style.width = '100vw';
  body.style.height = '100vh';
}

function detectThemeSwitching() {
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.has('theme')) {
    const theme = searchParams.get('theme');
    document.body.classList.add(theme!);
  }
}

function provideUtilFunctions() {
  window.addIcons = addIcons;
  window.showMessage = showMessage;
}

function provideThemeStyles() {
  console.log(import.meta.env.VITE_THEME_CONFIG);
  const config = JSON.parse(import.meta.env.VITE_THEME_CONFIG);
  return Promise.all(
    config.map(async ({ importPath }: any) => {
      await import(/* @vite-ignore */ importPath);
    })
  );
}

(async () => {
  await provideThemeStyles();

  provideUtilFunctions();

  defineCustomElements();
  defineCustomElementIxIcon();

  normalizeBodyStyles();
  detectThemeSwitching();
})();
