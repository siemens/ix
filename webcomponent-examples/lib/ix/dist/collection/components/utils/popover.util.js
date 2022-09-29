/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { convertToRemString } from './rwd.util';
export class Popover {
  constructor(hostElement, popoverElement, outsideCallback) {
    this.hostElement = hostElement;
    this.popoverElement = popoverElement;
    this.outsideCallback = outsideCallback;
  }
  outside(e) {
    var _a;
    if (!((_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
      this.outsideCallback(e);
    }
  }
  open(maxWidth = 256) {
    this.popoverElement.style.transform = `
      translateX(${this.hostElement.offsetLeft + this.hostElement.offsetWidth}px)
      translateY(-${this.hostElement.offsetHeight}px)
    `;
    this.popoverElement.style.maxWidth = convertToRemString(maxWidth);
    document.body.addEventListener('click', this.outside.bind(this));
  }
  destroy() {
    document.body.removeEventListener('click', this.outside.bind(this));
  }
}
