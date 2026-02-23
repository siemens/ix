import "./global-BlVZeLef.js";
import "./init-DI8ZEhG0.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-9C4SZZZA.js";
import "./index-Clh-rS1I.js";
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
const data = [
  { value: 29.4, name: "China" },
  { value: 14.3, name: "U.S" },
  { value: 9.8, name: "EEA" },
  { value: 6.8, name: "India" },
  { value: 4.9, name: "Russia" },
  { value: 3.5, name: "Japan" },
  { value: 31.5, name: "Other" }
];
const options = {
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
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
