import "./global-Cx3A0XQN.js";
import "./init-BOE_ye2V.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-CIm9Z0Vg.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
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
      bottom: 0
    },
    series: [
      {
        bottom: 16,
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
