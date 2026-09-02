import "./global-Do6maBom.js";
import "./init-BB6hGSJy.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-z-hdKcHr.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
await globalThis.ixInitPromise;
function initChart(options) {
  const theme = resolveEChartThemeName();
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options);
  return myChart2;
}
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const data = {
  evaporation: months.map(() => (Math.random() * 100).toFixed(2)),
  precipitation: months.map(() => (Math.random() * 200).toFixed(2)),
  temperature: months.map(() => (Math.random() * 30).toFixed(2))
};
function createYAxis(name, position, color, formatter, offset) {
  return {
    type: "value",
    name,
    position,
    offset,
    axisLabel: {
      formatter
    },
    axisTick: {
      lineStyle: {
        color
      }
    },
    axisLine: {
      lineStyle: {
        color
      }
    }
  };
}
function createSeries(name, yAxisIndex, data2, color) {
  return {
    name,
    type: "line",
    yAxisIndex,
    data: data2,
    lineStyle: {
      color
    },
    itemStyle: {
      color
    }
  };
}
function getOptions() {
  const themeChartList = [
    getComputedCSSProperty("--si-sys-data-categorical-2"),
    getComputedCSSProperty("--si-sys-data-categorical-4"),
    getComputedCSSProperty("--si-sys-data-categorical-1"),
    getComputedCSSProperty("--si-sys-data-categorical-6"),
    getComputedCSSProperty("--si-sys-data-categorical-17"),
    getComputedCSSProperty("--si-sys-data-categorical-5"),
    getComputedCSSProperty("--si-sys-data-categorical-13"),
    getComputedCSSProperty("--si-sys-data-sequential-royal-blue-4"),
    getComputedCSSProperty("--si-sys-data-categorical-8"),
    getComputedCSSProperty("--si-sys-data-categorical-7"),
    getComputedCSSProperty("--si-sys-data-categorical-9"),
    getComputedCSSProperty("--si-sys-data-categorical-11"),
    getComputedCSSProperty("--si-sys-data-categorical-12"),
    getComputedCSSProperty("--si-sys-data-sequential-orange-4"),
    getComputedCSSProperty("--si-sys-data-sequential-orange-1"),
    getComputedCSSProperty("--si-sys-data-sequential-sand-1"),
    getComputedCSSProperty("--si-sys-data-categorical-16")
  ];
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" }
    },
    grid: {
      right: "20%"
    },
    legend: {
      show: true,
      bottom: 0
    },
    xAxis: [
      {
        type: "category",
        axisTick: { alignWithLabel: true },
        data: months
      }
    ],
    yAxis: [
      createYAxis(
        "Evaporation",
        "right",
        themeChartList[0],
        "{value} ml"
      ),
      createYAxis(
        "Precipitation",
        "right",
        themeChartList[7],
        "{value} ml",
        80
      ),
      createYAxis(
        "Temperature",
        "left",
        themeChartList[12],
        "{value} °C"
      )
    ],
    series: [
      createSeries("Evaporation", 0, data.evaporation, themeChartList[0]),
      createSeries(
        "Precipitation",
        1,
        data.precipitation,
        themeChartList[7]
      ),
      createSeries(
        "Temperature",
        2,
        data.temperature,
        themeChartList[12]
      )
    ]
  };
}
registerTheme(echarts);
var myChart = initChart(getOptions());
const disposer = themeSwitcher.themeChanged.on(() => {
  myChart.dispose();
  myChart = initChart(getOptions());
});
window.onresize = function() {
  myChart.resize();
};
window.addEventListener("unload", () => {
  disposer.dispose();
});
