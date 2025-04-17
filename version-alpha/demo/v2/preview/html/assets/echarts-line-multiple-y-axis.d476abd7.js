import "./global.1f5cc68d.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index.660df32e.js";
import "./index.76650ad5.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./init.d2f0b7c3.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
const echartsLineMultipleYAxis = "";
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
    createYAxis("Temperature", "left", themeChartList[12], "{value} \xB0C")
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
