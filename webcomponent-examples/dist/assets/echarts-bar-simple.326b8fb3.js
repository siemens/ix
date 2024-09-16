import "./global.00f6d77e.js";
/* empty css                 */import { r as registerEChartsThemes, c as convertThemeName } from "./index.esm.40fdebf6.js";
import "./index.9bd4b272.js";
import { t as themeSwitcher } from "./theme-switcher-b10fb4da.be4a72f4.js";
import "./init.48ede379.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-54740f80.103c72e0.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme)
  );
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
registerEChartsThemes(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
