/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export default {
  version: 1,
  themeName: 'brand-light',
  theme: {
    seriesCnt: 3,
    backgroundColor: 'transparent',
    titleColor: '#000028',
    subtitleColor: '#000028',
    textColorShow: false,
    textColor: '#000028',
    markTextColor: '#ffffff',
    color: [
      '#00af8e',
      '#0087be',
      '#aa32be',
      '#71758f',
      '#00557c',
      '#4660b4',
      '#94947b',
      '#007362',
      '#dd886a',
      '#909700',
    ],
    borderColor: 'rgba(0,0,40,0.3)',
    borderWidth: 0,
    visualMapColor: ['#d72339', '#e96401', '#e9c32a'],
    legendTextColor: '#000028',
    legend: {
      textStyle: {
        color: '#000028',
      },
    },
    kColor: '#d72339',
    kColor0: '#01893a',
    kBorderColor: '#d72339',
    kBorderColor0: '#01893a',
    kBorderWidth: 1,
    lineWidth: 2,
    symbolSize: 4,
    symbol: 'circle',
    symbolBorderWidth: 1,
    lineSmooth: false,
    graphLineWidth: '1',
    graphLineColor: 'rgba(0,0,40,0.6)',
    mapLabelColor: '#000',
    mapLabelColorE: 'rgb(100,0,0)',
    mapBorderColor: '#444',
    mapBorderColorE: '#444',
    mapBorderWidth: 0.5,
    mapBorderWidthE: 1,
    mapAreaColor: '#eee',
    mapAreaColorE: 'rgba(255,215,0,0.8)',
    axes: [
      {
        type: 'all',
        name: '通用坐标轴',
        axisLineShow: true,
        axisLineColor: 'rgba(0,0,40,0.3)',
        axisTickShow: true,
        axisTickColor: 'rgba(0,0,40,0.3)',
        axisLabelShow: true,
        axisLabelColor: '#000028',
        splitLineShow: true,
        splitLineColor: ['rgba(0,0,40,0.1)'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
      {
        type: 'category',
        name: '类目坐标轴',
        axisLineShow: true,
        axisLineColor: '#6E7079',
        axisTickShow: true,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: false,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
      {
        type: 'value',
        name: '数值坐标轴',
        axisLineShow: true,
        axisLineColor: '#6E7079',
        axisTickShow: false,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: true,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
      {
        type: 'log',
        name: '对数坐标轴',
        axisLineShow: false,
        axisLineColor: '#6E7079',
        axisTickShow: false,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: false,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: true,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
      {
        type: 'time',
        name: '时间坐标轴',
        axisLineShow: true,
        axisLineColor: '#6E7079',
        axisTickShow: true,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: false,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    ],
    axisSeperateSetting: false,
    toolboxColor: 'rgba(0,0,40,0.3)',
    toolboxEmphasisColor: '#196269',
    tooltipAxisColor: 'rgba(0,0,40,0.3)',
    tooltipAxisWidth: '1',
    timelineLineColor: 'rgba(0,0,0,0)',
    timelineLineWidth: '1',
    timelineItemColor: 'rgba(0,0,40,0.3)',
    timelineItemColorE: 'rgba(0,0,40,0.6)',
    timelineCheckColor: '#196269',
    timelineCheckBorderColor: '#ffffff',
    timelineItemBorderWidth: '1',
    timelineControlColor: '#007993',
    timelineControlBorderColor: '#007993',
    timelineControlBorderWidth: '1',
    timelineLabelColor: 'rgba(0,0,40,0.3)',
  },
};
