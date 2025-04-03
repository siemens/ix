/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-special-zoom.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

export default function EchartsSpecialZoom() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  //create some random data
  let base = +new Date(1968, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  const date: (string | number)[] = [];

  const data: number[] = [0];

  function generateData(): void {
    for (let i = 1; i < 20000; i++) {
      const now = new Date((base += oneDay));
      date.push(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`);
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
  }

  generateData();

  const options: EChartsOption = {
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
      data: date,
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
        data: data,
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts"
    />
  );
}
