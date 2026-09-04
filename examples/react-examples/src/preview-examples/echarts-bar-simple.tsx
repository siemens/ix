/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './echarts-bar-simple.scoped.css';

import { useEffect, useState } from 'react';
import { themeSwitcher } from '@siemens/ix';
import { registerTheme, resolveEChartThemeName } from '@siemens/ix-echarts';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

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

export default function EchartsBarSimple() {
  registerTheme(echarts);

  const theme = useEChartTheme();

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
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts"
    />
  );
}
