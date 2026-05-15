/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-empty-state.scoped.css';

import { useEffect, useRef, useState } from 'react';
import { themeSwitcher } from '@siemens/ix';
import { registerTheme, resolveEChartThemeName } from '@siemens/ix-echarts';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { IxEmptyState } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';

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

export default function Echarts() {
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
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [],
  };

  const options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: data.weekdays,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.value,
        type: 'line',
      },
    ],
  };

  return (
    <div ref={chartContainerRef} className="echarts">
      {data.value.length === 0 && (
        <div className="empty-state-container">
          <IxEmptyState
            className="empty-state"
            header="No elements available"
            subHeader="Failed to retrieve data"
            icon={iconInfo}
            action="Try again"
          />
        </div>
      )}
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
