import "./global-Dfa5QLOG.js";
import "./init-BUCeZmFF.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-CLNaQ2Tt.js";
import "./index-D4fdm_sf.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-1XS3_9yD-CROtOmyT.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-BItjjwRI-B-kajtah.js";
import "./index-DLhpBBEI-C3tPjcQ4.js";
await globalThis.ixInitPromise;
function initChart(options) {
  const theme = resolveEChartThemeName();
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options);
  return myChart2;
}
const data = [
  { value: 72.17, name: "Windows" },
  { value: 15.42, name: "macOS" },
  { value: 4.03, name: "Linux" },
  { value: 2.27, name: "Chrome OS" },
  { value: 6.11, name: "Other" }
];
function getOptions() {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      icon: "rect",
      bottom: "0",
      left: "0"
    },
    series: [
      {
        name: "OS Share",
        type: "pie",
        radius: ["60%", "90%"],
        label: {
          show: true,
          color: getComputedCSSProperty("color-neutral")
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: true
        },
        data
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
