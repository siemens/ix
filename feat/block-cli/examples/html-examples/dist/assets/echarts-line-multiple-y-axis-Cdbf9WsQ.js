import "./global-B1t25MFd.js";
import "./init-D7MT-x0x.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-zQyUnTuj.js";
import "./index-2vJwyO0t.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-1XS3_9yD-CROtOmyT.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-KsI1kigJ-CqWh--pY.js";
import "./index-CwfZ4aN6-mXhHymhu.js";
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
  const themeChartList = Array.from(
    { length: 17 },
    (_, i) => getComputedCSSProperty(`chart-${i + 1}`)
  );
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
