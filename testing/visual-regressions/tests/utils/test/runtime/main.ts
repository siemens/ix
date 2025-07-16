/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import { showMessage } from '@siemens/ix';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElement as defineCustomElementIxIcon } from '@siemens/ix-icons/components/ix-icon.js';
import { addIcons } from '@siemens/ix-icons';

defineCustomElements();
defineCustomElementIxIcon();

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

normalizeBodyStyles();
detectThemeSwitching();
provideUtilFunctions();
