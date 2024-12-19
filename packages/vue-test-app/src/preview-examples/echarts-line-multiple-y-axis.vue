<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';
import * as echarts from 'echarts/core';
import * as charts from 'echarts/charts';
import * as components from 'echarts/components';
import * as renderer from 'echarts/renderers';
import { EChartsOption, SeriesOption } from 'echarts';
import { YAXisOption } from 'echarts/types/dist/shared';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

const dates = Array.from({ length: 2025 - 2013 }, (_, i) =>
  (2013 + i).toString()
);

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  evaporation: months.map(() => (Math.random() * 100).toFixed(2)),
  precipitation: months.map(() => (Math.random() * 200).toFixed(2)),
  temperature: months.map(() => (Math.random() * 30).toFixed(2)),
};

const themeChartList = Array.from({ length: 17 }, (_, i) =>
  getComputedCSSProperty(`chart-${i + 1}`)
);

function createYAxis(
  name: string,
  position: 'left' | 'right',
  color: string,
  formatter: string,
  offset: number = 0
): YAXisOption {
  return {
    type: 'value',
    name: name,
    position: position,
    offset: offset,
    alignTicks: true,
    axisLabel: {
      formatter: formatter,
    },
    axisTick: {
      lineStyle: {
        color: color,
      },
    },
    axisLine: {
      lineStyle: {
        color: color,
      },
    },
  };
}

function createSeries(
  name: string,
  yAxisIndex: number,
  data: any,
  color: string
): SeriesOption {
  return {
    name: name,
    type: 'line',
    yAxisIndex: yAxisIndex,
    data: data,
    lineStyle: {
      color: color,
    },
    itemStyle: {
      color: color,
    },
  } as SeriesOption;
}

const options: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' },
  },
  grid: {
    right: '20%',
  },
  legend: {
    show: true,
    bottom: '0',
    left: '0',
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { alignWithLabel: true },
      data: months,
    },
  ],
  yAxis: [
    createYAxis('Evaporation', 'right', themeChartList[0], '{value} ml'),
    createYAxis('Precipitation', 'right', themeChartList[7], '{value} ml', 80),
    createYAxis('Temperature', 'left', themeChartList[12], '{value} °C'),
  ],
  series: [
    createSeries('Evaporation', 0, data.evaporation, themeChartList[0]),
    createSeries('Precipitation', 1, data.precipitation, themeChartList[7]),
    createSeries('Temperature', 2, data.temperature, themeChartList[12]),
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-line-multiple-y-axis.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
