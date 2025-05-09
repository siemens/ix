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
  getComputedCSSProperty,
  registerTheme,
} from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import 'echarts-gl';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-special-3d.html',
  styleUrls: ["./echarts-special-3d.css"],
})
export default class EchartsSpecial3d implements OnInit {
  theme = convertThemeName(themeSwitcher.getCurrentTheme());

  gridConfig() {
    return {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: getComputedCSSProperty('chart-axes'),
        },
      },
      splitLine: {
        lineStyle: {
          color: getComputedCSSProperty('chart-grid-lines'),
        },
      },
      axisLabel: {
        color: getComputedCSSProperty('color-std-text'),
      }
    };
  }

  options: EChartsOption = {
    tooltip: {},
    visualMap: {
      show: false,
      dimension: 2,
      min: -1,
      max: 1,
    },
    xAxis3D: this.gridConfig(),
    yAxis3D: this.gridConfig(),
    zAxis3D: this.gridConfig(),
    grid3D: {
      viewControl: {
        projection: 'orthographic',
      },
    },
    series: [
      {
        type: 'surface',
        equation: {
          x: {
            step: 0.05,
          },
          y: {
            step: 0.05,
          },
          z: (x: number, y: number): string | number => {
            if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              return '-';
            }
            return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
          },
        },
      } as any,
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = convertThemeName(theme);
    });
  }
}
