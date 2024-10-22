/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addDisposableEventListener } from './disposable-event-listener';

export class ArrowFocusController {
  public items: Element[];

  container?: HTMLElement;
  wrap = false;
  callback: any;

  private readonly keyListener: () => void;

  constructor(
    items: any[],
    container: HTMLElement,
    callback?: (index: number) => void
  ) {
    this.items = items;
    this.container = container;
    this.callback = callback;
    this.keyListener = addDisposableEventListener(
      container,
      'keydown',
      (e: Event) => this.onKeyDown(e as KeyboardEvent)
    );
  }

  private getActiveIndex() {
    if (!document.activeElement) {
      return -1;
    }
    return this.items.indexOf(document.activeElement);
  }

  private onKeyDown(e: KeyboardEvent) {
    const activeIndex = this.getActiveIndex();

    if (activeIndex < 0) {
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        if (activeIndex < this.items.length - 1) {
          e.preventDefault();
          this.callback(activeIndex + 1);
        } else if (this.wrap) {
          e.preventDefault();
          this.callback(0);
        }
        break;

      case 'ArrowUp':
        {
          if (activeIndex > 0) {
            e.preventDefault();
            this.callback(activeIndex - 1);
          } else if (this.wrap && activeIndex === 0) {
            e.preventDefault();
            this.callback(this.items.length - 1);
          }
        }
        break;
    }
  }

  disconnect() {
    if (this.keyListener) {
      this.keyListener();
    }

    this.container = undefined;
    this.callback = undefined;
  }
}
