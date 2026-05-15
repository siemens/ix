/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-bar-horizontal-stacked.scoped.css';

import { useEffect, useRef, useState } from 'react';
import { themeSwitcher } from '@siemens/ix';
import { registerTheme, resolveEChartThemeName } from '@siemens/ix-echarts';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { BarSeriesOption, EChartsOption } from 'echarts';

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

export default function EchartsBarHorizontalStacked() {
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
