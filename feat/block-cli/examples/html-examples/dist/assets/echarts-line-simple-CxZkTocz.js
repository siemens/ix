import "./global-CtBDOAVb.js";
import "./init-BauzXIH0.js";
import { r as registerTheme, a as resolveEChartThemeName } from "./index-BXDOBI09.js";
import "./index-Bxr9lWwd.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-C4Qfy2jB-BDz70pVv.js";
import "./index-Dn2eQInl-mXhHymhu.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
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
