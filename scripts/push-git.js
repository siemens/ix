/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const Listr = require('listr');
const { checkGit, publishGit, readLernaRootPackage } = require('./common');

(async function () {
  const { version } = readLernaRootPackage();
  const tasks = [];

  checkGit(tasks);
  publishGit(tasks, version);

  const listr = new Listr(tasks);

  try {
    await listr.run();
  } catch (e) {
    // console.error(e);
  }
})();
