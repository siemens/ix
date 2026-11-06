import "./global-BFmC_PbI.js";
import "./init-C5YnK6N4.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-sGmm-1dZ.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
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
      bottom: 0
    },
    series: [
      {
        name: "CO2 emissions from<",
        type: "pie",
        radius: "80%",
        data,
        label: {
          show: true,
          color: getComputedCSSProperty(
            "--si-sys-color-background-neutral"
          )
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
