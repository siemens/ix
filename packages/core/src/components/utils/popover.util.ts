/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { convertToRemString } from './rwd.util';

export class Popover {
  constructor(private readonly hostElement: HTMLElement, private readonly popoverElement: HTMLElement, private readonly outsideCallback: (e: Event) => void) {}

  outside(e: Event) {
    if (!this.hostElement?.contains(e.target as HTMLElement)) {
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
