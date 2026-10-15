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

const container = document.querySelector<HTMLElement>('#main');

if (!container) {
  throw new Error('chart container not found');
}

container.style.cssText = `
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 16px;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const cards = [
  ['gauge', 'radar'],
  ['pie', 'funnel'],
  ['scatter', 'boxplot'],
  ['candlestick', 'gauge-2'],
] as const;

for (const [idA, idB] of cards) {
  const cardA = document.createElement('div');
  cardA.id = `${idA}-card`;
  cardA.style.cssText =
    'width: 100%; height: 260px; border-radius: 8px; background: rgba(255,255,255,0.02);';
  container.appendChild(cardA);

  const cardB = document.createElement('div');
  cardB.id = `${idB}-card`;
  cardB.style.cssText =
    'width: 100%; height: 260px; border-radius: 8px; background: rgba(255,255,255,0.02);';
  container.appendChild(cardB);
}

const gaugeChart = echarts.init(document.getElementById('gauge-card')!, theme);
const radarChart = echarts.init(document.getElementById('radar-card')!, theme);
const pieChart = echarts.init(document.getElementById('pie-card')!, theme);
const funnelChart = echarts.init(document.getElementById('funnel-card')!, theme);
const scatterChart = echarts.init(document.getElementById('scatter-card')!, theme);
const boxplotChart = echarts.init(document.getElementById('boxplot-card')!, theme);
const candlestickChart = echarts.init(document.getElementById('candlestick-card')!, theme);
const gaugeChart2 = echarts.init(document.getElementById('gauge-2-card')!, theme);

const gaugeOption: EChartsOption = {
  title: { text: 'Uptime', left: 'center' },
  series: [
    {
      type: 'gauge',
      min: 0,
      max: 100,
      radius: '82%',
      progress: { show: true, width: 12 },
      axisLine: { lineStyle: { width: 12 } },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      pointer: { show: false },
      detail: { valueAnimation: true, formatter: '{value}%', offsetCenter: [0, '30%'] },
      data: [{ value: 82, name: 'System' }],
    },
  ],
};

const radarOption: EChartsOption = {
  title: { text: 'Risk profile', left: 'center' },
  radar: {
    indicator: [
      { name: 'Quality', max: 100 },
      { name: 'Safety', max: 100 },
      { name: 'Cost', max: 100 },
      { name: 'Delay', max: 100 },
      { name: 'Capacity', max: 100 },
    ],
  },
  series: [
    {
      type: 'radar',
      data: [
        { value: [86, 74, 68, 82, 92], name: 'Current' },
        { value: [96, 90, 80, 70, 88], name: 'Target' },
      ],
    },
  ],
};

const pieOption: EChartsOption = {
  title: { text: 'Segment split', left: 'center' },
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '58%'],
      label: { formatter: '{b}: {d}%' },
      data: [
        { value: 36, name: 'A' },
        { value: 28, name: 'B' },
        { value: 22, name: 'C' },
        { value: 14, name: 'D' },
      ],
    },
  ],
};

const funnelOption: EChartsOption = {
  title: { text: 'Pipeline', left: 'center' },
  series: [
    {
      type: 'funnel',
      width: '80%',
      height: '70%',
      left: '10%',
      top: '10%',
      sort: 'descending',
      data: [
        { value: 120, name: 'Leads' },
        { value: 90, name: 'Qualified' },
        { value: 70, name: 'Proposal' },
        { value: 40, name: 'Negotiation' },
        { value: 20, name: 'Won' },
      ],
    },
  ],
};

const scatterOption: EChartsOption = {
  title: { text: 'Correlation', left: 'center' },
  xAxis: { type: 'value', scale: true },
  yAxis: { type: 'value', scale: true },
  series: [
    {
      type: 'scatter',
      symbolSize: 10,
      data: [
        [10, 18], [20, 26], [30, 14], [35, 28], [45, 22], [60, 32], [75, 28], [85, 36], [90, 42], [95, 18],
      ],
    },
  ],
};

const boxplotOption: EChartsOption = {
  title: { text: 'Outliers', left: 'center' },
  xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
  yAxis: { type: 'value' },
  series: [
    {
      type: 'boxplot',
      data: [
        [120, 170, 200, 260, 310],
        [130, 180, 220, 260, 300],
        [110, 150, 200, 260, 290],
        [140, 190, 230, 270, 320],
      ],
    },
  ],
};

const candlestickOption: EChartsOption = {
  title: { text: 'Market range', left: 'center' },
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
  yAxis: { type: 'value' },
  series: [
    {
      type: 'candlestick',
      data: [
        [120, 132, 118, 140],
        [140, 142, 132, 150],
        [150, 165, 142, 168],
        [168, 170, 160, 172],
        [172, 178, 168, 180],
      ],
    },
  ],
};

const gaugeOption2: EChartsOption = {
  title: { text: 'Load', left: 'center' },
  series: [
    {
      type: 'gauge',
      min: 0,
      max: 100,
      radius: '80%',
      progress: { show: true, width: 12 },
      axisLine: { lineStyle: { width: 12 } },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      detail: { valueAnimation: true, formatter: '{value}%', offsetCenter: [0, '32%'] },
      data: [{ value: 65, name: 'Load' }],
    },
  ],
};

gaugeChart.setOption(gaugeOption);
radarChart.setOption(radarOption);
pieChart.setOption(pieOption);
funnelChart.setOption(funnelOption);
scatterChart.setOption(scatterOption);
boxplotChart.setOption(boxplotOption);
candlestickChart.setOption(candlestickOption);
gaugeChart2.setOption(gaugeOption2);
