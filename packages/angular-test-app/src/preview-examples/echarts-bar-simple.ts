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
  templateUrl: './echarts-bar-simple.html',
})
export default class EchartsBarSimple implements OnInit {
  theme = convertThemeName(themeSwitcher.getCurrentTheme());
  data = {
    manufacturers: ['Toyota', 'VW', 'Hyundai/Kia', 'Stellantis', 'GM', 'Ford'],
    sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4],
  };

  options: EChartsOption = {
    xAxis: {
      data: this.data.manufacturers,
      name: 'Manufacturer',
      nameLocation: 'middle',
      nameGap: 30,
      axisLabel: {
        interval: 0,
      },
    },
    yAxis: {
      name: 'Number of Vehicles Sold (in Millions)',
      nameLocation: 'middle',
      nameGap: 35,
    },
    legend: {
      show: true,
    },
    series: [
      {
        data: this.data.sales,
        type: 'bar',
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
