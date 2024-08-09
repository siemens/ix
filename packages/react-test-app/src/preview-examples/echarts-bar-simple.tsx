/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { convertThemeName, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

export default function EchartsBarSimple() {
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
    manufacturers: ['Toyota', 'VW', 'Hyundai/Kia', 'Stellantis', 'GM', 'Ford'],
    sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4],
  };

  const options: EChartsOption = {
    xAxis: {
      data: data.manufacturers,
      name: 'Manufacturer',
      nameLocation: 'middle',
      nameGap: 30,
      axisLabel: {
        interval: 0,
      },
    },
    yAxis: {
      name: 'Number of Vehicles Sold (in Millions)',
      nameLocation: 'middle',
      nameGap: 35,
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
