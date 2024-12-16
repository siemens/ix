/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const colors = [
  '#00C1B6' /* theme-chart-3 */,
  '#85E9D2' /* theme-chart-2 */,
  '#3664C6' /* theme-chart-8 */,
  '#00FFB9' /* theme-chart-1 */,
  '#6895F6' /* theme-chart-6 */,
  '#CCF5F5' /* theme-chart-4 */,
  '#805CFF' /* theme-chart-10 */,
  '#BFB0F3' /* theme-chart-9 */,
  '#B95CC9' /* theme-chart-11 */,
  '#BE5925' /* theme-chart-14 */,
  '#FF98C4' /* theme-chart-13 */,
  '#E5659B' /* theme-chart-12 */,
  '#97C7FF' /* theme-chart-7 */,
  '#FFBC66' /* theme-chart-15 */,
  '#FFF7D6' /* theme-chart-16 */,
  '#AAAA96' /* theme-chart-17 */,
  '#FFBC66' /* theme-chart-5 */,
];

export default {
  themeName: 'brand-dark',
  theme: {
    color: colors,
    backgroundColor: 'rgba(0,0,0,0)',
    textStyle: {},
    title: {
      textStyle: {
        color: '#ffffff',
      },
      subtextStyle: {
        color: '#ffffff',
      },
    },
    line: {
      itemStyle: {
        borderWidth: 1,
      },
      lineStyle: {
        width: 2,
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
    },
    radar: {
      itemStyle: {
        borderWidth: 1,
      },
      lineStyle: {
        width: 2,
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#ffffff',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#ff2640',
        color0: '#01d65a',
        borderColor: '#ff2640',
        borderColor0: '#01d65a',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
      lineStyle: {
        width: 1,
        color: '#ffffff',
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
      color: colors,
      label: {
        color: '#000000',
      },
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisLabel: {
        show: true,
        color: '#ffffff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(0,0,0,0)', 'rgba(255,255,255,0.1)'],
        },
      },
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisLabel: {
        show: true,
        color: '#ffffff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(0,0,0,0)', 'rgba(255,255,255,0.1)'],
        },
      },
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisLabel: {
        show: true,
        color: '#ffffff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(0,0,0,0)', 'rgba(255,255,255,0.1)'],
        },
      },
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.35)',
        },
      },
      axisLabel: {
        show: true,
        color: '#ffffff',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(0,0,0,0)', 'rgba(255,255,255,0.1)'],
        },
      },
    },
    toolbox: {
      iconStyle: {
        borderColor: '#ffffff',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#00ffb9',
        },
      },
    },
    legend: {
      textStyle: {
        color: '#ffffff',
      },
    },
    tooltip: {
      backgroundColor: '#23233c',
      borderColor: '#23233c',
      textStyle: {
        color: '#ffffff',
      },
      axisPointer: {
        lineStyle: {
          color: '#ffffff',
          width: '1',
        },
        crossStyle: {
          color: '#ffffff',
          width: '1',
        },
      },
    },
    timeline: {
      lineStyle: {
        color: 'transparent',
        width: '1',
      },
      itemStyle: {
        color: '#ffffff',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#00cccc',
        borderColor: '#00cccc',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#00ffb9',
        borderColor: '#000028',
      },
      label: {
        color: '#ffffff',
      },
      emphasis: {
        itemStyle: {
          color: '#ffffff',
        },
        controlStyle: {
          color: '#00cccc',
          borderColor: '#00cccc',
          borderWidth: '1',
        },
        label: {
          color: '#ffffff',
        },
      },
    },
    visualMap: {
      color: ['#ff2640', '#ff9000', '#ffd732'],
    },
    dataZoom: {
      handleSize: 'undefined%',
      textStyle: {},
    },
    nameTextStyle: {
      color: '#fff',
    },
    markPoint: {
      label: {
        color: '#fff',
        textBorderColor: '#000028',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#fff',
        textBorderColor: '#000028',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#fff',
        textBorderColor: '#000028',
        textBorderWidth: 1,
      },
    },
  },
};
