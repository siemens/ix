/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxIconToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxIconToggleButton],
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="subtle-tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="subtle-tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-subtle-tertiary.css'],
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
