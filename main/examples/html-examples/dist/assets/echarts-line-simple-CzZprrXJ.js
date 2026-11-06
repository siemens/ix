import "./global-BFmC_PbI.js";
import "./init-C5YnK6N4.js";
import { r as registerTheme, a as resolveEChartThemeName } from "./index-sGmm-1dZ.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
await globalThis.ixInitPromise;
function initChart(options2) {
  const theme = resolveEChartThemeName();
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const data = {
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  value: [150, 230, 224, 218, 135, 147, 260]
};
const options = {
  xAxis: {
    type: "category",
    data: data.weekdays
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.value,
      type: "line"
    }
  ]
};
registerTheme(echarts);
var myChart = initChart(options);
const disposer = themeSwitcher.themeChanged.on(() => {
  myChart.dispose();
  myChart = initChart(options);
});
window.onresize = function() {
  myChart.resize();
};
window.addEventListener("unload", () => {
  disposer.dispose();
});
