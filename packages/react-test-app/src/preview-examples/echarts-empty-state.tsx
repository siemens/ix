/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import {convertThemeName, registerTheme} from '@siemens/ix-echarts';
import {themeSwitcher} from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {EChartsOption} from 'echarts';
import {IxEmptyState} from '@siemens/ix-react';

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
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '40rem',
        paddingTop: '1rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: `var(--theme-color-backdrop)`,
          zIndex: 1,
        }}
      >
        <IxEmptyState
          className="empty-state"
          header="No elements available"
          sub-header="Failed to retrieve data"
          icon="info"
          action="Try again"
        ></IxEmptyState>
      </div>
      <ReactEcharts
        option={options}
        theme={theme}
        style={{
          display: 'block',
          position: 'relative',
          height: '100%',
        }}
      />
    </div>
  );
}
