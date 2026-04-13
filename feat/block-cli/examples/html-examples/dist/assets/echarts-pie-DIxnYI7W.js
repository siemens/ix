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
const data = [
  { value: 29.4, name: "China" },
  { value: 14.3, name: "U.S" },
  { value: 9.8, name: "EEA" },
  { value: 6.8, name: "India" },
  { value: 4.9, name: "Russia" },
  { value: 3.5, name: "Japan" },
  { value: 31.5, name: "Other" }
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
        name: "CO2 emissions from<",
        type: "pie",
        radius: "80%",
        data,
        label: {
          show: true,
          color: getComputedCSSProperty("color-neutral")
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
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
