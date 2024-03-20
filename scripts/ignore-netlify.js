/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const GIT_COMMIT_MESSAGE = process.env.GIT_COMMIT_MESSAGE;

if (GIT_COMMIT_MESSAGE.includes('[deploy netlify]')) {
  process.exit(1);
}

process.exit(0);
