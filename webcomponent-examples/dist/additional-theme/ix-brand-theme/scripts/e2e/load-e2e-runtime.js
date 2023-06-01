/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function loadResources() {
  var ixEsm = document.createElement('script');
  ixEsm.setAttribute('type', 'module');
  ixEsm.setAttribute('src', '/www/build/siemens-ix/dist/siemens-ix/siemens-ix.esm.js');

  var ix = document.createElement('script');
  ix.setAttribute('nomodule', '');
  ix.setAttribute('src', '/www/build/siemens-ix/dist/siemens-ix/siemens-ix.js');

  var ixStyling = document.createElement('link');
  ixStyling.setAttribute('rel', 'stylesheet');
  ixStyling.setAttribute('href', '/www/build/siemens-ix/dist/siemens-ix/siemens-ix.css');

  var ixBrandStyle = document.createElement('link');
  ixBrandStyle.setAttribute('rel', 'stylesheet');
  ixBrandStyle.setAttribute('href', '/www/build/ix-brand-theme.css');

  var ixBrandEsm = document.createElement('script');
  ixBrandEsm.setAttribute('type', 'module');
  ixBrandEsm.setAttribute('src', '/www/build/ix-brand-theme.esm.js');

  var ixBrand = document.createElement('script');
  ixBrand.setAttribute('nomodule', '');
  ixBrand.setAttribute('src', '/www/build/ix-brand-theme.js');

  var ixIcons = document.createElement('link');
  ixIcons.setAttribute('rel', 'stylesheet');
  ixIcons.setAttribute('href', '/www/build/ix-icons/css/ix-icons.css');

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
  } else {
    document.body.classList.add('theme-brand-dark');
  }
}

(function () {
  loadResources();
  detectThemeSwitching();
})();
