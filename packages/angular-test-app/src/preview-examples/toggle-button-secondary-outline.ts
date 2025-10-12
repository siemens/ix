/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-toggle-button
        id="boldButton"
        variant="subtle-primary"
        icon="text-bold"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-primary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        id="underlineButton"
        variant="subtle-primary"
        icon="text-underline"
        pressed
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-primary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p id="loremIpsum">Lorem ipsum text</p>
  `,
  styleUrls: ['./toggle-button-secondary-outline.css'],
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
