import "./global.7dd975c7.js";
import { r as registerEChartsThemes, c as convertThemeName } from "./index.esm.733689a6.js";
import "./index.3225a722.js";
import { t as themeSwitcher } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.918cefbc.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-4b3f8800.9a447ac6.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
const echartsBarHorizontalStacked = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme)
  );
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
registerEChartsThemes(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
