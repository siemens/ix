/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-empty-state.scoped.css';

import { useEffect, useState } from 'react';
import { themeSwitcher } from '@siemens/ix';
import { registerTheme, resolveEChartThemeName } from '@siemens/ix-echarts';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { IxEmptyState } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';

function useEChartTheme() {
  const [theme, setTheme] = useState(resolveEChartThemeName);

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
  registerTheme(echarts);

  const theme = useEChartTheme();

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
    <div className="echarts">
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
      <ReactEcharts option={options} theme={theme} className="echarts" />
    </div>
  );
}
