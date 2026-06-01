import "./global-Ba1Wm6ph.js";
import "./init-Ds7NGRa2.js";
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
