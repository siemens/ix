/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-line-simple.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

export default function EchartsLineSimple() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [150, 230, 224, 218, 135, 147, 260],
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
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts"
    />
  );
}
