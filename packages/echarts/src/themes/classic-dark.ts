/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const colors = [
  '#00C2CC' /* theme-chart-3 */,
  '#94FFC9' /* theme-chart-2 */,
  '#3664C6' /* theme-chart-8 */,
  '#00FFE7' /* theme-chart-1 */,
  '#42C6FF' /* theme-chart-6 */,
  '#A3EEFF' /* theme-chart-4 */,
  '#B999FF' /* theme-chart-10 */,
  '#9EA3FF' /* theme-chart-9 */,
  '#D08FFF' /* theme-chart-11 */,
  '#EF9A9A' /* theme-chart-14 */,
  '#F38FC2' /* theme-chart-13 */,
  '#ED85FF' /* theme-chart-12 */,
  '#7AAAFF' /* theme-chart-7 */,
  '#FFB180' /* theme-chart-15 */,
  '#CACAB4' /* theme-chart-16 */,
  '#AAAA96' /* theme-chart-17 */,
  '#90B4C5' /* theme-chart-5 */,
];

export default {
  themeName: 'classic-dark',
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
        color: '#40c200',
        color0: '#fe0137',
        borderColor: '#40c200',
        borderColor0: '#fe0137',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ffffff',
      },
      lineStyle: {
        width: '1',
        color: '#ffffff',
      },
      symbolSize: 4,
      symbol: 'circle',
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
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,0.85)',
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
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,0.85)',
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
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,0.85)',
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
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,0.85)',
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
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },
    toolbox: {
      iconStyle: {
        borderColor: '#ffffff',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#ffffff',
        },
      },
    },
    legend: {
      textStyle: {
        color: '#ffffff',
      },
    },
    tooltip: {
      backgroundColor: '#283236',
      borderColor: '#283236',
      textStyle: {
        color: 'rgba(245, 252, 255, .93)',
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
        color: '#41aaaa',
        borderColor: '#41aaaa',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#41aaaa',
        borderColor: 'transparent',
      },
      label: {
        color: '#ffffff',
      },
      emphasis: {
        itemStyle: {
          color: '#ffffff',
        },
        controlStyle: {
          color: '#41aaaa',
          borderColor: '#41aaaa',
          borderWidth: '1',
        },
        label: {
          color: '#ffffff',
        },
      },
    },
    visualMap: {
      color: ['#fe0137', '#eb780a', '#ffb900'],
    },
    dataZoom: {
      handleSize: 'undefined%',
      textStyle: {},
    },
    nameTextStyle: {
      color: 'rgba(245, 252, 255, .93)',
    },
    markPoint: {
      label: {
        color: 'rgba(245, 252, 255, .93)',
        textBorderColor: '#000',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: 'rgba(245, 252, 255, .93)',
        textBorderColor: '#000',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: 'rgba(245, 252, 255, .93)',
        textBorderColor: '#000',
        textBorderWidth: 1,
      },
    },
  },
};
