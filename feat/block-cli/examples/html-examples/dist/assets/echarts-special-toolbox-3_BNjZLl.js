import "./global-Cr1KQvOo.js";
import "./init-DBI3EHNp.js";
import { r as registerTheme } from "./index-VcTKdkWt.js";
import "./index-CoWPLQ06.js";
import { t as themeSwitcher } from "./theme-switcher-JLPGWWvy-Dx1a6sv8.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-uPRyVbMt-Brti2DgW.js";
import "./index-ClV1Tffv-Cwm_ckfF.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
await globalThis.ixInitPromise;
const data = {
  months: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [150, 230, 224, 218, 135, 147, 260]
};
function initChart(theme, options2) {
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
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
