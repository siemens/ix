/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const node = {
  url: 'https://www.figma.com/file/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?type=design&node-id=2532-75482',
};
const result = require('./figma')(node);

(async () => {
  await result;

  console.log(node);
  console.log('fin');
})();
