/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export class InputState {
  public token: string;
  public category: string;

  public hasCategory() {
    return this.category !== undefined;
  }

  constructor(token: string, category: string) {
    this.token = token;
    this.category = category;
  }
}
