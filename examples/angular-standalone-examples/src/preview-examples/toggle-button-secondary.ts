/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggleButton],
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="secondary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="secondary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p
      [style.fontWeight]="boldPressed ? 'bold' : 'normal'"
      [style.text-decoration]="underlinePressed ? 'underline' : 'none'"
    >
      Lorem ipsum text
    </p>
  `,
  styleUrls: ['./toggle-button-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
