/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const textStyleDefault = {
  color: '#405158',
  fontFamily: 'Arial, Helvetica, sans-serif',
};

const colors = [
  '#0096B4' /* si/sys/data/categorical/1 */,
  '#005159' /* si/sys/data/categorical/2 */,
  '#00890E' /* si/sys/data/categorical/3 */,
  '#1A747D' /* si/sys/data/categorical/4 */,
  '#3664C6' /* si/sys/data/categorical/5 */,
  '#002949' /* si/sys/data/categorical/6 */,
  '#7353E5' /* si/sys/data/categorical/7 */,
  '#553BA3' /* si/sys/data/categorical/8 */,
  '#740089' /* si/sys/data/categorical/9 */,
  '#D72323' /* si/sys/data/categorical/10 */,
  '#4F153D' /* si/sys/data/categorical/11 */,
  '#C04774' /* si/sys/data/categorical/12 */,
  '#00237A' /* si/sys/data/categorical/13 */,
  '#643200' /* si/sys/data/categorical/14 */,
  '#7B5A00' /* si/sys/data/categorical/15 */,
  '#757563' /* si/sys/data/categorical/16 */,
  '#405158' /* si/sys/data/categorical/17 */,
];

const axisCommon = {
  axisLine: {
    show: true,
    lineStyle: {
      color: '#5B6A71' /* si/sys/border/2 */,
    },
  },
  axisTick: {
    show: true,
    lineStyle: {
      color: '#5B6A71' /* si/sys/border/2 */,
    },
  },
  axisLabel: {
    show: true,
    color: '#000609' /* si/sys/text/primary */,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: ['#E5E8E9' /* si/sys/border/4 */],
    },
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: ['transparent', '#FFFFFF'],
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
        color: '#000609' /* si/sys/background/1 */,
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
          color: ['transparent', '#FFFFFF'],
        },
      },
      axisName: {
        color: '#000609' /* si/sys/text/primary */,
      },
      axisLine: {
        lineStyle: {
          color: '#000609' /* si/sys/border/1 */,
        },
      },
      splitLine: {
        lineStyle: {
          color: '#919CA1' /* si/sys/border/3 */,
        },
      },
      label: {
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#919CA1' /* si/sys/border/3 */,
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1' /* si/sys/border/3 */,
      },
      label: {
        color: '#000609' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1' /* si/sys/border/3 */,
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 1,
        borderColor: '#000609' /* si/sys/border/1 */,
        color: '#0096B4' /* si/sys/background/accent */,
      },
      label: {
        color: '#000609' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF',
        textBorderWidth: 1,
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1' /* si/sys/border/3 */,
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1' /* si/sys/border/3 */,
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1' /* si/sys/border/3 */,
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#919CA1' /* si/sys/border/3 */,
      },
      axisLabel: {
        color: '#000609' /* si/sys/text/primary */,
      },
      title: {
        color: '#000609' /* si/sys/text/primary */,
      },
      detail: {
        color: '#000609' /* si/sys/text/primary */,
      },
    },
    candlestick: {
      itemStyle: {
        color: '#D72323' /* si/sys/background/danger */,
        color0: '#376F1C' /* si/sys/background/success */,
        borderColor: '#D72323' /* si/sys/border/danger */,
        borderColor0: '#376F1C' /* si/sys/border/success */,
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#0096B4' /* si/sys/data/categorical/1 */,
      },
      lineStyle: {
        width: '1',
        color: '#0096B4' /* si/sys/data/categorical/1 */,
      },
      symbolSize: 4,
      symbol: 'circle',
      smooth: false,
      color: colors,
      label: {
        color: '#FFFFFF' /* si/sys/text/on-accent */,
      },
    },
    categoryAxis: axisCommon,
    valueAxis: axisCommon,
    logAxis: axisCommon,
    timeAxis: axisCommon,
    toolbox: {
      iconStyle: {
        borderColor: '#405158' /* si/sys/text/secondary */,
      },
      emphasis: {
        iconStyle: {
          borderColor: '#004F69' /* si/sys/border/accent-hover */,
        },
      },
    },
    legend: {
      textStyle: textStyleDefault,
    },
    tooltip: {
      backgroundColor: '#FFFFFF' /* si/sys/background/3 */,
      borderColor: '#FFFFFF' /* si/sys/background/3 */,
      textStyle: {
        color: '#000609' /* si/sys/text/primary */
      },
      axisPointer: {
        lineStyle: {
          color: '#000609' /* si/sys/background/inverse */,
          width: '1',
        },
        crossStyle: {
          color: '#000609' /* si/sys/background/inverse */,
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
        color: '#00890E' /* si/sys/data/categorical/3 */,
        borderWidth: '1',
      },
      controlStyle: {
        color: '#006A87' /* si/sys/text/accent */,
        borderColor: '#006A87' /* si/sys/border/accent */,
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#0096B4' /* si/sys/data/categorical/1 */,
        borderColor: '#FFFFFF' /* si/sys/text/on-accent */,
      },
      label: {
        color: '#000609' /* si/sys/text/primary */,
      },
      emphasis: {
        itemStyle: {
          color: '#00890E' /* si/sys/data/categorical/3 */,
        },
        controlStyle: {
          color: '#006A87' /* si/sys/text/accent */,
          borderColor: '#006A87' /* si/sys/border/accent */,
          borderWidth: '1',
        },
        label: {
          color: '#000609' /* si/sys/text/primary */,
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
      color: '#000609' /* si/sys/text/primary */,
    },
    markPoint: {
      label: {
        color: '#000609' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#000609' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#000609' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
  },
};
