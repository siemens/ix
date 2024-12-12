/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const colors = [
  '#00838F' /* theme-chart-3 */,
  '#00572B' /* theme-chart-2 */,
  '#0041D6' /* theme-chart-8 */,
  '#008A7C' /* theme-chart-1 */,
  '#0076A8' /* theme-chart-6 */,
  '#003C61' /* theme-chart-4 */,
  '#7C40FF' /* theme-chart-10 */,
  '#4A52F2' /* theme-chart-9 */,
  '#900EEC' /* theme-chart-11 */,
  '#9E5833' /* theme-chart-14 */,
  '#6F2542' /* theme-chart-13 */,
  '#AA32BE' /* theme-chart-12 */,
  '#182171' /* theme-chart-7 */,
  '#B74E2A' /* theme-chart-15 */,
  '#73735E' /* theme-chart-16 */,
  '#7A8000' /* theme-chart-17 */,
  '#61778C' /* theme-chart-5 */,
];

export default {
  themeName: 'classic-light',
  theme: {
    color: colors,
    backgroundColor: 'rgba(0,0,0,0)',
    textStyle: {},
    title: {
      textStyle: {
        color: '#000000',
      },
      subtextStyle: {
        color: '#000000',
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
      symbol: 'circle',
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
      symbol: 'circle',
      smooth: false,
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#000000',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#339b00',
        color0: '#dc0031',
        borderColor: '#339b00',
        borderColor0: '#dc0031',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000000',
      },
      lineStyle: {
        width: '1',
        color: '#000000',
      },
      symbolSize: 4,
      symbol: 'circle',
      smooth: false,
      color: colors,
      label: {
        color: '#ffffff',
      },
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(0,0,0,0.75)',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,0,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(0,0,0,0.75)',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,0,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(0,0,0,0.75)',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,0,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(0,0,0,0.75)',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,0,0.1)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    toolbox: {
      iconStyle: {
        borderColor: '#000000',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#000000',
        },
      },
    },
    legend: {
      textStyle: {
        color: '#000000',
      },
    },
    tooltip: {
      backgroundColor: '#eff0f1',
      borderColor: '#eff0f1',
      textStyle: {
        color: 'rgba(0, 10, 20, .9)',
      },
      axisPointer: {
        lineStyle: {
          color: '#000000',
          width: '1',
        },
        crossStyle: {
          color: '#000000',
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
        color: '#000000',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#0e777c',
        borderColor: '#0e777c',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#0e777c',
        borderColor: '#ffffff',
      },
      label: {
        color: '#000000',
      },
      emphasis: {
        itemStyle: {
          color: '#000000',
        },
        controlStyle: {
          color: '#0e777c',
          borderColor: '#0e777c',
          borderWidth: '1',
        },
        label: {
          color: '#000000',
        },
      },
    },
    visualMap: {
      color: ['#dc0031', '#ff8d00', '#f0b800'],
    },
    dataZoom: {
      handleSize: 'undefined%',
      textStyle: {},
    },
    nameTextStyle: {
      color: 'rgba(0, 10, 20, .9)',
    },
    markPoint: {
      label: {
        color: 'rgba(0, 10, 20, .9)',
        textBorderColor: '#fff',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: 'rgba(0, 10, 20, .9)',
        textBorderColor: '#fff',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: 'rgba(0, 10, 20, .9)',
        textBorderColor: '#fff',
        textBorderWidth: 1,
      },
    },
  },
};
