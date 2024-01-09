/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, ViewChild } from '@angular/core';
import { IxSidePane } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  template: './side-pane-group-floating.html',
})
export default class SidePaneGroup {
  @ViewChild('leftPaneRef') leftPaneRef!: IxSidePane;

  handleClick() {
    this.leftPaneRef.expandPane = !this.leftPaneRef.expandPane;
  }
}
