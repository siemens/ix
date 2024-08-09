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
  templateUrl: './echarts-circle.html',
})
export default class EchartsCircle implements OnInit {
  theme = convertThemeName(themeSwitcher.getCurrentTheme());

  data = [
    { value: 72.17, name: 'Windows' },
    { value: 15.42, name: 'macOS' },
    { value: 4.03, name: 'Linux' },
    { value: 2.27, name: 'Chrome OS' },
    { value: 6.11, name: 'Other' },
  ];

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'circle',
      right: 'right',
    },
    series: [
      {
        name: 'OS Share',
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          show: true,
          color: getComputedCSSProperty('--theme-color-neutral'),
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: true,
        },
        data: this.data,
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
