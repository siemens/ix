/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-special-3d.scoped.css';

import { useEffect, useRef, useState } from 'react';
import { themeSwitcher } from '@siemens/ix';
import {
  getComputedCSSProperty,
  registerTheme,
  resolveEChartThemeName,
} from '@siemens/ix-echarts';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
/* import 'echarts-gl'; */

registerTheme(echarts);

function useEChartTheme() {
  const [theme, setTheme] = useState(() => resolveEChartThemeName());

  useEffect(() => {
    const disposer = themeSwitcher.themeChanged.on(() => {
      setTheme(resolveEChartThemeName());
    });

    return () => {
      disposer.dispose();
    };
  }, []);

  return theme;
}

export default function EchartsSpecial3d() {
  const theme = useEChartTheme();
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    const chartContainer = chartContainerRef.current;

    if (!chartContainer) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;

      if (width === 0 || height === 0) {
        return;
      }

      setIsChartReady(true);
      chartInstanceRef.current?.resize();
    });

    observer.observe(chartContainer);

    return () => {
      observer.disconnect();
    };
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
    <div ref={chartContainerRef} className="echarts">
      {isChartReady ? (
        <ReactEcharts
          onChartReady={(instance) => {
            chartInstanceRef.current = instance;

            requestAnimationFrame(() => {
              instance.resize();
            });
          }}
          style={{ height: '100%', width: '100%' }}
          option={options}
          theme={theme}
        />
      ) : null}
    </div>
  );
}
