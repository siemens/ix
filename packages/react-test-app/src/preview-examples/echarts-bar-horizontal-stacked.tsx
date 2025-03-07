/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-bar-horizontal-stacked.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { BarSeriesOption, EChartsOption } from 'echarts';

export default function EchartsBarHorizontalStacked() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = {
    years: ['2023', '2022', '2021', '2020', '2019'],
    salesEurope: [87, 22, 28, 43, 79],
    salesUS: [35, 24, 33, 5, 40],
    salesChina: [19, 44, 23, 5, 10],
  };

  const seriesData = [
    { name: 'Europe', data: data.salesEurope },
    { name: 'U.S', data: data.salesUS },
    { name: 'China', data: data.salesChina },
  ];

  const series: BarSeriesOption[] = seriesData.map(({ name, data }) => ({
    name,
    data,
    type: 'bar',
    stack: 'x',
  }));

  const options: EChartsOption = {
    xAxis: {
      type: 'value',
      name: 'Revenue (in Millions of USD)',
      nameLocation: 'middle',
      nameGap: 40,
    },
    yAxis: {
      type: 'category',
      data: data.years,
      name: 'Years',
      nameLocation: 'end',
    },
    legend: {
      show: true,
      left: '0',
      bottom: '0',
    },
    series: series,
  };

  return <ReactEcharts option={options} theme={theme} className="echarts" />;
}
