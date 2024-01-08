/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <ix-side-pane-group inline>
        <ix-side-pane paneTitle="TOP" slot="top"> </ix-side-pane>
        <ix-side-pane paneTitle="LEFT" slot="left"> </ix-side-pane>
        <ix-side-pane paneTitle="RIGHT" slot="right"></ix-side-pane>
        <ix-side-pane paneTitle="BOTTOM" slot="bottom"></ix-side-pane>
        <ix-side-pane-content-area slot="content">
          <p>This is a text content.</p>
        </ix-side-pane-content-area>
      </ix-side-pane-group>
    </div>

  `,
})
export default class SidePaneGroupInline {}
