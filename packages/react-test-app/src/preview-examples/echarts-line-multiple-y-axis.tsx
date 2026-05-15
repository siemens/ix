/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-line-multiple-y-axis.scoped.css';

import { useEffect, useRef, useState } from 'react';
import { themeSwitcher } from '@siemens/ix';
import {
  getComputedCSSProperty,
  registerTheme,
  resolveEChartThemeName,
} from '@siemens/ix-echarts';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { EChartsOption, SeriesOption } from 'echarts';
import { YAXisOption } from 'echarts/types/dist/shared';

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

export default function EchartsLineMultipleYAxis() {
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

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const data = {
    evaporation: months.map(() => (Math.random() * 100).toFixed(2)),
    precipitation: months.map(() => (Math.random() * 200).toFixed(2)),
    temperature: months.map(() => (Math.random() * 30).toFixed(2)),
  };

  const themeChartList = Array.from({ length: 17 }, (_, i) =>
    getComputedCSSProperty(`chart-${i + 1}`)
  );

  function createYAxis(
    name: string,
    position: 'left' | 'right',
    color: string,
    formatter: string,
    offset: number = 0
  ): YAXisOption {
    return {
      type: 'value',
      name: name,
      position: position,
      offset: offset,
      alignTicks: true,
      axisLabel: {
        formatter: formatter,
      },
      axisTick: {
        lineStyle: {
          color: color,
        },
      },
      axisLine: {
        lineStyle: {
          color: color,
        },
      },
    };
  }

  function createSeries(
    name: string,
    yAxisIndex: number,
    data: any,
    color: string
  ): SeriesOption {
    return {
      name: name,
      type: 'line',
      yAxisIndex: yAxisIndex,
      data: data,
      lineStyle: {
        color: color,
      },
      itemStyle: {
        color: color,
      },
    };
  }

  const options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    grid: {
      right: '20%',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { alignWithLabel: true },
        data: months,
      },
    ],
    yAxis: [
      createYAxis('Evaporation', 'right', themeChartList[0], '{value} ml'),
      createYAxis(
        'Precipitation',
        'right',
        themeChartList[7],
        '{value} ml',
        80
      ),
      createYAxis('Temperature', 'left', themeChartList[12], '{value} °C'),
    ],
    series: [
      createSeries('Evaporation', 0, data.evaporation, themeChartList[0]),
      createSeries('Precipitation', 1, data.precipitation, themeChartList[7]),
      createSeries('Temperature', 2, data.temperature, themeChartList[12]),
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
