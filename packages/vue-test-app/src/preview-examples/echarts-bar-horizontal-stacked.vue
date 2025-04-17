<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';
import * as echarts from 'echarts/core';
import * as charts from 'echarts/charts';
import * as components from 'echarts/components';
import * as renderer from 'echarts/renderers';
import { BarSeriesOption, EChartsOption } from 'echarts';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  charts.BarChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const data = {
  years: ['2023', '2022', '2021', '2020', '2019'],
  salesEurope: [87, 22, 28, 43, 79],
  salesUS: [35, 24, 33, 5, 40],
  salesChina: [19, 44, 23, 5, 10],
};

const seriesData = [
  { name: 'Europe', data: data.salesEurope },
  { name: 'U.S', data: data.salesUS },
  { name: 'China', data: data.salesChina },
];

const series = seriesData.map(
  ({ name, data }) =>
    ({
      name,
      data,
      type: 'bar',
      stack: 'x',
    } as BarSeriesOption)
);

const options: EChartsOption = {
  xAxis: {
    type: 'value',
    name: 'Revenue (in Millions of USD)',
    nameLocation: 'middle',
    nameGap: 40,
  },
  yAxis: {
    type: 'category',
    data: data.years,
    name: 'Years',
    nameLocation: 'end',
  },
  legend: {
    show: true,
    bottom: '0',
    left: '0',
  },
  series: series,
} as EChartsOption;
</script>

<style scoped src="./echarts-bar-horizontal-stacked.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
