/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function url() {
  return 'http://127.0.0.1:8080/test.html?selector=ix-pane';
}

async function action(page) {
  await page.click('[id="run"]');
  await timeout(2000);
}

async function back(page) {
  await page.click('[id="remove"]');
  await timeout(2000);
}

module.exports = { action, back, url };
