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
import { EChartsOption, SeriesOption } from 'echarts';
import { YAXisOption } from 'echarts/types/dist/shared';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-line-multiple-y-axis.html',
  styleUrls: ['./echarts-line-multiple-y-axis.css'],
})
export default class EchartsLineMultipleYAxis implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  dates = Array.from({ length: 2025 - 2013 }, (_, i) => (2013 + i).toString());

  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  data = {
    evaporation: this.months.map(() => (Math.random() * 100).toFixed(2)),
    precipitation: this.months.map(() => (Math.random() * 200).toFixed(2)),
    temperature: this.months.map(() => (Math.random() * 30).toFixed(2)),
  };

  themeChartList = Array.from({ length: 17 }, (_, i) =>
    getComputedCSSProperty(`chart-${i + 1}`)
  );

  createYAxis(
    name: string,
    position: 'left' | 'right',
    color: string,
    formatter: string,
    offset: number = 0
  ): YAXisOption {
    return {
      type: 'value',
      name: name,
      position: position,
      offset: offset,
      alignTicks: true,
      axisLabel: {
        formatter: formatter,
      },
      axisTick: {
        lineStyle: {
          color: color,
        },
      },
      axisLine: {
        lineStyle: {
          color: color,
        },
      },
    };
  }

  createSeries(
    name: string,
    yAxisIndex: number,
    data: any,
    color: string
  ): SeriesOption {
    return {
      name: name,
      type: 'line',
      yAxisIndex: yAxisIndex,
      data: data,
      lineStyle: {
        color: color,
      },
      itemStyle: {
        color: color,
      },
    };
  }

  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    grid: {
      right: '20%',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { alignWithLabel: true },
        data: this.months,
      },
    ],
    yAxis: [
      this.createYAxis(
        'Evaporation',
        'right',
        this.themeChartList[0],
        '{value} ml'
      ),
      this.createYAxis(
        'Precipitation',
        'right',
        this.themeChartList[7],
        '{value} ml',
        80
      ),
      this.createYAxis(
        'Temperature',
        'left',
        this.themeChartList[12],
        '{value} °C'
      ),
    ],
    series: [
      this.createSeries(
        'Evaporation',
        0,
        this.data.evaporation,
        this.themeChartList[0]
      ),
      this.createSeries(
        'Precipitation',
        1,
        this.data.precipitation,
        this.themeChartList[7]
      ),
      this.createSeries(
        'Temperature',
        2,
        this.data.temperature,
        this.themeChartList[12]
      ),
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
