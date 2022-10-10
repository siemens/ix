/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { defineCustomElements, applyPolyfills } from '@siemens/ix/loader';

function loadAdditionalTheme() {
  const theme = globalThis['additionalTheme'];
  if (theme?.css) {
    const base = `../additional-theme`;
    const css = theme.css;
    const head = document.head;

    const style_link = document.createElement('link');
    style_link.rel = 'stylesheet';
    style_link.href = `${base}/${css}`;
    head.appendChild(style_link);

    const loader = `${base}/${theme.loader}/index.es2017.js`;
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { defineCustomElements } from '${loader}';
      defineCustomElements();
    `;
    head.appendChild(script);
  }
}
(async function init() {
  await applyPolyfills();
  await defineCustomElements();

  loadAdditionalTheme();
})();
