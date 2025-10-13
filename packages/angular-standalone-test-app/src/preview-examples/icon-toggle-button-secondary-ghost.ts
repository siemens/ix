/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { IxIconToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxIconToggleButton],
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        id="boldButton"
        variant="subtle-tertiary"
        icon="text-bold"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        id="underlineButton"
        variant="subtle-tertiary"
        icon="text-underline"
        pressed
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p id="loremIpsum">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-secondary-ghost.css'],
})
export default class Buttons implements OnInit {
  boldPressed = false;
  underlinePressed = true;

  ngOnInit() {
    const loremIpsum = document.getElementById('loremIpsum');
    if (loremIpsum) {
      loremIpsum.style.fontWeight = this.boldPressed ? 'bold' : 'normal';
      loremIpsum.style.textDecoration = this.underlinePressed
        ? 'underline'
        : 'none';
    }
  }

  handleBoldClick() {
    const boldButton = document.getElementById('boldButton');
    const loremIpsum = document.getElementById('loremIpsum');
    if (boldButton && loremIpsum) {
      this.boldPressed = !this.boldPressed;
      if (this.boldPressed) {
        boldButton.setAttribute('pressed', '');
      } else {
        boldButton.removeAttribute('pressed');
      }
      loremIpsum.style.fontWeight = this.boldPressed ? 'bold' : 'normal';
    }
  }

  handleUnderlineClick() {
    const underlineButton = document.getElementById('underlineButton');
    const loremIpsum = document.getElementById('loremIpsum');
    if (underlineButton && loremIpsum) {
      this.underlinePressed = !this.underlinePressed;
      if (this.underlinePressed) {
        underlineButton.setAttribute('pressed', '');
      } else {
        underlineButton.removeAttribute('pressed');
      }
      loremIpsum.style.textDecoration = this.underlinePressed
        ? 'underline'
        : 'none';
    }
  }
}
