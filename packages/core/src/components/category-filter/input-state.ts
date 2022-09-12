// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
