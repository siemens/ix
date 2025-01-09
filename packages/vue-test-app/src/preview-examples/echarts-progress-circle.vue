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
  charts.GaugeChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const value = 60;

const options: EChartsOption = {
  series: [
    {
      id: '1',
      type: 'gauge',
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [[1, getComputedCSSProperty('color-neutral-40')]],
        },
      },
      axisTick: {
        show: false,
      },
      radius: '100%',
      startAngle: 90,
      endAngle: -270,
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
          color: getComputedCSSProperty('color-success'),
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
            fontSize: '2rem',
            fontWeight: 'normal',
            color: getComputedCSSProperty('color-soft-text'),
            rich: {
              valueStyle: {
                fontSize: '2rem',
                color: getComputedCSSProperty('color-soft-text'),
                fontWeight: 'bold',
              },
              textStyle: {
                fontSize: '1.5rem',
                color: getComputedCSSProperty('color-soft-text'),
              },
            },
            formatter: `{valueStyle|{value}}/100\n{textStyle|completed}`,
          },
          pointer: {
            show: false,
          },
        },
      ],
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-progress-circle.css"></style>

<template>
  <VueECharts
    :theme="theme"
    :option="options"
    autoresize
    class="echarts-gauge"
  ></VueECharts>
</template>
