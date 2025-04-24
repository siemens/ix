/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-line-advanced.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

export default function EchartsLineAdvanced() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const dates = Array.from({ length: 2025 - 2013 }, (_, i) =>
    (2013 + i).toString()
  );

  const stockData = [
    77.67, 82.81, 84.09, 91.75, 118.15, 107.48, 99.36, 93.07, 137.18, 104.38,
    156.48, 168.52,
  ];

  const options: EChartsOption = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: dates },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    series: [
      {
        type: 'line',
        data: stockData,
        smooth: true,
        lineStyle: { width: 4, shadowBlur: 10 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            { offset: 1, color: 'transparent' },
          ]),
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max', symbol: 'circle', symbolSize: 60 },
            { type: 'min', name: 'Min', symbol: 'circle', symbolSize: 60 },
          ],
          label: {
            fontWeight: 'bold',
            color: getComputedCSSProperty('color-inv-contrast-text'),
          },
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
          lineStyle: { type: 'dashed' },
        },
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
