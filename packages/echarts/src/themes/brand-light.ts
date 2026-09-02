/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const textStyleDefault = {
  color: '#000028',
  fontFamily: 'Siemens Sans, "Siemens Sans", Arial, Helvetica, sans-serif',
};

const colors = [
  '#009999' /* si.sys.data.categorical.3 */,
  '#1A747D' /* si.sys.data.categorical.2 */,
  '#00237A' /* si.sys.data.categorical.8 */,
  '#005159' /* si.sys.data.categorical.1 */,
  '#3664C6' /* si.sys.data.categorical.6 */,
  '#002949' /* si.sys.data.categorical.4 */,
  '#7353E5' /* si.sys.data.categorical.10 */,
  '#553BA3' /* si.sys.data.categorical.9 */,
  '#740089' /* si.sys.data.categorical.11 */,
  '#BE5925' /* si.sys.data.categorical.14 */,
  '#C04774' /* si.sys.data.categorical.13 */,
  '#4F153D' /* si.sys.data.categorical.12 */,
  '#00237A' /* si.sys.data.categorical.7 */,
  '#FFBC66' /* si.sys.data.categorical.15 */,
  '#C5C5B8' /* si.sys.data.categorical.16 */,
  '#757563' /* si.sys.data.categorical.17 */,
  '#4C4C68' /* si.sys.data.categorical.5 */,
];

const axisCommon = {
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
};

export default {
  themeName: 'theme-brand-light',
  theme: {
    color: colors,
    backgroundColor: 'transparent',
    textStyle: textStyleDefault,
    title: {
      textStyle: textStyleDefault,
      subtextStyle: {
        ...textStyleDefault,
        color: '#4C4C68',
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
        barBorderColor: '#9999A9',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9',
      },
      axisLabel: {
        color: '#000028',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#D72339',
        color0: '#1C703F',
        borderColor: '#D72339',
        borderColor0: '#1C703F',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#009999',
      },
      lineStyle: {
        width: '1',
        color: '#009999',
      },
      symbolSize: 4,
      symbol: 'circle',
      smooth: false,
      color: colors,
      label: {
        color: '#FFFFFF',
      },
    },
    categoryAxis: axisCommon,
    valueAxis: axisCommon,
    logAxis: axisCommon,
    timeAxis: axisCommon,
    toolbox: {
      iconStyle: {
        borderColor: '#4C4C68',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#005159',
        },
      },
    },
    legend: {
      textStyle: textStyleDefault,
    },
    tooltip: {
      textStyle: {
        color: '#000028',
      },
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
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
        color: '#009999',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#006B80',
        borderColor: '#006B80',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#005159',
        borderColor: '#FFFFFF',
      },
      label: {
        color: '#000028',
      },
      emphasis: {
        itemStyle: {
          color: '#009999',
        },
        controlStyle: {
          color: '#006B80',
          borderColor: '#006B80',
          borderWidth: '1',
        },
        label: {
          color: '#000028',
        },
      },
    },
    visualMap: {
      color: ['#D72339', '#C75300', '#EDBF00'],
    },
    dataZoom: {
      handleSize: 'undefined%',
      textStyle: {},
    },
    markPoint: {
      label: {
        color: '#000028',
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#000028',
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#000028',
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
  },
};
