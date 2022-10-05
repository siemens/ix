/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export class InputState {
  constructor(token, category) {
    this.token = token;
    this.category = category;
  }
  hasCategory() {
    return this.category !== undefined;
  }
}
