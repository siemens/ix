const colors$3 = [
  "#00C1B6",
  "#85E9D2",
  "#3664C6",
  "#00FFB9",
  "#6895F6",
  "#CCF5F5",
  "#805CFF",
  "#BFB0F3",
  "#B95CC9",
  "#BE5925",
  "#FF98C4",
  "#E5659B",
  "#97C7FF",
  "#FFBC66",
  "#FFF7D6",
  "#AAAA96",
  "#FFBC66"
];
var brandDark = {
  themeName: "theme-brand-dark",
  theme: {
    color: colors$3,
    backgroundColor: "rgba(0,0,0,0)",
    textStyle: {},
    title: {
      textStyle: {
        color: "#ffffff"
      },
      subtextStyle: {
        color: "#ffffff"
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
      smooth: false
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#ffffff"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#ff2640",
        color0: "#01d65a",
        borderColor: "#ff2640",
        borderColor0: "#01d65a",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      },
      lineStyle: {
        width: 1,
        color: "#ffffff"
      },
      symbolSize: 4,
      symbol: "emptyCircle",
      smooth: false,
      color: colors$3,
      label: {
        color: "#000000"
      }
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisLabel: {
        show: true,
        color: "#ffffff"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(0,0,0,0)", "rgba(255,255,255,0.1)"]
        }
      }
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisLabel: {
        show: true,
        color: "#ffffff"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(0,0,0,0)", "rgba(255,255,255,0.1)"]
        }
      }
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisLabel: {
        show: true,
        color: "#ffffff"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(0,0,0,0)", "rgba(255,255,255,0.1)"]
        }
      }
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.35)"
        }
      },
      axisLabel: {
        show: true,
        color: "#ffffff"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(0,0,0,0)", "rgba(255,255,255,0.1)"]
        }
      }
    },
    toolbox: {
      iconStyle: {
        borderColor: "#ffffff"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#00ffb9"
        }
      }
    },
    legend: {
      textStyle: {
        color: "#ffffff"
      }
    },
    tooltip: {
      backgroundColor: "#23233c",
      borderColor: "#23233c",
      textStyle: {
        color: "#ffffff"
      },
      axisPointer: {
        lineStyle: {
          color: "#ffffff",
          width: "1"
        },
        crossStyle: {
          color: "#ffffff",
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
        color: "#ffffff",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#00cccc",
        borderColor: "#00cccc",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#00ffb9",
        borderColor: "#000028"
      },
      label: {
        color: "#ffffff"
      },
      emphasis: {
        itemStyle: {
          color: "#ffffff"
        },
        controlStyle: {
          color: "#00cccc",
          borderColor: "#00cccc",
          borderWidth: "1"
        },
        label: {
          color: "#ffffff"
        }
      }
    },
    visualMap: {
      color: ["#ff2640", "#ff9000", "#ffd732"]
    },
    dataZoom: {
      handleSize: "undefined%",
      textStyle: {}
    },
    nameTextStyle: {
      color: "#fff"
    },
    markPoint: {
      label: {
        color: "#fff",
        textBorderColor: "#000028",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "#fff",
        textBorderColor: "#000028",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "#fff",
        textBorderColor: "#000028",
        textBorderWidth: 1
      }
    }
  }
};
const colors$2 = [
  "#009999",
  "#005159",
  "#00004A",
  "#1A747D",
  "#3664C6",
  "#002949",
  "#7353E5",
  "#553BA3",
  "#740089",
  "#BE5925",
  "#4F153D",
  "#C04774",
  "#00237A",
  "#801100",
  "#805800",
  "#5E5E4A",
  "#801100"
];
var brandLight = {
  themeName: "theme-brand-light",
  theme: {
    color: colors$2,
    backgroundColor: "rgba(0,0,0,0)",
    textStyle: {},
    title: {
      textStyle: {
        color: "#000028"
      },
      subtextStyle: {
        color: "#000028"
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
      smooth: false
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#000028"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#01893a",
        color0: "#d72339",
        borderColor: "#01893a",
        borderColor0: "#d72339",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000028"
      },
      lineStyle: {
        width: "1",
        color: "#000028"
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      color: colors$2,
      label: {
        color: "#ffffff"
      }
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "#000028"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,40,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "#000028"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,40,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "#000028"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,40,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,40,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "#000028"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,40,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    toolbox: {
      iconStyle: {
        borderColor: "#000028"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#196269"
        }
      }
    },
    legend: {
      textStyle: {
        color: "#000028"
      }
    },
    tooltip: {
      backgroundColor: "#f3f3f0",
      borderColor: "#f3f3f0",
      textStyle: {
        color: "#000028"
      },
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
        color: "#000028",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#007993",
        borderColor: "#007993",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#196269",
        borderColor: "#ffffff"
      },
      label: {
        color: "#000028"
      },
      emphasis: {
        itemStyle: {
          color: "#000028"
        },
        controlStyle: {
          color: "#007993",
          borderColor: "#007993",
          borderWidth: "1"
        },
        label: {
          color: "#000028"
        }
      }
    },
    visualMap: {
      color: ["#d72339", "#e96401", "#e9c32a"]
    },
    dataZoom: {
      handleSize: "undefined%",
      textStyle: {}
    },
    nameTextStyle: {
      color: "#000028"
    },
    markPoint: {
      label: {
        color: "#000028",
        textBorderColor: "#fff",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "#000028",
        textBorderColor: "#fff",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "#000028",
        textBorderColor: "#fff",
        textBorderWidth: 1
      }
    }
  }
};
const colors$1 = [
  "#00C2CC",
  "#94FFC9",
  "#3664C6",
  "#00FFE7",
  "#42C6FF",
  "#A3EEFF",
  "#B999FF",
  "#9EA3FF",
  "#D08FFF",
  "#EF9A9A",
  "#F38FC2",
  "#ED85FF",
  "#7AAAFF",
  "#FFB180",
  "#CACAB4",
  "#AAAA96",
  "#90B4C5"
];
var classicDark = {
  themeName: "theme-classic-dark",
  theme: {
    color: colors$1,
    backgroundColor: "rgba(0,0,0,0)",
    textStyle: {},
    title: {
      textStyle: {
        color: "#ffffff"
      },
      subtextStyle: {
        color: "#ffffff"
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
      smooth: false
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#ffffff"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#40c200",
        color0: "#fe0137",
        borderColor: "#40c200",
        borderColor0: "#fe0137",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ffffff"
      },
      lineStyle: {
        width: "1",
        color: "#ffffff"
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      color: colors$1,
      label: {
        color: "#000000"
      }
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(255,255,255,0.85)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(255,255,255,0.85)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(255,255,255,0.85)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(255,255,255,0.85)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    toolbox: {
      iconStyle: {
        borderColor: "#ffffff"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#ffffff"
        }
      }
    },
    legend: {
      textStyle: {
        color: "#ffffff"
      }
    },
    tooltip: {
      backgroundColor: "#283236",
      borderColor: "#283236",
      textStyle: {
        color: "rgba(245, 252, 255, .93)"
      },
      axisPointer: {
        lineStyle: {
          color: "#ffffff",
          width: "1"
        },
        crossStyle: {
          color: "#ffffff",
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
        color: "#ffffff",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#41aaaa",
        borderColor: "#41aaaa",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#41aaaa",
        borderColor: "transparent"
      },
      label: {
        color: "#ffffff"
      },
      emphasis: {
        itemStyle: {
          color: "#ffffff"
        },
        controlStyle: {
          color: "#41aaaa",
          borderColor: "#41aaaa",
          borderWidth: "1"
        },
        label: {
          color: "#ffffff"
        }
      }
    },
    visualMap: {
      color: ["#fe0137", "#eb780a", "#ffb900"]
    },
    dataZoom: {
      handleSize: "undefined%",
      textStyle: {}
    },
    nameTextStyle: {
      color: "rgba(245, 252, 255, .93)"
    },
    markPoint: {
      label: {
        color: "rgba(245, 252, 255, .93)",
        textBorderColor: "#000",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "rgba(245, 252, 255, .93)",
        textBorderColor: "#000",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "rgba(245, 252, 255, .93)",
        textBorderColor: "#000",
        textBorderWidth: 1
      }
    }
  }
};
const colors = [
  "#00838F",
  "#00572B",
  "#0041D6",
  "#008A7C",
  "#0076A8",
  "#003C61",
  "#7C40FF",
  "#4A52F2",
  "#900EEC",
  "#9E5833",
  "#6F2542",
  "#AA32BE",
  "#182171",
  "#B74E2A",
  "#73735E",
  "#7A8000",
  "#61778C"
];
var classicLight = {
  themeName: "theme-classic-light",
  theme: {
    color: colors,
    backgroundColor: "rgba(0,0,0,0)",
    textStyle: {},
    title: {
      textStyle: {
        color: "#000000"
      },
      subtextStyle: {
        color: "#000000"
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
      smooth: false
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#000000"
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#339b00",
        color0: "#dc0031",
        borderColor: "#339b00",
        borderColor0: "#dc0031",
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#000000"
      },
      lineStyle: {
        width: "1",
        color: "#000000"
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      color: colors,
      label: {
        color: "#ffffff"
      }
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(0,0,0,0.75)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,0,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(0,0,0,0.75)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,0,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(0,0,0,0.75)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,0,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "rgba(0,0,0,0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "rgba(0,0,0,0.75)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["rgba(0,0,0,0.1)"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
        }
      }
    },
    toolbox: {
      iconStyle: {
        borderColor: "#000000"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#000000"
        }
      }
    },
    legend: {
      textStyle: {
        color: "#000000"
      }
    },
    tooltip: {
      backgroundColor: "#eff0f1",
      borderColor: "#eff0f1",
      textStyle: {
        color: "rgba(0, 10, 20, .9)"
      },
      axisPointer: {
        lineStyle: {
          color: "#000000",
          width: "1"
        },
        crossStyle: {
          color: "#000000",
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
        color: "#000000",
        borderWidth: "1"
      },
      controlStyle: {
        color: "#0e777c",
        borderColor: "#0e777c",
        borderWidth: "1"
      },
      checkpointStyle: {
        color: "#0e777c",
        borderColor: "#ffffff"
      },
      label: {
        color: "#000000"
      },
      emphasis: {
        itemStyle: {
          color: "#000000"
        },
        controlStyle: {
          color: "#0e777c",
          borderColor: "#0e777c",
          borderWidth: "1"
        },
        label: {
          color: "#000000"
        }
      }
    },
    visualMap: {
      color: ["#dc0031", "#ff8d00", "#f0b800"]
    },
    dataZoom: {
      handleSize: "undefined%",
      textStyle: {}
    },
    nameTextStyle: {
      color: "rgba(0, 10, 20, .9)"
    },
    markPoint: {
      label: {
        color: "rgba(0, 10, 20, .9)",
        textBorderColor: "#fff",
        textBorderWidth: 1
      }
    },
    markLine: {
      label: {
        color: "rgba(0, 10, 20, .9)",
        textBorderColor: "#fff",
        textBorderWidth: 1
      }
    },
    markArea: {
      label: {
        color: "rgba(0, 10, 20, .9)",
        textBorderColor: "#fff",
        textBorderWidth: 1
      }
    }
  }
};
function registerTheme(echartsInstance) {
  const echarts = echartsInstance !== null && echartsInstance !== void 0 ? echartsInstance : window.echarts;
  if (!echarts) {
    throw Error("echarts not found");
  }
  [classicDark, classicLight, brandDark, brandLight].forEach((themeBundle) => {
    echarts.registerTheme(themeBundle.themeName, themeBundle.theme);
  });
}
function getComputedCSSProperty(cssProperty) {
  return getComputedStyle(document.body).getPropertyValue(`--theme-${cssProperty}`);
}
export {
  getComputedCSSProperty as g,
  registerTheme as r
};
