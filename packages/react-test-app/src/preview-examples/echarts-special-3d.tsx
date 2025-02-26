/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-special-3d.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';
/* import 'echarts-gl'; */

export default function EchartsSpecial3d() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  function gridConfig() {
    return {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: getComputedCSSProperty('chart-axes'),
        },
      },
      splitLine: {
        lineStyle: {
          color: getComputedCSSProperty('chart-grid-lines'),
        },
      },
      axisLabel: {
        color: getComputedCSSProperty('color-std-text'),
      },
    };
  }

  const options: EChartsOption = {
    tooltip: {},
    visualMap: {
      show: false,
      dimension: 2,
      min: -1,
      max: 1,
    },
    xAxis3D: gridConfig(),
    yAxis3D: gridConfig(),
    zAxis3D: gridConfig(),
    grid3D: {
      viewControl: {
        projection: 'orthographic',
      },
    },
    series: [
      {
        type: 'surface',
        equation: {
          x: {
            step: 0.05,
          },
          y: {
            step: 0.05,
          },
          z: (x: number, y: number): string | number => {
            if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              return '-';
            }
            return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
          },
        },
      } as any,
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
