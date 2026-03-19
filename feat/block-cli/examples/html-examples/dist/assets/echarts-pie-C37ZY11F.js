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
