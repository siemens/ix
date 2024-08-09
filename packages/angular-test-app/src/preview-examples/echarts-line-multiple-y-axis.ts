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
  templateUrl: './echarts-line-multiple-y-axis.html',
})
export default class EchartsLineMultipleYAxis implements OnInit {
  theme = convertThemeName(themeSwitcher.getCurrentTheme());

  dates = Array.from({ length: 2025 - 2013 }, (_, i) => (2013 + i).toString());

  //prettier-ignore
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  data = {
    evaporation: this.months.map(() => (Math.random() * 100).toFixed(2)),
    precipitation: this.months.map(() => (Math.random() * 200).toFixed(2)),
    temperature: this.months.map(() => (Math.random() * 30).toFixed(2)),
  };

  options: EChartsOption = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
    grid: { right: '20%' },
    legend: { data: ['Evaporation', 'Precipitation', 'Temperature'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { alignWithLabel: true },
        data: this.months,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Evaporation',
        position: 'right',
        axisLabel: { formatter: '{value} ml' },
      },
      {
        type: 'value',
        name: 'Precipitation',
        position: 'right',
        offset: 80,
        axisLabel: { formatter: '{value} ml' },
      },
      {
        type: 'value',
        name: 'Temperature',
        position: 'left',
        axisLabel: { formatter: '{value} °C' },
      },
    ],
    series: [
      { name: 'Evaporation', type: 'line', data: this.data.evaporation },
      {
        name: 'Precipitation',
        type: 'line',
        yAxisIndex: 1,
        data: this.data.precipitation,
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 2,
        data: this.data.temperature,
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
