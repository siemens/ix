/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export class ArrowFocusController {
  public items: Element[];

  container: HTMLElement;
  wrap = false;
  callback: any;

  private keyListenerBind = this.keyListener.bind(this);

  constructor(
    items: any[],
    container: HTMLElement,
    callback: (index: number) => void
  ) {
    this.items = items;
    this.container = container;
    this.callback = callback;

    this.container.addEventListener('keydown', this.keyListenerBind);
  }

  private keyListener(e) {
    const activeIndex = this.items.indexOf(document.activeElement);

    if (activeIndex < 0) {
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        if (activeIndex < this.items.length - 1) {
          e.preventDefault();
          if (this.callback) {
            this.callback(activeIndex + 1);
          }
        } else if (this.wrap) {
          e.preventDefault();
          if (this.callback) {
            this.callback(0);
          }
        }
        break;

      case 'ArrowUp':
        {
          if (activeIndex > 0) {
            e.preventDefault();
            if (this.callback) {
              this.callback(activeIndex - 1);
            }
          } else if (this.wrap && activeIndex === 0) {
            e.preventDefault();
            if (this.callback) {
              this.callback(this.items.length - 1);
            }
          }
        }
        break;
    }
  }

  disconnect() {
    this.container.removeEventListener('keydown', this.keyListenerBind);
  }
}
