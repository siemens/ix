/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineCustomElements } from '@siemens/ix/loader';
import './preview-examples/global.css';

/**
 * Only the module keys are used, so the examples themselves are never pulled
 * into the index bundle.
 */
const examples = Object.keys(import.meta.glob('./preview-examples/*.html'))
  .map((path) => path.replace('./preview-examples/', '').replace('.html', ''))
  .sort();

(async () => {
  defineCustomElements();

  const list = document.getElementById('preview-index');

  examples.forEach((name) => {
    const item = document.createElement('li');
    const link = document.createElement('a');

    link.href = `./preview-examples/${name}.html`;
    link.textContent = name;

    item.appendChild(link);
    list.appendChild(item);
  });
})();
