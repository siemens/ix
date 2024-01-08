/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Component, ViewChild} from '@angular/core';
import {IxSidePane} from "@siemens/ix-angular";

@Component({
  selector: 'app-example',
  template: `
    <div>
      <ix-side-pane-group floating variant="1">
        <ix-side-pane paneTitle="TOP" slot="top"> </ix-side-pane>
        <ix-side-pane #leftPaneRef paneTitle="LEFT" slot="left"> </ix-side-pane>
        <ix-side-pane paneTitle="RIGHT" slot="right"></ix-side-pane>
        <ix-side-pane paneTitle="BOTTOM" slot="bottom"></ix-side-pane>
        <ix-side-pane-content-area slot="content">
          <ix-button (click)="handleClick()">Toggle Left Pane</ix-button>
        </ix-side-pane-content-area>
      </ix-side-pane-group>
    </div>

  `,
})
export default class SidePaneGroup {
  @ViewChild('leftPaneRef') leftPaneRef!: IxSidePane;

  handleClick() {
    this.leftPaneRef.expandPane = !this.leftPaneRef.expandPane;
  }
}
