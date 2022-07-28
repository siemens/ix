/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
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
  document.body.style.margin = '1rem';
}

(() => {
  detectThemeSwitching();
  addMarginToDemo();
})();
