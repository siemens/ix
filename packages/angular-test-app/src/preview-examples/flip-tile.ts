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
    <div class="flip-tile">
      <ix-flip-tile>
        <div slot="header">Flip header</div>

        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>

        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile state="primary">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile state="info">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile state="warning">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile state="alarm">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>
    </div>
  `,
  styleUrls: ['./flip-tile.css'],
})
export default class FlipTile {}
