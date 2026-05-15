/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-progress-circle.scoped.css';

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

export default function EchartsGauge() {
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
        startAngle: 90,
        endAngle: -270,
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
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('color-soft-text'),
              rich: {
                valueStyle: {
                  fontSize: '2rem',
                  color: getComputedCSSProperty('color-soft-text'),
                  fontWeight: 'bold',
                },
                textStyle: {
                  fontSize: '1.5rem',
                  color: getComputedCSSProperty('color-soft-text'),
                },
              },
              formatter: `{valueStyle|{value}}/100\n{textStyle|completed}`,
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
    <div ref={chartContainerRef} className="echarts-gauge">
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
