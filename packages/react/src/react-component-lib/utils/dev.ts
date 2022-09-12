/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const isDevMode = () => {
  return process && process.env && process.env.NODE_ENV === 'development';
};

const warnings: { [key: string]: boolean } = {};

export const deprecationWarning = (key: string, message: string) => {
  if (isDevMode()) {
    if (!warnings[key]) {
      console.warn(message);
      warnings[key] = true;
    }
  }
};
