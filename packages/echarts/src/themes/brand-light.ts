/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const textStyleDefault = {
  color: '#4C4C68',
  fontFamily: 'Siemens Sans, "Siemens Sans", Arial, Helvetica, sans-serif',
};

const colors = [
  '#009999' /* si/sys/data/categorical/1 */,
  '#005159' /* si/sys/data/categorical/2 */,
  '#00890E' /* si/sys/data/categorical/3 */,
  '#1A747D' /* si/sys/data/categorical/4 */,
  '#3664C6' /* si/sys/data/categorical/5 */,
  '#002949' /* si/sys/data/categorical/6 */,
  '#7353E5' /* si/sys/data/categorical/7 */,
  '#553BA3' /* si/sys/data/categorical/8 */,
  '#740089' /* si/sys/data/categorical/9 */,
  '#D72339' /* si/sys/data/categorical/10 */,
  '#4F153D' /* si/sys/data/categorical/11 */,
  '#C04774' /* si/sys/data/categorical/12 */,
  '#00237A' /* si/sys/data/categorical/13 */,
  '#801100' /* si/sys/data/categorical/14 */,
  '#805800' /* si/sys/data/categorical/15 */,
  '#757563' /* si/sys/data/categorical/16 */,
  '#4C4C68' /* si/sys/data/categorical/17 */,
];

const axisCommon = {
  axisLine: {
    show: true,
    lineStyle: {
      color: '#66667E' /* si/sys/border/2 */,
    },
  },
  axisTick: {
    show: true,
    lineStyle: {
      color: '#66667E' /* si/sys/border/2 */,
    },
  },
  axisLabel: {
    show: true,
    color: '#000028' /* si/sys/text/primary */,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: ['#E5E5E9' /* si/sys/border/4 */],
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
  themeName: 'theme-brand-light',
  theme: {
    color: colors,
    backgroundColor: 'transparent',
    textStyle: textStyleDefault,
    title: {
      textStyle: textStyleDefault,
      subtextStyle: {
        ...textStyleDefault,
        color: '#000028' /* si/sys/background/1 */,
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
        color: '#000028' /* si/sys/text/primary */,
      },
      axisLine: {
        lineStyle: {
          color: '#000028' /* si/sys/border/1 */,
        },
      },
      splitLine: {
        lineStyle: {
          color: '#9999A9' /* si/sys/border/3 */,
        },
      },
      label: {
        textBorderColor: '#FFFFFF',
        textBorderWidth: 0,
      },
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#9999A9' /* si/sys/border/3 */,
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9' /* si/sys/border/3 */,
      },
      label: {
        color: '#000028' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF',
        textBorderWidth: 0,
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9' /* si/sys/border/3 */,
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 1,
        borderColor: '#000028' /* si/sys/border/1 */,
        color: '#009999' /* si/sys/background/accent */,
      },
      label: {
        color: '#000028' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF',
        textBorderWidth: 0,
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9' /* si/sys/border/3 */,
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9' /* si/sys/border/3 */,
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9' /* si/sys/border/3 */,
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#9999A9' /* si/sys/border/3 */,
      },
      axisLabel: {
        color: '#000028' /* si/sys/text/primary */,
      },
      title: {
        color: '#000028' /* si/sys/text/primary */,
      },
      detail: {
        color: '#000028' /* si/sys/text/primary */,
      },
    },
    candlestick: {
      itemStyle: {
        color: '#D72339' /* si/sys/background/danger */,
        color0: '#1C703F' /* si/sys/background/success */,
        borderColor: '#D72339' /* si/sys/border/danger */,
        borderColor0: '#1C703F' /* si/sys/border/success */,
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#009999' /* si/sys/data/categorical/1 */,
      },
      lineStyle: {
        width: '1',
        color: '#009999' /* si/sys/data/categorical/1 */,
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
        borderColor: '#4C4C68' /* si/sys/text/secondary */,
      },
      emphasis: {
        iconStyle: {
          borderColor: '#005159' /* si/sys/border/accent-hover */,
        },
      },
    },
    legend: {
      textStyle: textStyleDefault,
    },
    tooltip: {
      textStyle: {
        color: '#000028' /* si/sys/text/primary */
      },
      backgroundColor: '#FFFFFF' /* si/sys/background/3 */,
      borderColor: '#FFFFFF' /* si/sys/background/3 */,
      axisPointer: {
        lineStyle: {
          color: '#000028' /* si/sys/background/inverse */,
          width: '1',
        },
        crossStyle: {
          color: '#000028' /* si/sys/background/inverse */,
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
        color: '#006B80' /* si/sys/text/accent */,
        borderColor: '#006B80' /* si/sys/border/accent */,
        borderWidth: '1',
      },
      checkpointStyle: {
        color: '#009999' /* si/sys/data/categorical/1 */,
        borderColor: '#FFFFFF' /* si/sys/text/on-accent */,
      },
      label: {
        color: '#000028' /* si/sys/text/primary */,
      },
      emphasis: {
        itemStyle: {
          color: '#00890E' /* si/sys/data/categorical/3 */,
        },
        controlStyle: {
          color: '#006B80' /* si/sys/text/accent */,
          borderColor: '#006B80' /* si/sys/border/accent */,
          borderWidth: '1',
        },
        label: {
          color: '#000028' /* si/sys/text/primary */,
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
        color: '#000028' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
    markLine: {
      label: {
        color: '#000028' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
    markArea: {
      label: {
        color: '#000028' /* si/sys/text/primary */,
        textBorderColor: '#FFFFFF' /* si/sys/text/on-accent */,
        textBorderWidth: 1,
      },
    },
  },
};
