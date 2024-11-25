import "./global.2bfd6008.js";
import { r as registerEChartsThemes, c as convertThemeName } from "./index.esm.40fdebf6.js";
import "./index.50971e87.js";
import { t as themeSwitcher } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.aa12a02f.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-101eef04.04114a11.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
const echartsEmptyState = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme)
  );
  myChart2.setOption(options2);
  return myChart2;
}
function toggleOverlay() {
  const overlay2 = document.getElementById("empty-state-container");
  if (overlay2.style.display === "block") {
    overlay2.style.display = "none";
  } else {
    overlay2.style.display = "block";
  }
}
async function loadData(chart) {
  toggleOverlay();
  chart.showLoading({
    text: "Loading...",
    textStyle: {
      fontSize: 30
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  chart.hideLoading();
  toggleOverlay();
}
const data = {
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  value: []
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
const overlay = document.getElementById("empty-state-container");
if (data.value.length === 0) {
  overlay.style.display = "block";
} else {
  overlay.style.display = "none";
}
registerEChartsThemes(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
(async function() {
  await window.customElements.whenDefined("ix-empty-state");
  const emptyState = document.querySelector("ix-empty-state");
  emptyState.addEventListener(
    "actionClick",
    (event) => loadData(myChart)
  );
})();
window.onresize = function() {
  myChart.resize();
};
