/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import {
  convertThemeName,
  getComputedCSSProperty,
  registerTheme,
} from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';
import 'echarts-gl';

export default function EchartsSpecial3d() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(
    convertThemeName(themeSwitcher.getCurrentTheme())
  );

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(convertThemeName(theme));
    });
  }, []);

  function gridConfig() {
    return {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: getComputedCSSProperty('--theme-chart-axes'),
        },
      },
      splitLine: {
        lineStyle: {
          color: getComputedCSSProperty('--theme-chart-grid-lines'),
        },
      },
      axisLabel: {
        color: getComputedCSSProperty('--theme-color-std-text'),
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
