/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineCustomElements as ixIconsDefineCustomElements } from '@siemens/ix-icons/loader';
import { defineCustomElements } from '@siemens/ix/loader';
import './global.css';

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

async function loadAdditionalTheme() {
  const theme = __THEME__;
  if (!theme?.css) {
    console.warn('No additional theme configured');
    return false;
  }

  const base = `./../additional-theme`;
  const css = theme.css;
  const cssUrl = `${base}/${css}`;

  try {
    const response = await fetch(cssUrl, { method: 'HEAD' });

    if (!response.ok) {
      console.warn(
        `Brand theme CSS not found at ${cssUrl} - using default theme`
      );
      return false;
    }

    await new Promise((resolve) => {
      const head = document.head;
      const style_link = document.createElement('link');
      style_link.rel = 'stylesheet';
      style_link.href = cssUrl;
      style_link.onload = () => {
        resolve();
      };
      style_link.onerror = () => {
        console.warn('Failed to load Brand theme CSS');
        resolve();
      };
      head.appendChild(style_link);
    });

    return true;
  } catch (error) {
    console.warn(`Brand theme CSS not available: ${error.message}`);
    return false;
  }
}

function detectThemeSwitching(isBrandThemeAvailable) {
  const searchParams = new URLSearchParams(location.search);

  if (searchParams.has('theme')) {
    let theme = searchParams.get('theme');

    if (theme === 'brand' && !isBrandThemeAvailable) {
      console.warn(
        'Brand theme requested but CSS not available - falling back to Classic theme'
      );
      theme = 'classic';
    }

    document.documentElement.dataset.ixTheme = theme;
  }

  if (searchParams.has('colorSchema')) {
    const colorSchema = searchParams.get('colorSchema');
    document.documentElement.dataset.ixColorSchema = colorSchema;
  }
}

function isMarginSuppressed() {
  const searchParams = new URLSearchParams(location.search);
  return (
    searchParams.has('no-margin') && searchParams.get('no-margin') === 'true'
  );
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

async function init() {
  ixIconsDefineCustomElements();
  defineCustomElements();

  const isBrandThemeAvailable = await loadAdditionalTheme();

  detectThemeSwitching(isBrandThemeAvailable);

  setBodySizes();
  addMarginToDemo();

  const header = document.head;
  const scrollbarStyle = document.createElement('style');
  scrollbarStyle.innerHTML = scrollbarOverwrite;
  header.appendChild(scrollbarStyle);
}

// Initialize and expose promise for chart scripts to await
globalThis.ixInitPromise = init();
