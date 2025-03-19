import "./global.aa474cf6.js";
import { r as registerTheme } from "./index.660df32e.js";
import "./index.bf224a66.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./init.8fde940e.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
const echartsSpecialToolbox = "";
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
