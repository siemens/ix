import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
const textStyleDefault$3 = {
  color: "#FFFFFF",
  fontFamily: 'Siemens Sans, "Siemens Sans", Arial, Helvetica, sans-serif'
};
const colors$3 = [
  "#00C1B6",
  "#00FFB9",
  "#01D65A",
  "#85E9D2",
  "#6895F6",
  "#CCF5F5",
  "#805CFF",
  "#BFB0F3",
  "#B95CC9",
  "#FF2640",
  "#E5659B",
  "#FF98C4",
  "#97C7FF",
  "#FF9000",
  "#FFD732",
  "#AAAA96",
  "#7D8099"
];
const axisCommon$3 = {
  axisLine: {
    show: true,
    lineStyle: {
      color: "#9999A9"
    }
  },
  axisTick: {
    show: true,
    lineStyle: {
      color: "#9999A9"
    }
  },
  axisLabel: {
    show: true,
    color: "#FFFFFF"
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: [
        "#4C4C68"
        /* si/sys/border/4 */
      ]
    }
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: ["transparent", "#23233C"]
    }
  }
};
var brandDark = {
  themeName: "theme-brand-dark",
  theme: {
    color: colors$3,
    backgroundColor: "transparent",
    textStyle: textStyleDefault$3,
    title: {
      textStyle: textStyleDefault$3,
      subtextStyle: {
        ...textStyleDefault$3,
        color: "#B3B3BE"
      }
    },
    line: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "emptyCircle",
      smooth: false
    },
    radar: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "emptyCircle",
      smooth: false,
      splitArea: {
        areaStyle: {
          color: ["transparent", "#23233C"]
        }
      },
      axisName: {
        color: "#FFFFFF"
      },
      axisLine: {
        lineStyle: {
          color: "#FFFFFF"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#66667E"
        }
      },
      label: {
        textBorderColor: "#000028",
        textBorderWidth: 0
      }
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#66667E"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#66667E"
      },
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000028",
        textBorderWidth: 0
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#66667E"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        color: "#00CCCC"
      },
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000028",
        textBorderWidth: 1
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#66667E"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#66667E"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#66667E"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#66667E"
      },
      axisLabel: {
        color: "#FFFFFF"
      },
      title: {
        color: "#FFFFFF"
      },
      detail: {
        color: "#FFFFFF"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#00A327",
        color0: "#D72339",
        borderColor: "#00A327",
        borderColor0: "#D72339",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#00C1B6"
      },
      lineStyle: {
        width: 1,
        color: "#00C1B6"
      },
      symbolSize: 4,
      symbol: "emptyCircle",
      smooth: false,
      color: colors$3,
      label: {
        color: "#000028"
      }
    },
    categoryAxis: axisCommon$3,
    valueAxis: axisCommon$3,
    logAxis: axisCommon$3,
    timeAxis: axisCommon$3,
    toolbox: {
      iconStyle: {
        borderColor: "#B3B3BE"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#00FFB9"
        }
      }
    },
    legend: {
      textStyle: textStyleDefault$3
    },
    tooltip: {
      textStyle: {
        color: "#FFFFFF"
        /* si/sys/text/primary */
      },
      backgroundColor: "#2D2D45",
      borderColor: "#2D2D45",
      axisPointer: {
        lineStyle: {
          color: "#FFFFFF",
          width: "1"
        },
        crossStyle: {
          color: "#FFFFFF",
          width: "1"
        }
      }
    },
    timeline: {
      lineStyle: {
        color: "transparent",
        width: "1"
      },
      itemStyle: {
        color: "#01D65A",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#00CCCC",
        borderColor: "#00CCCC",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#00C1B6",
        borderColor: "#000028"
      },
      label: {
        color: "#FFFFFF"
      },
      emphasis: {
        itemStyle: {
          color: "#01D65A"
        },
        controlStyle: {
          color: "#00CCCC",
          borderColor: "#00CCCC",
          borderWidth: "1"
        },
        label: {
          color: "#FFFFFF"
        }
      }
    },
    visualMap: {
      color: ["#D72339", "#FF9000", "#FFD732"]
    },
    dataZoom: {
      handleSize: "100%",
      textStyle: {}
    },
    markPoint: {
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000028",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000028",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000028",
        textBorderWidth: 1
      }
    }
  }
};
const textStyleDefault$2 = {
  color: "#000028",
  fontFamily: 'Siemens Sans, "Siemens Sans", Arial, Helvetica, sans-serif'
};
const colors$2 = [
  "#009999",
  "#005159",
  "#00890E",
  "#1A747D",
  "#3664C6",
  "#002949",
  "#7353E5",
  "#553BA3",
  "#740089",
  "#D72339",
  "#4F153D",
  "#C04774",
  "#00237A",
  "#801100",
  "#805800",
  "#757563",
  "#4C4C68"
];
const axisCommon$2 = {
  axisLine: {
    show: true,
    lineStyle: {
      color: "#66667E"
    }
  },
  axisTick: {
    show: true,
    lineStyle: {
      color: "#66667E"
    }
  },
  axisLabel: {
    show: true,
    color: "#000028"
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: [
        "#E5E5E9"
        /* si/sys/border/4 */
      ]
    }
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: ["transparent", "#FFFFFF"]
    }
  }
};
var brandLight = {
  themeName: "theme-brand-light",
  theme: {
    color: colors$2,
    backgroundColor: "transparent",
    textStyle: textStyleDefault$2,
    title: {
      textStyle: textStyleDefault$2,
      subtextStyle: {
        ...textStyleDefault$2,
        color: "#4C4C68"
      }
    },
    line: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false
    },
    radar: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      splitArea: {
        areaStyle: {
          color: ["transparent", "#FFFFFF"]
        }
      },
      axisName: {
        color: "#000028"
      },
      axisLine: {
        lineStyle: {
          color: "#000028"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#9999A9"
        }
      },
      label: {
        textBorderColor: "#FFFFFF",
        textBorderWidth: 0
      }
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#9999A9"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#9999A9"
      },
      label: {
        color: "#000028",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 0
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#9999A9"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 1,
        borderColor: "#000028",
        color: "#006B80"
      },
      label: {
        color: "#000028",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 0
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#9999A9"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#9999A9"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#9999A9"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#9999A9"
      },
      axisLabel: {
        color: "#000028"
      },
      title: {
        color: "#000028"
      },
      detail: {
        color: "#000028"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#00A327",
        color0: "#D72339",
        borderColor: "#00A327",
        borderColor0: "#D72339",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#009999"
      },
      lineStyle: {
        width: "1",
        color: "#009999"
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      color: colors$2,
      label: {
        color: "#FFFFFF"
      }
    },
    categoryAxis: axisCommon$2,
    valueAxis: axisCommon$2,
    logAxis: axisCommon$2,
    timeAxis: axisCommon$2,
    toolbox: {
      iconStyle: {
        borderColor: "#4C4C68"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#005159"
        }
      }
    },
    legend: {
      textStyle: textStyleDefault$2
    },
    tooltip: {
      textStyle: {
        color: "#000028"
        /* si/sys/text/primary */
      },
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      axisPointer: {
        lineStyle: {
          color: "#000028",
          width: "1"
        },
        crossStyle: {
          color: "#000028",
          width: "1"
        }
      }
    },
    timeline: {
      lineStyle: {
        color: "transparent",
        width: "1"
      },
      itemStyle: {
        color: "#00890E",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#006B80",
        borderColor: "#006B80",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#009999",
        borderColor: "#FFFFFF"
      },
      label: {
        color: "#000028"
      },
      emphasis: {
        itemStyle: {
          color: "#00890E"
        },
        controlStyle: {
          color: "#006B80",
          borderColor: "#006B80",
          borderWidth: "1"
        },
        label: {
          color: "#000028"
        }
      }
    },
    visualMap: {
      color: ["#D72339", "#C75300", "#EDBF00"]
    },
    dataZoom: {
      handleSize: "undefined%",
      textStyle: {}
    },
    markPoint: {
      label: {
        color: "#000028",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "#000028",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "#000028",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    }
  }
};
const textStyleDefault$1 = {
  color: "#FFFFFF",
  fontFamily: "Arial, Helvetica, sans-serif"
};
const colors$1 = [
  "#00BDDA",
  "#00EAFF",
  "#01D65A",
  "#85E9D2",
  "#6895F6",
  "#CCF5F5",
  "#805CFF",
  "#BFB0F3",
  "#B95CC9",
  "#FF2626",
  "#E5659B",
  "#FF98C4",
  "#97C7FF",
  "#FF8000",
  "#FFC832",
  "#AAAA96",
  "#72848C"
];
const axisCommon$1 = {
  axisLine: {
    show: true,
    lineStyle: {
      color: "#919CA1"
    }
  },
  axisTick: {
    show: true,
    lineStyle: {
      color: "#919CA1"
    }
  },
  axisLabel: {
    show: true,
    color: "#FFFFFF"
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: [
        "#405158"
        /* si/sys/border/4 */
      ]
    }
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: ["transparent", "#1A272D"]
    }
  }
};
var classicDark = {
  themeName: "theme-classic-dark",
  theme: {
    color: colors$1,
    backgroundColor: "transparent",
    textStyle: textStyleDefault$1,
    title: {
      textStyle: textStyleDefault$1,
      subtextStyle: {
        ...textStyleDefault$1,
        color: "#AEB5B8"
      }
    },
    line: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false
    },
    radar: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      splitArea: {
        areaStyle: {
          color: ["transparent", "#1A272D"]
        }
      },
      axisName: {
        color: "#FFFFFF"
      },
      axisLine: {
        lineStyle: {
          color: "#FFFFFF"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#5B6A71"
        }
      },
      label: {
        textBorderColor: "#000609",
        textBorderWidth: 1
      }
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#5B6A71"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#5B6A71"
      },
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000609",
        textBorderWidth: 1
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#5B6A71"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        color: "#00C9E4"
      },
      label: {
        color: "#FFFFFF",
        textBorderWidth: 0
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#5B6A71"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#5B6A71"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#5B6A71"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#5B6A71"
      },
      axisLabel: {
        color: "#FFFFFF"
      },
      title: {
        color: "#FFFFFF"
      },
      detail: {
        color: "#FFFFFF"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#00A327",
        color0: "#D72323",
        borderColor: "#00A327",
        borderColor0: "#D72323",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#00BDDA"
      },
      lineStyle: {
        width: "1",
        color: "#00BDDA"
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      color: colors$1,
      label: {
        color: "#000609"
      }
    },
    categoryAxis: axisCommon$1,
    valueAxis: axisCommon$1,
    logAxis: axisCommon$1,
    timeAxis: axisCommon$1,
    toolbox: {
      iconStyle: {
        borderColor: "#AEB5B8"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#00EAFF"
        }
      }
    },
    legend: {
      textStyle: textStyleDefault$1
    },
    tooltip: {
      backgroundColor: "#243137",
      borderColor: "#243137",
      textStyle: {
        color: "#FFFFFF"
        /* si/sys/text/primary */
      },
      axisPointer: {
        lineStyle: {
          color: "#FFFFFF",
          width: "1"
        },
        crossStyle: {
          color: "#FFFFFF",
          width: "1"
        }
      }
    },
    timeline: {
      lineStyle: {
        color: "transparent",
        width: "1"
      },
      itemStyle: {
        color: "#01D65A",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#00C9E4",
        borderColor: "#00C9E4",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#00BDDA",
        borderColor: "#000609"
      },
      label: {
        color: "#FFFFFF"
      },
      emphasis: {
        itemStyle: {
          color: "#01D65A"
        },
        controlStyle: {
          color: "#00C9E4",
          borderColor: "#00C9E4",
          borderWidth: "1"
        },
        label: {
          color: "#FFFFFF"
        }
      }
    },
    visualMap: {
      color: ["#D72323", "#FF8000", "#FFC832"]
    },
    dataZoom: {
      handleSize: "undefined%",
      textStyle: {}
    },
    nameTextStyle: {
      color: "#FFFFFF"
    },
    markPoint: {
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000609",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000609",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "#FFFFFF",
        textBorderColor: "#000609",
        textBorderWidth: 1
      }
    }
  }
};
const textStyleDefault = {
  color: "#000609",
  fontFamily: "Arial, Helvetica, sans-serif"
};
const colors = [
  "#0096B4",
  "#005159",
  "#00890E",
  "#1A747D",
  "#3664C6",
  "#002949",
  "#7353E5",
  "#553BA3",
  "#740089",
  "#D72323",
  "#4F153D",
  "#C04774",
  "#00237A",
  "#643200",
  "#7B5A00",
  "#757563",
  "#405158"
];
const axisCommon = {
  axisLine: {
    show: true,
    lineStyle: {
      color: "#5B6A71"
    }
  },
  axisTick: {
    show: true,
    lineStyle: {
      color: "#5B6A71"
    }
  },
  axisLabel: {
    show: true,
    color: "#000609"
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: [
        "#EBEDEE"
        /* si/sys/border/4 */
      ]
    }
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: ["transparent", "#FFFFFF"]
    }
  }
};
var classicLight = {
  themeName: "theme-classic-light",
  theme: {
    color: colors,
    backgroundColor: "transparent",
    textStyle: textStyleDefault,
    title: {
      textStyle: textStyleDefault,
      subtextStyle: {
        ...textStyleDefault,
        color: "#405158"
      }
    },
    line: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false
    },
    radar: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      splitArea: {
        areaStyle: {
          color: ["transparent", "#FFFFFF"]
        }
      },
      axisName: {
        color: "#000609"
      },
      axisLine: {
        lineStyle: {
          color: "#000609"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#72848C"
        }
      },
      label: {
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#72848C"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#72848C"
      },
      label: {
        color: "#000609",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#72848C"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 1,
        borderColor: "#000609",
        color: "#006A87"
      },
      label: {
        color: "#000609",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#72848C"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#72848C"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#72848C"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#72848C"
      },
      axisLabel: {
        color: "#000609"
      },
      title: {
        color: "#000609"
      },
      detail: {
        color: "#000609"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#00A327",
        color0: "#D72323",
        borderColor: "#00A327",
        borderColor0: "#D72323",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#0096B4"
      },
      lineStyle: {
        width: "1",
        color: "#0096B4"
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      color: colors,
      label: {
        color: "#FFFFFF"
      }
    },
    categoryAxis: axisCommon,
    valueAxis: axisCommon,
    logAxis: axisCommon,
    timeAxis: axisCommon,
    toolbox: {
      iconStyle: {
        borderColor: "#405158"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#004F69"
        }
      }
    },
    legend: {
      textStyle: textStyleDefault
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      textStyle: {
        color: "#000609"
        /* si/sys/text/primary */
      },
      axisPointer: {
        lineStyle: {
          color: "#000609",
          width: "1"
        },
        crossStyle: {
          color: "#000609",
          width: "1"
        }
      }
    },
    timeline: {
      lineStyle: {
        color: "transparent",
        width: "1"
      },
      itemStyle: {
        color: "#00890E",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#006A87",
        borderColor: "#006A87",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#0096B4",
        borderColor: "#FFFFFF"
      },
      label: {
        color: "#000609"
      },
      emphasis: {
        itemStyle: {
          color: "#00890E"
        },
        controlStyle: {
          color: "#006A87",
          borderColor: "#006A87",
          borderWidth: "1"
        },
        label: {
          color: "#000609"
        }
      }
    },
    visualMap: {
      color: ["#D72323", "#BA5D00", "#FCB900"]
    },
    dataZoom: {
      handleSize: "undefined%",
      textStyle: {}
    },
    nameTextStyle: {
      color: "#000609"
    },
    markPoint: {
      label: {
        color: "#000609",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "#000609",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "#000609",
        textBorderColor: "#FFFFFF",
        textBorderWidth: 1
      }
    }
  }
};
function registerTheme(echartsInstance) {
  const echarts = echartsInstance ?? window.echarts;
  if (!echarts) {
    throw Error("echarts not found");
  }
  [classicDark, classicLight, brandDark, brandLight].forEach((themeBundle) => {
    echarts.registerTheme(themeBundle.themeName, themeBundle.theme);
  });
}
function resolveEChartThemeName() {
  const theme = themeSwitcher.getTheme();
  const mode = themeSwitcher.getMode();
  return `theme-${theme}-${mode}`;
}
function getComputedCSSProperty(cssCustomProperty) {
  return getComputedStyle(document.body).getPropertyValue(cssCustomProperty);
}
export {
  resolveEChartThemeName as a,
  getComputedCSSProperty as g,
  registerTheme as r
};
