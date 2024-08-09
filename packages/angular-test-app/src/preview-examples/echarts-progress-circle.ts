/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import {
  convertThemeName,
  registerTheme,
  getComputedCSSProperty,
} from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-progress-circle.html',
})
export default class EchartsProgressCircle implements OnInit {
  theme = convertThemeName(themeSwitcher.getCurrentTheme());

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
            color: getComputedCSSProperty('--theme-color-success'),
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
              overflow: 'break',
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('--theme-color-neutral'),
              width: 'auto',
              lineHeight: 35,
              rich: {
                valueStyle: {
                  fontSize: '2rem',
                  color: getComputedCSSProperty('--theme-color-neutral'),
                  fontWeight: 'bold',
                },
                textStyle: {
                  fontSize: '1.5rem',
                  color: getComputedCSSProperty('--theme-color-neutral'),
                  fontWeight: 'normal',
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
      this.theme = convertThemeName(theme);
    });
  }
}
