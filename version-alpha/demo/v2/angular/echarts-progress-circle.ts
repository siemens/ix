/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-progress-circle.html',
  styleUrls: ['./echarts-progress-circle.css'],
})
export default class EchartsProgressCircle implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 60;

  options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 15,
            color: [[1, getComputedCSSProperty('color-neutral-40')]],
          },
        },
        axisTick: {
          show: false,
        },
        radius: '100%',
        startAngle: 90,
        endAngle: -270,
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: getComputedCSSProperty('color-success'),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: this.value,
            detail: {
              offsetCenter: [0, 0],
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('color-soft-text'),
              rich: {
                valueStyle: {
                  fontSize: '2rem',
                  color: getComputedCSSProperty('color-soft-text'),
                  fontWeight: 'bold',
                },
                textStyle: {
                  fontSize: '1.5rem',
                  color: getComputedCSSProperty('color-soft-text'),
                },
              },
              formatter: `{valueStyle|{value}}/100\n{textStyle|completed}`,
            },
            pointer: {
              show: false,
            },
          },
        ],
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
