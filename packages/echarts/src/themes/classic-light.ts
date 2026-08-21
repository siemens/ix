/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const textStyleDefault = {
  color: '#000609',
  fontFamily: 'Arial, Helvetica, sans-serif',
};

const colors = [
  '#0096B4' /* si.sys.data.categorical.3 */,
  '#1A747D' /* si.sys.data.categorical.2 */,
  '#00237A' /* si.sys.data.categorical.8 */,
  '#005159' /* si.sys.data.categorical.1 */,
  '#3664C6' /* si.sys.data.categorical.6 */,
  '#002949' /* si.sys.data.categorical.4 */,
  '#7353E5' /* si.sys.data.categorical.10 */,
  '#553BA3' /* si.sys.data.categorical.9 */,
  '#740089' /* si.sys.data.categorical.11 */,
  '#AB6621' /* si.sys.data.categorical.14 */,
  '#C04774' /* si.sys.data.categorical.13 */,
  '#4F153D' /* si.sys.data.categorical.12 */,
  '#00237A' /* si.sys.data.categorical.7 */,
  '#FFB266' /* si.sys.data.categorical.15 */,
  '#C5C5B8' /* si.sys.data.categorical.16 */,
  '#757563' /* si.sys.data.categorical.17 */,
  '#405158' /* si.sys.data.categorical.5 */,
];

const axisCommon = {
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
};

export default {
  themeName: 'theme-classic-light',
  theme: {
    color: colors,
    backgroundColor: 'transparent',
    textStyle: textStyleDefault,
    title: {
      textStyle: textStyleDefault,
      subtextStyle: {
        ...textStyleDefault,
        color: '#405158',
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
        barBorderColor: '#919CA1',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1',
      },
      axisLabel: {
        color: '#000609',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#D72323',
        color0: '#376F1C',
        borderColor: '#D72323',
        borderColor0: '#376F1C',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#0096B4',
      },
      lineStyle: {
        width: '1',
        color: '#0096B4',
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
        borderColor: '#405158',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#004F69',
        },
      },
    },
    legend: {
      textStyle: textStyleDefault,
    },
    tooltip: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      textStyle: {
        color: '#000609',
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
      axisPointer: {
        lineStyle: {
          color: '#000609',
          width: '1',
        },
        crossStyle: {
          color: '#000609',
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
        color: '#0096B4',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#006A87',
        borderColor: '#006A87',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#005159',
        borderColor: '#FFFFFF',
      },
      label: {
        color: '#000609',
      },
      emphasis: {
        itemStyle: {
          color: '#0096B4',
        },
        controlStyle: {
          color: '#006A87',
          borderColor: '#006A87',
          borderWidth: '1',
        },
        label: {
          color: '#000609',
        },
      },
    },
    visualMap: {
      color: ['#D72323', '#BA5D00', '#FCB900'],
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
        color: '#000609',
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#000609',
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#000609',
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
  },
};
