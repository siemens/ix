<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import {
  convertThemeName,
  getComputedCSSProperty,
  registerTheme,
} from '@siemens/ix-echarts';
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
  charts.GaugeChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(convertThemeName(themeSwitcher.getCurrentTheme()));

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = convertThemeName(newTheme);
});

const value = 60;

const options = {
  series: [
    {
      id: '1',
      type: 'gauge',
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [[1, getComputedCSSProperty('--theme-color-neutral-40')]],
        },
      },
      axisTick: {
        show: false,
      },
      radius: '100%',
      startAngle: 200,
      endAngle: -20,
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        width: 35,
        itemStyle: {
          borderMiterLimit: 16,
          color: getComputedCSSProperty('--theme-color-success'),
        },
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: value,
          detail: {
            offsetCenter: [0, 0],
            overflow: 'break',
            fontSize: '2rem',
            fontWeight: 'normal',
            color: getComputedCSSProperty('--theme-color-soft-text'),
            width: 250,
            lineHeight: 35,
            formatter: '{value} / 100 \n completed',
          },
          pointer: {
            show: false,
          },
        },
      ],
    } as EChartsOption,
  ],
};
</script>

<template>
  <div
    style="
      display: block;
      position: relative;
      width: 100%;
      height: 40rem;
      padding-top: 1rem;
    "
  >
    <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
  </div>
</template>
