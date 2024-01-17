/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, ViewChild } from '@angular/core';
import { IxPane } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  template: './pane-group-floating.html',
})
export default class PanesFloating {
  @ViewChild('leftPaneRef') leftPaneRef!: IxPane;

  handleButtonClick() {
    this.leftPaneRef.expand = !this.leftPaneRef.expand;
  }
}
