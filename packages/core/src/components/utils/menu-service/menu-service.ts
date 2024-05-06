/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypedEvent } from '../typed-event';

class MenuService {
  #menuElement: HTMLIxMenuElement | null = null;
  #menuExpandChange = new TypedEvent<boolean>();
  #isPinned = false;

  register(menuElement: HTMLIxMenuElement) {
    if (this.#menuElement) {
      console.warn('Menu already defined');
      return;
    }
    this.#menuElement = menuElement;
    this.#menuElement.addEventListener(
      'expandChange',
      (event: CustomEvent<boolean>) => {
        this.#menuExpandChange.emit(event.detail);
      }
    );
  }

  public setIsPinned(pinned: boolean) {
    this.#isPinned = pinned;
  }

  public async open() {
    if (this.#menuElement) {
      this.#menuElement.toggleMenu(true);
      return true;
    }

    return false;
  }

  public async close() {
    if (this.#menuElement) {
      this.#menuElement.toggleMenu(false);
      return true;
    }

    return false;
  }

  public async toggle() {
    if (this.#menuElement) {
      this.#menuElement.toggleMenu();
      return true;
    }

    return false;
  }

  get nativeElement() {
    return this.#menuElement;
  }

  get expandChange() {
    return this.#menuExpandChange;
  }

  get isPinned() {
    return this.#isPinned;
  }
}

export const menuController = new MenuService();
