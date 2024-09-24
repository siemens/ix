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
  styleUrls: ['./pill-variants.css'],
  template: `
    <ix-layout-grid>
      <ix-row>
        <ix-col>
          <ix-pill icon="info"> Primary </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill icon="info" outline> Primary </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="alarm" icon="info"> Alarm </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="alarm" icon="info" outline> Alarm </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="critical" icon="info"> Critical </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="critical" icon="info" outline> Critical </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="warning" icon="info"> Warning </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="warning" icon="info" outline> Warning </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="success" icon="info"> Success </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="success" icon="info" outline> Success </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="info" icon="info"> Info </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="info" icon="info" outline> Info </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="neutral" icon="info"> Neutral </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="neutral" icon="info" outline> Neutral </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill
            variant="custom"
            color="color-soft-text"
            background="purple"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill
            variant="custom"
            color="color-soft-text"
            background="purple"
            icon="info"
            outline
          >
            Custom
          </ix-pill>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  `,
})
export default class Pill {}
