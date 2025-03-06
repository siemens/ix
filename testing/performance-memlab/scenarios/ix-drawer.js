/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// import { action } from '@memlab/api';

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// initial page load's url
function url() {
  return 'http://127.0.0.1:8080/test.html?selector=ix-application-header';
}

// action where you suspect the memory leak might be happening
async function action(page) {
  await page.click('[id="run"]');
  await timeout(2000);
}

// how to go back to the state before action
async function back(page) {
  await page.click('[id="remove"]');
  await timeout(2000);
}

module.exports = { action, back, url };
