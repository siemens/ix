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
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
