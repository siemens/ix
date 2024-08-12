/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import {convertThemeName, getComputedCSSProperty, registerTheme} from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

export default function EchartsGauge() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(
    convertThemeName(themeSwitcher.getCurrentTheme())
  );

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(convertThemeName(theme));
    });
  }, []);

  const value = 45.3;

  function getGaugeColor(value: number) {
    if (value > 60) return getComputedCSSProperty('--theme-color-success');
    else if (value > 25) return getComputedCSSProperty('--theme-color-warning');
    else {
      return getComputedCSSProperty('--theme-color-alarm');
    }
  }

  const options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 18,
            color: [
              [1, getComputedCSSProperty('--theme-color-neutral-40')],
            ],
          },
        },
        axisTick: {
          show: false,
        },
        radius: '75%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        splitNumber: 1,
        splitLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          distance: 30,
          fontSize: 16,
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: getGaugeColor(value),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: value,
            title: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, -70],
              overflow: 'break',
              fontSize: '1.5rem',
              width: 250,
              lineHeight: 35,
              color: getComputedCSSProperty('--theme-color-soft-text'),
              formatter: '{value}Mbps \nNetwork Speed',
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
      {
        id: '2',
        type: 'gauge',
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 5,
            color: [
              [0.25, getComputedCSSProperty('--theme-color-alarm')],
              [0.6, getComputedCSSProperty('--theme-color-warning')],
              [1, getComputedCSSProperty('--theme-color-success')],
            ],
          },
        },
        radius: '80%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
      },
    ],
  };

  return (
    <ReactEcharts
      option={options}
      theme={theme}
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '40rem',
        paddingTop: '1rem',
      }}
    />
  );
}
