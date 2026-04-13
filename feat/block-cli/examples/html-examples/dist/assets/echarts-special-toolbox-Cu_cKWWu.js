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
const data = {
  months: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [150, 230, 224, 218, 135, 147, 260]
};
function initChart(options2) {
  const theme = resolveEChartThemeName();
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const options = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      restore: {},
      saveAsImage: {},
      magicType: {
        type: ["line", "bar"]
      },
      dataView: {
        show: true
      }
    }
  },
  xAxis: {
    type: "category",
    data: data.months
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.values,
      type: "line",
      step: "end"
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
