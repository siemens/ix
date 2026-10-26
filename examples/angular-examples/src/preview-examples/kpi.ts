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
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="kpi">
      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="danger"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="caution"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="success"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="information"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="accent"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="critical"></ix-kpi>

      <ix-kpi
        label="Motor speed"
        value="Nominal"
        orientation="vertical"
      ></ix-kpi>
      <ix-kpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="danger"
        orientation="vertical"
      ></ix-kpi>
    </div>
  `,
  styleUrls: ['./kpi.css'],
})
export default class Kpi {}
