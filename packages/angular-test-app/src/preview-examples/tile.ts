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
  template: `
    <ix-tile size="small">92.8 °C</ix-tile>

    <ix-tile size="medium">
      <div slot="header">Tile header</div>
      <div class="text-l">92.8 °C</div>
    </ix-tile>

    <ix-tile size="big">
      <div
        class="tile-header"
        slot="header"
      >
        Tile header
        <ix-icon-button ghost icon="context-menu"></ix-icon-button>
      </div>
      <div slot="subheader">Temperature</div>
      <div
        style="
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: flex-end;
        justify-content: space-between;
      "
      >
        <span>92.8 °C</span>
      </div>
      <div
        class="tile-footer"
        slot="footer"
      >
      <ix-button icon="chevron-right-small" ghost slot="footer">
          Details
      </ix-button>
      </div>
    </ix-tile>
  `,
  styleUrls: ['./tile.css'],
})
export default class Tile {}
