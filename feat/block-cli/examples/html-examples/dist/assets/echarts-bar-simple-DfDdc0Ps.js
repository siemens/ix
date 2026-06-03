import "./global-DUJ9DtiD.js";
import "./init-DphxZyE4.js";
import { r as registerTheme, a as resolveEChartThemeName } from "./index-CIm9Z0Vg.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
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
