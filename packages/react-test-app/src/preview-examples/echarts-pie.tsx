/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-pie.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

export default function EchartsPie() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = [
    { value: 29.4, name: 'China' },
    { value: 14.3, name: 'U.S' },
    { value: 9.8, name: 'EEA' },
    { value: 6.8, name: 'India' },
    { value: 4.9, name: 'Russia' },
    { value: 3.5, name: 'Japan' },
    { value: 31.5, name: 'Other' },
  ];

  const options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'rect',
      bottom: '0',
      left: '0',
    },
    series: [
      {
        name: 'CO2 emissions from<',
        type: 'pie',
        radius: '80%',
        data: data,
        label: {
          show: true,
          color: getComputedCSSProperty('color-neutral'),
        },
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

  return (
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts"
    />
  );
}
