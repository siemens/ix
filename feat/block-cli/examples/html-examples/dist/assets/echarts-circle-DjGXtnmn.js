import "./global-Cr1KQvOo.js";
import "./init-DBI3EHNp.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-VcTKdkWt.js";
import "./index-CoWPLQ06.js";
import { t as themeSwitcher } from "./theme-switcher-JLPGWWvy-Dx1a6sv8.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-uPRyVbMt-Brti2DgW.js";
import "./index-ClV1Tffv-Cwm_ckfF.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
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
