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
  { value: 72.17, name: 'Windows' },
  { value: 15.42, name: 'macOS' },
  { value: 4.03, name: 'Linux' },
  { value: 2.27, name: 'Chrome OS' },
  { value: 6.11, name: 'Other' },
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
      name: 'OS Share',
      type: 'pie',
      radius: ['60%', '90%'],
      label: {
        show: true,
        color: getComputedCSSProperty('color-neutral'),
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: data,
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-circle.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
