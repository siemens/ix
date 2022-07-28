/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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
