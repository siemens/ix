/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineCustomElements as ixIconsDefineCustomElements } from '@siemens/ix-icons/loader';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import './styles-auto-gen/global.css';

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

function isMarginSuppressed() {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.has('no-margin');
}

/**
 * Add margin around body the get better iframe viewport
 */
function addMarginToDemo() {
  if (!isMarginSuppressed()) {
    document.body.style.margin = '1rem';
  }
}

function setBodySizes() {
  const styleElement = document.createElement('style');

  styleElement.innerText = isMarginSuppressed()
    ? `
  body {
    height: calc(100vh);
    width: calc(100vw);
  }
  `
    : `
    body {
      height: calc(100vh - 2rem);
      width: calc(100vw - 2rem);
    }
  `;

  document.head.appendChild(styleElement);
}

(async function init() {
  await applyPolyfills();
  await ixIconsDefineCustomElements();
  await defineCustomElements();

  detectThemeSwitching();
  setBodySizes();
  addMarginToDemo();
  loadAdditionalTheme();

  const header = document.head;
  const scrollbarStyle = document.createElement('style');
  scrollbarStyle.innerHTML = scrollbarOverwrite;
  header.appendChild(scrollbarStyle);
})();

const scrollbarOverwrite = `
  ::-webkit-scrollbar-button {
    display: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: $small-space;
    height: $small-space;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: var(--theme-scrollbar-track--background);
  }

  ::-webkit-scrollbar-track:hover {
    background: var(--theme-scrollbar-track--background--hover);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: var(--theme-scrollbar-thumb--background);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--theme-scrollbar-thumb--background--hover);
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
`;
