// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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

(() => {
  detectThemeSwitching();
  addMarginToDemo();
})();
