/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  IxButton,
  IxCheckbox,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

import { themeSwitcher, ThemeVariant } from '@siemens/ix';

@Component({
  selector: 'app-example',
  imports: [
    IxLayoutGrid,
    IxRow,
    IxCol,
    IxButton,
    IxCheckbox,
    IxSelect,
    IxSelectItem,
    IxSelectValueAccessorDirective,
    NgForOf,
  ],
  templateUrl: './theme-switcher.html',
  styleUrls: ['./theme-switcher.css'],
})
export default class ThemeSwitcher implements OnInit {
  variants: ThemeVariant[] = ['light', 'dark'];
  selectedVariant: ThemeVariant = 'dark';
  useSystemTheme = false;

  ngOnInit() {
    themeSwitcher.setTheme('classic');
    themeSwitcher.setVariant(this.selectedVariant);
  }

  onValueChange(event: Event) {
    if (this.useSystemTheme) {
      return;
    }

    const customEvent = event as CustomEvent<string>;
    const newVariant = customEvent.detail as ThemeVariant;

    themeSwitcher.setVariant(newVariant);

    this.selectedVariant = newVariant;
  }

  toggleMode() {
    if (this.useSystemTheme) {
      return;
    }

    themeSwitcher.toggleMode();

    this.selectedVariant = this.selectedVariant === 'light' ? 'dark' : 'light';
  }

  onSystemMode(event: CustomEvent<boolean>) {
    const checked = event.detail;
    this.useSystemTheme = checked;

    if (checked) {
      themeSwitcher.setVariant();
    } else {
      themeSwitcher.setVariant(this.selectedVariant);
    }
  }
}
