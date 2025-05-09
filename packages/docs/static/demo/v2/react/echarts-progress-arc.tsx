/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-progress-arc.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

export default function EchartsProgressArc() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const value = 60;

  const options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 15,
            color: [[1, getComputedCSSProperty('color-neutral-40')]],
          },
        },
        axisTick: {
          show: false,
        },
        radius: '100%',
        startAngle: 200,
        endAngle: -20,
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: getComputedCSSProperty('color-success'),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: value,
            detail: {
              offsetCenter: [0, 0],
              overflow: 'break',
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('color-soft-text'),
              width: 250,
              lineHeight: 35,
              formatter: '{value} / 100 \n completed',
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts-gauge"
    />
  );
}
