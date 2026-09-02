/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const textStyleDefault = {
  color: '#FFFFFF',
  fontFamily: 'Siemens Sans, "Siemens Sans", Arial, Helvetica, sans-serif',
};

const colors = [

  '#00C1B6' /* si.sys.data.categorical.3 */,
  '#85E9D2' /* si.sys.data.categorical.2 */,
  '#3664C6' /* si.sys.data.categorical.8 */,
  '#00FFB9' /* si.sys.data.categorical.1 */,
  '#6895F6' /* si.sys.data.categorical.6 */,
  '#CCF5F5' /* si.sys.data.categorical.4 */,
  '#805CFF' /* si.sys.data.categorical.10 */,
  '#BFB0F3' /* si.sys.data.categorical.9 */,
  '#B95CC9' /* si.sys.data.categorical.11 */,
  '#BE5925' /* si.sys.data.categorical.14 */,
  '#FF98C4' /* si.sys.data.categorical.13 */,
  '#E5659B' /* si.sys.data.categorical.12 */,
  '#97C7FF' /* si.sys.data.categorical.7 */,
  '#FFBC66' /* si.sys.data.categorical.15 */,
  '#DFDFD9' /* si.sys.data.categorical.16 */,
  '#AAAA96' /* si.sys.data.categorical.17 */,
  '#7D8099' /* si.sys.data.categorical.5 */,
];

const axisCommon = {
  axisLine: {
    show: true,
    lineStyle: {
      color: 'rgba(255,255,255,0.3)',
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
};

export default {
  themeName: 'theme-brand-dark',
  theme: {
    color: colors,
    backgroundColor: 'transparent',
    textStyle: textStyleDefault,
    title: {
      textStyle: textStyleDefault,
      subtextStyle: {
        ...textStyleDefault,
        color: '#B3B3BE',
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
        barBorderColor: '#66667E',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E',
      },
      axisLabel: {
        color: '#FFFFFF',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#D72339',
        color0: '#28BF66',
        borderColor: '#D72339',
        borderColor0: '#28BF66',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#00C1B6',
      },
      lineStyle: {
        width: 1,
        color: '#00C1B6',
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
      color: colors,
      label: {
        color: '#000028',
      },
    },
    categoryAxis: axisCommon,
    valueAxis: axisCommon,
    logAxis: axisCommon,
    timeAxis: axisCommon,
    toolbox: {
      iconStyle: {
        borderColor: '#B3B3BE',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#00FFB9',
        },
      },
    },
    legend: {
      textStyle: textStyleDefault,
    },
    tooltip: {
      textStyle: {
        color: '#FFFFFF',
      },
      backgroundColor: '#2D2D45',
      borderColor: '#2D2D45',
      axisPointer: {
        lineStyle: {
          color: '#FFFFFF',
          width: '1',
        },
        crossStyle: {
          color: '#FFFFFF',
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
        color: '#00C1B6',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#00CCCC',
        borderColor: '#00CCCC',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#00FFB9',
        borderColor: '#000028',
      },
      label: {
        color: '#FFFFFF',
      },
      emphasis: {
        itemStyle: {
          color: '#00C1B6',
        },
        controlStyle: {
          color: '#00CCCC',
          borderColor: '#00CCCC',
          borderWidth: '1',
        },
        label: {
          color: '#FFFFFF',
        },
      },
    },
    visualMap: {
      color: ['#D72339', '#FF9000', '#FFD732'],
    },
    dataZoom: {
      handleSize: 'undefined%',
      textStyle: {},
    },
    markPoint: {
      label: {
        color: '#FFFFFF',
        textBorderColor: '#000028',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#FFFFFF',
        textBorderColor: '#000028',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#FFFFFF',
        textBorderColor: '#000028',
        textBorderWidth: 1,
      },
    },
  },
};
