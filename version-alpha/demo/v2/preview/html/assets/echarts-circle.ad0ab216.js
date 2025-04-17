import "./global.1f5cc68d.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index.660df32e.js";
import "./index.76650ad5.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./init.d2f0b7c3.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
const echartsCircle = "";
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
