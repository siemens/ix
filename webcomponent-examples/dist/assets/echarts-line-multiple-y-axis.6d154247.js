import "./global.2bfd6008.js";
import { g as getComputedCSSProperty, r as registerEChartsThemes, c as convertThemeName } from "./index.esm.40fdebf6.js";
import "./index.50971e87.js";
import { t as themeSwitcher } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.aa12a02f.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-101eef04.04114a11.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
const echartsLineMultipleYAxis = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme)
  );
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
registerEChartsThemes(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
