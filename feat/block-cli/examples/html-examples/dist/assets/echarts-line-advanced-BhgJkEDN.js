import "./global-CtBDOAVb.js";
import "./init-BauzXIH0.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-BXDOBI09.js";
import "./index-Bxr9lWwd.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-C4Qfy2jB-BDz70pVv.js";
import "./index-Dn2eQInl-mXhHymhu.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
await globalThis.ixInitPromise;
function initChart(options) {
  const theme = resolveEChartThemeName();
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options);
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
function getOptions() {
  return {
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
