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
import { EChartsOption } from 'echarts';

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
} as EChartsOption;
</script>

<style scoped src="./echarts-bar-simple.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
