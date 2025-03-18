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
  components.DataZoomComponent,
  components.ToolboxComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

//create some random data
let base = +new Date(1968, 9, 3);
const oneDay = 24 * 3600 * 1000;
const date: (string | number)[] = [];

const data: number[] = [0];

function generateData(): void {
  for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    date.push(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`);
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }
}

generateData();

const options: EChartsOption = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10,
    },
    {
      start: 0,
      end: 10,
    },
  ],
  series: [
    {
      name: 'Synthetic data',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getComputedCSSProperty('color-primary'),
          },
          {
            offset: 1,
            color: 'transparent',
          },
        ]),
      },
      data: data,
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-special-zoom.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
