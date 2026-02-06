import "./global-wi9VneMU.js";
import "./init-Bt8gb6Dd.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-9C4SZZZA.js";
import "./index-ShyC1ag0.js";
import { t as themeSwitcher } from "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DCXtePY2-Cy6rmdf-.js";
import "./index-8HpPmDK_-DinFJk0z.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
await globalThis.ixInitPromise;
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
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
const themeChartList = Array.from(
  { length: 17 },
  (_, i) => getComputedCSSProperty(`chart-${i + 1}`)
);
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
const options = {
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" }
  },
  grid: {
    right: "20%"
  },
  legend: {
    show: true,
    bottom: "0",
    left: "0"
  },
  xAxis: [
    {
      type: "category",
      axisTick: { alignWithLabel: true },
      data: months
    }
  ],
  yAxis: [
    createYAxis("Evaporation", "right", themeChartList[0], "{value} ml"),
    createYAxis(
      "Precipitation",
      "right",
      themeChartList[7],
      "{value} ml",
      80
    ),
    createYAxis("Temperature", "left", themeChartList[12], "{value} °C")
  ],
  series: [
    createSeries("Evaporation", 0, data.evaporation, themeChartList[0]),
    createSeries(
      "Precipitation",
      1,
      data.precipitation,
      themeChartList[7]
    ),
    createSeries("Temperature", 2, data.temperature, themeChartList[12])
  ]
};
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
