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
import { IxEmptyState } from '@siemens/ix-vue';
import { iconInfo } from '@siemens/ix-icons/icons';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
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

<style scoped src="./echarts-empty-state.css"></style>

<template>
  <div class="echarts">
    <div v-if="data.value.length === 0" class="empty-state-container">
      <IxEmptyState
        className="empty-state"
        header="No elements available"
        sub-header="Failed to retrieve data"
        :icon="iconInfo"
        action="Try again"
      ></IxEmptyState>
    </div>
    <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
  </div>
</template>
