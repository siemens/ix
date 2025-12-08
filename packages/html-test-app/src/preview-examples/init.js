/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { themeSwitcher } from '@siemens/ix';
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
  }
}

function detectThemeSwitching() {
  const searchParams = new URLSearchParams(location.search);
  const theme = searchParams.get('theme') || 'classic';
  const colorSchema = searchParams.get('colorSchema') || 'dark';

  console.log('[Theme Debug] 🎨 Starting theme detection');
  console.log('[Theme Debug] URL Parameters:', { theme, colorSchema });

  const fullTheme = `theme-${theme}-${colorSchema}`;
  console.log('[Theme Debug] Full theme string:', fullTheme);

  // Get current theme before change
  const currentThemeBefore = themeSwitcher.getCurrentTheme();
  console.log('[Theme Debug] Current theme BEFORE switch:', currentThemeBefore);

  // Update the theme switcher's internal state
  themeSwitcher.setTheme(fullTheme);
  console.log('[Theme Debug] ✓ themeSwitcher.setTheme() called');

  // Verify theme was set
  const currentThemeAfter = themeSwitcher.getCurrentTheme();
  console.log('[Theme Debug] Current theme AFTER switch:', currentThemeAfter);

  // Update body classes safely (preserve other classes)
  const themeClasses = Array.from(document.body.classList).filter((cls) =>
    cls.startsWith('theme-')
  );
  console.log('[Theme Debug] Removing old theme classes:', themeClasses);
  document.body.classList.remove(...themeClasses);
  document.body.classList.add(fullTheme);
  console.log('[Theme Debug] ✓ Body classes updated');
  console.log(
    '[Theme Debug] All body classes:',
    Array.from(document.body.classList)
  );

  // Check data attributes (set by themeSwitcher)
  setTimeout(() => {
    const bodyTheme = document.body.getAttribute('data-ix-theme');
    const bodyColorSchema = document.body.getAttribute('data-ix-color-schema');
    console.log('[Theme Debug] Body data attributes:', {
      'data-ix-theme': bodyTheme,
      'data-ix-color-schema': bodyColorSchema,
    });

    // Check CSS variables for theme verification
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue(
      '--theme-color-primary'
    );
    const bgColor = computedStyle.getPropertyValue('--theme-color-std-bkg');
    console.log('[Theme Debug] CSS Variables:', {
      '--theme-color-primary': primaryColor.trim(),
      '--theme-color-std-bkg': bgColor.trim(),
    });

    // Check if eCharts theme might be available
    if (window.echarts) {
      console.log('[Theme Debug] 📊 eCharts detected!');
      console.log(
        '[Theme Debug] eCharts registered themes:',
        Object.keys(window.echarts._themeStorage || {})
      );
    } else {
      console.log(
        '[Theme Debug] ⚠️ eCharts not yet loaded (will be loaded dynamically)'
      );
    }

    console.log('[Theme Debug] 🎨 Theme detection complete');
  }, 100);
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

function setupEChartsDebugMonitoring() {
  // Monitor for eCharts initialization
  const originalRegisterTheme = window.registerTheme;

  // Wait for registerTheme to be available
  const checkInterval = setInterval(() => {
    if (window.registerTheme) {
      console.log('[eCharts Debug] 📊 registerTheme function detected');
      clearInterval(checkInterval);
    }
  }, 100);

  // Monitor echarts.init calls
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (window.echarts) {
        console.log('[eCharts Debug] 📊 eCharts library loaded');
        console.log('[eCharts Debug] eCharts version:', window.echarts.version);

        // Wrap echarts.init to log theme usage
        const originalInit = window.echarts.init;
        window.echarts.init = function (dom, theme, opts) {
          console.log('[eCharts Debug] 📊 echarts.init() called');
          console.log('[eCharts Debug] Theme parameter:', theme);
          console.log('[eCharts Debug] DOM element:', dom);
          console.log('[eCharts Debug] Options:', opts);

          const chart = originalInit.call(this, dom, theme, opts);
          console.log('[eCharts Debug] ✓ Chart instance created');

          return chart;
        };
      }
    }, 500);
  });

  // Monitor theme switcher events
  themeSwitcher.themeChanged.on((theme) => {
    console.log('[eCharts Debug] 🎨 Theme changed event fired!');
    console.log('[eCharts Debug] New theme:', theme);
    console.log(
      '[eCharts Debug] Body data-ix-theme:',
      document.body.getAttribute('data-ix-theme')
    );
    console.log(
      '[eCharts Debug] Body data-ix-color-schema:',
      document.body.getAttribute('data-ix-color-schema')
    );
  });
}

(async function init() {
  ixIconsDefineCustomElements();
  defineCustomElements();

  detectThemeSwitching();
  setBodySizes();
  addMarginToDemo();
  loadAdditionalTheme();
  setupEChartsDebugMonitoring();

  const header = document.head;
  const scrollbarStyle = document.createElement('style');
  scrollbarStyle.innerHTML = scrollbarOverwrite;
  header.appendChild(scrollbarStyle);
})();
