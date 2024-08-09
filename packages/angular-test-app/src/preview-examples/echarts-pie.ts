/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { convertThemeName, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-pie.html',
})
export default class EchartsPie implements OnInit {
  theme = convertThemeName(themeSwitcher.getCurrentTheme());

  data = [
    { value: 29.4, name: 'China' },
    { value: 14.3, name: 'U.S' },
    { value: 9.8, name: 'EEA' },
    { value: 6.8, name: 'India' },
    { value: 4.9, name: 'Russia' },
    { value: 3.5, name: 'Japan' },
    { value: 31.5, name: 'Other' },
  ];

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'CO2 emissions from<',
        type: 'pie',
        radius: '50%',
        data: this.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
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
