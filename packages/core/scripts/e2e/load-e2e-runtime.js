/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function loadResources() {
  var ixEsm = document.createElement('script');
  ixEsm.setAttribute('type', 'module');
  ixEsm.setAttribute(
    'src',
    'http://127.0.0.1:8080/www/build/siemens-ix.esm.js'
  );

  var ix = document.createElement('script');
  ix.setAttribute('nomodule', '');
  ix.setAttribute('src', 'http://127.0.0.1:8080/www/build/siemens-ix.js');

  var ixStyling = document.createElement('link');
  ixStyling.setAttribute('rel', 'stylesheet');
  ixStyling.setAttribute(
    'href',
    'http://127.0.0.1:8080/www/build/siemens-ix.css'
  );

  var ixBrandStyle = document.createElement('link');
  ixBrandStyle.setAttribute('rel', 'stylesheet');
  ixBrandStyle.setAttribute(
    'href',
    'http://127.0.0.1:8080/www/build/ix-brand-theme/ix-brand-theme.css'
  );

  var ixBrandEsm = document.createElement('script');
  ixBrandEsm.setAttribute('type', 'module');
  ixBrandEsm.setAttribute(
    'src',
    'http://127.0.0.1:8080/www/build/ix-brand-theme/ix-brand-theme.esm.js'
  );

  var ixBrand = document.createElement('script');
  ixBrand.setAttribute('nomodule', '');
  ixBrand.setAttribute(
    'src',
    'http://127.0.0.1:8080/www/build/ix-brand-theme/ix-brand-theme.js'
  );

  var ixIcons = document.createElement('script');
  ixIcons.setAttribute('type', 'module');
  ixIcons.innerHTML =
    'import { defineCustomElements } from "/www/build/ix-icons/loader/index.es2017.js"; defineCustomElements();';

  //     <meta name="ix-icons:path" content="/build/svg" />

  var asset = document.createElement('meta');
  asset.setAttribute('name', 'ix-icons:path');
  asset.setAttribute('content', '/www/svg');

  document.getElementsByTagName('head')[0].appendChild(asset);

  document.getElementsByTagName('head')[0].appendChild(ixEsm);
  document.getElementsByTagName('head')[0].appendChild(ix);
  document.getElementsByTagName('head')[0].appendChild(ixStyling);
  document.getElementsByTagName('head')[0].appendChild(ixBrandStyle);
  document.getElementsByTagName('head')[0].appendChild(ixBrandEsm);
  document.getElementsByTagName('head')[0].appendChild(ixBrand);
  document.getElementsByTagName('head')[0].appendChild(ixIcons);
}

function detectThemeSwitching() {
  var searchParams = new URLSearchParams(location.search);
  if (searchParams.has('theme')) {
    var theme = searchParams.get('theme');
    document.body.classList.add(theme);
  }
}

(function () {
  loadResources();
  detectThemeSwitching();
})();
