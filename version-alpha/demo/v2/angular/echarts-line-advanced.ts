/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { registerTheme, getComputedCSSProperty } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-line-advanced.html',
  styleUrls: ['./echarts-line-advanced.css'],
})
export default class EchartsLineAdvanced implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  dates = Array.from({ length: 2025 - 2013 }, (_, i) => (2013 + i).toString());

  stockData = [
    77.67, 82.81, 84.09, 91.75, 118.15, 107.48, 99.36, 93.07, 137.18, 104.38,
    156.48, 168.52,
  ];

  options: EChartsOption = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: this.dates },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    series: [
      {
        type: 'line',
        data: this.stockData,
        smooth: true,
        lineStyle: { width: 4, shadowBlur: 10 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            { offset: 1, color: 'transparent' },
          ]),
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max', symbol: 'circle', symbolSize: 60 },
            { type: 'min', name: 'Min', symbol: 'circle', symbolSize: 60 },
          ],
          label: {
            fontWeight: 'bold',
            color: getComputedCSSProperty('color-inv-contrast-text'),
          },
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
          lineStyle: { type: 'dashed' },
        },
      },
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
