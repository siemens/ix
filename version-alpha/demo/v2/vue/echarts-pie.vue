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
import { EChartsOption } from 'echarts';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  charts.PieChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const data = [
  { value: 29.4, name: 'China' },
  { value: 14.3, name: 'U.S' },
  { value: 9.8, name: 'EEA' },
  { value: 6.8, name: 'India' },
  { value: 4.9, name: 'Russia' },
  { value: 3.5, name: 'Japan' },
  { value: 31.5, name: 'Other' },
];

const options: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    icon: 'rect',
    bottom: '0',
    left: '0',
  },
  series: [
    {
      name: 'CO2 emissions from<',
      type: 'pie',
      radius: '80%',
      data: data,
      label: {
        show: true,
        color: getComputedCSSProperty('color-neutral'),
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-pie.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
