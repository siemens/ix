/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { NgIf } from '@angular/common';

import { IxEmptyState } from '@siemens/ix-angular/standalone';

import { registerTheme, resolveEChartThemeName } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [IxEmptyState, NgIf, NgxEchartsDirective],
  templateUrl: './echarts-empty-state.html',
  styleUrls: ['./echarts-empty-state.css'],
})
export default class EchartsLineSimple implements OnDestroy, OnInit {
  theme = resolveEChartThemeName();
  private themeChangeDisposer?: { dispose: () => void };
  data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [],
  };

  options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.data.weekdays,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.data.value,
        type: 'line',
      },
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    this.themeChangeDisposer = themeSwitcher.themeChanged.on(() => {
      this.theme = resolveEChartThemeName();
    });
  }

  ngOnDestroy() {
    this.themeChangeDisposer?.dispose();
  }
}
