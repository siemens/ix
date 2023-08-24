/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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

  var bootstrapStyling = document.createElement('link');
  bootstrapStyling.setAttribute('rel', 'stylesheet');
  bootstrapStyling.setAttribute(
    'href',
    'http://127.0.0.1:8080/www/build/bootstrap/dist/css/bootstrap.css'
  );

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

  var ixIcons = document.createElement('link');
  ixIcons.setAttribute('rel', 'stylesheet');
  ixIcons.setAttribute(
    'href',
    'http://127.0.0.1:8080/www/build/ix-icons/css/ix-icons.css'
  );

  document.getElementsByTagName('head')[0].appendChild(bootstrapStyling);
  document.getElementsByTagName('head')[0].appendChild(ixEsm);
  document.getElementsByTagName('head')[0].appendChild(ix);
  document.getElementsByTagName('head')[0].appendChild(ixStyling);
  document.getElementsByTagName('head')[0].appendChild(ixBrandStyle);
  document.getElementsByTagName('head')[0].appendChild(ixBrandEsm);
  document.getElementsByTagName('head')[0].appendChild(ixBrand);
  document.getElementsByTagName('head')[0].appendChild(ixIcons);
}

function detectThemeSwitching() {
  console.log(location.search);
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
