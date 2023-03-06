/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import './placeholder-logo';

function loadAdditionalTheme() {
  const theme = __THEME__;
  if (theme?.css) {
    const base = `./../additional-theme`;
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

function detectThemeSwitching() {
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.has('theme')) {
    const theme = searchParams.get('theme');
    document.body.className = theme;
  }
}

/**
 * Add margin around body the get better iframe viewport
 */
function addMarginToDemo() {
  const searchParams = new URLSearchParams(location.search);
  if (!searchParams.has('no-margin')) {
    document.body.style.margin = '1rem';
  }
}

(async function init() {
  await applyPolyfills();
  await defineCustomElements();

  detectThemeSwitching();
  addMarginToDemo();
  loadAdditionalTheme();
})();
