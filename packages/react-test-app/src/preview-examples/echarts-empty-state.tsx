/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-empty-state.css';

import { useEffect, useState } from 'react';
import { convertThemeName, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';
import { IxEmptyState } from '@siemens/ix-react';

export default function Echarts() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(
    convertThemeName(themeSwitcher.getCurrentTheme())
  );

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(convertThemeName(theme));
    });
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
    <div className="echarts">
      {data.value.length === 0 && (
        <div className="empty-state-container">
          <IxEmptyState
            className="empty-state"
            header="No elements available"
            subHeader="Failed to retrieve data"
            icon="info"
            action="Try again"
          />
        </div>
      )}
      <ReactEcharts option={options} theme={theme} className="echarts" />
    </div>
  );
}
