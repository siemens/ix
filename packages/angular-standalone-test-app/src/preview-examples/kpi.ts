/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxKpi } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxKpi],
  template: `
    <div class="kpi">
      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="alarm"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>

      <ix-kpi
        label="Motor speed"
        value="Nominal"
        orientation="vertical"
      ></ix-kpi>
      <ix-kpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="alarm"
        orientation="vertical"
      ></ix-kpi>
    </div>
  `,
  styleUrls: ['./kpi.css'],
})
export default class Kpi {}
