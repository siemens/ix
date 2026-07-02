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
    text: 'Main',
    subtext: 'The main chart',
  },
  legend: {
    bottom: 0,
    padding: [0,0,2,0]
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
      dataZoom: {},
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  timeline: {
    axisType: 'category',
    autoPlay: false,
    playInterval: 1000,
    data: ['1', '2', '3'],
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      name: 'Day',
      axisPointer: {
        type: 'shadow',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Amount',
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series',
      },
      markLine: {
        lineStyle: {
          type: 'dashed',
        },
        data: [[{ type: 'min' }, { type: 'max' }]],
      },
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};

switch (theme) {
  case 'theme-classic-dark':
    option.color = [
      '#EF9A9A',
      '#F38FC2',
      '#ED85FF',
      '#7AAAFF',
      '#FFB180',
      '#CACAB4',
      '#AAAA96',
      '#90B4C5',
    ];
    break;

  case 'theme-classic-light':
    option.color = [
      '#9E5833',
      '#6F2542',
      '#AA32BE',
      '#182171',
      '#B74E2A',
      '#73735E',
      '#7A8000',
      '#61778C',
    ];
    break;

  case 'theme-brand-dark':
    option.color = [
      '#BE5925',
      '#FF98C4',
      '#E5659B',
      '#97C7FF',
      '#FFBC66',
      '#FFF7D6',
      '#AAAA96',
      '#FFBC66',
    ];
    break;

  case 'theme-brand-light':
    option.color = [
      '#BE5925',
      '#4F153D',
      '#C04774',
      '#00237A',
      '#801100',
      '#805800',
      '#5E5E4A',
      '#801100',
    ];
    break;
}

chart.setOption(option);