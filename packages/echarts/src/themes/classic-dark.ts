/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const textStyleDefault = {
  color: '#FFFFFF' /* si/sys/text/primary */,
  fontFamily: 'Arial, Helvetica, sans-serif',
};

const colors = [
  '#00BDDA' /* si/sys/data/categorical/1 */,
  '#00EAFF' /* si/sys/data/categorical/2 */,
  '#01D65A' /* si/sys/data/categorical/3 */,
  '#85E9D2' /* si/sys/data/categorical/4 */,
  '#6895F6' /* si/sys/data/categorical/5 */,
  '#CCF5F5' /* si/sys/data/categorical/6 */,
  '#805CFF' /* si/sys/data/categorical/7 */,
  '#BFB0F3' /* si/sys/data/categorical/8 */,
  '#B95CC9' /* si/sys/data/categorical/9 */,
  '#FF2626' /* si/sys/data/categorical/10 */,
  '#E5659B' /* si/sys/data/categorical/11 */,
  '#FF98C4' /* si/sys/data/categorical/12 */,
  '#97C7FF' /* si/sys/data/categorical/13 */,
  '#FF8000' /* si/sys/data/categorical/14 */,
  '#FFC832' /* si/sys/data/categorical/15 */,
  '#AAAA96' /* si/sys/data/categorical/16 */,
  '#72848C' /* si/sys/data/categorical/17 */,
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
        color: '#AEB5B8' /* si/sys/text/secondary */,
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
      splitArea: {
        areaStyle: {
          color: ['transparent', '#1A272D' /* si/sys/background/1 */],
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
          color: '#72848C' /* si/sys/border/3 */,
        },
      },
      label: {
        textBorderColor: '#000609' /* unmapped radar label border */,
        textBorderWidth: 1,
      },
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
      label: {
        color: '#FFFFFF',
        textBorderColor: '#000609',
        textBorderWidth: 1,
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
        borderWidth: 1,
        borderColor: '#FFFFFF' /* si/sys/border/1 */,
        color: '#00BDDA' /* si/sys/background/accent */,
      },
      label: {
        color: '#FFFFFF',
        textBorderWidth: 0,
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
        color: '#D72323' /* si/sys/background/danger */,
        color0: '#59BD28' /* si/sys/background/success */,
        borderColor: '#D72323' /* si/sys/border/danger */,
        borderColor0: '#59BD28' /* si/sys/border/success */,
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#00BDDA' /* si/sys/data/categorical/1 */,
      },
      lineStyle: {
        width: '1',
        color: '#00BDDA' /* si/sys/data/categorical/1 */,
      },
      symbolSize: 4,
      symbol: 'circle',
      smooth: false,
      color: colors,
      label: {
        color: '#000609' /* si/sys/text/on-accent */,
      },
    },
    categoryAxis: axisCommon,
    valueAxis: axisCommon,
    logAxis: axisCommon,
    timeAxis: axisCommon,
    toolbox: {
      iconStyle: {
        borderColor: '#AEB5B8' /* si/sys/text/secondary */,
      },
      emphasis: {
        iconStyle: {
          borderColor: '#00EAFF' /* si/sys/border/accent-hover */,
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
        color: '#FFFFFF'
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
        color: '#01D65A',
        borderWidth: '1',
      },
      controlStyle: {
        color: '#00C9E4',
        borderColor: '#00C9E4',
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#00BDDA',
        borderColor: '#000609',
      },
      label: {
        color: '#FFFFFF',
      },
      emphasis: {
        itemStyle: {
          color: '#01D65A',
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
        color: '#FFFFFF' /* si/sys/text/primary */,
        textBorderColor: '#000609' /* transparent */,
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
