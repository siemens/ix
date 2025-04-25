/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { registerTheme, getComputedCSSProperty } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-special-zoom.html',
  styleUrls: ['./echarts-special-zoom.css'],
})
export default class EchartsSpecialZoom implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  //create some random data
  private base = +new Date(1968, 9, 3);
  private oneDay = 24 * 3600 * 1000;
  private date: (string | number)[] = [];

  data: number[] = [0];

  options: EChartsOption = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.date,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: 'Synthetic data',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            {
              offset: 1,
              color: 'transparent',
            },
          ]),
        },
        data: this.data,
      },
    ],
  };

  generateData(): void {
    for (let i = 1; i < 20000; i++) {
      const now = new Date((this.base += this.oneDay));
      this.date.push(
        `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
      );
      this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]));
    }
  }

  ngOnInit() {
    this.generateData();

    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
