/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const textStyleDefault = {
  color: '#7D8099',
  fontFamily: 'Siemens Sans, "Siemens Sans", Arial, Helvetica, sans-serif',
};

const colors = [
  '#00C1B6' /* si/sys/data/categorical/1 */,
  '#00FFB9' /* si/sys/data/categorical/2 */,
  '#01D65A' /* si/sys/data/categorical/3 */,
  '#85E9D2' /* si/sys/data/categorical/4 */,
  '#6895F6' /* si/sys/data/categorical/5 */,
  '#CCF5F5' /* si/sys/data/categorical/6 */,
  '#805CFF' /* si/sys/data/categorical/7 */,
  '#BFB0F3' /* si/sys/data/categorical/8 */,
  '#B95CC9' /* si/sys/data/categorical/9 */,
  '#FF2640' /* si/sys/data/categorical/10 */,
  '#E5659B' /* si/sys/data/categorical/11 */,
  '#FF98C4' /* si/sys/data/categorical/12 */,
  '#97C7FF' /* si/sys/data/categorical/13 */,
  '#FF9000' /* si/sys/data/categorical/14 */,
  '#FFD732' /* si/sys/data/categorical/15 */,
  '#AAAA96' /* si/sys/data/categorical/16 */,
  '#7D8099' /* si/sys/data/categorical/17 */,
];

const axisCommon = {
  axisLine: {
    show: true,
    lineStyle: {
      color: '#9999A9' /* si/sys/border/2 */,
    },
  },
  axisTick: {
    show: true,
    lineStyle: {
      color: '#9999A9' /* si/sys/border/2 */,
    },
  },
  axisLabel: {
    show: true,
    color: '#FFFFFF' /* si/sys/text/primary */,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: ['#4C4C68' /* si/sys/border/4 */],
    },
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: ['transparent', '#23233C'],
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
        color: '#FFFFFF' /* si/sys/background/1 */,
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
      splitArea: {
        areaStyle: {
          color: ['transparent', '#23233C'],
        },
      },
      axisName: {
        color: '#FFFFFF' /* si/sys/text/primary */,
      },
      axisLine: {
        lineStyle: {
          color: '#FFFFFF' /* si/sys/border/1 */,
        },
      },
      splitLine: {
        lineStyle: {
          color: '#66667E' /* si/sys/border/3 */,
        },
      },
      label: {
        textBorderColor: '#000028',
        textBorderWidth: 0,
      },
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#66667E' /* si/sys/border/3 */,
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E' /* si/sys/border/3 */,
      },
      label: {
        color: '#FFFFFF' /* si/sys/text/primary */,
        textBorderColor: '#000028',
        textBorderWidth: 0,
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E' /* si/sys/border/3 */,
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 1,
        borderColor: '#FFFFFF' /* si/sys/border/1 */,
        color: '#00C1B6' /* si/sys/background/accent */,
      },
      label: {
        color: '#FFFFFF' /* si/sys/text/primary */,
        textBorderColor: '#000028',
        textBorderWidth: 1,
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E' /* si/sys/border/3 */,
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E' /* si/sys/border/3 */,
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E' /* si/sys/border/3 */,
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#66667E' /* si/sys/border/3 */,
      },
      axisLabel: {
        color: '#FFFFFF' /* si/sys/text/primary */,
      },
      title: {
        color: '#FFFFFF' /* si/sys/text/primary */,
      },
      detail: {
        color: '#FFFFFF' /* si/sys/text/primary */,
      },
    },
    candlestick: {
      itemStyle: {
        color: '#D72339' /* si/sys/background/danger */,
        color0: '#28BF66' /* si/sys/background/success */,
        borderColor: '#D72339' /* si/sys/border/danger */,
        borderColor0: '#28BF66' /* si/sys/border/success */,
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#00C1B6' /* si/sys/data/categorical/1 */,
      },
      lineStyle: {
        width: 1,
        color: '#00C1B6' /* si/sys/data/categorical/1 */,
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
      color: colors,
      label: {
        color: '#000028' /* si/sys/text/on-accent */,
      },
    },
    categoryAxis: axisCommon,
    valueAxis: axisCommon,
    logAxis: axisCommon,
    timeAxis: axisCommon,
    toolbox: {
      iconStyle: {
        borderColor: '#B3B3BE' /* si/sys/text/secondary */,
      },
      emphasis: {
        iconStyle: {
          borderColor: '#00FFB9' /* si/sys/border/accent-hover */,
        },
      },
    },
    legend: {
      textStyle: textStyleDefault,
    },
    tooltip: {
      textStyle: {
        color: '#FFFFFF' /* si/sys/text/primary */
      },
      backgroundColor: '#2D2D45' /* si/sys/background/3 */,
      borderColor: '#2D2D45' /* si/sys/background/3 */,
      axisPointer: {
        lineStyle: {
          color: '#FFFFFF' /* si/sys/background/inverse */,
          width: '1',
        },
        crossStyle: {
          color: '#FFFFFF' /* si/sys/background/inverse */,
          width: '1',
        },
      },
    },
    timeline: {
      lineStyle: {
        color: 'transparent' /* transparent */,
        width: '1',
      },
      itemStyle: {
        color: '#01D65A' /* si/sys/data/categorical/3 */,
        borderWidth: '1',
      },
      controlStyle: {
        color: '#00CCCC' /* si/sys/text/accent */,
        borderColor: '#00CCCC' /* si/sys/border/accent */,
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#00C1B6' /* si/sys/data/categorical/1 */,
        borderColor: '#000028' /* si/sys/text/on-accent */,
      },
      label: {
        color: '#FFFFFF' /* si/sys/text/primary */,
      },
      emphasis: {
        itemStyle: {
          color: '#01D65A' /* si/sys/data/categorical/3 */,
        },
        controlStyle: {
          color: '#00CCCC' /* si/sys/text/accent */,
          borderColor: '#00CCCC' /* si/sys/border/accent */,
          borderWidth: '1',
        },
        label: {
          color: '#FFFFFF' /* si/sys/text/primary */,
        },
      },
    },
    visualMap: {
      color: ['#D72339', '#FF9000', '#FFD732'],
    },
    dataZoom: {
      handleSize: '100%',
      textStyle: {},
    },
    markPoint: {
      label: {
        color: '#FFFFFF' /* si/sys/text/primary */,
        textBorderColor: '#000028' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#FFFFFF' /* si/sys/text/primary */,
        textBorderColor: '#000028' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#FFFFFF' /* si/sys/text/primary */,
        textBorderColor: '#000028' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
  },
};
