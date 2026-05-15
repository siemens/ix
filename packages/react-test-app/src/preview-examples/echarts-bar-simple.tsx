/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-bar-simple.scoped.css';

import { useEffect, useRef, useState } from 'react';
import { themeSwitcher } from '@siemens/ix';
import { registerTheme, resolveEChartThemeName } from '@siemens/ix-echarts';
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

export default function EchartsBarSimple() {
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
    products: [
      'Product A',
      'Product B',
      'Product C',
      'Product D',
      'Product E',
      'Product F',
    ],
    sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4],
  };

  const options: EChartsOption = {
    xAxis: {
      data: data.products,
      name: 'Product',
      nameLocation: 'end',
    },
    yAxis: {
      name: 'Number of sold products \n (in Mio)',
      nameLocation: 'end',
    },
    legend: {
      show: true,
    },
    series: [
      {
        data: data.sales,
        type: 'bar',
      },
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
