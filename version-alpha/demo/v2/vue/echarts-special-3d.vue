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
/* import 'echarts-gl'; */

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

function gridConfig() {
  return {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: getComputedCSSProperty('chart-axes'),
      },
    },
    splitLine: {
      lineStyle: {
        color: getComputedCSSProperty('chart-grid-lines'),
      },
    },
    axisLabel: {
      color: getComputedCSSProperty('color-std-text'),
    },
  };
}

const options = {
  tooltip: {},
  visualMap: {
    show: false,
    dimension: 2,
    min: -1,
    max: 1,
  },
  xAxis3D: gridConfig(),
  yAxis3D: gridConfig(),
  zAxis3D: gridConfig(),
  grid3D: {
    viewControl: {
      projection: 'orthographic',
    },
  },
  series: [
    {
      type: 'surface',
      equation: {
        x: {
          step: 0.05,
        },
        y: {
          step: 0.05,
        },
        z: (x: number, y: number): string | number => {
          if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
            return '-';
          }
          return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
        },
      },
    } as any,
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-special-3d.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
