/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './settings.html',
  styles: [
    `
      @import 'example-styles/dist/application.css';
    `,
  ],
})
export default class Settings implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleSettings(true);
  }
}
