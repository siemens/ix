/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
  themeName: 'classic-light',
  theme: {
    color: [
      '#00b8a6', /* theme-chart-1 */
      '#0094f0', /* theme-chart-8 */
      '#b63b8c', /* theme-chart-13 */
      '#617d8c', /* theme-chart-14 */
      '#2351a4', /* theme-chart-7 */
      '#5560ff', /* theme-chart-5 */
      '#94947b', /* theme-chart-4 */
      '#007362', /* theme-chart-11 */
      '#dd886a', /* theme-chart-15 */
      '#909700', /* theme-chart-3 */
    ],
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
      color: [
        '#00b8a6', /* theme-chart-1 */
        '#0094f0', /* theme-chart-8 */
        '#b63b8c', /* theme-chart-13 */
        '#617d8c', /* theme-chart-14 */
        '#2351a4', /* theme-chart-7 */
        '#5560ff', /* theme-chart-5 */
        '#94947b', /* theme-chart-4 */
        '#007362', /* theme-chart-11 */
        '#dd886a', /* theme-chart-15 */
        '#909700', /* theme-chart-3 */
      ],
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
