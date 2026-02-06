import "./global-wi9VneMU.js";
import "./init-Bt8gb6Dd.js";
import { r as registerTheme } from "./index-9C4SZZZA.js";
import "./index-ShyC1ag0.js";
import { t as themeSwitcher } from "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DCXtePY2-Cy6rmdf-.js";
import "./index-8HpPmDK_-DinFJk0z.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
await globalThis.ixInitPromise;
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const data = {
  years: ["2023", "2022", "2021", "2020", "2019"],
  salesEurope: [87, 22, 28, 43, 79],
  salesUS: [35, 24, 33, 5, 40],
  salesChina: [19, 44, 23, 5, 10]
};
const seriesData = [
  { name: "Europe", data: data.salesEurope },
  { name: "U.S", data: data.salesUS },
  { name: "China", data: data.salesChina }
];
const series = seriesData.map(({ name, data: data2 }) => ({
  name,
  data: data2,
  type: "bar",
  stack: "x"
}));
const options = {
  xAxis: {
    type: "value",
    name: "Revenue (in Millions of USD)",
    nameLocation: "middle",
    nameGap: 40
  },
  yAxis: {
    type: "category",
    data: data.years,
    name: "Years",
    nameLocation: "end"
  },
  legend: {
    show: true,
    bottom: "0",
    left: "0"
  },
  series
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
