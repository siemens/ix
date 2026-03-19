import "./global-C_dy4gBz.js";
import "./init-BbGiJe2Q.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-VcTKdkWt.js";
import "./index-OaqJ8Udo.js";
import { t as themeSwitcher } from "./theme-switcher-CeIh1wFd-CqevnQ5w.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DJRSsubD-CRBh3lJr.js";
import "./index-DFdo1y_u-D_8X33yw.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-CZUo7Z4G-DSUp_D74.js";
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
