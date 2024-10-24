/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function loadResources() {
  const ixEsm = document.createElement('script');
  ixEsm.setAttribute('type', 'module');
  ixEsm.setAttribute(
    'src',
    'http://127.0.0.1:8080/www/build/siemens-ix.esm.js'
  );

  const ix = document.createElement('script');
  ix.setAttribute('nomodule', '');
  ix.setAttribute('src', 'http://127.0.0.1:8080/www/build/siemens-ix.js');

  const ixStyling = document.createElement('link');
  ixStyling.setAttribute('rel', 'stylesheet');
  ixStyling.setAttribute(
    'href',
    'http://127.0.0.1:8080/www/build/siemens-ix.css'
  );

  const ixIcons = document.createElement('script');
  ixIcons.setAttribute('type', 'module');
  ixIcons.innerHTML =
    'import { defineCustomElements } from "/www/node_modules/@siemens/ix-icons/loader/index.es2017.js"; defineCustomElements();';

  const asset = document.createElement('meta');
  asset.setAttribute('name', 'ix-icons:path');
  asset.setAttribute('content', '/www/node_modules/@siemens/ix-icons/svg');
  document.getElementsByTagName('head')[0].appendChild(asset);

  const fullBodyStyles = document.createElement('style');
  fullBodyStyles.innerHTML = `
      html, body {
        margin: 0px;
        padding: 0px;
        width: 100vw;
        height: 100vh;
      }
  `;

  document.getElementsByTagName('head')[0].appendChild(ixEsm);
  document.getElementsByTagName('head')[0].appendChild(ix);
  document.getElementsByTagName('head')[0].appendChild(ixStyling);
  document.getElementsByTagName('head')[0].appendChild(ixIcons);
  document.getElementsByTagName('head')[0].appendChild(fullBodyStyles);
}

function detectThemeSwitching() {
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.has('theme')) {
    const theme = searchParams.get('theme');
    document.body.classList.add(theme);
  }
}

(function () {
  loadResources();
  detectThemeSwitching();
})();
