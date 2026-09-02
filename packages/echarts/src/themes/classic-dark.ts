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
  fontFamily: 'Arial, Helvetica, sans-serif',
};

const colors = [
  '#00BDDA' /* si.sys.data.categorical.3 */,
  '#85E9D2' /* si.sys.data.categorical.2 */,
  '#3664C6' /* si.sys.data.categorical.8 */,
  '#00EAFF' /* si.sys.data.categorical.1 */,
  '#6895F6' /* si.sys.data.categorical.6 */,
  '#CCF5F5' /* si.sys.data.categorical.4 */,
  '#805CFF' /* si.sys.data.categorical.10 */,
  '#BFB0F3' /* si.sys.data.categorical.9 */,
  '#B95CC9' /* si.sys.data.categorical.11 */,
  '#AB6621' /* si.sys.data.categorical.14 */,
  '#FF98C4' /* si.sys.data.categorical.13 */,
  '#E5659B' /* si.sys.data.categorical.12 */,
  '#97C7FF' /* si.sys.data.categorical.7 */,
  '#FFB266' /* si.sys.data.categorical.15 */,
  '#DFDFD9' /* si.sys.data.categorical.16 */,
  '#AAAA96' /* si.sys.data.categorical.17 */,
  '#72848C' /* si.sys.data.categorical.5 */,
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
};

export default {
  themeName: 'theme-classic-dark',
  theme: {
    color: colors,
    backgroundColor: 'transparent',
    textStyle: textStyleDefault,
    title: {
      textStyle: textStyleDefault,
      subtextStyle: {
        ...textStyleDefault,
        color: '#AEB5B8',
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
        barBorderColor: '#72848C',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#72848C',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#72848C',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#72848C',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#72848C',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#72848C',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#72848C',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#72848C',
      },
      axisLabel: {
        color: '#FFFFFF',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#D72323',
        color0: '#59BD28',
        borderColor: '#D72323',
        borderColor0: '#59BD28',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#00BDDA',
      },
      lineStyle: {
        width: '1',
        color: '#00BDDA',
      },
      symbolSize: 4,
      symbol: 'circle',
      smooth: false,
      color: colors,
      label: {
        color: '#000609',
      },
    },
    categoryAxis: axisCommon,
    valueAxis: axisCommon,
    logAxis: axisCommon,
    timeAxis: axisCommon,
    toolbox: {
      iconStyle: {
        borderColor: '#AEB5B8',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#00EAFF',
        },
      },
    },
    legend: {
      textStyle: textStyleDefault,
    },
    tooltip: {
      backgroundColor: '#243137',
      borderColor: '#243137',
      textStyle: {
        color: '#FFFFFF',
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
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
        color: '#00BDDA',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#00C9E4',
        borderColor: '#00C9E4',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#00EAFF',
        borderColor: '#000609',
      },
      label: {
        color: '#FFFFFF',
      },
      emphasis: {
        itemStyle: {
          color: '#00BDDA',
        },
        controlStyle: {
          color: '#00C9E4',
          borderColor: '#00C9E4',
          borderWidth: '1',
        },
        label: {
          color: '#FFFFFF',
        },
      },
    },
    visualMap: {
      color: ['#D72323', '#FF8000', '#FFC832'],
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
        color: '#FFFFFF',
        textBorderColor: '#000609',
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#FFFFFF',
        textBorderColor: '#000609',
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#FFFFFF',
        textBorderColor: '#000609',
        textBorderWidth: 1,
      },
    },
  },
};
