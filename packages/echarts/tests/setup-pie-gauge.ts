/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import { registerTheme, resolveEChartThemeName } from '../src/index';

function applyThemeFromSearchParams() {
  const searchParams = new URLSearchParams(location.search);
  const theme = searchParams.get('theme');
  const colorSchema = searchParams.get('colorSchema');

  if (!theme) {
    document.documentElement.dataset.ixTheme = 'brand';
    document.documentElement.dataset.ixColorSchema = 'dark';
    return;
  }

  if (theme.startsWith('theme-')) {
    const [, resolvedTheme, resolvedColorSchema] = theme.split('-');
    document.documentElement.dataset.ixTheme = resolvedTheme ?? 'brand';
    document.documentElement.dataset.ixColorSchema =
      resolvedColorSchema ?? 'dark';
    return;
  }

  document.documentElement.dataset.ixTheme = theme;
  document.documentElement.dataset.ixColorSchema = colorSchema ?? 'dark';
}

registerTheme(echarts);
applyThemeFromSearchParams();

const theme = resolveEChartThemeName();
document.body.style.backgroundColor = theme.includes('dark') ? 'black' : 'white';

const chartContainer = document.querySelector<HTMLElement>('#main');

if (!chartContainer) {
  throw new Error('chart container not found');
}

const chart = echarts.init(chartContainer, theme);

const option: EChartsOption = {
  title: {
    text: 'Production mix',
    subtext: 'Current allocation',
    left: 'center',
    top: 16,
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 18,
    top: 'middle',
    itemGap: 12,
    textStyle: {
      fontSize: 12,
    },
  },
  series: [
    {
      name: 'Allocation',
      type: 'pie',
      radius: ['42%', '68%'],
      center: ['58%', '52%'],
      itemStyle: {
        borderRadius: 6,
        borderColor: '#ffffff',
        borderWidth: 2,
      },
      label: {
        formatter: '{b}: {d}%',
      },
      data: [
        { value: 42, name: 'Production' },
        { value: 24, name: 'Quality' },
        { value: 18, name: 'Maintenance' },
        { value: 16, name: 'Inventory' },
      ],
    },
    {
      type: 'gauge',
      min: 0,
      max: 100,
      center: ['26%', '56%'],
      radius: '42%',
      startAngle: 225,
      endAngle: -45,
      progress: {
        show: true,
        width: 16,
      },
      axisLine: {
        lineStyle: {
          width: 16,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, '32%'],
        formatter: '{value}%',
        fontSize: 20,
        fontWeight: 600,
      },
      data: [{ value: 72, name: 'Uptime' }],
    },
  ],
};

chart.setOption(option);
