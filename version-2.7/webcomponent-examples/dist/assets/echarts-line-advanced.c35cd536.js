import "./global.7dd975c7.js";
import { g as getComputedCSSProperty, r as registerEChartsThemes, c as convertThemeName } from "./index.esm.733689a6.js";
import "./index.3225a722.js";
import { t as themeSwitcher } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.918cefbc.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-4b3f8800.9a447ac6.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
const echartsLineAdvanced = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme)
  );
  myChart2.setOption(options2);
  return myChart2;
}
const dates = Array.from(
  { length: 2025 - 2013 },
  (_, i) => (2013 + i).toString()
);
const stockData = [
  77.67,
  82.81,
  84.09,
  91.75,
  118.15,
  107.48,
  99.36,
  93.07,
  137.18,
  104.38,
  156.48,
  168.52
];
const options = {
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: dates },
  yAxis: {
    type: "value",
    splitLine: { lineStyle: { type: "dashed" } }
  },
  series: [
    {
      type: "line",
      data: stockData,
      smooth: true,
      lineStyle: { width: 4, shadowBlur: 10 },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getComputedCSSProperty("color-primary")
          },
          { offset: 1, color: "transparent" }
        ])
      },
      markPoint: {
        data: [
          { type: "max", name: "Max", symbol: "circle", symbolSize: 60 },
          { type: "min", name: "Min", symbol: "circle", symbolSize: 60 }
        ],
        label: {
          fontWeight: "bold",
          color: getComputedCSSProperty("color-inv-contrast-text")
        }
      },
      markLine: {
        data: [{ type: "average", name: "Avg" }],
        lineStyle: { type: "dashed" }
      }
    }
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
