/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './pane-layout.html',
})
export default class PaneLayout {
  variant: 'floating' | 'inline' = 'floating';
  layout: 'full-horizontal' | 'full-vertical' = 'full-horizontal';
  borderless: boolean = true;

  toggleVariant() {
    const isInline: boolean = this.variant === 'inline';

    this.variant = isInline ? 'floating' : 'inline';
    this.borderless = isInline;
  }

  toggleLayout() {
    this.layout =
      this.layout === 'full-horizontal' ? 'full-vertical' : 'full-horizontal';
  }
}
