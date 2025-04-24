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

const value = 45.3;

function getGaugeColor(value: number) {
  if (value > 60) return getComputedCSSProperty('color-success');
  else if (value > 25) return getComputedCSSProperty('color-warning');
  else {
    return getComputedCSSProperty('color-alarm');
  }
}

const options: EChartsOption = {
  series: [
    {
      id: '1',
      type: 'gauge',
      axisLine: {
        show: true,
        lineStyle: {
          width: 18,
          color: [[1, getComputedCSSProperty('color-neutral-40')]],
        },
      },
      axisTick: {
        show: false,
      },
      radius: '75%',
      center: ['50%', '60%'],
      startAngle: 180,
      endAngle: 0,
      splitNumber: 1,
      splitLine: {
        show: true,
      },
      axisLabel: {
        show: true,
        distance: 30,
        fontSize: 16,
      },
      progress: {
        show: true,
        overlap: false,
        width: 35,
        itemStyle: {
          borderMiterLimit: 16,
          color: getGaugeColor(value),
        },
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: value,
          title: {
            show: false,
          },
          detail: {
            show: true,
            offsetCenter: [0, -70],
            overflow: 'break',
            fontSize: '1.5rem',
            width: 250,
            lineHeight: 35,
            color: getComputedCSSProperty('color-soft-text'),
            formatter: '{value}Mbps \nNetwork Speed',
          },
          pointer: {
            show: false,
          },
        },
      ],
    },
    {
      id: '2',
      type: 'gauge',
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 5,
          color: [
            [0.25, getComputedCSSProperty('color-alarm')],
            [0.6, getComputedCSSProperty('color-warning')],
            [1, getComputedCSSProperty('color-success')],
          ],
        },
      },
      radius: '80%',
      center: ['50%', '60%'],
      startAngle: 180,
      endAngle: 0,
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-gauge.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
