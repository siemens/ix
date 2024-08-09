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
  templateUrl: './echarts-gauge.html',
})
export default class EchartsGauge implements OnInit {
  theme = convertThemeName(themeSwitcher.getCurrentTheme());

  value = 45.3;

  private getGaugeColor(value: number) {
    if (value > 60) return getComputedCSSProperty('--theme-color-success');
    else if (value > 25) return getComputedCSSProperty('--theme-color-warning');
    else {
      return getComputedCSSProperty('--theme-color-alarm');
    }
  }

  options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 18,
          },
        },
        axisTick: {
          show: false,
        },
        radius: '75%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        splitNumber: 1,
        splitLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          distance: 30,
          fontSize: 16,
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: this.getGaugeColor(this.value),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: this.value,
            title: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, -70],
              overflow: 'break',
              fontSize: '1.5rem',
              width: 250,
              lineHeight: 35,
              formatter: '{value}Mbps \nNetwork Speed',
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
      {
        id: '2',
        type: 'gauge',
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 5,
            color: [
              [0.25, getComputedCSSProperty('--theme-color-alarm')],
              [0.6, getComputedCSSProperty('--theme-color-warning')],
              [1, getComputedCSSProperty('--theme-color-success')],
            ],
          },
        },
        radius: '80%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
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
