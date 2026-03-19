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
  { value: 72.17, name: "Windows" },
  { value: 15.42, name: "macOS" },
  { value: 4.03, name: "Linux" },
  { value: 2.27, name: "Chrome OS" },
  { value: 6.11, name: "Other" }
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
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
