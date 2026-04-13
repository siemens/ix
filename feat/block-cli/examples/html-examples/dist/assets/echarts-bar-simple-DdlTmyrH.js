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
  products: [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
    "Product F"
  ],
  sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4]
};
const options = {
  xAxis: {
    data: data.products,
    name: "Product",
    nameLocation: "end"
  },
  yAxis: {
    name: "Number of sold products \n (in Mio)",
    nameLocation: "end"
  },
  legend: {
    show: true
  },
  series: [
    {
      data: data.sales,
      type: "bar"
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
