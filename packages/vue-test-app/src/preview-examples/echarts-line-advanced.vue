<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import {
  getComputedCSSProperty,
  registerTheme,
  resolveEChartThemeName,
} from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';
import * as echarts from 'echarts';
import * as charts from 'echarts/charts';
import * as components from 'echarts/components';
import * as renderer from 'echarts/renderers';
import { EChartsOption } from 'echarts';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  components.MarkPointComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(resolveEChartThemeName());

const dates = Array.from({ length: 2025 - 2013 }, (_, i) =>
  (2013 + i).toString()
);

const stockData = [
  77.67, 82.81, 84.09, 91.75, 118.15, 107.48, 99.36, 93.07, 137.18, 104.38,
  156.48, 168.52,
];

function getOptions(): EChartsOption {
  return {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: dates },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    series: [
      {
        type: 'line',
        data: stockData,
        smooth: true,
        lineStyle: { width: 4, shadowBlur: 10 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            { offset: 1, color: 'transparent' },
          ]),
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max', symbol: 'circle', symbolSize: 60 },
            { type: 'min', name: 'Min', symbol: 'circle', symbolSize: 60 },
          ],
          label: {
            fontWeight: 'bold',
            color: getComputedCSSProperty('color-inv-contrast-text'),
          },
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
          lineStyle: { type: 'dashed' },
        },
      },
    ],
  };
}

const options = ref<EChartsOption>(getOptions());

const disposer = themeSwitcher.themeChanged.on(() => {
  theme.value = resolveEChartThemeName();
  options.value = getOptions();
});

onBeforeUnmount(() => {
  disposer.dispose();
});
</script>

<style scoped src="./echarts-line-advanced.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
