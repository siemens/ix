/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const mobileMediaQuery = `only screen and (min-width: 42em)`;

const createMediaQueryObserver = () => {
  if (typeof window === 'undefined') {
    console.warn('window is undefined');
    return;
  }
};
