/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
  themeName: 'brand-light',
  theme: {
    color: [
      '#1A747D', /* theme-chart-1 */
      '#00004A', /* theme-chart-8 */
      '#4F153D', /* theme-chart-13 */
      '#BE5925', /* theme-chart-14 */
      '#00237A', /* theme-chart-7 */
      '#4C4C68', /* theme-chart-5 */
      '#002949', /* theme-chart-4 */
      '#740089', /* theme-chart-11 */
      '#801100', /* theme-chart-15 */
      '#009999', /* theme-chart-3 */
    ],
    backgroundColor: 'rgba(0,0,0,0)',
    textStyle: {},
    title: {
      textStyle: {
        color: '#000028',
      },
      subtextStyle: {
        color: '#000028',
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
        barBorderColor: '#000028',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#01893a',
        color0: '#d72339',
        borderColor: '#01893a',
        borderColor0: '#d72339',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#000028',
      },
      lineStyle: {
        width: '1',
        color: '#000028',
      },
      symbolSize: 4,
      symbol: 'circle',
      smooth: false,
      color: [
        '#1A747D', /* theme-chart-1 */
        '#00004A', /* theme-chart-8 */
        '#4F153D', /* theme-chart-13 */
        '#BE5925', /* theme-chart-14 */
        '#00237A', /* theme-chart-7 */
        '#4C4C68', /* theme-chart-5 */
        '#002949', /* theme-chart-4 */
        '#740089', /* theme-chart-11 */
        '#801100', /* theme-chart-15 */
        '#009999', /* theme-chart-3 */
      ],
      label: {
        color: '#ffffff',
      },
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: '#000028',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,40,0.1)'],
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
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: '#000028',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,40,0.1)'],
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
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: '#000028',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,40,0.1)'],
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
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0,0,40,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: '#000028',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(0,0,40,0.1)'],
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
        borderColor: '#000028',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#196269',
        },
      },
    },
    legend: {
      textStyle: {
        color: '#000028',
      },
    },
    tooltip: {
      backgroundColor: '#f3f3f0',
      borderColor: '#f3f3f0',
      textStyle: {
        color: '#000028',
      },
      axisPointer: {
        lineStyle: {
          color: '#000028',
          width: '1',
        },
        crossStyle: {
          color: '#000028',
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
        color: '#000028',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#007993',
        borderColor: '#007993',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#196269',
        borderColor: '#ffffff',
      },
      label: {
        color: '#000028',
      },
      emphasis: {
        itemStyle: {
          color: '#000028',
        },
        controlStyle: {
          color: '#007993',
          borderColor: '#007993',
          borderWidth: '1',
        },
        label: {
          color: '#000028',
        },
      },
    },
    visualMap: {
      color: ['#d72339', '#e96401', '#e9c32a'],
    },
    dataZoom: {
      handleSize: 'undefined%',
      textStyle: {},
    },
    nameTextStyle: {
      color: '#000028',
    },
    markPoint: {
      label: {
        color: '#000028',
        textBorderColor: '#fff',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#000028',
        textBorderColor: '#fff',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#000028',
        textBorderColor: '#fff',
        textBorderWidth: 1,
      },
    },
  },
};
