/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { BarSeriesOption, EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-bar-horizontal-stacked.html',
  styleUrls: ['./echarts-bar-horizontal-stacked.css'],
})
export default class EchartsBarHorizontalStacked implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = {
    years: ['2023', '2022', '2021', '2020', '2019'],
    salesEurope: [87, 22, 28, 43, 79],
    salesUS: [35, 24, 33, 5, 40],
    salesChina: [19, 44, 23, 5, 10],
  };

  seriesData = [
    { name: 'Europe', data: this.data.salesEurope },
    { name: 'U.S', data: this.data.salesUS },
    { name: 'China', data: this.data.salesChina },
  ];

  series: BarSeriesOption[] = this.seriesData.map(({ name, data }) => ({
    name,
    data,
    type: 'bar',
    stack: 'x',
  }));

  options: EChartsOption = {
    xAxis: {
      type: 'value',
      name: 'Revenue (in Millions of USD)',
      nameLocation: 'middle',
      nameGap: 40,
    },
    yAxis: {
      type: 'category',
      data: this.data.years,
      name: 'Years',
      nameLocation: 'end',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    series: this.series,
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
