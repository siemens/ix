<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import { convertThemeName, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';
import * as echarts from 'echarts/core';
import * as charts from 'echarts/charts';
import * as components from 'echarts/components';
import * as renderer from 'echarts/renderers';
import { EChartsOption } from 'echarts';
import { IxEmptyState } from '@siemens/ix-vue';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(convertThemeName(themeSwitcher.getCurrentTheme()));

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = convertThemeName(newTheme);
});

const data = {
  weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  value: [],
};

const options = {
  xAxis: {
    type: 'category',
    data: data.weekdays,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: data.value,
      type: 'line',
    },
  ],
} as EChartsOption;
</script>

<style>
.empty-state-container {
  position: absolute;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--theme-color-backdrop);
  z-index: 1;
}

.chart-container {
  display: block;
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}

.chart {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="chart-container">
    <div class="empty-state-container">
      <IxEmptyState
        className="empty-state"
        header="No elements available"
        sub-header="Failed to retrieve data"
        icon="info"
        action="Try again"
      ></IxEmptyState>
    </div>
    <VueECharts class="chart" :theme="theme" :option="options" autoresize></VueECharts>
  </div>
</template>
